/* =========================================================
   "PARA ESTUDIAR": Michelle's study list (data/study.js) on one page.
   Each section shows its cards (tap to hear) and opens them as a flashcard deck;
   "known" progress stays in each card's own topic. The date section says today's date in Chinese.
   Loaded last; wraps show/applyUI/renderTiles like the other add-ons.
   ========================================================= */

const STUI = {
  es:{ studyTitle:"Para estudiar", studyTile:"📌 Para estudiar", studySub:"Lo que pidió Michelle · {d}",
       studyAll:"📚 Estudiar todo ({n} tarjetas)", studyMain:"📚 Solo lo principal ({n})", studyPart:"Practicar esta parte ({n})",
       studyDrill:"🔢 Práctica de números", studyThen:"Después, si podés", studyMainH:"Lo principal",
       todayH:"Hoy", yesterdayH:"Ayer", todayTap:"Tocá para escucharla", learnedN:"{k} / {n} aprendidas",
       understandH:"🧠 Entender primero", memoH:"🔁 Después, memorizar", tryH:"✋ Probalo", goTo:"Ir a:",
       numPh:"Escribí un número (0 a 99.999.999)", numHow:"Cómo se arma:", dateLbl:"Elegí una fecha:", weekToday:"Hoy, en las tres formas:", mistakesTag:"⚠️", yearHint:"Ojo: si es un AÑO, se dice cifra por cifra: {zh} ({py}).",
       ordHow:"Tocá las piezas en el orden del chino. Si te equivocás, tocá una pieza de arriba para devolverla.", ordOk:"✓ ¡Bien!", ordNo:"✗ Casi. En chino el orden es:", ordNext:"🔀 Otra oración", ordReset:"↺ De nuevo", ordCount:"Oración {i} de {n}",
       rS:"sujeto", rT:"tiempo", rL:"lugar", rV:"verbo", rO:"objeto", rN:"negación", rP:"propósito", rQ:"cantidad", rM:"verbo de movimiento", rX:"posición" },
  en:{ studyTitle:"To study", studyTile:"📌 To study", studySub:"What Michelle asked for · {d}",
       studyAll:"📚 Study everything ({n} cards)", studyMain:"📚 Just the main parts ({n})", studyPart:"Practise this part ({n})",
       studyDrill:"🔢 Number practice", studyThen:"Then, if you can", studyMainH:"The main parts",
       todayH:"Today", yesterdayH:"Yesterday", todayTap:"Tap to hear it", learnedN:"{k} / {n} learned",
       understandH:"🧠 Understand first", memoH:"🔁 Then, memorise", tryH:"✋ Try it", goTo:"Go to:",
       numPh:"Type a number (0 to 99,999,999)", numHow:"How it's built:", dateLbl:"Pick a date:", weekToday:"Today, in all three forms:", mistakesTag:"⚠️", yearHint:"Careful: if it's a YEAR, say it digit by digit: {zh} ({py}).",
       ordHow:"Tap the pieces in Chinese order. If you slip, tap a piece at the top to send it back.", ordOk:"✓ Well done!", ordNo:"✗ Almost. In Chinese the order is:", ordNext:"🔀 Another sentence", ordReset:"↺ Again", ordCount:"Sentence {i} of {n}",
       rS:"subject", rT:"time", rL:"place", rV:"verb", rO:"object", rN:"negation", rP:"purpose", rQ:"amount", rM:"movement verb", rX:"position" },
  zh:{ studyTitle:"复习重点", studyTile:"📌 复习重点", studySub:"老师要求复习的内容 · {d}",
       studyAll:"📚 全部练习（{n} 张卡片）", studyMain:"📚 只练重点（{n}）", studyPart:"练习这一部分（{n}）",
       studyDrill:"🔢 数字练习", studyThen:"有时间再复习", studyMainH:"重点",
       todayH:"今天", yesterdayH:"昨天", todayTap:"点击收听", learnedN:"已学会 {k} / {n}",
       understandH:"🧠 先理解", memoH:"🔁 再记忆", tryH:"✋ 试一试", goTo:"跳到：",
       numPh:"输入一个数字（0 到 99999999）", numHow:"怎么组成：", dateLbl:"选择日期：", weekToday:"今天的三种说法：", mistakesTag:"⚠️", yearHint:"注意：如果是年份，要逐个数字读：{zh}（{py}）。",
       ordHow:"按汉语语序点击词块。点错了，点上面的词块放回去。", ordOk:"✓ 正确！", ordNo:"✗ 差一点。汉语的语序是：", ordNext:"🔀 换一句", ordReset:"↺ 重来", ordCount:"第 {i} 句，共 {n} 句",
       rS:"主语", rT:"时间", rL:"地点", rV:"动词", rO:"宾语", rN:"否定", rP:"目的", rQ:"数量", rM:"移动动词", rX:"方位" }
};
Object.keys(STUI).forEach(l => Object.assign(UI[l], STUI[l]));

