/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   w optional writing tip {es, en, zh} (shown on the stroke-order page),
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"oraciones", glyph:"句",
  name:{"es": "Armar oraciones", "en": "Building sentences", "zh": "造句"},
  cl:"c6",
  cards:[
  {id:"ora-01",s:"主语 + 时间 + 地点 + 动词 + 宾语",t:"主語 + 時間 + 地點 + 動詞 + 賓語",py:"zhǔyǔ + shíjiān + dìdiǎn + dòngcí + bīnyǔ",es:"sujeto + tiempo + lugar + verbo + objeto",en:"subject + time + place + verb + object",say:"主语，时间，地点，动词，宾语",
   x:{
es:`QUÉ ES: la regla de orden que Michelle dio en la clase 6, la que sirve para armar casi cualquier oración: SUJETO → TIEMPO → LUGAR → VERBO → OBJETO.

LAS CINCO PALABRAS:
主语 (zhǔyǔ) sujeto: 主 (zhǔ, dueño, principal) + 语 (yǔ, lengua, palabra): «la palabra principal».
时间 (shíjiān) tiempo: 时 (shí, hora) + 间 (jiān, intervalo, espacio entre dos cosas).
地点 (dìdiǎn) lugar: 地 (dì, tierra) + 点 (diǎn, punto): «un punto en la tierra».
动词 (dòngcí) verbo: 动 (dòng, moverse) + 词 (cí, palabra): «palabra de acción».
宾语 (bīnyǔ) objeto: 宾 (bīn, huésped) + 语 (yǔ): la palabra «invitada», la que recibe la acción.

COMPARADO CON EL ESPAÑOL: Michelle mostró «Él compró una torta para su mamá en la panadería ayer». En español: sujeto, verbo, objeto directo, objeto indirecto, lugar y tiempo (y el lugar o el tiempo pueden ir al principio o al final). En chino el tiempo y el lugar se mudan ADELANTE del verbo, justo después del sujeto:
他昨天在面包店买了一个蛋糕给他妈妈。 (tā zuótiān zài miànbāodiàn mǎi le yí ge dàngāo gěi tā māma) «él ayer en la panadería compró una torta para su mamá».
(面包店 miànbāodiàn, panadería: 面包 miànbāo pan + 店 diàn tienda; 蛋糕 dàngāo, torta: 蛋 dàn huevo + 糕 gāo masa dulce; 给 gěi, dar → «para»; 了 le marca que la compra ya terminó, lo van a ver más adelante.)

LAS TRES REGLAS DE MICHELLE:
1. El tiempo va después del sujeto. Si lo querés destacar, puede ir adelante de todo, como en español: 今天，我要去… (jīntiān, wǒ yào qù…).
2. El lugar va delante del verbo, con 在 (zài, en): 他在我家吃饭 (tā zài wǒ jiā chīfàn) él come en mi casa.
3. Excepción: con los verbos de movimiento (ir, venir, caminar, correr) el lugar va DESPUÉS del verbo: 我去学校 (wǒ qù xuéxiào) voy a la escuela.

POR QUÉ TAN FIJO: el chino no conjuga. 吃 (chī) es «como, comés, comió, comeremos». Como el verbo no dice quién ni cuándo, el orden de las palabras hace ese trabajo. Por eso Michelle insiste en que el sujeto esté siempre presente (no hay sujeto tácito como en «estudio») y en que el orden no se mueva: «la gramática es muy fija». Según ella, lo difícil del chino son los caracteres, los tonos y el vocabulario, no armar oraciones.

PRONUNCIACIÓN: zhǔyǔ (dos terceros tonos seguidos: el primero sube, zhúyǔ) · shíjiān · dìdiǎn · dòngcí · bīnyǔ.`,
en:`WHAT IT IS: the word-order rule Michelle gave in class 6, the one that builds almost any sentence: SUBJECT → TIME → PLACE → VERB → OBJECT.

THE FIVE WORDS:
主语 (zhǔyǔ) subject: 主 (zhǔ, owner, main) + 语 (yǔ, language, word): "the main word".
时间 (shíjiān) time: 时 (shí, hour) + 间 (jiān, interval, the space between two things).
地点 (dìdiǎn) place: 地 (dì, earth) + 点 (diǎn, point): "a point on the earth".
动词 (dòngcí) verb: 动 (dòng, to move) + 词 (cí, word): "action word".
宾语 (bīnyǔ) object: 宾 (bīn, guest) + 语 (yǔ): the "guest" word, the one that receives the action.

COMPARED WITH SPANISH: Michelle showed "Él compró una torta para su mamá en la panadería ayer" (He bought a cake for his mom at the bakery yesterday). In Spanish (and English): subject, verb, direct object, indirect object, place, time (and place or time can go at the start or the end). In Chinese, time and place move IN FRONT of the verb, right after the subject:
他昨天在面包店买了一个蛋糕给他妈妈。 (tā zuótiān zài miànbāodiàn mǎi le yí ge dàngāo gěi tā māma) "he yesterday at the bakery bought a cake for his mom".
(面包店 miànbāodiàn, bakery: 面包 miànbāo bread + 店 diàn shop; 蛋糕 dàngāo, cake: 蛋 dàn egg + 糕 gāo sweet dough; 给 gěi, to give → "for"; 了 le marks that the buying is finished, coming later in class.)

MICHELLE'S THREE RULES:
1. Time goes after the subject. To stress it, it can go first, as in Spanish: 今天，我要去… (jīntiān, wǒ yào qù…).
2. Place goes before the verb, with 在 (zài, at/in): 他在我家吃饭 (tā zài wǒ jiā chīfàn) he eats at my house.
3. Exception: with verbs of movement (go, come, walk, run) the place goes AFTER the verb: 我去学校 (wǒ qù xuéxiào) I go to school.

WHY SO FIXED: Chinese doesn't conjugate. 吃 (chī) is "I eat, you eat, she ate, we'll eat". Since the verb doesn't say who or when, word order does that job. That's why Michelle insists the subject is always there (no dropped subject as in Spanish "estudio") and the order doesn't move: "the grammar is very fixed". In her view, the hard parts of Chinese are characters, tones and vocabulary, not building sentences.

PRONUNCIATION: zhǔyǔ (two 3rd tones in a row: the first rises, zhúyǔ) · shíjiān · dìdiǎn · dòngcí · bīnyǔ.`,
zh:`是什么：第六课老师讲的语序规则：主语 → 时间 → 地点 → 动词 → 宾语。

和西班牙语比较：西班牙语是主语、动词、直接宾语、间接宾语、地点、时间；汉语把时间和地点放在动词前面、主语后面：他昨天在面包店买了一个蛋糕给他妈妈。

三条规则：
1. 时间在主语后面；要强调可以放在句首：今天，我要去……
2. 地点在动词前面，用"在"：他在我家吃饭。
3. 例外：移动动词（去、来、走、跑）地点放在动词后面：我去学校。

为什么这么固定：汉语没有动词变位，语序就承担了"谁、什么时候"的信息，所以主语一定要说出来。`}},
  {id:"ora-02",s:"去",py:"qù",es:"ir",en:"to go",
   x:{
es:`QUÉ ES: «ir». El verbo de movimiento por excelencia, y el ejemplo de la excepción de Michelle: con los verbos de movimiento el LUGAR va DESPUÉS del verbo.
我去学校 (wǒ qù xuéxiào) voy a la escuela. No «我在学校去» (wǒ zài xuéxiào qù).
Comparalo con un verbo común: 我在学校读书 (wǒ zài xuéxiào dúshū) estudio en la escuela: ahí el lugar va antes, con 在 (zài).

IR A HACER ALGO: 去 (qù) + verbo = «ir a + verbo», sin ningún «a»: 我们去跳舞 (wǒmen qù tiàowǔ) vamos a bailar. En clase: 每个礼拜我的妹妹和我去跳舞 (měi ge lǐbài wǒ de mèimei hé wǒ qù tiàowǔ). Y con lugar y actividad: 去 + lugar + verbo: 我要去我的学校附近踢足球 (wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú) voy a ir cerca de mi escuela a jugar al fútbol.

EL CARÁCTER: arriba 土 (tǔ), que acá no es «tierra»: en los huesos oraculares era 大 (dà), una persona de frente con brazos y piernas abiertos. Abajo 厶 (sī), que antes era 口 (kǒu, una boca, una abertura). La lectura más citada: una persona saliendo de una entrada (de una casa-cueva) → «irse, alejarse». Es una etimología discutida: otros ven en el 口 un recipiente con su tapa. Lo seguro es el sentido original: «irse, dejar un lugar». Por eso 过去 (guòqù) es «el pasado»: lo que ya se fue.

OJO: 去 (qù) es ir hacia allá; venir hacia acá es 来 (lái).

PRONUNCIACIÓN: qù, cuarto tono (cae). La q se parece a una «ch» con la punta de la lengua detrás de los dientes de abajo y los labios redondeados por la ü: no es «cu».`,
en:`WHAT IT IS: "to go". The movement verb par excellence, and the example of Michelle's exception: with verbs of movement the PLACE goes AFTER the verb.
我去学校 (wǒ qù xuéxiào) I go to school. Not "我在学校去" (wǒ zài xuéxiào qù).
Compare an ordinary verb: 我在学校读书 (wǒ zài xuéxiào dúshū) I study at school: there the place goes first, with 在 (zài).

GO AND DO SOMETHING: 去 (qù) + verb = "go to + verb", with no "to": 我们去跳舞 (wǒmen qù tiàowǔ) let's go dancing. In class: 每个礼拜我的妹妹和我去跳舞 (měi ge lǐbài wǒ de mèimei hé wǒ qù tiàowǔ). With a place and an activity: 去 + place + verb: 我要去我的学校附近踢足球 (wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú) I'm going near my school to play football.

THE CHARACTER: on top 土 (tǔ), which here isn't "earth": on oracle bones it was 大 (dà), a person seen from the front, arms and legs spread. Below 厶 (sī), which used to be 口 (kǒu, a mouth, an opening). The most quoted reading: a person stepping out of an entrance (a cave dwelling) → "to leave, go away". It's disputed: others see the 口 as a vessel with its lid. What's certain is the original meaning, "to leave a place". That's why 过去 (guòqù) is "the past": what has gone.

CAREFUL: 去 (qù) is going over there; coming over here is 来 (lái).

PRONUNCIATION: qù, 4th tone (falling). The q is close to "ch" with the tongue tip behind the lower teeth and lips rounded for the ü: not "koo".`,
zh:`是什么："去"是最典型的移动动词，也是老师说的例外：移动动词的地点放在动词后面：我去学校（不说"我在学校去"）。比较：我在学校读书。

去＋动词：我们去跳舞。去＋地点＋动词：我要去我的学校附近踢足球。

字形：甲骨文上面是"大"（正面的人），下面是"口"（出入口），一般解释为人离开居所；也有人认为"口"是器皿，说法有争议。本义是离开，所以"过去"指已经离开的时间。

注意：去是往那边，来是往这边。`}},
  {id:"ora-03",s:"明天",py:"míngtiān",es:"mañana (el día siguiente)",en:"tomorrow",
   x:{
es:`QUÉ ES: «mañana», el día que viene; no la parte del día («a la mañana» es 早上 zǎoshang). Completa la serie: 昨天 (zuótiān) ayer · 今天 (jīntiān) hoy · 明天 (míngtiān) mañana.

EL CARÁCTER 明 (míng): 日 (rì, sol) + 月 (yuè, luna). Sol y luna juntos: «brillante, claro». En los huesos oraculares a veces aparece con una ventana (囧 jiǒng) en lugar del sol: la luz de la luna entrando por la ventana. Las dos formas existieron; quedó la de sol + luna. El uso de 明 (míng) para «el próximo» es antiguo: 明年 (míngnián) el año que viene. Una forma de recordarlo: 明天 (míngtiān) es «el día que aclara».
天 (tiān): una persona de frente (大 dà) con la cabeza marcada arriba: lo que está sobre la cabeza, «el cielo», y de ahí «día».

EN LA CLASE: 明天的考试 (míngtiān de kǎoshì) el examen de mañana. 的 (de) une como el «'s» inglés, igual que «el libro de María» que repasó Michelle: primero mañana, después examen.

OJO: en español «mañana» son dos cosas; en chino, dos palabras: 明天 (míngtiān) el día siguiente, 早上 (zǎoshang) la mañana del día. «Mañana a la mañana» = 明天早上 (míngtiān zǎoshang).

PRONUNCIACIÓN: míng (segundo tono, sube) tiān (primero, alto y plano).`,
en:`WHAT IT IS: "tomorrow", the coming day; not the part of the day ("in the morning" is 早上 zǎoshang). It completes the series: 昨天 (zuótiān) yesterday · 今天 (jīntiān) today · 明天 (míngtiān) tomorrow.

THE CHARACTER 明 (míng): 日 (rì, sun) + 月 (yuè, moon). Sun and moon together: "bright, clear". On oracle bones it sometimes has a window (囧 jiǒng) instead of the sun: moonlight coming through a window. Both forms existed; the sun + moon one stuck. Using 明 (míng) for "the next" is old: 明年 (míngnián) next year. A way to remember it: 明天 (míngtiān) is "the day that dawns".
天 (tiān): a person seen from the front (大 dà) with the head marked on top: what's above your head, "sky", and from there "day".

IN CLASS: 明天的考试 (míngtiān de kǎoshì) tomorrow's exam. 的 (de) links like English "'s", just like "María's book", which Michelle reviewed: first tomorrow, then exam.

CAREFUL: Spanish "mañana" is two things; Chinese has two words: 明天 (míngtiān) the next day, 早上 (zǎoshang) the morning. "Tomorrow morning" = 明天早上 (míngtiān zǎoshang).

PRONUNCIATION: míng (2nd tone, rising) tiān (1st, high and flat).`,
zh:`是什么：明天是下一天，不是"早上"。昨天、今天、明天。

字形：明＝日＋月，日月相合表示光明；甲骨文也有"囧（窗）＋月"的写法，表示月光照进窗户。"明"表示"下一个"的用法很早：明年。天：正面的人，头上突出，表示头顶上的天空，引申为一天。

课上的例子：明天的考试（"的"表示所属）。

注意：西班牙语 mañana 有两个意思：明天、早上。明天早上。`}},
  {id:"ora-04",s:"每天",py:"měitiān",es:"todos los días, cada día",en:"every day",
   x:{
es:`QUÉ ES: «todos los días, cada día». 每 (měi) cada + 天 (tiān) día. Es una palabra de TIEMPO, así que va donde dijo Michelle: después del sujeto, antes del verbo: 我的哥哥每天读书 (wǒ de gēge měitiān dúshū) mi hermano estudia todos los días.

EL CARÁCTER 每 (měi): en los huesos oraculares es una mujer arrodillada (la forma de 母 mǔ, madre, con dos puntos que marcan los pechos) con adornos o mechones sobre la cabeza. El sentido original parece haber sido «frondoso, abundante» (pelo abundante). «Cada» es un préstamo por el sonido: el dibujo no tiene nada que ver con «cada». Hoy se ve 𠂉 arriba y 母 (mǔ) abajo.

CON Y SIN CLASIFICADOR: 每天 (měitiān) no lleva clasificador porque 天 (tiān) ya funciona como unidad de medida; lo mismo 每年 (měinián) cada año. En cambio la semana sí lo lleva: 每个礼拜 (měi ge lǐbài) todas las semanas.

OJO: «todos los días» NO va al final como en español («estudia todos los días»): va antes del verbo.

PRONUNCIACIÓN: měi (tercer tono, baja y sube) tiān (primero). Suena «mei», no «mi».`,
en:`WHAT IT IS: "every day". 每 (měi) each + 天 (tiān) day. It's a TIME word, so it goes where Michelle said: after the subject, before the verb: 我的哥哥每天读书 (wǒ de gēge měitiān dúshū) my brother studies every day.

THE CHARACTER 每 (měi): on oracle bones it's a kneeling woman (the form of 母 mǔ, mother, with two dots for the breasts) with ornaments or locks of hair on her head. The original meaning seems to have been "lush, abundant" (abundant hair). "Each" is a sound loan: the drawing has nothing to do with "each". Today you see 𠂉 on top and 母 (mǔ) below.

WITH AND WITHOUT A MEASURE WORD: 每天 (měitiān) takes no measure word because 天 (tiān) already works as a unit; same for 每年 (měinián) every year. A week does take one: 每个礼拜 (měi ge lǐbài) every week.

CAREFUL: "every day" does NOT go at the end as in English ("studies every day"): it goes before the verb.

PRONUNCIATION: měi (3rd tone, dips and rises) tiān (1st). It sounds "may", not "mee".`,
zh:`是什么：每天＝每＋天。时间词，放在主语后、动词前：我的哥哥每天读书。

字形：甲骨文是跪着的女子（母）头上有装饰或头发，本义可能是"茂盛"；"每个"的意思是假借，与字形无关。

量词：天、年本身就是单位，不加量词：每天、每年；礼拜要加：每个礼拜。

注意：不要像西班牙语一样放在句尾。`}},
  {id:"ora-05",s:"每个礼拜",t:"每個禮拜",py:"měi ge lǐbài",es:"todas las semanas",en:"every week",
   x:{
es:`QUÉ ES: «todas las semanas, cada semana», con la palabra coloquial que más usa Michelle para semana, 礼拜 (lǐbài). La oración de clase: 每个礼拜我的妹妹和我去跳舞 (měi ge lǐbài wǒ de mèimei hé wǒ qù tiàowǔ) todas las semanas mi hermana y yo vamos a bailar.

PIEZA POR PIEZA: 每 (měi) cada + 个 (ge, el clasificador general) + 礼拜 (lǐbài, semana; literalmente «culto, rito»: la semana de un culto del domingo al siguiente).

¿POR QUÉ 个 (ge) ACÁ Y NO EN 每天 (měitiān)? Porque 礼拜 (lǐbài) es un sustantivo común, y entre 每 (měi) o un número y un sustantivo va un clasificador: 一个礼拜 (yí ge lǐbài) una semana, 两个礼拜 (liǎng ge lǐbài) dos semanas. 天 (tiān) y 年 (nián) son la excepción: se cuentan directo (三天 sān tiān, tres días).

LAS TRES FORMAS: 每个礼拜 (měi ge lǐbài) = 每个星期 (měi ge xīngqī) = 每周 (měi zhōu). Con 周 (zhōu), la formal, no va 个.

DÓNDE VA: es tiempo. Michelle lo puso ADELANTE de todo para destacarlo; también puede ir después del sujeto: 我的妹妹和我每个礼拜去跳舞 (wǒ de mèimei hé wǒ měi ge lǐbài qù tiàowǔ).

EL MISMO PATRÓN: 下个礼拜 (xià ge lǐbài) la semana que viene, 上个礼拜 (shàng ge lǐbài) la pasada, como en la despedida de clase 下个礼拜见 (xià ge lǐbài jiàn) nos vemos la semana que viene.

PRONUNCIACIÓN: měi ge lǐbài. 个 (ge) va átono, sin tono propio.`,
en:`WHAT IT IS: "every week", with Michelle's favourite everyday word for week, 礼拜 (lǐbài). The class sentence: 每个礼拜我的妹妹和我去跳舞 (měi ge lǐbài wǒ de mèimei hé wǒ qù tiàowǔ) every week my sister and I go dancing.

PIECE BY PIECE: 每 (měi) each + 个 (ge, the general measure word) + 礼拜 (lǐbài, week; literally "worship, service": the week from one Sunday service to the next).

WHY 个 (ge) HERE BUT NOT IN 每天 (měitiān)? Because 礼拜 (lǐbài) is an ordinary noun, and between 每 (měi) or a number and a noun you need a measure word: 一个礼拜 (yí ge lǐbài) one week, 两个礼拜 (liǎng ge lǐbài) two weeks. 天 (tiān) and 年 (nián) are the exception: they're counted directly (三天 sān tiān, three days).

THE THREE FORMS: 每个礼拜 (měi ge lǐbài) = 每个星期 (měi ge xīngqī) = 每周 (měi zhōu). With 周 (zhōu), the formal one, there's no 个.

WHERE IT GOES: it's time. Michelle put it FIRST to stress it; it can also go after the subject: 我的妹妹和我每个礼拜去跳舞 (wǒ de mèimei hé wǒ měi ge lǐbài qù tiàowǔ).

SAME PATTERN: 下个礼拜 (xià ge lǐbài) next week, 上个礼拜 (shàng ge lǐbài) last week, as in the class goodbye 下个礼拜见 (xià ge lǐbài jiàn) see you next week.

PRONUNCIATION: měi ge lǐbài. 个 (ge) is toneless.`,
zh:`是什么：每个礼拜＝每个星期＝每周（周不加个）。

为什么要加"个"：礼拜是普通名词，数词或"每"和名词之间要用量词：一个礼拜、两个礼拜。天、年是例外：三天、每天、每年。

位置：时间词，可以放在句首强调（每个礼拜我的妹妹和我去跳舞），也可以放在主语后。

同样的结构：下个礼拜、上个礼拜、下个礼拜见。`}},
  {id:"ora-06",s:"很久",py:"hěn jiǔ",es:"mucho tiempo, hace mucho",en:"a long time",
   x:{
es:`QUÉ ES: «mucho tiempo». 很 (hěn) muy + 久 (jiǔ) largo (en el tiempo). La oración de clase: 我很久没有玩 (wǒ hěn jiǔ méiyǒu wán) hace mucho que no juego.

ES TIEMPO (DURACIÓN): Michelle: «hace mucho es duración, tiempo; el tiempo va después del sujeto». Por eso: 我 (wǒ) + 很久 (hěn jiǔ) + 没有 (méiyǒu) + 玩 (wán) = sujeto + tiempo + negación + verbo.

EL CARÁCTER 久 (jiǔ): su origen no es seguro. La explicación más citada: una persona (人 rén) con algo apoyado en la espalda, que muchos leen como la moxibustión (quemar hierbas sobre la piel), hoy escrita 灸 (jiǔ, con 火 huǒ, fuego, abajo): una cura que lleva su tiempo. Otros lo ven como alguien retenido desde atrás. Lo seguro es el sentido: «largo tiempo».
很 (hěn): 彳 (chì, un paso: la mitad izquierda de un cruce de calles) + 艮 (gěn), que da el sonido. Antes significaba «desobediente, terco»; el «muy» es un uso posterior.

OJO: «hace mucho» lleva «hace» en español; en chino no hay verbo: solo 很久 (hěn jiǔ). Y 久 (jiǔ) suena igual que 九 (jiǔ, nueve), con el mismo tercer tono: el contexto los separa.

PRONUNCIACIÓN: hěn jiǔ: dos terceros tonos seguidos, el primero cambia a segundo: hén jiǔ.`,
en:`WHAT IT IS: "a long time". 很 (hěn) very + 久 (jiǔ) long (in time). The class sentence: 我很久没有玩 (wǒ hěn jiǔ méiyǒu wán) I haven't played for a long time.

IT'S TIME (DURATION): Michelle: "'a long time' is duration, time; time goes after the subject". So: 我 (wǒ) + 很久 (hěn jiǔ) + 没有 (méiyǒu) + 玩 (wán) = subject + time + negation + verb.

THE CHARACTER 久 (jiǔ): its origin isn't certain. The most quoted explanation: a person (人 rén) with something pressed on their back, which many read as moxibustion (burning herbs on the skin), today written 灸 (jiǔ, with 火 huǒ, fire, below): a cure that takes time. Others see someone held back from behind. What's certain is the meaning: "a long time".
很 (hěn): 彳 (chì, a step: the left half of a crossroads) + 艮 (gěn), which gives the sound. It used to mean "disobedient, stubborn"; "very" came later.

CAREFUL: Spanish "hace mucho" has a verb ("hace"); Chinese has none: just 很久 (hěn jiǔ). And 久 (jiǔ) sounds exactly like 九 (jiǔ, nine), same 3rd tone: context tells them apart.

PRONUNCIATION: hěn jiǔ: two 3rd tones in a row, the first becomes 2nd: hén jiǔ.`,
zh:`是什么：很久＝很＋久，表示时间很长。课上的句子：我很久没有玩。

语法：时段是时间，放在主语后面：主语＋时间＋否定＋动词。

字形：久的来源不确定，常见说法是人背后有东西，有人认为是"灸"的本字；也有人认为是从后面拉住人。很：彳＋艮（声旁），本义是"不听从"，"很"表示程度是后来的用法。

注意：久和九同音。两个三声连读：hén jiǔ。`}},
  {id:"ora-07",s:"为了",t:"為了",py:"wèile",es:"para (con el fin de)",en:"in order to, for (purpose)",
   x:{
es:`QUÉ ES: «para, con el fin de». Marca el PROPÓSITO. La oración de clase: 学生为了明天的考试读书 (xuéshēng wèile míngtiān de kǎoshì dúshū) el alumno estudia para el examen de mañana.

DÓNDE VA: Michelle: «esto es un propósito, funciona como un adverbio, y los adverbios van después del sujeto». O sea: sujeto + 为了 (wèile) + propósito + verbo. En español «para…» va al final; en chino va ANTES del verbo.

EL CARÁCTER 为 (wèi), tradicional 為 (wèi): en los huesos oraculares es una mano tomando a un elefante por la trompa: hacer trabajar al elefante → «hacer, actuar» (leído wéi). De ahí «por, a favor de, para» (leído wèi). La forma simplificada 为 (wèi) viene de la escritura cursiva del tradicional. Es una de las etimologías más claras.
了 (le): acá es parte de la palabra 为了 (wèile), sin tono propio. No es el 了 que marca una acción terminada.

CONTRASTE: «para + una persona» (un regalo para mi mamá) en general es 给 (gěi): 给妈妈 (gěi māma). 为了 (wèile) es para un objetivo: aprobar, ahorrar, ganar.

PRONUNCIACIÓN: wèi (cuarto tono, cae) le (átono). Ojo: 为 tiene dos lecturas: wèi «para» y wéi «ser, hacer» (como en 以为 yǐwéi, creer).`,
en:`WHAT IT IS: "in order to, for". It marks PURPOSE. The class sentence: 学生为了明天的考试读书 (xuéshēng wèile míngtiān de kǎoshì dúshū) the student studies for tomorrow's exam.

WHERE IT GOES: Michelle: "this is a purpose, it works like an adverb, and adverbs go after the subject". So: subject + 为了 (wèile) + purpose + verb. In Spanish and English "for…" goes at the end; in Chinese it goes BEFORE the verb.

THE CHARACTER 为 (wèi), traditional 為 (wèi): on oracle bones it's a hand leading an elephant by the trunk: putting the elephant to work → "to do, to act" (read wéi). From there "for, on behalf of" (read wèi). The simplified 为 (wèi) comes from the cursive form of the traditional one. One of the clearest etymologies.
了 (le): here it's part of the word 为了 (wèile), toneless. It isn't the 了 that marks a finished action.

CONTRAST: "for + a person" (a present for my mom) is usually 给 (gěi): 给妈妈 (gěi māma). 为了 (wèile) is for a goal: passing, saving, winning.

PRONUNCIATION: wèi (4th tone, falling) le (toneless). Careful: 为 has two readings: wèi "for" and wéi "to be, to do" (as in 以为 yǐwéi, to think).`,
zh:`是什么：为了表示目的。课上的句子：学生为了明天的考试读书。

位置：老师说目的像副词，放在主语后面、动词前面，不像西班牙语放在句尾。

字形：甲骨文是手牵着大象，表示役使大象做事，本义"做"（wéi），引申为"为了"（wèi）。简体字来自草书。

对比：为某人做事常用"给"：给妈妈买；为了＋目标。为有两个读音：wèi、wéi（以为）。`}},
  {id:"ora-08",s:"没有",t:"沒有",py:"méiyǒu",es:"no (en pasado); no tener",en:"did not; not have",
   x:{
es:`QUÉ ES: la negación del PASADO (y de «tener»). Michelle: «no en el pasado es 没有 (méiyǒu)». La oración de clase: 我很久没有玩 (wǒ hěn jiǔ méiyǒu wán) hace mucho que no juego.

LAS DOS NEGACIONES:
不 (bù): presente, futuro, costumbres, querer: 我不吃 (wǒ bù chī) no como / no voy a comer.
没有 (méiyǒu): algo que NO pasó: 我没有吃 (wǒ méiyǒu chī) no comí. Y «no tener»: 我没有猫 (wǒ méiyǒu māo) no tengo gato.
Se puede acortar a 没 (méi): 我没吃 (wǒ méi chī).

DÓNDE VA: justo antes del verbo, después del tiempo: sujeto + tiempo + 没有 (méiyǒu) + verbo.

LOS CARACTERES: 没 (méi): 氵 (shuǐ, agua) + a la derecha 殳 (shū), que en la forma antigua era una mano en un remolino. El sentido original es «hundirse, desaparecer bajo el agua» (leído mò, como en 沉没 chénmò, naufragar). «Desaparecer» → «no haber».
有 (yǒu): una mano (𠂇, arriba) agarrando carne (月 yuè, que acá es 肉 ròu, carne, no la luna): tener.

OJO: nunca «不有» (bù yǒu): «no tener» es siempre 没有 (méiyǒu).

PRONUNCIACIÓN: méi (segundo tono) yǒu (tercero). En el habla, a veces méiyou, con el 有 (yǒu) suave.`,
en:`WHAT IT IS: the negation of the PAST (and of "to have"). Michelle: "'no' in the past is 没有 (méiyǒu)". The class sentence: 我很久没有玩 (wǒ hěn jiǔ méiyǒu wán) I haven't played for a long time.

THE TWO NEGATIONS:
不 (bù): present, future, habits, wanting: 我不吃 (wǒ bù chī) I don't eat / I won't eat.
没有 (méiyǒu): something that DIDN'T happen: 我没有吃 (wǒ méiyǒu chī) I didn't eat. And "not have": 我没有猫 (wǒ méiyǒu māo) I don't have a cat.
It can be shortened to 没 (méi): 我没吃 (wǒ méi chī).

WHERE IT GOES: right before the verb, after the time: subject + time + 没有 (méiyǒu) + verb.

THE CHARACTERS: 没 (méi): 氵 (shuǐ, water) + on the right 殳 (shū), which in the old form was a hand in a whirlpool. The original meaning is "to sink, vanish under water" (read mò, as in 沉没 chénmò, to sink). "Vanish" → "there isn't".
有 (yǒu): a hand (𠂇, on top) holding meat (月 yuè, which here is 肉 ròu, meat, not the moon): to have.

CAREFUL: never "不有" (bù yǒu): "not have" is always 没有 (méiyǒu).

PRONUNCIATION: méi (2nd tone) yǒu (3rd). In speech sometimes méiyou, with a soft 有 (yǒu).`,
zh:`是什么：没有否定过去发生的事，也否定"有"。老师：过去的否定用没有。

不和没有：不：现在、将来、习惯、意愿（我不吃）；没有：没发生的事（我没有吃）、没有东西（我没有猫）。可以说"没"。

位置：时间后、动词前。

字形：没：氵＋右边古文像手在漩涡中，本义沉没（mò）；有：手拿着肉（月＝肉）。

注意：不说"不有"。`}},
  {id:"ora-09",s:"读书",t:"讀書",py:"dúshū",es:"estudiar (verbo compuesto)",en:"to study (verb-object compound)",
   x:{
es:`QUÉ ES: «estudiar», literalmente «leer libros». El ejemplo con el que Michelle explicó los VERBOS COMPUESTOS: 读 (dú, leer) es el verbo y 书 (shū, libro) su objeto, que ya viene incluido.

LA REGLA DE MICHELLE: «el verbo está formado con un objeto directo. Cuando la oración tiene su propio objeto, se saca el objeto del verbo; cuando no tiene, se deja».
Sin objeto: 我的哥哥每天读书 (wǒ de gēge měitiān dúshū) mi hermano estudia todos los días → queda 书 (shū).
Con objeto: 我读数学 (wǒ dú shùxué) estudio matemáticas → se va 书 (shū). No «我读书数学» (wǒ dúshū shùxué).
Es como si en español dijéramos «leer-libros»: si ya dijiste «matemáticas», «libros» sobra.

LOS CARACTERES: 读 (dú), tradicional 讀 (dú): 讠 (yán, palabra; la forma lateral de 言 yán, una boca con algo que sale de ella) + 卖 (mài) a la derecha, que acá es solo fonético: en el tradicional era otro carácter de sonido parecido. Leer, en la antigüedad, era leer en voz alta: por eso el radical de «palabra».
书 (shū), tradicional 書 (shū): arriba 聿 (yù), una mano sosteniendo un pincel; abajo 曰 (yuē, decir), que antiguamente era 者 (zhě), solo fonético. «Lo escrito con pincel» → libro. 书 es la forma cursiva simplificada.

TAIWÁN Y CHINA: 读书 (dúshū) es muy común en Taiwán para «estudiar» o «ir a la escuela». En China se usa también 学习 (xuéxí), y para materias 学 (xué): 我学数学 (wǒ xué shùxué).

PRONUNCIACIÓN: dú (segundo, sube) shū (primero, alto). sh con la lengua hacia atrás.`,
en:`WHAT IT IS: "to study", literally "read books". The example Michelle used to explain VERB-OBJECT COMPOUNDS: 读 (dú, to read) is the verb and 书 (shū, book) its object, already built in.

MICHELLE'S RULE: "the verb is formed with a direct object. When the sentence has its own object, you drop the verb's object; when it doesn't, you keep it".
No object: 我的哥哥每天读书 (wǒ de gēge měitiān dúshū) my brother studies every day → 书 (shū) stays.
With an object: 我读数学 (wǒ dú shùxué) I study maths → 书 (shū) goes. Not "我读书数学" (wǒ dúshū shùxué).
As if English said "book-read": once you've said "maths", "books" is redundant.

THE CHARACTERS: 读 (dú), traditional 讀 (dú): 讠 (yán, word; the side form of 言 yán, a mouth with something coming out) + 卖 (mài) on the right, which here is only phonetic: in the traditional form it was a different character with a similar sound. Reading, in ancient times, was reading aloud: hence the "word" radical.
书 (shū), traditional 書 (shū): on top 聿 (yù), a hand holding a brush; below 曰 (yuē, to say), which used to be 者 (zhě), only phonetic. "What's written with a brush" → book. 书 is the simplified cursive form.

TAIWAN AND CHINA: 读书 (dúshū) is very common in Taiwan for "to study" or "to go to school". In China people also say 学习 (xuéxí), and for subjects 学 (xué): 我学数学 (wǒ xué shùxué).

PRONUNCIATION: dú (2nd, rising) shū (1st, high). sh with the tongue curled back.`,
zh:`是什么：读书＝读（动词）＋书（宾语），是离合词（动宾式动词）。

老师的规则：句子有自己的宾语时，去掉动词里的宾语；没有宾语时要保留。我的哥哥每天读书。我读数学（不说"我读书数学"）。

字形：读（讀）：讠＋声旁；古代读书是朗读，所以用言字旁。书（書）：上面是手拿笔（聿），下面原为"者"（声旁）。

台湾常说读书；大陆也说学习、学数学。`}},
  {id:"ora-10",s:"吃饭",t:"吃飯",py:"chīfàn",es:"comer (una comida)",en:"to eat (a meal)",
   x:{
es:`QUÉ ES: «comer», literalmente «comer arroz». Otro verbo compuesto de la clase: 吃 (chī, comer) + 饭 (fàn, arroz cocido; comida).

LA REGLA EN ACCIÓN:
Sin objeto: 他在我家吃饭 (tā zài wǒ jiā chīfàn) él come en mi casa → queda 饭 (fàn). Michelle: «tenés que poner el 饭 porque no tenés el objeto».
Con objeto: 她吃苹果 (tā chī píngguǒ) ella come manzana → se va 饭 (fàn). No «她吃饭苹果» (tā chīfàn píngguǒ).
Por eso «comer» a secas, sin decir qué, casi siempre es 吃饭 (chīfàn): 吃 (chī) solo suena incompleto.

LOS CARACTERES: 吃 (chī): 口 (kǒu, boca) + 乞 (qǐ, mendigar), que da el sonido.
饭 (fàn), tradicional 飯 (fàn): 饣 (shí, comida; la forma lateral de 食 shí, una vasija con comida y su tapa) + 反 (fǎn), que da el sonido (una mano 又 yòu junto a un acantilado 厂 hǎn).

CULTURA: el arroz es tan central que 饭 (fàn) significa «comida» en general: 早饭 (zǎofàn) desayuno, 晚饭 (wǎnfàn) cena. Un saludo clásico es 你吃饭了吗？ (nǐ chīfàn le ma?) «¿ya comiste?», que funciona como «¿cómo andás?».

PRONUNCIACIÓN: chī (primero, alto) fàn (cuarto, cae). La ch con la lengua hacia atrás; la i de chī no es una «i»: es un zumbido.`,
en:`WHAT IT IS: "to eat", literally "eat rice". Another compound verb from class: 吃 (chī, to eat) + 饭 (fàn, cooked rice; meal).

THE RULE IN ACTION:
No object: 他在我家吃饭 (tā zài wǒ jiā chīfàn) he eats at my house → 饭 (fàn) stays. Michelle: "you have to put 饭 because you don't have the object".
With an object: 她吃苹果 (tā chī píngguǒ) she eats an apple → 饭 (fàn) goes. Not "她吃饭苹果" (tā chīfàn píngguǒ).
That's why plain "eat", without saying what, is almost always 吃饭 (chīfàn): 吃 (chī) alone sounds incomplete.

THE CHARACTERS: 吃 (chī): 口 (kǒu, mouth) + 乞 (qǐ, to beg), which gives the sound.
饭 (fàn), traditional 飯 (fàn): 饣 (shí, food; the side form of 食 shí, a vessel with food and its lid) + 反 (fǎn), which gives the sound (a hand 又 yòu by a cliff 厂 hǎn).

CULTURE: rice is so central that 饭 (fàn) means "meal" in general: 早饭 (zǎofàn) breakfast, 晚饭 (wǎnfàn) dinner. A classic greeting is 你吃饭了吗？ (nǐ chīfàn le ma?) "have you eaten?", which works like "how are you?".

PRONUNCIATION: chī (1st, high) fàn (4th, falling). ch with the tongue curled back; the i in chī isn't an "ee": it's a buzz.`,
zh:`是什么：吃饭也是动宾式动词：吃＋饭。

规则：没有宾语要说"饭"：他在我家吃饭；有宾语就去掉：她吃苹果（不说"她吃饭苹果"）。

字形：吃：口＋乞（声旁）；饭（飯）：饣（食）＋反（声旁）。

文化：饭泛指一顿饭：早饭、晚饭。"你吃饭了吗？"是常见的问候。`}},
  {id:"ora-11",s:"跳舞",py:"tiàowǔ",es:"bailar",en:"to dance",
   x:{
es:`QUÉ ES: «bailar». Verbo compuesto: 跳 (tiào, saltar) + 舞 (wǔ, danza). Michelle: «跳 (tiào) es saltar, 舞 (wǔ) es baile»: bailar es «saltar la danza».

LA REGLA EN ACCIÓN:
Sin objeto: 我们去跳舞 (wǒmen qù tiàowǔ) vamos a bailar → queda 舞.
Con objeto: 跳 Tango (tiào Tango) bailar tango → se va 舞 (wǔ). En clase salió primero «跳舞 Tango» (tiàowǔ Tango) y Michelle lo marcó: «viste que acá ya sacaste el 舞 (wǔ)».
Tango en chino es 探戈 (tàngē), adaptado por el sonido, aunque mucha gente lo escribe en letras latinas, como hizo Michelle.

LOS CARACTERES: 跳 (tiào): 𧾷 (zú, pie, la forma lateral de 足 zú) + 兆 (zhào), que da el sonido (dibujaba las grietas de un hueso de adivinación). El pie dice que es una acción de las piernas.
舞 (wǔ): en los huesos oraculares es una persona con los brazos abiertos sosteniendo adornos (colas de animal o plumas): un bailarín. Ese mismo dibujo se usó, por el sonido, para «no tener» (無 wú). Para distinguirlos se le agregó abajo 舛 (chuǎn, dos pies que apuntan en direcciones opuestas: pasos de baile), y así nació 舞. Es una de las etimologías más aceptadas.

PRONUNCIACIÓN: tiào (cuarto) wǔ (tercero).`,
en:`WHAT IT IS: "to dance". A compound verb: 跳 (tiào, to jump) + 舞 (wǔ, dance). Michelle: "跳 (tiào) is jump, 舞 (wǔ) is dance": dancing is "jumping the dance".

THE RULE IN ACTION:
No object: 我们去跳舞 (wǒmen qù tiàowǔ) let's go dancing → 舞 stays.
With an object: 跳 Tango (tiào Tango) to dance tango → 舞 (wǔ) goes. In class "跳舞 Tango" (tiàowǔ Tango) came out first, and Michelle pointed it out: "see, here you already drop the 舞 (wǔ)".
Tango in Chinese is 探戈 (tàngē), adapted by sound, though many people write it in Latin letters, as Michelle did.

THE CHARACTERS: 跳 (tiào): 𧾷 (zú, foot, the side form of 足 zú) + 兆 (zhào), which gives the sound (it showed the cracks on a divination bone). The foot says it's a leg action.
舞 (wǔ): on oracle bones it's a person with open arms holding ornaments (animal tails or feathers): a dancer. The same drawing was borrowed, for its sound, for "not have" (無 wú). To tell them apart, 舛 (chuǎn, two feet pointing opposite ways: dance steps) was added below, and so 舞 was born. One of the best-accepted etymologies.

PRONUNCIATION: tiào (4th) wǔ (3rd).`,
zh:`是什么：跳舞＝跳＋舞，动宾式动词。

规则：没有宾语：我们去跳舞；有宾语去掉"舞"：跳 Tango（探戈）。课上老师提醒：有宾语就不要"舞"。

字形：跳：足字旁＋兆（声旁）。舞：甲骨文是人拿着舞具跳舞，后来这个字被借去表示"無"，于是下面加"舛"（两只脚）造出"舞"。`}},
  {id:"ora-12",s:"下雨",py:"xiàyǔ",es:"llover",en:"to rain",
   x:{
es:`QUÉ ES: «llover», literalmente «bajar lluvia». Otro verbo compuesto: 下 (xià, bajar, caer) es el verbo y 雨 (yǔ, lluvia) su objeto.

LA REGLA DE MICHELLE PARA CANTIDADES: «cuando es un verbo compuesto, mucho, poco o un poquito va ENTRE las dos partes»: 下很多雨 (xià hěn duō yǔ) llueve mucho, literalmente «baja mucha lluvia». No «下雨很多» (xiàyǔ hěn duō).
La oración de clase: 昨天下很多雨 (zuótiān xià hěn duō yǔ) ayer llovió mucho.

SIN SUJETO: es de las pocas oraciones chinas sin sujeto, como «llueve» en español: nadie hace llover.

LOS CARACTERES: 下 (xià): un signo indicativo: una línea de referencia y una marca DEBAJO de ella. Su opuesto, 上 (shàng), tiene la marca arriba.
雨 (yǔ): un pictograma: la raya de arriba es el cielo, el marco las nubes y los puntos las gotas que caen. Es el radical de muchas palabras del clima: 雪 (xuě, nieve), 雷 (léi, trueno), 雲 (yún, nube, en tradicional).

LA MISMA IDEA: 下雪 (xiàxuě) nevar, «bajar nieve».

PRONUNCIACIÓN: xià (cuarto) yǔ (tercero). La x se parece a una «s» suave con la punta de la lengua contra los dientes de abajo.`,
en:`WHAT IT IS: "to rain", literally "fall rain". Another compound verb: 下 (xià, to go down, fall) is the verb and 雨 (yǔ, rain) its object.

MICHELLE'S RULE FOR AMOUNTS: "when it's a compound verb, a lot, a little or a bit goes BETWEEN the two parts": 下很多雨 (xià hěn duō yǔ) it rains a lot, literally "falls a lot of rain". Not "下雨很多" (xiàyǔ hěn duō).
The class sentence: 昨天下很多雨 (zuótiān xià hěn duō yǔ) it rained a lot yesterday.

NO SUBJECT: one of the few Chinese sentences without a subject, like "it rains" (English needs a dummy "it"; Chinese doesn't).

THE CHARACTERS: 下 (xià): an indicative sign: a reference line and a mark BELOW it. Its opposite, 上 (shàng), has the mark above.
雨 (yǔ): a pictograph: the top stroke is the sky, the frame the clouds and the dots falling drops. It's the radical of many weather words: 雪 (xuě, snow), 雷 (léi, thunder), 雲 (yún, cloud, traditional).

SAME IDEA: 下雪 (xiàxuě) to snow, "fall snow".

PRONUNCIATION: xià (4th) yǔ (3rd). The x is like a soft "s" with the tongue tip against the lower teeth.`,
zh:`是什么：下雨＝下（动词）＋雨（宾语）。

老师的规则：动宾式动词的数量词放在中间：下很多雨（不说"下雨很多"）。昨天下很多雨。

没有主语：和西班牙语 llueve 一样。

字形：下：指事字，横线下面加一点；上相反。雨：象形，上面是天，点是雨滴；雪、雷、雲都用雨字头。下雪也一样。`}},
  {id:"ora-13",s:"打扫",t:"打掃",py:"dǎsǎo",es:"limpiar (la casa), barrer",en:"to clean (the house), sweep",
   x:{
es:`QUÉ ES: «limpiar, barrer, hacer la limpieza». La oración de clase: 我打扫房子 (wǒ dǎsǎo fángzi) limpio la casa.

LOS CARACTERES: los dos tienen a la izquierda 扌 (shǒu, mano; la forma lateral de 手 shǒu): es trabajo con las manos.
打 (dǎ): 扌 + 丁 (dīng, un clavo; en la forma antigua, la cabeza del clavo vista desde arriba). Mano + clavo: golpear. 丁 da también algo del sonido. 打 (dǎ) es un verbo comodín: 打电话 (dǎ diànhuà) llamar por teléfono, 打篮球 (dǎ lánqiú) jugar al básquet.
扫 (sǎo), tradicional 掃 (sǎo): 扌 + 帚 (zhǒu, escoba: el dibujo de una escoba de ramas atadas, con el mango hacia abajo). Una mano con escoba: barrer. La forma simplificada 扫 solo conserva la parte de arriba de la escoba (彐 jì).

OJO: 房子 (fángzi) es la casa como edificio; 家 (jiā) es el hogar, la familia. Para «limpiar la casa» va 房子 (fángzi); para «estar en casa», 家 (jiā).

PRONUNCIACIÓN: dǎ sǎo: dos terceros tonos seguidos, el primero se vuelve segundo: dásǎo.`,
en:`WHAT IT IS: "to clean, sweep, do the cleaning". The class sentence: 我打扫房子 (wǒ dǎsǎo fángzi) I clean the house.

THE CHARACTERS: both have 扌 (shǒu, hand; the side form of 手 shǒu) on the left: it's work done with your hands.
打 (dǎ): 扌 + 丁 (dīng, a nail; in the old form, the nail head seen from above). Hand + nail: to hit. 丁 also gives part of the sound. 打 (dǎ) is a do-everything verb: 打电话 (dǎ diànhuà) to phone, 打篮球 (dǎ lánqiú) to play basketball.
扫 (sǎo), traditional 掃 (sǎo): 扌 + 帚 (zhǒu, broom: a drawing of a broom of tied twigs, handle down). A hand with a broom: to sweep. The simplified 扫 keeps only the top of the broom (彐 jì).

CAREFUL: 房子 (fángzi) is the house as a building; 家 (jiā) is home, family. "Clean the house" uses 房子 (fángzi); "be at home" uses 家 (jiā).

PRONUNCIATION: dǎ sǎo: two 3rd tones in a row, the first becomes 2nd: dásǎo.`,
zh:`是什么：打扫＝打扫卫生、清洁。课上：我打扫房子。

字形：两个字都有提手旁，表示用手做的事。打：扌＋丁（钉子，也表音）。扫（掃）：扌＋帚（扫帚的象形），简体只保留帚的上部。

注意：房子是建筑物，家是家庭；打扫房子，在家。两个三声：dá sǎo。`}},
  {id:"ora-14",s:"煮饭",t:"煮飯",py:"zhǔfàn",es:"cocinar",en:"to cook",
   x:{
es:`QUÉ ES: «cocinar», literalmente «hervir arroz». Otro verbo compuesto, como 吃饭 (chīfàn): 煮 (zhǔ, hervir, cocer) + 饭 (fàn, arroz; comida). La oración de clase: 我打扫房子和煮饭 (wǒ dǎsǎo fángzi hé zhǔfàn) limpio la casa y cocino.

LA REGLA: con un plato concreto se va 饭 (fàn): 煮面 (zhǔ miàn) hervir fideos, 煮汤 (zhǔ tāng) hacer sopa.

EL CARÁCTER 煮 (zhǔ): 灬 (huǒ, fuego: la forma de abajo de 火 huǒ, cuatro llamas) + 者 (zhě), que da el sonido. Fuego debajo de la olla.

TAIWÁN Y CHINA: en Taiwán 煮饭 (zhǔfàn) es la forma más común para «cocinar»; en China se oye más 做饭 (zuòfàn, «hacer la comida»). Las dos se entienden en todas partes.

PRONUNCIACIÓN: zhǔ (tercero) fàn (cuarto). zh con la lengua hacia atrás, parecida a una «ch» sin soplar aire.`,
en:`WHAT IT IS: "to cook", literally "boil rice". Another compound verb, like 吃饭 (chīfàn): 煮 (zhǔ, to boil, cook) + 饭 (fàn, rice; meal). The class sentence: 我打扫房子和煮饭 (wǒ dǎsǎo fángzi hé zhǔfàn) I clean the house and cook.

THE RULE: with a specific dish, 饭 (fàn) goes: 煮面 (zhǔ miàn) boil noodles, 煮汤 (zhǔ tāng) make soup.

THE CHARACTER 煮 (zhǔ): 灬 (huǒ, fire: the bottom form of 火 huǒ, four flames) + 者 (zhě), which gives the sound. Fire under the pot.

TAIWAN AND CHINA: in Taiwan 煮饭 (zhǔfàn) is the most common way to say "cook"; in China you hear 做饭 (zuòfàn, "make the meal") more. Both are understood everywhere.

PRONUNCIATION: zhǔ (3rd) fàn (4th). zh with the tongue curled back, like a "j" with no voicing.`,
zh:`是什么：煮饭＝煮＋饭，动宾式动词。课上：我打扫房子和煮饭。

规则：有具体的菜就去掉"饭"：煮面、煮汤。

字形：煮：灬（火）＋者（声旁），锅下面有火。

台湾常说煮饭，大陆多说做饭。`}},
  {id:"ora-15",s:"喝",py:"hē",es:"beber, tomar",en:"to drink",
   x:{
es:`QUÉ ES: «beber, tomar». En clase: 喝一杯茶 (hē yì bēi chá) tomar un vaso (o una taza) de té.

EL CARÁCTER 喝 (hē): 口 (kǒu, boca) + 曷 (hé), que da el sonido. La boca aparece en casi todo lo que entra o sale por ella: 吃 (chī) comer, 喝 (hē) beber, 叫 (jiào) llamar.

NO ES COMPUESTO: a diferencia de 吃饭 (chīfàn), 喝 (hē) va solo: 喝茶 (hē chá) tomar té, 喝水 (hē shuǐ) tomar agua, 喝咖啡 (hē kāfēi) tomar café.

OJO: en español «tomar» sirve para el colectivo y para el café; en chino 喝 (hē) es solo beber. «Tomar sopa» también es 喝汤 (hē tāng), porque la sopa se bebe.

PRONUNCIACIÓN: hē, primer tono (alto y plano). La h es áspera, como una «j» española suave.`,
en:`WHAT IT IS: "to drink". In class: 喝一杯茶 (hē yì bēi chá) to drink a glass (or a cup) of tea.

THE CHARACTER 喝 (hē): 口 (kǒu, mouth) + 曷 (hé), which gives the sound. The mouth shows up in almost everything that goes in or out of it: 吃 (chī) eat, 喝 (hē) drink, 叫 (jiào) call.

NOT A COMPOUND: unlike 吃饭 (chīfàn), 喝 (hē) stands alone: 喝茶 (hē chá) drink tea, 喝水 (hē shuǐ) drink water, 喝咖啡 (hē kāfēi) drink coffee.

CAREFUL: Spanish "tomar" works for the bus and for coffee; Chinese 喝 (hē) is only drinking. "Have soup" is also 喝汤 (hē tāng), because soup is drunk.

PRONUNCIATION: hē, 1st tone (high and flat). The h is raspy, like a soft Spanish "j".`,
zh:`是什么：喝＝饮。课上：喝一杯茶。

字形：口＋曷（声旁）；吃、喝、叫都有口字旁。

不是动宾式动词：喝茶、喝水、喝咖啡。喝汤也用喝。`}},
  {id:"ora-16",s:"玩",py:"wán",es:"jugar, divertirse",en:"to play, have fun",
   x:{
es:`QUÉ ES: «jugar, divertirse, pasarla bien». En clase: 我很久没有玩 (wǒ hěn jiǔ méiyǒu wán) hace mucho que no juego.

EL CARÁCTER 玩 (wán): 王 (wáng), que acá no es «rey» sino 玉 (yù, jade) sin el punto, + 元 (yuán), que da el sonido. El sentido original: tener en la mano y dar vueltas a una pieza de jade por placer. De ahí «jugar con algo», «divertirse».

CUÁNDO 玩 (wán) Y CUÁNDO OTRO VERBO: 玩 (wán) es jugar en general o pasear: 去玩 (qù wán) ir a pasear, 玩游戏 (wán yóuxì) jugar videojuegos. Los deportes de pelota tienen su verbo: 踢足球 (tī zúqiú) fútbol, 打篮球 (dǎ lánqiú) básquet. Por eso, hablando de fútbol, un nativo diría más bien 我很久没踢球了 (wǒ hěn jiǔ méi tī qiú le).

PRONUNCIACIÓN: wán, segundo tono (sube). No confundir con 晚 (wǎn, tarde, tercero) ni con 万 (wàn, diez mil, cuarto).`,
en:`WHAT IT IS: "to play, have fun, have a good time". In class: 我很久没有玩 (wǒ hěn jiǔ méiyǒu wán) I haven't played for a long time.

THE CHARACTER 玩 (wán): 王 (wáng), which here isn't "king" but 玉 (yù, jade) without its dot, + 元 (yuán), which gives the sound. The original meaning: turning a piece of jade over in your hand for pleasure. From there "play with something", "have fun".

WHEN 玩 (wán) AND WHEN ANOTHER VERB: 玩 (wán) is playing in general, or going out: 去玩 (qù wán) go out and have fun, 玩游戏 (wán yóuxì) play video games. Ball sports have their own verb: 踢足球 (tī zúqiú) football, 打篮球 (dǎ lánqiú) basketball. So, talking about football, a native would rather say 我很久没踢球了 (wǒ hěn jiǔ méi tī qiú le).

PRONUNCIATION: wán, 2nd tone (rising). Don't mix it up with 晚 (wǎn, late, 3rd) or 万 (wàn, ten thousand, 4th).`,
zh:`是什么：玩＝玩耍、游玩。课上：我很久没有玩。

字形：王（玉）＋元（声旁），本义是把玩玉器。

用法：一般的玩：去玩、玩游戏；球类运动有专门的动词：踢足球、打篮球。说足球时更自然的是"我很久没踢球了"。

注意：玩 wán、晚 wǎn、万 wàn。`}},
  {id:"ora-17",s:"找到",py:"zhǎodào",es:"encontrar",en:"to find",
   x:{
es:`QUÉ ES: «encontrar». 找 (zhǎo) buscar + 到 (dào) llegar: «buscar hasta llegar». En clase: 我在互联网上找到一个群 (wǒ zài hùliánwǎng shàng zhǎodào yí ge qún) encontré un grupo en internet.

UN PATRÓN MUY CHINO, VERBO + RESULTADO: 找 (zhǎo) solo es «buscar» (la acción); 到 (dào) agrega el resultado: lo logré. Lo mismo: 看 (kàn) mirar → 看到 (kàndào) ver, lograr ver; 听 (tīng) escuchar → 听到 (tīngdào) oír.
Como el resultado ya se logró, 找到 (zhǎodào) en general habla del pasado aunque el verbo no cambie. Michelle: «se supone que si lo encontraste, fue en el pasado».

LOS CARACTERES: 找 (zhǎo): 扌 (shǒu, mano) + 戈 (gē, una alabarda: palo largo con una hoja). Su origen no está claro: parece haber sido una variante de otro carácter, 划 (huá, remar), y el sentido «buscar» es posterior. No hay que buscarle un dibujo lógico.
到 (dào): 至 (zhì, una flecha que llega al suelo: «llegar») + 刂 (dāo, cuchillo), que da el sonido.

OJO: no confundir con 早 (zǎo, temprano), que suena parecido: 找 (zhǎo) lleva zh, con la lengua hacia atrás.

PRONUNCIACIÓN: zhǎo (tercero) dào (cuarto).`,
en:`WHAT IT IS: "to find". 找 (zhǎo) look for + 到 (dào) arrive: "look until you get there". In class: 我在互联网上找到一个群 (wǒ zài hùliánwǎng shàng zhǎodào yí ge qún) I found a group on the internet.

A VERY CHINESE PATTERN, VERB + RESULT: 找 (zhǎo) alone is "look for" (the action); 到 (dào) adds the result: I got it. Same with 看 (kàn) look → 看到 (kàndào) see, manage to see; 听 (tīng) listen → 听到 (tīngdào) hear.
Since the result has been reached, 找到 (zhǎodào) usually talks about the past even though the verb doesn't change. Michelle: "if you found it, it's assumed it was in the past".

THE CHARACTERS: 找 (zhǎo): 扌 (shǒu, hand) + 戈 (gē, a halberd: a long pole with a blade). Its origin isn't clear: it seems to have been a variant of another character, 划 (huá, to row), and the meaning "look for" came later. Don't look for a logical picture in it.
到 (dào): 至 (zhì, an arrow reaching the ground: "arrive") + 刂 (dāo, knife), which gives the sound.

CAREFUL: don't confuse it with 早 (zǎo, early), which sounds similar: 找 (zhǎo) has zh, with the tongue curled back.

PRONUNCIATION: zhǎo (3rd) dào (4th).`,
zh:`是什么：找到＝找（动作）＋到（结果）。课上：我在互联网上找到一个群。

动词＋结果补语：看到、听到。因为结果已经达成，一般表示过去。老师：找到了，当然是过去的事。

字形：找：扌＋戈，来源不清楚，可能原是"划"的异体，"寻找"义是后起的。到：至（箭落到地上）＋刂（声旁）。

注意：找 zhǎo 和 早 zǎo。`}},
  {id:"ora-18",s:"踢足球",py:"tī zúqiú",es:"jugar al fútbol",en:"to play football (soccer)",
   x:{
es:`QUÉ ES: «jugar al fútbol», literalmente «patear la pelota de pie». Michelle: en chino no se «juega» al fútbol: el verbo es 踢 (tī, patear).

LA REGLA DE LOS DEPORTES: el fútbol es el deporte de pelota común que va con 踢 (tī, patear, con el radical de pie). Casi todos los demás van con 打 (dǎ, golpear, con el radical de mano), porque la pelota se golpea con la mano: 打篮球 (dǎ lánqiú) básquet, 打网球 (dǎ wǎngqiú) tenis, 打排球 (dǎ páiqiú) vóley. Michelle: «la única vez que el radical de la izquierda es pierna».

LOS CARACTERES: 踢 (tī): 𧾷 (zú, pie) + 易 (yì), que acá solo da el sonido.
足 (zú): una pierna con su pie: arriba un círculo (口 kǒu), que representa la rodilla o la pierna, y abajo 止 (zhǐ), un pie con los dedos. 足球 (zúqiú) = «pelota de pie».
球 (qiú): 王 (wáng, acá = 玉 yù, jade) + 求 (qiú), que da el sonido. Originalmente una bolita de jade; hoy cualquier pelota o esfera.

EN LA ORACIÓN: 今天，我要去我的学校附近踢足球 (jīntiān, wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú). Como 去 (qù, ir) es de movimiento, el lugar va después de 去 y la actividad al final.

PRONUNCIACIÓN: tī (primero) zú (segundo) qiú (segundo). Es zú, con una z que suena como «ds»; no «zhù».`,
en:`WHAT IT IS: "to play football (soccer)", literally "kick the foot-ball". Michelle: in Chinese you don't "play" football: the verb is 踢 (tī, to kick).

THE SPORTS RULE: football is the common ball sport that takes 踢 (tī, kick, with the foot radical). Almost all the others take 打 (dǎ, hit, with the hand radical), because the ball is struck with the hand: 打篮球 (dǎ lánqiú) basketball, 打网球 (dǎ wǎngqiú) tennis, 打排球 (dǎ páiqiú) volleyball. Michelle: "the only time the left radical is a leg".

THE CHARACTERS: 踢 (tī): 𧾷 (zú, foot) + 易 (yì), which here only gives the sound.
足 (zú): a leg with its foot: on top a circle (口 kǒu), standing for the knee or leg, below 止 (zhǐ), a foot with toes. 足球 (zúqiú) = "foot ball".
球 (qiú): 王 (wáng, here = 玉 yù, jade) + 求 (qiú), which gives the sound. Originally a small jade bead; today any ball or sphere.

IN THE SENTENCE: 今天，我要去我的学校附近踢足球 (jīntiān, wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú). Since 去 (qù, go) is a movement verb, the place comes after 去 and the activity at the end.

PRONUNCIATION: tī (1st) zú (2nd) qiú (2nd). It's zú, with a z that sounds like "ds"; not "zhù".`,
zh:`是什么：踢足球。老师：足球不用"玩"，用"踢"。

运动的规则：足球用踢（足字旁）；大部分球类用打（提手旁）：打篮球、打网球、打排球。

字形：踢：足字旁＋易（声旁）。足：上面是膝盖或小腿，下面是脚（止）。球：王（玉）＋求（声旁），本义是玉珠。

句子：今天，我要去我的学校附近踢足球（去是移动动词，地点在后）。`}},
  {id:"ora-19",s:"打",py:"dǎ",es:"pegar, golpear (y deportes con la mano)",en:"to hit (and hand ball sports)",
   x:{
es:`QUÉ ES: «pegar, golpear». Así lo anotó Michelle en la clase: 打：pegar. Pero es uno de los verbos más versátiles del chino: sirve para casi cualquier acción con las manos.

LOS USOS QUE MÁS VAS A OÍR:
打扫 (dǎsǎo) limpiar · 打电话 (dǎ diànhuà) llamar por teléfono · 打篮球 (dǎ lánqiú) jugar al básquet · 打网球 (dǎ wǎngqiú) jugar al tenis · 打车 (dǎchē) tomar un taxi.

EL CARÁCTER: 扌 (shǒu, mano) + 丁 (dīng). 丁 dibujaba un clavo (la cabeza vista de arriba; después, de costado con su punta). Mano + clavo: martillar, golpear. 丁 aporta también algo del sonido.

CONTRASTE: 打 (dǎ, con la mano) vs 踢 (tī, con el pie): 打篮球 (dǎ lánqiú) pero 踢足球 (tī zúqiú).

PRONUNCIACIÓN: dǎ, tercer tono (baja y sube). La d china no vibra: suena entre «t» y «d».`,
en:`WHAT IT IS: "to hit, strike". That's how Michelle noted it in class: 打：pegar. But it's one of the most versatile verbs in Chinese: it covers almost any action done with the hands.

THE USES YOU'LL HEAR MOST:
打扫 (dǎsǎo) to clean · 打电话 (dǎ diànhuà) to phone · 打篮球 (dǎ lánqiú) to play basketball · 打网球 (dǎ wǎngqiú) to play tennis · 打车 (dǎchē) to take a taxi.

THE CHARACTER: 扌 (shǒu, hand) + 丁 (dīng). 丁 showed a nail (the head seen from above; later from the side with its point). Hand + nail: to hammer, hit. 丁 also gives part of the sound.

CONTRAST: 打 (dǎ, with the hand) vs 踢 (tī, with the foot): 打篮球 (dǎ lánqiú) but 踢足球 (tī zúqiú).

PRONUNCIATION: dǎ, 3rd tone (dips and rises). The Chinese d isn't voiced: it's between "t" and "d".`,
zh:`是什么：打＝打击、敲打。老师在讲义上写：打：pegar。也是最常用的动词之一。

常见用法：打扫、打电话、打篮球、打网球、打车。

字形：扌＋丁（钉子，也表音），用手敲钉子。

对比：打（手）／踢（脚）：打篮球，踢足球。`}},
  {id:"ora-20",s:"考试",t:"考試",py:"kǎoshì",es:"examen; rendir un examen",en:"exam; to take an exam",
   x:{
es:`QUÉ ES: «examen» y también «rendir un examen». En clase: 明天的考试 (míngtiān de kǎoshì) el examen de mañana.

LOS CARACTERES: 考 (kǎo): en los huesos oraculares era el mismo dibujo que 老 (lǎo, viejo): un anciano de pelo largo apoyado en un bastón. Al principio 考 (kǎo) significaba «anciano, padre fallecido»; «examinar, poner a prueba» es un préstamo posterior. Arriba todavía se ve 耂, la cabeza de pelo largo del anciano, la misma de 老 (lǎo) en 老师 (lǎoshī).
试 (shì), tradicional 試 (shì): 讠 (yán, palabra) + 式 (shì, modelo, fórmula), que da el sonido y algo de sentido: probar con palabras contra un modelo.

TAMBIÉN VERBO: 我明天考试 (wǒ míngtiān kǎoshì) mañana rindo.

CULTURA: durante unos mil trescientos años China eligió a sus funcionarios por exámenes imperiales (科举 kējǔ). La cultura del examen sigue muy fuerte, por ejemplo en el examen de ingreso a la universidad, el 高考 (gāokǎo).

PRONUNCIACIÓN: kǎo (tercero) shì (cuarto).`,
en:`WHAT IT IS: "exam", and also "to take an exam". In class: 明天的考试 (míngtiān de kǎoshì) tomorrow's exam.

THE CHARACTERS: 考 (kǎo): on oracle bones it was the same drawing as 老 (lǎo, old): an old man with long hair leaning on a cane. At first 考 (kǎo) meant "elder, late father"; "to examine, test" is a later loan. On top you still see 耂, the old man's long-haired head, the same as in 老 (lǎo) of 老师 (lǎoshī).
试 (shì), traditional 試 (shì): 讠 (yán, word) + 式 (shì, model, formula), which gives the sound and some meaning: testing with words against a model.

ALSO A VERB: 我明天考试 (wǒ míngtiān kǎoshì) I have an exam tomorrow.

CULTURE: for about thirteen hundred years China chose its officials through imperial examinations (科举 kējǔ). Exam culture is still very strong, for instance the university entrance exam, the 高考 (gāokǎo).

PRONUNCIATION: kǎo (3rd) shì (4th).`,
zh:`是什么：考试（名词、动词）：明天的考试；我明天考试。

字形：考和老在甲骨文是同一个字，像拄拐杖的长发老人，本义是老人、亡父；"考核"是后来的假借义。试（試）：讠＋式（声旁兼义）。

文化：科举制度延续约一千三百年；今天有高考。`}},
  {id:"ora-21",s:"数学",t:"數學",py:"shùxué",es:"matemáticas",en:"mathematics",
   x:{
es:`QUÉ ES: «matemáticas». 数 (shù, número) + 学 (xué, estudio): «el estudio de los números». La oración de clase: 我读数学 (wǒ dú shùxué) estudio matemáticas.

EL MISMO 学 (xué) DE LAS MATERIAS: 学 (xué) al final de una palabra funciona como «-logía, ciencia de»: 化学 (huàxué) química, 文学 (wénxué) literatura, 科学 (kēxué) ciencia.

LOS CARACTERES: 数 (shù), tradicional 數 (shù): 娄 (lóu), que da el sonido, + 攵 (pū, una mano con un palo: hacer una acción). Contar marcando, golpeando.
学 (xué), tradicional 學 (xué): arriba dos manos que enseñan varillas de contar cruzadas (爻 yáo), en el medio un techo (冖 mì) y abajo un niño (子 zǐ): un chico bajo techo aprendiendo a contar. El simplificado resume la parte de arriba en tres trazos.

OJO: 数 tiene dos lecturas: shù «número» (数学 shùxué) y shǔ «contar», el verbo: 数一数 (shǔ yi shǔ) contá.

TAIWÁN: en el acento de Taiwán, sh, zh y ch muchas veces suenan como s, z y c. Por eso podés oír «sùxué».

PRONUNCIACIÓN: shù (cuarto) xué (segundo).`,
en:`WHAT IT IS: "mathematics". 数 (shù, number) + 学 (xué, study): "the study of numbers". The class sentence: 我读数学 (wǒ dú shùxué) I study maths.

THE SAME 学 (xué) AS IN SCHOOL SUBJECTS: 学 (xué) at the end of a word works like "-ology, the science of": 化学 (huàxué) chemistry, 文学 (wénxué) literature, 科学 (kēxué) science.

THE CHARACTERS: 数 (shù), traditional 數 (shù): 娄 (lóu), which gives the sound, + 攵 (pū, a hand with a stick: doing an action). Counting by marking, tapping.
学 (xué), traditional 學 (xué): on top two hands showing crossed counting sticks (爻 yáo), in the middle a roof (冖 mì) and below a child (子 zǐ): a child under a roof learning to count. The simplified form sums up the top in three strokes.

CAREFUL: 数 has two readings: shù "number" (数学 shùxué) and shǔ "to count", the verb: 数一数 (shǔ yi shǔ) count them.

TAIWAN: in the Taiwanese accent, sh, zh and ch often sound like s, z and c. So you may hear "sùxué".

PRONUNCIATION: shù (4th) xué (2nd).`,
zh:`是什么：数学＝数＋学。课上：我读数学。

学科的"学"：化学、文学、科学。

字形：数（數）：娄（声旁）＋攵（手持棍，表示动作）。学（學）：上面是双手和算筹（爻），中间是屋顶，下面是孩子。

注意：数有两个读音：shù（数学）、shǔ（数一数）。台湾口音常把 sh 读成 s。`}},
  {id:"ora-22",s:"公园",t:"公園",py:"gōngyuán",es:"parque",en:"park",
   x:{
es:`QUÉ ES: «parque». 公 (gōng, público) + 园 (yuán, jardín): «jardín público». La oración de clase: 我的朋友在公园跳 Tango (wǒ de péngyǒu zài gōngyuán tiào Tango) mi amigo baila tango en el parque.

LOS CARACTERES: 公 (gōng): arriba 八 (bā), que acá dibuja algo que se separa, se reparte; abajo 厶 (sī, «privado, propio»). La explicación clásica, del filósofo Han Feizi (siglo III a. C.): «dar la espalda a lo privado es lo público». En los huesos oraculares lo de abajo era un 口 (una vasija o un espacio), así que esa explicación es tradicional, no segura. Es el mismo 公 (gōng) de 公狗 (gōng gǒu, perro macho).
园 (yuán), tradicional 園 (yuán): 囗 (wéi, un recinto cerrado) + 元 (yuán), que da el sonido (en tradicional 袁 yuán). Un terreno cercado con plantas: jardín. Lo mismo en 动物园 (dòngwùyuán) zoológico, «jardín de animales».

EL LUGAR VA ANTES DEL VERBO: 在公园 (zài gōngyuán, en el parque) + 跳 (tiào). No «跳 Tango 在公园».

PRONUNCIACIÓN: gōng (primero) yuán (segundo). En yuán la ü va redondeada: casi «yüen».`,
en:`WHAT IT IS: "park". 公 (gōng, public) + 园 (yuán, garden): "public garden". The class sentence: 我的朋友在公园跳 Tango (wǒ de péngyǒu zài gōngyuán tiào Tango) my friend dances tango in the park.

THE CHARACTERS: 公 (gōng): on top 八 (bā), which here shows something splitting, being shared out; below 厶 (sī, "private, one's own"). The classic explanation, from the philosopher Han Feizi (3rd century BC): "turning your back on the private is the public". On oracle bones the bottom part was a 口 (a vessel or a space), so that explanation is traditional, not certain. It's the same 公 (gōng) as in 公狗 (gōng gǒu, male dog).
园 (yuán), traditional 園 (yuán): 囗 (wéi, an enclosure) + 元 (yuán), which gives the sound (traditional 袁 yuán). A fenced plot with plants: garden. Same in 动物园 (dòngwùyuán) zoo, "animal garden".

THE PLACE GOES BEFORE THE VERB: 在公园 (zài gōngyuán, in the park) + 跳 (tiào). Not "跳 Tango 在公园".

PRONUNCIATION: gōng (1st) yuán (2nd). In yuán the ü is rounded: almost "yü-en".`,
zh:`是什么：公园＝公（公共）＋园（园子）。课上：我的朋友在公园跳 Tango。

字形：公：八（分开）＋厶（私），韩非子说"背私为公"，但甲骨文下面是"口"，这个解释是传统说法。园（園）：囗（围墙）＋元／袁（声旁）。动物园。

语序：地点在动词前：在公园跳。`}},
  {id:"ora-23",s:"汉堡",t:"漢堡",py:"hànbǎo",es:"hamburguesa",en:"hamburger",
   x:{
es:`QUÉ ES: «hamburguesa». Es una palabra adaptada por el sonido de «Hamburg» (Hamburgo, la ciudad alemana de donde viene el nombre). También se dice 汉堡包 (hànbǎobāo), con 包 (bāo, bollo). En clase: 我吃一个汉堡 (wǒ chī yí ge hànbǎo) comí una hamburguesa.

LOS CARACTERES (elegidos por el sonido, pero con suerte):
汉 (hàn), tradicional 漢 (hàn): 氵 (shuǐ, agua) + una parte fonética (en el simplificado reducida a 又 yòu). Era el nombre del río Han; de ahí la dinastía Han y hoy «chino»: 汉语 (hànyǔ) idioma chino, 汉字 (hànzì) caracteres chinos.
堡 (bǎo): 保 (bǎo, proteger), que da el sonido y el sentido, + 土 (tǔ, tierra): «fortaleza de tierra». Y justo «burg» en alemán significa «fortaleza»: la adaptación acertó también el significado.

CLASIFICADOR: 一个汉堡 (yí ge hànbǎo), con el general 个 (gè).

PRONUNCIACIÓN: hàn (cuarto) bǎo (tercero).`,
en:`WHAT IT IS: "hamburger". A word adapted from the sound of "Hamburg", the German city the name comes from. It's also 汉堡包 (hànbǎobāo), with 包 (bāo, bun). In class: 我吃一个汉堡 (wǒ chī yí ge hànbǎo) I ate a hamburger.

THE CHARACTERS (picked for sound, but with luck):
汉 (hàn), traditional 漢 (hàn): 氵 (shuǐ, water) + a phonetic part (reduced to 又 yòu in simplified). It was the name of the Han river; from there the Han dynasty and today "Chinese": 汉语 (hànyǔ) the Chinese language, 汉字 (hànzì) Chinese characters.
堡 (bǎo): 保 (bǎo, to protect), which gives sound and meaning, + 土 (tǔ, earth): "earthen fortress". And German "burg" means exactly "fortress": the adaptation got the meaning right too.

MEASURE WORD: 一个汉堡 (yí ge hànbǎo), with the general 个 (gè).

PRONUNCIATION: hàn (4th) bǎo (3rd).`,
zh:`是什么：汉堡（汉堡包），来自德国城市 Hamburg 的音译。课上：我吃一个汉堡。

字形：汉（漢）：氵＋声旁，本是汉水，后来指汉朝、汉语、汉字。堡：保（声旁兼义）＋土，土城堡；德语 burg 正好也是"城堡"。

量词：一个汉堡。`}},
  {id:"ora-24",s:"附近",py:"fùjìn",es:"cerca (de), por la zona",en:"near, nearby",
   x:{
es:`QUÉ ES: «cerca, en los alrededores, por la zona». En clase: 我的学校附近 (wǒ de xuéxiào fùjìn) cerca de mi escuela.

VA DESPUÉS, COMO LAS PALABRAS DE POSICIÓN: en español «cerca DE mi escuela»; en chino «mi escuela cerca»: primero el lugar de referencia y después 附近 (fùjìn). Es la misma regla que Michelle explicó con 桌子下面 (zhuōzi xiàmiàn, debajo de la mesa).

LOS CARACTERES: 附 (fù): a la izquierda 阝 (fù, de 阜 fù, una colina o escalones de tierra) + 付 (fù, entregar), que da el sonido. Pegado a la colina: «adherirse, junto a».
近 (jìn): 辶 (chuò, caminar: un pie en un camino) + 斤 (jīn, un hacha), que da el sonido. Lo que se alcanza caminando poco: cerca.

EN LA ORACIÓN: 我要去我的学校附近踢足球 (wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú). Vladimir quería decir «cerca de donde vivo»; Michelle propuso «cerca de mi escuela», porque «donde vivo» necesita una oración relativa, una estructura para más adelante.

PRONUNCIACIÓN: fù (cuarto) jìn (cuarto).`,
en:`WHAT IT IS: "near, nearby, around". In class: 我的学校附近 (wǒ de xuéxiào fùjìn) near my school.

IT GOES AFTER, LIKE POSITION WORDS: English says "near my school"; Chinese says "my school near": first the reference place, then 附近 (fùjìn). The same rule Michelle explained with 桌子下面 (zhuōzi xiàmiàn, under the table).

THE CHARACTERS: 附 (fù): on the left 阝 (fù, from 阜 fù, a hill or earthen steps) + 付 (fù, to hand over), which gives the sound. Stuck to the hill: "attach, next to".
近 (jìn): 辶 (chuò, walking: a foot on a road) + 斤 (jīn, an axe), which gives the sound. What you reach after a short walk: near.

IN THE SENTENCE: 我要去我的学校附近踢足球 (wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú). Vladimir wanted to say "near where I live"; Michelle suggested "near my school", because "where I live" needs a relative clause, a structure for later.

PRONUNCIATION: fù (4th) jìn (4th).`,
zh:`是什么：附近。课上：我的学校附近。

语序：和方位词一样放在后面：学校附近（西班牙语是"cerca de la escuela"）。

字形：附：阝（阜，土山）＋付（声旁）；近：辶＋斤（声旁）。

课上：老师建议先说"我的学校附近"，"我住的地方附近"需要定语从句，以后再学。`}},
  {id:"ora-25",s:"互联网",t:"互聯網",py:"hùliánwǎng",es:"internet",en:"the internet",
   x:{
es:`QUÉ ES: «internet», la palabra formal en China continental: «red interconectada». 互 (hù, mutuo) + 联 (lián, unir) + 网 (wǎng, red).

LOS CARACTERES: 互 (hù): el dibujo de una herramienta para enrollar soga, con dos piezas que se enganchan entre sí: «mutuo, recíproco».
联 (lián), tradicional 聯 (lián): 耳 (ěr, oreja) + hilos que se encadenan (la parte derecha del tradicional). La explicación antigua habla de la oreja pegada a la cara; no es segura. Quedate con «hilos que se unen».
网 (wǎng), tradicional 網 (wǎng): un pictograma clarísimo, una red de pesca con sus cuerdas cruzadas.

TAIWÁN Y CHINA: Michelle es de Taiwán, donde la palabra de todos los días es 网路 (wǎnglù; en tradicional 網路, «camino de red»). 互联网 (hùliánwǎng) es la de China continental. En los dos lugares sirve la corta 网上 (wǎngshàng), «en la red». Michelle: «o directamente ponés 网上, más corto».

«EN INTERNET»: 在互联网上 (zài hùliánwǎng shàng): 在 (zài) + lugar + 上 (shàng, sobre), como «sobre la red».

PRONUNCIACIÓN: hù (cuarto) lián (segundo) wǎng (tercero).`,
en:`WHAT IT IS: "the internet", the formal word in mainland China: "interconnected net". 互 (hù, mutual) + 联 (lián, to link) + 网 (wǎng, net).

THE CHARACTERS: 互 (hù): a drawing of a rope-winding tool, two pieces hooked into each other: "mutual, reciprocal".
联 (lián), traditional 聯 (lián): 耳 (ěr, ear) + threads linked in a chain (the right side of the traditional form). The old explanation talks about the ear attached to the face; it isn't certain. Keep "threads joined together".
网 (wǎng), traditional 網 (wǎng): a very clear pictograph, a fishing net with crossed cords.

TAIWAN AND CHINA: Michelle is from Taiwan, where the everyday word is 网路 (wǎnglù; traditional 網路, "net road"). 互联网 (hùliánwǎng) is the mainland word. Both places use the short 网上 (wǎngshàng), "on the net". Michelle: "or just put 网上, shorter".

"ON THE INTERNET": 在互联网上 (zài hùliánwǎng shàng): 在 (zài) + place + 上 (shàng, on), "on the net".

PRONUNCIATION: hù (4th) lián (2nd) wǎng (3rd).`,
zh:`是什么：互联网（大陆的说法），台湾常说网路。都可以说网上。

字形：互：绕绳的工具，两部分互相钩住。联（聯）：耳＋丝相连，旧说"耳连于颊"，不确定。网（網）：渔网的象形。

在互联网上＝在网上。`}},
  {id:"ora-26",s:"网上",t:"網上",py:"wǎngshàng",es:"en internet, online",en:"online, on the internet",
   x:{
es:`QUÉ ES: «en internet, online», literalmente «sobre la red». 网 (wǎng, red) + 上 (shàng, arriba, sobre). Es la forma corta que recomendó Michelle: 我在网上找到一个群 (wǒ zài wǎngshàng zhǎodào yí ge qún) encontré un grupo en internet.

POR QUÉ 上 (shàng): en chino uno está «sobre» la red, igual que una cosa está «sobre» la mesa: 桌子上 (zhuōzi shàng).
上 (shàng): un signo indicativo: una línea de base y una marca ARRIBA. Su opuesto es 下 (xià).

USOS: 网上买东西 (wǎngshàng mǎi dōngxi) comprar por internet. Y al revés, 上网 (shàngwǎng) es un verbo: «conectarse, navegar».

OJO: el orden cambia todo: 网上 (wǎngshàng) «en internet», un lugar; 上网 (shàngwǎng) «conectarse», verbo + objeto.

PRONUNCIACIÓN: wǎng (tercero) shàng (cuarto). Las dos terminan en -ang, con la boca bien abierta.`,
en:`WHAT IT IS: "online, on the internet", literally "on the net". 网 (wǎng, net) + 上 (shàng, up, on). The short form Michelle recommended: 我在网上找到一个群 (wǒ zài wǎngshàng zhǎodào yí ge qún) I found a group online.

WHY 上 (shàng): in Chinese you're "on" the net, just as a thing is "on" the table: 桌子上 (zhuōzi shàng).
上 (shàng): an indicative sign: a base line and a mark ABOVE it. Its opposite is 下 (xià).

USES: 网上买东西 (wǎngshàng mǎi dōngxi) buy things online. And reversed, 上网 (shàngwǎng) is a verb: "go online, surf".

CAREFUL: order changes everything: 网上 (wǎngshàng) "online", a place; 上网 (shàngwǎng) "go online", verb + object.

PRONUNCIATION: wǎng (3rd) shàng (4th). Both end in -ang, mouth wide open.`,
zh:`是什么：网上＝在互联网上的简短说法。老师推荐：我在网上找到一个群。

上：指事字，横线上面一点；和桌子上的"上"一样。

注意：网上（地点）和上网（动词）不同：网上买东西；我在上网。`}},
  {id:"ora-27",s:"群",py:"qún",es:"grupo; rebaño",en:"group; flock",
   x:{
es:`QUÉ ES: «grupo; manada, rebaño». En clase: 我在互联网上找到一个群 (wǒ zài hùliánwǎng shàng zhǎodào yí ge qún) encontré un grupo en internet. Hoy 群 (qún) es también el grupo de chat (en WeChat: 微信群 wēixìn qún).

EL CARÁCTER: 君 (jūn, señor, gobernante), que da el sonido, + 羊 (yáng, oveja: la cabeza con los dos cuernos curvos). Las ovejas andan juntas: «rebaño», y de ahí cualquier grupo. Hay quien agrega que el rebaño sigue a un jefe (君 jūn), pero 君 está ahí sobre todo por el sonido.

TAMBIÉN CLASIFICADOR: 一群人 (yì qún rén) un grupo de gente, 一群羊 (yì qún yáng) un rebaño. Como sustantivo lleva 个 (gè): 一个群 (yí ge qún) un grupo de chat.

EN TAIWÁN: para el grupo de chat se dice mucho 群组 (qúnzǔ).

PRONUNCIACIÓN: qún, segundo tono. Se escribe «un» pero suena «ün»: labios redondeados como para «u», lengua en «i».`,
en:`WHAT IT IS: "group; herd, flock". In class: 我在互联网上找到一个群 (wǒ zài hùliánwǎng shàng zhǎodào yí ge qún) I found a group on the internet. Today 群 (qún) is also a chat group (on WeChat: 微信群 wēixìn qún).

THE CHARACTER: 君 (jūn, lord, ruler), which gives the sound, + 羊 (yáng, sheep: the head with two curved horns). Sheep move together: "flock", and from there any group. Some add that the flock follows a leader (君 jūn), but 君 is there mainly for the sound.

ALSO A MEASURE WORD: 一群人 (yì qún rén) a group of people, 一群羊 (yì qún yáng) a flock of sheep. As a noun it takes 个 (gè): 一个群 (yí ge qún) a chat group.

IN TAIWAN: for a chat group people often say 群组 (qúnzǔ).

PRONUNCIATION: qún, 2nd tone. Written "un" but sounds "ün": lips rounded for "oo", tongue at "ee".`,
zh:`是什么：群＝一群人、羊群；也指聊天群（微信群）。课上：我在互联网上找到一个群。

字形：君（声旁）＋羊。羊喜欢成群，引申为群体。

量词：一群人、一群羊；名词：一个群。台湾常说群组。`}},
  {id:"ora-28",s:"桌子",py:"zhuōzi",es:"mesa",en:"table",
   x:{
es:`QUÉ ES: «mesa». En clase: 狗在桌子下面 (gǒu zài zhuōzi xiàmiàn) el perro está debajo de la mesa.

EL CARÁCTER 桌 (zhuō): abajo 木 (mù, árbol, madera) y arriba la parte de 卓 (zhuó, alto, elevado), que da el sonido y el sentido: «la cosa de madera alta». Antes se escribía solo 卓; el 木 se agregó después.
子 (zi): un sufijo átono que forma sustantivos, como en 房子 (fángzi, casa). Solo, 子 (zǐ) es «niño»: el pictograma de un bebé con los brazos abiertos y las piernas envueltas.

CLASIFICADOR: 一张桌子 (yì zhāng zhuōzi) una mesa. 张 (zhāng) es para cosas planas: mesas, camas, papeles, fotos.

PRONUNCIACIÓN: zhuō (primero) zi (átono). zh con la lengua hacia atrás.`,
en:`WHAT IT IS: "table". In class: 狗在桌子下面 (gǒu zài zhuōzi xiàmiàn) the dog is under the table.

THE CHARACTER 桌 (zhuō): below 木 (mù, tree, wood) and on top the part of 卓 (zhuó, tall, raised), which gives sound and meaning: "the tall wooden thing". It used to be written just 卓; the 木 was added later.
子 (zi): a toneless suffix that makes nouns, as in 房子 (fángzi, house). On its own 子 (zǐ) is "child": a pictograph of a baby with open arms and swaddled legs.

MEASURE WORD: 一张桌子 (yì zhāng zhuōzi) a table. 张 (zhāng) is for flat things: tables, beds, sheets of paper, photos.

PRONUNCIATION: zhuō (1st) zi (toneless). zh with the tongue curled back.`,
zh:`是什么：桌子。课上：狗在桌子下面。

字形：桌：木＋卓（高，声旁兼义），原来写作"卓"，后加木。子：名词后缀，读轻声。

量词：一张桌子（张用于平面的东西）。`}},
  {id:"ora-29",s:"下面",py:"xiàmiàn",es:"abajo, debajo (de)",en:"below, under",
   x:{
es:`QUÉ ES: «abajo, debajo (de)». Una de las PALABRAS DE POSICIÓN. En clase: 狗在桌子下面 (gǒu zài zhuōzi xiàmiàn) el perro está debajo de la mesa.

LA REGLA DE MICHELLE: «en español la posición va adelante del objeto: debajo de, al lado de, en el medio de. En chino es al revés: primero el objeto y después la posición». O sea: 桌子 (zhuōzi, la mesa) + 下面 (xiàmiàn, debajo). Y todo eso va con 在 (zài, estar en): sujeto + 在 + objeto + posición.

LA FAMILIA: 上面 (shàngmiàn) arriba · 下面 (xiàmiàn) abajo · 前面 (qiánmiàn) adelante · 后面 (hòumiàn) atrás · 里面 (lǐmiàn) adentro · 外面 (wàimiàn) afuera. Se pueden acortar: 桌子上 (zhuōzi shàng) sobre la mesa.

LOS CARACTERES: 下 (xià): una línea de referencia y una marca debajo. 面 (miàn): el dibujo de una cara: el contorno de la cabeza con un ojo (目 mù) adentro. «Cara» → «lado, superficie»: 下面 (xiàmiàn) es «el lado de abajo».

OJO: 面 (miàn) también es «fideos» en simplificado (en tradicional 麵 miàn), así que 下面 (xià miàn) puede ser «echar los fideos al agua». El contexto lo aclara siempre.

PRONUNCIACIÓN: xià (cuarto) miàn (cuarto). En el habla a menudo xiàmian, con la segunda sílaba más suave.`,
en:`WHAT IT IS: "below, under(neath)". One of the POSITION WORDS. In class: 狗在桌子下面 (gǒu zài zhuōzi xiàmiàn) the dog is under the table.

MICHELLE'S RULE: "in Spanish the position goes before the object: under, next to, in the middle of. In Chinese it's the reverse: first the object, then the position". So: 桌子 (zhuōzi, the table) + 下面 (xiàmiàn, under). And all of that goes with 在 (zài, to be at): subject + 在 + object + position.

THE FAMILY: 上面 (shàngmiàn) above · 下面 (xiàmiàn) below · 前面 (qiánmiàn) in front · 后面 (hòumiàn) behind · 里面 (lǐmiàn) inside · 外面 (wàimiàn) outside. They can be shortened: 桌子上 (zhuōzi shàng) on the table.

THE CHARACTERS: 下 (xià): a reference line and a mark below it. 面 (miàn): a drawing of a face: the outline of the head with an eye (目 mù) inside. "Face" → "side, surface": 下面 (xiàmiàn) is "the bottom side".

CAREFUL: 面 (miàn) is also "noodles" in simplified (traditional 麵 miàn), so 下面 (xià miàn) can mean "put the noodles in the water". Context always makes it clear.

PRONUNCIATION: xià (4th) miàn (4th). In speech often xiàmian, the second syllable softer.`,
zh:`是什么：下面，方位词。课上：狗在桌子下面。

老师的规则：西班牙语方位在前（debajo de la mesa），汉语方位在后：桌子下面。结构：主语＋在＋名词＋方位词。

方位词：上面、下面、前面、后面、里面、外面；可以简说：桌子上。

字形：下：指事字。面：脸的象形，轮廓里有一只眼睛；引申为"面、边"。

注意：简体"面"也是"麵"（面条），下面也可能是"煮面条"。`}},
  {id:"ora-30",s:"猫昨天吃老鼠。",t:"貓昨天吃老鼠。",py:"māo zuótiān chī lǎoshǔ",es:"el gato se comió el ratón ayer",en:"the cat ate the mouse yesterday",
   x:{
es:`QUÉ ES: la primera oración que armó Vladimir en la clase 6 con la regla de orden de Michelle.

PIEZA POR PIEZA:
猫 (māo) gato: sujeto.
昨天 (zuótiān) ayer: tiempo.
吃 (chī) comer: verbo.
老鼠 (lǎoshǔ) ratón: objeto. 老 (lǎo, viejo; acá solo un prefijo, como en 老师 lǎoshī) + 鼠 (shǔ, rata: un pictograma con los dientes arriba y las patas y la cola abajo).

EL ORDEN: en español el tiempo va al final («…ayer»); en chino va después del sujeto: SUJETO + TIEMPO + VERBO + OBJETO. Michelle: «el tiempo tiene que ir después del sujeto».

SIN ARTÍCULOS: «el gato», «el ratón»: el chino no tiene «el»; el contexto alcanza. Para insistir en «este gato» se usa 这只猫 (zhè zhī māo).

¿Y EL PASADO? 吃 (chī) no cambia: el pasado lo da 昨天 (zuótiān). Así la armaron en clase, y se entiende perfectamente. Más adelante vas a ver 了 (le), que marca una acción terminada: un nativo muchas veces diría 猫昨天吃了老鼠 (māo zuótiān chī le lǎoshǔ).

PRONUNCIACIÓN: māo zuótiān chī lǎoshǔ. En 昨 (zuó) la z suena «ds», no «zh».`,
en:`WHAT IT IS: the first sentence Vladimir built in class 6 with Michelle's word-order rule.

PIECE BY PIECE:
猫 (māo) cat: subject.
昨天 (zuótiān) yesterday: time.
吃 (chī) to eat: verb.
老鼠 (lǎoshǔ) mouse: object. 老 (lǎo, old; here just a prefix, as in 老师 lǎoshī) + 鼠 (shǔ, rat: a pictograph with the teeth on top and legs and tail below).

THE ORDER: in Spanish and English time goes at the end ("…yesterday"); in Chinese it goes after the subject: SUBJECT + TIME + VERB + OBJECT. Michelle: "time has to go after the subject".

NO ARTICLES: "the cat", "the mouse": Chinese has no "the"; context is enough. To stress "this cat" you say 这只猫 (zhè zhī māo).

AND THE PAST? 吃 (chī) doesn't change: 昨天 (zuótiān) gives the past. That's how it was built in class, and it's perfectly clear. Later you'll see 了 (le), which marks a finished action: a native would often say 猫昨天吃了老鼠 (māo zuótiān chī le lǎoshǔ).

PRONUNCIATION: māo zuótiān chī lǎoshǔ. In 昨 (zuó) the z sounds "ds", not "zh".`,
zh:`是什么：第六课按语序规则造的第一个句子。

语序：主语（猫）＋时间（昨天）＋动词（吃）＋宾语（老鼠）。老师：时间要放在主语后面。

没有冠词。动词不变，过去由"昨天"表示；以后会学"了"：猫昨天吃了老鼠。`}},
  {id:"ora-31",s:"学生为了明天的考试读书。",t:"學生為了明天的考試讀書。",py:"xuéshēng wèile míngtiān de kǎoshì dúshū",es:"el alumno estudia para el examen de mañana",en:"the student studies for tomorrow's exam",
   x:{
es:`QUÉ ES: la segunda oración de la clase, con un PROPÓSITO.

PIEZA POR PIEZA:
学生 (xuéshēng) el alumno: sujeto (学 xué estudiar + 生 shēng nacer, vivir).
为了 (wèile) para: propósito.
明天的考试 (míngtiān de kǎoshì) el examen de mañana: 明天 (míngtiān) mañana + 的 (de) + 考试 (kǎoshì) examen.
读书 (dúshū) estudiar: verbo compuesto, entero porque no hay otro objeto.

EL ORDEN: SUJETO + PROPÓSITO + VERBO. Michelle: «esto es un propósito, funciona como un adverbio; los adverbios van después del sujeto». En español «para el examen» va al final; en chino, antes del verbo.

的 (de) COMO EL «'S»: «el examen de mañana» se arma al revés: primero mañana, después examen: 明天的考试 (míngtiān de kǎoshì), como «tomorrow's exam» en inglés o «el libro de María» = 玛丽亚的书 (Mǎlìyà de shū), el ejemplo que repasó Michelle.

POR QUÉ 读书 (dúshū) Y NO 读 (dú): no hay materia como objeto, así que 书 (shū) se queda. Si fuera «estudia matemáticas para el examen», 书 se iría: 为了考试读数学 (wèile kǎoshì dú shùxué).

PRONUNCIACIÓN: xuéshēng wèile míngtiān de kǎoshì dúshū.`,
en:`WHAT IT IS: the second sentence of the class, with a PURPOSE.

PIECE BY PIECE:
学生 (xuéshēng) the student: subject (学 xué study + 生 shēng be born, live).
为了 (wèile) for: purpose.
明天的考试 (míngtiān de kǎoshì) tomorrow's exam: 明天 (míngtiān) tomorrow + 的 (de) + 考试 (kǎoshì) exam.
读书 (dúshū) to study: compound verb, whole because there's no other object.

THE ORDER: SUBJECT + PURPOSE + VERB. Michelle: "this is a purpose, it works like an adverb; adverbs go after the subject". In Spanish and English "for the exam" goes at the end; in Chinese, before the verb.

的 (de) LIKE "'S": "tomorrow's exam" is built the English way: first tomorrow, then exam: 明天的考试 (míngtiān de kǎoshì), like "María's book" = 玛丽亚的书 (Mǎlìyà de shū), the example Michelle reviewed.

WHY 读书 (dúshū) AND NOT 读 (dú): there's no school subject as the object, so 书 (shū) stays. For "studies maths for the exam", 书 would go: 为了考试读数学 (wèile kǎoshì dú shùxué).

PRONUNCIATION: xuéshēng wèile míngtiān de kǎoshì dúshū.`,
zh:`是什么：表示目的的句子。

语序：主语（学生）＋目的（为了明天的考试）＋动词（读书）。老师：目的像副词，放在主语后面。

"的"：明天的考试，和"玛丽亚的书"一样。

读书：没有其他宾语，所以保留"书"；有宾语时：为了考试读数学。`}},
  {id:"ora-32",s:"我读数学。",t:"我讀數學。",py:"wǒ dú shùxué",es:"estudio matemáticas",en:"I study maths",
   x:{
es:`QUÉ ES: el ejemplo de Michelle para la regla de los verbos compuestos: cuando aparece el objeto (las matemáticas), el objeto propio del verbo (书 shū, libro) se va.

PIEZA POR PIEZA:
我 (wǒ) yo: sujeto, siempre presente. Michelle: «no puede haber sujeto tácito»: en español «estudio» alcanza; en chino falta el 我 (wǒ).
读 (dú) leer, estudiar: verbo, sin 书 (shū).
数学 (shùxué) matemáticas: objeto.

UNA ACLARACIÓN SOBRE EL APUNTE: en el PDF de la clase quedó escrito 我读书数学 (wǒ dúshū shùxué). En la clase Michelle explicó justamente lo contrario: «ese 书 lo sacás porque está 数学». Según su propia regla, la forma correcta es 我读数学 (wǒ dú shùxué); el 书 del apunte es un descuido al pasar la oración en limpio.

OTRAS FORMAS: en China se dice mucho 我学数学 (wǒ xué shùxué), con 学 (xué, aprender, estudiar). 读数学 (dú shùxué) se usa sobre todo para «estudiar matemáticas como carrera».

PRONUNCIACIÓN: wǒ dú shùxué.`,
en:`WHAT IT IS: Michelle's example for the compound-verb rule: when the object (maths) appears, the verb's built-in object (书 shū, book) goes.

PIECE BY PIECE:
我 (wǒ) I: subject, always present. Michelle: "there can't be a dropped subject": in Spanish "estudio" is enough; in Chinese you need 我 (wǒ).
读 (dú) read, study: verb, without 书 (shū).
数学 (shùxué) maths: object.

A NOTE ON THE HANDOUT: the class PDF has 我读书数学 (wǒ dúshū shùxué). In class Michelle explained exactly the opposite: "you take that 书 out because 数学 is there". By her own rule the correct form is 我读数学 (wǒ dú shùxué); the 书 in the handout is a slip made while writing it up.

OTHER FORMS: in China people often say 我学数学 (wǒ xué shùxué), with 学 (xué, learn, study). 读数学 (dú shùxué) is mostly "to study maths as a degree".

PRONUNCIATION: wǒ dú shùxué.`,
zh:`是什么：动宾式动词规则的例子：有宾语（数学），就去掉"书"。

主语不能省略：我。

关于讲义：讲义上写的是"我读书数学"，但老师在课上说的正好相反：有"数学"就去掉"书"。按照她的规则，应该是"我读数学"。

也常说：我学数学。`}},
  {id:"ora-33",s:"我的哥哥每天读书。",t:"我的哥哥每天讀書。",py:"wǒ de gēge měitiān dúshū",es:"mi hermano (mayor) estudia todos los días",en:"my (older) brother studies every day",
   x:{
es:`QUÉ ES: el contraejemplo de la regla: no hay objeto, así que 读书 (dúshū) queda entero. Michelle: «acá tenés que poner este 书 sí o sí, porque no tiene un objeto: no tiene matemática, no tiene física, no tiene nada».

PIEZA POR PIEZA:
我的哥哥 (wǒ de gēge) mi hermano mayor: sujeto. 哥哥 (gēge) es el hermano MAYOR; el menor es 弟弟 (dìdi).
每天 (měitiān) todos los días: tiempo.
读书 (dúshū) estudiar: verbo compuesto completo.

EL ORDEN: SUJETO + TIEMPO + VERBO. «Todos los días» no va al final como en español.

COMPARALO: 我的哥哥每天读数学 (wǒ de gēge měitiān dú shùxué) mi hermano estudia matemáticas todos los días: con objeto, se va el 书 (shū).

UN DETALLE: Michelle lo anotó con 的 (de): 我的哥哥 (wǒ de gēge). Con familiares cercanos también se oye sin 的: 我哥哥 (wǒ gēge).

PRONUNCIACIÓN: wǒ de gēge měitiān dúshū. En 哥哥 (gēge) el segundo ge es átono.`,
en:`WHAT IT IS: the counter-example to the rule: there's no object, so 读书 (dúshū) stays whole. Michelle: "here you must put this 书, because there's no object: no maths, no physics, nothing".

PIECE BY PIECE:
我的哥哥 (wǒ de gēge) my older brother: subject. 哥哥 (gēge) is the OLDER brother; the younger one is 弟弟 (dìdi).
每天 (měitiān) every day: time.
读书 (dúshū) to study: the full compound verb.

THE ORDER: SUBJECT + TIME + VERB. "Every day" doesn't go at the end as in English.

COMPARE: 我的哥哥每天读数学 (wǒ de gēge měitiān dú shùxué) my brother studies maths every day: with an object, 书 (shū) goes.

A DETAIL: Michelle wrote it with 的 (de): 我的哥哥 (wǒ de gēge). With close relatives you also hear it without 的: 我哥哥 (wǒ gēge).

PRONUNCIATION: wǒ de gēge měitiān dúshū. In 哥哥 (gēge) the second ge is toneless.`,
zh:`是什么：没有宾语，所以"读书"要完整。老师：这里一定要有"书"，因为没有宾语。

语序：主语（我的哥哥）＋时间（每天）＋动词（读书）。

比较：我的哥哥每天读数学。亲属称谓也可以不加"的"：我哥哥。`}},
  {id:"ora-34",s:"她吃苹果。",t:"她吃蘋果。",py:"tā chī píngguǒ",es:"ella come manzana",en:"she eats apples",
   x:{
es:`QUÉ ES: 吃饭 (chīfàn) con objeto: como hay manzana, el 饭 (fàn) se va.

PIEZA POR PIEZA:
她 (tā) ella: 女 (nǚ, mujer: una mujer arrodillada con los brazos cruzados) + 也 (yě). Suena igual que 他 (tā, él); solo se distinguen por escrito.
吃 (chī) comer.
苹果 (píngguǒ) manzana: 苹 (píng, la planta de la manzana, con 艹 cǎo, hierba, arriba) + 果 (guǒ, fruto: un árbol 木 mù con un fruto 田 tián arriba).

LA REGLA: 她吃饭 (tā chīfàn) ella come; 她吃苹果 (tā chī píngguǒ) ella come manzana. No «她吃饭苹果» (tā chīfàn píngguǒ).

SIN PLURAL: «manzana» o «manzanas»: el chino no marca el plural; 苹果 (píngguǒ) sirve para las dos.

PRONUNCIACIÓN: tā chī píngguǒ.`,
en:`WHAT IT IS: 吃饭 (chīfàn) with an object: since there's an apple, 饭 (fàn) goes.

PIECE BY PIECE:
她 (tā) she: 女 (nǚ, woman: a kneeling woman with crossed arms) + 也 (yě). It sounds exactly like 他 (tā, he); they only differ in writing.
吃 (chī) to eat.
苹果 (píngguǒ) apple: 苹 (píng, the apple plant, with 艹 cǎo, grass, on top) + 果 (guǒ, fruit: a tree 木 mù with a fruit 田 tián on top).

THE RULE: 她吃饭 (tā chīfàn) she eats; 她吃苹果 (tā chī píngguǒ) she eats apples. Not "她吃饭苹果" (tā chīfàn píngguǒ).

NO PLURAL: "apple" or "apples": Chinese doesn't mark the plural; 苹果 (píngguǒ) covers both.

PRONUNCIATION: tā chī píngguǒ.`,
zh:`是什么："吃饭"有宾语时去掉"饭"：她吃苹果（不说"她吃饭苹果"）。

她：女＋也，和"他"同音。苹果：苹＋果（树上结果）。汉语不区分单复数。`}},
  {id:"ora-35",s:"他在我家吃饭。",t:"他在我家吃飯。",py:"tā zài wǒ jiā chīfàn",es:"él come en mi casa",en:"he eats at my house",
   x:{
es:`QUÉ ES: el lugar antes del verbo, y 吃饭 (chīfàn) entero porque no hay otro objeto.

PIEZA POR PIEZA:
他 (tā) él: sujeto.
在我家 (zài wǒ jiā) en mi casa: lugar. 在 (zài, en) + 我家 (wǒ jiā, mi casa).
吃饭 (chīfàn) comer.

EL ORDEN: SUJETO + LUGAR + VERBO. En español «come en mi casa», con el lugar al final; en chino el lugar va antes: «él en mi casa come».

EL DOBLE 在 (zài): Michelle: «在 (zài) es verbo y también preposición: como preposición es "en", como verbo es "estar"». Acá es «en». En 我在家里 (wǒ zài jiālǐ) es «estoy en casa».

我家 (wǒ jiā) SIN 的 (de): con lo cercano (casa, familia) se dice 我家 (wǒ jiā), sin 的 (de).
家 (jiā): un techo (宀 mián) con un cerdo (豕 shǐ) abajo: en la China antigua el cerdo vivía junto a la familia. Es una lectura muy difundida, aunque se discute si el cerdo era la ofrenda de un templo.

PRONUNCIACIÓN: tā zài wǒ jiā chīfàn.`,
en:`WHAT IT IS: the place before the verb, and 吃饭 (chīfàn) whole because there's no other object.

PIECE BY PIECE:
他 (tā) he: subject.
在我家 (zài wǒ jiā) at my house: place. 在 (zài, at) + 我家 (wǒ jiā, my house).
吃饭 (chīfàn) to eat.

THE ORDER: SUBJECT + PLACE + VERB. In English "eats at my house", with the place at the end; in Chinese the place comes first: "he at my house eats".

THE TWO-WAY 在 (zài): Michelle: "在 (zài) is a verb and also a preposition: as a preposition it's 'at/in', as a verb it's 'to be (somewhere)'". Here it's "at". In 我在家里 (wǒ zài jiālǐ) it's "I'm at home".

我家 (wǒ jiā) WITHOUT 的 (de): with close things (home, family) you say 我家 (wǒ jiā), without 的 (de).
家 (jiā): a roof (宀 mián) with a pig (豕 shǐ) under it: in ancient China the pig lived alongside the family. A widespread reading, though some argue the pig was a temple offering.

PRONUNCIATION: tā zài wǒ jiā chīfàn.`,
zh:`是什么：地点放在动词前；"吃饭"没有宾语，保留"饭"。

语序：主语（他）＋地点（在我家）＋动词（吃饭）。

"在"：老师说既是动词（我在家里）也是介词（在我家吃饭）。

我家：亲近的关系不用"的"。家：宀＋豕，常见解释是人和猪住在一起，也有人认为是祭祀用的猪。`}},
  {id:"ora-36",s:"我的朋友在公园跳 Tango。",t:"我的朋友在公園跳 Tango。",py:"wǒ de péngyǒu zài gōngyuán tiào Tango",es:"mi amigo baila tango en el parque",en:"my friend dances tango in the park",say:"我的朋友在公园跳探戈。",
   x:{
es:`QUÉ ES: lugar + verbo compuesto con objeto: como hay «tango», el 舞 (wǔ) de 跳舞 (tiàowǔ) se va.

PIEZA POR PIEZA:
我的朋友 (wǒ de péngyǒu) mi amigo: sujeto.
在公园 (zài gōngyuán) en el parque: lugar.
跳 (tiào) bailar (saltar): verbo, sin 舞 (wǔ).
Tango: objeto.

LO QUE MARCÓ MICHELLE: en clase salió primero «跳舞 Tango» (tiàowǔ Tango), y Michelle lo señaló: «viste que acá ya sacaste el 舞 (wǔ)». Con objeto: 跳 (tiào) Tango; sin objeto: 跳舞 (tiàowǔ).

TANGO EN CHINO: 探戈 (tàngē), adaptado por el sonido: 探 (tàn, explorar) + 戈 (gē, alabarda), elegidos solo por cómo suenan. Michelle lo dejó en letras latinas, como hace mucha gente; el audio de esta tarjeta lo dice en chino.

PRONUNCIACIÓN: wǒ de péngyǒu zài gōngyuán tiào tàngē.`,
en:`WHAT IT IS: place + compound verb with an object: since there's "tango", the 舞 (wǔ) of 跳舞 (tiàowǔ) goes.

PIECE BY PIECE:
我的朋友 (wǒ de péngyǒu) my friend: subject.
在公园 (zài gōngyuán) in the park: place.
跳 (tiào) dance (jump): verb, without 舞 (wǔ).
Tango: object.

WHAT MICHELLE POINTED OUT: in class "跳舞 Tango" (tiàowǔ Tango) came out first, and Michelle flagged it: "see, here you already drop the 舞 (wǔ)". With an object: 跳 (tiào) Tango; without: 跳舞 (tiàowǔ).

TANGO IN CHINESE: 探戈 (tàngē), adapted by sound: 探 (tàn, explore) + 戈 (gē, halberd), picked only for how they sound. Michelle left it in Latin letters, as many people do; this card's audio says it in Chinese.

PRONUNCIATION: wǒ de péngyǒu zài gōngyuán tiào tàngē.`,
zh:`是什么：地点＋动宾式动词带宾语：跳 Tango，去掉"舞"。课上先说成"跳舞 Tango"，老师提醒要去掉"舞"。

语序：主语（我的朋友）＋地点（在公园）＋动词（跳）＋宾语（探戈）。

探戈是音译词；很多人直接写 Tango。`}},
  {id:"ora-37",s:"每个礼拜我的妹妹和我去跳舞。",t:"每個禮拜我的妹妹和我去跳舞。",py:"měi ge lǐbài wǒ de mèimei hé wǒ qù tiàowǔ",es:"todas las semanas mi hermana menor y yo vamos a bailar",en:"every week my younger sister and I go dancing",
   x:{
es:`PIEZA POR PIEZA:
每个礼拜 (měi ge lǐbài) todas las semanas: tiempo, adelante de todo para destacarlo.
我的妹妹和我 (wǒ de mèimei hé wǒ) mi hermana menor y yo: sujeto. 和 (hé, y) une los dos sustantivos.
去 (qù) ir.
跳舞 (tiàowǔ) bailar: entero, porque no hay objeto.

TIEMPO ADELANTE: Michelle: si querés destacar el tiempo, va adelante de todo, como en español. También vale 我的妹妹和我每个礼拜去跳舞 (wǒ de mèimei hé wǒ měi ge lǐbài qù tiàowǔ).

去 (qù) + VERBO = «IR A + VERBO»: 去跳舞 (qù tiàowǔ) ir a bailar. No hace falta ningún «a».

«MI HERMANA Y YO»: en chino es natural poner «yo» al final, como en español. Para «nosotros» alcanza 我们 (wǒmen).

妹妹 (mèimei) es la hermana MENOR (la mayor es 姐姐 jiějie). En español «mi hermana» no aclara; en chino hay que elegir.

PRONUNCIACIÓN: měi ge lǐbài wǒ de mèimei hé wǒ qù tiàowǔ.`,
en:`PIECE BY PIECE:
每个礼拜 (měi ge lǐbài) every week: time, first in the sentence to stress it.
我的妹妹和我 (wǒ de mèimei hé wǒ) my younger sister and I: subject. 和 (hé, and) links the two nouns.
去 (qù) go.
跳舞 (tiàowǔ) dance: whole, because there's no object.

TIME FIRST: Michelle: to stress the time, put it first, as in Spanish. This also works: 我的妹妹和我每个礼拜去跳舞 (wǒ de mèimei hé wǒ měi ge lǐbài qù tiàowǔ).

去 (qù) + VERB = "GO + VERB": 去跳舞 (qù tiàowǔ) go dancing. No "to" needed.

"MY SISTER AND I": in Chinese it's natural to put "I" last, as in Spanish. For "we", 我们 (wǒmen) is enough.

妹妹 (mèimei) is the YOUNGER sister (the older one is 姐姐 jiějie). English "my sister" doesn't say; Chinese has to choose.

PRONUNCIATION: měi ge lǐbài wǒ de mèimei hé wǒ qù tiàowǔ.`,
zh:`语序：时间（每个礼拜）放在句首表示强调；主语（我的妹妹和我）；去＋跳舞。也可以说：我的妹妹和我每个礼拜去跳舞。

去＋动词：去跳舞。妹妹是比自己小的姐妹。`}},
  {id:"ora-38",s:"昨天下很多雨。",py:"zuótiān xià hěn duō yǔ",es:"ayer llovió mucho",en:"it rained a lot yesterday",
   x:{
es:`PIEZA POR PIEZA:
昨天 (zuótiān) ayer: tiempo.
下 (xià) caer, bajar: verbo.
很多 (hěn duō) mucho, mucha: 很 (hěn) muy + 多 (duō) mucho.
雨 (yǔ) lluvia: objeto.

LA REGLA DE MICHELLE: en un verbo compuesto, «mucho, poco o un poquito va ENTRE las dos partes»: 下 (xià) + 很多 (hěn duō) + 雨 (yǔ) = «cae mucha lluvia». No «下雨很多» (xiàyǔ hěn duō).

SIN SUJETO: como «llovió» en español, nadie hace llover.

多 (duō): dos 夕 (xī, luna creciente, noche) uno sobre otro. Muchos estudiosos lo leen, en cambio, como dos trozos de carne apilados: «mucho». Las dos explicaciones circulan; el sentido es seguro.

UN DETALLE: hablando de ayer, un nativo muchas veces diría 昨天下了很多雨 (zuótiān xià le hěn duō yǔ), con 了 (le) de acción terminada; también se oye 昨天雨下得很大 (zuótiān yǔ xià de hěn dà). La forma de clase se entiende perfectamente.

PRONUNCIACIÓN: zuótiān xià hěn duō yǔ.`,
en:`PIECE BY PIECE:
昨天 (zuótiān) yesterday: time.
下 (xià) fall, come down: verb.
很多 (hěn duō) a lot of: 很 (hěn) very + 多 (duō) much.
雨 (yǔ) rain: object.

MICHELLE'S RULE: in a compound verb, "a lot, a little or a bit goes BETWEEN the two parts": 下 (xià) + 很多 (hěn duō) + 雨 (yǔ) = "falls a lot of rain". Not "下雨很多" (xiàyǔ hěn duō).

NO SUBJECT: like "rained" in Spanish (English needs "it"), nobody makes it rain.

多 (duō): two 夕 (xī, crescent moon, night) stacked. Many scholars read it instead as two pieces of meat piled up: "a lot". Both explanations circulate; the meaning is certain.

A DETAIL: talking about yesterday, a native would often say 昨天下了很多雨 (zuótiān xià le hěn duō yǔ), with 了 (le) for a finished action; you also hear 昨天雨下得很大 (zuótiān yǔ xià de hěn dà). The class form is perfectly clear.

PRONUNCIATION: zuótiān xià hěn duō yǔ.`,
zh:`语序：时间（昨天）＋动词（下）＋数量（很多）＋宾语（雨）。老师的规则：动宾式动词的数量放在中间，不说"下雨很多"。

没有主语。多：两个夕，或说两块肉，说法不一。

更自然的说法：昨天下了很多雨／昨天雨下得很大。`}},
  {id:"ora-39",s:"我在家里。",t:"我在家裡。",py:"wǒ zài jiālǐ",es:"estuve en casa / estoy en casa",en:"I was at home / I'm at home",
   x:{
es:`QUÉ ES: 在 (zài) como VERBO, «estar en». Segunda oración del primer párrafo.

PIEZA POR PIEZA:
我 (wǒ) yo.
在 (zài) estar (en).
家里 (jiālǐ) en casa: 家 (jiā) casa, hogar + 里 (lǐ) adentro.

EL DOBLE 在 (zài): Michelle: «esto es verbo y también preposición: como preposición es "en", como verbo es "estar"». Comparalo con 他在我家吃饭 (tā zài wǒ jiā chīfàn), donde es «en» porque el verbo es 吃饭 (chīfàn).

EL SUJETO SIEMPRE: «estuve en casa» en español no dice «yo»; en chino hace falta. Michelle: «acordate de poner siempre el sujeto, porque no hay conjugación».

里 (lǐ): un campo (田 tián) sobre la tierra (土 tǔ): «aldea». También reemplaza a 裏 (lǐ, adentro; en Taiwán 裡), que es el sentido de acá.

¿PRESENTE O PASADO? 我在家里 (wǒ zài jiālǐ) puede ser «estoy» o «estuve»: el párrafo empieza con 昨天 (zuótiān, ayer), y eso alcanza para todo el párrafo.

PRONUNCIACIÓN: wǒ zài jiālǐ.`,
en:`WHAT IT IS: 在 (zài) as a VERB, "to be at". The second sentence of the first paragraph.

PIECE BY PIECE:
我 (wǒ) I.
在 (zài) to be (at).
家里 (jiālǐ) at home: 家 (jiā) home + 里 (lǐ) inside.

THE TWO-WAY 在 (zài): Michelle: "this is a verb and also a preposition: as a preposition it's 'at', as a verb it's 'to be'". Compare 他在我家吃饭 (tā zài wǒ jiā chīfàn), where it's "at" because the verb is 吃饭 (chīfàn).

ALWAYS THE SUBJECT: Spanish "estuve en casa" doesn't say "I"; Chinese needs it. Michelle: "remember to always put the subject, because there's no conjugation".

里 (lǐ): a field (田 tián) over earth (土 tǔ): "village". It also stands in for 裏 (lǐ, inside; in Taiwan 裡), which is the meaning here.

PRESENT OR PAST? 我在家里 (wǒ zài jiālǐ) can be "I am" or "I was": the paragraph opens with 昨天 (zuótiān, yesterday), which covers the whole paragraph.

PRONUNCIATION: wǒ zài jiālǐ.`,
zh:`是什么："在"作动词。老师：在既是动词也是介词。

主语一定要说：汉语没有动词变位。

里：田＋土，本义是乡里；也是"裏（裡）"的简体，这里表示"里面"。

现在还是过去：段落开头有"昨天"，整段都是过去。`}},
  {id:"ora-40",s:"我打扫房子和煮饭。",t:"我打掃房子和煮飯。",py:"wǒ dǎsǎo fángzi hé zhǔfàn",es:"limpié la casa y cociné",en:"I cleaned the house and cooked",
   x:{
es:`PIEZA POR PIEZA:
我 (wǒ) yo.
打扫 (dǎsǎo) limpiar.
房子 (fángzi) la casa (el edificio).
和 (hé) y.
煮饭 (zhǔfàn) cocinar.

房子 (fángzi) Y 家 (jiā): 房子 (fángzi) es la casa física (房 fáng: 户 hù, una puerta de una hoja, + 方 fāng, que da el sonido); 家 (jiā) es el hogar. Se limpia el 房子; se está en el 家.

UN DETALLE SOBRE 和 (hé): 和 (hé) une sobre todo SUSTANTIVOS: 猫和狗 (māo hé gǒu) gato y perro. Entre dos acciones un nativo suele poner coma, o 也 (yě, también): 我打扫了房子，也煮了饭 (wǒ dǎsǎo le fángzi, yě zhǔ le fàn). La forma de clase se entiende sin problema.

PRONUNCIACIÓN: wǒ dǎsǎo fángzi hé zhǔfàn. 打扫 (dǎsǎo) se dice dásǎo (dos terceros tonos).`,
en:`PIECE BY PIECE:
我 (wǒ) I.
打扫 (dǎsǎo) clean.
房子 (fángzi) the house (the building).
和 (hé) and.
煮饭 (zhǔfàn) cook.

房子 (fángzi) AND 家 (jiā): 房子 (fángzi) is the physical house (房 fáng: 户 hù, a single-leaf door, + 方 fāng, which gives the sound); 家 (jiā) is home. You clean the 房子; you're at 家.

A DETAIL ABOUT 和 (hé): 和 (hé) mainly links NOUNS: 猫和狗 (māo hé gǒu) cat and dog. Between two actions a native usually uses a comma, or 也 (yě, also): 我打扫了房子，也煮了饭 (wǒ dǎsǎo le fángzi, yě zhǔ le fàn). The class form is understood without trouble.

PRONUNCIATION: wǒ dǎsǎo fángzi hé zhǔfàn. 打扫 (dǎsǎo) is said dásǎo (two 3rd tones).`,
zh:`语序：主语（我）＋动词（打扫）＋宾语（房子）＋和＋煮饭。

房子是建筑物，家是家庭。

"和"一般连接名词；连接两个动作时，更自然的说法是：我打扫了房子，也煮了饭。`}},
  {id:"ora-41",s:"我吃一个汉堡和喝一杯茶。",t:"我吃一個漢堡和喝一杯茶。",py:"wǒ chī yí ge hànbǎo hé hē yì bēi chá",es:"comí una hamburguesa y tomé un vaso de té",en:"I ate a hamburger and drank a glass of tea",
   x:{
es:`PIEZA POR PIEZA:
我 (wǒ) yo.
吃 (chī) comer.
一个汉堡 (yí ge hànbǎo) una hamburguesa.
和 (hé) y.
喝 (hē) beber.
一杯茶 (yì bēi chá) un vaso (o una taza) de té.

DOS CLASIFICADORES: 个 (gè), el general, para la hamburguesa; 杯 (bēi) para lo que viene en vaso o taza. Michelle: «杯 es taza o vaso, lo mismo; en chino no se divide».

一 (yī) CAMBIA DE TONO: yí ge (antes de 个 gè, cuarto tono), pero yì bēi (antes de 杯 bēi, primero).

UN DETALLE SOBRE 和 (hé): como en la oración anterior, 和 (hé) entre dos acciones suena a traducción; un nativo diría 我吃了一个汉堡，喝了一杯茶 (wǒ chī le yí ge hànbǎo, hē le yì bēi chá), con coma y 了 (le). Para empezar, la forma de clase se entiende bien.

PRONUNCIACIÓN: wǒ chī yí ge hànbǎo hé hē yì bēi chá.`,
en:`PIECE BY PIECE:
我 (wǒ) I.
吃 (chī) eat.
一个汉堡 (yí ge hànbǎo) a hamburger.
和 (hé) and.
喝 (hē) drink.
一杯茶 (yì bēi chá) a glass (or a cup) of tea.

TWO MEASURE WORDS: 个 (gè), the general one, for the hamburger; 杯 (bēi) for what comes in a glass or cup. Michelle: "杯 is cup or glass, the same; Chinese doesn't split them".

一 (yī) CHANGES TONE: yí ge (before 个 gè, 4th tone), but yì bēi (before 杯 bēi, 1st).

A DETAIL ABOUT 和 (hé): as in the previous sentence, 和 (hé) between two actions sounds translated; a native would say 我吃了一个汉堡，喝了一杯茶 (wǒ chī le yí ge hànbǎo, hē le yì bēi chá), with a comma and 了 (le). For now, the class form is clear.

PRONUNCIATION: wǒ chī yí ge hànbǎo hé hē yì bēi chá.`,
zh:`量词：一个汉堡（个）、一杯茶（杯，杯子和玻璃杯都是杯）。

一的变调：yí ge，yì bēi。

"和"连接两个动作不太自然，更好的说法：我吃了一个汉堡，喝了一杯茶。`}},
  {id:"ora-42",s:"今天，我要去我的学校附近踢足球。",t:"今天，我要去我的學校附近踢足球。",py:"jīntiān, wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú",es:"hoy voy a ir a jugar al fútbol cerca de mi escuela",en:"today I'm going to play football near my school",
   x:{
es:`PIEZA POR PIEZA:
今天 (jīntiān) hoy: tiempo, adelante y con coma para destacarlo.
我 (wǒ) yo.
要 (yào) ir a (futuro); querer.
去 (qù) ir.
我的学校附近 (wǒ de xuéxiào fùjìn) cerca de mi escuela: lugar.
踢足球 (tī zúqiú) jugar al fútbol.

LA EXCEPCIÓN DEL MOVIMIENTO: 去 (qù) es un verbo de movimiento, así que el lugar va DESPUÉS: 去 + lugar. Y la actividad, al final. Michelle lo leyó así: «Hoy voy a ir a mi colegio a jugar al fútbol».

要 (yào): «querer» y también «ir a» (futuro cercano): 我要去 (wǒ yào qù) voy a ir.

POR QUÉ «MI ESCUELA»: Vladimir quería decir «cerca de donde vivo»; Michelle lo cambió por «cerca de mi escuela», porque «donde vivo» es una oración relativa, una estructura para más adelante.

PRONUNCIACIÓN: jīntiān, wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú.`,
en:`PIECE BY PIECE:
今天 (jīntiān) today: time, first and with a comma to stress it.
我 (wǒ) I.
要 (yào) going to (future); want.
去 (qù) go.
我的学校附近 (wǒ de xuéxiào fùjìn) near my school: place.
踢足球 (tī zúqiú) play football.

THE MOVEMENT EXCEPTION: 去 (qù) is a movement verb, so the place goes AFTER: 去 + place. The activity goes last. Michelle read it as: "Today I'm going to my school to play football".

要 (yào): "want" and also "going to" (near future): 我要去 (wǒ yào qù) I'm going to go.

WHY "MY SCHOOL": Vladimir wanted "near where I live"; Michelle changed it to "near my school", because "where I live" is a relative clause, a structure for later.

PRONUNCIATION: jīntiān, wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú.`,
zh:`语序：时间（今天）放在句首强调；去是移动动词，地点放在"去"后面；活动放在最后。

要：想要；也表示将来。

老师把"我住的地方附近"改成"我的学校附近"，因为定语从句以后再学。`}},
  {id:"ora-43",s:"我很久没有玩。",t:"我很久沒有玩。",py:"wǒ hěn jiǔ méiyǒu wán",es:"hace mucho que no juego",en:"I haven't played for a long time",
   x:{
es:`PIEZA POR PIEZA:
我 (wǒ) yo: sujeto.
很久 (hěn jiǔ) hace mucho: tiempo (duración).
没有 (méiyǒu) no (pasado).
玩 (wán) jugar.

LA FÓRMULA DE MICHELLE: «sujeto, tiempo, negación y verbo. La gramática es muy fija».

SIN «HACE»: el «hace mucho que…» del español no tiene verbo en chino: alcanza con 很久 (hěn jiǔ).

UN DETALLE: para «hace mucho que no…» un nativo agrega casi siempre 了 (le) al final: 我很久没有玩了 (wǒ hěn jiǔ méiyǒu wán le); y hablando de fútbol diría 我很久没踢球了 (wǒ hěn jiǔ méi tī qiú le). La estructura de clase es la base.

PRONUNCIACIÓN: wǒ hěn jiǔ méiyǒu wán. 我很久 (wǒ hěn jiǔ) son tres terceros tonos seguidos; se dice wó hén jiǔ.`,
en:`PIECE BY PIECE:
我 (wǒ) I: subject.
很久 (hěn jiǔ) for a long time: time (duration).
没有 (méiyǒu) not (past).
玩 (wán) play.

MICHELLE'S FORMULA: "subject, time, negation and verb. The grammar is very fixed".

NO VERB FOR "IT'S BEEN": Spanish "hace mucho que…" has a verb; Chinese doesn't: 很久 (hěn jiǔ) is enough.

A DETAIL: for "it's been a long time since…" a native almost always adds 了 (le) at the end: 我很久没有玩了 (wǒ hěn jiǔ méiyǒu wán le); and talking about football they'd say 我很久没踢球了 (wǒ hěn jiǔ méi tī qiú le). The class structure is the foundation.

PRONUNCIATION: wǒ hěn jiǔ méiyǒu wán. 我很久 (wǒ hěn jiǔ) is three 3rd tones in a row; say wó hén jiǔ.`,
zh:`语序：主语（我）＋时间（很久）＋否定（没有）＋动词（玩）。老师：语法很固定。

更自然的说法：我很久没有玩了；说足球：我很久没踢球了。`}},
  {id:"ora-44",s:"我在互联网上找到一个群。",t:"我在互聯網上找到一個群。",py:"wǒ zài hùliánwǎng shàng zhǎodào yí ge qún",es:"encontré un grupo en internet",en:"I found a group on the internet",
   x:{
es:`PIEZA POR PIEZA:
我 (wǒ) yo.
在互联网上 (zài hùliánwǎng shàng) en internet: lugar. 在 (zài) + 互联网 (hùliánwǎng) + 上 (shàng, sobre).
找到 (zhǎodào) encontrar.
一个群 (yí ge qún) un grupo.

EL LUGAR ANTES: Michelle: «yo, sujeto; lugar, en internet; encontrar un grupo». En español «encontré un grupo en internet»; en chino el lugar sube antes del verbo.

EL PASADO SIN CONJUGAR: 找到 (zhǎodào) ya dice que la búsqueda terminó. Michelle: «se supone que si lo encontraste, fue en el pasado». También se oye 找到了 (zhǎodào le).

MÁS CORTO: 我在网上找到一个群 (wǒ zài wǎngshàng zhǎodào yí ge qún), con 网上 (wǎngshàng), como sugirió Michelle. Y en Taiwán, 网路上 (wǎnglù shàng).

PRONUNCIACIÓN: wǒ zài hùliánwǎng shàng zhǎodào yí ge qún.`,
en:`PIECE BY PIECE:
我 (wǒ) I.
在互联网上 (zài hùliánwǎng shàng) on the internet: place. 在 (zài) + 互联网 (hùliánwǎng) + 上 (shàng, on).
找到 (zhǎodào) find.
一个群 (yí ge qún) a group.

PLACE FIRST: Michelle: "I, subject; place, on the internet; find a group". English says "I found a group on the internet"; Chinese moves the place before the verb.

PAST WITHOUT CONJUGATION: 找到 (zhǎodào) already says the search is over. Michelle: "if you found it, it's assumed it was in the past". You also hear 找到了 (zhǎodào le).

SHORTER: 我在网上找到一个群 (wǒ zài wǎngshàng zhǎodào yí ge qún), with 网上 (wǎngshàng), as Michelle suggested. And in Taiwan, 网路上 (wǎnglù shàng).

PRONUNCIATION: wǒ zài hùliánwǎng shàng zhǎodào yí ge qún.`,
zh:`语序：主语（我）＋地点（在互联网上）＋动词（找到）＋宾语（一个群）。

找到表示结果，已经是过去的事；也可以说找到了。

更短：我在网上找到一个群；台湾：网路上。`}},
  {id:"ora-45",s:"狗在桌子下面。",py:"gǒu zài zhuōzi xiàmiàn",es:"el perro está debajo de la mesa",en:"the dog is under the table",
   x:{
es:`PIEZA POR PIEZA:
狗 (gǒu) perro.
在 (zài) estar en.
桌子 (zhuōzi) la mesa.
下面 (xiàmiàn) debajo.

LA REGLA DE LA POSICIÓN: Michelle: «en español la posición va adelante del objeto (debajo de, al lado de); en chino es al revés: primero el objeto y después la posición». 桌子下面 (zhuōzi xiàmiàn) = «mesa-debajo».

LA FÓRMULA: COSA + 在 (zài) + LUGAR DE REFERENCIA + POSICIÓN. Lo mismo: 猫在房子里面 (māo zài fángzi lǐmiàn) el gato está adentro de la casa; 书在桌子上 (shū zài zhuōzi shàng) el libro está sobre la mesa.

狗 (gǒu): 犭 (quǎn, perro; la forma lateral de 犬 quǎn) + 句 (jù), que antiguamente sonaba parecido a gǒu y da el sonido.

PRONUNCIACIÓN: gǒu zài zhuōzi xiàmiàn.`,
en:`PIECE BY PIECE:
狗 (gǒu) dog.
在 (zài) to be at.
桌子 (zhuōzi) the table.
下面 (xiàmiàn) under.

THE POSITION RULE: Michelle: "in Spanish the position goes before the object (under, next to); in Chinese it's the reverse: first the object, then the position". 桌子下面 (zhuōzi xiàmiàn) = "table-under".

THE FORMULA: THING + 在 (zài) + REFERENCE PLACE + POSITION. Same: 猫在房子里面 (māo zài fángzi lǐmiàn) the cat is inside the house; 书在桌子上 (shū zài zhuōzi shàng) the book is on the table.

狗 (gǒu): 犭 (quǎn, dog; the side form of 犬 quǎn) + 句 (jù), which in old Chinese sounded close to gǒu and gives the sound.

PRONUNCIATION: gǒu zài zhuōzi xiàmiàn.`,
zh:`是什么：方位的句子。老师：西班牙语方位词在前，汉语在后：桌子下面。

结构：东西＋在＋参照物＋方位词：猫在房子里面；书在桌子上。

狗：犭＋句（声旁）。`}},
  {id:"ora-46",s:"昨天下很多雨。我在家里。我打扫房子和煮饭。我吃一个汉堡和喝一杯茶。",t:"昨天下很多雨。我在家裡。我打掃房子和煮飯。我吃一個漢堡和喝一杯茶。",py:"zuótiān xià hěn duō yǔ. wǒ zài jiālǐ. wǒ dǎsǎo fángzi hé zhǔfàn. wǒ chī yí ge hànbǎo hé hē yì bēi chá.",es:"párrafo: ayer llovió mucho, me quedé en casa, limpié, cociné, comí y tomé té",en:"paragraph: it rained a lot yesterday, I stayed home, cleaned, cooked, ate and had tea",
   x:{
es:`QUÉ ES: el primer párrafo que armaron en clase, juntando cuatro oraciones. Michelle: «si ponés todo esto junto, es un párrafo… ¿viste que ya armaste un párrafo?».

LAS CUATRO PIEZAS (cada una tiene su tarjeta):
1. 昨天下很多雨 (zuótiān xià hěn duō yǔ) ayer llovió mucho: verbo compuesto con la cantidad en el medio.
2. 我在家里 (wǒ zài jiālǐ) estuve en casa: 在 (zài) como verbo.
3. 我打扫房子和煮饭 (wǒ dǎsǎo fángzi hé zhǔfàn) limpié la casa y cociné.
4. 我吃一个汉堡和喝一杯茶 (wǒ chī yí ge hànbǎo hé hē yì bēi chá) comí una hamburguesa y tomé un vaso de té.

EL TIEMPO SE DICE UNA VEZ: 昨天 (zuótiān) al principio vale para todo el párrafo; ningún verbo cambia.

CÓMO PRACTICARLO: escuchalo entero sin leer e intentá captar las palabras que conocés; es lo que propone Michelle: reconocer los sonidos primero. Después leelo en voz alta, oración por oración.

PRONUNCIACIÓN: zuótiān xià hěn duō yǔ. wǒ zài jiālǐ. wǒ dǎsǎo fángzi hé zhǔfàn. wǒ chī yí ge hànbǎo hé hē yì bēi chá.`,
en:`WHAT IT IS: the first paragraph built in class, putting four sentences together. Michelle: "if you put all this together, it's a paragraph… see, you've already built a paragraph?".

THE FOUR PIECES (each has its own card):
1. 昨天下很多雨 (zuótiān xià hěn duō yǔ) it rained a lot yesterday: compound verb with the amount in the middle.
2. 我在家里 (wǒ zài jiālǐ) I was at home: 在 (zài) as a verb.
3. 我打扫房子和煮饭 (wǒ dǎsǎo fángzi hé zhǔfàn) I cleaned the house and cooked.
4. 我吃一个汉堡和喝一杯茶 (wǒ chī yí ge hànbǎo hé hē yì bēi chá) I ate a hamburger and drank a glass of tea.

TIME IS SAID ONCE: 昨天 (zuótiān) at the start covers the whole paragraph; no verb changes.

HOW TO PRACTISE: listen to it all without reading and try to catch the words you know; that's what Michelle suggests: recognise the sounds first. Then read it aloud, sentence by sentence.

PRONUNCIATION: zuótiān xià hěn duō yǔ. wǒ zài jiālǐ. wǒ dǎsǎo fángzi hé zhǔfàn. wǒ chī yí ge hànbǎo hé hē yì bēi chá.`,
zh:`是什么：课上把四个句子连成的第一段。

四个句子：昨天下很多雨（数量在中间）。我在家里（"在"作动词）。我打扫房子和煮饭。我吃一个汉堡和喝一杯茶。

时间只说一次：段首的"昨天"管整段。

练习方法：先不看字听整段，抓住认识的词；再逐句朗读。`}},
  {id:"ora-47",s:"今天，我要去我的学校附近踢足球。我很久没有玩。我在互联网上找到一个群。",t:"今天，我要去我的學校附近踢足球。我很久沒有玩。我在互聯網上找到一個群。",py:"jīntiān, wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú. wǒ hěn jiǔ méiyǒu wán. wǒ zài hùliánwǎng shàng zhǎodào yí ge qún.",es:"párrafo: hoy voy a jugar al fútbol cerca de mi escuela; hace mucho que no juego; encontré un grupo en internet",en:"paragraph: today I'm playing football near my school; I haven't played in a long time; I found a group online",
   x:{
es:`QUÉ ES: el segundo párrafo de la clase, inventado por Vladimir y armado con Michelle.

LAS TRES PIEZAS:
1. 今天，我要去我的学校附近踢足球 (jīntiān, wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú) hoy voy a ir a jugar al fútbol cerca de mi escuela: tiempo adelante, verbo de movimiento con el lugar después.
2. 我很久没有玩 (wǒ hěn jiǔ méiyǒu wán) hace mucho que no juego: sujeto, tiempo, negación, verbo.
3. 我在互联网上找到一个群 (wǒ zài hùliánwǎng shàng zhǎodào yí ge qún) encontré un grupo en internet: lugar antes del verbo.

TRES TIEMPOS SIN CONJUGAR: futuro (要 yào), un pasado que dura (很久没有 hěn jiǔ méiyǒu) y un pasado terminado (找到 zhǎodào). El verbo nunca cambia: lo dicen las palabras de alrededor.

LA LECTURA DE MICHELLE: «Hoy voy a ir a mi colegio a jugar al fútbol. Hace mucho tiempo que no jugaba. En internet encontré un grupo».

PRONUNCIACIÓN: jīntiān, wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú. wǒ hěn jiǔ méiyǒu wán. wǒ zài hùliánwǎng shàng zhǎodào yí ge qún.`,
en:`WHAT IT IS: the second paragraph of the class, made up by Vladimir and built with Michelle.

THE THREE PIECES:
1. 今天，我要去我的学校附近踢足球 (jīntiān, wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú) today I'm going to play football near my school: time first, movement verb with the place after it.
2. 我很久没有玩 (wǒ hěn jiǔ méiyǒu wán) I haven't played for a long time: subject, time, negation, verb.
3. 我在互联网上找到一个群 (wǒ zài hùliánwǎng shàng zhǎodào yí ge qún) I found a group on the internet: place before the verb.

THREE TENSES, NO CONJUGATION: future (要 yào), an ongoing past (很久没有 hěn jiǔ méiyǒu) and a finished past (找到 zhǎodào). The verb never changes: the words around it do the work.

MICHELLE'S READING: "Today I'm going to my school to play football. I hadn't played for a long time. I found a group on the internet".

PRONUNCIATION: jīntiān, wǒ yào qù wǒ de xuéxiào fùjìn tī zúqiú. wǒ hěn jiǔ méiyǒu wán. wǒ zài hùliánwǎng shàng zhǎodào yí ge qún.`,
zh:`是什么：课上的第二段。

三个句子：今天，我要去我的学校附近踢足球（时间在前，移动动词后面接地点）。我很久没有玩（主语＋时间＋否定＋动词）。我在互联网上找到一个群（地点在动词前）。

三种时间，动词都不变：将来（要）、持续到现在（很久没有）、完成（找到）。`}}
  ]
});
