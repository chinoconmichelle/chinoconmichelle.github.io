/* =========================================================
   STROKE ORDER ("Trazos"): animate and trace any character of the current card,
   plus how the character changed over time (glyphs from Michelle's material) and writing tips.
   Uses assets/hanzi-writer.min.js (MIT). Stroke data: data/strokes/<hex>.js (Make Me a Hanzi, Arphic PL),
   glyphs: data/glyphs/<hex>.js. Both load on demand with <script> tags, so this works from file:// too.
   Loaded last; wraps show/applyUI like extras.js and recap.js.
   ========================================================= */

const SUI = {
  es:{ strokesBtn:"✍️ Trazos", strokesTitle:"Trazos", animate:"▶ Ver trazos", practice:"✍️ Practicar", outline:"Guía",
       practiceHint:"Dibujá cada trazo en orden, con el dedo o el mouse. Si te equivocás tres veces, te muestra el trazo.",
       wellDone:"¡Muy bien! {n} trazos, {m} errores.", strokesN:"{n} trazos", noData:"No hay datos de trazos para este carácter.",
       evoTitle:"Cómo cambió el carácter", evoNote:"Dibujos del material de Michelle.", tipH:"Consejo de escritura (Michelle)",
       namesH:"Nombres de los trazos", tradTag:"tradicional" },
  en:{ strokesBtn:"✍️ Strokes", strokesTitle:"Stroke order", animate:"▶ Animate", practice:"✍️ Trace it", outline:"Guide",
       practiceHint:"Draw each stroke in order with your finger or mouse. After three misses it shows you the stroke.",
       wellDone:"Well done! {n} strokes, {m} mistakes.", strokesN:"{n} strokes", noData:"No stroke data for this character.",
       evoTitle:"How the character changed", evoNote:"Drawings from Michelle's material.", tipH:"Writing tip (Michelle)",
       namesH:"Stroke names", tradTag:"traditional" },
  zh:{ strokesBtn:"✍️ 笔顺", strokesTitle:"笔顺", animate:"▶ 演示", practice:"✍️ 练习描写", outline:"描红",
       practiceHint:"用手指或鼠标按笔顺书写，错三次会提示该笔画。",
       wellDone:"写得好！共 {n} 画，错 {m} 次。", strokesN:"{n} 画", noData:"没有这个字的笔顺资料。",
       evoTitle:"字形演变", evoNote:"图片来自老师的教材。", tipH:"书写提示（老师）",
       namesH:"笔画名称", tradTag:"繁体" }
};
Object.keys(SUI).forEach(l => Object.assign(UI[l], SUI[l]));

const STAGES = [
  ["jiaguwen", {es:"Huesos oraculares", en:"Oracle bones", zh:"甲骨文"}, {es:"~1200 a. C.", en:"c. 1200 BC", zh:"商代"}],
  ["jinwen",   {es:"Bronces", en:"Bronze", zh:"金文"}, {es:"~1000 a. C.", en:"c. 1000 BC", zh:"周代"}],
  ["xiaozhuan",{es:"Sello pequeño", en:"Small seal", zh:"小篆"}, {es:"~220 a. C.", en:"c. 220 BC", zh:"秦代"}],
  ["lishu",    {es:"Escritura de escribas", en:"Clerical", zh:"隶书"}, {es:"~200 a. C.–200 d. C.", en:"c. 200 BC–200 AD", zh:"汉代"}],
  ["kaishu",   {es:"Escritura regular (hoy)", en:"Regular (today)", zh:"楷书"}, {es:"desde ~300 d. C.", en:"since c. 300 AD", zh:"魏晋至今"}]
];
const STROKE_NAMES = [
  ["横","héng",{es:"horizontal, de izquierda a derecha",en:"horizontal, left to right",zh:"横"}],
  ["竖","shù",{es:"vertical, de arriba abajo",en:"vertical, top to bottom",zh:"竖"}],
  ["撇","piě",{es:"diagonal que cae hacia la izquierda",en:"falling to the left",zh:"撇"}],
  ["捺","nà",{es:"diagonal que cae hacia la derecha, ensanchándose",en:"falling to the right, widening",zh:"捺"}],
  ["点","diǎn",{es:"punto",en:"dot",zh:"点"}],
  ["提","tí",{es:"trazo corto que sube hacia la derecha",en:"short rising stroke",zh:"提"}],
  ["钩","gōu",{es:"gancho al final de un trazo (竖钩 shùgōu, 斜钩 xiégōu…)",en:"hook at the end of a stroke (竖钩 shùgōu, 斜钩 xiégōu…)",zh:"钩"}],
  ["折","zhé",{es:"quiebre: el trazo dobla (横撇 héngpiě, 横折 héngzhé…)",en:"turn: the stroke bends (横撇 héngpiě, 横折 héngzhé…)",zh:"折"}]
];