const STUDY = window.STUDY;
const SL = o => (o && (o[S().lang] || o.es)) || "";

const CARD_BY_ID = {};
TOPICS.forEach(t => (t.cards || []).forEach(c => { CARD_BY_ID[c.id] = c; }));
function studyCards(ids){ return ids.map(i => CARD_BY_ID[i]).filter(Boolean); }
function studyDeck(key, ids, name, glyph){
  const cards = studyCards(ids);
  const from = []; cards.forEach(c => { const t = homeOf(c.id); if(t && !from.includes(t)) from.push(t); });
  return {id:"study-" + key, virtual:true, glyph: glyph || "📌", name, cards, from};
}
const allIds  = () => STUDY.sections.flatMap(s => s.ids);
const mainIds = () => STUDY.sections.filter(s => s.main).flatMap(s => s.ids);

/* ---------- today's date in Chinese ---------- */
const DG = ["零","一","二","三","四","五","六","七","八","九"], DP = ["líng","yī","èr","sān","sì","wǔ","liù","qī","bā","jiǔ"];
function smallNum(n){                       // 1..31 → [zh, py]
  if(n < 10) return [DG[n], DP[n]];
  const t = Math.floor(n/10), u = n%10;
  const zh = (t > 1 ? DG[t] : "") + "十" + (u ? DG[u] : "");
  let py = (t > 1 ? DP[t] : "") + "shí";
  if(u) py += (u === 2 ? "'" : "") + DP[u];
  return [zh, py];
}
const WEEK = [["天","tiān"],["一","yī"],["二","'èr"],["三","sān"],["四","sì"],["五","wǔ"],["六","liù"]];
function zhDate(d, which){
  const y = String(d.getFullYear()).split("").map(Number);
  const [mz, mp] = smallNum(d.getMonth()+1), [dz, dp] = smallNum(d.getDate()), [wz, wp] = WEEK[d.getDay()];
  const lead = which === "y" ? ["昨天是", "zuótiān shì"] : ["今天是", "jīntiān shì"];
  const zh = lead[0] + y.map(n => n ? DG[n] : "〇").join("") + "年" + mz + "月" + dz + "号，星期" + wz + "。";
  const py = lead[1] + " " + y.map(n => DP[n]).join(" ") + " nián " + mp + " yuè " + dp + " hào, xīngqī" + wp + ".";
  return {zh, py, say: zh.replace(/〇/g, "零"), num: d.getFullYear() + "年" + (d.getMonth()+1) + "月" + d.getDate() + "号"};
}

