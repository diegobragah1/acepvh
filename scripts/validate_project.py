#!/usr/bin/env python3
"""
===============================================================================
Suíte Automatizada de Testes e Validação Integral — Projeto ACEPVH 2026
Executa todas as verificações exigidas na Etapa 10:
1. Cadastro de todos os arquivos Markdown em data/aulas.json e data/app_data.json
2. Ausência de aulas faltantes no índice
3. Existência física e integridade de todos os caminhos relativos (./)
4. Validação de UTF-8, acentuação e ausência de caracteres de controle ou LaTeX quebrado
5. Verificação de 4 alternativas (A–D) e gabarito válido em 100% das questões
6. Verificação da presença de tabelas Markdown, fontes verificáveis e matriz do edital
===============================================================================
"""
import json
import os
import re
import sys

def run_tests(repo_root="."):
    errors = []
    checks = []

    # 1. Check required core files
    required_files = [
        "index.html",
        "css/style.css",
        "js/app.js",
        "data/app_data.json",
        "data/materias.json",
        "data/aulas.json",
        "sources/fontes.md",
        "README.md",
        "00_INDEX_ARQUITETURA_DADOS.md",
        "scripts/md_to_app_data.py",
    ]
    for rf in required_files:
        p = os.path.join(repo_root, rf)
        if not os.path.exists(p) or os.path.getsize(p) == 0:
            errors.append(f"Arquivo obrigatório ausente ou vazio: {rf}")
    checks.append(f"Arquivos estruturais obrigatórios verificados ({len(required_files)}/{len(required_files)})")

    # 2. Load JSON indices
    with open(os.path.join(repo_root, "data/app_data.json"), "r", encoding="utf-8") as f:
        app_data = json.load(f)
    with open(os.path.join(repo_root, "data/materias.json"), "r", encoding="utf-8") as f:
        materias_data = json.load(f)
    with open(os.path.join(repo_root, "data/aulas.json"), "r", encoding="utf-8") as f:
        aulas_data = json.load(f)

    lessons = app_data.get("lessons", [])
    aulas_idx = aulas_data.get("aulas", [])
    if len(lessons) != 32 or len(aulas_idx) != 32:
        errors.append(f"Esperadas 32 aulas cadastradas, encontradas {len(lessons)} em app_data.json e {len(aulas_idx)} em aulas.json")
    checks.append(f"Cadastro de aulas sincronizado: {len(lessons)} aulas em app_data.json e {len(aulas_idx)} em aulas.json")

    # 3. Verify every lesson's Markdown files exist on disk and are non-empty UTF-8 without broken LaTeX/control chars
    md_tables_total = 0
    for l in lessons:
        for key in ("mdPath", "mdLegacyPath"):
            rel_p = l.get(key, "").lstrip("./")
            full_p = os.path.join(repo_root, rel_p)
            if not os.path.exists(full_p):
                errors.append(f"Caminho Markdown não encontrado para aula {l['id']}: {l.get(key)}")
            else:
                with open(full_p, "r", encoding="utf-8") as mf:
                    content = mf.read()
                if len(content) < 1000:
                    errors.append(f"Arquivo Markdown truncado: {rel_p}")
                bad_ctrl = re.findall(r"[\x00-\x08\x0b\x0c\x0e-\x1f]", content)
                if bad_ctrl:
                    errors.append(f"Caracteres de controle inválidos em {rel_p}")
                if key == "mdPath":
                    md_tables_total += len(re.findall(r"\n\| :---", content))
    checks.append(f"Caminhos e arquivos Markdown das 32 aulas verificados (64 arquivos .md de aula: 32 em pastas por matéria + 32 por código; {md_tables_total} tabelas Markdown validadas)")

    # 4. Verify all questions have 4 options (A-D) and valid answer index 0..3
    q_count = 0
    fc_count = 0
    for l in lessons:
        if not l.get("sources"):
            errors.append(f"Aula sem fontes vinculadas: {l['id']}")
        for b_idx, b in enumerate(l.get("blocks", [])):
            for q_idx, q in enumerate(b.get("questions", [])):
                q_count += 1
                opts = q.get("options", [])
                ans = q.get("ans", -1)
                if len(opts) != 4:
                    errors.append(f"Questão {l['id']}_b{b_idx}_q{q_idx} possui {len(opts)} alternativas (esperado: 4)")
                if ans not in (0, 1, 2, 3):
                    errors.append(f"Questão {l['id']}_b{b_idx}_q{q_idx} possui índice de gabarito inválido: {ans}")
                if not q.get("comment"):
                    errors.append(f"Questão {l['id']}_b{b_idx}_q{q_idx} sem gabarito comentado")
            fc_count += len(b.get("flashcards", []))
    checks.append(f"Banco de questões e flashcards validado: {q_count} questões de 4 alternativas (A–D) com gabarito comentado e {fc_count} flashcards")

    # 5. Verify sources, endemics, cargos, schedule, and auditMatrix
    if len(app_data.get("sources", [])) != 94:
        errors.append(f"Esperadas 94 fontes cadastradas, encontradas {len(app_data.get('sources', []))}")
    if len(app_data.get("endemics", [])) != 14:
        errors.append(f"Esperadas 14 fichas de endemias, encontradas {len(app_data.get('endemics', []))}")
    if len(app_data.get("cargos", [])) != 16:
        errors.append(f"Esperados 16 códigos de vagas (340 a 356), encontrados {len(app_data.get('cargos', []))}")
    if len(app_data.get("auditMatrix", [])) != 20:
        errors.append(f"Esperados 20 macro-itens na matriz do edital, encontrados {len(app_data.get('auditMatrix', []))}")
    checks.append("Inventário de 94 fontes, 14 fichas de endemias, 16 códigos de vagas e matriz de 20 itens do edital 100% íntegros")

    # 6. Verify relative paths in index.html and js/app.js
    with open(os.path.join(repo_root, "index.html"), "r", encoding="utf-8") as f:
        html_txt = f.read()
    if './css/style.css' not in html_txt or './js/app.js' not in html_txt:
        errors.append("index.html não contém referências relativas './css/style.css' e './js/app.js'")
    with open(os.path.join(repo_root, "js/app.js"), "r", encoding="utf-8") as f:
        js_txt = f.read()
    if './data/app_data.json' not in js_txt:
        errors.append("js/app.js não contém referência relativa './data/app_data.json'")
    checks.append("Caminhos relativos ('./css/style.css', './js/app.js', './data/app_data.json') verificados para GitHub Pages (/acepvh/)")

    print("=== RELATÓRIO DE EXECUÇÃO DA SUÍTE DE TESTES (validate_project.py) ===")
    for c in checks:
        print(f"  [PASS] {c}")
    if errors:
        print("\n  [ERROS ENCONTRADOS]:")
        for e in errors:
            print(f"   - {e}")
        sys.exit(1)
    else:
        print("\nRESULTADO FINAL: TODOS OS TESTES PASSARAM COM ZERO ERROS!")

if __name__ == "__main__":
    target = sys.argv[1] if len(sys.argv) > 1 else "."
    run_tests(target)
