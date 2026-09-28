/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"radicales", glyph:"人",
  name:{"es": "Caracteres base", "en": "Building-block characters", "zh": "基本汉字"},
  cl:"ex",
  cards:[
  {id:"rad-01",s:"人 · 亻",py:"rén",es:"persona",en:"person",say:"人",
   x:{
es:`Una persona caminando vista de costado: las dos piernas.
A la izquierda de otro carácter se aplasta en 亻.
Lo encontrás en: 你 vos, 他 él, 们 plural, 位 clasificador, 什 de 什么, 茶 té.`,
en:`A person walking, seen from the side: the two legs.
On the left of another character it squeezes into 亻.
You'll find it in: 你 you, 他 he, 们 plural, 位 measure word, 什 of 什么, 茶 tea.`,
zh:`侧面走路的人。在左边写成 亻：你、他、们、位、什、茶。`}},
  {id:"rad-02",s:"女",py:"nǚ",es:"mujer",en:"woman",
   x:{
es:`Una mujer arrodillada de perfil con los brazos cruzados adelante.
Lo encontrás en: 妈 mamá, 姐 hermana mayor, 妹 hermana menor, 她 ella, 好 bien, 奶 leche, 安 paz.`,
en:`A woman kneeling in profile with her arms crossed in front.
You'll find it in: 妈 mom, 姐 older sister, 妹 younger sister, 她 she, 好 good, 奶 milk, 安 peace.`,
zh:`侧面跪坐的女子：妈、姐、妹、她、好、奶、安。`}},
  {id:"rad-03",s:"子",py:"zǐ",es:"niño, hijo",en:"child",
   x:{
es:`Un bebé con la cabeza grande, un brazo y las piernas envueltas en pañales.
Lo encontrás en: 好 bien, 学 estudiar, 字 carácter, 儿子 hijo, 房子 casa (acá como sufijo sin significado).`,
en:`A baby with a big head, one arm and swaddled legs.
You'll find it in: 好 good, 学 to study, 字 character, 儿子 son, 房子 house (here as a meaningless suffix).`,
zh:`头大、双腿包在襁褓里的婴儿：好、学、字、儿子、房子。`}},
  {id:"rad-04",s:"口",py:"kǒu",es:"boca",en:"mouth",
   x:{
es:`Una boca abierta dibujada como un rectángulo.
En un carácter avisa que algo se dice o pasa por la boca: 吃 comer, 叫 llamar, 吗 partícula de pregunta, 名 nombre.
En 咖啡 marca que el carácter se usa solo por su sonido.`,
en:`An open mouth drawn as a rectangle.
In a character it signals something said or going through the mouth: 吃 to eat, 叫 to call, 吗 question particle, 名 name.
In 咖啡 it marks that the character is used only for its sound.`,
zh:`张开的嘴：吃、叫、吗、名。在 咖啡 里表示只借读音。`}},
  {id:"rad-05",s:"日",py:"rì",es:"sol, día",en:"sun, day",
   x:{
es:`El sol: un círculo con un punto en el centro, que con el tiempo se cuadró.
Lo encontrás en: 早 temprano, 晚 noche, 是 ser, 明 claro (sol + luna).`,
en:`The sun: a circle with a dot in the centre, which became square over time.
You'll find it in: 早 early, 晚 evening, 是 to be, 明 bright (sun + moon).`,
zh:`太阳，圆圈中间一点，后来写成方形：早、晚、是、明。`}},
  {id:"rad-06",s:"月",py:"yuè",es:"luna, mes",en:"moon, month",
   x:{
es:`Una media luna. Ojo: a la izquierda de un carácter, 月 casi siempre NO es la luna sino 肉 (carne), el radical de las partes del cuerpo: 脑 cerebro, 脸 cara.
En 有 (tener) también es carne: una mano sosteniendo un pedazo de carne.`,
en:`A half moon. Careful: on the left of a character, 月 is almost never the moon but 肉 (meat), the radical for body parts: 脑 brain, 脸 face.
In 有 (to have) it's meat too: a hand holding a piece of meat.`,
zh:`半个月亮。在字的左边多半是 肉，表示身体部位：脑、脸。有 里的 月 也是肉。`}},
  {id:"rad-07",s:"木",py:"mù",es:"árbol, madera",en:"tree, wood",
   x:{
es:`Un árbol: el trazo vertical es el tronco, el horizontal las ramas, los dos de abajo las raíces.
Lo encontrás en: 树 árbol, 机 máquina, 校 escuela, 果 fruta, 茶 té, 橘 mandarina, 板 tabla.`,
en:`A tree: the vertical stroke is the trunk, the horizontal the branches, the two lower strokes the roots.
You'll find it in: 树 tree, 机 machine, 校 school, 果 fruit, 茶 tea, 橘 tangerine, 板 board.`,
zh:`树：树干、树枝、树根。树、机、校、果、茶、橘、板。`}},
  {id:"rad-08",s:"水 · 氵",py:"shuǐ",es:"agua",en:"water",say:"水",
   x:{
es:`Una corriente de agua con sus salpicaduras. A la izquierda se vuelve 氵, tres gotas.
Lo encontrás en: 洗 lavar, 汽 vapor, 沙 arena, 没 hundirse, 滚 rodar.`,
en:`A stream of water with its splashes. On the left it becomes 氵, three drops.
You'll find it in: 洗 to wash, 汽 steam, 沙 sand, 没 to sink, 滚 to roll.`,
zh:`水流和水花，在左边写成 氵：洗、汽、沙、没、滚。`}},
  {id:"rad-09",s:"心 · 忄",py:"xīn",es:"corazón",en:"heart",say:"心",
   x:{
es:`Un corazón dibujado con sus cavidades. A la izquierda se vuelve 忄.
Marca sentimientos y pensamiento. Lo encontrás en: 您 usted (vos sobre el corazón).`,
en:`A heart drawn with its chambers. On the left it becomes 忄.
It marks feelings and thought. You'll find it in: 您 polite you (you on the heart).`,
zh:`画出心室的心脏，在左边写成 忄，和感情、思想有关：您。`}},
  {id:"rad-10",s:"手 · 扌",py:"shǒu",es:"mano",en:"hand",say:"手",
   x:{
es:`Una mano: los trazos horizontales son los dedos. A la izquierda se vuelve 扌.
Lo encontrás en: 手机 celular, 拉 tirar.`,
en:`A hand: the horizontal strokes are the fingers. On the left it becomes 扌.
You'll find it in: 手机 mobile phone, 拉 to pull.`,
zh:`手，横画是手指，在左边写成 扌：手机、拉。`}},
  {id:"rad-11",s:"又",py:"yòu",es:"mano derecha; otra vez",en:"right hand; again",
   x:{
es:`La mano derecha dibujada con tres dedos. Hoy significa «otra vez», pero como componente sigue siendo una mano.
Lo encontrás en: 友 amigo (dos manos), 对 correcto, 饭 arroz, 隻 (tradicional de 只: pájaro en la mano).`,
en:`The right hand drawn with three fingers. Today it means "again", but as a component it's still a hand.
You'll find it in: 友 friend (two hands), 对 correct, 饭 rice, 隻 (traditional of 只: a bird in the hand).`,
zh:`三根手指的右手，现在表示"又"，作部件仍是手：友、对、饭、隻。`}},
  {id:"rad-12",s:"言 · 讠",t:"言 · 訁",py:"yán",es:"hablar, palabra",en:"speech",say:"言",
   x:{
es:`Una boca 口 con líneas de sonido saliendo. A la izquierda se vuelve 讠 (tradicional 訁).
Todo lo verbal: 谢 agradecer, 谁 quién, 说 decir, 语 idioma, 词 palabra.`,
en:`A mouth 口 with lines of sound coming out. On the left it becomes 讠 (traditional 訁).
Everything verbal: 谢 to thank, 谁 who, 说 to say, 语 language, 词 word.`,
zh:`嘴里发出声音，在左边写成 讠（繁体 訁）：谢、谁、说、语、词。`}},
  {id:"rad-13",s:"食 · 饣",t:"食 · 飠",py:"shí",es:"comida, comer",en:"food, to eat",say:"食",
   x:{
es:`Una vasija con tapa y comida adentro. A la izquierda se vuelve 饣 (tradicional 飠).
Lo encontrás en: 饭 arroz cocido, 餐 comida (早餐 desayuno).`,
en:`A covered pot with food inside. On the left it becomes 饣 (traditional 飠).
You'll find it in: 饭 cooked rice, 餐 meal (早餐 breakfast).`,
zh:`有盖的食器，在左边写成 饣（繁体 飠）：饭、餐。`}},
  {id:"rad-14",s:"宀",py:"mián",es:"techo",en:"roof",say:"宀",
   x:{
es:`Un techo de dos aguas visto de frente. No se usa solo; aparece arriba de otros caracteres.
Lo encontrás en: 安 paz (mujer bajo techo), 字 carácter (niño bajo techo), 客 invitado.`,
en:`A gabled roof seen from the front. Not used alone; it sits on top of other characters.
You'll find it in: 安 peace (woman under a roof), 字 character (child under a roof), 客 guest.`,
zh:`屋顶，放在字的上面：安、字、客。`}},
  {id:"rad-15",s:"艹",py:"cǎo",es:"hierba, planta",en:"grass, plant",say:"草",
   x:{
es:`Dos brotes de hierba, siempre arriba de otro carácter. Marca todo lo vegetal.
Lo encontrás en: 茶 té, 苹 de 苹果, 苗 brote, 苔 musgo.`,
en:`Two sprouts of grass, always on top of another character. It marks anything plant-like.
You'll find it in: 茶 tea, 苹 in 苹果, 苗 sprout, 苔 moss.`,
zh:`两棵小草，放在上面，和植物有关：茶、苹、苗、苔。`}},
  {id:"rad-16",s:"犭",py:"quǎn",es:"animal (perro)",en:"animal (dog)",say:"犬",
   x:{
es:`Es 犬 (perro) aplastado a la izquierda: un perro de perfil con la cola enroscada.
Marca casi todo animal de cuatro patas: 狗 perro, 猫 gato.`,
en:`It's 犬 (dog) squeezed on the left: a dog in profile with a curled tail.
It marks almost every four-legged animal: 狗 dog, 猫 cat.`,
zh:`犬 在左边的写法：狗、猫 等四条腿的动物。`}},
  {id:"rad-17",s:"田",py:"tián",es:"campo de arroz",en:"rice field",cl:"c2",
   x:{
es:`Un campo visto desde arriba: el cuadrado es el límite y la cruz son los canales que lo dividen en cuatro parcelas.
Lo encontrás en: 男 hombre, 苗 brote.`,
en:`A field seen from above: the square is the boundary and the cross the channels dividing it into four plots.
You'll find it in: 男 man, 苗 sprout.`,
zh:`从上往下看的田地，十字是水渠：男、苗。`}},
  {id:"rad-18",s:"力",py:"lì",es:"fuerza",en:"strength",cl:"c2",
   x:{
es:`Un arado o un brazo tensado.
Lo encontrás en: 男 hombre (campo + fuerza), 加 agregar.`,
en:`A plough or a tensed arm.
You'll find it in: 男 man (field + strength), 加 to add.`,
zh:`犁或用力的手臂：男、加。`}},
  {id:"rad-19",s:"大",py:"dà",es:"grande",en:"big",cl:"c1",
   x:{
es:`Una persona de frente con brazos y piernas abiertos, ocupando todo el espacio.
Con un trazo más: 太 demasiado (太太 señora). Con una línea encima: 天 cielo. 大山 es el nombre chino del canadiense que mencionó Michelle.`,
en:`A person seen from the front with arms and legs spread, taking up all the space.
With one more stroke: 太 too much (太太 Mrs.). With a line on top: 天 sky. 大山 is the Chinese name of the Canadian Michelle mentioned.`,
zh:`张开手脚的人。多一点是 太，上面加一横是 天。大山 是 Michelle 老师提到的那位加拿大人的中文名。`}},
  {id:"rad-20",s:"门",t:"門",py:"mén",es:"puerta",en:"door, gate",
   x:{
es:`Una puerta de dos hojas vista de frente; en tradicional 門 se ven las dos hojas completas.
Lo encontrás en: 们 plural (por el sonido), 闆 (tradicional de 板, el jefe detrás de la puerta), 關 (tradicional de 关).`,
en:`A two-leaf door seen from the front; in traditional 門 both leaves are complete.
You'll find it in: 们 plural (for the sound), 闆 (traditional of 板, the boss behind the door), 關 (traditional of 关).`,
zh:`两扇门，繁体 門 两扇都完整：们、闆、關。`}},
  {id:"rad-21",s:"目",py:"mù",es:"ojo",en:"eye",
   x:{
es:`Un ojo dibujado de frente y después girado a la vertical.
Sobre 儿 (piernas) forma 见 / 見: ver, el ojo que se mueve hacia algo. Está en 再见.`,
en:`An eye drawn from the front, later turned upright.
Over 儿 (legs) it forms 见 / 見: to see, the eye moving toward something. It's in 再见.`,
zh:`正面画的眼睛，后来竖起来。加上 儿 就是 见 / 見。`}},
  {id:"rad-22",s:"止",py:"zhǐ",es:"pie, huella; detenerse",en:"foot; to stop",
   x:{
es:`La huella de un pie: los dedos arriba, el talón abajo.
Lo encontrás en: 走 caminar, 正 correcto (el pie que va derecho), 是 ser, 此 esto, 先 primero.`,
en:`A footprint: toes on top, heel below.
You'll find it in: 走 to walk, 正 correct (the foot going straight), 是 to be, 此 this, 先 first.`,
zh:`脚印：走、正、是、此、先。`}},
  {id:"rad-23",s:"走 · 辶",py:"zǒu",es:"caminar",en:"to walk",say:"走",
   x:{
es:`走: una figura inclinada (brazos balanceándose) sobre 止 (un pie). 辶 es la versión «camino» que envuelve otros caracteres por abajo.
Lo encontrás en: 超 sobrepasar, 起 levantarse, 这 este, 迪 (tu nombre).`,
en:`走: a leaning figure (arms swinging) over 止 (a foot). 辶 is the "road" version that wraps under other characters.
You'll find it in: 超 to exceed, 起 to rise, 这 this, 迪 (your name).`,
zh:`走：摆动双臂的人在 止 上。辶 从下面包住别的字：超、起、这、迪。`}},
  {id:"rad-24",s:"巾",py:"jīn",es:"paño, tela",en:"cloth",
   x:{
es:`Un paño colgando de una barra.
Lo encontrás en: 市 mercado (los toldos de los puestos), 围巾 bufanda, 师 maestro.`,
en:`A cloth hanging from a bar.
You'll find it in: 市 market (the stalls' awnings), 围巾 scarf, 师 master.`,
zh:`挂在横杆上的布：市、围巾、师。`}},
  {id:"rad-25",s:"米",py:"mǐ",es:"arroz (grano)",en:"rice (grain)",
   x:{
es:`Granos de arroz desparramados alrededor de un eje.
Lo encontrás en: 糖 azúcar, 数 contar, 氣 (tradicional de 气: el vapor del arroz cocinándose).`,
en:`Rice grains scattered around a stalk.
You'll find it in: 糖 sugar, 数 to count, 氣 (traditional of 气: the steam of cooking rice).`,
zh:`散开的米粒：糖、数、氣。`}},
  {id:"rad-26",s:"虫",t:"蟲",py:"chóng",es:"bicho, insecto",en:"insect, bug",
   x:{
es:`Un bicho o un reptil con la cabeza levantada. Como palabra suelta, en tradicional son tres bichos: 蟲. Dentro de otros caracteres queda uno solo, 虫, también en tradicional.
Lo encontrás en: 蛇 serpiente, y en muchos insectos: 蚂蚁 hormiga.`,
en:`A bug or reptile with its head raised. As a word on its own, traditional has three bugs: 蟲. Inside other characters only one remains, 虫, in traditional too.
You'll find it in: 蛇 snake, and many insects: 蚂蚁 ant.`,
zh:`抬头的虫。单独成字时繁体是 蟲，在别的字里只写一个 虫：蛇、蚂蚁。`}},
  {id:"rad-27",s:"车",t:"車",py:"chē",es:"carro",en:"cart, vehicle",
   x:{
es:`Un carro visto desde arriba: el eje y las dos ruedas (se ven completas en tradicional 車).
Lo encontrás en: 汽车 auto.`,
en:`A cart seen from above: the axle and the two wheels (complete in traditional 車).
You'll find it in: 汽车 car.`,
zh:`从上往下看的车：车轴和两个轮子。汽车。`}},
  {id:"rad-28",s:"马",t:"馬",py:"mǎ",es:"caballo",en:"horse",
   x:{
es:`Un caballo de perfil: la crin arriba, las patas abajo (las cuatro en tradicional 馬).
Como componente de sonido: 妈 mā, 吗 ma, 骂 mà. Los cuatro solo se diferencian por el tono y el radical.`,
en:`A horse in profile: mane on top, legs below (all four in traditional 馬).
As a sound component: 妈 mā, 吗 ma, 骂 mà. The four differ only in tone and radical.`,
zh:`侧面的马。作表音部件：妈、吗、骂，只有声调和部首不同。`}}
  ]
});
