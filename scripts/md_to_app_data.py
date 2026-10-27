#!/usr/bin/env python3
"""
===============================================================================
Compilador e Sincronizador de Conteúdo Markdown (.md) -> JSON (ACEPVH 2026)
Repositório Oficial: https://github.com/diegobragah1/acepvh
Uso:
  python3 ./scripts/md_to_app_data.py --content-dir ./content --data-dir ./data
===============================================================================
"""
import argparse
import glob
import json
import os
import re

SUBJECT_FOLDERS = {
    "esp": "conhecimentos-especificos",
    "leg": "legislacao",
    "por": "portugues",
    "rlm": "raciocinio-logico",
    "atu": "conhecimentos-gerais",
}

def parse_frontmatter(md_text):
    m = re.match(r"^---\s*\n(.*?)\n---\s*\n", md_text, re.DOTALL)
    if not m:
        return {}
    fm_raw = m.group(1)
    meta = {}
    for line in fm_raw.splitlines():
        if ":" in line and not line.startswith(" "):
            k, v = line.split(":", 1)
            k = k.strip()
            v = v.strip()
            if v.startswith('"') and v.endswith('"'):
                meta[k] = v[1:-1].replace('\"', '"')
            elif v.startswith("[") and v.endswith("]"):
                try:
                    meta[k] = json.loads(v)
                except Exception:
                    meta[k] = v
            elif v.isdigit():
                meta[k] = int(v)
            else:
                meta[k] = v
    return meta

def simple_md_to_html(md_str):
    lines = md_str.strip().splitlines()
    html_parts = ['<div class="space-y-3">']
    in_list = False
    in_table = False
    table_rows = []

    def flush_table():
        nonlocal in_table, table_rows
        if not in_table or not table_rows:
            return ""
        in_table = False
        header = table_rows[0]
        body = table_rows[2:] if len(table_rows) > 2 else []
        table_rows = []
        th_html = "".join(f'<th class="p-2 border border-slate-300 text-left">{c}</th>' for c in header)
        trs_html = ""
        for r in body:
            tds = "".join(f'<td class="p-2 border border-slate-200 align-top">{c}</td>' for c in r)
            trs_html += f'<tr class="bg-white hover:bg-slate-50">{tds}</tr>'
        return f'<div class="overflow-x-auto my-2"><table class="min-w-full text-xs border border-slate-300"><thead class="bg-slate-800 text-white"><tr>{th_html}</tr></thead><tbody>{trs_html}</tbody></table></div>'

    def fmt_inline(s):
        s = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", s)
        s = re.sub(r"\*(.+?)\*", r"<em>\1</em>", s)
        s = re.sub(r"`(.+?)`", r"<code>\1</code>", s)
        return s

    for line in lines:
        stripped = line.strip()
        if stripped.startswith("|") and stripped.endswith("|"):
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            in_table = True
            cells = [fmt_inline(c.strip()) for c in stripped[1:-1].split("|")]
            table_rows.append(cells)
            continue
        elif in_table:
            html_parts.append(flush_table())

        if not stripped:
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            continue

        if stripped.startswith("#### "):
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            html_parts.append(f'<h4 class="font-extrabold text-slate-900 text-sm sm:text-base border-b border-slate-200 pb-1">{fmt_inline(stripped[5:])}</h4>')
        elif stripped.startswith("##### "):
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            html_parts.append(f'<h5 class="font-bold text-teal-900 text-xs sm:text-sm">{fmt_inline(stripped[6:])}</h5>')
        elif stripped.startswith("- "):
            if not in_list:
                html_parts.append('<ul class="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-800">')
                in_list = True
            html_parts.append(f"<li>{fmt_inline(stripped[2:])}</li>")
        elif stripped.startswith("> "):
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            html_parts.append(f'<blockquote class="bg-slate-100 border-l-4 border-slate-500 p-3 rounded-r-lg italic text-xs sm:text-sm">{fmt_inline(stripped[2:])}</blockquote>')
        else:
            if in_list:
                html_parts.append("</ul>")
                in_list = False
            html_parts.append(f'<p class="text-xs sm:text-sm text-slate-800 leading-relaxed">{fmt_inline(stripped)}</p>')

    if in_table:
        html_parts.append(flush_table())
    if in_list:
        html_parts.append("</ul>")
    html_parts.append("</div>")
    return "\n".join(html_parts)

