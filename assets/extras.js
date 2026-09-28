/* =========================================================
   EXTRAS: search · tones & sounds reference · listening quiz
   Loaded after app.js; uses its globals (S, T, TOPICS, show, zhVoice, applyUI).
   ========================================================= */

const XUI = {
  es:{
    searchPh:"Buscar: bufanda, scarf, weijin, 围巾…", results:"{n} resultados", result1:"1 resultado", noResults:"No hay tarjetas que coincidan.",
    tonesTitle:"Tonos y sonidos", tonesSub:"Los cuatro tonos y los sonidos difíciles, con audio",
    quiz:"🎧 Escuchar y elegir", quizTitle:"Escuchar y elegir", replay:"🔊 Escuchar otra vez",
    quizQ:"¿Qué significa lo que escuchaste?", right:"¡Correcto!", wrong:"No: era",
    score:"Aciertos: {c} de {t}", nextQ:"Siguiente →", quizNeed:"Este tema necesita al menos 4 tarjetas.",
    backTopic:"← Tarjetas"
  },
  en:{
    searchPh:"Search: bufanda, scarf, weijin, 围巾…", results:"{n} results", result1:"1 result", noResults:"No cards match.",
    tonesTitle:"Tones & sounds", tonesSub:"The four tones and the tricky sounds, with audio",
    quiz:"🎧 Listen & choose", quizTitle:"Listen & choose", replay:"🔊 Hear again",
    quizQ:"What does what you heard mean?", right:"Correct!", wrong:"No, it was",
    score:"Score: {c} of {t}", nextQ:"Next →", quizNeed:"This topic needs at least 4 cards.",
    backTopic:"← Cards"
  },
  zh:{
    searchPh:"搜索：bufanda、scarf、weijin、围巾…", results:"{n} 个结果", result1:"1 个结果", noResults:"没有符合的卡片。",
    tonesTitle:"声调与发音", tonesSub:"四个声调和难发的音，附朗读",
    quiz:"🎧 听音选义", quizTitle:"听音选义", replay:"🔊 再听一次",
    quizQ:"你听到的是什么意思？", right:"答对了！", wrong:"不对，答案是",
    score:"答对：{c} / {t}", nextQ:"下一题 →", quizNeed:"本主题至少需要 4 张卡片。",
    backTopic:"← 卡片"
  }
};
Object.keys(XUI).forEach(l => Object.assign(UI[l], XUI[l]));

function sayZh(text){
  if(!("speechSynthesis" in window)){ alert(T("noTTS")); return; }
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text); u.lang = "zh-CN"; u.rate = 0.75;
  if(zhVoice) u.voice = zhVoice;
  speechSynthesis.speak(u);
}
const el = (tag, cls, text) => { const e = document.createElement(tag); if(cls) e.className = cls; if(text!=null) e.textContent = text; return e; };

/* ---------------------------------------------------------
   SEARCH
   --------------------------------------------------------- */
