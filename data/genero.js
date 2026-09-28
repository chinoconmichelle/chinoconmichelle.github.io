/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   w optional writing tip {es, en, zh} (shown on the stroke-order page),
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"genero", glyph:"公",
  name:{"es": "Género y animales", "en": "Gender & animals", "zh": "性别与动物"},
  cl:"c3",
  cards:[
  {id:"gen-01",s:"男 + 名词",t:"男 + 名詞",py:"nán + míngcí",es:"masculino para personas",en:"male (people)",say:"男老师",
   x:{
es:`LA REGLA (clase 3): el chino no tiene género gramatical. No hay «el profesor / la profesora», «alumno / alumna»: 老师 (lǎoshī) y 学生 (xuéshēng) sirven para los dos. Michelle: «en chino no tenemos género», y en general a la gente no le interesa marcarlo.

CUANDO SÍ QUERÉS MARCARLO (por ejemplo, para contrastar), se pone una palabra DELANTE del sustantivo. Y hay dos pares distintos según sea persona o animal:
PERSONAS → 男 (nán, masculino) / 女 (nǚ, femenino): 男老师 (nán lǎoshī), 女老师 (nǚ lǎoshī), 男学生 (nán xuéshēng), 女学生 (nǚ xuéshēng).
ANIMALES → 公 (gōng, macho) / 母 (mǔ, hembra): 公狗 (gōng gǒu), 母狗 (mǔ gǒu), 公猫 (gōng māo), 母猫 (mǔ māo).

ERROR TÍPICO (lo cometiste en clase): usar 母 (mǔ) para personas o ponerlo detrás. 学生母 (xué shēngmǔ) ✗ → 女学生 (nǚ xuéshēng) ✓.

POR QUÉ DOS PARES: 男 (nán) y 女 (nǚ) son «hombre» y «mujer», solo tienen sentido para personas. 公 (gōng) y 母 (mǔ) vienen de «público» y «madre», y se especializaron para animales.

名词 (míngcí, sustantivo) = 名 (míng) nombre + 词 (cí) palabra.`,
en:`THE RULE (class 3): Chinese has no grammatical gender. There's no masculine/feminine form of "teacher" or "student": 老师 (lǎoshī) and 学生 (xuéshēng) cover both. Michelle: "in Chinese we don't have gender", and people generally don't bother marking it.

WHEN YOU DO WANT TO MARK IT (for instance, to contrast), you put a word IN FRONT of the noun. There are two different pairs depending on whether it's a person or an animal:
PEOPLE → 男 (nán, male) / 女 (nǚ, female): 男老师 (nán lǎoshī), 女老师 (nǚ lǎoshī), 男学生 (nán xuéshēng), 女学生 (nǚ xuéshēng).
ANIMALS → 公 (gōng, male) / 母 (mǔ, female): 公狗 (gōng gǒu), 母狗 (mǔ gǒu), 公猫 (gōng māo), 母猫 (mǔ māo).

TYPICAL MISTAKE (you made it in class): using 母 (mǔ) for people, or putting it after. 学生母 (xué shēngmǔ) ✗ → 女学生 (nǚ xuéshēng) ✓.

WHY TWO PAIRS: 男 (nán) and 女 (nǚ) are "man" and "woman"; they only make sense for people. 公 (gōng) and 母 (mǔ) come from "public" and "mother", and became specialised for animals.

名词 (míngcí, noun) = 名 (míng) name + 词 (cí) word.`,
zh:`规则（第三课）：中文没有语法性别，老师、学生 男女通用。需要强调时在名词前加词：人用 男 / 女（男老师、女学生），动物用 公 / 母（公狗、母猫）。常见错误："学生母"✗ → 女学生 ✓。`}},
  {id:"gen-02",s:"男",py:"nán",es:"hombre, masculino",en:"man, male",
   x:{
es:`QUÉ ES: «hombre». Delante de un sustantivo de persona marca que es varón: 男老师 (nán lǎoshī) profesor (hombre), 男学生 (nán xuéshēng) alumno (varón). También en 男人 (nánrén, hombre) y 男朋友 (nánpéngyou, novio).

EL CARÁCTER, uno de los pocos que se lee entero por sus partes:
田 (tián) arriba: un campo de arroz visto desde arriba. El cuadrado es el borde y la cruz son los canales que lo dividen en cuatro parcelas.
力 (lì) abajo: fuerza. El dibujo de un arado, o de un brazo con el músculo tenso.
«El que pone la fuerza en el campo»: así se definía al hombre en la sociedad agrícola antigua. Michelle lo describió como «campo y hacha».

SOLO PARA PERSONAS: para un animal macho no se usa 男 (nán) sino 公 (gōng, 公狗 gōng gǒu).

PRONUNCIACIÓN: nán, segundo tono (sube).`,
en:`WHAT IT IS: "man". In front of a noun for a person it marks male: 男老师 (nán lǎoshī) male teacher, 男学生 (nán xuéshēng) male student. Also in 男人 (nánrén, man) and 男朋友 (nánpéngyou, boyfriend).

THE CHARACTER, one of the few you can read entirely from its parts:
田 (tián) on top: a rice field seen from above. The square is the edge and the cross is the channels dividing it into four plots.
力 (lì) below: strength. The drawing of a plough, or an arm with the muscle tensed.
"The one who puts strength into the field": how a man was defined in ancient farming society. Michelle described it as "field and axe".

ONLY FOR PEOPLE: for a male animal you use 公 (gōng), not 男 (nán, 公狗 gōng gǒu).

PRONUNCIATION: nán, 2nd tone (rising).`,
zh:`是什么："男"，放在人的名词前表示男性：男老师、男学生；也在 男人、男朋友 里。
字形：田（从上面看的稻田）+ 力（犁或用力的手臂），在田里出力的人。
只用于人，雄性动物用 公。`}},
  {id:"gen-03",s:"女",py:"nǚ",es:"mujer, femenino",en:"woman, female",
   x:{
es:`QUÉ ES: «mujer». Delante de un sustantivo de persona marca que es mujer: 女老师 (nǚ lǎoshī) profesora, 女学生 (nǚ xuéshēng) alumna. También en 女人 (nǚrén, mujer), 女儿 (nǚ'ér, hija) y 女朋友 (nǚpéngyou, novia).

EL CARÁCTER: una mujer arrodillada de perfil, con los brazos cruzados adelante (la postura formal antigua). Michelle: «una mujer sentada con las piernas cruzadas».

EL RADICAL MÁS ÚTIL DE LA FAMILIA: si un carácter lleva 女 (nǚ), casi seguro tiene que ver con mujeres o parentesco:
妈 mamá · 姐 (jiě) hermana mayor · 妹 (mèi) hermana menor · 奶 (nǎi) leche/abuela · 她 (tā) ella · 好 (hǎo) bueno (mujer + niño) · 安 (ān) paz (mujer bajo techo).

SOLO PARA PERSONAS: para un animal hembra se usa 母 (mǔ, 母狗 mǔ gǒu).

PRONUNCIACIÓN: nǚ, tercer tono. La ü es la u francesa: labios redondos como para u, lengua como para i. Nǚ (mujer) ≠ nǔ (esforzarse).`,
en:`WHAT IT IS: "woman". In front of a noun for a person it marks female: 女老师 (nǚ lǎoshī) female teacher, 女学生 (nǚ xuéshēng) female student. Also in 女人 (nǚrén, woman), 女儿 (nǚ'ér, daughter) and 女朋友 (nǚpéngyou, girlfriend).

THE CHARACTER: a woman kneeling in profile with her arms crossed in front (the ancient formal posture). Michelle: "a woman sitting with crossed legs".

THE MOST USEFUL RADICAL FOR FAMILY WORDS: if a character contains 女 (nǚ), it almost certainly relates to women or kinship:
妈 (mā) mom · 姐 (jiě) older sister · 妹 (mèi) younger sister · 奶 (nǎi) milk/grandma · 她 (tā) she · 好 (hǎo) good (woman + child) · 安 peace (woman under a roof).

ONLY FOR PEOPLE: for a female animal you use 母 (mǔ, 母狗 mǔ gǒu).

PRONUNCIATION: nǚ, 3rd tone. ü is the French u: lips rounded as for u, tongue as for i. nǚ (woman) ≠ nǔ (to strive).`,
zh:`是什么："女"，放在人的名词前表示女性：女老师、女学生；也在 女人、女儿、女朋友 里。
字形：侧面跪坐、双手交叉的女子。有 女 的字多和女性、亲属有关：妈、姐、妹、奶、她、好、安。
只用于人，雌性动物用 母。发音：nǚ，第三声，ü 要圆唇。`}},
  {id:"gen-04",s:"公",py:"gōng",es:"macho (animales)",en:"male (animals)",
   x:{
es:`QUÉ ES: delante de un animal, «macho»: 公狗 (gōng gǒu) perro macho, 公猫 (gōng māo) gato macho, 公马 (gōng mǎ) caballo (padrillo). NO se usa con personas (para eso está 男 nán).

EL CARÁCTER:
八 (bā) arriba: dos trazos que se separan, «dividir, repartir».
厶 (sī) abajo: «lo privado», el dibujo de un brazo que se cierra sobre sí mismo (guardar para uno).
Repartir lo privado = hacerlo público. El sentido original de 公 (gōng) es «público, común», y sigue vivo en 公司 (gōngsī, empresa), 公园 (gōngyuán, parque) y 公共 (gōnggòng, público).
De «público, oficial» pasó a «señor, macho»: 外公 (wàigōng, abuelo materno) y 老公 (lǎogōng, marido) también lo llevan.

SU PAREJA: 母 (mǔ) hembra.

PRONUNCIACIÓN: gōng, primer tono, alto y plano. g sin aire.`,
en:`WHAT IT IS: in front of an animal, "male": 公狗 (gōng gǒu) male dog, 公猫 (gōng māo) tomcat, 公马 (gōng mǎ) stallion. NOT used for people (that's 男 nán).

THE CHARACTER:
八 (bā) on top: two strokes moving apart, "to divide, to share out".
厶 (sī) below: "private", the drawing of an arm closing in on itself (keeping for yourself).
Sharing out the private = making it public. The original sense of 公 (gōng) is "public, common", still alive in 公司 (gōngsī, company), 公园 (gōngyuán, park) and 公共 (gōnggòng, public).
From "public, official" it came to mean "gentleman, male": 外公 (wàigōng, maternal grandfather) and 老公 (lǎogōng, husband) also carry it.

ITS PAIR: 母 (mǔ) female.

PRONUNCIATION: gōng, 1st tone, high and flat. Unaspirated g.`,
zh:`是什么：用在动物前表示雄性：公狗、公猫、公马；不用于人。
字形：八（分开）+ 厶（私），把私的分出去就是"公"，本义是公共：公司、公园。引申为男性长辈、雄性：外公、老公。对应：母。`}},
  {id:"gen-05",s:"母",py:"mǔ",es:"hembra (animales); madre",en:"female (animals); mother",
   x:{
es:`QUÉ ES: delante de un animal, «hembra»: 母狗 (mǔ gǒu) perra, 母猫 (mǔ māo) gata, 母马 (mǔ mǎ) yegua. También significa «madre»: 母亲 (mǔqīn, madre, formal), 伯母 (bómǔ, tía). Con personas NO marca «femenino» (para eso está 女 nǚ).

EL CARÁCTER: es 女 (nǚ, la mujer arrodillada) con dos puntos agregados, que representan los pechos: la mujer que amamanta, la madre. Michelle lo describió como «un nido con dos huevos».

SU PAREJA: 公 (gōng) macho.

DATO DE CLASE: 母老虎 (mǔ lǎohǔ, tigresa) se usa en broma para una esposa que es «terrible».

PRONUNCIACIÓN: mǔ, tercer tono (baja y sube).`,
en:`WHAT IT IS: in front of an animal, "female": 母狗 (mǔ gǒu) female dog, 母猫 (mǔ māo) female cat, 母马 (mǔ mǎ) mare. It also means "mother": 母亲 (mǔqīn, mother, formal), 伯母 (bómǔ, aunt). With people it does NOT mark "female" (that's 女 nǚ).

THE CHARACTER: it's 女 (nǚ, the kneeling woman) with two dots added, representing the breasts: the woman who nurses, the mother. Michelle described it as "a nest with two eggs".

ITS PAIR: 公 (gōng) male.

FROM CLASS: 母老虎 (mǔ lǎohǔ, tigress) is jokingly said of a "fierce" wife.

PRONUNCIATION: mǔ, 3rd tone (dips and rises).`,
zh:`是什么：用在动物前表示雌性：母狗、母猫、母马；也表示"母亲"：母亲、伯母。字形：女 加两点（乳房），哺乳的母亲。对应：公。`}},
  {id:"gen-06",s:"男老师",t:"男老師",py:"nán lǎoshī",es:"profesor (hombre)",en:"male teacher",
   x:{
es:`QUÉ ES: «profesor» marcando que es hombre. Salió en la oración de clase: 我有一个男老师和两个女老师 (wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī).

CUÁNDO SE USA: 老师 (lǎoshī) solo ya significa «profesor/a». Se agrega 男 (nán) solo si importa el género, como en esa oración, donde se contrasta uno contra dos. Si no, se dice simplemente 老师.

LAS PIEZAS:
男 (nán) hombre: 田 (tián, campo) + 力 (lì, fuerza).
老 (lǎo) respeto: un anciano con pelo largo y bastón (acá no es «viejo», es respeto).
师 (shī) maestro, experto (el mismo de 工程师 gōngchéngshī, ingeniero).

CON NÚMERO: 一个男老师 (yí ge nán lǎoshī, número + clasificador + 男老师 nán lǎoshī). El 男 (nán) va pegado al sustantivo, después del clasificador.

PRONUNCIACIÓN: nán lǎoshī.`,
en:`WHAT IT IS: "teacher", marking that he's a man. It came up in the class sentence: 我有一个男老师和两个女老师 (wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī).

WHEN IT'S USED: 老师 (lǎoshī) alone already means "teacher". You only add 男 (nán) if gender matters, as in that sentence, which contrasts one with two. Otherwise just 老师.

THE PIECES:
男 (nán) man: 田 (tián, field) + 力 (lì, strength).
老 (lǎo) respect: an old man with long hair and a stick (here it's not "old", it's respect).
师 (shī) master, expert (as in 工程师 gōngchéngshī, engineer).

WITH A NUMBER: 一个男老师 (yí ge nán lǎoshī, number + measure word + 男老师 nán lǎoshī). 男 (nán) sticks to the noun, after the measure word.

PRONUNCIATION: nán lǎoshī.`,
zh:`是什么："男老师"。老师 本身不分男女，需要对比时才加 男。有数字时：一个男老师（男 放在量词后、名词前）。`}},
  {id:"gen-07",s:"女老师",t:"女老師",py:"nǚ lǎoshī",es:"profesora",en:"female teacher",
   x:{
es:`QUÉ ES: «profesora». 我有一个男老师和两个女老师 (wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī) = tengo un profesor y dos profesoras.

LA MISMA LÓGICA QUE 男老师 (nán lǎoshī): 女 (nǚ) delante del sustantivo, solo si hace falta marcarlo. Michelle es 老师 (lǎoshī); nadie diría 女老师 (nǚ lǎoshī) al hablar de ella, salvo para contrastar.

LAS PIEZAS:
女 (nǚ) mujer: la mujer arrodillada con los brazos cruzados.
老师 (lǎoshī) profesor: 老 (lǎo, anciano con bastón: respeto) + 师 (shī, maestro).

ORDEN CON NÚMEROS: 两个女老师 (liǎng ge nǚ lǎoshī) = dos + clasificador + mujer + profesor.

PRONUNCIACIÓN: nǚ lǎoshī. Cuidado: nǚ y lǎo son tercer tono seguidos, así que nǚ se dice casi como segundo tono (sube).`,
en:`WHAT IT IS: "female teacher". 我有一个男老师和两个女老师 (wǒ yǒu yí ge nán lǎoshī hé liǎng ge nǚ lǎoshī) = I have one male teacher and two female teachers.

SAME LOGIC AS 男老师 (nán lǎoshī): 女 (nǚ) in front of the noun, only when it needs marking. Michelle is a 老师 (lǎoshī); nobody would call her 女老师 (nǚ lǎoshī) except to contrast.

THE PIECES:
女 (nǚ) woman: the kneeling woman with crossed arms.
老师 (lǎoshī) teacher: 老 (lǎo, old man with a stick: respect) + 师 (shī, master).

ORDER WITH NUMBERS: 两个女老师 (liǎng ge nǚ lǎoshī) = two + measure word + woman + teacher.

PRONUNCIATION: nǚ lǎoshī. nǚ and lǎo are two 3rd tones in a row, so nǚ is said almost like a 2nd tone (rising).`,
zh:`是什么："女老师"。同样只在需要对比时加 女：两个女老师。发音：nǚ lǎoshī，两个第三声相连，第一个变调。`}},
  {id:"gen-08",s:"男学生",t:"男學生",py:"nán xuéshēng",es:"alumno (varón)",en:"male student",
   x:{
es:`QUÉ ES: «alumno» marcando que es varón. En la oración de la escuela: 二十个男学生 (èrshí ge nán xuéshēng) = 20 alumnos (varones).

LAS PIEZAS:
男 (nán): 田 (tián, campo) + 力 (lì, fuerza).
学生 (xuéshēng) alumno: 学 (xué, dos manos de un adulto enseñándole a un niño 子 zǐ bajo un techo) + 生 (shēng, nacer, crecer: un brote saliendo de la tierra). «El que crece estudiando».

EN ESPAÑOL «alumnos» puede incluir a todos; en chino 学生 (xuéshēng) ya es neutro. 男学生 (nán xuéshēng) solo se usa cuando querés decir que son varones, como al contrastar 200 alumnas y 20 alumnos.

PRONUNCIACIÓN: nán xuéshēng. Los dos primeros suben (nán, xué); shēng es plano.`,
en:`WHAT IT IS: "student", marking that he's male. In the school sentence: 二十个男学生 (èrshí ge nán xuéshēng) = 20 male students.

THE PIECES:
男 (nán): 田 (tián, field) + 力 (lì, strength).
学生 (xuéshēng) student: 学 (xué, an adult's two hands teaching a child 子 zǐ under a roof) + 生 (shēng, to be born, grow: a sprout from the soil). "The one who grows by studying".

学生 (xuéshēng) is already neutral; 男学生 (nán xuéshēng) is only used when you want to say they're male, as when contrasting 200 female and 20 male students.

PRONUNCIATION: nán xuéshēng. The first two rise (nán, xué); shēng is flat.`,
zh:`是什么："男学生"。学生 本来不分男女，对比时才说：两百个女学生和二十个男学生。学生：学（大人教孩子）+ 生（成长）。`}},
  {id:"gen-09",s:"女学生",t:"女學生",py:"nǚ xuéshēng",es:"alumna",en:"female student",
   x:{
es:`QUÉ ES: «alumna». En la oración de la escuela: 两百个女学生 (liǎngbǎi ge nǚ xuéshēng) = 200 alumnas.

EL ERROR DE CLASE: dijiste «学生母 (xué shēngmǔ)» (o «母学生 mǔ xuéshēng») y Michelle te corrigió con dos cosas:
1. 母 (mǔ) es para ANIMALES; para personas es 女 (nǚ).
2. La marca de género va ADELANTE del sustantivo, nunca atrás.
Entonces: 学生母 ✗ · 母学生 ✗ · 女学生 (nǚ xuéshēng) ✓.

LAS PIEZAS:
女 (nǚ): la mujer arrodillada.
学生 (xuéshēng): 学 (xué, enseñar a un niño bajo techo) + 生 (shēng, crecer).

PRONUNCIACIÓN: nǚ xuéshēng. La ü de nǚ con los labios redondos.`,
en:`WHAT IT IS: "female student". In the school sentence: 两百个女学生 (liǎngbǎi ge nǚ xuéshēng) = 200 female students.

THE MISTAKE FROM CLASS: you said "学生母 (xué shēngmǔ)" (or "母学生 mǔ xuéshēng") and Michelle corrected two things:
1. 母 (mǔ) is for ANIMALS; for people it's 女 (nǚ).
2. The gender marker goes IN FRONT of the noun, never after.
So: 学生母 ✗ · 母学生 ✗ · 女学生 (nǚ xuéshēng) ✓.

THE PIECES:
女 (nǚ): the kneeling woman.
学生 (xuéshēng): 学 (xué, teaching a child under a roof) + 生 (shēng, to grow).

PRONUNCIATION: nǚ xuéshēng. Round your lips for the ü in nǚ.`,
zh:`是什么："女学生"。课上的错误："学生母"：母 用于动物，人用 女，而且要放在名词前。学生母 ✗、母学生 ✗、女学生 ✓。`}},
  {id:"gen-10",s:"公狗",py:"gōng gǒu",es:"perro (macho)",en:"male dog",
   x:{
es:`QUÉ ES: «perro macho». La pareja es 母狗 (mǔ gǒu, perra).

CÓMO SE ARMA: 公 (gōng, macho) delante del animal. Para animales se usa 公 / 母 (mǔ), nunca 男 (nán) / 女 (nǚ).

LAS PIEZAS:
公 (gōng) macho: 八 (bā, repartir) + 厶 (sī, lo privado) = «lo público»; con animales, «macho».
狗 (gǒu) perro: 犭 (quǎn, 犬 quǎn perro aplastado: un perro de perfil con la cola enroscada) + 句 (jù, sonido).

CON CLASIFICADOR: 一只公狗 (yì zhī gōng gǒu) un perro macho (el perro también acepta 条 tiáo: 一条公狗 yì tiáo gōng gǒu).

EN ESPAÑOL cambiamos la palabra (perro / perra); en chino se agrega la marca delante y la palabra 狗 (gǒu) no cambia.

PRONUNCIACIÓN: gōng gǒu. Primer tono y después tercer tono.`,
en:`WHAT IT IS: "male dog". The pair is 母狗 (mǔ gǒu, female dog).

HOW IT'S BUILT: 公 (gōng, male) in front of the animal. For animals you use 公 / 母 (mǔ), never 男 (nán) / 女 (nǚ).

THE PIECES:
公 (gōng) male: 八 (bā, share out) + 厶 (sī, private) = "public"; with animals, "male".
狗 (gǒu) dog: 犭 (quǎn, 犬 quǎn dog, squeezed: a dog in profile with a curled tail) + 句 (jù, sound).

WITH A MEASURE WORD: 一只公狗 (yì zhī gōng gǒu) a male dog (dogs also take 条 tiáo: 一条公狗 yì tiáo gōng gǒu).

The word 狗 (gǒu) itself never changes; you add the marker in front.

PRONUNCIATION: gōng gǒu. 1st tone then 3rd.`,
zh:`是什么："公狗"，对应 母狗。动物用 公 / 母，不用 男 / 女。一只公狗（也可以说 一条公狗）。`}},
  {id:"gen-11",s:"母狗",py:"mǔ gǒu",es:"perra",en:"female dog",
   x:{
es:`QUÉ ES: «perra». Michelle lo usó de ejemplo en clase.

CÓMO SE ARMA: 母 (mǔ, hembra) + 狗 (gǒu, perro). La palabra 狗 no cambia.

LAS PIEZAS:
母 (mǔ): la mujer 女 (nǚ) con dos puntos (los pechos): la que amamanta.
狗 (gǒu): 犭 (quǎn, perro de perfil) + 句 (jù, sonido).

PAREJA: 公狗 (gōng gǒu) perro macho.

OJO CON EL USO: como en español, llamar 母狗 (mǔ gǒu) a una persona es un insulto fuerte. Con animales es neutro.

PRONUNCIACIÓN: mǔ gǒu. Dos terceros tonos seguidos: el primero se dice casi como segundo tono (mú gǒu).`,
en:`WHAT IT IS: "female dog". Michelle used it as an example in class.

HOW IT'S BUILT: 母 (mǔ, female) + 狗 (gǒu, dog). 狗 doesn't change.

THE PIECES:
母 (mǔ): the woman 女 (nǚ) with two dots (the breasts): the one who nurses.
狗 (gǒu): 犭 (quǎn, dog in profile) + 句 (jù, sound).

PAIR: 公狗 (gōng gǒu) male dog.

CAREFUL: as in English, calling a person 母狗 (mǔ gǒu) is a strong insult. For animals it's neutral.

PRONUNCIATION: mǔ gǒu. Two 3rd tones in a row: the first is said almost like a 2nd tone (mú gǒu).`,
zh:`是什么："母狗"。母 + 狗。对应：公狗。用来骂人是很重的脏话。发音：两个第三声，第一个变调。`}},
  {id:"gen-12",s:"公猫",t:"公貓",py:"gōng māo",es:"gato (macho)",en:"tomcat",
   x:{
es:`QUÉ ES: «gato macho», como Oliver. Michelle: 公猫 (gōng māo) es gato, 母猫 (mǔ māo) es gata.

LAS PIEZAS:
公 (gōng) macho: 八 (bā) + 厶 (sī, repartir lo privado = público).
猫 (māo) gato: 犭 (quǎn, animal de cuatro patas) + 苗 miáo (un brote en el campo: solo por el sonido, que es el maullido). En tradicional 貓 (māo) lleva 豸 (zhì, animal de lomo largo).

CON CLASIFICADOR: 一只公猫 (yì zhī gōng māo). El gato solo acepta 只 (zhī), nunca 条 (tiáo).

PRONUNCIACIÓN: gōng māo. Dos primeros tonos: altos y planos, como la bocina.`,
en:`WHAT IT IS: "tomcat", like Oliver. Michelle: 公猫 (gōng māo) is a male cat, 母猫 (mǔ māo) a female cat.

THE PIECES:
公 (gōng) male: 八 (bā) + 厶 (sī, sharing the private = public).
猫 (māo) cat: 犭 (quǎn, four-legged animal) + 苗 miáo (a sprout in a field: only for the sound, which is the miaow). Traditional 貓 (māo) has 豸 (zhì, long-backed animal).

WITH A MEASURE WORD: 一只公猫 (yì zhī gōng māo). Cats only take 只 (zhī), never 条 (tiáo).

PRONUNCIATION: gōng māo. Two 1st tones: high and flat, like the car horn.`,
zh:`是什么："公猫"，像 Oliver。一只公猫，猫只能用 只。发音：两个第一声。`}},
  {id:"gen-13",s:"母猫",t:"母貓",py:"mǔ māo",es:"gata",en:"female cat",
   x:{
es:`QUÉ ES: «gata». Pareja de 公猫 (gōng māo).

LAS PIEZAS:
母 (mǔ) hembra: la mujer 女 (nǚ) con los dos puntos del pecho.
猫 (māo): 犭 (quǎn) + 苗 (sonido miáo).

EN ESPAÑOL: gato / gata (cambia la terminación). EN CHINO: 公猫 (gōng māo) / 母猫 (mǔ māo, se agrega la marca adelante, 猫 māo queda igual). Y si no importa el sexo, simplemente 猫.

PRONUNCIACIÓN: mǔ māo. Tercer tono y después primero.`,
en:`WHAT IT IS: "female cat". The pair of 公猫 (gōng māo).

THE PIECES:
母 (mǔ) female: the woman 女 (nǚ) with the two breast dots.
猫 (māo): 犭 (quǎn) + 苗 (sound miáo).

Chinese adds the marker in front: 公猫 (gōng māo) / 母猫 (mǔ māo), and 猫 (māo) stays the same. If sex doesn't matter, just 猫.

PRONUNCIATION: mǔ māo. 3rd tone then 1st.`,
zh:`是什么："母猫"，对应 公猫。不需要区分时就说 猫。`}},
  {id:"gen-14",s:"马",t:"馬",py:"mǎ",es:"caballo",en:"horse",
   x:{
es:`QUÉ ES: «caballo». Michelle lo usó en la clase 3 para practicar 公 (gōng) / 母 (mǔ): 公马 (gōng mǎ, padrillo) y 母马 (mǔ mǎ, yegua).

EL CARÁCTER: un caballo de perfil. En tradicional 馬 (mǎ) se ve completo: arriba la crin al viento, en el medio el cuerpo, y abajo cuatro puntos que son las patas (o la cola). El simplificado 马 (mǎ) lo resumió en tres trazos.

EL CABALLO QUE APARECE EN TODOS LADOS: 马 (mǎ) da el SONIDO a otros caracteres:
妈 mā mamá (女 nǚ + 马) · 吗 ma partícula (口 kǒu + 马) · 骂 mà retar (罒 wǎng + 马).
El caballo no tiene nada que ver con el significado: solo dice «esto suena ma».

LA FRASE DE LA SOBRINA DE MICHELLE: 妈妈骂马 māma mà mǎ «mamá reta al caballo». Solo cambian los tonos.

PRONUNCIACIÓN: mǎ, tercer tono: baja y sube. Si lo decís plano (mā) es «mamá».`,
en:`WHAT IT IS: "horse". Michelle used it in class 3 to practise 公 (gōng) / 母 (mǔ): 公马 (gōng mǎ, stallion) and 母马 (mǔ mǎ, mare).

THE CHARACTER: a horse in profile. Traditional 馬 (mǎ) shows it all: the mane blowing on top, the body in the middle, and four dots below for the legs (or tail). Simplified 马 (mǎ) squeezed it into three strokes.

THE HORSE THAT'S EVERYWHERE: 马 (mǎ) gives its SOUND to other characters:
妈 mā mom (女 nǚ + 马) · 吗 ma particle (口 kǒu + 马) · 骂 mà scold (罒 wǎng + 马).
The horse has nothing to do with the meaning: it only says "this sounds like ma".

MICHELLE'S NIECE'S SENTENCE: 妈妈骂马 māma mà mǎ "mom scolds the horse". Only the tones change.

PRONUNCIATION: mǎ, 3rd tone: dips and rises. Said flat (mā) it's "mom".`,
zh:`是什么："马"。公马、母马。字形：侧面的马，繁体 馬 有鬃毛、身体和四点（腿）。马 常作表音部件：妈、吗、骂。妈妈骂马 只是声调不同。`}},
  {id:"gen-15",s:"公马",t:"公馬",py:"gōng mǎ",es:"caballo (macho)",en:"stallion",
   x:{
es:`QUÉ ES: «caballo macho» (padrillo). Michelle te lo preguntó en clase: «caballo macho, ¿cómo se dice?» → 公马 (gōng mǎ).

CÓMO SE ARMA: 公 (gōng, macho) + 马 (mǎ, caballo), igual que 公狗 (gōng gǒu) y 公猫 (gōng māo).

LAS PIEZAS:
公 (gōng): 八 (bā, repartir) + 厶 (sī, lo privado).
马 (mǎ): el caballo de perfil (tradicional 馬 mǎ, con las cuatro patas).

PRONUNCIACIÓN: gōng mǎ. Alto y plano, después baja y sube.`,
en:`WHAT IT IS: "male horse" (stallion). Michelle asked you in class: "male horse, how do you say it?" → 公马 (gōng mǎ).

HOW IT'S BUILT: 公 (gōng, male) + 马 (mǎ, horse), just like 公狗 (gōng gǒu) and 公猫 (gōng māo).

THE PIECES:
公 (gōng): 八 (bā, share out) + 厶 (sī, private).
马 (mǎ): the horse in profile (traditional 馬 mǎ, with its four legs).

PRONUNCIATION: gōng mǎ. High and flat, then dip and rise.`,
zh:`是什么："公马"。公 + 马，和 公狗、公猫 一样。`}},
  {id:"gen-16",s:"母马",t:"母馬",py:"mǔ mǎ",es:"yegua",en:"mare",
   x:{
es:`QUÉ ES: «yegua». En español es otra palabra; en chino es 母 (mǔ) + 马 (mǎ), la misma lógica de siempre.

LAS PIEZAS:
母 (mǔ) hembra: la mujer 女 (nǚ) con los dos puntos del pecho.
马 (mǎ) caballo.

PRONUNCIACIÓN: mǔ mǎ. Dos terceros tonos seguidos: el primero sube (mú mǎ). Buen ejercicio para no mezclar con 妈妈 (māma).`,
en:`WHAT IT IS: "mare". In Chinese it's 母 (mǔ) + 马 (mǎ), the same logic as always.

THE PIECES:
母 (mǔ) female: the woman 女 (nǚ) with the two breast dots.
马 (mǎ) horse.

PRONUNCIATION: mǔ mǎ. Two 3rd tones in a row: the first rises (mú mǎ). A good drill for not mixing it up with 妈妈 (māma).`,
zh:`是什么："母马"。母 + 马。发音：两个第三声，第一个变调；别和 妈妈 混淆。`}},
  {id:"gen-17",s:"老鼠",py:"lǎoshǔ",es:"ratón / rata",en:"mouse / rat",
   x:{
es:`QUÉ ES: «ratón» o «rata» (el chino no los distingue).

TU PREGUNTA DE CLASE: «¿por qué el ratón tiene el mismo carácter que profesor (老师 lǎoshī)?». La respuesta: acá 老 (lǎo) NO significa «viejo» ni «respeto». Es un prefijo vacío que llevan algunos nombres de animales, sin ningún significado: 老鼠 (lǎoshǔ, ratón), 老虎 (lǎohǔ, tigre). No tiene relación con 老师.
Michelle te dijo «no empieces a descifrar», y tenía razón en este caso: es una costumbre del idioma, no una lógica.

EL CARÁCTER 鼠 (shǔ): un pictograma de la rata. Arriba 臼 (jiù) son los dientes (los incisivos que roen); abajo, las patitas y la cola larga que se curva.

CON GÉNERO: 公老鼠 (gōng lǎoshǔ) ratón macho · 母老鼠 (mǔ lǎoshǔ) ratona.

PRONUNCIACIÓN: lǎoshǔ. Dos terceros tonos: el primero sube (láoshǔ). sh con la lengua atrás.`,
en:`WHAT IT IS: "mouse" or "rat" (Chinese doesn't distinguish them).

YOUR QUESTION FROM CLASS: "why does the mouse have the same character as teacher (老师 lǎoshī)?". The answer: here 老 (lǎo) does NOT mean "old" or "respect". It's an empty prefix some animal names carry, with no meaning at all: 老鼠 (lǎoshǔ, mouse), 老虎 (lǎohǔ, tiger). It's unrelated to 老师.
Michelle told you "don't start decoding", and she was right in this case: it's a habit of the language, not logic.

THE CHARACTER 鼠 (shǔ): a pictogram of the rat. On top 臼 (jiù) is the teeth (the gnawing incisors); below, the little legs and the long curving tail.

WITH GENDER: 公老鼠 (gōng lǎoshǔ) male mouse · 母老鼠 (mǔ lǎoshǔ) female mouse.

PRONUNCIATION: lǎoshǔ. Two 3rd tones: the first rises (láoshǔ). sh with the tongue back.`,
zh:`是什么："老鼠"。你课上的问题：为什么和 老师 一样有 老？这里的 老 是动物名的词头，没有意思（老鼠、老虎），和 老师 无关。
鼠：象形字，上面 臼 是门牙，下面是脚和长尾巴。公老鼠、母老鼠。`}},
  {id:"gen-18",s:"老虎",py:"lǎohǔ",es:"tigre",en:"tiger",
   x:{
es:`QUÉ ES: «tigre». Michelle lo dio junto con 老鼠 (lǎoshǔ).

EL 老 (lǎo): el mismo prefijo vacío de 老鼠 (lǎoshǔ). No es «viejo»: un tigre joven también es 老虎 (lǎohǔ). En el habla simplemente se dice así.

EL CARÁCTER 虎 (hǔ): un tigre de perfil. Arriba 虍 (hū) es la cabeza con las rayas (este componente aparece en caracteres relacionados con el tigre); abajo, el cuerpo y las patas. Algunos ven la boca abierta con los colmillos.

CON GÉNERO: 公老虎 (gōng lǎohǔ) tigre macho · 母老虎 (mǔ lǎohǔ) tigresa (y en broma, esposa temible).

PRONUNCIACIÓN: lǎohǔ. Dos terceros tonos: láohǔ. La h china suena como una jota suave.`,
en:`WHAT IT IS: "tiger". Michelle gave it together with 老鼠 (lǎoshǔ).

THE 老 (lǎo): the same empty prefix as in 老鼠 (lǎoshǔ). It isn't "old": a young tiger is also 老虎 (lǎohǔ). That's just what it's called.

THE CHARACTER 虎 (hǔ): a tiger in profile. On top 虍 (hū) is the striped head (this component appears in tiger-related characters); below, the body and legs. Some see the open mouth with fangs.

WITH GENDER: 公老虎 (gōng lǎohǔ) male tiger · 母老虎 (mǔ lǎohǔ) tigress (and, as a joke, a formidable wife).

PRONUNCIATION: lǎohǔ. Two 3rd tones: láohǔ. The Chinese h is a soft throaty sound.`,
zh:`是什么："老虎"。老 是词头，小老虎也叫 老虎。虎：上面 虍 是有花纹的头，下面是身体和腿。公老虎、母老虎。`}},
  {id:"gen-19",s:"母老虎",py:"mǔ lǎohǔ",es:"tigresa; (broma) esposa terrible",en:"tigress; (joke) fierce wife",
   x:{
es:`QUÉ ES: literalmente «tigresa» (母 mǔ hembra + 老虎 lǎohǔ tigre).

EL USO EN BROMA que contó Michelle: cuando alguien dice que su esposa es una 母老虎 (mǔ lǎohǔ), quiere decir que es brava, terrible, que manda en la casa. Es como decir «es una fiera».

POR QUÉ ES ÚTIL: muestra cómo las palabras del vocabulario básico se combinan para hacer expresiones coloquiales. Michelle lo comparó con el lunfardo.

LAS PIEZAS:
母 (mǔ): la mujer con los dos puntos (hembra).
老 (lǎo): prefijo vacío de animal.
虎 (hǔ): el tigre de perfil, con la cabeza rayada 虍 (hū).

PRONUNCIACIÓN: mǔ lǎohǔ. Tres terceros tonos seguidos: al hablar rápido suena mú láo hǔ.`,
en:`WHAT IT IS: literally "tigress" (母 mǔ female + 老虎 lǎohǔ tiger).

THE JOKING USE Michelle mentioned: when someone says his wife is a 母老虎 (mǔ lǎohǔ), he means she's fierce, formidable, the boss at home. Like calling someone "a dragon".

WHY IT'S USEFUL: it shows how basic vocabulary combines into colloquial expressions. Michelle compared it to slang.

THE PIECES:
母 (mǔ): the woman with two dots (female).
老 (lǎo): empty animal prefix.
虎 (hǔ): the tiger in profile, with the striped head 虍 (hū).

PRONUNCIATION: mǔ lǎohǔ. Three 3rd tones in a row: spoken quickly it's mú láo hǔ.`,
zh:`是什么："母老虎"，字面是雌老虎，开玩笑时指很凶、在家说了算的太太。发音：三个第三声连读。`}},
  {id:"gen-20",s:"蛇",py:"shé",es:"víbora / serpiente",en:"snake",
   x:{
es:`QUÉ ES: «serpiente, víbora». El ejemplo que usó Michelle para el clasificador 条 (tiáo): 一条蛇 (yì tiáo shé).

EL CARÁCTER:
虫 (chóng) a la izquierda: el dibujo de un bicho o reptil con la cabeza levantada. Marca insectos, gusanos y reptiles.
它 (tā) a la derecha: originalmente TAMBIÉN el dibujo de una cobra con la cabeza erguida.
La serpiente aparece dos veces: una como categoría (虫) y otra como dibujo (它).
Con el tiempo 它 se empezó a usar como pronombre «ello» (it), y para no confundir se le agregó 虫 al carácter de serpiente.

CLASIFICADOR: 条 (tiáo), porque es larga y fina. Nunca 只 (zhī).

PRONUNCIACIÓN: shé, segundo tono. sh con la lengua atrás.`,
en:`WHAT IT IS: "snake". Michelle's example for the measure word 条 (tiáo): 一条蛇 (yì tiáo shé).

THE CHARACTER:
虫 (chóng) on the left: the drawing of a bug or reptile with its head raised. It marks insects, worms and reptiles.
它 (tā) on the right: originally ALSO a drawing of a cobra with its head up.
The snake appears twice: once as a category (虫) and once as a picture (它).
Over time 它 came to be used as the pronoun "it", so 虫 was added to the snake character to avoid confusion.

MEASURE WORD: 条 (tiáo), because it's long and thin. Never 只 (zhī).

PRONUNCIATION: shé, 2nd tone. sh with the tongue back.`,
zh:`是什么："蛇"，一条蛇。字形：虫（抬头的虫或爬行动物）+ 它（本来也是蛇的样子），蛇出现了两次。后来 它 当代词用，就加了 虫 旁。`}},
  {id:"gen-21",s:"鱼",t:"魚",py:"yú",es:"pez / pescado",en:"fish",
   x:{
es:`QUÉ ES: «pez» y también «pescado» (el chino no distingue el animal vivo de la comida). En la oración de Oliver: 这只猫今天早上吃一条鱼 (zhè zhī māo jīntiān zǎoshang chī yì tiáo yú).

EL CARÁCTER, pictograma completo:
arriba ⺈: la cabeza,
en el medio 田 (tián): el cuerpo con las escamas (no es el campo, solo se parece),
abajo 一 (yī): la cola.
En tradicional 魚 (yú) la cola son cuatro puntos, igual que las patas de 馬 (mǎ, caballo).

CLASIFICADOR: 条 (tiáo, los peces son alargados, explicó Michelle): 一条鱼 (yì tiáo yú).

DATO CULTURAL: 鱼 yú suena como 余 yú «sobrante, abundancia». Por eso en Año Nuevo se come pescado: para que sobre todo el año.

PRONUNCIACIÓN: yú, segundo tono. Es ü (la u francesa), aunque después de y se escribe sin puntos.`,
en:`WHAT IT IS: "fish", both the animal and the food. In Oliver's sentence: 这只猫今天早上吃一条鱼 (zhè zhī māo jīntiān zǎoshang chī yì tiáo yú).

THE CHARACTER, a complete pictogram:
on top ⺈: the head,
in the middle 田 (tián): the scaly body (not the field, it just looks like it),
at the bottom 一 (yī): the tail.
In traditional 魚 (yú) the tail is four dots, like the legs of 馬 (mǎ, horse).

MEASURE WORD: 条 (tiáo, fish are elongated, Michelle explained): 一条鱼 (yì tiáo yú).

CULTURAL NOTE: 鱼 yú sounds like 余 yú "surplus, abundance". That's why fish is eaten at New Year: so there's plenty all year.

PRONUNCIATION: yú, 2nd tone. It's ü (the French u), though after y it's written without dots.`,
zh:`是什么："鱼"。象形字：头、有鳞的身体、尾巴；繁体 魚 尾巴是四点。量词：一条鱼。鱼 和 余 同音，过年吃鱼表示年年有余。`}},
  {id:"gen-22",s:"老公",py:"lǎogōng",es:"marido (coloquial)",en:"husband (informal)",
   x:{
es:`QUÉ ES: «marido», en el habla de todos los días. Hoy es LA palabra más común.

LITERALMENTE: 老 (lǎo, viejo) + 公 (gōng, macho) = «viejo macho». Pero el 老 acá es cariño, como cuando en el Río de la Plata alguien le dice «viejo» a su pareja o a un amigo. Michelle: «viejo es querido».

POR QUÉ SE USA MÁS QUE 先生 (xiānsheng): Michelle explicó que 先生 y 太太 (tàitai) son las palabras de los libros de texto, y hoy suenan formales. Por la influencia de las películas y la música de China continental, casi todo el mundo que habla mandarín (también en Taiwán) dice 老公 (lǎogōng) y 老婆 (lǎopo). Ella lo comparó con el lunfardo.

LAS PIEZAS:
老 (lǎo): un anciano encorvado de pelo largo con un bastón.
公 (gōng): 八 (bā, repartir) + 厶 (sī, privado); «público», y de ahí «señor, macho».

PAREJA: 老婆 (lǎopo) esposa.

PRONUNCIACIÓN: lǎogōng. Tercer tono y después primero.`,
en:`WHAT IT IS: "husband", in everyday speech. Today it's THE most common word.

LITERALLY: 老 (lǎo, old) + 公 (gōng, male) = "old man". But 老 here is affection, like calling your partner "old man" or "my old lady" fondly. Michelle: "old means dear".

WHY IT'S USED MORE THAN 先生 (xiānsheng): Michelle explained that 先生 and 太太 (tàitai) are textbook words and sound formal today. Because of mainland Chinese films and music, almost every Mandarin speaker (Taiwan included) says 老公 (lǎogōng) and 老婆 (lǎopo). She compared it to slang.

THE PIECES:
老 (lǎo): a stooped old man with long hair and a stick.
公 (gōng): 八 (bā, share out) + 厶 (sī, private); "public", then "gentleman, male".

PAIR: 老婆 (lǎopo) wife.

PRONUNCIATION: lǎogōng. 3rd tone then 1st.`,
zh:`是什么："老公"，日常最常用的说法。老 在这里是亲昵。Michelle 老师说：先生、太太 是课本用语，现在听起来正式；受大陆影视影响，台湾也多说 老公、老婆。对应：老婆。`}},
  {id:"gen-23",s:"老婆",py:"lǎopo",es:"esposa (coloquial)",en:"wife (informal)",
   x:{
es:`QUÉ ES: «esposa», en el habla de todos los días. Pareja de 老公 (lǎogōng).

LITERALMENTE: 老 (lǎo, vieja) + 婆 (pó, anciana, señora mayor) = «vieja». El 老 es cariño: «mi vieja», como en el Río de la Plata. Michelle: «querida vieja».

EL CARÁCTER 婆 (pó):
女 (nǚ) abajo: la mujer arrodillada.
波 (bō) arriba: «ola» (氵 shuǐ agua + 皮 piel, la superficie del agua), acá solo por el sonido.
婆 = mujer mayor, abuela. También está en 外婆 (wàipó, abuela materna).

REGISTRO: 老婆 (lǎopo) es lo normal hoy; 太太 (tàitai) suena más formal y se usa sobre todo como título (Martinez 太太 = la señora Martínez).

PRONUNCIACIÓN: lǎopo. La segunda sílaba en tono neutro. p con aire.`,
en:`WHAT IT IS: "wife", in everyday speech. The pair of 老公 (lǎogōng).

LITERALLY: 老 (lǎo, old) + 婆 (pó, old woman, elder lady) = "old lady". 老 is affection: "my old lady". Michelle: "dear old lady".

THE CHARACTER 婆 (pó):
女 (nǚ) below: the kneeling woman.
波 (bō) on top: "wave" (氵 shuǐ water + 皮 pí skin, the water's surface), here only for the sound.
婆 = older woman, grandmother. Also in 外婆 (wàipó, maternal grandmother).

REGISTER: 老婆 (lǎopo) is normal today; 太太 (tàitai) sounds more formal and is used mostly as a title (Martinez 太太 = Mrs. Martinez).

PRONUNCIATION: lǎopo. Second syllable neutral tone. Aspirated p.`,
zh:`是什么："老婆"，日常说法，对应 老公。婆：女 + 波（表音），年长的女性，也在 外婆 里。太太 比较正式，多作称呼。`}},
  {id:"gen-24",s:"先生",py:"xiānsheng",es:"señor; marido (formal)",en:"Mr.; husband (formal)",
   x:{
es:`QUÉ ES: dos usos.
1. «Señor», como título. Y va DESPUÉS del apellido: Martinez 先生 (xiānsheng) = el señor Martínez. Al revés que en español.
2. «Marido», en registro formal o de libro. En el día a día se dice 老公 (lǎogōng).

LITERALMENTE: 先 (xiān, primero) + 生 (shēng, nacer) = «el que nació primero», el mayor. De ahí «señor», alguien a quien se respeta. En Japón (sensei, mismo carácter) significa «maestro».

LOS CARACTERES:
先 (xiān): 止 (zhǐ, la huella de un pie) arriba, avanzando sobre 儿 (dos piernas). Ir adelante: primero.
生 (shēng): un brote que sale de la tierra (la línea de abajo es el suelo). Nacer, crecer, vivir.

POR QUÉ SE USA TANTO EL TÍTULO (Michelle): en China y Taiwán los apellidos se repiten muchísimo (Chen, Wang), así que la gente se llama por apellido + título: 王先生 (Wáng xiānsheng), 陈老师 (Chén lǎoshī).

PRONUNCIACIÓN: xiānsheng, la segunda sílaba en tono neutro.`,
en:`WHAT IT IS: two uses.
1. "Mr.", as a title. And it goes AFTER the surname: Martinez 先生 (xiānsheng) = Mr. Martinez. The opposite of English.
2. "Husband", in formal or textbook register. Day to day people say 老公 (lǎogōng).

LITERALLY: 先 (xiān, first) + 生 (shēng, born) = "the one born first", the elder. Hence "sir", someone respected. In Japanese (sensei, same characters) it means "teacher".

THE CHARACTERS:
先 (xiān): 止 (zhǐ, a footprint) on top, advancing over 儿 (two legs). Going ahead: first.
生 (shēng): a sprout coming out of the soil (the bottom line is the ground). To be born, grow, live.

WHY THE TITLE IS SO COMMON (Michelle): in China and Taiwan surnames repeat a lot (Chen, Wang), so people are called surname + title: 王先生 (Wáng xiānsheng), 陈老师 (Chén lǎoshī).

PRONUNCIATION: xiānsheng, second syllable neutral tone.`,
zh:`是什么：一、称呼"先生"，放在姓后面：Martinez 先生；二、正式的"丈夫"，口语说 老公。字面是"先出生的人"。先：止 在 儿 上，往前走；生：破土的芽。姓很常重复，所以常用"姓 + 称呼"。`}},
  {id:"gen-25",s:"太太",py:"tàitai",es:"señora; esposa (formal)",en:"Mrs.; wife (formal)",
   x:{
es:`QUÉ ES: dos usos, igual que 先生 (xiānsheng).
1. «Señora», como título, DESPUÉS del apellido: Martinez 太太 (tàitai) = la señora Martínez.
2. «Esposa», en registro formal. En el día a día, 老婆 (lǎopo). En clase 2 se usó para la esposa de Philip: 他是 (tā shì) Philip 的太太 (de tàitai).

EL CARÁCTER 太 (tài): es 大 (dà, una persona de frente con los brazos y piernas abiertos: grande) con un punto extra abajo. «Más que grande»: demasiado, muy. 太好了 (tài hǎo le) = ¡buenísimo!
Doblado, 太太 (tàitai) se volvió un título de respeto para una mujer casada, «la gran señora de la casa».

PRONUNCIACIÓN: tàitai, cuarto tono y después neutro. t con aire.`,
en:`WHAT IT IS: two uses, like 先生 (xiānsheng).
1. "Mrs.", as a title, AFTER the surname: Martinez 太太 (tàitai) = Mrs. Martinez.
2. "Wife", in formal register. Day to day, 老婆 (lǎopo). In class 2 it was used for Philip's wife: 他是 (tā shì) Philip 的太太 (de tàitai).

THE CHARACTER 太 (tài): it's 大 (dà, a person seen from the front with arms and legs spread: big) with an extra dot below. "More than big": too, very. 太好了 (tài hǎo le) = great!
Doubled, 太太 (tàitai) became a respectful title for a married woman, "the great lady of the house".

PRONUNCIATION: tàitai, 4th tone then neutral. Aspirated t.`,
zh:`是什么：一、称呼"太太"，放在姓后：Martinez 太太；二、正式的"妻子"，口语说 老婆。太：大 多一点，表示"很、太"（太好了）。`}},
  {id:"gen-26",s:"Martinez 先生",py:"Martinez xiānsheng",es:"el señor Martínez",en:"Mr. Martinez",say:"先生",
   x:{
es:`QUÉ ES: «el señor Martínez». El ejemplo que dio Michelle para mostrar dónde va el título.

LA REGLA: en chino el título va DESPUÉS del apellido, al revés que en español e inglés.
señor Martínez → Martinez 先生 (xiānsheng)
señora Martínez → Martinez 太太 (tàitai)
profesora Hsu → 徐老师 (Xú lǎoshī, Hsu es 徐 xú, el apellido de Michelle)

POR QUÉ ES TAN COMÚN (Michelle): en chino hay pocos apellidos y se repiten muchísimo (陈 Chen y 王 Wang son los más comunes), mientras que los nombres casi nunca se repiten. Entonces a la gente se la llama por apellido + título o profesión: 王老师 (Wáng lǎoshī), 陈先生 (Chén xiānsheng), 李工程师 (Lǐ gōngchéngshī). Llamar a alguien solo por el nombre es de mucha confianza, y entre amigos en China se usan apodos (como 猴子 hóuzi «mono», el amigo del marido de Michelle).

PRONUNCIACIÓN: Martinez xiānsheng.`,
en:`WHAT IT IS: "Mr. Martinez". Michelle's example for where the title goes.

THE RULE: in Chinese the title goes AFTER the surname, the opposite of English.
Mr. Martinez → Martinez 先生 (xiānsheng)
Mrs. Martinez → Martinez 太太 (tàitai)
Teacher Hsu → 徐老师 (Xú lǎoshī, Hsu is 徐 xú, Michelle's surname)

WHY IT'S SO COMMON (Michelle): Chinese has few surnames and they repeat a lot (陈 Chen and 王 Wang are the most common), while given names almost never repeat. So people are called surname + title or profession: 王老师 (Wáng lǎoshī), 陈先生 (Chén xiānsheng), 李工程师 (Lǐ gōngchéngshī). Calling someone by their given name alone is very familiar, and friends in China use nicknames (like 猴子 hóuzi "monkey", a friend of Michelle's husband).

PRONUNCIATION: Martinez xiānsheng.`,
zh:`是什么："Martinez 先生"。称呼放在姓后面：Martinez 先生、Martinez 太太、徐老师。中文的姓很集中（陈、王），名字很少重复，所以常用"姓 + 称呼 / 职业"；熟朋友之间常用外号。`}}
  ]
});
