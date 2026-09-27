/* =========================================================
   INTERFACE TEXT  (es / en / zh) — cards are not translated
   ========================================================= */
const UI = {
  es:{
    appTitle:"Chino con Michelle",
    appSub:"Elegí un tema. Tu progreso se guarda por tema.",
    light:"Claro",sepia:"Sepia",dark:"Noche",
    back:"← Temas",backStudy:"← Volver",
    mode1:"Chino primero",mode2:"Significado primero",
    pinyin:"Pinyin",shuffle:"Mezclar",
    remaining:"Por repasar",viewKnown:"Ver aprendidas",
    hint:"Tocá la tarjeta para darla vuelta",
    understand:"Entender los caracteres",
    hear:"🔊 Escuchar en chino",prev:"← Anterior",next:"Siguiente →",
    notYet:"Todavía no",gotIt:"¡La sé!",
    restart:"Volver al inicio",resetTopic:"Reiniciar este tema",
    allDone:"¡Aprendiste todas las tarjetas de este tema!\nPodés repasarlas en «Ver aprendidas» o reiniciar el tema.",
    knownTitle:"Aprendidas",moveBack:"Volver a repasar",noKnown:"Todavía no marcaste ninguna tarjeta como aprendida.",
    learned:"aprendidas",cards:"tarjetas",soon:"Próximamente",
    export:"⬇ Exportar progreso",import:"⬆ Importar progreso",
    importOk:"Progreso importado.",importFail:"Ese archivo no es un progreso válido.",
    confirmReset:"¿Reiniciar el progreso de este tema?",
    noTTS:"Este navegador no puede leer en voz alta.",
    storageNote:"El progreso se guarda en este navegador, en este dispositivo. Para pasarlo a otro dispositivo o navegador, usá «Exportar progreso» y después «Importar progreso» del otro lado.",
    keys:"Teclado: espacio = girar · ← → = anterior/siguiente · 1 = todavía no · 2 = la sé · S = escuchar"
  },
  en:{
    appTitle:"Mandarin with Michelle",
    appSub:"Pick a topic. Progress is saved per topic.",
    light:"Light",sepia:"Sepia",dark:"Dark",
    back:"← Topics",backStudy:"← Back",
    mode1:"Chinese first",mode2:"Meaning first",
    pinyin:"Pinyin",shuffle:"Shuffle",
    remaining:"To review",viewKnown:"View learned",
    hint:"Tap the card to flip it",
    understand:"Understand the characters",
    hear:"🔊 Hear in Chinese",prev:"← Previous",next:"Next →",
    notYet:"Not yet",gotIt:"I know it!",
    restart:"Back to start",resetTopic:"Reset this topic",
    allDone:"You've learned every card in this topic!\nReview them under “View learned” or reset the topic.",
    knownTitle:"Learned",moveBack:"Review again",noKnown:"You haven't marked any card as learned yet.",
    learned:"learned",cards:"cards",soon:"Coming soon",
    export:"⬇ Export progress",import:"⬆ Import progress",
    importOk:"Progress imported.",importFail:"That file isn't valid progress data.",
    confirmReset:"Reset progress for this topic?",
    noTTS:"This browser can't read text aloud.",
    storageNote:"Progress is saved in this browser, on this device. To move it to another device or browser, use “Export progress”, then “Import progress” on the other side.",
    keys:"Keyboard: space = flip · ← → = previous/next · 1 = not yet · 2 = I know it · S = hear"
  },
  zh:{
    appTitle:"中文学习卡片",
    appSub:"选择一个主题。每个主题分别记录进度。",
    light:"浅色",sepia:"米色",dark:"夜间",
    back:"← 主题",backStudy:"← 返回",
    mode1:"先看中文",mode2:"先看意思",
    pinyin:"拼音",shuffle:"打乱",
    remaining:"待复习",viewKnown:"查看已掌握",
    hint:"点击卡片翻面",
    understand:"理解汉字",
    hear:"🔊 朗读中文",prev:"← 上一张",next:"下一张 →",
    notYet:"还不会",gotIt:"我会了",
    restart:"从头开始",resetTopic:"重置本主题",
    allDone:"本主题的卡片全部掌握了！\n可以在【查看已掌握】复习，或重置本主题。",
    knownTitle:"已掌握",moveBack:"移回待复习",noKnown:"还没有已掌握的卡片。",
    learned:"已掌握",cards:"张",soon:"即将推出",
    export:"⬇ 导出进度",import:"⬆ 导入进度",
    importOk:"进度已导入。",importFail:"这个文件不是有效的进度数据。",
    confirmReset:"确定要重置本主题的进度吗？",
    noTTS:"当前浏览器不支持语音朗读。",
    storageNote:"进度只保存在当前设备的当前浏览器。要换设备或浏览器，请先【导出进度】，再在另一边【导入进度】。",
    keys:"键盘：空格 = 翻面 · ← → = 上一张/下一张 · 1 = 还不会 · 2 = 我会了 · S = 朗读"
  }
};

