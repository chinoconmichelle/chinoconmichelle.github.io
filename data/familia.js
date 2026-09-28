/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"familia", glyph:"家",
  name:{"es": "Familia", "en": "Family", "zh": "家人称谓"},
  cl:"c2",
  cards:[
  {id:"fam-01",s:"爸爸",py:"bàba",es:"papá",en:"dad",cl:"c1",
   x:{
es:`父 (arriba) + 巴 (sonido).
父: una mano sosteniendo un hacha o un bastón, el que trabaja y manda.
Se dobla como casi toda palabra familiar; la segunda sílaba va en tono neutro.`,
en:`父 (on top) + 巴 (sound).
父: a hand holding an axe or a stick, the one who works and gives orders.
Doubled like almost every family word; the second syllable is in the neutral tone.`,
zh:`父（拿着斧头或棍子的手）+ 巴（表音）。亲属称谓多重叠，第二个字读轻声。`}},
  {id:"fam-02",s:"妈妈",t:"媽媽",py:"māma",es:"mamá",en:"mom",
   x:{
es:`女 (la mujer arrodillada) + 马 (caballo, solo por el sonido).
Primer tono, plano. No confundir con 骂 mà (retar) ni 吗 ma (partícula).`,
en:`女 (the kneeling woman) + 马 (horse, only for the sound).
1st tone, flat. Don't confuse it with 骂 mà (to scold) or 吗 ma (particle).`,
zh:`女 + 马（表音）。第一声，别和 骂、吗 混淆。`}},
  {id:"fam-03",s:"父亲",t:"父親",py:"fùqīn",es:"padre (formal)",en:"father (formal)",
   x:{
es:`父 (la mano con el hacha) + 亲 pariente cercano.
En tradicional 親 lleva 見 (ver) a la derecha: los que ves de cerca.
Forma escrita o formal; en el día a día se dice 爸爸.`,
en:`父 (the hand with the axe) + 亲 close relative.
In traditional 親 has 見 (to see) on the right: the ones you see up close.
Written or formal; day to day people say 爸爸.`,
zh:`父 + 亲。繁体 親 右边是 見：常近看的人。书面或正式用语，平常说 爸爸。`}},
  {id:"fam-04",s:"母亲",t:"母親",py:"mǔqīn",es:"madre (formal)",en:"mother (formal)",
   x:{
es:`母 (la mujer con dos puntos que son los pechos: la que amamanta) + 亲 pariente.
Forma formal; en el día a día, 妈妈.`,
en:`母 (the woman with two dots, the breasts: the one who nurses) + 亲 relative.
Formal; day to day, 妈妈.`,
zh:`母 + 亲。正式用语，平常说 妈妈。`}},
  {id:"fam-05",s:"爸比",py:"bàbǐ",es:"papi",en:"daddy",cl:"fc",
   x:{
es:`爸 papá + 比 (dos personas de perfil una junto a otra; acá solo por el sonido).
Cariñoso y muy de Taiwán, calcado del inglés «daddy».`,
en:`爸 dad + 比 (two people in profile side by side; here only for the sound).
Affectionate and very Taiwanese, copied from English "daddy".`,
zh:`爸 + 比（表音）。仿照英文 daddy，台湾常用。`}},
  {id:"fam-06",s:"妈咪",t:"媽咪",py:"māmī",es:"mami",en:"mommy",cl:"fc",
   x:{
es:`妈 + 咪 (口 boca + 米 arroz, solo por el sonido). Calcado del inglés «mommy».`,
en:`妈 + 咪 (口 mouth + 米 rice, only for the sound). Copied from English "mommy".`,
zh:`妈 + 咪（表音）。仿照英文 mommy。`}},
  {id:"fam-07",s:"哥哥",py:"gēge",es:"hermano mayor",en:"older brother",
   x:{
es:`可 apilado dos veces, solo por el sonido. 可 = 丁 (un clavo de perfil) + 口 (boca).`,
en:`可 stacked twice, only for the sound. 可 = 丁 (a nail in profile) + 口 (mouth).`,
zh:`两个 可 叠起来，表音。`}},
  {id:"fam-08",s:"姐姐",py:"jiějie",es:"hermana mayor",en:"older sister",
   x:{
es:`女 (mujer) + 且 (sonido; su dibujo sería una tablilla de ancestros apilada).`,
en:`女 (woman) + 且 (sound; its drawing may be a stacked ancestral tablet).`,
zh:`女 + 且（表音）。`}},
  {id:"fam-09",s:"弟弟",py:"dìdi",es:"hermano menor",en:"younger brother",
   x:{
es:`Una cuerda enrollada en orden alrededor de una estaca: de ahí «secuencia» y el hermano que viene después.
El mismo dibujo está en 第, que forma los ordinales: 第一 primero.`,
en:`A cord wound in order around a stake: hence "sequence", and the brother who comes next.
The same drawing is in 第, which forms ordinals: 第一 first.`,
zh:`绳子按顺序缠在木桩上，表示次第，引申为后出生的弟弟。第 也有这个部件。`}},
  {id:"fam-10",s:"妹妹",py:"mèimei",es:"hermana menor",en:"younger sister",
   x:{
es:`女 (mujer) + 未 (todavía no: un árbol 木 con una rama extra, el árbol que aún no terminó de crecer).
La hermana que todavía no creció. El mejor truco para no confundirla con 姐姐.`,
en:`女 (woman) + 未 (not yet: a tree 木 with an extra branch, a tree that hasn't finished growing).
The sister who hasn't grown up yet. The best trick for not mixing her up with 姐姐.`,
zh:`女 + 未（还没长成的树）。还没长大的妹妹，这样就不会和 姐姐 混淆。`}},
  {id:"fam-11",s:"兄弟姐妹",py:"xiōngdì jiěmèi",es:"hermanos (todos)",en:"siblings",cl:"fc",
   x:{
es:`兄 hermano mayor (口 boca sobre 儿 piernas: el que habla por la familia en los ritos) + 弟 + 姐 + 妹.
Los cuatro tipos de hermano juntos: así se dice «hermanos» en general.`,
en:`兄 older brother (口 mouth over 儿 legs: the one who speaks for the family at rites) + 弟 + 姐 + 妹.
All four kinds of sibling together: this is how you say "siblings" in general.`,
zh:`兄（口 在 儿 上：祭祀时代表家人说话的人）+ 弟 + 姐 + 妹。`}},
  {id:"fam-12",s:"儿子",t:"兒子",py:"érzi",es:"hijo",en:"son",
   x:{
es:`儿: un chico con la cabeza y las piernas marcadas. En tradicional 兒 la cabeza es grande y abierta: la fontanela del bebé.
子: el bebé envuelto.`,
en:`儿: a boy with the head and legs marked. In traditional 兒 the head is large and open: the baby's soft spot.
子: the swaddled baby.`,
zh:`儿：画出头和腿的孩子；繁体 兒 的头是张开的囟门。子：襁褓里的婴儿。`}},
  {id:"fam-13",s:"女儿",t:"女兒",py:"nǚ'ér",es:"hija",en:"daughter",
   x:{
es:`女 mujer + 儿 niño.`,
en:`女 woman + 儿 child.`,
zh:`女 + 儿。`}},
  {id:"fam-14",s:"爷爷",t:"爺爺",py:"yéye",es:"abuelo (paterno)",en:"grandfather (father's side)",
   x:{
es:`父 (padre, la mano con el hacha) arriba + 耶 (sonido) abajo, en tradicional 爺.
Papá del papá.`,
en:`父 (father, the hand with the axe) on top + 耶 (sound) below, in traditional 爺.
Dad's dad.`,
zh:`父 + 耶（表音），繁体 爺。爸爸的爸爸。`}},
  {id:"fam-15",s:"奶奶",py:"nǎinai",es:"abuela (paterna)",en:"grandmother (father's side)",
   x:{
es:`奶 leche: 女 (mujer) + 乃 (el trazo curvo del pecho). La que amamantó.
Mamá del papá. Dos terceros tonos: nǎinai.`,
en:`奶 milk: 女 (woman) + 乃 (the curved stroke of the breast). The one who nursed.
Dad's mom. Two 3rd tones: nǎinai.`,
zh:`奶：女 + 乃。爸爸的妈妈。`}},
  {id:"fam-16",s:"外公",py:"wàigōng",es:"abuelo (materno)",en:"grandfather (mother's side)",cl:"fc",
   x:{
es:`外 afuera + 公 (señor mayor).
外: 夕 (la luna del atardecer) + 卜 (la grieta de una adivinación). Adivinar de noche, fuera de la regla: «afuera».
La familia tradicional china es paterna: los parientes de la mamá son los «de afuera». Por eso sus abuelos llevan 外.`,
en:`外 outside + 公 (elder gentleman).
外: 夕 (the evening moon) + 卜 (the crack of a divination). Divining at night, outside the rule: "outside".
The traditional Chinese family is traced through the father: the mother's relatives are the "outside" ones. That's why her grandparents carry 外.`,
zh:`外 + 公。外：夕 + 卜（占卜的裂纹），晚上占卜不合常规。传统家族以父系为主，妈妈那边的亲戚是"外"家。`}},
  {id:"fam-17",s:"外婆",py:"wàipó",es:"abuela (materna)",en:"grandmother (mother's side)",cl:"fc",
   x:{
es:`外 afuera + 婆 señora mayor (女 mujer + 波 ola, por el sonido).
La abuela «de afuera»: mamá de la mamá.`,
en:`外 outside + 婆 elder lady (女 woman + 波 wave, for the sound).
The "outside" grandmother: mom's mom.`,
zh:`外 + 婆（女 + 波 表音）。妈妈的妈妈。`}},
  {id:"fam-18",s:"伯伯",py:"bóbo",es:"tío (hermano mayor del papá)",en:"uncle (father's older brother)",
   x:{
es:`亻 (persona) + 白 (sonido). 伯 es «el mayor de los hermanos».
El chino distingue lado paterno o materno, y mayor o menor que el padre: por eso hay tantas palabras donde el español tiene solo «tío».`,
en:`亻 (person) + 白 (sound). 伯 means "the eldest of the brothers".
Chinese distinguishes father's or mother's side, and older or younger than the father: that's why there are so many words where English has only "uncle".`,
zh:`亻 + 白（表音），伯 是兄弟中最大的。中文区分父系母系、比爸爸大或小。`}},
  {id:"fam-19",s:"伯父",py:"bófù",es:"tío (hermano mayor del papá), formal",en:"uncle (father's older brother), formal",
   x:{
es:`伯 el mayor + 父 padre. Versión formal de 伯伯.`,
en:`伯 the eldest + 父 father. Formal version of 伯伯.`,
zh:`伯 + 父，伯伯 的正式说法。`}},
  {id:"fam-20",s:"伯母",py:"bómǔ",es:"tía (esposa del hermano mayor del papá)",en:"aunt (wife of father's older brother)",
   x:{
es:`伯 + 母 madre. La esposa del 伯伯.`,
en:`伯 + 母 mother. 伯伯's wife.`,
zh:`伯 + 母，伯伯 的太太。`}},
  {id:"fam-21",s:"叔叔",py:"shūshu",es:"tío (hermano menor del papá)",en:"uncle (father's younger brother)",
   x:{
es:`叔: 尗 (una planta de poroto, por el sonido) + 又 (la mano derecha).
También se usa para cualquier señor adulto, como «tío» cuando un chico le habla a un amigo de sus papás.`,
en:`叔: 尗 (a bean plant, for the sound) + 又 (the right hand).
Also used for any adult man, like a child calling a parent's friend "uncle".`,
zh:`叔：尗（豆子，表音）+ 又。也用来称呼一般的成年男子。`}},
  {id:"fam-22",s:"婶婶",t:"嬸嬸",py:"shěnshen",es:"tía (esposa del hermano menor del papá)",en:"aunt (wife of father's younger brother)",
   x:{
es:`女 (mujer) + 审 (sonido; en tradicional 審). La esposa del 叔叔.`,
en:`女 (woman) + 审 (sound; traditional 審). 叔叔's wife.`,
zh:`女 + 审（表音，繁体 審）。叔叔 的太太。`}},
  {id:"fam-23",s:"姑姑",py:"gūgu",es:"tía (hermana del papá)",en:"aunt (father's sister)",
   x:{
es:`女 (mujer) + 古 (antiguo, por el sonido: 十 sobre 口).`,
en:`女 (woman) + 古 (ancient, for the sound: 十 over 口).`,
zh:`女 + 古（表音）。`}},
  {id:"fam-24",s:"姑妈",t:"姑媽",py:"gūmā",es:"tía (hermana mayor del papá)",en:"aunt (father's older sister)",
   x:{
es:`姑 + 妈. Según el apunte de Michelle, la hermana mayor del papá; en China continental muchas veces se usa para cualquier hermana del papá.`,
en:`姑 + 妈. According to Michelle's handout, dad's older sister; in mainland China it's often used for any of dad's sisters.`,
zh:`姑 + 妈。Michelle 老师的讲义说是爸爸的姐姐；大陆常用来称呼爸爸的任何姐妹。`}},
  {id:"fam-25",s:"姑丈",py:"gūzhàng",es:"tío (esposo de la tía paterna)",en:"uncle (husband of father's sister)",
   x:{
es:`姑 (la tía paterna) + 丈, que es una mano sosteniendo una vara de medir: la medida de un hombre adulto, y de ahí «marido».`,
en:`姑 (paternal aunt) + 丈, a hand holding a measuring rod: the measure of a grown man, hence "husband".`,
zh:`姑 + 丈（手拿量尺，成年男子，引申为丈夫）。`}},
  {id:"fam-26",s:"舅父",py:"jiùfù",es:"tío (hermano de la mamá)",en:"uncle (mother's brother)",cl:"fc",
   x:{
es:`舅: 臼 (un mortero, por el sonido) sobre 男 (hombre: campo + fuerza) + 父 padre.
En el habla se dice más 舅舅.`,
en:`舅: 臼 (a mortar, for the sound) over 男 (man: field + strength) + 父 father.
In speech people say 舅舅 more often.`,
zh:`舅：臼（表音）在 男 上 + 父。口语多说 舅舅。`}},
  {id:"fam-27",s:"舅母",py:"jiùmǔ",es:"tía (esposa del hermano de la mamá)",en:"aunt (wife of mother's brother)",cl:"fc",
   x:{
es:`舅 + 母. La esposa del 舅父.`,
en:`舅 + 母. 舅父's wife.`,
zh:`舅 + 母，舅父 的太太。`}},
  {id:"fam-28",s:"姨妈",t:"姨媽",py:"yímā",es:"tía (hermana mayor de la mamá)",en:"aunt (mother's older sister)",cl:"fc",
   x:{
es:`姨: 女 (mujer) + 夷 (sonido). + 妈.
La tía del lado materno. En el habla también 阿姨, que además se usa para cualquier señora.`,
en:`姨: 女 (woman) + 夷 (sound). + 妈.
The maternal aunt. In speech also 阿姨, which is also used for any older woman.`,
zh:`姨（女 + 夷 表音）+ 妈。妈妈那边的阿姨；阿姨 也用来称呼一般的女性长辈。`}},
  {id:"fam-29",s:"姨丈",py:"yízhàng",es:"tío (esposo de la tía materna)",en:"uncle (husband of mother's sister)",cl:"fc",
   x:{
es:`姨 (la tía materna) + 丈 (marido: la mano con la vara de medir).`,
en:`姨 (maternal aunt) + 丈 (husband: the hand with the measuring rod).`,
zh:`姨 + 丈。`}}
  ]
});