/* ---------- on-demand data (script tags, file:// friendly) ---------- */
const strokeCache = {}, glyphCache = {}, waiting = {};
const GLYPH_CHARS = "一上不个中为也了交人仁他以会你到可在大好如学就我提文时是有来止没用的看能要说资这";   // characters with files in data/glyphs (add here when adding glyphs)
window.__STROKE = (ch, d) => { strokeCache[ch] = d; (waiting["s"+ch]||[]).forEach(f => f()); };
window.__GLYPH  = (ch, d) => { glyphCache[ch] = d;  (waiting["g"+ch]||[]).forEach(f => f()); };
function loadData(kind, ch){
  const cache = kind==="s" ? strokeCache : glyphCache;
  if(cache[ch]) return Promise.resolve(cache[ch]);
  return new Promise((ok, fail) => {
    (waiting[kind+ch] = waiting[kind+ch] || []).push(() => ok(cache[ch]));
    const sc = document.createElement("script");
    sc.src = (kind==="s" ? "data/strokes/" : "data/glyphs/") + ch.codePointAt(0).toString(16) + ".js";
    sc.onerror = () => fail(new Error("no data"));
    document.head.appendChild(sc);
  });
}

/* ---------- view ---------- */
let sChars = [], sChar = null, writer = null, sCard = null;
const hanOnly = s => [...new Set((s||"").match(/[㐀-鿿]/g) || [])];
const cssVar = n => getComputedStyle(document.body).getPropertyValue(n).trim();