/* ---------- number builder (0 … 99,999,999), same rules as the theory ---------- */
const VOW = "aāáǎàeēéěèoōóǒò";
function jn(parts){ let o = ""; parts.forEach(p => { if(o && p && VOW.includes(p[0])) o += "'"; o += p; }); return o; }
function chunk4(n, leading){            // n < 10000 → {tokens:[[zh, py]], steps:[]}
  const d = [Math.floor(n/1000), Math.floor(n%1000/100), Math.floor(n%100/10), n%10];
  const U = [["千","qiān"],["百","bǎi"],["十","shí"],["",""]];
  const toks = [], steps = []; let zeroPending = false, started = false, tu = [];
  d.forEach((x, i) => {
    if(x === 0){ if(started) zeroPending = true; return; }
    if(zeroPending || (!started && !leading && i > 0)){ toks.push(["零","líng"]); steps.push("0 → 零 (líng)"); zeroPending = false; }
    let dz = DG[x], dp = DP[x];
    if(x === 2 && i < 2){ dz = "两"; dp = "liǎng"; }   // Michelle (class 6): 两 before 千 and 百, 二 in tens and units: 1285 = 一千两百八十五
    if(x === 1 && i === 0) dp = "yì";
    if(x === 1 && i === 1) dp = "yì";
    const nextNonzero = d.slice(i+1).some(v => v);
    if(i === 2){
      if(x === 1 && leading && !started){ tu = [["十","shí"]]; steps.push("10 → 十 (shí)"); }
      else { tu = [[dz, dp], ["十","shí"]]; steps.push(x + " × 10 → " + dz + "十 (" + jn([dp,"shí"]) + ")"); }
    } else if(i === 3){
      tu.push([dz, dp]); steps.push("+ " + x + " → " + dz + " (" + dp + ")");
    } else {
      toks.push([dz + U[i][0], jn([dp, U[i][1]])]);
      steps.push(x + " × " + (i === 0 ? "1000" : "100") + " → " + dz + U[i][0] + " (" + jn([dp, U[i][1]]) + ")");
    }
    started = true;
  });
  if(tu.length) toks.push([tu.map(t => t[0]).join(""), jn(tu.map(t => t[1]))]);
  return {toks, steps};
}
function numBuild(n){
  if(n === 0) return {zh:"零", py:"líng", steps:["0 → 零 (líng)"]};
  const hi = Math.floor(n/10000), lo = n % 10000; let toks = [], steps = [];
  if(hi){
    const h = chunk4(hi, true);
    let hz = h.toks.map(t => t[0]).join(""), hp = h.toks.map(t => t[1]).join(" ");
    if(hi === 1){ hz = "一"; hp = "yí"; }
    if(hi === 2){ hz = "两"; hp = "liǎng"; }
    const one = h.toks.length === 1 && (hi < 10 || (hi < 100 && hi % 10 === 0));
    toks.push([hz + "万", one ? hp + "wàn" : hp + " wàn"]);
    steps.push(hi + " × 10.000 → " + hz + "万 (" + (one ? hp + "wàn" : hp + " wàn") + ")");
  }
  if(lo){ const l = chunk4(lo, !hi); toks = toks.concat(l.toks); steps = steps.concat(l.steps); }
  else if(hi && n % 10000 === 0){ /* nothing after 万 */ }
  return {zh: toks.map(t => t[0]).join(""), py: toks.map(t => t[1]).join(" "), steps};
}

/* ---------- a date in Chinese (any date) ---------- */
function zhDateOf(d){
  const y = String(d.getFullYear()).split("").map(Number);
  const [mz, mp] = smallNum(d.getMonth()+1), [dz, dp] = smallNum(d.getDate()), [wz, wp] = WEEK[d.getDay()];
  return {zh: y.map(n => n ? DG[n] : "〇").join("") + "年" + mz + "月" + dz + "号，星期" + wz,
          py: y.map(n => DP[n]).join(" ") + " nián " + mp + " yuè " + dp + " hào, xīngqī" + wp,
          parts:[[y.map(n => n ? DG[n] : "〇").join("") + "年", y.map(n => DP[n]).join(" ") + " nián"], [mz + "月", mp + " yuè"], [dz + "号", dp + " hào"], ["星期" + wz, "xīngqī" + wp]]};
}

