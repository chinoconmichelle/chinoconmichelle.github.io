/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"numeros", glyph:"数",
  name:{"es": "Números", "en": "Numbers", "zh": "数字"},
  cl:"c3",
  cards:[
  {id:"num-00",s:"数字",t:"數字",py:"shùzì",es:"número",en:"number",
   x:{
es:`QUÉ ES: «número». Michelle abrió el tema así: «número en chino se dice 数字».

POR QUÉ SON IMPORTANTES (Michelle): «si sabés los números, te va a ayudar por lo menos la mitad de tus problemas en China»: la hora, la fecha, los precios, el teléfono, el número de habitación. Y a diferencia del vocabulario, es pura lógica: solo hay que memorizar del 0 al 10, el resto se arma.

LOS CARACTERES:
数 contar: a la izquierda 米 (granos de arroz desparramados) sobre 女 (mujer); a la derecha 攵 (una mano sosteniendo un palito, la mano que golpea o actúa). La imagen: contar granos moviéndolos con un palito.
字 carácter escrito: 宀 (un techo) + 子 (un niño). El mismo 字 de 名字 (nombre).
数字 = «los caracteres de contar».

PRONUNCIACIÓN: shùzì. Cuidado con las dos consonantes: sh (lengua atrás) y z (lengua plana). shù cuarto tono, zì cuarto tono.`,
en:`WHAT IT IS: "number". Michelle opened the topic this way: "number in Chinese is 数字".

WHY THEY MATTER (Michelle): "if you know the numbers, it'll solve at least half your problems in China": time, dates, prices, phone numbers, room numbers. And unlike vocabulary, it's pure logic: you only memorise 0 to 10; the rest is built.

THE CHARACTERS:
数 to count: on the left 米 (scattered rice grains) over 女 (woman); on the right 攵 (a hand holding a stick, the hand that strikes or acts). The picture: counting grains by moving them with a stick.
字 written character: 宀 (a roof) + 子 (a child). The same 字 as in 名字 (name).
数字 = "the counting characters".

PRONUNCIATION: shùzì. Watch both consonants: sh (tongue back) and z (tongue flat). Both 4th tone.`,
zh:`是什么："数字"。Michelle 老师：会数字能解决在中国一半的问题：时间、日期、价格、电话、房号。只要记住零到十，其余都是组合。
字形：数：米 在 女 上，右边 攵（拿小棍的手），用小棍数米粒。字：宀 + 子。
发音：shùzì，卷舌 sh 和平舌 z。`}},
  {id:"num-01",s:"零",py:"líng",es:"cero",en:"zero",
   x:{
es:`QUÉ ES: «cero».

EL USO MÁS IMPORTANTE: marca un HUECO dentro de un número. Cuando falta la decena, se dice 零:
101 = 一百零一 (cien, cero, uno)
305 = 三百零五
Sin el 零, 一百一 se entendería como 110.

EL CARÁCTER:
雨 arriba: lluvia. Una nube (la línea de arriba y el techo) con gotas cayendo (los cuatro puntos).
令 abajo: solo por el sonido.
El sentido original era «las últimas gotas sueltas que caen después de la lluvia»: lo que queda, casi nada, restos. De «casi nada» pasó a «cero», y también a «suelto, en pedacitos» (零钱 = monedas sueltas, el cambio).

PRONUNCIACIÓN: líng, segundo tono (sube). En los teléfonos y números de habitación se dice cada cifra: 101 → yāo líng yāo (en números de teléfono el 1 se dice yāo para no confundirlo con 七 qī).`,
en:`WHAT IT IS: "zero".

ITS MOST IMPORTANT USE: marking a GAP inside a number. When the tens are missing, you say 零:
101 = 一百零一 (hundred, zero, one)
305 = 三百零五
Without 零, 一百一 would be understood as 110.

THE CHARACTER:
雨 on top: rain. A cloud (the top line and the roof) with drops falling (the four dots).
令 below: only for the sound.
The original meaning was "the last stray drops that fall after the rain": what's left, almost nothing, scraps. From "almost nothing" it came to mean "zero", and also "loose, in bits" (零钱 = loose change).

PRONUNCIATION: líng, 2nd tone (rising). In phone and room numbers each digit is read out: 101 → yāo líng yāo (in phone numbers 1 is said yāo so it isn't confused with 七 qī).`,
zh:`是什么："零"。最重要的用法：数字中间的空位：101 = 一百零一、305 = 三百零五。
字形：雨 + 令（表音），本义是雨后零星的雨滴，引申为零、零钱。
读号码时 1 常读 yāo：101 读 yāo líng yāo。`}},
  {id:"num-02",s:"一",py:"yī",es:"uno",en:"one",
   x:{
es:`QUÉ ES: «uno». El carácter más simple del chino: una sola raya.

EL CARÁCTER: una varilla de contar. Los antiguos contaban con palitos, y los tres primeros números son eso: 一 (un palito), 二 (dos), 三 (tres).

LA TRAMPA: el tono de 一 CAMBIA según lo que viene después.
Solo, contando o al final de un número: yī (primer tono). 十一 shíyī.
Antes de un cuarto tono: yí (segundo). 一个 yí ge · 一位 yí wèi · 一万 yíwàn.
Antes de los tonos 1, 2 y 3: yì (cuarto). 一只 yì zhī · 一条 yì tiáo · 一百 yìbǎi · 一千 yìqiān.
No hace falta pensarlo al principio: si lo decís siempre yī te van a entender. Pero con la práctica sale solo.

CUIDADO: en los números de teléfono y habitación el 1 se lee yāo, para no confundirlo con 七 qī.

PRONUNCIACIÓN: yī, como una «i» larga y alta.`,
en:`WHAT IT IS: "one". The simplest character in Chinese: a single stroke.

THE CHARACTER: a counting rod. People used to count with sticks, and the first three numbers are just that: 一 (one stick), 二 (two), 三 (three).

THE TRAP: the tone of 一 CHANGES depending on what follows.
Alone, when counting or at the end of a number: yī (1st tone). 十一 shíyī.
Before a 4th tone: yí (2nd). 一个 yí ge · 一位 yí wèi · 一万 yíwàn.
Before tones 1, 2 and 3: yì (4th). 一只 yì zhī · 一条 yì tiáo · 一百 yìbǎi · 一千 yìqiān.
You don't need to think about it at first: say yī and you'll be understood. It becomes automatic with practice.

CAREFUL: in phone and room numbers, 1 is read yāo so it isn't confused with 七 qī.

PRONUNCIATION: yī, like a long high "ee".`,
zh:`是什么："一"，一根算筹。变调：单念或在数字末尾读 yī（十一）；第四声前读 yí（一个、一位、一万）；第一、二、三声前读 yì（一只、一条、一百、一千）。电话号码里读 yāo。`}},
  {id:"num-03",s:"二",py:"èr",es:"dos",en:"two",
   x:{
es:`QUÉ ES: «dos». Dos varillas de contar apiladas.

LA TRAMPA (muy importante): en chino hay DOS palabras para «dos».
二 èr: para CONTAR (uno, dos, tres) y DENTRO de los números: 十二 (12), 二十 (20), 二十二 (22), 第二 (segundo).
两 liǎng: cuando va DELANTE de un clasificador: 两个 (dos personas/cosas), 两只猫 (dos gatos). Y normalmente para 200, 2000: 两百, 两千.
Entonces: «dos profesores» = 两个老师, nunca 二个老师.

PRONUNCIACIÓN: èr, cuarto tono. Es una sílaba rara para un hispanohablante: una «a» abierta con la lengua curvada hacia atrás, como la «er» del inglés americano, cayendo.`,
en:`WHAT IT IS: "two". Two stacked counting rods.

THE TRAP (very important): Chinese has TWO words for "two".
二 èr: for COUNTING (one, two, three) and INSIDE numbers: 十二 (12), 二十 (20), 二十二 (22), 第二 (second).
两 liǎng: when it comes BEFORE a measure word: 两个 (two people/things), 两只猫 (two cats). And usually for 200, 2000: 两百, 两千.
So "two teachers" = 两个老师, never 二个老师.

PRONUNCIATION: èr, 4th tone. It's an unusual syllable: like the American "er", falling.`,
zh:`是什么："二"，两根算筹。陷阱：数数和数字中间用 二（十二、二十、第二）；量词前用 两（两个、两只猫），200、2000 一般说 两百、两千。发音：èr，第四声，卷舌。`}},
  {id:"num-04",s:"三",py:"sān",es:"tres",en:"three",
   x:{
es:`QUÉ ES: «tres». Tres varillas de contar apiladas.

POR QUÉ LA LÓGICA DE LOS PALITOS SE CORTA ACÁ: con cuatro rayas (亖) era fácil equivocarse al leer o al escribir, así que a partir del cuatro se usaron otros caracteres.

EN USO: 三十 (30), 十三 (13), 三百 (300), 老三 (el tercer hijo), 三个 (tres personas).

PRONUNCIACIÓN: sān, primer tono, alto y plano. s plana (como en español). No confundir con 山 shān (montaña), que lleva sh.`,
en:`WHAT IT IS: "three". Three stacked counting rods.

WHY THE STICK LOGIC STOPS HERE: with four strokes (亖) it was easy to misread or miswrite, so from four onwards other characters were used.

IN USE: 三十 (30), 十三 (13), 三百 (300), 老三 (the third child), 三个 (three people).

PRONUNCIATION: sān, 1st tone, high and flat. Flat s. Don't confuse with 山 shān (mountain), which has sh.`,
zh:`是什么："三"，三根算筹。从四开始不用横线，因为四横容易看错。发音：sān，平舌；别和 山 shān 混淆。`}},
  {id:"num-05",s:"四",py:"sì",es:"cuatro",en:"four",
   x:{
es:`QUÉ ES: «cuatro».

EL CARÁCTER: al principio se escribía con cuatro rayas (亖), igual que 一, 二, 三. Como se leía mal, se tomó prestado este otro carácter, que era el dibujo de una boca con el aliento saliendo (el cuadrado es la boca, las dos líneas adentro son el aire). Se usó solo porque sonaba igual.

LA TRAMPA DE PRONUNCIACIÓN (Michelle insistió): sì con la lengua PLANA, detrás de los dientes, como una s española. «Si, sin la lengua», dijo.
四 sì (cuatro, lengua plana, cuarto tono)
十 shí (diez, lengua atrás, segundo tono)
是 shì (ser, lengua atrás, cuarto tono)
Mezclar 四 y 十 es el error más común: 四十 sìshí (40) tiene los dos.

DATO: el 4 es número de mala suerte, porque sì suena parecido a 死 sǐ «morir». Muchos edificios no tienen piso 4.`,
en:`WHAT IT IS: "four".

THE CHARACTER: at first it was written with four strokes (亖), like 一, 二, 三. Since that was misread, this other character was borrowed: a drawing of a mouth with breath coming out (the square is the mouth, the two lines inside are the air). It was used only because it sounded the same.

THE PRONUNCIATION TRAP (Michelle insisted): sì with the tongue FLAT, behind the teeth, like an English s. "Si, without the tongue", she said.
四 sì (four, flat tongue, 4th tone)
十 shí (ten, tongue back, 2nd tone)
是 shì (to be, tongue back, 4th tone)
Mixing up 四 and 十 is the most common mistake: 四十 sìshí (40) has both.

NOTE: 4 is an unlucky number, because sì sounds like 死 sǐ "to die". Many buildings have no 4th floor.`,
zh:`是什么："四"。本来写四横，后来借用这个字（口中出气）。发音陷阱：sì 平舌；十 shí、是 shì 卷舌。四十 两个都有。四 和 死 音近，被认为不吉利。`}},
  {id:"num-06",s:"五",py:"wǔ",es:"cinco",en:"five",
   x:{
es:`QUÉ ES: «cinco».

EL CARÁCTER: en su forma más antigua era una X entre dos líneas horizontales (el cielo arriba, la tierra abajo). La X es un cruce: el punto medio. Y el cinco es justamente la mitad entre uno y diez.
Con los siglos la X se enderezó y quedó 五.

EN USO: 十五 (15), 五十 (50), 五百 (500). 五 también aparece en 午 (mediodía)… no: 午 es otro carácter, pero suena igual (wǔ). 五 cinco / 午 mediodía / 舞 bailar: mismo sonido, otros caracteres.

PRONUNCIACIÓN: wǔ, tercer tono (baja y sube). Suena como «u».`,
en:`WHAT IT IS: "five".

THE CHARACTER: in its oldest form it was an X between two horizontal lines (heaven above, earth below). The X is a crossing: the midpoint. And five is exactly halfway between one and ten.
Over the centuries the X straightened out into 五.

IN USE: 十五 (15), 五十 (50), 五百 (500). Same sound, different characters: 五 five / 午 noon / 舞 dance, all wǔ.

PRONUNCIATION: wǔ, 3rd tone (dips and rises). Sounds like "woo".`,
zh:`是什么："五"。最早是上下两横中间一个交叉，表示一到十的中点。五、午、舞 同音不同字。发音：wǔ，第三声。`}},
  {id:"num-07",s:"六",py:"liù",es:"seis",en:"six",
   x:{
es:`QUÉ ES: «seis».

EL CARÁCTER: originalmente el dibujo de una choza con techo a dos aguas (el punto y la línea de arriba son el techo; los dos trazos de abajo, las paredes). Se tomó prestado solo por el sonido.

PRONUNCIACIÓN (Michelle lo explicó en la clase 1): el pinyin «iu» engaña. No se dice «liu» sino «liou», con un poquito de o en el medio: l-i-o-u. Es porque el pinyin lo inventaron pensando en el inglés.
Cuarto tono: cae.

DATO: el 6 es número de buena suerte, porque suena como 溜 liū «fluido, sin problemas». En internet, 666 significa «¡genial!».`,
en:`WHAT IT IS: "six".

THE CHARACTER: originally a drawing of a hut with a gabled roof (the dot and top line are the roof; the two strokes below, the walls). It was borrowed only for its sound.

PRONUNCIATION (Michelle explained it in class 1): the pinyin "iu" is misleading. It isn't "liu" but "liou", with a little o in the middle: l-i-o-u. Pinyin was designed with English in mind.
4th tone: falling.

NOTE: 6 is a lucky number, because it sounds like 溜 liū "smooth, trouble-free". Online, 666 means "awesome!".`,
zh:`是什么："六"。本来是有屋顶的小屋，借音。发音：iu 读成 iou：liù。六 和 溜 音近，是吉利数字，网上 666 表示"很厉害"。`}},
  {id:"num-08",s:"七",py:"qī",es:"siete",en:"seven",
   x:{
es:`QUÉ ES: «siete».

EL CARÁCTER: originalmente era una cruz, un corte, y significaba «cortar». Hoy «cortar» se escribe 切, que es 七 + 刀 (cuchillo): el sentido original sigue ahí.
El trazo de abajo se curvó hacia la derecha para no confundirlo con 十 (diez), que también es una cruz.

PRONUNCIACIÓN: qī, primer tono. La q del pinyin NO es una k: es como «chi» suave con mucho aire, con la lengua plana adelante (como la «ch» de «chico» pero más adelante en la boca). Es la versión con aire de 几 jǐ.
Por eso en los números de teléfono el 1 se dice yāo: yī y qī se confunden fácil.`,
en:`WHAT IT IS: "seven".

THE CHARACTER: originally a cross, a cut, and it meant "to cut". Today "to cut" is written 切, which is 七 + 刀 (knife): the original meaning is still there.
The bottom stroke curved to the right so it wouldn't be confused with 十 (ten), which is also a cross.

PRONUNCIATION: qī, 1st tone. Pinyin q is NOT a k: it's like a soft "chee" with a strong puff of air, tongue flat and forward. It's the aspirated partner of j.
That's why in phone numbers 1 is said yāo: yī and qī are easily confused.`,
zh:`是什么："七"。本来是十字形的切口，表示"切"（切 = 七 + 刀）。下面一笔弯了，免得和 十 混淆。发音：qī，送气；电话里 1 读 yāo 就是为了和 七 区分。`}},
  {id:"num-09",s:"八",py:"bā",es:"ocho",en:"eight",
   x:{
es:`QUÉ ES: «ocho».

EL CARÁCTER: dos trazos que se separan, como dos cosas que se dividen. El sentido original era «dividir, separar».
Esa idea se conserva en otros caracteres que lo llevan arriba:
分 dividir = 八 (separar) + 刀 (cuchillo): cortar en partes.
公 público = 八 (repartir) + 厶 (lo privado): repartir lo privado.

DATO: el 8 es EL número de la suerte en China, porque bā suena parecido a 发 fā «prosperar, hacerse rico». Los Juegos Olímpicos de Beijing empezaron el 8/8/2008 a las 8:08.

PRONUNCIACIÓN: bā, primer tono, alto y plano. b sin aire (como la p de «speak»).`,
en:`WHAT IT IS: "eight".

THE CHARACTER: two strokes moving apart, like two things dividing. The original meaning was "to divide, to separate".
That idea survives in other characters that carry it on top:
分 to divide = 八 (separate) + 刀 (knife): cutting into parts.
公 public = 八 (share out) + 厶 (private): sharing out the private.

NOTE: 8 is THE lucky number in China, because bā sounds like 发 fā "to prosper, get rich". The Beijing Olympics opened on 8/8/2008 at 8:08.

PRONUNCIATION: bā, 1st tone, high and flat. Unaspirated b (like the p in "speak").`,
zh:`是什么："八"。两笔分开，本义是"分"：分（八 + 刀）、公（八 + 厶）。八 和 发 音近，是最吉利的数字，北京奥运 2008 年 8 月 8 日 8 点 8 分开幕。`}},
  {id:"num-10",s:"九",py:"jiǔ",es:"nueve",en:"nine",
   x:{
es:`QUÉ ES: «nueve».

EL CARÁCTER: de origen discutido. Se ha propuesto un brazo doblado por el codo, o un gancho. Ninguna lectura es segura, así que mejor aprenderlo como dibujo.

DATO: 九 jiǔ suena igual que 久 jiǔ «mucho tiempo, duradero». Por eso es un número de buena suerte en bodas y aniversarios: amor que dura. Y como es el dígito más alto, también se asoció al emperador.

EN USO: 十九 (19), 九十 (90), 九十九 (99, el número más alto que se arma solo con los diez primeros).

PRONUNCIACIÓN: jiǔ, tercer tono. Como 六, el «iu» suena «iou»: jiou. La j es suave, con la lengua plana adelante.`,
en:`WHAT IT IS: "nine".

THE CHARACTER: disputed origin. A bent arm or a hook have been suggested. Neither is certain, so it's best learned as a picture.

NOTE: 九 jiǔ sounds the same as 久 jiǔ "a long time, lasting". That's why it's lucky at weddings and anniversaries: love that lasts. As the highest digit it was also associated with the emperor.

IN USE: 十九 (19), 九十 (90), 九十九 (99, the highest number built from the first ten alone).

PRONUNCIATION: jiǔ, 3rd tone. As with 六, "iu" sounds "iou": jiou. j is soft, tongue flat and forward.`,
zh:`是什么："九"。字形来源有争议（弯曲的手臂或钩子）。九 和 久 同音，婚礼上表示长长久久。发音：jiǔ，iu 读 iou。`}},
  {id:"num-11",s:"十",py:"shí",es:"diez",en:"ten",
   x:{
es:`QUÉ ES: «diez», y la BASE de todo el sistema. Michelle: «solamente tenés que estudiar estos 10», el resto se combina.

EL CARÁCTER: originalmente una línea vertical con un punto grueso en el medio (un nudo en una cuerda de contar). Con el tiempo el punto se estiró hasta volverse una raya y quedó una cruz.

CÓMO SE COMBINA (la lógica de toda la clase):
Unidad DESPUÉS de 十 = se suma: 十一 (10+1 = 11), 十五 (15), 十九 (19).
Número ANTES de 十 = se multiplica: 二十 (2×10 = 20), 五十 (50), 九十 (90).
Las dos cosas: 二十五 (2×10 + 5 = 25), 九十九 (99).
Del 11 al 19 el 十 va solo, sin 一 adelante: 十五, no 一十五. (Después de 百 sí lleva el 一: 一百一十.)

PRONUNCIACIÓN: shí, segundo tono (sube), lengua curvada atrás. No confundir con 四 sì (cuatro): 四十 sìshí es 40.`,
en:`WHAT IT IS: "ten", and the BASE of the whole system. Michelle: "you only have to learn these 10"; the rest is combined.

THE CHARACTER: originally a vertical line with a thick dot in the middle (a knot on a counting cord). Over time the dot stretched into a stroke and it became a cross.

HOW IT COMBINES (the logic of the whole lesson):
A digit AFTER 十 = add: 十一 (10+1 = 11), 十五 (15), 十九 (19).
A digit BEFORE 十 = multiply: 二十 (2×10 = 20), 五十 (50), 九十 (90).
Both: 二十五 (2×10 + 5 = 25), 九十九 (99).
From 11 to 19, 十 stands alone, with no 一 in front: 十五, not 一十五. (After 百 it does take 一: 一百一十.)

PRONUNCIATION: shí, 2nd tone (rising), tongue curled back. Don't confuse with 四 sì (four): 四十 sìshí is 40.`,
zh:`是什么："十"，整个系统的基础。字形：一竖中间一个粗点（记数绳上的结），后来变成十字。
组合：十 后面的数相加（十一、十五）；十 前面的数相乘（二十、五十）；两者结合（二十五、九十九）。十一到十九不加 一，百 后面才说 一十。
发音：shí，卷舌；四十 两个都有。`}},
  {id:"num-12",s:"百",py:"bǎi",es:"cien",en:"hundred",
   x:{
es:`QUÉ ES: «cien» o «centena».

LA REGLA: el 一 es OBLIGATORIO. En español decimos «cien», no «un cien». En chino siempre 一百. Solo 百 no se usa para contar.
Y después de 百, si hay decenas, se lee todo en orden, de mayor a menor, igual que las cifras:
123 = 一百二十三 (cien, dos-diez, tres)
Si falta la decena, 零: 105 = 一百零五.

EL CARÁCTER: 一 arriba + 白 (blanco) abajo. 白 está por el sonido (antiguamente bái y bǎi sonaban muy parecido). El 一 marca «una centena».

PRONUNCIACIÓN: bǎi, tercer tono (baja y sube). b sin aire. Antes de 百, 一 se dice yì: 一百 yìbǎi.`,
en:`WHAT IT IS: "hundred".

THE RULE: 一 is REQUIRED. You always say 一百, "one hundred". 百 alone isn't used for counting.
After 百, if there are tens, read everything in order, largest to smallest, just like the digits:
123 = 一百二十三 (hundred, two-ten, three)
If the tens are missing, 零: 105 = 一百零五.

THE CHARACTER: 一 on top + 白 (white) below. 白 is there for the sound (bái and bǎi were once very close). The 一 marks "one hundred".

PRONUNCIATION: bǎi, 3rd tone (dips and rises). Unaspirated b. Before 百, 一 is said yì: 一百 yìbǎi.`,
zh:`是什么："百"。一 不能省：一百。百 后面按顺序读：123 = 一百二十三；十位空着用 零：105 = 一百零五。字形：一 + 白（表音）。一百 读 yìbǎi。`}},
  {id:"num-13",s:"千",py:"qiān",es:"mil",en:"thousand",
   x:{
es:`QUÉ ES: «mil».

LA REGLA: igual que 百, lleva el 一 obligatorio: 一千 (1000), 两千 (2000), 三千 (3000).
Se lee en orden: 1234 = 一千两百三十四 (mil, dos-cien, tres-diez, cuatro). (Para 200 dentro de un número también se oye 二百.)

EL CARÁCTER: 人 (persona) cruzada por una raya horizontal. Una marca convencional sobre la palabra «persona» para indicar «mil». No hay una lógica visual clara: se aprende como dibujo.

PRONUNCIACIÓN: qiān, primer tono. q con aire y la lengua plana adelante. Antes de 千, 一 se dice yì: 一千 yìqiān.`,
en:`WHAT IT IS: "thousand".

THE RULE: like 百, it requires 一: 一千 (1000), 两千 (2000), 三千 (3000).
Read in order: 1234 = 一千两百三十四 (thousand, two-hundred, three-ten, four). (For 200 inside a number you also hear 二百.)

THE CHARACTER: 人 (person) crossed by a horizontal stroke. A conventional mark on the word "person" to indicate "thousand". No clear visual logic: learn it as a picture.

PRONUNCIATION: qiān, 1st tone. Aspirated q, tongue flat and forward. Before 千, 一 is said yì: 一千 yìqiān.`,
zh:`是什么："千"。一 不能省：一千、两千。按顺序读：1234 = 一千两百三十四。字形：人 加一横，是约定的符号。一千 读 yìqiān。`}},
  {id:"num-14",s:"万",t:"萬",py:"wàn",es:"diez mil",en:"ten thousand",
   x:{
es:`QUÉ ES: «diez mil». Y acá está la gran diferencia con el español.

LA DIFERENCIA: nosotros agrupamos de a MILES (1.000 → 1.000.000). El chino agrupa de a DIEZ MILES. 万 es una unidad propia, como para nosotros «mil».
10.000 = 一万 (un diez-mil)
50.000 = 五万
100.000 = 十万 (diez diez-miles)
1.000.000 = 一百万 (cien diez-miles)
Por eso los precios y las poblaciones en chino hay que «recalcularlos» en la cabeza. China tiene unos 140.000 万 personas, es decir 14 亿 (亿 = cien millones).

EL CARÁCTER: el tradicional 萬 era el dibujo de un escorpión: las pinzas arriba (艹), el cuerpo, y la cola abajo. Se tomó prestado por el sonido. El simplificado 万 es una forma abreviada antigua.
万 también significa «muchísimo, todo»: 万一 «por las dudas» (uno en diez mil).

PRONUNCIACIÓN: wàn, cuarto tono. Antes de 万, 一 se dice yí: 一万 yíwàn.`,
en:`WHAT IT IS: "ten thousand". And this is the big difference from English.

THE DIFFERENCE: English groups in THOUSANDS (1,000 → 1,000,000). Chinese groups in TEN-THOUSANDS. 万 is a unit of its own, as "thousand" is for us.
10,000 = 一万 (one ten-thousand)
50,000 = 五万
100,000 = 十万 (ten ten-thousands)
1,000,000 = 一百万 (a hundred ten-thousands)
So prices and populations in Chinese need "recalculating" in your head. (亿 = a hundred million.)

THE CHARACTER: traditional 萬 was a drawing of a scorpion: pincers on top (艹), the body, and the tail below. It was borrowed for its sound. Simplified 万 is an old abbreviated form.
万 also means "countless, all": 万一 "just in case" (one in ten thousand).

PRONUNCIATION: wàn, 4th tone. Before 万, 一 is said yí: 一万 yíwàn.`,
zh:`是什么："万"。中文以万为单位：10,000 = 一万、100,000 = 十万、1,000,000 = 一百万（西方以千为单位）。字形：繁体 萬 本来是蝎子，借音。万一 = 一万分之一的可能。一万 读 yíwàn。`}},
  {id:"num-15",s:"两",t:"兩",py:"liǎng",es:"dos (con clasificador)",en:"two (before a measure word)",
   x:{
es:`QUÉ ES: el «dos» que se usa delante de un clasificador. Michelle, clase 3: «dos se dice 两个».

LA REGLA COMPLETA:
两 + clasificador: 两个老师 dos profesores · 两只猫 dos gatos · 两条鱼 dos peces.
两百 (200), 两千 (2000), 两万 (20.000): lo más común (二百 también se oye).
二 para contar y dentro de los números: 二, 十二, 二十, 第二.
Error típico: 二个 ✗ → 两个 ✓.

EL CARÁCTER: originalmente el dibujo de un yugo para dos animales, o de una balanza con sus dos platillos. En los dos casos, «un par, dos cosas que van juntas». Tiene sentido: 两 es el dos de las COSAS que se cuentan, no el dos abstracto.
También era una unidad de peso (el tael chino).

PRONUNCIACIÓN: liǎng, tercer tono. 两个 = liǎng ge.`,
en:`WHAT IT IS: the "two" used before a measure word. Michelle, class 3: "two is 两个".

THE FULL RULE:
两 + measure word: 两个老师 two teachers · 两只猫 two cats · 两条鱼 two fish.
两百 (200), 两千 (2000), 两万 (20,000): most common (二百 is also heard).
二 for counting and inside numbers: 二, 十二, 二十, 第二.
Typical mistake: 二个 ✗ → 两个 ✓.

THE CHARACTER: originally a drawing of a yoke for two animals, or a scale with its two pans. Either way, "a pair, two things that go together". It fits: 两 is the two for counted THINGS, not the abstract number.
It was also a unit of weight (the Chinese tael).

PRONUNCIATION: liǎng, 3rd tone. 两个 = liǎng ge.`,
zh:`是什么：量词前的"二"：两个老师、两只猫。两百、两千、两万 最常用；数数和数字中间用 二。常见错误：二个 ✗。字形：本来是车轭或天平的两个秤盘，表示"一对"。`}},
  {id:"num-16",s:"十一",py:"shíyī",es:"once",en:"eleven",
   x:{
es:`QUÉ ES: «once». Literalmente «diez uno».

LA LÓGICA: una unidad DESPUÉS de 十 se SUMA. 十 + 一 = 10 + 1 = 11.
Así se arman todos del 11 al 19, sin excepciones (a diferencia del español, con «once, doce, quince»):
十一 11 · 十二 12 · 十三 13 · 十四 14 · 十五 15 · 十六 16 · 十七 17 · 十八 18 · 十九 19.

DETALLE: del 11 al 19 NO se dice 一十一; el 十 va solo adelante. (Solo lleva 一 cuando va después de 百: 一百一十一 = 111.)

PRONUNCIACIÓN: shíyī. El 一 al final se dice yī, en primer tono.`,
en:`WHAT IT IS: "eleven". Literally "ten one".

THE LOGIC: a digit AFTER 十 is ADDED. 十 + 一 = 10 + 1 = 11.
Every number from 11 to 19 works this way, with no exceptions (no "eleven, twelve, -teen" irregularities):
十一 11 · 十二 12 · 十三 13 · 十四 14 · 十五 15 · 十六 16 · 十七 17 · 十八 18 · 十九 19.

DETAIL: from 11 to 19 you do NOT say 一十一; 十 stands alone at the front. (It only takes 一 after 百: 一百一十一 = 111.)

PRONUNCIATION: shíyī. The final 一 is yī, 1st tone.`,
zh:`是什么："十一"。十 后面的数相加：十一到十九全部这样，没有例外。不说 一十一，百 后面才说 一十。`}},
  {id:"num-17",s:"十五",py:"shíwǔ",es:"quince",en:"fifteen",
   x:{
es:`QUÉ ES: «quince». 十 (diez) + 五 (cinco) = 10 + 5.

LA LÓGICA: la misma que 十一: la unidad después de 十 se suma. No hay nada irregular que memorizar.

LOS CARACTERES:
十: una cruz, originalmente una línea con un nudo en el medio.
五: originalmente una X (un cruce) entre dos líneas: el punto medio entre uno y diez.

COMPARÁ con 五十 (cincuenta): el ORDEN cambia el significado.
十五 = 10 + 5 = 15 (el 5 después: suma)
五十 = 5 × 10 = 50 (el 5 antes: multiplica)

PRONUNCIACIÓN: shíwǔ. Sube y después baja-sube.`,
en:`WHAT IT IS: "fifteen". 十 (ten) + 五 (five) = 10 + 5.

THE LOGIC: same as 十一: the digit after 十 is added. Nothing irregular to memorise.

THE CHARACTERS:
十: a cross, originally a line with a knot in the middle.
五: originally an X (a crossing) between two lines: the midpoint between one and ten.

COMPARE with 五十 (fifty): ORDER changes the meaning.
十五 = 10 + 5 = 15 (5 after: add)
五十 = 5 × 10 = 50 (5 before: multiply)

PRONUNCIATION: shíwǔ. Rising, then dip-and-rise.`,
zh:`是什么："十五" = 10 + 5。比较：十五（后面相加）/ 五十（前面相乘），顺序改变意思。`}},
  {id:"num-18",s:"二十",py:"èrshí",es:"veinte",en:"twenty",
   x:{
es:`QUÉ ES: «veinte». Literalmente «dos dieces».

LA LÓGICA: un número ANTES de 十 se MULTIPLICA. 二 × 十 = 2 × 10 = 20.
Todas las decenas igual:
二十 20 · 三十 30 · 四十 40 · 五十 50 · 六十 60 · 七十 70 · 八十 80 · 九十 90.
(En español hay que aprender «veinte, treinta, cuarenta…»; en chino es solo multiplicar.)

POR QUÉ 二 Y NO 两: dentro de un número se usa 二. 两 es solo delante de un clasificador (两个) y para 百 / 千 / 万.

PRONUNCIACIÓN: èrshí. La er con la lengua curvada; shí con la lengua atrás. Dos sonidos «retroflejos» seguidos.`,
en:`WHAT IT IS: "twenty". Literally "two tens".

THE LOGIC: a digit BEFORE 十 is MULTIPLIED. 二 × 十 = 2 × 10 = 20.
All the tens work the same way:
二十 20 · 三十 30 · 四十 40 · 五十 50 · 六十 60 · 七十 70 · 八十 80 · 九十 90.
No new words to learn: just multiply.

WHY 二 AND NOT 两: inside a number you use 二. 两 is only before a measure word (两个) and for 百 / 千 / 万.

PRONUNCIATION: èrshí. er with the tongue curled; shí with the tongue back. Two retroflex sounds in a row.`,
zh:`是什么："二十" = 2 × 10。十 前面的数相乘：二十到九十都一样。数字中间用 二，不用 两。`}},
  {id:"num-19",s:"二十五",py:"èrshíwǔ",es:"veinticinco",en:"twenty-five",
   x:{
es:`QUÉ ES: «veinticinco». 二 × 十 + 五 = 2 × 10 + 5.

LA LÓGICA COMPLETA, en un solo número:
[decena] + 十 + [unidad]
二十五 25 · 三十七 37 · 八十二 82 · 九十九 99.
Se lee exactamente en el mismo orden que las cifras: 2-5 → 二十五. Leés «dos, diez, cinco».

CÓMO PRACTICARLO: en la «Práctica de números» del sitio, con el rango 0–100. Michelle te va a pedir contar del 1 al 100, y con esta regla ya podés decir cualquiera.

PRONUNCIACIÓN: èrshíwǔ. Tres tonos distintos: cae, sube, baja-sube.`,
en:`WHAT IT IS: "twenty-five". 二 × 十 + 五 = 2 × 10 + 5.

THE FULL LOGIC in one number:
[tens digit] + 十 + [units digit]
二十五 25 · 三十七 37 · 八十二 82 · 九十九 99.
Read in exactly the same order as the digits: 2-5 → 二十五. You say "two, ten, five".

HOW TO PRACTISE: the site's "Number practice" with the 0–100 range. Michelle will ask you to count from 1 to 100, and with this rule you can already say any of them.

PRONUNCIATION: èrshíwǔ. Three different tones: falling, rising, dip-and-rise.`,
zh:`是什么："二十五" = 2 × 10 + 5。格式：十位 + 十 + 个位，和阿拉伯数字的顺序一样。`}},
  {id:"num-20",s:"九十九",py:"jiǔshíjiǔ",es:"noventa y nueve",en:"ninety-nine",
   x:{
es:`QUÉ ES: «noventa y nueve». 9 × 10 + 9. El número más alto que se arma solo con los diez primeros caracteres.

POR QUÉ IMPORTA: con 一 a 十 y dos reglas (antes de 十 multiplica, después suma) ya sabés TODOS los números del 1 al 99. Para seguir solo hace falta 百.

EL SIGUIENTE: 100 = 一百 (con el 一 obligatorio).

DATO CULTURAL: 九 suena como 久 «duradero». 九十九 aparece en expresiones de «para siempre», y 九九 es la tabla de multiplicar en chino.

PRONUNCIACIÓN: jiǔshíjiǔ. jiǔ con el «iu» sonando «iou».`,
en:`WHAT IT IS: "ninety-nine". 9 × 10 + 9. The highest number built from the first ten characters alone.

WHY IT MATTERS: with 一 to 十 and two rules (before 十 multiply, after add) you already know EVERY number from 1 to 99. To go further you only need 百.

THE NEXT ONE: 100 = 一百 (with the required 一).

CULTURAL NOTE: 九 sounds like 久 "lasting". 九十九 shows up in "forever" expressions, and 九九 is the Chinese name for the times tables.

PRONUNCIATION: jiǔshíjiǔ. jiǔ with "iu" sounding "iou".`,
zh:`是什么："九十九"，只用一到十能组成的最大数字。一到十加上两条规则就能说一到九十九。九九 是乘法表。`}},
  {id:"num-21",s:"一百",py:"yìbǎi",es:"cien",en:"one hundred",
   x:{
es:`QUÉ ES: «cien».

LA REGLA: el 一 es obligatorio. En español es «cien», en chino es «un cien»: 一百. Decir solo 百 está mal.

EL TONO DE 一: acá se dice yì (cuarto tono), porque 百 es tercer tono y 一 cambia a cuarto antes de los tonos 1, 2 y 3.

LOS CARACTERES:
一: una varilla de contar.
百: 一 + 白 (blanco, por el sonido).

PARA CONTAR DE 100 A 200 (lo que te va a pedir Michelle):
一百, 一百零一, 一百零二 … 一百零九, 一百一十, 一百一十一 … 一百九十九, 两百.
Las reglas nuevas: 零 para el hueco de la decena, y 一十 (no 十) después de 百.

PRONUNCIACIÓN: yìbǎi.`,
en:`WHAT IT IS: "one hundred".

THE RULE: 一 is required: 一百. Saying just 百 is wrong.

THE TONE OF 一: here it's yì (4th tone), because 百 is a 3rd tone and 一 becomes 4th before tones 1, 2 and 3.

THE CHARACTERS:
一: a counting rod.
百: 一 + 白 (white, for the sound).

COUNTING FROM 100 TO 200 (what Michelle will ask you):
一百, 一百零一, 一百零二 … 一百零九, 一百一十, 一百一十一 … 一百九十九, 两百.
The new rules: 零 for the empty tens, and 一十 (not 十) after 百.

PRONUNCIATION: yìbǎi.`,
zh:`是什么："一百"，一 不能省，读 yì。从一百数到两百：一百、一百零一……一百零九、一百一十……一百九十九、两百。新规则：十位空着用 零；百 后面说 一十。`}},
  {id:"num-22",s:"一百零一",py:"yìbǎi líng yī",es:"ciento uno",en:"one hundred and one",
   x:{
es:`QUÉ ES: «ciento uno». 一百 (cien) + 零 (cero) + 一 (uno).

POR QUÉ EL 零: la decena está vacía (1-0-1). El chino lo dice en voz alta con 零. Si no, 一百一 se entendería como 110.
Regla: si entre 百 y la unidad falta la decena, va 零.
101 一百零一 · 105 一百零五 · 209 两百零九 · 308 三百零八.

EL CARÁCTER 零: 雨 (lluvia) + 令 (sonido): las últimas gotas sueltas después de la lluvia, «casi nada».

PRONUNCIACIÓN: yìbǎi líng yī. El 一 del principio yì (antes de 百); el del final yī (sin nada después).`,
en:`WHAT IT IS: "one hundred and one". 一百 (hundred) + 零 (zero) + 一 (one).

WHY 零: the tens place is empty (1-0-1). Chinese says so out loud with 零. Otherwise 一百一 would be understood as 110.
Rule: if the tens are missing between 百 and the units, add 零.
101 一百零一 · 105 一百零五 · 209 两百零九 · 308 三百零八.

THE CHARACTER 零: 雨 (rain) + 令 (sound): the last stray drops after the rain, "almost nothing".

PRONUNCIATION: yìbǎi líng yī. The first 一 is yì (before 百); the last one is yī (nothing after it).`,
zh:`是什么："一百零一"。十位空着，所以说 零；不说 零，一百一 会被理解成 110。一百零五、两百零九。`}},
  {id:"num-23",s:"一百一十",py:"yìbǎi yīshí",es:"ciento diez",en:"one hundred and ten",
   x:{
es:`QUÉ ES: «ciento diez». 一百 (cien) + 一十 (un diez).

LA REGLA NUEVA: después de 百, el diez lleva su 一 adelante: 一十. (Del 11 al 19 sueltos NO lo lleva: 十一; pero dentro de las centenas sí.)
110 一百一十 · 111 一百一十一 · 115 一百一十五 · 210 两百一十.

EL ATAJO AL HABLAR: cuando el número termina en la decena, se puede cortar la palabra final: 一百一 = 110, 一百五 = 150, 两百三 = 230. Por eso 101 necesita el 零: para no confundirse con este atajo.

PRONUNCIACIÓN: yìbǎi yīshí.`,
en:`WHAT IT IS: "one hundred and ten". 一百 (hundred) + 一十 (one ten).

THE NEW RULE: after 百, ten carries its 一: 一十. (On their own, 11 to 19 do NOT: 十一; but inside the hundreds they do.)
110 一百一十 · 111 一百一十一 · 115 一百一十五 · 210 两百一十.

THE SPOKEN SHORTCUT: when a number ends in the tens, the final word can be dropped: 一百一 = 110, 一百五 = 150, 两百三 = 230. That's why 101 needs 零: to avoid confusion with this shortcut.

PRONUNCIATION: yìbǎi yīshí.`,
zh:`是什么："一百一十"。百 后面的十要说 一十（单独的十一到十九不加）。口语可以省最后的单位：一百一 = 110、一百五 = 150，所以 101 要说 一百零一。`}},
  {id:"num-24",s:"一百二十三",py:"yìbǎi èrshísān",es:"ciento veintitrés",en:"one hundred twenty-three",
   x:{
es:`QUÉ ES: «ciento veintitrés». 一百 + 二十 + 三.

LA LÓGICA: se lee en el mismo orden que las cifras, de mayor a menor, diciendo la unidad de cada posición:
1-2-3 → 一百 (1 centena) · 二十 (2 decenas) · 三 (3 unidades).
Otros: 456 四百五十六 · 789 七百八十九 · 999 九百九十九.

LA RECETA PARA CUALQUIER NÚMERO DE 3 CIFRAS:
[cifra] 百 + [cifra] 十 + [cifra]
- si la decena es 0 → 零: 305 三百零五
- si la decena es 1 → 一十: 312 三百一十二
- si termina en 0 → se corta: 320 三百二十
- 200 → 两百

PRONUNCIACIÓN: yìbǎi èrshísān.`,
en:`WHAT IT IS: "one hundred twenty-three". 一百 + 二十 + 三.

THE LOGIC: read in the same order as the digits, largest to smallest, saying each place's unit:
1-2-3 → 一百 (1 hundred) · 二十 (2 tens) · 三 (3 units).
Others: 456 四百五十六 · 789 七百八十九 · 999 九百九十九.

THE RECIPE FOR ANY 3-DIGIT NUMBER:
[digit] 百 + [digit] 十 + [digit]
- tens digit 0 → 零: 305 三百零五
- tens digit 1 → 一十: 312 三百一十二
- ends in 0 → stop there: 320 三百二十
- 200 → 两百

PRONUNCIATION: yìbǎi èrshísān.`,
zh:`是什么："一百二十三"，按阿拉伯数字的顺序读。三位数公式：数字 + 百 + 数字 + 十 + 数字；十位是 0 说 零；十位是 1 说 一十；200 说 两百。`}},
  {id:"num-25",s:"两百",t:"兩百",py:"liǎngbǎi",es:"doscientos",en:"two hundred",
   x:{
es:`QUÉ ES: «doscientos». Es el 200 de la oración de la escuela: 两百个女学生 (200 alumnas). Michelle: «doscientos es 两百».

POR QUÉ 两 Y NO 二: delante de 百, 千 y 万 lo más común es 两 (两百, 两千, 两万). 二百 también es correcto y se oye, sobre todo en el norte de China, pero 两百 es lo más natural.
En cambio DENTRO de un número va 二: 一百二十 (120), 二十 (20).

EL FINAL DEL CONTEO: Michelle te va a pedir contar de 100 a 200. Terminás acá: …一百九十八, 一百九十九, 两百.

EL CARÁCTER 两 (tradicional 兩): un yugo o una balanza de dos platillos, «un par».

PRONUNCIACIÓN: liǎngbǎi. Dos terceros tonos seguidos: el primero sube (liáng bǎi).`,
en:`WHAT IT IS: "two hundred". It's the 200 in the school sentence: 两百个女学生 (200 female students). Michelle: "two hundred is 两百".

WHY 两 AND NOT 二: before 百, 千 and 万 the most common is 两 (两百, 两千, 两万). 二百 is also correct and heard, especially in northern China, but 两百 sounds most natural.
INSIDE a number you use 二: 一百二十 (120), 二十 (20).

THE END OF THE COUNT: Michelle will ask you to count from 100 to 200. You finish here: …一百九十八, 一百九十九, 两百.

THE CHARACTER 两 (traditional 兩): a yoke or a two-pan scale, "a pair".

PRONUNCIATION: liǎngbǎi. Two 3rd tones in a row: the first rises (liáng bǎi).`,
zh:`是什么："两百"。百、千、万 前面一般用 两（二百 也可以）；数字中间用 二：一百二十。数到两百就结束。发音：两个第三声，第一个变调。`}},
  {id:"num-26",s:"一千",py:"yìqiān",es:"mil",en:"one thousand",
   x:{
es:`QUÉ ES: «mil». 一 + 千.

LA REGLA: como con 百, el 一 es obligatorio: 一千, nunca solo 千.

LECTURA DE NÚMEROS DE 4 CIFRAS: se sigue la misma lógica, agregando 千 adelante.
1000 一千 · 2000 两千 · 1500 一千五百 · 2026 两千零二十六 (el año actual: nótese el 零 por la centena vacía).

EL CARÁCTER 千: 人 (persona) cruzada por una raya: una marca convencional para «mil».

PRONUNCIACIÓN: yìqiān. 一 es yì porque 千 es primer tono. q con aire.`,
en:`WHAT IT IS: "one thousand". 一 + 千.

THE RULE: as with 百, 一 is required: 一千, never just 千.

READING 4-DIGIT NUMBERS: same logic, with 千 added in front.
1000 一千 · 2000 两千 · 1500 一千五百 · 2026 两千零二十六 (this year: note the 零 for the empty hundreds).

THE CHARACTER 千: 人 (person) crossed by a stroke: a conventional mark for "thousand".

PRONUNCIATION: yìqiān. 一 is yì because 千 is a 1st tone. Aspirated q.`,
zh:`是什么："一千"，一 不能省。四位数：一千五百、两千零二十六（百位空着说 零）。一千 读 yìqiān。`}},
  {id:"num-27",s:"一万",t:"一萬",py:"yíwàn",es:"diez mil",en:"ten thousand",
   x:{
es:`QUÉ ES: «diez mil». 一 + 万.

EL CAMBIO DE MENTALIDAD: en chino no se dice «diez mil» sino «un diez-mil». 万 es una unidad propia.
10.000 一万 · 20.000 两万 · 50.000 五万 · 100.000 十万 · 1.000.000 一百万.
Truco para pasar al chino: separá las cifras de a cuatro desde la derecha. 1234|5678 → 一千两百三十四万 五千六百七十八.

EL CARÁCTER 万: el tradicional 萬 era un escorpión, prestado por el sonido.

PRONUNCIACIÓN: yíwàn. 一 es yí porque 万 es cuarto tono.`,
en:`WHAT IT IS: "ten thousand". 一 + 万.

THE MINDSET SHIFT: Chinese doesn't say "ten thousand" but "one ten-thousand". 万 is a unit of its own.
10,000 一万 · 20,000 两万 · 50,000 五万 · 100,000 十万 · 1,000,000 一百万.
Trick for converting: split the digits into groups of four from the right. 1234|5678 → 一千两百三十四万 五千六百七十八.

THE CHARACTER 万: traditional 萬 was a scorpion, borrowed for its sound.

PRONUNCIATION: yíwàn. 一 is yí because 万 is a 4th tone.`,
zh:`是什么："一万"。中文以万为单位：一万、十万、一百万。转换技巧：从右往左四位一组。一万 读 yíwàn。`}}
  ]
});
