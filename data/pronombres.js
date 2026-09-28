/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   w optional writing tip {es, en, zh} (shown on the stroke-order page),
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"pronombres", glyph:"我",
  name:{"es": "Pronombres y posesivos", "en": "Pronouns & possessives", "zh": "代词"},
  cl:"c1",
  cards:[
  {id:"pro-01",s:"我",py:"wǒ",es:"yo",en:"I / me",
   x:{
es:`QUÉ ES: «yo», y también «me / mí». El chino no cambia la palabra según la función: 我叫 (wǒ jiào)… (yo me llamo), 妈妈叫我 (māma jiào wǒ, mamá ME llama), 给我 (gěi wǒ, a MÍ).

EL CARÁCTER: originalmente el dibujo de un arma de asta con hoja dentada, una especie de alabarda: a la izquierda 手 (shǒu, una mano), a la derecha 戈 (gē, una lanza con gancho).
No tiene ninguna relación con la idea de «yo»: se tomó prestado solo porque sonaba igual. Es uno de los casos donde conviene aprenderlo como dibujo, sin inventarle una historia.

EL SISTEMA DE PRONOMBRES (clase 1): es muy simple.
我 (wǒ) yo · 你 (nǐ) vos · 他 (tā) él (o ella)
Plural: se agrega 们 (men) → 我们 (wǒmen), 你们 (nǐmen), 他们 (tāmen).
Posesivo: se agrega 的 (de) → 我的 (wǒ de), 你的 (nǐ de), 他的 (tā de).
No hay más formas que aprender.

PRONUNCIACIÓN: wǒ, tercer tono (baja y sube). Cuando va antes de otro tercer tono sube: 我很好 wó hěn hǎo.`,
en:`WHAT IT IS: "I", and also "me". Chinese doesn't change the word by function: 我叫 (wǒ jiào)… (I'm called), 妈妈叫我 (māma jiào wǒ, mom calls ME), 给我 (gěi wǒ, to ME).

THE CHARACTER: originally a drawing of a pole weapon with a serrated blade, a kind of halberd: 手 (shǒu, a hand) on the left, 戈 (gē, a hooked spear) on the right.
It has nothing to do with the idea of "I": it was borrowed only because it sounded the same. It's one of those cases where you learn it as a picture and don't invent a story.

THE PRONOUN SYSTEM (class 1): very simple.
我 (wǒ) I · 你 (nǐ) you · 他 (tā) he (or she)
Plural: add 们 (men) → 我们 (wǒmen), 你们 (nǐmen), 他们 (tāmen).
Possessive: add 的 (de) → 我的 (wǒ de), 你的 (nǐ de), 他的 (tā de).
There are no other forms to learn.

PRONUNCIATION: wǒ, 3rd tone (dips and rises). Before another 3rd tone it rises: 我很好 wó hěn hǎo.`,
zh:`是什么："我"，主格宾格都用 我。字形：本来是带锯齿刃的长柄兵器（手 + 戈），只是借音，和"自己"的意思无关。
代词系统很简单：我、你、他；复数加 们；所有格加 的。发音：wǒ，第三声。`}},
  {id:"pro-02",s:"你",py:"nǐ",es:"vos / tú",en:"you",
   x:{
es:`QUÉ ES: «vos / tú / te / ti», para una sola persona, en trato normal. Para respeto se usa 您 (nín, usted).

EL CARÁCTER:
亻 (rén) a la izquierda: es 人 (rén, una persona caminando vista de costado, las dos piernas) aplastado para caber al lado de otro carácter. Casi todas las palabras de gente lo llevan: 他 (tā), 们 (men), 位 (wèi), 什 (shén).
尔 (ěr) a la derecha: está por el sonido. Antiguamente 尔 solo ya significaba «vos», y se le agregó 亻 para dejar claro que es una persona.

EN USO: 你好 (nǐ hǎo) hola (vos bien) · 你叫什么名字？ (nǐ jiào shénme míngzi?) ¿cómo te llamás? · 你的 (nǐ de) tu / tuyo · 你们 (nǐmen) ustedes.

PRONUNCIACIÓN: nǐ, tercer tono. En 你好 (nǐ hǎo) los dos son terceros tonos seguidos, así que 你 (nǐ) sube: ní hǎo.`,
en:`WHAT IT IS: "you" for one person, in normal register. For respect, use 您 (nín).

THE CHARACTER:
亻 (rén) on the left: it's 人 (rén, a person walking, seen from the side, the two legs) squeezed to fit beside another character. Almost every people word has it: 他 (tā), 们 (men), 位 (wèi), 什 (shén).
尔 (ěr) on the right: there for the sound. In old Chinese 尔 alone already meant "you", and 亻 was added to make clear it's a person.

IN USE: 你好 (nǐ hǎo) hello (you good) · 你叫什么名字？ (nǐ jiào shénme míngzi?) what's your name? · 你的 (nǐ de) your / yours · 你们 (nǐmen) you (plural).

PRONUNCIATION: nǐ, 3rd tone. In 你好 (nǐ hǎo) both are 3rd tones, so 你 (nǐ) rises: ní hǎo.`,
zh:`是什么："你"，一般称呼一个人；尊称用 您。字形：亻（人 的偏旁）+ 尔（古代就是"你"的意思，表音）。你好、你叫什么名字、你的、你们。`}},
  {id:"pro-03",s:"他",py:"tā",es:"él",en:"he / him",
   x:{
es:`QUÉ ES: «él», y también «lo / le». Michelle lo usa además de forma neutra para «ella», como se ve en el apunte de la clase 2 (他是 tā shì Charles 的妈妈 de māma).

EL CARÁCTER:
亻 (rén, persona, la forma aplastada de 人 rén) + 也 (yě, solo por el sonido; su dibujo original es discutido, quizá una serpiente o una vasija).

TRES CARACTERES, UN SONIDO: 他 (tā, él), 她 (tā, ella) y 它 (tā, ello, para animales y cosas) se pronuncian EXACTAMENTE igual: tā. Al hablar no hay diferencia; solo al escribir.
Hasta principios del siglo XX, 他 servía para todos. 她 y 它 se crearon después, copiando la distinción de las lenguas europeas.

PRONUNCIACIÓN: tā, primer tono, alto y plano (la bocina). t con aire, como la t inglesa de «top».`,
en:`WHAT IT IS: "he", and also "him". Michelle also uses it neutrally for "she", as in the class 2 handout (他是 tā shì Charles 的妈妈 de māma).

THE CHARACTER:
亻 (rén, person, the squeezed form of 人 rén) + 也 (yě, only for the sound; its original drawing is disputed, perhaps a snake or a vessel).

THREE CHARACTERS, ONE SOUND: 他 (tā, he), 她 (tā, she) and 它 (tā, it, for animals and things) are pronounced EXACTLY the same: tā. In speech there's no difference; only in writing.
Until the early 20th century, 他 covered all of them. 她 and 它 were created later, copying the distinction in European languages.

PRONUNCIATION: tā, 1st tone, high and flat (the car horn). Aspirated t, as in "top".`,
zh:`是什么："他"，Michelle 老师也用来泛指"她"。字形：亻 + 也（表音）。他、她、它 读音完全一样（tā），只有写法不同；二十世纪以前 他 男女通用。`}},
  {id:"pro-04",s:"她",py:"tā",es:"ella",en:"she / her",
   x:{
es:`QUÉ ES: «ella», y también «la / le».

EL CARÁCTER: 女 (nǚ, una mujer arrodillada con los brazos cruzados) + 也 (yě), el mismo componente de sonido que 他 (tā). Solo se cambió 亻 (rén, persona) por 女 (mujer).

HISTORIA: este carácter se inventó recién alrededor de 1920, cuando los escritores chinos quisieron distinguir «él» y «ella» por escrito como en las lenguas europeas. Antes se usaba 他 (tā) para los dos.

AL HABLAR NO HAY DIFERENCIA: 他 (tā) y 她 (tā) suenan igual, tā. Por eso Michelle a veces escribe 他 aunque hable de una mujer.

PLURAL: 她们 (tāmen, ellas, grupo solo de mujeres). Si hay al menos un hombre, 他们 (tāmen).

PRONUNCIACIÓN: tā, primer tono.`,
en:`WHAT IT IS: "she", and also "her".

THE CHARACTER: 女 (nǚ, a woman kneeling with her arms crossed) + 也 (yě), the same sound component as 他 (tā). Only 亻 (rén, person) was swapped for 女 (woman).

HISTORY: this character was only invented around 1920, when Chinese writers wanted to distinguish "he" and "she" in writing, as in European languages. Before that 他 (tā) covered both.

IN SPEECH THERE'S NO DIFFERENCE: 他 (tā) and 她 (tā) both sound tā. That's why Michelle sometimes writes 他 even when talking about a woman.

PLURAL: 她们 (tāmen, they, an all-female group). If there's at least one man, 他们 (tāmen).

PRONUNCIATION: tā, 1st tone.`,
zh:`是什么："她"。字形：女 + 也，只把 亻 换成 女。约 1920 年才造出来，以前 他 男女通用。读音和 他 一样。复数：她们（全是女性）。`}},
  {id:"pro-05",s:"它",py:"tā",es:"ello (animales y cosas)",en:"it",cl:"c3",
   x:{
es:`QUÉ ES: el pronombre para animales y cosas, como it en inglés. En clase: 它是橘色的 (tā shì júsè de) «es naranja», hablando de Oliver. Michelle: «it es como 它 (tā)».

POR QUÉ HACE FALTA: en español decís «es naranja» sin sujeto. En chino no existe el sujeto tácito: siempre tiene que haber un sujeto. Para un animal o una cosa, ese sujeto es 它 (tā).

EL CARÁCTER: originalmente el dibujo de una cobra con la cabeza levantada. Por eso el carácter de serpiente, 蛇 (shé), lo lleva adentro (虫 chóng + 它 tā).
Se tomó prestado como pronombre porque sonaba igual, y hoy es solo «ello».

SUENA IGUAL QUE 他 (tā) Y 她: tā. En la conversación el contexto dice si es él, ella o ello.

PRONUNCIACIÓN: tā, primer tono.`,
en:`WHAT IT IS: the pronoun for animals and things, like "it". In class: 它是橘色的 (tā shì júsè de) "it's orange", about Oliver. Michelle: "it is 它 (tā)".

WHY IT'S NEEDED: Chinese has no implied subject: there must always be one. For an animal or a thing, that subject is 它 (tā).

THE CHARACTER: originally a drawing of a cobra with its head raised. That's why the snake character, 蛇 (shé), contains it (虫 chóng + 它 tā).
It was borrowed as a pronoun because it sounded the same, and today it only means "it".

SOUNDS THE SAME AS 他 (tā) AND 她: tā. In conversation, context tells you whether it's he, she or it.

PRONUNCIATION: tā, 1st tone.`,
zh:`是什么："它"，指动物和东西：它是橘色的。中文主语不能省，所以要说 它。字形：本来是抬头的眼镜蛇，所以 蛇 里有 它。读音和 他、她 一样。`}},
  {id:"pro-06",s:"您",py:"nín",es:"usted",en:"you (polite)",
   x:{
es:`QUÉ ES: «usted», la forma respetuosa de 你 (nǐ). Para gente mayor, clientes, profesores o alguien que no conocés.

EL CARÁCTER: 你 (nǐ, vos) arriba, con 心 (xīn, corazón) abajo.
心: un corazón dibujado con sus cavidades (los tres puntos y la curva). Cuando va a la izquierda de otro carácter se aplasta en 忄 (xīn), y marca sentimientos: 情 (qíng) emoción, 忙 (máng) ocupado.
«Te llevo en el corazón»: vos puesto sobre el corazón = respeto.

USO REAL (Michelle): en Taiwán se usa bastante; en China continental menos, la gente usa 你 (nǐ) casi siempre. Las plataformas de compras chinas ni siquiera usan 您 (nín): dicen 亲 (qīn) «querido» a los clientes.
Frases comunes: 您好 (nín hǎo) hola (formal) · 您贵姓？ (nín guìxìng) ¿cuál es su apellido?

PRONUNCIACIÓN: nín, segundo tono (sube). Termina en n, no en i: no confundir con nǐ.`,
en:`WHAT IT IS: polite "you", the respectful form of 你 (nǐ). For older people, customers, teachers or someone you don't know.

THE CHARACTER: 你 (nǐ, you) on top, with 心 (xīn, heart) below.
心: a heart drawn with its chambers (the three dots and the curve). On the left of another character it squeezes into 忄 (xīn) and marks feelings: 情 (qíng) emotion, 忙 (máng) busy.
"I hold you in my heart": you placed over the heart = respect.

REAL USE (Michelle): it's used a fair amount in Taiwan; less in mainland China, where people mostly say 你 (nǐ). Chinese shopping platforms don't even use 您 (nín): they call customers 亲 (qīn) "dear".
Common phrases: 您好 (nín hǎo) hello (formal) · 您贵姓？ (nín guìxìng) what's your surname?

PRONUNCIATION: nín, 2nd tone (rising). Ends in n, not i: don't confuse with nǐ.`,
zh:`是什么："您"，你 的尊称。字形：你 下面加 心，把你放在心上。台湾较常用，大陆多说 你；购物平台常说"亲"。您好、您贵姓？发音：nín，第二声。`}},
  {id:"pro-07",s:"们",t:"們",py:"men",es:"marca de plural (personas)",en:"plural marker (people)",
   x:{
es:`QUÉ ES: la marca de plural para PERSONAS. Se agrega después del pronombre o del sustantivo: 我们 (wǒmen) nosotros, 你们 (nǐmen) ustedes, 他们 (tāmen) ellos, 老师们 (lǎoshī men) los profesores. Michelle: «el plural es lo mismo que el singular, solamente tenés que agregar 们 (men)».

LA REGLA IMPORTANTE: 们 (men) es SOLO para personas. Nunca para animales ni cosas: 猫们 (māo men) ✗, 书们 (shū men) ✗. Para ellos se usa 些 (xiē, 这些猫 zhèxiē māo) o un número.
Tampoco se combina con números: 三个老师们 (sān ge lǎoshī men) ✗ → 三个老师 (sān ge lǎoshī) ✓.

EL CARÁCTER:
亻 (rén, persona) + 门 (mén, una puerta de dos hojas vista de frente, solo por el sonido; en tradicional 門 mén se ven las dos hojas completas).
Muchas personas, «la gente de la puerta», es una buena forma de recordarlo, aunque la puerta está solo por el sonido.

PRONUNCIACIÓN: men, siempre en tono neutro: corto y suave.`,
en:`WHAT IT IS: the plural marker for PEOPLE. It goes after the pronoun or noun: 我们 (wǒmen) we, 你们 (nǐmen) you (plural), 他们 (tāmen) they, 老师们 (lǎoshī men) the teachers. Michelle: "the plural is the same as the singular, you only add 们 (men)".

THE IMPORTANT RULE: 们 (men) is ONLY for people. Never for animals or things: 猫们 (māo men) ✗, 书们 (shū men) ✗. For those, use 些 (xiē, 这些猫 zhèxiē māo) or a number.
It doesn't combine with numbers either: 三个老师们 (sān ge lǎoshī men) ✗ → 三个老师 (sān ge lǎoshī) ✓.

THE CHARACTER:
亻 (rén, person) + 门 (mén, a two-leaf door seen from the front, only for the sound; traditional 門 mén shows both leaves).
"Many people at the door" is a good way to remember it, even though the door is only for the sound.

PRONUNCIATION: men, always neutral tone: short and soft.`,
zh:`是什么：人的复数标记：我们、你们、他们、老师们。只用于人，不能说 猫们、书们；也不能和数字一起用：三个老师们 ✗。字形：亻 + 门（表音，繁体 們）。读轻声。`}},
  {id:"pro-08",s:"我们",t:"我們",py:"wǒmen",es:"nosotros",en:"we / us",
   x:{
es:`QUÉ ES: «nosotros / nosotras / nos». La regla del plural en acción: 我 (wǒ, yo) + 们 (men, plural de personas).

LAS PIEZAS:
我 (wǒ): el dibujo antiguo de un arma (una alabarda), prestado por el sonido.
们 (men): 亻 (rén, persona) + 门 (mén, puerta, por el sonido).

EN USO: 我们是朋友 (wǒmen shì péngyǒu) somos amigos · 我们的老师 (wǒmen de lǎoshī) nuestra profesora.
El verbo no cambia: 我是 (wǒ shì) / 我们是 (wǒmen shì).

EXTRA: en el norte de China también existe 咱们 zánmen, un «nosotros» que incluye a la persona con quien hablás (vos y yo). 我们 (wǒmen) puede incluirla o no.

PRONUNCIACIÓN: wǒmen, tercer tono y después neutro.`,
en:`WHAT IT IS: "we / us". The plural rule in action: 我 (wǒ, I) + 们 (men, people plural).

THE PIECES:
我 (wǒ): the ancient drawing of a weapon (a halberd), borrowed for its sound.
们 (men): 亻 (rén, person) + 门 (mén, door, for the sound).

IN USE: 我们是朋友 (wǒmen shì péngyǒu) we're friends · 我们的老师 (wǒmen de lǎoshī) our teacher.
The verb doesn't change: 我是 (wǒ shì) / 我们是 (wǒmen shì).

EXTRA: in northern China there's also 咱们 zánmen, a "we" that includes the person you're talking to (you and me). 我们 (wǒmen) may or may not include them.

PRONUNCIATION: wǒmen, 3rd tone then neutral.`,
zh:`是什么："我们"，我 + 们。动词不变：我是 / 我们是。北方还有 咱们，包括听话的人。`}},
  {id:"pro-09",s:"你们",t:"你們",py:"nǐmen",es:"ustedes",en:"you (plural)",
   x:{
es:`QUÉ ES: «ustedes» (o «vosotros» en España): «vos» en plural. 你 (nǐ) + 们 (men).

LAS PIEZAS:
你 (nǐ): 亻 (rén, persona) + 尔 (ěr, sonido; antiguamente ya significaba «vos»).
们 (men): 亻 + 门 (mén, plural de personas).

EN USO: 你们好 (nǐmen hǎo) hola a todos · 你们的 (nǐmen de) de ustedes.
Para respeto a un grupo se dice 您们 (nínmen) por escrito, pero al hablar casi no se usa: se dice 大家 (dàjiā, todos) o 各位 (gèwèi, cada uno de ustedes).

PRONUNCIACIÓN: nǐmen.`,
en:`WHAT IT IS: "you" plural. 你 (nǐ) + 们 (men).

THE PIECES:
你 (nǐ): 亻 (rén, person) + 尔 (ěr, sound; in old Chinese it already meant "you").
们 (men): 亻 + 门 (mén, people plural).

IN USE: 你们好 (nǐmen hǎo) hello everyone · 你们的 (nǐmen de) your (plural).
For respect to a group, 您们 (nínmen) exists in writing, but it's rare in speech: people say 大家 (dàjiā, everyone) or 各位 (gèwèi, each of you).

PRONUNCIATION: nǐmen.`,
zh:`是什么："你们"，你 + 们。你们好、你们的。对一群人表示尊敬，口语常说 大家、各位。`}},
  {id:"pro-10",s:"他们",t:"他們",py:"tāmen",es:"ellos",en:"they / them",
   x:{
es:`QUÉ ES: «ellos / ellas / los / les». 他 (tā) + 们 (men).

LA REGLA DE GÉNERO EN PLURAL: 他们 (tāmen) para un grupo de hombres o mixto. 她们 solo si son todas mujeres. Al hablar suenan igual (tāmen): la diferencia es solo escrita.

PARA ANIMALES Y COSAS: 它们 (tāmen, ellos, «its») existe por escrito, pero al hablar casi siempre se evita o se repite el sustantivo.

LAS PIEZAS:
他 (tā): 亻 (rén, persona) + 也 (yě, sonido).
们 (men): 亻 + 门 (mén).

EN USO: 他们是我的朋友 (tāmen shì wǒ de péngyǒu) son mis amigos · 他们的 (tāmen de) de ellos.

PRONUNCIACIÓN: tāmen. t con aire.`,
en:`WHAT IT IS: "they / them". 他 (tā) + 们 (men).

GENDER IN THE PLURAL: 他们 (tāmen) for a group of men or a mixed group. 她们 (tāmen) only if they're all women. In speech they sound the same (tāmen): the difference is written only.

FOR ANIMALS AND THINGS: 它们 (tāmen) exists in writing, but in speech people usually avoid it or repeat the noun.

THE PIECES:
他 (tā): 亻 (rén, person) + 也 (yě, sound).
们 (men): 亻 + 门 (mén).

IN USE: 他们是我的朋友 (tāmen shì wǒ de péngyǒu) they're my friends · 他们的 (tāmen de) their.

PRONUNCIATION: tāmen. Aspirated t.`,
zh:`是什么："他们"。男性或男女混合用 他们，全是女性用 她们，读音相同。动物和东西书面用 它们。`}},
  {id:"pro-11",s:"您们",t:"您們",py:"nínmen",es:"ustedes (respetuoso)",en:"you (plural, polite)",
   x:{
es:`QUÉ ES: el plural de 您 (nín, usted): «ustedes» con respeto. Está en las tarjetas de Michelle.

EL DETALLE REAL: aparece por escrito (en cartas o carteles formales), pero al hablar casi no se usa. Muchos hablantes lo sienten raro. Para dirigirse con respeto a un grupo se prefiere:
大家 dàjiā «todos» (大 dà grande + 家 jiā casa/familia) → 大家好 (dàjiā hǎo) hola a todos.
各位 gèwèi «cada uno de ustedes» → 各位老师 (gèwèi lǎoshī) estimados profesores.

LAS PIEZAS:
您 (nín): 你 (nǐ) sobre 心 (xīn, corazón): «vos en el corazón», respeto.
们 (men): 亻 (rén) + 门 (mén), plural de personas.

PRONUNCIACIÓN: nínmen.`,
en:`WHAT IT IS: the plural of 您 (nín, polite you). It's in Michelle's flashcards.

THE REAL DETAIL: it appears in writing (formal letters or signs), but it's rare in speech; many speakers find it odd. To address a group respectfully people prefer:
大家 dàjiā "everyone" (大 dà big + 家 jiā home/family) → 大家好 (dàjiā hǎo) hello everyone.
各位 gèwèi "each of you" → 各位老师 (gèwèi lǎoshī) dear teachers.

THE PIECES:
您 (nín): 你 (nǐ) over 心 (xīn, heart): "you in the heart", respect.
们 (men): 亻 (rén) + 门 (mén), people plural.

PRONUNCIATION: nínmen.`,
zh:`是什么："您们"，书面上有时见到，口语很少用。对一群人表示尊敬常说 大家、各位。`}},
  {id:"pro-12",s:"的",py:"de",es:"partícula posesiva",en:"possessive particle ('s)",
   x:{
es:`QUÉ ES: la partícula que forma los posesivos. Michelle: «este 的 (de) es como el apóstrofe s en inglés».
我的 (wǒ de) = «I's» = mi / mío · 你的 (nǐ de) tu · 他的 (tā de) su · 我爸爸的狗 (wǒ bàba de gǒu) el perro de mi papá (my dad's dog).

LA REGLA: [dueño] + 的 (de) + [cosa]. El dueño va PRIMERO, al revés que en español («el perro DE mi papá»), igual que en inglés.
Con familiares en singular se puede sacar: 我爸爸 (wǒ bàba) = 我的爸爸 (wǒ de bàba).

OTROS USOS (Michelle dijo que 的 de «tiene varios usos»): también convierte palabras en adjetivos: 它是橘色的 (tā shì júsè de, es de color naranja). Por ahora, pensalo como 's.

EL CARÁCTER: 白 (bái, blanco, de origen discutido: quizá un grano de arroz o una uña; el 日 rì de adentro no es el sol) + 勺 (sháo, un cucharón con algo adentro).
El significado original («claro, brillante») se perdió por completo. Hoy es pura gramática, y es el carácter más frecuente de todo el idioma chino.

PRONUNCIACIÓN: de, tono neutro, muy corto.`,
en:`WHAT IT IS: the particle that makes possessives. Michelle: "this 的 (de) is like the apostrophe s in English".
我的 (wǒ de) = "I's" = my / mine · 你的 (nǐ de) your · 他的 (tā de) his · 我爸爸的狗 (wǒ bàba de gǒu) my dad's dog.

THE RULE: [owner] + 的 (de) + [thing]. The owner comes FIRST, as in English.
With family members in the singular it can be dropped: 我爸爸 (wǒ bàba) = 我的爸爸 (wǒ de bàba).

OTHER USES (Michelle said 的 de "has several uses"): it also turns words into adjectives: 它是橘色的 (tā shì júsè de, it's orange-coloured). For now, think of it as 's.

THE CHARACTER: 白 (bái, white, disputed origin: perhaps a grain of rice or a fingernail; the 日 rì inside isn't the sun) + 勺 (sháo, a ladle with something in it).
The original meaning ("clear, bright") has been lost entirely. Today it's pure grammar, and it's the most frequent character in all of Chinese.

PRONUNCIATION: de, neutral tone, very short.`,
zh:`是什么：构成所有格的 的，相当于英文 's。规则：所有者 + 的 + 东西；单数亲属可以省略。也能把词变成形容词：它是橘色的。字形：白 + 勺，本义已经消失，是最常用的汉字。读轻声。`}},
  {id:"pro-13",s:"我的",py:"wǒ de",es:"mi / mío",en:"my / mine",
   x:{
es:`QUÉ ES: «mi» y también «mío». 我 (wǒ, yo) + 的 (de, 's) = «I's».

DOS USOS:
Antes de un sustantivo: 我的猫 (wǒ de māo) mi gato · 我的书 (wǒ de shū) mi libro.
Solo, al final: 这是我的 (zhè shì wǒ de) esto es mío.

CUÁNDO SE PUEDE SACAR EL 的 (de): con familiares y relaciones cercanas en singular: 我妈妈 (wǒ māma), 我朋友 (wǒ péngyǒu). Con cosas y animales se deja: 我的猫 (wǒ de māo).

LAS PIEZAS:
我 (wǒ): el dibujo de un arma antigua, prestado por el sonido.
的 (de): 白 (bái) + 勺 (sháo), la partícula posesiva.

PRONUNCIACIÓN: wǒ de.`,
en:`WHAT IT IS: "my" and also "mine". 我 (wǒ, I) + 的 (de, 's) = "I's".

TWO USES:
Before a noun: 我的猫 (wǒ de māo) my cat · 我的书 (wǒ de shū) my book.
On its own at the end: 这是我的 (zhè shì wǒ de) this is mine.

WHEN 的 (de) CAN BE DROPPED: with family and close relationships in the singular: 我妈妈 (wǒ māma), 我朋友 (wǒ péngyǒu). With things and animals it stays: 我的猫 (wǒ de māo).

THE PIECES:
我 (wǒ): the drawing of an ancient weapon, borrowed for its sound.
的 (de): 白 (bái) + 勺 (sháo), the possessive particle.

PRONUNCIATION: wǒ de.`,
zh:`是什么："我的"。用在名词前（我的猫）或单独用（这是我的）。亲属和亲近关系可以省 的：我妈妈、我朋友。`}},
  {id:"pro-14",s:"你的",py:"nǐ de",es:"tu / tuyo",en:"your / yours",
   x:{
es:`QUÉ ES: «tu» y «tuyo». 你 (nǐ, vos) + 的 (de, 's).

EN CLASE: 你的猫叫什么名字？ (nǐ de māo jiào shénme míngzi?) ¿cómo se llama tu gato? · 你的爸爸好吗？ (nǐ de bàba hǎo ma) ¿cómo está tu papá?

LA MISMA LÓGICA PARA TODOS: pronombre + 的 (de). No hay que aprender formas irregulares como «tu / tuyo / tus / tuyas»: siempre 你的 (nǐ de).

LAS PIEZAS:
你 (nǐ): 亻 (rén, persona) + 尔 (ěr, sonido).
的 (de): la partícula posesiva.

PRONUNCIACIÓN: nǐ de.`,
en:`WHAT IT IS: "your" and "yours". 你 (nǐ, you) + 的 (de, 's).

IN CLASS: 你的猫叫什么名字？ (nǐ de māo jiào shénme míngzi?) what's your cat's name? · 你的爸爸好吗？ (nǐ de bàba hǎo ma) how's your dad?

SAME LOGIC FOR EVERYONE: pronoun + 的 (de). No irregular forms: always 你的 (nǐ de).

THE PIECES:
你 (nǐ): 亻 (rén, person) + 尔 (ěr, sound).
的 (de): the possessive particle.

PRONUNCIATION: nǐ de.`,
zh:`是什么："你的"。你的猫叫什么名字？你的爸爸好吗？所有代词都是 代词 + 的。`}},
  {id:"pro-15",s:"他的",py:"tā de",es:"su / de él",en:"his",
   x:{
es:`QUÉ ES: «su» o «de él». 他 (tā) + 的 (de).

UNA VENTAJA SOBRE EL ESPAÑOL: «su» en español es ambiguo (¿de él, de ella, de usted, de ellos?). En chino no: 他的 (tā de) es de él, 她的 (tā de) de ella, 您的 (nín de) de usted, 他们的 (tāmen de) de ellos.

LAS PIEZAS:
他 (tā): 亻 (rén, persona) + 也 (yě, sonido).
的 (de): la partícula posesiva.

EJEMPLO: 他的名字 (tā de míngzi) su nombre (el nombre de él).

PRONUNCIACIÓN: tā de.`,
en:`WHAT IT IS: "his". 他 (tā) + 的 (de).

EASY COMPARED WITH SPANISH: Spanish "su" is ambiguous (his, her, your, their?). Chinese isn't: 他的 (tā de) his, 她的 (tā de) her, 您的 (nín de) your (polite), 他们的 (tāmen de) their.

THE PIECES:
他 (tā): 亻 (rén, person) + 也 (yě, sound).
的 (de): the possessive particle.

EXAMPLE: 他的名字 (tā de míngzi) his name.

PRONUNCIATION: tā de.`,
zh:`是什么："他的"。他的名字。中文的所有格很清楚：他的、她的、您的、他们的。`}},
  {id:"pro-16",s:"她的",py:"tā de",es:"su / de ella",en:"her / hers",
   x:{
es:`QUÉ ES: «su» o «de ella». 她 (tā, ella) + 的 (de).

AL HABLAR suena exactamente igual que 他的 (tā de). Solo se distingue por escrito, o por el contexto.

LAS PIEZAS:
她 (tā): 女 (nǚ, mujer arrodillada) + 也 (yě, sonido). Creado hacia 1920 para distinguir «ella».
的 (de): la partícula posesiva.

EJEMPLO: 她的妈妈 (tā de māma) su mamá (de ella).

PRONUNCIACIÓN: tā de.`,
en:`WHAT IT IS: "her" and "hers". 她 (tā, she) + 的 (de).

IN SPEECH it sounds exactly like 他的 (tā de). The difference is only written, or clear from context.

THE PIECES:
她 (tā): 女 (nǚ, kneeling woman) + 也 (yě, sound). Created around 1920 to distinguish "she".
的 (de): the possessive particle.

EXAMPLE: 她的妈妈 (tā de māma) her mom.

PRONUNCIATION: tā de.`,
zh:`是什么："她的"。读音和 他的 一样，只有写法不同。她的妈妈。`}},
  {id:"pro-17",s:"我们的",t:"我們的",py:"wǒmen de",es:"nuestro",en:"our / ours",
   x:{
es:`QUÉ ES: «nuestro / nuestra / nuestros». 我们 (wǒmen, nosotros) + 的 (de).

LA LÓGICA EN DOS PASOS: primero el plural (我 wǒ + 们 men), después el posesivo (+ 的 de). Funciona igual con todos: 你们的 (nǐmen de), 他们的 (tāmen de).

EN USO: 我们的老师 (wǒmen de lǎoshī) nuestra profesora · 我们的家 (wǒmen de jiā) nuestra casa.
Con familia en plural el 的 (de) NO se saca: 我们的爸爸 (wǒmen de bàba), mientras que en singular sí (我爸爸 wǒ bàba).

PRONUNCIACIÓN: wǒmen de. Dos sílabas suaves al final.`,
en:`WHAT IT IS: "our" and "ours". 我们 (wǒmen, we) + 的 (de).

THE LOGIC IN TWO STEPS: first the plural (我 wǒ + 们 men), then the possessive (+ 的 de). It works the same for everyone: 你们的 (nǐmen de), 他们的 (tāmen de).

IN USE: 我们的老师 (wǒmen de lǎoshī) our teacher · 我们的家 (wǒmen de jiā) our home.
With family in the plural 的 (de) is NOT dropped: 我们的爸爸 (wǒmen de bàba), whereas in the singular it can be (我爸爸 wǒ bàba).

PRONUNCIATION: wǒmen de. Two soft syllables at the end.`,
zh:`是什么："我们的"：先加 们 变复数，再加 的。我们的老师。复数时 的 不省略。`}},
  {id:"pro-18",s:"你们的",t:"你們的",py:"nǐmen de",es:"de ustedes",en:"your (plural)",
   x:{
es:`QUÉ ES: «de ustedes» (vuestro). 你们 (nǐmen) + 的 (de).

EN USO: 你们的老师 (nǐmen de lǎoshī) la profesora de ustedes · 这是你们的吗？ (zhè shì nǐmen de ma) ¿esto es de ustedes?

LA MISMA RECETA: pronombre → + 们 (men, plural) → + 的 (de, posesivo).

PRONUNCIACIÓN: nǐmen de.`,
en:`WHAT IT IS: "your" for several people. 你们 (nǐmen) + 的 (de).

IN USE: 你们的老师 (nǐmen de lǎoshī) your teacher · 这是你们的吗？ (zhè shì nǐmen de ma) is this yours?

SAME RECIPE: pronoun → + 们 (men, plural) → + 的 (de, possessive).

PRONUNCIATION: nǐmen de.`,
zh:`是什么："你们的"。代词 + 们 + 的。你们的老师、这是你们的吗？`}},
  {id:"pro-19",s:"他们的",t:"他們的",py:"tāmen de",es:"su / de ellos",en:"their / theirs",
   x:{
es:`QUÉ ES: «su» o «de ellos / de ellas». 他们 (tāmen) + 的 (de).

GÉNERO: 他们的 (tāmen de) para hombres o grupo mixto; 她们的 (tāmen de) solo mujeres. Suenan igual.

EN USO: 他们的孩子 (tāmen de háizi) los hijos de ellos · 他们的房子 (tāmen de fángzi) la casa de ellos.

PRONUNCIACIÓN: tāmen de.`,
en:`WHAT IT IS: "their" and "theirs". 他们 (tāmen) + 的 (de).

GENDER: 他们的 (tāmen de) for men or a mixed group; 她们的 (tāmen de) for women only. They sound the same.

IN USE: 他们的孩子 (tāmen de háizi) their children · 他们的房子 (tāmen de fángzi) their house.

PRONUNCIATION: tāmen de.`,
zh:`是什么："他们的"。全是女性写 她们的，读音一样。他们的孩子、他们的房子。`}},
  {id:"pro-20",s:"您的",py:"nín de",es:"su (de usted)",en:"your (polite)",
   x:{
es:`QUÉ ES: «su» dirigido a «usted», con respeto. 您 (nín) + 的 (de).

DÓNDE LO VAS A OÍR: en atención al cliente, carteles y situaciones formales: 您的名字 (nín de míngzi) su nombre · 您的订单 (nín de dìngdān) su pedido.

LAS PIEZAS:
您 (nín): 你 (nǐ, vos) sobre 心 (xīn, corazón): respeto.
的 (de): la partícula posesiva.

PRONUNCIACIÓN: nín de. Segundo tono (sube), con n al final.`,
en:`WHAT IT IS: polite "your". 您 (nín) + 的 (de).

WHERE YOU'LL HEAR IT: customer service, signs and formal situations: 您的名字 (nín de míngzi) your name · 您的订单 (nín de dìngdān) your order.

THE PIECES:
您 (nín): 你 (nǐ, you) over 心 (xīn, heart): respect.
的 (de): the possessive particle.

PRONUNCIATION: nín de. 2nd tone (rising), ending in n.`,
zh:`是什么："您的"，尊称。常见于服务场合：您的名字、您的订单。`}},
  {id:"pro-21",s:"我爸爸 = 我的爸爸",py:"wǒ bàba = wǒ de bàba",es:"mi papá",en:"my dad",cl:"c2",say:"我爸爸",
   x:{
es:`LA REGLA (clase 2): con familiares y relaciones cercanas en SINGULAR, el 的 (de) se puede sacar. Las dos formas son correctas:
我爸爸 (wǒ bàba) = 我的爸爸 (wǒ de bàba) mi papá
你妈妈 (nǐ māma) = 你的妈妈 (nǐ de māma) tu mamá
我朋友 (wǒ péngyǒu) = 我的朋友 (wǒ de péngyǒu) mi amigo
¿Por qué? Michelle: para que no suene todo «de-de-de», sobre todo en frases largas.

CUÁNDO NO SE SACA:
Con cosas y animales: 我的猫 (wǒ de māo), 我的书 (wǒ de shū, no 我猫 wǒ māo).
En plural: 我们的爸爸 (wǒmen de bàba).
Cuando ya hay otro 的 (de) en la cadena: 我爸爸的狗 (wǒ bàba de gǒu, el 的 entre 爸爸 bàba y 狗 gǒu se queda).

EL CARÁCTER 爸 (bà): 父 (fù) arriba (una mano sosteniendo un hacha o un bastón: el que trabaja y manda; es la palabra antigua para «padre») + 巴 abajo (solo por el sonido, ba).
Como casi todas las palabras de familia, se repite: 爸爸 (bàba), 妈妈 (māma), 哥哥 (gēge).

PRONUNCIACIÓN: wǒ bàba. La b sin aire: como la p de «speak».`,
en:`THE RULE (class 2): with family and close relationships in the SINGULAR, 的 (de) can be dropped. Both forms are correct:
我爸爸 (wǒ bàba) = 我的爸爸 (wǒ de bàba) my dad
你妈妈 (nǐ māma) = 你的妈妈 (nǐ de māma) your mom
我朋友 (wǒ péngyǒu) = 我的朋友 (wǒ de péngyǒu) my friend
Why? Michelle: so it doesn't sound "de-de-de", especially in long phrases.

WHEN IT ISN'T DROPPED:
With things and animals: 我的猫 (wǒ de māo), 我的书 (wǒ de shū, not 我猫 wǒ māo).
In the plural: 我们的爸爸 (wǒmen de bàba).
When there's another 的 (de) in the chain: 我爸爸的狗 (wǒ bàba de gǒu, the 的 between 爸爸 bàba and 狗 gǒu stays).

THE CHARACTER 爸 (bà): 父 (fù) on top (a hand holding an axe or stick: the one who works and gives orders; the old word for "father") + 巴 below (only for the sound, ba).
Like almost every family word, it's doubled: 爸爸 (bàba), 妈妈 (māma), 哥哥 (gēge).

PRONUNCIATION: wǒ bàba. Unaspirated b: like the p in "speak".`,
zh:`规则（第二课）：单数的亲属和亲近关系可以省 的：我爸爸 = 我的爸爸、我朋友。不省的情况：东西和动物（我的猫）、复数（我们的爸爸）、链条中间（我爸爸的狗）。爸：父（拿斧的手）+ 巴（表音）。`}}
  ]
});