function toolFor(key){
  const box = el("div","sttool");
  box.appendChild(el("h4", null, T("tryH")));
  if(key === "num"){
    const inp = el("input"); inp.type = "number"; inp.min = 0; inp.max = 99999999; inp.placeholder = T("numPh"); inp.className = "stinput"; inp.value = "123";
    const out = el("div","stout");
    const draw = () => {
      out.innerHTML = ""; const n = Math.floor(Number(inp.value));
      if(!(n >= 0 && n <= 99999999) || inp.value === "") return;
      const r = numBuild(n);
      const row = el("button","rrow"); row.append(el("span","rzh", r.zh), el("span","rpy", r.py), el("span","rmean", n.toLocaleString(S().lang === "en" ? "en-US" : "es-AR")));
      row.onclick = () => sayZh(r.zh); out.appendChild(row);
      out.appendChild(el("div","ststeps", T("numHow") + "\n" + r.steps.join("\n")));
      if(n >= 1000 && n <= 2999){
        const ds = String(n).split("").map(Number);
        out.appendChild(el("div","rp styear", T("yearHint").replace("{zh}", ds.map(x => x ? DG[x] : "〇").join("") + "年").replace("{py}", ds.map(x => DP[x]).join(" ") + " nián")));
      }
    };
    inp.oninput = draw; box.append(inp, out); draw();
  } else if(key === "date"){
    const lab = el("label","stlabel", T("dateLbl")); const inp = el("input"); inp.type = "date"; inp.className = "stinput";
    const t = new Date(); inp.value = t.getFullYear() + "-" + String(t.getMonth()+1).padStart(2,"0") + "-" + String(t.getDate()).padStart(2,"0");
    const out = el("div","stout");
    const draw = () => {
      out.innerHTML = ""; if(!inp.value) return;
      const [y, m, d] = inp.value.split("-").map(Number); const r = zhDateOf(new Date(y, m-1, d));
      const row = el("button","rrow"); row.append(el("span","rzh", r.zh), el("span","rpy", r.py));
      row.onclick = () => sayZh(r.zh.replace(/〇/g, "零")); out.appendChild(row);
      const grid = el("div","stparts"); r.parts.forEach(([z, p]) => { const c = el("span","stpart"); c.append(el("b", null, z), el("small", null, p)); grid.appendChild(c); });
      out.appendChild(grid);
    };
    inp.oninput = draw; lab.appendChild(inp); box.append(lab, out); draw();
  } else if(key === "week"){
    box.appendChild(el("div","rp", T("weekToday")));
    const w = new Date().getDay(), [wz, wp] = WEEK[w];
    const forms = w === 0 ? [["星期天","xīngqītiān"],["礼拜天","lǐbàitiān"],["周日","zhōurì"]] : [["星期"+wz,"xīngqī"+wp],["礼拜"+wz,"lǐbài"+wp],["周"+wz,"zhōu"+wp]];
    const list = el("div","rex");
    forms.forEach(([z, p]) => { const r = el("button","rrow"); r.append(el("span","rzh", z), el("span","rpy", p)); r.onclick = () => sayZh(z); list.appendChild(r); });
    box.appendChild(list);
  } else if(key === "sent" && window.STUDY_ORDER){
    sentTool(box);
  } else return null;
  return box;
}

