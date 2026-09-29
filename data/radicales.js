/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   w optional writing tip {es, en, zh} (shown on the stroke-order page),
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"radicales", glyph:"人",
  name:{"es": "Caracteres base", "en": "Building-block characters", "zh": "基本汉字"},
  cl:"ex",
  cards:[
  {id:"rad-01",s:"人 · 亻",py:"rén",es:"persona",en:"person",say:"人",
   x:{
es:`Una persona caminando vista de costado: las dos piernas.
A la izquierda de otro carácter se aplasta en 亻 (rén).
Lo encontrás en: 你 (nǐ) vos, 他 (tā) él, 们 (men) plural, 位 (wèi) clasificador, 什 (shén) de 什么 (shénme), 茶 (chá) té.`,
en:`A person walking, seen from the side: the two legs.
On the left of another character it squeezes into 亻 (rén).
You'll find it in: 你 (nǐ) you, 他 (tā) he, 们 (men) plural, 位 (wèi) measure word, 什 (shén) of 什么 (shénme), 茶 (chá) tea.`,
zh:`侧面走路的人。在左边写成 亻：你、他、们、位、什、茶。`}},
  {id:"rad-02",s:"女",py:"nǚ",es:"mujer",en:"woman",
   x:{
es:`QUÉ DIBUJA: una mujer arrodillada, vista de perfil, con los brazos cruzados delante del pecho. Era la postura formal de las mujeres en la China antigua. Michelle: «una mujer sentada con las piernas cruzadas».

SOLO: 女 nǚ «mujer, femenino». 女人 (nǚrén) mujer · 女儿 (nǚ'ér) hija · 女老师 (nǚ lǎoshī) profesora.

COMO COMPONENTE (casi siempre a la izquierda, un poco más angosto): avisa que la palabra tiene que ver con mujeres, parentesco o cualidades asociadas.
De tus clases: 妈 mamá · 姐 (jiě) hermana mayor · 妹 (mèi) hermana menor · 她 (tā) ella · 奶 (nǎi) leche/abuela · 姑 (gū) tía paterna · 婶 (shěn) tía · 婆 (pó) señora mayor.
También adentro o abajo: 好 (hǎo) bueno (女 nǚ + 子 zǐ, madre e hijo) · 安 (ān) paz (女 bajo el techo 宀 mián) · 母 (mǔ) madre (女 con dos puntos).

TRUCO: cuando veas 女 (nǚ) en un carácter nuevo, probá primero con «algo de mujeres o de familia»: acertás casi siempre.

PRONUNCIACIÓN: nǚ, tercer tono, ü con los labios redondos.`,
en:`WHAT IT DEPICTS: a woman kneeling in profile, arms crossed in front of her chest. The formal posture of women in ancient China. Michelle: "a woman sitting with crossed legs".

ALONE: 女 nǚ "woman, female". 女人 (nǚrén) woman · 女儿 (nǚ'ér) daughter · 女老师 (nǚ lǎoshī) female teacher.

AS A COMPONENT (usually on the left, a bit narrower): it signals women, kinship or associated qualities.
From your classes: 妈 (mā) mom · 姐 (jiě) older sister · 妹 (mèi) younger sister · 她 (tā) she · 奶 (nǎi) milk/grandma · 姑 (gū) paternal aunt · 婶 (shěn) aunt · 婆 (pó) older lady.
Also inside or below: 好 (hǎo) good (女 nǚ + 子 zǐ, mother and child) · 安 (ān) peace (女 under the roof 宀 mián) · 母 (mǔ) mother (女 with two dots).

TIP: when you see 女 (nǚ) in a new character, guess "something about women or family" first: you'll almost always be right.

PRONUNCIATION: nǚ, 3rd tone, ü with rounded lips.`,
zh:`侧面跪坐、双手交叉的女子。单用：女人、女儿、女老师。作部件表示与女性或亲属有关：妈、姐、妹、她、奶、姑、婶、婆；好（女 + 子）、安（宀 + 女）、母。`}},
  {id:"rad-03",s:"子",py:"zǐ",es:"niño, hijo",en:"child",
   x:{
es:`Un bebé con la cabeza grande, un brazo y las piernas envueltas en pañales.
Lo encontrás en: 好 (hǎo) bien, 学 (xué) estudiar, 字 (zì) carácter, 儿子 (érzi) hijo, 房子 (fángzi) casa (acá como sufijo sin significado).`,
en:`A baby with a big head, one arm and swaddled legs.
You'll find it in: 好 (hǎo) good, 学 (xué) to study, 字 (zì) character, 儿子 (érzi) son, 房子 (fángzi) house (here as a meaningless suffix).`,
zh:`头大、双腿包在襁褓里的婴儿：好、学、字、儿子、房子。`}},
  {id:"rad-04",s:"口",py:"kǒu",es:"boca",en:"mouth",
   x:{
es:`Una boca abierta dibujada como un rectángulo.
En un carácter avisa que algo se dice o pasa por la boca: 吃 (chī) comer, 叫 (jiào) llamar, 吗 (ma) partícula de pregunta, 名 (míng) nombre.
En 咖啡 (kāfēi) marca que el carácter se usa solo por su sonido.`,
en:`An open mouth drawn as a rectangle.
In a character it signals something said or going through the mouth: 吃 (chī) to eat, 叫 (jiào) to call, 吗 (ma) question particle, 名 (míng) name.
In 咖啡 (kāfēi) it marks that the character is used only for its sound.`,
zh:`张开的嘴：吃、叫、吗、名。在 咖啡 里表示只借读音。`}},
  {id:"rad-05",s:"日",py:"rì",es:"sol, día",en:"sun, day",
   x:{
es:`QUÉ DIBUJA: el sol. Originalmente un círculo con un punto en el centro; al escribirse con pincel y tallarse en bronce, el círculo se volvió cuadrado y el punto una raya: 日 (rì).

SOLO: 日 rì «sol» y «día». 生日 (shēngrì) cumpleaños («día de nacimiento») · 日本 (Rìběn) Japón («origen del sol»).

COMO COMPONENTE: marca luz, tiempo y momentos del día.
De tus clases: 早 (zǎo) temprano (el sol sobre el horizonte) · 晚 (wǎn) noche (el sol que se fue) · 是 (shì) ser (日 rì sobre 正 zhèng) · 明 (míng) claro, brillante (日 sol + 月 yuè luna) · 时 (shí) hora.
OJO: no todo 日 es sol. Adentro de 的 (en 白 bái) no lo es, y 曰 (yuē, más ancho y bajo) es «decir», una boca con aliento.

CONFUNDIBLE: 目 mù (ojo) es parecido pero más alto y con dos rayas adentro.

PRONUNCIACIÓN: rì, cuarto tono. La r china, parecida a la r del inglés americano.`,
en:`WHAT IT DEPICTS: the sun. Originally a circle with a dot in the middle; written with a brush and cast in bronze, the circle became square and the dot a stroke: 日 (rì).

ALONE: 日 rì "sun" and "day". 生日 (shēngrì) birthday ("birth day") · 日本 (Rìběn) Japan ("sun's origin").

AS A COMPONENT: it marks light, time and times of day.
From your classes: 早 (zǎo) early (the sun above the horizon) · 晚 (wǎn) evening (the sun that's gone) · 是 (shì) to be (日 rì over 正 zhèng) · 明 (míng) bright (日 sun + 月 yuè moon) · 时 (shí) hour.
CAREFUL: not every 日 is the sun. Inside 的 (in 白 bái) it isn't, and 曰 (yuē, wider and flatter) is "to say", a mouth with breath.

LOOK-ALIKE: 目 mù (eye) is similar but taller, with two strokes inside.

PRONUNCIATION: rì, 4th tone. Chinese r, close to an American r.`,
zh:`太阳：圆圈中间一点，后来写成方形。单用：生日、日本。作部件表示光、时间：早、晚、是、明、时。注意：的 里的不是太阳；曰 是"说"；目 是眼睛。`}},
  {id:"rad-06",s:"月",py:"yuè",es:"luna, mes",en:"moon, month",
   x:{
es:`Una media luna. Ojo: a la izquierda de un carácter, 月 (yuè) casi siempre NO es la luna sino 肉 (ròu, carne), el radical de las partes del cuerpo: 脑 (nǎo) cerebro, 脸 (liǎn) cara.
En 有 (yǒu, tener) también es carne: una mano sosteniendo un pedazo de carne.`,
en:`A half moon. Careful: on the left of a character, 月 (yuè) is almost never the moon but 肉 (ròu, meat), the radical for body parts: 脑 (nǎo) brain, 脸 (liǎn) face.
In 有 (yǒu, to have) it's meat too: a hand holding a piece of meat.`,
zh:`半个月亮。在字的左边多半是 肉，表示身体部位：脑、脸。有 里的 月 也是肉。`}},
  {id:"rad-07",s:"木",py:"mù",es:"árbol, madera",en:"tree, wood",
   x:{
es:`Un árbol: el trazo vertical es el tronco, el horizontal las ramas, los dos de abajo las raíces.
Lo encontrás en: 树 (shù) árbol, 机 (jī) máquina, 校 (xiào) escuela, 果 (guǒ) fruta, 茶 (chá) té, 橘 (jú) mandarina, 板 (bǎn) tabla.`,
en:`A tree: the vertical stroke is the trunk, the horizontal the branches, the two lower strokes the roots.
You'll find it in: 树 (shù) tree, 机 (jī) machine, 校 (xiào) school, 果 (guǒ) fruit, 茶 (chá) tea, 橘 (jú) tangerine, 板 (bǎn) board.`,
zh:`树：树干、树枝、树根。树、机、校、果、茶、橘、板。`}},
  {id:"rad-08",s:"水 · 氵",py:"shuǐ",es:"agua",en:"water",say:"水",
   x:{
es:`QUÉ DIBUJA: una corriente de agua. El trazo del medio es el curso principal y los de los costados, las salpicaduras o los afluentes.

SOLO: 水 shuǐ «agua». Está en tu lista de 22 palabras. 水果 (shuǐguǒ) fruta («agua + fruto»: fruta jugosa).

COMO COMPONENTE, a la izquierda se reduce a 氵 (shuǐ), tres gotas («tres gotas de agua», se llama). Marca todo lo líquido, lo que fluye o se hace con agua:
洗 (xǐ) lavar (de 洗衣机 xǐyījī, lavarropas) · 汽 (qì) vapor (de 汽车 qìchē, auto) · 沙 (shā) arena (lo que queda cuando hay poca agua) · 没 (méi) hundirse, no tener · 滚 (gǔn) rodar (del proverbio) · 酒 (jiǔ) alcohol.

TRUCO: si ves 氵 (shuǐ) a la izquierda, pensá en agua, líquidos, lavar, ríos o mar.

CONFUNDIBLE: 冫 (bīng, dos gotas) es hielo, frío: 冷 (lěng) frío.

PRONUNCIACIÓN: shuǐ, tercer tono. sh con la lengua atrás.`,
en:`WHAT IT DEPICTS: a stream of water. The middle stroke is the main current and the side strokes the splashes or tributaries.

ALONE: 水 shuǐ "water". It's on your list of 22 words. 水果 (shuǐguǒ) fruit ("water + fruit": juicy fruit).

AS A COMPONENT, on the left it shrinks to 氵 (shuǐ), three drops. It marks anything liquid, flowing or done with water:
洗 (xǐ) to wash (from 洗衣机 xǐyījī, washing machine) · 汽 (qì) steam (from 汽车 qìchē, car) · 沙 (shā) sand (what's left when water is low) · 没 (méi) to sink, not have · 滚 (gǔn) to roll (from the proverb) · 酒 (jiǔ) alcohol.

TIP: 氵 (shuǐ) on the left → think water, liquids, washing, rivers or sea.

LOOK-ALIKE: 冫 (bīng, two drops) is ice, cold: 冷 (lěng) cold.

PRONUNCIATION: shuǐ, 3rd tone. sh with the tongue back.`,
zh:`水流和水花。单用：水、水果。在左边写成 氵（三点水），表示和液体有关：洗、汽、沙、没、滚、酒。两点水 冫 表示冰冷：冷。`}},
  {id:"rad-09",s:"心 · 忄",py:"xīn",es:"corazón",en:"heart",say:"心",
   x:{
es:`QUÉ DIBUJA: un corazón, con sus cavidades: la curva es el músculo y los puntos, las cámaras o las venas.

SOLO: 心 xīn «corazón», y también «mente». Los antiguos chinos pensaban que se pensaba con el corazón. 小心 (xiǎoxīn) ¡cuidado! («corazón pequeño», estar atento).

COMO COMPONENTE: abajo queda 心 (xīn, 您 nín, 想 xiǎng pensar, 念 niàn extrañar); a la izquierda se vuelve 忄 (xīn), un trazo vertical con dos puntitos (情 qíng sentimiento, 忙 máng ocupado, 快 kuài rápido/contento). Marca sentimientos, emociones y pensamiento.
De tus clases: 您 usted = 你 (nǐ, vos) sobre 心: «te pongo en el corazón», respeto.

TRUCO: 忄 (xīn) a la izquierda o 心 (xīn) abajo → algo que se siente o se piensa.

PRONUNCIACIÓN: xīn, primer tono. x con la lengua plana adelante.`,
en:`WHAT IT DEPICTS: a heart with its chambers: the curve is the muscle and the dots are the chambers or veins.

ALONE: 心 xīn "heart", and also "mind". Ancient Chinese believed you thought with the heart. 小心 (xiǎoxīn) careful! ("small heart", pay attention).

AS A COMPONENT: at the bottom it stays 心 (xīn, 您 nín, 想 xiǎng to think, 念 niàn to miss); on the left it becomes 忄 (xīn), a vertical stroke with two dots (情 qíng feeling, 忙 máng busy, 快 kuài fast/happy). It marks feelings, emotions and thought.
From your classes: 您 polite you = 你 (nǐ) over 心: "I place you in my heart", respect.

TIP: 忄 (xīn) on the left or 心 (xīn) below → something felt or thought.

PRONUNCIATION: xīn, 1st tone. x with the tongue flat and forward.`,
zh:`心脏。单用：心、小心。在下面写 心（您、想、念），在左边写 忄（情、忙、快），表示感情和思想。您 = 你 + 心。`}},
  {id:"rad-10",s:"手 · 扌",py:"shǒu",es:"mano",en:"hand",say:"手",
   x:{
es:`QUÉ DIBUJA: una mano abierta. Los trazos horizontales son los dedos y el vertical, la palma y la muñeca.

SOLO: 手 shǒu «mano». 手机 (shǒujī) celular («máquina de mano», de tu lista) · 手表 (shǒubiǎo) reloj de pulsera.

COMO COMPONENTE, a la izquierda se vuelve 扌 (shǒu, un gancho con una raya: «mano de al lado»). Marca acciones que se hacen con las manos:
拉 (lā) tirar (de 沙拉 shālā, aunque ahí solo suena) · 打 (dǎ) golpear, jugar · 拿 (ná) agarrar · 找 (zhǎo) buscar · 排 (pái) ordenar (de 排行 páiháng).
Otras manos que viste: 又 (yòu, la mano derecha de tres dedos) y la mano de arriba en 有 (yǒu, tener).

TRUCO: 扌 (shǒu) a la izquierda → una acción con las manos.

PRONUNCIACIÓN: shǒu, tercer tono. En 手机 (shǒujī) los tonos son 3 + 1: shǒujī.`,
en:`WHAT IT DEPICTS: an open hand. The horizontal strokes are the fingers and the vertical one the palm and wrist.

ALONE: 手 shǒu "hand". 手机 (shǒujī) mobile phone ("hand machine", from your list) · 手表 (shǒubiǎo) wristwatch.

AS A COMPONENT, on the left it becomes 扌 (shǒu, a hook with a stroke: "side hand"). It marks actions done with the hands:
拉 (lā) to pull (in 沙拉 shālā, though there it's only sound) · 打 (dǎ) to hit, to play · 拿 (ná) to take · 找 (zhǎo) to look for · 排 (pái) to arrange (from 排行 páiháng).
Other hands you've seen: 又 (yòu, the three-fingered right hand) and the hand on top of 有 (yǒu, to have).

TIP: 扌 (shǒu) on the left → an action with the hands.

PRONUNCIATION: shǒu, 3rd tone. In 手机 (shǒujī) the tones are 3 + 1: shǒujī.`,
zh:`张开的手，横画是手指。单用：手、手机、手表。在左边写 扌（提手旁），表示手的动作：拉、打、拿、找、排。`}},
  {id:"rad-11",s:"又",py:"yòu",es:"mano derecha; otra vez",en:"right hand; again",
   x:{
es:`La mano derecha dibujada con tres dedos. Hoy significa «otra vez», pero como componente sigue siendo una mano.
Lo encontrás en: 友 (yǒu) amigo (dos manos), 对 (duì) correcto, 饭 (fàn) arroz, 隻 (zhī, tradicional de 只 zhī: pájaro en la mano).`,
en:`The right hand drawn with three fingers. Today it means "again", but as a component it's still a hand.
You'll find it in: 友 (yǒu) friend (two hands), 对 (duì) correct, 饭 (fàn) rice, 隻 (zhī, traditional of 只 zhī: a bird in the hand).`,
zh:`三根手指的右手，现在表示"又"，作部件仍是手：友、对、饭、隻。`}},
  {id:"rad-12",s:"言 · 讠",t:"言 · 訁",py:"yán",es:"hablar, palabra",en:"speech",say:"言",
   x:{
es:`QUÉ DIBUJA: una boca 口 (kǒu) abajo con líneas de sonido que salen hacia arriba: hablar, palabras.

SOLO: 言 yán «palabra, hablar» (poco usado solo en el habla diaria; aparece en 语言 yǔyán, idioma).

COMO COMPONENTE, a la izquierda se aplasta: en simplificado 讠 (yán, un punto y un gancho), en tradicional 訁 (yán). Es uno de los radicales más útiles: marca TODO lo que tiene que ver con hablar, palabras o lenguaje.
De tus clases: 谢 (xiè) agradecer (谢谢 xièxie) · 谁 (shéi) quién · 说 (shuō) decir · 语 (yǔ) idioma · 词 (cí) palabra (量词 liàngcí) · 请 (qǐng) por favor, invitar.
En tradicional 這 (zhè, este) lleva 言 (yán) en lugar de 文 (wén): señalar mientras hablás.

TRUCO: si ves 讠 (yán) a la izquierda, es algo que se dice.

PRONUNCIACIÓN: yán, segundo tono.`,
en:`WHAT IT DEPICTS: a mouth 口 (kǒu) at the bottom with lines of sound going up: speaking, words.

ALONE: 言 yán "word, speech" (rare alone in daily speech; it's in 语言 yǔyán, language).

AS A COMPONENT, on the left it squeezes: simplified 讠 (yán, a dot and a hook), traditional 訁 (yán). One of the most useful radicals: it marks EVERYTHING to do with speaking, words or language.
From your classes: 谢 (xiè) to thank (谢谢 xièxie) · 谁 (shéi) who · 说 (shuō) to say · 语 (yǔ) language · 词 (cí) word (量词 liàngcí) · 请 (qǐng) please, to invite.
Traditional 這 (zhè, this) has 言 (yán) instead of 文 (wén): pointing while you speak.

TIP: 讠 (yán) on the left → something that's said.

PRONUNCIATION: yán, 2nd tone.`,
zh:`嘴里发出声音。单用：语言。在左边写 讠（言字旁，繁体 訁），表示和说话有关：谢、谁、说、语、词、请。`}},
  {id:"rad-13",s:"食 · 饣",t:"食 · 飠",py:"shí",es:"comida, comer",en:"food, to eat",say:"食",
   x:{
es:`QUÉ DIBUJA: una vasija con comida y su tapa. Arriba 人 (rén) es la tapa (un techito), abajo la vasija con el pie.

SOLO: 食 shí «comida, comer» (más formal; «comer» al hablar es 吃 chī). 食物 (shíwù) alimento · 美食 (měishí) buena comida.

COMO COMPONENTE, a la izquierda se aplasta: simplificado 饣 (shí), tradicional 飠 (shí). Marca todo lo comestible.
De tus clases: 饭 (fàn) arroz cocido, comida · 餐 (cān) comida (早餐 zǎocān, 午餐 wǔcān, 晚餐 wǎncān: acá 食 shí va abajo, completo).
Otros: 饺 (jiǎo) empanadita china · 饼 (bǐng) panqueque · 饿 tener hambre · 养 (yǎng) criar (tradicional 養 yǎng: 羊 yáng oveja + 食 comida).

TRUCO: 饣 (shí) a la izquierda → comida.

PRONUNCIACIÓN: shí, segundo tono. Mismo sonido que 十 (shí, diez), otro carácter.`,
en:`WHAT IT DEPICTS: a pot of food with its lid. The 人 (rén) on top is the lid (a little roof), below the pot on its stand.

ALONE: 食 shí "food, to eat" (more formal; "to eat" in speech is 吃 chī). 食物 (shíwù) food · 美食 (měishí) good food.

AS A COMPONENT, on the left it squeezes: simplified 饣 (shí), traditional 飠 (shí). It marks anything edible.
From your classes: 饭 (fàn) cooked rice, meal · 餐 (cān) meal (早餐 zǎocān, 午餐 wǔcān, 晚餐 wǎncān: here 食 shí is full-size at the bottom).
Others: 饺 (jiǎo) dumpling · 饼 (bǐng) pancake · 饿 hungry · 养 (yǎng) to raise (traditional 養 yǎng: 羊 yáng sheep + 食 food).

TIP: 饣 (shí) on the left → food.

PRONUNCIATION: shí, 2nd tone. Same sound as 十 (shí, ten), different character.`,
zh:`有盖的食器。单用：食物、美食。在左边写 饣（繁体 飠），表示食物：饭、饺、饼、饿；餐 下面是完整的 食。`}},
  {id:"rad-14",s:"宀",py:"mián",es:"techo",en:"roof",say:"宀",
   x:{
es:`Un techo de dos aguas visto de frente. No se usa solo; aparece arriba de otros caracteres.
Lo encontrás en: 安 (ān) paz (mujer bajo techo), 字 (zì) carácter (niño bajo techo), 客 (kè) invitado.`,
en:`A gabled roof seen from the front. Not used alone; it sits on top of other characters.
You'll find it in: 安 peace (woman under a roof), 字 (zì) character (child under a roof), 客 (kè) guest.`,
zh:`屋顶，放在字的上面：安、字、客。`}},
  {id:"rad-15",s:"艹",py:"cǎo",es:"hierba, planta",en:"grass, plant",say:"草",
   x:{
es:`QUÉ DIBUJA: dos brotes de hierba saliendo del suelo, uno al lado del otro. Es la forma reducida de 艸 (cǎo, hierba), que tiene dos plantitas completas.

NO SE USA SOLO: siempre va ARRIBA de otro carácter, como un techo de pasto. Se llama «cabeza de hierba».

QUÉ MARCA: todo lo que es planta, flor, hierba o verdura.
De tus clases: 茶 (chá) té (la hoja del arbusto) · 苹 (píng) de 苹果 (píngguǒ) manzana · 苗 (miáo) brote (艹 cǎo sobre 田 tián: el brote en el campo; está dentro de 猫 māo) · 苔 (tái) musgo (del proverbio).
Otros: 花 (huā) flor · 草 (cǎo) hierba · 菜 (cài) verdura, plato de comida · 药 (yào) remedio (las medicinas eran hierbas).

TRUCO: si ves 艹 (cǎo) arriba, pensá en plantas.

PRONUNCIACIÓN: como carácter suelto sería cǎo (草, hierba).`,
en:`WHAT IT DEPICTS: two sprouts of grass coming up side by side. It's the reduced form of 艸 (cǎo, grass), which has two full little plants.

NOT USED ALONE: it always sits ON TOP of another character, like a roof of grass. It's called the "grass head".

WHAT IT MARKS: anything that is a plant, flower, herb or vegetable.
From your classes: 茶 (chá) tea (the shrub's leaf) · 苹 (píng) in 苹果 (píngguǒ) apple · 苗 (miáo) sprout (艹 cǎo over 田 tián: a sprout in the field; it's inside 猫 māo) · 苔 (tái) moss (from the proverb).
Others: 花 (huā) flower · 草 (cǎo) grass · 菜 (cài) vegetable, dish · 药 (yào) medicine (medicines were herbs).

TIP: 艹 (cǎo) on top → think plants.

PRONUNCIATION: as a standalone character it would be cǎo (草, grass).`,
zh:`两棵小草，放在字的上面（草字头），表示植物：茶、苹、苗、苔、花、草、菜、药。`}},
  {id:"rad-16",s:"犭",py:"quǎn",es:"animal (perro)",en:"animal (dog)",say:"犬",
   x:{
es:`QUÉ DIBUJA: es 犬 quǎn (perro) aplastado para ir a la izquierda. En su forma antigua se ve un perro de perfil, parado, con la cola enroscada hacia arriba.

NO SE USA SOLO en esta forma; se llama «perro de costado».

QUÉ MARCA: casi todos los animales de cuatro patas y peludos, aunque no sean perros.
De tus clases: 狗 (gǒu) perro (犭 quǎn + 句 jù sonido) · 猫 (māo) gato (犭 + 苗 miáo sonido: miáo).
Otros: 狮 (shī) león · 猪 (zhū) cerdo · 狼 (láng) lobo. Y algunos con sentido de «salvaje»: 独 (dú) solo (familia2: los perros pelean y viven solos, dice la explicación clásica).

TRUCO: 犭 (quǎn) a la izquierda → un animal (o algo animal, salvaje). El lado derecho casi siempre da el sonido.

PRONUNCIACIÓN: como carácter suelto, 犬 quǎn.`,
en:`WHAT IT DEPICTS: it's 犬 quǎn (dog) squeezed to fit on the left. The ancient form shows a dog in profile, standing, tail curled up.

NOT USED ALONE in this form; it's called the "side dog".

WHAT IT MARKS: nearly all furry four-legged animals, even if they're not dogs.
From your classes: 狗 (gǒu) dog (犭 quǎn + 句 jù sound) · 猫 (māo) cat (犭 + 苗 miáo sound: miáo).
Others: 狮 (shī) lion · 猪 (zhū) pig · 狼 (láng) wolf. Also some with a "wild" sense: 独 (dú) alone (the classic explanation: dogs fight and live alone).

TIP: 犭 (quǎn) on the left → an animal (or something wild). The right side almost always gives the sound.

PRONUNCIATION: as a standalone character, 犬 quǎn.`,
zh:`犬 在左边的写法（反犬旁），侧面尾巴卷起的狗。表示四条腿的动物：狗、猫、狮、猪、狼；独。右边多半表音。`}},
  {id:"rad-17",s:"田",py:"tián",es:"campo de arroz",en:"rice field",cl:"c2",
   x:{
es:`QUÉ DIBUJA: un campo de arroz visto desde arriba. El cuadrado es el límite del terreno y la cruz de adentro son los canales de riego que lo dividen en cuatro parcelas. Es literalmente un plano.

SOLO: 田 tián «campo cultivado». 田地 (tiándì) tierra de cultivo.

COMO COMPONENTE:
男 (nán) hombre = 田 (tián, campo) + 力 (lì, fuerza): el que trabaja el campo. El ejemplo que dio Michelle.
苗 (miáo) brote = 艹 (cǎo, hierba) + 田 (campo): la plantita en el campo; está dentro de 猫 (māo, gato), por el sonido.
思 (sī) pensar = 田 + 心 (xīn, en realidad el 田 era una cabeza, un cráneo visto desde arriba).

CONFUNDIBLES: 由 (yóu, con un palito que sale arriba: «desde», está en 迪 dí de tu nombre) · 甲 (jiǎ, palito abajo) · 申 (shēn, arriba y abajo).

PRONUNCIACIÓN: tián, segundo tono. t con aire.`,
en:`WHAT IT DEPICTS: a rice field seen from above. The square is the edge of the land and the cross inside is the irrigation channels dividing it into four plots. It's literally a map.

ALONE: 田 tián "cultivated field". 田地 (tiándì) farmland.

AS A COMPONENT:
男 (nán) man = 田 (tián, field) + 力 (lì, strength): the one who works the field. Michelle's example.
苗 (miáo) sprout = 艹 (cǎo, grass) + 田 (field): the seedling in the field; it's inside 猫 (māo, cat), for the sound.
思 (sī) to think = 田 + 心 (xīn, here the 田 was actually a head, a skull seen from above).

LOOK-ALIKES: 由 (yóu, a stick poking out the top: "from", in 迪 dí of your name) · 甲 (jiǎ, stick at the bottom) · 申 (shēn, top and bottom).

PRONUNCIATION: tián, 2nd tone. Aspirated t.`,
zh:`从上面看的稻田，十字是水渠。单用：田地。部件：男（田 + 力）、苗（艹 + 田）、思。形近字：由（迪）、甲、申。`}},
  {id:"rad-18",s:"力",py:"lì",es:"fuerza",en:"strength",cl:"c2",
   x:{
es:`QUÉ DIBUJA: un arado antiguo (el mango curvo y la reja que entra en la tierra), o según otra lectura, un brazo doblado con el músculo tenso. En los dos casos: fuerza, trabajo físico.

SOLO: 力 lì «fuerza». 努力 (nǔlì) esforzarse · 力气 (lìqi) fuerza física.

COMO COMPONENTE:
男 (nán) hombre = 田 (tián, campo) + 力 (lì, fuerza). Michelle lo explicó como «campo y hacha».
加 (jiā) agregar = 力 + 口 (kǒu, boca): dar fuerza con palabras, sumar. Está en 咖啡 (kāfēi, café), donde solo da el sonido.
动 (dòng) moverse · 办 (bàn) hacer, encargarse · 劳 (láo) trabajo.

CONFUNDIBLE: 刀 dāo (cuchillo) se parece mucho; 力 (lì) tiene el trazo que atraviesa arriba.

PRONUNCIACIÓN: lì, cuarto tono.`,
en:`WHAT IT DEPICTS: an ancient plough (the curved handle and the share cutting into the earth), or in another reading, a bent arm with the muscle tensed. Either way: strength, physical work.

ALONE: 力 lì "strength". 努力 (nǔlì) to make an effort · 力气 (lìqi) physical strength.

AS A COMPONENT:
男 (nán) man = 田 (tián, field) + 力 (lì, strength). Michelle described it as "field and axe".
加 (jiā) to add = 力 + 口 (kǒu, mouth): giving strength with words, adding up. It's in 咖啡 (kāfēi, coffee), where it only gives the sound.
动 (dòng) to move · 办 (bàn) to handle · 劳 (láo) labour.

LOOK-ALIKE: 刀 dāo (knife) is very similar; 力 (lì) has the stroke poking through at the top.

PRONUNCIATION: lì, 4th tone.`,
zh:`犁，或用力的手臂。单用：力、努力、力气。部件：男、加、动、办、劳。形近字：刀。`}},
  {id:"rad-19",s:"大",py:"dà",es:"grande",en:"big",cl:"c1",
   x:{
es:`Una persona de frente con brazos y piernas abiertos, ocupando todo el espacio.
Con un trazo más: 太 (tài) demasiado (太太 tàitai señora). Con una línea encima: 天 (tiān) cielo. 大山 (Dàshān) es el nombre chino del canadiense que mencionó Michelle.`,
en:`A person seen from the front with arms and legs spread, taking up all the space.
With one more stroke: 太 (tài) too much (太太 tàitai Mrs.). With a line on top: 天 (tiān) sky. 大山 (Dàshān) is the Chinese name of the Canadian Michelle mentioned.`,
zh:`张开手脚的人。多一点是 太，上面加一横是 天。大山 是 Michelle 老师提到的那位加拿大人的中文名。`}},
  {id:"rad-20",s:"门",t:"門",py:"mén",es:"puerta",en:"door, gate",
   x:{
es:`Una puerta de dos hojas vista de frente; en tradicional 門 (mén) se ven las dos hojas completas.
Lo encontrás en: 们 (men) plural (por el sonido), 闆 (bǎn, tradicional de 板 bǎn, el jefe detrás de la puerta), 關 (guān, tradicional de 关 guān).`,
en:`A two-leaf door seen from the front; in traditional 門 (mén) both leaves are complete.
You'll find it in: 们 (men) plural (for the sound), 闆 (bǎn, traditional of 板 bǎn, the boss behind the door), 關 (guān, traditional of 关 guān).`,
zh:`两扇门，繁体 門 两扇都完整：们、闆、關。`}},
  {id:"rad-21",s:"目",py:"mù",es:"ojo",en:"eye",
   x:{
es:`QUÉ DIBUJA: un ojo. Originalmente dibujado acostado, como un ojo de verdad (el contorno y la pupila en el medio). Después se paró en vertical para ocupar menos lugar en las columnas de escritura.

SOLO: 目 mù «ojo» (más formal; al hablar «ojo» es 眼睛 yǎnjīng). 目的 (mùdì) objetivo («lo que el ojo apunta»).

COMO COMPONENTE: marca la vista y los ojos.
De tus clases: 见 (jiàn) ver (再见 zàijiàn chau): 目 (mù) arriba sobre 儿 (dos piernas): el ojo que camina hacia algo, ir a ver. En tradicional 見 (jiàn) se ve el ojo completo. Está también en 视 (shì, ver, de 电视 diànshì, televisión).
Otros: 看 (kàn) mirar (una mano 手 shǒu sobre el ojo 目, haciendo visera) · 睡 (shuì) dormir · 眼 (yǎn) ojo.

CONFUNDIBLE: 日 (rì, sol) es más bajo y tiene una sola raya adentro; 目 (mù) es más alto y tiene dos.

PRONUNCIACIÓN: mù, cuarto tono.`,
en:`WHAT IT DEPICTS: an eye. Originally drawn lying down, like a real eye (the outline with the pupil in the middle). Later stood upright to take less room in the writing columns.

ALONE: 目 mù "eye" (formal; in speech "eye" is 眼睛 yǎnjīng). 目的 (mùdì) goal ("what the eye aims at").

AS A COMPONENT: it marks sight and eyes.
From your classes: 见 (jiàn) to see (再见 zàijiàn goodbye): 目 (mù) on top of 儿 (ér, two legs): the eye walking toward something, going to see. In traditional 見 (jiàn) the whole eye is visible. It's also in 视 (shì, to see, from 电视 diànshì, television).
Others: 看 (kàn) to look (a hand 手 shǒu over the eye 目, shading it) · 睡 (shuì) to sleep · 眼 (yǎn) eye.

LOOK-ALIKE: 日 (rì, sun) is shorter with one stroke inside; 目 (mù) is taller with two.

PRONUNCIATION: mù, 4th tone.`,
zh:`眼睛，本来横着画，后来竖起来。单用：目的。部件：见 / 見（目 + 儿）、视、看（手 放在 目 上）、睡、眼。形近字：日。`}},
  {id:"rad-22",s:"止",py:"zhǐ",es:"pie, huella; detenerse",en:"foot; to stop",
   x:{
es:`QUÉ DIBUJA: la huella de un pie: los dedos arriba y el talón abajo. Como huella parada, significa «detenerse, parar» (止 zhǐ).

SOLO: 止 zhǐ «parar, detener». 禁止 (jìnzhǐ) prohibido.

COMO COMPONENTE, casi siempre significa «pie, caminar, ir»:
走 (zǒu) caminar: una figura inclinada balanceando los brazos, sobre 止 (zhǐ, el pie).
正 (zhèng) correcto, derecho: una línea de meta 一 (yī) sobre 止: el pie que va derecho al objetivo. Dentro de 是 (shì, ser).
此 (cǐ) esto, acá: 止 + 匕 (bǐ), el pie parado en este lugar. Dentro de 些 (xiē).
先 (xiān) primero: 止 (un pie) avanzando sobre 儿 (piernas): ir adelante. De 先生 (xiānsheng).

TRUCO: 止 (zhǐ) en un carácter → movimiento, pies, ir a algún lado.

PRONUNCIACIÓN: zhǐ, tercer tono, lengua atrás.`,
en:`WHAT IT DEPICTS: a footprint: toes on top, heel below. As a footprint standing still, it means "to stop" (止 zhǐ).

ALONE: 止 zhǐ "to stop". 禁止 (jìnzhǐ) forbidden.

AS A COMPONENT it almost always means "foot, walk, go":
走 (zǒu) to walk: a leaning figure swinging its arms, over 止 (zhǐ, the foot).
正 (zhèng) correct, straight: a finish line 一 (yī) over 止: the foot heading straight for the goal. Inside 是 (shì, to be).
此 (cǐ) this, here: 止 + 匕 (bǐ), the foot standing in this spot. Inside 些 (xiē).
先 (xiān) first: 止 (a foot) advancing over 儿 (legs): going ahead. From 先生 (xiānsheng).

TIP: 止 (zhǐ) in a character → movement, feet, going somewhere.

PRONUNCIATION: zhǐ, 3rd tone, tongue back.`,
zh:`脚印：上面脚趾，下面脚跟。单用：止、禁止。作部件多表示脚和行走：走、正（是）、此（些）、先。`}},
  {id:"rad-23",s:"走 · 辶",py:"zǒu",es:"caminar",en:"to walk",say:"走",
   x:{
es:`走 (zǒu): una figura inclinada (brazos balanceándose) sobre 止 (zhǐ, un pie). 辶 (zǒu) es la versión «camino» que envuelve otros caracteres por abajo.
Lo encontrás en: 超 (chāo) sobrepasar, 起 (qǐ) levantarse, 这 (zhè) este, 迪 (dí, tu nombre).`,
en:`走 (zǒu): a leaning figure (arms swinging) over 止 (zhǐ, a foot). 辶 (zǒu) is the "road" version that wraps under other characters.
You'll find it in: 超 (chāo) to exceed, 起 (qǐ) to rise, 这 (zhè) this, 迪 (dí, your name).`,
zh:`走：摆动双臂的人在 止 上。辶 从下面包住别的字：超、起、这、迪。`}},
  {id:"rad-24",s:"巾",py:"jīn",es:"paño, tela",en:"cloth",
   x:{
es:`QUÉ DIBUJA: un paño o trapo colgando de una barra horizontal. El trazo vertical es la tela que cae.

SOLO: 巾 jīn «paño, toalla». 毛巾 (máojīn) toalla · 纸巾 (zhǐjīn) pañuelo de papel.

COMO COMPONENTE: marca telas y cosas hechas de tela.
De tus clases:
市 (shì) mercado (de 超市 chāoshì, supermercado): 巾 (jīn) bajo un trazo. Los puestos del mercado se reconocían por sus toldos y banderas de tela.
围巾 (wéijīn) bufanda: el paño 巾 que rodea 围 (wéi) el cuello.
师 (shī) maestro (de 老师 lǎoshī): a la derecha lleva 帀 (zā), que contiene 巾; su origen es una multitud organizada, un ejército.
Otros: 帽 (mào) sombrero · 布 (bù) tela · 带 (dài) cinturón, llevar.

PRONUNCIACIÓN: jīn, primer tono.`,
en:`WHAT IT DEPICTS: a cloth or rag hanging from a horizontal bar. The vertical stroke is the fabric falling.

ALONE: 巾 jīn "cloth, towel". 毛巾 (máojīn) towel · 纸巾 (zhǐjīn) tissue.

AS A COMPONENT: it marks fabrics and things made of cloth.
From your classes:
市 (shì) market (from 超市 chāoshì, supermarket): 巾 (jīn) under a stroke. Market stalls were recognised by their cloth awnings and banners.
围巾 (wéijīn) scarf: the cloth 巾 that goes around 围 (wéi) the neck.
师 (shī) master (from 老师 lǎoshī): on the right it has 帀 (zā), which contains 巾; its origin is an organised crowd, an army.
Others: 帽 (mào) hat · 布 (bù) cloth · 带 (dài) belt, to carry.

PRONUNCIATION: jīn, 1st tone.`,
zh:`挂在横杆上的布。单用：毛巾、纸巾。部件：市（摊位的布篷）、围巾、师、帽、布、带。`}},
  {id:"rad-25",s:"米",py:"mǐ",es:"arroz (grano)",en:"rice (grain)",
   x:{
es:`QUÉ DIBUJA: granos de arroz desparramados alrededor de un tallo o eje: la cruz del medio y cuatro puntitos (los granos).

SOLO: 米 mǐ «arroz (crudo, en grano)». También «metro» (la unidad de medida, por el sonido). 米饭 (mǐfàn) arroz cocido.

COMO COMPONENTE: marca granos, cereales y cosas hechas con ellos.
De tus clases: 糖 (táng) azúcar (米 mǐ + 唐 táng: antiguamente el azúcar se sacaba de granos) · 数 (shù) contar (米 + 女 nǚ + 攵 pū: contar granos con un palito).
En tradicional 氣 (qì, aire, vapor) lleva 米 debajo de 气 (qì): el vapor que sale del arroz cocinándose. El simplificado 气 lo sacó.
Otros: 粉 (fěn) harina · 粥 (zhōu) sopa de arroz.

DIFERENCIA: 米 (mǐ) es el grano crudo; 饭 (fàn) es el arroz cocido servido.

PRONUNCIACIÓN: mǐ, tercer tono.`,
en:`WHAT IT DEPICTS: rice grains scattered around a stalk: the cross in the middle and four dots (the grains).

ALONE: 米 mǐ "rice (raw grain)". Also "metre" (the unit, by sound). 米饭 (mǐfàn) cooked rice.

AS A COMPONENT: it marks grains, cereals and things made from them.
From your classes: 糖 (táng) sugar (米 mǐ + 唐 táng: sugar used to be extracted from grain) · 数 (shù) to count (米 + 女 nǚ + 攵 pū: counting grains with a stick).
Traditional 氣 (qì, air, steam) has 米 under 气 (qì): the steam rising from cooking rice. Simplified 气 dropped it.
Others: 粉 (fěn) flour · 粥 (zhōu) rice porridge.

DIFFERENCE: 米 (mǐ) is the raw grain; 饭 (fàn) is cooked rice served.

PRONUNCIATION: mǐ, 3rd tone.`,
zh:`散开的米粒。单用：米、米饭；也是长度单位"米"。部件：糖、数、氣、粉、粥。米 是生米，饭 是熟饭。`}},
  {id:"rad-26",s:"虫",t:"蟲",py:"chóng",es:"bicho, insecto",en:"insect, bug",
   x:{
es:`Un bicho o un reptil con la cabeza levantada. Como palabra suelta, en tradicional son tres bichos: 蟲 (chóng). Dentro de otros caracteres queda uno solo, 虫 (chóng), también en tradicional.
Lo encontrás en: 蛇 (shé) serpiente, y en muchos insectos: 蚂蚁 (mǎyǐ) hormiga.`,
en:`A bug or reptile with its head raised. As a word on its own, traditional has three bugs: 蟲 (chóng). Inside other characters only one remains, 虫 (chóng), in traditional too.
You'll find it in: 蛇 (shé) snake, and many insects: 蚂蚁 (mǎyǐ) ant.`,
zh:`抬头的虫。单独成字时繁体是 蟲，在别的字里只写一个 虫：蛇、蚂蚁。`}},
  {id:"rad-27",s:"车",t:"車",py:"chē",es:"carro",en:"cart, vehicle",
   x:{
es:`QUÉ DIBUJA: un carro visto desde arriba. El trazo vertical es el eje y los horizontales, las dos ruedas y la caja. En tradicional 車 (chē) se ven las dos ruedas completas y la caja en el medio.

SOLO: 车 chē «vehículo». 汽车 (qìchē) auto (de tu lista: «carro de vapor») · 火车 (huǒchē) tren («carro de fuego») · 自行车 (zìxíngchē) bicicleta («carro que anda solo»).

COMO COMPONENTE: marca vehículos, ruedas y transporte: 轮 (lún) rueda · 辆 (liàng) clasificador de vehículos (一辆车 yí liàngchē un auto).

UN CLASIFICADOR NUEVO: los autos no llevan 个 (gè) sino 辆 liàng, que tiene 车 (chē) adentro: 一辆汽车 (yí liàng qìchē).

PRONUNCIACIÓN: chē, primer tono, ch con aire y la lengua atrás. Es la palabra que Michelle te hizo practicar (chi, che) en clase.`,
en:`WHAT IT DEPICTS: a cart seen from above. The vertical stroke is the axle and the horizontal ones the two wheels and the box. Traditional 車 (chē) shows both wheels complete with the box in the middle.

ALONE: 车 chē "vehicle". 汽车 (qìchē) car (from your list: "steam cart") · 火车 (huǒchē) train ("fire cart") · 自行车 (zìxíngchē) bicycle ("self-moving cart").

AS A COMPONENT: it marks vehicles, wheels and transport: 轮 (lún) wheel · 辆 (liàng) measure word for vehicles (一辆车 yí liàngchē a car).

A NEW MEASURE WORD: cars don't take 个 (gè) but 辆 liàng, which has 车 (chē) inside: 一辆汽车 (yí liàng qìchē).

PRONUNCIATION: chē, 1st tone, ch aspirated with the tongue back. It's the word Michelle had you practise (chi, che) in class.`,
zh:`从上面看的车：车轴和两个轮子，繁体 車 更完整。单用：汽车、火车、自行车。部件：轮、辆（车的量词：一辆汽车）。`}},
  {id:"rad-28",s:"马",t:"馬",py:"mǎ",es:"caballo",en:"horse",
   x:{
es:`Un caballo de perfil: la crin arriba, las patas abajo (las cuatro en tradicional 馬 mǎ).
Como componente de sonido: 妈 mā, 吗 ma, 骂 mà. Los cuatro solo se diferencian por el tono y el radical.`,
en:`A horse in profile: mane on top, legs below (all four in traditional 馬 mǎ).
As a sound component: 妈 mā, 吗 ma, 骂 mà. The four differ only in tone and radical.`,
zh:`侧面的马。作表音部件：妈、吗、骂，只有声调和部首不同。`}},
  {id:"rad-29",s:"胀",t:"脹",py:"zhàng",es:"hincharse, hinchado",en:"to swell, swollen",cl:"c4",
   x:{
es:`QUÉ ES: «hincharse, estar hinchado». Michelle lo usó para mostrar que los radicales ayudan a adivinar: «si decís que tu mano está hinchada, en chino se dice 胀 (zhàng)».

EL CARÁCTER:
月 (yuè) a la izquierda NO es la luna: es 肉 (ròu), carne. Michelle: «este es 月, la luna, pero también es el carácter de carne». Hace unos 2000 años, cuando la escritura se hizo más rápida y recta, «carne» y «luna» terminaron dibujándose igual. Regla: si el carácter habla del cuerpo, 月 es carne.
长 a la derecha: se lee zhǎng, «crecer» (y también cháng, «largo»). Da el sonido (zhǎng → zhàng) y el sentido.
Como lo resumió Michelle: «la carne que creció: hinchar».

LA FAMILIA DEL 月 (yuè)-CARNE: 脸 (liǎn) cara · 腿 (tuǐ) pierna · 脑 (nǎo) cerebro, el de 电脑 (diànnǎo) · 肚 (dù) panza · 胞 (bāo), el de 双胞胎 (shuāngbāotāi) mellizos.

胀 O 肿: 胀 (zhàng) es sobre todo la sensación de presión o de estar lleno desde adentro: 肚子胀 (dùzi zhàng), «panza hinchada». 肿 (zhǒng) es la hinchazón visible, por un golpe o inflamación: 我的脚肿了 (wǒ de jiǎo zhǒng le). Juntos: 肿胀 (zhǒngzhàng), hinchazón. Y 膨胀 (péngzhàng), expandirse; 通货膨胀 (tōnghuò péngzhàng), inflación.

PRONUNCIACIÓN: zhàng, 4.º tono (cae). zh con la lengua curvada atrás, sin aire.`,
en:`WHAT IT IS: "to swell, to be swollen". Michelle used it to show that radicals help you guess: "if you say your hand is swollen, in Chinese it's 胀 (zhàng)".

THE CHARACTER:
月 (yuè) on the left is NOT the moon: it's 肉 (ròu), flesh. Michelle: "this is 月, the moon, but it's also the character for meat". About 2,000 years ago, when writing became faster and straighter, "flesh" and "moon" ended up drawn the same. Rule: if the character is about the body, 月 is flesh.
长 on the right: read zhǎng, "to grow" (also cháng, "long"). It gives the sound (zhǎng → zhàng) and the meaning.
As Michelle summed it up: "flesh that has grown: to swell".

THE FLESH-月 (yuè) FAMILY: 脸 (liǎn) face · 腿 (tuǐ) leg · 脑 (nǎo) brain, as in 电脑 (diànnǎo) · 肚 (dù) belly · 胞 (bāo), as in 双胞胎 (shuāngbāotāi) twins.

胀 OR 肿: 胀 (zhàng) is mostly the feeling of pressure or fullness from inside: 肚子胀 (dùzi zhàng), "bloated belly". 肿 (zhǒng) is visible swelling, from a knock or inflammation: 我的脚肿了 (wǒ de jiǎo zhǒng le). Together: 肿胀 (zhǒngzhàng), swelling. And 膨胀 (péngzhàng), to expand; 通货膨胀 (tōnghuò péngzhàng), inflation.

PRONUNCIATION: zhàng, 4th tone (falling). zh with the tongue curled back, no air.`,
zh:`胀：膨胀、发胀。老师用它说明部首的帮助：左边的月是"肉"（肉月），不是月亮；右边长（zhǎng，生长）表音也表意：肉长大了就是胀。肉月的字：脸、腿、脑、肚、胞。胀多指内部的胀满感（肚子胀），肿指看得见的肿（脚肿了）；肿胀、膨胀、通货膨胀。`}}
  ]
});
