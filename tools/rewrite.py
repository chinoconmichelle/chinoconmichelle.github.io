"""Regenerate data/<topic>.js from a JSON list of topics (used for the one-time migration
to x:{es,en,zh} and class tags). Keeps field order stable and uses template literals for x."""
import json, sys, os
HEAD = ("/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),\n"
        "   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,\n"
        "   x character explanation {es, en, zh}: as deep as possible, self-contained. */\n")
def tl(s): return "`" + s.replace("\\","\\\\").replace("`","\\`").replace("${","\\${") + "`"
def js(v): return json.dumps(v, ensure_ascii=False)
def write(t, root):
    out = [HEAD, "window.TOPICS.push({\n", f"  id:{js(t['id'])}, glyph:{js(t['glyph'])},\n", f"  name:{js(t['name'])},\n"]
    if t.get('cl'): out.append(f"  cl:{js(t['cl'])},\n")
    out.append("  cards:[\n")
    for i,c in enumerate(t['cards']):
        f = [f"id:{js(c['id'])}", f"s:{js(c['s'])}"]
        if c.get('t'): f.append(f"t:{js(c['t'])}")
        f += [f"py:{js(c['py'])}", f"es:{js(c['es'])}", f"en:{js(c['en'])}"]
        if c.get('cl'): f.append(f"cl:{js(c['cl'])}")
        if c.get('say'): f.append(f"say:{js(c['say'])}")
        x = c['x']
        out.append("  {" + ",".join(f) + ",\n   x:{\nes:" + tl(x['es']) + ",\nen:" + tl(x['en']) + ",\nzh:" + tl(x['zh']) + "}}" + ("," if i < len(t['cards'])-1 else "") + "\n")
    out.append("  ]\n});\n")
    open(os.path.join(root, 'data', t['id'] + '.js'), 'w', encoding='utf-8').write("".join(out))
if __name__ == "__main__":
    for t in json.load(open(sys.argv[1], encoding='utf-8')): write(t, sys.argv[2] if len(sys.argv) > 2 else '.')
