/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, x character explanation (Spanish), say optional text for the voice. */
window.TOPICS.push({
  id:"saludos", glyph:"好",
  name:{es:"Saludos",en:"Greetings",zh:"问候"},
  cards:[
  {id:"sal-01",s:"你好",py:"nǐ hǎo",es:"hola",en:"hello",
   x:`你 vos: 亻 a la izquierda es 人 (una persona caminando vista de costado) aplastada; 尔 está por el sonido y su origen es discutido.
好 bien: 女 (una mujer arrodillada con los brazos cruzados adelante) + 子 (un bebé con la cabeza grande y las piernas envueltas). Una madre con su hijo: la imagen de lo bueno.
Literalmente «vos bien». No es una exclamación: es una afirmación, y por eso se le puede agregar 吗 para preguntar.
Pronunciación: dos terceros tonos seguidos. El primero sube y se dice ní hǎo.`},
  {id:"sal-02",s:"你好吗？",t:"你好嗎？",py:"nǐ hǎo ma?",es:"¿cómo estás?",en:"how are you?",
   x:`你好 «vos bien» + 吗.
吗: 口 (una boca abierta, dibujada como un rectángulo: algo que se dice) + 马 (un caballo de perfil, solo por el sonido). En tradicional 嗎 el caballo 馬 tiene las cuatro patas.
吗 al final convierte cualquier afirmación en pregunta de sí o no: «vos bien, ¿sí o no?».`},
  {id:"sal-03",s:"我很好",py:"wǒ hěn hǎo",es:"estoy bien",en:"I'm fine",
   x:`我 yo: originalmente el dibujo de un arma de asta con hoja dentada. Se tomó prestado solo por el sonido.
很 muy: 彳 (medio 行, un cruce de caminos: movimiento) + 艮 (sonido). Acá no agrega intensidad: sin 很 la frase suena incompleta.
好 bien: mujer 女 + niño 子.
Tres terceros tonos seguidos: al hablar rápido suena wó hén hǎo.`},
  {id:"sal-04",s:"早安",py:"zǎo'ān",es:"buenos días",en:"good morning",
   x:`早 temprano: 日 (el sol, un círculo con un punto que con el tiempo se cuadró) arriba de 十. Michelle lo explicó así: el sol por encima del horizonte.
安 paz: 宀 (un techo de dos aguas) + 女 (la mujer arrodillada). La mujer bajo techo: la casa en calma.
«Paz de la mañana». Más usado en Taiwán.`},
  {id:"sal-05",s:"早上好",py:"zǎoshang hǎo",es:"buenos días",en:"good morning",
   x:`早上 a la mañana (早 temprano + 上 arriba: una línea de horizonte con una marca encima) + 好 bien.
«Mañana bien». Es la forma más común en China continental; en Taiwán se oye más 早安.`},
  {id:"sal-06",s:"午安",py:"wǔ'ān",es:"buenas tardes",en:"good afternoon",
   x:`午 mediodía: originalmente el dibujo de un pisón o mano de mortero, tomado prestado por el sonido para la hora del sol alto.
安 paz: techo 宀 + mujer 女.
«Paz del mediodía». Completa la serie 早安 · 午安 · 晚安.`},
  {id:"sal-07",s:"下午好",py:"xiàwǔ hǎo",es:"buenas tardes",en:"good afternoon",
   x:`下 abajo: una línea con una marca debajo. 午 mediodía. 下午 = después del mediodía.
Michelle lo explicó con el reloj de sol: el palito que mide la sombra ya está abajo.
+ 好 bien. Forma de China continental; equivale a 午安.`},
  {id:"sal-08",s:"晚安",py:"wǎn'ān",es:"buenas noches (al despedirse)",en:"good night",
   x:`晚 tarde, noche: 日 (sol) + 免 (sonido). El sol que ya se fue.
安 paz: techo 宀 + mujer 女. La misma 安 de 早安.
Se usa para despedirse o al ir a dormir.`},
  {id:"sal-09",s:"晚上好",py:"wǎnshang hǎo",es:"buenas noches (al saludar)",en:"good evening",
   x:`晚上 a la noche + 好 bien.
Diferencia con 晚安: 晚上好 es para saludar al llegar; 晚安 es para despedirse.`},
  {id:"sal-10",s:"早上",py:"zǎoshang",es:"a la mañana",en:"in the morning",
   x:`早 temprano (el sol 日 sobre el horizonte) + 上 arriba (una línea con una marca encima).
La segunda sílaba va en tono neutro: zǎoshang.`},
  {id:"sal-11",s:"下午",py:"xiàwǔ",es:"a la tarde",en:"in the afternoon",
   x:`下 abajo (una línea con una marca debajo) + 午 mediodía (un pisón, prestado por el sonido).
Debajo, o después, del mediodía.`},
  {id:"sal-12",s:"晚上",py:"wǎnshang",es:"a la noche",en:"in the evening / at night",
   x:`晚 (el sol 日 que ya se retiró) + 上.
Michelle: el sol bajó hacia el oeste y subió la luna.`},
  {id:"sal-13",s:"早餐",py:"zǎocān",es:"desayuno",en:"breakfast",
   x:`早 temprano + 餐 comida.
餐: abajo 食 (una vasija con tapa y comida adentro, el radical de lo comestible); arriba una mano sosteniendo un trozo de carne.
La comida de la mañana.`},
  {id:"sal-14",s:"午餐",py:"wǔcān",es:"almuerzo",en:"lunch",
   x:`午 mediodía + 餐 comida (la vasija 食 con la mano y la carne arriba).`},
  {id:"sal-15",s:"晚餐",py:"wǎncān",es:"cena",en:"dinner",
   x:`晚 noche + 餐 comida.`},
  {id:"sal-16",s:"谢谢",t:"謝謝",py:"xièxie",es:"gracias",en:"thank you",
   x:`讠 a la izquierda es 言 (hablar: una boca 口 con líneas de sonido saliendo) aplastado. Marca todo lo verbal: 说 decir, 谁 quién.
射 disparar (solo por el sonido): 身 (un cuerpo) + 寸 (una mano con una marca en la muñeca), tensar el arco.
Agradecer es algo que se dice: por eso el radical del habla. La segunda sílaba va en tono neutro.`},
  {id:"sal-17",s:"不客气",t:"不客氣",py:"bú kèqi",es:"de nada",en:"you're welcome",
   x:`不 no + 客 invitado + 气 aire, modales.
客: 宀 (techo) + 各 (夂 un pie que llega + 口 boca). El que llega bajo tu techo.
气: líneas de vaho subiendo. En tradicional 氣 lleva 米 (arroz): el vapor del arroz cocinándose.
Literalmente «no te pongas en modo invitado», no hagas ceremonia.
不 normalmente es bù, pero antes de otro cuarto tono (客 kè) pasa a bú.`},
  {id:"sal-18",s:"不用谢",t:"不用謝",py:"bú yòng xiè",es:"no hay de qué",en:"no need to thank me",
   x:`不 no + 用 usar, hacer falta (origen discutido, quizá un balde) + 谢 agradecer.
«No hace falta agradecer». 不 pasa a bú porque 用 es cuarto tono.`},
  {id:"sal-19",s:"对不起",t:"對不起",py:"duìbuqǐ",es:"perdón",en:"sorry",
   x:`对 estar frente a, correcto: 又 (la mano derecha, dibujada con tres dedos) + 寸 (la mano con la marca en la muñeca).
不 no.
起 levantarse: 走 (caminar: una figura inclinada sobre 止, la huella de un pie) + 己.
Literalmente «no me puedo levantar frente a vos», no estoy a la altura.`},
  {id:"sal-20",s:"没关系",t:"沒關係",py:"méi guānxi",es:"no pasa nada",en:"it's okay / no problem",
   x:`没 no tener: 氵 (agua, tres gotas) + una mano que se hunde. Algo que se ahoga y desaparece.
关 la tranca de una puerta (en tradicional 關 se ve la puerta 門 entera) + 系 hilos atados. 关系 = lo que conecta: relación.
Literalmente «no hay relación», no tiene que ver: no pasa nada. Es la respuesta a 对不起.`},
  {id:"sal-21",s:"再见",t:"再見",py:"zàijiàn",es:"chau, nos vemos",en:"goodbye / see you",
   x:`再 otra vez (origen discutido).
见 ver: 目 (un ojo dibujado de frente y después girado a la vertical) sobre 儿 (dos piernas). El ojo que camina hacia algo. En tradicional 見 el ojo completo sobre las piernas.
Literalmente «ver de nuevo», igual que see you again.`},
  {id:"sal-22",s:"拜拜",py:"báibái",es:"chau (bye bye)",en:"bye-bye",
   x:`拜 son dos manos juntas haciendo una reverencia.
Acá se usa solo por el sonido: es el bye bye del inglés. Michelle dice que en las películas se oye más que 再见.`},
  {id:"sal-23",s:"下个礼拜见",t:"下個禮拜見",py:"xià ge lǐbài jiàn",es:"hasta la próxima semana",en:"see you next week",
   x:`下 abajo, próximo + 个 clasificador + 礼拜 semana + 见 ver.
礼 rito: 礻 es 示 (un altar de piedra) aplastado. 拜: las dos manos inclinándose.
La semana se contaba por los días de culto. Así cerró Michelle la clase 2.`},
  {id:"sal-24",s:"亲",t:"親",py:"qīn",es:"querido/a",en:"dear",
   x:`Pariente cercano, querido. En tradicional 親 lleva 見 (ver) a la derecha: los que se ven de cerca.
Así saludan a los clientes en las plataformas de compra chinas.`}
  ]
});
