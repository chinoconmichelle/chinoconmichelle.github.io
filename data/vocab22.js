/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   w optional writing tip {es, en, zh} (shown on the stroke-order page),
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"vocab22", glyph:"词",
  name:{"es": "Los 22 vocabularios", "en": "The 22 words", "zh": "二十二个词"},
  cl:"c1",
  cards:[
  {id:"voc-01",s:"狗",py:"gǒu",es:"perro",en:"dog",
   x:{
es:`犭 (quǎn) + 句 (jù).
犭 es 犬 (quǎn, perro) aplastado: el dibujo original era un perro de perfil con la cola enroscada. Aparece en casi todo animal de cuatro patas.
句 jù está solo por el sonido; adentro tiene 口 (kǒu, una boca abierta).`,
en:`犭 (quǎn) + 句 (jù).
犭 is 犬 (quǎn, dog), squeezed: the original drawing was a dog in profile with a curled tail. It appears in almost every four-legged animal.
句 jù is only there for the sound; inside it is 口 (kǒu, an open mouth).`,
zh:`犭 + 句。犭 是 犬 的偏旁写法：原来画的是尾巴卷起的狗。四条腿的动物大多有 犭。句 只表音。`}},
  {id:"voc-02",s:"猫",t:"貓",py:"māo",es:"gato",en:"cat",
   x:{
es:`犭 (quǎn, animal de cuatro patas) + 苗 miáo.
苗 brote: 艹 (cǎo) arriba (dos tallitos de hierba) + 田 (tián) abajo (un campo de arroz visto desde arriba, dividido en cuatro parcelas).
Acá 苗 está por el sonido, y da la casualidad de que miáo es el maullido.
En tradicional 貓 (māo) lleva 豸 (zhì), un animal de lomo largo.`,
en:`犭 (quǎn, four-legged animal) + 苗 miáo.
苗 sprout: 艹 (cǎo) on top (two blades of grass) + 田 (tián) below (a rice field seen from above, split into four plots).
Here 苗 is only for the sound, and miáo happens to be the miaow.
In traditional 貓 (māo) it has 豸 (zhì), a long-backed animal.`,
zh:`犭 + 苗。苗：艹（两棵小草）+ 田（从上往下看的稻田）。这里 苗 表音，恰好 miáo 就是猫叫声。繁体 貓 用 豸（长背的野兽）。`}},
  {id:"voc-03",s:"树",t:"樹",py:"shù",es:"árbol",en:"tree",
   x:{
es:`木 (mù) árbol: el trazo vertical es el tronco, el horizontal las ramas, y los dos de abajo las raíces.
En tradicional 樹 (shù): 木 + 壴 (zhù, un tambor sobre su pedestal) + 寸 (cùn, la mano). Plantar algo erguido.
Ojo: shù cuarto tono, contra 书 shū (libro), primer tono.`,
en:`木 (mù) tree: the vertical stroke is the trunk, the horizontal one the branches, the two lower ones the roots.
In traditional 樹 (shù): 木 + 壴 (zhù, a drum on its stand) + 寸 (cùn, the hand). Planting something upright.
Careful: shù is 4th tone, against 书 shū (book), 1st tone.`,
zh:`木：竖是树干，横是树枝，下面两笔是树根。繁体 樹：木 + 壴（架子上的鼓）+ 寸（手），把东西竖直种下。注意：树 shù 第四声，书 shū 第一声。`}},
  {id:"voc-04",s:"水",py:"shuǐ",es:"agua",en:"water",
   x:{
es:`Pictograma puro: una corriente de agua. El trazo central es el cauce y los laterales las salpicaduras.
A la izquierda se comprime en 氵 (shuǐ, tres gotas) y marca todo lo líquido: 洗 (xǐ) lavar, 汽 (qì) vapor, 没 (méi) hundirse.`,
en:`A pure pictogram: a stream of water. The central stroke is the current and the side strokes the splashes.
On the left it shrinks to 氵 (shuǐ, three drops) and marks anything liquid: 洗 (xǐ) to wash, 汽 (qì) steam, 没 (méi) to sink.`,
zh:`象形字：一道水流，中间是主流，两边是水花。在左边写成 氵（三点水），表示和液体有关：洗、汽、没。`}},
  {id:"voc-05",s:"咖啡",py:"kāfēi",es:"café",en:"coffee",
   x:{
es:`Préstamo del inglés coffee: puramente fonético.
Los dos llevan 口 (kǒu, boca) a la izquierda: señal de que se usan solo por su sonido.
A la derecha 加 (jiā, agregar: 力 lì fuerza + 口) y 非 (fēi, no: dos alas opuestas). Ninguno de esos significados cuenta acá.`,
en:`A loan from English "coffee": purely phonetic.
Both have 口 (kǒu, mouth) on the left, the sign that they're used only for their sound.
On the right 加 (jiā, to add: 力 lì strength + 口) and 非 (fēi, not: two opposing wings). Neither meaning counts here.`,
zh:`从英文 coffee 音译。两个字左边都有 口，表示只借读音。右边的 加 和 非 的意思在这里都不算。`}},
  {id:"voc-06",s:"茶",py:"chá",es:"té",en:"tea",
   x:{
es:`QUÉ ES: «té». Una de las palabras que ya conocías de Duolingo; en clase se te escapó el tono (Michelle: «segundo, chá»).

EL CARÁCTER, de arriba abajo:
艹 (cǎo): dos brotes de hierba. Marca todo lo que es planta: 苹 (píng) manzana, 苗 (miáo) brote, 苔 (tái) musgo.
人 (rén): una persona.
木 (mù): un árbol (tronco, ramas y raíces).
La imagen: una persona entre la hierba y el arbusto, recogiendo hojas. El té es la hoja de un arbusto.

DATO: la palabra «té» en español viene del sur de China (Fujian: tê), y «chai» en otros idiomas viene del mandarín chá. El mismo carácter viajó por dos caminos.

EN USO: 喝茶 (hēchá) tomar té · 一杯茶 (yì bēi chá) una taza de té · 绿茶 (lǜchá) té verde.

PRONUNCIACIÓN: chá, SEGUNDO tono, sube como una pregunta. ch con la lengua curvada atrás y con aire.`,
en:`WHAT IT IS: "tea". One of the words you knew from Duolingo; in class the tone slipped (Michelle: "second, chá").

THE CHARACTER, top to bottom:
艹 (cǎo): two sprouts of grass. It marks anything plant-like: 苹 (píng) apple, 苗 (miáo) sprout, 苔 (tái) moss.
人 (rén): a person.
木 (mù): a tree (trunk, branches and roots).
The picture: a person between the grass and the bush, picking leaves. Tea is the leaf of a shrub.

NOTE: English "tea" comes from southern China (Fujian: tê), while "chai" in other languages comes from Mandarin chá. The same character travelled two routes.

IN USE: 喝茶 (hēchá) to drink tea · 一杯茶 (yì bēi chá) a cup of tea · 绿茶 (lǜchá) green tea.

PRONUNCIATION: chá, SECOND tone, rising like a question. ch with the tongue curled back, aspirated.`,
zh:`是什么："茶"。字形：艹 + 人 + 木，人在草木之间采叶子。英文 tea 来自闽南语，chai 来自普通话。喝茶、一杯茶、绿茶。第二声。`}},
  {id:"voc-07",s:"饭",t:"飯",py:"fàn",es:"arroz cocido / comida",en:"cooked rice / meal",
   x:{
es:`QUÉ ES: «arroz cocido», y por extensión «comida». En China y Taiwán el arroz es LA comida, así que 饭 (fàn) terminó significando cualquier comida.
吃饭 (chīfàn) = comer (literalmente «comer arroz») · 早饭 (zǎofàn) desayuno · 晚饭 (wǎnfàn) cena · 米饭 (mǐfàn) arroz blanco.

EL CARÁCTER:
饣 (shí) a la izquierda: es 食 (shí, comer, comida) aplastado. 食 es el dibujo de una vasija con tapa y comida adentro. Todo lo que se come lleva este radical: 饭 (fàn), 饺 (jiǎo, empanadita china), 饼 (bǐng, panqueque).
反 a la derecha: solo por el sonido (fǎn / fàn). 反 solo significa «dar vuelta, al revés»: 厂 (chǎng, un acantilado, un borde) + 又 (yòu, la mano derecha).
En tradicional 飯 (fàn), con el radical 飠 (shí) más completo.

DIFERENCIA CON 米: 米 mǐ es el grano crudo (el dibujo de granos desparramados); 饭 (fàn) es el arroz ya cocido, servido.

PRONUNCIACIÓN: fàn, cuarto tono (cae).`,
en:`WHAT IT IS: "cooked rice", and by extension "meal". In China and Taiwan rice is THE food, so 饭 (fàn) came to mean any meal.
吃饭 (chīfàn) = to eat (literally "eat rice") · 早饭 (zǎofàn) breakfast · 晚饭 (wǎnfàn) dinner · 米饭 (mǐfàn) plain rice.

THE CHARACTER:
饣 (shí) on the left: 食 (shí, to eat, food), squeezed. 食 is the drawing of a covered pot with food inside. Everything edible carries this radical: 饭 (fàn), 饺 (jiǎo, dumpling), 饼 (bǐng, pancake).
反 on the right: only for the sound (fǎn / fàn). On its own 反 means "to turn over, reverse": 厂 (chǎng, a cliff, an edge) + 又 (yòu, the right hand).
Traditional 飯 (fàn), with the fuller radical 飠 (shí).

VS 米: 米 mǐ is the raw grain (drawn as scattered grains); 饭 (fàn) is rice already cooked and served.

PRONUNCIATION: fàn, 4th tone (falling).`,
zh:`是什么："饭"，本义是煮熟的米，引申为一餐：吃饭、早饭、晚饭。饣 是 食 的偏旁（有盖的食器）；反 表音。米 是生米，饭 是煮熟的。`}},
  {id:"voc-08",s:"面包",t:"麵包",py:"miànbāo",es:"pan",en:"bread",
   x:{
es:`面 (miàn) harina (originalmente «cara, superficie») + 包 (bāo) envolver.
包: 勹 (bāo, un brazo que rodea) con 巳 (sì) adentro (un feto). Envolver como el útero envuelve.
Pan = la harina envuelta en forma de bollo.
En tradicional 麵 (miàn) lleva 麥 (mài, trigo) a la izquierda: queda claro que es harina.`,
en:`面 (miàn) flour (originally "face, surface") + 包 (bāo) to wrap.
包: 勹 (bāo, an arm wrapping around) with 巳 (sì) inside (a foetus). Wrapping the way the womb wraps.
Bread = flour wrapped into a bun.
In traditional 麵 (miàn) has 麥 (mài, wheat) on the left: it's clearly flour.`,
zh:`面（本义"脸、表面"）+ 包。包：勹（环抱的手臂）里面有 巳（胎儿），像子宫包着胎儿。繁体 麵 左边是 麥，表明是面粉。`}},
  {id:"voc-09",s:"沙拉",py:"shālā",es:"ensalada",en:"salad",
   x:{
es:`Préstamo del inglés salad, solo por el sonido.
沙 (shā) arena: 氵 (shuǐ) agua + 少 (shǎo) poco (lo que queda cuando hay poca agua). 拉 tirar: 扌 (shǒu, la mano) + 立 (lì, una persona de pie).
Ninguno de los dos significados aplica acá.`,
en:`A loan from English "salad", only for the sound.
沙 (shā) sand: 氵 (shuǐ) water + 少 (shǎo) little (what's left when there's little water). 拉 (lā) to pull: 扌 (shǒu, hand) + 立 (lì, a person standing).
Neither meaning applies here.`,
zh:`从英文 salad 音译。沙：氵 + 少（水少了剩下的）。拉：扌 + 立。这里两个字的意思都不算。`}},
  {id:"voc-10",s:"奶酪",py:"nǎilào",es:"queso",en:"cheese",
   x:{
es:`奶 (nǎi) leche: 女 (nǚ, la mujer) + 乃 (nǎi, un trazo curvo que representa el pecho).
酪 (lào) lácteo cuajado: 酉 (yǒu, una vasija de fermentación con tapa, la misma de 酒 jiǔ vino) + 各 (gè, sonido).
Leche fermentada que se coagula, como explicó Michelle.`,
en:`奶 (nǎi) milk: 女 (nǚ, the woman) + 乃 (nǎi, a curved stroke representing the breast).
酪 (lào) curdled dairy: 酉 (yǒu, a fermentation jar with its lid, the same as in 酒 jiǔ wine) + 各 (gè, sound).
Fermented milk that curdles, as Michelle explained.`,
zh:`奶：女 + 乃（弯的笔画代表乳房）。酪：酉（有盖的发酵罐，和 酒 一样）+ 各（表音）。发酵凝固的奶。`}},
  {id:"voc-11",s:"苹果",t:"蘋果",py:"píngguǒ",es:"manzana",en:"apple",
   x:{
es:`苹 (píng): 艹 (cǎo, hierba) + 平 píng (plano, una balanza en equilibrio), por el sonido.
果 (guǒ) fruta: 木 (mù, el árbol) abajo con la fruta dibujada arriba entre las ramas.
Ese 果 vuelve en 糖果 (tángguǒ) caramelo y 水果 (shuǐguǒ) fruta. Cualquier fruta + 树 (shù) = su árbol: 苹果树 (píngguǒ shù) manzano.`,
en:`苹 (píng): 艹 (cǎo, grass) + 平 píng (flat, a balanced scale), for the sound.
果 (guǒ) fruit: 木 (mù, the tree) below with the fruit drawn above among the branches.
That 果 comes back in 糖果 (tángguǒ) candy and 水果 (shuǐguǒ) fruit. Any fruit + 树 (shù) = its tree: 苹果树 (píngguǒ shù) apple tree.`,
zh:`苹：艹 + 平（表音）。果：木 上面画着果实。糖果、水果 里也有 果。水果名 + 树 = 果树：苹果树。`}},
  {id:"voc-12",s:"糖果",py:"tángguǒ",es:"caramelo",en:"candy",
   x:{
es:`糖 (táng) azúcar: 米 (mǐ, granos de arroz desparramados alrededor de un eje) + 唐 (táng, sonido). El azúcar se extraía de granos.
果 (guǒ): la fruta sobre el árbol. Caramelo = la «fruta» de azúcar.`,
en:`糖 (táng) sugar: 米 (mǐ, rice grains scattered around a stalk) + 唐 (táng, sound). Sugar used to be extracted from grain.
果 (guǒ): the fruit on the tree. Candy = the sugar "fruit".`,
zh:`糖：米（散开的米粒）+ 唐（表音），从前从谷物里提糖。果：树上的果实。`}},
  {id:"voc-13",s:"老师",t:"老師",py:"lǎoshī",es:"maestro / profesor",en:"teacher",
   x:{
es:`老 (lǎo): un anciano encorvado de pelo largo apoyado en un bastón. Acá marca respeto, no edad.
师 (shī) maestro, experto: el mismo de 工程师 (gōngchéngshī) ingeniero.
Solo para maestros hasta secundaria.
Ojo: en 老鼠 (lǎoshǔ, ratón) y 老虎 (lǎohǔ, tigre) el 老 es un prefijo sin significado; no tiene que ver con 老师 (lǎoshī).`,
en:`老 (lǎo): a stooped old man with long hair leaning on a stick. Here it marks respect, not age.
师 (shī) master, expert: the same as in 工程师 (gōngchéngshī) engineer.
Only for teachers up to secondary school.
Careful: in 老鼠 (lǎoshǔ, mouse) and 老虎 (lǎohǔ, tiger) the 老 is a meaningless prefix, unrelated to 老师 (lǎoshī).`,
zh:`老：弯腰、长发、拄着拐杖的老人，这里表示尊敬，不是年龄。师：专家，和 工程师 的 师 一样。注意：老鼠、老虎 的 老 是没有意思的词头。`}},
  {id:"voc-14",s:"学生",t:"學生",py:"xuéshēng",es:"alumno",en:"student",
   x:{
es:`学 (xué) estudiar: arriba dos manos de un adulto, en el medio 冖 (mì, un techo) y abajo 子 (zǐ, un niño). En tradicional 學 (xué) se ven mejor las dos manos.
生 (shēng) nacer, crecer: un brote saliendo de la tierra (la línea de abajo es el suelo).
El alumno es el que crece estudiando. Mismo 学 en 学校 (xuéxiào) escuela.`,
en:`学 (xué) to study: at the top an adult's two hands, in the middle 冖 (mì, a roof) and below 子 (zǐ, a child). In traditional 學 (xué) the two hands are clearer.
生 (shēng) to be born, to grow: a sprout coming out of the ground (the bottom line is the soil).
A student is someone who grows by studying. The same 学 is in 学校 (xuéxiào) school.`,
zh:`学：上面是大人的两只手，中间 冖（屋顶），下面 子（孩子）。繁体 學 两只手更明显。生：从土里冒出的嫩芽。学校 也是这个 学。`}},
  {id:"voc-15",s:"同事",py:"tóngshì",es:"compañero de trabajo",en:"coworker",
   x:{
es:`同 (tóng) mismo, junto: 冂 (jiōng, un recinto) con 一 (yī) y 口 (kǒu) adentro. Varias bocas en el mismo recinto hablando igual.
事 (shì) asunto, trabajo: una mano sosteniendo el instrumento con que se registraban los hechos.
«Mismo trabajo». Con el mismo 同: 同学 (tóngxué) compañero de clase.
Ojo: 事 shì no es 市 shì (mercado) de 超市 (chāoshì).`,
en:`同 (tóng) same, together: 冂 (jiōng, an enclosure) with 一 (yī) and 口 (kǒu) inside. Several mouths in the same enclosure saying the same thing.
事 (shì) matter, work: a hand holding the tool used to record events.
"Same work". With the same 同: 同学 (tóngxué) classmate.
Careful: 事 shì isn't 市 shì (market) in 超市 (chāoshì).`,
zh:`同：冂（围起来的地方）里有 一 和 口，大家说同样的话。事：手拿着记事的工具。同学 也用 同。注意：事 不是 超市 的 市。`}},
  {id:"voc-16",s:"老板",t:"老闆",py:"lǎobǎn",es:"jefe / patrón",en:"boss",
   x:{
es:`老 (lǎo) respeto + 板 (bǎn, 木 mù madera + 反 fǎn sonido).
El tradicional 闆 (bǎn) es más elocuente: 門 (mén, una puerta de dos hojas) con 品 (pǐn) adentro (tres bocas apiladas: mercadería).
El que está detrás de la puerta, entre la mercadería. Se le dice a cualquier comerciante.`,
en:`老 (lǎo) respect + 板 (bǎn, 木 mù wood + 反 fǎn sound).
The traditional 闆 (bǎn) says more: 門 (mén, a two-leaf door) with 品 (pǐn) inside (three stacked mouths: goods).
The person behind the door, among the goods. Used for any shopkeeper.`,
zh:`老 + 板（木 + 反）。繁体 闆 更形象：門 里有 品（三个口，商品）：站在店门里、商品中间的人。也用来称呼任何店主。`}},
  {id:"voc-17",s:"朋友",py:"péngyǒu",es:"amigo",en:"friend",
   x:{
es:`朋 (péng) compañero: dos sartas de conchas colgadas una al lado de la otra (la moneda antigua). Hoy parecen dos 月 (yuè).
友 (yǒu) amigo: dos manos derechas tendidas en la misma dirección.
El chino junta dos sinónimos para formar una palabra.`,
en:`朋 (péng) companion: two strings of shells hanging side by side (the old currency). Today they look like two 月 (yuè).
友 (yǒu) friend: two right hands reaching in the same direction.
Chinese puts two synonyms together to form one word.`,
zh:`朋：两串并排挂着的贝壳（古代货币），现在看起来像两个 月。友：两只朝同一方向伸出的右手。两个近义字组成一个词。`}},
  {id:"voc-18",s:"书",t:"書",py:"shū",es:"libro",en:"book",
   x:{
es:`Una mano sosteniendo un pincel sobre 曰 (yuē, decir: una boca con una línea de aliento).
Escribir y libro salen del mismo dibujo. El tradicional 書 (shū) conserva el pincel arriba.
Ojo: shū primer tono, plano, contra 树 shù cuarto tono.`,
en:`A hand holding a brush over 曰 (yuē, to say: a mouth with a line of breath).
Writing and book come from the same drawing. The traditional 書 (shū) keeps the brush on top.
Careful: shū 1st tone, flat, against 树 shù 4th tone.`,
zh:`手拿毛笔在 曰（说）上面写字。繁体 書 上面保留了笔。注意：书 shū 第一声，树 shù 第四声。`}},
  {id:"voc-19",s:"手机",t:"手機",py:"shǒujī",es:"celular",en:"cell phone",
   x:{
es:`手 (shǒu) mano: los trazos horizontales son los dedos.
机 (jī) máquina: 木 (mù, madera) + 几 (jǐ, una mesita de dos patas, por el sonido). Las primeras máquinas eran de madera.
«Máquina de mano». Mismo 机 en 洗衣机 (xǐyījī) lavarropas y 飞机 (fēijī) avión.`,
en:`手 (shǒu) hand: the horizontal strokes are the fingers.
机 (jī) machine: 木 (mù, wood) + 几 (jǐ, a small two-legged table, for the sound). The first machines were made of wood.
"Hand machine". The same 机 is in 洗衣机 (xǐyījī) washing machine and 飞机 (fēijī) plane.`,
zh:`手：横画是手指。机：木 + 几（小桌子，表音），最早的机器是木头做的。洗衣机、飞机 也有 机。`}},
  {id:"voc-20",s:"汽车",t:"汽車",py:"qìchē",es:"auto",en:"car",
   x:{
es:`汽 (qì) vapor: 氵 (shuǐ, agua) + 气 (qì, líneas de vaho subiendo).
车 (chē) carro: visto desde arriba, el eje y las ruedas. En tradicional 車 (chē) se ven las dos ruedas completas.
«Carro de vapor».`,
en:`汽 (qì) steam: 氵 (shuǐ, water) + 气 (qì, lines of vapour rising).
车 (chē) cart: seen from above, the axle and the wheels. In traditional 車 (chē) both wheels are complete.
"Steam cart".`,
zh:`汽：氵 + 气（往上冒的蒸汽）。车：从上往下看的车，车轴和车轮；繁体 車 两个轮子都画全了。`}},
  {id:"voc-21",s:"房子",py:"fángzi",es:"casa",en:"house",
   x:{
es:`QUÉ ES: «casa», el edificio donde vivís.

LOS CARACTERES:
房 (fáng) cuarto, casa: 户 (hù) arriba (una puerta de una sola hoja; media 门 mén) + 方 (fāng) abajo (solo por el sonido). Un espacio con su puerta: una habitación, y por extensión la casa.
子 (zǐ): el bebé con la cabeza grande. Acá NO significa niño: es un sufijo vacío que se agrega a muchos sustantivos (房子 fángzi, 桌子 zhuōzi mesa, 椅子 yǐzi silla). Por eso se pronuncia suave.

DIFERENCIA CON 家 jiā: 房子 (fángzi) es el edificio (casa como construcción). 家 es el hogar, la familia: 我家 (wǒ jiā) mi casa / mi familia, 回家 (huíjiā) volver a casa. 家 = 宀 (mián, techo) + 豕 (shǐ, un cerdo): antiguamente, un cerdo bajo el techo era la señal de una familia.

PRONUNCIACIÓN: fángzi. La segunda sílaba en tono neutro, muy corta. Michelle: «esta es semisílaba».`,
en:`WHAT IT IS: "house", the building you live in.

THE CHARACTERS:
房 (fáng) room, house: 户 (hù) on top (a single-leaf door; half of 门 mén) + 方 (fāng) below (only for the sound). A space with its door: a room, and by extension the house.
子 (zǐ): the big-headed baby. Here it does NOT mean child: it's an empty suffix added to many nouns (房子 fángzi, 桌子 zhuōzi table, 椅子 yǐzi chair). That's why it's pronounced softly.

VS 家 jiā: 房子 (fángzi) is the building (house as a structure). 家 is home, family: 我家 (wǒ jiā) my home / my family, 回家 (huíjiā) go home. 家 = 宀 (mián, roof) + 豕 (shǐ, a pig): in ancient times, a pig under the roof was the sign of a household.

PRONUNCIATION: fángzi. Second syllable neutral tone, very short. Michelle: "this is a half-syllable".`,
zh:`是什么："房子"，指建筑物。房：户（单扇门）+ 方（表音）。子 是没有意思的词尾，读轻声。家 是家庭、家里：宀 + 豕，屋里养猪就是一个家。`}},
  {id:"voc-22",s:"超市",py:"chāoshì",es:"supermercado",en:"supermarket",
   x:{
es:`超 (chāo) sobrepasar: 走 (zǒu, caminar: una figura inclinada sobre 止 zhǐ, la huella de un pie) + 召 (zhào, sonido: 刀 dāo cuchillo sobre 口 kǒu boca).
市 (shì) mercado: 巾 (jīn, un paño colgando de una barra) bajo un trazo. Los puestos se reconocían por sus toldos.
Super + mercado, calcado del inglés. Mismo 超 en 超人 (chāorén) superman; mismo 市 en 城市 (chéngshì) ciudad.`,
en:`超 (chāo) to exceed: 走 (zǒu, to walk: a leaning figure over 止 zhǐ, a footprint) + 召 (zhào, sound: 刀 dāo knife over 口 kǒu mouth).
市 (shì) market: 巾 (jīn, a cloth hanging from a bar) under a stroke. Stalls were recognised by their awnings.
Super + market, copied from English. The same 超 is in 超人 (chāorén) superman; the same 市 in 城市 (chéngshì) city.`,
zh:`超：走（弯身的人 + 止 脚印）+ 召（表音：刀 在 口 上）。市：巾（挂在横杆上的布），摊位用布篷标记。仿照英文 supermarket。超人、城市 里有同样的字。`}}
  ]
});
