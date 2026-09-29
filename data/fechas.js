/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   w optional writing tip {es, en, zh} (shown on the stroke-order page),
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"fechas", glyph:"月",
  name:{"es": "Días, meses y fechas", "en": "Days, months & dates", "zh": "星期、月份和日期"},
  cl:"c4",
  cards:[
  {id:"fec-01",s:"星期",py:"xīngqī",es:"semana (la forma de los manuales)",en:"week (the textbook word)",
   x:{
es:`QUÉ ES: «semana». Michelle enseñó tres formas de nombrar los días de la semana: 星期 (xīngqī), 礼拜 (lǐbài) y 周 (zhōu). 星期 es la que traen todos los manuales y la más neutra: sirve hablando y escribiendo, en China y en Taiwán.

LOS CARACTERES:
星 (xīng) estrella: arriba 日 (rì, sol, un astro que brilla) y abajo 生 (shēng, un brote que sale de la tierra). En la forma antigua había tres astros (晶 jīng) sobre 生; 生 aporta el sonido (shēng → xīng) y la idea de «nacer, aparecer»: las luces que aparecen en el cielo.
期 (qī) período, plazo: 其 (qí) a la izquierda da el sonido; 月 (yuè, la luna) a la derecha da el sentido, porque la luna medía el tiempo.
星期 (xīngqī) = «período de las estrellas». Como explicó Michelle: estrella + período.

POR QUÉ «ESTRELLAS»: la China antigua no tenía semana de siete días; contaba el mes en tandas de diez días. La semana llegó en el siglo XIX con los misioneros y el calendario occidental, y 星期 (xīngqī) se difundió como palabra neutra. Probablemente recuerda a los «siete astros» (sol, luna y cinco planetas) de la astrología antigua; ese origen exacto está poco documentado.

CÓMO SE USA: 星期 (xīngqī) + número = día. 星期一 (xīngqīyī) lunes … 星期六 (xīngqīliù) sábado. El domingo es especial: 星期天 (xīngqītiān) o 星期日 (xīngqīrì).
«Una semana» = 一个星期 (yí ge xīngqī), con clasificador 个 (ge).
¿Qué día es hoy? = 今天星期几？ (jīntiān xīngqī jǐ?)

PRONUNCIACIÓN: xīngqī, dos primeros tonos, altos y planos. x como una «s» con la punta de la lengua abajo; q como «ch» con aire y la lengua plana.`,
en:`WHAT IT IS: "week". Michelle taught three ways to name the days of the week: 星期 (xīngqī), 礼拜 (lǐbài) and 周 (zhōu). 星期 is the one every textbook uses and the most neutral: fine in speech and writing, in mainland China and Taiwan.

THE CHARACTERS:
星 (xīng) star: 日 (rì, sun, a shining body) on top and 生 (shēng, a sprout coming out of the ground) below. The old form had three stars (晶 jīng) above 生; 生 gives the sound (shēng → xīng) and the idea of "being born, appearing": the lights that appear in the sky.
期 (qī) period, term: 其 (qí) on the left gives the sound; 月 (yuè, the moon) on the right gives the meaning, because the moon measured time.
星期 (xīngqī) = "star period". As Michelle put it: star + period.

WHY "STARS": ancient China had no seven-day week; the month was counted in ten-day blocks. The week arrived in the 19th century with missionaries and the Western calendar, and 星期 (xīngqī) spread as a neutral word. It probably echoes the "seven luminaries" (sun, moon and five planets) of old astrology; its exact origin is poorly documented.

HOW IT'S USED: 星期 (xīngqī) + number = day. 星期一 (xīngqīyī) Monday … 星期六 (xīngqīliù) Saturday. Sunday is special: 星期天 (xīngqītiān) or 星期日 (xīngqīrì).
"One week" = 一个星期 (yí ge xīngqī), with the measure word 个 (ge).
What day is it today? = 今天星期几？ (jīntiān xīngqī jǐ?)

PRONUNCIATION: xīngqī, two first tones, high and level. x like an "s" with the tongue tip down; q like "ch" with air and a flat tongue.`,
zh:`星期：老师教了三种说法：星期、礼拜、周。星期最通用，课本都用。
星：日（发光的星体）＋生（声旁，也有"出现"之意），古字上面是三颗星。期：其（声旁）＋月（月亮计时）。星期＝"星辰的周期"。
古代中国没有七天一周，按"旬"（十天）计日；十九世纪随传教士和西历传入。
用法：星期＋数字：星期一……星期六；星期天／星期日。一个星期。今天星期几？`}},
  {id:"fec-02",s:"礼拜",t:"禮拜",py:"lǐbài",es:"semana (forma coloquial; «culto»)",en:"week (colloquial; \"worship\")",
   x:{
es:`QUÉ ES: la segunda forma de decir «semana». Michelle: «yo digo más 礼拜 (lǐbài) que 星期 (xīngqī); creo que es más fácil de pronunciar». Es muy común hablando, sobre todo en Taiwán y el sur de China. Ya lo conocés de 下个礼拜见 (xià ge lǐbài jiàn), «nos vemos la semana que viene».

LOS CARACTERES:
礼 (lǐ) rito, ceremonia: 礻 (shì, el altar, forma de 示) + 乚. En la forma tradicional 禮, a la derecha está 豊 (lǐ), un recipiente ritual lleno de ofrendas: el altar y las ofrendas, el rito.
拜 (bài) inclinarse, venerar: dos manos juntas (手 shǒu repetido, muy deformado) inclinadas en reverencia.
礼拜 (lǐbài) = «rito + reverencia»: el culto. Michelle lo tradujo como «prosternarse».

POR QUÉ «CULTO»: en el siglo XIX los misioneros cristianos llamaron 礼拜日 (lǐbàirì) «día del culto» al domingo, y los otros días se numeraron a partir de él: 礼拜一 (lǐbàiyī) = «culto + 1» = lunes. Es la huella directa del calendario cristiano.

CÓMO SE USA: igual que 星期 (xīngqī): 礼拜一 (lǐbàiyī) lunes … 礼拜六 (lǐbàiliù) sábado; domingo 礼拜天 (lǐbàitiān) o 礼拜日 (lǐbàirì). «La semana que viene» = 下个礼拜 (xià ge lǐbài). Más de charla que de papel: en un formulario vas a ver 星期 o 周 (zhōu).

PRONUNCIACIÓN: lǐbài: 3.er tono (baja) + 4.º (cae de golpe). b sin aire, como la p de «speak».`,
en:`WHAT IT IS: the second way to say "week". Michelle: "I say 礼拜 (lǐbài) more than 星期 (xīngqī); I think it's easier to pronounce". It's very common in speech, especially in Taiwan and southern China. You already know it from 下个礼拜见 (xià ge lǐbài jiàn), "see you next week".

THE CHARACTERS:
礼 (lǐ) rite, ceremony: 礻 (shì, the altar, a form of 示) + 乚. In the traditional form 禮 the right side is 豊 (lǐ), a ritual vessel full of offerings: altar and offerings, the rite.
拜 (bài) to bow, to worship: two hands together (手 shǒu twice, much distorted) bowing in reverence.
礼拜 (lǐbài) = "rite + bow": worship. Michelle translated it as "to prostrate oneself".

WHY "WORSHIP": in the 19th century Christian missionaries called Sunday 礼拜日 (lǐbàirì), "worship day", and the other days were numbered from it: 礼拜一 (lǐbàiyī) = "worship + 1" = Monday. It's the direct trace of the Christian calendar.

HOW IT'S USED: like 星期 (xīngqī): 礼拜一 (lǐbàiyī) Monday … 礼拜六 (lǐbàiliù) Saturday; Sunday 礼拜天 (lǐbàitiān) or 礼拜日 (lǐbàirì). "Next week" = 下个礼拜 (xià ge lǐbài). More for talking than for paper: on a form you'll see 星期 or 周 (zhōu).

PRONUNCIATION: lǐbài: 3rd tone (dips) + 4th (drops sharply). b without air, like the p in "speak".`,
zh:`礼拜：第二种说法，口语常用，台湾和南方尤其多。老师说她比较常说礼拜，比较好念。
礼：礻（祭台）；繁体禮，右边豊是盛满祭品的礼器。拜：两手合拢行礼。礼拜＝敬拜。
来源：十九世纪传教士称星期日为礼拜日，其他日子依次编号：礼拜一＝礼拜后第一天。
用法：礼拜一……礼拜六，礼拜天／礼拜日；下个礼拜。`}},
  {id:"fec-03",s:"周",t:"週",py:"zhōu",es:"semana (forma formal y escrita)",en:"week (formal, written)",
   x:{
es:`QUÉ ES: la tercera forma. Michelle: «周 (zhōu) es más formal; generalmente en las empresas dicen 周». Es la que ves escrita en calendarios, horarios, apps, carteles y noticias, porque es corta.

EL CARÁCTER:
周 (zhōu) quiere decir «vuelta completa, ciclo, alrededor»: la semana es un ciclo que vuelve a empezar. En la forma antigua era un campo cuadriculado y lleno de sembrados (por eso dentro tiene 口 kǒu y encima algo parecido a 土 tǔ); de «completo, todo alrededor» salió «ciclo». Ese origen es el más citado, pero discutido.
En Taiwán y en chino tradicional, para «semana» se escribe 週 (zhōu), con 辶 (zǒu, caminar): el ciclo que se recorre. 周 sin 辶 también es un apellido muy común (周杰伦 Zhōu Jiélún, el cantante taiwanés).

CÓMO SE USA: 周 (zhōu) + número, SIN nada en el medio: 周一 (zhōuyī) lunes … 周六 (zhōuliù) sábado. El domingo SOLO es 周日 (zhōurì): no se dice 周天 (zhōutiān) — ver la tarjeta de 周日.
«Esta semana» 本周 (běn zhōu) · «la semana que viene» 下周 (xiàzhōu) · «fin de semana» 周末 (zhōumò).
OJO: 周 no lleva 个 (ge): 下周 (xiàzhōu), no «下个周 (xià ge zhōu)».

PRONUNCIACIÓN: zhōu, primer tono, alto y largo. zh con la lengua curvada hacia atrás; ou suena «ou». Michelle lo dijo «chou», sin aire.`,
en:`WHAT IT IS: the third way. Michelle: "周 (zhōu) is more formal; companies generally say 周". It's what you see written on calendars, timetables, apps, signs and in the news, because it's short.

THE CHARACTER:
周 (zhōu) means "a full turn, a cycle, all around": the week is a cycle that starts over. The old form was a field in a grid, full of crops (hence 口 kǒu inside and something like 土 tǔ above it); from "complete, all around" came "cycle". That origin is the most quoted but disputed.
In Taiwan and traditional Chinese, "week" is written 週 (zhōu), with 辶 (zǒu, walking): the cycle you go around. 周 without 辶 is also a very common surname (周杰伦 Zhōu Jiélún, the Taiwanese singer).

HOW IT'S USED: 周 (zhōu) + number, with NOTHING in between: 周一 (zhōuyī) Monday … 周六 (zhōuliù) Saturday. Sunday is ONLY 周日 (zhōurì): not 周天 (zhōutiān) — see the 周日 card.
"This week" 本周 (běn zhōu) · "next week" 下周 (xiàzhōu) · "weekend" 周末 (zhōumò).
CAREFUL: 周 takes no 个 (ge): 下周 (xiàzhōu), not "下个周 (xià ge zhōu)".

PRONUNCIATION: zhōu, first tone, high and long. zh with the tongue curled back; ou sounds "oh". Michelle said it "chou", without air.`,
zh:`周：第三种说法，比较正式，公司、日历、手机上常用。老师说周比较正式，公司常说。
周：本义周全、环绕，引申为循环一周（字源常说是田地里布满庄稼，有争议）。台湾写"週"，加辶。周也是常见的姓（周杰伦）。
用法：周一……周六，星期天只说周日，不说周天。本周、下周、周末。周前面不加"个"。`}},
  {id:"fec-04",s:"星期一",py:"xīngqīyī",es:"lunes",en:"Monday",
   x:{
es:`QUÉ ES: «lunes». 星期 (xīngqī, semana) + 一 (yī): el día número 1 de la semana, que en China empieza el lunes.

LOS CARACTERES:
星期 (xīngqī) = 星 (xīng, estrella) + 期 (qī, período): «período de las estrellas», la semana.
一 (yī) es el número que ya conocés; los días se forman solo con números, como explicó Michelle: «la base es el número».

LAS TRES FORMAS: 星期一 (xīngqīyī) · 礼拜一 (lǐbàiyī) · 周一 (zhōuyī). Significan lo mismo; cambia el registro: 星期 (xīngqī) neutro, 礼拜 coloquial, 周 (zhōu) formal y escrito.

OJO: El 一 (yī) queda en 1.er tono: está al final y es un número de una lista, no se cambia a yí/yì.

PRONUNCIACIÓN: xīngqīyī. 星期 (xīngqī) son dos primeros tonos seguidos, altos y planos; después el tono del número.`,
en:`WHAT IT IS: "Monday". 星期 (xīngqī, week) + 一 (yī): day number 1 of the week, which in China starts on Monday.

THE CHARACTERS:
星期 (xīngqī) = 星 (xīng, star) + 期 (qī, period): "star period", the week.
一 (yī) is the number you already know; days are built from numbers alone, as Michelle said: "the base is the number".

THE THREE FORMS: 星期一 (xīngqīyī) · 礼拜一 (lǐbàiyī) · 周一 (zhōuyī). Same meaning, different register: 星期 (xīngqī) neutral, 礼拜 colloquial, 周 (zhōu) formal and written.

WATCH OUT: 一 (yī) keeps its 1st tone: it comes last and is a number in a list, so it doesn't change to yí/yì.

PRONUNCIATION: xīngqīyī. 星期 (xīngqī) is two first tones in a row, high and level; then the number's tone.`,
zh:`星期一：lunes。星期＋一，一周从星期一开始。三种说法：星期一、礼拜一、周一。一保持一声。`}},
  {id:"fec-05",s:"星期二",py:"xīngqī'èr",es:"martes",en:"Tuesday",
   x:{
es:`QUÉ ES: «martes». 星期 (xīngqī, semana) + 二 (èr): el día número 2 de la semana, que en China empieza el lunes.

LOS CARACTERES:
星期 (xīngqī) = 星 (xīng, estrella) + 期 (qī, período): «período de las estrellas», la semana.
二 (èr) es el número que ya conocés; los días se forman solo con números, como explicó Michelle: «la base es el número».

LAS TRES FORMAS: 星期二 (xīngqī'èr) · 礼拜二 (lǐbài'èr) · 周二 (zhōu'èr). Significan lo mismo; cambia el registro: 星期 (xīngqī) neutro, 礼拜 coloquial, 周 (zhōu) formal y escrito.

OJO: En pinyin va un apóstrofo: xīngqī'èr, para que no se lea «xīngqīèr» pegado. Con 礼拜 (lǐbài) y 周 (zhōu) es igual: 礼拜二 (lǐbài'èr), 周二 (zhōu'èr). OJO: acá es 二 (èr), nunca 两 (liǎng): 两 es para contar cosas, 二 para nombrar un número de la serie.

PRONUNCIACIÓN: xīngqī'èr. 星期 (xīngqī) son dos primeros tonos seguidos, altos y planos; después el tono del número.`,
en:`WHAT IT IS: "Tuesday". 星期 (xīngqī, week) + 二 (èr): day number 2 of the week, which in China starts on Monday.

THE CHARACTERS:
星期 (xīngqī) = 星 (xīng, star) + 期 (qī, period): "star period", the week.
二 (èr) is the number you already know; days are built from numbers alone, as Michelle said: "the base is the number".

THE THREE FORMS: 星期二 (xīngqī'èr) · 礼拜二 (lǐbài'èr) · 周二 (zhōu'èr). Same meaning, different register: 星期 (xīngqī) neutral, 礼拜 colloquial, 周 (zhōu) formal and written.

WATCH OUT: In pinyin there's an apostrophe: xīngqī'èr, so it isn't read as one blob. Same with 礼拜 (lǐbài) and 周 (zhōu): 礼拜二 (lǐbài'èr), 周二 (zhōu'èr). CAREFUL: it's 二 (èr), never 两 (liǎng): 两 counts things, 二 names a number in a series.

PRONUNCIATION: xīngqī'èr. 星期 (xīngqī) is two first tones in a row, high and level; then the number's tone.`,
zh:`星期二：martes。星期＋二，一周从星期一开始。三种说法：星期二、礼拜二、周二。拼音要加隔音符号：xīngqī'èr。用二不用两。`}},
  {id:"fec-06",s:"星期三",py:"xīngqīsān",es:"miércoles",en:"Wednesday",
   x:{
es:`QUÉ ES: «miércoles». 星期 (xīngqī, semana) + 三 (sān): el día número 3 de la semana, que en China empieza el lunes.

LOS CARACTERES:
星期 (xīngqī) = 星 (xīng, estrella) + 期 (qī, período): «período de las estrellas», la semana.
三 (sān) es el número que ya conocés; los días se forman solo con números, como explicó Michelle: «la base es el número».

LAS TRES FORMAS: 星期三 (xīngqīsān) · 礼拜三 (lǐbàisān) · 周三 (zhōusān). Significan lo mismo; cambia el registro: 星期 (xīngqī) neutro, 礼拜 coloquial, 周 (zhōu) formal y escrito.

OJO: En clase, cuando Michelle preguntó miércoles, casi sale 四 (sì): contá con los dedos desde el lunes. Miércoles es el TERCER día: 三 (sān).

PRONUNCIACIÓN: xīngqīsān. 星期 (xīngqī) son dos primeros tonos seguidos, altos y planos; después el tono del número.`,
en:`WHAT IT IS: "Wednesday". 星期 (xīngqī, week) + 三 (sān): day number 3 of the week, which in China starts on Monday.

THE CHARACTERS:
星期 (xīngqī) = 星 (xīng, star) + 期 (qī, period): "star period", the week.
三 (sān) is the number you already know; days are built from numbers alone, as Michelle said: "the base is the number".

THE THREE FORMS: 星期三 (xīngqīsān) · 礼拜三 (lǐbàisān) · 周三 (zhōusān). Same meaning, different register: 星期 (xīngqī) neutral, 礼拜 colloquial, 周 (zhōu) formal and written.

WATCH OUT: In class, when Michelle asked for Wednesday, 四 (sì) nearly came out: count on your fingers from Monday. Wednesday is the THIRD day: 三 (sān).

PRONUNCIATION: xīngqīsān. 星期 (xīngqī) is two first tones in a row, high and level; then the number's tone.`,
zh:`星期三：miércoles。星期＋三，一周从星期一开始。三种说法：星期三、礼拜三、周三。星期三是第三天，别说成星期四。`}},
  {id:"fec-07",s:"星期四",py:"xīngqīsì",es:"jueves",en:"Thursday",
   x:{
es:`QUÉ ES: «jueves». 星期 (xīngqī, semana) + 四 (sì): el día número 4 de la semana, que en China empieza el lunes.

LOS CARACTERES:
星期 (xīngqī) = 星 (xīng, estrella) + 期 (qī, período): «período de las estrellas», la semana.
四 (sì) es el número que ya conocés; los días se forman solo con números, como explicó Michelle: «la base es el número».

LAS TRES FORMAS: 星期四 (xīngqīsì) · 礼拜四 (lǐbàisì) · 周四 (zhōusì). Significan lo mismo; cambia el registro: 星期 (xīngqī) neutro, 礼拜 coloquial, 周 (zhōu) formal y escrito.

OJO: Cuidado con 四 (sì, cuatro, lengua plana) y 十 (shí, diez, lengua curvada atrás): 星期四 (xīngqīsì) existe, «星期十 (xīngqīshí)» no.

PRONUNCIACIÓN: xīngqīsì. 星期 (xīngqī) son dos primeros tonos seguidos, altos y planos; después el tono del número.`,
en:`WHAT IT IS: "Thursday". 星期 (xīngqī, week) + 四 (sì): day number 4 of the week, which in China starts on Monday.

THE CHARACTERS:
星期 (xīngqī) = 星 (xīng, star) + 期 (qī, period): "star period", the week.
四 (sì) is the number you already know; days are built from numbers alone, as Michelle said: "the base is the number".

THE THREE FORMS: 星期四 (xīngqīsì) · 礼拜四 (lǐbàisì) · 周四 (zhōusì). Same meaning, different register: 星期 (xīngqī) neutral, 礼拜 colloquial, 周 (zhōu) formal and written.

WATCH OUT: Watch 四 (sì, four, flat tongue) vs 十 (shí, ten, tongue curled back): 星期四 (xīngqīsì) exists, "星期十 (xīngqīshí)" doesn't.

PRONUNCIATION: xīngqīsì. 星期 (xīngqī) is two first tones in a row, high and level; then the number's tone.`,
zh:`星期四：jueves。星期＋四，一周从星期一开始。三种说法：星期四、礼拜四、周四。注意四（sì）和十（shí）。`}},
  {id:"fec-08",s:"星期五",py:"xīngqīwǔ",es:"viernes",en:"Friday",
   x:{
es:`QUÉ ES: «viernes». 星期 (xīngqī, semana) + 五 (wǔ): el día número 5 de la semana, que en China empieza el lunes.

LOS CARACTERES:
星期 (xīngqī) = 星 (xīng, estrella) + 期 (qī, período): «período de las estrellas», la semana.
五 (wǔ) es el número que ya conocés; los días se forman solo con números, como explicó Michelle: «la base es el número».

LAS TRES FORMAS: 星期五 (xīngqīwǔ) · 礼拜五 (lǐbàiwǔ) · 周五 (zhōuwǔ). Significan lo mismo; cambia el registro: 星期 (xīngqī) neutro, 礼拜 coloquial, 周 (zhōu) formal y escrito.

OJO: El viernes a la tarde es el comienzo del fin de semana, 周末 (zhōumò). Una frase útil: 星期五见 (xīngqīwǔ jiàn), «nos vemos el viernes».

PRONUNCIACIÓN: xīngqīwǔ. 星期 (xīngqī) son dos primeros tonos seguidos, altos y planos; después el tono del número.`,
en:`WHAT IT IS: "Friday". 星期 (xīngqī, week) + 五 (wǔ): day number 5 of the week, which in China starts on Monday.

THE CHARACTERS:
星期 (xīngqī) = 星 (xīng, star) + 期 (qī, period): "star period", the week.
五 (wǔ) is the number you already know; days are built from numbers alone, as Michelle said: "the base is the number".

THE THREE FORMS: 星期五 (xīngqīwǔ) · 礼拜五 (lǐbàiwǔ) · 周五 (zhōuwǔ). Same meaning, different register: 星期 (xīngqī) neutral, 礼拜 colloquial, 周 (zhōu) formal and written.

WATCH OUT: Friday afternoon starts the weekend, 周末 (zhōumò). A useful phrase: 星期五见 (xīngqīwǔ jiàn), "see you Friday".

PRONUNCIATION: xīngqīwǔ. 星期 (xīngqī) is two first tones in a row, high and level; then the number's tone.`,
zh:`星期五：viernes。星期＋五，一周从星期一开始。三种说法：星期五、礼拜五、周五。星期五见＝星期五再见。`}},
  {id:"fec-09",s:"星期六",py:"xīngqīliù",es:"sábado",en:"Saturday",
   x:{
es:`QUÉ ES: «sábado». 星期 (xīngqī, semana) + 六 (liù): el día número 6 de la semana, que en China empieza el lunes.

LOS CARACTERES:
星期 (xīngqī) = 星 (xīng, estrella) + 期 (qī, período): «período de las estrellas», la semana.
六 (liù) es el número que ya conocés; los días se forman solo con números, como explicó Michelle: «la base es el número».

LAS TRES FORMAS: 星期六 (xīngqīliù) · 礼拜六 (lǐbàiliù) · 周六 (zhōuliù). Significan lo mismo; cambia el registro: 星期 (xīngqī) neutro, 礼拜 coloquial, 周 (zhōu) formal y escrito.

OJO: El último día numerado. 六 (liù) suena «liou»: la iu esconde una o. En el 6 la serie se termina: el domingo NO es «星期七 (xīngqīqī)».

PRONUNCIACIÓN: xīngqīliù. 星期 (xīngqī) son dos primeros tonos seguidos, altos y planos; después el tono del número.`,
en:`WHAT IT IS: "Saturday". 星期 (xīngqī, week) + 六 (liù): day number 6 of the week, which in China starts on Monday.

THE CHARACTERS:
星期 (xīngqī) = 星 (xīng, star) + 期 (qī, period): "star period", the week.
六 (liù) is the number you already know; days are built from numbers alone, as Michelle said: "the base is the number".

THE THREE FORMS: 星期六 (xīngqīliù) · 礼拜六 (lǐbàiliù) · 周六 (zhōuliù). Same meaning, different register: 星期 (xīngqī) neutral, 礼拜 colloquial, 周 (zhōu) formal and written.

WATCH OUT: The last numbered day. 六 (liù) sounds "liou": the iu hides an o. The series stops at 6: Sunday is NOT "星期七 (xīngqīqī)".

PRONUNCIATION: xīngqīliù. 星期 (xīngqī) is two first tones in a row, high and level; then the number's tone.`,
zh:`星期六：sábado。星期＋六，一周从星期一开始。三种说法：星期六、礼拜六、周六。六读 liù（iou）。星期日不是星期七。`}},
  {id:"fec-10",s:"星期天",py:"xīngqītiān",es:"domingo (la forma más común)",en:"Sunday (the most common form)",
   x:{
es:`QUÉ ES: «domingo», la forma más común al hablar. El domingo es el único día que NO lleva número: la serie termina en 星期六 (xīngqīliù) y no existe «星期七 (xīngqīqī)».

LOS CARACTERES:
天 (tiān) cielo, día: 大 (dà, una persona de frente con brazos y piernas abiertos) con un trazo 一 (yī) encima de la cabeza: lo que está arriba de la persona, el cielo. Como el cielo marca los días, también «día». Michelle: «天 es cielo o día; es el día de descanso».
星期天 (xīngqītiān) = «el día de la semana», el día por excelencia.

LAS DOS FORMAS: 星期天 (xīngqītiān) al hablar; 星期日 (xīngqīrì) más escrito (日 rì, sol). Michelle las enseñó juntas: «星期日 o 星期天».
Con 礼拜 (lǐbài) también: 礼拜天 (lǐbàitiān) / 礼拜日 (lǐbàirì). Con 周 (zhōu) SOLO 周日 (zhōurì).

EN USO: 星期天我休息 (xīngqītiān wǒ xiūxi), «el domingo descanso». El tiempo va al principio o después del sujeto.

PRONUNCIACIÓN: xīngqītiān: tres primeros tonos seguidos, todos altos y planos. t con aire.`,
en:`WHAT IT IS: "Sunday", the most common spoken form. Sunday is the only day WITHOUT a number: the series ends at 星期六 (xīngqīliù) and there's no "星期七 (xīngqīqī)".

THE CHARACTERS:
天 (tiān) sky, day: 大 (dà, a person seen from the front, arms and legs spread) with a stroke 一 (yī) above the head: what is above the person, the sky. Since the sky marks the days, also "day". Michelle: "天 is sky or day; it's the day of rest".
星期天 (xīngqītiān) = "the day of the week", the day above all.

THE TWO FORMS: 星期天 (xīngqītiān) in speech; 星期日 (xīngqīrì) more written (日 rì, sun). Michelle taught them together: "星期日 or 星期天".
With 礼拜 (lǐbài) too: 礼拜天 (lǐbàitiān) / 礼拜日 (lǐbàirì). With 周 (zhōu) ONLY 周日 (zhōurì).

IN USE: 星期天我休息 (xīngqītiān wǒ xiūxi), "on Sunday I rest". Time goes first or after the subject.

PRONUNCIATION: xīngqītiān: three first tones in a row, all high and level. t with air.`,
zh:`星期天：口语说法。星期日较书面。天：大（人）上面一横，头顶上的天，也指日子。老师：天是天空或一天，是休息的日子。
只有星期天没有数字，没有"星期七"。礼拜天／礼拜日；周只说周日。星期天我休息。`}},
  {id:"fec-11",s:"星期日",py:"xīngqīrì",es:"domingo («día del sol», más escrito)",en:"Sunday (\"sun day\", more written)",
   x:{
es:`QUÉ ES: «domingo», la forma más escrita (calendarios, formularios, noticias). Al hablar se oye más 星期天 (xīngqītiān).

LOS CARACTERES:
日 (rì) sol, día. Michelle lo mostró en clase: «antiguamente era un redondo con un puntito adentro»; con el tiempo el círculo se cuadró y el punto se hizo una raya. «El día del sol».
星期日 (xīngqīrì) = «día del sol de la semana».

DATO: coincide con el «día del sol» de otros idiomas (Sunday, Sonntag) y con el japonés 日曜日 (nichiyōbi), que conserva los nombres astrológicos antiguos. En chino, en cambio, los otros días quedaron numerados.

OJO: con 周 (zhōu) el domingo SOLO puede ser 周日 (zhōurì), con 日.

PRONUNCIACIÓN: xīngqīrì. La r china: lengua curvada hacia atrás, como la r del inglés americano, con un zumbido; rì cae (4.º tono). No es la «rr» española.`,
en:`WHAT IT IS: "Sunday", the more written form (calendars, forms, news). In speech you hear 星期天 (xīngqītiān) more.

THE CHARACTERS:
日 (rì) sun, day. Michelle showed it in class: "in ancient times it was a circle with a little dot inside"; over time the circle became square and the dot a stroke. "The day of the sun".
星期日 (xīngqīrì) = "the sun day of the week".

FACT: it matches the "sun day" of other languages (Sunday, Sonntag) and Japanese 日曜日 (nichiyōbi), which keeps the old astrological names. In Chinese, though, the other days ended up numbered.

CAREFUL: with 周 (zhōu), Sunday can ONLY be 周日 (zhōurì), with 日.

PRONUNCIATION: xīngqīrì. Chinese r: tongue curled back like an American r, with a buzz; rì falls (4th tone). Not a rolled Spanish "rr".`,
zh:`星期日：较书面的说法，口语多说星期天。日：古字是圆圈中间一点（老师在课上说明），后来写成方形。星期日＝"太阳日"。周只能说周日。`}},
  {id:"fec-12",s:"礼拜天",t:"禮拜天",py:"lǐbàitiān",es:"domingo (coloquial: «día del culto»)",en:"Sunday (colloquial: \"worship day\")",
   x:{
es:`QUÉ ES: «domingo» con la forma coloquial 礼拜 (lǐbài). Michelle lo enseñó así: «礼拜七 (lǐbàiqī)… o 礼拜天 (lǐbàitiān)». En realidad la serie de números termina en 礼拜六 (lǐbàiliù); el domingo es 礼拜天 (lǐbàitiān) o 礼拜日 (lǐbàirì).

LOS CARACTERES:
礼拜 (lǐbài) = 礼 (lǐ, rito: el altar 礻 shì con ofrendas) + 拜 (bài, inclinarse con las dos manos): el culto.
天 (tiān) = el cielo sobre la cabeza de la persona 大 (dà): día.
礼拜天 (lǐbàitiān) = «el día del culto»: el domingo de los misioneros cristianos, que dio nombre a toda la semana.

OJO: «礼拜七» (lǐbàiqī) se oye muy poco y conviene no usarlo; lo normal es 礼拜天 (lǐbàitiān).
Y 做礼拜 (zuò lǐbài) todavía quiere decir «ir a misa, ir al culto».

PRONUNCIACIÓN: lǐbàitiān: baja (3.º) – cae (4.º) – alto y plano (1.º).`,
en:`WHAT IT IS: "Sunday" with the colloquial 礼拜 (lǐbài). Michelle taught it as "礼拜七 (lǐbàiqī)… or 礼拜天 (lǐbàitiān)". In fact the number series ends at 礼拜六 (lǐbàiliù); Sunday is 礼拜天 (lǐbàitiān) or 礼拜日 (lǐbàirì).

THE CHARACTERS:
礼拜 (lǐbài) = 礼 (lǐ, rite: the altar 礻 shì with offerings) + 拜 (bài, bowing with both hands): worship.
天 (tiān) = the sky over the head of the person 大 (dà): day.
礼拜天 (lǐbàitiān) = "the day of worship": the Christian missionaries' Sunday, which gave its name to the whole week.

CAREFUL: "礼拜七" (lǐbàiqī) is rarely heard and best avoided; the normal word is 礼拜天 (lǐbàitiān).
And 做礼拜 (zuò lǐbài) still means "to go to church, attend a service".

PRONUNCIATION: lǐbàitiān: dip (3rd) – drop (4th) – high and level (1st).`,
zh:`礼拜天：口语说法，也说礼拜日。礼拜＝礼（祭台和祭品）＋拜（双手行礼），即敬拜；礼拜天是传教士的"礼拜日"。一般不说"礼拜七"。做礼拜＝去教堂。`}},
  {id:"fec-13",s:"周一",t:"週一",py:"zhōuyī",es:"lunes (forma escrita)",en:"Monday (written form)",
   x:{
es:`QUÉ ES: «lunes» con 周 (zhōu), la forma corta y formal. Así aparece en horarios, apps, carteles y en la oficina (Michelle: «en las empresas dicen 周»).

CÓMO SE ARMA: 周 (zhōu, ciclo, semana) + el número, pegado: 周一 (zhōuyī), 周二 (zhōu'èr), 周三 (zhōusān), 周四 (zhōusì), 周五 (zhōuwǔ), 周六 (zhōuliù). Domingo: SOLO 周日 (zhōurì).

EL CARÁCTER: 周 (zhōu) = vuelta completa, ciclo; en Taiwán se escribe 週 (zhōu), con 辶 (zǒu, caminar). 一 (yī), uno.

EN USO: 周一到周五 (zhōuyī dào zhōuwǔ), «de lunes a viernes»: lo vas a ver en todos los horarios de atención.

PRONUNCIACIÓN: zhōuyī, dos primeros tonos. El 一 (yī) al final no cambia de tono.`,
en:`WHAT IT IS: "Monday" with 周 (zhōu), the short, formal form. That's how it appears on timetables, apps, signs and at the office (Michelle: "companies say 周").

HOW IT'S BUILT: 周 (zhōu, cycle, week) + the number, joined: 周一 (zhōuyī), 周二 (zhōu'èr), 周三 (zhōusān), 周四 (zhōusì), 周五 (zhōuwǔ), 周六 (zhōuliù). Sunday: ONLY 周日 (zhōurì).

THE CHARACTER: 周 (zhōu) = full turn, cycle; in Taiwan written 週 (zhōu), with 辶 (zǒu, walking). 一 (yī), one.

IN USE: 周一到周五 (zhōuyī dào zhōuwǔ), "Monday to Friday": you'll see it on every opening-hours sign.

PRONUNCIATION: zhōuyī, two first tones. 一 (yī) at the end keeps its tone.`,
zh:`周一：星期一的书面说法。周＋数字：周一到周六，星期天只说周日。台湾写週一。周一到周五（营业时间常见）。`}},
  {id:"fec-14",s:"周日",t:"週日",py:"zhōurì",es:"domingo (forma corta de horarios y apps)",en:"Sunday (short form for timetables and apps)",
   x:{
es:`QUÉ ES: «domingo» con 周 (zhōu). Es la única forma posible con 周: se dice 周日 (zhōurì), NO «周天 (zhōutiān)».

LA EXPLICACIÓN DE MICHELLE: «en la fila de 周 (zhōu) no tiene 天 (tiān); solamente se dice 周日 (zhōurì), porque ambos están en primer tono: primer tono y primer tono no se puede pronunciar bien, 周日 es más fácil». Es su explicación práctica; además, 周 es la forma escrita y 日 (rì) es el «día» escrito, así que combinan.
(«周天 zhōutiān» a veces se oye en charla informal en el norte de China, pero suena descuidado; también es un término de astronomía, «la vuelta completa del cielo». No lo uses para domingo.)

LOS CARACTERES: 周 (zhōu) ciclo, semana · 日 (rì) sol, día: un círculo con un punto que se hizo cuadrado.

EN USO: 周六和周日 (zhōuliù hé zhōurì) = 周末 (zhōumò), el fin de semana.

PRONUNCIACIÓN: zhōurì: alto y plano (1.º) + cae (4.º). zh y r con la lengua curvada atrás.`,
en:`WHAT IT IS: "Sunday" with 周 (zhōu). It's the only possible form with 周: say 周日 (zhōurì), NOT "周天 (zhōutiān)".

MICHELLE'S EXPLANATION: "in the 周 (zhōu) row there's no 天 (tiān); you only say 周日 (zhōurì), because both are first tone: first tone after first tone doesn't come out well, 周日 is easier". That's her practical explanation; also, 周 is the written form and 日 (rì) is the written "day", so they go together.
("周天 zhōutiān" is sometimes heard in casual northern speech, but it sounds sloppy; it's also an astronomy term, "the full circuit of the sky". Don't use it for Sunday.)

THE CHARACTERS: 周 (zhōu) cycle, week · 日 (rì) sun, day: a circle with a dot that became square.

IN USE: 周六和周日 (zhōuliù hé zhōurì) = 周末 (zhōumò), the weekend.

PRONUNCIATION: zhōurì: high and level (1st) + falling (4th). zh and r with the tongue curled back.`,
zh:`周日：用"周"时，星期天只说周日，不说周天。老师的解释：周和天都是一声，连着念不好念，周日比较顺。周六和周日＝周末。`}},
  {id:"fec-15",s:"月",py:"yuè",es:"luna; mes",en:"moon; month",
   x:{
es:`QUÉ ES: «luna» y, por extensión, «mes»: un mes era una vuelta de la luna. Con los números arma los meses: 一月 (yīyuè) enero … 十二月 (shí'èryuè) diciembre.

EL CARÁCTER: un pictograma de la luna en cuarto creciente, con un trazo adentro. Michelle lo mostró en clase: «antiguamente era así: era una luna». Lo contrastó con 日 (rì, sol): el sol era un redondo con un puntito adentro, siempre lleno; la luna, en cambio, se dibujó a medias, porque casi nunca está llena.

LA LUNA ENTERA: para «la luna» en el cielo se dice 月亮 (yuèliang), con 亮 (liàng, brillar). 月 (yuè) solo se usa más como «mes».

CUIDADO CON LOS DOS 月 (yuè): a la izquierda o abajo de un carácter, 月 casi siempre es «carne» (肉 ròu), no luna; se juntaron en la escritura hace unos 2000 años. Ejemplo de esta clase: 胀 (zhàng), hincharse. Si el carácter habla del cuerpo, es carne; si habla de tiempo o luz, es luna: 明 (míng, brillante), 期 (qī, período, el de 星期 xīngqī).

EL CALENDARIO: los meses chinos siempre fueron números. Antes contaban lunas (calendario lunar, 农历 nónglì); desde 1912 los mismos números se usan para el calendario occidental (公历 gōnglì). Las fiestas tradicionales siguen la luna: por eso el Año Nuevo chino cambia de fecha cada año.

PRONUNCIACIÓN: yuè, 4.º tono (cae). La üe se escribe ue después de y: labios redondos como para «u» y decí «ie».`,
en:`WHAT IT IS: "moon" and, by extension, "month": a month was one turn of the moon. With numbers it forms the months: 一月 (yīyuè) January … 十二月 (shí'èryuè) December.

THE CHARACTER: a pictogram of a crescent moon with a stroke inside. Michelle showed it in class: "in ancient times it was like this: it was a moon". She contrasted it with 日 (rì, sun): the sun was a circle with a little dot inside, always full; the moon was drawn half, because it's almost never full.

THE WHOLE MOON: for "the moon" in the sky, say 月亮 (yuèliang), with 亮 (liàng, to shine). 月 (yuè) alone is used more for "month".

WATCH THE TWO 月 (yuè)s: on the left or at the bottom of a character, 月 is almost always "flesh" (肉 ròu), not the moon; the two merged in writing about 2,000 years ago. Example from this class: 胀 (zhàng), to swell. If the character is about the body, it's flesh; if it's about time or light, it's the moon: 明 (míng, bright), 期 (qī, period, the one in 星期 xīngqī).

THE CALENDAR: Chinese months were always numbers. They used to count moons (lunar calendar, 农历 nónglì); since 1912 the same numbers are used for the Western calendar (公历 gōnglì). Traditional festivals still follow the moon: that's why Chinese New Year falls on a different date every year.

PRONUNCIATION: yuè, 4th tone (falling). üe is written ue after y: round your lips as for "oo" and say "yeh".`,
zh:`月：月亮，引申为月份。字形是弯弯的月牙（老师在课上说明：古字就是月亮），日是圆圈中间一点。
月亮：天上的月亮。月作偏旁在左边或下面时多半是"肉"（肉月），如胀；与时间、光有关的才是月亮：明、期。
中国的月份一直用数字；1912年起用于公历，传统节日仍按农历。`}},
  {id:"fec-16",s:"月亮",py:"yuèliang",es:"la luna",en:"the moon",
   x:{
es:`QUÉ ES: «la luna», la del cielo. Michelle: «la luna en chino se dice 月亮 (yuèliang); 月 (yuè) y 亮 (liàng) significa brillar».

LOS CARACTERES:
月 (yuè): la luna creciente dibujada. Solo, hoy se usa más como «mes».
亮 (liàng) brillar, claro: arriba la parte de 高 (gāo, un edificio alto, una torre) y abajo 几 (jǐ, una forma de 儿 ér, una persona). Una persona en lo alto, donde llega la luz: «claro, brillante». Esta lectura viene del diccionario antiguo 说文 (Shuōwén) y no está confirmada por las formas más antiguas.
月亮 (yuèliang) = «la luna que brilla». Así el chino distingue «la luna» (月亮) de «el mes» (月).

EN USO: 月亮很亮 (yuèliang hěn liàng), «la luna brilla mucho». 中秋节 (Zhōngqiūjié), la fiesta de medio otoño, es la fiesta de la luna llena: se comen 月饼 (yuèbǐng), «pasteles de luna».

PRONUNCIACIÓN: yuèliang: el 亮 pierde el tono en la palabra (liang, neutro, corto). Solo, 亮 es liàng (4.º tono).`,
en:`WHAT IT IS: "the moon", the one in the sky. Michelle: "moon in Chinese is 月亮 (yuèliang); 月 (yuè), and 亮 (liàng) means to shine".

THE CHARACTERS:
月 (yuè): the drawn crescent moon. On its own, it's used more for "month" today.
亮 (liàng) to shine, bright: on top, part of 高 (gāo, a tall building, a tower), below 几 (jǐ, a form of 儿 ér, a person). A person up high, where the light reaches: "bright". This reading comes from the old dictionary 说文 (Shuōwén) and isn't confirmed by the oldest forms.
月亮 (yuèliang) = "the shining moon". That's how Chinese tells "the moon" (月亮) from "month" (月).

IN USE: 月亮很亮 (yuèliang hěn liàng), "the moon is very bright". 中秋节 (Zhōngqiūjié), the Mid-Autumn Festival, is the full-moon festival: people eat 月饼 (yuèbǐng), "mooncakes".

PRONUNCIATION: yuèliang: 亮 loses its tone inside the word (liang, neutral, short). On its own, 亮 is liàng (4th tone).`,
zh:`月亮：天上的月亮。老师：月亮，亮是发光。月：月牙；单用多指月份。亮：上面是高的省略，下面是人，人在高处见光（说文的说法，古文字未必如此）。月亮很亮。中秋节吃月饼。`}},
  {id:"fec-17",s:"一月",py:"yīyuè",es:"enero",en:"January",
   x:{
es:`QUÉ ES: «enero». Número + 月 (yuè, luna, mes): «el mes 1». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 一 (yī) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
El 一 (yī) no cambia de tono: 一月 es yīyuè, no «yíyuè». OJO: 一月 (yīyuè) es «enero», pero 一个月 (yí ge yuè) es «un mes» de duración.
El 1 de enero es 元旦 (yuándàn), el Año Nuevo occidental. El Año Nuevo chino, 春节 (Chūnjié), cae entre fines de enero y mediados de febrero, según la luna.

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年一月… (èr líng èr liù nián yīyuè…).

PRONUNCIACIÓN: yīyuè.`,
en:`WHAT IT IS: "January". Number + 月 (yuè, moon, month): "month 1". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 一 (yī) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
一 (yī) keeps its tone: 一月 is yīyuè, not "yíyuè". CAREFUL: 一月 (yīyuè) is "January", but 一个月 (yí ge yuè) is "one month" of time.
January 1 is 元旦 (yuándàn), Western New Year. Chinese New Year, 春节 (Chūnjié), falls between late January and mid-February, by the moon.

IN A DATE: year + month + day, from biggest to smallest: 2026年一月… (èr líng èr liù nián yīyuè…).

PRONUNCIATION: yīyuè.`,
zh:`一月：enero。数字＋月，月份用数字表示。一月的一读一声。一月≠一个月。1月1日是元旦；春节在一月底到二月中。`}},
  {id:"fec-18",s:"二月",py:"èryuè",es:"febrero",en:"February",
   x:{
es:`QUÉ ES: «febrero». Número + 月 (yuè, luna, mes): «el mes 2». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 二 (èr) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
Es 二 (èr), nunca 两 (liǎng): 两 es para contar cosas («dos meses» = 两个月 liǎng ge yuè); 二 para nombrar el mes. El ejemplo de fecha de Michelle fue en febrero: 2020年二月十七日 (èr líng èr líng nián èryuè shíqī rì).
El 14 es 情人节 (Qíngrénjié), el día de los enamorados; y muchos años el 春节 (Chūnjié) cae en febrero.

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年二月… (èr líng èr liù nián èryuè…).

PRONUNCIACIÓN: èryuè.`,
en:`WHAT IT IS: "February". Number + 月 (yuè, moon, month): "month 2". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 二 (èr) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
It's 二 (èr), never 两 (liǎng): 两 counts things ("two months" = 两个月 liǎng ge yuè); 二 names the month. Michelle's date example was in February: 2020年二月十七日 (èr líng èr líng nián èryuè shíqī rì).
The 14th is 情人节 (Qíngrénjié), Valentine's Day; and many years 春节 (Chūnjié) falls in February.

IN A DATE: year + month + day, from biggest to smallest: 2026年二月… (èr líng èr liù nián èryuè…).

PRONUNCIATION: èryuè.`,
zh:`二月：febrero。数字＋月，月份用数字表示。二月不说两月；两个月是时间长度。老师的例子：2020年二月十七日。2月14日情人节。`}},
  {id:"fec-19",s:"三月",py:"sānyuè",es:"marzo",en:"March",
   x:{
es:`QUÉ ES: «marzo». Número + 月 (yuè, luna, mes): «el mes 3». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 三 (sān) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
El 8 es 妇女节 (Fùnǚjié), el día de la mujer, y el 12 es 植树节 (Zhíshùjié), el día del árbol, en China y en Taiwán.
sān: s con la lengua plana detrás de los dientes (no sh).

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年三月… (èr líng èr liù nián sānyuè…).

PRONUNCIACIÓN: sānyuè.`,
en:`WHAT IT IS: "March". Number + 月 (yuè, moon, month): "month 3". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 三 (sān) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
The 8th is 妇女节 (Fùnǚjié), Women's Day, and the 12th is 植树节 (Zhíshùjié), Arbor Day, in both mainland China and Taiwan.
sān: s with the tongue flat behind the teeth (not sh).

IN A DATE: year + month + day, from biggest to smallest: 2026年三月… (èr líng èr liù nián sānyuè…).

PRONUNCIATION: sānyuè.`,
zh:`三月：marzo。数字＋月，月份用数字表示。3月8日妇女节，3月12日植树节。`}},
  {id:"fec-20",s:"四月",py:"sìyuè",es:"abril",en:"April",
   x:{
es:`QUÉ ES: «abril». Número + 月 (yuè, luna, mes): «el mes 4». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 四 (sì) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
El error clásico: 四月 (sìyuè, abril) y 十月 (shíyuè, octubre) suenan parecido. 四 sì: lengua plana, tono que cae. 十 shí: lengua curvada atrás, tono que sube.
A principios de abril (4 o 5) es 清明节 (Qīngmíngjié), cuando las familias limpian las tumbas de los antepasados. En Taiwán el 4/4 es el día del niño.

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年四月… (èr líng èr liù nián sìyuè…).

PRONUNCIACIÓN: sìyuè.`,
en:`WHAT IT IS: "April". Number + 月 (yuè, moon, month): "month 4". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 四 (sì) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
The classic mistake: 四月 (sìyuè, April) and 十月 (shíyuè, October) sound alike. 四 sì: flat tongue, falling tone. 十 shí: tongue curled back, rising tone.
In early April (4th or 5th) is 清明节 (Qīngmíngjié), when families sweep their ancestors' tombs. In Taiwan, 4/4 is Children's Day.

IN A DATE: year + month + day, from biggest to smallest: 2026年四月… (èr líng èr liù nián sìyuè…).

PRONUNCIATION: sìyuè.`,
zh:`四月：abril。数字＋月，月份用数字表示。注意四月和十月：sì 平舌降调，shí 翘舌升调。四月初是清明节；台湾4月4日是儿童节。`}},
  {id:"fec-21",s:"五月",py:"wǔyuè",es:"mayo",en:"May",
   x:{
es:`QUÉ ES: «mayo». Número + 月 (yuè, luna, mes): «el mes 5». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 五 (wǔ) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
El 1 es 劳动节 (Láodòngjié), el día del trabajador, y el segundo domingo es el día de la madre, 母亲节 (Mǔqīn Jié).
OJO en clase: Michelle preguntó «junio» y salió 五月 (wǔyuè); mayo es el QUINTO mes: 五 (wǔ).

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年五月… (èr líng èr liù nián wǔyuè…).

PRONUNCIACIÓN: wǔyuè.`,
en:`WHAT IT IS: "May". Number + 月 (yuè, moon, month): "month 5". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 五 (wǔ) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
The 1st is 劳动节 (Láodòngjié), Labour Day, and the second Sunday is Mother's Day, 母亲节 (Mǔqīn Jié).
CAREFUL from class: Michelle asked for "June" and 五月 (wǔyuè) came out; May is the FIFTH month: 五 (wǔ).

IN A DATE: year + month + day, from biggest to smallest: 2026年五月… (èr líng èr liù nián wǔyuè…).

PRONUNCIATION: wǔyuè.`,
zh:`五月：mayo。数字＋月，月份用数字表示。5月1日劳动节；五月第二个星期日是母亲节。五月是第五个月。`}},
  {id:"fec-22",s:"六月",py:"liùyuè",es:"junio",en:"June",
   x:{
es:`QUÉ ES: «junio». Número + 月 (yuè, luna, mes): «el mes 6». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 六 (liù) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
liù suena «liou». En China el 1 de junio es 儿童节 (Értóngjié), el día del niño, y muchos años cae en junio 端午节 (Duānwǔjié), la fiesta de los botes dragón (día 5 del 5.º mes lunar).

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年六月… (èr líng èr liù nián liùyuè…).

PRONUNCIACIÓN: liùyuè.`,
en:`WHAT IT IS: "June". Number + 月 (yuè, moon, month): "month 6". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 六 (liù) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
liù sounds "liou". In mainland China June 1 is 儿童节 (Értóngjié), Children's Day, and many years 端午节 (Duānwǔjié), the Dragon Boat Festival (5th day of the 5th lunar month), falls in June.

IN A DATE: year + month + day, from biggest to smallest: 2026年六月… (èr líng èr liù nián liùyuè…).

PRONUNCIATION: liùyuè.`,
zh:`六月：junio。数字＋月，月份用数字表示。六读 liù（iou）。大陆6月1日是儿童节；端午节常在六月。`}},
  {id:"fec-23",s:"七月",py:"qīyuè",es:"julio",en:"July",
   x:{
es:`QUÉ ES: «julio». Número + 月 (yuè, luna, mes): «el mes 7». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 七 (qī) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
q con aire y la lengua plana, como una «ch» suave: Michelle lo dijo «chi». 七夕 (Qīxī), el San Valentín chino, es el día 7 del 7.º mes LUNAR, y por eso suele caer en agosto: buen ejemplo de que los meses lunares y los occidentales no coinciden.

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年七月… (èr líng èr liù nián qīyuè…).

PRONUNCIACIÓN: qīyuè.`,
en:`WHAT IT IS: "July". Number + 月 (yuè, moon, month): "month 7". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 七 (qī) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
q with air and a flat tongue, like a soft "ch": Michelle said it "chi". 七夕 (Qīxī), Chinese Valentine's Day, is the 7th day of the 7th LUNAR month, so it usually falls in August: a good example that lunar and Western months don't match.

IN A DATE: year + month + day, from biggest to smallest: 2026年七月… (èr líng èr liù nián qīyuè…).

PRONUNCIATION: qīyuè.`,
zh:`七月：julio。数字＋月，月份用数字表示。七读 qī，送气。七夕是农历七月初七，公历多在八月。`}},
  {id:"fec-24",s:"八月",py:"bāyuè",es:"agosto",en:"August",
   x:{
es:`QUÉ ES: «agosto». Número + 月 (yuè, luna, mes): «el mes 8». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 八 (bā) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
Michelle: «pa, sin aspirar; no como papá». La b china no tiene aire: suena entre nuestra p y nuestra b.
El truco de Michelle: en Taiwán el 8 de agosto es el día del padre, 父亲节 (Fùqīnjié), porque 八八 (bābā) suena como 爸爸 (bàba), papá.

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年八月… (èr líng èr liù nián bāyuè…).

PRONUNCIACIÓN: bāyuè.`,
en:`WHAT IT IS: "August". Number + 月 (yuè, moon, month): "month 8". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 八 (bā) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
Michelle: "pa, unaspirated; not like papá". Chinese b has no air: it sounds between our p and b.
Michelle's trick: in Taiwan August 8 is Father's Day, 父亲节 (Fùqīnjié), because 八八 (bābā) sounds like 爸爸 (bàba), dad.

IN A DATE: year + month + day, from biggest to smallest: 2026年八月… (èr líng èr liù nián bāyuè…).

PRONUNCIATION: bāyuè.`,
zh:`八月：agosto。数字＋月，月份用数字表示。八不送气。台湾8月8日是父亲节，因为八八和爸爸音近。`}},
  {id:"fec-25",s:"九月",py:"jiǔyuè",es:"septiembre",en:"September",
   x:{
es:`QUÉ ES: «septiembre». Número + 月 (yuè, luna, mes): «el mes 9». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 九 (jiǔ) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
Michelle: 九 (jiǔ) «se pronuncia como George»: la j china es suave, con la lengua plana adelante, y la iu suena «iou».
La clase fue el 28 de septiembre, que en Taiwán es el día del maestro, 教师节 (Jiàoshījié): el cumpleaños de Confucio. En China continental es el 10.

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年九月… (èr líng èr liù nián jiǔyuè…).

PRONUNCIACIÓN: jiǔyuè.`,
en:`WHAT IT IS: "September". Number + 月 (yuè, moon, month): "month 9". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 九 (jiǔ) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
Michelle: 九 (jiǔ) "is pronounced like George": Chinese j is soft, tongue flat and forward, and iu sounds "iou".
The class was on September 28, which in Taiwan is Teachers' Day, 教师节 (Jiàoshījié): Confucius's birthday. In mainland China it's the 10th.

IN A DATE: year + month + day, from biggest to smallest: 2026年九月… (èr líng èr liù nián jiǔyuè…).

PRONUNCIATION: jiǔyuè.`,
zh:`九月：septiembre。数字＋月，月份用数字表示。九读 jiǔ，老师说像英语的 George。9月28日是台湾的教师节（孔子诞辰）；大陆是9月10日。`}},
  {id:"fec-26",s:"十月",py:"shíyuè",es:"octubre",en:"October",
   x:{
es:`QUÉ ES: «octubre». Número + 月 (yuè, luna, mes): «el mes 10». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 十 (shí) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
Es solo 十 (shí), sin 一 (yī) delante: 10 es 十, no «一十 (yīshí)». No lo confundas con 四月 (sìyuè, abril).
El 1 de octubre es 国庆节 (Guóqìngjié), la fiesta nacional de China, y el 10 es 双十节 (Shuāngshíjié), «el doble diez», la fiesta nacional de Taiwán.

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年十月… (èr líng èr liù nián shíyuè…).

PRONUNCIACIÓN: shíyuè.`,
en:`WHAT IT IS: "October". Number + 月 (yuè, moon, month): "month 10". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 十 (shí) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
It's just 十 (shí), no 一 (yī) in front: 10 is 十, not "一十 (yīshí)". Don't mix it up with 四月 (sìyuè, April).
October 1 is 国庆节 (Guóqìngjié), China's National Day, and the 10th is 双十节 (Shuāngshíjié), "Double Ten", Taiwan's National Day.

IN A DATE: year + month + day, from biggest to smallest: 2026年十月… (èr líng èr liù nián shíyuè…).

PRONUNCIATION: shíyuè.`,
zh:`十月：octubre。数字＋月，月份用数字表示。十月不说一十月；别和四月混。10月1日国庆节（大陆），10月10日双十节（台湾）。`}},
  {id:"fec-27",s:"十一月",py:"shíyīyuè",es:"noviembre",en:"November",
   x:{
es:`QUÉ ES: «noviembre». Número + 月 (yuè, luna, mes): «el mes 11». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 十一 (shíyī) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
Tres caracteres: 十一 (shíyī, once) + 月 (yuè). El 一 (yī) al final de 十一 queda en 1.er tono.
El 11/11 es 光棍节 (Guānggùnjié), el «día de los solteros» (cuatro unos, cuatro personas solas), que hoy es el día de compras en línea más grande del mundo.

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年十一月… (èr líng èr liù nián shíyīyuè…).

PRONUNCIACIÓN: shíyīyuè.`,
en:`WHAT IT IS: "November". Number + 月 (yuè, moon, month): "month 11". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 十一 (shíyī) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
Three characters: 十一 (shíyī, eleven) + 月 (yuè). The 一 (yī) at the end of 十一 keeps its 1st tone.
11/11 is 光棍节 (Guānggùnjié), "Singles' Day" (four ones, four people alone), today the biggest online shopping day in the world.

IN A DATE: year + month + day, from biggest to smallest: 2026年十一月… (èr líng èr liù nián shíyīyuè…).

PRONUNCIATION: shíyīyuè.`,
zh:`十一月：noviembre。数字＋月，月份用数字表示。十一月：十一＋月。11月11日光棍节，现在是网购节。`}},
  {id:"fec-28",s:"十二月",py:"shí'èryuè",es:"diciembre",en:"December",
   x:{
es:`QUÉ ES: «diciembre». Número + 月 (yuè, luna, mes): «el mes 12». Los meses en chino no tienen nombre propio: son números, como explicó Michelle: «una vez que tenés los números, ya podés aprender los meses y los días de la semana».

LOS CARACTERES: 十二 (shí'èr) es el número; 月 (yuè) es la luna en cuarto creciente, porque un mes era una vuelta de la luna.

DATOS Y TRAMPAS:
En pinyin lleva apóstrofo: shí'èryuè, para marcar dónde empieza èr. En la transcripción de la clase diciembre quedó como «shí yī yuè»: es un error del grabador; diciembre es 十二 (shí'èr), doce.
Navidad es 圣诞节 (Shèngdànjié); y alrededor del 21 es 冬至 (Dōngzhì), el solsticio de invierno, cuando en el norte se comen 饺子 (jiǎozi).

EN UNA FECHA: año + mes + día, de lo más grande a lo más chico: 2026年十二月… (èr líng èr liù nián shí'èryuè…).

PRONUNCIACIÓN: shí'èryuè.`,
en:`WHAT IT IS: "December". Number + 月 (yuè, moon, month): "month 12". Chinese months have no names of their own: they're numbers, as Michelle explained: "once you have the numbers, you can learn the months and the days of the week".

THE CHARACTERS: 十二 (shí'èr) is the number; 月 (yuè) is the crescent moon, because a month was one turn of the moon.

FACTS AND TRAPS:
In pinyin it takes an apostrophe: shí'èryuè, to show where èr starts. In the class transcript December came out as "shí yī yuè": a recording error; December is 十二 (shí'èr), twelve.
Christmas is 圣诞节 (Shèngdànjié); and around the 21st is 冬至 (Dōngzhì), the winter solstice, when northerners eat 饺子 (jiǎozi).

IN A DATE: year + month + day, from biggest to smallest: 2026年十二月… (èr líng èr liù nián shí'èryuè…).

PRONUNCIATION: shí'èryuè.`,
zh:`十二月：diciembre。数字＋月，月份用数字表示。十二月，拼音 shí'èryuè。圣诞节；冬至（北方吃饺子）。`}},
  {id:"fec-29",s:"年",py:"nián",es:"año",en:"year",
   x:{
es:`QUÉ ES: «año». Es lo primero en una fecha: año + mes + día. Michelle: «年 (nián) es año».

EL CARÁCTER: en los huesos oraculares era una persona (人 rén) cargando en la espalda una planta de cereal madura (禾 hé): la cosecha. Como había una cosecha por año, «cosecha» pasó a «año». Con el tiempo el dibujo se hizo irreconocible.

EN FECHAS: el año se lee cifra por cifra, no como número: 2026年 = 二〇二六年 (èr líng èr liù nián), 1959年 = 一九五九年 (yī jiǔ wǔ jiǔ nián). En clase costó justamente eso: no se dice «mil novecientos…», se dicen las cuatro cifras.

PALABRAS:
• 新年 (xīnnián) año nuevo · 今年 (jīnnián) este año · 明年 (míngnián) el año que viene
• 去年 (qùnián) el año pasado: OJO, NO «昨年 (zuónián)»; es «el año que se fue»
• 年纪 (niánjì) edad (de una persona mayor)

PRONUNCIACIÓN: nián, 2.º tono (sube), como preguntando «¿nián?».`,
en:`WHAT IT IS: "year". It comes first in a date: year + month + day. Michelle: "年 (nián) is year".

THE CHARACTER: on the oracle bones it was a person (人 rén) carrying a ripe grain plant (禾 hé) on their back: the harvest. Since there was one harvest a year, "harvest" became "year". Over time the drawing became unrecognisable.

IN DATES: the year is read digit by digit, not as a number: 2026年 = 二〇二六年 (èr líng èr liù nián), 1959年 = 一九五九年 (yī jiǔ wǔ jiǔ nián). That's exactly what was hard in class: you don't say "nineteen fifty…", you say the four digits.

WORDS:
• 新年 (xīnnián) new year · 今年 (jīnnián) this year · 明年 (míngnián) next year
• 去年 (qùnián) last year: CAREFUL, NOT "昨年 (zuónián)"; it's "the year that went"
• 年纪 (niánjì) age (of an older person)

PRONUNCIATION: nián, 2nd tone (rising), as if asking "nián?".`,
zh:`年：日期的第一部分。甲骨文是人背着成熟的禾，一年一收，引申为年。年份逐个数字读：二〇二六年、一九五九年。新年、今年、明年、去年（不说昨年）、年纪。`}},
  {id:"fec-30",s:"号",t:"號",py:"hào",es:"número; día del mes (al hablar)",en:"number; day of the month (spoken)",
   x:{
es:`QUÉ ES: «número», y en las fechas, el día del mes al hablar. Michelle: «escrito o en las noticias se dice 日 (rì), pero coloquialmente la mayoría de la gente, en vez de 日, dice 号 (hào). 号 significa número: número 17».
九月二十八号 (jiǔyuè èrshíbā hào) = 28 de septiembre, «septiembre número 28».

EL CARÁCTER: 口 (kǒu, boca) arriba + 丂 (kǎo) abajo, que en origen marcaba la voz que sale con esfuerzo: gritar, llamar en voz alta. La forma tradicional 號 (hào) le suma 虎 (hǔ, tigre): el rugido. De «gritar un nombre» salió «nombre, señal» y de ahí «número» (el número que te llaman).

PALABRAS:
• 几号？ (jǐ hào?) ¿qué día (del mes)?
• 电话号码 (diànhuà hàomǎ) número de teléfono: Michelle dijo que con los números se resuelve «la mitad de tu problema», porque todo va con números.
• 号 (hào) también es talle: 大号 (dà hào) talle grande.

PRONUNCIACIÓN: hào, 4.º tono (cae). La h china raspa un poco en la garganta, como una j suave.`,
en:`WHAT IT IS: "number", and in dates, the day of the month in speech. Michelle: "written or on the news it's 日 (rì), but colloquially most people say 号 (hào) instead of 日. 号 means number: number 17".
九月二十八号 (jiǔyuè èrshíbā hào) = September 28, "September number 28".

THE CHARACTER: 口 (kǒu, mouth) on top + 丂 (kǎo) below, which originally marked a voice coming out with effort: shouting, calling out. The traditional form 號 (hào) adds 虎 (hǔ, tiger): the roar. From "calling out a name" came "name, signal", and from there "number" (the number they call).

WORDS:
• 几号？ (jǐ hào?) what day (of the month)?
• 电话号码 (diànhuà hàomǎ) phone number: Michelle said numbers solve "half your problem", because everything runs on numbers.
• 号 (hào) is also a size: 大号 (dà hào) large size.

PRONUNCIATION: hào, 4th tone (falling). Chinese h rasps a little in the throat, like a soft Spanish j.`,
zh:`号：号码；口语里说日期用号，书面和新闻用日（老师：号就是号码）。字形：口＋丂，本义呼喊；繁体號加虎（虎啸）。几号？电话号码。大号。`}},
  {id:"fec-31",s:"日期",py:"rìqī",es:"fecha",en:"date",
   x:{
es:`QUÉ ES: «fecha», la palabra. Michelle la usó en la segunda forma de preguntar la fecha: 今天的日期是多少？ (jīntiān de rìqī shì duōshǎo?), «¿la fecha de hoy es cuánto?».

LOS CARACTERES:
日 (rì) sol, día: un círculo con un punto que se volvió cuadrado.
期 (qī) período, plazo: 其 (qí, el sonido) + 月 (yuè, la luna que mide el tiempo). El mismo 期 de 星期 (xīngqī).
日期 (rìqī) = «día + período»: el día marcado en el calendario.

OJO: no confundas 日期 (rìqī, fecha) con 星期 (xīngqī, semana): comparten 期.
En formularios vas a ver 日期 como «Fecha:», y 出生日期 (chūshēng rìqī), «fecha de nacimiento».

PRONUNCIACIÓN: rìqī: cae (4.º) + alto y plano (1.º). r curvada atrás con zumbido; q con aire.`,
en:`WHAT IT IS: "date", the word. Michelle used it in the second way of asking the date: 今天的日期是多少？ (jīntiān de rìqī shì duōshǎo?), "today's date is how much?".

THE CHARACTERS:
日 (rì) sun, day: a circle with a dot that became square.
期 (qī) period, term: 其 (qí, the sound) + 月 (yuè, the moon that measures time). The same 期 as in 星期 (xīngqī).
日期 (rìqī) = "day + period": the day marked on the calendar.

CAREFUL: don't confuse 日期 (rìqī, date) with 星期 (xīngqī, week): they share 期.
On forms you'll see 日期 as "Date:", and 出生日期 (chūshēng rìqī), "date of birth".

PRONUNCIATION: rìqī: falling (4th) + high and level (1st). r curled back with a buzz; q with air.`,
zh:`日期：日＋期（其声，月表时间），指某一天。今天的日期是多少？别和星期混。表格上的"日期"、出生日期。`}},
  {id:"fec-32",s:"新年",py:"xīnnián",es:"año nuevo",en:"new year",
   x:{
es:`QUÉ ES: «año nuevo». Michelle: «新 (xīn) es nuevo, 年 (nián) es año»; y lo usó para mostrar que «casi todas las palabras en chino son formadas, combinadas: si sabés 3.000 a 4.000 caracteres y las combinaciones, ya sabés casi todo».

LOS CARACTERES:
新 (xīn) nuevo: a la derecha 斤 (jīn, un hacha); a la izquierda madera, 木 (mù), con 辛 (xīn) encima, que da el sonido. Cortar madera con el hacha: la leña recién cortada, «nuevo».
年 (nián) año: una persona que carga la cosecha.

EN USO: 新年快乐！ (xīnnián kuàilè!) ¡Feliz año nuevo!, con el mismo 快乐 (kuàilè) de 生日快乐 (shēngrì kuàilè).
El Año Nuevo chino (lunar) se llama 春节 (Chūnjié), «fiesta de la primavera»; 新年 sirve para los dos.

PRONUNCIACIÓN: xīnnián. Michelle insistió: «新, con una n al final» (xīn, no xī). Alto y plano + sube.`,
en:`WHAT IT IS: "new year". Michelle: "新 (xīn) is new, 年 (nián) is year"; she used it to show that "almost all Chinese words are built, combined: if you know 3,000 to 4,000 characters and the combinations, you know nearly everything".

THE CHARACTERS:
新 (xīn) new: on the right 斤 (jīn, an axe); on the left wood, 木 (mù), with 辛 (xīn) above it giving the sound. Cutting wood with the axe: freshly cut wood, "new".
年 (nián) year: a person carrying the harvest.

IN USE: 新年快乐！ (xīnnián kuàilè!) Happy New Year!, with the same 快乐 (kuàilè) as 生日快乐 (shēngrì kuàilè).
The (lunar) Chinese New Year is called 春节 (Chūnjié), "Spring Festival"; 新年 works for both.

PRONUNCIATION: xīnnián. Michelle insisted: "新, with an n at the end" (xīn, not xī). High and level + rising.`,
zh:`新年：新＋年。老师用它说明汉语的词多半是组合词，认识三四千字和组合就能看懂大部分。新：斤（斧头）砍木，辛表音，本义新砍的木柴。新年快乐！春节是农历新年。`}},
  {id:"fec-33",s:"昨天",py:"zuótiān",es:"ayer",en:"yesterday",
   x:{
es:`QUÉ ES: «ayer». Michelle lo dio para preguntar «¿qué fecha fue ayer?»: 昨天是几月几号？ (zuótiān shì jǐ yuè jǐ hào?).

LOS CARACTERES:
昨 (zuó): a la izquierda 日 (rì, el sol, el día); a la derecha 乍 (zhà), «de repente, recién». En clase le preguntaste por qué, y Michelle lo buscó: «este lado es el sol, y este del otro lado es "de repente": el sol que acaba de desaparecer». Es una buena manera de recordarlo; en el origen, 乍 está sobre todo por el sonido (zhà → zuó).
天 (tiān) día: el cielo sobre la cabeza de la persona 大 (dà).
昨天 (zuótiān) = «el día que acaba de pasar».

LA FAMILIA:
前天 (qiántiān) anteayer · 昨天 (zuótiān) ayer · 今天 (jīntiān) hoy · 明天 (míngtiān) mañana · 后天 (hòutiān) pasado mañana.
OJO: «el año pasado» NO es «昨年 (zuónián)»: es 去年 (qùnián).

DÓNDE VA: como toda palabra de tiempo, al principio o después del sujeto, y el verbo no cambia: 我昨天吃鱼 (wǒ zuótiān chī yú), «ayer comí pescado».

PRONUNCIACIÓN: zuótiān: sube (2.º) + alto y plano (1.º). La z es «ds», como en «Leeds»: nunca la j española. En la transcripción salió «jūtiān», que es justo el error a evitar.`,
en:`WHAT IT IS: "yesterday". Michelle taught it for asking "what date was yesterday?": 昨天是几月几号？ (zuótiān shì jǐ yuè jǐ hào?).

THE CHARACTERS:
昨 (zuó): on the left 日 (rì, the sun, the day); on the right 乍 (zhà), "suddenly, just". In class you asked why, and Michelle looked it up: "this side is the sun, and the other side is 'suddenly': the sun that has just disappeared". It's a good way to remember it; originally, 乍 is there mostly for the sound (zhà → zuó).
天 (tiān) day: the sky above the head of the person 大 (dà).
昨天 (zuótiān) = "the day that has just gone by".

THE FAMILY:
前天 (qiántiān) day before yesterday · 昨天 (zuótiān) yesterday · 今天 (jīntiān) today · 明天 (míngtiān) tomorrow · 后天 (hòutiān) day after tomorrow.
CAREFUL: "last year" is NOT "昨年 (zuónián)": it's 去年 (qùnián).

WHERE IT GOES: like every time word, at the start or after the subject, and the verb doesn't change: 我昨天吃鱼 (wǒ zuótiān chī yú), "I ate fish yesterday".

PRONUNCIATION: zuótiān: rising (2nd) + high and level (1st). z is "ds", as in "Leeds": never a Spanish j. The transcript heard "jūtiān", which is exactly the mistake to avoid.`,
zh:`昨天：刚过去的那一天。昨：日＋乍（突然），老师的解释：太阳刚刚落下；乍主要表音。前天、昨天、今天、明天、后天；去年不说昨年。我昨天吃鱼。`}},
  {id:"fec-34",s:"几月几号",t:"幾月幾號",py:"jǐ yuè jǐ hào",es:"¿qué fecha? (¿qué mes, qué día?)",en:"what date? (which month, which day?)",
   x:{
es:`QUÉ ES: el corazón de todas las preguntas de fecha: «¿cuántos meses, cuántos números?» = ¿qué mes y qué día?

LOS CARACTERES:
几 (jǐ) cuántos: en origen, una mesita baja (el mismo 几 de 茶几 chájī, mesa ratona); se tomó prestado por el sonido para «cuántos». En la forma tradicional 幾 es otro carácter.
月 (yuè) mes · 号 (hào) número, día del mes.

LA REGLA (clase 2): la palabra de pregunta va donde irá la respuesta. Cambiás 几 (jǐ) por el número y listo:
今天是几月几号？ (jīntiān shì jǐ yuè jǐ hào) → 今天是九月二十八号。(jīntiān shì jiǔyuè èrshíbā hào)
Sin 吗 (ma): ya es una pregunta.

几 (jǐ) O 多少: 几 (jǐ) es para cantidades chicas o limitadas (los meses van hasta 12, los días hasta 31); 多少 (duōshǎo) para cualquier cantidad, como un precio.

PRONUNCIACIÓN: jǐ yuè jǐ hào. En su apunte Michelle anotó que la j de 几 (jǐ) suena como la de «Gill» en inglés: una «dy» suave, con la lengua plana. 几 es 3.er tono; antes de 月 (yuè, 4.º) baja y casi no sube.`,
en:`WHAT IT IS: the core of every date question: "how many months, how many numbers?" = which month and which day?

THE CHARACTERS:
几 (jǐ) how many: originally a small low table (the same 几 as in 茶几 chájī, coffee table); borrowed for its sound for "how many". The traditional form 幾 is a different character.
月 (yuè) month · 号 (hào) number, day of the month.

THE RULE (class 2): the question word goes where the answer will go. Swap 几 (jǐ) for the number and you're done:
今天是几月几号？ (jīntiān shì jǐ yuè jǐ hào) → 今天是九月二十八号。(jīntiān shì jiǔyuè èrshíbā hào)
No 吗 (ma): it's already a question.

几 (jǐ) OR 多少: 几 (jǐ) is for small or limited amounts (months go up to 12, days up to 31); 多少 (duōshǎo) for any amount, like a price.

PRONUNCIATION: jǐ yuè jǐ hào. In her notes Michelle wrote that the j in 几 (jǐ) sounds like the one in "Gill": a soft "dy", tongue flat. 几 is 3rd tone; before 月 (yuè, 4th) it dips and barely rises.`,
zh:`几月几号：问日期的核心。几：本义小桌（茶几），借作"几个"；繁体幾。疑问词放在答案的位置：今天是几月几号？→今天是九月二十八号。几用于小数目或有限的数，多少用于任何数量。`}},
  {id:"fec-35",s:"今天是几月几号？",t:"今天是幾月幾號？",py:"jīntiān shì jǐ yuè jǐ hào?",es:"¿qué fecha es hoy?",en:"what's the date today?",
   x:{
es:`QUÉ ES: la pregunta principal de la clase: «¿qué fecha es hoy?». Literalmente, como tradujo Michelle: «¿hoy es cuántos meses, cuántos días?».

CÓMO SE ARMA:
今天 (jīntiān) hoy: 今 (jīn, ahora) + 天 (tiān, día). Michelle: «hoy día».
是 (shì) ser: el verbo que ya conocés.
几月几号 (jǐ yuè jǐ hào): ¿qué mes, qué número?

LA RESPUESTA: igual, cambiando 几 por números: 今天是九月二十八号。(jīntiān shì jiǔyuè èrshíbā hào) Si querés, agregás el año adelante: 今天是2026年9月28号 (jīntiān shì èr líng èr liù nián jiǔ yuè èrshíbā hào). Le preguntaste a Michelle si hay que decir el año: se puede, pero para «qué día es hoy» alcanza con mes y día.
Por escrito puede aparecer 日 (rì) en vez de 号 (hào): 今天是几月几日？ (jīntiān shì jǐ yuè jǐ rì)

VARIANTES: más corta, sin 是: 今天几号？ (jīntiān jǐ hào?), «¿a cuánto estamos?». Y la segunda forma de Michelle: 今天的日期是多少？ (jīntiān de rìqī shì duōshǎo?).
Para el día de la semana: 今天星期几？ (jīntiān xīngqī jǐ?).

PRONUNCIACIÓN: jīntiān shì jǐ yuè jǐ hào? La entonación no sube al final como en español: la pregunta ya está en 几 (jǐ).`,
en:`WHAT IT IS: the main question of the class: "what's the date today?". Literally, as Michelle translated: "today is how many months, how many days?".

HOW IT'S BUILT:
今天 (jīntiān) today: 今 (jīn, now) + 天 (tiān, day). Michelle: "this day".
是 (shì) to be: the verb you know.
几月几号 (jǐ yuè jǐ hào): which month, which number?

THE ANSWER: the same, swapping 几 for numbers: 今天是九月二十八号。(jīntiān shì jiǔyuè èrshíbā hào) If you like, add the year in front: 今天是2026年9月28号 (jīntiān shì èr líng èr liù nián jiǔ yuè èrshíbā hào). You asked Michelle whether to say the year: you can, but for "what's the date" month and day are enough.
In writing you may see 日 (rì) instead of 号 (hào): 今天是几月几日？ (jīntiān shì jǐ yuè jǐ rì)

VARIANTS: shorter, without 是: 今天几号？ (jīntiān jǐ hào?), "what's the date?". And Michelle's second form: 今天的日期是多少？ (jīntiān de rìqī shì duōshǎo?).
For the day of the week: 今天星期几？ (jīntiān xīngqī jǐ?).

PRONUNCIATION: jīntiān shì jǐ yuè jǐ hào? The intonation doesn't rise at the end as in Spanish: the question is already in 几 (jǐ).`,
zh:`今天是几月几号？问日期。今天＋是＋几月几号。回答：今天是九月二十八号（可以加年份）。书面可用几日。简短：今天几号？也可以说：今天的日期是多少？问星期：今天星期几？`}},
  {id:"fec-36",s:"今天的日期是多少？",py:"jīntiān de rìqī shì duōshǎo?",es:"¿la fecha de hoy es cuánto? (forma con «fecha»)",en:"today's date is how much? (form with \"date\")",
   x:{
es:`QUÉ ES: la segunda forma de preguntar la fecha que dio Michelle. Literalmente: «¿la fecha de hoy es cuánto?». Un poco más formal que 今天是几月几号？ (jīntiān shì jǐ yuè jǐ hào?).

CÓMO SE ARMA:
今天的 (jīntiān de) de hoy: 的 (de) es el posesivo, el 's del inglés. Le preguntaste «¿qué es ese de?» y Michelle lo confirmó: «es posesivo, la fecha de hoy».
日期 (rìqī) fecha · 是 (shì) es · 多少 (duōshǎo) cuánto.

EL 的 SUENA «DE» NEUTRO: Michelle lo comparó con la schwa del inglés, la vocal floja de «the»: corto y sin tono. Repasó con «el libro de María»: María的书 (María de shū), primero el dueño, después la cosa.

OJO: acá 的 no se puede sacar: 今天的日期 (jīntiān de rìqī). (El 的 se saca con personas cercanas: 我爸爸 wǒ bàba, clase 2.)

LA RESPUESTA: 今天的日期是九月二十八号。(jīntiān de rìqī shì jiǔyuè èrshíbā hào)
Ayer: 昨天的日期是多少？ (zuótiān de rìqī shì duōshǎo?)

PRONUNCIACIÓN: jīntiān de rìqī shì duōshǎo? Michelle dice duōshǎo con los dos tonos (así se habla en Taiwán); en China continental muchos dicen duōshao, con el segundo neutro.`,
en:`WHAT IT IS: the second way Michelle gave to ask the date. Literally: "today's date is how much?". A bit more formal than 今天是几月几号？ (jīntiān shì jǐ yuè jǐ hào?).

HOW IT'S BUILT:
今天的 (jīntiān de) today's: 的 (de) is the possessive, English 's. You asked "what's that de?" and Michelle confirmed: "it's possessive, today's date".
日期 (rìqī) date · 是 (shì) is · 多少 (duōshǎo) how much.

的 SOUNDS LIKE A NEUTRAL "DE": Michelle compared it to the English schwa, the lazy vowel in "the": short and toneless. She reviewed it with "María's book": María的书 (María de shū), owner first, then the thing.

CAREFUL: here 的 can't be dropped: 今天的日期 (jīntiān de rìqī). (的 is dropped with close people: 我爸爸 wǒ bàba, class 2.)

THE ANSWER: 今天的日期是九月二十八号。(jīntiān de rìqī shì jiǔyuè èrshíbā hào)
Yesterday: 昨天的日期是多少？ (zuótiān de rìqī shì duōshǎo?)

PRONUNCIATION: jīntiān de rìqī shì duōshǎo? Michelle says duōshǎo with both tones (the Taiwanese way); in mainland China many say duōshao, the second syllable neutral.`,
zh:`今天的日期是多少？问日期的第二种说法。的：所有格，读轻声，老师说像英语的 schwa。María的书。回答：今天的日期是九月二十八号。昨天的日期是多少？`}},
  {id:"fec-37",s:"多少",py:"duōshǎo",es:"¿cuánto?",en:"how much? how many?",
   x:{
es:`QUÉ ES: «¿cuánto?». Michelle: «cuando vas a comprar, le preguntás al vendedor cuánto sale: le decís 多少 y te va a decir el precio». La forma completa es 多少钱？ (duōshǎo qián?), «¿cuánta plata?».

LOS CARACTERES:
多 (duō) mucho: dos 夕 (xī) apilados. Se discute qué eran: dos trozos de carne o dos lunas/noches. En ambos casos, «más de uno»: mucho.
少 (shǎo) poco: 小 (xiǎo, pequeño, tres trazos chiquitos) con un trazo que le quita algo abajo: todavía menos, «poco».
多少 (duōshǎo) = «¿mucho o poco?»: ¿cuánto? El chino arma preguntas juntando los opuestos (también 大小 dàxiǎo, «grande-chico» = tamaño).

多少 O 几: 几 (jǐ) cuando esperás un número chico o limitado (几月几号 jǐ yuè jǐ hào, 几个人 jǐ ge rén); 多少 para cualquier cantidad, sin límite: precios, personas en una ciudad, la fecha como «dato».
多少 puede ir sin clasificador: 多少人？ (duōshǎo rén?); 几 lo necesita: 几个人？ (jǐ ge rén?).

PRONUNCIACIÓN: duōshǎo (alto + baja-sube), como la dice Michelle; en el norte de China, duōshao. sh con la lengua curvada.`,
en:`WHAT IT IS: "how much?". Michelle: "when you go shopping, you ask the seller how much it is: you say 多少 and they'll tell you the price". The full form is 多少钱？ (duōshǎo qián?), "how much money?".

THE CHARACTERS:
多 (duō) many, much: two 夕 (xī) stacked. What they were is debated: two pieces of meat or two moons/evenings. Either way, "more than one": much.
少 (shǎo) few, little: 小 (xiǎo, small, three little strokes) with a stroke that takes something away below: even less, "little".
多少 (duōshǎo) = "much or little?": how much? Chinese builds questions by joining opposites (also 大小 dàxiǎo, "big-small" = size).

多少 OR 几: 几 (jǐ) when you expect a small or limited number (几月几号 jǐ yuè jǐ hào, 几个人 jǐ ge rén); 多少 for any amount, no limit: prices, people in a city, the date as "a figure".
多少 can go without a measure word: 多少人？ (duōshǎo rén?); 几 needs one: 几个人？ (jǐ ge rén?).

PRONUNCIATION: duōshǎo (high + dip-rise), as Michelle says it; in northern China, duōshao. sh with the tongue curled back.`,
zh:`多少：问数量、价钱。老师：买东西问多少，对方就告诉你价钱。多少钱？多：两个夕（有人说是两块肉），表示多；少：小＋一撇。用相反的字组成疑问：大小。几用于小数目，要加量词；多少不限，可不加量词。`}},
  {id:"fec-38",s:"昨天几号？",t:"昨天幾號？",py:"zuótiān jǐ hào?",es:"¿qué día (del mes) fue ayer?",en:"what was the date yesterday?",
   x:{
es:`QUÉ ES: la forma corta de «¿qué fecha fue ayer?», tal como la anotó Michelle. La larga es 昨天是几月几号？ (zuótiān shì jǐ yuè jǐ hào?).

POR QUÉ NO LLEVA 是 (shì): con fechas, días de la semana y edades, el 是 se puede sacar en la charla: 今天几号？ (jīntiān jǐ hào?), 明天星期几？ (míngtiān xīngqī jǐ?), 你几岁？ (nǐ jǐ suì?). Y como el mes se sobreentiende, alcanza con 几号 (jǐ hào): ¿qué número?

OJO CON EL PASADO: el verbo no cambia; lo único que marca el pasado es 昨天 (zuótiān). La respuesta: 昨天二十七号。(zuótiān èrshíqī hào), «ayer fue 27».

LOS CARACTERES: 昨 (zuó) = 日 (rì, sol) + 乍 (zhà, «de repente»): «el sol que acaba de irse», como lo explicó Michelle · 天 (tiān) día · 几 (jǐ) cuántos · 号 (hào) número.

PRONUNCIACIÓN: zuótiān jǐ hào? z como «ds», nunca como la j española.`,
en:`WHAT IT IS: the short form of "what was the date yesterday?", as Michelle wrote it. The long one is 昨天是几月几号？ (zuótiān shì jǐ yuè jǐ hào?).

WHY THERE'S NO 是 (shì): with dates, weekdays and ages, 是 can be dropped in speech: 今天几号？ (jīntiān jǐ hào?), 明天星期几？ (míngtiān xīngqī jǐ?), 你几岁？ (nǐ jǐ suì?). And since the month is understood, 几号 (jǐ hào) is enough: which number?

WATCH THE PAST: the verb doesn't change; only 昨天 (zuótiān) marks the past. The answer: 昨天二十七号。(zuótiān èrshíqī hào), "yesterday was the 27th".

THE CHARACTERS: 昨 (zuó) = 日 (rì, sun) + 乍 (zhà, "suddenly"): "the sun that has just gone", as Michelle explained · 天 (tiān) day · 几 (jǐ) how many · 号 (hào) number.

PRONUNCIATION: zuótiān jǐ hào? z like "ds", never like a Spanish j.`,
zh:`昨天几号？昨天是几月几号的简短说法。日期、星期、年龄前可省略"是"：今天几号？明天星期几？你几岁？回答：昨天二十七号。`}},
  {id:"fec-39",s:"2026年9月28号",t:"2026年9月28號",py:"èr líng èr liù nián jiǔ yuè èrshíbā hào",es:"28 de septiembre de 2026",en:"September 28, 2026",say:"二零二六年九月二十八号",
   x:{
es:`QUÉ ES: la fecha de esta clase, dicha como se habla. Michelle: «en chino la fecha va primero el año, después el mes y después el día»: de lo más grande a lo más chico, como la dirección de una carta china.

CÓMO SE LEE:
2026年 → 二〇二六年 (èr líng èr liù nián): el año, cifra por cifra, y el cero es 零 (líng). Michelle lo dijo «èr líng èr líng» para 2020.
9月 → 九月 (jiǔyuè), septiembre: número + 月 (yuè, luna).
28号 → 二十八号 (èrshíbā hào): 2 × 10 + 8, y 号 (hào), «número». Por escrito, 28日 (rì).

EN ESPAÑOL VA AL REVÉS: «28 de septiembre de 2026» = 2026年9月28号 (èr líng èr liù nián jiǔ yuè èrshíbā hào). Es el error más común: arrancá siempre por el año.

DATO: el 28 de septiembre es el día del maestro en Taiwán (教师节 Jiàoshījié), el cumpleaños de Confucio. Buen día para una clase.

PRONUNCIACIÓN: èr líng èr liù nián jiǔ yuè èrshíbā hào. El 八 (bā) sin aire: Michelle, «pa, no como papá».`,
en:`WHAT IT IS: the date of this class, as it's spoken. Michelle: "in Chinese the date goes year first, then month, then day": biggest to smallest, like the address on a Chinese letter.

HOW TO READ IT:
2026年 → 二〇二六年 (èr líng èr liù nián): the year, digit by digit, and zero is 零 (líng). Michelle said "èr líng èr líng" for 2020.
9月 → 九月 (jiǔyuè), September: number + 月 (yuè, moon).
28号 → 二十八号 (èrshíbā hào): 2 × 10 + 8, and 号 (hào), "number". In writing, 28日 (rì).

SPANISH GOES THE OTHER WAY: "28 de septiembre de 2026" = 2026年9月28号 (èr líng èr liù nián jiǔ yuè èrshíbā hào). It's the most common mistake: always start with the year.

FACT: September 28 is Teachers' Day in Taiwan (教师节 Jiàoshījié), Confucius's birthday. A good day for a class.

PRONUNCIATION: èr líng èr liù nián jiǔ yuè èrshíbā hào. 八 (bā) without air: Michelle, "pa, not like papá".`,
zh:`2026年9月28号：日期从大到小：年、月、日。年份逐个数字读：二〇二六年；九月；二十八号（书面写日）。和西班牙语顺序相反。9月28日是台湾教师节。`}},
  {id:"fec-40",s:"2020年2月17日",py:"èr líng èr líng nián èr yuè shíqī rì",es:"17 de febrero de 2020 (escrito)",en:"February 17, 2020 (written)",say:"二零二零年二月十七日",
   x:{
es:`QUÉ ES: el ejemplo de fecha del apunte de Michelle, en la forma escrita, con 日 (rì). Así aparece en documentos, noticias y calendarios. Al hablar se cambia 日 por 号 (hào): 二月十七号 (èr yuè shíqī hào).

CÓMO SE LEE:
2020年 → 二〇二〇年 (èr líng èr líng nián). En clase te costó el «líng»: 零 (líng) es cero, y en los años se dice siempre, cifra por cifra.
2月 → 二月 (èryuè), febrero: 二 (èr), nunca 两 (liǎng).
17日 → 十七日 (shíqī rì): 十 (shí) + 七 (qī); sin 一 (yī) adelante del 十.

LOS CARACTERES: 年 (nián) año: una persona cargando la cosecha · 月 (yuè) luna, mes · 日 (rì) sol, día.

PRÁCTICA DE CLASE: Michelle después preguntó «¿y la fecha de ayer?»: 昨天是二月十六号。(zuótiān shì èr yuè shíliù hào).

PRONUNCIACIÓN: èr líng èr líng nián èr yuè shíqī rì. q de 七 (qī) con aire; r de 日 (rì) con la lengua curvada y zumbido.`,
en:`WHAT IT IS: the date example from Michelle's notes, in the written form, with 日 (rì). That's how it appears on documents, news and calendars. In speech 日 becomes 号 (hào): 二月十七号 (èr yuè shíqī hào).

HOW TO READ IT:
2020年 → 二〇二〇年 (èr líng èr líng nián). In class the "líng" was the hard part: 零 (líng) is zero, and in years you always say it, digit by digit.
2月 → 二月 (èryuè), February: 二 (èr), never 两 (liǎng).
17日 → 十七日 (shíqī rì): 十 (shí) + 七 (qī); no 一 (yī) before 十.

THE CHARACTERS: 年 (nián) year: a person carrying the harvest · 月 (yuè) moon, month · 日 (rì) sun, day.

CLASS PRACTICE: Michelle then asked "and yesterday's date?": 昨天是二月十六号。(zuótiān shì èr yuè shíliù hào).

PRONUNCIATION: èr líng èr líng nián èr yuè shíqī rì. q in 七 (qī) with air; r in 日 (rì) with the tongue curled and a buzz.`,
zh:`2020年2月17日：老师笔记中的例子，书面写日，口语说号。二〇二〇年逐个数字读，零要读出来；二月不说两月；十七前面不加一。`}},
  {id:"fec-41",s:"生日",py:"shēngrì",es:"cumpleaños",en:"birthday",
   x:{
es:`QUÉ ES: «cumpleaños». Michelle: «日 (rì) es día y 生 (shēng) es el verbo nacer: el día de nacer».

LOS CARACTERES:
生 (shēng) nacer, crecer, vida: un brote que sale de la tierra (la raya de abajo es el suelo). De «brotar» salió «nacer» y «estar vivo».
日 (rì) sol, día.
生日 (shēngrì) = «día de nacer».

生 (shēng) EN PALABRAS QUE YA CONOCÉS: 学生 (xuéshēng) estudiante · 先生 (xiānsheng) señor, «nacido antes» · 生父 (shēngfù) padre biológico · el proverbio de la clase 1, 滚石不生苔 (gǔn shí bù shēng tái), donde 生 es «crecer».

FRASES:
你的生日是几月几号？ (nǐ de shēngrì shì jǐ yuè jǐ hào?) ¿cuándo es tu cumpleaños?
祝你生日快乐！ (zhù nǐ shēngrì kuàilè!) ¡feliz cumpleaños!
过生日 (guò shēngrì) festejar el cumpleaños.
DATO: muchas personas mayores festejan el cumpleaños según el calendario lunar.

PRONUNCIACIÓN: shēngrì. En clase sonaba «shen ru» o «shen gri»: la -ng de shēng se pega con la r de rì. Decilo en dos partes: shēng (alto y plano) + rì (cae, lengua curvada, con zumbido).`,
en:`WHAT IT IS: "birthday". Michelle: "日 (rì) is day and 生 (shēng) is the verb to be born: the day of being born".

THE CHARACTERS:
生 (shēng) to be born, to grow, life: a sprout coming out of the ground (the bottom line is the earth). From "sprouting" came "being born" and "being alive".
日 (rì) sun, day.
生日 (shēngrì) = "day of being born".

生 (shēng) IN WORDS YOU KNOW: 学生 (xuéshēng) student · 先生 (xiānsheng) Mr., "born before" · 生父 (shēngfù) birth father · the class-1 proverb 滚石不生苔 (gǔn shí bù shēng tái), where 生 is "to grow".

PHRASES:
你的生日是几月几号？ (nǐ de shēngrì shì jǐ yuè jǐ hào?) when is your birthday?
祝你生日快乐！ (zhù nǐ shēngrì kuàilè!) happy birthday!
过生日 (guò shēngrì) to celebrate a birthday.
FACT: many older people celebrate their birthday by the lunar calendar.

PRONUNCIATION: shēngrì. In class it sounded like "shen ru" or "shen gri": the -ng of shēng runs into the r of rì. Say it in two parts: shēng (high and level) + rì (falling, tongue curled, with a buzz).`,
zh:`生日：老师：日是一天，生是出生，出生的日子。生：地上长出的幼苗，引申为出生、生命。学生、先生、生父、滚石不生苔。你的生日是几月几号？祝你生日快乐！过生日。`}},
  {id:"fec-42",s:"什么时候",t:"什麼時候",py:"shénme shíhòu",es:"¿cuándo?",en:"when?",
   x:{
es:`QUÉ ES: «¿cuándo?». Michelle: «si querés decir cuándo, se dice 什么时候 (shénme shíhòu)»; y en su apunte lo tradujo literal: «¿qué tiempo?».

LOS CARACTERES:
什么 (shénme) qué: el de 你叫什么名字？ (nǐ jiào shénme míngzi?).
时 (shí) tiempo, hora: 日 (rì, sol) + 寸 (cùn, una medida, la mano que mide): medir el sol, el tiempo.
候 (hòu) esperar, momento: 亻 (rén, persona) + el resto por el sonido. Una persona que espera el momento.
时候 (shíhòu) = el momento, el rato. 什么时候 (shénme shíhòu) = «¿qué momento?» = ¿cuándo?

LA REGLA DE SIEMPRE: va donde va la respuesta, no al principio: 你的生日是什么时候？ (nǐ de shēngrì shì shénme shíhòu?) → 我的生日是十一月 (wǒ de shēngrì shì shíyīyuè)…
También: 你什么时候来？ (nǐ shénme shíhòu lái?) ¿cuándo venís?

PRONUNCIACIÓN: Michelle dice shíhòu, con el 4.º tono (así se dice en Taiwán); en China continental suena shíhou, neutro. 什么 es shénme: shén sube y me es cortito.`,
en:`WHAT IT IS: "when?". Michelle: "if you want to say when, you say 什么时候 (shénme shíhòu)"; in her notes she translated it literally: "what time?".

THE CHARACTERS:
什么 (shénme) what: as in 你叫什么名字？ (nǐ jiào shénme míngzi?).
时 (shí) time, hour: 日 (rì, sun) + 寸 (cùn, a measure, the measuring hand): measuring the sun, time.
候 (hòu) to wait, moment: 亻 (rén, person) + the rest for the sound. A person waiting for the moment.
时候 (shíhòu) = the moment, the time. 什么时候 (shénme shíhòu) = "what moment?" = when?

THE USUAL RULE: it goes where the answer goes, not at the front: 你的生日是什么时候？ (nǐ de shēngrì shì shénme shíhòu?) → 我的生日是十一月 (wǒ de shēngrì shì shíyīyuè)…
Also: 你什么时候来？ (nǐ shénme shíhòu lái?) when are you coming?

PRONUNCIATION: Michelle says shíhòu, with the 4th tone (the Taiwanese way); in mainland China it sounds shíhou, neutral. 什么 is shénme: shén rises and me is very short.`,
zh:`什么时候：问时间。老师笔记直译为"什么时间"。时：日＋寸，量日影即时间。候：亻＋声旁，等候、时机。疑问词放在答案的位置：你的生日是什么时候？你什么时候来？台湾读 shíhòu，大陆多读轻声。`}},
  {id:"fec-43",s:"你的生日是什么时候？",t:"你的生日是什麼時候？",py:"nǐ de shēngrì shì shénme shíhòu?",es:"¿cuándo es tu cumpleaños?",en:"when is your birthday?",
   x:{
es:`QUÉ ES: «¿cuándo es tu cumpleaños?», la primera forma que dio Michelle. Literalmente: «tu cumpleaños es qué momento».

CÓMO SE ARMA:
你的 (nǐ de) tu: 你 (nǐ) + 的 (de), el posesivo.
生日 (shēngrì) cumpleaños: «día de nacer».
是 (shì) es.
什么时候 (shénme shíhòu) cuándo: «qué momento».

LA RESPUESTA: se cambia 什么时候 (shénme shíhòu) por la fecha, de lo grande a lo chico: 我的生日是十一月…号。(wǒ de shēngrì shì shíyīyuè … hào)

LA OTRA FORMA: 你的生日是几月几号？ (nǐ de shēngrì shì jǐ yuè jǐ hào?), más precisa: pide mes y día. Las dos se usan igual.

PRONUNCIACIÓN: nǐ de shēngrì shì shénme shíhòu? Muchas sh seguidas: lengua curvada atrás en shēng, shì, shén, shí.`,
en:`WHAT IT IS: "when is your birthday?", the first form Michelle gave. Literally: "your birthday is what moment".

HOW IT'S BUILT:
你的 (nǐ de) your: 你 (nǐ) + 的 (de), the possessive.
生日 (shēngrì) birthday: "day of being born".
是 (shì) is.
什么时候 (shénme shíhòu) when: "what moment".

THE ANSWER: swap 什么时候 (shénme shíhòu) for the date, biggest to smallest: 我的生日是十一月…号。(wǒ de shēngrì shì shíyīyuè … hào)

THE OTHER FORM: 你的生日是几月几号？ (nǐ de shēngrì shì jǐ yuè jǐ hào?), more precise: it asks for month and day. Both are used the same way.

PRONUNCIATION: nǐ de shēngrì shì shénme shíhòu? Lots of sh in a row: tongue curled back in shēng, shì, shén, shí.`,
zh:`你的生日是什么时候？问生日的第一种说法。你的＋生日＋是＋什么时候。回答：我的生日是十一月……号。也可以问：你的生日是几月几号？`}},
  {id:"fec-44",s:"你的生日是几月几号？",t:"你的生日是幾月幾號？",py:"nǐ de shēngrì shì jǐ yuè jǐ hào?",es:"¿qué mes y qué día es tu cumpleaños?",en:"which month and day is your birthday?",
   x:{
es:`QUÉ ES: la segunda forma de preguntar el cumpleaños: «¿tu cumpleaños es qué mes, qué día?». Michelle la practicó con toda la familia.

CÓMO SE ARMA: 你的生日 (nǐ de shēngrì) tu cumpleaños + 是 (shì) es + 几月几号 (jǐ yuè jǐ hào) qué mes, qué número.

CAMBIANDO LA PERSONA (así practicaron en clase):
你爸爸的生日是几月几号？ (nǐ bàba de shēngrì shì jǐ yuè jǐ hào?) ¿cuándo es el cumpleaños de tu papá?
你妹妹的生日是几月几号？ (nǐ mèimei de shēngrì shì jǐ yuè jǐ hào?) ¿y el de tu hermana menor?
Michelle lo escribió 你的爸爸的生日 (nǐ de bàba de shēngrì): está bien, pero con dos 的 seguidos suena más natural sacar el primero (clase 2: con familia cercana el 的 se puede omitir).

LA RESPUESTA: 我的生日是X月X号 (wǒ de shēngrì shì X yuè X hào). Y si decís el año, va primero, cifra por cifra.

PRONUNCIACIÓN: nǐ de shēngrì shì jǐ yuè jǐ hào? El 的 es corto y neutro, como la schwa del inglés.`,
en:`WHAT IT IS: the second way to ask about a birthday: "your birthday is which month, which day?". Michelle practised it with the whole family.

HOW IT'S BUILT: 你的生日 (nǐ de shēngrì) your birthday + 是 (shì) is + 几月几号 (jǐ yuè jǐ hào) which month, which number.

CHANGING THE PERSON (as practised in class):
你爸爸的生日是几月几号？ (nǐ bàba de shēngrì shì jǐ yuè jǐ hào?) when is your dad's birthday?
你妹妹的生日是几月几号？ (nǐ mèimei de shēngrì shì jǐ yuè jǐ hào?) and your younger sister's?
Michelle wrote it 你的爸爸的生日 (nǐ de bàba de shēngrì): that's fine, but with two 的 in a row it sounds more natural to drop the first (class 2: with close family 的 can be left out).

THE ANSWER: 我的生日是X月X号 (wǒ de shēngrì shì X yuè X hào). If you add the year, it goes first, digit by digit.

PRONUNCIATION: nǐ de shēngrì shì jǐ yuè jǐ hào? 的 is short and neutral, like the English schwa.`,
zh:`你的生日是几月几号？问生日的第二种说法。换人：你爸爸的生日是几月几号？你妹妹的生日是几月几号？两个"的"连用时，第一个常省略。回答：我的生日是X月X号。`}},
  {id:"fec-45",s:"我的爸爸的生日是1959年9月4号。",t:"我的爸爸的生日是1959年9月4號。",py:"wǒ de bàba de shēngrì shì yī jiǔ wǔ jiǔ nián jiǔ yuè sì hào.",es:"el cumpleaños de mi papá es el 4 de septiembre de 1959",en:"my dad's birthday is September 4, 1959",say:"我的爸爸的生日是一九五九年九月四号。",
   x:{
es:`QUÉ ES: la oración que armaste en clase, tal como la escribió Michelle: «el cumpleaños de mi papá es el 4 de septiembre de 1959».

CÓMO SE ARMA:
我的爸爸的生日 (wǒ de bàba de shēngrì): «de mi papá, el cumpleaños». Primero el dueño, después la cosa, como en inglés: my dad's birthday. Más natural: 我爸爸的生日 (wǒ bàba de shēngrì), con un solo 的.
是 (shì) es.
1959年 → 一九五九年 (yī jiǔ wǔ jiǔ nián): cifra por cifra. Justo ahí estuvo la dificultad en clase.
9月4号 → 九月四号 (jiǔ yuè sì hào): septiembre, número 4.

DOS TRAMPAS DE LA CLASE:
• 九 (jiǔ) y 九月 (jiǔyuè) aparecen tres veces: Michelle, «suena como George».
• El orden: primero el año, después el mes, al final el día. En español es al revés.

PARA CANTARLE: Michelle propuso que la próxima vez le cantes a tu familia en chino: 祝你生日快乐 (zhù nǐ shēngrì kuàilè).

PRONUNCIACIÓN: wǒ de bàba de shēngrì shì yī jiǔ wǔ jiǔ nián jiǔ yuè sì hào. 四 (sì) con la lengua plana, no 十 (shí).`,
en:`WHAT IT IS: the sentence you built in class, as Michelle wrote it: "my dad's birthday is September 4, 1959".

HOW IT'S BUILT:
我的爸爸的生日 (wǒ de bàba de shēngrì): "my dad's birthday". Owner first, then the thing, as in English. More natural: 我爸爸的生日 (wǒ bàba de shēngrì), with a single 的.
是 (shì) is.
1959年 → 一九五九年 (yī jiǔ wǔ jiǔ nián): digit by digit. That's exactly where it got hard in class.
9月4号 → 九月四号 (jiǔ yuè sì hào): September, number 4.

TWO TRAPS FROM CLASS:
• 九 (jiǔ) and 九月 (jiǔyuè) come up three times: Michelle, "sounds like George".
• The order: year first, then month, day last. Spanish goes the other way.

TO SING TO HIM: Michelle suggested you sing to your family in Chinese next time: 祝你生日快乐 (zhù nǐ shēngrì kuàilè).

PRONUNCIATION: wǒ de bàba de shēngrì shì yī jiǔ wǔ jiǔ nián jiǔ yuè sì hào. 四 (sì) with a flat tongue, not 十 (shí).`,
zh:`我的爸爸的生日是1959年9月4号。课上造的句子。更自然：我爸爸的生日。年份逐个数字读：一九五九年。顺序：年、月、日。老师建议用中文给家人唱生日歌。`}},
  {id:"fec-46",s:"我的妹妹的生日是1990年3月10号。",t:"我的妹妹的生日是1990年3月10號。",py:"wǒ de mèimei de shēngrì shì yī jiǔ jiǔ líng nián sān yuè shí hào.",es:"el cumpleaños de mi hermana menor es el 10 de marzo de 1990",en:"my younger sister's birthday is March 10, 1990",say:"我的妹妹的生日是一九九零年三月十号。",
   x:{
es:`QUÉ ES: la segunda oración de práctica: «el cumpleaños de mi hermana (menor) es el 10 de marzo de 1990». Michelle preguntó 你的妹妹的生日是几月几号？ (nǐ de mèimei de shēngrì shì jǐ yuè jǐ hào?).

CÓMO SE ARMA: 我的妹妹的生日 (wǒ de mèimei de shēngrì), más natural 我妹妹的生日 (wǒ mèimei de shēngrì) · 是 (shì) · 一九九零年 (yī jiǔ jiǔ líng nián) · 三月 (sānyuè) · 十号 (shí hào).

LO QUE PASÓ EN CLASE:
• Primero salió el mes y el día al revés. En chino es MES y después DÍA: 三月十号 (sānyuè shí hào) = 10 de marzo.
• Dudaste con el 10: es solo 十 (shí), sin nada más. «Diez es 十 nada más».
• 1990: el cero del año es 零 (líng): 一九九零 (yī jiǔ jiǔ líng).
• 妹妹 (mèimei) es la hermana MENOR; la mayor sería 姐姐 (jiějie).

PRONUNCIACIÓN: wǒ de mèimei de shēngrì shì yī jiǔ jiǔ líng nián sān yuè shí hào. 三 (sān) lengua plana; 十 (shí) lengua curvada.`,
en:`WHAT IT IS: the second practice sentence: "my (younger) sister's birthday is March 10, 1990". Michelle asked 你的妹妹的生日是几月几号？ (nǐ de mèimei de shēngrì shì jǐ yuè jǐ hào?).

HOW IT'S BUILT: 我的妹妹的生日 (wǒ de mèimei de shēngrì), more natural 我妹妹的生日 (wǒ mèimei de shēngrì) · 是 (shì) · 一九九零年 (yī jiǔ jiǔ líng nián) · 三月 (sānyuè) · 十号 (shí hào).

WHAT HAPPENED IN CLASS:
• Month and day first came out reversed. In Chinese it's MONTH then DAY: 三月十号 (sānyuè shí hào) = March 10.
• You hesitated over 10: it's just 十 (shí), nothing else. "Ten is just 十".
• 1990: the zero in the year is 零 (líng): 一九九零 (yī jiǔ jiǔ líng).
• 妹妹 (mèimei) is the YOUNGER sister; an older one would be 姐姐 (jiějie).

PRONUNCIATION: wǒ de mèimei de shēngrì shì yī jiǔ jiǔ líng nián sān yuè shí hào. 三 (sān) flat tongue; 十 (shí) tongue curled.`,
zh:`我的妹妹的生日是1990年3月10号。课上第二个练习句。月在前，日在后；十就是十；年份里的零要读；妹妹是比自己小的。`}},
  {id:"fec-47",s:"祝你生日快乐！",t:"祝你生日快樂！",py:"zhù nǐ shēngrì kuàilè!",es:"¡feliz cumpleaños!",en:"happy birthday!",
   x:{
es:`QUÉ ES: «¡feliz cumpleaños!», y también la letra de la canción de cumpleaños en chino (se canta con la misma melodía, repitiendo la frase). Literalmente: «te deseo cumpleaños feliz».

CÓMO SE ARMA (como lo desarmó Michelle):
祝 (zhù) desear: «como wish en inglés».
你 (nǐ) vos.
生日 (shēngrì) cumpleaños, «día de nacer».
快乐 (kuàilè) feliz, contento.

EL ORDEN: el deseo va primero y la persona después: 祝你… «te deseo…». Sirve para cualquier deseo: 祝你新年快乐！ (zhù nǐ xīnnián kuàilè!) ¡feliz año nuevo! · 祝你好运！ (zhù nǐ hǎoyùn!) ¡suerte!
Más corto, sin 祝你: 生日快乐！ (shēngrì kuàilè!).

LA TAREA DE MICHELLE: enseñarle a tu familia a cantarla en chino y hacerles pronunciar bien los tonos, empezando por 祝 (zhù) y 你 (nǐ).

PRONUNCIACIÓN: zhù nǐ shēngrì kuàilè! En clase sonaba «kuaile» o «kuailo»: es kuàilè, dos 4.º tonos que caen. zh curvada, sin aire.`,
en:`WHAT IT IS: "happy birthday!", and also the words of the birthday song in Chinese (sung to the same tune, repeating the phrase). Literally: "(I) wish you a happy birthday".

HOW IT'S BUILT (as Michelle took it apart):
祝 (zhù) to wish: "like wish in English".
你 (nǐ) you.
生日 (shēngrì) birthday, "day of being born".
快乐 (kuàilè) happy, glad.

THE ORDER: the wish comes first, then the person: 祝你… "I wish you…". It works for any wish: 祝你新年快乐！ (zhù nǐ xīnnián kuàilè!) happy new year! · 祝你好运！ (zhù nǐ hǎoyùn!) good luck!
Shorter, without 祝你: 生日快乐！ (shēngrì kuàilè!).

MICHELLE'S TASK: teach your family to sing it in Chinese, with the tones right, starting with 祝 (zhù) and 你 (nǐ).

PRONUNCIATION: zhù nǐ shēngrì kuàilè! In class it sounded like "kuaile" or "kuailo": it's kuàilè, two falling 4th tones. zh curled back, without air.`,
zh:`祝你生日快乐！生日祝福，也是生日歌的歌词。祝（像英语的 wish）＋你＋生日＋快乐。祝你新年快乐！祝你好运！也可以只说生日快乐！老师建议教家人用中文唱。`}},
  {id:"fec-48",s:"祝",py:"zhù",es:"desear (un deseo a alguien)",en:"to wish (someone something)",
   x:{
es:`QUÉ ES: «desear», en el sentido de un buen deseo para otro. Michelle: «祝 (zhù) es desear… como wish».

EL CARÁCTER:
礻 (shì) a la izquierda: el altar, forma de 示. Aparece en todo lo religioso: 礼 (lǐ, rito), 福 (fú, dicha).
兄 (xiōng) a la derecha: una persona (儿 ér, las piernas) con una boca grande 口 (kǒu) arriba: alguien que habla en voz alta. (Solo, 兄 quiere decir «hermano mayor».)
Una persona que habla frente al altar: el que reza, y de ahí «pedir un bien para otro», «desear».

EN USO: siempre va primero, y después a quién y qué:
祝你生日快乐 (zhù nǐ shēngrì kuàilè) · 祝你新年快乐 (zhù nǐ xīnnián kuàilè) · 祝你好运 (zhù nǐ hǎoyùn).
祝福 (zhùfú) bendición, buenos deseos.

OJO: 祝 (zhù) no es «querer» en general; para «quiero café» se usa 要 (yào) o 想 (xiǎng).

PRONUNCIACIÓN: zhù, 4.º tono (cae). zh con la lengua curvada atrás, sin aire; u redonda.`,
en:`WHAT IT IS: "to wish", in the sense of a good wish for someone else. Michelle: "祝 (zhù) is to wish… like wish".

THE CHARACTER:
礻 (shì) on the left: the altar, a form of 示. It appears in everything religious: 礼 (lǐ, rite), 福 (fú, blessing).
兄 (xiōng) on the right: a person (儿 ér, the legs) with a big mouth 口 (kǒu) on top: someone speaking aloud. (On its own, 兄 means "older brother".)
A person speaking before the altar: someone praying, and from there "asking for good for someone", "to wish".

IN USE: it always comes first, then to whom and what:
祝你生日快乐 (zhù nǐ shēngrì kuàilè) · 祝你新年快乐 (zhù nǐ xīnnián kuàilè) · 祝你好运 (zhù nǐ hǎoyùn).
祝福 (zhùfú) blessing, good wishes.

CAREFUL: 祝 (zhù) isn't "to want" in general; for "I want coffee" use 要 (yào) or 想 (xiǎng).

PRONUNCIATION: zhù, 4th tone (falling). zh with the tongue curled back, no air; rounded u.`,
zh:`祝：祝愿。老师：祝就是 wish。字形：礻（祭台）＋兄（张大口说话的人），在神前祷告，引申为祝愿。祝你生日快乐、祝你新年快乐、祝你好运、祝福。祝不等于"要、想"。`}},
  {id:"fec-49",s:"快乐",t:"快樂",py:"kuàilè",es:"feliz, contento",en:"happy, joyful",
   x:{
es:`QUÉ ES: «feliz, contento». Michelle: «快乐 (kuàilè) es feliz… o contento». Es la palabra de los deseos: 生日快乐 (shēngrì kuàilè), 新年快乐 (xīnnián kuàilè).

LOS CARACTERES:
快 (kuài): 忄 (xīn, el corazón, cuando va a la izquierda) + 夬 (guài), que da el sonido. Un corazón suelto, liviano: «contento». Hoy 快 solo quiere decir sobre todo «rápido»: 快点 (kuài diǎn), «¡más rápido!». La idea que une los dos sentidos: algo que fluye sin trabas.
乐 (lè) alegría: en la forma tradicional 樂 es un instrumento musical: cuerdas (幺 幺) sobre un soporte de madera (木 mù). La música da alegría: por eso el mismo carácter se lee yuè cuando es «música» (音乐 yīnyuè) y lè cuando es «alegría».
快乐 (kuàilè) = «corazón liviano + alegría».

OJO: 快乐 (kuàilè) es la felicidad de un momento o de un deseo; para «feliz con la vida» también se usa 幸福 (xìngfú). Y 快乐 no es «bueno»: eso es 好 (hǎo).

PRONUNCIACIÓN: kuàilè, dos 4.º tonos que caen. En clase salió «kuailo»: la e final de lè es la schwa, pero con tono (no neutra).`,
en:`WHAT IT IS: "happy, glad". Michelle: "快乐 (kuàilè) is happy… or glad". It's the word for wishes: 生日快乐 (shēngrì kuàilè), 新年快乐 (xīnnián kuàilè).

THE CHARACTERS:
快 (kuài): 忄 (xīn, the heart, when it's on the left) + 夬 (guài), giving the sound. A heart set free, light: "glad". On its own today 快 mostly means "fast": 快点 (kuài diǎn), "hurry up!". The idea linking both: something flowing without obstacles.
乐 (lè) joy: the traditional form 樂 is a musical instrument: strings (幺 幺) over a wooden stand (木 mù). Music brings joy: that's why the same character is read yuè for "music" (音乐 yīnyuè) and lè for "joy".
快乐 (kuàilè) = "light heart + joy".

CAREFUL: 快乐 (kuàilè) is the happiness of a moment or a wish; for "happy with life" there's also 幸福 (xìngfú). And 快乐 isn't "good": that's 好 (hǎo).

PRONUNCIATION: kuàilè, two falling 4th tones. In class it came out "kuailo": the final e of lè is the schwa sound, but with a tone (not neutral).`,
zh:`快乐：高兴。老师：快乐就是 feliz、contento。快：忄＋夬（声旁），心情畅快；单用多指"快速"：快点。乐：繁体樂，木架上的弦乐器，读 yuè 是音乐，读 lè 是快乐。生日快乐、新年快乐。长久的幸福说幸福。`}}
  ]
});
