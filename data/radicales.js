/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"radicales", glyph:"人",
  name:{"es": "Caracteres base", "en": "Building-block characters", "zh": "基本汉字"},
  cl:"ex",
  cards:[
  {id:"rad-01",s:"人 · 亻",py:"rén",es:"persona",en:"person",say:"人",
   x:{
es:`Una persona caminando vista de costado: las dos piernas.
A la izquierda de otro carácter se aplasta en 亻.
Lo encontrás en: 你 vos, 他 él, 们 plural, 位 clasificador, 什 de 什么, 茶 té.`,
en:`A person walking, seen from the side: the two legs.
On the left of another character it squeezes into 亻.
You'll find it in: 你 you, 他 he, 们 plural, 位 measure word, 什 of 什么, 茶 tea.`,
zh:`侧面走路的人。在左边写成 亻：你、他、们、位、什、茶。`}},
  {id:"rad-02",s:"女",py:"nǚ",es:"mujer",en:"woman",
   x:{
es:`QUÉ DIBUJA: una mujer arrodillada, vista de perfil, con los brazos cruzados delante del pecho. Era la postura formal de las mujeres en la China antigua. Michelle: «una mujer sentada con las piernas cruzadas».

SOLO: 女 nǚ «mujer, femenino». 女人 mujer · 女儿 hija · 女老师 profesora.

COMO COMPONENTE (casi siempre a la izquierda, un poco más angosto): avisa que la palabra tiene que ver con mujeres, parentesco o cualidades asociadas.
De tus clases: 妈 mamá · 姐 hermana mayor · 妹 hermana menor · 她 ella · 奶 leche/abuela · 姑 tía paterna · 婶 tía · 婆 señora mayor.
También adentro o abajo: 好 bueno (女 + 子, madre e hijo) · 安 paz (女 bajo el techo 宀) · 母 madre (女 con dos puntos).

TRUCO: cuando veas 女 en un carácter nuevo, probá primero con «algo de mujeres o de familia»: acertás casi siempre.

PRONUNCIACIÓN: nǚ, tercer tono, ü con los labios redondos.`,
en:`WHAT IT DEPICTS: a woman kneeling in profile, arms crossed in front of her chest. The formal posture of women in ancient China. Michelle: "a woman sitting with crossed legs".

ALONE: 女 nǚ "woman, female". 女人 woman · 女儿 daughter · 女老师 female teacher.

AS A COMPONENT (usually on the left, a bit narrower): it signals women, kinship or associated qualities.
From your classes: 妈 mom · 姐 older sister · 妹 younger sister · 她 she · 奶 milk/grandma · 姑 paternal aunt · 婶 aunt · 婆 older lady.
Also inside or below: 好 good (女 + 子, mother and child) · 安 peace (女 under the roof 宀) · 母 mother (女 with two dots).

TIP: when you see 女 in a new character, guess "something about women or family" first: you'll almost always be right.

PRONUNCIATION: nǚ, 3rd tone, ü with rounded lips.`,
zh:`侧面跪坐、双手交叉的女子。单用：女人、女儿、女老师。作部件表示与女性或亲属有关：妈、姐、妹、她、奶、姑、婶、婆；好（女 + 子）、安（宀 + 女）、母。`}},
  {id:"rad-03",s:"子",py:"zǐ",es:"niño, hijo",en:"child",
   x:{
es:`Un bebé con la cabeza grande, un brazo y las piernas envueltas en pañales.
Lo encontrás en: 好 bien, 学 estudiar, 字 carácter, 儿子 hijo, 房子 casa (acá como sufijo sin significado).`,
en:`A baby with a big head, one arm and swaddled legs.
You'll find it in: 好 good, 学 to study, 字 character, 儿子 son, 房子 house (here as a meaningless suffix).`,
zh:`头大、双腿包在襁褓里的婴儿：好、学、字、儿子、房子。`}},
  {id:"rad-04",s:"口",py:"kǒu",es:"boca",en:"mouth",
   x:{
es:`Una boca abierta dibujada como un rectángulo.
En un carácter avisa que algo se dice o pasa por la boca: 吃 comer, 叫 llamar, 吗 partícula de pregunta, 名 nombre.
En 咖啡 marca que el carácter se usa solo por su sonido.`,
en:`An open mouth drawn as a rectangle.
In a character it signals something said or going through the mouth: 吃 to eat, 叫 to call, 吗 question particle, 名 name.
In 咖啡 it marks that the character is used only for its sound.`,
zh:`张开的嘴：吃、叫、吗、名。在 咖啡 里表示只借读音。`}},
  {id:"rad-05",s:"日",py:"rì",es:"sol, día",en:"sun, day",
   x:{
es:`QUÉ DIBUJA: el sol. Originalmente un círculo con un punto en el centro; al escribirse con pincel y tallarse en bronce, el círculo se volvió cuadrado y el punto una raya: 日.

SOLO: 日 rì «sol» y «día». 生日 cumpleaños («día de nacimiento») · 日本 Japón («origen del sol»).

COMO COMPONENTE: marca luz, tiempo y momentos del día.
De tus clases: 早 temprano (el sol sobre el horizonte) · 晚 noche (el sol que se fue) · 是 ser (日 sobre 正) · 明 claro, brillante (日 sol + 月 luna) · 时 hora.
OJO: no todo 日 es sol. Adentro de 的 (en 白) no lo es, y 曰 (más ancho y bajo) es «decir», una boca con aliento.

CONFUNDIBLE: 目 mù (ojo) es parecido pero más alto y con dos rayas adentro.

PRONUNCIACIÓN: rì, cuarto tono. La r china, parecida a la r del inglés americano.`,
en:`WHAT IT DEPICTS: the sun. Originally a circle with a dot in the middle; written with a brush and cast in bronze, the circle became square and the dot a stroke: 日.

ALONE: 日 rì "sun" and "day". 生日 birthday ("birth day") · 日本 Japan ("sun's origin").

AS A COMPONENT: it marks light, time and times of day.
From your classes: 早 early (the sun above the horizon) · 晚 evening (the sun that's gone) · 是 to be (日 over 正) · 明 bright (日 sun + 月 moon) · 时 hour.
CAREFUL: not every 日 is the sun. Inside 的 (in 白) it isn't, and 曰 (wider and flatter) is "to say", a mouth with breath.

LOOK-ALIKE: 目 mù (eye) is similar but taller, with two strokes inside.

PRONUNCIATION: rì, 4th tone. Chinese r, close to an American r.`,
zh:`太阳：圆圈中间一点，后来写成方形。单用：生日、日本。作部件表示光、时间：早、晚、是、明、时。注意：的 里的不是太阳；曰 是"说"；目 是眼睛。`}},
  {id:"rad-06",s:"月",py:"yuè",es:"luna, mes",en:"moon, month",
   x:{
es:`Una media luna. Ojo: a la izquierda de un carácter, 月 casi siempre NO es la luna sino 肉 (carne), el radical de las partes del cuerpo: 脑 cerebro, 脸 cara.
En 有 (tener) también es carne: una mano sosteniendo un pedazo de carne.`,
en:`A half moon. Careful: on the left of a character, 月 is almost never the moon but 肉 (meat), the radical for body parts: 脑 brain, 脸 face.
In 有 (to have) it's meat too: a hand holding a piece of meat.`,
zh:`半个月亮。在字的左边多半是 肉，表示身体部位：脑、脸。有 里的 月 也是肉。`}},
  {id:"rad-07",s:"木",py:"mù",es:"árbol, madera",en:"tree, wood",
   x:{
es:`Un árbol: el trazo vertical es el tronco, el horizontal las ramas, los dos de abajo las raíces.
Lo encontrás en: 树 árbol, 机 máquina, 校 escuela, 果 fruta, 茶 té, 橘 mandarina, 板 tabla.`,
en:`A tree: the vertical stroke is the trunk, the horizontal the branches, the two lower strokes the roots.
You'll find it in: 树 tree, 机 machine, 校 school, 果 fruit, 茶 tea, 橘 tangerine, 板 board.`,
zh:`树：树干、树枝、树根。树、机、校、果、茶、橘、板。`}},
  {id:"rad-08",s:"水 · 氵",py:"shuǐ",es:"agua",en:"water",say:"水",
   x:{
es:`QUÉ DIBUJA: una corriente de agua. El trazo del medio es el curso principal y los de los costados, las salpicaduras o los afluentes.

SOLO: 水 shuǐ «agua». Está en tu lista de 22 palabras. 水果 fruta («agua + fruto»: fruta jugosa).

COMO COMPONENTE, a la izquierda se reduce a 氵, tres gotas («tres gotas de agua», se llama). Marca todo lo líquido, lo que fluye o se hace con agua:
洗 lavar (de 洗衣机, lavarropas) · 汽 vapor (de 汽车, auto) · 沙 arena (lo que queda cuando hay poca agua) · 没 hundirse, no tener · 滚 rodar (del proverbio) · 酒 alcohol.

TRUCO: si ves 氵 a la izquierda, pensá en agua, líquidos, lavar, ríos o mar.

CONFUNDIBLE: 冫 (dos gotas) es hielo, frío: 冷 frío.

PRONUNCIACIÓN: shuǐ, tercer tono. sh con la lengua atrás.`,
en:`WHAT IT DEPICTS: a stream of water. The middle stroke is the main current and the side strokes the splashes or tributaries.

ALONE: 水 shuǐ "water". It's on your list of 22 words. 水果 fruit ("water + fruit": juicy fruit).

AS A COMPONENT, on the left it shrinks to 氵, three drops. It marks anything liquid, flowing or done with water:
洗 to wash (from 洗衣机, washing machine) · 汽 steam (from 汽车, car) · 沙 sand (what's left when water is low) · 没 to sink, not have · 滚 to roll (from the proverb) · 酒 alcohol.

TIP: 氵 on the left → think water, liquids, washing, rivers or sea.

LOOK-ALIKE: 冫 (two drops) is ice, cold: 冷 cold.

PRONUNCIATION: shuǐ, 3rd tone. sh with the tongue back.`,
zh:`水流和水花。单用：水、水果。在左边写成 氵（三点水），表示和液体有关：洗、汽、沙、没、滚、酒。两点水 冫 表示冰冷：冷。`}},
  {id:"rad-09",s:"心 · 忄",py:"xīn",es:"corazón",en:"heart",say:"心",
   x:{
es:`QUÉ DIBUJA: un corazón, con sus cavidades: la curva es el músculo y los puntos, las cámaras o las venas.

SOLO: 心 xīn «corazón», y también «mente». Los antiguos chinos pensaban que se pensaba con el corazón. 小心 ¡cuidado! («corazón pequeño», estar atento).

COMO COMPONENTE: abajo queda 心 (您, 想 pensar, 念 extrañar); a la izquierda se vuelve 忄, un trazo vertical con dos puntitos (情 sentimiento, 忙 ocupado, 快 rápido/contento). Marca sentimientos, emociones y pensamiento.
De tus clases: 您 usted = 你 (vos) sobre 心: «te pongo en el corazón», respeto.

TRUCO: 忄 a la izquierda o 心 abajo → algo que se siente o se piensa.

PRONUNCIACIÓN: xīn, primer tono. x con la lengua plana adelante.`,
en:`WHAT IT DEPICTS: a heart with its chambers: the curve is the muscle and the dots are the chambers or veins.

ALONE: 心 xīn "heart", and also "mind". Ancient Chinese believed you thought with the heart. 小心 careful! ("small heart", pay attention).

AS A COMPONENT: at the bottom it stays 心 (您, 想 to think, 念 to miss); on the left it becomes 忄, a vertical stroke with two dots (情 feeling, 忙 busy, 快 fast/happy). It marks feelings, emotions and thought.
From your classes: 您 polite you = 你 over 心: "I place you in my heart", respect.

TIP: 忄 on the left or 心 below → something felt or thought.

PRONUNCIATION: xīn, 1st tone. x with the tongue flat and forward.`,
zh:`心脏。单用：心、小心。在下面写 心（您、想、念），在左边写 忄（情、忙、快），表示感情和思想。您 = 你 + 心。`}},
  {id:"rad-10",s:"手 · 扌",py:"shǒu",es:"mano",en:"hand",say:"手",
   x:{
es:`QUÉ DIBUJA: una mano abierta. Los trazos horizontales son los dedos y el vertical, la palma y la muñeca.

SOLO: 手 shǒu «mano». 手机 celular («máquina de mano», de tu lista) · 手表 reloj de pulsera.

COMO COMPONENTE, a la izquierda se vuelve 扌 (un gancho con una raya: «mano de al lado»). Marca acciones que se hacen con las manos:
拉 tirar (de 沙拉, aunque ahí solo suena) · 打 golpear, jugar · 拿 agarrar · 找 buscar · 排 ordenar (de 排行).
Otras manos que viste: 又 (la mano derecha de tres dedos) y la mano de arriba en 有 (tener).

TRUCO: 扌 a la izquierda → una acción con las manos.

PRONUNCIACIÓN: shǒu, tercer tono. En 手机 los tonos son 3 + 1: shǒujī.`,
en:`WHAT IT DEPICTS: an open hand. The horizontal strokes are the fingers and the vertical one the palm and wrist.

ALONE: 手 shǒu "hand". 手机 mobile phone ("hand machine", from your list) · 手表 wristwatch.

AS A COMPONENT, on the left it becomes 扌 (a hook with a stroke: "side hand"). It marks actions done with the hands:
拉 to pull (in 沙拉, though there it's only sound) · 打 to hit, to play · 拿 to take · 找 to look for · 排 to arrange (from 排行).
Other hands you've seen: 又 (the three-fingered right hand) and the hand on top of 有 (to have).

TIP: 扌 on the left → an action with the hands.

PRONUNCIATION: shǒu, 3rd tone. In 手机 the tones are 3 + 1: shǒujī.`,
zh:`张开的手，横画是手指。单用：手、手机、手表。在左边写 扌（提手旁），表示手的动作：拉、打、拿、找、排。`}},
  {id:"rad-11",s:"又",py:"yòu",es:"mano derecha; otra vez",en:"right hand; again",
   x:{
es:`La mano derecha dibujada con tres dedos. Hoy significa «otra vez», pero como componente sigue siendo una mano.
Lo encontrás en: 友 amigo (dos manos), 对 correcto, 饭 arroz, 隻 (tradicional de 只: pájaro en la mano).`,
en:`The right hand drawn with three fingers. Today it means "again", but as a component it's still a hand.
You'll find it in: 友 friend (two hands), 对 correct, 饭 rice, 隻 (traditional of 只: a bird in the hand).`,
zh:`三根手指的右手，现在表示"又"，作部件仍是手：友、对、饭、隻。`}},
  {id:"rad-12",s:"言 · 讠",t:"言 · 訁",py:"yán",es:"hablar, palabra",en:"speech",say:"言",
   x:{
es:`QUÉ DIBUJA: una boca 口 abajo con líneas de sonido que salen hacia arriba: hablar, palabras.

SOLO: 言 yán «palabra, hablar» (poco usado solo en el habla diaria; aparece en 语言, idioma).

COMO COMPONENTE, a la izquierda se aplasta: en simplificado 讠 (un punto y un gancho), en tradicional 訁. Es uno de los radicales más útiles: marca TODO lo que tiene que ver con hablar, palabras o lenguaje.
De tus clases: 谢 agradecer (谢谢) · 谁 quién · 说 decir · 语 idioma · 词 palabra (量词) · 请 por favor, invitar.
En tradicional 這 (este) lleva 言 en lugar de 文: señalar mientras hablás.

TRUCO: si ves 讠 a la izquierda, es algo que se dice.

PRONUNCIACIÓN: yán, segundo tono.`,
en:`WHAT IT DEPICTS: a mouth 口 at the bottom with lines of sound going up: speaking, words.

ALONE: 言 yán "word, speech" (rare alone in daily speech; it's in 语言, language).

AS A COMPONENT, on the left it squeezes: simplified 讠 (a dot and a hook), traditional 訁. One of the most useful radicals: it marks EVERYTHING to do with speaking, words or language.
From your classes: 谢 to thank (谢谢) · 谁 who · 说 to say · 语 language · 词 word (量词) · 请 please, to invite.
Traditional 這 (this) has 言 instead of 文: pointing while you speak.

TIP: 讠 on the left → something that's said.

PRONUNCIATION: yán, 2nd tone.`,
zh:`嘴里发出声音。单用：语言。在左边写 讠（言字旁，繁体 訁），表示和说话有关：谢、谁、说、语、词、请。`}},
  {id:"rad-13",s:"食 · 饣",t:"食 · 飠",py:"shí",es:"comida, comer",en:"food, to eat",say:"食",
   x:{
es:`QUÉ DIBUJA: una vasija con comida y su tapa. Arriba 人 es la tapa (un techito), abajo la vasija con el pie.

SOLO: 食 shí «comida, comer» (más formal; «comer» al hablar es 吃). 食物 alimento · 美食 buena comida.

COMO COMPONENTE, a la izquierda se aplasta: simplificado 饣, tradicional 飠. Marca todo lo comestible.
De tus clases: 饭 arroz cocido, comida · 餐 comida (早餐, 午餐, 晚餐: acá 食 va abajo, completo).
Otros: 饺 empanadita china · 饼 panqueque · 饿 tener hambre · 养 criar (tradicional 養: 羊 oveja + 食 comida).

TRUCO: 饣 a la izquierda → comida.

PRONUNCIACIÓN: shí, segundo tono. Mismo sonido que 十 (diez), otro carácter.`,
en:`WHAT IT DEPICTS: a pot of food with its lid. The 人 on top is the lid (a little roof), below the pot on its stand.

ALONE: 食 shí "food, to eat" (more formal; "to eat" in speech is 吃). 食物 food · 美食 good food.

AS A COMPONENT, on the left it squeezes: simplified 饣, traditional 飠. It marks anything edible.
From your classes: 饭 cooked rice, meal · 餐 meal (早餐, 午餐, 晚餐: here 食 is full-size at the bottom).
Others: 饺 dumpling · 饼 pancake · 饿 hungry · 养 to raise (traditional 養: 羊 sheep + 食 food).

TIP: 饣 on the left → food.

PRONUNCIATION: shí, 2nd tone. Same sound as 十 (ten), different character.`,
zh:`有盖的食器。单用：食物、美食。在左边写 饣（繁体 飠），表示食物：饭、饺、饼、饿；餐 下面是完整的 食。`}},
  {id:"rad-14",s:"宀",py:"mián",es:"techo",en:"roof",say:"宀",
   x:{
es:`Un techo de dos aguas visto de frente. No se usa solo; aparece arriba de otros caracteres.
Lo encontrás en: 安 paz (mujer bajo techo), 字 carácter (niño bajo techo), 客 invitado.`,
en:`A gabled roof seen from the front. Not used alone; it sits on top of other characters.
You'll find it in: 安 peace (woman under a roof), 字 character (child under a roof), 客 guest.`,
zh:`屋顶，放在字的上面：安、字、客。`}},
  {id:"rad-15",s:"艹",py:"cǎo",es:"hierba, planta",en:"grass, plant",say:"草",
   x:{
es:`QUÉ DIBUJA: dos brotes de hierba saliendo del suelo, uno al lado del otro. Es la forma reducida de 艸 (hierba), que tiene dos plantitas completas.

NO SE USA SOLO: siempre va ARRIBA de otro carácter, como un techo de pasto. Se llama «cabeza de hierba».

QUÉ MARCA: todo lo que es planta, flor, hierba o verdura.
De tus clases: 茶 té (la hoja del arbusto) · 苹 de 苹果 manzana · 苗 brote (艹 sobre 田: el brote en el campo; está dentro de 猫) · 苔 musgo (del proverbio).
Otros: 花 flor · 草 hierba · 菜 verdura, plato de comida · 药 remedio (las medicinas eran hierbas).

TRUCO: si ves 艹 arriba, pensá en plantas.

PRONUNCIACIÓN: como carácter suelto sería cǎo (草, hierba).`,
en:`WHAT IT DEPICTS: two sprouts of grass coming up side by side. It's the reduced form of 艸 (grass), which has two full little plants.

NOT USED ALONE: it always sits ON TOP of another character, like a roof of grass. It's called the "grass head".

WHAT IT MARKS: anything that is a plant, flower, herb or vegetable.
From your classes: 茶 tea (the shrub's leaf) · 苹 in 苹果 apple · 苗 sprout (艹 over 田: a sprout in the field; it's inside 猫) · 苔 moss (from the proverb).
Others: 花 flower · 草 grass · 菜 vegetable, dish · 药 medicine (medicines were herbs).

TIP: 艹 on top → think plants.

PRONUNCIATION: as a standalone character it would be cǎo (草, grass).`,
zh:`两棵小草，放在字的上面（草字头），表示植物：茶、苹、苗、苔、花、草、菜、药。`}},
  {id:"rad-16",s:"犭",py:"quǎn",es:"animal (perro)",en:"animal (dog)",say:"犬",
   x:{
es:`QUÉ DIBUJA: es 犬 quǎn (perro) aplastado para ir a la izquierda. En su forma antigua se ve un perro de perfil, parado, con la cola enroscada hacia arriba.

NO SE USA SOLO en esta forma; se llama «perro de costado».

QUÉ MARCA: casi todos los animales de cuatro patas y peludos, aunque no sean perros.
De tus clases: 狗 perro (犭 + 句 sonido) · 猫 gato (犭 + 苗 sonido: miáo).
Otros: 狮 león · 猪 cerdo · 狼 lobo. Y algunos con sentido de «salvaje»: 独 solo (familia2: los perros pelean y viven solos, dice la explicación clásica).

TRUCO: 犭 a la izquierda → un animal (o algo animal, salvaje). El lado derecho casi siempre da el sonido.

PRONUNCIACIÓN: como carácter suelto, 犬 quǎn.`,
en:`WHAT IT DEPICTS: it's 犬 quǎn (dog) squeezed to fit on the left. The ancient form shows a dog in profile, standing, tail curled up.

NOT USED ALONE in this form; it's called the "side dog".

WHAT IT MARKS: nearly all furry four-legged animals, even if they're not dogs.
From your classes: 狗 dog (犭 + 句 sound) · 猫 cat (犭 + 苗 sound: miáo).
Others: 狮 lion · 猪 pig · 狼 wolf. Also some with a "wild" sense: 独 alone (the classic explanation: dogs fight and live alone).

TIP: 犭 on the left → an animal (or something wild). The right side almost always gives the sound.

PRONUNCIATION: as a standalone character, 犬 quǎn.`,
zh:`犬 在左边的写法（反犬旁），侧面尾巴卷起的狗。表示四条腿的动物：狗、猫、狮、猪、狼；独。右边多半表音。`}},
  {id:"rad-17",s:"田",py:"tián",es:"campo de arroz",en:"rice field",cl:"c2",
   x:{
es:`QUÉ DIBUJA: un campo de arroz visto desde arriba. El cuadrado es el límite del terreno y la cruz de adentro son los canales de riego que lo dividen en cuatro parcelas. Es literalmente un plano.

SOLO: 田 tián «campo cultivado». 田地 tierra de cultivo.

COMO COMPONENTE:
男 hombre = 田 (campo) + 力 (fuerza): el que trabaja el campo. El ejemplo que dio Michelle.
苗 brote = 艹 (hierba) + 田 (campo): la plantita en el campo; está dentro de 猫 (gato), por el sonido.
思 pensar = 田 + 心 (en realidad el 田 era una cabeza, un cráneo visto desde arriba).

CONFUNDIBLES: 由 (con un palito que sale arriba: «desde», está en 迪 de tu nombre) · 甲 (palito abajo) · 申 (arriba y abajo).

PRONUNCIACIÓN: tián, segundo tono. t con aire.`,
en:`WHAT IT DEPICTS: a rice field seen from above. The square is the edge of the land and the cross inside is the irrigation channels dividing it into four plots. It's literally a map.

ALONE: 田 tián "cultivated field". 田地 farmland.

AS A COMPONENT:
男 man = 田 (field) + 力 (strength): the one who works the field. Michelle's example.
苗 sprout = 艹 (grass) + 田 (field): the seedling in the field; it's inside 猫 (cat), for the sound.
思 to think = 田 + 心 (here the 田 was actually a head, a skull seen from above).

LOOK-ALIKES: 由 (a stick poking out the top: "from", in 迪 of your name) · 甲 (stick at the bottom) · 申 (top and bottom).

PRONUNCIATION: tián, 2nd tone. Aspirated t.`,
zh:`从上面看的稻田，十字是水渠。单用：田地。部件：男（田 + 力）、苗（艹 + 田）、思。形近字：由（迪）、甲、申。`}},
  {id:"rad-18",s:"力",py:"lì",es:"fuerza",en:"strength",cl:"c2",
   x:{
es:`QUÉ DIBUJA: un arado antiguo (el mango curvo y la reja que entra en la tierra), o según otra lectura, un brazo doblado con el músculo tenso. En los dos casos: fuerza, trabajo físico.

SOLO: 力 lì «fuerza». 努力 esforzarse · 力气 fuerza física.

COMO COMPONENTE:
男 hombre = 田 (campo) + 力 (fuerza). Michelle lo explicó como «campo y hacha».
加 agregar = 力 + 口 (boca): dar fuerza con palabras, sumar. Está en 咖啡 (café), donde solo da el sonido.
动 moverse · 办 hacer, encargarse · 劳 trabajo.

CONFUNDIBLE: 刀 dāo (cuchillo) se parece mucho; 力 tiene el trazo que atraviesa arriba.

PRONUNCIACIÓN: lì, cuarto tono.`,
en:`WHAT IT DEPICTS: an ancient plough (the curved handle and the share cutting into the earth), or in another reading, a bent arm with the muscle tensed. Either way: strength, physical work.

ALONE: 力 lì "strength". 努力 to make an effort · 力气 physical strength.

AS A COMPONENT:
男 man = 田 (field) + 力 (strength). Michelle described it as "field and axe".
加 to add = 力 + 口 (mouth): giving strength with words, adding up. It's in 咖啡 (coffee), where it only gives the sound.
动 to move · 办 to handle · 劳 labour.

LOOK-ALIKE: 刀 dāo (knife) is very similar; 力 has the stroke poking through at the top.

PRONUNCIATION: lì, 4th tone.`,
zh:`犁，或用力的手臂。单用：力、努力、力气。部件：男、加、动、办、劳。形近字：刀。`}},
  {id:"rad-19",s:"大",py:"dà",es:"grande",en:"big",cl:"c1",
   x:{
es:`Una persona de frente con brazos y piernas abiertos, ocupando todo el espacio.
Con un trazo más: 太 demasiado (太太 señora). Con una línea encima: 天 cielo. 大山 es el nombre chino del canadiense que mencionó Michelle.`,
en:`A person seen from the front with arms and legs spread, taking up all the space.
With one more stroke: 太 too much (太太 Mrs.). With a line on top: 天 sky. 大山 is the Chinese name of the Canadian Michelle mentioned.`,
zh:`张开手脚的人。多一点是 太，上面加一横是 天。大山 是 Michelle 老师提到的那位加拿大人的中文名。`}},
  {id:"rad-20",s:"门",t:"門",py:"mén",es:"puerta",en:"door, gate",
   x:{
es:`Una puerta de dos hojas vista de frente; en tradicional 門 se ven las dos hojas completas.
Lo encontrás en: 们 plural (por el sonido), 闆 (tradicional de 板, el jefe detrás de la puerta), 關 (tradicional de 关).`,
en:`A two-leaf door seen from the front; in traditional 門 both leaves are complete.
You'll find it in: 们 plural (for the sound), 闆 (traditional of 板, the boss behind the door), 關 (traditional of 关).`,
zh:`两扇门，繁体 門 两扇都完整：们、闆、關。`}},
  {id:"rad-21",s:"目",py:"mù",es:"ojo",en:"eye",
   x:{
es:`QUÉ DIBUJA: un ojo. Originalmente dibujado acostado, como un ojo de verdad (el contorno y la pupila en el medio). Después se paró en vertical para ocupar menos lugar en las columnas de escritura.

SOLO: 目 mù «ojo» (más formal; al hablar «ojo» es 眼睛). 目的 objetivo («lo que el ojo apunta»).

COMO COMPONENTE: marca la vista y los ojos.
De tus clases: 见 ver (再见 chau): 目 arriba sobre 儿 (dos piernas): el ojo que camina hacia algo, ir a ver. En tradicional 見 se ve el ojo completo. Está también en 视 (ver, de 电视, televisión).
Otros: 看 mirar (una mano 手 sobre el ojo 目, haciendo visera) · 睡 dormir · 眼 ojo.

CONFUNDIBLE: 日 (sol) es más bajo y tiene una sola raya adentro; 目 es más alto y tiene dos.

PRONUNCIACIÓN: mù, cuarto tono.`,
en:`WHAT IT DEPICTS: an eye. Originally drawn lying down, like a real eye (the outline with the pupil in the middle). Later stood upright to take less room in the writing columns.

ALONE: 目 mù "eye" (formal; in speech "eye" is 眼睛). 目的 goal ("what the eye aims at").

AS A COMPONENT: it marks sight and eyes.
From your classes: 见 to see (再见 goodbye): 目 on top of 儿 (two legs): the eye walking toward something, going to see. In traditional 見 the whole eye is visible. It's also in 视 (to see, from 电视, television).
Others: 看 to look (a hand 手 over the eye 目, shading it) · 睡 to sleep · 眼 eye.

LOOK-ALIKE: 日 (sun) is shorter with one stroke inside; 目 is taller with two.

PRONUNCIATION: mù, 4th tone.`,
zh:`眼睛，本来横着画，后来竖起来。单用：目的。部件：见 / 見（目 + 儿）、视、看（手 放在 目 上）、睡、眼。形近字：日。`}},
  {id:"rad-22",s:"止",py:"zhǐ",es:"pie, huella; detenerse",en:"foot; to stop",
   x:{
es:`QUÉ DIBUJA: la huella de un pie: los dedos arriba y el talón abajo. Como huella parada, significa «detenerse, parar» (止 zhǐ).

SOLO: 止 zhǐ «parar, detener». 禁止 prohibido.

COMO COMPONENTE, casi siempre significa «pie, caminar, ir»:
走 caminar: una figura inclinada balanceando los brazos, sobre 止 (el pie).
正 correcto, derecho: una línea de meta 一 sobre 止: el pie que va derecho al objetivo. Dentro de 是 (ser).
此 esto, acá: 止 + 匕, el pie parado en este lugar. Dentro de 些.
先 primero: 止 (un pie) avanzando sobre 儿 (piernas): ir adelante. De 先生.

TRUCO: 止 en un carácter → movimiento, pies, ir a algún lado.

PRONUNCIACIÓN: zhǐ, tercer tono, lengua atrás.`,
en:`WHAT IT DEPICTS: a footprint: toes on top, heel below. As a footprint standing still, it means "to stop" (止 zhǐ).

ALONE: 止 zhǐ "to stop". 禁止 forbidden.

AS A COMPONENT it almost always means "foot, walk, go":
走 to walk: a leaning figure swinging its arms, over 止 (the foot).
正 correct, straight: a finish line 一 over 止: the foot heading straight for the goal. Inside 是 (to be).
此 this, here: 止 + 匕, the foot standing in this spot. Inside 些.
先 first: 止 (a foot) advancing over 儿 (legs): going ahead. From 先生.

TIP: 止 in a character → movement, feet, going somewhere.

PRONUNCIATION: zhǐ, 3rd tone, tongue back.`,
zh:`脚印：上面脚趾，下面脚跟。单用：止、禁止。作部件多表示脚和行走：走、正（是）、此（些）、先。`}},
  {id:"rad-23",s:"走 · 辶",py:"zǒu",es:"caminar",en:"to walk",say:"走",
   x:{
es:`走: una figura inclinada (brazos balanceándose) sobre 止 (un pie). 辶 es la versión «camino» que envuelve otros caracteres por abajo.
Lo encontrás en: 超 sobrepasar, 起 levantarse, 这 este, 迪 (tu nombre).`,
en:`走: a leaning figure (arms swinging) over 止 (a foot). 辶 is the "road" version that wraps under other characters.
You'll find it in: 超 to exceed, 起 to rise, 这 this, 迪 (your name).`,
zh:`走：摆动双臂的人在 止 上。辶 从下面包住别的字：超、起、这、迪。`}},
  {id:"rad-24",s:"巾",py:"jīn",es:"paño, tela",en:"cloth",
   x:{
es:`QUÉ DIBUJA: un paño o trapo colgando de una barra horizontal. El trazo vertical es la tela que cae.

SOLO: 巾 jīn «paño, toalla». 毛巾 toalla · 纸巾 pañuelo de papel.

COMO COMPONENTE: marca telas y cosas hechas de tela.
De tus clases:
市 mercado (de 超市, supermercado): 巾 bajo un trazo. Los puestos del mercado se reconocían por sus toldos y banderas de tela.
围巾 bufanda: el paño 巾 que rodea 围 el cuello.
师 maestro (de 老师): a la derecha lleva 帀, que contiene 巾; su origen es una multitud organizada, un ejército.
Otros: 帽 sombrero · 布 tela · 带 cinturón, llevar.

PRONUNCIACIÓN: jīn, primer tono.`,
en:`WHAT IT DEPICTS: a cloth or rag hanging from a horizontal bar. The vertical stroke is the fabric falling.

ALONE: 巾 jīn "cloth, towel". 毛巾 towel · 纸巾 tissue.

AS A COMPONENT: it marks fabrics and things made of cloth.
From your classes:
市 market (from 超市, supermarket): 巾 under a stroke. Market stalls were recognised by their cloth awnings and banners.
围巾 scarf: the cloth 巾 that goes around 围 the neck.
师 master (from 老师): on the right it has 帀, which contains 巾; its origin is an organised crowd, an army.
Others: 帽 hat · 布 cloth · 带 belt, to carry.

PRONUNCIATION: jīn, 1st tone.`,
zh:`挂在横杆上的布。单用：毛巾、纸巾。部件：市（摊位的布篷）、围巾、师、帽、布、带。`}},
  {id:"rad-25",s:"米",py:"mǐ",es:"arroz (grano)",en:"rice (grain)",
   x:{
es:`QUÉ DIBUJA: granos de arroz desparramados alrededor de un tallo o eje: la cruz del medio y cuatro puntitos (los granos).

SOLO: 米 mǐ «arroz (crudo, en grano)». También «metro» (la unidad de medida, por el sonido). 米饭 arroz cocido.

COMO COMPONENTE: marca granos, cereales y cosas hechas con ellos.
De tus clases: 糖 azúcar (米 + 唐: antiguamente el azúcar se sacaba de granos) · 数 contar (米 + 女 + 攵: contar granos con un palito).
En tradicional 氣 (aire, vapor) lleva 米 debajo de 气: el vapor que sale del arroz cocinándose. El simplificado 气 lo sacó.
Otros: 粉 harina · 粥 sopa de arroz.

DIFERENCIA: 米 es el grano crudo; 饭 es el arroz cocido servido.

PRONUNCIACIÓN: mǐ, tercer tono.`,
en:`WHAT IT DEPICTS: rice grains scattered around a stalk: the cross in the middle and four dots (the grains).

ALONE: 米 mǐ "rice (raw grain)". Also "metre" (the unit, by sound). 米饭 cooked rice.

AS A COMPONENT: it marks grains, cereals and things made from them.
From your classes: 糖 sugar (米 + 唐: sugar used to be extracted from grain) · 数 to count (米 + 女 + 攵: counting grains with a stick).
Traditional 氣 (air, steam) has 米 under 气: the steam rising from cooking rice. Simplified 气 dropped it.
Others: 粉 flour · 粥 rice porridge.

DIFFERENCE: 米 is the raw grain; 饭 is cooked rice served.

PRONUNCIATION: mǐ, 3rd tone.`,
zh:`散开的米粒。单用：米、米饭；也是长度单位"米"。部件：糖、数、氣、粉、粥。米 是生米，饭 是熟饭。`}},
  {id:"rad-26",s:"虫",t:"蟲",py:"chóng",es:"bicho, insecto",en:"insect, bug",
   x:{
es:`Un bicho o un reptil con la cabeza levantada. Como palabra suelta, en tradicional son tres bichos: 蟲. Dentro de otros caracteres queda uno solo, 虫, también en tradicional.
Lo encontrás en: 蛇 serpiente, y en muchos insectos: 蚂蚁 hormiga.`,
en:`A bug or reptile with its head raised. As a word on its own, traditional has three bugs: 蟲. Inside other characters only one remains, 虫, in traditional too.
You'll find it in: 蛇 snake, and many insects: 蚂蚁 ant.`,
zh:`抬头的虫。单独成字时繁体是 蟲，在别的字里只写一个 虫：蛇、蚂蚁。`}},
  {id:"rad-27",s:"车",t:"車",py:"chē",es:"carro",en:"cart, vehicle",
   x:{
es:`QUÉ DIBUJA: un carro visto desde arriba. El trazo vertical es el eje y los horizontales, las dos ruedas y la caja. En tradicional 車 se ven las dos ruedas completas y la caja en el medio.

SOLO: 车 chē «vehículo». 汽车 auto (de tu lista: «carro de vapor») · 火车 tren («carro de fuego») · 自行车 bicicleta («carro que anda solo»).

COMO COMPONENTE: marca vehículos, ruedas y transporte: 轮 rueda · 辆 clasificador de vehículos (一辆车 un auto).

UN CLASIFICADOR NUEVO: los autos no llevan 个 sino 辆 liàng, que tiene 车 adentro: 一辆汽车.

PRONUNCIACIÓN: chē, primer tono, ch con aire y la lengua atrás. Es la palabra que Michelle te hizo practicar (chi, che) en clase.`,
en:`WHAT IT DEPICTS: a cart seen from above. The vertical stroke is the axle and the horizontal ones the two wheels and the box. Traditional 車 shows both wheels complete with the box in the middle.

ALONE: 车 chē "vehicle". 汽车 car (from your list: "steam cart") · 火车 train ("fire cart") · 自行车 bicycle ("self-moving cart").

AS A COMPONENT: it marks vehicles, wheels and transport: 轮 wheel · 辆 measure word for vehicles (一辆车 a car).

A NEW MEASURE WORD: cars don't take 个 but 辆 liàng, which has 车 inside: 一辆汽车.

PRONUNCIATION: chē, 1st tone, ch aspirated with the tongue back. It's the word Michelle had you practise (chi, che) in class.`,
zh:`从上面看的车：车轴和两个轮子，繁体 車 更完整。单用：汽车、火车、自行车。部件：轮、辆（车的量词：一辆汽车）。`}},
  {id:"rad-28",s:"马",t:"馬",py:"mǎ",es:"caballo",en:"horse",
   x:{
es:`Un caballo de perfil: la crin arriba, las patas abajo (las cuatro en tradicional 馬).
Como componente de sonido: 妈 mā, 吗 ma, 骂 mà. Los cuatro solo se diferencian por el tono y el radical.`,
en:`A horse in profile: mane on top, legs below (all four in traditional 馬).
As a sound component: 妈 mā, 吗 ma, 骂 mà. The four differ only in tone and radical.`,
zh:`侧面的马。作表音部件：妈、吗、骂，只有声调和部首不同。`}}
  ]
});
