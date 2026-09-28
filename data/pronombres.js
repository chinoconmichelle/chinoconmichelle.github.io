/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"pronombres", glyph:"我",
  name:{"es": "Pronombres y posesivos", "en": "Pronouns & possessives", "zh": "代词"},
  cl:"c1",
  cards:[
  {id:"pro-01",s:"我",py:"wǒ",es:"yo",en:"I / me",
   x:{
es:`QUÉ ES: «yo», y también «me / mí». El chino no cambia la palabra según la función: 我叫… (yo me llamo), 妈妈叫我 (mamá ME llama), 给我 (a MÍ).

EL CARÁCTER: originalmente el dibujo de un arma de asta con hoja dentada, una especie de alabarda: a la izquierda 手 (una mano), a la derecha 戈 (una lanza con gancho).
No tiene ninguna relación con la idea de «yo»: se tomó prestado solo porque sonaba igual. Es uno de los casos donde conviene aprenderlo como dibujo, sin inventarle una historia.

EL SISTEMA DE PRONOMBRES (clase 1): es muy simple.
我 yo · 你 vos · 他 él (o ella)
Plural: se agrega 们 → 我们, 你们, 他们.
Posesivo: se agrega 的 → 我的, 你的, 他的.
No hay más formas que aprender.

PRONUNCIACIÓN: wǒ, tercer tono (baja y sube). Cuando va antes de otro tercer tono sube: 我很好 wó hěn hǎo.`,
en:`WHAT IT IS: "I", and also "me". Chinese doesn't change the word by function: 我叫… (I'm called), 妈妈叫我 (mom calls ME), 给我 (to ME).

THE CHARACTER: originally a drawing of a pole weapon with a serrated blade, a kind of halberd: 手 (a hand) on the left, 戈 (a hooked spear) on the right.
It has nothing to do with the idea of "I": it was borrowed only because it sounded the same. It's one of those cases where you learn it as a picture and don't invent a story.

THE PRONOUN SYSTEM (class 1): very simple.
我 I · 你 you · 他 he (or she)
Plural: add 们 → 我们, 你们, 他们.
Possessive: add 的 → 我的, 你的, 他的.
There are no other forms to learn.

PRONUNCIATION: wǒ, 3rd tone (dips and rises). Before another 3rd tone it rises: 我很好 wó hěn hǎo.`,
zh:`是什么："我"，主格宾格都用 我。字形：本来是带锯齿刃的长柄兵器（手 + 戈），只是借音，和"自己"的意思无关。
代词系统很简单：我、你、他；复数加 们；所有格加 的。发音：wǒ，第三声。`}},
  {id:"pro-02",s:"你",py:"nǐ",es:"vos / tú",en:"you",
   x:{
es:`QUÉ ES: «vos / tú / te / ti», para una sola persona, en trato normal. Para respeto se usa 您 (usted).

EL CARÁCTER:
亻 a la izquierda: es 人 (una persona caminando vista de costado, las dos piernas) aplastado para caber al lado de otro carácter. Casi todas las palabras de gente lo llevan: 他, 们, 位, 什.
尔 a la derecha: está por el sonido. Antiguamente 尔 solo ya significaba «vos», y se le agregó 亻 para dejar claro que es una persona.

EN USO: 你好 hola (vos bien) · 你叫什么名字？ ¿cómo te llamás? · 你的 tu / tuyo · 你们 ustedes.

PRONUNCIACIÓN: nǐ, tercer tono. En 你好 los dos son terceros tonos seguidos, así que 你 sube: ní hǎo.`,
en:`WHAT IT IS: "you" for one person, in normal register. For respect, use 您.

THE CHARACTER:
亻 on the left: it's 人 (a person walking, seen from the side, the two legs) squeezed to fit beside another character. Almost every people word has it: 他, 们, 位, 什.
尔 on the right: there for the sound. In old Chinese 尔 alone already meant "you", and 亻 was added to make clear it's a person.

IN USE: 你好 hello (you good) · 你叫什么名字？ what's your name? · 你的 your / yours · 你们 you (plural).

PRONUNCIATION: nǐ, 3rd tone. In 你好 both are 3rd tones, so 你 rises: ní hǎo.`,
zh:`是什么："你"，一般称呼一个人；尊称用 您。字形：亻（人 的偏旁）+ 尔（古代就是"你"的意思，表音）。你好、你叫什么名字、你的、你们。`}},
  {id:"pro-03",s:"他",py:"tā",es:"él",en:"he / him",
   x:{
es:`QUÉ ES: «él», y también «lo / le». Michelle lo usa además de forma neutra para «ella», como se ve en el apunte de la clase 2 (他是 Charles 的妈妈).

EL CARÁCTER:
亻 (persona, la forma aplastada de 人) + 也 (solo por el sonido; su dibujo original es discutido, quizá una serpiente o una vasija).

TRES CARACTERES, UN SONIDO: 他 (él), 她 (ella) y 它 (ello, para animales y cosas) se pronuncian EXACTAMENTE igual: tā. Al hablar no hay diferencia; solo al escribir.
Hasta principios del siglo XX, 他 servía para todos. 她 y 它 se crearon después, copiando la distinción de las lenguas europeas.

PRONUNCIACIÓN: tā, primer tono, alto y plano (la bocina). t con aire, como la t inglesa de «top».`,
en:`WHAT IT IS: "he", and also "him". Michelle also uses it neutrally for "she", as in the class 2 handout (他是 Charles 的妈妈).

THE CHARACTER:
亻 (person, the squeezed form of 人) + 也 (only for the sound; its original drawing is disputed, perhaps a snake or a vessel).

THREE CHARACTERS, ONE SOUND: 他 (he), 她 (she) and 它 (it, for animals and things) are pronounced EXACTLY the same: tā. In speech there's no difference; only in writing.
Until the early 20th century, 他 covered all of them. 她 and 它 were created later, copying the distinction in European languages.

PRONUNCIATION: tā, 1st tone, high and flat (the car horn). Aspirated t, as in "top".`,
zh:`是什么："他"，Michelle 老师也用来泛指"她"。字形：亻 + 也（表音）。他、她、它 读音完全一样（tā），只有写法不同；二十世纪以前 他 男女通用。`}},
  {id:"pro-04",s:"她",py:"tā",es:"ella",en:"she / her",
   x:{
es:`QUÉ ES: «ella», y también «la / le».

EL CARÁCTER: 女 (una mujer arrodillada con los brazos cruzados) + 也, el mismo componente de sonido que 他. Solo se cambió 亻 (persona) por 女 (mujer).

HISTORIA: este carácter se inventó recién alrededor de 1920, cuando los escritores chinos quisieron distinguir «él» y «ella» por escrito como en las lenguas europeas. Antes se usaba 他 para los dos.

AL HABLAR NO HAY DIFERENCIA: 他 y 她 suenan igual, tā. Por eso Michelle a veces escribe 他 aunque hable de una mujer.

PLURAL: 她们 (ellas, grupo solo de mujeres). Si hay al menos un hombre, 他们.

PRONUNCIACIÓN: tā, primer tono.`,
en:`WHAT IT IS: "she", and also "her".

THE CHARACTER: 女 (a woman kneeling with her arms crossed) + 也, the same sound component as 他. Only 亻 (person) was swapped for 女 (woman).

HISTORY: this character was only invented around 1920, when Chinese writers wanted to distinguish "he" and "she" in writing, as in European languages. Before that 他 covered both.

IN SPEECH THERE'S NO DIFFERENCE: 他 and 她 both sound tā. That's why Michelle sometimes writes 他 even when talking about a woman.

PLURAL: 她们 (they, an all-female group). If there's at least one man, 他们.

PRONUNCIATION: tā, 1st tone.`,
zh:`是什么："她"。字形：女 + 也，只把 亻 换成 女。约 1920 年才造出来，以前 他 男女通用。读音和 他 一样。复数：她们（全是女性）。`}},
  {id:"pro-05",s:"它",py:"tā",es:"ello (animales y cosas)",en:"it",cl:"c3",
   x:{
es:`QUÉ ES: el pronombre para animales y cosas, como it en inglés. En clase: 它是橘色的 «es naranja», hablando de Oliver. Michelle: «it es como 它».

POR QUÉ HACE FALTA: en español decís «es naranja» sin sujeto. En chino no existe el sujeto tácito: siempre tiene que haber un sujeto. Para un animal o una cosa, ese sujeto es 它.

EL CARÁCTER: originalmente el dibujo de una cobra con la cabeza levantada. Por eso el carácter de serpiente, 蛇, lo lleva adentro (虫 + 它).
Se tomó prestado como pronombre porque sonaba igual, y hoy es solo «ello».

SUENA IGUAL QUE 他 Y 她: tā. En la conversación el contexto dice si es él, ella o ello.

PRONUNCIACIÓN: tā, primer tono.`,
en:`WHAT IT IS: the pronoun for animals and things, like "it". In class: 它是橘色的 "it's orange", about Oliver. Michelle: "it is 它".

WHY IT'S NEEDED: Chinese has no implied subject: there must always be one. For an animal or a thing, that subject is 它.

THE CHARACTER: originally a drawing of a cobra with its head raised. That's why the snake character, 蛇, contains it (虫 + 它).
It was borrowed as a pronoun because it sounded the same, and today it only means "it".

SOUNDS THE SAME AS 他 AND 她: tā. In conversation, context tells you whether it's he, she or it.

PRONUNCIATION: tā, 1st tone.`,
zh:`是什么："它"，指动物和东西：它是橘色的。中文主语不能省，所以要说 它。字形：本来是抬头的眼镜蛇，所以 蛇 里有 它。读音和 他、她 一样。`}},
  {id:"pro-06",s:"您",py:"nín",es:"usted",en:"you (polite)",
   x:{
es:`QUÉ ES: «usted», la forma respetuosa de 你. Para gente mayor, clientes, profesores o alguien que no conocés.

EL CARÁCTER: 你 (vos) arriba, con 心 (corazón) abajo.
心: un corazón dibujado con sus cavidades (los tres puntos y la curva). Cuando va a la izquierda de otro carácter se aplasta en 忄, y marca sentimientos: 情 emoción, 忙 ocupado.
«Te llevo en el corazón»: vos puesto sobre el corazón = respeto.

USO REAL (Michelle): en Taiwán se usa bastante; en China continental menos, la gente usa 你 casi siempre. Las plataformas de compras chinas ni siquiera usan 您: dicen 亲 «querido» a los clientes.
Frases comunes: 您好 hola (formal) · 您贵姓？ ¿cuál es su apellido?

PRONUNCIACIÓN: nín, segundo tono (sube). Termina en n, no en i: no confundir con nǐ.`,
en:`WHAT IT IS: polite "you", the respectful form of 你. For older people, customers, teachers or someone you don't know.

THE CHARACTER: 你 (you) on top, with 心 (heart) below.
心: a heart drawn with its chambers (the three dots and the curve). On the left of another character it squeezes into 忄 and marks feelings: 情 emotion, 忙 busy.
"I hold you in my heart": you placed over the heart = respect.

REAL USE (Michelle): it's used a fair amount in Taiwan; less in mainland China, where people mostly say 你. Chinese shopping platforms don't even use 您: they call customers 亲 "dear".
Common phrases: 您好 hello (formal) · 您贵姓？ what's your surname?

PRONUNCIATION: nín, 2nd tone (rising). Ends in n, not i: don't confuse with nǐ.`,
zh:`是什么："您"，你 的尊称。字形：你 下面加 心，把你放在心上。台湾较常用，大陆多说 你；购物平台常说"亲"。您好、您贵姓？发音：nín，第二声。`}},
  {id:"pro-07",s:"们",t:"們",py:"men",es:"marca de plural (personas)",en:"plural marker (people)",
   x:{
es:`QUÉ ES: la marca de plural para PERSONAS. Se agrega después del pronombre o del sustantivo: 我们 nosotros, 你们 ustedes, 他们 ellos, 老师们 los profesores. Michelle: «el plural es lo mismo que el singular, solamente tenés que agregar 们».

LA REGLA IMPORTANTE: 们 es SOLO para personas. Nunca para animales ni cosas: 猫们 ✗, 书们 ✗. Para ellos se usa 些 (这些猫) o un número.
Tampoco se combina con números: 三个老师们 ✗ → 三个老师 ✓.

EL CARÁCTER:
亻 (persona) + 门 (una puerta de dos hojas vista de frente, solo por el sonido; en tradicional 門 se ven las dos hojas completas).
Muchas personas, «la gente de la puerta», es una buena forma de recordarlo, aunque la puerta está solo por el sonido.

PRONUNCIACIÓN: men, siempre en tono neutro: corto y suave.`,
en:`WHAT IT IS: the plural marker for PEOPLE. It goes after the pronoun or noun: 我们 we, 你们 you (plural), 他们 they, 老师们 the teachers. Michelle: "the plural is the same as the singular, you only add 们".

THE IMPORTANT RULE: 们 is ONLY for people. Never for animals or things: 猫们 ✗, 书们 ✗. For those, use 些 (这些猫) or a number.
It doesn't combine with numbers either: 三个老师们 ✗ → 三个老师 ✓.

THE CHARACTER:
亻 (person) + 门 (a two-leaf door seen from the front, only for the sound; traditional 門 shows both leaves).
"Many people at the door" is a good way to remember it, even though the door is only for the sound.

PRONUNCIATION: men, always neutral tone: short and soft.`,
zh:`是什么：人的复数标记：我们、你们、他们、老师们。只用于人，不能说 猫们、书们；也不能和数字一起用：三个老师们 ✗。字形：亻 + 门（表音，繁体 們）。读轻声。`}},
  {id:"pro-08",s:"我们",t:"我們",py:"wǒmen",es:"nosotros",en:"we / us",
   x:{
es:`QUÉ ES: «nosotros / nosotras / nos». La regla del plural en acción: 我 (yo) + 们 (plural de personas).

LAS PIEZAS:
我: el dibujo antiguo de un arma (una alabarda), prestado por el sonido.
们: 亻 (persona) + 门 (puerta, por el sonido).

EN USO: 我们是朋友 somos amigos · 我们的老师 nuestra profesora.
El verbo no cambia: 我是 / 我们是.

EXTRA: en el norte de China también existe 咱们 zánmen, un «nosotros» que incluye a la persona con quien hablás (vos y yo). 我们 puede incluirla o no.

PRONUNCIACIÓN: wǒmen, tercer tono y después neutro.`,
en:`WHAT IT IS: "we / us". The plural rule in action: 我 (I) + 们 (people plural).

THE PIECES:
我: the ancient drawing of a weapon (a halberd), borrowed for its sound.
们: 亻 (person) + 门 (door, for the sound).

IN USE: 我们是朋友 we're friends · 我们的老师 our teacher.
The verb doesn't change: 我是 / 我们是.

EXTRA: in northern China there's also 咱们 zánmen, a "we" that includes the person you're talking to (you and me). 我们 may or may not include them.

PRONUNCIATION: wǒmen, 3rd tone then neutral.`,
zh:`是什么："我们"，我 + 们。动词不变：我是 / 我们是。北方还有 咱们，包括听话的人。`}},
  {id:"pro-09",s:"你们",t:"你們",py:"nǐmen",es:"ustedes",en:"you (plural)",
   x:{
es:`QUÉ ES: «ustedes» (o «vosotros» en España): «vos» en plural. 你 + 们.

LAS PIEZAS:
你: 亻 (persona) + 尔 (sonido; antiguamente ya significaba «vos»).
们: 亻 + 门 (plural de personas).

EN USO: 你们好 hola a todos · 你们的 de ustedes.
Para respeto a un grupo se dice 您们 por escrito, pero al hablar casi no se usa: se dice 大家 (todos) o 各位 (cada uno de ustedes).

PRONUNCIACIÓN: nǐmen.`,
en:`WHAT IT IS: "you" plural. 你 + 们.

THE PIECES:
你: 亻 (person) + 尔 (sound; in old Chinese it already meant "you").
们: 亻 + 门 (people plural).

IN USE: 你们好 hello everyone · 你们的 your (plural).
For respect to a group, 您们 exists in writing, but it's rare in speech: people say 大家 (everyone) or 各位 (each of you).

PRONUNCIATION: nǐmen.`,
zh:`是什么："你们"，你 + 们。你们好、你们的。对一群人表示尊敬，口语常说 大家、各位。`}},
  {id:"pro-10",s:"他们",t:"他們",py:"tāmen",es:"ellos",en:"they / them",
   x:{
es:`QUÉ ES: «ellos / ellas / los / les». 他 + 们.

LA REGLA DE GÉNERO EN PLURAL: 他们 para un grupo de hombres o mixto. 她们 solo si son todas mujeres. Al hablar suenan igual (tāmen): la diferencia es solo escrita.

PARA ANIMALES Y COSAS: 它们 (ellos, «its») existe por escrito, pero al hablar casi siempre se evita o se repite el sustantivo.

LAS PIEZAS:
他: 亻 (persona) + 也 (sonido).
们: 亻 + 门.

EN USO: 他们是我的朋友 son mis amigos · 他们的 de ellos.

PRONUNCIACIÓN: tāmen. t con aire.`,
en:`WHAT IT IS: "they / them". 他 + 们.

GENDER IN THE PLURAL: 他们 for a group of men or a mixed group. 她们 only if they're all women. In speech they sound the same (tāmen): the difference is written only.

FOR ANIMALS AND THINGS: 它们 exists in writing, but in speech people usually avoid it or repeat the noun.

THE PIECES:
他: 亻 (person) + 也 (sound).
们: 亻 + 门.

IN USE: 他们是我的朋友 they're my friends · 他们的 their.

PRONUNCIATION: tāmen. Aspirated t.`,
zh:`是什么："他们"。男性或男女混合用 他们，全是女性用 她们，读音相同。动物和东西书面用 它们。`}},
  {id:"pro-11",s:"您们",t:"您們",py:"nínmen",es:"ustedes (respetuoso)",en:"you (plural, polite)",
   x:{
es:`QUÉ ES: el plural de 您 (usted): «ustedes» con respeto. Está en las tarjetas de Michelle.

EL DETALLE REAL: aparece por escrito (en cartas o carteles formales), pero al hablar casi no se usa. Muchos hablantes lo sienten raro. Para dirigirse con respeto a un grupo se prefiere:
大家 dàjiā «todos» (大 grande + 家 casa/familia) → 大家好 hola a todos.
各位 gèwèi «cada uno de ustedes» → 各位老师 estimados profesores.

LAS PIEZAS:
您: 你 sobre 心 (corazón): «vos en el corazón», respeto.
们: 亻 + 门, plural de personas.

PRONUNCIACIÓN: nínmen.`,
en:`WHAT IT IS: the plural of 您 (polite you). It's in Michelle's flashcards.

THE REAL DETAIL: it appears in writing (formal letters or signs), but it's rare in speech; many speakers find it odd. To address a group respectfully people prefer:
大家 dàjiā "everyone" (大 big + 家 home/family) → 大家好 hello everyone.
各位 gèwèi "each of you" → 各位老师 dear teachers.

THE PIECES:
您: 你 over 心 (heart): "you in the heart", respect.
们: 亻 + 门, people plural.

PRONUNCIATION: nínmen.`,
zh:`是什么："您们"，书面上有时见到，口语很少用。对一群人表示尊敬常说 大家、各位。`}},
  {id:"pro-12",s:"的",py:"de",es:"partícula posesiva",en:"possessive particle ('s)",
   x:{
es:`QUÉ ES: la partícula que forma los posesivos. Michelle: «este 的 es como el apóstrofe s en inglés».
我的 = «I's» = mi / mío · 你的 tu · 他的 su · 我爸爸的狗 el perro de mi papá (my dad's dog).

LA REGLA: [dueño] + 的 + [cosa]. El dueño va PRIMERO, al revés que en español («el perro DE mi papá»), igual que en inglés.
Con familiares en singular se puede sacar: 我爸爸 = 我的爸爸.

OTROS USOS (Michelle dijo que 的 «tiene varios usos»): también convierte palabras en adjetivos: 它是橘色的 (es de color naranja). Por ahora, pensalo como 's.

EL CARÁCTER: 白 (blanco, de origen discutido: quizá un grano de arroz o una uña; el 日 de adentro no es el sol) + 勺 (un cucharón con algo adentro).
El significado original («claro, brillante») se perdió por completo. Hoy es pura gramática, y es el carácter más frecuente de todo el idioma chino.

PRONUNCIACIÓN: de, tono neutro, muy corto.`,
en:`WHAT IT IS: the particle that makes possessives. Michelle: "this 的 is like the apostrophe s in English".
我的 = "I's" = my / mine · 你的 your · 他的 his · 我爸爸的狗 my dad's dog.

THE RULE: [owner] + 的 + [thing]. The owner comes FIRST, as in English.
With family members in the singular it can be dropped: 我爸爸 = 我的爸爸.

OTHER USES (Michelle said 的 "has several uses"): it also turns words into adjectives: 它是橘色的 (it's orange-coloured). For now, think of it as 's.

THE CHARACTER: 白 (white, disputed origin: perhaps a grain of rice or a fingernail; the 日 inside isn't the sun) + 勺 (a ladle with something in it).
The original meaning ("clear, bright") has been lost entirely. Today it's pure grammar, and it's the most frequent character in all of Chinese.

PRONUNCIATION: de, neutral tone, very short.`,
zh:`是什么：构成所有格的 的，相当于英文 's。规则：所有者 + 的 + 东西；单数亲属可以省略。也能把词变成形容词：它是橘色的。字形：白 + 勺，本义已经消失，是最常用的汉字。读轻声。`}},
  {id:"pro-13",s:"我的",py:"wǒ de",es:"mi / mío",en:"my / mine",
   x:{
es:`QUÉ ES: «mi» y también «mío». 我 (yo) + 的 ('s) = «I's».

DOS USOS:
Antes de un sustantivo: 我的猫 mi gato · 我的书 mi libro.
Solo, al final: 这是我的 esto es mío.

CUÁNDO SE PUEDE SACAR EL 的: con familiares y relaciones cercanas en singular: 我妈妈, 我朋友. Con cosas y animales se deja: 我的猫.

LAS PIEZAS:
我: el dibujo de un arma antigua, prestado por el sonido.
的: 白 + 勺, la partícula posesiva.

PRONUNCIACIÓN: wǒ de.`,
en:`WHAT IT IS: "my" and also "mine". 我 (I) + 的 ('s) = "I's".

TWO USES:
Before a noun: 我的猫 my cat · 我的书 my book.
On its own at the end: 这是我的 this is mine.

WHEN 的 CAN BE DROPPED: with family and close relationships in the singular: 我妈妈, 我朋友. With things and animals it stays: 我的猫.

THE PIECES:
我: the drawing of an ancient weapon, borrowed for its sound.
的: 白 + 勺, the possessive particle.

PRONUNCIATION: wǒ de.`,
zh:`是什么："我的"。用在名词前（我的猫）或单独用（这是我的）。亲属和亲近关系可以省 的：我妈妈、我朋友。`}},
  {id:"pro-14",s:"你的",py:"nǐ de",es:"tu / tuyo",en:"your / yours",
   x:{
es:`QUÉ ES: «tu» y «tuyo». 你 (vos) + 的 ('s).

EN CLASE: 你的猫叫什么名字？ ¿cómo se llama tu gato? · 你的爸爸好吗？ ¿cómo está tu papá?

LA MISMA LÓGICA PARA TODOS: pronombre + 的. No hay que aprender formas irregulares como «tu / tuyo / tus / tuyas»: siempre 你的.

LAS PIEZAS:
你: 亻 (persona) + 尔 (sonido).
的: la partícula posesiva.

PRONUNCIACIÓN: nǐ de.`,
en:`WHAT IT IS: "your" and "yours". 你 (you) + 的 ('s).

IN CLASS: 你的猫叫什么名字？ what's your cat's name? · 你的爸爸好吗？ how's your dad?

SAME LOGIC FOR EVERYONE: pronoun + 的. No irregular forms: always 你的.

THE PIECES:
你: 亻 (person) + 尔 (sound).
的: the possessive particle.

PRONUNCIATION: nǐ de.`,
zh:`是什么："你的"。你的猫叫什么名字？你的爸爸好吗？所有代词都是 代词 + 的。`}},
  {id:"pro-15",s:"他的",py:"tā de",es:"su / de él",en:"his",
   x:{
es:`QUÉ ES: «su» o «de él». 他 + 的.

UNA VENTAJA SOBRE EL ESPAÑOL: «su» en español es ambiguo (¿de él, de ella, de usted, de ellos?). En chino no: 他的 es de él, 她的 de ella, 您的 de usted, 他们的 de ellos.

LAS PIEZAS:
他: 亻 (persona) + 也 (sonido).
的: la partícula posesiva.

EJEMPLO: 他的名字 su nombre (el nombre de él).

PRONUNCIACIÓN: tā de.`,
en:`WHAT IT IS: "his". 他 + 的.

EASY COMPARED WITH SPANISH: Spanish "su" is ambiguous (his, her, your, their?). Chinese isn't: 他的 his, 她的 her, 您的 your (polite), 他们的 their.

THE PIECES:
他: 亻 (person) + 也 (sound).
的: the possessive particle.

EXAMPLE: 他的名字 his name.

PRONUNCIATION: tā de.`,
zh:`是什么："他的"。他的名字。中文的所有格很清楚：他的、她的、您的、他们的。`}},
  {id:"pro-16",s:"她的",py:"tā de",es:"su / de ella",en:"her / hers",
   x:{
es:`QUÉ ES: «su» o «de ella». 她 (ella) + 的.

AL HABLAR suena exactamente igual que 他的 (tā de). Solo se distingue por escrito, o por el contexto.

LAS PIEZAS:
她: 女 (mujer arrodillada) + 也 (sonido). Creado hacia 1920 para distinguir «ella».
的: la partícula posesiva.

EJEMPLO: 她的妈妈 su mamá (de ella).

PRONUNCIACIÓN: tā de.`,
en:`WHAT IT IS: "her" and "hers". 她 (she) + 的.

IN SPEECH it sounds exactly like 他的 (tā de). The difference is only written, or clear from context.

THE PIECES:
她: 女 (kneeling woman) + 也 (sound). Created around 1920 to distinguish "she".
的: the possessive particle.

EXAMPLE: 她的妈妈 her mom.

PRONUNCIATION: tā de.`,
zh:`是什么："她的"。读音和 他的 一样，只有写法不同。她的妈妈。`}},
  {id:"pro-17",s:"我们的",t:"我們的",py:"wǒmen de",es:"nuestro",en:"our / ours",
   x:{
es:`QUÉ ES: «nuestro / nuestra / nuestros». 我们 (nosotros) + 的.

LA LÓGICA EN DOS PASOS: primero el plural (我 + 们), después el posesivo (+ 的). Funciona igual con todos: 你们的, 他们的.

EN USO: 我们的老师 nuestra profesora · 我们的家 nuestra casa.
Con familia en plural el 的 NO se saca: 我们的爸爸, mientras que en singular sí (我爸爸).

PRONUNCIACIÓN: wǒmen de. Dos sílabas suaves al final.`,
en:`WHAT IT IS: "our" and "ours". 我们 (we) + 的.

THE LOGIC IN TWO STEPS: first the plural (我 + 们), then the possessive (+ 的). It works the same for everyone: 你们的, 他们的.

IN USE: 我们的老师 our teacher · 我们的家 our home.
With family in the plural 的 is NOT dropped: 我们的爸爸, whereas in the singular it can be (我爸爸).

PRONUNCIATION: wǒmen de. Two soft syllables at the end.`,
zh:`是什么："我们的"：先加 们 变复数，再加 的。我们的老师。复数时 的 不省略。`}},
  {id:"pro-18",s:"你们的",t:"你們的",py:"nǐmen de",es:"de ustedes",en:"your (plural)",
   x:{
es:`QUÉ ES: «de ustedes» (vuestro). 你们 + 的.

EN USO: 你们的老师 la profesora de ustedes · 这是你们的吗？ ¿esto es de ustedes?

LA MISMA RECETA: pronombre → + 们 (plural) → + 的 (posesivo).

PRONUNCIACIÓN: nǐmen de.`,
en:`WHAT IT IS: "your" for several people. 你们 + 的.

IN USE: 你们的老师 your teacher · 这是你们的吗？ is this yours?

SAME RECIPE: pronoun → + 们 (plural) → + 的 (possessive).

PRONUNCIATION: nǐmen de.`,
zh:`是什么："你们的"。代词 + 们 + 的。你们的老师、这是你们的吗？`}},
  {id:"pro-19",s:"他们的",t:"他們的",py:"tāmen de",es:"su / de ellos",en:"their / theirs",
   x:{
es:`QUÉ ES: «su» o «de ellos / de ellas». 他们 + 的.

GÉNERO: 他们的 para hombres o grupo mixto; 她们的 solo mujeres. Suenan igual.

EN USO: 他们的孩子 los hijos de ellos · 他们的房子 la casa de ellos.

PRONUNCIACIÓN: tāmen de.`,
en:`WHAT IT IS: "their" and "theirs". 他们 + 的.

GENDER: 他们的 for men or a mixed group; 她们的 for women only. They sound the same.

IN USE: 他们的孩子 their children · 他们的房子 their house.

PRONUNCIATION: tāmen de.`,
zh:`是什么："他们的"。全是女性写 她们的，读音一样。他们的孩子、他们的房子。`}},
  {id:"pro-20",s:"您的",py:"nín de",es:"su (de usted)",en:"your (polite)",
   x:{
es:`QUÉ ES: «su» dirigido a «usted», con respeto. 您 + 的.

DÓNDE LO VAS A OÍR: en atención al cliente, carteles y situaciones formales: 您的名字 su nombre · 您的订单 su pedido.

LAS PIEZAS:
您: 你 (vos) sobre 心 (corazón): respeto.
的: la partícula posesiva.

PRONUNCIACIÓN: nín de. Segundo tono (sube), con n al final.`,
en:`WHAT IT IS: polite "your". 您 + 的.

WHERE YOU'LL HEAR IT: customer service, signs and formal situations: 您的名字 your name · 您的订单 your order.

THE PIECES:
您: 你 (you) over 心 (heart): respect.
的: the possessive particle.

PRONUNCIATION: nín de. 2nd tone (rising), ending in n.`,
zh:`是什么："您的"，尊称。常见于服务场合：您的名字、您的订单。`}},
  {id:"pro-21",s:"我爸爸 = 我的爸爸",py:"wǒ bàba = wǒ de bàba",es:"mi papá",en:"my dad",cl:"c2",say:"我爸爸",
   x:{
es:`LA REGLA (clase 2): con familiares y relaciones cercanas en SINGULAR, el 的 se puede sacar. Las dos formas son correctas:
我爸爸 = 我的爸爸 mi papá
你妈妈 = 你的妈妈 tu mamá
我朋友 = 我的朋友 mi amigo
¿Por qué? Michelle: para que no suene todo «de-de-de», sobre todo en frases largas.

CUÁNDO NO SE SACA:
Con cosas y animales: 我的猫, 我的书 (no 我猫).
En plural: 我们的爸爸.
Cuando ya hay otro 的 en la cadena: 我爸爸的狗 (el 的 entre 爸爸 y 狗 se queda).

EL CARÁCTER 爸: 父 arriba (una mano sosteniendo un hacha o un bastón: el que trabaja y manda; es la palabra antigua para «padre») + 巴 abajo (solo por el sonido, ba).
Como casi todas las palabras de familia, se repite: 爸爸, 妈妈, 哥哥.

PRONUNCIACIÓN: wǒ bàba. La b sin aire: como la p de «speak».`,
en:`THE RULE (class 2): with family and close relationships in the SINGULAR, 的 can be dropped. Both forms are correct:
我爸爸 = 我的爸爸 my dad
你妈妈 = 你的妈妈 your mom
我朋友 = 我的朋友 my friend
Why? Michelle: so it doesn't sound "de-de-de", especially in long phrases.

WHEN IT ISN'T DROPPED:
With things and animals: 我的猫, 我的书 (not 我猫).
In the plural: 我们的爸爸.
When there's another 的 in the chain: 我爸爸的狗 (the 的 between 爸爸 and 狗 stays).

THE CHARACTER 爸: 父 on top (a hand holding an axe or stick: the one who works and gives orders; the old word for "father") + 巴 below (only for the sound, ba).
Like almost every family word, it's doubled: 爸爸, 妈妈, 哥哥.

PRONUNCIATION: wǒ bàba. Unaspirated b: like the p in "speak".`,
zh:`规则（第二课）：单数的亲属和亲近关系可以省 的：我爸爸 = 我的爸爸、我朋友。不省的情况：东西和动物（我的猫）、复数（我们的爸爸）、链条中间（我爸爸的狗）。爸：父（拿斧的手）+ 巴（表音）。`}}
  ]
});
