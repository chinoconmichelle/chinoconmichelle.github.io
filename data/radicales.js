/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, x character explanation (Spanish), say optional text for the voice.
   Building blocks: characters that reappear as components inside the class vocabulary. */
window.TOPICS.push({
  id:"radicales", glyph:"人",
  name:{es:"Caracteres base",en:"Building-block characters",zh:"基本汉字"},
  cards:[
  {id:"rad-01",s:"人 · 亻",py:"rén",es:"persona",en:"person",say:"人",
   x:`Una persona caminando vista de costado: las dos piernas.
A la izquierda de otro carácter se aplasta en 亻.
Lo encontrás en: 你 vos, 他 él, 们 plural, 位 clasificador, 什 de 什么, 茶 té.`},
  {id:"rad-02",s:"女",py:"nǚ",es:"mujer",en:"woman",
   x:`Una mujer arrodillada de perfil con los brazos cruzados adelante.
Lo encontrás en: 妈 mamá, 姐 hermana mayor, 妹 hermana menor, 她 ella, 好 bien, 奶 leche, 安 paz.`},
  {id:"rad-03",s:"子",py:"zǐ",es:"niño, hijo",en:"child",
   x:`Un bebé con la cabeza grande, un brazo y las piernas envueltas en pañales.
Lo encontrás en: 好 bien, 学 estudiar, 字 carácter, 儿子 hijo, 房子 casa (acá como sufijo sin significado).`},
  {id:"rad-04",s:"口",py:"kǒu",es:"boca",en:"mouth",
   x:`Una boca abierta dibujada como un rectángulo.
En un carácter avisa que algo se dice o pasa por la boca: 吃 comer, 叫 llamar, 吗 partícula de pregunta, 名 nombre.
En 咖啡 marca que el carácter se usa solo por su sonido.`},
  {id:"rad-05",s:"日",py:"rì",es:"sol, día",en:"sun, day",
   x:`El sol: un círculo con un punto en el centro, que con el tiempo se cuadró.
Lo encontrás en: 早 temprano, 晚 noche, 是 ser, 明 claro (sol + luna).`},
  {id:"rad-06",s:"月",py:"yuè",es:"luna, mes",en:"moon, month",
   x:`Una media luna. Ojo: a la izquierda de un carácter, 月 casi siempre NO es la luna sino 肉 (carne), el radical de las partes del cuerpo: 脑 cerebro, 脸 cara.
En 有 (tener) también es carne: una mano sosteniendo un pedazo de carne.`},
  {id:"rad-07",s:"木",py:"mù",es:"árbol, madera",en:"tree, wood",
   x:`Un árbol: el trazo vertical es el tronco, el horizontal las ramas, los dos de abajo las raíces.
Lo encontrás en: 树 árbol, 机 máquina, 校 escuela, 果 fruta, 茶 té, 橘 mandarina, 板 tabla.`},
  {id:"rad-08",s:"水 · 氵",py:"shuǐ",es:"agua",en:"water",say:"水",
   x:`Una corriente de agua con sus salpicaduras. A la izquierda se vuelve 氵, tres gotas.
Lo encontrás en: 洗 lavar, 汽 vapor, 沙 arena, 没 hundirse, 滚 rodar.`},
  {id:"rad-09",s:"心 · 忄",py:"xīn",es:"corazón",en:"heart",say:"心",
   x:`Un corazón dibujado con sus cavidades. A la izquierda se vuelve 忄.
Marca sentimientos y pensamiento. Lo encontrás en: 您 usted (vos sobre el corazón).`},
  {id:"rad-10",s:"手 · 扌",py:"shǒu",es:"mano",en:"hand",say:"手",
   x:`Una mano: los trazos horizontales son los dedos. A la izquierda se vuelve 扌.
Lo encontrás en: 手机 celular, 拉 tirar.`},
  {id:"rad-11",s:"又",py:"yòu",es:"mano derecha; otra vez",en:"right hand; again",
   x:`La mano derecha dibujada con tres dedos. Hoy significa «otra vez», pero como componente sigue siendo una mano.
Lo encontrás en: 友 amigo (dos manos), 对 correcto, 饭 arroz, 隻 (tradicional de 只: pájaro en la mano).`},
  {id:"rad-12",s:"言 · 讠",t:"言 · 訁",py:"yán",es:"hablar, palabra",en:"speech",say:"言",
   x:`Una boca 口 con líneas de sonido saliendo. A la izquierda se vuelve 讠 (tradicional 訁).
Todo lo verbal: 谢 agradecer, 谁 quién, 说 decir, 语 idioma, 词 palabra.`},
  {id:"rad-13",s:"食 · 饣",t:"食 · 飠",py:"shí",es:"comida, comer",en:"food, to eat",say:"食",
   x:`Una vasija con tapa y comida adentro. A la izquierda se vuelve 饣 (tradicional 飠).
Lo encontrás en: 饭 arroz cocido, 餐 comida (早餐 desayuno).`},
  {id:"rad-14",s:"宀",py:"mián",es:"techo",en:"roof",say:"宀",
   x:`Un techo de dos aguas visto de frente. No se usa solo; aparece arriba de otros caracteres.
Lo encontrás en: 安 paz (mujer bajo techo), 字 carácter (niño bajo techo), 客 invitado.`},
  {id:"rad-15",s:"艹",py:"cǎo",es:"hierba, planta",en:"grass, plant",say:"草",
   x:`Dos brotes de hierba, siempre arriba de otro carácter. Marca todo lo vegetal.
Lo encontrás en: 茶 té, 苹 de 苹果, 苗 brote, 苔 musgo.`},
  {id:"rad-16",s:"犭",py:"quǎn",es:"animal (perro)",en:"animal (dog)",say:"犬",
   x:`Es 犬 (perro) aplastado a la izquierda: un perro de perfil con la cola enroscada.
Marca casi todo animal de cuatro patas: 狗 perro, 猫 gato.`},
  {id:"rad-17",s:"田",py:"tián",es:"campo de arroz",en:"rice field",
   x:`Un campo visto desde arriba: el cuadrado es el límite y la cruz son los canales que lo dividen en cuatro parcelas.
Lo encontrás en: 男 hombre, 苗 brote.`},
  {id:"rad-18",s:"力",py:"lì",es:"fuerza",en:"strength",
   x:`Un arado o un brazo tensado.
Lo encontrás en: 男 hombre (campo + fuerza), 加 agregar.`},
  {id:"rad-19",s:"大",py:"dà",es:"grande",en:"big",
   x:`Una persona de frente con brazos y piernas abiertos, ocupando todo el espacio.
Con un trazo más: 太 demasiado (太太 señora). Con una línea encima: 天 cielo. 大山 es el nombre chino del canadiense que mencionó Michelle.`},
  {id:"rad-20",s:"门",t:"門",py:"mén",es:"puerta",en:"door, gate",
   x:`Una puerta de dos hojas vista de frente; en tradicional 門 se ven las dos hojas completas.
Lo encontrás en: 们 plural (por el sonido), 闆 (tradicional de 板, el jefe detrás de la puerta), 關 (tradicional de 关).`},
  {id:"rad-21",s:"目",py:"mù",es:"ojo",en:"eye",
   x:`Un ojo dibujado de frente y después girado a la vertical.
Sobre 儿 (piernas) forma 见 / 見: ver, el ojo que se mueve hacia algo. Está en 再见.`},
  {id:"rad-22",s:"止",py:"zhǐ",es:"pie, huella; detenerse",en:"foot; to stop",
   x:`La huella de un pie: los dedos arriba, el talón abajo.
Lo encontrás en: 走 caminar, 正 correcto (el pie que va derecho), 是 ser, 此 esto, 先 primero.`},
  {id:"rad-23",s:"走 · 辶",py:"zǒu",es:"caminar",en:"to walk",say:"走",
   x:`走: una figura inclinada (brazos balanceándose) sobre 止 (un pie). 辶 es la versión «camino» que envuelve otros caracteres por abajo.
Lo encontrás en: 超 sobrepasar, 起 levantarse, 这 este, 迪 (tu nombre).`},
  {id:"rad-24",s:"巾",py:"jīn",es:"paño, tela",en:"cloth",
   x:`Un paño colgando de una barra.
Lo encontrás en: 市 mercado (los toldos de los puestos), 围巾 bufanda, 师 maestro.`},
  {id:"rad-25",s:"米",py:"mǐ",es:"arroz (grano)",en:"rice (grain)",
   x:`Granos de arroz desparramados alrededor de un eje.
Lo encontrás en: 糖 azúcar, 数 contar, 氣 (tradicional de 气: el vapor del arroz cocinándose).`},
  {id:"rad-26",s:"虫",t:"蟲",py:"chóng",es:"bicho, insecto",en:"insect, bug",
   x:`Un bicho o un reptil con la cabeza levantada. Como palabra suelta, en tradicional son tres bichos: 蟲. Dentro de otros caracteres queda uno solo, 虫, también en tradicional.
Lo encontrás en: 蛇 serpiente, y en muchos insectos: 蚂蚁 hormiga.`},
  {id:"rad-27",s:"车",t:"車",py:"chē",es:"carro",en:"cart, vehicle",
   x:`Un carro visto desde arriba: el eje y las dos ruedas (se ven completas en tradicional 車).
Lo encontrás en: 汽车 auto.`},
  {id:"rad-28",s:"马",t:"馬",py:"mǎ",es:"caballo",en:"horse",
   x:`Un caballo de perfil: la crin arriba, las patas abajo (las cuatro en tradicional 馬).
Como componente de sonido: 妈 mā, 吗 ma, 骂 mà. Los cuatro solo se diferencian por el tono y el radical.`}
  ]
});
