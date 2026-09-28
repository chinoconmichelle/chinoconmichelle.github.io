/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"clasif", glyph:"个",
  name:{"es": "Clasificadores y artículos", "en": "Measure words & articles", "zh": "量词与冠词"},
  cl:"c3",
  cards:[
  {id:"cla-01",s:"数 + 量词 + 名词",t:"數 + 量詞 + 名詞",py:"shù + liàngcí + míngcí",es:"número + clasificador + sustantivo",en:"number + measure word + noun",say:"一个老师",
   x:{
es:`La regla central de la clase 3: un número nunca va directo al sustantivo. Siempre hay un clasificador en el medio.
一个老师 un profesor · 两只猫 dos gatos · 一条鱼 un pez.
Es como decir «una cabeza de ganado» o «una botella de agua» en español, pero obligatorio para todo.
量词 liàngcí es el nombre gramatical: 量 medir (日 sol sobre 里, la aldea con sus campos: medir la tierra) + 词 palabra (讠 habla + 司).
En inglés se llaman measure words, porque muchos son medidas: una botella, una taza.`,
en:`The central rule of class 3: a number never goes straight onto the noun. There's always a measure word in between.
一个老师 a teacher · 两只猫 two cats · 一条鱼 a fish.
Like "a head of cattle" or "a bottle of water", but compulsory for everything.
量词 liàngcí is the grammar term: 量 to measure (日 sun over 里, the village with its fields: measuring land) + 词 word (讠 speech + 司).`,
zh:`第三课的核心规则：数字不能直接接名词，中间一定要有量词。量词：量（日 在 里 上，测量土地）+ 词（讠 + 司）。`}},
  {id:"cla-02",s:"个",t:"個",py:"gè",es:"clasificador general (personas y objetos)",en:"general measure word (people, things)",
   x:{
es:`Viene de 箇: 竹 (bambú, dos tallos con sus hojas) + 固 (sonido). Una caña de bambú contada de a una.
El simplificado 个 parece un tallo con dos hojas. La forma tradicional actual 個 cambió el bambú por 亻 (persona).
Es el clasificador comodín: si no sabés cuál usar, usá 个. Michelle contó que los chicos taiwaneses empiezan igual y los padres los corrigen de a poco.
Suele sonar en tono neutro: 一个 yí ge. El 一 pasa a yí porque 个 era originalmente cuarto tono.`,
en:`From 箇: 竹 (bamboo, two stalks with leaves) + 固 (sound). A bamboo cane counted one by one.
The simplified 个 looks like a stalk with two leaves. The current traditional 個 swapped bamboo for 亻 (person).
It's the all-purpose measure word: if you don't know which to use, use 个. Michelle said Taiwanese children start the same way and their parents correct them bit by bit.
Usually neutral tone: 一个 yí ge. 一 becomes yí because 个 was originally a 4th tone.`,
zh:`来自 箇：竹 + 固（表音），一根一根数的竹子。简体 个 像一根有两片叶子的竹枝；繁体 個 把竹换成 亻。万能量词，不知道用哪个就用 个。`}},
  {id:"cla-03",s:"只",t:"隻",py:"zhī",es:"clasificador de animales",en:"measure word for animals",
   x:{
es:`En tradicional se entiende todo: 隻 = 隹 (un pájaro de cola corta dibujado de perfil) sobre 又 (la mano derecha).
Un solo pájaro en la mano: de ahí «uno, individual», y de ahí el clasificador de animales.
Sirve para la mayoría de los animales terrestres, marinos y aves: 一只狗, 一只猫, 一只鸟.
El simplificado 只 tomó prestado otro carácter, 只 zhǐ «solo», que es 口 (boca) con dos trazos debajo: el aliento que sale.`,
en:`Traditional explains it: 隻 = 隹 (a short-tailed bird in profile) over 又 (the right hand).
A single bird in the hand: hence "one, single", and hence the measure word for animals.
For most land, sea and flying animals: 一只狗, 一只猫, 一只鸟.
The simplified 只 borrowed another character, 只 zhǐ "only", which is 口 (mouth) with two strokes underneath: breath coming out.`,
zh:`看繁体就明白：隻 = 隹（短尾鸟）在 又（手）上，手里一只鸟，所以是动物的量词。简体借用了 只 zhǐ（口 下面两笔，出气）。`}},
  {id:"cla-04",s:"条",t:"條",py:"tiáo",es:"clasificador de cosas alargadas",en:"measure word for long, thin things",
   x:{
es:`En tradicional 條: 攸 (sonido) con 木 (árbol) abajo a la derecha. Una rama larga y delgada.
Para todo lo alargado: 一条蛇 una víbora, 一条鱼 un pez, 一条围巾 una bufanda, y también calles y ríos.
Un perro puede llevar 只 o 条 (Michelle bromeó con el perro salchicha). Un gato, solo 只: 一条猫 está mal.`,
en:`In traditional 條: 攸 (sound) with 木 (tree) at the bottom right. A long, thin branch.
For anything long: 一条蛇 a snake, 一条鱼 a fish, 一条围巾 a scarf, and also streets and rivers.
A dog can take 只 or 条 (Michelle joked about the sausage dog). A cat only takes 只: 一条猫 is wrong.`,
zh:`繁体 條：攸（表音）+ 右下的 木，一根细长的树枝。用于长条的东西。狗可以用 只 或 条；猫只能用 只。`}},
  {id:"cla-05",s:"位",py:"wèi",es:"clasificador formal para personas",en:"polite measure word for people",
   x:{
es:`亻 (una persona caminando de costado) + 立 (una persona de pie sobre una línea de suelo).
La persona parada en su lugar: posición, puesto. De ahí el clasificador respetuoso.
Para profesores, clientes, invitados. Se oye mucho en las noticias: 一位老师, 这位先生.`,
en:`亻 (a person walking, side view) + 立 (a person standing on a ground line).
The person standing in their place: position, rank. Hence the respectful measure word.
For teachers, customers, guests. Common in the news: 一位老师, 这位先生.`,
zh:`亻 + 立（站在地面上的人），站在自己位置上的人。尊敬的量词，用于老师、客人等。`}},
  {id:"cla-06",s:"这",t:"這",py:"zhè",es:"este / esta",en:"this",
   x:{
es:`辶 (el radical de caminar: un pie en movimiento sobre el camino) + 文.
En tradicional 這 lleva 言 (hablar): señalar mientras se habla.
Como en chino no existe «el / la», para decir «el gato» se usa 这 + clasificador: 这只猫.`,
en:`辶 (the walking radical: a foot moving along a road) + 文.
In traditional 這 it has 言 (speech): pointing while you speak.
Since Chinese has no "the", to say "the cat" you use 这 + measure word: 这只猫.`,
zh:`辶（走路的部首）+ 文。繁体 這 里是 言，一边说一边指。中文没有定冠词，用 这 + 量词 表示"the"。`}},
  {id:"cla-07",s:"那",py:"nà",es:"ese / esa",en:"that",
   x:{
es:`Originalmente el nombre de un lugar, tomado prestado por el sonido. El 阝 de la derecha es un pueblo o una ciudad.
El chino, como el inglés, solo tiene «este» y «ese»: no existe «aquel».
那只猫 ese gato.`,
en:`Originally the name of a place, borrowed for the sound. The 阝 on the right is a town.
Chinese, like English, only has "this" and "that": there's no third distance.
那只猫 that cat.`,
zh:`本来是地名，借来表音。右边 阝 表示城邑。中文和英文一样只有"这"和"那"。`}},
  {id:"cla-08",s:"些",py:"xiē",es:"algunos (plural)",en:"some (plural)",
   x:{
es:`此 (esto, este lugar: 止 la huella de un pie + 匕) sobre 二. Una cantidad pequeña.
En plural reemplaza al clasificador, sea cual sea el sustantivo: 一些猫, 这些老师. Nunca 一些只猫.`,
en:`此 (this, this place: 止 a footprint + 匕) over 二. A small amount.
In the plural it replaces the measure word, whatever the noun: 一些猫, 这些老师. Never 一些只猫.`,
zh:`此（止 + 匕）在 二 上，表示少量。复数时代替量词：一些猫，不能说 一些只猫。`}},
  {id:"cla-09",s:"一些",py:"yìxiē",es:"unos / unas",en:"some (a / an in plural)",
   x:{
es:`一 uno + 些 algunos. El artículo indefinido en plural.
一些猫 unos gatos · 一些老师 unos profesores. No lleva clasificador.`,
en:`一 one + 些 some. The plural indefinite article.
一些猫 some cats · 一些老师 some teachers. No measure word.`,
zh:`一 + 些，不用量词。`}},
  {id:"cla-10",s:"这些",t:"這些",py:"zhèxiē",es:"estos / los",en:"these / the (plural)",
   x:{
es:`这 este + 些 plural. 这些猫 estos gatos, los gatos.`,
en:`这 this + 些 plural. 这些猫 these cats, the cats.`,
zh:`这 + 些。`}},
  {id:"cla-11",s:"那些",py:"nàxiē",es:"esos / esas",en:"those",
   x:{
es:`那 ese + 些 plural. 那些老师 esos profesores.`,
en:`那 that + 些 plural. 那些老师 those teachers.`,
zh:`那 + 些。`}},
  {id:"cla-12",s:"一只猫",t:"一隻貓",py:"yì zhī māo",es:"un gato",en:"a cat",
   x:{
es:`一 uno + 只 (animales) + 猫 gato.
一 se lee yì porque 只 es primer tono.`,
en:`一 one + 只 (animals) + 猫 cat.
一 is read yì because 只 is a 1st tone.`,
zh:`一 + 只 + 猫。只 是第一声，一 读 yì。`}},
  {id:"cla-13",s:"一些猫",t:"一些貓",py:"yìxiē māo",es:"unos gatos",en:"some cats",
   x:{
es:`一些 unos + 猫. En plural desaparece el clasificador.`,
en:`一些 some + 猫. In the plural the measure word disappears.`,
zh:`一些 + 猫，复数不用量词。`}},
  {id:"cla-14",s:"这只猫",t:"這隻貓",py:"zhè zhī māo",es:"el gato / este gato",en:"the cat / this cat",
   x:{
es:`这 este + 只 + 猫. Así se dice «el gato», porque el artículo no existe.
Cuando hay sustantivo, el clasificador nunca se cae.`,
en:`这 this + 只 + 猫. This is how you say "the cat", since there is no article.
When there's a noun, the measure word never drops.`,
zh:`这 + 只 + 猫，相当于"the cat"。有名词时量词不能省。`}},
  {id:"cla-15",s:"那只猫",t:"那隻貓",py:"nà zhī māo",es:"ese gato",en:"that cat",
   x:{
es:`那 ese + 只 + 猫.`,
en:`那 that + 只 + 猫.`,
zh:`那 + 只 + 猫。`}},
  {id:"cla-16",s:"这些猫",t:"這些貓",py:"zhèxiē māo",es:"los gatos / estos gatos",en:"the cats / these cats",
   x:{
es:`这些 estos + 猫. Plural con 些, sin 只.`,
en:`这些 these + 猫. Plural with 些, no 只.`,
zh:`这些 + 猫，不用 只。`}},
  {id:"cla-17",s:"一个老师",t:"一個老師",py:"yí ge lǎoshī",es:"un profesor",en:"a teacher",
   x:{
es:`一 + 个 + 老师. 一 pasa a yí porque 个 era originalmente cuarto tono.`,
en:`一 + 个 + 老师. 一 becomes yí because 个 was originally a 4th tone.`,
zh:`一 + 个 + 老师，一 读 yí。`}},
  {id:"cla-18",s:"这个老师",t:"這個老師",py:"zhè ge lǎoshī",es:"el profesor / este profesor",en:"the teacher / this teacher",
   x:{
es:`这 este + 个 + 老师.`,
en:`这 this + 个 + 老师.`,
zh:`这 + 个 + 老师。`}},
  {id:"cla-19",s:"那些老师",t:"那些老師",py:"nàxiē lǎoshī",es:"esos profesores",en:"those teachers",
   x:{
es:`那些 esos + 老师.`,
en:`那些 those + 老师.`,
zh:`那些 + 老师。`}},
  {id:"cla-20",s:"两个老师",t:"兩個老師",py:"liǎng ge lǎoshī",es:"dos profesores",en:"two teachers",
   x:{
es:`两 (dos, con clasificador) + 个 + 老师.
Delante de un clasificador se dice 两 y no 二: 二个 está mal.`,
en:`两 (two, before a measure word) + 个 + 老师.
Before a measure word you say 两, not 二: 二个 is wrong.`,
zh:`两 + 个 + 老师。量词前用 两，不说 二个。`}},
  {id:"cla-21",s:"一条鱼",t:"一條魚",py:"yì tiáo yú",es:"un pez / un pescado",en:"a fish",
   x:{
es:`一 + 条 (alargado) + 鱼. El pez lleva 条 por su forma.
鱼 es un pictograma: arriba la cabeza, en el medio el cuerpo con escamas, abajo la cola. En tradicional 魚 la cola son cuatro puntos.`,
en:`一 + 条 (long) + 鱼. A fish takes 条 because of its shape.
鱼 is a pictogram: the head on top, the scaly body in the middle, the tail below. In traditional 魚 the tail is four dots.`,
zh:`一 + 条 + 鱼。鱼 是象形字：上面头，中间有鳞的身体，下面尾巴；繁体 魚 的尾巴是四点。`}},
  {id:"cla-22",s:"一条蛇",t:"一條蛇",py:"yì tiáo shé",es:"una víbora",en:"a snake",
   x:{
es:`一 + 条 + 蛇. La serpiente es el ejemplo típico de 条.`,
en:`一 + 条 + 蛇. The snake is the classic example of 条.`,
zh:`一 + 条 + 蛇，蛇 是用 条 的典型例子。`}},
  {id:"cla-23",s:"围巾",t:"圍巾",py:"wéijīn",es:"bufanda",en:"scarf",
   x:{
es:`围 rodear: 囗 (un recinto cerrado) con 韦 adentro (dos pies que dan la vuelta).
巾: un paño colgando de una barra. El mismo 巾 de 市 (mercado).
El paño que rodea el cuello. Lleva 条: 一条围巾.`,
en:`围 to surround: 囗 (an enclosure) with 韦 inside (two feet going around).
巾: a cloth hanging from a bar. The same 巾 as in 市 (market).
The cloth that goes around the neck. Takes 条: 一条围巾.`,
zh:`围：囗 里面 韦（绕圈走的两只脚）。巾：挂在横杆上的布，和 市 的 巾 一样。围在脖子上的布，用 条。`}},
  {id:"cla-24",s:"一条狗",t:"一條狗",py:"yì tiáo gǒu",es:"un perro (también 一只狗)",en:"a dog (also 一只狗)",
   x:{
es:`El perro acepta los dos: 一只狗 (animal) o 一条狗 (alargado).
El gato no: solo 一只猫.`,
en:`A dog accepts both: 一只狗 (animal) or 一条狗 (long).
A cat doesn't: only 一只猫.`,
zh:`狗 可以用 只 或 条；猫 只能用 只。`}}
  ]
});