/* ---------- "put the pieces in Chinese order" (data: window.STUDY_ORDER) ---------- */
let ordIdx = 0;
function sentTool(box){
  const EX = window.STUDY_ORDER;
  box.appendChild(el("div","rp", T("ordHow")));
  const count = el("div","stk"), prompt = el("div","stprompt"), ans = el("div","stans"), pool = el("div","stchips"), res = el("div","stres");
  const acts = el("div","stbtns"), bReset = el("button","ghost", T("ordReset")), bNext = el("button","ghost", T("ordNext"));
  acts.append(bReset, bNext);
  box.append(count, prompt, ans, pool, res, acts);
  let ex, placed, order, done;
  const chip = (i, withRole) => {
    const [zh, py, role] = ex.p[i];
    const c = el("button","stchip"); c.append(el("b", null, zh), el("small", null, py));
    if(withRole) c.appendChild(el("em", null, T("r" + role)));
    return c;
  };
  const draw = () => {
    ans.innerHTML = ""; pool.innerHTML = ""; ans.classList.remove("ok","no");
    placed.forEach((i, k) => { const c = chip(i, done); if(!done) c.onclick = () => { placed.splice(k, 1); draw(); }; ans.appendChild(c); });
    order.filter(i => !placed.includes(i)).forEach(i => { const c = chip(i, false); c.onclick = () => { sayZh(ex.p[i][0]); placed.push(i); if(placed.length === ex.p.length) finish(); else draw(); }; pool.appendChild(c); });
  };
  const finish = () => {
    done = true;
    const okOrders = [ex.p.map((_, i) => i)].concat(ex.alt || []);
    const ok = okOrders.some(o => o.join() === placed.join());
    if(!ok) placed = ex.p.map((_, i) => i);
    draw(); ans.classList.add(ok ? "ok" : "no");
    res.innerHTML = "";
    res.appendChild(el("div","stresh", T(ok ? "ordOk" : "ordNo")));
    const zh = placed.map(i => ex.p[i][0]).join(""), py = placed.map(i => ex.p[i][1]).join(" ");
    const row = el("button","rrow stwide"); row.append(el("span","rzh", zh + "。"), el("span","rpy", py), el("span","rmean", placed.map(i => T("r" + ex.p[i][2])).join(" + ")));
    row.onclick = () => sayZh(zh); res.appendChild(row);
    sayZh(zh);
  };
  const start = () => {
    ex = EX[ordIdx % EX.length]; placed = []; done = false; res.innerHTML = "";
    count.textContent = T("ordCount").replace("{i}", (ordIdx % EX.length) + 1).replace("{n}", EX.length);
    prompt.textContent = "«" + (S().lang === "en" ? ex.en : (S().lang === "zh" ? ex.es + " · " + ex.en : ex.es)) + "»";
    const n = ex.p.length; order = ex.p.map((_, i) => i);
    do { for(let i = n - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [order[i], order[j]] = [order[j], order[i]]; } }
    while(n > 1 && [ex.p.map((_, i) => i)].concat(ex.alt || []).some(o => o.join() === order.join()));
    draw();
  };
  bReset.onclick = () => { placed = []; done = false; res.innerHTML = ""; draw(); };
  bNext.onclick = () => { ordIdx++; start(); };
  start();
}
function theoryFor(key){
  const blocks = (window.STUDY_THEORY || {})[key]; if(!blocks) return null;
  const det = el("details","sttheory"); det.open = true;
  det.appendChild(el("summary", null, T("understandH")));
  blocks.forEach(b => {
    const bl = el("div","stblock" + (b.warn ? " stwarn" : ""));
    bl.appendChild(el("h4", null, (b.warn ? T("mistakesTag") + " " : "") + SL(b.h)));
    bl.appendChild(el("div","rp", SL(b.p)));
    if(b.ex){
      const list = el("div","rex");
      b.ex.forEach(([zh, py, es, en]) => {
        const r = el("button","rrow" + ([...zh.replace(/[^㐀-鿿]/g, "")].length > 4 || /\d/.test(zh) ? " stwide" : ""));
        r.append(el("span","rzh", zh), el("span","rpy", py), el("span","rmean", S().lang === "en" ? en : es));
        r.onclick = () => sayZh(zh.replace(/〇/g, "零").replace(/\d+年/, m => [...m.slice(0,-1)].map(c => DG[+c]).join("") + "年"));
        list.appendChild(r);
      });
      bl.appendChild(list);
    }
    det.appendChild(bl);
  });
  const tool = toolFor(key); if(tool) det.appendChild(tool);
  return det;
}