function openStrokes(){
  sCard = curId && card(curId); if(!sCard) return;
  const simp = hanOnly(sCard.s), trad = hanOnly(sCard.t).filter(c => !simp.includes(c));
  sChars = simp.map(c => [c, false]).concat(trad.map(c => [c, true]));
  if(!sChars.length) return;
  sChar = sChars[0][0];
  show("strokes"); renderStrokes();
}
function tipFor(ch){
  for(const t of TOPICS) for(const c of t.cards) if(c.s===ch && c.w) return c.w;
  return null;
}
function renderStrokes(){
  document.getElementById("strokesCard").textContent = sCard.s + (sCard.t && sCard.t!==sCard.s ? " · " + sCard.t : "") + "  " + sCard.py;
  const tabs = document.getElementById("strokeTabs"); tabs.innerHTML = "";
  if(sChars.length > 1) sChars.forEach(([c, tr]) => {
    const b = el("button", c===sChar ? "on" : "", c + (tr ? " (" + T("tradTag") + ")" : ""));
    b.onclick = () => { sChar = c; renderStrokes(); };
    tabs.appendChild(b);
  });
  document.getElementById("strokeMsg").textContent = "";
  drawWriter();
  renderEvolution();
  const tip = tipFor(sChar), tb = document.getElementById("strokeTip");
  tb.classList.toggle("hidden", !tip);
  if(tip){ tb.innerHTML = ""; tb.append(el("h3", null, T("tipH")), el("div", "rp", tip[S().lang] || tip.es)); }
  const nm = document.getElementById("strokeNames"); nm.innerHTML = "";
  const sum = el("summary", null, T("namesH")); nm.appendChild(sum);
  STROKE_NAMES.forEach(([z, py, m]) => { const r = el("div","sname"); r.append(el("b", null, z), el("span","rpy", py), el("span", null, m[S().lang])); nm.appendChild(r); });
}
function drawWriter(){
  const box = document.getElementById("writerBox"); box.innerHTML = "";
  const size = Math.min(280, box.parentElement.clientWidth - 20 || 280);
  box.style.width = box.style.height = size + "px";
  box.appendChild(gridSvg(size));
  const target = el("div", "wtarget"); box.appendChild(target);
  document.getElementById("strokeCount").textContent = "";
  writer = HanziWriter.create(target, sChar, {
    width:size, height:size, padding:12, showOutline:true, showCharacter:true,
    strokeColor: cssVar("--text") || "#222", outlineColor: cssVar("--border") || "#ddd",
    drawingColor: cssVar("--accent") || "#b03a2e", highlightColor: cssVar("--accent") || "#b03a2e",
    radicalColor: null, strokeAnimationSpeed:1, delayBetweenStrokes:250,
    charDataLoader: (ch, onLoad, onError) => loadData("s", ch).then(onLoad, () => { document.getElementById("strokeMsg").textContent = T("noData"); onError && onError(); })
  });
  loadData("s", sChar).then(d => { document.getElementById("strokeCount").textContent = T("strokesN").replace("{n}", d.strokes.length); }).catch(() => {});
}
function gridSvg(n){
  const ns = "http://www.w3.org/2000/svg", s = document.createElementNS(ns, "svg");
  s.setAttribute("width", n); s.setAttribute("height", n); s.setAttribute("class", "wgrid");
  [[0,0,n,n],[n,0,0,n],[n/2,0,n/2,n],[0,n/2,n,n/2]].forEach(([a,b,c,d]) => {
    const l = document.createElementNS(ns, "line");
    l.setAttribute("x1",a); l.setAttribute("y1",b); l.setAttribute("x2",c); l.setAttribute("y2",d);
    s.appendChild(l);
  });
  return s;
}
function renderEvolution(){
  const box = document.getElementById("strokeEvo"); box.innerHTML = ""; box.classList.add("hidden");
  const ch = sChar;
  if(!GLYPH_CHARS.includes(ch)) return;
  loadData("g", ch).then(g => {
    if(ch !== sChar || !g || !Object.keys(g).length) return;
    box.classList.remove("hidden");
    box.append(el("h3", null, T("evoTitle")));
    const row = el("div", "evorow");
    STAGES.forEach(([k, name, when]) => {
      if(!g[k]) return;
      const cell = el("div", "evocell"), pic = el("div", "evopic");
      pic.innerHTML = g[k];
      cell.append(pic, el("div", "evoname", name[S().lang]), el("div", "evowhen", when[S().lang]));
      row.appendChild(cell);
    });
    box.append(row, el("div", "rsource", T("evoNote")));
  }).catch(() => {});
}

/* ---------- wiring ---------- */
const _showS = show;
show = function(v){
  document.getElementById("strokesView").classList.add("hidden");
  if(v==="strokes"){
    ["auth","home","study","known","drill","tones","quiz","recap"].forEach(n => document.getElementById(n+"View").classList.add("hidden"));
    document.getElementById("strokesView").classList.remove("hidden");
    window.scrollTo(0,0);
    return;
  }
  if(writer){ try{ writer.cancelQuiz(); }catch(e){} }
  _showS(v);
};
const _applyUIS = applyUI;
applyUI = function(){
  _applyUIS();
  if(!document.getElementById("strokesView").classList.contains("hidden")) renderStrokes();
};
document.getElementById("strokesBtn").onclick = openStrokes;
document.getElementById("strokesBack").onclick = () => { show("study"); renderCard(); };
document.getElementById("strokeAnim").onclick = () => { document.getElementById("strokeMsg").textContent = ""; writer && writer.animateCharacter(); };
document.getElementById("strokeSay").onclick = () => sayZh(sChar);
document.getElementById("strokePractice").onclick = () => {
  if(!writer) return;
  const msg = document.getElementById("strokeMsg");
  msg.textContent = T("practiceHint");
  writer.hideCharacter();
  writer.quiz({ showHintAfterMisses:3, highlightOnComplete:true,
    onComplete: s => { msg.textContent = T("wellDone").replace("{n}", strokeCache[sChar] ? strokeCache[sChar].strokes.length : "").replace("{m}", s.totalMistakes); } });
};
applyUI();
