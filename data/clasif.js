/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   w optional writing tip {es, en, zh} (shown on the stroke-order page),
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"clasif", glyph:"个",
  name:{"es": "Clasificadores y artículos", "en": "Measure words & articles", "zh": "量词与冠词"},
  cl:"c3",
  cards:[
  {id:"cla-01",s:"数 + 量词 + 名词",t:"數 + 量詞 + 名詞",py:"shù + liàngcí + míngcí",es:"número + clasificador + sustantivo",en:"number + measure word + noun",say:"一个老师",
   x:{
es:`LA REGLA (clase 3): en chino un número nunca va pegado al sustantivo. Siempre hay una palabra en el medio, el clasificador.
一个老师 (yí ge lǎoshī) = uno + clasificador + profesor · 两只猫 (liǎng zhī māo) = dos + clasificador + gato · 一条鱼 (yì tiáo yú) = uno + clasificador + pez.
Decir 一老师 (yì lǎoshī) o 两猫 (liǎng māo) está mal, igual que en español está mal decir «un agua» cuando querés decir «una botella de agua».

¿POR QUÉ? El clasificador dice qué TIPO de cosa estás contando: 个 (gè) personas y objetos en general, 只 (zhī) animales, 条 (tiáo) cosas largas y finas, 位 (wèi) personas con respeto. Michelle: «para todo sustantivo tiene que ir con un clasificador».
En español tenemos algo parecido pero opcional: «una cabeza de ganado», «una hoja de papel», «un par de zapatos». En chino es obligatorio siempre que hay un número o 这 (zhè) / 那 (nà) delante.

EL TRUCO PARA EMPEZAR: si no sabés cuál usar, usá 个 (gè). Es el comodín. Los chicos en Taiwán también empiezan así y los padres los corrigen de a poco.

LOS CARACTERES:
量 (liàng) medir: 日 (rì, sol) arriba de 里 (lǐ, la aldea con sus campos): medir la tierra.
词 (cí) palabra: 讠 (yán, el radical del habla, una boca con líneas de sonido) + 司 (sī, sonido).
量词 (liàngcí) = «palabra de medida». En inglés se llaman measure words.
数 (shù) número y 名词 (míngcí) sustantivo (名 míng nombre + 词 palabra = «palabra-nombre»).`,
en:`THE RULE (class 3): in Chinese a number never attaches directly to a noun. There's always a word in between, the measure word.
一个老师 (yí ge lǎoshī) = one + measure word + teacher · 两只猫 (liǎng zhī māo) = two + measure word + cat · 一条鱼 (yì tiáo yú) = one + measure word + fish.
Saying 一老师 (yì lǎoshī) or 两猫 (liǎng māo) is wrong, just as "a water" is wrong in English when you mean "a bottle of water".

WHY? The measure word tells you what KIND of thing you're counting: 个 (gè) people and things in general, 只 (zhī) animals, 条 (tiáo) long thin things, 位 (wèi) people, respectfully. Michelle: "every noun has to go with a measure word".
English has something similar but optional: "a head of cattle", "a sheet of paper", "a pair of shoes". In Chinese it's required whenever there's a number or 这 (zhè) / 那 (nà) in front.

THE STARTER TRICK: if you don't know which one to use, use 个 (gè). It's the wildcard. Children in Taiwan start the same way and parents correct them bit by bit.

THE CHARACTERS:
量 (liàng) to measure: 日 (rì, sun) over 里 (lǐ, the village with its fields): measuring land.
词 (cí) word: 讠 (yán, the speech radical, a mouth with lines of sound) + 司 (sī, sound).
量词 (liàngcí) = "measure word".
数 (shù) number and 名词 (míngcí) noun (名 míng name + 词 word = "name-word").`,
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
es:`QUÉ ES: el clasificador más común de todos. Sirve para personas (一个老师 yí ge lǎoshī, 一个学生 yí ge xuéshēng) y para la mayoría de los objetos (一个苹果 yí ge píngguǒ). Michelle: «generalmente para personas y objetos».
Si no sabés qué clasificador lleva una palabra, usá 个 (gè): casi siempre te van a entender.

EL CARÁCTER:
Viene de 箇 (gè): 竹 (zhú, bambú, dibujado como dos tallos con sus hojas) + 固 (gù, solo por el sonido). Una caña de bambú contada de a una: la unidad más simple.
El simplificado 个 (gè) parece un solo tallo con dos hojas.
El tradicional 個 (gè) cambió el bambú por 亻 (rén, persona): por eso se asocia tanto con gente.

PRONUNCIACIÓN: gè, cuarto tono, pero después de un número suele sonar suave, en tono neutro: 一个 yí ge.
Ojo con el 一 (yī): antes de 个 (gè) se dice yí (segundo tono), porque 个 es originalmente cuarto tono y 一 cambia antes de un cuarto tono.

COMPARÁ: 个 (gè) es neutro; 位 (wèi) es la versión respetuosa para personas (一位老师 yí wèi lǎoshī). Con animales no se usa 个 sino 只 (zhī).`,
en:`WHAT IT IS: the most common measure word of all. Used for people (一个老师 yí ge lǎoshī, 一个学生 yí ge xuéshēng) and most objects (一个苹果 yí ge píngguǒ). Michelle: "generally for people and objects".
If you don't know which measure word a noun takes, use 个 (gè): you'll almost always be understood.

THE CHARACTER:
From 箇 (gè): 竹 (zhú, bamboo, drawn as two stalks with leaves) + 固 (gù, sound only). A bamboo cane counted one by one: the simplest unit.
The simplified 个 (gè) looks like a single stalk with two leaves.
The traditional 個 (gè) swapped the bamboo for 亻 (rén, person), which is why it's so tied to people.

PRONUNCIATION: gè, 4th tone, but after a number it usually goes soft, neutral tone: 一个 yí ge.
Watch the 一 (yī): before 个 (gè) it's yí (2nd tone), because 个 is originally a 4th tone and 一 changes before a 4th tone.

COMPARE: 个 (gè) is neutral; 位 (wèi) is the respectful version for people (一位老师 yí wèi lǎoshī). Animals don't take 个 but 只 (zhī).`,
zh:`是什么：最常用的量词，用于人（一个老师、一个学生）和大部分东西（一个苹果）。不知道用什么量词时，用 个 大家基本都听得懂。

字形：来自 箇，竹（两根带叶的竹子）+ 固（表音），一根一根数的竹竿。简体 个 像一根带两片叶子的竹枝；繁体 個 把竹换成 亻，所以常和人联系在一起。

发音：gè，在数字后面常读轻声：一个 yí ge。一 在 个 前面读第二声 yí。

比较：个 是中性的；位 是对人的尊称（一位老师）；动物用 只，不用 个。`}},
  {id:"cla-03",s:"只",t:"隻",py:"zhī",es:"clasificador de animales",en:"measure word for animals",
   x:{
es:`QUÉ ES: el clasificador para la mayoría de los animales: terrestres, marinos y aves. 一只狗 (yì zhī gǒu) un perro, 一只猫 (yì zhī māo) un gato, 一只鸟 (yì zhī niǎo) un pájaro. Michelle: «para la mayoría, terrestres, marinos, aves».
Si el animal es largo y fino (una víbora, un pez) se usa 条 (tiáo) en su lugar.

EL CARÁCTER, mejor en tradicional:
隻 (zhī) = 隹 (zhuī) arriba + 又 (yòu) abajo.
隹: un pájaro de cola corta dibujado de perfil (la cabeza, el ala con sus plumas, las patas).
又: la mano derecha, dibujada con tres dedos.
Un solo pájaro en la mano: de ahí «uno solo, individual», y de ahí contar animales de a uno.
(Con dos pájaros en la mano sale 雙 shuāng / 双 shuāng, «par».)

EL SIMPLIFICADO 只 (zhī) es en realidad otro carácter, zhǐ «solamente», que se tomó prestado porque suena casi igual: 口 (kǒu, boca) con dos trazos debajo, el aliento que sale. Por eso en simplificado no se ve el pájaro.

PRONUNCIACIÓN: zhī, primer tono, plano, con la lengua curvada hacia atrás (zh). Antes de 只 (zhī), 一 (yī) se dice yì: 一只 yì zhī.`,
en:`WHAT IT IS: the measure word for most animals: land, sea and birds. 一只狗 (yì zhī gǒu) a dog, 一只猫 (yì zhī māo) a cat, 一只鸟 (yì zhī niǎo) a bird. Michelle: "for most of them, land, sea, birds".
If the animal is long and thin (a snake, a fish) you use 条 (tiáo) instead.

THE CHARACTER, clearest in traditional:
隻 (zhī) = 隹 (zhuī) on top + 又 (yòu) below.
隹: a short-tailed bird in profile (head, feathered wing, legs).
又: the right hand, drawn with three fingers.
A single bird in the hand: hence "one single, individual", and hence counting animals one by one.
(Two birds in the hand give 雙 shuāng / 双 shuāng, "pair".)

THE SIMPLIFIED 只 (zhī) is actually another character, zhǐ "only", borrowed because it sounds almost the same: 口 (kǒu, mouth) with two strokes underneath, breath coming out. That's why the bird isn't visible in simplified.

PRONUNCIATION: zhī, 1st tone, flat, tongue curled back (zh). Before 只 (zhī), 一 (yī) is said yì: 一只 yì zhī.`,
zh:`是什么：大部分动物的量词：陆地的、水里的、天上飞的。一只狗、一只猫、一只鸟。细长的动物（蛇、鱼）用 条。

字形（看繁体最清楚）：隻 = 隹（侧面的短尾鸟）+ 又（右手）。手里抓着一只鸟，所以表示"单个"，用来一个一个地数动物。手里两只鸟就是 雙 / 双。

简体 只 其实借用了读音相近的 只 zhǐ（口 下面两笔，出气），所以简体看不到鸟。

发音：zhī，第一声，卷舌音。一只 读 yì zhī。`}},
  {id:"cla-04",s:"条",t:"條",py:"tiáo",es:"clasificador de cosas alargadas",en:"measure word for long, thin things",
   x:{
es:`QUÉ ES: el clasificador para todo lo largo y fino. Michelle lo explicó con ejemplos:
一条蛇 (yì tiáo shé) una víbora · 一条鱼 (yì tiáo yú) un pez (los peces tienen forma alargada) · 一条围巾 (yì tiáo wéijīn) una bufanda. También calles, ríos y pantalones.

EL CARÁCTER, en tradicional 條 (tiáo):
攸 (yōu, solo por el sonido) con 木 (mù, árbol) abajo a la derecha.
El sentido original es «una rama larga y delgada». De ahí «algo alargado», y de ahí contar cosas largas.
El simplificado 条 (tiáo) conserva el 木 abajo: 夂 (zhǐ) arriba (un pie) + 木.

LA PARTE DIVERTIDA: el perro acepta los dos. 一只狗 (yì zhī gǒu, como animal) o 一条狗 (yì tiáo gǒu, como algo largo; Michelle bromeó con el perro salchicha). Pero el gato NO: 一条猫 (yì tiáo māo) está mal, siempre 一只猫 (yì zhī māo). La regla no es 100 % lógica, hay que acordarse palabra por palabra.

PRONUNCIACIÓN: tiáo, segundo tono (sube). t con aire. Antes de 条 (tiáo), 一 (yī) se dice yì: 一条 yì tiáo.`,
en:`WHAT IT IS: the measure word for anything long and thin. Michelle gave examples:
一条蛇 (yì tiáo shé) a snake · 一条鱼 (yì tiáo yú) a fish (fish are elongated) · 一条围巾 (yì tiáo wéijīn) a scarf. Also streets, rivers and trousers.

THE CHARACTER, traditional 條 (tiáo):
攸 (yōu, sound only) with 木 (mù, tree) at the bottom right.
The original sense is "a long thin branch". Hence "something elongated", and hence counting long things.
The simplified 条 (tiáo) keeps the 木 at the bottom: 夂 (zhǐ) on top (a foot) + 木.

THE FUN PART: a dog accepts both. 一只狗 (yì zhī gǒu, as an animal) or 一条狗 (yì tiáo gǒu, as something long; Michelle joked about the sausage dog). But a cat does NOT: 一条猫 (yì tiáo māo) is wrong, always 一只猫 (yì zhī māo). The rule isn't 100 % logical; you have to remember it word by word.

PRONUNCIATION: tiáo, 2nd tone (rising). Aspirated t. Before 条 (tiáo), 一 (yī) is said yì: 一条 yì tiáo.`,
zh:`是什么：细长东西的量词。一条蛇、一条鱼（鱼是长形的）、一条围巾，也用于路、河、裤子。

字形：繁体 條 = 攸（表音）+ 右下的 木，本义是细长的树枝，引申为长条形。简体 条 = 夂 + 木。

有趣的地方：狗可以说 一只狗 也可以说 一条狗；猫只能说 一只猫，不能说 一条猫。这要一个一个记。

发音：tiáo，第二声，送气音。一条 读 yì tiáo。`}},
  {id:"cla-05",s:"位",py:"wèi",es:"clasificador formal para personas",en:"polite measure word for people",
   x:{
es:`QUÉ ES: el clasificador para personas cuando querés mostrar respeto. Michelle: «para personas, formal». Se oye mucho en las noticias y en la atención al público.
一位老师 (yí wèi lǎoshī) un profesor · 这位先生 (zhè wèi xiānsheng) este señor · 三位客人 (sān wèi kèrén) tres invitados.
Con 个 (gè) también es correcto (一个老师 yí ge lǎoshī), pero suena más neutro, más de todos los días.

EL CARÁCTER:
亻 (rén, una persona caminando de costado, la forma aplastada de 人 rén) + 立 (lì, una persona de pie sobre una línea de suelo: los brazos abiertos arriba, la línea abajo).
Una persona parada en SU lugar: «posición, puesto, asiento». Por eso 位 (wèi) también significa «lugar» en 座位 (zuòwèi, asiento).
Contar a alguien con 位 es como reconocerle su lugar: de ahí el respeto.

EJEMPLO DE CLASE: 他是一位老师 (tā shì yí wèi lǎoshī) él es un profesor. Se usa 位 (wèi) porque es un profesor.

PRONUNCIACIÓN: wèi, cuarto tono (cae). Antes de 位 (wèi), 一 (yī) se dice yí: 一位 yí wèi.`,
en:`WHAT IT IS: the measure word for people when you want to show respect. Michelle: "for people, formal". You hear it a lot in the news and in customer service.
一位老师 (yí wèi lǎoshī) a teacher · 这位先生 (zhè wèi xiānsheng) this gentleman · 三位客人 (sān wèi kèrén) three guests.
个 (gè) is also correct (一个老师 yí ge lǎoshī), but it sounds more neutral and everyday.

THE CHARACTER:
亻 (rén, a person walking, side view, the squeezed form of 人 rén) + 立 (lì, a person standing on a ground line: arms spread on top, the line below).
A person standing in THEIR place: "position, post, seat". That's why 位 (wèi) also means "place" in 座位 (zuòwèi, seat).
Counting someone with 位 is like acknowledging their place: hence the respect.

CLASS EXAMPLE: 他是一位老师 (tā shì yí wèi lǎoshī) he is a teacher. 位 (wèi) because he's a teacher.

PRONUNCIATION: wèi, 4th tone (falling). Before 位 (wèi), 一 (yī) is said yí: 一位 yí wèi.`,
zh:`是什么：表示尊敬的人的量词，新闻和服务场合常用：一位老师、这位先生、三位客人。用 个 也对，但比较普通。

字形：亻 + 立（站在地面上的人）。站在自己位置上的人，所以有"位置、座位"的意思。用 位 来数人，就是尊重他的位置。

课上的例子：他是一位老师。

发音：wèi，第四声。一位 读 yí wèi。`}},
  {id:"cla-06",s:"这",t:"這",py:"zhè",es:"este / esta",en:"this",
   x:{
es:`QUÉ ES: «este / esta», para algo cercano. Como this en inglés.

EL PUNTO CLAVE DE LA CLASE: en chino NO existe el artículo «el / la / los / las» (the). Michelle: «en chino no existe el, o la, o the».
Entonces, cuando en español decís «EL gato», en chino decís «ESTE gato»: 这只猫 (zhè zhī māo).
La estructura es siempre: 这 (zhè) + clasificador + sustantivo. El clasificador no se puede sacar: 这猫 (zhè māo) está mal, 这只猫 está bien.

EL CARÁCTER:
辶 (zǒu, el radical de «ir, caminar»: un pie que avanza por un camino; envuelve al carácter por abajo) + 文 (wén).
En tradicional 這 (zhè) lleva 言 (yán, hablar: una boca con líneas de sonido) en lugar de 文: señalar mientras hablás, «esto de acá».

PRONUNCIACIÓN: zhè, cuarto tono, con la lengua curvada hacia atrás. Muchas veces se oye zhèi antes del clasificador (这个 zhè ge zhèige), sobre todo en el norte de China.

PAREJA: 那 nà «ese». El chino, como el inglés, solo tiene dos distancias: no hay «aquel».`,
en:`WHAT IT IS: "this", for something close.

THE KEY POINT FROM CLASS: Chinese has NO article "the". Michelle: "in Chinese there's no el, la, or the".
So where English says "THE cat", Chinese says "THIS cat": 这只猫 (zhè zhī māo).
The structure is always: 这 (zhè) + measure word + noun. The measure word can't be dropped: 这猫 (zhè māo) is wrong, 这只猫 is right.

THE CHARACTER:
辶 (zǒu, the radical for "go, walk": a foot moving along a road; it wraps the character from below) + 文 (wén).
In traditional 這 (zhè) it has 言 (yán, speech: a mouth with lines of sound) instead of 文: pointing while you talk, "this one here".

PRONUNCIATION: zhè, 4th tone, tongue curled back. You often hear zhèi before a measure word (这个 zhè ge zhèige), especially in northern China.

ITS PAIR: 那 nà "that". Chinese, like English, has only two distances.`,
zh:`是什么："这"，指近的东西。

课上的重点：中文没有定冠词（西班牙语的 el / la，英文的 the）。所以西班牙语说"el gato"，中文说"这只猫"。结构是：这 + 量词 + 名词，量词不能省，不能说"这猫"。

字形：辶（走路的部首）+ 文。繁体 這 用 言：一边说话一边指。

发音：zhè，第四声，卷舌。在量词前常读 zhèi（这个 zhèige）。

对应：那 nà，中文和英文一样只有"这""那"两种距离。`}},
  {id:"cla-07",s:"那",py:"nà",es:"ese / esa",en:"that",
   x:{
es:`QUÉ ES: «ese / esa», para algo que está más lejos. Como that en inglés.

CÓMO SE USA: igual que 这 (zhè), siempre con clasificador: 那 (nà) + clasificador + sustantivo.
那只猫 (nà zhī māo) ese gato · 那个老师 (nà ge lǎoshī) ese profesor.
Michelle: el chino, como el inglés, solo tiene this y that. No existe «aquel»: todo lo que no es «este» es 那.

EL CARÁCTER:
Originalmente era el nombre de un lugar, y se tomó prestado solo por el sonido.
El 阝 (fù) de la derecha es una forma de 邑 (yì), «pueblo, ciudad»: por eso aparece en nombres de lugares.
No tiene una historia visual que ayude: mejor aprenderlo como pareja de 这 (zhè).

PRONUNCIACIÓN: nà, cuarto tono. Antes del clasificador también se oye nèi (那个 nà ge nèige).

OJO: con otro tono, 哪 nǎ (tercer tono, con 口 kǒu boca) significa «¿cuál?». 那个 (nà ge) ese / 哪个 (nǎ ge) ¿cuál?`,
en:`WHAT IT IS: "that", for something further away.

HOW IT'S USED: like 这 (zhè), always with a measure word: 那 (nà) + measure word + noun.
那只猫 (nà zhī māo) that cat · 那个老师 (nà ge lǎoshī) that teacher.
Michelle: Chinese, like English, only has this and that.

THE CHARACTER:
Originally the name of a place, borrowed only for its sound.
The 阝 (fù) on the right is a form of 邑 (yì), "town, city", which is why it shows up in place names.
It has no helpful visual story: better to learn it as 这 (zhè)'s partner.

PRONUNCIATION: nà, 4th tone. Before a measure word you also hear nèi (那个 nà ge nèige).

CAREFUL: with another tone, 哪 nǎ (3rd tone, with 口 kǒu mouth) means "which?". 那个 (nà ge) that one / 哪个 (nǎ ge) which one?`,
zh:`是什么："那"，指远一点的东西。用法和 这 一样：那 + 量词 + 名词，那只猫、那个老师。中文只有"这""那"，没有第三种距离。

字形：本来是地名，只借读音。右边的 阝 是 邑（城镇），常出现在地名里。

发音：nà，第四声；量词前也读 nèi。注意：哪 nǎ（第三声，有 口）是"哪一个"。`}},
  {id:"cla-08",s:"些",py:"xiē",es:"algunos (marca de plural)",en:"some (plural marker)",
   x:{
es:`QUÉ ES: la palabra que se usa para el plural cuando contás o señalás. Significa «algunos, unos cuantos».

LA REGLA (clase 3): en plural, 些 (xiē) REEMPLAZA al clasificador. Da igual qué sustantivo sea: gatos, profesores, manzanas, todo lleva 些.
Singular: 一只猫 (yì zhī māo) · 这只猫 (zhè zhī māo) · 那个老师 (nà ge lǎoshī)
Plural:   一些猫 (yìxiē māo) · 这些猫 (zhèxiē māo) · 那些老师 (nàxiē lǎoshī)
Michelle: «en plural es todo con 些, olvidate de los clasificadores».
Error típico: 这些只猫 (zhèxiē zhī māo). Está mal, porque 些 ya ocupa el lugar de 只 (zhī).

EL CARÁCTER:
此 (cǐ) arriba + 二 (èr) abajo.
此 «esto, aquí»: 止 (zhǐ, la huella de un pie: dedos arriba, talón abajo) + 匕 (bǐ). El pie parado en este lugar.
二 dos: dos rayas.
«Estos pocos de acá», una cantidad chica: de ahí «algunos».

PRONUNCIACIÓN: xiē, primer tono. La x con la lengua plana adelante (no es sh).`,
en:`WHAT IT IS: the word used for the plural when you count or point. It means "some, a few".

THE RULE (class 3): in the plural, 些 (xiē) REPLACES the measure word. Whatever the noun: cats, teachers, apples, they all take 些.
Singular: 一只猫 (yì zhī māo) · 这只猫 (zhè zhī māo) · 那个老师 (nà ge lǎoshī)
Plural:   一些猫 (yìxiē māo) · 这些猫 (zhèxiē māo) · 那些老师 (nàxiē lǎoshī)
Michelle: "in the plural it's all with 些, forget the measure words".
Typical mistake: 这些只猫 (zhèxiē zhī māo). It's wrong, because 些 already takes the place of 只 (zhī).

THE CHARACTER:
此 (cǐ) on top + 二 (èr) below.
此 "this, here": 止 (zhǐ, a footprint: toes on top, heel below) + 匕 (bǐ). The foot standing in this spot.
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
一 (yī, uno) + 些 (xiē, algunos) + sustantivo. SIN clasificador.
一些猫 (yìxiē māo) unos gatos · 一些老师 (yìxiē lǎoshī) unos profesores · 一些苹果 (yìxiē píngguǒ) unas manzanas.

EL CUADRO DE MICHELLE (artículos):
                indefinido           definido
singular    一 (yī) + clasif (un gato)    这 (zhè) / 那 (nà) + clasif (el gato)
plural      一些 (yìxiē, unos gatos)         这些 (zhèxiē) / 那些 (nàxiē, los gatos)
一些 es la esquina de abajo a la izquierda.

POR QUÉ 一 (yī): literalmente «un algunos», «una pequeña cantidad». Igual que en español decimos «un par».

PRONUNCIACIÓN: yìxiē. El 一 (yī) se dice yì (cuarto tono) porque 些 (xiē) es primer tono: 一 cambia a cuarto tono antes de los tonos 1, 2 y 3.`,
en:`WHAT IT IS: the equivalent of "some" before a plural noun, the plural of "a / an".

HOW IT'S BUILT:
一 (yī, one) + 些 (xiē, some) + noun. NO measure word.
一些猫 (yìxiē māo) some cats · 一些老师 (yìxiē lǎoshī) some teachers · 一些苹果 (yìxiē píngguǒ) some apples.

MICHELLE'S TABLE (articles):
             indefinite                 definite
singular     一 (yī) + measure (a cat)       这 (zhè) / 那 (nà) + measure (the cat)
plural       一些 (yìxiē, some cats)            这些 (zhèxiē) / 那些 (nàxiē, the cats)
一些 is the bottom-left corner.

WHY 一 (yī): literally "one some", "a small amount". Like "a few" in English.

PRONUNCIATION: yìxiē. 一 (yī) is said yì (4th tone) because 些 (xiē) is a 1st tone: 一 becomes 4th tone before tones 1, 2 and 3.`,
zh:`是什么：复数的不定冠词，相当于西班牙语的 unos / unas。

结构：一 + 些 + 名词，不用量词。一些猫、一些老师、一些苹果。

Michelle 老师的表：
不定　单数：一 + 量词（一只猫）　复数：一些（一些猫）
确定　单数：这/那 + 量词（这只猫）　复数：这些/那些（这些猫）

发音：yìxiē。些 是第一声，所以 一 读第四声。`}},
  {id:"cla-10",s:"这些",t:"這些",py:"zhèxiē",es:"estos / los",en:"these / the (plural)",
   x:{
es:`QUÉ ES: «estos / estas», y también la forma de decir «los / las» en plural.

POR QUÉ «LOS»: como el chino no tiene artículo definido, para decir «LOS gatos» se dice «ESTOS gatos»: 这些猫 (zhèxiē māo). Es lo mismo que pasa en singular con 这只猫 (zhè zhī māo) = «el gato».

CÓMO SE ARMA:
这 (zhè, este) + 些 (xiē, plural) + sustantivo.
这些猫 (zhèxiē māo) los gatos, estos gatos · 这些老师 (zhèxiē lǎoshī) los profesores.
SIN clasificador: 些 ya ocupa su lugar. 这些只猫 (zhèxiē zhī māo) está mal.

COMPARACIÓN RÁPIDA:
这只猫 (zhè zhī māo)  el gato / este gato   (singular: 这 zhè + 只 zhī)
这些猫 (zhèxiē māo)  los gatos / estos gatos   (plural: 这 + 些 xiē)

LOS CARACTERES:
这 (zhè): 辶 (zǒu, un pie avanzando por un camino) + 文 (wén); en tradicional 這 (zhè) lleva 言 (yán), hablar: señalar mientras se habla.
些 (xiē): 此 (cǐ, la huella de un pie parada «acá») sobre 二 (èr): una cantidad chica.

PRONUNCIACIÓN: zhèxiē. zh con la lengua curvada hacia atrás; x con la lengua plana adelante. Es un buen ejercicio de contraste.`,
en:`WHAT IT IS: "these", and also the way to say "the" in the plural.

WHY "THE": since Chinese has no definite article, to say "THE cats" you say "THESE cats": 这些猫 (zhèxiē māo). It's what happens in the singular too, with 这只猫 (zhè zhī māo) = "the cat".

HOW IT'S BUILT:
这 (zhè, this) + 些 (xiē, plural) + noun.
这些猫 (zhèxiē māo) the cats, these cats · 这些老师 (zhèxiē lǎoshī) the teachers.
NO measure word: 些 already takes its place. 这些只猫 (zhèxiē zhī māo) is wrong.

QUICK COMPARISON:
这只猫 (zhè zhī māo)  the cat / this cat   (singular: 这 zhè + 只 zhī)
这些猫 (zhèxiē māo)  the cats / these cats   (plural: 这 + 些 xiē)

THE CHARACTERS:
这 (zhè): 辶 (zǒu, a foot moving along a road) + 文 (wén); traditional 這 (zhè) has 言 (yán), speech: pointing while talking.
些 (xiē): 此 (cǐ, a footprint standing "here") over 二: a small amount.

PRONUNCIATION: zhèxiē. zh with the tongue curled back; x with the tongue flat and forward. A good contrast drill.`,
zh:`是什么："这些"，也是复数的"the"。

为什么：中文没有定冠词，所以"the cats"说成"这些猫"，和单数"这只猫"一样。

结构：这 + 些 + 名词，不用量词，不能说"这些只猫"。
这只猫（单数：这 + 只）
这些猫（复数：这 + 些）

发音：zhèxiē。zh 卷舌，x 舌面，是很好的对比练习。`}},
  {id:"cla-11",s:"那些",py:"nàxiē",es:"esos / esas",en:"those",
   x:{
es:`QUÉ ES: «esos / esas», el plural de 那 (nà).

CÓMO SE ARMA:
那 (nà, ese) + 些 (xiē, plural) + sustantivo. SIN clasificador.
那些老师 (nàxiē lǎoshī) esos profesores · 那些猫 (nàxiē māo) esos gatos.

LA MISMA LÓGICA QUE 这些 (zhèxiē):
singular: 那个老师 (nà ge lǎoshī) ese profesor (那 nà + 个 gè)
plural:   那些老师 (nàxiē lǎoshī) esos profesores (那 + 些 xiē)
El 些 reemplaza al clasificador. 那些个老师 (nàxiē ge lǎoshī) está mal.

LOS CARACTERES:
那 (nà): prestado por el sonido; el 阝 (fù) de la derecha es «pueblo», de cuando era nombre de lugar.
些 (xiē): 此 (cǐ, un pie parado acá) sobre 二 (èr): unos pocos.

PRONUNCIACIÓN: nàxiē. También se oye nèixiē.`,
en:`WHAT IT IS: "those", the plural of 那 (nà).

HOW IT'S BUILT:
那 (nà, that) + 些 (xiē, plural) + noun. NO measure word.
那些老师 (nàxiē lǎoshī) those teachers · 那些猫 (nàxiē māo) those cats.

SAME LOGIC AS 这些 (zhèxiē):
singular: 那个老师 (nà ge lǎoshī) that teacher (那 nà + 个 gè)
plural:   那些老师 (nàxiē lǎoshī) those teachers (那 + 些 xiē)
些 replaces the measure word. 那些个老师 (nàxiē ge lǎoshī) is wrong.

THE CHARACTERS:
那 (nà): borrowed for its sound; the 阝 (fù) on the right means "town", from when it was a place name.
些 (xiē): 此 (cǐ, a foot standing here) over 二: a few.

PRONUNCIATION: nàxiē. You also hear nèixiē.`,
zh:`是什么："那些"，那 的复数。结构：那 + 些 + 名词，不用量词：那些老师、那些猫。
单数：那个老师；复数：那些老师。
发音：nàxiē，也读 nèixiē。`}},
  {id:"cla-12",s:"一只猫",t:"一隻貓",py:"yì zhī māo",es:"un gato",en:"a cat",
   x:{
es:`QUÉ ES: «un gato». Así se dice el artículo «un / una» en chino: con el número 一 (yī) más el clasificador.

LAS TRES PIEZAS:
一 (yī) uno: una varilla de contar.
只 (zhī) clasificador de animales. En tradicional 隻 (zhī): un pájaro 隹 (zhuī) en la mano 又 (yòu), «uno solo».
猫 (māo) gato: 犭 (quǎn, animal de cuatro patas) + 苗 miáo, que está por el sonido (¡el maullido!).

POR QUÉ 只 (zhī) Y NO 个 (gè): el gato es un animal, y los animales llevan 只. Michelle: para gato NO se puede usar 条 (tiáo, ese es para cosas largas), solo 只.

EL CUADRO DE ARTÍCULOS:
un gato: 一只猫 (yì zhī māo) · unos gatos: 一些猫 (yìxiē māo) · el gato: 这只猫 (zhè zhī māo) · los gatos: 这些猫 (zhèxiē māo)

PRONUNCIACIÓN: yì zhī māo. El 一 (yī) se dice yì (cuarto tono) porque 只 (zhī) es primer tono. Después 只 y 猫 (māo) son los dos primer tono: planos y altos, como la bocina.

EN CLASE: 我有一只猫 (wǒ yǒu yì zhī māo) tengo un gato (Oliver).`,
en:`WHAT IT IS: "a cat". This is how Chinese says "a / an": the number 一 (yī) plus the measure word.

THE THREE PIECES:
一 (yī) one: a counting rod.
只 (zhī) measure word for animals. Traditional 隻 (zhī): a bird 隹 (zhuī) in the hand 又 (yòu), "a single one".
猫 (māo) cat: 犭 (quǎn, four-legged animal) + 苗 miáo, there for the sound (the miaow!).

WHY 只 (zhī) AND NOT 个 (gè): a cat is an animal, and animals take 只. Michelle: for a cat you can NOT use 条 (tiáo, that's for long things), only 只.

THE ARTICLES TABLE:
a cat: 一只猫 (yì zhī māo) · some cats: 一些猫 (yìxiē māo) · the cat: 这只猫 (zhè zhī māo) · the cats: 这些猫 (zhèxiē māo)

PRONUNCIATION: yì zhī māo. 一 (yī) is yì (4th tone) because 只 (zhī) is a 1st tone. Then 只 and 猫 (māo) are both 1st tone: flat and high, like a car horn.

IN CLASS: 我有一只猫 (wǒ yǒu yì zhī māo) I have a cat (Oliver).`,
zh:`是什么："一只猫"，中文用 一 + 量词 表示不定冠词。

三部分：一；只（动物的量词，繁体 隻：手里一只鸟）；猫（犭 + 苗 表音，miáo 正好是猫叫）。

为什么用 只：猫是动物；猫不能用 条。

发音：yì zhī māo，只 是第一声，所以 一 读 yì。
课上：我有一只猫（Oliver）。`}},
  {id:"cla-13",s:"一些猫",t:"一些貓",py:"yìxiē māo",es:"unos gatos",en:"some cats",
   x:{
es:`QUÉ ES: «unos gatos», el plural de 一只猫 (yì zhī māo).

QUÉ CAMBIA DEL SINGULAR AL PLURAL:
一只猫 (yì zhī māo) → 一些猫 (yìxiē māo)
El clasificador 只 (zhī) DESAPARECE y en su lugar entra 些 (xiē). El resto queda igual.
No se dice 一些只猫 (yìxiē zhī māo), y tampoco 两些猫 (liǎng xiē māo).

POR QUÉ: 些 (xiē) funciona como un clasificador universal para el plural, sirve para cualquier sustantivo. Por eso Michelle dijo que en plural te podés «olvidar de los clasificadores».

OJO: 猫 (māo) no cambia. En chino los sustantivos no tienen plural (no hay «-s»): 猫 es gato y gatos. El plural lo marca 些 (xiē, o un número).

PRONUNCIACIÓN: yìxiē māo, los tres en tono alto al final: xiē y māo primer tono.`,
en:`WHAT IT IS: "some cats", the plural of 一只猫 (yì zhī māo).

WHAT CHANGES FROM SINGULAR TO PLURAL:
一只猫 (yì zhī māo) → 一些猫 (yìxiē māo)
The measure word 只 (zhī) DISAPPEARS and 些 (xiē) takes its place. Everything else stays.
You don't say 一些只猫 (yìxiē zhī māo), nor 两些猫 (liǎng xiē māo).

WHY: 些 (xiē) works as a universal plural measure word for any noun. That's why Michelle said that in the plural you can "forget the measure words".

NOTE: 猫 (māo) doesn't change. Chinese nouns have no plural form (no "-s"): 猫 is cat and cats. The plural is marked by 些 (xiē, or a number).

PRONUNCIATION: yìxiē māo; xiē and māo are both 1st tone, high and flat.`,
zh:`是什么："一些猫"，一只猫 的复数。
变化：一只猫 → 一些猫，量词 只 去掉，换成 些。不能说"一些只猫"。
名词本身没有复数形式：猫 就是一只或很多只，复数靠 些 或数字表示。`}},
  {id:"cla-14",s:"这只猫",t:"這隻貓",py:"zhè zhī māo",es:"el gato / este gato",en:"the cat / this cat",
   x:{
es:`QUÉ ES: «el gato». Este es EL ejemplo de la clase 3 para el artículo definido.

EL PROBLEMA: en chino no existe «el / la». Michelle: «en chino no existe el, o la, o the».
LA SOLUCIÓN: usar «este» (这 zhè) o «ese» (那 nà). 这只猫 (zhè zhī māo) significa literalmente «este gato», y se usa donde en español dirías «el gato».

LAS TRES PIEZAS:
这 (zhè) este: 辶 (zǒu, un pie en camino) + 文 (wén); en tradicional 這 (zhè), con 言 (yán, hablar): señalar al hablar.
只 (zhī) clasificador de animales: en tradicional 隻 (zhī), un pájaro en la mano.
猫 (māo) gato: 犭 (quǎn, animal) + 苗 (sonido miáo).

LA REGLA IMPORTANTE: cuando hay sustantivo, el clasificador nunca se cae. 这猫 (zhè māo) está mal; 这只猫 (zhè zhī māo) está bien.

EN CLASE: 这只猫今天早上吃一条鱼 (zhè zhī māo jīntiān zǎoshang chī yì tiáo yú) «el gato comió un pescado esta mañana».

PRONUNCIACIÓN: zhè zhī māo. zh-zh seguidos: lengua atrás las dos veces. Cuarto, primero, primero.`,
en:`WHAT IT IS: "the cat". This is THE class 3 example for the definite article.

THE PROBLEM: Chinese has no "the". Michelle: "in Chinese there's no el, or la, or the".
THE SOLUTION: use "this" (这 zhè) or "that" (那 nà). 这只猫 (zhè zhī māo) literally means "this cat", and it's used where English says "the cat".

THE THREE PIECES:
这 (zhè) this: 辶 (zǒu, a foot on a road) + 文 (wén); traditional 這 (zhè), with 言 (yán, speech): pointing as you speak.
只 (zhī) animal measure word: traditional 隻 (zhī), a bird in the hand.
猫 (māo) cat: 犭 (quǎn, animal) + 苗 (sound miáo).

THE IMPORTANT RULE: when there's a noun, the measure word never drops. 这猫 (zhè māo) is wrong; 这只猫 (zhè zhī māo) is right.

IN CLASS: 这只猫今天早上吃一条鱼 (zhè zhī māo jīntiān zǎoshang chī yì tiáo yú) "the cat ate a fish this morning".

PRONUNCIATION: zhè zhī māo. Two zh in a row: tongue back both times. 4th, 1st, 1st.`,
zh:`是什么：相当于"the cat"，第三课定冠词的例子。
中文没有定冠词，所以用"这"或"那"：这只猫。
规则：有名词时量词不能省，不能说"这猫"。
课上：这只猫今天早上吃一条鱼。
发音：zhè zhī māo，两个卷舌音。`}},
  {id:"cla-15",s:"那只猫",t:"那隻貓",py:"nà zhī māo",es:"ese gato",en:"that cat",
   x:{
es:`QUÉ ES: «ese gato». También puede traducir «el gato» cuando el gato está lejos o ya se habló de él.

CÓMO SE ARMA: igual que 这只猫 (zhè zhī māo), cambiando 这 (zhè) por 那 (nà).
那 ese + 只 (zhī) clasificador de animales + 猫 (māo) gato.
Michelle lo practicó en clase: 这只猫 / 那只猫 (nà zhī māo).

LAS PIEZAS:
那 (nà): prestado por el sonido (era nombre de un lugar; 阝 fù = pueblo).
只 (zhī): en tradicional 隻 (zhī), un pájaro 隹 (zhuī) en la mano 又 (yòu).
猫 (māo): 犭 (quǎn, animal) + 苗 (miáo, sonido).

PLURAL: 那些猫 (nàxiē māo) esos gatos (sin 只 zhī).

PRONUNCIACIÓN: nà zhī māo.`,
en:`WHAT IT IS: "that cat". It can also translate "the cat" when the cat is far away or was already mentioned.

HOW IT'S BUILT: like 这只猫 (zhè zhī māo), swapping 这 (zhè) for 那 (nà).
那 that + 只 (zhī) animal measure word + 猫 (māo) cat.
Michelle drilled this in class: 这只猫 / 那只猫 (nà zhī māo).

THE PIECES:
那 (nà): borrowed for its sound (it was a place name; 阝 fù = town).
只 (zhī): traditional 隻 (zhī), a bird 隹 (zhuī) in the hand 又 (yòu).
猫 (māo): 犭 (quǎn, animal) + 苗 (miáo, sound).

PLURAL: 那些猫 (nàxiē māo) those cats (no 只 zhī).

PRONUNCIATION: nà zhī māo.`,
zh:`是什么："那只猫"，也可以表示已经提过或比较远的"the cat"。
结构：那 + 只 + 猫。复数：那些猫（不用 只）。`}},
  {id:"cla-16",s:"这些猫",t:"這些貓",py:"zhèxiē māo",es:"los gatos / estos gatos",en:"the cats / these cats",
   x:{
es:`QUÉ ES: «los gatos» o «estos gatos». Es el plural de 这只猫 (zhè zhī māo).

EL CAMBIO CLAVE:
这只猫 (zhè zhī māo, el gato)  →  这些猫 (zhèxiē māo, los gatos)
这 (zhè) queda igual. 只 (zhī) se va. Entra 些 (xiē). 猫 (māo) queda igual.
Michelle: «para el plural, el clasificador siempre es 些».

POR QUÉ «LOS»: como no hay artículo definido en chino, «los» se dice con «estos». Es la misma idea que en singular.

ERRORES TÍPICOS:
这些只猫 (zhèxiē zhī māo) ✗ (些 xiē y 只 zhī no van juntos)
这猫们 (zhè māo men) ✗ (们 men es solo para personas, nunca para animales ni cosas)

LOS CARACTERES:
这 (zhè) este: 辶 (zǒu, pie en camino) + 文 (wén); tradicional 這 (zhè) con 言 (yán), señalar al hablar.
些 (xiē) algunos: 此 (cǐ, un pie parado acá) sobre 二 (èr, dos).
猫 (māo) gato: 犭 (quǎn, animal de cuatro patas) + 苗 (sonido miáo).

PRONUNCIACIÓN: zhèxiē māo.`,
en:`WHAT IT IS: "the cats" or "these cats". The plural of 这只猫 (zhè zhī māo).

THE KEY CHANGE:
这只猫 (zhè zhī māo, the cat)  →  这些猫 (zhèxiē māo, the cats)
这 (zhè) stays. 只 (zhī) goes. 些 (xiē) comes in. 猫 (māo) stays.
Michelle: "for the plural, the measure word is always 些".

WHY "THE": since Chinese has no definite article, "the" is said with "these". Same idea as in the singular.

TYPICAL MISTAKES:
这些只猫 (zhèxiē zhī māo) ✗ (些 xiē and 只 zhī don't go together)
这猫们 (zhè māo men) ✗ (们 men is only for people, never animals or things)

THE CHARACTERS:
这 (zhè) this: 辶 (zǒu, foot on a road) + 文 (wén); traditional 這 (zhè) with 言 (yán), pointing while speaking.
些 (xiē) some: 此 (cǐ, a foot standing here) over 二 (two).
猫 (māo) cat: 犭 (quǎn, four-legged animal) + 苗 (sound miáo).

PRONUNCIATION: zhèxiē māo.`,
zh:`是什么："这些猫"，也就是复数的"the cats"，这只猫 的复数。
关键变化：这只猫 → 这些猫：这 不变，只 去掉，换成 些。
常见错误："这些只猫"✗；"这猫们"✗（们 只用于人）。
发音：zhèxiē māo。`}},
  {id:"cla-17",s:"一个老师",t:"一個老師",py:"yí ge lǎoshī",es:"un profesor",en:"a teacher",
   x:{
es:`QUÉ ES: «un profesor». El ejemplo de la clase para personas.

LAS PIEZAS:
一 (yī) uno.
个 (gè) clasificador general: en su origen 箇 (gè), una caña de bambú 竹 (zhú) contada de a una.
老师 (lǎoshī) profesor: 老 (lǎo, un anciano encorvado con bastón; acá es respeto, no edad) + 师 (shī, maestro, experto).

POR QUÉ 个 (gè): los profesores son personas, y para personas se usa 个 (neutral) o 位 (wèi, respetuoso). 一位老师 (yí wèi lǎoshī) también está bien y suena más formal.

SI QUERÉS MARCAR EL GÉNERO (Michelle, clase 3): 一个男老师 (yí ge nán lǎoshī) un profesor (hombre) · 一个女老师 (yí ge nǚ lǎoshī) una profesora. Solo si importa; normalmente no se dice.

PRONUNCIACIÓN: yí ge lǎoshī. Atención al 一 (yī): antes de 个 (gè) se dice yí (segundo tono), porque 个 es originalmente cuarto tono. 个 suena suave, en tono neutro.`,
en:`WHAT IT IS: "a teacher". The class example for people.

THE PIECES:
一 (yī) one.
个 general measure word: originally 箇 (gè), a bamboo cane 竹 (zhú) counted one by one.
老师 (lǎoshī) teacher: 老 (lǎo, a stooped old man with a stick; here respect, not age) + 师 (shī, master, expert).

WHY 个 (gè): teachers are people, and people take 个 (neutral) or 位 (wèi, respectful). 一位老师 (yí wèi lǎoshī) is also fine and sounds more formal.

IF YOU WANT TO MARK GENDER (Michelle, class 3): 一个男老师 (yí ge nán lǎoshī) a (male) teacher · 一个女老师 (yí ge nǚ lǎoshī) a (female) teacher. Only if it matters; normally you don't.

PRONUNCIATION: yí ge lǎoshī. Watch the 一 (yī): before 个 (gè) it's yí (2nd tone), because 个 is originally a 4th tone. 个 sounds soft, neutral tone.`,
zh:`是什么："一个老师"，课上关于人的例子。
老师是人，用 个（普通）或 位（尊敬）。想强调性别时说 一个男老师 / 一个女老师。
发音：yí ge lǎoshī，一 在 个 前读第二声，个 读轻声。`}},
  {id:"cla-18",s:"这个老师",t:"這個老師",py:"zhè ge lǎoshī",es:"el profesor / este profesor",en:"the teacher / this teacher",
   x:{
es:`QUÉ ES: «el profesor» (o «este profesor»). La versión con personas de 这只猫 (zhè zhī māo).

CÓMO SE ARMA:
这 (zhè) este + 个 (gè) clasificador de personas + 老师 (lǎoshī) profesor.
Michelle lo escribió en clase: 这个老师 (zhè ge lǎoshī) / 那个老师 (nà ge lǎoshī). Como no existe «el», se dice «este».

COMPARÁ CON EL GATO:
这只猫 (zhè zhī māo) el gato (animal → 只 zhī)
这个老师 (zhè ge lǎoshī) el profesor (persona → 个 gè)
Lo único que cambia es el clasificador, según qué cosa sea.

FORMAL: 这位老师 (zhè wèi lǎoshī, con 位 wèi) suena más respetuoso, por ejemplo al presentar a alguien.

PLURAL: 这些老师 (zhèxiē lǎoshī) los profesores (sin 个 gè).

PRONUNCIACIÓN: zhè ge lǎoshī; a menudo zhèige.`,
en:`WHAT IT IS: "the teacher" (or "this teacher"). The people version of 这只猫 (zhè zhī māo).

HOW IT'S BUILT:
这 (zhè) this + 个 (gè) measure word for people + 老师 (lǎoshī) teacher.
Michelle wrote it in class: 这个老师 (zhè ge lǎoshī) / 那个老师 (nà ge lǎoshī). Since "the" doesn't exist, you say "this".

COMPARE WITH THE CAT:
这只猫 (zhè zhī māo) the cat (animal → 只 zhī)
这个老师 (zhè ge lǎoshī) the teacher (person → 个 gè)
Only the measure word changes, depending on what the thing is.

FORMAL: 这位老师 (zhè wèi lǎoshī, with 位 wèi) sounds more respectful, e.g. when introducing someone.

PLURAL: 这些老师 (zhèxiē lǎoshī) the teachers (no 个 gè).

PRONUNCIATION: zhè ge lǎoshī; often zhèige.`,
zh:`是什么："这个老师"，相当于"the teacher"。
比较：这只猫（动物用 只）/ 这个老师（人用 个），只是量词不同。
更尊敬：这位老师。复数：这些老师。`}},
  {id:"cla-19",s:"那些老师",t:"那些老師",py:"nàxiē lǎoshī",es:"esos profesores",en:"those teachers",
   x:{
es:`QUÉ ES: «esos profesores».

CÓMO SE ARMA: 那 (nà) ese + 些 (xiē) plural + 老师 (lǎoshī). Sin 个 (gè), porque 些 lo reemplaza.
Singular → plural: 那个老师 (nà ge lǎoshī) → 那些老师 (nàxiē lǎoshī).

OJO CON 们 (men): con personas existe también 们 (老师们 lǎoshī men «los profesores», como grupo al que le hablás: 老师们好 lǎoshī men hǎo «hola, profesores»). Pero 们 no se combina con números ni con 些 (xiē): 那些老师们 (nàxiē lǎoshī men) suena redundante, y 三个老师们 (sān ge lǎoshī men) está mal.

LOS CARACTERES:
那 (nà): prestado por el sonido (阝 fù = pueblo).
些 (xiē): 此 (cǐ, un pie parado acá) + 二 (èr): unos pocos.
老师 (lǎoshī): 老 (lǎo, el anciano con bastón, respeto) + 师 (shī, maestro).`,
en:`WHAT IT IS: "those teachers".

HOW IT'S BUILT: 那 (nà) that + 些 (xiē) plural + 老师 (lǎoshī). No 个 (gè), because 些 replaces it.
Singular → plural: 那个老师 (nà ge lǎoshī) → 那些老师 (nàxiē lǎoshī).

WATCH OUT FOR 们 (men): with people there's also 们 (老师们 lǎoshī men "teachers", as a group you're addressing: 老师们好 lǎoshī men hǎo "hello, teachers"). But 们 doesn't combine with numbers or with 些 (xiē): 那些老师们 (nàxiē lǎoshī men) sounds redundant, and 三个老师们 (sān ge lǎoshī men) is wrong.

THE CHARACTERS:
那 (nà): borrowed for its sound (阝 fù = town).
些 (xiē): 此 (cǐ, a foot standing here) + 二 (èr): a few.
老师 (lǎoshī): 老 (lǎo, the old man with a stick, respect) + 师 (shī, master).`,
zh:`是什么："那些老师"。结构：那 + 些 + 老师，不用 个。
注意：们 也表示人的复数（老师们好），但不能和数字或 些 一起用：三个老师们 ✗。`}},
  {id:"cla-20",s:"两个老师",t:"兩個老師",py:"liǎng ge lǎoshī",es:"dos profesores",en:"two teachers",
   x:{
es:`QUÉ ES: «dos profesores».

LA TRAMPA: en chino hay DOS palabras para «dos».
二 èr: para contar (uno, dos, tres…) y dentro de números (十二 shí'èr, 二十 èrshí).
两 liǎng: cuando va delante de un clasificador. 两个 (liǎng ge), 两只 (liǎng zhī), 两条 (liǎng tiáo).
Entonces «dos profesores» es 两个老师 (liǎng ge lǎoshī), nunca 二个老师 (èr ge lǎoshī).
Michelle, clase 3: «dos se dice 两个».

EL CARÁCTER 两 (liǎng, tradicional 兩 liǎng): originalmente un yugo para dos animales, o los dos platillos de una balanza: «un par». Tiene sentido: es el «dos» de cosas que se cuentan.

EL RESTO: 个 (gè) clasificador de personas + 老师 (lǎoshī) profesor.

EN CLASE: 我有一个男老师和两个女老师 (wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī) «tengo un profesor y dos profesoras».

PRONUNCIACIÓN: liǎng, tercer tono (baja y sube). 个 (gè) en tono neutro.`,
en:`WHAT IT IS: "two teachers".

THE TRAP: Chinese has TWO words for "two".
二 èr: for counting (one, two, three…) and inside numbers (十二 shí'èr, 二十 èrshí).
两 liǎng: when it comes before a measure word. 两个 (liǎng ge), 两只 (liǎng zhī), 两条 (liǎng tiáo).
So "two teachers" is 两个老师 (liǎng ge lǎoshī), never 二个老师 (èr ge lǎoshī).
Michelle, class 3: "two is 两个".

THE CHARACTER 两 (liǎng, traditional 兩 liǎng): originally a yoke for two animals, or the two pans of a scale: "a pair". It makes sense: it's the "two" for counted things.

THE REST: 个 (gè) measure word for people + 老师 (lǎoshī) teacher.

IN CLASS: 我有一个男老师和两个女老师 (wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī) "I have one male teacher and two female teachers".

PRONUNCIATION: liǎng, 3rd tone (dips and rises). 个 (gè) in the neutral tone.`,
zh:`是什么："两个老师"。
陷阱：中文有两个"二"：二 用于数数和数字中间（十二、二十）；两 用于量词前（两个、两只、两条）。所以说 两个老师，不说 二个老师。
两（繁体 兩）：本来是车轭或天平的两个秤盘，表示"一对"。
课上：我有一个男老师和两个女老师。`}},
  {id:"cla-21",s:"一条鱼",t:"一條魚",py:"yì tiáo yú",es:"un pez / un pescado",en:"a fish",
   x:{
es:`QUÉ ES: «un pez» o «un pescado» (el chino no distingue: 鱼 yú es el animal y la comida).

POR QUÉ 条 (tiáo) Y NO 只 (zhī): Michelle explicó que los peces tienen forma alargada, así que llevan 条, el clasificador de las cosas largas y finas. (Con 只 también se oye, pero en clase se usó 条.)

LAS PIEZAS:
一 (yī) uno.
条 (tiáo): en tradicional 條 (tiáo), con 木 (mù, árbol) abajo: una rama larga y delgada.
鱼 (yú) pez: un pictograma completo. Arriba la cabeza, en el medio el cuerpo con escamas (el cuadrado con la cruz), abajo la cola. En tradicional 魚 (yú), la cola son cuatro puntos, como en 馬 (mǎ, caballo).

EN CLASE: 这只猫今天早上吃一条鱼 (zhè zhī māo jīntiān zǎoshang chī yì tiáo yú) «el gato comió un pescado esta mañana».

PRONUNCIACIÓN: yì tiáo yú. 一 (yī) es yì porque 条 (tiáo) es segundo tono. yú: la ü es la u francesa (la y escribe la ü sin puntos).`,
en:`WHAT IT IS: "a fish" (Chinese doesn't distinguish the animal from the food: 鱼 yú is both).

WHY 条 (tiáo) AND NOT 只 (zhī): Michelle explained that fish are elongated, so they take 条, the measure word for long thin things. (You also hear 只, but 条 was used in class.)

THE PIECES:
一 (yī) one.
条 (tiáo): traditional 條 (tiáo), with 木 (mù, tree) at the bottom: a long thin branch.
鱼 (yú) fish: a complete pictogram. Head on top, scaly body in the middle (the box with the cross), tail below. In traditional 魚 (yú) the tail is four dots, as in 馬 (mǎ, horse).

IN CLASS: 这只猫今天早上吃一条鱼 (zhè zhī māo jīntiān zǎoshang chī yì tiáo yú) "the cat ate a fish this morning".

PRONUNCIATION: yì tiáo yú. 一 (yī) is yì because 条 (tiáo) is 2nd tone. yú: the ü is the French u (the y spells ü without dots).`,
zh:`是什么："一条鱼"，鱼 既是动物也是食物。
为什么用 条：鱼是长形的（也有人说 一只鱼）。
鱼：象形字，上面头，中间有鳞的身体，下面尾巴；繁体 魚 的尾巴是四点，和 馬 一样。
课上：这只猫今天早上吃一条鱼。
发音：yì tiáo yú，yú 的 ü 要圆唇。`}},
  {id:"cla-22",s:"一条蛇",t:"一條蛇",py:"yì tiáo shé",es:"una víbora",en:"a snake",
   x:{
es:`QUÉ ES: «una víbora». El ejemplo más claro de 条 (tiáo): nada es más largo y fino que una serpiente. Michelle la usó para explicar el clasificador.

LAS PIEZAS:
一 (yī) uno + 条 (tiáo) clasificador de cosas largas (tradicional 條 tiáo: una rama larga, con 木 mù árbol).
蛇 (shé) serpiente: 虫 (chóng, el dibujo de un bicho o reptil con la cabeza levantada) + 它 (tā).
Lo curioso: 它 era originalmente TAMBIÉN el dibujo de una cobra. La serpiente aparece dos veces en el carácter.
Hoy 它 se usa como pronombre «it» (para animales y cosas), y 蛇 quedó para la serpiente.

PRONUNCIACIÓN: yì tiáo shé. shé segundo tono, con la lengua atrás (sh).`,
en:`WHAT IT IS: "a snake". The clearest example of 条 (tiáo): nothing is longer and thinner than a snake. Michelle used it to explain the measure word.

THE PIECES:
一 (yī) one + 条 (tiáo) measure word for long things (traditional 條 tiáo: a long branch, with 木 mù tree).
蛇 (shé) snake: 虫 (chóng, the drawing of a bug or reptile with its head raised) + 它 (tā).
The curious part: 它 was originally ALSO a drawing of a cobra. The snake appears twice in the character.
Today 它 is used as the pronoun "it" (for animals and things), and 蛇 kept the meaning snake.

PRONUNCIATION: yì tiáo shé. shé is 2nd tone, tongue back (sh).`,
zh:`是什么："一条蛇"，条 最典型的例子。
蛇：虫（抬头的虫或爬行动物）+ 它（本来也是蛇的样子），蛇在字里出现了两次。现在 它 当代词用。
发音：yì tiáo shé。`}},
  {id:"cla-23",s:"围巾",t:"圍巾",py:"wéijīn",es:"bufanda",en:"scarf",
   x:{
es:`QUÉ ES: «bufanda». Michelle la dio como ejemplo de objeto (no animal) que lleva 条 (tiáo): 一条围巾 (yì tiáo wéijīn).

LOS CARACTERES:
围 (wéi) rodear: 囗 (wéi, un recinto cerrado, un cuadrado) con 韦 (wéi) adentro. 韦 era originalmente dos pies dando la vuelta alrededor de algo. Caminar alrededor de un recinto: rodear. En tradicional 圍 (wéi) se ve igual, con el 韋 (wéi) completo.
巾 (jīn) paño: un trapo colgando de una barra. El mismo 巾 que está en 市 (shì, mercado: los toldos de los puestos) y en 师 (shī, maestro).
El paño que rodea (el cuello): bufanda.

POR QUÉ 条 (tiáo): la bufanda es larga y fina, como la víbora y el pez. Lo que importa para el clasificador es la FORMA, no si está vivo.

PRONUNCIACIÓN: wéijīn. wéi segundo tono, jīn primer tono.`,
en:`WHAT IT IS: "scarf". Michelle gave it as an example of an object (not an animal) that takes 条 (tiáo): 一条围巾 (yì tiáo wéijīn).

THE CHARACTERS:
围 (wéi) to surround: 囗 (wéi, a closed enclosure, a square) with 韦 (wéi) inside. 韦 was originally two feet going around something. Walking around an enclosure: surrounding. Traditional 圍 (wéi) looks the same, with the full 韋 (wéi).
巾 (jīn) cloth: a rag hanging from a bar. The same 巾 as in 市 (shì, market: the stall awnings) and 师 (shī, master).
The cloth that goes around (the neck): scarf.

WHY 条 (tiáo): a scarf is long and thin, like the snake and the fish. What matters for the measure word is the SHAPE, not whether it's alive.

PRONUNCIATION: wéijīn. wéi 2nd tone, jīn 1st tone.`,
zh:`是什么："围巾"，一条围巾，是用 条 的物品例子。
围：囗（围起来的地方）里面 韦（绕圈走的两只脚），绕着走就是"围"。
巾：挂在横杆上的布，和 市、师 里的 巾 一样。围在脖子上的布。
量词看形状，不看是不是活的。`}},
  {id:"cla-24",s:"一条狗",t:"一條狗",py:"yì tiáo gǒu",es:"un perro (también 一只狗)",en:"a dog (also 一只狗)",
   x:{
es:`QUÉ ES: «un perro». Lo especial es que el perro acepta DOS clasificadores:
一只狗 (yì zhī gǒu, como animal, con 只 zhī)
一条狗 (yì tiáo gǒu, como algo alargado, con 条 tiáo)
Los dos son correctos y comunes. Michelle bromeó con el perro salchicha: el más «条» de todos.

PERO EL GATO NO: Michelle fue clara, 一条猫 (yì tiáo māo) está mal. Solo 一只猫 (yì zhī māo).
Moraleja: los clasificadores siguen una lógica (animales → 只 zhī, cosas largas → 条 tiáo), pero hay excepciones que se aprenden de a una.

LAS PIEZAS:
条 (tiáo): tradicional 條 (tiáo), una rama larga (木 mù).
狗 (gǒu) perro: 犭 (quǎn, 犬 quǎn perro aplastado: un perro de perfil con la cola enroscada) + 句 (jù, solo por el sonido).

PRONUNCIACIÓN: yì tiáo gǒu. gǒu tercer tono: baja y sube.`,
en:`WHAT IT IS: "a dog". What's special is that a dog accepts TWO measure words:
一只狗 (yì zhī gǒu, as an animal, with 只 zhī)
一条狗 (yì tiáo gǒu, as something long, with 条 tiáo)
Both are correct and common. Michelle joked about the sausage dog: the most "条" of all.

BUT NOT THE CAT: Michelle was clear, 一条猫 (yì tiáo māo) is wrong. Only 一只猫 (yì zhī māo).
Moral: measure words follow a logic (animals → 只 zhī, long things → 条 tiáo), but there are exceptions you learn one at a time.

THE PIECES:
条 (tiáo): traditional 條 (tiáo), a long branch (木 mù).
狗 (gǒu) dog: 犭 (quǎn, 犬 quǎn dog, squeezed: a dog in profile with a curled tail) + 句 (jù, sound only).

PRONUNCIATION: yì tiáo gǒu. gǒu is 3rd tone: dips and rises.`,
zh:`是什么："一条狗"。狗可以用两个量词：一只狗 / 一条狗，都对。
但猫不行：一条猫 ✗，只能说 一只猫。量词有规律（动物用 只，长的用 条），但也有例外要一个一个记。
狗：犭（犬）+ 句（表音）。`}}
  ]
});
