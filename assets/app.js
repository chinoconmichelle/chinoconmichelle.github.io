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
    storageNote:"Tu progreso se guarda en tu cuenta y te sigue a cualquier dispositivo donde entres.",
    show:"Mostrar",hide:"Ocultar",password2:"Repetí la contraseña",newPassword:"Nueva contraseña",
    forgot:"¿Olvidaste tu contraseña?",backToSignIn:"← Volver a entrar",resetBtn:"Cambiar contraseña",
    resetIntro:"Escribí tu usuario y elegí una contraseña nueva.",
    errMatch:"Las dos contraseñas no coinciden.",errNoUser:"No existe ese usuario.",
    resetOk:"Contraseña cambiada. Entrando…",errResetOff:"El cambio de contraseña todavía no está activado en el servidor.",
    drillTitle:"Práctica de números",drillSub:"Números al azar o en orden, para contar",
    dmode1:"Número → chino",dmode2:"Chino → número",dorder:"En orden",howBuilt:"Cómo se arma",
    dkeys:"Teclado: espacio = girar · → = siguiente · ← = anterior · S = escuchar",
    pwOk:"✓ Las contraseñas coinciden",pwNo:"✗ Todavía no coinciden",
    authTitle:"Chino con Michelle",authSub:"Entrá con tu usuario para guardar tu progreso en cualquier dispositivo.",
    username:"Usuario",password:"Contraseña",signIn:"Entrar",signUp:"Crear cuenta",signOut:"Salir",
    hello:"Hola, {u}",saved:"Guardado ✓",saving:"Guardando…",offline:"Sin conexión: se guardará al volver",
    errUser:"El usuario debe tener entre 3 y 30 caracteres: letras, números, punto, guion o guion bajo.",
    errPass:"La contraseña debe tener al menos 6 caracteres.",
    errExists:"Ese usuario ya existe. Probá con otro, o entrá con tu contraseña.",
    errWrong:"Usuario o contraseña incorrectos.",errNet:"No se pudo conectar. Revisá tu conexión e intentá de nuevo.",
    errSignupOff:"La creación de cuentas está desactivada. Pedile una cuenta a quien administra el sitio.",
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
    storageNote:"Your progress is saved to your account and follows you to any device where you sign in.",
    show:"Show",hide:"Hide",password2:"Repeat password",newPassword:"New password",
    forgot:"Forgot your password?",backToSignIn:"← Back to sign in",resetBtn:"Change password",
    resetIntro:"Type your username and choose a new password.",
    errMatch:"The two passwords don't match.",errNoUser:"That username doesn't exist.",
    resetOk:"Password changed. Signing in…",errResetOff:"Password reset isn't switched on on the server yet.",
    drillTitle:"Number practice",drillSub:"Random numbers, or in order for counting",
    dmode1:"Number → Chinese",dmode2:"Chinese → number",dorder:"In order",howBuilt:"How it's built",
    dkeys:"Keyboard: space = flip · → = next · ← = previous · S = hear",
    pwOk:"✓ Passwords match",pwNo:"✗ Passwords don't match yet",
    authTitle:"Mandarin with Michelle",authSub:"Sign in with your username to keep your progress on any device.",
    username:"Username",password:"Password",signIn:"Sign in",signUp:"Create account",signOut:"Sign out",
    hello:"Hi, {u}",saved:"Saved ✓",saving:"Saving…",offline:"Offline: will save when you're back",
    errUser:"Username must be 3–30 characters: letters, numbers, dot, hyphen or underscore.",
    errPass:"Password must be at least 6 characters.",
    errExists:"That username is taken. Try another, or sign in with your password.",
    errWrong:"Wrong username or password.",errNet:"Couldn't connect. Check your connection and try again.",
    errSignupOff:"New accounts are turned off. Ask the site admin for an account.",
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
    storageNote:"进度保存在你的账号里，在任何设备登录都能继续。",
    show:"显示",hide:"隐藏",password2:"再输入一次密码",newPassword:"新密码",
    forgot:"忘记密码？",backToSignIn:"← 返回登录",resetBtn:"修改密码",
    resetIntro:"输入你的用户名，然后设置新密码。",
    errMatch:"两次输入的密码不一致。",errNoUser:"这个用户名不存在。",
    resetOk:"密码已修改，正在登录…",errResetOff:"服务器还没有开启重置密码功能。",
    drillTitle:"数字练习",drillSub:"随机或按顺序练习数数",
    dmode1:"数字 → 中文",dmode2:"中文 → 数字",dorder:"按顺序",howBuilt:"组成方式",
    dkeys:"键盘：空格 = 翻面 · → = 下一个 · ← = 上一个 · S = 朗读",
    pwOk:"✓ 两次密码一致",pwNo:"✗ 两次密码还不一致",
    authTitle:"中文学习卡片",authSub:"用你的用户名登录，在任何设备上保存进度。",
    username:"用户名",password:"密码",signIn:"登录",signUp:"创建账号",signOut:"退出",
    hello:"你好，{u}",saved:"已保存 ✓",saving:"保存中…",offline:"离线：恢复连接后会自动保存",
    errUser:"用户名需为 3–30 个字符：字母、数字、点、连字符或下划线。",
    errPass:"密码至少需要 6 个字符。",
    errExists:"这个用户名已被使用。请换一个，或用密码登录。",
    errWrong:"用户名或密码错误。",errNet:"无法连接。请检查网络后重试。",
    errSignupOff:"目前不开放注册。请向网站管理员申请账号。",
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
const OLD_KEY = "mzhApp.v1";                 // Phase 1 (before accounts)
const cacheKey = uid => "mzhApp.v2." + uid;  // local copy per user
const DEFAULT_SETTINGS = {lang:"es", theme:"dark", font:1, mode:1, pinyin:true, shuffle:false, drange:"0-100", dmode:1, dorder:false};
let state = {settings:{...DEFAULT_SETTINGS}, topics:{}};
let topic = null;        // current topic object
let order = [];          // card ids in study order
let curId = null;        // current card id
let user = null;         // signed-in Supabase user

