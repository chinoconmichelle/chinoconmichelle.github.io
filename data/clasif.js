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
es:`LA REGLA (clase 3): en chino un número nunca va pegado al sustantivo. Siempre hay una palabra en el medio, el clasificador.
一个老师 = uno + clasificador + profesor · 两只猫 = dos + clasificador + gato · 一条鱼 = uno + clasificador + pez.
Decir 一老师 o 两猫 está mal, igual que en español está mal decir «un agua» cuando querés decir «una botella de agua».

¿POR QUÉ? El clasificador dice qué TIPO de cosa estás contando: 个 personas y objetos en general, 只 animales, 条 cosas largas y finas, 位 personas con respeto. Michelle: «para todo sustantivo tiene que ir con un clasificador».
En español tenemos algo parecido pero opcional: «una cabeza de ganado», «una hoja de papel», «un par de zapatos». En chino es obligatorio siempre que hay un número o 这 / 那 delante.

EL TRUCO PARA EMPEZAR: si no sabés cuál usar, usá 个. Es el comodín. Los chicos en Taiwán también empiezan así y los padres los corrigen de a poco.

LOS CARACTERES:
量 medir: 日 (sol) arriba de 里 (la aldea con sus campos): medir la tierra.
词 palabra: 讠 (el radical del habla, una boca con líneas de sonido) + 司 (sonido).
量词 = «palabra de medida». En inglés se llaman measure words.
数 número y 名词 sustantivo (名 nombre + 词 palabra = «palabra-nombre»).`,
en:`THE RULE (class 3): in Chinese a number never attaches directly to a noun. There's always a word in between, the measure word.
一个老师 = one + measure word + teacher · 两只猫 = two + measure word + cat · 一条鱼 = one + measure word + fish.
Saying 一老师 or 两猫 is wrong, just as "a water" is wrong in English when you mean "a bottle of water".

WHY? The measure word tells you what KIND of thing you're counting: 个 people and things in general, 只 animals, 条 long thin things, 位 people, respectfully. Michelle: "every noun has to go with a measure word".
English has something similar but optional: "a head of cattle", "a sheet of paper", "a pair of shoes". In Chinese it's required whenever there's a number or 这 / 那 in front.

THE STARTER TRICK: if you don't know which one to use, use 个. It's the wildcard. Children in Taiwan start the same way and parents correct them bit by bit.

THE CHARACTERS:
量 to measure: 日 (sun) over 里 (the village with its fields): measuring land.
词 word: 讠 (the speech radical, a mouth with lines of sound) + 司 (sound).
量词 = "measure word".
数 number and 名词 noun (名 name + 词 word = "name-word").`,
zh:`规则（第三课）：中文里数字不能直接放在名词前面，中间一定要有量词。
一个老师、两只猫、一条鱼。说"一老师""两猫"是错的。

为什么？量词告诉你数的是哪一类东西：个 用于人和一般的东西，只 用于动物，条 用于细长的东西，位 用于人（尊敬）。Michelle 老师：每个名词都要配一个量词。

入门技巧：不知道用哪个，就用 个。台湾的小孩也是这样开始，父母再慢慢纠正。

字的结构：
量：日 在 里（有田地的村子）上面，测量土地。
词：讠（说话）+ 司（表音）。
名词：名 + 词，"名字的词"。`}},
  {id:"cla-02",s:"个",t:"個",py:"gè",es:"clasificador general (personas y objetos)",en:"general measure word (people, things)",
   x:{
es:`QUÉ ES: el clasificador más común de todos. Sirve para personas (一个老师, 一个学生) y para la mayoría de los objetos (一个苹果). Michelle: «generalmente para personas y objetos».
Si no sabés qué clasificador lleva una palabra, usá 个: casi siempre te van a entender.

EL CARÁCTER:
Viene de 箇: 竹 (bambú, dibujado como dos tallos con sus hojas) + 固 (solo por el sonido). Una caña de bambú contada de a una: la unidad más simple.
El simplificado 个 parece un solo tallo con dos hojas.
El tradicional 個 cambió el bambú por 亻 (persona): por eso se asocia tanto con gente.

PRONUNCIACIÓN: gè, cuarto tono, pero después de un número suele sonar suave, en tono neutro: 一个 yí ge.
Ojo con el 一: antes de 个 se dice yí (segundo tono), porque 个 es originalmente cuarto tono y 一 cambia antes de un cuarto tono.

COMPARÁ: 个 es neutro; 位 es la versión respetuosa para personas (一位老师). Con animales no se usa 个 sino 只.`,
en:`WHAT IT IS: the most common measure word of all. Used for people (一个老师, 一个学生) and most objects (一个苹果). Michelle: "generally for people and objects".
If you don't know which measure word a noun takes, use 个: you'll almost always be understood.

THE CHARACTER:
From 箇: 竹 (bamboo, drawn as two stalks with leaves) + 固 (sound only). A bamboo cane counted one by one: the simplest unit.
The simplified 个 looks like a single stalk with two leaves.
The traditional 個 swapped the bamboo for 亻 (person), which is why it's so tied to people.

PRONUNCIATION: gè, 4th tone, but after a number it usually goes soft, neutral tone: 一个 yí ge.
Watch the 一: before 个 it's yí (2nd tone), because 个 is originally a 4th tone and 一 changes before a 4th tone.

COMPARE: 个 is neutral; 位 is the respectful version for people (一位老师). Animals don't take 个 but 只.`,
zh:`是什么：最常用的量词，用于人（一个老师、一个学生）和大部分东西（一个苹果）。不知道用什么量词时，用 个 大家基本都听得懂。

字形：来自 箇，竹（两根带叶的竹子）+ 固（表音），一根一根数的竹竿。简体 个 像一根带两片叶子的竹枝；繁体 個 把竹换成 亻，所以常和人联系在一起。

发音：gè，在数字后面常读轻声：一个 yí ge。一 在 个 前面读第二声 yí。

比较：个 是中性的；位 是对人的尊称（一位老师）；动物用 只，不用 个。`}},
  {id:"cla-03",s:"只",t:"隻",py:"zhī",es:"clasificador de animales",en:"measure word for animals",
   x:{
es:`QUÉ ES: el clasificador para la mayoría de los animales: terrestres, marinos y aves. 一只狗 un perro, 一只猫 un gato, 一只鸟 un pájaro. Michelle: «para la mayoría, terrestres, marinos, aves».
Si el animal es largo y fino (una víbora, un pez) se usa 条 en su lugar.

EL CARÁCTER, mejor en tradicional:
隻 = 隹 arriba + 又 abajo.
隹: un pájaro de cola corta dibujado de perfil (la cabeza, el ala con sus plumas, las patas).
又: la mano derecha, dibujada con tres dedos.
Un solo pájaro en la mano: de ahí «uno solo, individual», y de ahí contar animales de a uno.
(Con dos pájaros en la mano sale 雙 / 双, «par».)

EL SIMPLIFICADO 只 es en realidad otro carácter, zhǐ «solamente», que se tomó prestado porque suena casi igual: 口 (boca) con dos trazos debajo, el aliento que sale. Por eso en simplificado no se ve el pájaro.

PRONUNCIACIÓN: zhī, primer tono, plano, con la lengua curvada hacia atrás (zh). Antes de 只, 一 se dice yì: 一只 yì zhī.`,
en:`WHAT IT IS: the measure word for most animals: land, sea and birds. 一只狗 a dog, 一只猫 a cat, 一只鸟 a bird. Michelle: "for most of them, land, sea, birds".
If the animal is long and thin (a snake, a fish) you use 条 instead.

THE CHARACTER, clearest in traditional:
隻 = 隹 on top + 又 below.
隹: a short-tailed bird in profile (head, feathered wing, legs).
又: the right hand, drawn with three fingers.
A single bird in the hand: hence "one single, individual", and hence counting animals one by one.
(Two birds in the hand give 雙 / 双, "pair".)

THE SIMPLIFIED 只 is actually another character, zhǐ "only", borrowed because it sounds almost the same: 口 (mouth) with two strokes underneath, breath coming out. That's why the bird isn't visible in simplified.

PRONUNCIATION: zhī, 1st tone, flat, tongue curled back (zh). Before 只, 一 is said yì: 一只 yì zhī.`,
zh:`是什么：大部分动物的量词：陆地的、水里的、天上飞的。一只狗、一只猫、一只鸟。细长的动物（蛇、鱼）用 条。

字形（看繁体最清楚）：隻 = 隹（侧面的短尾鸟）+ 又（右手）。手里抓着一只鸟，所以表示"单个"，用来一个一个地数动物。手里两只鸟就是 雙 / 双。

简体 只 其实借用了读音相近的 只 zhǐ（口 下面两笔，出气），所以简体看不到鸟。

发音：zhī，第一声，卷舌音。一只 读 yì zhī。`}},
  {id:"cla-04",s:"条",t:"條",py:"tiáo",es:"clasificador de cosas alargadas",en:"measure word for long, thin things",
   x:{
es:`QUÉ ES: el clasificador para todo lo largo y fino. Michelle lo explicó con ejemplos:
一条蛇 una víbora · 一条鱼 un pez (los peces tienen forma alargada) · 一条围巾 una bufanda. También calles, ríos y pantalones.

EL CARÁCTER, en tradicional 條:
攸 (solo por el sonido) con 木 (árbol) abajo a la derecha.
El sentido original es «una rama larga y delgada». De ahí «algo alargado», y de ahí contar cosas largas.
El simplificado 条 conserva el 木 abajo: 夂 arriba (un pie) + 木.

LA PARTE DIVERTIDA: el perro acepta los dos. 一只狗 (como animal) o 一条狗 (como algo largo; Michelle bromeó con el perro salchicha). Pero el gato NO: 一条猫 está mal, siempre 一只猫. La regla no es 100 % lógica, hay que acordarse palabra por palabra.

PRONUNCIACIÓN: tiáo, segundo tono (sube). t con aire. Antes de 条, 一 se dice yì: 一条 yì tiáo.`,
en:`WHAT IT IS: the measure word for anything long and thin. Michelle gave examples:
一条蛇 a snake · 一条鱼 a fish (fish are elongated) · 一条围巾 a scarf. Also streets, rivers and trousers.

THE CHARACTER, traditional 條:
攸 (sound only) with 木 (tree) at the bottom right.
The original sense is "a long thin branch". Hence "something elongated", and hence counting long things.
The simplified 条 keeps the 木 at the bottom: 夂 on top (a foot) + 木.

THE FUN PART: a dog accepts both. 一只狗 (as an animal) or 一条狗 (as something long; Michelle joked about the sausage dog). But a cat does NOT: 一条猫 is wrong, always 一只猫. The rule isn't 100 % logical; you have to remember it word by word.

PRONUNCIATION: tiáo, 2nd tone (rising). Aspirated t. Before 条, 一 is said yì: 一条 yì tiáo.`,
zh:`是什么：细长东西的量词。一条蛇、一条鱼（鱼是长形的）、一条围巾，也用于路、河、裤子。

字形：繁体 條 = 攸（表音）+ 右下的 木，本义是细长的树枝，引申为长条形。简体 条 = 夂 + 木。

有趣的地方：狗可以说 一只狗 也可以说 一条狗；猫只能说 一只猫，不能说 一条猫。这要一个一个记。

发音：tiáo，第二声，送气音。一条 读 yì tiáo。`}},
  {id:"cla-05",s:"位",py:"wèi",es:"clasificador formal para personas",en:"polite measure word for people",
   x:{
es:`QUÉ ES: el clasificador para personas cuando querés mostrar respeto. Michelle: «para personas, formal». Se oye mucho en las noticias y en la atención al público.
一位老师 un profesor · 这位先生 este señor · 三位客人 tres invitados.
Con 个 también es correcto (一个老师), pero suena más neutro, más de todos los días.

EL CARÁCTER:
亻 (una persona caminando de costado, la forma aplastada de 人) + 立 (una persona de pie sobre una línea de suelo: los brazos abiertos arriba, la línea abajo).
Una persona parada en SU lugar: «posición, puesto, asiento». Por eso 位 también significa «lugar» en 座位 (asiento).
Contar a alguien con 位 es como reconocerle su lugar: de ahí el respeto.

EJEMPLO DE CLASE: 他是一位老师 él es un profesor. Se usa 位 porque es un profesor.

PRONUNCIACIÓN: wèi, cuarto tono (cae). Antes de 位, 一 se dice yí: 一位 yí wèi.`,
en:`WHAT IT IS: the measure word for people when you want to show respect. Michelle: "for people, formal". You hear it a lot in the news and in customer service.
一位老师 a teacher · 这位先生 this gentleman · 三位客人 three guests.
个 is also correct (一个老师), but it sounds more neutral and everyday.

THE CHARACTER:
亻 (a person walking, side view, the squeezed form of 人) + 立 (a person standing on a ground line: arms spread on top, the line below).
A person standing in THEIR place: "position, post, seat". That's why 位 also means "place" in 座位 (seat).
Counting someone with 位 is like acknowledging their place: hence the respect.

CLASS EXAMPLE: 他是一位老师 he is a teacher. 位 because he's a teacher.

PRONUNCIATION: wèi, 4th tone (falling). Before 位, 一 is said yí: 一位 yí wèi.`,
zh:`是什么：表示尊敬的人的量词，新闻和服务场合常用：一位老师、这位先生、三位客人。用 个 也对，但比较普通。

字形：亻 + 立（站在地面上的人）。站在自己位置上的人，所以有"位置、座位"的意思。用 位 来数人，就是尊重他的位置。

课上的例子：他是一位老师。

发音：wèi，第四声。一位 读 yí wèi。`}},
  {id:"cla-06",s:"这",t:"這",py:"zhè",es:"este / esta",en:"this",
   x:{
es:`QUÉ ES: «este / esta», para algo cercano. Como this en inglés.

EL PUNTO CLAVE DE LA CLASE: en chino NO existe el artículo «el / la / los / las» (the). Michelle: «en chino no existe el, o la, o the».
Entonces, cuando en español decís «EL gato», en chino decís «ESTE gato»: 这只猫.
La estructura es siempre: 这 + clasificador + sustantivo. El clasificador no se puede sacar: 这猫 está mal, 这只猫 está bien.

EL CARÁCTER:
辶 (el radical de «ir, caminar»: un pie que avanza por un camino; envuelve al carácter por abajo) + 文.
En tradicional 這 lleva 言 (hablar: una boca con líneas de sonido) en lugar de 文: señalar mientras hablás, «esto de acá».

PRONUNCIACIÓN: zhè, cuarto tono, con la lengua curvada hacia atrás. Muchas veces se oye zhèi antes del clasificador (这个 zhèige), sobre todo en el norte de China.

PAREJA: 那 nà «ese». El chino, como el inglés, solo tiene dos distancias: no hay «aquel».`,
en:`WHAT IT IS: "this", for something close.

THE KEY POINT FROM CLASS: Chinese has NO article "the". Michelle: "in Chinese there's no el, la, or the".
So where English says "THE cat", Chinese says "THIS cat": 这只猫.
The structure is always: 这 + measure word + noun. The measure word can't be dropped: 这猫 is wrong, 这只猫 is right.

THE CHARACTER:
辶 (the radical for "go, walk": a foot moving along a road; it wraps the character from below) + 文.
In traditional 這 it has 言 (speech: a mouth with lines of sound) instead of 文: pointing while you talk, "this one here".

PRONUNCIATION: zhè, 4th tone, tongue curled back. You often hear zhèi before a measure word (这个 zhèige), especially in northern China.

ITS PAIR: 那 nà "that". Chinese, like English, has only two distances.`,
zh:`是什么："这"，指近的东西。

课上的重点：中文没有定冠词（西班牙语的 el / la，英文的 the）。所以西班牙语说"el gato"，中文说"这只猫"。结构是：这 + 量词 + 名词，量词不能省，不能说"这猫"。

字形：辶（走路的部首）+ 文。繁体 這 用 言：一边说话一边指。

发音：zhè，第四声，卷舌。在量词前常读 zhèi（这个 zhèige）。

对应：那 nà，中文和英文一样只有"这""那"两种距离。`}},
  {id:"cla-07",s:"那",py:"nà",es:"ese / esa",en:"that",
   x:{
es:`QUÉ ES: «ese / esa», para algo que está más lejos. Como that en inglés.

CÓMO SE USA: igual que 这, siempre con clasificador: 那 + clasificador + sustantivo.
那只猫 ese gato · 那个老师 ese profesor.
Michelle: el chino, como el inglés, solo tiene this y that. No existe «aquel»: todo lo que no es «este» es 那.

EL CARÁCTER:
Originalmente era el nombre de un lugar, y se tomó prestado solo por el sonido.
El 阝 de la derecha es una forma de 邑, «pueblo, ciudad»: por eso aparece en nombres de lugares.
No tiene una historia visual que ayude: mejor aprenderlo como pareja de 这.

PRONUNCIACIÓN: nà, cuarto tono. Antes del clasificador también se oye nèi (那个 nèige).

OJO: con otro tono, 哪 nǎ (tercer tono, con 口 boca) significa «¿cuál?». 那个 ese / 哪个 ¿cuál?`,
en:`WHAT IT IS: "that", for something further away.

HOW IT'S USED: like 这, always with a measure word: 那 + measure word + noun.
那只猫 that cat · 那个老师 that teacher.
Michelle: Chinese, like English, only has this and that.

THE CHARACTER:
Originally the name of a place, borrowed only for its sound.
The 阝 on the right is a form of 邑, "town, city", which is why it shows up in place names.
It has no helpful visual story: better to learn it as 这's partner.

PRONUNCIATION: nà, 4th tone. Before a measure word you also hear nèi (那个 nèige).

CAREFUL: with another tone, 哪 nǎ (3rd tone, with 口 mouth) means "which?". 那个 that one / 哪个 which one?`,
zh:`是什么："那"，指远一点的东西。用法和 这 一样：那 + 量词 + 名词，那只猫、那个老师。中文只有"这""那"，没有第三种距离。

字形：本来是地名，只借读音。右边的 阝 是 邑（城镇），常出现在地名里。

发音：nà，第四声；量词前也读 nèi。注意：哪 nǎ（第三声，有 口）是"哪一个"。`}},
  {id:"cla-08",s:"些",py:"xiē",es:"algunos (marca de plural)",en:"some (plural marker)",
   x:{
es:`QUÉ ES: la palabra que se usa para el plural cuando contás o señalás. Significa «algunos, unos cuantos».

LA REGLA (clase 3): en plural, 些 REEMPLAZA al clasificador. Da igual qué sustantivo sea: gatos, profesores, manzanas, todo lleva 些.
Singular: 一只猫 · 这只猫 · 那个老师
Plural:   一些猫 · 这些猫 · 那些老师
Michelle: «en plural es todo con 些, olvidate de los clasificadores».
Error típico: 这些只猫. Está mal, porque 些 ya ocupa el lugar de 只.

EL CARÁCTER:
此 arriba + 二 abajo.
此 «esto, aquí»: 止 (la huella de un pie: dedos arriba, talón abajo) + 匕. El pie parado en este lugar.
二 dos: dos rayas.
«Estos pocos de acá», una cantidad chica: de ahí «algunos».

PRONUNCIACIÓN: xiē, primer tono. La x con la lengua plana adelante (no es sh).`,
en:`WHAT IT IS: the word used for the plural when you count or point. It means "some, a few".

THE RULE (class 3): in the plural, 些 REPLACES the measure word. Whatever the noun: cats, teachers, apples, they all take 些.
Singular: 一只猫 · 这只猫 · 那个老师
Plural:   一些猫 · 这些猫 · 那些老师
Michelle: "in the plural it's all with 些, forget the measure words".
Typical mistake: 这些只猫. It's wrong, because 些 already takes the place of 只.

THE CHARACTER:
此 on top + 二 below.
此 "this, here": 止 (a footprint: toes on top, heel below) + 匕. The foot standing in this spot.
二 two: two strokes.
"These few here", a small amount: hence "some".

PRONUNCIATION: xiē, 1st tone. x with the tongue flat and forward (not sh).`,
zh:`是什么：表示复数的词，意思是"一些"。

规则（第三课）：复数时 些 代替量词，不管什么名词都一样：
单数：一只猫、这只猫、那个老师
复数：一些猫、这些猫、那些老师
常见错误：说"这些只猫"，是错的，因为 些 已经占了 只 的位置。

字形：此（止 脚印 + 匕，脚停在这里）+ 二，"这里的几个"，表示少量。

发音：xiē，第一声，舌面音，不是 sh。`}},
  {id:"cla-09",s:"一些",py:"yìxiē",es:"unos / unas",en:"some (a / an in the plural)",
   x:{
es:`QUÉ ES: el equivalente de «unos / unas» en español. El artículo indefinido en plural.

CÓMO SE ARMA:
一 (uno) + 些 (algunos) + sustantivo. SIN clasificador.
一些猫 unos gatos · 一些老师 unos profesores · 一些苹果 unas manzanas.

EL CUADRO DE MICHELLE (artículos):
                indefinido           definido
singular    一 + clasif (un gato)    这 / 那 + clasif (el gato)
plural      一些 (unos gatos)         这些 / 那些 (los gatos)
一些 es la esquina de abajo a la izquierda.

POR QUÉ 一: literalmente «un algunos», «una pequeña cantidad». Igual que en español decimos «un par».

PRONUNCIACIÓN: yìxiē. El 一 se dice yì (cuarto tono) porque 些 es primer tono: 一 cambia a cuarto tono antes de los tonos 1, 2 y 3.`,
en:`WHAT IT IS: the equivalent of "some" before a plural noun, the plural of "a / an".

HOW IT'S BUILT:
一 (one) + 些 (some) + noun. NO measure word.
一些猫 some cats · 一些老师 some teachers · 一些苹果 some apples.

MICHELLE'S TABLE (articles):
             indefinite                 definite
singular     一 + measure (a cat)       这 / 那 + measure (the cat)
plural       一些 (some cats)            这些 / 那些 (the cats)
一些 is the bottom-left corner.

WHY 一: literally "one some", "a small amount". Like "a few" in English.

PRONUNCIATION: yìxiē. 一 is said yì (4th tone) because 些 is a 1st tone: 一 becomes 4th tone before tones 1, 2 and 3.`,
zh:`是什么：复数的不定冠词，相当于西班牙语的 unos / unas。

结构：一 + 些 + 名词，不用量词。一些猫、一些老师、一些苹果。

Michelle 老师的表：
不定　单数：一 + 量词（一只猫）　复数：一些（一些猫）
确定　单数：这/那 + 量词（这只猫）　复数：这些/那些（这些猫）

发音：yìxiē。些 是第一声，所以 一 读第四声。`}},
  {id:"cla-10",s:"这些",t:"這些",py:"zhèxiē",es:"estos / los",en:"these / the (plural)",
   x:{
es:`QUÉ ES: «estos / estas», y también la forma de decir «los / las» en plural.

POR QUÉ «LOS»: como el chino no tiene artículo definido, para decir «LOS gatos» se dice «ESTOS gatos»: 这些猫. Es lo mismo que pasa en singular con 这只猫 = «el gato».

CÓMO SE ARMA:
这 (este) + 些 (plural) + sustantivo.
这些猫 los gatos, estos gatos · 这些老师 los profesores.
SIN clasificador: 些 ya ocupa su lugar. 这些只猫 está mal.

COMPARACIÓN RÁPIDA:
这只猫  el gato / este gato   (singular: 这 + 只)
这些猫  los gatos / estos gatos   (plural: 这 + 些)

LOS CARACTERES:
这: 辶 (un pie avanzando por un camino) + 文; en tradicional 這 lleva 言, hablar: señalar mientras se habla.
些: 此 (la huella de un pie parada «acá») sobre 二: una cantidad chica.

PRONUNCIACIÓN: zhèxiē. zh con la lengua curvada hacia atrás; x con la lengua plana adelante. Es un buen ejercicio de contraste.`,
en:`WHAT IT IS: "these", and also the way to say "the" in the plural.

WHY "THE": since Chinese has no definite article, to say "THE cats" you say "THESE cats": 这些猫. It's what happens in the singular too, with 这只猫 = "the cat".

HOW IT'S BUILT:
这 (this) + 些 (plural) + noun.
这些猫 the cats, these cats · 这些老师 the teachers.
NO measure word: 些 already takes its place. 这些只猫 is wrong.

QUICK COMPARISON:
这只猫  the cat / this cat   (singular: 这 + 只)
这些猫  the cats / these cats   (plural: 这 + 些)

THE CHARACTERS:
这: 辶 (a foot moving along a road) + 文; traditional 這 has 言, speech: pointing while talking.
些: 此 (a footprint standing "here") over 二: a small amount.

PRONUNCIATION: zhèxiē. zh with the tongue curled back; x with the tongue flat and forward. A good contrast drill.`,
zh:`是什么："这些"，也是复数的"the"。

为什么：中文没有定冠词，所以"the cats"说成"这些猫"，和单数"这只猫"一样。

结构：这 + 些 + 名词，不用量词，不能说"这些只猫"。
这只猫（单数：这 + 只）
这些猫（复数：这 + 些）

发音：zhèxiē。zh 卷舌，x 舌面，是很好的对比练习。`}},
  {id:"cla-11",s:"那些",py:"nàxiē",es:"esos / esas",en:"those",
   x:{
es:`QUÉ ES: «esos / esas», el plural de 那.

CÓMO SE ARMA:
那 (ese) + 些 (plural) + sustantivo. SIN clasificador.
那些老师 esos profesores · 那些猫 esos gatos.

LA MISMA LÓGICA QUE 这些:
singular: 那个老师 ese profesor (那 + 个)
plural:   那些老师 esos profesores (那 + 些)
El 些 reemplaza al clasificador. 那些个老师 está mal.

LOS CARACTERES:
那: prestado por el sonido; el 阝 de la derecha es «pueblo», de cuando era nombre de lugar.
些: 此 (un pie parado acá) sobre 二: unos pocos.

PRONUNCIACIÓN: nàxiē. También se oye nèixiē.`,
en:`WHAT IT IS: "those", the plural of 那.

HOW IT'S BUILT:
那 (that) + 些 (plural) + noun. NO measure word.
那些老师 those teachers · 那些猫 those cats.

SAME LOGIC AS 这些:
singular: 那个老师 that teacher (那 + 个)
plural:   那些老师 those teachers (那 + 些)
些 replaces the measure word. 那些个老师 is wrong.

THE CHARACTERS:
那: borrowed for its sound; the 阝 on the right means "town", from when it was a place name.
些: 此 (a foot standing here) over 二: a few.

PRONUNCIATION: nàxiē. You also hear nèixiē.`,
zh:`是什么："那些"，那 的复数。结构：那 + 些 + 名词，不用量词：那些老师、那些猫。
单数：那个老师；复数：那些老师。
发音：nàxiē，也读 nèixiē。`}},
  {id:"cla-12",s:"一只猫",t:"一隻貓",py:"yì zhī māo",es:"un gato",en:"a cat",
   x:{
es:`QUÉ ES: «un gato». Así se dice el artículo «un / una» en chino: con el número 一 más el clasificador.

LAS TRES PIEZAS:
一 uno: una varilla de contar.
只 clasificador de animales. En tradicional 隻: un pájaro 隹 en la mano 又, «uno solo».
猫 gato: 犭 (animal de cuatro patas) + 苗 miáo, que está por el sonido (¡el maullido!).

POR QUÉ 只 Y NO 个: el gato es un animal, y los animales llevan 只. Michelle: para gato NO se puede usar 条 (ese es para cosas largas), solo 只.

EL CUADRO DE ARTÍCULOS:
un gato: 一只猫 · unos gatos: 一些猫 · el gato: 这只猫 · los gatos: 这些猫

PRONUNCIACIÓN: yì zhī māo. El 一 se dice yì (cuarto tono) porque 只 es primer tono. Después 只 y 猫 son los dos primer tono: planos y altos, como la bocina.

EN CLASE: 我有一只猫 tengo un gato (Oliver).`,
en:`WHAT IT IS: "a cat". This is how Chinese says "a / an": the number 一 plus the measure word.

THE THREE PIECES:
一 one: a counting rod.
只 measure word for animals. Traditional 隻: a bird 隹 in the hand 又, "a single one".
猫 cat: 犭 (four-legged animal) + 苗 miáo, there for the sound (the miaow!).

WHY 只 AND NOT 个: a cat is an animal, and animals take 只. Michelle: for a cat you can NOT use 条 (that's for long things), only 只.

THE ARTICLES TABLE:
a cat: 一只猫 · some cats: 一些猫 · the cat: 这只猫 · the cats: 这些猫

PRONUNCIATION: yì zhī māo. 一 is yì (4th tone) because 只 is a 1st tone. Then 只 and 猫 are both 1st tone: flat and high, like a car horn.

IN CLASS: 我有一只猫 I have a cat (Oliver).`,
zh:`是什么："一只猫"，中文用 一 + 量词 表示不定冠词。

三部分：一；只（动物的量词，繁体 隻：手里一只鸟）；猫（犭 + 苗 表音，miáo 正好是猫叫）。

为什么用 只：猫是动物；猫不能用 条。

发音：yì zhī māo，只 是第一声，所以 一 读 yì。
课上：我有一只猫（Oliver）。`}},
  {id:"cla-13",s:"一些猫",t:"一些貓",py:"yìxiē māo",es:"unos gatos",en:"some cats",
   x:{
es:`QUÉ ES: «unos gatos», el plural de 一只猫.

QUÉ CAMBIA DEL SINGULAR AL PLURAL:
一只猫 → 一些猫
El clasificador 只 DESAPARECE y en su lugar entra 些. El resto queda igual.
No se dice 一些只猫, y tampoco 两些猫.

POR QUÉ: 些 funciona como un clasificador universal para el plural, sirve para cualquier sustantivo. Por eso Michelle dijo que en plural te podés «olvidar de los clasificadores».

OJO: 猫 no cambia. En chino los sustantivos no tienen plural (no hay «-s»): 猫 es gato y gatos. El plural lo marca 些 (o un número).

PRONUNCIACIÓN: yìxiē māo, los tres en tono alto al final: xiē y māo primer tono.`,
en:`WHAT IT IS: "some cats", the plural of 一只猫.

WHAT CHANGES FROM SINGULAR TO PLURAL:
一只猫 → 一些猫
The measure word 只 DISAPPEARS and 些 takes its place. Everything else stays.
You don't say 一些只猫, nor 两些猫.

WHY: 些 works as a universal plural measure word for any noun. That's why Michelle said that in the plural you can "forget the measure words".

NOTE: 猫 doesn't change. Chinese nouns have no plural form (no "-s"): 猫 is cat and cats. The plural is marked by 些 (or a number).

PRONUNCIATION: yìxiē māo; xiē and māo are both 1st tone, high and flat.`,
zh:`是什么："一些猫"，一只猫 的复数。
变化：一只猫 → 一些猫，量词 只 去掉，换成 些。不能说"一些只猫"。
名词本身没有复数形式：猫 就是一只或很多只，复数靠 些 或数字表示。`}},
  {id:"cla-14",s:"这只猫",t:"這隻貓",py:"zhè zhī māo",es:"el gato / este gato",en:"the cat / this cat",
   x:{
es:`QUÉ ES: «el gato». Este es EL ejemplo de la clase 3 para el artículo definido.

EL PROBLEMA: en chino no existe «el / la». Michelle: «en chino no existe el, o la, o the».
LA SOLUCIÓN: usar «este» (这) o «ese» (那). 这只猫 significa literalmente «este gato», y se usa donde en español dirías «el gato».

LAS TRES PIEZAS:
这 este: 辶 (un pie en camino) + 文; en tradicional 這, con 言 (hablar): señalar al hablar.
只 clasificador de animales: en tradicional 隻, un pájaro en la mano.
猫 gato: 犭 (animal) + 苗 (sonido miáo).

LA REGLA IMPORTANTE: cuando hay sustantivo, el clasificador nunca se cae. 这猫 está mal; 这只猫 está bien.

EN CLASE: 这只猫今天早上吃一条鱼 «el gato comió un pescado esta mañana».

PRONUNCIACIÓN: zhè zhī māo. zh-zh seguidos: lengua atrás las dos veces. Cuarto, primero, primero.`,
en:`WHAT IT IS: "the cat". This is THE class 3 example for the definite article.

THE PROBLEM: Chinese has no "the". Michelle: "in Chinese there's no el, or la, or the".
THE SOLUTION: use "this" (这) or "that" (那). 这只猫 literally means "this cat", and it's used where English says "the cat".

THE THREE PIECES:
这 this: 辶 (a foot on a road) + 文; traditional 這, with 言 (speech): pointing as you speak.
只 animal measure word: traditional 隻, a bird in the hand.
猫 cat: 犭 (animal) + 苗 (sound miáo).

THE IMPORTANT RULE: when there's a noun, the measure word never drops. 这猫 is wrong; 这只猫 is right.

IN CLASS: 这只猫今天早上吃一条鱼 "the cat ate a fish this morning".

PRONUNCIATION: zhè zhī māo. Two zh in a row: tongue back both times. 4th, 1st, 1st.`,
zh:`是什么：相当于"the cat"，第三课定冠词的例子。
中文没有定冠词，所以用"这"或"那"：这只猫。
规则：有名词时量词不能省，不能说"这猫"。
课上：这只猫今天早上吃一条鱼。
发音：zhè zhī māo，两个卷舌音。`}},
  {id:"cla-15",s:"那只猫",t:"那隻貓",py:"nà zhī māo",es:"ese gato",en:"that cat",
   x:{
es:`QUÉ ES: «ese gato». También puede traducir «el gato» cuando el gato está lejos o ya se habló de él.

CÓMO SE ARMA: igual que 这只猫, cambiando 这 por 那.
那 ese + 只 clasificador de animales + 猫 gato.
Michelle lo practicó en clase: 这只猫 / 那只猫.

LAS PIEZAS:
那: prestado por el sonido (era nombre de un lugar; 阝 = pueblo).
只: en tradicional 隻, un pájaro 隹 en la mano 又.
猫: 犭 (animal) + 苗 (sonido).

PLURAL: 那些猫 esos gatos (sin 只).

PRONUNCIACIÓN: nà zhī māo.`,
en:`WHAT IT IS: "that cat". It can also translate "the cat" when the cat is far away or was already mentioned.

HOW IT'S BUILT: like 这只猫, swapping 这 for 那.
那 that + 只 animal measure word + 猫 cat.
Michelle drilled this in class: 这只猫 / 那只猫.

THE PIECES:
那: borrowed for its sound (it was a place name; 阝 = town).
只: traditional 隻, a bird 隹 in the hand 又.
猫: 犭 (animal) + 苗 (sound).

PLURAL: 那些猫 those cats (no 只).

PRONUNCIATION: nà zhī māo.`,
zh:`是什么："那只猫"，也可以表示已经提过或比较远的"the cat"。
结构：那 + 只 + 猫。复数：那些猫（不用 只）。`}},
  {id:"cla-16",s:"这些猫",t:"這些貓",py:"zhèxiē māo",es:"los gatos / estos gatos",en:"the cats / these cats",
   x:{
es:`QUÉ ES: «los gatos» o «estos gatos». Es el plural de 这只猫.

EL CAMBIO CLAVE:
这只猫 (el gato)  →  这些猫 (los gatos)
这 queda igual. 只 se va. Entra 些. 猫 queda igual.
Michelle: «para el plural, el clasificador siempre es 些».

POR QUÉ «LOS»: como no hay artículo definido en chino, «los» se dice con «estos». Es la misma idea que en singular.

ERRORES TÍPICOS:
这些只猫 ✗ (些 y 只 no van juntos)
这猫们 ✗ (们 es solo para personas, nunca para animales ni cosas)

LOS CARACTERES:
这 este: 辶 (pie en camino) + 文; tradicional 這 con 言, señalar al hablar.
些 algunos: 此 (un pie parado acá) sobre 二 (dos).
猫 gato: 犭 (animal de cuatro patas) + 苗 (sonido miáo).

PRONUNCIACIÓN: zhèxiē māo.`,
en:`WHAT IT IS: "the cats" or "these cats". The plural of 这只猫.

THE KEY CHANGE:
这只猫 (the cat)  →  这些猫 (the cats)
这 stays. 只 goes. 些 comes in. 猫 stays.
Michelle: "for the plural, the measure word is always 些".

WHY "THE": since Chinese has no definite article, "the" is said with "these". Same idea as in the singular.

TYPICAL MISTAKES:
这些只猫 ✗ (些 and 只 don't go together)
这猫们 ✗ (们 is only for people, never animals or things)

THE CHARACTERS:
这 this: 辶 (foot on a road) + 文; traditional 這 with 言, pointing while speaking.
些 some: 此 (a foot standing here) over 二 (two).
猫 cat: 犭 (four-legged animal) + 苗 (sound miáo).

PRONUNCIATION: zhèxiē māo.`,
zh:`是什么："这些猫"，也就是复数的"the cats"，这只猫 的复数。
关键变化：这只猫 → 这些猫：这 不变，只 去掉，换成 些。
常见错误："这些只猫"✗；"这猫们"✗（们 只用于人）。
发音：zhèxiē māo。`}},
  {id:"cla-17",s:"一个老师",t:"一個老師",py:"yí ge lǎoshī",es:"un profesor",en:"a teacher",
   x:{
es:`QUÉ ES: «un profesor». El ejemplo de la clase para personas.

LAS PIEZAS:
一 uno.
个 clasificador general: en su origen 箇, una caña de bambú 竹 contada de a una.
老师 profesor: 老 (un anciano encorvado con bastón; acá es respeto, no edad) + 师 (maestro, experto).

POR QUÉ 个: los profesores son personas, y para personas se usa 个 (neutral) o 位 (respetuoso). 一位老师 también está bien y suena más formal.

SI QUERÉS MARCAR EL GÉNERO (Michelle, clase 3): 一个男老师 un profesor (hombre) · 一个女老师 una profesora. Solo si importa; normalmente no se dice.

PRONUNCIACIÓN: yí ge lǎoshī. Atención al 一: antes de 个 se dice yí (segundo tono), porque 个 es originalmente cuarto tono. 个 suena suave, en tono neutro.`,
en:`WHAT IT IS: "a teacher". The class example for people.

THE PIECES:
一 one.
个 general measure word: originally 箇, a bamboo cane 竹 counted one by one.
老师 teacher: 老 (a stooped old man with a stick; here respect, not age) + 师 (master, expert).

WHY 个: teachers are people, and people take 个 (neutral) or 位 (respectful). 一位老师 is also fine and sounds more formal.

IF YOU WANT TO MARK GENDER (Michelle, class 3): 一个男老师 a (male) teacher · 一个女老师 a (female) teacher. Only if it matters; normally you don't.

PRONUNCIATION: yí ge lǎoshī. Watch the 一: before 个 it's yí (2nd tone), because 个 is originally a 4th tone. 个 sounds soft, neutral tone.`,
zh:`是什么："一个老师"，课上关于人的例子。
老师是人，用 个（普通）或 位（尊敬）。想强调性别时说 一个男老师 / 一个女老师。
发音：yí ge lǎoshī，一 在 个 前读第二声，个 读轻声。`}},
  {id:"cla-18",s:"这个老师",t:"這個老師",py:"zhè ge lǎoshī",es:"el profesor / este profesor",en:"the teacher / this teacher",
   x:{
es:`QUÉ ES: «el profesor» (o «este profesor»). La versión con personas de 这只猫.

CÓMO SE ARMA:
这 este + 个 clasificador de personas + 老师 profesor.
Michelle lo escribió en clase: 这个老师 / 那个老师. Como no existe «el», se dice «este».

COMPARÁ CON EL GATO:
这只猫 el gato (animal → 只)
这个老师 el profesor (persona → 个)
Lo único que cambia es el clasificador, según qué cosa sea.

FORMAL: 这位老师 (con 位) suena más respetuoso, por ejemplo al presentar a alguien.

PLURAL: 这些老师 los profesores (sin 个).

PRONUNCIACIÓN: zhè ge lǎoshī; a menudo zhèige.`,
en:`WHAT IT IS: "the teacher" (or "this teacher"). The people version of 这只猫.

HOW IT'S BUILT:
这 this + 个 measure word for people + 老师 teacher.
Michelle wrote it in class: 这个老师 / 那个老师. Since "the" doesn't exist, you say "this".

COMPARE WITH THE CAT:
这只猫 the cat (animal → 只)
这个老师 the teacher (person → 个)
Only the measure word changes, depending on what the thing is.

FORMAL: 这位老师 (with 位) sounds more respectful, e.g. when introducing someone.

PLURAL: 这些老师 the teachers (no 个).

PRONUNCIATION: zhè ge lǎoshī; often zhèige.`,
zh:`是什么："这个老师"，相当于"the teacher"。
比较：这只猫（动物用 只）/ 这个老师（人用 个），只是量词不同。
更尊敬：这位老师。复数：这些老师。`}},
  {id:"cla-19",s:"那些老师",t:"那些老師",py:"nàxiē lǎoshī",es:"esos profesores",en:"those teachers",
   x:{
es:`QUÉ ES: «esos profesores».

CÓMO SE ARMA: 那 ese + 些 plural + 老师. Sin 个, porque 些 lo reemplaza.
Singular → plural: 那个老师 → 那些老师.

OJO CON 们: con personas existe también 们 (老师们 «los profesores», como grupo al que le hablás: 老师们好 «hola, profesores»). Pero 们 no se combina con números ni con 些: 那些老师们 suena redundante, y 三个老师们 está mal.

LOS CARACTERES:
那: prestado por el sonido (阝 = pueblo).
些: 此 (un pie parado acá) + 二: unos pocos.
老师: 老 (el anciano con bastón, respeto) + 师 (maestro).`,
en:`WHAT IT IS: "those teachers".

HOW IT'S BUILT: 那 that + 些 plural + 老师. No 个, because 些 replaces it.
Singular → plural: 那个老师 → 那些老师.

WATCH OUT FOR 们: with people there's also 们 (老师们 "teachers", as a group you're addressing: 老师们好 "hello, teachers"). But 们 doesn't combine with numbers or with 些: 那些老师们 sounds redundant, and 三个老师们 is wrong.

THE CHARACTERS:
那: borrowed for its sound (阝 = town).
些: 此 (a foot standing here) + 二: a few.
老师: 老 (the old man with a stick, respect) + 师 (master).`,
zh:`是什么："那些老师"。结构：那 + 些 + 老师，不用 个。
注意：们 也表示人的复数（老师们好），但不能和数字或 些 一起用：三个老师们 ✗。`}},
  {id:"cla-20",s:"两个老师",t:"兩個老師",py:"liǎng ge lǎoshī",es:"dos profesores",en:"two teachers",
   x:{
es:`QUÉ ES: «dos profesores».

LA TRAMPA: en chino hay DOS palabras para «dos».
二 èr: para contar (uno, dos, tres…) y dentro de números (十二, 二十).
两 liǎng: cuando va delante de un clasificador. 两个, 两只, 两条.
Entonces «dos profesores» es 两个老师, nunca 二个老师.
Michelle, clase 3: «dos se dice 两个».

EL CARÁCTER 两 (tradicional 兩): originalmente un yugo para dos animales, o los dos platillos de una balanza: «un par». Tiene sentido: es el «dos» de cosas que se cuentan.

EL RESTO: 个 clasificador de personas + 老师 profesor.

EN CLASE: 我有一个男老师和两个女老师 «tengo un profesor y dos profesoras».

PRONUNCIACIÓN: liǎng, tercer tono (baja y sube). 个 en tono neutro.`,
en:`WHAT IT IS: "two teachers".

THE TRAP: Chinese has TWO words for "two".
二 èr: for counting (one, two, three…) and inside numbers (十二, 二十).
两 liǎng: when it comes before a measure word. 两个, 两只, 两条.
So "two teachers" is 两个老师, never 二个老师.
Michelle, class 3: "two is 两个".

THE CHARACTER 两 (traditional 兩): originally a yoke for two animals, or the two pans of a scale: "a pair". It makes sense: it's the "two" for counted things.

THE REST: 个 measure word for people + 老师 teacher.

IN CLASS: 我有一个男老师和两个女老师 "I have one male teacher and two female teachers".

PRONUNCIATION: liǎng, 3rd tone (dips and rises). 个 in the neutral tone.`,
zh:`是什么："两个老师"。
陷阱：中文有两个"二"：二 用于数数和数字中间（十二、二十）；两 用于量词前（两个、两只、两条）。所以说 两个老师，不说 二个老师。
两（繁体 兩）：本来是车轭或天平的两个秤盘，表示"一对"。
课上：我有一个男老师和两个女老师。`}},
  {id:"cla-21",s:"一条鱼",t:"一條魚",py:"yì tiáo yú",es:"un pez / un pescado",en:"a fish",
   x:{
es:`QUÉ ES: «un pez» o «un pescado» (el chino no distingue: 鱼 es el animal y la comida).

POR QUÉ 条 Y NO 只: Michelle explicó que los peces tienen forma alargada, así que llevan 条, el clasificador de las cosas largas y finas. (Con 只 también se oye, pero en clase se usó 条.)

LAS PIEZAS:
一 uno.
条: en tradicional 條, con 木 (árbol) abajo: una rama larga y delgada.
鱼 pez: un pictograma completo. Arriba la cabeza, en el medio el cuerpo con escamas (el cuadrado con la cruz), abajo la cola. En tradicional 魚, la cola son cuatro puntos, como en 馬 (caballo).

EN CLASE: 这只猫今天早上吃一条鱼 «el gato comió un pescado esta mañana».

PRONUNCIACIÓN: yì tiáo yú. 一 es yì porque 条 es segundo tono. yú: la ü es la u francesa (la y escribe la ü sin puntos).`,
en:`WHAT IT IS: "a fish" (Chinese doesn't distinguish the animal from the food: 鱼 is both).

WHY 条 AND NOT 只: Michelle explained that fish are elongated, so they take 条, the measure word for long thin things. (You also hear 只, but 条 was used in class.)

THE PIECES:
一 one.
条: traditional 條, with 木 (tree) at the bottom: a long thin branch.
鱼 fish: a complete pictogram. Head on top, scaly body in the middle (the box with the cross), tail below. In traditional 魚 the tail is four dots, as in 馬 (horse).

IN CLASS: 这只猫今天早上吃一条鱼 "the cat ate a fish this morning".

PRONUNCIATION: yì tiáo yú. 一 is yì because 条 is 2nd tone. yú: the ü is the French u (the y spells ü without dots).`,
zh:`是什么："一条鱼"，鱼 既是动物也是食物。
为什么用 条：鱼是长形的（也有人说 一只鱼）。
鱼：象形字，上面头，中间有鳞的身体，下面尾巴；繁体 魚 的尾巴是四点，和 馬 一样。
课上：这只猫今天早上吃一条鱼。
发音：yì tiáo yú，yú 的 ü 要圆唇。`}},
  {id:"cla-22",s:"一条蛇",t:"一條蛇",py:"yì tiáo shé",es:"una víbora",en:"a snake",
   x:{
es:`QUÉ ES: «una víbora». El ejemplo más claro de 条: nada es más largo y fino que una serpiente. Michelle la usó para explicar el clasificador.

LAS PIEZAS:
一 uno + 条 clasificador de cosas largas (tradicional 條: una rama larga, con 木 árbol).
蛇 serpiente: 虫 (el dibujo de un bicho o reptil con la cabeza levantada) + 它.
Lo curioso: 它 era originalmente TAMBIÉN el dibujo de una cobra. La serpiente aparece dos veces en el carácter.
Hoy 它 se usa como pronombre «it» (para animales y cosas), y 蛇 quedó para la serpiente.

PRONUNCIACIÓN: yì tiáo shé. shé segundo tono, con la lengua atrás (sh).`,
en:`WHAT IT IS: "a snake". The clearest example of 条: nothing is longer and thinner than a snake. Michelle used it to explain the measure word.

THE PIECES:
一 one + 条 measure word for long things (traditional 條: a long branch, with 木 tree).
蛇 snake: 虫 (the drawing of a bug or reptile with its head raised) + 它.
The curious part: 它 was originally ALSO a drawing of a cobra. The snake appears twice in the character.
Today 它 is used as the pronoun "it" (for animals and things), and 蛇 kept the meaning snake.

PRONUNCIATION: yì tiáo shé. shé is 2nd tone, tongue back (sh).`,
zh:`是什么："一条蛇"，条 最典型的例子。
蛇：虫（抬头的虫或爬行动物）+ 它（本来也是蛇的样子），蛇在字里出现了两次。现在 它 当代词用。
发音：yì tiáo shé。`}},
  {id:"cla-23",s:"围巾",t:"圍巾",py:"wéijīn",es:"bufanda",en:"scarf",
   x:{
es:`QUÉ ES: «bufanda». Michelle la dio como ejemplo de objeto (no animal) que lleva 条: 一条围巾.

LOS CARACTERES:
围 rodear: 囗 (un recinto cerrado, un cuadrado) con 韦 adentro. 韦 era originalmente dos pies dando la vuelta alrededor de algo. Caminar alrededor de un recinto: rodear. En tradicional 圍 se ve igual, con el 韋 completo.
巾 paño: un trapo colgando de una barra. El mismo 巾 que está en 市 (mercado: los toldos de los puestos) y en 师 (maestro).
El paño que rodea (el cuello): bufanda.

POR QUÉ 条: la bufanda es larga y fina, como la víbora y el pez. Lo que importa para el clasificador es la FORMA, no si está vivo.

PRONUNCIACIÓN: wéijīn. wéi segundo tono, jīn primer tono.`,
en:`WHAT IT IS: "scarf". Michelle gave it as an example of an object (not an animal) that takes 条: 一条围巾.

THE CHARACTERS:
围 to surround: 囗 (a closed enclosure, a square) with 韦 inside. 韦 was originally two feet going around something. Walking around an enclosure: surrounding. Traditional 圍 looks the same, with the full 韋.
巾 cloth: a rag hanging from a bar. The same 巾 as in 市 (market: the stall awnings) and 师 (master).
The cloth that goes around (the neck): scarf.

WHY 条: a scarf is long and thin, like the snake and the fish. What matters for the measure word is the SHAPE, not whether it's alive.

PRONUNCIATION: wéijīn. wéi 2nd tone, jīn 1st tone.`,
zh:`是什么："围巾"，一条围巾，是用 条 的物品例子。
围：囗（围起来的地方）里面 韦（绕圈走的两只脚），绕着走就是"围"。
巾：挂在横杆上的布，和 市、师 里的 巾 一样。围在脖子上的布。
量词看形状，不看是不是活的。`}},
  {id:"cla-24",s:"一条狗",t:"一條狗",py:"yì tiáo gǒu",es:"un perro (también 一只狗)",en:"a dog (also 一只狗)",
   x:{
es:`QUÉ ES: «un perro». Lo especial es que el perro acepta DOS clasificadores:
一只狗 (como animal, con 只)
一条狗 (como algo alargado, con 条)
Los dos son correctos y comunes. Michelle bromeó con el perro salchicha: el más «条» de todos.

PERO EL GATO NO: Michelle fue clara, 一条猫 está mal. Solo 一只猫.
Moraleja: los clasificadores siguen una lógica (animales → 只, cosas largas → 条), pero hay excepciones que se aprenden de a una.

LAS PIEZAS:
条: tradicional 條, una rama larga (木).
狗 perro: 犭 (犬 perro aplastado: un perro de perfil con la cola enroscada) + 句 (solo por el sonido).

PRONUNCIACIÓN: yì tiáo gǒu. gǒu tercer tono: baja y sube.`,
en:`WHAT IT IS: "a dog". What's special is that a dog accepts TWO measure words:
一只狗 (as an animal, with 只)
一条狗 (as something long, with 条)
Both are correct and common. Michelle joked about the sausage dog: the most "条" of all.

BUT NOT THE CAT: Michelle was clear, 一条猫 is wrong. Only 一只猫.
Moral: measure words follow a logic (animals → 只, long things → 条), but there are exceptions you learn one at a time.

THE PIECES:
条: traditional 條, a long branch (木).
狗 dog: 犭 (犬 dog, squeezed: a dog in profile with a curled tail) + 句 (sound only).

PRONUNCIATION: yì tiáo gǒu. gǒu is 3rd tone: dips and rises.`,
zh:`是什么："一条狗"。狗可以用两个量词：一只狗 / 一条狗，都对。
但猫不行：一条猫 ✗，只能说 一只猫。量词有规律（动物用 只，长的用 条），但也有例外要一个一个记。
狗：犭（犬）+ 句（表音）。`}}
  ]
});