/* ---------- page ---------- */
function openStudy(){ show("studypage"); renderStudy(); }
function renderStudy(){
  const body = document.getElementById("studyBody"); body.innerHTML = "";
  document.getElementById("studyDate").textContent = SL(STUDY.date);
  body.appendChild(el("p","rintro", SL(STUDY.quote)));
  body.appendChild(el("p","rsource", SL(STUDY.intro)));

  const btns = el("div","stbtns");
  const all = allIds(), main = mainIds();
  const bAll = el("button","on rstudy", T("studyAll").replace("{n}", all.length));
  bAll.onclick = () => openDeck(studyDeck("all", all, {es:"Para estudiar", en:"To study", zh:"复习重点"}));
  const bMain = el("button","rstudy", T("studyMain").replace("{n}", main.length));
  bMain.onclick = () => openDeck(studyDeck("main", main, {es:"Lo principal", en:"The main parts", zh:"重点"}));
  btns.append(bAll, bMain); body.appendChild(btns);
  body.appendChild(el("p","rhint", T("tapHear")));

  const toc = el("div","sttoc"); toc.appendChild(el("span", null, T("goTo")));
  STUDY.sections.forEach(sec => { const t = el("button","ghost", sec.glyph + " " + SL(sec.h).replace(/^\d+\.\s*/, "")); t.onclick = () => { const e = document.getElementById("st-" + sec.key); if(e) e.scrollIntoView({behavior:"smooth"}); }; toc.appendChild(t); });
  body.appendChild(toc);

  let shownThen = false;
  body.appendChild(el("h3","stgroup", T("studyMainH")));
  STUDY.sections.forEach(sec => {
    if(!sec.main && !shownThen){ body.appendChild(el("h3","stgroup", T("studyThen"))); shownThen = true; }
    const cards = studyCards(sec.ids);
    const k = cards.filter(c => isKnown(c.id)).length;
    const box = el("section","rsec stsec"); box.id = "st-" + sec.key;
    const head = el("div","sthead");
    head.append(el("span","stglyph", sec.glyph), el("h3", null, SL(sec.h)), el("span","stk", T("learnedN").replace("{k}", k).replace("{n}", cards.length)));
    box.appendChild(head);
    box.appendChild(el("div","rp", SL(sec.tip)));
    const th = theoryFor(sec.key); if(th) box.appendChild(th);
    box.appendChild(el("h4","stmemo", T("memoH")));

    if(sec.today){
      const now = new Date(), ayer = new Date(now.getTime() - 864e5);
      [[T("todayH"), zhDate(now, "t")], [T("yesterdayH"), zhDate(ayer, "y")]].forEach(([lab, d]) => {
        const row = el("button","rrow sttoday");
        row.append(el("span","stlab", lab), el("span","rzh", d.zh), el("span","rpy", d.py), el("span","rmean", T("todayTap")));
        row.onclick = () => sayZh(d.say);
        box.appendChild(row);
      });
    }

    const list = el("div","rex");
    cards.forEach(c => {
      const row = el("button","rrow" + (isKnown(c.id) ? " stknown" : "") + ([...c.s.replace(/[^\u3400-\u9fff]/g, "")].length > 4 || /\d/.test(c.s) ? " stwide" : ""));
      const mean = S().lang === "en" ? c.en : (S().lang === "zh" ? c.es + " · " + c.en : c.es);
      row.append(el("span","rzh", c.s + (c.t && c.t !== c.s ? "  ·  " + c.t : "")), el("span","rpy", c.py), el("span","rmean", mean));
      row.onclick = () => sayZh(c.say || c.s.replace(/[A-Za-z+=]/g, ""));
      list.appendChild(row);
    });
    box.appendChild(list);

    const acts = el("div","stbtns");
    const b = el("button","rstudy", T("studyPart").replace("{n}", cards.length));
    b.onclick = () => openDeck(studyDeck(sec.key, sec.ids, sec.h, sec.glyph));
    acts.appendChild(b);
    if(sec.drill){ const d = el("button","rstudy", T("studyDrill")); d.onclick = () => openDrill(); acts.appendChild(d); }
    box.appendChild(acts);
    body.appendChild(box);
  });
}

/* ---------- home tile (both views) ---------- */
function studyTile(box){
  const all = studyCards(allIds());
  const k = all.filter(c => isKnown(c.id)).length, pct = all.length ? Math.round(k/all.length*100) : 0;
  const b = document.createElement("button");
  b.className = "tile pin";
  b.innerHTML = `<span class="glyph">📌</span><span class="name"></span><span class="meta"></span><span class="bar"><i style="width:${pct}%"></i></span>`;
  b.querySelector(".name").textContent = T("studyTitle");
  b.querySelector(".meta").textContent = T("studySub").replace("{d}", SL(STUDY.date)) + " · " + T("learnedN").replace("{k}", k).replace("{n}", all.length);
  b.onclick = openStudy;
  box.insertBefore(b, box.firstChild);
}

/* ---------- wiring ---------- */
const _renderTilesST = renderTiles;
renderTiles = function(){ _renderTilesST(); const box = document.getElementById("tiles"); if(box && STUDY) studyTile(box); };
const _showST = show;
show = function(v){
  document.getElementById("studypageView").classList.add("hidden");
  if(v === "studypage"){
    ["auth","home","study","known","drill","tones","quiz","recap","strokes"].forEach(n => { const e = document.getElementById(n+"View"); if(e) e.classList.add("hidden"); });
    document.getElementById("studypageView").classList.remove("hidden");
    window.scrollTo(0,0);
    return;
  }
  _showST(v);
};
const _applyUIST = applyUI;
applyUI = function(){
  _applyUIST();
  if(!document.getElementById("studypageView").classList.contains("hidden")) renderStudy();
};
document.getElementById("studyHome").onclick = () => show("home");
applyUI();
