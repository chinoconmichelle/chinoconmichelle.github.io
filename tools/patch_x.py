"""Replace the x explanations of given cards and regenerate their topic files.
Usage in a script: patch({"card-id": {"es":..., "en":..., "zh":...}, ...})"""
import json, subprocess, os, sys
sys.path.insert(0, os.path.dirname(__file__)); import rewrite
ROOT = os.path.join(os.path.dirname(__file__), '..')
def patch(new):
    T = json.loads(subprocess.check_output(['node', os.path.join(ROOT, 'tools/dump.js')]))
    done = set()
    for t in T:
        hit = False
        for c in t['cards']:
            if c['id'] in new: c['x'] = new[c['id']]; done.add(c['id']); hit = True
        if hit: rewrite.write(t, ROOT)
    missing = set(new) - done
    if missing: raise SystemExit(f"unknown ids: {missing}")
    print("patched", len(done))
