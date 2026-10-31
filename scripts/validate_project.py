#!/usr/bin/env python3
"""Compatibility entrypoint. The current React audit lives in scripts/audit_content.ts."""
import pathlib
import subprocess
import sys

root = pathlib.Path(sys.argv[1] if len(sys.argv) > 1 else '.').resolve()
sys.exit(subprocess.call(['npm', 'run', 'audit:content'], cwd=root))
