"""Validate card data: required fields, unique ids, and traditional forms (opencc s2t, Taiwan variant)."""
import json, subprocess, sys, os
here=os.path.dirname(__file__)
topics=json.loads(subprocess.check_output(['node',os.path.join(here,'dump.js')]))
try:
    import opencc; cc=opencc.OpenCC('s2tw')
except Exception: cc=None
seen=set(); problems=0
for t in topics:
    for c in t['cards']:
        miss=[k for k in ('id','s','py','es','en','x') if not c.get(k)]
        x=c.get('x') or {}
        miss+=['x.'+l for l in ('es','en','zh') if not (isinstance(x,dict) and x.get(l))]
        if miss: print('MISSING',t['id'],c.get('id'),miss); problems+=1
        if c['id'] in seen: print('DUP ID',c['id']); problems+=1
        seen.add(c['id'])
        if cc:
            conv=cc.convert(c['s']); t_=c.get('t') or c['s']
            if conv!=t_: print(f"TRAD? {c['id']}: {c['s']} -> mine {t_} / converter {conv}")
    thin=sum(1 for c in t['cards'] if isinstance(c.get('x'),dict) and len(c['x'].get('es',''))<160)
    print(f"{t['id']:12} {len(t['cards'])} cards, short explanations: {thin}")
print('problems:',problems)
sys.exit(1 if problems else 0)
