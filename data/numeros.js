/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"numeros", glyph:"数",
  name:{"es": "Números", "en": "Numbers", "zh": "数字"},
  cl:"c3",
  cards:[
  {id:"num-00",s:"数字",t:"數字",py:"shùzì",es:"número",en:"number",
   x:{
es:`数 contar: 米 (granos de arroz) sobre 女 (mujer), y a la derecha 攵 (una mano con un palito).
字 carácter: 宀 (techo) + 子 (niño).
«El carácter de contar».`,
en:`数 to count: 米 (rice grains) over 女 (woman), and on the right 攵 (a hand holding a stick).
字 character: 宀 (roof) + 子 (child).
"The counting character".`,
zh:`数：米 在 女 上，右边 攵（拿着小棍的手）。字：宀 + 子。`}},
  {id:"num-01",s:"零",py:"líng",es:"cero",en:"zero",
   x:{
es:`雨 lluvia (una nube con gotas cayendo) + 令 (sonido).
Originalmente las últimas gotas sueltas después de la lluvia: lo que queda, casi nada.
En los números marca un hueco: 101 = 一百零一.`,
en:`雨 rain (a cloud with drops falling) + 令 (sound).
Originally the last stray drops after the rain: what's left, almost nothing.
Inside numbers it marks a gap: 101 = 一百零一.`,
zh:`雨 + 令（表音）。本义是雨后零星落下的雨滴，几乎没有。数字中间表示空位：101 = 一百零一。`}},
  {id:"num-02",s:"一",py:"yī",es:"uno",en:"one",
   x:{
es:`Una varilla de contar. Los tres primeros números son palitos apilados.
Cambia de tono: yī sola o contando; yí antes de un cuarto tono (一个 yí ge); yì antes de los demás (一只 yì zhī, 一百 yìbǎi).`,
en:`One counting rod. The first three numbers are stacked rods.
Its tone changes: yī on its own or when counting; yí before a 4th tone (一个 yí ge); yì before the others (一只 yì zhī, 一百 yìbǎi).`,
zh:`一根算筹。前三个数字是叠起来的算筹。变调：单念读 yī；第四声前读 yí（一个）；其他声调前读 yì（一只、一百）。`}},
  {id:"num-03",s:"二",py:"èr",es:"dos",en:"two",
   x:{
es:`Dos varillas apiladas.
Se usa para contar y dentro de los números (十二, 二十). Delante de un clasificador se usa 两: 两个.`,
en:`Two stacked rods.
Used for counting and inside numbers (十二, 二十). Before a measure word you use 两: 两个.`,
zh:`两根算筹。数数和数字中间用 二；量词前用 两：两个。`}},
  {id:"num-04",s:"三",py:"sān",es:"tres",en:"three",
   x:{
es:`Tres varillas apiladas. Desde el cuatro se abandonan los palitos: cuatro rayas se leían mal.`,
en:`Three stacked rods. From four onwards the rods were dropped: four lines were hard to read.`,
zh:`三根算筹。从四开始不再用横线，因为四条线不好认。`}},
  {id:"num-05",s:"四",py:"sì",es:"cuatro",en:"four",
   x:{
es:`Antes se escribía con cuatro rayas. Después se tomó prestado este carácter (una boca con el aliento saliendo) por el sonido.
Ojo: sì con s plana. No confundir con 十 shí (diez), con la lengua hacia atrás.`,
en:`It used to be written with four lines. Later this character (a mouth with breath coming out) was borrowed for the sound.
Careful: sì with a flat s. Don't mix it up with 十 shí (ten), with the tongue curled back.`,
zh:`原来写四横，后来借用这个字（口中出气）表音。注意：四 sì 平舌，十 shí 卷舌。`}},
  {id:"num-06",s:"五",py:"wǔ",es:"cinco",en:"five",
   x:{
es:`Originalmente una X entre dos líneas: el cruce, el punto medio entre uno y diez. Tercer tono.`,
en:`Originally an X between two lines: the crossing, the midpoint between one and ten. 3rd tone.`,
zh:`本来是两横之间一个交叉，表示一到十的中点。第三声。`}},
  {id:"num-07",s:"六",py:"liù",es:"seis",en:"six",
   x:{
es:`Originalmente el dibujo de una choza con techo a dos aguas, prestado por el sonido.
liù suena con un poco de o, «liou», como explicó Michelle.`,
en:`Originally a drawing of a hut with a gabled roof, borrowed for the sound.
liù sounds with a bit of o, "liou", as Michelle explained.`,
zh:`本来是有屋顶的小屋，借来表音。`}},
  {id:"num-08",s:"七",py:"qī",es:"siete",en:"seven",
   x:{
es:`Originalmente una cruz, un corte: significaba cortar (hoy 切: 七 + 刀 cuchillo).
El trazo de abajo se curvó para no confundirlo con 十.`,
en:`Originally a cross, a cut: it meant to cut (today 切: 七 + 刀 knife).
The bottom stroke was curved so it wouldn't be confused with 十.`,
zh:`本来是十字形的切口，表示"切"（现在写 切：七 + 刀）。下面一笔弯了，免得和 十 混淆。`}},
  {id:"num-09",s:"八",py:"bā",es:"ocho",en:"eight",
   x:{
es:`Dos trazos que se separan: dividir. Por eso 八 está arriba en 分 (dividir) y en 公.
Número de suerte: bā suena parecido a 发 fā, prosperar.`,
en:`Two strokes moving apart: to divide. That's why 八 sits on top of 分 (to divide) and 公.
A lucky number: bā sounds like 发 fā, to prosper.`,
zh:`两笔分开，表示"分"。所以 分、公 上面有 八。八 和 发 音近，是吉利数字。`}},
  {id:"num-10",s:"九",py:"jiǔ",es:"nueve",en:"nine",
   x:{
es:`Origen discutido: quizá un brazo doblado o un gancho.
Suena como 久 jiǔ (largo tiempo): número de buena suerte en bodas.`,
en:`Disputed origin: maybe a bent arm or a hook.
Sounds like 久 jiǔ (a long time): a lucky number at weddings.`,
zh:`来源有争议，可能是弯曲的手臂或钩子。和 久 同音，婚礼上是吉利数字。`}},
  {id:"num-11",s:"十",py:"shí",es:"diez",en:"ten",
   x:{
es:`Originalmente una línea vertical con un punto grueso en el medio, que se alargó hasta volverse una cruz.
Con 一 a 十 y la lógica de combinarlos se arma todo hasta 99.`,
en:`Originally a vertical line with a thick dot in the middle, which stretched until it became a cross.
With 一 to 十 and the logic for combining them you can build everything up to 99.`,
zh:`本来是一竖中间一个粗点，后来点拉长成横。一到十加上组合规则，可以组成九十九以内的所有数字。`}},
  {id:"num-12",s:"百",py:"bǎi",es:"cien",en:"hundred",
   x:{
es:`一 + 白 (blanco, por el sonido).
Hay que decir el uno: 100 = 一百, nunca solo 百.`,
en:`一 + 白 (white, for the sound).
You have to say the one: 100 = 一百, never just 百.`,
zh:`一 + 白（表音）。要说 一百，不能只说 百。`}},
  {id:"num-13",s:"千",py:"qiān",es:"mil",en:"thousand",
   x:{
es:`人 (persona) cruzada por un trazo: una marca convencional para mil. No hay lógica visual clara.`,
en:`人 (person) crossed by a stroke: a conventional mark for a thousand. There's no clear visual logic.`,
zh:`人 加一横，是表示千的符号，没有明显的形象来源。`}},
  {id:"num-14",s:"万",t:"萬",py:"wàn",es:"diez mil",en:"ten thousand",
   x:{
es:`El tradicional 萬 era un escorpión (pinzas arriba, cola abajo), tomado prestado por el sonido.
El chino cuenta por decenas de miles: 10.000 = 一万 es una unidad propia.`,
en:`The traditional 萬 was a scorpion (pincers on top, tail below), borrowed for the sound.
Chinese counts in tens of thousands: 10,000 = 一万 is a unit of its own.`,
zh:`繁体 萬 本来是蝎子（上面钳子，下面尾巴），借来表音。中文以万为单位。`}},
  {id:"num-15",s:"两",t:"兩",py:"liǎng",es:"dos (con clasificador)",en:"two (before a measure word)",
   x:{
es:`Originalmente un yugo, o los dos platillos de una balanza: un par.
Delante de un clasificador se dice 两 y no 二: 两个老师, 两只猫. Y normalmente 两百 para 200.`,
en:`Originally a yoke, or the two pans of a scale: a pair.
Before a measure word you say 两, not 二: 两个老师, 两只猫. And usually 两百 for 200.`,
zh:`本来是车轭或天平的两个秤盘：一对。量词前说 两：两个老师、两只猫；200 一般说 两百。`}},
  {id:"num-16",s:"十一",py:"shíyī",es:"once",en:"eleven",
   x:{
es:`十 diez + 一 uno. Del 11 al 19: 十 + unidad (十二, 十五, 十九).`,
en:`十 ten + 一 one. 11 to 19: 十 + unit (十二, 十五, 十九).`,
zh:`十 + 一。十一到十九：十 + 个位数。`}},
  {id:"num-17",s:"十五",py:"shíwǔ",es:"quince",en:"fifteen",
   x:{
es:`十 diez + 五 cinco.`,
en:`十 ten + 五 five.`,
zh:`十 + 五。`}},
  {id:"num-18",s:"二十",py:"èrshí",es:"veinte",en:"twenty",
   x:{
es:`二 dos + 十 diez: «dos dieces». Decenas = número + 十: 三十, 四十, 九十.`,
en:`二 two + 十 ten: "two tens". Tens = number + 十: 三十, 四十, 九十.`,
zh:`二 + 十。整十：数字 + 十。`}},
  {id:"num-19",s:"二十五",py:"èrshíwǔ",es:"veinticinco",en:"twenty-five",
   x:{
es:`二 dos + 十 diez + 五 cinco. Decena + unidad: 三十七, 八十二.`,
en:`二 two + 十 ten + 五 five. Ten + unit: 三十七, 八十二.`,
zh:`二 + 十 + 五。`}},
  {id:"num-20",s:"九十九",py:"jiǔshíjiǔ",es:"noventa y nueve",en:"ninety-nine",
   x:{
es:`九 + 十 + 九. El número más alto armado solo con los diez primeros.`,
en:`九 + 十 + 九. The highest number built from the first ten alone.`,
zh:`九 + 十 + 九，只用一到十能组成的最大数字。`}},
  {id:"num-21",s:"一百",py:"yìbǎi",es:"cien",en:"one hundred",
   x:{
es:`一 uno + 百 cien. El uno es obligatorio. 一 pasa a yì porque 百 es tercer tono.`,
en:`一 one + 百 hundred. The one is required. 一 becomes yì because 百 is a 3rd tone.`,
zh:`一 + 百，一 不能省。百 是第三声，所以 一 读 yì。`}},
  {id:"num-22",s:"一百零一",py:"yìbǎi líng yī",es:"ciento uno",en:"one hundred and one",
   x:{
es:`一百 + 零 + 一. El 零 marca que falta la decena.`,
en:`一百 + 零 + 一. 零 marks the missing tens.`,
zh:`一百 + 零 + 一。零 表示十位空着。`}},
  {id:"num-23",s:"一百一十",py:"yìbǎi yīshí",es:"ciento diez",en:"one hundred and ten",
   x:{
es:`一百 + 一十. Después de 百 el diez lleva su uno: 一十. Al hablar se abrevia a 一百一.`,
en:`一百 + 一十. After 百 the ten keeps its one: 一十. In speech it's shortened to 一百一.`,
zh:`一百 + 一十。百 后面的十要说 一十。口语可以说 一百一。`}},
  {id:"num-24",s:"一百二十三",py:"yìbǎi èrshísān",es:"ciento veintitrés",en:"one hundred twenty-three",
   x:{
es:`一百 cien + 二十 veinte + 三 tres. Se lee de mayor a menor, igual que las cifras.`,
en:`一百 hundred + 二十 twenty + 三 three. Read from largest to smallest, like the digits.`,
zh:`一百 + 二十 + 三，从大到小读。`}},
  {id:"num-25",s:"两百",t:"兩百",py:"liǎngbǎi",es:"doscientos",en:"two hundred",
   x:{
es:`两 par + 百 cien. También se oye 二百; los dos están bien, pero 两百 es lo más común.
Es el 200 de la oración de la escuela: 两百个女学生.`,
en:`两 pair + 百 hundred. You also hear 二百; both are fine, but 两百 is most common.
It's the 200 in the school sentence: 两百个女学生.`,
zh:`两 + 百。也可以说 二百，但 两百 更常用。`}},
  {id:"num-26",s:"一千",py:"yìqiān",es:"mil",en:"one thousand",
   x:{
es:`一 + 千. Como con 百, el uno es obligatorio.`,
en:`一 + 千. As with 百, the one is required.`,
zh:`一 + 千，一 不能省。`}},
  {id:"num-27",s:"一万",t:"一萬",py:"yíwàn",es:"diez mil",en:"ten thousand",
   x:{
es:`一 + 万. 一 pasa a yí porque 万 es cuarto tono.`,
en:`一 + 万. 一 becomes yí because 万 is a 4th tone.`,
zh:`一 + 万。万 是第四声，一 读 yí。`}}
  ]
});
