/* Translations of the character explanations (x). Each data/i18n/<topic>.js calls
   XL("<topicId>", {"<cardId>": {en:"...", zh:"..."}}) and the texts are attached as card.x_en / card.x_zh.
   Missing translations fall back to the Spanish original. */
window.XL = function(topicId, map){
  const t = (window.TOPICS||[]).find(t => t.id===topicId); if(!t) return;
  t.cards.forEach(c => { const m = map[c.id]; if(m){ if(m.en) c.x_en = m.en; if(m.zh) c.x_zh = m.zh; } });
};
