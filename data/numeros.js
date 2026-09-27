/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, x character explanation (Spanish), say optional text for the voice. */
window.TOPICS.push({
  id:"numeros", glyph:"数",
  name:{es:"Números",en:"Numbers",zh:"数字"},
  cards:[
  {id:"num-00",s:"数字",t:"數字",py:"shùzì",es:"número",en:"number",
   x:`数 contar: 米 (granos de arroz) sobre 女 (mujer), y a la derecha 攵 (una mano con un palito).
字 carácter: 宀 (techo) + 子 (niño).
«El carácter de contar».`},
  {id:"num-01",s:"零",py:"líng",es:"cero",en:"zero",
   x:`雨 lluvia (una nube con gotas cayendo) + 令 (sonido).
Originalmente las últimas gotas sueltas después de la lluvia: lo que queda, casi nada.
En los números marca un hueco: 101 = 一百零一.`},
  {id:"num-02",s:"一",py:"yī",es:"uno",en:"one",
   x:`Una varilla de contar. Los tres primeros números son palitos apilados.
Cambia de tono: yī sola o contando; yí antes de un cuarto tono (一个 yí ge); yì antes de los demás (一只 yì zhī, 一百 yìbǎi).`},
  {id:"num-03",s:"二",py:"èr",es:"dos",en:"two",
   x:`Dos varillas apiladas.
Se usa para contar y dentro de los números (十二, 二十). Delante de un clasificador se usa 两: 两个.`},
  {id:"num-04",s:"三",py:"sān",es:"tres",en:"three",
   x:`Tres varillas apiladas. Desde el cuatro se abandonan los palitos: cuatro rayas se leían mal.`},
  {id:"num-05",s:"四",py:"sì",es:"cuatro",en:"four",
   x:`Antes se escribía con cuatro rayas. Después se tomó prestado este carácter (una boca con el aliento saliendo) por el sonido.
Ojo: sì con s plana. No confundir con 十 shí (diez), con la lengua hacia atrás.`},
  {id:"num-06",s:"五",py:"wǔ",es:"cinco",en:"five",
   x:`Originalmente una X entre dos líneas: el cruce, el punto medio entre uno y diez. Tercer tono.`},
  {id:"num-07",s:"六",py:"liù",es:"seis",en:"six",
   x:`Originalmente el dibujo de una choza con techo a dos aguas, prestado por el sonido.
liù suena con un poco de o, «liou», como explicó Michelle.`},
  {id:"num-08",s:"七",py:"qī",es:"siete",en:"seven",
   x:`Originalmente una cruz, un corte: significaba cortar (hoy 切: 七 + 刀 cuchillo).
El trazo de abajo se curvó para no confundirlo con 十.`},
  {id:"num-09",s:"八",py:"bā",es:"ocho",en:"eight",
   x:`Dos trazos que se separan: dividir. Por eso 八 está arriba en 分 (dividir) y en 公.
Número de suerte: bā suena parecido a 发 fā, prosperar.`},
  {id:"num-10",s:"九",py:"jiǔ",es:"nueve",en:"nine",
   x:`Origen discutido: quizá un brazo doblado o un gancho.
Suena como 久 jiǔ (largo tiempo): número de buena suerte en bodas.`},
  {id:"num-11",s:"十",py:"shí",es:"diez",en:"ten",
   x:`Originalmente una línea vertical con un punto grueso en el medio, que se alargó hasta volverse una cruz.
Con 一 a 十 y la lógica de combinarlos se arma todo hasta 99.`},
  {id:"num-12",s:"百",py:"bǎi",es:"cien",en:"hundred",
   x:`一 + 白 (blanco, por el sonido).
Hay que decir el uno: 100 = 一百, nunca solo 百.`},
  {id:"num-13",s:"千",py:"qiān",es:"mil",en:"thousand",
   x:`人 (persona) cruzada por un trazo: una marca convencional para mil. No hay lógica visual clara.`},
  {id:"num-14",s:"万",t:"萬",py:"wàn",es:"diez mil",en:"ten thousand",
   x:`El tradicional 萬 era un escorpión (pinzas arriba, cola abajo), tomado prestado por el sonido.
El chino cuenta por decenas de miles: 10.000 = 一万 es una unidad propia.`},
  {id:"num-15",s:"两",t:"兩",py:"liǎng",es:"dos (con clasificador)",en:"two (before a measure word)",
   x:`Originalmente un yugo, o los dos platillos de una balanza: un par.
Delante de un clasificador se dice 两 y no 二: 两个老师, 两只猫. Y normalmente 两百 para 200.`},
  {id:"num-16",s:"十一",py:"shíyī",es:"once",en:"eleven",
   x:`十 diez + 一 uno. Del 11 al 19: 十 + unidad (十二, 十五, 十九).`},
  {id:"num-17",s:"十五",py:"shíwǔ",es:"quince",en:"fifteen",
   x:`十 diez + 五 cinco.`},
  {id:"num-18",s:"二十",py:"èrshí",es:"veinte",en:"twenty",
   x:`二 dos + 十 diez: «dos dieces». Decenas = número + 十: 三十, 四十, 九十.`},
  {id:"num-19",s:"二十五",py:"èrshíwǔ",es:"veinticinco",en:"twenty-five",
   x:`二 dos + 十 diez + 五 cinco. Decena + unidad: 三十七, 八十二.`},
  {id:"num-20",s:"九十九",py:"jiǔshíjiǔ",es:"noventa y nueve",en:"ninety-nine",
   x:`九 + 十 + 九. El número más alto armado solo con los diez primeros.`},
  {id:"num-21",s:"一百",py:"yìbǎi",es:"cien",en:"one hundred",
   x:`一 uno + 百 cien. El uno es obligatorio. 一 pasa a yì porque 百 es tercer tono.`},
  {id:"num-22",s:"一百零一",py:"yìbǎi líng yī",es:"ciento uno",en:"one hundred and one",
   x:`一百 + 零 + 一. El 零 marca que falta la decena.`},
  {id:"num-23",s:"一百一十",py:"yìbǎi yīshí",es:"ciento diez",en:"one hundred and ten",
   x:`一百 + 一十. Después de 百 el diez lleva su uno: 一十. Al hablar se abrevia a 一百一.`},
  {id:"num-24",s:"一百二十三",py:"yìbǎi èrshísān",es:"ciento veintitrés",en:"one hundred twenty-three",
   x:`一百 cien + 二十 veinte + 三 tres. Se lee de mayor a menor, igual que las cifras.`},
  {id:"num-25",s:"两百",t:"兩百",py:"liǎngbǎi",es:"doscientos",en:"two hundred",
   x:`两 par + 百 cien. También se oye 二百; los dos están bien, pero 两百 es lo más común.
Es el 200 de la oración de la escuela: 两百个女学生.`},
  {id:"num-26",s:"一千",py:"yìqiān",es:"mil",en:"one thousand",
   x:`一 + 千. Como con 百, el uno es obligatorio.`},
  {id:"num-27",s:"一万",t:"一萬",py:"yíwàn",es:"diez mil",en:"ten thousand",
   x:`一 + 万. 一 pasa a yí porque 万 es cuarto tono.`}
  ]
});