/* ---------- Supabase ---------- */
const SUPABASE_URL = "https://qmjjpelvbplaoennylva.supabase.co";
const SUPABASE_KEY = "sb_publishable_g9Ph7pcTg2EIj1zbX3bHRQ_YK9ahxCZ";   // publishable: safe in the browser, protected by RLS
const EMAIL_DOMAIN = "chinoconmichelle.app";                               // usernames become <user>@<domain> internally
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
const userToEmail = u => u.trim().toLowerCase() + "@" + EMAIL_DOMAIN;
const emailToUser = e => (e||"").split("@")[0];

function readJSON(key){ try{ const r=localStorage.getItem(key); return r?JSON.parse(r):null; }catch(e){ return null; } }
function writeJSON(key,v){ try{ localStorage.setItem(key, JSON.stringify(v)); }catch(e){} }

/* Settings: keep the last choice on this device even before signing in */
function loadDeviceSettings(){
  const d = readJSON("mzhApp.settings") || (readJSON(OLD_KEY)||{}).settings;
  if(d) state.settings = {...DEFAULT_SETTINGS, ...d};
}

/* Merge two progress objects: each topic keeps whichever copy changed last */
function merge(a, b){
  const out = {settings:{...DEFAULT_SETTINGS}, topics:{}};
  const sa=(a&&a.settings)||{}, sbb=(b&&b.settings)||{};
  out.settings = {...DEFAULT_SETTINGS, ...((sa.u||0) >= (sbb.u||0) ? sa : sbb)};
  const ta=(a&&a.topics)||{}, tb=(b&&b.topics)||{};
  new Set([...Object.keys(ta), ...Object.keys(tb)]).forEach(id => {
    const x=ta[id], y=tb[id];
    out.topics[id] = !x ? y : !y ? x : ((x.u||0) >= (y.u||0) ? x : y);
  });
  return out;
}

let saveTimer = null, pending = false;
function setStatus(k){ const el=document.getElementById("syncStatus"); if(el){ el.dataset.k=k; el.textContent=k?T(k):""; } }

function save(){
  if(topic){ tstate(topic.id).u = Date.now(); }
  state.settings.u = state.settings.u || 0;
  writeJSON("mzhApp.settings", state.settings);
  if(!user) return;
  writeJSON(cacheKey(user.id), state);
  pending = true; setStatus("saving");
  clearTimeout(saveTimer);
  saveTimer = setTimeout(pushRemote, 1200);
}
async function pushRemote(){
  if(!user || !pending) return;
  clearTimeout(saveTimer);
  const payload = {user_id:user.id, data:state, updated_at:new Date().toISOString()};
  const {error} = await sb.from("progress").upsert(payload);
  if(error){ setStatus("offline"); return; }
  pending = false; setStatus("saved");
}
async function pullRemote(){
  const {data, error} = await sb.from("progress").select("data").eq("user_id", user.id).maybeSingle();
  if(error) return null;
  return data ? data.data : {};
}

