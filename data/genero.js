/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"genero", glyph:"公",
  name:{"es": "Género y animales", "en": "Gender & animals", "zh": "性别与动物"},
  cl:"c3",
  cards:[
  {id:"gen-01",s:"男 + 名词",t:"男 + 名詞",py:"nán + míngcí",es:"masculino para personas",en:"male (people)",say:"男老师",
   x:{
es:`LA REGLA (clase 3): el chino no tiene género gramatical. No hay «el profesor / la profesora», «alumno / alumna»: 老师 y 学生 sirven para los dos. Michelle: «en chino no tenemos género», y en general a la gente no le interesa marcarlo.

CUANDO SÍ QUERÉS MARCARLO (por ejemplo, para contrastar), se pone una palabra DELANTE del sustantivo. Y hay dos pares distintos según sea persona o animal:
PERSONAS → 男 (masculino) / 女 (femenino): 男老师, 女老师, 男学生, 女学生.
ANIMALES → 公 (macho) / 母 (hembra): 公狗, 母狗, 公猫, 母猫.

ERROR TÍPICO (lo cometiste en clase): usar 母 para personas o ponerlo detrás. 学生母 ✗ → 女学生 ✓.

POR QUÉ DOS PARES: 男 y 女 son «hombre» y «mujer», solo tienen sentido para personas. 公 y 母 vienen de «público» y «madre», y se especializaron para animales.

名词 (sustantivo) = 名 nombre + 词 palabra.`,
en:`THE RULE (class 3): Chinese has no grammatical gender. There's no masculine/feminine form of "teacher" or "student": 老师 and 学生 cover both. Michelle: "in Chinese we don't have gender", and people generally don't bother marking it.

WHEN YOU DO WANT TO MARK IT (for instance, to contrast), you put a word IN FRONT of the noun. There are two different pairs depending on whether it's a person or an animal:
PEOPLE → 男 (male) / 女 (female): 男老师, 女老师, 男学生, 女学生.
ANIMALS → 公 (male) / 母 (female): 公狗, 母狗, 公猫, 母猫.

TYPICAL MISTAKE (you made it in class): using 母 for people, or putting it after. 学生母 ✗ → 女学生 ✓.

WHY TWO PAIRS: 男 and 女 are "man" and "woman"; they only make sense for people. 公 and 母 come from "public" and "mother", and became specialised for animals.

名词 (noun) = 名 name + 词 word.`,
zh:`规则（第三课）：中文没有语法性别，老师、学生 男女通用。需要强调时在名词前加词：人用 男 / 女（男老师、女学生），动物用 公 / 母（公狗、母猫）。常见错误："学生母"✗ → 女学生 ✓。`}},
  {id:"gen-02",s:"男",py:"nán",es:"hombre, masculino",en:"man, male",
   x:{
es:`QUÉ ES: «hombre». Delante de un sustantivo de persona marca que es varón: 男老师 profesor (hombre), 男学生 alumno (varón). También en 男人 (hombre) y 男朋友 (novio).

EL CARÁCTER, uno de los pocos que se lee entero por sus partes:
田 arriba: un campo de arroz visto desde arriba. El cuadrado es el borde y la cruz son los canales que lo dividen en cuatro parcelas.
力 abajo: fuerza. El dibujo de un arado, o de un brazo con el músculo tenso.
«El que pone la fuerza en el campo»: así se definía al hombre en la sociedad agrícola antigua. Michelle lo describió como «campo y hacha».

SOLO PARA PERSONAS: para un animal macho no se usa 男 sino 公 (公狗).

PRONUNCIACIÓN: nán, segundo tono (sube).`,
en:`WHAT IT IS: "man". In front of a noun for a person it marks male: 男老师 male teacher, 男学生 male student. Also in 男人 (man) and 男朋友 (boyfriend).

THE CHARACTER, one of the few you can read entirely from its parts:
田 on top: a rice field seen from above. The square is the edge and the cross is the channels dividing it into four plots.
力 below: strength. The drawing of a plough, or an arm with the muscle tensed.
"The one who puts strength into the field": how a man was defined in ancient farming society. Michelle described it as "field and axe".

ONLY FOR PEOPLE: for a male animal you use 公, not 男 (公狗).

PRONUNCIATION: nán, 2nd tone (rising).`,
zh:`是什么："男"，放在人的名词前表示男性：男老师、男学生；也在 男人、男朋友 里。
字形：田（从上面看的稻田）+ 力（犁或用力的手臂），在田里出力的人。
只用于人，雄性动物用 公。`}},
  {id:"gen-03",s:"女",py:"nǚ",es:"mujer, femenino",en:"woman, female",
   x:{
es:`QUÉ ES: «mujer». Delante de un sustantivo de persona marca que es mujer: 女老师 profesora, 女学生 alumna. También en 女人 (mujer), 女儿 (hija) y 女朋友 (novia).

EL CARÁCTER: una mujer arrodillada de perfil, con los brazos cruzados adelante (la postura formal antigua). Michelle: «una mujer sentada con las piernas cruzadas».

EL RADICAL MÁS ÚTIL DE LA FAMILIA: si un carácter lleva 女, casi seguro tiene que ver con mujeres o parentesco:
妈 mamá · 姐 hermana mayor · 妹 hermana menor · 奶 leche/abuela · 她 ella · 好 bueno (mujer + niño) · 安 paz (mujer bajo techo).

SOLO PARA PERSONAS: para un animal hembra se usa 母 (母狗).

PRONUNCIACIÓN: nǚ, tercer tono. La ü es la u francesa: labios redondos como para u, lengua como para i. Nǚ (mujer) ≠ nǔ (esforzarse).`,
en:`WHAT IT IS: "woman". In front of a noun for a person it marks female: 女老师 female teacher, 女学生 female student. Also in 女人 (woman), 女儿 (daughter) and 女朋友 (girlfriend).

THE CHARACTER: a woman kneeling in profile with her arms crossed in front (the ancient formal posture). Michelle: "a woman sitting with crossed legs".

THE MOST USEFUL RADICAL FOR FAMILY WORDS: if a character contains 女, it almost certainly relates to women or kinship:
妈 mom · 姐 older sister · 妹 younger sister · 奶 milk/grandma · 她 she · 好 good (woman + child) · 安 peace (woman under a roof).

ONLY FOR PEOPLE: for a female animal you use 母 (母狗).

PRONUNCIATION: nǚ, 3rd tone. ü is the French u: lips rounded as for u, tongue as for i. nǚ (woman) ≠ nǔ (to strive).`,
zh:`是什么："女"，放在人的名词前表示女性：女老师、女学生；也在 女人、女儿、女朋友 里。
字形：侧面跪坐、双手交叉的女子。有 女 的字多和女性、亲属有关：妈、姐、妹、奶、她、好、安。
只用于人，雌性动物用 母。发音：nǚ，第三声，ü 要圆唇。`}},
  {id:"gen-04",s:"公",py:"gōng",es:"macho (animales)",en:"male (animals)",
   x:{
es:`QUÉ ES: delante de un animal, «macho»: 公狗 perro macho, 公猫 gato macho, 公马 caballo (padrillo). NO se usa con personas (para eso está 男).

EL CARÁCTER:
八 arriba: dos trazos que se separan, «dividir, repartir».
厶 abajo: «lo privado», el dibujo de un brazo que se cierra sobre sí mismo (guardar para uno).
Repartir lo privado = hacerlo público. El sentido original de 公 es «público, común», y sigue vivo en 公司 (empresa), 公园 (parque) y 公共 (público).
De «público, oficial» pasó a «señor, macho»: 外公 (abuelo materno) y 老公 (marido) también lo llevan.

SU PAREJA: 母 hembra.

PRONUNCIACIÓN: gōng, primer tono, alto y plano. g sin aire.`,
en:`WHAT IT IS: in front of an animal, "male": 公狗 male dog, 公猫 tomcat, 公马 stallion. NOT used for people (that's 男).

THE CHARACTER:
八 on top: two strokes moving apart, "to divide, to share out".
厶 below: "private", the drawing of an arm closing in on itself (keeping for yourself).
Sharing out the private = making it public. The original sense of 公 is "public, common", still alive in 公司 (company), 公园 (park) and 公共 (public).
From "public, official" it came to mean "gentleman, male": 外公 (maternal grandfather) and 老公 (husband) also carry it.

ITS PAIR: 母 female.

PRONUNCIATION: gōng, 1st tone, high and flat. Unaspirated g.`,
zh:`是什么：用在动物前表示雄性：公狗、公猫、公马；不用于人。
字形：八（分开）+ 厶（私），把私的分出去就是"公"，本义是公共：公司、公园。引申为男性长辈、雄性：外公、老公。对应：母。`}},
  {id:"gen-05",s:"母",py:"mǔ",es:"hembra (animales); madre",en:"female (animals); mother",
   x:{
es:`QUÉ ES: delante de un animal, «hembra»: 母狗 perra, 母猫 gata, 母马 yegua. También significa «madre»: 母亲 (madre, formal), 伯母 (tía). Con personas NO marca «femenino» (para eso está 女).

EL CARÁCTER: es 女 (la mujer arrodillada) con dos puntos agregados, que representan los pechos: la mujer que amamanta, la madre. Michelle lo describió como «un nido con dos huevos».

SU PAREJA: 公 macho.

DATO DE CLASE: 母老虎 (tigresa) se usa en broma para una esposa que es «terrible».

PRONUNCIACIÓN: mǔ, tercer tono (baja y sube).`,
en:`WHAT IT IS: in front of an animal, "female": 母狗 female dog, 母猫 female cat, 母马 mare. It also means "mother": 母亲 (mother, formal), 伯母 (aunt). With people it does NOT mark "female" (that's 女).

THE CHARACTER: it's 女 (the kneeling woman) with two dots added, representing the breasts: the woman who nurses, the mother. Michelle described it as "a nest with two eggs".

ITS PAIR: 公 male.

FROM CLASS: 母老虎 (tigress) is jokingly said of a "fierce" wife.

PRONUNCIATION: mǔ, 3rd tone (dips and rises).`,
zh:`是什么：用在动物前表示雌性：母狗、母猫、母马；也表示"母亲"：母亲、伯母。字形：女 加两点（乳房），哺乳的母亲。对应：公。`}},
  {id:"gen-06",s:"男老师",t:"男老師",py:"nán lǎoshī",es:"profesor (hombre)",en:"male teacher",
   x:{
es:`QUÉ ES: «profesor» marcando que es hombre. Salió en la oración de clase: 我有一个男老师和两个女老师.

CUÁNDO SE USA: 老师 solo ya significa «profesor/a». Se agrega 男 solo si importa el género, como en esa oración, donde se contrasta uno contra dos. Si no, se dice simplemente 老师.

LAS PIEZAS:
男 hombre: 田 (campo) + 力 (fuerza).
老 respeto: un anciano con pelo largo y bastón (acá no es «viejo», es respeto).
师 maestro, experto (el mismo de 工程师, ingeniero).

CON NÚMERO: 一个男老师 (número + clasificador + 男老师). El 男 va pegado al sustantivo, después del clasificador.

PRONUNCIACIÓN: nán lǎoshī.`,
en:`WHAT IT IS: "teacher", marking that he's a man. It came up in the class sentence: 我有一个男老师和两个女老师.

WHEN IT'S USED: 老师 alone already means "teacher". You only add 男 if gender matters, as in that sentence, which contrasts one with two. Otherwise just 老师.

THE PIECES:
男 man: 田 (field) + 力 (strength).
老 respect: an old man with long hair and a stick (here it's not "old", it's respect).
师 master, expert (as in 工程师, engineer).

WITH A NUMBER: 一个男老师 (number + measure word + 男老师). 男 sticks to the noun, after the measure word.

PRONUNCIATION: nán lǎoshī.`,
zh:`是什么："男老师"。老师 本身不分男女，需要对比时才加 男。有数字时：一个男老师（男 放在量词后、名词前）。`}},
  {id:"gen-07",s:"女老师",t:"女老師",py:"nǚ lǎoshī",es:"profesora",en:"female teacher",
   x:{
es:`QUÉ ES: «profesora». 我有一个男老师和两个女老师 = tengo un profesor y dos profesoras.

LA MISMA LÓGICA QUE 男老师: 女 delante del sustantivo, solo si hace falta marcarlo. Michelle es 老师; nadie diría 女老师 al hablar de ella, salvo para contrastar.

LAS PIEZAS:
女 mujer: la mujer arrodillada con los brazos cruzados.
老师 profesor: 老 (anciano con bastón: respeto) + 师 (maestro).

ORDEN CON NÚMEROS: 两个女老师 = dos + clasificador + mujer + profesor.

PRONUNCIACIÓN: nǚ lǎoshī. Cuidado: nǚ y lǎo son tercer tono seguidos, así que nǚ se dice casi como segundo tono (sube).`,
en:`WHAT IT IS: "female teacher". 我有一个男老师和两个女老师 = I have one male teacher and two female teachers.

SAME LOGIC AS 男老师: 女 in front of the noun, only when it needs marking. Michelle is a 老师; nobody would call her 女老师 except to contrast.

THE PIECES:
女 woman: the kneeling woman with crossed arms.
老师 teacher: 老 (old man with a stick: respect) + 师 (master).

ORDER WITH NUMBERS: 两个女老师 = two + measure word + woman + teacher.

PRONUNCIATION: nǚ lǎoshī. nǚ and lǎo are two 3rd tones in a row, so nǚ is said almost like a 2nd tone (rising).`,
zh:`是什么："女老师"。同样只在需要对比时加 女：两个女老师。发音：nǚ lǎoshī，两个第三声相连，第一个变调。`}},
  {id:"gen-08",s:"男学生",t:"男學生",py:"nán xuéshēng",es:"alumno (varón)",en:"male student",
   x:{
es:`QUÉ ES: «alumno» marcando que es varón. En la oración de la escuela: 二十个男学生 = 20 alumnos (varones).

LAS PIEZAS:
男: 田 (campo) + 力 (fuerza).
学生 alumno: 学 (dos manos de un adulto enseñándole a un niño 子 bajo un techo) + 生 (nacer, crecer: un brote saliendo de la tierra). «El que crece estudiando».

EN ESPAÑOL «alumnos» puede incluir a todos; en chino 学生 ya es neutro. 男学生 solo se usa cuando querés decir que son varones, como al contrastar 200 alumnas y 20 alumnos.

PRONUNCIACIÓN: nán xuéshēng. Los dos primeros suben (nán, xué); shēng es plano.`,
en:`WHAT IT IS: "student", marking that he's male. In the school sentence: 二十个男学生 = 20 male students.

THE PIECES:
男: 田 (field) + 力 (strength).
学生 student: 学 (an adult's two hands teaching a child 子 under a roof) + 生 (to be born, grow: a sprout from the soil). "The one who grows by studying".

学生 is already neutral; 男学生 is only used when you want to say they're male, as when contrasting 200 female and 20 male students.

PRONUNCIATION: nán xuéshēng. The first two rise (nán, xué); shēng is flat.`,
zh:`是什么："男学生"。学生 本来不分男女，对比时才说：两百个女学生和二十个男学生。学生：学（大人教孩子）+ 生（成长）。`}},
  {id:"gen-09",s:"女学生",t:"女學生",py:"nǚ xuéshēng",es:"alumna",en:"female student",
   x:{
es:`QUÉ ES: «alumna». En la oración de la escuela: 两百个女学生 = 200 alumnas.

EL ERROR DE CLASE: dijiste «学生母» (o «母学生») y Michelle te corrigió con dos cosas:
1. 母 es para ANIMALES; para personas es 女.
2. La marca de género va ADELANTE del sustantivo, nunca atrás.
Entonces: 学生母 ✗ · 母学生 ✗ · 女学生 ✓.

LAS PIEZAS:
女: la mujer arrodillada.
学生: 学 (enseñar a un niño bajo techo) + 生 (crecer).

PRONUNCIACIÓN: nǚ xuéshēng. La ü de nǚ con los labios redondos.`,
en:`WHAT IT IS: "female student". In the school sentence: 两百个女学生 = 200 female students.

THE MISTAKE FROM CLASS: you said "学生母" (or "母学生") and Michelle corrected two things:
1. 母 is for ANIMALS; for people it's 女.
2. The gender marker goes IN FRONT of the noun, never after.
So: 学生母 ✗ · 母学生 ✗ · 女学生 ✓.

THE PIECES:
女: the kneeling woman.
学生: 学 (teaching a child under a roof) + 生 (to grow).

PRONUNCIATION: nǚ xuéshēng. Round your lips for the ü in nǚ.`,
zh:`是什么："女学生"。课上的错误："学生母"：母 用于动物，人用 女，而且要放在名词前。学生母 ✗、母学生 ✗、女学生 ✓。`}},
  {id:"gen-10",s:"公狗",py:"gōng gǒu",es:"perro (macho)",en:"male dog",
   x:{
es:`QUÉ ES: «perro macho». La pareja es 母狗 (perra).

CÓMO SE ARMA: 公 (macho) delante del animal. Para animales se usa 公 / 母, nunca 男 / 女.

LAS PIEZAS:
公 macho: 八 (repartir) + 厶 (lo privado) = «lo público»; con animales, «macho».
狗 perro: 犭 (犬 perro aplastado: un perro de perfil con la cola enroscada) + 句 (sonido).

CON CLASIFICADOR: 一只公狗 un perro macho (el perro también acepta 条: 一条公狗).

EN ESPAÑOL cambiamos la palabra (perro / perra); en chino se agrega la marca delante y la palabra 狗 no cambia.

PRONUNCIACIÓN: gōng gǒu. Primer tono y después tercer tono.`,
en:`WHAT IT IS: "male dog". The pair is 母狗 (female dog).

HOW IT'S BUILT: 公 (male) in front of the animal. For animals you use 公 / 母, never 男 / 女.

THE PIECES:
公 male: 八 (share out) + 厶 (private) = "public"; with animals, "male".
狗 dog: 犭 (犬 dog, squeezed: a dog in profile with a curled tail) + 句 (sound).

WITH A MEASURE WORD: 一只公狗 a male dog (dogs also take 条: 一条公狗).

The word 狗 itself never changes; you add the marker in front.

PRONUNCIATION: gōng gǒu. 1st tone then 3rd.`,
zh:`是什么："公狗"，对应 母狗。动物用 公 / 母，不用 男 / 女。一只公狗（也可以说 一条公狗）。`}},
  {id:"gen-11",s:"母狗",py:"mǔ gǒu",es:"perra",en:"female dog",
   x:{
es:`QUÉ ES: «perra». Michelle lo usó de ejemplo en clase.

CÓMO SE ARMA: 母 (hembra) + 狗 (perro). La palabra 狗 no cambia.

LAS PIEZAS:
母: la mujer 女 con dos puntos (los pechos): la que amamanta.
狗: 犭 (perro de perfil) + 句 (sonido).

PAREJA: 公狗 perro macho.

OJO CON EL USO: como en español, llamar 母狗 a una persona es un insulto fuerte. Con animales es neutro.

PRONUNCIACIÓN: mǔ gǒu. Dos terceros tonos seguidos: el primero se dice casi como segundo tono (mú gǒu).`,
en:`WHAT IT IS: "female dog". Michelle used it as an example in class.

HOW IT'S BUILT: 母 (female) + 狗 (dog). 狗 doesn't change.

THE PIECES:
母: the woman 女 with two dots (the breasts): the one who nurses.
狗: 犭 (dog in profile) + 句 (sound).

PAIR: 公狗 male dog.

CAREFUL: as in English, calling a person 母狗 is a strong insult. For animals it's neutral.

PRONUNCIATION: mǔ gǒu. Two 3rd tones in a row: the first is said almost like a 2nd tone (mú gǒu).`,
zh:`是什么："母狗"。母 + 狗。对应：公狗。用来骂人是很重的脏话。发音：两个第三声，第一个变调。`}},
  {id:"gen-12",s:"公猫",t:"公貓",py:"gōng māo",es:"gato (macho)",en:"tomcat",
   x:{
es:`QUÉ ES: «gato macho», como Oliver. Michelle: 公猫 es gato, 母猫 es gata.

LAS PIEZAS:
公 macho: 八 + 厶 (repartir lo privado = público).
猫 gato: 犭 (animal de cuatro patas) + 苗 miáo (un brote en el campo: solo por el sonido, que es el maullido). En tradicional 貓 lleva 豸 (animal de lomo largo).

CON CLASIFICADOR: 一只公猫. El gato solo acepta 只, nunca 条.

PRONUNCIACIÓN: gōng māo. Dos primeros tonos: altos y planos, como la bocina.`,
en:`WHAT IT IS: "tomcat", like Oliver. Michelle: 公猫 is a male cat, 母猫 a female cat.

THE PIECES:
公 male: 八 + 厶 (sharing the private = public).
猫 cat: 犭 (four-legged animal) + 苗 miáo (a sprout in a field: only for the sound, which is the miaow). Traditional 貓 has 豸 (long-backed animal).

WITH A MEASURE WORD: 一只公猫. Cats only take 只, never 条.

PRONUNCIATION: gōng māo. Two 1st tones: high and flat, like the car horn.`,
zh:`是什么："公猫"，像 Oliver。一只公猫，猫只能用 只。发音：两个第一声。`}},
  {id:"gen-13",s:"母猫",t:"母貓",py:"mǔ māo",es:"gata",en:"female cat",
   x:{
es:`QUÉ ES: «gata». Pareja de 公猫.

LAS PIEZAS:
母 hembra: la mujer 女 con los dos puntos del pecho.
猫: 犭 + 苗 (sonido miáo).

EN ESPAÑOL: gato / gata (cambia la terminación). EN CHINO: 公猫 / 母猫 (se agrega la marca adelante, 猫 queda igual). Y si no importa el sexo, simplemente 猫.

PRONUNCIACIÓN: mǔ māo. Tercer tono y después primero.`,
en:`WHAT IT IS: "female cat". The pair of 公猫.

THE PIECES:
母 female: the woman 女 with the two breast dots.
猫: 犭 + 苗 (sound miáo).

Chinese adds the marker in front: 公猫 / 母猫, and 猫 stays the same. If sex doesn't matter, just 猫.

PRONUNCIATION: mǔ māo. 3rd tone then 1st.`,
zh:`是什么："母猫"，对应 公猫。不需要区分时就说 猫。`}},
  {id:"gen-14",s:"马",t:"馬",py:"mǎ",es:"caballo",en:"horse",
   x:{
es:`QUÉ ES: «caballo». Michelle lo usó en la clase 3 para practicar 公 / 母: 公马 (padrillo) y 母马 (yegua).

EL CARÁCTER: un caballo de perfil. En tradicional 馬 se ve completo: arriba la crin al viento, en el medio el cuerpo, y abajo cuatro puntos que son las patas (o la cola). El simplificado 马 lo resumió en tres trazos.

EL CABALLO QUE APARECE EN TODOS LADOS: 马 da el SONIDO a otros caracteres:
妈 mā mamá (女 + 马) · 吗 ma partícula (口 + 马) · 骂 mà retar (罒 + 马).
El caballo no tiene nada que ver con el significado: solo dice «esto suena ma».

LA FRASE DE LA SOBRINA DE MICHELLE: 妈妈骂马 māma mà mǎ «mamá reta al caballo». Solo cambian los tonos.

PRONUNCIACIÓN: mǎ, tercer tono: baja y sube. Si lo decís plano (mā) es «mamá».`,
en:`WHAT IT IS: "horse". Michelle used it in class 3 to practise 公 / 母: 公马 (stallion) and 母马 (mare).

THE CHARACTER: a horse in profile. Traditional 馬 shows it all: the mane blowing on top, the body in the middle, and four dots below for the legs (or tail). Simplified 马 squeezed it into three strokes.

THE HORSE THAT'S EVERYWHERE: 马 gives its SOUND to other characters:
妈 mā mom (女 + 马) · 吗 ma particle (口 + 马) · 骂 mà scold (罒 + 马).
The horse has nothing to do with the meaning: it only says "this sounds like ma".

MICHELLE'S NIECE'S SENTENCE: 妈妈骂马 māma mà mǎ "mom scolds the horse". Only the tones change.

PRONUNCIATION: mǎ, 3rd tone: dips and rises. Said flat (mā) it's "mom".`,
zh:`是什么："马"。公马、母马。字形：侧面的马，繁体 馬 有鬃毛、身体和四点（腿）。马 常作表音部件：妈、吗、骂。妈妈骂马 只是声调不同。`}},
  {id:"gen-15",s:"公马",t:"公馬",py:"gōng mǎ",es:"caballo (macho)",en:"stallion",
   x:{
es:`QUÉ ES: «caballo macho» (padrillo). Michelle te lo preguntó en clase: «caballo macho, ¿cómo se dice?» → 公马.

CÓMO SE ARMA: 公 (macho) + 马 (caballo), igual que 公狗 y 公猫.

LAS PIEZAS:
公: 八 (repartir) + 厶 (lo privado).
马: el caballo de perfil (tradicional 馬, con las cuatro patas).

PRONUNCIACIÓN: gōng mǎ. Alto y plano, después baja y sube.`,
en:`WHAT IT IS: "male horse" (stallion). Michelle asked you in class: "male horse, how do you say it?" → 公马.

HOW IT'S BUILT: 公 (male) + 马 (horse), just like 公狗 and 公猫.

THE PIECES:
公: 八 (share out) + 厶 (private).
马: the horse in profile (traditional 馬, with its four legs).

PRONUNCIATION: gōng mǎ. High and flat, then dip and rise.`,
zh:`是什么："公马"。公 + 马，和 公狗、公猫 一样。`}},
  {id:"gen-16",s:"母马",t:"母馬",py:"mǔ mǎ",es:"yegua",en:"mare",
   x:{
es:`QUÉ ES: «yegua». En español es otra palabra; en chino es 母 + 马, la misma lógica de siempre.

LAS PIEZAS:
母 hembra: la mujer 女 con los dos puntos del pecho.
马 caballo.

PRONUNCIACIÓN: mǔ mǎ. Dos terceros tonos seguidos: el primero sube (mú mǎ). Buen ejercicio para no mezclar con 妈妈 (māma).`,
en:`WHAT IT IS: "mare". In Chinese it's 母 + 马, the same logic as always.

THE PIECES:
母 female: the woman 女 with the two breast dots.
马 horse.

PRONUNCIATION: mǔ mǎ. Two 3rd tones in a row: the first rises (mú mǎ). A good drill for not mixing it up with 妈妈 (māma).`,
zh:`是什么："母马"。母 + 马。发音：两个第三声，第一个变调；别和 妈妈 混淆。`}},
  {id:"gen-17",s:"老鼠",py:"lǎoshǔ",es:"ratón / rata",en:"mouse / rat",
   x:{
es:`QUÉ ES: «ratón» o «rata» (el chino no los distingue).

TU PREGUNTA DE CLASE: «¿por qué el ratón tiene el mismo carácter que profesor (老师)?». La respuesta: acá 老 NO significa «viejo» ni «respeto». Es un prefijo vacío que llevan algunos nombres de animales, sin ningún significado: 老鼠 (ratón), 老虎 (tigre). No tiene relación con 老师.
Michelle te dijo «no empieces a descifrar», y tenía razón en este caso: es una costumbre del idioma, no una lógica.

EL CARÁCTER 鼠: un pictograma de la rata. Arriba 臼 son los dientes (los incisivos que roen); abajo, las patitas y la cola larga que se curva.

CON GÉNERO: 公老鼠 ratón macho · 母老鼠 ratona.

PRONUNCIACIÓN: lǎoshǔ. Dos terceros tonos: el primero sube (láoshǔ). sh con la lengua atrás.`,
en:`WHAT IT IS: "mouse" or "rat" (Chinese doesn't distinguish them).

YOUR QUESTION FROM CLASS: "why does the mouse have the same character as teacher (老师)?". The answer: here 老 does NOT mean "old" or "respect". It's an empty prefix some animal names carry, with no meaning at all: 老鼠 (mouse), 老虎 (tiger). It's unrelated to 老师.
Michelle told you "don't start decoding", and she was right in this case: it's a habit of the language, not logic.

THE CHARACTER 鼠: a pictogram of the rat. On top 臼 is the teeth (the gnawing incisors); below, the little legs and the long curving tail.

WITH GENDER: 公老鼠 male mouse · 母老鼠 female mouse.

PRONUNCIATION: lǎoshǔ. Two 3rd tones: the first rises (láoshǔ). sh with the tongue back.`,
zh:`是什么："老鼠"。你课上的问题：为什么和 老师 一样有 老？这里的 老 是动物名的词头，没有意思（老鼠、老虎），和 老师 无关。
鼠：象形字，上面 臼 是门牙，下面是脚和长尾巴。公老鼠、母老鼠。`}},
  {id:"gen-18",s:"老虎",py:"lǎohǔ",es:"tigre",en:"tiger",
   x:{
es:`QUÉ ES: «tigre». Michelle lo dio junto con 老鼠.

EL 老: el mismo prefijo vacío de 老鼠. No es «viejo»: un tigre joven también es 老虎. En el habla simplemente se dice así.

EL CARÁCTER 虎: un tigre de perfil. Arriba 虍 es la cabeza con las rayas (este componente aparece en caracteres relacionados con el tigre); abajo, el cuerpo y las patas. Algunos ven la boca abierta con los colmillos.

CON GÉNERO: 公老虎 tigre macho · 母老虎 tigresa (y en broma, esposa temible).

PRONUNCIACIÓN: lǎohǔ. Dos terceros tonos: láohǔ. La h china suena como una jota suave.`,
en:`WHAT IT IS: "tiger". Michelle gave it together with 老鼠.

THE 老: the same empty prefix as in 老鼠. It isn't "old": a young tiger is also 老虎. That's just what it's called.

THE CHARACTER 虎: a tiger in profile. On top 虍 is the striped head (this component appears in tiger-related characters); below, the body and legs. Some see the open mouth with fangs.

WITH GENDER: 公老虎 male tiger · 母老虎 tigress (and, as a joke, a formidable wife).

PRONUNCIATION: lǎohǔ. Two 3rd tones: láohǔ. The Chinese h is a soft throaty sound.`,
zh:`是什么："老虎"。老 是词头，小老虎也叫 老虎。虎：上面 虍 是有花纹的头，下面是身体和腿。公老虎、母老虎。`}},
  {id:"gen-19",s:"母老虎",py:"mǔ lǎohǔ",es:"tigresa; (broma) esposa terrible",en:"tigress; (joke) fierce wife",
   x:{
es:`QUÉ ES: literalmente «tigresa» (母 hembra + 老虎 tigre).

EL USO EN BROMA que contó Michelle: cuando alguien dice que su esposa es una 母老虎, quiere decir que es brava, terrible, que manda en la casa. Es como decir «es una fiera».

POR QUÉ ES ÚTIL: muestra cómo las palabras del vocabulario básico se combinan para hacer expresiones coloquiales. Michelle lo comparó con el lunfardo.

LAS PIEZAS:
母: la mujer con los dos puntos (hembra).
老: prefijo vacío de animal.
虎: el tigre de perfil, con la cabeza rayada 虍.

PRONUNCIACIÓN: mǔ lǎohǔ. Tres terceros tonos seguidos: al hablar rápido suena mú láo hǔ.`,
en:`WHAT IT IS: literally "tigress" (母 female + 老虎 tiger).

THE JOKING USE Michelle mentioned: when someone says his wife is a 母老虎, he means she's fierce, formidable, the boss at home. Like calling someone "a dragon".

WHY IT'S USEFUL: it shows how basic vocabulary combines into colloquial expressions. Michelle compared it to slang.

THE PIECES:
母: the woman with two dots (female).
老: empty animal prefix.
虎: the tiger in profile, with the striped head 虍.

PRONUNCIATION: mǔ lǎohǔ. Three 3rd tones in a row: spoken quickly it's mú láo hǔ.`,
zh:`是什么："母老虎"，字面是雌老虎，开玩笑时指很凶、在家说了算的太太。发音：三个第三声连读。`}},
  {id:"gen-20",s:"蛇",py:"shé",es:"víbora / serpiente",en:"snake",
   x:{
es:`QUÉ ES: «serpiente, víbora». El ejemplo que usó Michelle para el clasificador 条: 一条蛇.

EL CARÁCTER:
虫 a la izquierda: el dibujo de un bicho o reptil con la cabeza levantada. Marca insectos, gusanos y reptiles.
它 a la derecha: originalmente TAMBIÉN el dibujo de una cobra con la cabeza erguida.
La serpiente aparece dos veces: una como categoría (虫) y otra como dibujo (它).
Con el tiempo 它 se empezó a usar como pronombre «ello» (it), y para no confundir se le agregó 虫 al carácter de serpiente.

CLASIFICADOR: 条, porque es larga y fina. Nunca 只.

PRONUNCIACIÓN: shé, segundo tono. sh con la lengua atrás.`,
en:`WHAT IT IS: "snake". Michelle's example for the measure word 条: 一条蛇.

THE CHARACTER:
虫 on the left: the drawing of a bug or reptile with its head raised. It marks insects, worms and reptiles.
它 on the right: originally ALSO a drawing of a cobra with its head up.
The snake appears twice: once as a category (虫) and once as a picture (它).
Over time 它 came to be used as the pronoun "it", so 虫 was added to the snake character to avoid confusion.

MEASURE WORD: 条, because it's long and thin. Never 只.

PRONUNCIATION: shé, 2nd tone. sh with the tongue back.`,
zh:`是什么："蛇"，一条蛇。字形：虫（抬头的虫或爬行动物）+ 它（本来也是蛇的样子），蛇出现了两次。后来 它 当代词用，就加了 虫 旁。`}},
  {id:"gen-21",s:"鱼",t:"魚",py:"yú",es:"pez / pescado",en:"fish",
   x:{
es:`QUÉ ES: «pez» y también «pescado» (el chino no distingue el animal vivo de la comida). En la oración de Oliver: 这只猫今天早上吃一条鱼.

EL CARÁCTER, pictograma completo:
arriba ⺈: la cabeza,
en el medio 田: el cuerpo con las escamas (no es el campo, solo se parece),
abajo 一: la cola.
En tradicional 魚 la cola son cuatro puntos, igual que las patas de 馬 (caballo).

CLASIFICADOR: 条 (los peces son alargados, explicó Michelle): 一条鱼.

DATO CULTURAL: 鱼 yú suena como 余 yú «sobrante, abundancia». Por eso en Año Nuevo se come pescado: para que sobre todo el año.

PRONUNCIACIÓN: yú, segundo tono. Es ü (la u francesa), aunque después de y se escribe sin puntos.`,
en:`WHAT IT IS: "fish", both the animal and the food. In Oliver's sentence: 这只猫今天早上吃一条鱼.

THE CHARACTER, a complete pictogram:
on top ⺈: the head,
in the middle 田: the scaly body (not the field, it just looks like it),
at the bottom 一: the tail.
In traditional 魚 the tail is four dots, like the legs of 馬 (horse).

MEASURE WORD: 条 (fish are elongated, Michelle explained): 一条鱼.

CULTURAL NOTE: 鱼 yú sounds like 余 yú "surplus, abundance". That's why fish is eaten at New Year: so there's plenty all year.

PRONUNCIATION: yú, 2nd tone. It's ü (the French u), though after y it's written without dots.`,
zh:`是什么："鱼"。象形字：头、有鳞的身体、尾巴；繁体 魚 尾巴是四点。量词：一条鱼。鱼 和 余 同音，过年吃鱼表示年年有余。`}},
  {id:"gen-22",s:"老公",py:"lǎogōng",es:"marido (coloquial)",en:"husband (informal)",
   x:{
es:`QUÉ ES: «marido», en el habla de todos los días. Hoy es LA palabra más común.

LITERALMENTE: 老 (viejo) + 公 (macho) = «viejo macho». Pero el 老 acá es cariño, como cuando en el Río de la Plata alguien le dice «viejo» a su pareja o a un amigo. Michelle: «viejo es querido».

POR QUÉ SE USA MÁS QUE 先生: Michelle explicó que 先生 y 太太 son las palabras de los libros de texto, y hoy suenan formales. Por la influencia de las películas y la música de China continental, casi todo el mundo que habla mandarín (también en Taiwán) dice 老公 y 老婆. Ella lo comparó con el lunfardo.

LAS PIEZAS:
老: un anciano encorvado de pelo largo con un bastón.
公: 八 (repartir) + 厶 (privado); «público», y de ahí «señor, macho».

PAREJA: 老婆 esposa.

PRONUNCIACIÓN: lǎogōng. Tercer tono y después primero.`,
en:`WHAT IT IS: "husband", in everyday speech. Today it's THE most common word.

LITERALLY: 老 (old) + 公 (male) = "old man". But 老 here is affection, like calling your partner "old man" or "my old lady" fondly. Michelle: "old means dear".

WHY IT'S USED MORE THAN 先生: Michelle explained that 先生 and 太太 are textbook words and sound formal today. Because of mainland Chinese films and music, almost every Mandarin speaker (Taiwan included) says 老公 and 老婆. She compared it to slang.

THE PIECES:
老: a stooped old man with long hair and a stick.
公: 八 (share out) + 厶 (private); "public", then "gentleman, male".

PAIR: 老婆 wife.

PRONUNCIATION: lǎogōng. 3rd tone then 1st.`,
zh:`是什么："老公"，日常最常用的说法。老 在这里是亲昵。Michelle 老师说：先生、太太 是课本用语，现在听起来正式；受大陆影视影响，台湾也多说 老公、老婆。对应：老婆。`}},
  {id:"gen-23",s:"老婆",py:"lǎopo",es:"esposa (coloquial)",en:"wife (informal)",
   x:{
es:`QUÉ ES: «esposa», en el habla de todos los días. Pareja de 老公.

LITERALMENTE: 老 (vieja) + 婆 (anciana, señora mayor) = «vieja». El 老 es cariño: «mi vieja», como en el Río de la Plata. Michelle: «querida vieja».

EL CARÁCTER 婆:
女 abajo: la mujer arrodillada.
波 arriba: «ola» (氵 agua + 皮 piel, la superficie del agua), acá solo por el sonido.
婆 = mujer mayor, abuela. También está en 外婆 (abuela materna).

REGISTRO: 老婆 es lo normal hoy; 太太 suena más formal y se usa sobre todo como título (Martinez 太太 = la señora Martínez).

PRONUNCIACIÓN: lǎopo. La segunda sílaba en tono neutro. p con aire.`,
en:`WHAT IT IS: "wife", in everyday speech. The pair of 老公.

LITERALLY: 老 (old) + 婆 (old woman, elder lady) = "old lady". 老 is affection: "my old lady". Michelle: "dear old lady".

THE CHARACTER 婆:
女 below: the kneeling woman.
波 on top: "wave" (氵 water + 皮 skin, the water's surface), here only for the sound.
婆 = older woman, grandmother. Also in 外婆 (maternal grandmother).

REGISTER: 老婆 is normal today; 太太 sounds more formal and is used mostly as a title (Martinez 太太 = Mrs. Martinez).

PRONUNCIATION: lǎopo. Second syllable neutral tone. Aspirated p.`,
zh:`是什么："老婆"，日常说法，对应 老公。婆：女 + 波（表音），年长的女性，也在 外婆 里。太太 比较正式，多作称呼。`}},
  {id:"gen-24",s:"先生",py:"xiānsheng",es:"señor; marido (formal)",en:"Mr.; husband (formal)",
   x:{
es:`QUÉ ES: dos usos.
1. «Señor», como título. Y va DESPUÉS del apellido: Martinez 先生 = el señor Martínez. Al revés que en español.
2. «Marido», en registro formal o de libro. En el día a día se dice 老公.

LITERALMENTE: 先 (primero) + 生 (nacer) = «el que nació primero», el mayor. De ahí «señor», alguien a quien se respeta. En Japón (sensei, mismo carácter) significa «maestro».

LOS CARACTERES:
先: 止 (la huella de un pie) arriba, avanzando sobre 儿 (dos piernas). Ir adelante: primero.
生: un brote que sale de la tierra (la línea de abajo es el suelo). Nacer, crecer, vivir.

POR QUÉ SE USA TANTO EL TÍTULO (Michelle): en China y Taiwán los apellidos se repiten muchísimo (Chen, Wang), así que la gente se llama por apellido + título: 王先生, 陈老师.

PRONUNCIACIÓN: xiānsheng, la segunda sílaba en tono neutro.`,
en:`WHAT IT IS: two uses.
1. "Mr.", as a title. And it goes AFTER the surname: Martinez 先生 = Mr. Martinez. The opposite of English.
2. "Husband", in formal or textbook register. Day to day people say 老公.

LITERALLY: 先 (first) + 生 (born) = "the one born first", the elder. Hence "sir", someone respected. In Japanese (sensei, same characters) it means "teacher".

THE CHARACTERS:
先: 止 (a footprint) on top, advancing over 儿 (two legs). Going ahead: first.
生: a sprout coming out of the soil (the bottom line is the ground). To be born, grow, live.

WHY THE TITLE IS SO COMMON (Michelle): in China and Taiwan surnames repeat a lot (Chen, Wang), so people are called surname + title: 王先生, 陈老师.

PRONUNCIATION: xiānsheng, second syllable neutral tone.`,
zh:`是什么：一、称呼"先生"，放在姓后面：Martinez 先生；二、正式的"丈夫"，口语说 老公。字面是"先出生的人"。先：止 在 儿 上，往前走；生：破土的芽。姓很常重复，所以常用"姓 + 称呼"。`}},
  {id:"gen-25",s:"太太",py:"tàitai",es:"señora; esposa (formal)",en:"Mrs.; wife (formal)",
   x:{
es:`QUÉ ES: dos usos, igual que 先生.
1. «Señora», como título, DESPUÉS del apellido: Martinez 太太 = la señora Martínez.
2. «Esposa», en registro formal. En el día a día, 老婆. En clase 2 se usó para la esposa de Philip: 他是 Philip 的太太.

EL CARÁCTER 太: es 大 (una persona de frente con los brazos y piernas abiertos: grande) con un punto extra abajo. «Más que grande»: demasiado, muy. 太好了 = ¡buenísimo!
Doblado, 太太 se volvió un título de respeto para una mujer casada, «la gran señora de la casa».

PRONUNCIACIÓN: tàitai, cuarto tono y después neutro. t con aire.`,
en:`WHAT IT IS: two uses, like 先生.
1. "Mrs.", as a title, AFTER the surname: Martinez 太太 = Mrs. Martinez.
2. "Wife", in formal register. Day to day, 老婆. In class 2 it was used for Philip's wife: 他是 Philip 的太太.

THE CHARACTER 太: it's 大 (a person seen from the front with arms and legs spread: big) with an extra dot below. "More than big": too, very. 太好了 = great!
Doubled, 太太 became a respectful title for a married woman, "the great lady of the house".

PRONUNCIATION: tàitai, 4th tone then neutral. Aspirated t.`,
zh:`是什么：一、称呼"太太"，放在姓后：Martinez 太太；二、正式的"妻子"，口语说 老婆。太：大 多一点，表示"很、太"（太好了）。`}},
  {id:"gen-26",s:"Martinez 先生",py:"Martinez xiānsheng",es:"el señor Martínez",en:"Mr. Martinez",say:"先生",
   x:{
es:`QUÉ ES: «el señor Martínez». El ejemplo que dio Michelle para mostrar dónde va el título.

LA REGLA: en chino el título va DESPUÉS del apellido, al revés que en español e inglés.
señor Martínez → Martinez 先生
señora Martínez → Martinez 太太
profesora Hsu → 徐老师 (Hsu es 徐, el apellido de Michelle)

POR QUÉ ES TAN COMÚN (Michelle): en chino hay pocos apellidos y se repiten muchísimo (陈 Chen y 王 Wang son los más comunes), mientras que los nombres casi nunca se repiten. Entonces a la gente se la llama por apellido + título o profesión: 王老师, 陈先生, 李工程师. Llamar a alguien solo por el nombre es de mucha confianza, y entre amigos en China se usan apodos (como 猴子 «mono», el amigo del marido de Michelle).

PRONUNCIACIÓN: Martinez xiānsheng.`,
en:`WHAT IT IS: "Mr. Martinez". Michelle's example for where the title goes.

THE RULE: in Chinese the title goes AFTER the surname, the opposite of English.
Mr. Martinez → Martinez 先生
Mrs. Martinez → Martinez 太太
Teacher Hsu → 徐老师 (Hsu is 徐, Michelle's surname)

WHY IT'S SO COMMON (Michelle): Chinese has few surnames and they repeat a lot (陈 Chen and 王 Wang are the most common), while given names almost never repeat. So people are called surname + title or profession: 王老师, 陈先生, 李工程师. Calling someone by their given name alone is very familiar, and friends in China use nicknames (like 猴子 "monkey", a friend of Michelle's husband).

PRONUNCIATION: Martinez xiānsheng.`,
zh:`是什么："Martinez 先生"。称呼放在姓后面：Martinez 先生、Martinez 太太、徐老师。中文的姓很集中（陈、王），名字很少重复，所以常用"姓 + 称呼 / 职业"；熟朋友之间常用外号。`}}
  ]
});
