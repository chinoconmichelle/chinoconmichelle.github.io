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
       todayH:"Hoy", yesterdayH:"Ayer", todayTap:"Tocá para escucharla", learnedN:"{k} / {n} aprendidas" },
  en:{ studyTitle:"To study", studyTile:"📌 To study", studySub:"What Michelle asked for · {d}",
       studyAll:"📚 Study everything ({n} cards)", studyMain:"📚 Just the main parts ({n})", studyPart:"Practise this part ({n})",
       studyDrill:"🔢 Number practice", studyThen:"Then, if you can", studyMainH:"The main parts",
       todayH:"Today", yesterdayH:"Yesterday", todayTap:"Tap to hear it", learnedN:"{k} / {n} learned" },
  zh:{ studyTitle:"复习重点", studyTile:"📌 复习重点", studySub:"老师要求复习的内容 · {d}",
       studyAll:"📚 全部练习（{n} 张卡片）", studyMain:"📚 只练重点（{n}）", studyPart:"练习这一部分（{n}）",
       studyDrill:"🔢 数字练习", studyThen:"有时间再复习", studyMainH:"重点",
       todayH:"今天", yesterdayH:"昨天", todayTap:"点击收听", learnedN:"已学会 {k} / {n}" }
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

  let shownThen = false;
  body.appendChild(el("h3","stgroup", T("studyMainH")));
  STUDY.sections.forEach(sec => {
    if(!sec.main && !shownThen){ body.appendChild(el("h3","stgroup", T("studyThen"))); shownThen = true; }
    const cards = studyCards(sec.ids);
    const k = cards.filter(c => isKnown(c.id)).length;
    const box = el("section","rsec stsec");
    const head = el("div","sthead");
    head.append(el("span","stglyph", sec.glyph), el("h3", null, SL(sec.h)), el("span","stk", T("learnedN").replace("{k}", k).replace("{n}", cards.length)));
    box.appendChild(head);
    box.appendChild(el("div","rp", SL(sec.tip)));

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
