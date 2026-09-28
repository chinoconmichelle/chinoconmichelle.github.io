"""Generate data/strokes/<hex>.js for every Chinese character used in the cards (simplified and traditional).
Each file calls window.__STROKE(char, data) so it loads with a <script> tag (works on file://).
Stroke data: hanzi-writer-data (Make Me a Hanzi, Arphic Public License, see data/strokes/ARPHICPL.TXT).
Usage: python3 tools/strokes.py /path/to/node_modules/hanzi-writer-data
Re-run after adding cards; existing files are kept."""
import json, os, re, subprocess, sys, shutil
ROOT = os.path.join(os.path.dirname(__file__), '..')
src = sys.argv[1]
out = os.path.join(ROOT, 'data', 'strokes'); os.makedirs(out, exist_ok=True)
shutil.copy(os.path.join(src, 'ARPHICPL.TXT'), out)
T = json.loads(subprocess.check_output(['node', os.path.join(ROOT, 'tools/dump.js')]))
chars = set()
for t in T:
    for c in t['cards']:
        chars.update(re.findall(r'[㐀-鿿]', c['s'] + (c.get('t') or '')))
made = missing = 0
for ch in sorted(chars):
    f = os.path.join(src, ch + '.json')
    if not os.path.exists(f): missing += 1; continue
    d = json.load(open(f, encoding='utf-8'))
    d = {'strokes': d['strokes'], 'medians': d['medians']}
    with open(os.path.join(out, '%x.js' % ord(ch)), 'w', encoding='utf-8') as w:
        w.write('window.__STROKE(%s,%s);\n' % (json.dumps(ch, ensure_ascii=False), json.dumps(d, separators=(',', ':'))))
    made += 1
print('chars', len(chars), 'files', made, 'no data', missing)
