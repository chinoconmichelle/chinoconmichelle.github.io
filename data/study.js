/* "Para estudiar": the study list Michelle sent (1 Nov 2026), rendered by assets/study.js.
   Each section lists existing card ids (progress is shared with their topics). Text in es/en/zh;
   Chinese inside es/en text carries its pinyin (see CLAUDE.md). */
window.STUDY = {
  date:{es:"1 de noviembre", en:"November 1", zh:"11月1日"},
  quote:{
    es:"«Principalmente los números, los días de semana, los meses y la fecha; después también, si podés, la familia y los saludos cortos.»",
    en:"\"Mainly numbers, the days of the week, the months and the date; then also, if you can, the family and the short greetings.\"",
    zh:"「主要是数字、星期、月份和日期；如果可以的话，再复习家人称谓和简短的问候语。」"},
  intro:{
    es:"Todo lo que pidió Michelle en una sola página. Las cuatro primeras partes son las principales. Tocá una palabra para escucharla, o estudiá cada parte con tarjetas: lo que marques como aprendido queda guardado también en su tema.",
    en:"Everything Michelle asked for on one page. The first four parts are the main ones. Tap a word to hear it, or study each part with flashcards: whatever you mark as learned is also saved in its topic.",
    zh:"老师要求复习的内容都在这一页。前四部分是重点。点击词语可以听发音，也可以用卡片逐部分练习，学会的卡片在原来的主题里也会记录。"},
  sections:[
    {key:"num", glyph:"数", main:true,
     h:{es:"1. Los números", en:"1. Numbers", zh:"1. 数字"},
     tip:{es:"Solo hay diez sonidos para aprender: 零 (líng) 0 al 十 (shí) 10. El resto es lógica: 二十五 (èrshíwǔ) = 2 × 10 + 5. El diez va solo, 十 (shí), sin 一 (yī) adelante; el cien sí lo lleva: 一百 (yìbǎi). Y delante de un clasificador, «dos» es 两 (liǎng): 两个 (liǎng ge).",
          en:"There are only ten sounds to learn: 零 (líng) 0 to 十 (shí) 10. The rest is logic: 二十五 (èrshíwǔ) = 2 × 10 + 5. Ten stands alone, 十 (shí), with no 一 (yī) in front; a hundred does take it: 一百 (yìbǎi). And before a measure word, \"two\" is 两 (liǎng): 两个 (liǎng ge).",
          zh:"只要记住零到十这十个音，其余都是逻辑：二十五＝二×十＋五。十前面不加一，一百要加一。量词前用两：两个。"},
     drill:true,
     ids:["num-01","num-02","num-03","num-04","num-05","num-06","num-07","num-08","num-09","num-10","num-11","num-16","num-17","num-18","num-19","num-20","num-12","num-21","num-22","num-23","num-24","num-15","num-25","num-13","num-26","num-14","num-27"]},
    {key:"week", glyph:"周", main:true,
     h:{es:"2. Los días de la semana", en:"2. Days of the week", zh:"2. 星期"},
     tip:{es:"Semana + número del 1 al 6: 星期一 (xīngqīyī) es lunes, 星期六 (xīngqīliù) es sábado. El domingo no lleva número: 星期天 (xīngqītiān) o 星期日 (xīngqīrì). Las mismas reglas valen con 礼拜 (lǐbài), la que más usa Michelle, y con 周 (zhōu), la formal (domingo: solo 周日 zhōurì).",
          en:"Week + a number from 1 to 6: 星期一 (xīngqīyī) is Monday, 星期六 (xīngqīliù) is Saturday. Sunday has no number: 星期天 (xīngqītiān) or 星期日 (xīngqīrì). The same rules work with 礼拜 (lǐbài), the one Michelle uses most, and 周 (zhōu), the formal one (Sunday: only 周日 zhōurì).",
          zh:"星期＋一到六：星期一……星期六。星期天／星期日没有数字。礼拜（老师最常用）和周（正式，只说周日）规则一样。"},
     ids:["fec-01","fec-02","fec-03","fec-04","fec-05","fec-06","fec-07","fec-08","fec-09","fec-10","fec-11","fec-12","fec-13","fec-14"]},
    {key:"month", glyph:"月", main:true,
     h:{es:"3. Los meses", en:"3. The months", zh:"3. 月份"},
     tip:{es:"Número + 月 (yuè, luna): 一月 (yīyuè) enero … 十二月 (shí'èryuè) diciembre. «Una vuelta de la luna es un mes.» Ojo: 四月 (sìyuè, abril) y 十月 (shíyuè, octubre) se confunden; y 一月 (yīyuè) es enero, pero 一个月 (yí ge yuè) es «un mes» de duración.",
          en:"Number + 月 (yuè, moon): 一月 (yīyuè) January … 十二月 (shí'èryuè) December. \"One turn of the moon is a month.\" Watch out: 四月 (sìyuè, April) and 十月 (shíyuè, October) get mixed up; and 一月 (yīyuè) is January, but 一个月 (yí ge yuè) is \"one month\" of time.",
          zh:"数字＋月：一月……十二月。月亮转一圈是一个月。注意四月和十月；一月≠一个月。"},
     ids:["fec-15","fec-16","fec-17","fec-18","fec-19","fec-20","fec-21","fec-22","fec-23","fec-24","fec-25","fec-26","fec-27","fec-28"]},
    {key:"date", glyph:"日", main:true, today:true,
     h:{es:"4. La fecha", en:"4. The date", zh:"4. 日期"},
     tip:{es:"Al revés que en español: año, mes y día. El año se dice cifra por cifra: 2026 = 二〇二六 (èr líng èr liù). Al hablar el día es 号 (hào), por escrito 日 (rì). Para preguntar: 今天是几月几号？ (jīntiān shì jǐ yuè jǐ hào?), y ayer, 昨天 (zuótiān).",
          en:"The reverse of Spanish: year, month, day. The year is said digit by digit: 2026 = 二〇二六 (èr líng èr liù). In speech the day is 号 (hào), in writing 日 (rì). To ask: 今天是几月几号？ (jīntiān shì jǐ yuè jǐ hào?), and yesterday, 昨天 (zuótiān).",
          zh:"顺序：年、月、日。年份逐个数字读：二〇二六。口语用号，书面用日。今天是几月几号？昨天。"},
     ids:["fec-29","fec-30","fec-31","fec-34","fec-35","fec-36","fec-33","fec-38","fec-39","fec-40","fec-41","fec-44","fec-47"]},
    {key:"family", glyph:"家", main:false,
     h:{es:"5. La familia", en:"5. The family", zh:"5. 家人称谓"},
     tip:{es:"Si podés. En chino cada pariente tiene su palabra: si es mayor o menor que vos, y si es del lado del papá o de la mamá. Empezá por los cercanos: 爸爸 (bàba), 妈妈 (māma), los cuatro hermanos 哥哥 (gēge), 姐姐 (jiějie), 弟弟 (dìdi), 妹妹 (mèimei), y los abuelos.",
          en:"If you can. In Chinese every relative has their own word: older or younger than you, and on the father's or mother's side. Start with the close ones: 爸爸 (bàba), 妈妈 (māma), the four siblings 哥哥 (gēge), 姐姐 (jiějie), 弟弟 (dìdi), 妹妹 (mèimei), and the grandparents.",
          zh:"有时间再复习。汉语亲属称谓分长幼、分父系母系。先从爸爸、妈妈、哥哥、姐姐、弟弟、妹妹和爷爷奶奶、外公外婆开始。"},
     ids:["fam-01","fam-02","fam-07","fam-08","fam-09","fam-10","fam-11","fam-12","fam-13","fam-14","fam-15","fam-16","fam-17","fam-03","fam-04","fam-05","fam-06","fam-18","fam-19","fam-20","fam-21","fam-22","fam-23","fam-24","fam-25","fam-26","fam-27","fam-28","fam-29"]},
    {key:"greet", glyph:"好", main:false,
     h:{es:"6. Los saludos cortos", en:"6. Short greetings", zh:"6. 简短问候语"},
     tip:{es:"Si podés. Dos series: con 好 (hǎo, bien) — 早上好 (zǎoshang hǎo), 下午好 (xiàwǔ hǎo), 晚上好 (wǎnshang hǎo) — y con 安 (ān, paz) — 早安 (zǎo'ān), 午安 (wǔ'ān), 晚安 (wǎn'ān). Ojo: 晚安 (wǎn'ān) es solo para irse o ir a dormir.",
          en:"If you can. Two series: with 好 (hǎo, good) — 早上好 (zǎoshang hǎo), 下午好 (xiàwǔ hǎo), 晚上好 (wǎnshang hǎo) — and with 安 (ān, peace) — 早安 (zǎo'ān), 午安 (wǔ'ān), 晚安 (wǎn'ān). Careful: 晚安 (wǎn'ān) is only for leaving or going to bed.",
          zh:"有时间再复习。两组：早上好、下午好、晚上好；早安、午安、晚安（晚安只在告别或睡前说）。"},
     ids:["sal-01","sal-02","sal-03","sal-05","sal-04","sal-07","sal-06","sal-09","sal-08","sal-10","sal-11","sal-12","sal-16","sal-17","sal-18","sal-19","sal-20","sal-21","sal-22","sal-23"]}
  ]
};
