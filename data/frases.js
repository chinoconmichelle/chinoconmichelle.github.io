/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"frases", glyph:"问",
  name:{"es": "Preguntas y oraciones", "en": "Questions & sentences", "zh": "问句与句子"},
  cl:"c2",
  cards:[
  {id:"fra-01",s:"是",py:"shì",es:"ser",en:"to be",
   x:{
es:`日 arriba (el sol: un círculo con un punto que con el tiempo se cuadró) + 正 abajo (correcto: 一 una línea de meta sobre 止, la huella de un pie que va derecho al objetivo).
«Lo que es tan correcto como el sol». Cuarto tono. No se conjuga: 我是, 你是, 他是.`,
en:`日 on top (the sun: a circle with a dot that became square) + 正 below (correct: 一 a finish line over 止, a footprint heading straight to the goal).
"What is as right as the sun". 4th tone. Never conjugated: 我是, 你是, 他是.`,
zh:`日 + 正（一 是终点线，止 是直奔目标的脚）。不变化：我是、你是、他是。`}},
  {id:"fra-02",s:"叫",py:"jiào",es:"llamarse, llamar",en:"to be called; to call",cl:"c1",
   x:{
es:`口 (boca) + 丩 (dos hilos entrelazados, solo por el sonido). Originalmente gritar, llamar en voz alta.
En chino no hay «me llamo»: se dice «yo llamar», 我叫.`,
en:`口 (mouth) + 丩 (two intertwined threads, only for the sound). Originally to shout, to call out.
Chinese has no "my name is": you say "I call", 我叫.`,
zh:`口 + 丩（两根交缠的线，表音）。本义是大声喊。`}},
  {id:"fra-03",s:"吃",py:"chī",es:"comer",en:"to eat",cl:"c1",
   x:{
es:`口 (boca) + 乞 (sonido; significa mendigar y lleva 人 arriba).
Todo lo que pasa por la boca lleva 口: 喝 beber, 叫 llamar, 吗 la partícula de pregunta.`,
en:`口 (mouth) + 乞 (sound; it means to beg and has 人 on top).
Everything that goes through the mouth has 口: 喝 to drink, 叫 to call, 吗 the question particle.`,
zh:`口 + 乞（表音）。和嘴有关的字多有 口：喝、叫、吗。`}},
  {id:"fra-04",s:"有",py:"yǒu",es:"tener; haber",en:"to have; there is",cl:"c3",
   x:{
es:`Arriba 𠂇 (la mano); abajo 月, que acá no es la luna sino 肉 (carne). Una mano sosteniendo un pedazo de carne: tener.
Con sujeto es tener: 我有一只猫. Sin sujeto es haber: 在这个学校有…`,
en:`On top 𠂇 (the hand); below 月, which here isn't the moon but 肉 (meat). A hand holding a piece of meat: to have.
With a subject it means to have: 我有一只猫. Without a subject it means there is: 在这个学校有…`,
zh:`上面是手，下面的 月 其实是 肉：手里拿着肉，就是"有"。有主语是"拥有"，没有主语是"存在"。`}},
  {id:"fra-05",s:"在",py:"zài",es:"en; estar en",en:"in, at; to be at",cl:"c3",
   x:{
es:`才 (un brote que atraviesa la tierra) + 土 (tierra: una línea de suelo con un montículo).
Algo plantado en su lugar: estar en. 在这个学校 en esta escuela.`,
en:`才 (a sprout breaking through the soil) + 土 (earth: a ground line with a mound).
Something planted in its place: to be at. 在这个学校 at this school.`,
zh:`才（破土的嫩芽）+ 土：种在某处，表示"在"。`}},
  {id:"fra-06",s:"和",py:"hé",es:"y (entre sustantivos)",en:"and (between nouns)",cl:"c3",
   x:{
es:`禾 (una planta de cereal con la espiga caída) + 口 (boca). Originalmente armonía: voces que concuerdan.
Une sustantivos, no oraciones: 一个男老师和两个女老师.`,
en:`禾 (a cereal plant with its ear drooping) + 口 (mouth). Originally harmony: voices in agreement.
It joins nouns, not sentences: 一个男老师和两个女老师.`,
zh:`禾 + 口，本义是和谐。只连接名词，不连接句子。`}},
  {id:"fra-07",s:"谁",t:"誰",py:"shéi",es:"quién",en:"who",
   x:{
es:`讠 (hablar: 言, una boca con líneas de sonido, aplastado) + 隹 (un pájaro de cola corta, solo por el sonido).
En chino la palabra de pregunta va donde iría la respuesta: 你是谁？ «vos sos quién».`,
en:`讠 (speech: 言, a mouth with lines of sound, squeezed) + 隹 (a short-tailed bird, only for the sound).
In Chinese the question word goes where the answer would: 你是谁？ "you are who".`,
zh:`讠 + 隹（短尾鸟，表音）。疑问词放在答案的位置：你是谁？`}},
  {id:"fra-08",s:"什么",t:"什麼",py:"shénme",es:"qué",en:"what",
   x:{
es:`什 (亻 persona + 十 diez) + 么 (pequeño). Es una construcción gramatical: no conviene buscarle lógica a las partes.
En tradicional 麼 lleva 麻 (cáñamo) arriba.`,
en:`什 (亻 person + 十 ten) + 么 (small). A grammatical construction: better not to look for logic in the parts.
In traditional 麼 has 麻 (hemp) on top.`,
zh:`什 + 么，是语法组合，不必分析字义。繁体 麼 上面是 麻。`}},
  {id:"fra-09",s:"名字",py:"míngzi",es:"nombre",en:"name",
   x:{
es:`名 nombre: 夕 arriba (una media luna: el atardecer) + 口 (boca). En la oscuridad hay que decir tu nombre para que te reconozcan.
字 carácter escrito: 宀 (techo) + 子 (niño). Nombrar al hijo bajo el techo de la casa.`,
en:`名 name: 夕 on top (a half moon: dusk) + 口 (mouth). In the dark you have to say your name to be recognised.
字 written character: 宀 (roof) + 子 (child). Naming the child under the family roof.`,
zh:`名：夕（傍晚）+ 口，天黑了要说出名字别人才认得。字：宀 + 子，在家里给孩子取名。`}},
  {id:"fra-10",s:"学校",t:"學校",py:"xuéxiào",es:"escuela",en:"school",cl:"c3",
   x:{
es:`学 estudiar: dos manos de un adulto sobre 冖 (un techo) con 子 (un niño) debajo.
校: 木 (madera) + 交 (cruzar: una persona con las piernas cruzadas). Una empalizada de troncos cruzados, un recinto.
Ojo: xiào (escuela) empieza con x; 叫 jiào (llamarse) con j.`,
en:`学 to study: an adult's two hands over 冖 (a roof) with 子 (a child) beneath.
校: 木 (wood) + 交 (to cross: a person with crossed legs). A stockade of crossed logs, an enclosure.
Careful: xiào (school) starts with x; 叫 jiào (to be called) with j.`,
zh:`学：大人的两只手、屋顶、孩子。校：木 + 交，交叉的木栅栏围起来的地方。注意：校 xiào，叫 jiào。`}},
  {id:"fra-11",s:"今天",py:"jīntiān",es:"hoy",en:"today",cl:"c3",
   x:{
es:`今 ahora: un techo triangular con un trazo debajo, cubrir el momento presente.
天 cielo, día: 大 (una persona de frente) con 一 encima de la cabeza, lo que está sobre la persona.
«El día de ahora».`,
en:`今 now: a triangular roof with a stroke beneath, covering the present moment.
天 sky, day: 大 (a person seen from the front) with 一 above the head, what is above the person.
"The day of now".`,
zh:`今：三角形的顶盖住下面一横，表示现在。天：大 上面一横，人头顶上的天。`}},
  {id:"fra-12",s:"今天早上",py:"jīntiān zǎoshang",es:"esta mañana",en:"this morning",cl:"c3",
   x:{
es:`今天 hoy + 早上 a la mañana.
El tiempo va después del sujeto y antes del verbo: 这只猫今天早上吃…`,
en:`今天 today + 早上 in the morning.
Time goes after the subject and before the verb: 这只猫今天早上吃…`,
zh:`今天 + 早上。时间放在主语后、动词前。`}},
  {id:"fra-13",s:"橘色",py:"júsè",es:"naranja (color)",en:"orange (color)",cl:"c3",
   x:{
es:`橘 mandarina: 木 (árbol) + 矞 (sonido).
色 color: originalmente una persona inclinada sobre otra, el semblante, el color de la cara.
«Color mandarina».`,
en:`橘 tangerine: 木 (tree) + 矞 (sound).
色 colour: originally one person bent over another, the countenance, the colour of the face.
"Tangerine colour".`,
zh:`橘：木 + 矞（表音）。色：本义是脸色。橘子的颜色。`}},
  {id:"fra-20",s:"你叫什么名字？",t:"你叫什麼名字？",py:"nǐ jiào shénme míngzi?",es:"¿cómo te llamás?",en:"what's your name?",
   x:{
es:`你 vos + 叫 llamar + 什么 qué + 名字 nombre.
Literalmente «vos llamar qué nombre».`,
en:`你 you + 叫 to call + 什么 what + 名字 name.
Literally "you call what name".`,
zh:`你 + 叫 + 什么 + 名字。`}},
  {id:"fra-21",s:"他叫什么名字？",t:"他叫什麼名字？",py:"tā jiào shénme míngzi?",es:"¿cómo se llama él?",en:"what's his name?",
   x:{
es:`Misma estructura; solo cambia el sujeto. No hay verbo que conjugar.`,
en:`Same structure; only the subject changes. There's no verb to conjugate.`,
zh:`结构一样，只换主语，动词不变。`}},
  {id:"fra-22",s:"你的猫叫什么名字？",t:"你的貓叫什麼名字？",py:"nǐ de māo jiào shénme míngzi?",es:"¿cómo se llama tu gato?",en:"what's your cat's name?",cl:"c3",
   x:{
es:`你的猫 tu gato + 叫什么名字. Esta fue la pregunta cuando apareció Oliver en clase.`,
en:`你的猫 your cat + 叫什么名字. This was the question when Oliver showed up in class.`,
zh:`你的猫 + 叫什么名字。上课时 Oliver 出现，老师就问了这句。`}},
  {id:"fra-23",s:"你是谁？",t:"你是誰？",py:"nǐ shì shéi?",es:"¿quién sos?",en:"who are you?",
   x:{
es:`你 + 是 ser + 谁 quién. La palabra de pregunta queda al final, donde iría la respuesta.`,
en:`你 + 是 to be + 谁 who. The question word stays at the end, where the answer would be.`,
zh:`你 + 是 + 谁，疑问词在答案的位置。`}},
  {id:"fra-24",s:"他是谁？",t:"他是誰？",py:"tā shì shéi?",es:"¿quién es él?",en:"who is he?",
   x:{
es:`他 + 是 + 谁.`,
en:`他 + 是 + 谁.`,
zh:`他 + 是 + 谁。`}},
  {id:"fra-25",s:"你妹妹的朋友叫什么名字？",t:"你妹妹的朋友叫什麼名字？",py:"nǐ mèimei de péngyǒu jiào shénme míngzi?",es:"¿cómo se llama el amigo de tu hermana?",en:"what's your younger sister's friend's name?",
   x:{
es:`你妹妹的朋友 «tu hermana menor 's amigo» + 叫什么名字.
Toda la parte final queda fija; solo cambia quién.`,
en:`你妹妹的朋友 "your younger sister's friend" + 叫什么名字.
The whole ending stays fixed; only "who" changes.`,
zh:`你妹妹的朋友 + 叫什么名字，后半句不变。`}},
  {id:"fra-26",s:"你吃苹果吗？",t:"你吃蘋果嗎？",py:"nǐ chī píngguǒ ma?",es:"¿comés manzana?",en:"do you eat apples?",cl:"c1",
   x:{
es:`La afirmación 你吃苹果 + 吗 al final. No cambia nada más: ni el orden ni el verbo.`,
en:`The statement 你吃苹果 + 吗 at the end. Nothing else changes: not the order, not the verb.`,
zh:`陈述句 你吃苹果 + 吗，语序和动词都不变。`}},
  {id:"fra-30",s:"我叫瓦迪铭。",t:"我叫瓦迪銘。",py:"wǒ jiào Wǎ Dí Míng",es:"me llamo Vladimir",en:"my name is Vladimir",
   x:{
es:`Tu nombre chino según el apunte de Michelle:
瓦 wǎ: una teja curva de barro.
迪 dí: 辶 (el radical de caminar) + 由; guiar, iluminar.
铭 míng: 钅 (metal, de 金) + 名 (nombre). Grabar el nombre en metal.`,
en:`Your Chinese name, from Michelle's handout:
瓦 wǎ: a curved clay roof tile.
迪 dí: 辶 (the walking radical) + 由; to guide, to enlighten.
铭 míng: 钅 (metal, from 金) + 名 (name). Engraving the name in metal.`,
zh:`Michelle 老师给的中文名：瓦（弯的屋瓦）、迪（辶 + 由，启迪）、铭（钅 + 名，把名字刻在金属上）。`}},
  {id:"fra-31",s:"我是瓦迪铭。",t:"我是瓦迪銘。",py:"wǒ shì Wǎ Dí Míng",es:"soy Vladimir",en:"I am Vladimir",
   x:{
es:`我 + 是 + nombre. Se usan tanto 我是 como 我叫.`,
en:`我 + 是 + name. Both 我是 and 我叫 are used.`,
zh:`我 + 是 + 名字。我是、我叫 都可以。`}},
  {id:"fra-32",s:"他是我爸爸。",py:"tā shì wǒ bàba",es:"él es mi papá",en:"he is my dad",
   x:{
es:`他 + 是 + 我爸爸. Sin 的, porque es un familiar en singular.`,
en:`他 + 是 + 我爸爸. No 的, because it's a family member in the singular.`,
zh:`他 + 是 + 我爸爸。单数亲属不用 的。`}},
  {id:"fra-33",s:"你吃苹果。",t:"你吃蘋果。",py:"nǐ chī píngguǒ",es:"comés manzana",en:"you eat apples",cl:"c1",
   x:{
es:`你 + 吃 + 苹果. Presente, pasado o futuro se entienden por el contexto: el verbo no cambia.`,
en:`你 + 吃 + 苹果. Present, past or future come from context: the verb doesn't change.`,
zh:`你 + 吃 + 苹果。时间靠上下文，动词不变。`}},
  {id:"fra-34",s:"我的狗",py:"wǒ de gǒu",es:"mi perro",en:"my dog",
   x:{
es:`我的 mi + 狗.`,
en:`我的 my + 狗.`,
zh:`我的 + 狗。`}},
  {id:"fra-35",s:"我爸爸的狗",py:"wǒ bàba de gǒu",es:"el perro de mi papá",en:"my dad's dog",
   x:{
es:`我爸爸 + 的 + 狗. Mismo orden que en inglés (my dad's dog), al revés que en español.`,
en:`我爸爸 + 的 + 狗. Same order as English (my dad's dog).`,
zh:`我爸爸 + 的 + 狗，和英文语序一样。`}},
  {id:"fra-36",s:"我爸爸的妹妹的朋友",py:"wǒ bàba de mèimei de péngyǒu",es:"el amigo de la hermana de mi papá",en:"my dad's younger sister's friend",
   x:{
es:`Los 的 se encadenan como los 's del inglés: my dad's sister's friend.`,
en:`The 的 chain like English 's: my dad's sister's friend.`,
zh:`的 可以一个接一个，像英文的 's。`}},
  {id:"fra-40",s:"我有一个男老师和两个女老师。",t:"我有一個男老師和兩個女老師。",py:"wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī",es:"tengo un profesor y dos profesoras",en:"I have one male teacher and two female teachers",cl:"c3",
   x:{
es:`我有 tengo + 一个男老师 + 和 y + 两个女老师.
两 (no 二) porque va con clasificador. 和 une los dos sustantivos.`,
en:`我有 I have + 一个男老师 + 和 and + 两个女老师.
两 (not 二) because it's before a measure word. 和 joins the two nouns.`,
zh:`我有 + 一个男老师 + 和 + 两个女老师。量词前用 两；和 连接两个名词。`}},
  {id:"fra-41",s:"他是一位老师。",t:"他是一位老師。",py:"tā shì yí wèi lǎoshī",es:"él es un profesor",en:"he is a teacher",cl:"c3",
   x:{
es:`位 en vez de 个, por respeto al profesor.`,
en:`位 instead of 个, out of respect for the teacher.`,
zh:`用 位 不用 个，表示尊敬。`}},
  {id:"fra-42",s:"在这个学校有两百个女学生和二十个男学生。",t:"在這個學校有兩百個女學生和二十個男學生。",py:"zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng",es:"en esta escuela hay 200 alumnas y 20 alumnos",en:"this school has 200 female and 20 male students",cl:"c3",
   x:{
es:`在这个学校 en esta escuela + 有 hay + 两百个女学生 + 和 + 二十个男学生.
有 sin sujeto = haber. Todos los números llevan 个 porque son personas.`,
en:`在这个学校 at this school + 有 there are + 两百个女学生 + 和 + 二十个男学生.
有 without a subject = there is/are. Every number takes 个 because they're people.`,
zh:`在这个学校 + 有 + 两百个女学生 + 和 + 二十个男学生。有 没有主语表示存在；人用 个。`}},
  {id:"fra-43",s:"我有一只猫。",t:"我有一隻貓。",py:"wǒ yǒu yì zhī māo",es:"tengo un gato",en:"I have a cat",cl:"c3",
   x:{
es:`我 + 有 + 一只猫. 一 se lee yì porque 只 es primer tono.`,
en:`我 + 有 + 一只猫. 一 is read yì because 只 is a 1st tone.`,
zh:`我 + 有 + 一只猫。一 读 yì。`}},
  {id:"fra-44",s:"我的猫叫 Oliver。",t:"我的貓叫 Oliver。",py:"wǒ de māo jiào Oliver",es:"mi gato se llama Oliver",en:"my cat is called Oliver",cl:"c3",say:"我的猫叫",
   x:{
es:`我的猫 + 叫 + nombre.`,
en:`我的猫 + 叫 + name.`,
zh:`我的猫 + 叫 + 名字。`}},
  {id:"fra-45",s:"它是橘色的。",py:"tā shì júsè de",es:"es naranja",en:"it's orange",cl:"c3",
   x:{
es:`它 (ello, para animales) + 是 + 橘色 + 的.
El 的 final convierte el color en adjetivo: «es de color naranja».
El sujeto no se puede omitir: en chino no existe el sujeto tácito.`,
en:`它 (it, for animals) + 是 + 橘色 + 的.
The final 的 turns the colour into an adjective: "is orange-coloured".
The subject can't be dropped: Chinese has no implied subject.`,
zh:`它 + 是 + 橘色 + 的。句末的 的 把颜色变成形容词。主语不能省略。`}},
  {id:"fra-46",s:"这只猫今天早上吃一条鱼。",t:"這隻貓今天早上吃一條魚。",py:"zhè zhī māo jīntiān zǎoshang chī yì tiáo yú",es:"el gato comió un pescado esta mañana",en:"the cat ate a fish this morning",cl:"c3",
   x:{
es:`这只猫 el gato + 今天早上 esta mañana + 吃 + 一条鱼.
El tiempo va después del sujeto. Así está en el apunte de Michelle; para una acción terminada muchas veces se agrega 了 (吃了). Buena pregunta para cuando vean estructura.`,
en:`这只猫 the cat + 今天早上 this morning + 吃 + 一条鱼.
Time goes after the subject. This is how it appears in Michelle's handout; for a finished action Chinese often adds 了 (吃了). A good question for when you cover sentence structure.`,
zh:`这只猫 + 今天早上 + 吃 + 一条鱼。时间放在主语后。Michelle 老师的讲义这样写；表示完成的动作常加 了（吃了）。`}},
  {id:"fra-50",s:"滚石不生苔",t:"滾石不生苔",py:"gǔn shí bù shēng tái",es:"piedra que rueda no cría musgo",en:"a rolling stone gathers no moss",cl:"c1",
   x:{
es:`滚 rodar (氵 agua + sonido) + 石 piedra (厂 un acantilado con 口 una roca debajo) + 不 no + 生 crecer (un brote saliendo de la tierra) + 苔 musgo (艹 planta + sonido).
Acá 不 queda en bù porque 生 es primer tono.
Michelle: en chino se usan proverbios todo el tiempo, en noticias y en la calle.`,
en:`滚 to roll (氵 water + sound) + 石 stone (厂 a cliff with 口 a rock below) + 不 not + 生 to grow (a sprout from the soil) + 苔 moss (艹 plant + sound).
Here 不 stays bù because 生 is a 1st tone.
Michelle: Chinese uses proverbs all the time, in the news and on the street.`,
zh:`滚（氵 + 表音）+ 石（厂 山崖下一块 口 石头）+ 不 + 生（破土的芽）+ 苔（艹 + 表音）。生 是第一声，不 读 bù。`}}
  ]
});
