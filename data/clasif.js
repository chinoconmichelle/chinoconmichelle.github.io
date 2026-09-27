/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, x character explanation (Spanish), say optional text for the voice. */
window.TOPICS.push({
  id:"clasif", glyph:"个",
  name:{es:"Clasificadores y artículos",en:"Measure words & articles",zh:"量词与冠词"},
  cards:[
  {id:"cla-01",s:"数 + 量词 + 名词",t:"數 + 量詞 + 名詞",py:"shù + liàngcí + míngcí",es:"número + clasificador + sustantivo",en:"number + measure word + noun",say:"一个老师",
   x:`La regla central de la clase 3: un número nunca va directo al sustantivo. Siempre hay un clasificador en el medio.
一个老师 un profesor · 两只猫 dos gatos · 一条鱼 un pez.
Es como decir «una cabeza de ganado» o «una botella de agua» en español, pero obligatorio para todo.
量词 liàngcí es el nombre gramatical: 量 medir (日 sol sobre 里, la aldea con sus campos: medir la tierra) + 词 palabra (讠 habla + 司).
En inglés se llaman measure words, porque muchos son medidas: una botella, una taza.`},
  {id:"cla-02",s:"个",t:"個",py:"gè",es:"clasificador general (personas y objetos)",en:"general measure word (people, things)",
   x:`Viene de 箇: 竹 (bambú, dos tallos con sus hojas) + 固 (sonido). Una caña de bambú contada de a una.
El simplificado 个 parece un tallo con dos hojas. La forma tradicional actual 個 cambió el bambú por 亻 (persona).
Es el clasificador comodín: si no sabés cuál usar, usá 个. Michelle contó que los chicos taiwaneses empiezan igual y los padres los corrigen de a poco.
Suele sonar en tono neutro: 一个 yí ge. El 一 pasa a yí porque 个 era originalmente cuarto tono.`},
  {id:"cla-03",s:"只",t:"隻",py:"zhī",es:"clasificador de animales",en:"measure word for animals",
   x:`En tradicional se entiende todo: 隻 = 隹 (un pájaro de cola corta dibujado de perfil) sobre 又 (la mano derecha).
Un solo pájaro en la mano: de ahí «uno, individual», y de ahí el clasificador de animales.
Sirve para la mayoría de los animales terrestres, marinos y aves: 一只狗, 一只猫, 一只鸟.
El simplificado 只 tomó prestado otro carácter, 只 zhǐ «solo», que es 口 (boca) con dos trazos debajo: el aliento que sale.`},
  {id:"cla-04",s:"条",t:"條",py:"tiáo",es:"clasificador de cosas alargadas",en:"measure word for long, thin things",
   x:`En tradicional 條: 攸 (sonido) con 木 (árbol) abajo a la derecha. Una rama larga y delgada.
Para todo lo alargado: 一条蛇 una víbora, 一条鱼 un pez, 一条围巾 una bufanda, y también calles y ríos.
Un perro puede llevar 只 o 条 (Michelle bromeó con el perro salchicha). Un gato, solo 只: 一条猫 está mal.`},
  {id:"cla-05",s:"位",py:"wèi",es:"clasificador formal para personas",en:"polite measure word for people",
   x:`亻 (una persona caminando de costado) + 立 (una persona de pie sobre una línea de suelo).
La persona parada en su lugar: posición, puesto. De ahí el clasificador respetuoso.
Para profesores, clientes, invitados. Se oye mucho en las noticias: 一位老师, 这位先生.`},
  {id:"cla-06",s:"这",t:"這",py:"zhè",es:"este / esta",en:"this",
   x:`辶 (el radical de caminar: un pie en movimiento sobre el camino) + 文.
En tradicional 這 lleva 言 (hablar): señalar mientras se habla.
Como en chino no existe «el / la», para decir «el gato» se usa 这 + clasificador: 这只猫.`},
  {id:"cla-07",s:"那",py:"nà",es:"ese / esa",en:"that",
   x:`Originalmente el nombre de un lugar, tomado prestado por el sonido. El 阝 de la derecha es un pueblo o una ciudad.
El chino, como el inglés, solo tiene «este» y «ese»: no existe «aquel».
那只猫 ese gato.`},
  {id:"cla-08",s:"些",py:"xiē",es:"algunos (plural)",en:"some (plural)",
   x:`此 (esto, este lugar: 止 la huella de un pie + 匕) sobre 二. Una cantidad pequeña.
En plural reemplaza al clasificador, sea cual sea el sustantivo: 一些猫, 这些老师. Nunca 一些只猫.`},
  {id:"cla-09",s:"一些",py:"yìxiē",es:"unos / unas",en:"some (a / an in plural)",
   x:`一 uno + 些 algunos. El artículo indefinido en plural.
一些猫 unos gatos · 一些老师 unos profesores. No lleva clasificador.`},
  {id:"cla-10",s:"这些",t:"這些",py:"zhèxiē",es:"estos / los",en:"these / the (plural)",
   x:`这 este + 些 plural. 这些猫 estos gatos, los gatos.`},
  {id:"cla-11",s:"那些",py:"nàxiē",es:"esos / esas",en:"those",
   x:`那 ese + 些 plural. 那些老师 esos profesores.`},
  {id:"cla-12",s:"一只猫",t:"一隻貓",py:"yì zhī māo",es:"un gato",en:"a cat",
   x:`一 uno + 只 (animales) + 猫 gato.
一 se lee yì porque 只 es primer tono.`},
  {id:"cla-13",s:"一些猫",t:"一些貓",py:"yìxiē māo",es:"unos gatos",en:"some cats",
   x:`一些 unos + 猫. En plural desaparece el clasificador.`},
  {id:"cla-14",s:"这只猫",t:"這隻貓",py:"zhè zhī māo",es:"el gato / este gato",en:"the cat / this cat",
   x:`这 este + 只 + 猫. Así se dice «el gato», porque el artículo no existe.
Cuando hay sustantivo, el clasificador nunca se cae.`},
  {id:"cla-15",s:"那只猫",t:"那隻貓",py:"nà zhī māo",es:"ese gato",en:"that cat",
   x:`那 ese + 只 + 猫.`},
  {id:"cla-16",s:"这些猫",t:"這些貓",py:"zhèxiē māo",es:"los gatos / estos gatos",en:"the cats / these cats",
   x:`这些 estos + 猫. Plural con 些, sin 只.`},
  {id:"cla-17",s:"一个老师",t:"一個老師",py:"yí ge lǎoshī",es:"un profesor",en:"a teacher",
   x:`一 + 个 + 老师. 一 pasa a yí porque 个 era originalmente cuarto tono.`},
  {id:"cla-18",s:"这个老师",t:"這個老師",py:"zhè ge lǎoshī",es:"el profesor / este profesor",en:"the teacher / this teacher",
   x:`这 este + 个 + 老师.`},
  {id:"cla-19",s:"那些老师",t:"那些老師",py:"nàxiē lǎoshī",es:"esos profesores",en:"those teachers",
   x:`那些 esos + 老师.`},
  {id:"cla-20",s:"两个老师",t:"兩個老師",py:"liǎng ge lǎoshī",es:"dos profesores",en:"two teachers",
   x:`两 (dos, con clasificador) + 个 + 老师.
Delante de un clasificador se dice 两 y no 二: 二个 está mal.`},
  {id:"cla-21",s:"一条鱼",t:"一條魚",py:"yì tiáo yú",es:"un pez / un pescado",en:"a fish",
   x:`一 + 条 (alargado) + 鱼. El pez lleva 条 por su forma.
鱼 es un pictograma: arriba la cabeza, en el medio el cuerpo con escamas, abajo la cola. En tradicional 魚 la cola son cuatro puntos.`},
  {id:"cla-22",s:"一条蛇",t:"一條蛇",py:"yì tiáo shé",es:"una víbora",en:"a snake",
   x:`一 + 条 + 蛇. La serpiente es el ejemplo típico de 条.`},
  {id:"cla-23",s:"围巾",t:"圍巾",py:"wéijīn",es:"bufanda",en:"scarf",
   x:`围 rodear: 囗 (un recinto cerrado) con 韦 adentro (dos pies que dan la vuelta).
巾: un paño colgando de una barra. El mismo 巾 de 市 (mercado).
El paño que rodea el cuello. Lleva 条: 一条围巾.`},
  {id:"cla-24",s:"一条狗",t:"一條狗",py:"yì tiáo gǒu",es:"un perro (también 一只狗)",en:"a dog (also 一只狗)",
   x:`El perro acepta los dos: 一只狗 (animal) o 一条狗 (alargado).
El gato no: solo 一只猫.`}
  ]
});