const fold = s => (s||"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/[\s'’·\-]/g,"");
let searchIndex = null;
function buildIndex(){
  searchIndex = [];
  TOPICS.forEach(t => t.cards.forEach(c => searchIndex.push({
    c, t, hay:[c.s, c.t||"", fold(c.py), fold(c.es), fold(c.en)]
  })));
}
function runSearch(q){
  const box = document.getElementById("searchResults"), tiles = document.getElementById("tiles");
  box.innerHTML = "";
  const raw = q.trim();
  tiles.classList.toggle("hidden", !!raw);
  box.classList.toggle("hidden", !raw);
  if(!raw) return;
  if(!searchIndex) buildIndex();
  const f = fold(raw);
  const hits = searchIndex.filter(x => x.hay[0].includes(raw) || x.hay[1].includes(raw) || x.hay.slice(2).some(h => h.includes(f)));
  // exact matches first
  hits.sort((a,b) => (b.hay.slice(2).includes(f)||b.hay[0]===raw) - (a.hay.slice(2).includes(f)||a.hay[0]===raw));
  box.appendChild(el("div","searchcount", hits.length===1 ? T("result1") : hits.length ? T("results").replace("{n}", hits.length) : T("noResults")));
  hits.slice(0,60).forEach(({c,t}) => {
    const d = el("details","sitem");
    const sum = el("summary");
    const left = el("div","kw");
    left.append(el("div","kzh", c.s + (c.t && c.t!==c.s ? " · "+c.t : "")), el("div","kpy", c.py), el("div","kes", c.es+" · "+c.en));
    const tag = el("span","stopic", t.name[S().lang] + (clLabel(c,t) ? " · " + clLabel(c,t) : ""));
    sum.append(left, tag); d.appendChild(sum);
    const body = el("div","sbody");
    const b = el("button", null, T("hear")); b.onclick = e => { e.preventDefault(); sayZh(c.say||c.s); };
    body.append(b, el("div","sx", xText(c)));
    d.appendChild(body); box.appendChild(d);
  });
}

/* ---------------------------------------------------------
   TONES & SOUNDS reference
   Each item: [characters to speak, label, meaning es/en/zh]
   --------------------------------------------------------- */
const TONES = {
  es:{
    intro:"El chino es un idioma tonal: la misma sílaba con otro tono es otra palabra. Michelle insiste en exagerar los tonos al principio, porque si no se mezclan.",
    sections:[
      {h:"Los cuatro tonos + el neutro", p:"Tocá cada sílaba para escucharla.", items:[
        ["妈","mā — 1.º tono","Alto y plano, largo, como una bocina. «mamá»"],
        ["麻","má — 2.º tono","Sube, como una pregunta en español: ¿má? «adormecido»"],
        ["马","mǎ — 3.º tono","Baja y vuelve a subir. Michelle: va más abajo que el 2.º. «caballo»"],
        ["骂","mà — 4.º tono","Cae de golpe, como un acento enfático. «retar»"],
        ["吗","ma — neutro","Corto y suave, sin tono. La partícula de pregunta."],
        ["妈妈骂马","māma mà mǎ","La frase de la sobrina de Michelle: «mamá reta al caballo»."]
      ]},
      {h:"Consonantes aspiradas y no aspiradas", p:"b, d, g, z, zh, j no llevan aire. p, t, k, c, ch, q salen con un soplo, como la p de «pay» en inglés. Poné la mano frente a la boca: con p tenés que sentir el aire.", items:[
        ["爸","bà — sin aire","como la p de «speak». papá"],
        ["怕","pà — con aire","tener miedo"],
        ["大","dà — sin aire","grande"],
        ["他","tā — con aire","él"],
        ["个","gè — sin aire","clasificador general"],
        ["可","kě — con aire","poder"]
      ]},
      {h:"zh · ch · sh contra z · c · s", p:"Con zh, ch, sh la lengua va hacia atrás, curvada, como la r del inglés americano. Con z, c, s la lengua queda plana detrás de los dientes. Español no tiene la primera serie.", items:[
        ["知","zhī — lengua atrás","saber"],
        ["资","zī — lengua plana","recursos"],
        ["吃","chī — atrás, con aire","comer"],
        ["次","cì — plana, con aire","vez"],
        ["是","shì — atrás","ser"],
        ["四","sì — plana","cuatro"],
        ["十","shí — atrás","diez (no confundir con 四)"]
      ]},
      {h:"j · q · x", p:"La lengua plana y hacia adelante, tocando los dientes de abajo. x es como una s suave, más cerca de «sh» pero sin curvar la lengua.", items:[
        ["叫","jiào","llamarse"],
        ["七","qī — con aire","siete"],
        ["校","xiào","escuela (no confundir con 叫)"],
        ["谢谢","xièxie","gracias"]
      ]},
      {h:"Vocales con trampa", p:"ü es la u francesa: labios en u, lengua en i. iu suena con un poco de o: «liou». La r china se parece a la r del inglés americano.", items:[
        ["女","nǚ — ü","mujer"],
        ["努","nǔ — u","esforzarse"],
        ["六","liù — «liou»","seis"],
        ["人","rén — r","persona"]
      ]},
      {h:"Tonos que cambian", p:"Algunos tonos cambian según lo que viene después.", items:[
        ["你好","nǐ hǎo → ní hǎo","Dos terceros tonos seguidos: el primero pasa a 2.º."],
        ["不客气","bù → bú kèqi","不 antes de un 4.º tono pasa a 2.º."],
        ["不好","bù hǎo","Antes de otros tonos, 不 queda en 4.º."],
        ["一个","yī → yí ge","一 antes de un 4.º tono pasa a 2.º."],
        ["一百","yī → yìbǎi","一 antes de 1.º, 2.º o 3.º tono pasa a 4.º."]
      ]}
    ]
  },
  en:{
    intro:"Mandarin is tonal: the same syllable with another tone is another word. Michelle's advice is to exaggerate the tones at first, or they blur together.",
    sections:[
      {h:"The four tones + neutral", p:"Tap each syllable to hear it.", items:[
        ["妈","mā — 1st tone","High and flat, long, like a car horn. \"mom\""],
        ["麻","má — 2nd tone","Rises, like a question: má? \"numb\""],
        ["马","mǎ — 3rd tone","Dips down, then back up. Lower than the 2nd. \"horse\""],
        ["骂","mà — 4th tone","Falls sharply, like an emphatic \"No!\" \"to scold\""],
        ["吗","ma — neutral","Short and light, no tone. The question particle."],
        ["妈妈骂马","māma mà mǎ","Michelle's niece's mishearing: \"mom scolds the horse\"."]
      ]},
      {h:"Aspirated vs unaspirated", p:"b, d, g, z, zh, j have no puff of air. p, t, k, c, ch, q come with a puff, like the p in \"pay\". Hold your hand in front of your mouth: you should feel the air on p.", items:[
        ["爸","bà — no air","like the p in \"speak\". dad"],
        ["怕","pà — with air","to be afraid"],
        ["大","dà — no air","big"],
        ["他","tā — with air","he"],
        ["个","gè — no air","general measure word"],
        ["可","kě — with air","can"]
      ]},
      {h:"zh · ch · sh vs z · c · s", p:"For zh, ch, sh the tongue curls back, like an American r. For z, c, s the tongue stays flat behind the teeth.", items:[
        ["知","zhī — tongue back","to know"],
        ["资","zī — tongue flat","resources"],
        ["吃","chī — back, with air","to eat"],
        ["次","cì — flat, with air","time (occurrence)"],
        ["是","shì — back","to be"],
        ["四","sì — flat","four"],
        ["十","shí — back","ten (don't mix up with 四)"]
      ]},
      {h:"j · q · x", p:"Tongue flat and forward, touching the lower teeth. x is a soft hiss, close to \"sh\" but without curling the tongue.", items:[
        ["叫","jiào","to be called"],
        ["七","qī — with air","seven"],
        ["校","xiào","school (don't mix up with 叫)"],
        ["谢谢","xièxie","thank you"]
      ]},
      {h:"Tricky vowels", p:"ü is the French u: lips rounded, tongue as for i. iu sounds with a bit of o: \"liou\". Chinese r is close to an American r.", items:[
        ["女","nǚ — ü","woman"],
        ["努","nǔ — u","to strive"],
        ["六","liù — \"liou\"","six"],
        ["人","rén — r","person"]
      ]},
      {h:"Tone changes", p:"Some tones change depending on what follows.", items:[
        ["你好","nǐ hǎo → ní hǎo","Two 3rd tones in a row: the first becomes 2nd."],
        ["不客气","bù → bú kèqi","不 before a 4th tone becomes 2nd."],
        ["不好","bù hǎo","Before other tones, 不 stays 4th."],
        ["一个","yī → yí ge","一 before a 4th tone becomes 2nd."],
        ["一百","yī → yìbǎi","一 before a 1st, 2nd or 3rd tone becomes 4th."]
      ]}
    ]
  },
  zh:{
    intro:"汉语是声调语言：同一个音节换了声调就是另一个词。Michelle 老师建议一开始把声调读得夸张一点，不然会混在一起。",
    sections:[
      {h:"四个声调和轻声", p:"点击音节听发音。", items:[
        ["妈","mā — 第一声","高而平，拉长，像喇叭。妈妈"],
        ["麻","má — 第二声","上扬，像问问题。发麻"],
        ["马","mǎ — 第三声","先降后升，比第二声更低。马"],
        ["骂","mà — 第四声","从高处快速下降。骂"],
        ["吗","ma — 轻声","又短又轻。疑问语气词"],
        ["妈妈骂马","māma mà mǎ","Michelle 老师外甥女听错的那句话。"]
      ]},
      {h:"送气音与不送气音", p:"b d g z zh j 不送气；p t k c ch q 送气。把手放在嘴前，发 p 时能感觉到气流。", items:[
        ["爸","bà — 不送气","爸爸"],["怕","pà — 送气","害怕"],
        ["大","dà — 不送气","大"],["他","tā — 送气","他"],
        ["个","gè — 不送气","个"],["可","kě — 送气","可以"]
      ]},
      {h:"zh ch sh 与 z c s", p:"zh ch sh 舌尖上翘（卷舌）；z c s 舌头平放在齿后（平舌）。", items:[
        ["知","zhī — 卷舌","知道"],["资","zī — 平舌","资源"],
        ["吃","chī — 卷舌","吃"],["次","cì — 平舌","次"],
        ["是","shì — 卷舌","是"],["四","sì — 平舌","四"],["十","shí — 卷舌","十（别和四混淆）"]
      ]},
      {h:"j q x", p:"舌面平放向前，舌尖抵下齿。", items:[
        ["叫","jiào","叫"],["七","qī — 送气","七"],["校","xiào","学校（别和叫混淆）"],["谢谢","xièxie","谢谢"]
      ]},
      {h:"容易错的韵母", p:"ü 嘴唇圆，舌头像发 i；iu 带一点 o 的音。", items:[
        ["女","nǚ — ü","女"],["努","nǔ — u","努力"],["六","liù","六"],["人","rén — r","人"]
      ]},
      {h:"变调", p:"有些字的声调会随后面的字改变。", items:[
        ["你好","nǐ hǎo → ní hǎo","两个第三声相连，第一个变第二声。"],
        ["不客气","bù → bú kèqi","不 在第四声前变第二声。"],
        ["不好","bù hǎo","在其他声调前，不 仍读第四声。"],
        ["一个","yī → yí ge","一 在第四声前变第二声。"],
        ["一百","yī → yìbǎi","一 在第一、二、三声前变第四声。"]
      ]}
    ]
  }
};
function renderTones(){
  const box = document.getElementById("tonesBody"); box.innerHTML = "";
  const d = TONES[S().lang] || TONES.es;
  box.appendChild(el("p","tintro", d.intro));
  d.sections.forEach(sec => {
    const s = el("div","tsec");
    s.append(el("h3",null,sec.h), el("p","tp",sec.p));
    const grid = el("div","tgrid");
    sec.items.forEach(([zh, label, note]) => {
      const b = el("button","titem");
      b.append(el("span","tzh",zh), el("span","tlab",label), el("span","tnote",note));
      b.onclick = () => sayZh(zh);
      grid.appendChild(b);
    });
    s.appendChild(grid); box.appendChild(s);
  });
}
function openTones(){ show("tones"); renderTones(); }

/* ---------------------------------------------------------
   LISTENING QUIZ (per topic)
   --------------------------------------------------------- */
let quiz = {card:null, opts:[], answered:false, c:0, t:0, last:null};
const quizPool = () => topic.cards.filter(c => !/[+=]/.test(c.s));   // skip rule cards like "数 + 量词 + 名词"
function quizMeaning(c){ return S().lang==="en" ? c.en : c.es; }
function openQuiz(){
  quiz.c = 0; quiz.t = 0; quiz.last = null;
  show("quiz");
  document.getElementById("quizTopic").textContent = topic.name[S().lang];
  nextQuiz();
}
function nextQuiz(){
  const pool = quizPool();
  const box = document.getElementById("quizOpts"); box.innerHTML = "";
  document.getElementById("quizReveal").innerHTML = "";
  document.getElementById("quizNext").classList.add("hidden");
  if(pool.length < 4){ box.appendChild(el("div","empty",T("quizNeed"))); return; }
  let c; do{ c = pool[Math.floor(Math.random()*pool.length)]; }while(c===quiz.last && pool.length>1);
  quiz.last = c; quiz.card = c; quiz.answered = false;
  const others = pool.filter(x => x!==c && quizMeaning(x)!==quizMeaning(c)).sort(()=>Math.random()-.5).slice(0,3);
  quiz.opts = [c, ...others].sort(()=>Math.random()-.5);
  quiz.opts.forEach(o => {
    const b = el("button","qopt", quizMeaning(o));
    b.onclick = () => answerQuiz(o, b);
    box.appendChild(b);
  });
  renderScore();
  sayZh(c.say||c.s);
}
function answerQuiz(o, btn){
  if(quiz.answered) return;
  quiz.answered = true; quiz.t++;
  const ok = o===quiz.card; if(ok) quiz.c++;
  document.querySelectorAll("#quizOpts .qopt").forEach((b,i) => {
    if(quiz.opts[i]===quiz.card) b.classList.add("right");
    else if(b===btn) b.classList.add("wrong");
    b.disabled = true;
  });
  const c = quiz.card, r = document.getElementById("quizReveal");
  r.append(el("div","qmsg", ok ? T("right") : T("wrong")+":"),
           el("div","zh", c.s + (c.t && c.t!==c.s ? " · "+c.t : "")),
           el("div","py", c.py), el("div","kes", c.es+" · "+c.en));
  renderScore();
  document.getElementById("quizNext").classList.remove("hidden");
}
function renderScore(){ document.getElementById("quizScore").textContent = T("score").replace("{c}",quiz.c).replace("{t}",quiz.t); }

/* ---------------------------------------------------------
   WIRING
   --------------------------------------------------------- */
const _show = show;
show = function(v){
  ["tones","quiz"].forEach(n => document.getElementById(n+"View").classList.add("hidden"));
  if(v==="tones" || v==="quiz"){
    ["auth","home","study","known","drill"].forEach(n => document.getElementById(n+"View").classList.add("hidden"));
    document.getElementById(v+"View").classList.remove("hidden");
    window.scrollTo(0,0);
    return;
  }
  _show(v);
};
const _applyUI = applyUI;
applyUI = function(){
  _applyUI();
  const sb = document.getElementById("searchBox"); if(sb) sb.placeholder = T("searchPh");
  if(sb && sb.value) runSearch(sb.value);
  if(!document.getElementById("tonesView").classList.contains("hidden")) renderTones();
  if(!document.getElementById("quizView").classList.contains("hidden")){
    document.getElementById("quizTopic").textContent = topic.name[S().lang];
    renderScore();
  }
};
const _renderTiles = renderTiles;
renderTiles = function(){
  _renderTiles();
  const box = document.getElementById("tiles");
  const d = el("button","tile drill");
  d.innerHTML = `<span class="glyph">声</span><span class="name"></span><span class="meta"></span>`;
  d.querySelector(".name").textContent = T("tonesTitle");
  d.querySelector(".meta").textContent = T("tonesSub");
  d.onclick = openTones;
  box.insertBefore(d, box.firstChild);
};

document.getElementById("searchBox").addEventListener("input", e => runSearch(e.target.value));
document.getElementById("tonesHome").onclick = () => show("home");
document.getElementById("quizBtn").onclick = openQuiz;
document.getElementById("quizBack").onclick = () => { show("study"); renderCard(); };
document.getElementById("quizReplay").onclick = () => quiz.card && sayZh(quiz.card.say||quiz.card.s);
document.getElementById("quizNext").onclick = nextQuiz;
document.addEventListener("keydown", e => {
  if(document.getElementById("quizView").classList.contains("hidden")) return;
  if(["1","2","3","4"].includes(e.key)){ const b = document.querySelectorAll("#quizOpts .qopt")[+e.key-1]; if(b) b.click(); }
  else if(e.key===" " || e.key==="Enter"){ e.preventDefault(); if(quiz.answered) nextQuiz(); }
  else if(e.key.toLowerCase()==="s") document.getElementById("quizReplay").click();
});
applyUI();   // extras loaded: refresh tiles and placeholders