/* After sign-in: combine local copy (or Phase 1 progress) with the account's copy */
async function startSession(u){
  user = u;
  let local = readJSON(cacheKey(u.id));
  if(!local){
    const old = readJSON(OLD_KEY);                 // carry over progress made before accounts existed
    if(old && old.topics){ local = old; try{ localStorage.removeItem(OLD_KEY); }catch(e){} }
  }
  const remote = await pullRemote();
  const deviceSettings = {...state.settings};
  state = merge(local||{}, remote||{});
  if(!remote || !remote.settings) state.settings = {...deviceSettings, ...state.settings, u:state.settings.u||0};
  writeJSON(cacheKey(u.id), state);
  pending = true; await pushRemote();
  document.getElementById("helloUser").textContent = T("hello").replace("{u}", emailToUser(u.email));
  show("home"); applyUI();
  if(remote===null) setStatus("offline");
}

function tstate(id){
  if(!state.topics[id]) state.topics[id] = {known:[], cur:null, u:0};
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
  if(user) document.getElementById("helloUser").textContent = T("hello").replace("{u}", emailToUser(user.email));
  const st=document.getElementById("syncStatus"); if(st && st.dataset.k) st.textContent=T(st.dataset.k);
  const ae=document.getElementById("authErr"); if(ae && ae.dataset.k) ae.textContent=T(ae.dataset.k);
  const ao=document.getElementById("authOk"); if(ao && ao.dataset.k) ao.textContent=T(ao.dataset.k);
  const pm=document.getElementById("pwMatch"); if(pm && pm.dataset.k) pm.textContent=T(pm.dataset.k);
  if(topic && curId && !document.getElementById("studyView").classList.contains("hidden")){ const c=card(curId); if(c){ document.getElementById("explainText").textContent = xText(c); document.getElementById("clTag").textContent = clLabel(c, topic); } }
  renderTiles();
  if(!document.getElementById("drillView").classList.contains("hidden")) renderDrill();
  if(!document.getElementById("knownView").classList.contains("hidden")) renderKnown();
}
/* Explanation in the interface language; falls back to Spanish (the original) */
function xText(c){
  const x = c.x; if(!x) return "";
  if(typeof x === "string") return x;
  return x[S().lang] || x.es || "";
}
/* Where each card comes from (cards can override their topic's cl) */
const CLASSES = {
  c1:{es:"Clase 1 · 31 ago", en:"Class 1 · Aug 31", zh:"第1课 · 8月31日"},
  c2:{es:"Clase 2 · 7 sep",  en:"Class 2 · Sep 7",  zh:"第2课 · 9月7日"},
  c3:{es:"Clase 3 · 14 sep", en:"Class 3 · Sep 14", zh:"第3课 · 9月14日"},
  fc:{es:"Tarjetas de Michelle", en:"Michelle's flashcards", zh:"Michelle 老师的卡片"},
  ex:{es:"Extra", en:"Extra", zh:"补充"}
};
function clOf(c, t){ return c.cl || (t && t.cl) || ""; }
function clLabel(c, t){ const k = clOf(c,t); return k && CLASSES[k] ? CLASSES[k][S().lang] : ""; }
function setSetting(k,v){ state.settings[k]=v; state.settings.u=Date.now(); save(); applyUI(); }

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
    if(tp.id==="numeros"){
      const d = document.createElement("button");
      d.className = "tile drill";
      d.innerHTML = `<span class="glyph">练</span><span class="name"></span><span class="meta"></span>`;
      d.querySelector(".name").textContent = T("drillTitle");
      d.querySelector(".meta").textContent = T("drillSub");
      d.onclick = openDrill;
      box.appendChild(d);
    }
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
  ["auth","home","study","known","drill"].forEach(n => document.getElementById(n+"View").classList.toggle("hidden", n!==v));
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
  document.getElementById("explainText").textContent = xText(c);
  document.getElementById("clTag").textContent = clLabel(c, topic);
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


/* =========================================================
   NUMBER DRILL (0–999)
   ========================================================= */
