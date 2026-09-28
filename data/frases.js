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
es:`QUÉ ES: el verbo «ser» cuando une dos cosas: 我是瓦迪铭 soy Vladimir · 他是我爸爸 él es mi papá · 他是老师 él es profesor.

LO MÁS IMPORTANTE: en chino los verbos NO se conjugan. 是 es igual para todas las personas y todos los tiempos: 我是, 你是, 他是, 我们是. Michelle: «no tenés conjugación verbal», por eso el sujeto siempre tiene que estar (no se puede decir solo «es profesor» como en español).

OJO, NO ES «ESTAR»: para «estoy bien» no se usa 是 sino 很: 我很好. Y con colores se agrega 的: 它是橘色的.

EL CARÁCTER:
日 arriba: el sol, un círculo con un punto en el centro que con el tiempo se cuadró.
正 abajo: «correcto, derecho» = 一 (una línea de meta) sobre 止 (la huella de un pie). El pie que va derecho a la meta.
«Lo que es tan derecho y cierto como el sol»: de ahí «ser, sí, correcto». También significa «sí»: 是的 = sí, así es.

PRONUNCIACIÓN: shì, cuarto tono, con la lengua curvada hacia atrás. No confundir con 四 sì (cuatro, lengua plana) ni con 十 shí (diez, segundo tono).`,
en:`WHAT IT IS: the verb "to be" when it links two things: 我是瓦迪铭 I'm Vladimir · 他是我爸爸 he's my dad · 他是老师 he's a teacher.

THE KEY POINT: Chinese verbs are NOT conjugated. 是 is the same for every person and every tense: 我是, 你是, 他是, 我们是. Michelle: "there's no verb conjugation", which is why the subject must always be there.

CAREFUL: it isn't used for "I'm fine". That's 很: 我很好. And with colours you add 的: 它是橘色的.

THE CHARACTER:
日 on top: the sun, a circle with a dot in the middle that became square over time.
正 below: "correct, straight" = 一 (a finish line) over 止 (a footprint). The foot going straight to the goal.
"What is as straight and true as the sun": hence "to be, yes, correct". It also means "yes": 是的 = yes, that's right.

PRONUNCIATION: shì, 4th tone, tongue curled back. Don't confuse with 四 sì (four, flat tongue) or 十 shí (ten, 2nd tone).`,
zh:`是什么：连接两个成分的"是"：我是瓦迪铭、他是我爸爸。
重点：中文动词没有变位，我是、你是、他是都一样，所以主语不能省。
注意："我很好"不用 是；颜色要加 的：它是橘色的。
字形：日（太阳）+ 正（一 终点线 + 止 脚印，直奔目标）。像太阳一样正确，所以有"是、对"的意思。
发音：shì，第四声，卷舌；别和 四 sì、十 shí 混淆。`}},
  {id:"fra-02",s:"叫",py:"jiào",es:"llamarse, llamar",en:"to be called; to call",cl:"c1",
   x:{
es:`QUÉ ES: el verbo para decir cómo se llama alguien. 我叫瓦迪铭 me llamo Vladimir · 你叫什么名字？ ¿cómo te llamás?

CÓMO FUNCIONA: en español decimos «me llamo» (reflexivo). En chino no hay «me»: se dice «yo llamar + nombre». Michelle: «wo jiao es yo llamar». Y como no hay conjugación, 叫 sirve para todos: 我叫, 你叫, 他叫, 我的猫叫 Oliver.

TAMBIÉN SIGNIFICA «LLAMAR A ALGUIEN / GRITAR»: 妈妈叫我 mamá me llama.

EL CARÁCTER:
口 (una boca abierta, dibujada como un rectángulo): avisa que es algo que se hace con la boca.
丩 (dos hilos enroscados): está solo por el sonido.
Una boca que llama en voz alta: el sentido original es gritar, llamar. De ahí «llamarse» = cómo te llaman.

PRONUNCIACIÓN: jiào, cuarto tono. La j es suave, con la lengua plana adelante (como la «ch» de «chico» pero más suave). No confundir con 校 xiào (escuela), que empieza con x.`,
en:`WHAT IT IS: the verb for saying what someone is called. 我叫瓦迪铭 my name is Vladimir · 你叫什么名字？ what's your name?

HOW IT WORKS: English says "my name is" or "I'm called". Chinese says "I call + name". Michelle: "wo jiao is 'I call'". With no conjugation, 叫 works for everyone: 我叫, 你叫, 他叫, 我的猫叫 Oliver.

IT ALSO MEANS "TO CALL SOMEONE / TO SHOUT": 妈妈叫我 mom is calling me.

THE CHARACTER:
口 (an open mouth, drawn as a rectangle): tells you it's done with the mouth.
丩 (two twisted threads): only for the sound.
A mouth calling out loud: the original sense is to shout, to call. Hence "to be called" = what people call you.

PRONUNCIATION: jiào, 4th tone. j is soft, tongue flat and forward (like a soft "j" in "jeep"). Don't confuse with 校 xiào (school), which starts with x.`,
zh:`是什么：说名字用的动词：我叫瓦迪铭、你叫什么名字？没有变位：我叫、你叫、他叫、我的猫叫 Oliver。也有"喊、叫人"的意思：妈妈叫我。
字形：口（和嘴有关）+ 丩（表音）。本义是大声喊。
发音：jiào，第四声；别和 校 xiào 混淆。`}},
  {id:"fra-03",s:"吃",py:"chī",es:"comer",en:"to eat",cl:"c1",
   x:{
es:`QUÉ ES: «comer». Es el verbo de la primera oración que armó Michelle: 你吃苹果 comés manzana · 你吃苹果吗？ ¿comés manzana?

SIN CONJUGACIÓN: 吃 sirve para como, comés, comió, comerá. El tiempo lo da el contexto o palabras como 今天早上 (esta mañana): 这只猫今天早上吃一条鱼.

EL CARÁCTER:
口 (boca) a la izquierda: todo lo que pasa por la boca lleva 口. 喝 beber, 叫 llamar, 吗 la partícula de pregunta.
乞 a la derecha, solo por el sonido. 乞 solo significa «mendigar» (人 arriba, una persona pidiendo), pero acá no importa el significado.

PRONUNCIACIÓN: chī, primer tono, plano y largo (la bocina). ch con la lengua curvada atrás y con aire. Parecido pero distinto: 次 cì (vez), con la lengua plana.`,
en:`WHAT IT IS: "to eat". It's the verb in the first sentence Michelle built: 你吃苹果 you eat apples · 你吃苹果吗？ do you eat apples?

NO CONJUGATION: 吃 covers eat, eats, ate, will eat. Time comes from context or words like 今天早上 (this morning): 这只猫今天早上吃一条鱼.

THE CHARACTER:
口 (mouth) on the left: everything that goes through the mouth has 口. 喝 to drink, 叫 to call, 吗 the question particle.
乞 on the right, only for the sound. On its own 乞 means "to beg" (人 on top, a person asking), but the meaning doesn't matter here.

PRONUNCIATION: chī, 1st tone, flat and long (the car horn). ch with the tongue curled back and a puff of air. Similar but different: 次 cì (time, occurrence), flat tongue.`,
zh:`是什么："吃"，老师造的第一个句子：你吃苹果、你吃苹果吗？没有时态变化，时间靠上下文（今天早上）。
字形：口（和嘴有关：喝、叫、吗）+ 乞（表音）。
发音：chī，第一声，卷舌送气；别和 次 cì 混淆。`}},
  {id:"fra-04",s:"有",py:"yǒu",es:"tener; haber",en:"to have; there is / are",cl:"c3",
   x:{
es:`QUÉ ES: un verbo con dos usos, que Michelle explicó así: «cuando tiene sujeto es tener; cuando no tiene sujeto es haber».
CON SUJETO → tener: 我有一只猫 tengo un gato · Michelle有… Michelle tiene…
SIN SUJETO → hay: 在这个学校有两百个女学生 en esta escuela HAY 200 alumnas.

CÓMO SE USA CON NÚMEROS: después de 有 viene número + clasificador + sustantivo: 我有一个男老师和两个女老师.

LA NEGACIÓN ES ESPECIAL: no se niega con 不 sino con 没: 我没有猫 no tengo gato. (没 es el mismo de 没关系.)

EL CARÁCTER:
Arriba 𠂇: la mano (una mano derecha estilizada).
Abajo 月: acá NO es la luna, es 肉 (carne) escrito igual. Pasa mucho: 月 a la izquierda o abajo suele ser carne.
Una mano sosteniendo un pedazo de carne: tener algo, poseer.

PRONUNCIACIÓN: yǒu, tercer tono (baja y sube). Suena como «iou».`,
en:`WHAT IT IS: a verb with two uses, as Michelle explained: "with a subject it means to have; without a subject it means there is".
WITH A SUBJECT → to have: 我有一只猫 I have a cat · Michelle有… Michelle has…
WITHOUT A SUBJECT → there is/are: 在这个学校有两百个女学生 at this school THERE ARE 200 female students.

WITH NUMBERS: after 有 comes number + measure word + noun: 我有一个男老师和两个女老师.

ITS NEGATIVE IS SPECIAL: it's not negated with 不 but with 没: 我没有猫 I don't have a cat. (没 is the same as in 没关系.)

THE CHARACTER:
On top 𠂇: the hand (a stylised right hand).
Below 月: here it is NOT the moon, it's 肉 (meat) written the same way. This happens a lot: 月 on the left or bottom is often meat.
A hand holding a piece of meat: to have something, to own.

PRONUNCIATION: yǒu, 3rd tone (dips and rises). Sounds like "yo".`,
zh:`是什么：有主语时是"拥有"（我有一只猫），没有主语时是"存在"（在这个学校有两百个女学生）。后面接 数字 + 量词 + 名词。
否定用 没，不用 不：我没有猫。
字形：上面是手，下面的 月 其实是 肉：手里拿着肉。
发音：yǒu，第三声。`}},
  {id:"fra-05",s:"在",py:"zài",es:"en; estar en",en:"in, at; to be at",cl:"c3",
   x:{
es:`QUÉ ES: la palabra para decir DÓNDE: «en» o «estar en».
En clase: 在这个学校有… «EN esta escuela hay…». Michelle: «en es 在».
También es verbo: 我在家 estoy en casa · 他在学校 él está en la escuela.

POSICIÓN: el lugar con 在 va ANTES del verbo o al principio de la oración, nunca al final como en español.
En esta escuela hay 200 alumnas → 在这个学校有两百个女学生.

EL CARÁCTER:
才 (un brote que atraviesa el suelo: la línea horizontal es la tierra) + 土 (tierra: una línea de suelo con un montículo encima).
Algo plantado y bien firme en su lugar: «estar en un sitio, existir ahí».

PRONUNCIACIÓN: zài, cuarto tono. z plana, sin aire. Es el mismo sonido que 再 de 再见, pero otro carácter: 再 = otra vez, 在 = en.`,
en:`WHAT IT IS: the word for saying WHERE: "in, at" or "to be at".
In class: 在这个学校有… "AT this school there are…". Michelle: "'in' is 在".
It's also a verb: 我在家 I'm at home · 他在学校 he's at school.

POSITION: the place with 在 goes BEFORE the verb or at the start of the sentence, never at the end as in English.
There are 200 female students at this school → 在这个学校有两百个女学生.

THE CHARACTER:
才 (a sprout breaking through the soil: the horizontal line is the ground) + 土 (earth: a ground line with a mound on top).
Something planted firmly in its place: "to be somewhere, to exist there".

PRONUNCIATION: zài, 4th tone. Flat z, no puff of air. Same sound as 再 in 再见, but a different character: 再 = again, 在 = at.`,
zh:`是什么：表示地点："在"。在这个学校有……；我在家。地点放在动词前面或句首。
字形：才（破土的嫩芽）+ 土，牢牢种在某处。
发音：zài，第四声，和 再见 的 再 同音不同字。`}},
  {id:"fra-06",s:"和",py:"hé",es:"y (entre sustantivos)",en:"and (between nouns)",cl:"c3",
   x:{
es:`QUÉ ES: «y», para unir dos cosas o personas.
En clase: 一个男老师和两个女老师 un profesor Y dos profesoras · 两百个女学生和二十个男学生 200 alumnas Y 20 alumnos.

LA LIMITACIÓN: 和 une SUSTANTIVOS (cosas, personas), no oraciones enteras. En español decís «tengo un gato Y se llama Oliver»; en chino eso se corta en dos oraciones: 我有一只猫。我的猫叫 Oliver。
Michelle lo mencionó: las oraciones chinas son más cortas, se cortan en vez de encadenarse.

EL CARÁCTER:
禾 (una planta de cereal con la espiga caída hacia un lado) + 口 (boca).
Originalmente «armonía»: voces que suenan juntas, en acuerdo. De «estar en armonía con» salió «junto con», y de ahí «y».
禾 también está en 秋 (otoño, la cosecha) y en 种 (semilla).

PRONUNCIACIÓN: hé, segundo tono (sube). La h china suena como una j española suave.`,
en:`WHAT IT IS: "and", for joining two things or people.
In class: 一个男老师和两个女老师 one male teacher AND two female teachers · 两百个女学生和二十个男学生 200 female AND 20 male students.

THE LIMIT: 和 joins NOUNS (things, people), not whole sentences. In English you say "I have a cat AND it's called Oliver"; in Chinese that splits into two sentences: 我有一只猫。我的猫叫 Oliver。
Michelle mentioned it: Chinese sentences are shorter; they get cut rather than chained.

THE CHARACTER:
禾 (a cereal plant with its ear drooping to one side) + 口 (mouth).
Originally "harmony": voices sounding together, in agreement. From "in harmony with" came "together with", and from that "and".
禾 is also in 秋 (autumn, the harvest) and 种 (seed).

PRONUNCIATION: hé, 2nd tone (rising). The Chinese h sounds like a soft throaty h, as in the Spanish j.`,
zh:`是什么："和"，连接两个名词：一个男老师和两个女老师。不能连接两个句子，要分成两句：我有一只猫。我的猫叫 Oliver。
字形：禾（垂穗的谷物）+ 口，本义是声音和谐，引申为"跟、和"。
发音：hé，第二声。`}},
  {id:"fra-07",s:"谁",t:"誰",py:"shéi",es:"quién",en:"who",
   x:{
es:`QUÉ ES: «quién». 你是谁？ ¿quién sos? · 他是谁？ ¿quién es él?

LA REGLA DE LAS PREGUNTAS (muy importante): en chino la palabra de pregunta NO se mueve al principio como en español. Queda exactamente donde iría la respuesta.
Pregunta: 他是谁？ (él es quién)
Respuesta: 他是我爸爸 (él es mi papá)
Solo cambiás 谁 por la respuesta. Lo mismo con 什么 (qué).

EL CARÁCTER:
讠 a la izquierda: 言 (hablar) aplastado. 言 es una boca 口 con líneas de sonido saliendo. Marca todo lo que tiene que ver con hablar: 谢 agradecer, 说 decir, 语 idioma.
隹 a la derecha: un pájaro de cola corta dibujado de perfil. Acá está solo por el sonido.
Una pregunta es algo que se dice: por eso el radical del habla.
En tradicional 誰: 言 completo.

PRONUNCIACIÓN: shéi (lo más común al hablar) o shuí (más formal). Segundo tono, sube, como una pregunta.`,
en:`WHAT IT IS: "who". 你是谁？ who are you? · 他是谁？ who is he?

THE QUESTION RULE (very important): in Chinese the question word does NOT move to the front as in English. It stays exactly where the answer would go.
Question: 他是谁？ (he is who)
Answer: 他是我爸爸 (he is my dad)
You just swap 谁 for the answer. Same with 什么 (what).

THE CHARACTER:
讠 on the left: 言 (speech), squeezed. 言 is a mouth 口 with lines of sound coming out. It marks anything to do with speaking: 谢 to thank, 说 to say, 语 language.
隹 on the right: a short-tailed bird in profile. Here only for the sound.
A question is something said: hence the speech radical.
In traditional 誰: the full 言.

PRONUNCIATION: shéi (most common in speech) or shuí (more formal). 2nd tone, rising, like a question.`,
zh:`是什么："谁"：你是谁？他是谁？
疑问句规则：疑问词不移到句首，放在答案的位置：他是谁？→ 他是我爸爸。
字形：讠（言，和说话有关）+ 隹（短尾鸟，表音）。
发音：shéi（口语）或 shuí。`}},
  {id:"fra-08",s:"什么",t:"什麼",py:"shénme",es:"qué",en:"what",
   x:{
es:`QUÉ ES: «qué». 你叫什么名字？ ¿cómo te llamás? (literalmente «vos llamar QUÉ nombre»).

LA MISMA REGLA QUE 谁: 什么 queda donde iría la respuesta.
你叫什么名字？ → 我叫瓦迪铭. (什么名字 se reemplaza por el nombre.)
También puede ir solo delante de un sustantivo: 什么名字 qué nombre · 什么书 qué libro.

LOS CARACTERES: es una palabra gramatical armada por el sonido; no conviene buscarle lógica a las partes.
什: 亻 (persona) + 十 (diez, una cruz).
么: 丿 + 厶, «pequeño».
En tradicional 麼: 麻 (cáñamo, fibras colgando bajo un cobertizo) arriba + 幺 (un hilo fino) abajo. Tampoco tiene relación con «qué».
Mejor aprenderlo como bloque: shénme = qué.

PRONUNCIACIÓN: shénme, la segunda sílaba en tono neutro y muy corta: casi «shém-me». Sh con la lengua atrás.`,
en:`WHAT IT IS: "what". 你叫什么名字？ what's your name? (literally "you call WHAT name").

SAME RULE AS 谁: 什么 stays where the answer would go.
你叫什么名字？ → 我叫瓦迪铭. (什么名字 is replaced by the name.)
It can also go right before a noun: 什么名字 what name · 什么书 what book.

THE CHARACTERS: it's a grammatical word built from sound; it's not worth looking for logic in the parts.
什: 亻 (person) + 十 (ten, a cross).
么: 丿 + 厶, "small".
Traditional 麼: 麻 (hemp, fibres hanging under a shed) on top + 幺 (a fine thread) below. Also unrelated to "what".
Best learned as a block: shénme = what.

PRONUNCIATION: shénme, second syllable neutral tone and very short: almost "shem-muh". Sh with the tongue back.`,
zh:`是什么："什么"：你叫什么名字？疑问词放在答案的位置：你叫什么名字？→ 我叫瓦迪铭。
字形：按读音组合的虚词，不必分析字义（繁体 麼）。
发音：shénme，第二个字轻声。`}},
  {id:"fra-09",s:"名字",py:"míngzi",es:"nombre",en:"name",
   x:{
es:`QUÉ ES: «nombre». Aparece en la pregunta más útil: 你叫什么名字？ ¿cómo te llamás?

LOS CARACTERES:
名 nombre: 夕 arriba (una media luna: el atardecer, la noche) + 口 abajo (una boca).
La historia clásica: de noche, en la oscuridad, no te ven la cara, así que tenés que decir tu nombre con la boca para que te reconozcan.
字 carácter escrito, palabra: 宀 arriba (un techo de dos aguas) + 子 abajo (un bebé).
Un niño bajo el techo de la casa: el nombre que se le pone al hijo en la familia. De ahí «palabra escrita».
名字 = «el nombre (que se dice) + el nombre (que se escribe)».

OTROS USOS: 名 aparece en tu nombre chino, 铭 (grabar el nombre en metal: 钅 + 名). 字 aparece en 数字 (número) y en 汉字 (caracteres chinos).

PRONUNCIACIÓN: míngzi. Segundo tono y después neutro, cortito.`,
en:`WHAT IT IS: "name". It's in the most useful question: 你叫什么名字？ what's your name?

THE CHARACTERS:
名 name: 夕 on top (a half moon: dusk, night) + 口 below (a mouth).
The classic story: at night, in the dark, nobody can see your face, so you have to say your name out loud to be recognised.
字 written character, word: 宀 on top (a gabled roof) + 子 below (a baby).
A child under the family roof: the name given to a son in the household. Hence "written word".
名字 = "the name (spoken) + the name (written)".

OTHER USES: 名 is in your Chinese name, 铭 (engraving the name in metal: 钅 + 名). 字 is in 数字 (number) and 汉字 (Chinese characters).

PRONUNCIATION: míngzi. 2nd tone then a short neutral tone.`,
zh:`是什么："名字"：你叫什么名字？
字形：名：夕（傍晚）+ 口，天黑看不见脸，要说出名字别人才认得。字：宀 + 子，家里给孩子取名，引申为文字。
其他：铭（钅 + 名）、数字、汉字。
发音：míngzi，第二个字轻声。`}},
  {id:"fra-10",s:"学校",t:"學校",py:"xuéxiào",es:"escuela",en:"school",cl:"c3",
   x:{
es:`QUÉ ES: «escuela». Salió en la oración de la clase 3: 在这个学校有两百个女学生和二十个男学生.

LOS CARACTERES:
学 estudiar: arriba, dos manos de un adulto (en tradicional 學 se ven bien, con 爻 en el medio: los palitos que se usaban para enseñar); en el medio 冖, un techo; abajo 子, un niño.
Un adulto que con sus manos le enseña a un niño bajo un techo: estudiar, aprender.
校 escuela: 木 (árbol, madera) + 交 (cruzar: una persona con las piernas cruzadas).
Una empalizada de troncos cruzados, un recinto cerrado: el lugar donde se enseña.

FAMILIA DE PALABRAS: el mismo 学 está en 学生 (alumno: «el que crece estudiando») y en 同学 (compañero de clase: «mismo estudio»).

PRONUNCIACIÓN: xuéxiào. Sube y después cae. Las dos con x: lengua plana adelante, como una s suave.
CUIDADO: 校 xiào ≠ 叫 jiào (llamarse). Suenan parecido, pero uno empieza con x y el otro con j.`,
en:`WHAT IT IS: "school". It came up in the class 3 sentence: 在这个学校有两百个女学生和二十个男学生.

THE CHARACTERS:
学 to study: on top, an adult's two hands (clear in traditional 學, with 爻 in the middle: the sticks used for teaching); in the middle 冖, a roof; below 子, a child.
An adult teaching a child with their hands under a roof: to study, to learn.
校 school: 木 (tree, wood) + 交 (to cross: a person with crossed legs).
A stockade of crossed logs, an enclosure: the place where teaching happens.

WORD FAMILY: the same 学 is in 学生 (student: "the one who grows by studying") and 同学 (classmate: "same study").

PRONUNCIATION: xuéxiào. Rises then falls. Both with x: tongue flat and forward, like a soft s.
CAREFUL: 校 xiào ≠ 叫 jiào (to be called). They sound alike, but one starts with x and the other with j.`,
zh:`是什么："学校"，第三课的句子：在这个学校有……
字形：学：大人的两只手（繁体 學 中间有 爻）+ 冖 + 子，在屋子里教孩子。校：木 + 交，交叉的木栅栏围成的地方。
同一家族：学生、同学。
发音：xuéxiào；校 xiào 和 叫 jiào 不同。`}},
  {id:"fra-11",s:"今天",py:"jīntiān",es:"hoy",en:"today",cl:"c3",
   x:{
es:`QUÉ ES: «hoy». Parte de 今天早上 (esta mañana), en la oración del gato.

LOS CARACTERES:
今 ahora: un techo triangular 亼 con un trazo debajo. Cubrir, encerrar el momento presente: «ahora».
天 cielo, día: 大 (una persona vista de frente con los brazos abiertos) con 一 encima de la cabeza. Lo que está arriba de la persona: el cielo. Y como el cielo marca los días, también «día».
今天 = «el día de ahora».

DÓNDE VA EN LA ORACIÓN: las palabras de tiempo van al principio o justo después del sujeto, nunca al final como en español.
Esta mañana el gato comió… → 这只猫今天早上吃…

PAREJAS ÚTILES: 明天 míngtiān mañana (el día que viene) · 昨天 zuótiān ayer.

PRONUNCIACIÓN: jīntiān, dos primeros tonos: planos y altos, como la bocina. t con aire.`,
en:`WHAT IT IS: "today". Part of 今天早上 (this morning), in the cat sentence.

THE CHARACTERS:
今 now: a triangular roof 亼 with a stroke underneath. Covering, enclosing the present moment: "now".
天 sky, day: 大 (a person seen from the front with arms spread) with 一 above the head. What's above the person: the sky. And since the sky marks the days, also "day".
今天 = "the day of now".

WHERE IT GOES: time words go at the start or right after the subject, never at the end as in English.
The cat ate … this morning → 这只猫今天早上吃…

USEFUL PAIRS: 明天 míngtiān tomorrow · 昨天 zuótiān yesterday.

PRONUNCIATION: jīntiān, two 1st tones: flat and high, like the car horn. Aspirated t.`,
zh:`是什么："今天"。
字形：今：三角形的盖子下面一横，盖住当下。天：大 上面一横，人头顶上的天，也指一天。
位置：时间词放在句首或主语后，不放句末：这只猫今天早上吃……
相关：明天、昨天。`}},
  {id:"fra-12",s:"今天早上",py:"jīntiān zǎoshang",es:"esta mañana",en:"this morning",cl:"c3",
   x:{
es:`QUÉ ES: «esta mañana». Literalmente «hoy + a la mañana».

LAS PIEZAS:
今天 hoy: 今 (ahora) + 天 (cielo, día).
早上 a la mañana: 早 (el sol 日 sobre el horizonte: temprano) + 上 (arriba).
Michelle aclaró la confusión del español: 早上 es «la mañana» (morning), no «mañana» (el día siguiente, que es 明天).

EL ORDEN IMPORTA: en chino el tiempo va DESPUÉS del sujeto y ANTES del verbo.
Español: El gato comió un pescado esta mañana.
Chino: 这只猫 今天早上 吃 一条鱼 (el gato / esta mañana / comer / un pez).
Michelle: «este es sujeto; el tiempo va después del sujeto».
También puede ir al principio: 今天早上这只猫吃一条鱼.

PRONUNCIACIÓN: jīntiān zǎoshang. zǎo tercer tono; shang en tono neutro.`,
en:`WHAT IT IS: "this morning". Literally "today + in the morning".

THE PIECES:
今天 today: 今 (now) + 天 (sky, day).
早上 in the morning: 早 (the sun 日 above the horizon: early) + 上 (up).
Michelle cleared up a Spanish confusion: 早上 is "morning", not "tomorrow" (that's 明天).

WORD ORDER MATTERS: in Chinese, time goes AFTER the subject and BEFORE the verb.
English: The cat ate a fish this morning.
Chinese: 这只猫 今天早上 吃 一条鱼 (the cat / this morning / eat / a fish).
Michelle: "this is the subject; time goes after the subject".
It can also go first: 今天早上这只猫吃一条鱼.

PRONUNCIATION: jīntiān zǎoshang. zǎo 3rd tone; shang neutral tone.`,
zh:`是什么："今天早上"。早上 是 morning，不是"明天"。
语序：时间放在主语后、动词前：这只猫今天早上吃一条鱼；也可以放句首。
发音：jīntiān zǎoshang。`}},
  {id:"fra-13",s:"橘色",py:"júsè",es:"naranja (color)",en:"orange (colour)",cl:"c3",
   x:{
es:`QUÉ ES: el color naranja. Salió al describir a Oliver: 它是橘色的 es naranja.

LOS CARACTERES:
橘 mandarina: 木 (árbol) + 矞 (solo por el sonido). El árbol que da mandarinas.
色 color: originalmente el dibujo de una persona inclinada sobre otra; significaba «el semblante, el color de la cara». De ahí «color» en general.
橘色 = «color mandarina». En chino el naranja se nombra por la mandarina, no por la naranja.

CÓMO SE USA: para decir que algo ES de un color, se pone 是 + color + 的: 它是橘色的. El 的 del final convierte el color en adjetivo («de color naranja»).

OTROS COLORES CON 色: 红色 rojo · 白色 blanco · 黑色 negro.

PRONUNCIACIÓN: júsè. Segundo y cuarto tono. La ü de jú se escribe sin puntos después de j.`,
en:`WHAT IT IS: the colour orange. It came up describing Oliver: 它是橘色的 it's orange.

THE CHARACTERS:
橘 tangerine: 木 (tree) + 矞 (sound only). The tree that bears tangerines.
色 colour: originally one person bending over another; it meant "countenance, the colour of the face". Hence "colour" in general.
橘色 = "tangerine colour". Chinese names orange after the tangerine.

HOW IT'S USED: to say something IS a colour, use 是 + colour + 的: 它是橘色的. The final 的 turns the colour into an adjective ("orange-coloured").

OTHER COLOURS WITH 色: 红色 red · 白色 white · 黑色 black.

PRONUNCIATION: júsè. 2nd and 4th tones. The ü in jú is written without dots after j.`,
zh:`是什么：橘色，描述 Oliver：它是橘色的。
字形：橘：木 + 矞（表音）；色：本义是脸色，引申为颜色。
用法：是 + 颜色 + 的。其他颜色：红色、白色、黑色。`}},
  {id:"fra-20",s:"你叫什么名字？",t:"你叫什麼名字？",py:"nǐ jiào shénme míngzi?",es:"¿cómo te llamás?",en:"what's your name?",
   x:{
es:`QUÉ ES: la pregunta para saber el nombre de alguien. Palabra por palabra:
你 vos · 叫 llamar · 什么 qué · 名字 nombre → «¿vos llamar qué nombre?»

POR QUÉ ESTE ORDEN: en chino la pregunta tiene el mismo orden que la respuesta. Solo cambiás la palabra de pregunta por el dato:
你叫什么名字？
我叫瓦迪铭。
No hace falta 吗: la pregunta ya tiene 什么. (吗 es solo para preguntas de sí o no.)

CAMBIANDO EL SUJETO sale todo lo demás, sin conjugar nada:
他叫什么名字？ ¿cómo se llama él?
你的猫叫什么名字？ ¿cómo se llama tu gato?

LOS CARACTERES: 你 (亻 persona + 尔) · 叫 (口 boca + 丩: llamar en voz alta) · 什么 (palabra de sonido) · 名 (夕 noche + 口 boca) 字 (宀 techo + 子 niño).

PRONUNCIACIÓN: nǐ jiào shénme míngzi. Más formal: 您贵姓？ (¿cuál es su apellido?), para gente mayor.`,
en:`WHAT IT IS: the question for asking someone's name. Word by word:
你 you · 叫 call · 什么 what · 名字 name → "you call what name?"

WHY THIS ORDER: in Chinese the question has the same order as the answer. You just swap the question word for the information:
你叫什么名字？
我叫瓦迪铭。
No 吗 needed: the question already has 什么. (吗 is only for yes/no questions.)

CHANGE THE SUBJECT and everything else follows, with nothing to conjugate:
他叫什么名字？ what's his name?
你的猫叫什么名字？ what's your cat's name?

THE CHARACTERS: 你 (亻 person + 尔) · 叫 (口 mouth + 丩: calling out) · 什么 (sound word) · 名 (夕 night + 口 mouth) 字 (宀 roof + 子 child).

PRONUNCIATION: nǐ jiào shénme míngzi. More formal: 您贵姓？ (what's your surname?), for older people.`,
zh:`是什么：问名字的句子。问句和答句语序一样：你叫什么名字？→ 我叫瓦迪铭。有 什么 就不用 吗。换主语就行：他叫什么名字？你的猫叫什么名字？更正式：您贵姓？`}},
  {id:"fra-21",s:"他叫什么名字？",t:"他叫什麼名字？",py:"tā jiào shénme míngzi?",es:"¿cómo se llama él?",en:"what's his name?",
   x:{
es:`QUÉ ES: «¿cómo se llama él?». Es 你叫什么名字？ cambiando 你 (vos) por 他 (él).

LO QUE ENSEÑA: como el chino no conjuga, para cambiar de persona solo cambiás el pronombre. En español cambia todo (te llamás → se llama); en chino no cambia nada más.
你叫什么名字？ ¿cómo te llamás?
他叫什么名字？ ¿cómo se llama él?
她叫什么名字？ ¿cómo se llama ella? (suena igual)

LA RESPUESTA: 他叫 + nombre. Por ejemplo 他叫 Luis.

EL PRONOMBRE: 他 = 亻 (persona) + 也 (sonido). Michelle lo usa también de forma neutra para «ella».

PRONUNCIACIÓN: tā jiào shénme míngzi. tā primer tono, alto y plano, con la t aspirada (con aire).`,
en:`WHAT IT IS: "what's his name?". It's 你叫什么名字？ with 你 (you) swapped for 他 (he).

WHAT IT TEACHES: since Chinese doesn't conjugate, changing the person means changing only the pronoun. Nothing else moves.
你叫什么名字？ what's your name?
他叫什么名字？ what's his name?
她叫什么名字？ what's her name? (sounds the same)

THE ANSWER: 他叫 + name. E.g. 他叫 Luis.

THE PRONOUN: 他 = 亻 (person) + 也 (sound). Michelle also uses it neutrally for "she".

PRONUNCIATION: tā jiào shénme míngzi. tā 1st tone, high and flat, aspirated t (with a puff of air).`,
zh:`是什么：把 你 换成 他。中文没有变位，只换代词。回答：他叫 Luis。`}},
  {id:"fra-22",s:"你的猫叫什么名字？",t:"你的貓叫什麼名字？",py:"nǐ de māo jiào shénme míngzi?",es:"¿cómo se llama tu gato?",en:"what's your cat's name?",cl:"c3",
   x:{
es:`QUÉ ES: la pregunta que hizo Michelle cuando apareció Oliver en clase.

CÓMO SE ARMA: el sujeto ahora es «tu gato» = 你的猫. El resto es la pregunta de siempre.
你的猫 (tu gato) + 叫 (llamar) + 什么名字 (qué nombre).

EL POSESIVO 的: 你的 = «tu». Funciona como el apóstrofe s del inglés: you's cat. Michelle: «el 的 es como el 's».
(Con familiares se puede sacar el 的: 你妈妈. Con animales y cosas se deja: 你的猫.)

LA RESPUESTA DE CLASE: 我的猫叫 Oliver. mi gato se llama Oliver.

LOS CARACTERES: 猫 = 犭 (animal de cuatro patas) + 苗 (sonido miáo, como el maullido).

PRONUNCIACIÓN: nǐ de māo jiào shénme míngzi. 的 en tono neutro, muy corto.`,
en:`WHAT IT IS: the question Michelle asked when Oliver showed up in class.

HOW IT'S BUILT: the subject is now "your cat" = 你的猫. The rest is the usual question.
你的猫 (your cat) + 叫 (call) + 什么名字 (what name).

THE POSSESSIVE 的: 你的 = "your". It works like English 's. Michelle: "的 is like 's".
(With family members you can drop 的: 你妈妈. With animals and things you keep it: 你的猫.)

THE CLASS ANSWER: 我的猫叫 Oliver. my cat is called Oliver.

THE CHARACTERS: 猫 = 犭 (four-legged animal) + 苗 (sound miáo, like the miaow).

PRONUNCIATION: nǐ de māo jiào shénme míngzi. 的 neutral tone, very short.`,
zh:`是什么：Oliver 出现时老师问的问题。主语是 你的猫，的 相当于英文 's。亲属可以省 的（你妈妈），动物和东西不省（你的猫）。回答：我的猫叫 Oliver。`}},
  {id:"fra-23",s:"你是谁？",t:"你是誰？",py:"nǐ shì shéi?",es:"¿quién sos?",en:"who are you?",
   x:{
es:`QUÉ ES: «¿quién sos?». Palabra por palabra: 你 vos · 是 ser · 谁 quién → «vos sos quién».

LA REGLA: la palabra de pregunta (谁) va donde iría la respuesta, al final. No se mueve al principio como en español.
你是谁？ → 我是瓦迪铭。
Tampoco lleva 吗: 吗 es solo para preguntas de sí o no, y esta tiene su propia palabra de pregunta.

CUIDADO CON EL TONO SOCIAL: 你是谁？ es directa, casi brusca cara a cara. Para preguntar el nombre de manera amable se usa 你叫什么名字？ En el teléfono o detrás de una puerta sí es normal.

LOS CARACTERES:
是 ser: 日 (sol) + 正 (el pie que va derecho): lo cierto.
谁 quién: 讠 (hablar) + 隹 (un pájaro, solo por el sonido).

PRONUNCIACIÓN: nǐ shì shéi. shì cae, shéi sube.`,
en:`WHAT IT IS: "who are you?". Word by word: 你 you · 是 be · 谁 who → "you are who".

THE RULE: the question word (谁) goes where the answer would, at the end. It doesn't move to the front as in English.
你是谁？ → 我是瓦迪铭。
No 吗 either: 吗 is only for yes/no questions, and this one has its own question word.

SOCIAL TONE: 你是谁？ is direct, almost blunt face to face. To ask someone's name politely use 你叫什么名字？ On the phone or through a door it's normal.

THE CHARACTERS:
是 to be: 日 (sun) + 正 (the foot going straight): what's true.
谁 who: 讠 (speech) + 隹 (a bird, only for the sound).

PRONUNCIATION: nǐ shì shéi. shì falls, shéi rises.`,
zh:`是什么："你是谁？"。疑问词放在答案的位置，不用 吗。当面问有点直接，客气一点问 你叫什么名字？`}},
  {id:"fra-24",s:"他是谁？",t:"他是誰？",py:"tā shì shéi?",es:"¿quién es él?",en:"who is he?",
   x:{
es:`QUÉ ES: «¿quién es él?». Es 你是谁？ cambiando 你 por 他.

CÓMO SE RESPONDE (lo practicaron en clase): se deja todo igual y se cambia 谁 por la respuesta.
他是谁？ → 他是我爸爸 él es mi papá.
他是谁？ → 他是我老板的弟弟 es el hermano menor de mi jefe.
他是谁？ → 他是一位老师 es un profesor.

LO QUE ENSEÑA: con 是 + 谁 podés preguntar por cualquier persona, y con los posesivos (的) responder con toda la cadena de relaciones.

LOS CARACTERES: 他 (亻 persona + 也) · 是 (日 sol + 正 derecho) · 谁 (讠 hablar + 隹 pájaro).

PRONUNCIACIÓN: tā shì shéi. Tres tonos distintos: alto, cae, sube.`,
en:`WHAT IT IS: "who is he?". It's 你是谁？ with 你 swapped for 他.

HOW TO ANSWER (practised in class): keep everything and swap 谁 for the answer.
他是谁？ → 他是我爸爸 he's my dad.
他是谁？ → 他是我老板的弟弟 he's my boss's younger brother.
他是谁？ → 他是一位老师 he's a teacher.

WHAT IT TEACHES: with 是 + 谁 you can ask about anyone, and with possessives (的) answer with a whole chain of relationships.

THE CHARACTERS: 他 (亻 person + 也) · 是 (日 sun + 正 straight) · 谁 (讠 speech + 隹 bird).

PRONUNCIATION: tā shì shéi. Three different tones: high, falling, rising.`,
zh:`是什么："他是谁？"。回答时把 谁 换成答案：他是我爸爸、他是我老板的弟弟、他是一位老师。`}},
  {id:"fra-25",s:"你妹妹的朋友叫什么名字？",t:"你妹妹的朋友叫什麼名字？",py:"nǐ mèimei de péngyǒu jiào shénme míngzi?",es:"¿cómo se llama el amigo de tu hermana?",en:"what's your younger sister's friend's name?",
   x:{
es:`QUÉ ES: la pregunta más larga de la clase 2, para practicar posesivos encadenados.

CÓMO SE ARMA: el sujeto es toda la parte antes de 叫:
你妹妹 tu hermana menor (sin 的, porque es familiar)
+ 的 + 朋友 = el amigo de tu hermana menor
+ 叫什么名字 ¿cómo se llama?

EL ORDEN ES AL REVÉS QUE EN ESPAÑOL: el dueño va primero, como en inglés.
español: el amigo DE tu hermana
chino: tu hermana 的 amigo (your sister's friend)

LA RESPUESTA: 我妹妹的朋友叫 Juan. Solo cambian 你→我 y 什么名字→el nombre.

LOS CARACTERES:
妹 hermana menor: 女 (mujer) + 未 (todavía no: un árbol que no terminó de crecer). La hermana que todavía no creció.
朋友 amigo: 朋 (dos sartas de conchas lado a lado) + 友 (dos manos que van en la misma dirección).

PRONUNCIACIÓN: nǐ mèimei de péngyǒu jiào shénme míngzi.`,
en:`WHAT IT IS: the longest question from class 2, for practising chained possessives.

HOW IT'S BUILT: the subject is everything before 叫:
你妹妹 your younger sister (no 的, since she's family)
+ 的 + 朋友 = your younger sister's friend
+ 叫什么名字 what's the name?

THE ORDER IS LIKE ENGLISH: the owner comes first.
your sister 的 friend = your sister's friend

THE ANSWER: 我妹妹的朋友叫 Juan. Only 你→我 and 什么名字→the name change.

THE CHARACTERS:
妹 younger sister: 女 (woman) + 未 (not yet: a tree that hasn't finished growing). The sister who hasn't grown up yet.
朋友 friend: 朋 (two strings of shells side by side) + 友 (two hands going the same way).

PRONUNCIATION: nǐ mèimei de péngyǒu jiào shénme míngzi.`,
zh:`是什么：第二课练习连续所有格的问句。主语：你妹妹（亲属不用 的）+ 的 + 朋友。所有者在前，和英文一样。回答：我妹妹的朋友叫 Juan。`}},
  {id:"fra-26",s:"你吃苹果吗？",t:"你吃蘋果嗎？",py:"nǐ chī píngguǒ ma?",es:"¿comés manzana?",en:"do you eat apples?",cl:"c1",
   x:{
es:`QUÉ ES: la primera pregunta que armó Michelle, para mostrar cómo funciona 吗.

LA REGLA DE 吗: tomás una afirmación y le agregás 吗 al final. Nada más cambia: ni el orden, ni el verbo.
你吃苹果。 comés manzana.
你吃苹果吗？ ¿comés manzana?
Michelle: «吗 no tiene significado, pero si lo agregás al final de una afirmación, se convierte en pregunta de sí o no».

CÓMO SE RESPONDE: no hay «sí» ni «no» sueltos como en español. Se repite el verbo:
吃 (como) = sí · 不吃 (no como) = no.

LOS CARACTERES:
吗: 口 (boca, algo que se dice) + 马 (caballo, solo por el sonido; tradicional 嗎 con 馬).
吃 comer: 口 + 乞 (sonido).
苹果 manzana: 苹 (艹 hierba + 平 sonido) + 果 (la fruta sobre el árbol 木).

PRONUNCIACIÓN: nǐ chī píngguǒ ma. 吗 corto y sin tono.`,
en:`WHAT IT IS: the first question Michelle built, to show how 吗 works.

THE 吗 RULE: take a statement and add 吗 at the end. Nothing else changes: not the order, not the verb.
你吃苹果。 you eat apples.
你吃苹果吗？ do you eat apples?
Michelle: "吗 has no meaning, but if you add it to the end of a statement, it becomes a yes/no question".

HOW TO ANSWER: there's no standalone "yes" or "no". You repeat the verb:
吃 (I eat) = yes · 不吃 (I don't eat) = no.

THE CHARACTERS:
吗: 口 (mouth, something said) + 马 (horse, sound only; traditional 嗎 with 馬).
吃 to eat: 口 + 乞 (sound).
苹果 apple: 苹 (艹 grass + 平 sound) + 果 (the fruit on the tree 木).

PRONUNCIATION: nǐ chī píngguǒ ma. 吗 short and toneless.`,
zh:`是什么：老师示范 吗 的第一个问句。规则：陈述句后面加 吗 就是是非问句，语序和动词都不变。回答时重复动词：吃 / 不吃。`}},
  {id:"fra-30",s:"我叫瓦迪铭。",t:"我叫瓦迪銘。",py:"wǒ jiào Wǎ Dí Míng",es:"me llamo Vladimir",en:"my name is Vladimir",
   x:{
es:`QUÉ ES: tu presentación en chino, con el nombre que te dio Michelle.

LA ESTRUCTURA: 我 (yo) + 叫 (llamar) + nombre. Literalmente «yo llamar Vladimir».

TU NOMBRE CHINO, carácter por carácter:
瓦 wǎ: una teja curva de barro, el dibujo de dos tejas encajadas. Suena como la «Vla» de Vladimir.
迪 dí: 辶 (el radical de caminar, un pie en un camino) + 由 (de, a partir de: sonido). Significa guiar, iluminar, abrir el camino.
铭 míng: 钅 (metal, forma aplastada de 金) + 名 (nombre). Grabar un nombre en metal para que dure: «inscripción, recordar para siempre».
Los extranjeros suelen elegir nombres por sonido Y por significado, como 大山 (montaña grande), el canadiense que mencionó Michelle.

PRONUNCIACIÓN: wǒ jiào Wǎ Dí Míng. Ojo: 我 y 瓦 son tercer tono seguidos… con 叫 en el medio no hay problema, pero dí y míng suben los dos.`,
en:`WHAT IT IS: introducing yourself in Chinese, with the name Michelle gave you.

THE STRUCTURE: 我 (I) + 叫 (call) + name. Literally "I call Vladimir".

YOUR CHINESE NAME, character by character:
瓦 wǎ: a curved clay roof tile, drawn as two interlocking tiles. It sounds like the "Vla" in Vladimir.
迪 dí: 辶 (the walking radical, a foot on a road) + 由 (from: sound). It means to guide, to enlighten, to open the way.
铭 míng: 钅 (metal, squeezed form of 金) + 名 (name). Engraving a name in metal so it lasts: "inscription, remember forever".
Foreigners usually choose names for sound AND meaning, like 大山 (big mountain), the Canadian Michelle mentioned.

PRONUNCIATION: wǒ jiào Wǎ Dí Míng. dí and míng both rise.`,
zh:`是什么：用老师取的中文名自我介绍：我 + 叫 + 名字。
名字：瓦（屋瓦，音近 Vla）、迪（辶 + 由，启迪）、铭（钅 + 名，刻在金属上的名字）。外国人常按读音和意思取名，比如 大山。`}},
  {id:"fra-31",s:"我是瓦迪铭。",t:"我是瓦迪銘。",py:"wǒ shì Wǎ Dí Míng",es:"soy Vladimir",en:"I am Vladimir",
   x:{
es:`QUÉ ES: otra forma de presentarte: «soy Vladimir».

我是 vs 我叫: Michelle dijo que se usan los dos.
我叫瓦迪铭 = me llamo Vladimir (responde a 你叫什么名字？)
我是瓦迪铭 = soy Vladimir (responde a 你是谁？, o al teléfono: «habla Vladimir»)

LA ESTRUCTURA: 我 + 是 + nombre. 是 no se conjuga: 我是, 你是, 他是.

EL VERBO 是: 日 (el sol) sobre 正 (una línea de meta sobre la huella de un pie: ir derecho). «Lo que es tan cierto como el sol».

PRONUNCIACIÓN: wǒ shì Wǎ Dí Míng. shì cuarto tono con la lengua atrás.`,
en:`WHAT IT IS: another way to introduce yourself: "I'm Vladimir".

我是 vs 我叫: Michelle said both are used.
我叫瓦迪铭 = my name is Vladimir (answers 你叫什么名字？)
我是瓦迪铭 = I'm Vladimir (answers 你是谁？, or on the phone: "Vladimir speaking")

THE STRUCTURE: 我 + 是 + name. 是 isn't conjugated: 我是, 你是, 他是.

THE VERB 是: 日 (the sun) over 正 (a finish line over a footprint: going straight). "What is as true as the sun".

PRONUNCIATION: wǒ shì Wǎ Dí Míng. shì 4th tone, tongue back.`,
zh:`是什么：另一种自我介绍。我叫瓦迪铭 回答"你叫什么名字"；我是瓦迪铭 回答"你是谁"，也用于电话里。`}},
  {id:"fra-32",s:"他是我爸爸。",py:"tā shì wǒ bàba",es:"él es mi papá",en:"he is my dad",
   x:{
es:`QUÉ ES: «él es mi papá». La respuesta típica a 他是谁？

LA ESTRUCTURA: 他 (él) + 是 (ser) + 我爸爸 (mi papá).

POR QUÉ NO HAY 的: «mi papá» debería ser 我的爸爸, pero con familiares en singular el 的 se puede sacar. Michelle lo explicó para que no suene «de-de-de» todo el tiempo.
我爸爸 = 我的爸爸 (los dos están bien)
Con cosas y animales se deja: 我的猫, 我的书.
En plural no se saca: 我们的爸爸.

LOS CARACTERES:
他: 亻 (persona) + 也 (sonido).
爸爸: 父 arriba (una mano sosteniendo un hacha: el que trabaja y manda) + 巴 (sonido). Se repite, como casi todas las palabras de familia.

PRONUNCIACIÓN: tā shì wǒ bàba. bà cuarto tono, ba neutro. La b sin aire (como la p de «speak»).`,
en:`WHAT IT IS: "he's my dad". The typical answer to 他是谁？

THE STRUCTURE: 他 (he) + 是 (be) + 我爸爸 (my dad).

WHY THERE'S NO 的: "my dad" would be 我的爸爸, but with family members in the singular you can drop 的. Michelle explained it so things don't sound "de-de-de".
我爸爸 = 我的爸爸 (both fine)
With things and animals you keep it: 我的猫, 我的书.
In the plural you keep it: 我们的爸爸.

THE CHARACTERS:
他: 亻 (person) + 也 (sound).
爸爸: 父 on top (a hand holding an axe: the one who works and gives orders) + 巴 (sound). Doubled, like almost every family word.

PRONUNCIATION: tā shì wǒ bàba. bà 4th tone, ba neutral. Unaspirated b (like the p in "speak").`,
zh:`是什么："他是我爸爸"，回答 他是谁？单数亲属可以省略 的：我爸爸 = 我的爸爸；东西和动物不省；复数不省。`}},
  {id:"fra-33",s:"你吃苹果。",t:"你吃蘋果。",py:"nǐ chī píngguǒ",es:"comés manzana",en:"you eat apples",cl:"c1",
   x:{
es:`QUÉ ES: la oración afirmativa básica de la clase 1: sujeto + verbo + objeto. 你 (vos) + 吃 (comer) + 苹果 (manzana).

LO QUE ENSEÑA:
1. El orden es igual que en español: quién + qué hace + qué cosa.
2. El verbo NO cambia: 吃 es como, comés, come, comemos. Tampoco cambia con el tiempo: puede ser «comés», «comiste» o «vas a comer» según el contexto. Michelle: «no tenés pasado, presente y futuro».
3. El sustantivo tampoco cambia: 苹果 es manzana o manzanas.
Agregando 吗 al final se vuelve pregunta: 你吃苹果吗？

LOS CARACTERES:
吃: 口 (boca) + 乞 (sonido).
苹果: 苹 = 艹 (hierba) + 平 píng (plano, una balanza en equilibrio: sonido) · 果 = la fruta dibujada arriba del árbol 木.

PRONUNCIACIÓN: nǐ chī píngguǒ. Ojo con el final: 苹果 es segundo + tercer tono.`,
en:`WHAT IT IS: the basic statement from class 1: subject + verb + object. 你 (you) + 吃 (eat) + 苹果 (apple).

WHAT IT TEACHES:
1. The order is the same as English: who + does what + to what.
2. The verb does NOT change: 吃 is eat, eats, ate. It doesn't change with tense either: context tells you. Michelle: "there's no past, present and future".
3. The noun doesn't change either: 苹果 is apple or apples.
Add 吗 at the end and it becomes a question: 你吃苹果吗？

THE CHARACTERS:
吃: 口 (mouth) + 乞 (sound).
苹果: 苹 = 艹 (grass) + 平 píng (flat, a balanced scale: sound) · 果 = the fruit drawn above the tree 木.

PRONUNCIATION: nǐ chī píngguǒ. 苹果 is a 2nd + 3rd tone.`,
zh:`是什么：第一课的基本句：主语 + 动词 + 宾语。动词不变位、没有时态变化，名词没有复数形式。加 吗 变成问句。`}},
  {id:"fra-34",s:"我的狗",py:"wǒ de gǒu",es:"mi perro",en:"my dog",
   x:{
es:`QUÉ ES: «mi perro». El primer ejemplo de posesivo de la clase 2.

LA REGLA: pronombre + 的 = posesivo.
我的 mi · 你的 tu · 他的 su (de él) · 我们的 nuestro.
Michelle: el 的 es como el apóstrofe s del inglés: «I's dog».

CON ANIMALES Y COSAS el 的 se deja: 我的狗, 我的书. Con familiares se puede sacar: 我爸爸.

LOS CARACTERES:
的: 白 (blanco) + 勺 (un cucharón). El significado original se perdió: hoy es solo gramática, y es el carácter más usado del idioma.
狗: 犭 (犬 perro aplastado: un perro de perfil con la cola enroscada) + 句 (sonido).

PRONUNCIACIÓN: wǒ de gǒu. 的 muy corto y sin tono. 我 y 狗 son tercer tono.`,
en:`WHAT IT IS: "my dog". The first possessive example from class 2.

THE RULE: pronoun + 的 = possessive.
我的 my · 你的 your · 他的 his · 我们的 our.
Michelle: 的 is like English 's: "I's dog".

WITH ANIMALS AND THINGS you keep 的: 我的狗, 我的书. With family you can drop it: 我爸爸.

THE CHARACTERS:
的: 白 (white) + 勺 (a ladle). The original meaning is lost: today it's pure grammar, and the most frequent character in the language.
狗: 犭 (犬 dog, squeezed: a dog in profile with a curled tail) + 句 (sound).

PRONUNCIATION: wǒ de gǒu. 的 very short and toneless. 我 and 狗 are 3rd tone.`,
zh:`是什么："我的狗"。规则：代词 + 的 = 所有格（我的、你的、他的、我们的），的 相当于英文 's。动物和东西不省 的，亲属可以省。`}},
  {id:"fra-35",s:"我爸爸的狗",py:"wǒ bàba de gǒu",es:"el perro de mi papá",en:"my dad's dog",
   x:{
es:`QUÉ ES: «el perro de mi papá». Dos posesivos en una frase.

EL ORDEN, AL REVÉS QUE EN ESPAÑOL:
español: el perro DE mi papá (primero la cosa, después el dueño)
chino: 我爸爸 的 狗 (primero el dueño, después la cosa)
Es igual al inglés: my dad's dog. Por eso Michelle lo explica siempre con el 's.

LAS PIEZAS:
我爸爸 mi papá (sin 的 en el medio: familiar en singular).
的 's.
狗 perro.

EL TRUCO: leé el 的 como «'s»: «mi papá's perro».

PRONUNCIACIÓN: wǒ bàba de gǒu.`,
en:`WHAT IT IS: "my dad's dog". Two possessives in one phrase.

THE ORDER, SAME AS ENGLISH:
Chinese: 我爸爸 的 狗 (owner first, then the thing)
= my dad's dog. That's why Michelle always explains it with 's.
(In Spanish it's the reverse: "el perro de mi papá", which is what makes it tricky for Spanish speakers.)

THE PIECES:
我爸爸 my dad (no 的 in between: family member, singular).
的 's.
狗 dog.

THE TRICK: read 的 as "'s".

PRONUNCIATION: wǒ bàba de gǒu.`,
zh:`是什么："我爸爸的狗"。所有者在前，东西在后，和英文 my dad's dog 一样；西班牙语语序相反。`}},
  {id:"fra-36",s:"我爸爸的妹妹的朋友",py:"wǒ bàba de mèimei de péngyǒu",es:"el amigo de la hermana de mi papá",en:"my dad's younger sister's friend",
   x:{
es:`QUÉ ES: la cadena de posesivos que escribió Michelle en el apunte de la clase 2.

CÓMO SE LEE: de izquierda a derecha, cada 的 = 's.
我爸爸 的 妹妹 的 朋友
mi papá 's hermana menor 's amigo
= my dad's sister's friend.
En español hay que darlo vuelta: el amigo de la hermana de mi papá.

CUÁNTOS 的 SE PUEDEN PONER: todos los que haga falta. El chino no tiene límite, igual que el inglés con 's.

POR QUÉ 我爸爸 SIN 的 PERO 妹妹的 CON 的: 我爸爸 (mi papá) es familiar directo del pronombre, se puede sacar. Pero entre 爸爸 y 妹妹, y entre 妹妹 y 朋友, el 的 tiene que estar.

LOS CARACTERES:
妹 hermana menor: 女 (mujer) + 未 (todavía no: un árbol que no terminó de crecer).
朋友 amigo: 朋 (dos sartas de conchas) + 友 (dos manos en la misma dirección).

PRONUNCIACIÓN: wǒ bàba de mèimei de péngyǒu.`,
en:`WHAT IT IS: the chain of possessives Michelle wrote in the class 2 handout.

HOW TO READ IT: left to right, each 的 = 's.
我爸爸 的 妹妹 的 朋友
my dad 's younger sister 's friend
= my dad's sister's friend.
(Spanish has to reverse it: el amigo de la hermana de mi papá.)

HOW MANY 的 YOU CAN USE: as many as needed, just like 's in English.

WHY 我爸爸 WITHOUT 的 BUT 妹妹的 WITH 的: 我爸爸 (my dad) is a direct family member of the pronoun, so it can drop. But between 爸爸 and 妹妹, and between 妹妹 and 朋友, 的 must be there.

THE CHARACTERS:
妹 younger sister: 女 (woman) + 未 (not yet: a tree that hasn't finished growing).
朋友 friend: 朋 (two strings of shells) + 友 (two hands going the same way).

PRONUNCIATION: wǒ bàba de mèimei de péngyǒu.`,
zh:`是什么：第二课讲义里的连续所有格：我爸爸的妹妹的朋友 = my dad's sister's friend。的 可以一直接下去；我爸爸 可以省 的，后面的 的 不能省。`}},
  {id:"fra-40",s:"我有一个男老师和两个女老师。",t:"我有一個男老師和兩個女老師。",py:"wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī",es:"tengo un profesor y dos profesoras",en:"I have one male teacher and two female teachers",cl:"c3",
   x:{
es:`QUÉ ES: la primera oración de la clase 3. Junta TRES temas nuevos a la vez: 有, clasificadores y género.

PIEZA POR PIEZA:
我有 tengo (有 con sujeto = tener).
一个 un (一 + clasificador 个, para personas).
男老师 profesor hombre (男 delante marca masculino).
和 y (une dos sustantivos).
两个 dos (两, no 二, porque va antes de clasificador).
女老师 profesora (女 delante marca femenino).

POR QUÉ MARCAR EL GÉNERO: normalmente 老师 no dice si es hombre o mujer. Michelle: solo se agrega 男 / 女 cuando querés resaltarlo, como acá, que contrastás uno contra dos.

LOS CARACTERES:
男: 田 (campo) + 力 (fuerza): el que trabaja el campo.
女: una mujer arrodillada con los brazos cruzados.
两: el yugo o la balanza de dos platillos: un par.

PRONUNCIACIÓN: wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī. 我有 son dos terceros tonos: se dice wó yǒu.`,
en:`WHAT IT IS: the first sentence of class 3. It combines THREE new topics at once: 有, measure words and gender.

PIECE BY PIECE:
我有 I have (有 with a subject = to have).
一个 a (一 + measure word 个, for people).
男老师 male teacher (男 in front marks masculine).
和 and (joins two nouns).
两个 two (两, not 二, because it's before a measure word).
女老师 female teacher (女 in front marks feminine).

WHY MARK GENDER: normally 老师 doesn't say whether it's a man or a woman. Michelle: you only add 男 / 女 when you want to stress it, as here, contrasting one with two.

THE CHARACTERS:
男: 田 (field) + 力 (strength): the one who works the field.
女: a kneeling woman with arms crossed.
两: the yoke or the two-pan scale: a pair.

PRONUNCIATION: wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī. 我有 is two 3rd tones: said wó yǒu.`,
zh:`是什么：第三课第一个句子，同时用到 有、量词和性别。
我有 + 一个 + 男老师 + 和 + 两个（量词前用 两）+ 女老师。需要强调性别时才加 男 / 女。
发音：我有 读 wó yǒu。`}},
  {id:"fra-41",s:"他是一位老师。",t:"他是一位老師。",py:"tā shì yí wèi lǎoshī",es:"él es un profesor",en:"he is a teacher",cl:"c3",
   x:{
es:`QUÉ ES: «él es un profesor», con el clasificador respetuoso 位.

POR QUÉ 位 Y NO 个: los dos son correctos. 位 muestra respeto: se usa para profesores, clientes, invitados. 他是一个老师 también está bien, pero suena más neutro. Michelle: 位 es «para personas, formal»; en las noticias se oye mucho.

UNA DIFERENCIA CON EL ESPAÑOL: en español decimos «él es profesor» sin artículo. En chino con 是 + profesión se puede decir 他是老师 (sin número) o 他是一位老师 (con «un»). Los dos existen.

LOS CARACTERES:
位: 亻 (persona) + 立 (una persona de pie sobre el suelo): alguien parado en su lugar, «posición». Contarlo con 位 es reconocerle su lugar.
老师: 老 (anciano con bastón, respeto) + 师 (maestro, experto).

PRONUNCIACIÓN: tā shì yí wèi lǎoshī. 一 es yí porque 位 es cuarto tono.`,
en:`WHAT IT IS: "he's a teacher", with the respectful measure word 位.

WHY 位 AND NOT 个: both are correct. 位 shows respect: used for teachers, customers, guests. 他是一个老师 is fine too but sounds more neutral. Michelle: 位 is "for people, formal"; you hear it a lot in the news.

WITH PROFESSIONS: 他是老师 (no number) and 他是一位老师 (with "a") both exist.

THE CHARACTERS:
位: 亻 (person) + 立 (a person standing on the ground): someone standing in their place, "position". Counting someone with 位 acknowledges their place.
老师: 老 (old man with a stick, respect) + 师 (master, expert).

PRONUNCIATION: tā shì yí wèi lǎoshī. 一 is yí because 位 is a 4th tone.`,
zh:`是什么："他是一位老师"，用尊称量词 位；说 一个老师 也对，但比较普通。也可以直接说 他是老师。`}},
  {id:"fra-42",s:"在这个学校有两百个女学生和二十个男学生。",t:"在這個學校有兩百個女學生和二十個男學生。",py:"zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng",es:"en esta escuela hay 200 alumnas y 20 alumnos",en:"this school has 200 female and 20 male students",cl:"c3",
   x:{
es:`QUÉ ES: la oración grande de la clase 3. Usa casi todo lo aprendido: lugar, 有 sin sujeto, números, clasificador y género.

PIEZA POR PIEZA:
在这个学校 en esta escuela (在 en + 这个 esta + 学校 escuela).
有 hay (有 SIN sujeto = haber).
两百个女学生 200 alumnas (两百 doscientos + 个 + 女 femenino + 学生).
和 y.
二十个男学生 20 alumnos (二十 veinte + 个 + 男 masculino + 学生).

TRES DETALLES:
1. El lugar va al principio: «en esta escuela» abre la oración.
2. 两百 pero 二十: para 200 se usa 两 (两百), pero dentro de 20 va 二 (二十). Michelle: «doscientos es 两百».
3. Cada número lleva 个, porque son personas.

PRONUNCIACIÓN: zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng. Practicala despacio: tiene z, zh, x, sh, todas las consonantes difíciles.`,
en:`WHAT IT IS: the big sentence from class 3. It uses almost everything learned: place, 有 without a subject, numbers, measure words and gender.

PIECE BY PIECE:
在这个学校 at this school (在 at + 这个 this + 学校 school).
有 there are (有 WITHOUT a subject = there is/are).
两百个女学生 200 female students (两百 two hundred + 个 + 女 female + 学生).
和 and.
二十个男学生 20 male students (二十 twenty + 个 + 男 male + 学生).

THREE DETAILS:
1. The place goes first: "at this school" opens the sentence.
2. 两百 but 二十: for 200 you use 两 (两百), but inside 20 it's 二 (二十). Michelle: "two hundred is 两百".
3. Every number takes 个, because they're people.

PRONUNCIATION: zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng. Practise slowly: it has z, zh, x, sh, all the hard consonants.`,
zh:`是什么：第三课的长句：在这个学校（地点放句首）+ 有（没有主语表示存在）+ 两百个女学生 + 和 + 二十个男学生。200 说 两百，20 说 二十；人都用 个。`}},
  {id:"fra-43",s:"我有一只猫。",t:"我有一隻貓。",py:"wǒ yǒu yì zhī māo",es:"tengo un gato",en:"I have a cat",cl:"c3",
   x:{
es:`QUÉ ES: «tengo un gato». Primera oración de tu presentación de Oliver en clase.

PIEZA POR PIEZA:
我 yo · 有 tener · 一 un · 只 clasificador de animales · 猫 gato.

LO QUE REPASA:
有 con sujeto = tener.
«un gato» = 一 + 只 + 猫. Nunca 一猫. Y no 个, porque es un animal.
Los verbos no se conjugan: 我有, 你有, 他有.

LA PRESENTACIÓN COMPLETA DE CLASE:
我有一只猫。我的猫叫 Oliver。它是橘色的。这只猫今天早上吃一条鱼。
Fijate que en chino son cuatro oraciones cortas, cada una con su sujeto.

PRONUNCIACIÓN: wǒ yǒu yì zhī māo. 我有 = dos terceros tonos: el primero sube (wó yǒu). 一 es yì porque 只 es primer tono.`,
en:`WHAT IT IS: "I have a cat". The first sentence introducing Oliver in class.

PIECE BY PIECE:
我 I · 有 have · 一 a · 只 animal measure word · 猫 cat.

WHAT IT REVIEWS:
有 with a subject = to have.
"a cat" = 一 + 只 + 猫. Never 一猫. And not 个, because it's an animal.
Verbs aren't conjugated: 我有, 你有, 他有.

THE WHOLE INTRODUCTION FROM CLASS:
我有一只猫。我的猫叫 Oliver。它是橘色的。这只猫今天早上吃一条鱼。
Notice that in Chinese it's four short sentences, each with its own subject.

PRONUNCIATION: wǒ yǒu yì zhī māo. 我有 = two 3rd tones: the first rises (wó yǒu). 一 is yì because 只 is a 1st tone.`,
zh:`是什么："我有一只猫"。复习：有 + 一 + 只 + 猫；动物用 只。
课上完整介绍：我有一只猫。我的猫叫 Oliver。它是橘色的。这只猫今天早上吃一条鱼。
发音：我有 读 wó yǒu。`}},
  {id:"fra-44",s:"我的猫叫 Oliver。",t:"我的貓叫 Oliver。",py:"wǒ de māo jiào Oliver",es:"mi gato se llama Oliver",en:"my cat is called Oliver",cl:"c3",say:"我的猫叫",
   x:{
es:`QUÉ ES: «mi gato se llama Oliver». Segunda oración de la presentación de clase.

CÓMO SE ARMA:
我的猫 mi gato (posesivo con 的: con animales el 的 se deja).
叫 se llama (el mismo 叫 de 我叫).
Oliver.

LO QUE MUESTRA: 叫 sirve para cualquier sujeto, no solo personas. Como no hay conjugación, «me llamo», «se llama», «nos llamamos» son todos 叫.

POR QUÉ UNA ORACIÓN NUEVA: en español dirías «tengo un gato que se llama Oliver». En chino se corta: 我有一只猫。我的猫叫 Oliver。 Michelle: las oraciones chinas son más cortas, y el sujeto se repite.

PREGUNTA QUE LA PROVOCA: 你的猫叫什么名字？

PRONUNCIACIÓN: wǒ de māo jiào Oliver.`,
en:`WHAT IT IS: "my cat is called Oliver". The second sentence of the class introduction.

HOW IT'S BUILT:
我的猫 my cat (possessive with 的: with animals 的 stays).
叫 is called (the same 叫 as in 我叫).
Oliver.

WHAT IT SHOWS: 叫 works for any subject, not just people. With no conjugation, "I'm called", "it's called", "we're called" are all 叫.

WHY A NEW SENTENCE: in English you'd say "I have a cat called Oliver". Chinese cuts it: 我有一只猫。我的猫叫 Oliver。 Michelle: Chinese sentences are shorter, and the subject is repeated.

THE QUESTION IT ANSWERS: 你的猫叫什么名字？

PRONUNCIATION: wǒ de māo jiào Oliver.`,
zh:`是什么："我的猫叫 Oliver"。叫 可以用于任何主语。西班牙语会说"我有一只叫 Oliver 的猫"，中文分成两个短句，主语重复。`}},
  {id:"fra-45",s:"它是橘色的。",py:"tā shì júsè de",es:"es naranja",en:"it's orange",cl:"c3",
   x:{
es:`QUÉ ES: «es naranja» (hablando de Oliver). Tercera oración de la presentación.

TRES COSAS NUEVAS:
1. 它 «ello»: el pronombre para animales y cosas (it). Suena igual que 他 y 她 (tā). Michelle: «it es como 它».
2. EL SUJETO NO SE PUEDE SACAR: en español decís «es naranja» sin sujeto. En chino no existe el sujeto tácito: hay que decir 它. Michelle: «no puede ir sin sujeto».
3. EL 的 FINAL: 是 + color + 的 = «es de color…». El 的 convierte 橘色 en adjetivo. Sin artículo: en clase preguntaste si iba artículo, y no.

LOS CARACTERES:
它: originalmente el dibujo de una cobra con la cabeza levantada (por eso está en 蛇, serpiente).
橘色: 橘 (木 árbol + 矞: la mandarina) + 色 (color, originalmente el color de la cara).

PRONUNCIACIÓN: tā shì júsè de.`,
en:`WHAT IT IS: "it's orange" (about Oliver). The third sentence of the introduction.

THREE NEW THINGS:
1. 它 "it": the pronoun for animals and things. Sounds the same as 他 and 她 (tā). Michelle: "it is 它".
2. THE SUBJECT CAN'T BE DROPPED: Chinese has no implied subject, so you must say 它. Michelle: "it can't go without a subject".
3. THE FINAL 的: 是 + colour + 的 = "is …-coloured". 的 turns 橘色 into an adjective. No article: in class you asked whether an article was needed, and it isn't.

THE CHARACTERS:
它: originally a drawing of a cobra with its head raised (that's why it's in 蛇, snake).
橘色: 橘 (木 tree + 矞: tangerine) + 色 (colour, originally the colour of the face).

PRONUNCIATION: tā shì júsè de.`,
zh:`是什么："它是橘色的"。三个重点：它 指动物和东西；主语不能省；是 + 颜色 + 的，句末的 的 让颜色变成形容词，不需要冠词。`}},
  {id:"fra-46",s:"这只猫今天早上吃一条鱼。",t:"這隻貓今天早上吃一條魚。",py:"zhè zhī māo jīntiān zǎoshang chī yì tiáo yú",es:"el gato comió un pescado esta mañana",en:"the cat ate a fish this morning",cl:"c3",
   x:{
es:`QUÉ ES: la última oración de la presentación de Oliver, y la más completa de la clase 3.

PIEZA POR PIEZA:
这只猫 el gato (这 este + 只 + 猫: así se dice «el», porque no hay artículo).
今天早上 esta mañana (今天 hoy + 早上 a la mañana).
吃 comer.
一条鱼 un pez (一 + 条, clasificador de cosas largas, + 鱼).

EL ORDEN: sujeto → tiempo → verbo → objeto. El tiempo va DESPUÉS del sujeto, no al final como en español. Michelle: «el tiempo va después del sujeto».

DOS ARTÍCULOS DISTINTOS EN LA MISMA ORACIÓN:
«EL gato» (definido) → 这只猫
«UN pescado» (indefinido) → 一条鱼

¿Y EL PASADO? 吃 no cambia; el pasado lo da 今天早上. Así está en el apunte de Michelle. Para una acción terminada, el chino muchas veces agrega 了 después del verbo (吃了): buena pregunta para cuando vean la estructura de las oraciones.

PRONUNCIACIÓN: zhè zhī māo jīntiān zǎoshang chī yì tiáo yú.`,
en:`WHAT IT IS: the last sentence of Oliver's introduction, and the most complete one in class 3.

PIECE BY PIECE:
这只猫 the cat (这 this + 只 + 猫: this is how "the" is said, since there's no article).
今天早上 this morning (今天 today + 早上 in the morning).
吃 to eat.
一条鱼 a fish (一 + 条, measure word for long things, + 鱼).

THE ORDER: subject → time → verb → object. Time goes AFTER the subject, not at the end as in English. Michelle: "time goes after the subject".

TWO DIFFERENT ARTICLES IN ONE SENTENCE:
"THE cat" (definite) → 这只猫
"A fish" (indefinite) → 一条鱼

AND THE PAST TENSE? 吃 doesn't change; the past comes from 今天早上. That's how it is in Michelle's handout. For a completed action Chinese often adds 了 after the verb (吃了): a good question for when you cover sentence structure.

PRONUNCIATION: zhè zhī māo jīntiān zǎoshang chī yì tiáo yú.`,
zh:`是什么：介绍 Oliver 的最后一句。语序：主语（这只猫）→ 时间（今天早上）→ 动词（吃）→ 宾语（一条鱼）。同一句里有"the"（这只猫）和"a"（一条鱼）。动词不变，过去由时间词表示；完成的动作常加 了（吃了）。`}},
  {id:"fra-50",s:"滚石不生苔",t:"滾石不生苔",py:"gǔn shí bù shēng tái",es:"piedra que rueda no cría musgo",en:"a rolling stone gathers no moss",cl:"c1",
   x:{
es:`QUÉ ES: el proverbio que Michelle mencionó en la clase 1: el mismo que el inglés «a rolling stone gathers no moss». Una persona que cambia constantemente no acumula nada.

POR QUÉ LO MENCIONÓ: en chino los proverbios se usan TODO el tiempo, en las noticias, en los diarios y en la calle. Michelle dijo que mucha gente que estudia chino no entiende las noticias o las películas porque le faltan los proverbios. Cada uno tiene un origen histórico y se aprende de memoria.

PALABRA POR PALABRA:
滚 rodar: 氵 (agua, tres gotas) + 衮 (sonido). Como el agua que corre y da vueltas.
石 piedra: 厂 (un acantilado) con 口 (una roca) al pie.
不 no.
生 crecer, nacer: un brote saliendo de la tierra (la línea de abajo es el suelo).
苔 musgo: 艹 (planta) + 台 (sonido).
«Piedra rodante no hace crecer musgo».

PRONUNCIACIÓN: gǔn shí bù shēng tái. Acá 不 queda en bù (cuarto tono) porque 生 es primer tono; solo cambia a bú antes de otro cuarto tono.`,
en:`WHAT IT IS: the proverb Michelle mentioned in class 1: the same as the English "a rolling stone gathers no moss". Someone always on the move doesn't accumulate anything.

WHY SHE MENTIONED IT: Chinese uses proverbs ALL the time, in the news, in newspapers and on the street. Michelle said many learners can't follow the news or films because they lack the proverbs. Each has a historical origin and is learned by heart.

WORD BY WORD:
滚 to roll: 氵 (water, three drops) + 衮 (sound). Like water running and swirling.
石 stone: 厂 (a cliff) with 口 (a rock) at its foot.
不 not.
生 to grow, to be born: a sprout coming out of the soil (the bottom line is the ground).
苔 moss: 艹 (plant) + 台 (sound).
"Rolling stone doesn't grow moss".

PRONUNCIATION: gǔn shí bù shēng tái. Here 不 stays bù (4th tone) because 生 is a 1st tone; it only changes to bú before another 4th tone.`,
zh:`是什么：第一课提到的谚语，和英文 a rolling stone gathers no moss 一样。中文日常、新闻里常用成语谚语，每个都有来历，要背下来。
逐字：滚（氵 + 衮）、石（厂 山崖下一块石头）、不、生（破土的芽）、苔（艹 + 台）。
生 是第一声，所以 不 读 bù。`}}
  ]
});
