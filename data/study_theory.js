/* "Para estudiar" theory: how each part works, to understand before memorising.
   Keyed by STUDY section key. Blocks: {h, p, ex?:[[zh, py, es, en]], warn?:true}. Text in es/en/zh,
   with pinyin after every Chinese word in es/en (CLAUDE.md). Rendered by assets/study.js. */
window.STUDY_THEORY = {

num:[
 {h:{es:"La idea: diez sonidos y una multiplicación", en:"The idea: ten sounds and a multiplication", zh:"核心：十个音加乘法"},
  p:{es:`En español cada decena tiene su palabra (once, veinte, treinta…). En chino no: solo aprendés del 0 al 10 y todo lo demás se arma como una cuenta. Michelle: «solamente tenés que acordarte de 10 sonidos».
El número se lee de izquierda a derecha, cifra por cifra, diciendo cada cifra con su columna: 十 (shí) decenas, 百 (bǎi) centenas, 千 (qiān) miles, 万 (wàn) diez miles.`,
     en:`In Spanish (and English) each ten has its own word (eleven, twenty, thirty…). Chinese doesn't: you only learn 0 to 10 and everything else is built like a sum. Michelle: "you only have to remember 10 sounds".
A number is read left to right, digit by digit, saying each digit with its column: 十 (shí) tens, 百 (bǎi) hundreds, 千 (qiān) thousands, 万 (wàn) ten thousands.`,
     zh:`只需记住零到十，其余像算式一样组合。从左到右，每个数字加上它的数位：十、百、千、万。`},
  ex:[["零","líng","0","0"],["一","yī","1","1"],["二","èr","2","2"],["三","sān","3","3"],["四","sì","4","4"],["五","wǔ","5","5"],["六","liù","6","6"],["七","qī","7","7"],["八","bā","8","8"],["九","jiǔ","9","9"],["十","shí","10","10"]]},
 {h:{es:"Paso 1 · Del 11 al 19: diez + unidad", en:"Step 1 · 11 to 19: ten + unit", zh:"第一步：十一到十九"},
  p:{es:`Se dice 十 (shí) y después la unidad, como una suma: 十一 (shíyī) = 10 + 1. No se dice «一十» (yīshí) para 10: el diez va solo.`,
     en:`Say 十 (shí) and then the unit, like a sum: 十一 (shíyī) = 10 + 1. You don't say "一十" (yīshí) for 10: ten stands alone.`,
     zh:`十＋个位：十一＝10＋1。十前面不加一。`},
  ex:[["十一","shíyī","11 = 10 + 1","11 = 10 + 1"],["十五","shíwǔ","15 = 10 + 5","15 = 10 + 5"],["十九","shíjiǔ","19 = 10 + 9","19 = 10 + 9"]]},
 {h:{es:"Paso 2 · Las decenas: cifra × diez (+ unidad)", en:"Step 2 · Tens: digit × ten (+ unit)", zh:"第二步：几十"},
  p:{es:`La cifra va ANTES de 十 (shí) y multiplica; lo que va DESPUÉS se suma: 二十 (èrshí) = 2 × 10; 二十五 (èrshíwǔ) = 2 × 10 + 5. Si la unidad es cero, no se dice nada: 二十 (èrshí), no «二十零» (èrshí líng).
Truco para no confundirte: 五十 (wǔshí) = 50, pero 十五 (shíwǔ) = 15. Lo que está adelante multiplica.`,
     en:`The digit goes BEFORE 十 (shí) and multiplies; what comes AFTER is added: 二十 (èrshí) = 2 × 10; 二十五 (èrshíwǔ) = 2 × 10 + 5. If the unit is zero, say nothing: 二十 (èrshí), not "二十零" (èrshí líng).
A trick to keep them apart: 五十 (wǔshí) = 50, but 十五 (shíwǔ) = 15. What comes first multiplies.`,
     zh:`十前面的数相乘，后面的数相加：二十＝2×10，二十五＝2×10＋5。末尾的零不读。五十≠十五。`},
  ex:[["二十","èrshí","20 = 2 × 10","20 = 2 × 10"],["二十五","èrshíwǔ","25 = 2 × 10 + 5","25 = 2 × 10 + 5"],["五十","wǔshí","50","50"],["九十九","jiǔshíjiǔ","99","99"]]},
 {h:{es:"Paso 3 · Cientos y miles", en:"Step 3 · Hundreds and thousands", zh:"第三步：百和千"},
  p:{es:`Igual, con 百 (bǎi) y 千 (qiān). Tres reglas nuevas:
• Con 百 y 千 el «uno» SÍ se dice: 一百 (yìbǎi), 一千 (yìqiān). Michelle: «en el cien sí se dice, pero no en el diez».
• Si en el medio falta una columna, se dice 零 (líng) una vez: 101 = 一百零一 (yìbǎi líng yī).
• Después de 百, el diez lleva su uno: 110 = 一百一十 (yìbǎi yīshí).
Para 200 se usa sobre todo 两百 (liǎngbǎi); 二百 (èrbǎi) también se oye.`,
     en:`The same, with 百 (bǎi) and 千 (qiān). Three new rules:
• With 百 and 千 the "one" IS said: 一百 (yìbǎi), 一千 (yìqiān). Michelle: "in a hundred you say it, but not in ten".
• If a column in the middle is empty, say 零 (líng) once: 101 = 一百零一 (yìbǎi líng yī).
• After 百, ten keeps its one: 110 = 一百一十 (yìbǎi yīshí).
For 200 people mostly say 两百 (liǎngbǎi); 二百 (èrbǎi) is heard too.`,
     zh:`百、千前面要说一：一百、一千。中间缺位读一个零：一百零一。百后面的十要说一十：一百一十。200多说两百。`},
  ex:[["一百","yìbǎi","100","100"],["一百零一","yìbǎi líng yī","101","101"],["一百一十","yìbǎi yīshí","110","110"],["一百二十三","yìbǎi èrshísān","123","123"],["两百","liǎngbǎi","200","200"],["一千","yìqiān","1.000","1,000"]]},
 {h:{es:"Paso 4 · Los grandes: se agrupan de a cuatro", en:"Step 4 · Big numbers: grouped in fours", zh:"第四步：四位一组"},
  p:{es:`El español agrupa de a tres cifras (mil, millón); el chino de a cuatro. Por eso 10.000 tiene palabra propia: 万 (wàn). Y no existe «diez mil» armado: 10.000 = 一万 (yíwàn), no «十千» (shí qiān).
100.000 = 十万 (shíwàn) · 1.000.000 = 一百万 (yìbǎi wàn) · 100.000.000 = 一亿 (yí yì).
Truco: para pasar a chino, separá el número de a cuatro desde la derecha: 12|3456 = 十二万 三千四百五十六 (shí'èr wàn sānqiān sìbǎi wǔshíliù).`,
     en:`Spanish and English group digits in threes (thousand, million); Chinese groups in fours. So 10,000 has its own word: 万 (wàn). There's no built "ten thousand": 10,000 = 一万 (yíwàn), not "十千" (shí qiān).
100,000 = 十万 (shíwàn) · 1,000,000 = 一百万 (yìbǎi wàn) · 100,000,000 = 一亿 (yí yì).
Trick: to convert, split the number in fours from the right: 12|3456 = 十二万 三千四百五十六 (shí'èr wàn sānqiān sìbǎi wǔshíliù).`,
     zh:`汉语四位一组：一万、十万、一百万、一亿。从右边每四位分开：12|3456＝十二万三千四百五十六。`},
  ex:[["一万","yíwàn","10.000","10,000"],["十万","shíwàn","100.000","100,000"],["一百万","yìbǎi wàn","un millón","one million"]]},
 {h:{es:"El tono del 一 (yī) cambia", en:"The tone of 一 (yī) changes", zh:"「一」的变调"},
  p:{es:`• Solo, contando o al final: yī (alto): 一 (yī), 十一 (shíyī), 一月 (yīyuè).
• Antes de un 1.º, 2.º o 3.er tono: yì (cae): 一百 (yìbǎi), 一千 (yìqiān).
• Antes de un 4.º tono: yí (sube): 一万 (yíwàn), 一个 (yí ge).
No hace falta pensarlo: con la práctica sale solo. Pero si lo ves escrito distinto, es por esto.`,
     en:`• Alone, counting or at the end: yī (high): 一 (yī), 十一 (shíyī), 一月 (yīyuè).
• Before a 1st, 2nd or 3rd tone: yì (falling): 一百 (yìbǎi), 一千 (yìqiān).
• Before a 4th tone: yí (rising): 一万 (yíwàn), 一个 (yí ge).
You don't need to think about it: with practice it comes on its own. But if you see it written differently, this is why.`,
     zh:`单念、数数、在末尾读一声；在一、二、三声前读四声（一百）；在四声前读二声（一万、一个）。`}},
 {h:{es:"二 (èr) o 两 (liǎng)", en:"二 (èr) or 两 (liǎng)", zh:"二还是两"},
  p:{es:`Los dos son «dos», pero se usan distinto:
• 二 (èr) para contar en voz alta, en números largos, teléfonos, fechas y meses: 二十 (èrshí), 二月 (èryuè), 星期二 (xīngqī'èr).
• 两 (liǎng) para CANTIDADES de cosas, delante de un clasificador: 两个老师 (liǎng ge lǎoshī), 两只猫 (liǎng zhī māo). Y al principio de 百 (bǎi), 千 (qiān), 万 (wàn): 两百 (liǎngbǎi), 两千 (liǎngqiān).
Regla corta: si podés decir «dos cosas», es 两.`,
     en:`Both mean "two", but they're used differently:
• 二 (èr) for counting aloud, in long numbers, phone numbers, dates and months: 二十 (èrshí), 二月 (èryuè), 星期二 (xīngqī'èr).
• 两 (liǎng) for AMOUNTS of things, before a measure word: 两个老师 (liǎng ge lǎoshī), 两只猫 (liǎng zhī māo). And at the start of 百 (bǎi), 千 (qiān), 万 (wàn): 两百 (liǎngbǎi), 两千 (liǎngqiān).
Short rule: if you could say "two things", it's 两.`,
     zh:`数数、号码、日期、月份用二；量词前表示数量用两：两个、两只；百千万前多用两。`}},
 {warn:true, h:{es:"Errores comunes", en:"Common mistakes", zh:"常见错误"},
  p:{es:`• Decir «一十» (yīshí) para 10. Es 十 (shí).
• Olvidar el 零 (líng) del medio: 105 es 一百零五 (yìbǎi líng wǔ); «一百五» (yìbǎi wǔ) se entiende 150.
• Confundir 四 (sì, 4: lengua plana, cae) con 十 (shí, 10: lengua curvada, sube).
• «二个» (èr ge) para «dos (cosas)»: es 两个 (liǎng ge).`,
     en:`• Saying "一十" (yīshí) for 10. It's 十 (shí).
• Forgetting the 零 (líng) in the middle: 105 is 一百零五 (yìbǎi líng wǔ); "一百五" (yìbǎi wǔ) means 150.
• Mixing up 四 (sì, 4: flat tongue, falling) and 十 (shí, 10: curled tongue, rising).
• "二个" (èr ge) for "two (things)": it's 两个 (liǎng ge).`,
     zh:`十不说一十；中间的零不能漏（一百零五≠一百五）；四和十要分清；数量说两个不说二个。`}}
],

week:[
 {h:{es:"La idea: semana + número", en:"The idea: week + number", zh:"核心：星期＋数字"},
  p:{es:`Los días no tienen nombre propio como en español: se numeran. La semana china empieza el lunes, así que el lunes es el «día 1»: 星期一 (xīngqīyī). Contá con los dedos: miércoles es el tercer día → 星期三 (xīngqīsān).
El número va DESPUÉS de la palabra «semana», pegado.`,
     en:`Days have no names of their own as in Spanish or English: they're numbered. The Chinese week starts on Monday, so Monday is "day 1": 星期一 (xīngqīyī). Count on your fingers: Wednesday is the third day → 星期三 (xīngqīsān).
The number goes AFTER the word "week", joined.`,
     zh:`星期没有名字，用数字：星期一（一周从星期一开始）……星期六。数字放在"星期"后面。`},
  ex:[["星期一","xīngqīyī","lunes = día 1","Monday = day 1"],["星期二","xīngqī'èr","martes = día 2","Tuesday = day 2"],["星期三","xīngqīsān","miércoles = día 3","Wednesday = day 3"],["星期四","xīngqīsì","jueves = día 4","Thursday = day 4"],["星期五","xīngqīwǔ","viernes = día 5","Friday = day 5"],["星期六","xīngqīliù","sábado = día 6","Saturday = day 6"]]},
 {h:{es:"El domingo es la excepción", en:"Sunday is the exception", zh:"星期天是例外"},
  p:{es:`No hay «星期七» (xīngqīqī). El domingo se dice con «sol» o «día»: 星期天 (xīngqītiān), lo más común al hablar, o 星期日 (xīngqīrì), más escrito. 天 (tiān) es cielo o día; 日 (rì) es sol, día.`,
     en:`There's no "星期七" (xīngqīqī). Sunday uses "sun" or "day": 星期天 (xīngqītiān), most common in speech, or 星期日 (xīngqīrì), more written. 天 (tiān) is sky or day; 日 (rì) is sun, day.`,
     zh:`没有星期七。口语说星期天，书面说星期日。`},
  ex:[["星期天","xīngqītiān","domingo (hablado)","Sunday (spoken)"],["星期日","xīngqīrì","domingo (escrito)","Sunday (written)"]]},
 {h:{es:"Tres palabras para «semana», la misma regla", en:"Three words for \"week\", same rule", zh:"三种说法，规则一样"},
  p:{es:`Cambiás solo la primera palabra; el número es igual:
• 星期 (xīngqī): neutra, la de los manuales.
• 礼拜 (lǐbài): coloquial; la que más usa Michelle. Domingo: 礼拜天 (lǐbàitiān).
• 周 (zhōu): corta y formal, la de horarios, apps y oficinas. Domingo: SOLO 周日 (zhōurì).
Para entender alcanza con reconocer las tres; para hablar, elegí una (星期 o 礼拜).`,
     en:`Only the first word changes; the number stays:
• 星期 (xīngqī): neutral, the textbook one.
• 礼拜 (lǐbài): colloquial; the one Michelle uses most. Sunday: 礼拜天 (lǐbàitiān).
• 周 (zhōu): short and formal, for timetables, apps and offices. Sunday: ONLY 周日 (zhōurì).
To understand, recognising all three is enough; to speak, pick one (星期 or 礼拜).`,
     zh:`星期（中性）、礼拜（口语，老师常用）、周（书面、正式，星期天只说周日）。会认三种，说话选一种。`},
  ex:[["星期三","xīngqīsān","miércoles (neutro)","Wednesday (neutral)"],["礼拜三","lǐbàisān","miércoles (coloquial)","Wednesday (colloquial)"],["周三","zhōusān","miércoles (escrito)","Wednesday (written)"]]},
 {h:{es:"Preguntar y responder", en:"Asking and answering", zh:"怎么问、怎么答"},
  p:{es:`«¿Qué día es hoy?» = 今天星期几？ (jīntiān xīngqī jǐ?). 几 (jǐ) es «cuántos, qué número». La respuesta es la misma frase con el número en lugar de 几: 今天星期天。(jīntiān xīngqītiān) Sin 吗 (ma), y el 是 (shì) se puede omitir.
Semana pasada / esta / que viene: 上个星期 (shàng ge xīngqī) · 这个星期 (zhè ge xīngqī) · 下个星期 (xià ge xīngqī). 上 (shàng, arriba) es lo anterior y 下 (xià, abajo) lo siguiente, como si el calendario cayera hacia abajo. Con 周 sin 个: 上周 (shàngzhōu), 下周 (xiàzhōu).`,
     en:`"What day is it today?" = 今天星期几？ (jīntiān xīngqī jǐ?). 几 (jǐ) is "how many, which number". The answer is the same sentence with the number instead of 几: 今天星期天。(jīntiān xīngqītiān) No 吗 (ma), and 是 (shì) can be left out.
Last / this / next week: 上个星期 (shàng ge xīngqī) · 这个星期 (zhè ge xīngqī) · 下个星期 (xià ge xīngqī). 上 (shàng, up) is the previous one and 下 (xià, down) the next, as if the calendar flowed downward. With 周, no 个: 上周 (shàngzhōu), 下周 (xiàzhōu).`,
     zh:`今天星期几？——今天星期天。上个星期、这个星期、下个星期；上周、下周（周不加个）。`}},
 {warn:true, h:{es:"Errores comunes", en:"Common mistakes", zh:"常见错误"},
  p:{es:`• Contar mal: el lunes es 一 (yī), no el domingo. Miércoles = 三 (sān), no 四 (sì).
• Usar 两 (liǎng) para el martes: es 星期二 (xīngqī'èr), siempre 二.
• Decir «周天» (zhōutiān): con 周, el domingo es 周日 (zhōurì).`,
     en:`• Miscounting: Monday is 一 (yī), not Sunday. Wednesday = 三 (sān), not 四 (sì).
• Using 两 (liǎng) for Tuesday: it's 星期二 (xīngqī'èr), always 二.
• Saying "周天" (zhōutiān): with 周, Sunday is 周日 (zhōurì).`,
     zh:`星期一是第一天；星期三不是星期四；星期二不用两；周日不说周天。`}}
],

month:[
 {h:{es:"La idea: número + luna", en:"The idea: number + moon", zh:"核心：数字＋月"},
  p:{es:`Los meses tampoco tienen nombre: son «luna 1, luna 2…». 月 (yuè) es la luna; Michelle: «cuando se da una vuelta a la luna es un mes». El número va ADELANTE: 一月 (yīyuè) enero … 十二月 (shí'èryuè) diciembre.
Si ya sabés los números del 1 al 12, ya sabés los doce meses.`,
     en:`Months have no names either: they're "moon 1, moon 2…". 月 (yuè) is the moon; Michelle: "one turn of the moon is a month". The number goes FIRST: 一月 (yīyuè) January … 十二月 (shí'èryuè) December.
If you know the numbers 1 to 12, you already know all twelve months.`,
     zh:`月份没有名字：一月……十二月。月亮转一圈是一个月。会数一到十二就会说月份。`},
  ex:[["一月","yīyuè","enero","January"],["二月","èryuè","febrero","February"],["三月","sānyuè","marzo","March"],["四月","sìyuè","abril","April"],["五月","wǔyuè","mayo","May"],["六月","liùyuè","junio","June"],["七月","qīyuè","julio","July"],["八月","bāyuè","agosto","August"],["九月","jiǔyuè","septiembre","September"],["十月","shíyuè","octubre","October"],["十一月","shíyīyuè","noviembre","November"],["十二月","shí'èryuè","diciembre","December"]]},
 {h:{es:"Mes del calendario o cantidad de meses", en:"Calendar month or number of months", zh:"几月和几个月"},
  p:{es:`Esta es la trampa grande:
• 一月 (yīyuè) = enero, el mes 1 del calendario.
• 一个月 (yí ge yuè) = UN mes de duración. Para contar meses se agrega el clasificador 个 (ge).
Igual: 两个月 (liǎng ge yuè) = dos meses, pero 二月 (èryuè) = febrero. 三个月 (sān ge yuè) = tres meses.`,
     en:`This is the big trap:
• 一月 (yīyuè) = January, month 1 of the calendar.
• 一个月 (yí ge yuè) = ONE month of time. To count months you add the measure word 个 (ge).
Likewise: 两个月 (liǎng ge yuè) = two months, but 二月 (èryuè) = February. 三个月 (sān ge yuè) = three months.`,
     zh:`一月是月份；一个月是时间长度（加量词个）。两个月≠二月。`},
  ex:[["一月","yīyuè","enero","January"],["一个月","yí ge yuè","un mes (duración)","one month (length)"],["二月","èryuè","febrero","February"],["两个月","liǎng ge yuè","dos meses","two months"]]},
 {h:{es:"Preguntar", en:"Asking", zh:"怎么问"},
  p:{es:`«¿En qué mes estamos?» = 现在是几月？ (xiànzài shì jǐ yuè?). 几月 (jǐ yuè) = «¿qué número de mes?». Respuesta: 现在是十一月。(xiànzài shì shíyīyuè)
«¿Cuántos meses?» = 几个月？ (jǐ ge yuè?), con 个.`,
     en:`"What month is it?" = 现在是几月？ (xiànzài shì jǐ yuè?). 几月 (jǐ yuè) = "which month number?". Answer: 现在是十一月。(xiànzài shì shíyīyuè)
"How many months?" = 几个月？ (jǐ ge yuè?), with 个.`,
     zh:`现在是几月？——现在是十一月。几个月？问时间长度。`}},
 {warn:true, h:{es:"Errores comunes", en:"Common mistakes", zh:"常见错误"},
  p:{es:`• 四月 (sìyuè, abril) y 十月 (shíyuè, octubre): fijate en la lengua y el tono.
• 十一月 (shíyīyuè, noviembre) y 十二月 (shí'èryuè, diciembre) tienen tres caracteres.
• Decir 两月 (liǎng yuè) para febrero: es 二月 (èryuè).`,
     en:`• 四月 (sìyuè, April) and 十月 (shíyuè, October): watch the tongue and the tone.
• 十一月 (shíyīyuè, November) and 十二月 (shí'èryuè, December) have three characters.
• Saying 两月 (liǎng yuè) for February: it's 二月 (èryuè).`,
     zh:`四月和十月要分清；十一月、十二月是三个字；二月不说两月。`}}
],

date:[
 {h:{es:"La idea: de lo más grande a lo más chico", en:"The idea: from biggest to smallest", zh:"核心：从大到小"},
  p:{es:`En español decimos día, mes, año (1 de noviembre de 2026). En chino es al revés: AÑO, MES, DÍA, y al final el día de la semana, como una dirección que va de lo general a lo particular:
2026年11月1号，星期天 (èr líng èr liù nián shíyī yuè yī hào, xīngqītiān) = «2026 año, 11 mes, 1 número, domingo».
Michelle: «en chino siempre es año, mes y día; justamente es al revés».`,
     en:`Spanish says day, month, year (1 de noviembre de 2026). Chinese is the reverse: YEAR, MONTH, DAY, and the weekday at the end, like an address going from the general to the specific:
2026年11月1号，星期天 (èr líng èr liù nián shíyī yuè yī hào, xīngqītiān) = "2026 year, 11 month, number 1, Sunday".
Michelle: "in Chinese it's always year, month and day; exactly the reverse".`,
     zh:`日期从大到小：年、月、日（号），最后是星期。和西班牙语正好相反。`},
  ex:[["2026年11月1号","èr líng èr liù nián shíyī yuè yī hào","1 de noviembre de 2026","November 1, 2026"]]},
 {h:{es:"El año: cifra por cifra", en:"The year: digit by digit", zh:"年份逐个数字读"},
  p:{es:`El año NO se lee como número («dos mil veintiséis»): se dicen las cuatro cifras una por una, y el cero es 零 (líng), escrito 〇. Michelle: «no se dice veinte, se dice dos cero, dos cero».`,
     en:`The year is NOT read as a number ("two thousand twenty-six"): you say the four digits one by one, and zero is 零 (líng), written 〇. Michelle: "you don't say twenty, you say two zero, two zero".`,
     zh:`年份不按数值读，逐个数字读，零写作〇。`},
  ex:[["二〇二六年","èr líng èr liù nián","2026","2026"],["一九九〇年","yī jiǔ jiǔ líng nián","1990","1990"],["一九五九年","yī jiǔ wǔ jiǔ nián","1959","1959"]]},
 {h:{es:"El día: 号 (hào) al hablar, 日 (rì) por escrito", en:"The day: 号 (hào) in speech, 日 (rì) in writing", zh:"口语说号，书面写日"},
  p:{es:`El día del mes es el número + 号 (hào), «número». En diarios, documentos y noticias se escribe 日 (rì), «día». Significan lo mismo: 一号 (yī hào) = 一日 (yī rì) = el 1.
El número del día se arma como cualquier número: 二十八号 (èrshíbā hào) = el 28.`,
     en:`The day of the month is the number + 号 (hào), "number". In newspapers, documents and the news it's written 日 (rì), "day". Same meaning: 一号 (yī hào) = 一日 (yī rì) = the 1st.
The day number is built like any number: 二十八号 (èrshíbā hào) = the 28th.`,
     zh:`口语：数字＋号；书面：数字＋日。二十八号＝二十八日。`}},
 {h:{es:"Preguntar la fecha", en:"Asking the date", zh:"问日期"},
  p:{es:`La regla de la clase 2: la palabra de pregunta va donde irá la respuesta. Para la fecha, 几 (jǐ, «qué número») ocupa el lugar del número:
今天是几月几号？ (jīntiān shì jǐ yuè jǐ hào?) → 今天是十一月一号。(jīntiān shì shíyīyuè yī hào)
Más corto: 今天几号？ (jīntiān jǐ hào?). Con fechas el 是 (shì) se puede sacar.
Otra forma, más formal: 今天的日期是多少？ (jīntiān de rìqī shì duōshǎo?), «¿la fecha de hoy es cuánto?».
Ayer: 昨天 (zuótiān) · mañana: 明天 (míngtiān). El verbo no cambia: el tiempo lo marca la palabra.`,
     en:`The class-2 rule: the question word goes where the answer will go. For the date, 几 (jǐ, "which number") takes the number's place:
今天是几月几号？ (jīntiān shì jǐ yuè jǐ hào?) → 今天是十一月一号。(jīntiān shì shíyīyuè yī hào)
Shorter: 今天几号？ (jīntiān jǐ hào?). With dates 是 (shì) can be dropped.
Another, more formal way: 今天的日期是多少？ (jīntiān de rìqī shì duōshǎo?), "today's date is how much?".
Yesterday: 昨天 (zuótiān) · tomorrow: 明天 (míngtiān). The verb doesn't change: the time word does the work.`,
     zh:`疑问词放在答案的位置：今天是几月几号？——今天是十一月一号。今天几号？今天的日期是多少？昨天、明天。`},
  ex:[["今天是几月几号？","jīntiān shì jǐ yuè jǐ hào?","¿qué fecha es hoy?","what's the date today?"],["今天几号？","jīntiān jǐ hào?","¿a cuánto estamos?","what's the date?"],["昨天是几月几号？","zuótiān shì jǐ yuè jǐ hào?","¿qué fecha fue ayer?","what was the date yesterday?"]]},
 {h:{es:"Usarlo: el cumpleaños", en:"Using it: birthdays", zh:"用法：生日"},
  p:{es:`El mismo molde sirve para todo: 你的生日是几月几号？ (nǐ de shēngrì shì jǐ yuè jǐ hào?) ¿cuándo es tu cumpleaños? → 我的生日是十一月X号。(wǒ de shēngrì shì shíyīyuè X hào). Y para felicitar: 祝你生日快乐！ (zhù nǐ shēngrì kuàilè!).`,
     en:`The same mould works for everything: 你的生日是几月几号？ (nǐ de shēngrì shì jǐ yuè jǐ hào?) when is your birthday? → 我的生日是十一月X号。(wǒ de shēngrì shì shíyīyuè X hào). And to congratulate: 祝你生日快乐！ (zhù nǐ shēngrì kuàilè!).`,
     zh:`你的生日是几月几号？——我的生日是十一月X号。祝你生日快乐！`}},
 {warn:true, h:{es:"Errores comunes", en:"Common mistakes", zh:"常见错误"},
  p:{es:`• Empezar por el día, como en español. Primero siempre el año (o el mes, si no decís el año).
• Leer el año como número: 2020 es 二〇二〇 (èr líng èr líng), no «两千二十» (liǎngqiān èrshí).
• Poner el mes después del día: 10 de marzo = 三月十号 (sānyuè shí hào).`,
     en:`• Starting with the day, as in Spanish. The year always comes first (or the month, if you leave out the year).
• Reading the year as a number: 2020 is 二〇二〇 (èr líng èr líng), not "两千二十" (liǎngqiān èrshí).
• Putting the month after the day: March 10 = 三月十号 (sānyuè shí hào).`,
     zh:`别先说日；年份逐个数字读；月在日前：三月十号。`}}
],

family:[
 {h:{es:"La idea: cada pariente dice quién es", en:"The idea: each relative says who they are", zh:"核心：称谓说清关系"},
  p:{es:`En español «tío» sirve para cualquier tío. En chino la palabra dice tres cosas a la vez:
1. De qué LADO: del papá o de la mamá.
2. Si es MAYOR o MENOR (que vos, o que tu papá).
3. Si es de SANGRE o por CASAMIENTO.
Michelle: «el vocabulario de familia es lo más difícil». Pero una vez que ves el sistema, las palabras tienen lógica.`,
     en:`In Spanish "tío" covers every uncle. In Chinese the word says three things at once:
1. Which SIDE: father's or mother's.
2. OLDER or YOUNGER (than you, or than your father).
3. BLOOD or MARRIAGE.
Michelle: "family vocabulary is the hardest". But once you see the system, the words make sense.`,
     zh:`汉语称谓同时说明：父系还是母系、年长还是年幼、血亲还是姻亲。`}},
 {h:{es:"Hermanos: mayor o menor siempre", en:"Siblings: always older or younger", zh:"兄弟姐妹分大小"},
  p:{es:`No existe «hermano» sin más. Hay cuatro palabras, según sexo y edad respecto de vos: 哥哥 (gēge) hermano mayor · 姐姐 (jiějie) hermana mayor · 弟弟 (dìdi) hermano menor · 妹妹 (mèimei) hermana menor. Todos juntos: 兄弟姐妹 (xiōngdì jiěmèi).
Fijate que se repite la sílaba y la segunda va sin tono, corta: gē-ge, jiě-jie. Igual que 爸爸 (bàba) y 妈妈 (māma).`,
     en:`There's no plain "brother". There are four words, by sex and age relative to you: 哥哥 (gēge) older brother · 姐姐 (jiějie) older sister · 弟弟 (dìdi) younger brother · 妹妹 (mèimei) younger sister. All together: 兄弟姐妹 (xiōngdì jiěmèi).
Notice the syllable repeats and the second one is toneless and short: gē-ge, jiě-jie. Like 爸爸 (bàba) and 妈妈 (māma).`,
     zh:`哥哥、姐姐、弟弟、妹妹；合称兄弟姐妹。重叠词第二个字读轻声。`},
  ex:[["哥哥","gēge","hermano mayor","older brother"],["姐姐","jiějie","hermana mayor","older sister"],["弟弟","dìdi","hermano menor","younger brother"],["妹妹","mèimei","hermana menor","younger sister"]]},
 {h:{es:"Abuelos: el lado de la mamá es «de afuera»", en:"Grandparents: the mother's side is \"outside\"", zh:"外公外婆：母系加外"},
  p:{es:`Del lado del papá: 爷爷 (yéye) abuelo, 奶奶 (nǎinai) abuela.
Del lado de la mamá se agrega 外 (wài), «afuera»: 外公 (wàigōng), 外婆 (wàipó). En la familia tradicional china, la mamá venía «de otra familia», por eso sus padres son los «de afuera». Hoy no tiene nada de despectivo; es solo el nombre.`,
     en:`On the father's side: 爷爷 (yéye) grandpa, 奶奶 (nǎinai) grandma.
On the mother's side you add 外 (wài), "outside": 外公 (wàigōng), 外婆 (wàipó). In the traditional Chinese family the mother came "from another family", so her parents are the "outside" ones. Today it's not pejorative at all; it's just the name.`,
     zh:`父系：爷爷、奶奶；母系加外：外公、外婆（传统上母亲来自外姓）。`},
  ex:[["爷爷","yéye","abuelo (papá)","grandpa (father's)"],["奶奶","nǎinai","abuela (papá)","grandma (father's)"],["外公","wàigōng","abuelo (mamá)","grandpa (mother's)"],["外婆","wàipó","abuela (mamá)","grandma (mother's)"]]},
 {h:{es:"Tíos: el árbol del papá", en:"Uncles and aunts: the father's tree", zh:"父亲那边的伯叔姑"},
  p:{es:`• Hermano MAYOR del papá: 伯伯 (bóbo) → su esposa 伯母 (bómǔ).
• Hermano MENOR del papá: 叔叔 (shūshu) → su esposa 婶婶 (shěnshen).
• Hermana del papá: 姑姑 (gūgu) → su esposo 姑丈 (gūzhàng).
Del lado de la mamá: 舅父 (jiùfù) hermano de la mamá, 姨妈 (yímā) hermana de la mamá.
Para empezar alcanza con 叔叔 (shūshu) y 阿姨 (āyí): los chicos llaman así a cualquier señor o señora conocidos.`,
     en:`• Father's OLDER brother: 伯伯 (bóbo) → his wife 伯母 (bómǔ).
• Father's YOUNGER brother: 叔叔 (shūshu) → his wife 婶婶 (shěnshen).
• Father's sister: 姑姑 (gūgu) → her husband 姑丈 (gūzhàng).
On the mother's side: 舅父 (jiùfù) mother's brother, 姨妈 (yímā) mother's sister.
To start with, 叔叔 (shūshu) and 阿姨 (āyí) are enough: children call any familiar man or woman that.`,
     zh:`伯伯（父亲的哥哥）、叔叔（父亲的弟弟）、姑姑（父亲的姐妹）；母系：舅父、姨妈。小孩常叫熟人叔叔、阿姨。`}},
 {h:{es:"«Mi papá»: sin 的 (de) con la familia", en:"\"My dad\": no 的 (de) with family", zh:"我爸爸：亲人可省「的」"},
  p:{es:`Con personas cercanas el 的 (de) se saca: 我爸爸 (wǒ bàba) es más natural que 我的爸爸 (wǒ de bàba). Michelle: «para que no suene todo de-de-de». Con cosas y con gente no tan cercana se deja: 我的书 (wǒ de shū), 我的老师 (wǒ de lǎoshī).`,
     en:`With close people 的 (de) is dropped: 我爸爸 (wǒ bàba) is more natural than 我的爸爸 (wǒ de bàba). Michelle: "so it doesn't all sound de-de-de". With things and less close people it stays: 我的书 (wǒ de shū), 我的老师 (wǒ de lǎoshī).`,
     zh:`亲近的人可省"的"：我爸爸；东西和不太亲近的人保留：我的书、我的老师。`}},
 {warn:true, h:{es:"Errores comunes", en:"Common mistakes", zh:"常见错误"},
  p:{es:`• Decir 哥哥 (gēge) para un hermano menor: «menor» es 弟弟 (dìdi).
• Pronunciar fuerte la segunda sílaba: es bàba, māma, gēge, cortita y sin tono.
• Usar 爷爷 (yéye) para el abuelo materno: es 外公 (wàigōng).`,
     en:`• Using 哥哥 (gēge) for a younger brother: "younger" is 弟弟 (dìdi).
• Stressing the second syllable: it's bàba, māma, gēge, short and toneless.
• Using 爷爷 (yéye) for the mother's father: it's 外公 (wàigōng).`,
     zh:`弟弟不是哥哥；重叠词第二字读轻声；外公不是爷爷。`}}
],

greet:[
 {h:{es:"La idea: momento del día + 好 (hǎo) o 安 (ān)", en:"The idea: time of day + 好 (hǎo) or 安 (ān)", zh:"核心：时间＋好／安"},
  p:{es:`Los saludos por hora del día se arman con dos piezas:
1. El momento: 早上 (zǎoshang) mañana · 下午 (xiàwǔ) tarde · 晚上 (wǎnshang) noche.
2. Un deseo: 好 (hǎo, bien) o 安 (ān, paz).
Con 好 se usa la palabra entera: 早上好 (zǎoshang hǎo). Con 安, solo la primera sílaba: 早安 (zǎo'ān), 午安 (wǔ'ān), 晚安 (wǎn'ān).`,
     en:`Time-of-day greetings are built from two pieces:
1. The moment: 早上 (zǎoshang) morning · 下午 (xiàwǔ) afternoon · 晚上 (wǎnshang) evening.
2. A wish: 好 (hǎo, good) or 安 (ān, peace).
With 好 you use the whole word: 早上好 (zǎoshang hǎo). With 安, only the first syllable: 早安 (zǎo'ān), 午安 (wǔ'ān), 晚安 (wǎn'ān).`,
     zh:`时间＋好：早上好、下午好、晚上好；时间第一个字＋安：早安、午安、晚安。`},
  ex:[["早上好","zǎoshang hǎo","buen día","good morning"],["早安","zǎo'ān","buen día","good morning"],["下午好","xiàwǔ hǎo","buenas tardes","good afternoon"],["午安","wǔ'ān","buenas tardes","good afternoon"],["晚上好","wǎnshang hǎo","buenas noches (al llegar)","good evening (arriving)"],["晚安","wǎn'ān","buenas noches (al irse)","good night (leaving)"]]},
 {h:{es:"La trampa: 晚安 (wǎn'ān) es para despedirse", en:"The trap: 晚安 (wǎn'ān) is for leaving", zh:"晚安只用于告别"},
  p:{es:`De mañana y de tarde las dos series son intercambiables (早安 zǎo'ān se usa más en Taiwán, 早上好 zǎoshang hǎo en China). De noche NO: 晚安 (wǎn'ān) es «que descanses», para irse o ir a dormir. Al LLEGAR de noche se dice 晚上好 (wǎnshang hǎo).`,
     en:`In the morning and afternoon the two series are interchangeable (早安 zǎo'ān is more common in Taiwan, 早上好 zǎoshang hǎo in mainland China). At night they're NOT: 晚安 (wǎn'ān) is "rest well", for leaving or going to bed. When you ARRIVE in the evening you say 晚上好 (wǎnshang hǎo).`,
     zh:`早上、下午两种说法都可以；晚上见面说晚上好，晚安只在告别或睡前说。`}},
 {h:{es:"你好 (nǐ hǎo) y 你好吗 (nǐ hǎo ma)", en:"你好 (nǐ hǎo) and 你好吗 (nǐ hǎo ma)", zh:"你好和你好吗"},
  p:{es:`你好 (nǐ hǎo) es literalmente «vos bien»: una afirmación que funciona como «hola». Si le agregás 吗 (ma) al final se vuelve pregunta: 你好吗？ (nǐ hǎo ma?), ¿cómo estás?
La respuesta: 我很好 (wǒ hěn hǎo), estoy bien. El 很 (hěn) no es un «muy» fuerte: el chino lo pone casi siempre delante de un adjetivo; «我好» suena cortado.
Al hablar rápido, 你好 suena ní hǎo: dos terceros tonos seguidos, el primero sube.`,
     en:`你好 (nǐ hǎo) is literally "you good": a statement that works as "hello". Add 吗 (ma) at the end and it becomes a question: 你好吗？ (nǐ hǎo ma?), how are you?
The answer: 我很好 (wǒ hěn hǎo), I'm fine. 很 (hěn) isn't a strong "very": Chinese almost always puts it before an adjective; "我好" sounds cut off.
Spoken fast, 你好 sounds ní hǎo: two 3rd tones in a row, the first one rises.`,
     zh:`你好是陈述，加吗变问句：你好吗？——我很好（形容词前常加很）。你好快读为 ní hǎo。`},
  ex:[["你好","nǐ hǎo","hola","hello"],["你好吗？","nǐ hǎo ma?","¿cómo estás?","how are you?"],["我很好","wǒ hěn hǎo","estoy bien","I'm fine"]]},
 {h:{es:"Pares que van juntos", en:"Pairs that go together", zh:"成对的用语"},
  p:{es:`Aprendelos de a dos, pregunta y respuesta:
• 谢谢 (xièxie) gracias → 不客气 (bú kèqi) de nada / 不用谢 (bú yòng xiè) no hay de qué.
• 对不起 (duìbuqǐ) perdón → 没关系 (méi guānxi) no pasa nada.
• 再见 (zàijiàn) chau, «hasta volver a verte» · 拜拜 (báibái) bye bye, muy común · 下个礼拜见 (xià ge lǐbài jiàn) nos vemos la semana que viene.
Fijate en 不 (bù): antes de un 4.º tono pasa a bú: bú kèqi, bú yòng xiè.`,
     en:`Learn them in twos, question and answer:
• 谢谢 (xièxie) thanks → 不客气 (bú kèqi) you're welcome / 不用谢 (bú yòng xiè) don't mention it.
• 对不起 (duìbuqǐ) sorry → 没关系 (méi guānxi) no problem.
• 再见 (zàijiàn) goodbye, "see you again" · 拜拜 (báibái) bye bye, very common · 下个礼拜见 (xià ge lǐbài jiàn) see you next week.
Notice 不 (bù): before a 4th tone it becomes bú: bú kèqi, bú yòng xiè.`,
     zh:`谢谢→不客气／不用谢；对不起→没关系；再见、拜拜、下个礼拜见。不在四声前读 bú。`},
  ex:[["谢谢","xièxie","gracias","thank you"],["不客气","bú kèqi","de nada","you're welcome"],["对不起","duìbuqǐ","perdón","sorry"],["没关系","méi guānxi","no pasa nada","no problem"]]},
 {warn:true, h:{es:"Errores comunes", en:"Common mistakes", zh:"常见错误"},
  p:{es:`• Decir 晚安 (wǎn'ān) al llegar a una cena: es 晚上好 (wǎnshang hǎo).
• Contestar 你好吗？ (nǐ hǎo ma?) con «我好»: mejor 我很好 (wǒ hěn hǎo).
• Responder 谢谢 (xièxie) con 没关系 (méi guānxi): eso es para «perdón».`,
     en:`• Saying 晚安 (wǎn'ān) when arriving at a dinner: it's 晚上好 (wǎnshang hǎo).
• Answering 你好吗？ (nǐ hǎo ma?) with "我好": better 我很好 (wǒ hěn hǎo).
• Answering 谢谢 (xièxie) with 没关系 (méi guānxi): that's for "sorry".`,
     zh:`见面不说晚安；回答你好吗说我很好；回答谢谢说不客气，不说没关系。`}}
]
};
