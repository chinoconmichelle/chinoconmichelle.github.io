/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, x character explanation (Spanish), say optional text for the voice. */
window.TOPICS.push({
  id:"frases", glyph:"问",
  name:{es:"Preguntas y oraciones",en:"Questions & sentences",zh:"问句与句子"},
  cards:[
  /* ---- Key words used in the sentences ---- */
  {id:"fra-01",s:"是",py:"shì",es:"ser",en:"to be",
   x:`日 arriba (el sol: un círculo con un punto que con el tiempo se cuadró) + 正 abajo (correcto: 一 una línea de meta sobre 止, la huella de un pie que va derecho al objetivo).
«Lo que es tan correcto como el sol». Cuarto tono. No se conjuga: 我是, 你是, 他是.`},
  {id:"fra-02",s:"叫",py:"jiào",es:"llamarse, llamar",en:"to be called; to call",
   x:`口 (boca) + 丩 (dos hilos entrelazados, solo por el sonido). Originalmente gritar, llamar en voz alta.
En chino no hay «me llamo»: se dice «yo llamar», 我叫.`},
  {id:"fra-03",s:"吃",py:"chī",es:"comer",en:"to eat",
   x:`口 (boca) + 乞 (sonido; significa mendigar y lleva 人 arriba).
Todo lo que pasa por la boca lleva 口: 喝 beber, 叫 llamar, 吗 la partícula de pregunta.`},
  {id:"fra-04",s:"有",py:"yǒu",es:"tener; haber",en:"to have; there is",
   x:`Arriba 𠂇 (la mano); abajo 月, que acá no es la luna sino 肉 (carne). Una mano sosteniendo un pedazo de carne: tener.
Con sujeto es tener: 我有一只猫. Sin sujeto es haber: 在这个学校有…`},
  {id:"fra-05",s:"在",py:"zài",es:"en; estar en",en:"in, at; to be at",
   x:`才 (un brote que atraviesa la tierra) + 土 (tierra: una línea de suelo con un montículo).
Algo plantado en su lugar: estar en. 在这个学校 en esta escuela.`},
  {id:"fra-06",s:"和",py:"hé",es:"y (entre sustantivos)",en:"and (between nouns)",
   x:`禾 (una planta de cereal con la espiga caída) + 口 (boca). Originalmente armonía: voces que concuerdan.
Une sustantivos, no oraciones: 一个男老师和两个女老师.`},
  {id:"fra-07",s:"谁",t:"誰",py:"shéi",es:"quién",en:"who",
   x:`讠 (hablar: 言, una boca con líneas de sonido, aplastado) + 隹 (un pájaro de cola corta, solo por el sonido).
En chino la palabra de pregunta va donde iría la respuesta: 你是谁？ «vos sos quién».`},
  {id:"fra-08",s:"什么",t:"什麼",py:"shénme",es:"qué",en:"what",
   x:`什 (亻 persona + 十 diez) + 么 (pequeño). Es una construcción gramatical: no conviene buscarle lógica a las partes.
En tradicional 麼 lleva 麻 (cáñamo) arriba.`},
  {id:"fra-09",s:"名字",py:"míngzi",es:"nombre",en:"name",
   x:`名 nombre: 夕 arriba (una media luna: el atardecer) + 口 (boca). En la oscuridad hay que decir tu nombre para que te reconozcan.
字 carácter escrito: 宀 (techo) + 子 (niño). Nombrar al hijo bajo el techo de la casa.`},
  {id:"fra-10",s:"学校",t:"學校",py:"xuéxiào",es:"escuela",en:"school",
   x:`学 estudiar: dos manos de un adulto sobre 冖 (un techo) con 子 (un niño) debajo.
校: 木 (madera) + 交 (cruzar: una persona con las piernas cruzadas). Una empalizada de troncos cruzados, un recinto.
Ojo: xiào (escuela) empieza con x; 叫 jiào (llamarse) con j.`},
  {id:"fra-11",s:"今天",py:"jīntiān",es:"hoy",en:"today",
   x:`今 ahora: un techo triangular con un trazo debajo, cubrir el momento presente.
天 cielo, día: 大 (una persona de frente) con 一 encima de la cabeza, lo que está sobre la persona.
«El día de ahora».`},
  {id:"fra-12",s:"今天早上",py:"jīntiān zǎoshang",es:"esta mañana",en:"this morning",
   x:`今天 hoy + 早上 a la mañana.
El tiempo va después del sujeto y antes del verbo: 这只猫今天早上吃…`},
  {id:"fra-13",s:"橘色",py:"júsè",es:"naranja (color)",en:"orange (color)",
   x:`橘 mandarina: 木 (árbol) + 矞 (sonido).
色 color: originalmente una persona inclinada sobre otra, el semblante, el color de la cara.
«Color mandarina».`},
  /* ---- Questions ---- */
  {id:"fra-20",s:"你叫什么名字？",t:"你叫什麼名字？",py:"nǐ jiào shénme míngzi?",es:"¿cómo te llamás?",en:"what's your name?",
   x:`你 vos + 叫 llamar + 什么 qué + 名字 nombre.
Literalmente «vos llamar qué nombre».`},
  {id:"fra-21",s:"他叫什么名字？",t:"他叫什麼名字？",py:"tā jiào shénme míngzi?",es:"¿cómo se llama él?",en:"what's his name?",
   x:`Misma estructura; solo cambia el sujeto. No hay verbo que conjugar.`},
  {id:"fra-22",s:"你的猫叫什么名字？",t:"你的貓叫什麼名字？",py:"nǐ de māo jiào shénme míngzi?",es:"¿cómo se llama tu gato?",en:"what's your cat's name?",
   x:`你的猫 tu gato + 叫什么名字. Esta fue la pregunta cuando apareció Oliver en clase.`},
  {id:"fra-23",s:"你是谁？",t:"你是誰？",py:"nǐ shì shéi?",es:"¿quién sos?",en:"who are you?",
   x:`你 + 是 ser + 谁 quién. La palabra de pregunta queda al final, donde iría la respuesta.`},
  {id:"fra-24",s:"他是谁？",t:"他是誰？",py:"tā shì shéi?",es:"¿quién es él?",en:"who is he?",
   x:`他 + 是 + 谁.`},
  {id:"fra-25",s:"你妹妹的朋友叫什么名字？",t:"你妹妹的朋友叫什麼名字？",py:"nǐ mèimei de péngyǒu jiào shénme míngzi?",es:"¿cómo se llama el amigo de tu hermana?",en:"what's your younger sister's friend's name?",
   x:`你妹妹的朋友 «tu hermana menor 's amigo» + 叫什么名字.
Toda la parte final queda fija; solo cambia quién.`},
  {id:"fra-26",s:"你吃苹果吗？",t:"你吃蘋果嗎？",py:"nǐ chī píngguǒ ma?",es:"¿comés manzana?",en:"do you eat apples?",
   x:`La afirmación 你吃苹果 + 吗 al final. No cambia nada más: ni el orden ni el verbo.`},
  /* ---- Answers and statements ---- */
  {id:"fra-30",s:"我叫瓦迪铭。",t:"我叫瓦迪銘。",py:"wǒ jiào Wǎ Dí Míng",es:"me llamo Vladimir",en:"my name is Vladimir",
   x:`Tu nombre chino según el apunte de Michelle:
瓦 wǎ: una teja curva de barro.
迪 dí: 辶 (el radical de caminar) + 由; guiar, iluminar.
铭 míng: 钅 (metal, de 金) + 名 (nombre). Grabar el nombre en metal.`},
  {id:"fra-31",s:"我是瓦迪铭。",t:"我是瓦迪銘。",py:"wǒ shì Wǎ Dí Míng",es:"soy Vladimir",en:"I am Vladimir",
   x:`我 + 是 + nombre. Se usan tanto 我是 como 我叫.`},
  {id:"fra-32",s:"他是我爸爸。",py:"tā shì wǒ bàba",es:"él es mi papá",en:"he is my dad",
   x:`他 + 是 + 我爸爸. Sin 的, porque es un familiar en singular.`},
  {id:"fra-33",s:"你吃苹果。",t:"你吃蘋果。",py:"nǐ chī píngguǒ",es:"comés manzana",en:"you eat apples",
   x:`你 + 吃 + 苹果. Presente, pasado o futuro se entienden por el contexto: el verbo no cambia.`},
  {id:"fra-34",s:"我的狗",py:"wǒ de gǒu",es:"mi perro",en:"my dog",
   x:`我的 mi + 狗.`},
  {id:"fra-35",s:"我爸爸的狗",py:"wǒ bàba de gǒu",es:"el perro de mi papá",en:"my dad's dog",
   x:`我爸爸 + 的 + 狗. Mismo orden que en inglés (my dad's dog), al revés que en español.`},
  {id:"fra-36",s:"我爸爸的妹妹的朋友",py:"wǒ bàba de mèimei de péngyǒu",es:"el amigo de la hermana de mi papá",en:"my dad's younger sister's friend",
   x:`Los 的 se encadenan como los 's del inglés: my dad's sister's friend.`},
  {id:"fra-40",s:"我有一个男老师和两个女老师。",t:"我有一個男老師和兩個女老師。",py:"wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī",es:"tengo un profesor y dos profesoras",en:"I have one male teacher and two female teachers",
   x:`我有 tengo + 一个男老师 + 和 y + 两个女老师.
两 (no 二) porque va con clasificador. 和 une los dos sustantivos.`},
  {id:"fra-41",s:"他是一位老师。",t:"他是一位老師。",py:"tā shì yí wèi lǎoshī",es:"él es un profesor",en:"he is a teacher",
   x:`位 en vez de 个, por respeto al profesor.`},
  {id:"fra-42",s:"在这个学校有两百个女学生和二十个男学生。",t:"在這個學校有兩百個女學生和二十個男學生。",py:"zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng",es:"en esta escuela hay 200 alumnas y 20 alumnos",en:"this school has 200 female and 20 male students",
   x:`在这个学校 en esta escuela + 有 hay + 两百个女学生 + 和 + 二十个男学生.
有 sin sujeto = haber. Todos los números llevan 个 porque son personas.`},
  {id:"fra-43",s:"我有一只猫。",t:"我有一隻貓。",py:"wǒ yǒu yì zhī māo",es:"tengo un gato",en:"I have a cat",
   x:`我 + 有 + 一只猫. 一 se lee yì porque 只 es primer tono.`},
  {id:"fra-44",s:"我的猫叫 Oliver。",t:"我的貓叫 Oliver。",py:"wǒ de māo jiào Oliver",es:"mi gato se llama Oliver",en:"my cat is called Oliver",say:"我的猫叫",
   x:`我的猫 + 叫 + nombre.`},
  {id:"fra-45",s:"它是橘色的。",py:"tā shì júsè de",es:"es naranja",en:"it's orange",
   x:`它 (ello, para animales) + 是 + 橘色 + 的.
El 的 final convierte el color en adjetivo: «es de color naranja».
El sujeto no se puede omitir: en chino no existe el sujeto tácito.`},
  {id:"fra-46",s:"这只猫今天早上吃一条鱼。",t:"這隻貓今天早上吃一條魚。",py:"zhè zhī māo jīntiān zǎoshang chī yì tiáo yú",es:"el gato comió un pescado esta mañana",en:"the cat ate a fish this morning",
   x:`这只猫 el gato + 今天早上 esta mañana + 吃 + 一条鱼.
El tiempo va después del sujeto. Así está en el apunte de Michelle; para una acción terminada muchas veces se agrega 了 (吃了). Buena pregunta para cuando vean estructura.`},
  {id:"fra-50",s:"滚石不生苔",t:"滾石不生苔",py:"gǔn shí bù shēng tái",es:"piedra que rueda no cría musgo",en:"a rolling stone gathers no moss",
   x:`滚 rodar (氵 agua + sonido) + 石 piedra (厂 un acantilado con 口 una roca debajo) + 不 no + 生 crecer (un brote saliendo de la tierra) + 苔 musgo (艹 planta + sonido).
Acá 不 queda en bù porque 生 es primer tono.
Michelle: en chino se usan proverbios todo el tiempo, en noticias y en la calle.`}
  ]
});
