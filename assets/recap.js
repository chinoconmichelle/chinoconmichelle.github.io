/* =========================================================
   CLASS RECAPS: what was taught in each class (data/classes.js)
   Loaded after extras.js; uses S, T, show, applyUI, sayZh, el, classDeck, openDeck.
   A class tile opens its recap (when there is one); the recap links to the class cards.
   ========================================================= */

const RUI = {
  es:{ recapBtn:"📝 Resumen", recapTitle:"Resumen de la clase", studyN:"📚 Estudiar las {n} tarjetas de esta clase",
       tipsH:"Consejos de Michelle", hwH:"Tarea", checkH:"¿Te acordás?", checkSub:"Decilo en voz alta en chino y después tocá para ver la respuesta.",
       tapShow:"Tocá para ver", tapHear:"Tocá una frase para escucharla." },
  en:{ recapBtn:"📝 Recap", recapTitle:"Class recap", studyN:"📚 Study this class's {n} cards",
       tipsH:"Michelle's tips", hwH:"Homework", checkH:"Can you remember?", checkSub:"Say it out loud in Chinese, then tap to see the answer.",
       tapShow:"Tap to see", tapHear:"Tap a phrase to hear it." },
  zh:{ recapBtn:"📝 总结", recapTitle:"课堂总结", studyN:"📚 学习本课的 {n} 张卡片",
       tipsH:"老师的建议", hwH:"作业", checkH:"还记得吗？", checkSub:"先用中文大声说出来，再点开看答案。",
       tapShow:"点击查看", tapHear:"点击句子可以听发音。" }
};
Object.keys(RUI).forEach(l => Object.assign(UI[l], RUI[l]));

const NOTES = window.CLASS_NOTES || {};
let recapKey = null;
const L = o => (o && (o[S().lang] || o.es)) || "";

function openRecap(k){ recapKey = k; show("recap"); renderRecap(); }

function renderRecap(){
  const n = NOTES[recapKey]; if(!n) return;
  const deck = classDeck(recapKey);
  document.getElementById("recapTitle").textContent = CLASSES[recapKey][S().lang];
  const body = document.getElementById("recapBody"); body.innerHTML = "";

  body.appendChild(el("p","rintro", L(n.intro)));
  body.appendChild(el("p","rsource", L(n.source)));
  const go = el("button","on rstudy", T("studyN").replace("{n}", deck.cards.length));
  go.onclick = () => openDeck(deck);
  body.appendChild(go);
  body.appendChild(el("p","rhint", T("tapHear")));

  n.parts.forEach(p => {
    const sec = el("section","rsec");
    sec.appendChild(el("h3", null, L(p.h)));
    sec.appendChild(el("div","rp", L(p.p)));
    if(p.ex && p.ex.length){
      const list = el("div","rex");
      p.ex.forEach(([zh, py, es, en]) => {
        const row = el("button","rrow");
        row.append(el("span","rzh", zh), el("span","rpy", py), el("span","rmean", es + " · " + en));
        row.onclick = () => sayZh(zh.split(" = ")[0].replace(/[A-Za-z]+/g, ""));
        list.appendChild(row);
      });
      sec.appendChild(list);
    }
    body.appendChild(sec);
  });

  if(n.tips){
    const sec = el("section","rsec rtips");
    sec.appendChild(el("h3", null, T("tipsH")));
    const ul = el("ul");
    (n.tips[S().lang] || n.tips.es).forEach(t => ul.appendChild(el("li", null, t)));
    sec.appendChild(ul); body.appendChild(sec);
  }
  if(n.homework){
    const sec = el("section","rsec rhw");
    sec.appendChild(el("h3", null, T("hwH")));
    sec.appendChild(el("div","rp", L(n.homework)));
    body.appendChild(sec);
  }
  if(n.check && n.check.length){
    const sec = el("section","rsec rcheck");
    sec.appendChild(el("h3", null, T("checkH")));
    sec.appendChild(el("div","rp", T("checkSub")));
    n.check.forEach(c => {
      const q = S().lang==="zh" ? "「" + c.q.es.replace(/[«»]/g, "") + "」用中文怎么说？" : L(c.q);
      const item = el("button","rq");
      const ans = el("span","ra hidden");
      ans.append(el("span","rzh", c.a), el("span","rpy", c.py));
      item.append(el("span","rqq", q), el("span","rtap", T("tapShow")), ans);
      item.onclick = () => {
        if(ans.classList.contains("hidden")){ ans.classList.remove("hidden"); item.querySelector(".rtap").classList.add("hidden"); }
        sayZh(c.a.replace(/[A-Za-z]+/g, "").replace(/·/g, "，"));
      };
      sec.appendChild(item);
    });
    body.appendChild(sec);
  }
}

/* ---------- wiring ---------- */
const _showR = show;
show = function(v){
  document.getElementById("recapView").classList.add("hidden");
  if(v==="recap"){
    ["auth","home","study","known","drill","tones","quiz"].forEach(n => document.getElementById(n+"View").classList.add("hidden"));
    document.getElementById("recapView").classList.remove("hidden");
    window.scrollTo(0,0);
    return;
  }
  _showR(v);
  const rb = document.getElementById("recapBtn");
  if(rb) rb.classList.toggle("hidden", !(v==="study" && topic && topic.virtual && NOTES[topic.cl]));
};
const _openClassR = openClass;
openClass = function(k){ if(NOTES[k]) openRecap(k); else _openClassR(k); };
const _applyUIR = applyUI;
applyUI = function(){
  _applyUIR();
  if(!document.getElementById("recapView").classList.contains("hidden")) renderRecap();
};
document.getElementById("recapHome").onclick = () => show("home");
document.getElementById("recapBtn").onclick = () => openRecap(topic.cl);
applyUI();