const ZH_D = ["零","一","二","三","四","五","六","七","八","九"];
const PY_D = ["líng","yī","èr","sān","sì","wǔ","liù","qī","bā","jiǔ"];
/* Returns {zh, py, parts:[[chars, pinyin, meaning]]} following the class rules:
   11–19 = 十 + unit · tens = digit + 十 · 100s need 一 · 200 = 两百 · missing tens = 零 · after 百, ten = 一十 */
function numToZh(n){
  if(n<10) return {zh:ZH_D[n], py:PY_D[n], parts:[[ZH_D[n],PY_D[n],String(n)]]};
  const parts=[]; const h=Math.floor(n/100), t=Math.floor(n%100/10), u=n%10;
  if(h){
    const hz = h===2 ? "两" : ZH_D[h];
    const hp = h===1 ? "yì" : h===2 ? "liǎng" : PY_D[h];
    parts.push([hz+"百", hp+"bǎi", String(h*100)]);
  }
  if(t===0 && u===0){}
  else if(t===0){ parts.push(["零","líng","0"]); parts.push([ZH_D[u],PY_D[u],String(u)]); }
  else{
    const tz = (t===1 && !h) ? "十" : ZH_D[t]+"十";
    const tp = (t===1 && !h) ? "shí" : PY_D[t]+"shí";
    parts.push([tz, tp, String(t*10)]);
    if(u) parts.push([ZH_D[u],PY_D[u],String(u)]);
  }
  const zh = parts.map(p=>p[0]).join("");
  // pinyin: hundreds as one word, the rest as another (yìbǎi èrshísān, yìbǎi líng yī)
  let py;
  if(h){
    const rest = parts.slice(1);
    const zero = rest.length && rest[0][0]==="零";
    py = parts[0][1] + (rest.length ? " " + (zero ? rest.map(p=>p[1]).join(" ") : rest.map(p=>p[1]).join("")) : "");
  } else py = parts.map(p=>p[1]).join("");
  return {zh, py, parts};
}
function drillNote(n, r){
  const lines = r.parts.map(p => `${p[0]}  ${p[1]}  = ${p[2]}`);
  const tips = {
    es:{teen:"Del 11 al 19: 十 + unidad, sin 一 adelante.", hund:"Con 百 el uno es obligatorio: 一百.", two:"200 se dice 两百 (también se oye 二百).", zero:"零 marca que falta la decena.", yishi:"Después de 百, el diez lleva su uno: 一十.", yi:"一 antes de 百 se pronuncia yì."},
    en:{teen:"11–19: 十 + unit, no 一 in front.", hund:"With 百 the one is required: 一百.", two:"200 is 两百 (二百 is also heard).", zero:"零 marks the missing tens.", yishi:"After 百, ten keeps its one: 一十.", yi:"一 before 百 is pronounced yì."},
    zh:{teen:"11–19：十 + 个位数，前面不加一。", hund:"百前面一定要说一：一百。", two:"200 说两百（也可以说二百）。", zero:"零表示十位是空的。", yishi:"百后面的十要说一十。", yi:"一在百前面读 yì。"}
  }[S().lang];
  const h=Math.floor(n/100), t=Math.floor(n%100/10), u=n%10;
  if(n>10 && n<20) lines.push("", tips.teen);
  if(h===1){ lines.push("", tips.hund, tips.yi); }
  if(h===2) lines.push("", tips.two);
  if(h && t===0 && u) lines.push(tips.zero);
  if(h && t===1) lines.push(tips.yishi);
  return lines.join("\n");
}
let dNum = 0;
const dRange = () => S().drange.split("-").map(Number);
function drillPick(step){
  const [lo,hi] = dRange();
  if(S().dorder){ dNum = (dNum<lo||dNum>hi) ? lo : (dNum - lo + step + (hi-lo+1)) % (hi-lo+1) + lo; }
  else { let x; do{ x = lo + Math.floor(Math.random()*(hi-lo+1)); }while(x===dNum && hi>lo); dNum = x; }
  renderDrill();
}
function renderDrill(){
  const c = document.getElementById("dcard");
  c.classList.add("noanim"); c.classList.remove("flipped"); void c.offsetWidth;
  requestAnimationFrame(()=>c.classList.remove("noanim"));
  document.getElementById("dexplain").classList.add("hidden");
  const r = numToZh(dNum);
  const f = document.getElementById("dfront"), b = document.getElementById("dback");
  f.innerHTML = ""; b.innerHTML = "";
  const big = t => { const d=document.createElement("div"); d.className="zh"; d.textContent=t; return d; };
  const py = t => { const d=document.createElement("div"); d.className="py"; d.textContent=t; return d; };
  if(S().dmode===1){ f.appendChild(big(String(dNum))); b.append(big(r.zh), py(r.py)); }
  else { f.appendChild(big(r.zh)); if(S().pinyin) f.appendChild(py(r.py)); b.append(big(String(dNum)), py(r.py)); }
  document.getElementById("dexplainText").textContent = drillNote(dNum, r);
  document.querySelectorAll("#drillRange button").forEach(x => x.classList.toggle("on", x.dataset.r===S().drange));
  document.getElementById("dmode1").classList.toggle("on", S().dmode===1);
  document.getElementById("dmode2").classList.toggle("on", S().dmode===2);
  document.getElementById("dorder").classList.toggle("on", S().dorder);
  document.getElementById("dpinyin").classList.toggle("on", S().pinyin);
}
function drillFlip(){
  const c = document.getElementById("dcard"); c.classList.toggle("flipped");
  document.getElementById("dexplain").classList.toggle("hidden", !c.classList.contains("flipped"));
}
function drillSpeak(){
  if(!("speechSynthesis" in window)){ alert(T("noTTS")); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(numToZh(dNum).zh); u.lang="zh-CN"; u.rate=0.8;
  if(zhVoice) u.voice = zhVoice; speechSynthesis.speak(u);
}
function openDrill(){ show("drill"); const [lo]=dRange(); dNum = S().dorder ? lo : dNum; if(!S().dorder) drillPick(1); else renderDrill(); }
document.getElementById("drillHome").onclick = () => show("home");
document.querySelectorAll("#drillRange button").forEach(b => b.onclick = () => { setSetting("drange", b.dataset.r); dNum = dRange()[0]; S().dorder ? renderDrill() : drillPick(1); });
document.getElementById("dmode1").onclick = () => { setSetting("dmode",1); renderDrill(); };
document.getElementById("dmode2").onclick = () => { setSetting("dmode",2); renderDrill(); };
document.getElementById("dorder").onclick = () => { setSetting("dorder", !S().dorder); if(S().dorder){ dNum = dRange()[0]; } renderDrill(); };
document.getElementById("dpinyin").onclick = () => { setSetting("pinyin", !S().pinyin); renderDrill(); };
document.getElementById("dcard").onclick = drillFlip;
document.getElementById("dspeak").onclick = drillSpeak;
document.getElementById("dnext").onclick = () => drillPick(1);
document.getElementById("dprev").onclick = () => { if(S().dorder) drillPick(-1); };
document.addEventListener("keydown", e => {
  if(document.getElementById("drillView").classList.contains("hidden") || e.target.tagName==="INPUT") return;
  if(e.key===" " || e.key==="Enter"){ e.preventDefault(); drillFlip(); }
  else if(e.key==="ArrowRight") drillPick(1);
  else if(e.key==="ArrowLeft" && S().dorder) drillPick(-1);
  else if(e.key.toLowerCase()==="s") drillSpeak();
});

/* ---------- Sign in / create account / reset password / sign out ---------- */
let authMode = "in";                       // "in" | "up" | "reset"
const $ = id => document.getElementById(id);
function authMsg(errKey, okKey){
  const e=$("authErr"), o=$("authOk");
  e.dataset.k = errKey||""; e.textContent = errKey ? T(errKey) : "";
  o.dataset.k = okKey||"";  o.textContent = okKey ? T(okKey) : "";
}
function setAuthMode(m){
  authMode = m;
  const f=$("authForm"); f.dataset.mode = m;
  document.querySelectorAll(".authtabs button").forEach(b => b.classList.toggle("on", b.dataset.mode===m));
  $("authSubmit").dataset.i18n = m==="in" ? "signIn" : m==="up" ? "signUp" : "resetBtn";
  $("authSubmit").textContent = T($("authSubmit").dataset.i18n);
  $("authPass").autocomplete = m==="in" ? "current-password" : "new-password";
  $("authPass").value = ""; $("authPass2").value = "";
  $("authPass").name = m==="in" ? "password" : "new-password";
  updateMatchSafe();
  authMsg("");
}
function updateMatchSafe(){ if(typeof updateMatch==="function") updateMatch(); }
function togglePw(){
  const show = $("authPass").type === "password";
  $("authPass").type = $("authPass2").type = show ? "text" : "password";
  ["eyeBtn","eyeBtn2"].forEach(id => { $(id).dataset.i18n = show ? "hide" : "show"; $(id).textContent = T($(id).dataset.i18n); });
}
function readForm(){
  const u = $("authUser").value.trim().toLowerCase();
  const p = $("authPass").value, p2 = $("authPass2").value;
  if(!/^[a-z0-9._-]{3,30}$/.test(u)){ authMsg("errUser"); return null; }
  if(p.length < 6){ authMsg("errPass"); return null; }
  if(authMode!=="in" && p!==p2){ authMsg("errMatch"); return null; }
  return {u,p};
}
async function signInWith(u,p){
  const res = await sb.auth.signInWithPassword({email:userToEmail(u), password:p});
  if(res.error) return res.error;
  offerSave(u, p);
  $("authPass").value = ""; $("authPass2").value = "";
  await startSession(res.data.user);
  return null;
}
async function submitAuth(){
  const f = readForm(); if(!f) return;
  authMsg(""); $("authSubmit").disabled = true;
  try{
    if(authMode==="reset"){
      const {data, error} = await sb.rpc("reset_password", {p_username:f.u, p_new_password:f.p});
      if(error){ authMsg((error.code==="PGRST202" || /function/i.test(error.message||"")) ? "errResetOff" : "errNet"); return; }
      if(!data){ authMsg("errNoUser"); return; }
      authMsg("", "resetOk");
      const e = await signInWith(f.u, f.p); if(e) authMsg("errNet");
      return;
    }
    if(authMode==="up"){
      const res = await sb.auth.signUp({email:userToEmail(f.u), password:f.p});
      if(res.error){
        const m=(res.error.message||"").toLowerCase();
        authMsg(m.includes("already") ? "errExists" : (m.includes("not allowed")||m.includes("disabled")) ? "errSignupOff" : m.includes("password") ? "errPass" : "errNet");
        return;
      }
      if(!res.data.session){ authMsg("errNet"); return; }
      offerSave(f.u, f.p);
      $("authPass").value = ""; $("authPass2").value = "";
      await startSession(res.data.user);
      return;
    }
    const e = await signInWith(f.u, f.p);
    if(e){ const m=(e.message||"").toLowerCase(); authMsg(m.includes("invalid") ? "errWrong" : "errNet"); }
  }catch(err){ authMsg("errNet"); }
  finally{ $("authSubmit").disabled = false; }
}
document.querySelectorAll(".authtabs button").forEach(b => b.onclick = () => setAuthMode(b.dataset.mode));
$("forgotBtn").onclick = () => setAuthMode("reset");
$("backInBtn").onclick = () => setAuthMode("in");
$("eyeBtn").onclick = togglePw;
$("eyeBtn2").onclick = togglePw;
function updateMatch(){
  const a=$("authPass").value, b=$("authPass2").value, m=$("pwMatch");
  if(authMode==="in" || !b){ m.textContent=""; m.className="pwmatch only-new"; m.dataset.k=""; return; }
  const ok = a===b; m.dataset.k = ok ? "pwOk" : "pwNo";
  m.textContent = T(m.dataset.k); m.className = "pwmatch only-new " + (ok ? "ok" : "no");
}
$("authPass").addEventListener("input", updateMatch);
$("authPass2").addEventListener("input", updateMatch);
/* Browser password managers (Chrome/Google, Edge…) may fill both boxes without typing events */
setInterval(() => { if(!$("authView").classList.contains("hidden")) updateMatch(); }, 700);
/* Ask the browser to save the login (Chrome shows its "Save password?" prompt) */
async function offerSave(u, p){
  try{
    if(window.PasswordCredential && navigator.credentials){
      await navigator.credentials.store(new PasswordCredential({id:u, password:p, name:u}));
    }
  }catch(e){}
}
$("authForm").onsubmit = e => { e.preventDefault(); submitAuth(); };
document.getElementById("signOutBtn").onclick = async () => {
  await pushRemote();
  await sb.auth.signOut();
  user = null; state.topics = {};
  show("auth"); setAuthMode("in"); applyUI();
};

/* Save before the page is hidden or closed; retry when back online */
document.addEventListener("visibilitychange", () => { if(document.visibilityState==="hidden") pushRemote(); });
window.addEventListener("online", () => { if(pending) pushRemote(); });

(async function start(){
  loadDeviceSettings();
  applyUI();
  const {data} = await sb.auth.getSession();
  if(data && data.session){ await startSession(data.session.user); }
  else { show("auth"); setAuthMode("in"); applyUI(); }
})();