/* =========================================================
   CONTENT
   Card fields:
     id  permanent id (never reuse or renumber)
     s   simplified   t  traditional (only when different)
     py  pinyin       es / en  meanings
     x   character explanation (Spanish)
     say optional text for the voice when different from s
   ========================================================= */
/* Topics are loaded from data/*.js into window.TOPICS (see data/topics.js) */
const TOPICS = window.TOPICS;

/* =========================================================
   STATE  (one localStorage key; progress keyed by card id)
   ========================================================= */
const STORE_KEY = "mzhApp.v1";
const DEFAULT_SETTINGS = {lang:"es", theme:"light", font:1, mode:1, pinyin:true, shuffle:false};
let state = {settings:{...DEFAULT_SETTINGS}, topics:{}};
let topic = null;        // current topic object
let order = [];          // card ids in study order
let curId = null;        // current card id

function load(){
  try{
    const raw = localStorage.getItem(STORE_KEY);
    if(raw){
      const d = JSON.parse(raw);
      if(d && typeof d==="object"){
        state.settings = {...DEFAULT_SETTINGS, ...(d.settings||{})};
        state.topics = d.topics || {};
      }
    }
  }catch(e){}
}
function save(){ try{ localStorage.setItem(STORE_KEY, JSON.stringify(state)); }catch(e){} }
function tstate(id){
  if(!state.topics[id]) state.topics[id] = {known:[], cur:null};
  return state.topics[id];
}
const S = () => state.settings;
const T = k => (UI[S().lang] && UI[S().lang][k]) || UI.es[k] || k;

/* =========================================================
   INTERFACE LANGUAGE / THEME / FONT
   ========================================================= */
function applyUI(){
  document.documentElement.lang = S().lang==="zh" ? "zh-CN" : S().lang;
  document.title = T("appTitle");
  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = T(el.dataset.i18n); });
  document.querySelectorAll("#langSeg button").forEach(b => b.classList.toggle("on", b.dataset.lang===S().lang));
  document.querySelectorAll("#themeSeg button").forEach(b => b.classList.toggle("on", b.dataset.theme===S().theme));
  document.body.dataset.theme = S().theme;
  document.documentElement.style.setProperty("--fs", S().font);
  document.getElementById("mode1").classList.toggle("on", S().mode===1);
  document.getElementById("mode2").classList.toggle("on", S().mode===2);
  document.getElementById("pinyinBtn").classList.toggle("on", S().pinyin);
  document.getElementById("shuffleBtn").classList.toggle("on", S().shuffle);
  if(topic){ document.getElementById("topicTitle").textContent = topic.name[S().lang]; }
  renderTiles();
  if(!document.getElementById("knownView").classList.contains("hidden")) renderKnown();
}
function setSetting(k,v){ state.settings[k]=v; save(); applyUI(); }

/* =========================================================
   HOME
   ========================================================= */
function renderTiles(){
  const box = document.getElementById("tiles");
  box.innerHTML = "";
  TOPICS.forEach(tp => {
    const b = document.createElement("button");
    b.className = "tile" + (tp.soon ? " soon" : "");
    const n = tp.cards.length;
    const k = tp.soon ? 0 : tstate(tp.id).known.filter(id => tp.cards.some(c=>c.id===id)).length;
    const pct = n ? Math.round(k/n*100) : 0;
    b.innerHTML = `<span class="glyph">${tp.glyph}</span>
      <span class="name"></span>
      <span class="meta"></span>
      <span class="bar"><i style="width:${pct}%"></i></span>`;
    b.querySelector(".name").textContent = tp.name[S().lang];
    b.querySelector(".meta").textContent = tp.soon ? T("soon") : `${k} / ${n} ${T("learned")}`;
    if(tp.soon){ b.disabled = true; } else { b.onclick = () => openTopic(tp.id); }
    box.appendChild(b);
  });
}

/* =========================================================
   STUDY
   ========================================================= */
