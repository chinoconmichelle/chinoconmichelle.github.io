/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"saludos", glyph:"好",
  name:{"es": "Saludos", "en": "Greetings", "zh": "问候"},
  cl:"c3",
  cards:[
  {id:"sal-01",s:"你好",py:"nǐ hǎo",es:"hola",en:"hello",cl:"c2",
   x:{
es:`你 vos: 亻 a la izquierda es 人 (una persona caminando vista de costado) aplastada; 尔 está por el sonido y su origen es discutido.
好 bien: 女 (una mujer arrodillada con los brazos cruzados adelante) + 子 (un bebé con la cabeza grande y las piernas envueltas). Una madre con su hijo: la imagen de lo bueno.
Literalmente «vos bien». No es una exclamación: es una afirmación, y por eso se le puede agregar 吗 para preguntar.
Pronunciación: dos terceros tonos seguidos. El primero sube y se dice ní hǎo.`,
en:`你 you: 亻 on the left is 人 (a person walking, seen from the side), squeezed; 尔 is there for the sound and its origin is disputed.
好 good: 女 (a woman kneeling with her arms crossed in front) + 子 (a baby with a big head and swaddled legs). A mother with her child: the picture of what is good.
Literally "you good". It isn't an exclamation but a statement, which is why you can add 吗 to make it a question.
Pronunciation: two third tones in a row. The first rises, so you say ní hǎo.`,
zh:`你：左边的 亻 是 人（侧面走路的人）的偏旁写法；尔 表音，来源有争议。
好：女（跪坐、双手交叉在胸前的女子）+ 子（头大、双腿包在襁褓里的婴儿）。母亲抱着孩子，就是"好"的形象。
字面意思是"你好"这个状态，是陈述句，所以可以加 吗 变成问句。
发音：两个第三声相连，第一个读第二声：ní hǎo。`}},
  {id:"sal-02",s:"你好吗？",t:"你好嗎？",py:"nǐ hǎo ma?",es:"¿cómo estás?",en:"how are you?",cl:"c2",
   x:{
es:`你好 «vos bien» + 吗.
吗: 口 (una boca abierta, dibujada como un rectángulo: algo que se dice) + 马 (un caballo de perfil, solo por el sonido). En tradicional 嗎 el caballo 馬 tiene las cuatro patas.
吗 al final convierte cualquier afirmación en pregunta de sí o no: «vos bien, ¿sí o no?».`,
en:`你好 "you good" + 吗.
吗: 口 (an open mouth, drawn as a rectangle: something said) + 马 (a horse in profile, only for the sound). In traditional 嗎 the horse 馬 has all four legs.
吗 at the end turns any statement into a yes/no question: "you good, yes or no?"`,
zh:`你好 + 吗。
吗：口（张开的嘴，表示与说话有关）+ 马（侧面的马，只表音）。繁体 嗎 里的 馬 四条腿都画出来了。
吗 放在句末，把任何陈述句变成是非问句。`}},
  {id:"sal-03",s:"我很好",py:"wǒ hěn hǎo",es:"estoy bien",en:"I'm fine",cl:"c2",
   x:{
es:`我 yo: originalmente el dibujo de un arma de asta con hoja dentada. Se tomó prestado solo por el sonido.
很 muy: 彳 (medio 行, un cruce de caminos: movimiento) + 艮 (sonido). Acá no agrega intensidad: sin 很 la frase suena incompleta.
好 bien: mujer 女 + niño 子.
Tres terceros tonos seguidos: al hablar rápido suena wó hén hǎo.`,
en:`我 I: originally a drawing of a pole weapon with a serrated blade. It was borrowed only for its sound.
很 very: 彳 (half of 行, a crossroads: movement) + 艮 (sound). Here it adds no intensity; without 很 the sentence sounds unfinished.
好 good: woman 女 + child 子.
Three third tones in a row: spoken quickly it sounds like wó hén hǎo.`,
zh:`我：本来是一种带锯齿刃的长柄兵器，借来表示"我"的读音。
很：彳（行 的一半，十字路口，表示行动）+ 艮（表音）。这里不强调程度，没有 很 句子听起来不完整。
好：女 + 子。
三个第三声相连，说快了读作 wó hén hǎo。`}},
  {id:"sal-04",s:"早安",py:"zǎo'ān",es:"buenos días",en:"good morning",cl:"c2",
   x:{
es:`早 temprano: 日 (el sol, un círculo con un punto que con el tiempo se cuadró) arriba de 十. Michelle lo explicó así: el sol por encima del horizonte.
安 paz: 宀 (un techo de dos aguas) + 女 (la mujer arrodillada). La mujer bajo techo: la casa en calma.
«Paz de la mañana». Más usado en Taiwán.`,
en:`早 early: 日 (the sun, a circle with a dot that became square over time) above 十. Michelle explained it as the sun above the horizon.
安 peace: 宀 (a gabled roof) + 女 (the kneeling woman). A woman under a roof: a calm home.
"Morning peace". More common in Taiwan.`,
zh:`早：日（太阳，圆圈中间一点，后来写成方形）在 十 上面。Michelle 老师解释为太阳在地平线上方。
安：宀（屋顶）+ 女（跪坐的女子）。女子在屋檐下，家里平安。
在台湾更常用。`}},
  {id:"sal-05",s:"早上好",py:"zǎoshang hǎo",es:"buenos días",en:"good morning",
   x:{
es:`早上 a la mañana (早 temprano + 上 arriba: una línea de horizonte con una marca encima) + 好 bien.
«Mañana bien». Es la forma más común en China continental; en Taiwán se oye más 早安.`,
en:`早上 in the morning (早 early + 上 up: a horizon line with a mark above it) + 好 good.
"Morning good". The most common form in mainland China; in Taiwan you hear 早安 more.`,
zh:`早上（早 + 上：一条横线上方有一点，表示上面）+ 好。
中国大陆最常用；台湾比较常说 早安。`}},
  {id:"sal-06",s:"午安",py:"wǔ'ān",es:"buenas tardes",en:"good afternoon",
   x:{
es:`午 mediodía: originalmente el dibujo de un pisón o mano de mortero, tomado prestado por el sonido para la hora del sol alto.
安 paz: techo 宀 + mujer 女.
«Paz del mediodía». Completa la serie 早安 · 午安 · 晚安.`,
en:`午 noon: originally a drawing of a pestle, borrowed for its sound to name the hour of the high sun.
安 peace: roof 宀 + woman 女.
"Noon peace". Completes the set 早安 · 午安 · 晚安.`,
zh:`午：本来是舂米用的杵，借音表示正午。
安：宀 + 女。
和 早安、晚安 成为一组。`}},
  {id:"sal-07",s:"下午好",py:"xiàwǔ hǎo",es:"buenas tardes",en:"good afternoon",
   x:{
es:`下 abajo: una línea con una marca debajo. 午 mediodía. 下午 = después del mediodía.
Michelle lo explicó con el reloj de sol: el palito que mide la sombra ya está abajo.
+ 好 bien. Forma de China continental; equivale a 午安.`,
en:`下 below: a line with a mark underneath. 午 noon. 下午 = after noon.
Michelle explained it with a sundial: the little stick that measures the shadow is already low.
+ 好 good. Mainland form; equivalent to 午安.`,
zh:`下：一条横线下方有一点，表示下面。下午 = 中午以后。
Michelle 老师用日晷解释：量影子的小棍已经在下方了。
+ 好。大陆的说法，相当于 午安。`}},
  {id:"sal-08",s:"晚安",py:"wǎn'ān",es:"buenas noches (al despedirse)",en:"good night",
   x:{
es:`晚 tarde, noche: 日 (sol) + 免 (sonido). El sol que ya se fue.
安 paz: techo 宀 + mujer 女. La misma 安 de 早安.
Se usa para despedirse o al ir a dormir.`,
en:`晚 late, evening: 日 (sun) + 免 (sound). The sun that has gone.
安 peace: roof 宀 + woman 女. The same 安 as in 早安.
Used when saying goodbye in the evening or going to bed.`,
zh:`晚：日 + 免（表音）。太阳已经离开。
安：宀 + 女，和 早安 的 安 一样。
道别或睡前说。`}},
  {id:"sal-09",s:"晚上好",py:"wǎnshang hǎo",es:"buenas noches (al saludar)",en:"good evening",
   x:{
es:`晚上 a la noche + 好 bien.
Diferencia con 晚安: 晚上好 es para saludar al llegar; 晚安 es para despedirse.`,
en:`晚上 in the evening + 好 good.
Difference from 晚安: 晚上好 is a greeting when you arrive; 晚安 is for saying goodbye.`,
zh:`晚上 + 好。
和 晚安 的区别：晚上好 是见面打招呼，晚安 是道别。`}},
  {id:"sal-10",s:"早上",py:"zǎoshang",es:"a la mañana",en:"in the morning",
   x:{
es:`早 temprano (el sol 日 sobre el horizonte) + 上 arriba (una línea con una marca encima).
La segunda sílaba va en tono neutro: zǎoshang.`,
en:`早 early (the sun 日 above the horizon) + 上 up (a line with a mark above it).
The second syllable is in the neutral tone: zǎoshang.`,
zh:`早（太阳在地平线上）+ 上。第二个字读轻声：zǎoshang。`}},
  {id:"sal-11",s:"下午",py:"xiàwǔ",es:"a la tarde",en:"in the afternoon",
   x:{
es:`下 abajo (una línea con una marca debajo) + 午 mediodía (un pisón, prestado por el sonido).
Debajo, o después, del mediodía.`,
en:`下 below (a line with a mark underneath) + 午 noon (a pestle, borrowed for the sound).
Below, or after, noon.`,
zh:`下 + 午。中午以后。`}},
  {id:"sal-12",s:"晚上",py:"wǎnshang",es:"a la noche",en:"in the evening / at night",
   x:{
es:`晚 (el sol 日 que ya se retiró) + 上.
Michelle: el sol bajó hacia el oeste y subió la luna.`,
en:`晚 (the sun 日 that has withdrawn) + 上.
Michelle: the sun went down in the west and the moon came up.`,
zh:`晚（太阳已经下山）+ 上。Michelle 老师：太阳往西落下，月亮升起。`}},
  {id:"sal-13",s:"早餐",py:"zǎocān",es:"desayuno",en:"breakfast",
   x:{
es:`早 temprano + 餐 comida.
餐: abajo 食 (una vasija con tapa y comida adentro, el radical de lo comestible); arriba una mano sosteniendo un trozo de carne.
La comida de la mañana.`,
en:`早 early + 餐 meal.
餐: below is 食 (a covered pot with food inside, the radical for anything edible); above, a hand holding a piece of meat.
The morning meal.`,
zh:`早 + 餐。
餐：下面是 食（有盖的食器，与食物有关的部首）；上面是一只手拿着一块肉。
早上的一餐。`}},
  {id:"sal-14",s:"午餐",py:"wǔcān",es:"almuerzo",en:"lunch",
   x:{
es:`午 mediodía + 餐 comida (la vasija 食 con la mano y la carne arriba).`,
en:`午 noon + 餐 meal (the pot 食 with the hand and meat above).`,
zh:`午 + 餐。`}},
  {id:"sal-15",s:"晚餐",py:"wǎncān",es:"cena",en:"dinner",
   x:{
es:`晚 noche + 餐 comida.`,
en:`晚 evening + 餐 meal.`,
zh:`晚 + 餐。`}},
  {id:"sal-16",s:"谢谢",t:"謝謝",py:"xièxie",es:"gracias",en:"thank you",cl:"c2",
   x:{
es:`讠 a la izquierda es 言 (hablar: una boca 口 con líneas de sonido saliendo) aplastado. Marca todo lo verbal: 说 decir, 谁 quién.
射 disparar (solo por el sonido): 身 (un cuerpo) + 寸 (una mano con una marca en la muñeca), tensar el arco.
Agradecer es algo que se dice: por eso el radical del habla. La segunda sílaba va en tono neutro.`,
en:`讠 on the left is 言 (speech: a mouth 口 with lines of sound coming out), squeezed. It marks everything verbal: 说 to say, 谁 who.
射 to shoot (only for the sound): 身 (a body) + 寸 (a hand with a mark at the wrist), drawing a bow.
Thanking is something you say, hence the speech radical. The second syllable is in the neutral tone.`,
zh:`讠 是 言（嘴 口 里发出声音的线条）的偏旁写法，表示与说话有关：说、谁。
射 只表音：身 + 寸（手腕处有记号的手），拉弓射箭。
道谢是用嘴说的，所以用言字旁。第二个字读轻声。`}},
  {id:"sal-17",s:"不客气",t:"不客氣",py:"bú kèqi",es:"de nada",en:"you're welcome",cl:"c1",
   x:{
es:`不 no + 客 invitado + 气 aire, modales.
客: 宀 (techo) + 各 (夂 un pie que llega + 口 boca). El que llega bajo tu techo.
气: líneas de vaho subiendo. En tradicional 氣 lleva 米 (arroz): el vapor del arroz cocinándose.
Literalmente «no te pongas en modo invitado», no hagas ceremonia.
不 normalmente es bù, pero antes de otro cuarto tono (客 kè) pasa a bú.`,
en:`不 not + 客 guest + 气 air, manners.
客: 宀 (roof) + 各 (夂 an arriving foot + 口 mouth). The one who arrives under your roof.
气: lines of vapour rising. In traditional 氣 it contains 米 (rice): the steam of cooking rice.
Literally "don't act like a guest", don't stand on ceremony.
不 is normally bù, but before another fourth tone (客 kè) it becomes bú.`,
zh:`不 + 客 + 气。
客：宀 + 各（夂 走来的脚 + 口）。来到你家屋檐下的人。
气：往上冒的气。繁体 氣 里有 米：煮饭的蒸汽。
字面意思是"别当自己是客人"。
不 本来读 bù，在第四声（客 kè）前变成 bú。`}},
  {id:"sal-18",s:"不用谢",t:"不用謝",py:"bú yòng xiè",es:"no hay de qué",en:"no need to thank me",cl:"c1",
   x:{
es:`不 no + 用 usar, hacer falta (origen discutido, quizá un balde) + 谢 agradecer.
«No hace falta agradecer». 不 pasa a bú porque 用 es cuarto tono.`,
en:`不 not + 用 to use, to need (disputed origin, maybe a bucket) + 谢 to thank.
"No need to thank". 不 becomes bú because 用 is a fourth tone.`,
zh:`不 + 用（来源有争议，可能是桶）+ 谢。不 在第四声 用 前读 bú。`}},
  {id:"sal-19",s:"对不起",t:"對不起",py:"duìbuqǐ",es:"perdón",en:"sorry",
   x:{
es:`对 estar frente a, correcto: 又 (la mano derecha, dibujada con tres dedos) + 寸 (la mano con la marca en la muñeca).
不 no.
起 levantarse: 走 (caminar: una figura inclinada sobre 止, la huella de un pie) + 己.
Literalmente «no me puedo levantar frente a vos», no estoy a la altura.`,
en:`对 facing, correct: 又 (the right hand, drawn with three fingers) + 寸 (the hand with the mark at the wrist).
不 not.
起 to rise: 走 (to walk: a leaning figure over 止, a footprint) + 己.
Literally "I can't stand up to face you", I'm not up to it.`,
zh:`对：又（画了三根手指的右手）+ 寸。
起：走（弯身的人 + 止 脚印）+ 己。
字面意思是"没脸面对你"。`}},
  {id:"sal-20",s:"没关系",t:"沒關係",py:"méi guānxi",es:"no pasa nada",en:"it's okay / no problem",
   x:{
es:`没 no tener: 氵 (agua, tres gotas) + una mano que se hunde. Algo que se ahoga y desaparece.
关 la tranca de una puerta (en tradicional 關 se ve la puerta 門 entera) + 系 hilos atados. 关系 = lo que conecta: relación.
Literalmente «no hay relación», no tiene que ver: no pasa nada. Es la respuesta a 对不起.`,
en:`没 not have: 氵 (water, three drops) + a hand going under. Something that sinks and disappears.
关 the bar of a gate (in traditional 關 you see the whole gate 門) + 系 tied threads. 关系 = what connects: relationship.
Literally "there's no connection", it doesn't matter: no problem. It's the answer to 对不起.`,
zh:`没：氵 + 一只沉下去的手，东西沉没不见了。
关：门闩（繁体 關 能看到整个 門）+ 系（绑起来的线）。关系 = 连接的东西。
是 对不起 的回答。`}},
  {id:"sal-21",s:"再见",t:"再見",py:"zàijiàn",es:"chau, nos vemos",en:"goodbye / see you",cl:"c1",
   x:{
es:`再 otra vez (origen discutido).
见 ver: 目 (un ojo dibujado de frente y después girado a la vertical) sobre 儿 (dos piernas). El ojo que camina hacia algo. En tradicional 見 el ojo completo sobre las piernas.
Literalmente «ver de nuevo», igual que see you again.`,
en:`再 again (disputed origin).
见 to see: 目 (an eye drawn from the front, later turned upright) on 儿 (two legs). The eye that walks toward something. In traditional 見 the whole eye sits on the legs.
Literally "see again", exactly like "see you again".`,
zh:`再（来源有争议）。
见：目（正面画的眼睛，后来竖起来）在 儿（两条腿）上。繁体 見 是完整的眼睛加两条腿。
字面意思是"再次见到"。`}},
  {id:"sal-22",s:"拜拜",py:"báibái",es:"chau (bye bye)",en:"bye-bye",
   x:{
es:`拜 son dos manos juntas haciendo una reverencia.
Acá se usa solo por el sonido: es el bye bye del inglés. Michelle dice que en las películas se oye más que 再见.`,
en:`拜 is two hands joined in a bow.
Here it's used only for the sound: it's the English "bye-bye". Michelle says you hear it in films more than 再见.`,
zh:`拜：两只手合在一起行礼。这里只借音，就是英文的 bye-bye。Michelle 老师说电影里比 再见 更常听到。`}},
  {id:"sal-23",s:"下个礼拜见",t:"下個禮拜見",py:"xià ge lǐbài jiàn",es:"hasta la próxima semana",en:"see you next week",cl:"c2",
   x:{
es:`下 abajo, próximo + 个 clasificador + 礼拜 semana + 见 ver.
礼 rito: 礻 es 示 (un altar de piedra) aplastado. 拜: las dos manos inclinándose.
La semana se contaba por los días de culto. Así cerró Michelle la clase 2.`,
en:`下 below, next + 个 measure word + 礼拜 week + 见 to see.
礼 rite: 礻 is 示 (a stone altar), squeezed. 拜: the two hands bowing.
The week was counted by days of worship. Michelle closed class 2 with this.`,
zh:`下 + 个 + 礼拜 + 见。
礼：礻 是 示（石头祭台）的偏旁写法。拜：两手行礼。
以前用礼拜的日子来算一周。Michelle 老师第二堂课结束时这样说。`}},
  {id:"sal-24",s:"亲",t:"親",py:"qīn",es:"querido/a",en:"dear",cl:"c1",
   x:{
es:`Pariente cercano, querido. En tradicional 親 lleva 見 (ver) a la derecha: los que se ven de cerca.
Así saludan a los clientes en las plataformas de compra chinas.`,
en:`Close relative, dear. In traditional 親 there is 見 (to see) on the right: the people you see up close.
This is how Chinese shopping platforms address customers.`,
zh:`亲近的人。繁体 親 右边是 見：常常近看的人。中国的购物平台这样称呼顾客。`}}
  ]
});
