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
es:`QUÉ ES: «mamá». La forma de todos los días (la formal es 母亲).

EL CARÁCTER 妈:
女 a la izquierda: la mujer arrodillada con los brazos cruzados. Dice «esto es una mujer».
马 a la derecha: un caballo de perfil (crin arriba, patas abajo). Solo está por el SONIDO: mǎ → mā. El caballo no tiene nada que ver con las mamás.
Es el patrón más común de los caracteres chinos: una parte da el SIGNIFICADO (女) y la otra el SONIDO (马).
Se repite, como casi todas las palabras de familia: 妈妈.

LA TRAMPA DE LOS TONOS (clase 1): con el mismo sonido «ma» hay cinco palabras:
妈 mā mamá (plano, largo, «la bocina») · 麻 má adormecido · 马 mǎ caballo · 骂 mà retar · 吗 ma partícula de pregunta.
La sobrina de Michelle escuchó 妈妈骂马 «mamá reta al caballo» porque su hermana lo dijo muy rápido.

EN CLASE: 我妈妈叫 … mi mamá se llama… (sin 的, porque es familiar).

PRONUNCIACIÓN: māma. Primer tono plano, la segunda sílaba corta y sin tono. En tradicional 媽媽.`,
en:`WHAT IT IS: "mom". The everyday form (the formal one is 母亲).

THE CHARACTER 妈:
女 on the left: the kneeling woman with crossed arms. It says "this is a woman".
马 on the right: a horse in profile (mane on top, legs below). It's only there for the SOUND: mǎ → mā. The horse has nothing to do with mothers.
This is the most common pattern in Chinese characters: one part gives the MEANING (女), the other the SOUND (马).
Doubled, like almost every family word: 妈妈.

THE TONE TRAP (class 1): the same sound "ma" gives five words:
妈 mā mom (flat, long, "the car horn") · 麻 má numb · 马 mǎ horse · 骂 mà scold · 吗 ma question particle.
Michelle's niece heard 妈妈骂马 "mom scolds the horse" because her sister said it too fast.

IN CLASS: 我妈妈叫 … my mom's name is… (no 的, since she's family).

PRONUNCIATION: māma. Flat 1st tone, the second syllable short and toneless. Traditional 媽媽.`,
zh:`是什么："妈妈"，日常说法（正式说 母亲）。妈：女（意思）+ 马（读音），这是形声字最常见的结构。同音不同调：妈、麻、马、骂、吗；妈妈骂马。我妈妈叫……（亲属不用 的）。`}},
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
es:`QUÉ ES: «madre», en registro formal o escrito. Al hablar con tu familia decís 妈妈; en un formulario, un discurso o el Día de la Madre (母亲节) aparece 母亲.

LOS CARACTERES:
母: es 女 (una mujer arrodillada) con dos puntos agregados, que representan los pechos: la mujer que amamanta. Michelle lo vio como «un nido con dos huevos». Con animales significa «hembra» (母狗).
亲: «pariente cercano, querido». En tradicional 親 lleva 見 (ver) a la derecha: los que ves de cerca, los tuyos. También en 父亲 (padre) y 亲 (querido, como saludan las tiendas en línea).
母亲 = «la madre, pariente cercana».

LA PAREJA: 父亲 padre (formal) ↔ 爸爸 papá.

PRONUNCIACIÓN: mǔqīn. Tercer tono y después primero. q con aire.`,
en:`WHAT IT IS: "mother", in formal or written register. At home you say 妈妈; on a form, in a speech or on Mother's Day (母亲节) you see 母亲.

THE CHARACTERS:
母: 女 (a kneeling woman) with two dots added for the breasts: the woman who nurses. Michelle saw "a nest with two eggs". With animals it means "female" (母狗).
亲: "close relative, dear". Traditional 親 has 見 (to see) on the right: the people you see up close, your own. Also in 父亲 (father) and 亲 (dear, as online shops say).
母亲 = "the mother, close kin".

THE PAIR: 父亲 father (formal) ↔ 爸爸 dad.

PRONUNCIATION: mǔqīn. 3rd tone then 1st. Aspirated q.`,
zh:`是什么："母亲"，正式或书面说法，口语说 妈妈。母：女 + 两点（乳房）。亲：繁体 親 有 見，常近看的人。母亲节。对应：父亲。`}},
  {id:"fam-05",s:"爸比",py:"bàbǐ",es:"papi",en:"daddy",cl:"fc",
   x:{
es:`QUÉ ES: «papi», cariñoso. Está en las tarjetas de familia de Michelle; es muy de Taiwán, y lo dicen sobre todo los chicos (y los adultos, en broma cariñosa).

DE DÓNDE VIENE: es una imitación del inglés «daddy»: 爸 bà (papá) + 比 bǐ, que se usa solo por el sonido. Lo mismo que 妈咪 imita «mommy».

LOS CARACTERES:
爸: 父 arriba (una mano sosteniendo un hacha: el que trabaja y manda; «padre» en chino antiguo) + 巴 abajo (sonido ba).
比: dos personas de perfil una al lado de la otra; significa «comparar». Acá NO importa el significado: solo suena bǐ.

LA ESCALERA DE FORMALIDAD: 父亲 (formal) → 爸爸 (normal) → 爸比 (cariñoso) · 爹 (antiguo, de campo).

PRONUNCIACIÓN: bàbǐ. Cuarto tono y después tercero.`,
en:`WHAT IT IS: "daddy", affectionate. It's in Michelle's family flashcards; very Taiwanese, said mostly by children (and by adults as an affectionate joke).

WHERE IT COMES FROM: an imitation of English "daddy": 爸 bà (dad) + 比 bǐ, used only for its sound. Just as 妈咪 imitates "mommy".

THE CHARACTERS:
爸: 父 on top (a hand holding an axe: the one who works and gives orders; "father" in old Chinese) + 巴 below (sound ba).
比: two people in profile side by side; it means "to compare". The meaning does NOT matter here: it only sounds bǐ.

THE FORMALITY LADDER: 父亲 (formal) → 爸爸 (normal) → 爸比 (affectionate) · 爹 (old-fashioned, rural).

PRONUNCIATION: bàbǐ. 4th tone then 3rd.`,
zh:`是什么："爸比"，模仿英文 daddy，台湾常用，亲昵的说法。爸：父 + 巴；比 只表音。正式程度：父亲 → 爸爸 → 爸比。`}},
  {id:"fam-06",s:"妈咪",t:"媽咪",py:"māmī",es:"mami",en:"mommy",cl:"fc",
   x:{
es:`QUÉ ES: «mami», cariñoso. Pareja de 爸比, de las tarjetas de Michelle.

DE DÓNDE VIENE: imita el inglés «mommy»: 妈 mā (mamá) + 咪 mī (solo por el sonido).

LOS CARACTERES:
妈: 女 (mujer) + 马 (caballo, sonido).
咪: 口 (boca) + 米 (arroz, sonido mǐ → mī). El 口 a la izquierda es la señal clásica de «carácter usado por su sonido» (como en 咖啡, café). 咪 también es el sonido para llamar a un gato: 咪咪.

LA ESCALERA: 母亲 (formal) → 妈妈 (normal) → 妈咪 (cariñoso) · 娘 (antiguo).

PRONUNCIACIÓN: māmī. Dos primeros tonos: altos y planos.`,
en:`WHAT IT IS: "mommy", affectionate. The pair of 爸比, from Michelle's flashcards.

WHERE IT COMES FROM: it imitates English "mommy": 妈 mā (mom) + 咪 mī (sound only).

THE CHARACTERS:
妈: 女 (woman) + 马 (horse, sound).
咪: 口 (mouth) + 米 (rice, sound mǐ → mī). 口 on the left is the classic sign of "character used for its sound" (as in 咖啡, coffee). 咪 is also the sound for calling a cat: 咪咪.

THE LADDER: 母亲 (formal) → 妈妈 (normal) → 妈咪 (affectionate) · 娘 (old-fashioned).

PRONUNCIATION: māmī. Two 1st tones: high and flat.`,
zh:`是什么："妈咪"，模仿英文 mommy。咪：口 + 米（表音），也用来叫猫。正式程度：母亲 → 妈妈 → 妈咪。`}},
  {id:"fam-07",s:"哥哥",py:"gēge",es:"hermano mayor",en:"older brother",
   x:{
es:`QUÉ ES: «hermano mayor» (mayor que vos).

LA REGLA DE LOS HERMANOS (clase 2): el chino no tiene una palabra para «hermano» a secas. Siempre dice si es mayor o menor:
哥哥 hermano mayor · 弟弟 hermano menor · 姐姐 hermana mayor · 妹妹 hermana menor.
Para «hermanos» en general: 兄弟姐妹 (los cuatro juntos).

EL CARÁCTER 哥: es 可 apilado dos veces. 可 = 丁 (un clavo visto de perfil) + 口 (boca), y significa «poder». Acá solo está por el sonido (kě → gē). No hay dibujo de hermano: se aprende como forma.

USO SOCIAL: 大哥 «hermano mayor» se usa para dirigirse con respeto a un hombre algo mayor que vos, aunque no sea pariente.

PRONUNCIACIÓN: gēge. Primer tono y la segunda sílaba sin tono. g sin aire.`,
en:`WHAT IT IS: "older brother" (older than you).

THE SIBLING RULE (class 2): Chinese has no word for plain "brother". It always says older or younger:
哥哥 older brother · 弟弟 younger brother · 姐姐 older sister · 妹妹 younger sister.
For "siblings" in general: 兄弟姐妹 (all four together).

THE CHARACTER 哥: it's 可 stacked twice. 可 = 丁 (a nail in profile) + 口 (mouth), and means "can". Here it's only for the sound (kě → gē). There's no brother picture: learn it as a shape.

SOCIAL USE: 大哥 "big brother" is used to address a slightly older man respectfully, even if he isn't family.

PRONUNCIATION: gēge. 1st tone then a toneless syllable. Unaspirated g.`,
zh:`是什么："哥哥"。兄弟姐妹都要分大小：哥哥、弟弟、姐姐、妹妹。哥：两个 可，表音。大哥 也用来尊称比自己大一点的男子。`}},
  {id:"fam-08",s:"姐姐",py:"jiějie",es:"hermana mayor",en:"older sister",
   x:{
es:`QUÉ ES: «hermana mayor» (mayor que vos).

EL CARÁCTER 姐:
女 a la izquierda: la mujer arrodillada. Avisa «mujer / familia».
且 a la derecha: solo por el sonido (qiě → jiě). Su dibujo antiguo sería una tablilla de ancestros apilada, pero acá no importa.

CÓMO NO CONFUNDIRLA CON 妹妹 (hermana menor):
妹 lleva 未 «todavía no»: la hermana que todavía no creció.
姐 lleva 且: no tiene ese «todavía no». Si no hay 未, es la mayor.

USO SOCIAL: 小姐 «señorita» (literalmente «hermana pequeña») · 大姐 para dirigirse con respeto a una mujer un poco mayor.

PRONUNCIACIÓN: jiějie. Tercer tono y después neutro. j suave, lengua plana adelante.`,
en:`WHAT IT IS: "older sister" (older than you).

THE CHARACTER 姐:
女 on the left: the kneeling woman. It signals "woman / family".
且 on the right: only for the sound (qiě → jiě). Its ancient drawing may be a stacked ancestral tablet, but that doesn't matter here.

HOW NOT TO CONFUSE IT WITH 妹妹 (younger sister):
妹 has 未 "not yet": the sister who hasn't grown up yet.
姐 has 且: no "not yet". No 未 → the older one.

SOCIAL USE: 小姐 "miss" (literally "little sister") · 大姐 to address a slightly older woman respectfully.

PRONUNCIATION: jiějie. 3rd tone then neutral. Soft j, tongue flat and forward.`,
zh:`是什么："姐姐"。姐：女 + 且（表音）。和 妹 区分：妹 有 未（还没长大）。小姐、大姐。`}},
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
es:`QUÉ ES: «hijo» (varón).

LOS CARACTERES:
儿: el dibujo de un chico: arriba la cabeza, abajo las dos piernas. En tradicional 兒 la cabeza es grande y abierta arriba: la fontanela, el punto blando del cráneo de un bebé.
子: un bebé envuelto en pañales, con la cabeza grande y un brazo afuera. También significa «hijo, niño». Acá va en tono neutro.
儿子 = «niño + hijo».

LA PAREJA: 女儿 hija (女 mujer + 儿 niño). Fijate que 儿 sirve para los dos: lo que marca el género es 女.

ORDEN DE NACIMIENTO (tarjetas de Michelle): 大儿子 hijo mayor · 二儿子 segundo hijo · 小儿子 hijo menor.

PRONUNCIACIÓN: érzi. La «er» con la lengua curvada hacia atrás, subiendo; zi corto.`,
en:`WHAT IT IS: "son".

THE CHARACTERS:
儿: the drawing of a boy: head on top, two legs below. In traditional 兒 the head is large and open on top: the fontanelle, the soft spot on a baby's skull.
子: a baby wrapped in swaddling, big head and one arm out. It also means "son, child". Here it's neutral tone.
儿子 = "child + son".

THE PAIR: 女儿 daughter (女 woman + 儿 child). 儿 serves for both; 女 marks the gender.

BIRTH ORDER (Michelle's flashcards): 大儿子 eldest son · 二儿子 second son · 小儿子 youngest son.

PRONUNCIATION: érzi. "er" with the tongue curled back, rising; zi short.`,
zh:`是什么："儿子"。儿：画出头和腿的孩子（繁体 兒 的头是张开的囟门）。子：襁褓里的婴儿。对应：女儿。大儿子、二儿子、小儿子。`}},
  {id:"fam-13",s:"女儿",t:"女兒",py:"nǚ'ér",es:"hija",en:"daughter",
   x:{
es:`QUÉ ES: «hija».

LOS CARACTERES:
女: la mujer arrodillada (femenino).
儿: el chico con cabeza y piernas (hijo, niño). En tradicional 兒.
女儿 = «niña mujer», la hija.

COMPARÁ: 儿子 hijo / 女儿 hija. En 儿子 el 儿 va primero; en 女儿, segundo. El 女 adelante hace la diferencia.

ORDEN DE NACIMIENTO: 大女儿 hija mayor · 二女儿 segunda hija · 小女儿 hija menor · 最小的女儿 la hija más chica.

PRONUNCIACIÓN: nǚ'ér. El apóstrofo separa las sílabas (nǚ + ér). ü con labios redondos; er con la lengua curvada.`,
en:`WHAT IT IS: "daughter".

THE CHARACTERS:
女: the kneeling woman (female).
儿: the boy with head and legs (child). Traditional 兒.
女儿 = "female child", the daughter.

COMPARE: 儿子 son / 女儿 daughter. In 儿子, 儿 comes first; in 女儿, second. The 女 in front makes the difference.

BIRTH ORDER: 大女儿 eldest daughter · 二女儿 second daughter · 小女儿 youngest daughter · 最小的女儿 the very youngest.

PRONUNCIATION: nǚ'ér. The apostrophe splits the syllables (nǚ + ér). ü with rounded lips; er with the tongue curled.`,
zh:`是什么："女儿"。女 + 儿。比较：儿子 / 女儿。大女儿、小女儿。拼音 nǚ'ér 的隔音符号分开两个音节。`}},
  {id:"fam-14",s:"爷爷",t:"爺爺",py:"yéye",es:"abuelo (paterno)",en:"grandfather (father's side)",
   x:{
es:`QUÉ ES: «abuelo», el papá de tu PAPÁ.

EL MAPA DE LA FAMILIA CHINA (clase 2): el chino tiene una palabra distinta según tres cosas:
1. si es del lado del PAPÁ o de la MAMÁ;
2. si es MAYOR o MENOR (que vos, o que tu papá/mamá);
3. si es pariente de sangre o por casamiento.
Donde el español dice «tío», el chino tiene cinco palabras.
Con los abuelos pasa lo mismo:
爷爷 abuelo paterno · 奶奶 abuela paterna (lado del papá)
外公 abuelo materno · 外婆 abuela materna (lado de la mamá, «los de afuera»)

EL CARÁCTER 爷 (tradicional 爺):
父 arriba: la mano con el hacha, «padre».
Abajo, un componente de sonido (耶 yé en tradicional).
«El padre del padre».

PRONUNCIACIÓN: yéye. Segundo tono y después neutro.`,
en:`WHAT IT IS: "grandfather", your DAD's dad.

THE CHINESE FAMILY MAP (class 2): Chinese uses a different word depending on three things:
1. whether it's on your DAD's or your MOM's side;
2. whether they're OLDER or YOUNGER (than you, or than your parent);
3. whether they're blood kin or related by marriage.
Where English has "uncle", Chinese has five words.
Grandparents work the same way:
爷爷 paternal grandfather · 奶奶 paternal grandmother (dad's side)
外公 maternal grandfather · 外婆 maternal grandmother (mom's side, "the outside ones")

THE CHARACTER 爷 (traditional 爺):
父 on top: the hand with the axe, "father".
Below, a sound component (耶 yé in traditional).
"The father's father".

PRONUNCIATION: yéye. 2nd tone then neutral.`,
zh:`是什么："爷爷"，爸爸的爸爸。中文的亲属称谓分父系/母系、年长/年幼、血亲/姻亲。爷爷、奶奶（父系）；外公、外婆（母系）。爷：父 + 表音部件（繁体 爺）。`}},
  {id:"fam-15",s:"奶奶",py:"nǎinai",es:"abuela (paterna)",en:"grandmother (father's side)",
   x:{
es:`QUÉ ES: «abuela», la mamá de tu PAPÁ.

EL CARÁCTER 奶: es el mismo carácter de «leche» (奶 de 奶酪, queso).
女 a la izquierda: la mujer.
乃 a la derecha: un trazo curvo que representa el pecho.
«La mujer que amamanta»: la abuela que crió a la familia.

EL SISTEMA: 奶奶 abuela del lado del papá · 外婆 abuela del lado de la mamá.
En Taiwán y en el sur, mucha gente dice 阿嬷 ā-mà (del taiwanés) para la abuela.

PRONUNCIACIÓN: nǎinai. Dos terceros tonos «escritos», pero la segunda sílaba es neutra, así que suena nǎi-nai, con la primera bien baja.`,
en:`WHAT IT IS: "grandmother", your DAD's mom.

THE CHARACTER 奶: the same character as "milk" (奶 in 奶酪, cheese).
女 on the left: the woman.
乃 on the right: a curved stroke representing the breast.
"The woman who nurses": the grandmother who raised the family.

THE SYSTEM: 奶奶 grandmother on dad's side · 外婆 grandmother on mom's side.
In Taiwan and the south many people say 阿嬷 ā-mà (from Taiwanese) for grandma.

PRONUNCIATION: nǎinai. The second syllable is neutral, so it sounds nǎi-nai, with the first one low.`,
zh:`是什么："奶奶"，爸爸的妈妈。奶：女 + 乃（乳房），和 奶酪 的 奶 一样。母系说 外婆。台湾也说 阿嬷。`}},
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
es:`QUÉ ES: «abuela», la mamá de tu MAMÁ.

POR QUÉ 外 «AFUERA»: la familia tradicional china se organiza por el lado del padre (el apellido, la casa, el salón de los ancestros). Cuando una mujer se casaba, pasaba a la familia del marido. Entonces los parientes de la mamá quedaban «de afuera»: 外. Por eso sus padres son 外公 y 外婆, y los hijos de la hija son 外孙.

LOS CARACTERES:
外 afuera: 夕 (una media luna, el atardecer) + 卜 (la grieta en un caparazón que se leía en las adivinaciones). Adivinar de noche, fuera de lo normal: «afuera».
婆 señora mayor: 女 (mujer) abajo + 波 (ola, solo por el sonido) arriba. También en 老婆 (esposa).

LA PAREJA: 外公 abuelo materno.
En Taiwán también se dice 外婆 o 阿嬤.

PRONUNCIACIÓN: wàipó. p con aire.`,
en:`WHAT IT IS: "grandmother", your MOM's mom.

WHY 外 "OUTSIDE": the traditional Chinese family is organised through the father's side (surname, household, ancestral hall). A woman who married joined her husband's family. So the mother's relatives were "outside": 外. That's why her parents are 外公 and 外婆, and a daughter's children are 外孙.

THE CHARACTERS:
外 outside: 夕 (a half moon, dusk) + 卜 (the crack in a shell read in divination). Divining at night, outside the norm: "outside".
婆 elder lady: 女 (woman) below + 波 (wave, sound only) above. Also in 老婆 (wife).

THE PAIR: 外公 maternal grandfather.

PRONUNCIATION: wàipó. Aspirated p.`,
zh:`是什么："外婆"，妈妈的妈妈。传统家族以父系为主，妈妈那边是"外"家：外公、外婆、外孙。外：夕 + 卜。婆：女 + 波（表音），也在 老婆 里。`}},
  {id:"fam-18",s:"伯伯",py:"bóbo",es:"tío (hermano mayor del papá)",en:"uncle (father's older brother)",
   x:{
es:`亻 (persona) + 白 (sonido). 伯 es «el mayor de los hermanos».
El chino distingue lado paterno o materno, y mayor o menor que el padre: por eso hay tantas palabras donde el español tiene solo «tío».`,
en:`亻 (person) + 白 (sound). 伯 means "the eldest of the brothers".
Chinese distinguishes father's or mother's side, and older or younger than the father: that's why there are so many words where English has only "uncle".`,
zh:`亻 + 白（表音），伯 是兄弟中最大的。中文区分父系母系、比爸爸大或小。`}},
  {id:"fam-19",s:"伯父",py:"bófù",es:"tío (hermano mayor del papá), formal",en:"uncle (father's older brother), formal",
   x:{
es:`QUÉ ES: la forma formal de 伯伯: el hermano MAYOR de tu papá.

LOS CARACTERES:
伯: 亻 (persona) + 白 (sonido). Significa «el mayor de los hermanos». Por eso marca que es MAYOR que tu papá.
父: la mano con el hacha, «padre».
伯父 = «el hermano mayor del padre».

REGISTRO: 伯伯 al hablar con él o de él en familia; 伯父 por escrito o en situaciones formales.

LOS TÍOS PATERNOS, ORDENADOS:
伯伯 / 伯父 hermano mayor del papá (su esposa: 伯母)
叔叔 hermano menor del papá (su esposa: 婶婶)
姑姑 / 姑妈 hermana del papá (su esposo: 姑丈)

PRONUNCIACIÓN: bófù. Segundo tono y después cuarto.`,
en:`WHAT IT IS: the formal form of 伯伯: your dad's OLDER brother.

THE CHARACTERS:
伯: 亻 (person) + 白 (sound). It means "the eldest of the brothers", which is why it marks OLDER than your dad.
父: the hand with the axe, "father".
伯父 = "the father's elder brother".

REGISTER: 伯伯 when talking with or about him in the family; 伯父 in writing or formal situations.

THE PATERNAL UNCLES AND AUNTS, IN ORDER:
伯伯 / 伯父 dad's older brother (his wife: 伯母)
叔叔 dad's younger brother (his wife: 婶婶)
姑姑 / 姑妈 dad's sister (her husband: 姑丈)

PRONUNCIATION: bófù. 2nd tone then 4th.`,
zh:`是什么："伯父"，伯伯 的正式说法，爸爸的哥哥。伯：亻 + 白（表音），兄弟中最大的。父系：伯伯/伯父（伯母）、叔叔（婶婶）、姑姑/姑妈（姑丈）。`}},
  {id:"fam-20",s:"伯母",py:"bómǔ",es:"tía (esposa del hermano mayor del papá)",en:"aunt (wife of father's older brother)",
   x:{
es:`QUÉ ES: la esposa de 伯伯 (del hermano mayor de tu papá). Una tía por casamiento.

LOS CARACTERES:
伯: el mayor de los hermanos (亻 + 白).
母: la madre (女 con los dos puntos del pecho).
伯母 = «la madre del lado del tío mayor».

CÓMO SE ARMAN LAS PAREJAS: muchas veces la esposa del tío se forma con el título del tío + 母 (madre): 伯母 · 舅母. O con otro carácter: 婶婶 (esposa de 叔叔).

USO SOCIAL: los chicos también le dicen 伯母 a la mamá de un amigo, con respeto, si es mayor que sus padres.

PRONUNCIACIÓN: bómǔ.`,
en:`WHAT IT IS: the wife of 伯伯 (your dad's older brother). An aunt by marriage.

THE CHARACTERS:
伯: the eldest brother (亻 + 白).
母: mother (女 with the two breast dots).
伯母 = "the mother on the eldest uncle's side".

HOW THE PAIRS ARE BUILT: often the uncle's wife is his title + 母 (mother): 伯母 · 舅母. Or another character: 婶婶 (wife of 叔叔).

SOCIAL USE: children also call a friend's mother 伯母, respectfully, if she's older than their own parents.

PRONUNCIATION: bómǔ.`,
zh:`是什么："伯母"，伯伯的太太。伯 + 母。也用来尊称朋友的妈妈。`}},
  {id:"fam-21",s:"叔叔",py:"shūshu",es:"tío (hermano menor del papá)",en:"uncle (father's younger brother)",
   x:{
es:`叔: 尗 (una planta de poroto, por el sonido) + 又 (la mano derecha).
También se usa para cualquier señor adulto, como «tío» cuando un chico le habla a un amigo de sus papás.`,
en:`叔: 尗 (a bean plant, for the sound) + 又 (the right hand).
Also used for any adult man, like a child calling a parent's friend "uncle".`,
zh:`叔：尗（豆子，表音）+ 又。也用来称呼一般的成年男子。`}},
  {id:"fam-22",s:"婶婶",t:"嬸嬸",py:"shěnshen",es:"tía (esposa del hermano menor del papá)",en:"aunt (wife of father's younger brother)",
   x:{
es:`QUÉ ES: la esposa de 叔叔 (del hermano MENOR de tu papá).

EL CARÁCTER 婶 (tradicional 嬸):
女 a la izquierda: mujer.
审 a la derecha: solo por el sonido (shěn). En tradicional 審.
«La mujer (esposa) del tío menor».

COMPARÁ CON 伯母: la esposa del tío MAYOR es 伯母; la del tío MENOR es 婶婶. Otra vez, el chino marca si el tío es mayor o menor que tu papá.

USO SOCIAL: 阿婶 o 大婶 se usa para una señora de mediana edad, en tono familiar.

PRONUNCIACIÓN: shěnshen. Tercer tono y después neutro.`,
en:`WHAT IT IS: the wife of 叔叔 (your dad's YOUNGER brother).

THE CHARACTER 婶 (traditional 嬸):
女 on the left: woman.
审 on the right: only for the sound (shěn). Traditional 審.
"The woman (wife) of the younger uncle".

COMPARE WITH 伯母: the OLDER uncle's wife is 伯母; the YOUNGER uncle's wife is 婶婶. Again, Chinese marks whether the uncle is older or younger than your dad.

SOCIAL USE: 阿婶 or 大婶 is used for a middle-aged woman, in a familiar tone.

PRONUNCIATION: shěnshen. 3rd tone then neutral.`,
zh:`是什么："婶婶"，叔叔的太太。婶：女 + 审（表音，繁体 嬸）。伯伯的太太叫 伯母，叔叔的太太叫 婶婶。`}},
  {id:"fam-23",s:"姑姑",py:"gūgu",es:"tía (hermana del papá)",en:"aunt (father's sister)",
   x:{
es:`QUÉ ES: «tía», la hermana de tu PAPÁ (sobre todo si es menor que él; ver 姑妈).

EL CARÁCTER 姑:
女: mujer.
古: «antiguo» (十 sobre 口: diez bocas, algo contado por muchas generaciones), acá solo por el sonido (gǔ → gū).

LAS TÍAS SEGÚN EL LADO:
姑姑 / 姑妈 hermana del PAPÁ (su esposo: 姑丈)
姨妈 / 阿姨 hermana de la MAMÁ (su esposo: 姨丈)
Esposas de tíos: 伯母, 婶婶, 舅母.

PRONUNCIACIÓN: gūgu. Primer tono y después neutro.`,
en:`WHAT IT IS: "aunt", your DAD's sister (especially a younger one; see 姑妈).

THE CHARACTER 姑:
女: woman.
古: "ancient" (十 over 口: ten mouths, something told over many generations), here only for the sound (gǔ → gū).

AUNTS BY SIDE:
姑姑 / 姑妈 DAD's sister (her husband: 姑丈)
姨妈 / 阿姨 MOM's sister (her husband: 姨丈)
Uncles' wives: 伯母, 婶婶, 舅母.

PRONUNCIATION: gūgu. 1st tone then neutral.`,
zh:`是什么："姑姑"，爸爸的姐妹。姑：女 + 古（表音）。父系：姑姑/姑妈（姑丈）；母系：姨妈/阿姨（姨丈）。`}},
  {id:"fam-24",s:"姑妈",t:"姑媽",py:"gūmā",es:"tía (hermana mayor del papá)",en:"aunt (father's older sister)",
   x:{
es:`QUÉ ES: «tía», la hermana MAYOR de tu papá, según las tarjetas de Michelle.

LAS PIEZAS: 姑 (tía paterna: 女 + 古) + 妈 (mamá: 女 + 马). «La tía-mamá».

DIFERENCIA CON 姑姑: en Taiwán se suele usar 姑妈 para la mayor y 姑姑 para la menor. En China continental muchas familias usan 姑妈 para cualquier hermana del papá, sobre todo si está casada. Si dudás, 姑姑 siempre se entiende.

PRONUNCIACIÓN: gūmā. Dos primeros tonos.`,
en:`WHAT IT IS: "aunt", your dad's OLDER sister, according to Michelle's flashcards.

THE PIECES: 姑 (paternal aunt: 女 + 古) + 妈 (mom: 女 + 马). "Aunt-mother".

VS 姑姑: in Taiwan 姑妈 is often used for the older one and 姑姑 for the younger. In mainland China many families use 姑妈 for any of dad's sisters, especially if married. When in doubt, 姑姑 is always understood.

PRONUNCIATION: gūmā. Two 1st tones.`,
zh:`是什么："姑妈"，Michelle 老师的卡片：爸爸的姐姐。台湾常用 姑妈 称姐姐、姑姑 称妹妹；大陆常泛指爸爸的姐妹。不确定就说 姑姑。`}},
  {id:"fam-25",s:"姑丈",py:"gūzhàng",es:"tío (esposo de la tía paterna)",en:"uncle (husband of father's sister)",
   x:{
es:`QUÉ ES: «tío», el esposo de la hermana de tu papá (el marido de 姑姑).

LOS CARACTERES:
姑: la tía paterna (女 + 古).
丈: una mano sosteniendo una vara de medir. Una 丈 era una medida de largo (unos 3 metros), y «la altura de un hombre adulto». De ahí «hombre, marido»: 丈夫 = esposo.
姑丈 = «el marido de la tía paterna».

LA MISMA LÓGICA: 姨丈 = el marido de la tía materna (姨).

PRONUNCIACIÓN: gūzhàng. Primer tono y después cuarto; zh con la lengua atrás.`,
en:`WHAT IT IS: "uncle", the husband of your dad's sister (姑姑's husband).

THE CHARACTERS:
姑: paternal aunt (女 + 古).
丈: a hand holding a measuring rod. A 丈 was a length measure (about 3 metres), and "the height of a grown man". Hence "man, husband": 丈夫 = husband.
姑丈 = "the paternal aunt's husband".

SAME LOGIC: 姨丈 = the husband of the maternal aunt (姨).

PRONUNCIATION: gūzhàng. 1st tone then 4th; zh with the tongue back.`,
zh:`是什么："姑丈"，姑姑的丈夫。丈：手拿量尺，成年男子，丈夫。同理：姨丈。`}},
  {id:"fam-26",s:"舅父",py:"jiùfù",es:"tío (hermano de la mamá)",en:"uncle (mother's brother)",cl:"fc",
   x:{
es:`QUÉ ES: «tío», el hermano de tu MAMÁ (mayor o menor, da igual). Formal; al hablar se dice 舅舅.

EL CARÁCTER 舅:
臼 arriba: un mortero (el recipiente para moler), solo por el sonido (jiù).
男 abajo: hombre (田 campo + 力 fuerza).
«Un hombre de la familia»: el hermano de la madre.

EL LADO DE LA MAMÁ tiene menos palabras que el del papá: para los hermanos varones de la mamá no se distingue mayor o menor, todos son 舅舅.
舅舅 / 舅父 tío materno · 舅母 / 舅妈 su esposa · 姨妈 / 阿姨 tía materna · 姨丈 su esposo.

PRONUNCIACIÓN: jiùfù. Dos cuartos tonos.`,
en:`WHAT IT IS: "uncle", your MOM's brother (older or younger, no matter). Formal; in speech it's 舅舅.

THE CHARACTER 舅:
臼 on top: a mortar (the grinding bowl), only for the sound (jiù).
男 below: man (田 field + 力 strength).
"A man of the family": the mother's brother.

MOM'S SIDE has fewer words than dad's: for mom's brothers there's no older/younger split; they're all 舅舅.
舅舅 / 舅父 maternal uncle · 舅母 / 舅妈 his wife · 姨妈 / 阿姨 maternal aunt · 姨丈 her husband.

PRONUNCIATION: jiùfù. Two 4th tones.`,
zh:`是什么："舅父"，妈妈的兄弟，口语说 舅舅。舅：臼（表音）+ 男。母系不分大小：舅舅、舅母/舅妈、姨妈/阿姨、姨丈。`}},
  {id:"fam-27",s:"舅母",py:"jiùmǔ",es:"tía (esposa del hermano de la mamá)",en:"aunt (wife of mother's brother)",cl:"fc",
   x:{
es:`QUÉ ES: la esposa del hermano de tu MAMÁ (de 舅舅). Al hablar, muchas veces 舅妈.

LAS PIEZAS: 舅 (el tío materno: 臼 mortero por el sonido + 男 hombre) + 母 (madre: la mujer con los dos puntos).

EL PATRÓN «título del tío + 母»: 伯母 (esposa del tío paterno mayor) · 舅母 (esposa del tío materno). En los dos, la tía por casamiento es «la madre del lado de…».

PRONUNCIACIÓN: jiùmǔ.`,
en:`WHAT IT IS: the wife of your MOM's brother (舅舅). In speech often 舅妈.

THE PIECES: 舅 (maternal uncle: 臼 mortar for sound + 男 man) + 母 (mother: the woman with two dots).

THE "UNCLE'S TITLE + 母" PATTERN: 伯母 (wife of dad's older brother) · 舅母 (wife of mom's brother). In both, the aunt by marriage is "the mother on …'s side".

PRONUNCIATION: jiùmǔ.`,
zh:`是什么："舅母"，舅舅的太太，口语常说 舅妈。舅 + 母，和 伯母 同一个模式。`}},
  {id:"fam-28",s:"姨妈",t:"姨媽",py:"yímā",es:"tía (hermana mayor de la mamá)",en:"aunt (mother's older sister)",cl:"fc",
   x:{
es:`QUÉ ES: «tía», la hermana (mayor, según Michelle) de tu MAMÁ.

LOS CARACTERES:
姨: 女 (mujer) + 夷 (solo por el sonido, yí).
妈: mamá (女 + 马).
«La tía-mamá del lado materno».

USO MUY COMÚN: 阿姨 āyí es cómo se le dice a cualquier señora adulta: la mamá de un amigo, la vecina, la mujer que limpia, una vendedora. Los chicos lo dicen todo el tiempo. Es respetuoso y cálido.

COMPARÁ: 姑姑 (hermana del papá) ↔ 姨妈 (hermana de la mamá).

PRONUNCIACIÓN: yímā. Segundo y primer tono.`,
en:`WHAT IT IS: "aunt", your MOM's (older, per Michelle) sister.

THE CHARACTERS:
姨: 女 (woman) + 夷 (sound only, yí).
妈: mom (女 + 马).
"The aunt-mother on mom's side".

VERY COMMON USE: 阿姨 āyí is how you address any adult woman: a friend's mom, the neighbour, a cleaner, a shop assistant. Children say it all the time. It's respectful and warm.

COMPARE: 姑姑 (dad's sister) ↔ 姨妈 (mom's sister).

PRONUNCIATION: yímā. 2nd then 1st tone.`,
zh:`是什么："姨妈"，妈妈的姐妹。姨：女 + 夷（表音）。阿姨 可以称呼任何成年女性。比较：姑姑（父系）/ 姨妈（母系）。`}},
  {id:"fam-29",s:"姨丈",py:"yízhàng",es:"tío (esposo de la tía materna)",en:"uncle (husband of mother's sister)",cl:"fc",
   x:{
es:`QUÉ ES: «tío», el esposo de la hermana de tu MAMÁ (el marido de 姨妈).

LAS PIEZAS:
姨: la tía materna (女 + 夷).
丈: una mano con una vara de medir, «la medida de un hombre adulto»: marido (丈夫).

PAREJA DEL OTRO LADO: 姑丈 = esposo de la tía paterna. Solo cambia 姑 (lado del papá) por 姨 (lado de la mamá).

PRONUNCIACIÓN: yízhàng.`,
en:`WHAT IT IS: "uncle", the husband of your MOM's sister (姨妈's husband).

THE PIECES:
姨: maternal aunt (女 + 夷).
丈: a hand with a measuring rod, "the measure of a grown man": husband (丈夫).

THE OTHER SIDE'S PAIR: 姑丈 = husband of the paternal aunt. Only 姑 (dad's side) changes to 姨 (mom's side).

PRONUNCIATION: yízhàng.`,
zh:`是什么："姨丈"，姨妈的丈夫。对应父系的 姑丈，只把 姑 换成 姨。`}}
  ]
});
