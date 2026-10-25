/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   w optional writing tip {es, en, zh} (shown on the stroke-order page),
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"paises", glyph:"国",
  name:{"es": "Países, nacionalidades e idiomas", "en": "Countries, nationalities & languages", "zh": "国家、国籍和语言"},
  cl:"c5",
  cards:[
  {id:"pai-01",s:"国",t:"國",py:"guó",es:"país",en:"country",
   x:{
es:`QUÉ ES: «país». Michelle: «país en chino se dice 国 (guó)». Es la pieza que forma casi todos los nombres de países: 英国 (Yīngguó) Inglaterra, 法国 (Fǎguó) Francia, 美国 (Měiguó) Estados Unidos, 中国 (Zhōngguó) China.

EL CARÁCTER:
La forma tradicional 國 (guó), que es la que usa Michelle, cuenta la historia: un recinto cerrado 囗 (wéi, la muralla, la frontera) y adentro 或 (huò), que es 戈 (gē, una alabarda, un arma) protegiendo 口 (kǒu, la gente, la población) sobre 一 (yī, la tierra). Un territorio con su gente, defendido con armas y rodeado por una frontera: el país.
La forma simplificada 国 (guó) cambió el interior por 玉 (yù, el jade, lo valioso): «el tesoro dentro de las murallas».

LA REGLA DE LA CLASE: país + 人 (rén, persona) = la nacionalidad: 英国人 (Yīngguórén) inglés · 美国人 (Měiguórén) estadounidense. Y el primer carácter del país + 文 (wén) o 语 (yǔ) = el idioma: 英文 (Yīngwén) / 英语 (Yīngyǔ) inglés.

PRONUNCIACIÓN: guó, 2.º tono (sube). Michelle a veces lo dice «kuo»: la g china no tiene aire, suena entre nuestra g y nuestra k. Dentro de los nombres suele sonar más corto.`,
en:`WHAT IT IS: "country". Michelle: "country in Chinese is 国 (guó)". It's the piece in almost every country name: 英国 (Yīngguó) England/UK, 法国 (Fǎguó) France, 美国 (Měiguó) the United States, 中国 (Zhōngguó) China.

THE CHARACTER:
The traditional form 國 (guó), which Michelle uses, tells the story: an enclosure 囗 (wéi, the wall, the border) and inside it 或 (huò), which is 戈 (gē, a halberd, a weapon) guarding 口 (kǒu, the people) over 一 (yī, the land). A territory with its people, defended by weapons and surrounded by a border: the country.
The simplified form 国 (guó) replaced the inside with 玉 (yù, jade, something precious): "the treasure inside the walls".

THE CLASS RULE: country + 人 (rén, person) = nationality: 英国人 (Yīngguórén) English person · 美国人 (Měiguórén) American. And the country's first character + 文 (wén) or 语 (yǔ) = the language: 英文 (Yīngwén) / 英语 (Yīngyǔ) English.

PRONUNCIATION: guó, 2nd tone (rising). Michelle sometimes says it "kuo": Chinese g has no air, between our g and k. Inside names it's usually shorter.`,
zh:`国：国家。繁体國：囗（城墙、国界）里面是或（戈守护口和一，即人民和土地）；简体国里面是玉。规则：国名＋人＝国籍（英国人）；国名第一个字＋文／语＝语言（英文、英语）。`}},
  {id:"pai-02",s:"语",t:"語",py:"yǔ",es:"idioma, lengua (lo hablado)",en:"language (spoken)",
   x:{
es:`QUÉ ES: «idioma, lengua, habla». Michelle: «語 (yǔ) significa idioma o habla». Va pegado al nombre del país para decir la lengua: 英语 (Yīngyǔ) inglés, 法语 (Fǎyǔ) francés, 日语 (Rìyǔ) japonés, 西班牙语 (Xībānyáyǔ) español.

EL CARÁCTER:
讠 (yán) a la izquierda: «palabras, hablar», la forma simplificada de 言 (yán): una boca de la que salen palabras. Todo lo que tiene que ver con hablar lo lleva: 说 (shuō, decir), 谁 (shéi, quién), 谢 (xiè, agradecer).
吾 (wú) a la derecha: está por el sonido (wú → yǔ). Significa «yo» en chino clásico, pero acá solo aporta la pronunciación.

文 O 语: Michelle explicó que se puede decir 英文 (Yīngwén) o 英语 (Yīngyǔ). La diferencia de matiz: 文 (wén) es la escritura, la «letra»; 语 (yǔ) es la lengua hablada. En el uso diario son casi iguales: 我学英语 (wǒ xué Yīngyǔ) o 我学英文 (wǒ xué Yīngwén), «estudio inglés». Para hablar se prefiere 语: 说英语 (shuō Yīngyǔ).
También 语言 (yǔyán), «idioma, lenguaje» en general.

PRONUNCIACIÓN: yǔ, 3.er tono. Michelle: «esa u es la u francesa»: es ü (labios redondos, lengua en i); después de y se escribe u sin puntitos.`,
en:`WHAT IT IS: "language, tongue, speech". Michelle: "語 (yǔ) means language or speech". It attaches to the country name for the language: 英语 (Yīngyǔ) English, 法语 (Fǎyǔ) French, 日语 (Rìyǔ) Japanese, 西班牙语 (Xībānyáyǔ) Spanish.

THE CHARACTER:
讠 (yán) on the left: "words, speaking", the simplified form of 言 (yán): a mouth with words coming out. Everything to do with speech has it: 说 (shuō, to say), 谁 (shéi, who), 谢 (xiè, to thank).
吾 (wú) on the right: there for the sound (wú → yǔ). It means "I" in classical Chinese, but here it only gives the pronunciation.

文 OR 语: Michelle explained you can say 英文 (Yīngwén) or 英语 (Yīngyǔ). The shade of difference: 文 (wén) is writing, "letters"; 语 (yǔ) is the spoken language. In daily use they're nearly the same: 我学英语 (wǒ xué Yīngyǔ) or 我学英文 (wǒ xué Yīngwén), "I study English". For speaking, 语 is preferred: 说英语 (shuō Yīngyǔ).
Also 语言 (yǔyán), "language" in general.

PRONUNCIATION: yǔ, 3rd tone. Michelle: "that u is the French u": it's ü (rounded lips, tongue as for i); after y it's written u without dots.`,
zh:`语：语言、说话。讠（言，说话）＋吾（声旁）。国名＋语＝语言：英语、法语、日语、西班牙语。文偏书面，语偏口语，日常差不多：学英语／学英文；说英语。语言。yǔ 的 u 是 ü。`}},
  {id:"pai-03",s:"甲骨文",py:"jiǎgǔwén",es:"escritura de los huesos oraculares",en:"oracle-bone script",
   x:{
es:`QUÉ ES: la escritura china más antigua que se conserva (hace unos 3.200 años, dinastía Shang). Michelle la mostró con 人 (rén): «esta es la etapa de oráculos; en chino se dice 甲骨文 (jiǎgǔwén)». Es la primera columna de los dibujos de evolución en la página de Trazos.

LOS CARACTERES:
甲 (jiǎ) caparazón, coraza: acá, el caparazón de tortuga.
骨 (gǔ) hueso: arriba la articulación, abajo 月 (yuè, que acá es carne, 肉 ròu): hueso con carne.
文 (wén) escritura, letra: Michelle: «este 文 significa letra, escritura».
甲骨文 (jiǎgǔwén) = «escritura sobre caparazones y huesos».

POR QUÉ HUESOS: los adivinos de la corte escribían preguntas en caparazones de tortuga y omóplatos de buey, los calentaban hasta que se rajaban y leían la respuesta en las grietas. Se redescubrieron recién en 1899.

EL MISMO 文: 中文 (Zhōngwén) chino · 英文 (Yīngwén) inglés · 日文 (Rìwén) japonés: el «escrito» de cada país.

PRONUNCIACIÓN: jiǎgǔwén: dos 3.os tonos seguidos (el primero sube un poco: jiá gǔ) + 2.º. En clase sonó «jiāgūn» y «ya-ku-un»: es jiǎ-gǔ-wén.`,
en:`WHAT IT IS: the oldest surviving Chinese writing (about 3,200 years ago, Shang dynasty). Michelle showed it with 人 (rén): "this is the oracle stage; in Chinese it's 甲骨文 (jiǎgǔwén)". It's the first column of the evolution drawings on the Strokes page.

THE CHARACTERS:
甲 (jiǎ) shell, armour: here, the turtle shell.
骨 (gǔ) bone: the joint on top, 月 below (yuè, here it's flesh, 肉 ròu): bone with flesh.
文 (wén) writing, letters: Michelle: "this 文 means letter, writing".
甲骨文 (jiǎgǔwén) = "writing on shells and bones".

WHY BONES: court diviners wrote questions on turtle shells and ox shoulder blades, heated them until they cracked, and read the answer in the cracks. They were only rediscovered in 1899.

THE SAME 文: 中文 (Zhōngwén) Chinese · 英文 (Yīngwén) English · 日文 (Rìwén) Japanese: each country's "writing".

PRONUNCIATION: jiǎgǔwén: two 3rd tones in a row (the first rises a little: jiá gǔ) + 2nd. In class it sounded like "jiāgūn" and "ya-ku-un": it's jiǎ-gǔ-wén.`,
zh:`甲骨文：商代刻在龟甲、兽骨上的文字，最古老的汉字。甲：龟甲；骨：骨头；文：文字。占卜时烧裂甲骨，看裂纹。1899年重新发现。中文、英文、日文的文也是文字。`}},
  {id:"pai-04",s:"国名 + 人 / 文 / 语",t:"國名 + 人 / 文 / 語",py:"guómíng + rén / wén / yǔ",es:"país + persona / escritura / habla",en:"country + person / writing / speech",say:"英国，英国人，英文，英语",
   x:{
es:`QUÉ ES: la regla de la clase. Michelle: «solamente tenés que saber esta regla, y más o menos ya captaste todo».

LAS TRES PIEZAS:
• PAÍS: el nombre, casi siempre con 国 (guó): 英国 (Yīngguó), 法国 (Fǎguó), 德国 (Déguó), 美国 (Měiguó). Algunos no lo llevan: 日本 (Rìběn), 西班牙 (Xībānyá), 阿根廷 (Āgēntíng).
• NACIONALIDAD: país + 人 (rén, persona): 英国人 (Yīngguórén), 阿根廷人 (Āgēntíngrén). Michelle: «cuando ves 人, es de la nacionalidad o algo que tiene que ver con persona». Sirve para hombre y mujer: el chino no tiene género.
• IDIOMA: la primera sílaba del país + 文 (wén, escritura) o 语 (yǔ, habla): 英文 / 英语 (Yīngwén / Yīngyǔ), 法语 (Fǎyǔ), 日语 (Rìyǔ). Si el nombre no lleva 国, va entero: 西班牙语 (Xībānyáyǔ).

OJO: en Estados Unidos se habla 英语 (Yīngyǔ), no «美语»; Michelle dijo que 美语 (Měiyǔ) a veces se usa para el inglés americano, por la pronunciación. Y en Argentina, 西班牙语 (Xībānyáyǔ).

PARA HABLAR: 我是阿根廷人 (wǒ shì Āgēntíngrén), soy argentino · 你是哪国人？ (nǐ shì nǎ guó rén?), ¿de qué país sos?

PRONUNCIACIÓN: guómíng, «nombre del país». 国名 + 人 se pronuncia todo junto, con 人 (rén) subiendo al final.`,
en:`WHAT IT IS: the rule of the class. Michelle: "you only need to know this rule, and you've more or less got it all".

THE THREE PIECES:
• COUNTRY: the name, almost always with 国 (guó): 英国 (Yīngguó), 法国 (Fǎguó), 德国 (Déguó), 美国 (Měiguó). Some don't have it: 日本 (Rìběn), 西班牙 (Xībānyá), 阿根廷 (Āgēntíng).
• NATIONALITY: country + 人 (rén, person): 英国人 (Yīngguórén), 阿根廷人 (Āgēntíngrén). Michelle: "when you see 人, it's nationality or something to do with a person". It works for men and women: Chinese has no gender.
• LANGUAGE: the country's first syllable + 文 (wén, writing) or 语 (yǔ, speech): 英文 / 英语 (Yīngwén / Yīngyǔ), 法语 (Fǎyǔ), 日语 (Rìyǔ). If the name has no 国, it goes whole: 西班牙语 (Xībānyáyǔ).

CAREFUL: the United States speaks 英语 (Yīngyǔ), not "美语"; Michelle said 美语 (Měiyǔ) is sometimes used for American English, for the accent. And Argentina, 西班牙语 (Xībānyáyǔ).

TO TALK: 我是阿根廷人 (wǒ shì Āgēntíngrén), I'm Argentinian · 你是哪国人？ (nǐ shì nǎ guó rén?), what country are you from?

PRONUNCIATION: guómíng, "country name". Country + 人 is said in one go, with 人 (rén) rising at the end.`,
zh:`规则：国名＋人＝国籍；国名第一个字＋文／语＝语言（英文、英语、法语、日语）；国名不带"国"时整个用上：西班牙语。美国说英语（美语指美式英语）。我是阿根廷人。你是哪国人？`}},
  {id:"pai-05",s:"英国",t:"英國",py:"Yīngguó",es:"Inglaterra, Reino Unido",en:"England, United Kingdom",
   x:{
es:`QUÉ ES: «Inglaterra, Reino Unido».

DE DÓNDE SALE EL NOMBRE: Del sonido de «England»: el nombre antiguo era 英吉利 (Yīngjílì), «Eng-li(sh)», y se acortó a la primera sílaba + 国 (guó). Michelle: «England en chino es muy largo, entonces usaron esto de adelante».

LOS CARACTERES: 英 (yīng): arriba 艹 (cǎo, hierba) y abajo 央 (yāng), que da el sonido. Significa «flor; héroe, sobresaliente» (英雄 yīngxióng, héroe): se eligió un carácter que sonara parecido y tuviera buen sentido.

LA FAMILIA: 英国 (Yīngguó) país · 英国人 (Yīngguórén) la persona, la nacionalidad (sirve para hombre y mujer).

PRONUNCIACIÓN: Yīngguó.`,
en:`WHAT IT IS: "England, United Kingdom".

WHERE THE NAME COMES FROM: From the sound of "England": the old name was 英吉利 (Yīngjílì), "Eng-li(sh)", shortened to the first syllable + 国 (guó). Michelle: "England is very long in Chinese, so they used the front part".

THE CHARACTERS: 英 (yīng): 艹 (cǎo, grass) on top and 央 (yāng) below, giving the sound. It means "flower; hero, outstanding" (英雄 yīngxióng, hero): a character was chosen that sounded close and had a good meaning.

THE FAMILY: 英国 (Yīngguó) the country · 英国人 (Yīngguórén) the person, the nationality (for men and women alike).

PRONUNCIATION: Yīngguó.`,
zh:`英国：来自 England 的音译，旧称英吉利，取第一个字加国。英：艹＋央（声旁），本义花，引申为杰出（英雄）。`}},
  {id:"pai-06",s:"英国人",t:"英國人",py:"Yīngguórén",es:"inglés, inglesa (británico)",en:"English, British (person)",
   x:{
es:`QUÉ ES: «inglés, inglesa (británico)»: la persona de ese país.

CÓMO SE ARMA: 英国 (Yīngguó, el país) + 人 (rén, persona). Michelle: «las nacionalidades se forman con el nombre del país más persona». 人 es el dibujo de una persona caminando vista de costado: las dos piernas. El chino no tiene masculino ni femenino: 英国人 (Yīngguórén) vale para hombre y mujer.

Michelle lo armó en clase: «el nombre del país es 英国 (Yīngguó); la nacionalidad es 英国人 (Yīngguórén)».

EN UNA ORACIÓN: 他是英国人。(tā shì Yīngguórén) es inglés · 你是英国人吗？ (nǐ shì Yīngguórén ma?) ¿sos inglés?

PRONUNCIACIÓN: Yīngguórén. 人 (rén) al final sube (2.º tono); la r china va con la lengua curvada atrás.`,
en:`WHAT IT IS: "English, British (person)": a person from that country.

HOW IT'S BUILT: 英国 (Yīngguó, the country) + 人 (rén, person). Michelle: "nationalities are formed with the country name plus person". 人 is a person walking, seen from the side: the two legs. Chinese has no masculine or feminine: 英国人 (Yīngguórén) works for men and women.

Michelle built it in class: "the country is 英国 (Yīngguó); the nationality is 英国人 (Yīngguórén)".

IN A SENTENCE: 他是英国人。(tā shì Yīngguórén) he is English · 你是英国人吗？ (nǐ shì Yīngguórén ma?) are you English?

PRONUNCIATION: Yīngguórén. 人 (rén) at the end rises (2nd tone); Chinese r with the tongue curled back.`,
zh:`英国人：英国＋人＝国籍，男女都用。他是英国人。你是英国人吗？`}},
  {id:"pai-07",s:"英文",py:"Yīngwén",es:"inglés (el idioma, escrito)",en:"English (the language, written)",
   x:{
es:`QUÉ ES: «inglés (el idioma, escrito)».

CÓMO SE ARMA: 英 (yīng) de 英国 (Yīngguó) + 文 (wén, escritura, letra). Michelle: «inglés, si lo decís desde el punto de vista de la escritura, es 英文 (Yīngwén)». En la práctica se usa también para el idioma en general: 我学英文 (wǒ xué Yīngwén), estudio inglés.

文 O 语: 文 (wén) es la escritura, la «letra»; 语 (yǔ) es el habla. En la vida diaria se usan casi igual; para «hablar un idioma» suena más natural 语: 说…语 (shuō …yǔ).

PREGUNTAS ÚTILES: 你会说英语吗？ (nǐ huì shuō Yīngyǔ ma?) ¿hablás este idioma? · 会 (huì) es «saber hacer, poder»; 说 (shuō) es «hablar, decir».

PRONUNCIACIÓN: Yīngwén. 语 (yǔ) con la ü francesa: labios redondos, lengua en i.`,
en:`WHAT IT IS: "English (the language, written)".

HOW IT'S BUILT: 英 (yīng) from 英国 (Yīngguó) + 文 (wén, writing, letters). Michelle: "English, if you look at it from the writing side, is 英文 (Yīngwén)". In practice it's also used for the language in general: 我学英文 (wǒ xué Yīngwén), I study English.

文 OR 语: 文 (wén) is writing, "letters"; 语 (yǔ) is speech. In daily life they're used almost the same; for "speaking a language" 语 sounds more natural: 说…语 (shuō …yǔ).

USEFUL QUESTION: 你会说英语吗？ (nǐ huì shuō Yīngyǔ ma?) do you speak this language? · 会 (huì) is "can, know how to"; 说 (shuō) is "to speak, to say".

PRONUNCIATION: Yīngwén. 语 (yǔ) with the French ü: rounded lips, tongue as for i.`,
zh:`英文：英国的英＋文（文字）。老师：从文字的角度说是英文。`}},
  {id:"pai-08",s:"英语",t:"英語",py:"Yīngyǔ",es:"inglés (el idioma, hablado)",en:"English (the language, spoken)",
   x:{
es:`QUÉ ES: «inglés (el idioma, hablado)».

CÓMO SE ARMA: 英 (yīng) + 语 (yǔ, habla, idioma). Michelle: «desde el punto de vista del lenguaje, es 英语 (Yīngyǔ)». Para hablar se prefiere este: 你会说英语吗？ (nǐ huì shuō Yīngyǔ ma?), ¿hablás inglés? Es también el idioma de Estados Unidos.

文 O 语: 文 (wén) es la escritura, la «letra»; 语 (yǔ) es el habla. En la vida diaria se usan casi igual; para «hablar un idioma» suena más natural 语: 说…语 (shuō …yǔ).

PREGUNTAS ÚTILES: 你会说英语吗？ (nǐ huì shuō Yīngyǔ ma?) ¿hablás este idioma? · 会 (huì) es «saber hacer, poder»; 说 (shuō) es «hablar, decir».

PRONUNCIACIÓN: Yīngyǔ. 语 (yǔ) con la ü francesa: labios redondos, lengua en i.`,
en:`WHAT IT IS: "English (the language, spoken)".

HOW IT'S BUILT: 英 (yīng) + 语 (yǔ, speech, language). Michelle: "from the language side, it's 英语 (Yīngyǔ)". It's preferred for speaking: 你会说英语吗？ (nǐ huì shuō Yīngyǔ ma?), do you speak English? It's also the language of the United States.

文 OR 语: 文 (wén) is writing, "letters"; 语 (yǔ) is speech. In daily life they're used almost the same; for "speaking a language" 语 sounds more natural: 说…语 (shuō …yǔ).

USEFUL QUESTION: 你会说英语吗？ (nǐ huì shuō Yīngyǔ ma?) do you speak this language? · 会 (huì) is "can, know how to"; 说 (shuō) is "to speak, to say".

PRONUNCIATION: Yīngyǔ. 语 (yǔ) with the French ü: rounded lips, tongue as for i.`,
zh:`英语：英＋语（说话）。说英语。美国也说英语。`}},
  {id:"pai-09",s:"德国",t:"德國",py:"Déguó",es:"Alemania",en:"Germany",
   x:{
es:`QUÉ ES: «Alemania».

DE DÓNDE SALE EL NOMBRE: No viene del inglés sino del alemán: Deutsch, en chino antiguo 德意志 (Déyìzhì). Michelle: «viene de alemán, no viene de inglés, de Deutsch».

LOS CARACTERES: 德 (dé) virtud, moral: 彳 (chì, un paso, el camino) + un ojo 目 (mù, acostado) mirando derecho + 心 (xīn, corazón): «andar con la mirada recta y el corazón»: la virtud. El mismo de 道德经 (Dàodéjīng), el libro de Laozi.

LA FAMILIA: 德国 (Déguó) país · 德国人 (Déguórén) la persona, la nacionalidad (sirve para hombre y mujer).

PRONUNCIACIÓN: Déguó.`,
en:`WHAT IT IS: "Germany".

WHERE THE NAME COMES FROM: It comes from German, not English: Deutsch, in older Chinese 德意志 (Déyìzhì). Michelle: "it comes from German, not from English: from Deutsch".

THE CHARACTERS: 德 (dé) virtue, morality: 彳 (chì, a step, the road) + an eye 目 (mù, lying on its side) looking straight + 心 (xīn, heart): "walking with a straight gaze and heart": virtue. The same 德 as in 道德经 (Dàodéjīng), Laozi's book.

THE FAMILY: 德国 (Déguó) the country · 德国人 (Déguórén) the person, the nationality (for men and women alike).

PRONUNCIATION: Déguó.`,
zh:`德国：来自德语 Deutsch（德意志）。德：彳＋直视的目＋心，本义德行。道德经。`}},
  {id:"pai-10",s:"德国人",t:"德國人",py:"Déguórén",es:"alemán, alemana",en:"German (person)",
   x:{
es:`QUÉ ES: «alemán, alemana»: la persona de ese país.

CÓMO SE ARMA: 德国 (Déguó, el país) + 人 (rén, persona). Michelle: «las nacionalidades se forman con el nombre del país más persona». 人 es el dibujo de una persona caminando vista de costado: las dos piernas. El chino no tiene masculino ni femenino: 德国人 (Déguórén) vale para hombre y mujer.

Michelle: «de Alemania, alemán o alemana, se dice 德国人 (Déguórén)».

EN UNA ORACIÓN: 他是德国人。(tā shì Déguórén) es alemán · 你是德国人吗？ (nǐ shì Déguórén ma?) ¿sos alemán?

PRONUNCIACIÓN: Déguórén. 人 (rén) al final sube (2.º tono); la r china va con la lengua curvada atrás.`,
en:`WHAT IT IS: "German (person)": a person from that country.

HOW IT'S BUILT: 德国 (Déguó, the country) + 人 (rén, person). Michelle: "nationalities are formed with the country name plus person". 人 is a person walking, seen from the side: the two legs. Chinese has no masculine or feminine: 德国人 (Déguórén) works for men and women.

Michelle: "from Germany, a German man or woman, is 德国人 (Déguórén)".

IN A SENTENCE: 他是德国人。(tā shì Déguórén) he is German · 你是德国人吗？ (nǐ shì Déguórén ma?) are you German?

PRONUNCIATION: Déguórén. 人 (rén) at the end rises (2nd tone); Chinese r with the tongue curled back.`,
zh:`德国人：德国＋人＝国籍，男女都用。他是德国人。你是德国人吗？`}},
  {id:"pai-11",s:"德语",t:"德語",py:"Déyǔ",es:"alemán (el idioma)",en:"German (the language)",
   x:{
es:`QUÉ ES: «alemán (el idioma)».

CÓMO SE ARMA: 德 (dé) de 德国 (Déguó) + 语 (yǔ). Michelle: «podés decir 德文 (Déwén) o 德语 (Déyǔ), es lo mismo: alemán».

文 O 语: 文 (wén) es la escritura, la «letra»; 语 (yǔ) es el habla. En la vida diaria se usan casi igual; para «hablar un idioma» suena más natural 语: 说…语 (shuō …yǔ).

PREGUNTAS ÚTILES: 你会说德语吗？ (nǐ huì shuō Déyǔ ma?) ¿hablás este idioma? · 会 (huì) es «saber hacer, poder»; 说 (shuō) es «hablar, decir».

PRONUNCIACIÓN: Déyǔ. 语 (yǔ) con la ü francesa: labios redondos, lengua en i.`,
en:`WHAT IT IS: "German (the language)".

HOW IT'S BUILT: 德 (dé) from 德国 (Déguó) + 语 (yǔ). Michelle: "you can say 德文 (Déwén) or 德语 (Déyǔ), it's the same: German".

文 OR 语: 文 (wén) is writing, "letters"; 语 (yǔ) is speech. In daily life they're used almost the same; for "speaking a language" 语 sounds more natural: 说…语 (shuō …yǔ).

USEFUL QUESTION: 你会说德语吗？ (nǐ huì shuō Déyǔ ma?) do you speak this language? · 会 (huì) is "can, know how to"; 说 (shuō) is "to speak, to say".

PRONUNCIATION: Déyǔ. 语 (yǔ) with the French ü: rounded lips, tongue as for i.`,
zh:`德语：也说德文，意思一样。`}},
  {id:"pai-13",s:"法国",t:"法國",py:"Fǎguó",es:"Francia",en:"France",
   x:{
es:`QUÉ ES: «Francia».

DE DÓNDE SALE EL NOMBRE: De «France»: 法兰西 (Fǎlánxī), «Fa-lan-xi». Michelle: como en chino no existe «fr», queda 法 (fǎ); el nombre era largo y se tomó solo la primera parte + 国 (guó).

LOS CARACTERES: 法 (fǎ) ley, método: 氵 (shuǐ, agua) + 去 (qù, irse). Se suele explicar como «la ley es pareja como el agua y se lleva lo injusto»; la forma antigua era más compleja y esa lectura es tradicional, no segura.

LA FAMILIA: 法国 (Fǎguó) país · 法国人 (Fǎguórén) la persona, la nacionalidad (sirve para hombre y mujer).

PRONUNCIACIÓN: Fǎguó.`,
en:`WHAT IT IS: "France".

WHERE THE NAME COMES FROM: From "France": 法兰西 (Fǎlánxī), "Fa-lan-xi". Michelle: since Chinese has no "fr", it becomes 法 (fǎ); the name was long so only the first part + 国 (guó) was kept.

THE CHARACTERS: 法 (fǎ) law, method: 氵 (shuǐ, water) + 去 (qù, to go away). It's usually explained as "law is level like water and carries off what is unjust"; the old form was more complex and that reading is traditional, not certain.

THE FAMILY: 法国 (Fǎguó) the country · 法国人 (Fǎguórén) the person, the nationality (for men and women alike).

PRONUNCIATION: Fǎguó.`,
zh:`法国：来自 France（法兰西）的音译，取第一个字加国。法：氵＋去，传统解释为法平如水（古字更复杂）。`}},
  {id:"pai-14",s:"法国人",t:"法國人",py:"Fǎguórén",es:"francés, francesa",en:"French (person)",
   x:{
es:`QUÉ ES: «francés, francesa»: la persona de ese país.

CÓMO SE ARMA: 法国 (Fǎguó, el país) + 人 (rén, persona). Michelle: «las nacionalidades se forman con el nombre del país más persona». 人 es el dibujo de una persona caminando vista de costado: las dos piernas. El chino no tiene masculino ni femenino: 法国人 (Fǎguórén) vale para hombre y mujer.

Michelle: «la persona de Francia, los franceses, se dice 法国人 (Fǎguórén)».

EN UNA ORACIÓN: 他是法国人。(tā shì Fǎguórén) es francés · 你是法国人吗？ (nǐ shì Fǎguórén ma?) ¿sos francés?

PRONUNCIACIÓN: Fǎguórén. 人 (rén) al final sube (2.º tono); la r china va con la lengua curvada atrás.`,
en:`WHAT IT IS: "French (person)": a person from that country.

HOW IT'S BUILT: 法国 (Fǎguó, the country) + 人 (rén, person). Michelle: "nationalities are formed with the country name plus person". 人 is a person walking, seen from the side: the two legs. Chinese has no masculine or feminine: 法国人 (Fǎguórén) works for men and women.

Michelle: "the person from France, the French, is 法国人 (Fǎguórén)".

IN A SENTENCE: 他是法国人。(tā shì Fǎguórén) he is French · 你是法国人吗？ (nǐ shì Fǎguórén ma?) are you French?

PRONUNCIATION: Fǎguórén. 人 (rén) at the end rises (2nd tone); Chinese r with the tongue curled back.`,
zh:`法国人：法国＋人＝国籍，男女都用。他是法国人。你是法国人吗？`}},
  {id:"pai-15",s:"法语",t:"法語",py:"Fǎyǔ",es:"francés (el idioma)",en:"French (the language)",
   x:{
es:`QUÉ ES: «francés (el idioma)».

CÓMO SE ARMA: 法 (fǎ) de 法国 (Fǎguó) + 语 (yǔ). Michelle: «tenés 法语 (Fǎyǔ) o 法文 (Fǎwén)». Vos hablás francés: 我会说法语 (wǒ huì shuō Fǎyǔ).

文 O 语: 文 (wén) es la escritura, la «letra»; 语 (yǔ) es el habla. En la vida diaria se usan casi igual; para «hablar un idioma» suena más natural 语: 说…语 (shuō …yǔ).

PREGUNTAS ÚTILES: 你会说法语吗？ (nǐ huì shuō Fǎyǔ ma?) ¿hablás este idioma? · 会 (huì) es «saber hacer, poder»; 说 (shuō) es «hablar, decir».

PRONUNCIACIÓN: Fǎyǔ. 语 (yǔ) con la ü francesa: labios redondos, lengua en i.`,
en:`WHAT IT IS: "French (the language)".

HOW IT'S BUILT: 法 (fǎ) from 法国 (Fǎguó) + 语 (yǔ). Michelle: "you have 法语 (Fǎyǔ) or 法文 (Fǎwén)". You speak French: 我会说法语 (wǒ huì shuō Fǎyǔ).

文 OR 语: 文 (wén) is writing, "letters"; 语 (yǔ) is speech. In daily life they're used almost the same; for "speaking a language" 语 sounds more natural: 说…语 (shuō …yǔ).

USEFUL QUESTION: 你会说法语吗？ (nǐ huì shuō Fǎyǔ ma?) do you speak this language? · 会 (huì) is "can, know how to"; 说 (shuō) is "to speak, to say".

PRONUNCIATION: Fǎyǔ. 语 (yǔ) with the French ü: rounded lips, tongue as for i.`,
zh:`法语：也说法文。我会说法语。`}},
  {id:"pai-17",s:"俄国",t:"俄國",py:"Éguó",es:"Rusia",en:"Russia",
   x:{
es:`QUÉ ES: «Rusia».

DE DÓNDE SALE EL NOMBRE: Michelle: el nombre llegó como «Oros», la forma mongola de «Rus»: por eso empieza con vocal. El nombre completo es 俄罗斯 (Éluósī), y lo corto 俄国 (Éguó). Hoy, para el país actual, se dice casi siempre 俄罗斯; 俄国 suena más histórico.

LOS CARACTERES: 俄 (é): 亻 (rén, persona) + 我 (wǒ), que da el sonido. Solo significa «de repente» en chino clásico; hoy se usa casi únicamente para Rusia.

LA FAMILIA: 俄国 (Éguó) país · 俄国人 (Éguórén) la persona, la nacionalidad (sirve para hombre y mujer).

PRONUNCIACIÓN: Éguó.`,
en:`WHAT IT IS: "Russia".

WHERE THE NAME COMES FROM: Michelle: the name came in as "Oros", the Mongolian form of "Rus": that's why it starts with a vowel. The full name is 俄罗斯 (Éluósī), the short one 俄国 (Éguó). Today, for the modern country, people almost always say 俄罗斯; 俄国 sounds more historical.

THE CHARACTERS: 俄 (é): 亻 (rén, person) + 我 (wǒ), giving the sound. On its own it means "suddenly" in classical Chinese; today it's used almost only for Russia.

THE FAMILY: 俄国 (Éguó) the country · 俄国人 (Éguórén) the person, the nationality (for men and women alike).

PRONUNCIATION: Éguó.`,
zh:`俄国：来自蒙古语 Oros，全称俄罗斯，现在多说俄罗斯，俄国较旧。俄：亻＋我（声旁）。`}},
  {id:"pai-18",s:"俄国人",t:"俄國人",py:"Éguórén",es:"ruso, rusa",en:"Russian (person)",
   x:{
es:`QUÉ ES: «ruso, rusa»: la persona de ese país.

CÓMO SE ARMA: 俄国 (Éguó, el país) + 人 (rén, persona). Michelle: «las nacionalidades se forman con el nombre del país más persona». 人 es el dibujo de una persona caminando vista de costado: las dos piernas. El chino no tiene masculino ni femenino: 俄国人 (Éguórén) vale para hombre y mujer.

Hoy se dice más 俄罗斯人 (Éluósīrén); 俄国人 (Éguórén) es la forma corta que dio Michelle.

EN UNA ORACIÓN: 他是俄国人。(tā shì Éguórén) es ruso · 你是俄国人吗？ (nǐ shì Éguórén ma?) ¿sos ruso?

PRONUNCIACIÓN: Éguórén. 人 (rén) al final sube (2.º tono); la r china va con la lengua curvada atrás.`,
en:`WHAT IT IS: "Russian (person)": a person from that country.

HOW IT'S BUILT: 俄国 (Éguó, the country) + 人 (rén, person). Michelle: "nationalities are formed with the country name plus person". 人 is a person walking, seen from the side: the two legs. Chinese has no masculine or feminine: 俄国人 (Éguórén) works for men and women.

Today 俄罗斯人 (Éluósīrén) is more common; 俄国人 (Éguórén) is the short form Michelle gave.

IN A SENTENCE: 他是俄国人。(tā shì Éguórén) he is Russian · 你是俄国人吗？ (nǐ shì Éguórén ma?) are you Russian?

PRONUNCIATION: Éguórén. 人 (rén) at the end rises (2nd tone); Chinese r with the tongue curled back.`,
zh:`俄国人：俄国＋人＝国籍，男女都用。他是俄国人。你是俄国人吗？`}},
  {id:"pai-19",s:"俄语",t:"俄語",py:"Éyǔ",es:"ruso (el idioma)",en:"Russian (the language)",
   x:{
es:`QUÉ ES: «ruso (el idioma)».

CÓMO SE ARMA: 俄 (é) de 俄国 (Éguó) / 俄罗斯 (Éluósī) + 语 (yǔ). También 俄文 (Éwén). Aunque el país se diga con el nombre largo, el idioma usa solo la primera sílaba.

文 O 语: 文 (wén) es la escritura, la «letra»; 语 (yǔ) es el habla. En la vida diaria se usan casi igual; para «hablar un idioma» suena más natural 语: 说…语 (shuō …yǔ).

PREGUNTAS ÚTILES: 你会说俄语吗？ (nǐ huì shuō Éyǔ ma?) ¿hablás este idioma? · 会 (huì) es «saber hacer, poder»; 说 (shuō) es «hablar, decir».

PRONUNCIACIÓN: Éyǔ. 语 (yǔ) con la ü francesa: labios redondos, lengua en i.`,
en:`WHAT IT IS: "Russian (the language)".

HOW IT'S BUILT: 俄 (é) from 俄国 (Éguó) / 俄罗斯 (Éluósī) + 语 (yǔ). Also 俄文 (Éwén). Even when the country uses the long name, the language takes only the first syllable.

文 OR 语: 文 (wén) is writing, "letters"; 语 (yǔ) is speech. In daily life they're used almost the same; for "speaking a language" 语 sounds more natural: 说…语 (shuō …yǔ).

USEFUL QUESTION: 你会说俄语吗？ (nǐ huì shuō Éyǔ ma?) do you speak this language? · 会 (huì) is "can, know how to"; 说 (shuō) is "to speak, to say".

PRONUNCIATION: Éyǔ. 语 (yǔ) with the French ü: rounded lips, tongue as for i.`,
zh:`俄语：也说俄文；国名用全称俄罗斯，语言仍只取俄字。`}},
  {id:"pai-20",s:"美国",t:"美國",py:"Měiguó",es:"Estados Unidos",en:"United States",
   x:{
es:`QUÉ ES: «Estados Unidos».

DE DÓNDE SALE EL NOMBRE: De «América»: 亚美利加 (Yàměilìjiā) o 美利坚 (Měilìjiān), «A-me-ri-ca»; se tomó 美 (měi). Michelle: además, 美 significa «hermoso», y para muchos chinos era «el país hermoso»: rico, con oro, sin guerra.

LOS CARACTERES: 美 (měi) hermoso: 羊 (yáng, oveja, con los cuernos arriba) sobre 大 (dà, grande): «oveja grande», lo bueno y lo bello. Otra lectura ve una persona con adorno de plumas o cuernos en la cabeza; se discute.

LA FAMILIA: 美国 (Měiguó) país · 美国人 (Měiguórén) la persona, la nacionalidad (sirve para hombre y mujer).

PRONUNCIACIÓN: Měiguó.`,
en:`WHAT IT IS: "United States".

WHERE THE NAME COMES FROM: From "America": 亚美利加 (Yàměilìjiā) or 美利坚 (Měilìjiān), "A-me-ri-ca"; 美 (měi) was taken. Michelle: also, 美 means "beautiful", and for many Chinese it was "the beautiful country": rich, with gold, without war.

THE CHARACTERS: 美 (měi) beautiful: 羊 (yáng, sheep, horns on top) over 大 (dà, big): "big sheep", the good and the beautiful. Another reading sees a person wearing a feather or horn headdress; it's debated.

THE FAMILY: 美国 (Měiguó) the country · 美国人 (Měiguórén) the person, the nationality (for men and women alike).

PRONUNCIATION: Měiguó.`,
zh:`美国：来自 America（亚美利加、美利坚）的音译，取美字。老师说美也表示美丽，很多中国人当年觉得美国是美丽富饶的国家。美：羊＋大（另一说是戴头饰的人）。`}},
  {id:"pai-21",s:"美国人",t:"美國人",py:"Měiguórén",es:"estadounidense",en:"American (person)",
   x:{
es:`QUÉ ES: «estadounidense»: la persona de ese país.

CÓMO SE ARMA: 美国 (Měiguó, el país) + 人 (rén, persona). Michelle: «las nacionalidades se forman con el nombre del país más persona». 人 es el dibujo de una persona caminando vista de costado: las dos piernas. El chino no tiene masculino ni femenino: 美国人 (Měiguórén) vale para hombre y mujer.

Michelle: «la persona de Estados Unidos es 美国人 (Měiguórén); por eso si vas a Estados Unidos vas a ver un montón de inmigrantes chinos».

EN UNA ORACIÓN: 他是美国人。(tā shì Měiguórén) es estadounidense · 你是美国人吗？ (nǐ shì Měiguórén ma?) ¿sos estadounidense?

PRONUNCIACIÓN: Měiguórén. 人 (rén) al final sube (2.º tono); la r china va con la lengua curvada atrás.`,
en:`WHAT IT IS: "American (person)": a person from that country.

HOW IT'S BUILT: 美国 (Měiguó, the country) + 人 (rén, person). Michelle: "nationalities are formed with the country name plus person". 人 is a person walking, seen from the side: the two legs. Chinese has no masculine or feminine: 美国人 (Měiguórén) works for men and women.

Michelle: "a person from the United States is 美国人 (Měiguórén); that's why in the US you'll see lots of Chinese immigrants".

IN A SENTENCE: 他是美国人。(tā shì Měiguórén) he is American · 你是美国人吗？ (nǐ shì Měiguórén ma?) are you American?

PRONUNCIATION: Měiguórén. 人 (rén) at the end rises (2nd tone); Chinese r with the tongue curled back.`,
zh:`美国人：美国＋人＝国籍，男女都用。他是美国人。你是美国人吗？`}},
  {id:"pai-22",s:"日本",py:"Rìběn",es:"Japón",en:"Japan",
   x:{
es:`QUÉ ES: «Japón».

DE DÓNDE SALE EL NOMBRE: Michelle: Japón «está fuera de esta regla», porque los japoneses escriben su país con los mismos caracteres (kanji) 日本; los chinos los leen a la china: en japonés es «Nihon», en chino Rìběn (ella lo dice «Rippon»).

LOS CARACTERES: 日 (rì) sol + 本 (běn) origen, raíz: un árbol 木 (mù) con una marca en la raíz. 日本 = «el origen del sol»: el país del sol naciente, visto desde China, al este.

LA FAMILIA: 日本 (Rìběn) país · 日本人 (Rìběnrén) la persona, la nacionalidad (sirve para hombre y mujer).

PRONUNCIACIÓN: Rìběn.`,
en:`WHAT IT IS: "Japan".

WHERE THE NAME COMES FROM: Michelle: Japan "is outside this rule", because the Japanese write their country with the same characters (kanji) 日本; Chinese reads them the Chinese way: in Japanese it's "Nihon", in Chinese Rìběn (she says "Rippon").

THE CHARACTERS: 日 (rì) sun + 本 (běn) origin, root: a tree 木 (mù) with a mark at the root. 日本 = "the origin of the sun": the land of the rising sun, seen from China, to the east.

THE FAMILY: 日本 (Rìběn) the country · 日本人 (Rìběnrén) the person, the nationality (for men and women alike).

PRONUNCIATION: Rìběn.`,
zh:`日本：日本人自己用汉字写国名，中文按汉语读音读：Rìběn（日语读 Nihon）。日＝太阳，本＝根本，日本＝太阳升起的地方。`}},
  {id:"pai-23",s:"日本人",py:"Rìběnrén",es:"japonés, japonesa",en:"Japanese (person)",
   x:{
es:`QUÉ ES: «japonés, japonesa»: la persona de ese país.

CÓMO SE ARMA: 日本 (Rìběn, el país) + 人 (rén, persona). Michelle: «las nacionalidades se forman con el nombre del país más persona». 人 es el dibujo de una persona caminando vista de costado: las dos piernas. El chino no tiene masculino ni femenino: 日本人 (Rìběnrén) vale para hombre y mujer.

Michelle lo dice «Rippon-ren». Aunque 日本 (Rìběn) no lleva 国 (guó), la regla es la misma: país + 人.

EN UNA ORACIÓN: 他是日本人。(tā shì Rìběnrén) es japonés · 你是日本人吗？ (nǐ shì Rìběnrén ma?) ¿sos japonés?

PRONUNCIACIÓN: Rìběnrén. 人 (rén) al final sube (2.º tono); la r china va con la lengua curvada atrás.`,
en:`WHAT IT IS: "Japanese (person)": a person from that country.

HOW IT'S BUILT: 日本 (Rìběn, the country) + 人 (rén, person). Michelle: "nationalities are formed with the country name plus person". 人 is a person walking, seen from the side: the two legs. Chinese has no masculine or feminine: 日本人 (Rìběnrén) works for men and women.

Michelle says "Rippon-ren". Although 日本 (Rìběn) has no 国 (guó), the rule is the same: country + 人.

IN A SENTENCE: 他是日本人。(tā shì Rìběnrén) he is Japanese · 你是日本人吗？ (nǐ shì Rìběnrén ma?) are you Japanese?

PRONUNCIATION: Rìběnrén. 人 (rén) at the end rises (2nd tone); Chinese r with the tongue curled back.`,
zh:`日本人：日本＋人＝国籍，男女都用。他是日本人。你是日本人吗？`}},
  {id:"pai-24",s:"西班牙",py:"Xībānyá",es:"España",en:"Spain",
   x:{
es:`QUÉ ES: «España».

DE DÓNDE SALE EL NOMBRE: De «España» (o «Spain»). Michelle: como en chino no hay una s suelta, se le agrega una vocal: s → 西 (xī); después «pa-ña» → 班牙 (bānyá). Con España y Holanda, dijo, China tuvo el primer contacto con Occidente.

LOS CARACTERES: Los tres caracteres están por el sonido: 西 (xī) oeste, 班 (bān) grupo, clase, 牙 (yá) diente. No significan «España»: es una transcripción, y por eso no lleva 国 (guó).

LA FAMILIA: 西班牙 (Xībānyá) país · 西班牙人 (Xībānyárén) la persona, la nacionalidad (sirve para hombre y mujer).

PRONUNCIACIÓN: Xībānyá.`,
en:`WHAT IT IS: "Spain".

WHERE THE NAME COMES FROM: From "España" (or "Spain"). Michelle: since Chinese has no bare s, a vowel is added: s → 西 (xī); then "pa-ña" → 班牙 (bānyá). Spain and Holland, she said, were China's first contact with the West.

THE CHARACTERS: All three characters are there for the sound: 西 (xī) west, 班 (bān) group, class, 牙 (yá) tooth. They don't mean "Spain": it's a transcription, which is why there's no 国 (guó).

THE FAMILY: 西班牙 (Xībānyá) the country · 西班牙人 (Xībānyárén) the person, the nationality (for men and women alike).

PRONUNCIATION: Xībānyá.`,
zh:`西班牙：España 的音译，s 加元音成西，再加班牙。三个字只表音，所以不加国。`}},
  {id:"pai-25",s:"西班牙人",py:"Xībānyárén",es:"español, española",en:"Spanish (person)",
   x:{
es:`QUÉ ES: «español, española»: la persona de ese país.

CÓMO SE ARMA: 西班牙 (Xībānyá, el país) + 人 (rén, persona). Michelle: «las nacionalidades se forman con el nombre del país más persona». 人 es el dibujo de una persona caminando vista de costado: las dos piernas. El chino no tiene masculino ni femenino: 西班牙人 (Xībānyárén) vale para hombre y mujer.

Lo dijiste vos en clase: «la persona de España es 西班牙人 (Xībānyárén)», y Michelle lo confirmó. Cuatro caracteres: el nombre entero + 人.

EN UNA ORACIÓN: 他是西班牙人。(tā shì Xībānyárén) es español · 你是西班牙人吗？ (nǐ shì Xībānyárén ma?) ¿sos español?

PRONUNCIACIÓN: Xībānyárén. 人 (rén) al final sube (2.º tono); la r china va con la lengua curvada atrás.`,
en:`WHAT IT IS: "Spanish (person)": a person from that country.

HOW IT'S BUILT: 西班牙 (Xībānyá, the country) + 人 (rén, person). Michelle: "nationalities are formed with the country name plus person". 人 is a person walking, seen from the side: the two legs. Chinese has no masculine or feminine: 西班牙人 (Xībānyárén) works for men and women.

You said it in class: "the person from Spain is 西班牙人 (Xībānyárén)", and Michelle confirmed it. Four characters: the whole name + 人.

IN A SENTENCE: 他是西班牙人。(tā shì Xībānyárén) he is Spanish · 你是西班牙人吗？ (nǐ shì Xībānyárén ma?) are you Spanish?

PRONUNCIATION: Xībānyárén. 人 (rén) at the end rises (2nd tone); Chinese r with the tongue curled back.`,
zh:`西班牙人：西班牙＋人＝国籍，男女都用。他是西班牙人。你是西班牙人吗？`}},
  {id:"pai-26",s:"西班牙语",t:"西班牙語",py:"Xībānyáyǔ",es:"español (el idioma)",en:"Spanish (the language)",
   x:{
es:`QUÉ ES: «español (el idioma)».

CÓMO SE ARMA: 西班牙 (Xībānyá) entero + 语 (yǔ): como el nombre no lleva 国 (guó), va completo. También 西班牙文 (Xībānyáwén). Michelle: «español es la tercera lengua más grande del mundo, y hay un montón de negocios con China». Es tu idioma: 我说西班牙语 (wǒ shuō Xībānyáyǔ).

文 O 语: 文 (wén) es la escritura, la «letra»; 语 (yǔ) es el habla. En la vida diaria se usan casi igual; para «hablar un idioma» suena más natural 语: 说…语 (shuō …yǔ).

PREGUNTAS ÚTILES: 你会说西班牙语吗？ (nǐ huì shuō Xībānyáyǔ ma?) ¿hablás este idioma? · 会 (huì) es «saber hacer, poder»; 说 (shuō) es «hablar, decir».

PRONUNCIACIÓN: Xībānyáyǔ. 语 (yǔ) con la ü francesa: labios redondos, lengua en i.`,
en:`WHAT IT IS: "Spanish (the language)".

HOW IT'S BUILT: 西班牙 (Xībānyá) whole + 语 (yǔ): since the name has no 国 (guó), it goes in full. Also 西班牙文 (Xībānyáwén). Michelle: "Spanish is the third biggest language in the world, and there's a lot of business with China". It's your language: 我说西班牙语 (wǒ shuō Xībānyáyǔ).

文 OR 语: 文 (wén) is writing, "letters"; 语 (yǔ) is speech. In daily life they're used almost the same; for "speaking a language" 语 sounds more natural: 说…语 (shuō …yǔ).

USEFUL QUESTION: 你会说西班牙语吗？ (nǐ huì shuō Xībānyáyǔ ma?) do you speak this language? · 会 (huì) is "can, know how to"; 说 (shuō) is "to speak, to say".

PRONUNCIATION: Xībānyáyǔ. 语 (yǔ) with the French ü: rounded lips, tongue as for i.`,
zh:`西班牙语：国名不带国，整个加语。也说西班牙文。`}},
  {id:"pai-27",s:"阿根廷",py:"Āgēntíng",es:"Argentina",en:"Argentina",
   x:{
es:`QUÉ ES: «Argentina».

DE DÓNDE SALE EL NOMBRE: De «Argentina» (o «Argentine»). Michelle: la r no existe al final de sílaba en chino, así que «Ar» queda 阿 (ā); después «gen-ti(ne)» → 根廷 (gēntíng).

LOS CARACTERES: Todo por el sonido: 阿 (ā), un prefijo que sirve para sonidos extranjeros (también en 阿姨 āyí, tía) · 根 (gēn) raíz: 木 (mù, árbol) + 艮 (gèn, sonido) · 廷 (tíng) corte, palacio. Sin 国 (guó).

LA FAMILIA: 阿根廷 (Āgēntíng) país · 阿根廷人 (Āgēntíngrén) la persona, la nacionalidad (sirve para hombre y mujer).

PRONUNCIACIÓN: Āgēntíng.`,
en:`WHAT IT IS: "Argentina".

WHERE THE NAME COMES FROM: From "Argentina" (or "Argentine"). Michelle: Chinese has no r at the end of a syllable, so "Ar" becomes 阿 (ā); then "gen-ti(ne)" → 根廷 (gēntíng).

THE CHARACTERS: All for the sound: 阿 (ā), a prefix used for foreign sounds (also in 阿姨 āyí, auntie) · 根 (gēn) root: 木 (mù, tree) + 艮 (gèn, sound) · 廷 (tíng) court, palace. No 国 (guó).

THE FAMILY: 阿根廷 (Āgēntíng) the country · 阿根廷人 (Āgēntíngrén) the person, the nationality (for men and women alike).

PRONUNCIATION: Āgēntíng.`,
zh:`阿根廷：Argentina 的音译，汉语音节末尾没有 r，Ar 成阿。三个字只表音。`}},
  {id:"pai-28",s:"阿根廷人",py:"Āgēntíngrén",es:"argentino, argentina",en:"Argentinian (person)",
   x:{
es:`QUÉ ES: «argentino, argentina»: la persona de ese país.

CÓMO SE ARMA: 阿根廷 (Āgēntíng, el país) + 人 (rén, persona). Michelle: «las nacionalidades se forman con el nombre del país más persona». 人 es el dibujo de una persona caminando vista de costado: las dos piernas. El chino no tiene masculino ni femenino: 阿根廷人 (Āgēntíngrén) vale para hombre y mujer.

Para presentarte: 我是阿根廷人 (wǒ shì Āgēntíngrén), soy argentino. Michelle: «es Argentina, es argentino o argentina».

EN UNA ORACIÓN: 他是阿根廷人。(tā shì Āgēntíngrén) es argentino · 你是阿根廷人吗？ (nǐ shì Āgēntíngrén ma?) ¿sos argentino?

PRONUNCIACIÓN: Āgēntíngrén. 人 (rén) al final sube (2.º tono); la r china va con la lengua curvada atrás.`,
en:`WHAT IT IS: "Argentinian (person)": a person from that country.

HOW IT'S BUILT: 阿根廷 (Āgēntíng, the country) + 人 (rén, person). Michelle: "nationalities are formed with the country name plus person". 人 is a person walking, seen from the side: the two legs. Chinese has no masculine or feminine: 阿根廷人 (Āgēntíngrén) works for men and women.

To introduce yourself: 我是阿根廷人 (wǒ shì Āgēntíngrén), I'm Argentinian. Michelle: "it's Argentina, it's an Argentinian man or woman".

IN A SENTENCE: 他是阿根廷人。(tā shì Āgēntíngrén) he is Argentinian · 你是阿根廷人吗？ (nǐ shì Āgēntíngrén ma?) are you Argentinian?

PRONUNCIATION: Āgēntíngrén. 人 (rén) at the end rises (2nd tone); Chinese r with the tongue curled back.`,
zh:`阿根廷人：阿根廷＋人＝国籍，男女都用。他是阿根廷人。你是阿根廷人吗？`}},
  {id:"pai-29",s:"巴西",py:"Bāxī",es:"Brasil",en:"Brazil",
   x:{
es:`QUÉ ES: «Brasil».

DE DÓNDE SALE EL NOMBRE: De «Brasil». Michelle lo desarmó así: «br» no existe en chino, se saca la r y queda «ba»; la b china es la p sin aire; la l del final tampoco existe y se cae: queda 巴西 (Bāxī).

LOS CARACTERES: 巴 (bā) y 西 (xī, oeste) están por el sonido. El idioma de Brasil es el portugués: 葡萄牙语 (Pútáoyáyǔ), de 葡萄牙 (Pútáoyá), Portugal.

LA FAMILIA: 巴西 (Bāxī) país · 巴西人 (Bāxīrén) la persona, la nacionalidad (sirve para hombre y mujer).

PRONUNCIACIÓN: Bāxī.`,
en:`WHAT IT IS: "Brazil".

WHERE THE NAME COMES FROM: From "Brasil". Michelle took it apart like this: "br" doesn't exist in Chinese, the r drops and "ba" remains; Chinese b is an unaspirated p; the final l doesn't exist either and falls away: 巴西 (Bāxī).

THE CHARACTERS: 巴 (bā) and 西 (xī, west) are there for the sound. Brazil's language is Portuguese: 葡萄牙语 (Pútáoyáyǔ), from 葡萄牙 (Pútáoyá), Portugal.

THE FAMILY: 巴西 (Bāxī) the country · 巴西人 (Bāxīrén) the person, the nationality (for men and women alike).

PRONUNCIATION: Bāxī.`,
zh:`巴西：Brasil 的音译，去掉 r 和末尾的 l。巴西说葡萄牙语。`}},
  {id:"pai-30",s:"日语",t:"日語",py:"Rìyǔ",es:"japonés (el idioma)",en:"Japanese (the language)",
   x:{
es:`QUÉ ES: «japonés (el idioma)».

CÓMO SE ARMA: 日 (rì) de 日本 (Rìběn) + 语 (yǔ). Michelle: «el idioma te queda 日语 (Rìyǔ) o 日文 (Rìwén)». El japonés usa caracteres chinos (kanji): por eso un chino puede adivinar mucho de un texto japonés, aunque no lo sepa leer en voz alta.

文 O 语: 文 (wén) es la escritura, la «letra»; 语 (yǔ) es el habla. En la vida diaria se usan casi igual; para «hablar un idioma» suena más natural 语: 说…语 (shuō …yǔ).

PREGUNTAS ÚTILES: 你会说日语吗？ (nǐ huì shuō Rìyǔ ma?) ¿hablás este idioma? · 会 (huì) es «saber hacer, poder»; 说 (shuō) es «hablar, decir».

PRONUNCIACIÓN: Rìyǔ. 语 (yǔ) con la ü francesa: labios redondos, lengua en i.`,
en:`WHAT IT IS: "Japanese (the language)".

HOW IT'S BUILT: 日 (rì) from 日本 (Rìběn) + 语 (yǔ). Michelle: "the language is 日语 (Rìyǔ) or 日文 (Rìwén)". Japanese uses Chinese characters (kanji): that's why a Chinese reader can guess a lot of a Japanese text without being able to read it aloud.

文 OR 语: 文 (wén) is writing, "letters"; 语 (yǔ) is speech. In daily life they're used almost the same; for "speaking a language" 语 sounds more natural: 说…语 (shuō …yǔ).

USEFUL QUESTION: 你会说日语吗？ (nǐ huì shuō Rìyǔ ma?) do you speak this language? · 会 (huì) is "can, know how to"; 说 (shuō) is "to speak, to say".

PRONUNCIATION: Rìyǔ. 语 (yǔ) with the French ü: rounded lips, tongue as for i.`,
zh:`日语：也说日文。日文用汉字，中国人能猜懂不少。`}},
  {id:"pai-31",s:"中国",t:"中國",py:"Zhōngguó",es:"China",en:"China",cl:"ex",
   x:{
es:`QUÉ ES: «China». No lo dio Michelle en esta clase, pero completa la regla: 中国 (Zhōngguó) país · 中国人 (Zhōngguórén) chino, china · 中文 (Zhōngwén) el idioma chino (también 汉语 Hànyǔ).

LOS CARACTERES:
中 (zhōng) medio, centro: un palo o bandera atravesando un recinto por el medio.
国 (guó) país: la frontera 囗 (wéi) que rodea el territorio.
中国 = «el país del centro»: el nombre que se daba el reino de la llanura central, rodeado de pueblos «de afuera». Es de los pocos nombres de país que no es una transcripción del sonido.

PRONUNCIACIÓN: Zhōngguó: alto y plano + sube. zh con la lengua curvada atrás, sin aire.`,
en:`WHAT IT IS: "China". Michelle didn't give it in this class, but it completes the rule: 中国 (Zhōngguó) country · 中国人 (Zhōngguórén) Chinese person · 中文 (Zhōngwén) the Chinese language (also 汉语 Hànyǔ).

THE CHARACTERS:
中 (zhōng) middle, centre: a pole or banner piercing an enclosure through the middle.
国 (guó) country: the border 囗 (wéi) around the territory.
中国 = "the middle country": the name the kingdom of the central plain gave itself, surrounded by "outside" peoples. It's one of the few country names that isn't a sound transcription.

PRONUNCIATION: Zhōngguó: high and level + rising. zh with the tongue curled back, no air.`,
zh:`中国：中＋国，"中央之国"，不是音译。中国人；中文（也说汉语）。（本课没教，补充用。）`}},
  {id:"pai-32",s:"中文",py:"Zhōngwén",es:"chino (el idioma)",en:"Chinese (the language)",cl:"ex",
   x:{
es:`QUÉ ES: «chino», el idioma. Es lo que estudiás: 我学中文 (wǒ xué Zhōngwén), estudio chino. No lo dio Michelle en esta clase; está para completar la regla.

LOS CARACTERES: 中 (zhōng) de 中国 (Zhōngguó) + 文 (wén, escritura, letra). Igual que 英文 (Yīngwén) o 日文 (Rìwén).

OTRAS FORMAS: 汉语 (Hànyǔ), «la lengua de los Han» (la etnia mayoritaria), es la que usan los manuales y el examen HSK (Hànyǔ Shuǐpíng Kǎoshì). 普通话 (pǔtōnghuà), «la lengua común», es el mandarín estándar de China; en Taiwán se dice 国语 (guóyǔ), «la lengua nacional», y en Singapur 华语 (Huáyǔ).
OJO: no se dice «中国语» (Zhōngguóyǔ).

PRONUNCIACIÓN: Zhōngwén: alto y plano + sube.`,
en:`WHAT IT IS: "Chinese", the language. It's what you're studying: 我学中文 (wǒ xué Zhōngwén), I study Chinese. Michelle didn't give it in this class; it's here to complete the rule.

THE CHARACTERS: 中 (zhōng) from 中国 (Zhōngguó) + 文 (wén, writing, letters). Like 英文 (Yīngwén) or 日文 (Rìwén).

OTHER FORMS: 汉语 (Hànyǔ), "the language of the Han" (the majority ethnic group), is what textbooks and the HSK exam (Hànyǔ Shuǐpíng Kǎoshì) use. 普通话 (pǔtōnghuà), "the common speech", is standard Mandarin in mainland China; in Taiwan it's 国语 (guóyǔ), "the national language", and in Singapore 华语 (Huáyǔ).
CAREFUL: you don't say "中国语" (Zhōngguóyǔ).

PRONUNCIATION: Zhōngwén: high and level + rising.`,
zh:`中文：中国的中＋文。我学中文。也说汉语；普通话（大陆）、国语（台湾）、华语（新加坡）。不说"中国语"。（补充）`}},
  {id:"pai-33",s:"你是哪国人？",t:"你是哪國人？",py:"nǐ shì nǎ guó rén?",es:"¿de qué país sos?",en:"what country are you from?",cl:"ex",
   x:{
es:`QUÉ ES: «¿de qué país sos?», literalmente «¿vos sos persona de qué país?». No estaba en la clase, pero es la pregunta que usa la regla de Michelle (país + 人 rén).

CÓMO SE ARMA:
你 (nǐ) vos · 是 (shì) sos · 哪 (nǎ) cuál, qué (de varios) · 国 (guó) país · 人 (rén) persona.
哪 (nǎ): 口 (kǒu, boca: es una palabra de pregunta) + 那 (nà, aquel), que da el sonido. Ojo con el tono: 哪 nǎ (3.º, pregunta) y 那 nà (4.º, «aquel») se escriben parecido y suenan parecido.

LA REGLA DE LA CLASE 2: la palabra de pregunta va donde irá la respuesta:
你是哪国人？ (nǐ shì nǎ guó rén?) → 我是阿根廷人。(wǒ shì Āgēntíngrén) Sin 吗 (ma).

PRONUNCIACIÓN: nǐ shì nǎ guó rén? 哪 baja y sube (3.º). Al hablar rápido, 你 + 是 + 哪 se encadenan.`,
en:`WHAT IT IS: "what country are you from?", literally "you are a person of which country?". It wasn't in the class, but it's the question that uses Michelle's rule (country + 人 rén).

HOW IT'S BUILT:
你 (nǐ) you · 是 (shì) are · 哪 (nǎ) which · 国 (guó) country · 人 (rén) person.
哪 (nǎ): 口 (kǒu, mouth: it's a question word) + 那 (nà, that), giving the sound. Watch the tone: 哪 nǎ (3rd, question) and 那 nà (4th, "that") look and sound alike.

THE CLASS-2 RULE: the question word goes where the answer will go:
你是哪国人？ (nǐ shì nǎ guó rén?) → 我是阿根廷人。(wǒ shì Āgēntíngrén) No 吗 (ma).

PRONUNCIATION: nǐ shì nǎ guó rén? 哪 dips and rises (3rd). Spoken fast, 你 + 是 + 哪 run together.`,
zh:`你是哪国人？问国籍。哪：口＋那（声旁），注意哪（三声）和那（四声）。疑问词放在答案的位置：我是阿根廷人。（补充）`}},
  {id:"pai-34",s:"我是阿根廷人。",py:"wǒ shì Āgēntíngrén.",es:"soy argentino",en:"I'm Argentinian",cl:"ex",
   x:{
es:`QUÉ ES: «soy argentino», la respuesta a 你是哪国人？ (nǐ shì nǎ guó rén?). Con lo de esta clase ya podés presentarte entero.

CÓMO SE ARMA: 我 (wǒ) yo + 是 (shì) ser + 阿根廷人 (Āgēntíngrén): 阿根廷 (Āgēntíng, Argentina, por el sonido) + 人 (rén, persona).

PARA PRESENTARTE (todo de clases anteriores):
你好，我叫瓦迪铭。(nǐ hǎo, wǒ jiào Wǎ Dí Míng) Hola, me llamo Vladimir.
我是阿根廷人。(wǒ shì Āgēntíngrén) Soy argentino.
我会说西班牙语、英语和法语。(wǒ huì shuō Xībānyáyǔ, Yīngyǔ hé Fǎyǔ) Hablo español, inglés y francés.
El 和 (hé) «y» va solo antes del último, como en español (clase 3: 和 une sustantivos).

PRONUNCIACIÓN: wǒ shì Āgēntíngrén. 阿 (ā) alto y largo; 廷 (tíng) y 人 (rén) suben.`,
en:`WHAT IT IS: "I'm Argentinian", the answer to 你是哪国人？ (nǐ shì nǎ guó rén?). With this class you can now introduce yourself fully.

HOW IT'S BUILT: 我 (wǒ) I + 是 (shì) am + 阿根廷人 (Āgēntíngrén): 阿根廷 (Āgēntíng, Argentina, by sound) + 人 (rén, person).

TO INTRODUCE YOURSELF (all from earlier classes):
你好，我叫瓦迪铭。(nǐ hǎo, wǒ jiào Wǎ Dí Míng) Hello, my name is Vladimir.
我是阿根廷人。(wǒ shì Āgēntíngrén) I'm Argentinian.
我会说西班牙语、英语和法语。(wǒ huì shuō Xībānyáyǔ, Yīngyǔ hé Fǎyǔ) I speak Spanish, English and French.
和 (hé) "and" goes only before the last one, as in Spanish (class 3: 和 joins nouns).

PRONUNCIATION: wǒ shì Āgēntíngrén. 阿 (ā) high and long; 廷 (tíng) and 人 (rén) rise.`,
zh:`我是阿根廷人。回答你是哪国人。自我介绍：你好，我叫瓦迪铭。我是阿根廷人。我会说西班牙语、英语和法语。`}},
  {id:"pai-35",s:"我会说西班牙语。",t:"我會說西班牙語。",py:"wǒ huì shuō Xībānyáyǔ.",es:"hablo español",en:"I speak Spanish",cl:"ex",
   x:{
es:`QUÉ ES: «hablo español», literalmente «yo sé hablar español». Junta la regla de los idiomas de esta clase con dos verbos que ya están en el sitio.

CÓMO SE ARMA:
我 (wǒ) yo.
会 (huì) saber hacer algo aprendido, poder: se usa para idiomas, nadar, manejar.
说 (shuō) hablar, decir: 讠 (yán, palabras) + 兑 (duì, sonido).
西班牙语 (Xībānyáyǔ) español: 西班牙 (Xībānyá) + 语 (yǔ, idioma).

PREGUNTA: 你会说中文吗？ (nǐ huì shuō Zhōngwén ma?) ¿hablás chino? → 会一点。(huì yìdiǎn) un poco.
NEGATIVO: 我不会说日语。(wǒ bú huì shuō Rìyǔ) no hablo japonés. 不 (bù) antes de 会 (huì, 4.º tono) se dice bú.

PRONUNCIACIÓN: wǒ huì shuō Xībānyáyǔ. sh de 说 con la lengua curvada; x de 西 con la lengua plana.`,
en:`WHAT IT IS: "I speak Spanish", literally "I can speak Spanish". It combines this class's language rule with two verbs already on the site.

HOW IT'S BUILT:
我 (wǒ) I.
会 (huì) can, know how to (a learned skill): used for languages, swimming, driving.
说 (shuō) to speak, to say: 讠 (yán, words) + 兑 (duì, sound).
西班牙语 (Xībānyáyǔ) Spanish: 西班牙 (Xībānyá) + 语 (yǔ, language).

QUESTION: 你会说中文吗？ (nǐ huì shuō Zhōngwén ma?) do you speak Chinese? → 会一点。(huì yìdiǎn) a little.
NEGATIVE: 我不会说日语。(wǒ bú huì shuō Rìyǔ) I don't speak Japanese. 不 (bù) before 会 (huì, 4th tone) becomes bú.

PRONUNCIATION: wǒ huì shuō Xībānyáyǔ. sh in 说 with the tongue curled; x in 西 with the tongue flat.`,
zh:`我会说西班牙语。会：学会的能力；说：讠＋兑。你会说中文吗？会一点。我不会说日语（不在四声前读 bú）。（补充）`}}
  ]
});