def extract_lesson_from_md(md_path):
    with open(md_path, "r", encoding="utf-8") as f:
        md_text = f.read()
    meta = parse_frontmatter(md_text)
    lid = meta.get("id", "")
    if not lid or lid.startswith("00_") or lid in ("catalogo_94_fontes_edital", "fichas_14_endemias_liraa_roedores", "sources-fontes-verificaveis"):
        return None

    json_blocks = re.findall(r"```json\s*\n(\{.*?\})\s*\n```", md_text, re.DOTALL)
    blocks = []
    for jb in json_blocks:
        try:
            b_obj = json.loads(jb)
            modo_a_html = b_obj.get("modoA") or simple_md_to_html(b_obj.get("modoA_markdown", ""))
            modo_b_html = b_obj.get("modoB") or simple_md_to_html(b_obj.get("modoB_markdown", ""))
            blocks.append({
                "title": b_obj["title"],
                "modoA_markdown": b_obj.get("modoA_markdown", ""),
                "modoB_markdown": b_obj.get("modoB_markdown", ""),
                "modoA": modo_a_html,
                "modoB": modo_b_html,
                "questions": b_obj.get("questions", []),
                "flashcards": b_obj.get("flashcards", [])
            })
        except Exception as e:
            print(f"Aviso ao ler bloco JSON em {md_path}: {e}")

    cat = meta.get("cat", "esp")
    subj_folder = SUBJECT_FOLDERS.get(cat, "conhecimentos-especificos")
    slug = meta.get("slug", lid)
    q_cnt = sum(len(b.get("questions", [])) for b in blocks)
    f_cnt = sum(len(b.get("flashcards", [])) for b in blocks)

    return {
        "id": lid,
        "num": int(meta.get("num", 99)),
        "slug": slug,
        "subjectFolder": subj_folder,
        "mdPath": meta.get("mdPath", f"./content/{subj_folder}/{slug}.md"),
        "mdLegacyPath": f"./content/{lid}.md",
        "cat": cat,
        "catName": meta.get("catName") or meta.get("materia", ""),
        "weight": meta.get("weight", ""),
        "title": meta.get("title") or meta.get("titulo", ""),
        "editalRef": meta.get("editalRef", ""),
        "auditBadge": meta.get("auditBadge", "AUDITADO"),
        "sources": meta.get("sources", []),
        "questionsCount": q_cnt,
        "flashcardsCount": f_cnt,
        "blocks": blocks
    }

def main():
    parser = argparse.ArgumentParser(description="Compila arquivos .md e atualiza data/app_data.json, data/aulas.json e data/materias.json")
    parser.add_argument("--content-dir", default="./content", help="Diretório raiz de conteúdos Markdown")
    parser.add_argument("--data-dir", default="./data", help="Diretório de arquivos JSON da aplicação")
    args = parser.parse_args()

    app_data_path = os.path.join(args.data_dir, "app_data.json")
    with open(app_data_path, "r", encoding="utf-8") as f:
        app_data = json.load(f)

    existing_by_id = {l["id"]: l for l in app_data.get("lessons", [])}

    # Scan both organized subject folders and flat .md files
    md_files = sorted(
        glob.glob(os.path.join(args.content_dir, "*", "*.md"))
        + glob.glob(os.path.join(args.content_dir, "*.md"))
    )
    updated_ids = set()
    for mf in md_files:
        if os.path.basename(mf).startswith("_"):
            continue
        lesson_obj = extract_lesson_from_md(mf)
        if lesson_obj and lesson_obj["blocks"]:
            existing_by_id[lesson_obj["id"]] = lesson_obj
            updated_ids.add(lesson_obj["id"])

    lessons_sorted = sorted(existing_by_id.values(), key=lambda x: x.get("num", 999))
    app_data["lessons"] = lessons_sorted

    aulas_index = [
        {
            "id": l["id"],
            "num": l["num"],
            "slug": l.get("slug", l["id"]),
            "cat": l["cat"],
            "materia": l["catName"],
            "weight": l["weight"],
            "titulo": l["title"],
            "editalRef": l["editalRef"],
            "auditBadge": l["auditBadge"],
            "mdPath": l.get("mdPath", f"./content/{l['id']}.md"),
            "mdLegacyPath": l.get("mdLegacyPath", f"./content/{l['id']}.md"),
            "sources": l["sources"],
            "blocksCount": len(l["blocks"]),
            "questionsCount": l.get("questionsCount", 0),
            "flashcardsCount": l.get("flashcardsCount", 0),
        }
        for l in lessons_sorted
    ]
    app_data["aulasIndex"] = aulas_index

    with open(app_data_path, "w", encoding="utf-8") as f:
        json.dump(app_data, f, ensure_ascii=False, indent=2)

    aulas_json_path = os.path.join(args.data_dir, "aulas.json")
    with open(aulas_json_path, "w", encoding="utf-8") as f:
        json.dump({
            "totalAulas": len(aulas_index),
            "totalQuestoesBanco": sum(x["questionsCount"] for x in aulas_index),
            "totalFlashcardsBanco": sum(x["flashcardsCount"] for x in aulas_index),
            "aulas": aulas_index
        }, f, ensure_ascii=False, indent=2)

    print(f"Sincronização concluída com sucesso: {len(updated_ids)} aulas únicas compiladas -> {app_data_path} e {aulas_json_path}")

if __name__ == "__main__":
    main()