function shuffleArr(a){ for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function buildOrder(){
  order = topic.cards.map(c=>c.id);
  if(S().shuffle) shuffleArr(order);
}
function queue(){ const k = new Set(tstate(topic.id).known); return order.filter(id => !k.has(id)); }
function card(id){ return topic.cards.find(c=>c.id===id); }

function openTopic(id){
  topic = TOPICS.find(t=>t.id===id);
  buildOrder();
  const saved = tstate(id).cur;
  const q = queue();
  curId = (saved && q.includes(saved)) ? saved : (q[0]||null);
  show("study");
  applyUI();
  renderCard();
}
function show(v){
  ["home","study","known"].forEach(n => document.getElementById(n+"View").classList.toggle("hidden", n!==v));
  if(v==="home"){ topic=null; renderTiles(); }
  window.scrollTo(0,0);
}

function faceChinese(el, c, withPinyin){
  const zh = document.createElement("div");
  zh.className = "zh" + ((c.s.length>5) ? " long" : "");
  zh.appendChild(document.createTextNode(c.s));
  if(c.t && c.t!==c.s){
    const dot = document.createElement("span"); dot.className="dot"; dot.textContent="·";
    const tr = document.createElement("span"); tr.className="trad"; tr.textContent=c.t;
    zh.appendChild(dot); zh.appendChild(tr);
  }
  el.appendChild(zh);
  if(withPinyin){ const p=document.createElement("div"); p.className="py"; p.textContent=c.py; el.appendChild(p); }
}
function faceMeaning(el, c){
  const a=document.createElement("div"); a.className="mean"; a.textContent=c.es;
  const b=document.createElement("div"); b.className="mean"; b.textContent=c.en;
  el.appendChild(a); el.appendChild(b);
}

function renderCard(){
  const cardEl = document.getElementById("card");
  // Turn the card back instantly so the next answer never flashes
  cardEl.classList.add("noanim");
  cardEl.classList.remove("flipped");
  void cardEl.offsetWidth;
  requestAnimationFrame(() => cardEl.classList.remove("noanim"));
  document.getElementById("explain").classList.add("hidden");
  const q = queue();
  document.getElementById("count").textContent = q.length;
  const empty = !q.length;
  document.getElementById("cardArea").classList.toggle("hidden", empty);
  document.getElementById("doneBox").classList.toggle("hidden", !empty);
  if(empty) return;
  if(!q.includes(curId)) curId = q[0];
  tstate(topic.id).cur = curId; save();
  const c = card(curId);
  const front = document.getElementById("front"), back = document.getElementById("back");
  front.innerHTML = ""; back.innerHTML = "";
  if(S().mode===1){ faceChinese(front, c, S().pinyin); faceMeaning(back, c); }
  else            { faceMeaning(front, c); faceChinese(back, c, true); }
  document.getElementById("explainText").textContent = c.x || "";
}

function flip(){
  const cardEl = document.getElementById("card");
  cardEl.classList.toggle("flipped");
  const c = card(curId);
  const showX = cardEl.classList.contains("flipped") && c && c.x;
  document.getElementById("explain").classList.toggle("hidden", !showX);
}
function go(d){
  const q = queue(); if(!q.length) return;
  const i = q.indexOf(curId);
  curId = q[(i + d + q.length) % q.length];
  renderCard();
}
function markKnown(){
  const ts = tstate(topic.id);
  const q = queue(); const i = q.indexOf(curId);
  if(!ts.known.includes(curId)) ts.known.push(curId);
  const q2 = queue();
  curId = q2.length ? q2[Math.min(i, q2.length-1)] : null;
  save(); renderCard();
}
function markUnknown(){ go(1); }

/* ---------- Voice (Chinese only) ---------- */
let zhVoice = null;
function pickVoice(){
  if(!("speechSynthesis" in window)) return;
  const vs = speechSynthesis.getVoices();
  zhVoice = vs.find(v=>/^zh[-_]CN/i.test(v.lang)) || vs.find(v=>/^zh/i.test(v.lang)) || null;
}
function speak(){
  const c = curId && card(curId); if(!c) return;
  if(!("speechSynthesis" in window)){ alert(T("noTTS")); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(c.say || c.s);
  u.lang = "zh-CN"; u.rate = 0.8;
  if(zhVoice) u.voice = zhVoice;
  speechSynthesis.speak(u);
}
if("speechSynthesis" in window){ pickVoice(); speechSynthesis.onvoiceschanged = pickVoice; }

/* ---------- Learned list ---------- */
function renderKnown(){
  const list = document.getElementById("knownList"); list.innerHTML = "";
  const ts = tstate(topic.id);
  const items = topic.cards.filter(c => ts.known.includes(c.id));
  document.getElementById("knownCount").textContent = items.length;
  if(!items.length){ list.innerHTML = `<div class="empty"></div>`; list.firstChild.textContent = T("noKnown"); return; }
  items.forEach(c => {
    const row = document.createElement("div"); row.className="kitem";
    const w = document.createElement("div"); w.className="kw";
    const z = document.createElement("div"); z.className="kzh"; z.textContent = c.s + (c.t && c.t!==c.s ? " · "+c.t : "");
    const p = document.createElement("div"); p.className="kpy"; p.textContent = c.py;
    const m = document.createElement("div"); m.className="kes"; m.textContent = c.es + " · " + c.en;
    w.append(z,p,m);
    const b = document.createElement("button"); b.textContent = T("moveBack");
    b.onclick = () => { ts.known = ts.known.filter(x=>x!==c.id); save(); renderKnown(); };
    row.append(w,b); list.appendChild(row);
  });
}

/* ---------- Export / import ---------- */
function exportProgress(){
  const blob = new Blob([JSON.stringify({app:"mzhApp",version:1,exported:new Date().toISOString(),...state},null,2)],{type:"application/json"});
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "mandarin-progress-" + new Date().toISOString().slice(0,10) + ".json";
  document.body.appendChild(a); a.click(); a.remove();
  setTimeout(()=>URL.revokeObjectURL(a.href), 1000);
}
function importProgress(file){
  const r = new FileReader();
  r.onload = () => {
    try{
      const d = JSON.parse(r.result);
      if(!d || typeof d.topics!=="object") throw 0;
      state.topics = d.topics;
      state.settings = {...DEFAULT_SETTINGS, ...(d.settings||{})};
      save(); applyUI(); alert(T("importOk"));
    }catch(e){ alert(T("importFail")); }
  };
  r.readAsText(file);
}

/* =========================================================
   EVENTS
   ========================================================= */
document.querySelectorAll("#langSeg button").forEach(b => b.onclick = () => setSetting("lang", b.dataset.lang));
document.querySelectorAll("#themeSeg button").forEach(b => b.onclick = () => setSetting("theme", b.dataset.theme));
document.getElementById("fontUp").onclick   = () => setSetting("font", Math.min(1.6, Math.round((S().font+0.1)*10)/10));
document.getElementById("fontDown").onclick = () => setSetting("font", Math.max(0.8, Math.round((S().font-0.1)*10)/10));
document.getElementById("homeBtn").onclick = () => show("home");
document.getElementById("mode1").onclick = () => { setSetting("mode",1); renderCard(); };
document.getElementById("mode2").onclick = () => { setSetting("mode",2); renderCard(); };
document.getElementById("pinyinBtn").onclick = () => { setSetting("pinyin", !S().pinyin); renderCard(); };
document.getElementById("shuffleBtn").onclick = () => { setSetting("shuffle", !S().shuffle); buildOrder(); const q=queue(); curId=q[0]||null; renderCard(); };
document.getElementById("card").onclick = flip;
document.getElementById("speakBtn").onclick = speak;
document.getElementById("prevBtn").onclick = () => go(-1);
document.getElementById("nextBtn").onclick = () => go(1);
document.getElementById("knownBtn").onclick = markKnown;
document.getElementById("unknownBtn").onclick = markUnknown;
document.getElementById("restartBtn").onclick = () => { buildOrder(); const q=queue(); curId=q[0]||null; renderCard(); };
document.getElementById("resetBtn").onclick = () => {
  if(!confirm(T("confirmReset"))) return;
  state.topics[topic.id] = {known:[], cur:null}; save(); buildOrder(); curId=queue()[0]||null; renderCard();
};
document.getElementById("viewKnownBtn").onclick = () => { show("known"); renderKnown(); };
document.getElementById("backToStudy").onclick = () => { show("study"); renderCard(); };
document.getElementById("exportBtn").onclick = exportProgress;
document.getElementById("importBtn").onclick = () => document.getElementById("importFile").click();
document.getElementById("importFile").onchange = e => { if(e.target.files[0]) importProgress(e.target.files[0]); e.target.value=""; };

document.addEventListener("keydown", e => {
  if(document.getElementById("studyView").classList.contains("hidden") || !curId) return;
  if(e.target.tagName==="INPUT") return;
  if(e.key===" " || e.key==="Enter"){ e.preventDefault(); flip(); }
  else if(e.key==="ArrowRight") go(1);
  else if(e.key==="ArrowLeft") go(-1);
  else if(e.key==="1") markUnknown();
  else if(e.key==="2") markKnown();
  else if(e.key.toLowerCase()==="s") speak();
});

load();
applyUI();
