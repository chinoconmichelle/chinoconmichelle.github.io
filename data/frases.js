/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   w optional writing tip {es, en, zh} (shown on the stroke-order page),
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"frases", glyph:"问",
  name:{"es": "Preguntas y oraciones", "en": "Questions & sentences", "zh": "问句与句子"},
  cl:"c2",
  cards:[
  {id:"fra-01",s:"是",py:"shì",es:"ser",en:"to be",
   x:{
es:`QUÉ ES: el verbo «ser» cuando une dos cosas: 我是瓦迪铭 (wǒ shì Wǎ Dí Míng) soy Vladimir · 他是我爸爸 (tā shì wǒ bàba) él es mi papá · 他是老师 (tā shì lǎoshī) él es profesor.

LO MÁS IMPORTANTE: en chino los verbos NO se conjugan. 是 (shì) es igual para todas las personas y todos los tiempos: 我是 (wǒ shì), 你是 (nǐ shì), 他是 (tā shì), 我们是 (wǒmen shì). Michelle: «no tenés conjugación verbal», por eso el sujeto siempre tiene que estar (no se puede decir solo «es profesor» como en español).

OJO, NO ES «ESTAR»: para «estoy bien» no se usa 是 (shì) sino 很 (hěn): 我很好 (wǒ hěn hǎo). Y con colores se agrega 的 (de): 它是橘色的 (tā shì júsè de).

EL CARÁCTER:
日 (rì) arriba: el sol, un círculo con un punto en el centro que con el tiempo se cuadró.
正 (zhèng) abajo: «correcto, derecho» = 一 (yī, una línea de meta) sobre 止 (zhǐ, la huella de un pie). El pie que va derecho a la meta.
«Lo que es tan derecho y cierto como el sol»: de ahí «ser, sí, correcto». También significa «sí»: 是的 (shì de) = sí, así es.

PRONUNCIACIÓN: shì, cuarto tono, con la lengua curvada hacia atrás. No confundir con 四 sì (cuatro, lengua plana) ni con 十 shí (diez, segundo tono).`,
en:`WHAT IT IS: the verb "to be" when it links two things: 我是瓦迪铭 (wǒ shì Wǎ Dí Míng) I'm Vladimir · 他是我爸爸 (tā shì wǒ bàba) he's my dad · 他是老师 (tā shì lǎoshī) he's a teacher.

THE KEY POINT: Chinese verbs are NOT conjugated. 是 (shì) is the same for every person and every tense: 我是 (wǒ shì), 你是 (nǐ shì), 他是 (tā shì), 我们是 (wǒmen shì). Michelle: "there's no verb conjugation", which is why the subject must always be there.

CAREFUL: it isn't used for "I'm fine". That's 很 (hěn): 我很好 (wǒ hěn hǎo). And with colours you add 的 (de): 它是橘色的 (tā shì júsè de).

THE CHARACTER:
日 (rì) on top: the sun, a circle with a dot in the middle that became square over time.
正 (zhèng) below: "correct, straight" = 一 (yī, a finish line) over 止 (zhǐ, a footprint). The foot going straight to the goal.
"What is as straight and true as the sun": hence "to be, yes, correct". It also means "yes": 是的 (shì de) = yes, that's right.

PRONUNCIATION: shì, 4th tone, tongue curled back. Don't confuse with 四 sì (four, flat tongue) or 十 shí (ten, 2nd tone).`,
zh:`是什么：连接两个成分的"是"：我是瓦迪铭、他是我爸爸。
重点：中文动词没有变位，我是、你是、他是都一样，所以主语不能省。
注意："我很好"不用 是；颜色要加 的：它是橘色的。
字形：日（太阳）+ 正（一 终点线 + 止 脚印，直奔目标）。像太阳一样正确，所以有"是、对"的意思。
发音：shì，第四声，卷舌；别和 四 sì、十 shí 混淆。`}},
  {id:"fra-02",s:"叫",py:"jiào",es:"llamarse, llamar",en:"to be called; to call",cl:"c1",
   x:{
es:`QUÉ ES: el verbo para decir cómo se llama alguien. 我叫瓦迪铭 (wǒ jiào Wǎ Dí Míng) me llamo Vladimir · 你叫什么名字？ (nǐ jiào shénme míngzi?) ¿cómo te llamás?

CÓMO FUNCIONA: en español decimos «me llamo» (reflexivo). En chino no hay «me»: se dice «yo llamar + nombre». Michelle: «wo jiao es yo llamar». Y como no hay conjugación, 叫 (jiào) sirve para todos: 我叫 (wǒ jiào), 你叫 (nǐ jiào), 他叫 (tā jiào), 我的猫叫 (wǒ de māo jiào) Oliver.

TAMBIÉN SIGNIFICA «LLAMAR A ALGUIEN / GRITAR»: 妈妈叫我 (māma jiào wǒ) mamá me llama.

EL CARÁCTER:
口 (kǒu, una boca abierta, dibujada como un rectángulo): avisa que es algo que se hace con la boca.
丩 (jiū, dos hilos enroscados): está solo por el sonido.
Una boca que llama en voz alta: el sentido original es gritar, llamar. De ahí «llamarse» = cómo te llaman.

PRONUNCIACIÓN: jiào, cuarto tono. La j es suave, con la lengua plana adelante (como la «ch» de «chico» pero más suave). No confundir con 校 xiào (escuela), que empieza con x.`,
en:`WHAT IT IS: the verb for saying what someone is called. 我叫瓦迪铭 (wǒ jiào Wǎ Dí Míng) my name is Vladimir · 你叫什么名字？ (nǐ jiào shénme míngzi?) what's your name?

HOW IT WORKS: English says "my name is" or "I'm called". Chinese says "I call + name". Michelle: "wo jiao is 'I call'". With no conjugation, 叫 (jiào) works for everyone: 我叫 (wǒ jiào), 你叫 (nǐ jiào), 他叫 (tā jiào), 我的猫叫 (wǒ de māo jiào) Oliver.

IT ALSO MEANS "TO CALL SOMEONE / TO SHOUT": 妈妈叫我 (māma jiào wǒ) mom is calling me.

THE CHARACTER:
口 (kǒu, an open mouth, drawn as a rectangle): tells you it's done with the mouth.
丩 (jiū, two twisted threads): only for the sound.
A mouth calling out loud: the original sense is to shout, to call. Hence "to be called" = what people call you.

PRONUNCIATION: jiào, 4th tone. j is soft, tongue flat and forward (like a soft "j" in "jeep"). Don't confuse with 校 xiào (school), which starts with x.`,
zh:`是什么：说名字用的动词：我叫瓦迪铭、你叫什么名字？没有变位：我叫、你叫、他叫、我的猫叫 Oliver。也有"喊、叫人"的意思：妈妈叫我。
字形：口（和嘴有关）+ 丩（表音）。本义是大声喊。
发音：jiào，第四声；别和 校 xiào 混淆。`}},
  {id:"fra-03",s:"吃",py:"chī",es:"comer",en:"to eat",cl:"c1",
   x:{
es:`QUÉ ES: «comer». Es el verbo de la primera oración que armó Michelle: 你吃苹果 (nǐ chī píngguǒ) comés manzana · 你吃苹果吗？ (nǐ chī píngguǒ ma?) ¿comés manzana?

SIN CONJUGACIÓN: 吃 (chī) sirve para como, comés, comió, comerá. El tiempo lo da el contexto o palabras como 今天早上 (jīntiān zǎoshang, esta mañana): 这只猫今天早上吃一条鱼 (zhè zhī māo jīntiān zǎoshang chī yì tiáo yú).

EL CARÁCTER:
口 (kǒu, boca) a la izquierda: todo lo que pasa por la boca lleva 口. 喝 (hē) beber, 叫 (jiào) llamar, 吗 (ma) la partícula de pregunta.
乞 (qǐ) a la derecha, solo por el sonido. 乞 solo significa «mendigar» (人 rén arriba, una persona pidiendo), pero acá no importa el significado.

PRONUNCIACIÓN: chī, primer tono, plano y largo (la bocina). ch con la lengua curvada atrás y con aire. Parecido pero distinto: 次 cì (vez), con la lengua plana.`,
en:`WHAT IT IS: "to eat". It's the verb in the first sentence Michelle built: 你吃苹果 (nǐ chī píngguǒ) you eat apples · 你吃苹果吗？ (nǐ chī píngguǒ ma?) do you eat apples?

NO CONJUGATION: 吃 (chī) covers eat, eats, ate, will eat. Time comes from context or words like 今天早上 (jīntiān zǎoshang, this morning): 这只猫今天早上吃一条鱼 (zhè zhī māo jīntiān zǎoshang chī yì tiáo yú).

THE CHARACTER:
口 (kǒu, mouth) on the left: everything that goes through the mouth has 口. 喝 (hē) to drink, 叫 (jiào) to call, 吗 (ma) the question particle.
乞 (qǐ) on the right, only for the sound. On its own 乞 means "to beg" (人 rén on top, a person asking), but the meaning doesn't matter here.

PRONUNCIATION: chī, 1st tone, flat and long (the car horn). ch with the tongue curled back and a puff of air. Similar but different: 次 cì (time, occurrence), flat tongue.`,
zh:`是什么："吃"，老师造的第一个句子：你吃苹果、你吃苹果吗？没有时态变化，时间靠上下文（今天早上）。
字形：口（和嘴有关：喝、叫、吗）+ 乞（表音）。
发音：chī，第一声，卷舌送气；别和 次 cì 混淆。`}},
  {id:"fra-04",s:"有",py:"yǒu",es:"tener; haber",en:"to have; there is / are",cl:"c3",
   x:{
es:`QUÉ ES: un verbo con dos usos, que Michelle explicó así: «cuando tiene sujeto es tener; cuando no tiene sujeto es haber».
CON SUJETO → tener: 我有一只猫 (wǒ yǒu yì zhī māo) tengo un gato · Michelle有 (yǒu)… Michelle tiene…
SIN SUJETO → hay: 在这个学校有两百个女学生 (zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng) en esta escuela HAY 200 alumnas.

CÓMO SE USA CON NÚMEROS: después de 有 (yǒu) viene número + clasificador + sustantivo: 我有一个男老师和两个女老师 (wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī).

LA NEGACIÓN ES ESPECIAL: no se niega con 不 (bù) sino con 没 (méi): 我没有猫 (wǒ méiyǒu māo) no tengo gato. (没 es el mismo de 没关系 méi guānxi.)

EL CARÁCTER:
Arriba 𠂇: la mano (una mano derecha estilizada).
Abajo 月 (yuè): acá NO es la luna, es 肉 (ròu, carne) escrito igual. Pasa mucho: 月 a la izquierda o abajo suele ser carne.
Una mano sosteniendo un pedazo de carne: tener algo, poseer.

PRONUNCIACIÓN: yǒu, tercer tono (baja y sube). Suena como «iou».`,
en:`WHAT IT IS: a verb with two uses, as Michelle explained: "with a subject it means to have; without a subject it means there is".
WITH A SUBJECT → to have: 我有一只猫 (wǒ yǒu yì zhī māo) I have a cat · Michelle有 (yǒu)… Michelle has…
WITHOUT A SUBJECT → there is/are: 在这个学校有两百个女学生 (zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng) at this school THERE ARE 200 female students.

WITH NUMBERS: after 有 (yǒu) comes number + measure word + noun: 我有一个男老师和两个女老师 (wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī).

ITS NEGATIVE IS SPECIAL: it's not negated with 不 but with 没 (méi): 我没有猫 (wǒ méiyǒu māo) I don't have a cat. (没 is the same as in 没关系 méi guānxi.)

THE CHARACTER:
On top 𠂇: the hand (a stylised right hand).
Below 月 (yuè): here it is NOT the moon, it's 肉 (ròu, meat) written the same way. This happens a lot: 月 on the left or bottom is often meat.
A hand holding a piece of meat: to have something, to own.

PRONUNCIATION: yǒu, 3rd tone (dips and rises). Sounds like "yo".`,
zh:`是什么：有主语时是"拥有"（我有一只猫），没有主语时是"存在"（在这个学校有两百个女学生）。后面接 数字 + 量词 + 名词。
否定用 没，不用 不：我没有猫。
字形：上面是手，下面的 月 其实是 肉：手里拿着肉。
发音：yǒu，第三声。`}},
  {id:"fra-05",s:"在",py:"zài",es:"en; estar en",en:"in, at; to be at",cl:"c3",
   x:{
es:`QUÉ ES: la palabra para decir DÓNDE: «en» o «estar en».
En clase: 在这个学校有 (zài zhè ge xuéxiào yǒu)… «EN esta escuela hay…». Michelle: «en es 在 (zài)».
También es verbo: 我在家 (wǒ zài jiā) estoy en casa · 他在学校 (tā zài xuéxiào) él está en la escuela.

POSICIÓN: el lugar con 在 (zài) va ANTES del verbo o al principio de la oración, nunca al final como en español.
En esta escuela hay 200 alumnas → 在这个学校有两百个女学生 (zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng).

EL CARÁCTER:
才 (cái, un brote que atraviesa el suelo: la línea horizontal es la tierra) + 土 (tǔ, tierra: una línea de suelo con un montículo encima).
Algo plantado y bien firme en su lugar: «estar en un sitio, existir ahí».

PRONUNCIACIÓN: zài, cuarto tono. z plana, sin aire. Es el mismo sonido que 再 (zài) de 再见 (zàijiàn), pero otro carácter: 再 = otra vez, 在 (zài) = en.`,
en:`WHAT IT IS: the word for saying WHERE: "in, at" or "to be at".
In class: 在这个学校有 (zài zhè ge xuéxiào yǒu)… "AT this school there are…". Michelle: "'in' is 在 (zài)".
It's also a verb: 我在家 (wǒ zài jiā) I'm at home · 他在学校 (tā zài xuéxiào) he's at school.

POSITION: the place with 在 (zài) goes BEFORE the verb or at the start of the sentence, never at the end as in English.
There are 200 female students at this school → 在这个学校有两百个女学生 (zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng).

THE CHARACTER:
才 (cái, a sprout breaking through the soil: the horizontal line is the ground) + 土 (tǔ, earth: a ground line with a mound on top).
Something planted firmly in its place: "to be somewhere, to exist there".

PRONUNCIATION: zài, 4th tone. Flat z, no puff of air. Same sound as 再 (zài) in 再见 (zàijiàn), but a different character: 再 = again, 在 (zài) = at.`,
zh:`是什么：表示地点："在"。在这个学校有……；我在家。地点放在动词前面或句首。
字形：才（破土的嫩芽）+ 土，牢牢种在某处。
发音：zài，第四声，和 再见 的 再 同音不同字。`}},
  {id:"fra-06",s:"和",py:"hé",es:"y (entre sustantivos)",en:"and (between nouns)",cl:"c3",
   x:{
es:`QUÉ ES: «y», para unir dos cosas o personas.
En clase: 一个男老师和两个女老师 (yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī) un profesor Y dos profesoras · 两百个女学生和二十个男学生 (liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng) 200 alumnas Y 20 alumnos.

LA LIMITACIÓN: 和 (hé) une SUSTANTIVOS (cosas, personas), no oraciones enteras. En español decís «tengo un gato Y se llama Oliver»; en chino eso se corta en dos oraciones: 我有一只猫。我的猫叫 (wǒ yǒu yì zhī māo, wǒ de māo jiào) Oliver。
Michelle lo mencionó: las oraciones chinas son más cortas, se cortan en vez de encadenarse.

EL CARÁCTER:
禾 (hé, una planta de cereal con la espiga caída hacia un lado) + 口 (kǒu, boca).
Originalmente «armonía»: voces que suenan juntas, en acuerdo. De «estar en armonía con» salió «junto con», y de ahí «y».
禾 también está en 秋 (qiū, otoño, la cosecha) y en 种 (zhǒng, semilla).

PRONUNCIACIÓN: hé, segundo tono (sube). La h china suena como una j española suave.`,
en:`WHAT IT IS: "and", for joining two things or people.
In class: 一个男老师和两个女老师 (yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī) one male teacher AND two female teachers · 两百个女学生和二十个男学生 (liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng) 200 female AND 20 male students.

THE LIMIT: 和 (hé) joins NOUNS (things, people), not whole sentences. In English you say "I have a cat AND it's called Oliver"; in Chinese that splits into two sentences: 我有一只猫。我的猫叫 (wǒ yǒu yì zhī māo, wǒ de māo jiào) Oliver。
Michelle mentioned it: Chinese sentences are shorter; they get cut rather than chained.

THE CHARACTER:
禾 (hé, a cereal plant with its ear drooping to one side) + 口 (kǒu, mouth).
Originally "harmony": voices sounding together, in agreement. From "in harmony with" came "together with", and from that "and".
禾 is also in 秋 (qiū, autumn, the harvest) and 种 (zhǒng, seed).

PRONUNCIATION: hé, 2nd tone (rising). The Chinese h sounds like a soft throaty h, as in the Spanish j.`,
zh:`是什么："和"，连接两个名词：一个男老师和两个女老师。不能连接两个句子，要分成两句：我有一只猫。我的猫叫 Oliver。
字形：禾（垂穗的谷物）+ 口，本义是声音和谐，引申为"跟、和"。
发音：hé，第二声。`}},
  {id:"fra-07",s:"谁",t:"誰",py:"shéi",es:"quién",en:"who",
   x:{
es:`QUÉ ES: «quién». 你是谁？ (nǐ shì shéi?) ¿quién sos? · 他是谁？ (tā shì shéi?) ¿quién es él?

LA REGLA DE LAS PREGUNTAS (muy importante): en chino la palabra de pregunta NO se mueve al principio como en español. Queda exactamente donde iría la respuesta.
Pregunta: 他是谁？ (tā shì shéi?, él es quién)
Respuesta: 他是我爸爸 (tā shì wǒ bàba, él es mi papá)
Solo cambiás 谁 (shéi) por la respuesta. Lo mismo con 什么 (shénme, qué).

EL CARÁCTER:
讠 (yán) a la izquierda: 言 (yán, hablar) aplastado. 言 es una boca 口 (kǒu) con líneas de sonido saliendo. Marca todo lo que tiene que ver con hablar: 谢 (xiè) agradecer, 说 (shuō) decir, 语 (yǔ) idioma.
隹 (zhuī) a la derecha: un pájaro de cola corta dibujado de perfil. Acá está solo por el sonido.
Una pregunta es algo que se dice: por eso el radical del habla.
En tradicional 誰 (shéi): 言 completo.

PRONUNCIACIÓN: shéi (lo más común al hablar) o shuí (más formal). Segundo tono, sube, como una pregunta.`,
en:`WHAT IT IS: "who". 你是谁？ (nǐ shì shéi?) who are you? · 他是谁？ (tā shì shéi?) who is he?

THE QUESTION RULE (very important): in Chinese the question word does NOT move to the front as in English. It stays exactly where the answer would go.
Question: 他是谁？ (tā shì shéi?, he is who)
Answer: 他是我爸爸 (tā shì wǒ bàba, he is my dad)
You just swap 谁 (shéi) for the answer. Same with 什么 (shénme, what).

THE CHARACTER:
讠 (yán) on the left: 言 (yán, speech), squeezed. 言 is a mouth 口 (kǒu) with lines of sound coming out. It marks anything to do with speaking: 谢 (xiè) to thank, 说 (shuō) to say, 语 (yǔ) language.
隹 (zhuī) on the right: a short-tailed bird in profile. Here only for the sound.
A question is something said: hence the speech radical.
In traditional 誰 (shéi): the full 言.

PRONUNCIATION: shéi (most common in speech) or shuí (more formal). 2nd tone, rising, like a question.`,
zh:`是什么："谁"：你是谁？他是谁？
疑问句规则：疑问词不移到句首，放在答案的位置：他是谁？→ 他是我爸爸。
字形：讠（言，和说话有关）+ 隹（短尾鸟，表音）。
发音：shéi（口语）或 shuí。`}},
  {id:"fra-08",s:"什么",t:"什麼",py:"shénme",es:"qué",en:"what",
   x:{
es:`QUÉ ES: «qué». 你叫什么名字？ (nǐ jiào shénme míngzi?) ¿cómo te llamás? (literalmente «vos llamar QUÉ nombre»).

LA MISMA REGLA QUE 谁 (shéi): 什么 (shénme) queda donde iría la respuesta.
你叫什么名字？ (nǐ jiào shénme míngzi?) → 我叫瓦迪铭 (wǒ jiào Wǎ Dí Míng). (什么名字 shénme míngzi se reemplaza por el nombre.)
También puede ir solo delante de un sustantivo: 什么名字 qué nombre · 什么书 (shénme shū) qué libro.

LOS CARACTERES: es una palabra gramatical armada por el sonido; no conviene buscarle lógica a las partes.
什 (shén): 亻 (rén, persona) + 十 (shí, diez, una cruz).
么 (me): 丿 (piě) + 厶 (sī), «pequeño».
En tradicional 麼 (me): 麻 (má, cáñamo, fibras colgando bajo un cobertizo) arriba + 幺 (yāo, un hilo fino) abajo. Tampoco tiene relación con «qué».
Mejor aprenderlo como bloque: shénme = qué.

PRONUNCIACIÓN: shénme, la segunda sílaba en tono neutro y muy corta: casi «shém-me». Sh con la lengua atrás.`,
en:`WHAT IT IS: "what". 你叫什么名字？ (nǐ jiào shénme míngzi?) what's your name? (literally "you call WHAT name").

SAME RULE AS 谁 (shéi): 什么 (shénme) stays where the answer would go.
你叫什么名字？ (nǐ jiào shénme míngzi?) → 我叫瓦迪铭 (wǒ jiào Wǎ Dí Míng). (什么名字 shénme míngzi is replaced by the name.)
It can also go right before a noun: 什么名字 what name · 什么书 (shénme shū) what book.

THE CHARACTERS: it's a grammatical word built from sound; it's not worth looking for logic in the parts.
什 (shén): 亻 (rén, person) + 十 (shí, ten, a cross).
么 (me): 丿 (piě) + 厶 (sī), "small".
Traditional 麼 (me): 麻 (má, hemp, fibres hanging under a shed) on top + 幺 (yāo, a fine thread) below. Also unrelated to "what".
Best learned as a block: shénme = what.

PRONUNCIATION: shénme, second syllable neutral tone and very short: almost "shem-muh". Sh with the tongue back.`,
zh:`是什么："什么"：你叫什么名字？疑问词放在答案的位置：你叫什么名字？→ 我叫瓦迪铭。
字形：按读音组合的虚词，不必分析字义（繁体 麼）。
发音：shénme，第二个字轻声。`}},
  {id:"fra-09",s:"名字",py:"míngzi",es:"nombre",en:"name",
   x:{
es:`QUÉ ES: «nombre». Aparece en la pregunta más útil: 你叫什么名字？ (nǐ jiào shénme míngzi?) ¿cómo te llamás?

LOS CARACTERES:
名 (míng) nombre: 夕 (xī) arriba (una media luna: el atardecer, la noche) + 口 (kǒu) abajo (una boca).
La historia clásica: de noche, en la oscuridad, no te ven la cara, así que tenés que decir tu nombre con la boca para que te reconozcan.
字 (zì) carácter escrito, palabra: 宀 (mián) arriba (un techo de dos aguas) + 子 (zǐ) abajo (un bebé).
Un niño bajo el techo de la casa: el nombre que se le pone al hijo en la familia. De ahí «palabra escrita».
名字 (míngzi) = «el nombre (que se dice) + el nombre (que se escribe)».

OTROS USOS: 名 (míng) aparece en tu nombre chino, 铭 (míng, grabar el nombre en metal: 钅 jīn + 名). 字 (zì) aparece en 数字 (shùzì, número) y en 汉字 (hànzì, caracteres chinos).

PRONUNCIACIÓN: míngzi. Segundo tono y después neutro, cortito.`,
en:`WHAT IT IS: "name". It's in the most useful question: 你叫什么名字？ (nǐ jiào shénme míngzi?) what's your name?

THE CHARACTERS:
名 (míng) name: 夕 (xī) on top (a half moon: dusk, night) + 口 (kǒu) below (a mouth).
The classic story: at night, in the dark, nobody can see your face, so you have to say your name out loud to be recognised.
字 (zì) written character, word: 宀 (mián) on top (a gabled roof) + 子 (zǐ) below (a baby).
A child under the family roof: the name given to a son in the household. Hence "written word".
名字 (míngzi) = "the name (spoken) + the name (written)".

OTHER USES: 名 (míng) is in your Chinese name, 铭 (míng, engraving the name in metal: 钅 jīn + 名). 字 (zì) is in 数字 (shùzì, number) and 汉字 (hànzì, Chinese characters).

PRONUNCIATION: míngzi. 2nd tone then a short neutral tone.`,
zh:`是什么："名字"：你叫什么名字？
字形：名：夕（傍晚）+ 口，天黑看不见脸，要说出名字别人才认得。字：宀 + 子，家里给孩子取名，引申为文字。
其他：铭（钅 + 名）、数字、汉字。
发音：míngzi，第二个字轻声。`}},
  {id:"fra-10",s:"学校",t:"學校",py:"xuéxiào",es:"escuela",en:"school",cl:"c3",
   x:{
es:`QUÉ ES: «escuela». Salió en la oración de la clase 3: 在这个学校有两百个女学生和二十个男学生 (zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng).

LOS CARACTERES:
学 (xué) estudiar: arriba, dos manos de un adulto (en tradicional 學 xué se ven bien, con 爻 yáo en el medio: los palitos que se usaban para enseñar); en el medio 冖 (mì), un techo; abajo 子 (zǐ), un niño.
Un adulto que con sus manos le enseña a un niño bajo un techo: estudiar, aprender.
校 (xiào) escuela: 木 (mù, árbol, madera) + 交 (jiāo, cruzar: una persona con las piernas cruzadas).
Una empalizada de troncos cruzados, un recinto cerrado: el lugar donde se enseña.

FAMILIA DE PALABRAS: el mismo 学 (xué) está en 学生 (xuéshēng, alumno: «el que crece estudiando») y en 同学 (tóngxué, compañero de clase: «mismo estudio»).

PRONUNCIACIÓN: xuéxiào. Sube y después cae. Las dos con x: lengua plana adelante, como una s suave.
CUIDADO: 校 xiào ≠ 叫 jiào (llamarse). Suenan parecido, pero uno empieza con x y el otro con j.`,
en:`WHAT IT IS: "school". It came up in the class 3 sentence: 在这个学校有两百个女学生和二十个男学生 (zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng).

THE CHARACTERS:
学 (xué) to study: on top, an adult's two hands (clear in traditional 學 xué, with 爻 yáo in the middle: the sticks used for teaching); in the middle 冖 (mì), a roof; below 子 (zǐ), a child.
An adult teaching a child with their hands under a roof: to study, to learn.
校 (xiào) school: 木 (mù, tree, wood) + 交 (jiāo, to cross: a person with crossed legs).
A stockade of crossed logs, an enclosure: the place where teaching happens.

WORD FAMILY: the same 学 (xué) is in 学生 (xuéshēng, student: "the one who grows by studying") and 同学 (tóngxué, classmate: "same study").

PRONUNCIATION: xuéxiào. Rises then falls. Both with x: tongue flat and forward, like a soft s.
CAREFUL: 校 xiào ≠ 叫 jiào (to be called). They sound alike, but one starts with x and the other with j.`,
zh:`是什么："学校"，第三课的句子：在这个学校有……
字形：学：大人的两只手（繁体 學 中间有 爻）+ 冖 + 子，在屋子里教孩子。校：木 + 交，交叉的木栅栏围成的地方。
同一家族：学生、同学。
发音：xuéxiào；校 xiào 和 叫 jiào 不同。`}},
  {id:"fra-11",s:"今天",py:"jīntiān",es:"hoy",en:"today",cl:"c3",
   x:{
es:`QUÉ ES: «hoy». Parte de 今天早上 (jīntiān zǎoshang, esta mañana), en la oración del gato.

LOS CARACTERES:
今 (jīn) ahora: un techo triangular 亼 (jí) con un trazo debajo. Una lectura habitual es «cubrir, encerrar el momento presente», pero el origen del dibujo se discute. Michelle (clase 4): 今 es «ahora, en el mismo momento».
天 (tiān) cielo, día: 大 (dà, una persona vista de frente con los brazos abiertos) con 一 (yī) encima de la cabeza. Lo que está arriba de la persona: el cielo. Y como el cielo marca los días, también «día».
今天 (jīntiān) = «el día de ahora».

DÓNDE VA EN LA ORACIÓN: las palabras de tiempo van al principio o justo después del sujeto, nunca al final como en español.
Esta mañana el gato comió… → 这只猫今天早上吃 (zhè zhī māo jīntiān zǎoshang chī)…

PAREJAS ÚTILES: 明天 míngtiān mañana (el día que viene) · 昨天 zuótiān ayer.

PRONUNCIACIÓN: jīntiān, dos primeros tonos: planos y altos, como la bocina. t con aire.`,
en:`WHAT IT IS: "today". Part of 今天早上 (jīntiān zǎoshang, this morning), in the cat sentence.

THE CHARACTERS:
今 (jīn) now (Michelle, class 4: "now, this very moment"; the origin of the drawing is disputed): a triangular roof 亼 (jí) with a stroke underneath. Covering, enclosing the present moment: "now".
天 (tiān) sky, day: 大 (dà, a person seen from the front with arms spread) with 一 (yī) above the head. What's above the person: the sky. And since the sky marks the days, also "day".
今天 (jīntiān) = "the day of now".

WHERE IT GOES: time words go at the start or right after the subject, never at the end as in English.
The cat ate … this morning → 这只猫今天早上吃 (zhè zhī māo jīntiān zǎoshang chī)…

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
今天 (jīntiān) hoy: 今 (jīn, ahora) + 天 (tiān, cielo, día).
早上 (zǎoshang) a la mañana: 早 (zǎo, el sol 日 rì sobre el horizonte: temprano) + 上 (shàng, arriba).
Michelle aclaró la confusión del español: 早上 es «la mañana» (morning), no «mañana» (el día siguiente, que es 明天 míngtiān).

EL ORDEN IMPORTA: en chino el tiempo va DESPUÉS del sujeto y ANTES del verbo.
Español: El gato comió un pescado esta mañana.
Chino: 这只猫 (zhè zhī māo) 今天早上 (jīntiān zǎoshang) 吃 (chī) 一条鱼 (yì tiáo yú, el gato / esta mañana / comer / un pez).
Michelle: «este es sujeto; el tiempo va después del sujeto».
También puede ir al principio: 今天早上这只猫吃一条鱼 (jīntiān zǎoshang zhè zhī māo chī yì tiáo yú).

PRONUNCIACIÓN: jīntiān zǎoshang. zǎo tercer tono; shang en tono neutro.`,
en:`WHAT IT IS: "this morning". Literally "today + in the morning".

THE PIECES:
今天 (jīntiān) today: 今 (jīn, now) + 天 (tiān, sky, day).
早上 (zǎoshang) in the morning: 早 (zǎo, the sun 日 rì above the horizon: early) + 上 (shàng, up).
Michelle cleared up a Spanish confusion: 早上 is "morning", not "tomorrow" (that's 明天 míngtiān).

WORD ORDER MATTERS: in Chinese, time goes AFTER the subject and BEFORE the verb.
English: The cat ate a fish this morning.
Chinese: 这只猫 (zhè zhī māo) 今天早上 (jīntiān zǎoshang) 吃 (chī) 一条鱼 (yì tiáo yú, the cat / this morning / eat / a fish).
Michelle: "this is the subject; time goes after the subject".
It can also go first: 今天早上这只猫吃一条鱼 (jīntiān zǎoshang zhè zhī māo chī yì tiáo yú).

PRONUNCIATION: jīntiān zǎoshang. zǎo 3rd tone; shang neutral tone.`,
zh:`是什么："今天早上"。早上 是 morning，不是"明天"。
语序：时间放在主语后、动词前：这只猫今天早上吃一条鱼；也可以放句首。
发音：jīntiān zǎoshang。`}},
  {id:"fra-13",s:"橘色",py:"júsè",es:"naranja (color)",en:"orange (colour)",cl:"c3",
   x:{
es:`QUÉ ES: el color naranja. Salió al describir a Oliver: 它是橘色的 (tā shì júsè de) es naranja.

LOS CARACTERES:
橘 (jú) mandarina: 木 (mù, árbol) + 矞 (yù, solo por el sonido). El árbol que da mandarinas.
色 (sè) color: originalmente el dibujo de una persona inclinada sobre otra; significaba «el semblante, el color de la cara». De ahí «color» en general.
橘色 (júsè) = «color mandarina». En chino el naranja se nombra por la mandarina, no por la naranja.

CÓMO SE USA: para decir que algo ES de un color, se pone 是 (shì) + color + 的 (de): 它是橘色的 (tā shì júsè de). El 的 del final convierte el color en adjetivo («de color naranja»).

OTROS COLORES CON 色 (sè): 红色 (hóngsè) rojo · 白色 (báisè) blanco · 黑色 (hēisè) negro.

PRONUNCIACIÓN: júsè. Segundo y cuarto tono. La ü de jú se escribe sin puntos después de j.`,
en:`WHAT IT IS: the colour orange. It came up describing Oliver: 它是橘色的 (tā shì júsè de) it's orange.

THE CHARACTERS:
橘 (jú) tangerine: 木 (mù, tree) + 矞 (yù, sound only). The tree that bears tangerines.
色 (sè) colour: originally one person bending over another; it meant "countenance, the colour of the face". Hence "colour" in general.
橘色 (júsè) = "tangerine colour". Chinese names orange after the tangerine.

HOW IT'S USED: to say something IS a colour, use 是 (shì) + colour + 的 (de): 它是橘色的 (tā shì júsè de). The final 的 turns the colour into an adjective ("orange-coloured").

OTHER COLOURS WITH 色 (sè): 红色 (hóngsè) red · 白色 (báisè) white · 黑色 (hēisè) black.

PRONUNCIATION: júsè. 2nd and 4th tones. The ü in jú is written without dots after j.`,
zh:`是什么：橘色，描述 Oliver：它是橘色的。
字形：橘：木 + 矞（表音）；色：本义是脸色，引申为颜色。
用法：是 + 颜色 + 的。其他颜色：红色、白色、黑色。`}},
  {id:"fra-20",s:"你叫什么名字？",t:"你叫什麼名字？",py:"nǐ jiào shénme míngzi?",es:"¿cómo te llamás?",en:"what's your name?",
   x:{
es:`QUÉ ES: la pregunta para saber el nombre de alguien. Palabra por palabra:
你 (nǐ) vos · 叫 (jiào) llamar · 什么 (shénme) qué · 名字 (míngzi) nombre → «¿vos llamar qué nombre?»

POR QUÉ ESTE ORDEN: en chino la pregunta tiene el mismo orden que la respuesta. Solo cambiás la palabra de pregunta por el dato:
你叫什么名字？ (nǐ jiào shénme míngzi?)
我叫瓦迪铭。 (wǒ jiào Wǎ Dí Míng)
No hace falta 吗 (ma): la pregunta ya tiene 什么 (shénme). (吗 es solo para preguntas de sí o no.)

CAMBIANDO EL SUJETO sale todo lo demás, sin conjugar nada:
他叫什么名字？ (tā jiào shénme míngzi?) ¿cómo se llama él?
你的猫叫什么名字？ (nǐ de māo jiào shénme míngzi?) ¿cómo se llama tu gato?

LOS CARACTERES: 你 (nǐ, 亻 rén persona + 尔 ěr) · 叫 (jiào, 口 kǒu boca + 丩 jiū: llamar en voz alta) · 什么 (shénme, palabra de sonido) · 名 (míng, 夕 xī noche + 口 boca) 字 (zì, 宀 mián techo + 子 zǐ niño).

PRONUNCIACIÓN: nǐ jiào shénme míngzi. Más formal: 您贵姓？ (nín guìxìng, ¿cuál es su apellido?), para gente mayor.`,
en:`WHAT IT IS: the question for asking someone's name. Word by word:
你 (nǐ) you · 叫 (jiào) call · 什么 (shénme) what · 名字 (míngzi) name → "you call what name?"

WHY THIS ORDER: in Chinese the question has the same order as the answer. You just swap the question word for the information:
你叫什么名字？ (nǐ jiào shénme míngzi?)
我叫瓦迪铭。 (wǒ jiào Wǎ Dí Míng)
No 吗 (ma) needed: the question already has 什么 (shénme). (吗 is only for yes/no questions.)

CHANGE THE SUBJECT and everything else follows, with nothing to conjugate:
他叫什么名字？ (tā jiào shénme míngzi?) what's his name?
你的猫叫什么名字？ (nǐ de māo jiào shénme míngzi?) what's your cat's name?

THE CHARACTERS: 你 (nǐ, 亻 rén person + 尔 ěr) · 叫 (jiào, 口 kǒu mouth + 丩 jiū: calling out) · 什么 (shénme, sound word) · 名 (míng, 夕 xī night + 口 mouth) 字 (zì, 宀 mián roof + 子 zǐ child).

PRONUNCIATION: nǐ jiào shénme míngzi. More formal: 您贵姓？ (nín guìxìng, what's your surname?), for older people.`,
zh:`是什么：问名字的句子。问句和答句语序一样：你叫什么名字？→ 我叫瓦迪铭。有 什么 就不用 吗。换主语就行：他叫什么名字？你的猫叫什么名字？更正式：您贵姓？`}},
  {id:"fra-21",s:"他叫什么名字？",t:"他叫什麼名字？",py:"tā jiào shénme míngzi?",es:"¿cómo se llama él?",en:"what's his name?",
   x:{
es:`QUÉ ES: «¿cómo se llama él?». Es 你叫什么名字？ (nǐ jiào shénme míngzi?) cambiando 你 (nǐ, vos) por 他 (tā, él).

LO QUE ENSEÑA: como el chino no conjuga, para cambiar de persona solo cambiás el pronombre. En español cambia todo (te llamás → se llama); en chino no cambia nada más.
你叫什么名字？ (nǐ jiào shénme míngzi?) ¿cómo te llamás?
他叫什么名字？ (tā jiào shénme míngzi?) ¿cómo se llama él?
她叫什么名字？ (tā jiào shénme míngzi) ¿cómo se llama ella? (suena igual)

LA RESPUESTA: 他叫 (tā jiào) + nombre. Por ejemplo 他叫 Luis.

EL PRONOMBRE: 他 (tā) = 亻 (rén, persona) + 也 (yě, sonido). Michelle lo usa también de forma neutra para «ella».

PRONUNCIACIÓN: tā jiào shénme míngzi. tā primer tono, alto y plano, con la t aspirada (con aire).`,
en:`WHAT IT IS: "what's his name?". It's 你叫什么名字？ (nǐ jiào shénme míngzi?) with 你 (nǐ, you) swapped for 他 (tā, he).

WHAT IT TEACHES: since Chinese doesn't conjugate, changing the person means changing only the pronoun. Nothing else moves.
你叫什么名字？ (nǐ jiào shénme míngzi?) what's your name?
他叫什么名字？ (tā jiào shénme míngzi?) what's his name?
她叫什么名字？ (tā jiào shénme míngzi) what's her name? (sounds the same)

THE ANSWER: 他叫 (tā jiào) + name. E.g. 他叫 Luis.

THE PRONOUN: 他 (tā) = 亻 (rén, person) + 也 (yě, sound). Michelle also uses it neutrally for "she".

PRONUNCIATION: tā jiào shénme míngzi. tā 1st tone, high and flat, aspirated t (with a puff of air).`,
zh:`是什么：把 你 换成 他。中文没有变位，只换代词。回答：他叫 Luis。`}},
  {id:"fra-22",s:"你的猫叫什么名字？",t:"你的貓叫什麼名字？",py:"nǐ de māo jiào shénme míngzi?",es:"¿cómo se llama tu gato?",en:"what's your cat's name?",cl:"c3",
   x:{
es:`QUÉ ES: la pregunta que hizo Michelle cuando apareció Oliver en clase.

CÓMO SE ARMA: el sujeto ahora es «tu gato» = 你的猫 (nǐ de māo). El resto es la pregunta de siempre.
你的猫 (tu gato) + 叫 (jiào, llamar) + 什么名字 (shénme míngzi, qué nombre).

EL POSESIVO 的 (de): 你的 (nǐ de) = «tu». Funciona como el apóstrofe s del inglés: you's cat. Michelle: «el 的 es como el 's».
(Con familiares se puede sacar el 的: 你妈妈 nǐ māma. Con animales y cosas se deja: 你的猫 nǐ de māo.)

LA RESPUESTA DE CLASE: 我的猫叫 (wǒ de māo jiào) Oliver. mi gato se llama Oliver.

LOS CARACTERES: 猫 (māo) = 犭 (quǎn, animal de cuatro patas) + 苗 (sonido miáo, como el maullido).

PRONUNCIACIÓN: nǐ de māo jiào shénme míngzi. 的 (de) en tono neutro, muy corto.`,
en:`WHAT IT IS: the question Michelle asked when Oliver showed up in class.

HOW IT'S BUILT: the subject is now "your cat" = 你的猫 (nǐ de māo). The rest is the usual question.
你的猫 (your cat) + 叫 (jiào, call) + 什么名字 (shénme míngzi, what name).

THE POSSESSIVE 的 (de): 你的 (nǐ de) = "your". It works like English 's. Michelle: "的 is like 's".
(With family members you can drop 的: 你妈妈 nǐ māma. With animals and things you keep it: 你的猫 nǐ de māo.)

THE CLASS ANSWER: 我的猫叫 (wǒ de māo jiào) Oliver. my cat is called Oliver.

THE CHARACTERS: 猫 (māo) = 犭 (quǎn, four-legged animal) + 苗 (sound miáo, like the miaow).

PRONUNCIATION: nǐ de māo jiào shénme míngzi. 的 (de) neutral tone, very short.`,
zh:`是什么：Oliver 出现时老师问的问题。主语是 你的猫，的 相当于英文 's。亲属可以省 的（你妈妈），动物和东西不省（你的猫）。回答：我的猫叫 Oliver。`}},
  {id:"fra-23",s:"你是谁？",t:"你是誰？",py:"nǐ shì shéi?",es:"¿quién sos?",en:"who are you?",
   x:{
es:`QUÉ ES: «¿quién sos?». Palabra por palabra: 你 (nǐ) vos · 是 (shì) ser · 谁 (shéi) quién → «vos sos quién».

LA REGLA: la palabra de pregunta (谁 shéi) va donde iría la respuesta, al final. No se mueve al principio como en español.
你是谁？ (nǐ shì shéi?) → 我是瓦迪铭。 (wǒ shì Wǎ Dí Míng)
Tampoco lleva 吗 (ma): 吗 es solo para preguntas de sí o no, y esta tiene su propia palabra de pregunta.

CUIDADO CON EL TONO SOCIAL: 你是谁？ (nǐ shì shéi?) es directa, casi brusca cara a cara. Para preguntar el nombre de manera amable se usa 你叫什么名字？ (nǐ jiào shénme míngzi?) En el teléfono o detrás de una puerta sí es normal.

LOS CARACTERES:
是 (shì) ser: 日 (rì, sol) + 正 (zhèng, el pie que va derecho): lo cierto.
谁 (shéi) quién: 讠 (yán, hablar) + 隹 (zhuī, un pájaro, solo por el sonido).

PRONUNCIACIÓN: nǐ shì shéi. shì cae, shéi sube.`,
en:`WHAT IT IS: "who are you?". Word by word: 你 (nǐ) you · 是 (shì) be · 谁 (shéi) who → "you are who".

THE RULE: the question word (谁 shéi) goes where the answer would, at the end. It doesn't move to the front as in English.
你是谁？ (nǐ shì shéi?) → 我是瓦迪铭。 (wǒ shì Wǎ Dí Míng)
No 吗 (ma) either: 吗 is only for yes/no questions, and this one has its own question word.

SOCIAL TONE: 你是谁？ (nǐ shì shéi?) is direct, almost blunt face to face. To ask someone's name politely use 你叫什么名字？ (nǐ jiào shénme míngzi?) On the phone or through a door it's normal.

THE CHARACTERS:
是 (shì) to be: 日 (rì, sun) + 正 (zhèng, the foot going straight): what's true.
谁 (shéi) who: 讠 (yán, speech) + 隹 (zhuī, a bird, only for the sound).

PRONUNCIATION: nǐ shì shéi. shì falls, shéi rises.`,
zh:`是什么："你是谁？"。疑问词放在答案的位置，不用 吗。当面问有点直接，客气一点问 你叫什么名字？`}},
  {id:"fra-24",s:"他是谁？",t:"他是誰？",py:"tā shì shéi?",es:"¿quién es él?",en:"who is he?",
   x:{
es:`QUÉ ES: «¿quién es él?». Es 你是谁？ (nǐ shì shéi?) cambiando 你 (nǐ) por 他 (tā).

CÓMO SE RESPONDE (lo practicaron en clase): se deja todo igual y se cambia 谁 (shéi) por la respuesta.
他是谁？ (tā shì shéi?) → 他是我爸爸 (tā shì wǒ bàba) él es mi papá.
他是谁？ → 他是我老板的弟弟 (tā shì wǒ lǎobǎn de dìdi) es el hermano menor de mi jefe.
他是谁？ → 他是一位老师 (tā shì yí wèi lǎoshī) es un profesor.

LO QUE ENSEÑA: con 是 (shì) + 谁 (shéi) podés preguntar por cualquier persona, y con los posesivos (的 de) responder con toda la cadena de relaciones.

LOS CARACTERES: 他 (tā, 亻 rén persona + 也 yě) · 是 (shì, 日 rì sol + 正 zhèng derecho) · 谁 (shéi, 讠 yán hablar + 隹 zhuī pájaro).

PRONUNCIACIÓN: tā shì shéi. Tres tonos distintos: alto, cae, sube.`,
en:`WHAT IT IS: "who is he?". It's 你是谁？ (nǐ shì shéi?) with 你 (nǐ) swapped for 他 (tā).

HOW TO ANSWER (practised in class): keep everything and swap 谁 (shéi) for the answer.
他是谁？ (tā shì shéi?) → 他是我爸爸 (tā shì wǒ bàba) he's my dad.
他是谁？ → 他是我老板的弟弟 (tā shì wǒ lǎobǎn de dìdi) he's my boss's younger brother.
他是谁？ → 他是一位老师 (tā shì yí wèi lǎoshī) he's a teacher.

WHAT IT TEACHES: with 是 (shì) + 谁 (shéi) you can ask about anyone, and with possessives (的 de) answer with a whole chain of relationships.

THE CHARACTERS: 他 (tā, 亻 rén person + 也 yě) · 是 (shì, 日 rì sun + 正 zhèng straight) · 谁 (shéi, 讠 yán speech + 隹 zhuī bird).

PRONUNCIATION: tā shì shéi. Three different tones: high, falling, rising.`,
zh:`是什么："他是谁？"。回答时把 谁 换成答案：他是我爸爸、他是我老板的弟弟、他是一位老师。`}},
  {id:"fra-25",s:"你妹妹的朋友叫什么名字？",t:"你妹妹的朋友叫什麼名字？",py:"nǐ mèimei de péngyǒu jiào shénme míngzi?",es:"¿cómo se llama el amigo de tu hermana?",en:"what's your younger sister's friend's name?",
   x:{
es:`QUÉ ES: la pregunta más larga de la clase 2, para practicar posesivos encadenados.

CÓMO SE ARMA: el sujeto es toda la parte antes de 叫 (jiào):
你妹妹 (nǐ mèimei) tu hermana menor (sin 的 de, porque es familiar)
+ 的 + 朋友 (péngyǒu) = el amigo de tu hermana menor
+ 叫什么名字 (jiào shénme míngzi) ¿cómo se llama?

EL ORDEN ES AL REVÉS QUE EN ESPAÑOL: el dueño va primero, como en inglés.
español: el amigo DE tu hermana
chino: tu hermana 的 (de) amigo (your sister's friend)

LA RESPUESTA: 我妹妹的朋友叫 (wǒ mèimei de péngyǒu jiào) Juan. Solo cambian 你 (nǐ)→我 (wǒ) y 什么名字 (shénme míngzi)→el nombre.

LOS CARACTERES:
妹 (mèi) hermana menor: 女 (nǚ, mujer) + 未 (wèi, todavía no: un árbol que no terminó de crecer). La hermana que todavía no creció.
朋友 (péngyǒu) amigo: 朋 (péng, dos sartas de conchas lado a lado) + 友 (yǒu, dos manos que van en la misma dirección).

PRONUNCIACIÓN: nǐ mèimei de péngyǒu jiào shénme míngzi.`,
en:`WHAT IT IS: the longest question from class 2, for practising chained possessives.

HOW IT'S BUILT: the subject is everything before 叫 (jiào):
你妹妹 (nǐ mèimei) your younger sister (no 的 de, since she's family)
+ 的 + 朋友 (péngyǒu) = your younger sister's friend
+ 叫什么名字 (jiào shénme míngzi) what's the name?

THE ORDER IS LIKE ENGLISH: the owner comes first.
your sister 的 (de) friend = your sister's friend

THE ANSWER: 我妹妹的朋友叫 (wǒ mèimei de péngyǒu jiào) Juan. Only 你 (nǐ)→我 (wǒ) and 什么名字 (shénme míngzi)→the name change.

THE CHARACTERS:
妹 (mèi) younger sister: 女 (nǚ, woman) + 未 (wèi, not yet: a tree that hasn't finished growing). The sister who hasn't grown up yet.
朋友 (péngyǒu) friend: 朋 (péng, two strings of shells side by side) + 友 (yǒu, two hands going the same way).

PRONUNCIATION: nǐ mèimei de péngyǒu jiào shénme míngzi.`,
zh:`是什么：第二课练习连续所有格的问句。主语：你妹妹（亲属不用 的）+ 的 + 朋友。所有者在前，和英文一样。回答：我妹妹的朋友叫 Juan。`}},
  {id:"fra-26",s:"你吃苹果吗？",t:"你吃蘋果嗎？",py:"nǐ chī píngguǒ ma?",es:"¿comés manzana?",en:"do you eat apples?",cl:"c1",
   x:{
es:`QUÉ ES: la primera pregunta que armó Michelle, para mostrar cómo funciona 吗 (ma).

LA REGLA DE 吗 (ma): tomás una afirmación y le agregás 吗 al final. Nada más cambia: ni el orden, ni el verbo.
你吃苹果。 (nǐ chī píngguǒ) comés manzana.
你吃苹果吗？ (nǐ chī píngguǒ ma?) ¿comés manzana?
Michelle: «吗 no tiene significado, pero si lo agregás al final de una afirmación, se convierte en pregunta de sí o no».

CÓMO SE RESPONDE: no hay «sí» ni «no» sueltos como en español. Se repite el verbo:
吃 (chī, como) = sí · 不吃 (bù chī, no como) = no.

LOS CARACTERES:
吗 (ma): 口 (kǒu, boca, algo que se dice) + 马 (mǎ, caballo, solo por el sonido; tradicional 嗎 ma con 馬 mǎ).
吃 (chī) comer: 口 + 乞 (qǐ, sonido).
苹果 (píngguǒ) manzana: 苹 (píng, 艹 cǎo hierba + 平 píng sonido) + 果 (guǒ, la fruta sobre el árbol 木 mù).

PRONUNCIACIÓN: nǐ chī píngguǒ ma. 吗 corto y sin tono.`,
en:`WHAT IT IS: the first question Michelle built, to show how 吗 (ma) works.

THE 吗 (ma) RULE: take a statement and add 吗 at the end. Nothing else changes: not the order, not the verb.
你吃苹果。 (nǐ chī píngguǒ) you eat apples.
你吃苹果吗？ (nǐ chī píngguǒ ma?) do you eat apples?
Michelle: "吗 has no meaning, but if you add it to the end of a statement, it becomes a yes/no question".

HOW TO ANSWER: there's no standalone "yes" or "no". You repeat the verb:
吃 (chī, I eat) = yes · 不吃 (bù chī, I don't eat) = no.

THE CHARACTERS:
吗 (ma): 口 (kǒu, mouth, something said) + 马 (mǎ, horse, sound only; traditional 嗎 ma with 馬 mǎ).
吃 (chī) to eat: 口 + 乞 (qǐ, sound).
苹果 (píngguǒ) apple: 苹 (píng, 艹 cǎo grass + 平 píng sound) + 果 (guǒ, the fruit on the tree 木 mù).

PRONUNCIATION: nǐ chī píngguǒ ma. 吗 short and toneless.`,
zh:`是什么：老师示范 吗 的第一个问句。规则：陈述句后面加 吗 就是是非问句，语序和动词都不变。回答时重复动词：吃 / 不吃。`}},
  {id:"fra-30",s:"我叫瓦迪铭。",t:"我叫瓦迪銘。",py:"wǒ jiào Wǎ Dí Míng",es:"me llamo Vladimir",en:"my name is Vladimir",
   x:{
es:`QUÉ ES: tu presentación en chino, con el nombre que te dio Michelle.

LA ESTRUCTURA: 我 (wǒ, yo) + 叫 (jiào, llamar) + nombre. Literalmente «yo llamar Vladimir».

TU NOMBRE CHINO, carácter por carácter:
瓦 wǎ: una teja curva de barro, el dibujo de dos tejas encajadas. Suena como la «Vla» de Vladimir.
迪 dí: 辶 (zǒu, el radical de caminar, un pie en un camino) + 由 (yóu, de, a partir de: sonido). Significa guiar, iluminar, abrir el camino.
铭 míng: 钅 (jīn, metal, forma aplastada de 金 jīn) + 名 (míng, nombre). Grabar un nombre en metal para que dure: «inscripción, recordar para siempre».
Los extranjeros suelen elegir nombres por sonido Y por significado, como 大山 (Dàshān, montaña grande), el canadiense que mencionó Michelle.

PRONUNCIACIÓN: wǒ jiào Wǎ Dí Míng. Ojo: 我 (wǒ) y 瓦 (wǎ) son tercer tono seguidos… con 叫 (jiào) en el medio no hay problema, pero dí y míng suben los dos.`,
en:`WHAT IT IS: introducing yourself in Chinese, with the name Michelle gave you.

THE STRUCTURE: 我 (wǒ, I) + 叫 (jiào, call) + name. Literally "I call Vladimir".

YOUR CHINESE NAME, character by character:
瓦 wǎ: a curved clay roof tile, drawn as two interlocking tiles. It sounds like the "Vla" in Vladimir.
迪 dí: 辶 (zǒu, the walking radical, a foot on a road) + 由 (yóu, from: sound). It means to guide, to enlighten, to open the way.
铭 míng: 钅 (jīn, metal, squeezed form of 金 jīn) + 名 (míng, name). Engraving a name in metal so it lasts: "inscription, remember forever".
Foreigners usually choose names for sound AND meaning, like 大山 (Dàshān, big mountain), the Canadian Michelle mentioned.

PRONUNCIATION: wǒ jiào Wǎ Dí Míng. dí and míng both rise.`,
zh:`是什么：用老师取的中文名自我介绍：我 + 叫 + 名字。
名字：瓦（屋瓦，音近 Vla）、迪（辶 + 由，启迪）、铭（钅 + 名，刻在金属上的名字）。外国人常按读音和意思取名，比如 大山。`}},
  {id:"fra-31",s:"我是瓦迪铭。",t:"我是瓦迪銘。",py:"wǒ shì Wǎ Dí Míng",es:"soy Vladimir",en:"I am Vladimir",
   x:{
es:`QUÉ ES: otra forma de presentarte: «soy Vladimir».

我是 (wǒ shì) vs 我叫 (wǒ jiào): Michelle dijo que se usan los dos.
我叫瓦迪铭 (wǒ jiào Wǎ Dí Míng) = me llamo Vladimir (responde a 你叫什么名字？ nǐ jiào shénme míngzi?)
我是瓦迪铭 (wǒ shì Wǎ Dí Míng) = soy Vladimir (responde a 你是谁？ nǐ shì shéi?, o al teléfono: «habla Vladimir»)

LA ESTRUCTURA: 我 (wǒ) + 是 (shì) + nombre. 是 no se conjuga: 我是 (wǒ shì), 你是 (nǐ shì), 他是 (tā shì).

EL VERBO 是 (shì): 日 (rì, el sol) sobre 正 (zhèng, una línea de meta sobre la huella de un pie: ir derecho). «Lo que es tan cierto como el sol».

PRONUNCIACIÓN: wǒ shì Wǎ Dí Míng. shì cuarto tono con la lengua atrás.`,
en:`WHAT IT IS: another way to introduce yourself: "I'm Vladimir".

我是 (wǒ shì) vs 我叫 (wǒ jiào): Michelle said both are used.
我叫瓦迪铭 (wǒ jiào Wǎ Dí Míng) = my name is Vladimir (answers 你叫什么名字？ nǐ jiào shénme míngzi?)
我是瓦迪铭 (wǒ shì Wǎ Dí Míng) = I'm Vladimir (answers 你是谁？ nǐ shì shéi?, or on the phone: "Vladimir speaking")

THE STRUCTURE: 我 (wǒ) + 是 (shì) + name. 是 isn't conjugated: 我是 (wǒ shì), 你是 (nǐ shì), 他是 (tā shì).

THE VERB 是 (shì): 日 (rì, the sun) over 正 (zhèng, a finish line over a footprint: going straight). "What is as true as the sun".

PRONUNCIATION: wǒ shì Wǎ Dí Míng. shì 4th tone, tongue back.`,
zh:`是什么：另一种自我介绍。我叫瓦迪铭 回答"你叫什么名字"；我是瓦迪铭 回答"你是谁"，也用于电话里。`}},
  {id:"fra-32",s:"他是我爸爸。",py:"tā shì wǒ bàba",es:"él es mi papá",en:"he is my dad",
   x:{
es:`QUÉ ES: «él es mi papá». La respuesta típica a 他是谁？ (tā shì shéi?)

LA ESTRUCTURA: 他 (tā, él) + 是 (shì, ser) + 我爸爸 (wǒ bàba, mi papá).

POR QUÉ NO HAY 的 (de): «mi papá» debería ser 我的爸爸 (wǒ de bàba), pero con familiares en singular el 的 se puede sacar. Michelle lo explicó para que no suene «de-de-de» todo el tiempo.
我爸爸 (wǒ bàba) = 我的爸爸 (los dos están bien)
Con cosas y animales se deja: 我的猫 (wǒ de māo), 我的书 (wǒ de shū).
En plural no se saca: 我们的爸爸 (wǒmen de bàba).

LOS CARACTERES:
他 (tā): 亻 (rén, persona) + 也 (yě, sonido).
爸爸 (bàba): 父 (fù) arriba (una mano sosteniendo un hacha: el que trabaja y manda) + 巴 (bā, sonido). Se repite, como casi todas las palabras de familia.

PRONUNCIACIÓN: tā shì wǒ bàba. bà cuarto tono, ba neutro. La b sin aire (como la p de «speak»).`,
en:`WHAT IT IS: "he's my dad". The typical answer to 他是谁？ (tā shì shéi?)

THE STRUCTURE: 他 (tā, he) + 是 (shì, be) + 我爸爸 (wǒ bàba, my dad).

WHY THERE'S NO 的 (de): "my dad" would be 我的爸爸 (wǒ de bàba), but with family members in the singular you can drop 的. Michelle explained it so things don't sound "de-de-de".
我爸爸 (wǒ bàba) = 我的爸爸 (both fine)
With things and animals you keep it: 我的猫 (wǒ de māo), 我的书 (wǒ de shū).
In the plural you keep it: 我们的爸爸 (wǒmen de bàba).

THE CHARACTERS:
他 (tā): 亻 (rén, person) + 也 (yě, sound).
爸爸 (bàba): 父 (fù) on top (a hand holding an axe: the one who works and gives orders) + 巴 (bā, sound). Doubled, like almost every family word.

PRONUNCIATION: tā shì wǒ bàba. bà 4th tone, ba neutral. Unaspirated b (like the p in "speak").`,
zh:`是什么："他是我爸爸"，回答 他是谁？单数亲属可以省略 的：我爸爸 = 我的爸爸；东西和动物不省；复数不省。`}},
  {id:"fra-33",s:"你吃苹果。",t:"你吃蘋果。",py:"nǐ chī píngguǒ",es:"comés manzana",en:"you eat apples",cl:"c1",
   x:{
es:`QUÉ ES: la oración afirmativa básica de la clase 1: sujeto + verbo + objeto. 你 (nǐ, vos) + 吃 (chī, comer) + 苹果 (píngguǒ, manzana).

LO QUE ENSEÑA:
1. El orden es igual que en español: quién + qué hace + qué cosa.
2. El verbo NO cambia: 吃 (chī) es como, comés, come, comemos. Tampoco cambia con el tiempo: puede ser «comés», «comiste» o «vas a comer» según el contexto. Michelle: «no tenés pasado, presente y futuro».
3. El sustantivo tampoco cambia: 苹果 (píngguǒ) es manzana o manzanas.
Agregando 吗 (ma) al final se vuelve pregunta: 你吃苹果吗？ (nǐ chī píngguǒ ma?)

LOS CARACTERES:
吃 (chī): 口 (kǒu, boca) + 乞 (qǐ, sonido).
苹果 (píngguǒ): 苹 (píng) = 艹 (cǎo, hierba) + 平 píng (plano, una balanza en equilibrio: sonido) · 果 (guǒ) = la fruta dibujada arriba del árbol 木 (mù).

PRONUNCIACIÓN: nǐ chī píngguǒ. Ojo con el final: 苹果 (píngguǒ) es segundo + tercer tono.`,
en:`WHAT IT IS: the basic statement from class 1: subject + verb + object. 你 (nǐ, you) + 吃 (chī, eat) + 苹果 (píngguǒ, apple).

WHAT IT TEACHES:
1. The order is the same as English: who + does what + to what.
2. The verb does NOT change: 吃 (chī) is eat, eats, ate. It doesn't change with tense either: context tells you. Michelle: "there's no past, present and future".
3. The noun doesn't change either: 苹果 (píngguǒ) is apple or apples.
Add 吗 (ma) at the end and it becomes a question: 你吃苹果吗？ (nǐ chī píngguǒ ma?)

THE CHARACTERS:
吃 (chī): 口 (kǒu, mouth) + 乞 (qǐ, sound).
苹果 (píngguǒ): 苹 (píng) = 艹 (cǎo, grass) + 平 píng (flat, a balanced scale: sound) · 果 (guǒ) = the fruit drawn above the tree 木 (mù).

PRONUNCIATION: nǐ chī píngguǒ. 苹果 is a 2nd + 3rd tone.`,
zh:`是什么：第一课的基本句：主语 + 动词 + 宾语。动词不变位、没有时态变化，名词没有复数形式。加 吗 变成问句。`}},
  {id:"fra-34",s:"我的狗",py:"wǒ de gǒu",es:"mi perro",en:"my dog",
   x:{
es:`QUÉ ES: «mi perro». El primer ejemplo de posesivo de la clase 2.

LA REGLA: pronombre + 的 (de) = posesivo.
我的 (wǒ de) mi · 你的 (nǐ de) tu · 他的 (tā de) su (de él) · 我们的 (wǒmen de) nuestro.
Michelle: el 的 es como el apóstrofe s del inglés: «I's dog».

CON ANIMALES Y COSAS el 的 (de) se deja: 我的狗 (wǒ de gǒu), 我的书 (wǒ de shū). Con familiares se puede sacar: 我爸爸 (wǒ bàba).

LOS CARACTERES:
的 (de): 白 (bái, blanco) + 勺 (sháo, un cucharón). El significado original se perdió: hoy es solo gramática, y es el carácter más usado del idioma.
狗 (gǒu): 犭 (quǎn, 犬 quǎn perro aplastado: un perro de perfil con la cola enroscada) + 句 (jù, sonido).

PRONUNCIACIÓN: wǒ de gǒu. 的 (de) muy corto y sin tono. 我 (wǒ) y 狗 (gǒu) son tercer tono.`,
en:`WHAT IT IS: "my dog". The first possessive example from class 2.

THE RULE: pronoun + 的 (de) = possessive.
我的 (wǒ de) my · 你的 (nǐ de) your · 他的 (tā de) his · 我们的 (wǒmen de) our.
Michelle: 的 is like English 's: "I's dog".

WITH ANIMALS AND THINGS you keep 的 (de): 我的狗 (wǒ de gǒu), 我的书 (wǒ de shū). With family you can drop it: 我爸爸 (wǒ bàba).

THE CHARACTERS:
的 (de): 白 (bái, white) + 勺 (sháo, a ladle). The original meaning is lost: today it's pure grammar, and the most frequent character in the language.
狗 (gǒu): 犭 (quǎn, 犬 quǎn dog, squeezed: a dog in profile with a curled tail) + 句 (jù, sound).

PRONUNCIATION: wǒ de gǒu. 的 (de) very short and toneless. 我 (wǒ) and 狗 (gǒu) are 3rd tone.`,
zh:`是什么："我的狗"。规则：代词 + 的 = 所有格（我的、你的、他的、我们的），的 相当于英文 's。动物和东西不省 的，亲属可以省。`}},
  {id:"fra-35",s:"我爸爸的狗",py:"wǒ bàba de gǒu",es:"el perro de mi papá",en:"my dad's dog",
   x:{
es:`QUÉ ES: «el perro de mi papá». Dos posesivos en una frase.

EL ORDEN, AL REVÉS QUE EN ESPAÑOL:
español: el perro DE mi papá (primero la cosa, después el dueño)
chino: 我爸爸 (wǒ bàba) 的 (de) 狗 (gǒu, primero el dueño, después la cosa)
Es igual al inglés: my dad's dog. Por eso Michelle lo explica siempre con el 's.

LAS PIEZAS:
我爸爸 (wǒ bàba) mi papá (sin 的 de en el medio: familiar en singular).
的 's.
狗 (gǒu) perro.

EL TRUCO: leé el 的 (de) como «'s»: «mi papá's perro».

PRONUNCIACIÓN: wǒ bàba de gǒu.`,
en:`WHAT IT IS: "my dad's dog". Two possessives in one phrase.

THE ORDER, SAME AS ENGLISH:
Chinese: 我爸爸 (wǒ bàba) 的 (de) 狗 (gǒu, owner first, then the thing)
= my dad's dog. That's why Michelle always explains it with 's.
(In Spanish it's the reverse: "el perro de mi papá", which is what makes it tricky for Spanish speakers.)

THE PIECES:
我爸爸 (wǒ bàba) my dad (no 的 de in between: family member, singular).
的 's.
狗 (gǒu) dog.

THE TRICK: read 的 (de) as "'s".

PRONUNCIATION: wǒ bàba de gǒu.`,
zh:`是什么："我爸爸的狗"。所有者在前，东西在后，和英文 my dad's dog 一样；西班牙语语序相反。`}},
  {id:"fra-36",s:"我爸爸的妹妹的朋友",py:"wǒ bàba de mèimei de péngyǒu",es:"el amigo de la hermana de mi papá",en:"my dad's younger sister's friend",
   x:{
es:`QUÉ ES: la cadena de posesivos que escribió Michelle en el apunte de la clase 2.

CÓMO SE LEE: de izquierda a derecha, cada 的 (de) = 's.
我爸爸 (wǒ bàba) 的 妹妹 (mèimei) 的 朋友 (péngyǒu)
mi papá 's hermana menor 's amigo
= my dad's sister's friend.
En español hay que darlo vuelta: el amigo de la hermana de mi papá.

CUÁNTOS 的 (de) SE PUEDEN PONER: todos los que haga falta. El chino no tiene límite, igual que el inglés con 's.

POR QUÉ 我爸爸 (wǒ bàba) SIN 的 (de) PERO 妹妹的 (mèimei de) CON 的: 我爸爸 (mi papá) es familiar directo del pronombre, se puede sacar. Pero entre 爸爸 (bàba) y 妹妹 (mèimei), y entre 妹妹 y 朋友 (péngyǒu), el 的 tiene que estar.

LOS CARACTERES:
妹 (mèi) hermana menor: 女 (nǚ, mujer) + 未 (wèi, todavía no: un árbol que no terminó de crecer).
朋友 (péngyǒu) amigo: 朋 (péng, dos sartas de conchas) + 友 (yǒu, dos manos en la misma dirección).

PRONUNCIACIÓN: wǒ bàba de mèimei de péngyǒu.`,
en:`WHAT IT IS: the chain of possessives Michelle wrote in the class 2 handout.

HOW TO READ IT: left to right, each 的 (de) = 's.
我爸爸 (wǒ bàba) 的 妹妹 (mèimei) 的 朋友 (péngyǒu)
my dad 's younger sister 's friend
= my dad's sister's friend.
(Spanish has to reverse it: el amigo de la hermana de mi papá.)

HOW MANY 的 (de) YOU CAN USE: as many as needed, just like 's in English.

WHY 我爸爸 (wǒ bàba) WITHOUT 的 (de) BUT 妹妹的 (mèimei de) WITH 的: 我爸爸 (my dad) is a direct family member of the pronoun, so it can drop. But between 爸爸 (bàba) and 妹妹 (mèimei), and between 妹妹 and 朋友 (péngyǒu), 的 must be there.

THE CHARACTERS:
妹 (mèi) younger sister: 女 (nǚ, woman) + 未 (wèi, not yet: a tree that hasn't finished growing).
朋友 (péngyǒu) friend: 朋 (péng, two strings of shells) + 友 (yǒu, two hands going the same way).

PRONUNCIATION: wǒ bàba de mèimei de péngyǒu.`,
zh:`是什么：第二课讲义里的连续所有格：我爸爸的妹妹的朋友 = my dad's sister's friend。的 可以一直接下去；我爸爸 可以省 的，后面的 的 不能省。`}},
  {id:"fra-40",s:"我有一个男老师和两个女老师。",t:"我有一個男老師和兩個女老師。",py:"wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī",es:"tengo un profesor y dos profesoras",en:"I have one male teacher and two female teachers",cl:"c3",
   x:{
es:`QUÉ ES: la primera oración de la clase 3. Junta TRES temas nuevos a la vez: 有 (yǒu), clasificadores y género.

PIEZA POR PIEZA:
我有 (wǒ yǒu) tengo (有 yǒu con sujeto = tener).
一个 (yí ge) un (一 yī + clasificador 个 gè, para personas).
男老师 (nán lǎoshī) profesor hombre (男 nán delante marca masculino).
和 (hé) y (une dos sustantivos).
两个 (liǎng ge) dos (两 liǎng, no 二 èr, porque va antes de clasificador).
女老师 (nǚ lǎoshī) profesora (女 nǚ delante marca femenino).

POR QUÉ MARCAR EL GÉNERO: normalmente 老师 (lǎoshī) no dice si es hombre o mujer. Michelle: solo se agrega 男 (nán) / 女 (nǚ) cuando querés resaltarlo, como acá, que contrastás uno contra dos.

LOS CARACTERES:
男 (nán): 田 (tián, campo) + 力 (lì, fuerza): el que trabaja el campo.
女 (nǚ): una mujer arrodillada con los brazos cruzados.
两 (liǎng): el yugo o la balanza de dos platillos: un par.

PRONUNCIACIÓN: wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī. 我有 (wǒ yǒu) son dos terceros tonos: se dice wó yǒu.`,
en:`WHAT IT IS: the first sentence of class 3. It combines THREE new topics at once: 有 (yǒu), measure words and gender.

PIECE BY PIECE:
我有 (wǒ yǒu) I have (有 yǒu with a subject = to have).
一个 (yí ge) a (一 yī + measure word 个 gè, for people).
男老师 (nán lǎoshī) male teacher (男 nán in front marks masculine).
和 (hé) and (joins two nouns).
两个 (liǎng ge) two (两 liǎng, not 二 èr, because it's before a measure word).
女老师 (nǚ lǎoshī) female teacher (女 nǚ in front marks feminine).

WHY MARK GENDER: normally 老师 (lǎoshī) doesn't say whether it's a man or a woman. Michelle: you only add 男 (nán) / 女 (nǚ) when you want to stress it, as here, contrasting one with two.

THE CHARACTERS:
男 (nán): 田 (tián, field) + 力 (lì, strength): the one who works the field.
女 (nǚ): a kneeling woman with arms crossed.
两 (liǎng): the yoke or the two-pan scale: a pair.

PRONUNCIATION: wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī. 我有 (wǒ yǒu) is two 3rd tones: said wó yǒu.`,
zh:`是什么：第三课第一个句子，同时用到 有、量词和性别。
我有 + 一个 + 男老师 + 和 + 两个（量词前用 两）+ 女老师。需要强调性别时才加 男 / 女。
发音：我有 读 wó yǒu。`}},
  {id:"fra-41",s:"他是一位老师。",t:"他是一位老師。",py:"tā shì yí wèi lǎoshī",es:"él es un profesor",en:"he is a teacher",cl:"c3",
   x:{
es:`QUÉ ES: «él es un profesor», con el clasificador respetuoso 位 (wèi).

POR QUÉ 位 (wèi) Y NO 个 (gè): los dos son correctos. 位 muestra respeto: se usa para profesores, clientes, invitados. 他是一个老师 (tā shì yí ge lǎoshī) también está bien, pero suena más neutro. Michelle: 位 es «para personas, formal»; en las noticias se oye mucho.

UNA DIFERENCIA CON EL ESPAÑOL: en español decimos «él es profesor» sin artículo. En chino con 是 (shì) + profesión se puede decir 他是老师 (tā shì lǎoshī, sin número) o 他是一位老师 (tā shì yí wèi lǎoshī, con «un»). Los dos existen.

LOS CARACTERES:
位 (wèi): 亻 (rén, persona) + 立 (lì, una persona de pie sobre el suelo): alguien parado en su lugar, «posición». Contarlo con 位 es reconocerle su lugar.
老师 (lǎoshī): 老 (lǎo, anciano con bastón, respeto) + 师 (shī, maestro, experto).

PRONUNCIACIÓN: tā shì yí wèi lǎoshī. 一 (yī) es yí porque 位 (wèi) es cuarto tono.`,
en:`WHAT IT IS: "he's a teacher", with the respectful measure word 位 (wèi).

WHY 位 (wèi) AND NOT 个 (gè): both are correct. 位 shows respect: used for teachers, customers, guests. 他是一个老师 (tā shì yí ge lǎoshī) is fine too but sounds more neutral. Michelle: 位 is "for people, formal"; you hear it a lot in the news.

WITH PROFESSIONS: 他是老师 (tā shì lǎoshī, no number) and 他是一位老师 (tā shì yí wèi lǎoshī, with "a") both exist.

THE CHARACTERS:
位 (wèi): 亻 (rén, person) + 立 (lì, a person standing on the ground): someone standing in their place, "position". Counting someone with 位 acknowledges their place.
老师 (lǎoshī): 老 (lǎo, old man with a stick, respect) + 师 (shī, master, expert).

PRONUNCIATION: tā shì yí wèi lǎoshī. 一 (yī) is yí because 位 (wèi) is a 4th tone.`,
zh:`是什么："他是一位老师"，用尊称量词 位；说 一个老师 也对，但比较普通。也可以直接说 他是老师。`}},
  {id:"fra-42",s:"在这个学校有两百个女学生和二十个男学生。",t:"在這個學校有兩百個女學生和二十個男學生。",py:"zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng",es:"en esta escuela hay 200 alumnas y 20 alumnos",en:"this school has 200 female and 20 male students",cl:"c3",
   x:{
es:`QUÉ ES: la oración grande de la clase 3. Usa casi todo lo aprendido: lugar, 有 (yǒu) sin sujeto, números, clasificador y género.

PIEZA POR PIEZA:
在这个学校 (zài zhè ge xuéxiào) en esta escuela (在 zài en + 这个 zhè ge esta + 学校 xuéxiào escuela).
有 (yǒu) hay (有 SIN sujeto = haber).
两百个女学生 (liǎngbǎi ge nǚ xuéshēng) 200 alumnas (两百 liǎngbǎi doscientos + 个 gè + 女 nǚ femenino + 学生 xuéshēng).
和 (hé) y.
二十个男学生 (èrshí ge nán xuéshēng) 20 alumnos (二十 èrshí veinte + 个 + 男 nán masculino + 学生).

TRES DETALLES:
1. El lugar va al principio: «en esta escuela» abre la oración.
2. 两百 (liǎngbǎi) pero 二十 (èrshí): para 200 se usa 两 (liǎng, 两百), pero dentro de 20 va 二 (èr, 二十). Michelle: «doscientos es 两百».
3. Cada número lleva 个 (gè), porque son personas.

PRONUNCIACIÓN: zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng. Practicala despacio: tiene z, zh, x, sh, todas las consonantes difíciles.`,
en:`WHAT IT IS: the big sentence from class 3. It uses almost everything learned: place, 有 (yǒu) without a subject, numbers, measure words and gender.

PIECE BY PIECE:
在这个学校 (zài zhè ge xuéxiào) at this school (在 zài at + 这个 zhè ge this + 学校 xuéxiào school).
有 (yǒu) there are (有 WITHOUT a subject = there is/are).
两百个女学生 (liǎngbǎi ge nǚ xuéshēng) 200 female students (两百 liǎngbǎi two hundred + 个 gè + 女 nǚ female + 学生 xuéshēng).
和 (hé) and.
二十个男学生 (èrshí ge nán xuéshēng) 20 male students (二十 èrshí twenty + 个 + 男 nán male + 学生).

THREE DETAILS:
1. The place goes first: "at this school" opens the sentence.
2. 两百 (liǎngbǎi) but 二十 (èrshí): for 200 you use 两 (liǎng, 两百), but inside 20 it's 二 (èr, 二十). Michelle: "two hundred is 两百".
3. Every number takes 个 (gè), because they're people.

PRONUNCIATION: zài zhè ge xuéxiào yǒu liǎngbǎi ge nǚ xuéshēng hé èrshí ge nán xuéshēng. Practise slowly: it has z, zh, x, sh, all the hard consonants.`,
zh:`是什么：第三课的长句：在这个学校（地点放句首）+ 有（没有主语表示存在）+ 两百个女学生 + 和 + 二十个男学生。200 说 两百，20 说 二十；人都用 个。`}},
  {id:"fra-43",s:"我有一只猫。",t:"我有一隻貓。",py:"wǒ yǒu yì zhī māo",es:"tengo un gato",en:"I have a cat",cl:"c3",
   x:{
es:`QUÉ ES: «tengo un gato». Primera oración de tu presentación de Oliver en clase.

PIEZA POR PIEZA:
我 (wǒ) yo · 有 (yǒu) tener · 一 (yī) un · 只 (zhī) clasificador de animales · 猫 (māo) gato.

LO QUE REPASA:
有 (yǒu) con sujeto = tener.
«un gato» = 一 (yī) + 只 (zhī) + 猫 (māo). Nunca 一猫 (yì māo). Y no 个 (gè), porque es un animal.
Los verbos no se conjugan: 我有 (wǒ yǒu), 你有 (nǐ yǒu), 他有 (tā yǒu).

LA PRESENTACIÓN COMPLETA DE CLASE:
我有一只猫。我的猫叫 (wǒ yǒu yì zhī māo, wǒ de māo jiào) Oliver。它是橘色的。这只猫今天早上吃一条鱼。 (tā shì júsè de zhè zhī māo jīntiān zǎoshang chī yì tiáo yú)
Fijate que en chino son cuatro oraciones cortas, cada una con su sujeto.

PRONUNCIACIÓN: wǒ yǒu yì zhī māo. 我有 = dos terceros tonos: el primero sube (wó yǒu). 一 (yī) es yì porque 只 (zhī) es primer tono.`,
en:`WHAT IT IS: "I have a cat". The first sentence introducing Oliver in class.

PIECE BY PIECE:
我 (wǒ) I · 有 (yǒu) have · 一 (yī) a · 只 (zhī) animal measure word · 猫 (māo) cat.

WHAT IT REVIEWS:
有 (yǒu) with a subject = to have.
"a cat" = 一 (yī) + 只 (zhī) + 猫 (māo). Never 一猫 (yì māo). And not 个 (gè), because it's an animal.
Verbs aren't conjugated: 我有 (wǒ yǒu), 你有 (nǐ yǒu), 他有 (tā yǒu).

THE WHOLE INTRODUCTION FROM CLASS:
我有一只猫。我的猫叫 (wǒ yǒu yì zhī māo, wǒ de māo jiào) Oliver。它是橘色的。这只猫今天早上吃一条鱼。 (tā shì júsè de zhè zhī māo jīntiān zǎoshang chī yì tiáo yú)
Notice that in Chinese it's four short sentences, each with its own subject.

PRONUNCIATION: wǒ yǒu yì zhī māo. 我有 = two 3rd tones: the first rises (wó yǒu). 一 (yī) is yì because 只 (zhī) is a 1st tone.`,
zh:`是什么："我有一只猫"。复习：有 + 一 + 只 + 猫；动物用 只。
课上完整介绍：我有一只猫。我的猫叫 Oliver。它是橘色的。这只猫今天早上吃一条鱼。
发音：我有 读 wó yǒu。`}},
  {id:"fra-44",s:"我的猫叫 Oliver。",t:"我的貓叫 Oliver。",py:"wǒ de māo jiào Oliver",es:"mi gato se llama Oliver",en:"my cat is called Oliver",cl:"c3",say:"我的猫叫",
   x:{
es:`QUÉ ES: «mi gato se llama Oliver». Segunda oración de la presentación de clase.

CÓMO SE ARMA:
我的猫 (wǒ de māo) mi gato (posesivo con 的 de: con animales el 的 se deja).
叫 (jiào) se llama (el mismo 叫 de 我叫 wǒ jiào).
Oliver.

LO QUE MUESTRA: 叫 (jiào) sirve para cualquier sujeto, no solo personas. Como no hay conjugación, «me llamo», «se llama», «nos llamamos» son todos 叫.

POR QUÉ UNA ORACIÓN NUEVA: en español dirías «tengo un gato que se llama Oliver». En chino se corta: 我有一只猫。我的猫叫 (wǒ yǒu yì zhī māo, wǒ de māo jiào) Oliver。 Michelle: las oraciones chinas son más cortas, y el sujeto se repite.

PREGUNTA QUE LA PROVOCA: 你的猫叫什么名字？ (nǐ de māo jiào shénme míngzi?)

PRONUNCIACIÓN: wǒ de māo jiào Oliver.`,
en:`WHAT IT IS: "my cat is called Oliver". The second sentence of the class introduction.

HOW IT'S BUILT:
我的猫 (wǒ de māo) my cat (possessive with 的 de: with animals 的 stays).
叫 (jiào) is called (the same 叫 as in 我叫 wǒ jiào).
Oliver.

WHAT IT SHOWS: 叫 (jiào) works for any subject, not just people. With no conjugation, "I'm called", "it's called", "we're called" are all 叫.

WHY A NEW SENTENCE: in English you'd say "I have a cat called Oliver". Chinese cuts it: 我有一只猫。我的猫叫 (wǒ yǒu yì zhī māo, wǒ de māo jiào) Oliver。 Michelle: Chinese sentences are shorter, and the subject is repeated.

THE QUESTION IT ANSWERS: 你的猫叫什么名字？ (nǐ de māo jiào shénme míngzi?)

PRONUNCIATION: wǒ de māo jiào Oliver.`,
zh:`是什么："我的猫叫 Oliver"。叫 可以用于任何主语。西班牙语会说"我有一只叫 Oliver 的猫"，中文分成两个短句，主语重复。`}},
  {id:"fra-45",s:"它是橘色的。",py:"tā shì júsè de",es:"es naranja",en:"it's orange",cl:"c3",
   x:{
es:`QUÉ ES: «es naranja» (hablando de Oliver). Tercera oración de la presentación.

TRES COSAS NUEVAS:
1. 它 (tā) «ello»: el pronombre para animales y cosas (it). Suena igual que 他 (tā) y 她 (tā). Michelle: «it es como 它».
2. EL SUJETO NO SE PUEDE SACAR: en español decís «es naranja» sin sujeto. En chino no existe el sujeto tácito: hay que decir 它. Michelle: «no puede ir sin sujeto».
3. EL 的 (de) FINAL: 是 (shì) + color + 的 = «es de color…». El 的 convierte 橘色 (júsè) en adjetivo. Sin artículo: en clase preguntaste si iba artículo, y no.

LOS CARACTERES:
它 (tā): originalmente el dibujo de una cobra con la cabeza levantada (por eso está en 蛇 shé, serpiente).
橘色 (júsè): 橘 (jú, 木 mù árbol + 矞 yù: la mandarina) + 色 (sè, color, originalmente el color de la cara).

PRONUNCIACIÓN: tā shì júsè de.`,
en:`WHAT IT IS: "it's orange" (about Oliver). The third sentence of the introduction.

THREE NEW THINGS:
1. 它 (tā) "it": the pronoun for animals and things. Sounds the same as 他 (tā) and 她 (tā). Michelle: "it is 它".
2. THE SUBJECT CAN'T BE DROPPED: Chinese has no implied subject, so you must say 它. Michelle: "it can't go without a subject".
3. THE FINAL 的 (de): 是 (shì) + colour + 的 = "is …-coloured". 的 turns 橘色 (júsè) into an adjective. No article: in class you asked whether an article was needed, and it isn't.

THE CHARACTERS:
它 (tā): originally a drawing of a cobra with its head raised (that's why it's in 蛇 shé, snake).
橘色 (júsè): 橘 (jú, 木 mù tree + 矞 yù: tangerine) + 色 (sè, colour, originally the colour of the face).

PRONUNCIATION: tā shì júsè de.`,
zh:`是什么："它是橘色的"。三个重点：它 指动物和东西；主语不能省；是 + 颜色 + 的，句末的 的 让颜色变成形容词，不需要冠词。`}},
  {id:"fra-46",s:"这只猫今天早上吃一条鱼。",t:"這隻貓今天早上吃一條魚。",py:"zhè zhī māo jīntiān zǎoshang chī yì tiáo yú",es:"el gato comió un pescado esta mañana",en:"the cat ate a fish this morning",cl:"c3",
   x:{
es:`QUÉ ES: la última oración de la presentación de Oliver, y la más completa de la clase 3.

PIEZA POR PIEZA:
这只猫 (zhè zhī māo) el gato (这 zhè este + 只 zhī + 猫 māo: así se dice «el», porque no hay artículo).
今天早上 (jīntiān zǎoshang) esta mañana (今天 jīntiān hoy + 早上 zǎoshang a la mañana).
吃 (chī) comer.
一条鱼 (yì tiáo yú) un pez (一 yī + 条 tiáo, clasificador de cosas largas, + 鱼 yú).

EL ORDEN: sujeto → tiempo → verbo → objeto. El tiempo va DESPUÉS del sujeto, no al final como en español. Michelle: «el tiempo va después del sujeto».

DOS ARTÍCULOS DISTINTOS EN LA MISMA ORACIÓN:
«EL gato» (definido) → 这只猫 (zhè zhī māo)
«UN pescado» (indefinido) → 一条鱼 (yì tiáo yú)

¿Y EL PASADO? 吃 (chī) no cambia; el pasado lo da 今天早上 (jīntiān zǎoshang). Así está en el apunte de Michelle. Para una acción terminada, el chino muchas veces agrega 了 (le) después del verbo (吃了 chī le): buena pregunta para cuando vean la estructura de las oraciones.

PRONUNCIACIÓN: zhè zhī māo jīntiān zǎoshang chī yì tiáo yú.`,
en:`WHAT IT IS: the last sentence of Oliver's introduction, and the most complete one in class 3.

PIECE BY PIECE:
这只猫 (zhè zhī māo) the cat (这 zhè this + 只 zhī + 猫 māo: this is how "the" is said, since there's no article).
今天早上 (jīntiān zǎoshang) this morning (今天 jīntiān today + 早上 zǎoshang in the morning).
吃 (chī) to eat.
一条鱼 (yì tiáo yú) a fish (一 yī + 条 tiáo, measure word for long things, + 鱼 yú).

THE ORDER: subject → time → verb → object. Time goes AFTER the subject, not at the end as in English. Michelle: "time goes after the subject".

TWO DIFFERENT ARTICLES IN ONE SENTENCE:
"THE cat" (definite) → 这只猫 (zhè zhī māo)
"A fish" (indefinite) → 一条鱼 (yì tiáo yú)

AND THE PAST TENSE? 吃 (chī) doesn't change; the past comes from 今天早上 (jīntiān zǎoshang). That's how it is in Michelle's handout. For a completed action Chinese often adds 了 (le) after the verb (吃了 chī le): a good question for when you cover sentence structure.

PRONUNCIATION: zhè zhī māo jīntiān zǎoshang chī yì tiáo yú.`,
zh:`是什么：介绍 Oliver 的最后一句。语序：主语（这只猫）→ 时间（今天早上）→ 动词（吃）→ 宾语（一条鱼）。同一句里有"the"（这只猫）和"a"（一条鱼）。动词不变，过去由时间词表示；完成的动作常加 了（吃了）。`}},
  {id:"fra-50",s:"滚石不生苔",t:"滾石不生苔",py:"gǔn shí bù shēng tái",es:"piedra que rueda no cría musgo",en:"a rolling stone gathers no moss",cl:"c1",
   x:{
es:`QUÉ ES: el proverbio que Michelle mencionó en la clase 1: el mismo que el inglés «a rolling stone gathers no moss». Una persona que cambia constantemente no acumula nada.

POR QUÉ LO MENCIONÓ: en chino los proverbios se usan TODO el tiempo, en las noticias, en los diarios y en la calle. Michelle dijo que mucha gente que estudia chino no entiende las noticias o las películas porque le faltan los proverbios. Cada uno tiene un origen histórico y se aprende de memoria.

PALABRA POR PALABRA:
滚 (gǔn) rodar: 氵 (shuǐ, agua, tres gotas) + 衮 (gǔn, sonido). Como el agua que corre y da vueltas.
石 (shí) piedra: 厂 (chǎng, un acantilado) con 口 (kǒu, una roca) al pie.
不 (bù) no.
生 (shēng) crecer, nacer: un brote saliendo de la tierra (la línea de abajo es el suelo).
苔 (tái) musgo: 艹 (cǎo, planta) + 台 (tái, sonido).
«Piedra rodante no hace crecer musgo».

PRONUNCIACIÓN: gǔn shí bù shēng tái. Acá 不 (bù) queda en bù (cuarto tono) porque 生 (shēng) es primer tono; solo cambia a bú antes de otro cuarto tono.`,
en:`WHAT IT IS: the proverb Michelle mentioned in class 1: the same as the English "a rolling stone gathers no moss". Someone always on the move doesn't accumulate anything.

WHY SHE MENTIONED IT: Chinese uses proverbs ALL the time, in the news, in newspapers and on the street. Michelle said many learners can't follow the news or films because they lack the proverbs. Each has a historical origin and is learned by heart.

WORD BY WORD:
滚 (gǔn) to roll: 氵 (shuǐ, water, three drops) + 衮 (gǔn, sound). Like water running and swirling.
石 (shí) stone: 厂 (chǎng, a cliff) with 口 (kǒu, a rock) at its foot.
不 (bù) not.
生 (shēng) to grow, to be born: a sprout coming out of the soil (the bottom line is the ground).
苔 (tái) moss: 艹 (cǎo, plant) + 台 (tái, sound).
"Rolling stone doesn't grow moss".

PRONUNCIATION: gǔn shí bù shēng tái. Here 不 (bù) stays bù (4th tone) because 生 (shēng) is a 1st tone; it only changes to bú before another 4th tone.`,
zh:`是什么：第一课提到的谚语，和英文 a rolling stone gathers no moss 一样。中文日常、新闻里常用成语谚语，每个都有来历，要背下来。
逐字：滚（氵 + 衮）、石（厂 山崖下一块石头）、不、生（破土的芽）、苔（艹 + 台）。
生 是第一声，所以 不 读 bù。`}}
  ]
});
