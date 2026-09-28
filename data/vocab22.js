/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"vocab22", glyph:"词",
  name:{"es": "Los 22 vocabularios", "en": "The 22 words", "zh": "二十二个词"},
  cl:"c1",
  cards:[
  {id:"voc-01",s:"狗",py:"gǒu",es:"perro",en:"dog",
   x:{
es:`犭 + 句.
犭 es 犬 (perro) aplastado: el dibujo original era un perro de perfil con la cola enroscada. Aparece en casi todo animal de cuatro patas.
句 jù está solo por el sonido; adentro tiene 口 (una boca abierta).`,
en:`犭 + 句.
犭 is 犬 (dog), squeezed: the original drawing was a dog in profile with a curled tail. It appears in almost every four-legged animal.
句 jù is only there for the sound; inside it is 口 (an open mouth).`,
zh:`犭 + 句。犭 是 犬 的偏旁写法：原来画的是尾巴卷起的狗。四条腿的动物大多有 犭。句 只表音。`}},
  {id:"voc-02",s:"猫",t:"貓",py:"māo",es:"gato",en:"cat",
   x:{
es:`犭 (animal de cuatro patas) + 苗 miáo.
苗 brote: 艹 arriba (dos tallitos de hierba) + 田 abajo (un campo de arroz visto desde arriba, dividido en cuatro parcelas).
Acá 苗 está por el sonido, y da la casualidad de que miáo es el maullido.
En tradicional 貓 lleva 豸, un animal de lomo largo.`,
en:`犭 (four-legged animal) + 苗 miáo.
苗 sprout: 艹 on top (two blades of grass) + 田 below (a rice field seen from above, split into four plots).
Here 苗 is only for the sound, and miáo happens to be the miaow.
In traditional 貓 it has 豸, a long-backed animal.`,
zh:`犭 + 苗。苗：艹（两棵小草）+ 田（从上往下看的稻田）。这里 苗 表音，恰好 miáo 就是猫叫声。繁体 貓 用 豸（长背的野兽）。`}},
  {id:"voc-03",s:"树",t:"樹",py:"shù",es:"árbol",en:"tree",
   x:{
es:`木 árbol: el trazo vertical es el tronco, el horizontal las ramas, y los dos de abajo las raíces.
En tradicional 樹: 木 + 壴 (un tambor sobre su pedestal) + 寸 (la mano). Plantar algo erguido.
Ojo: shù cuarto tono, contra 书 shū (libro), primer tono.`,
en:`木 tree: the vertical stroke is the trunk, the horizontal one the branches, the two lower ones the roots.
In traditional 樹: 木 + 壴 (a drum on its stand) + 寸 (the hand). Planting something upright.
Careful: shù is 4th tone, against 书 shū (book), 1st tone.`,
zh:`木：竖是树干，横是树枝，下面两笔是树根。繁体 樹：木 + 壴（架子上的鼓）+ 寸（手），把东西竖直种下。注意：树 shù 第四声，书 shū 第一声。`}},
  {id:"voc-04",s:"水",py:"shuǐ",es:"agua",en:"water",
   x:{
es:`Pictograma puro: una corriente de agua. El trazo central es el cauce y los laterales las salpicaduras.
A la izquierda se comprime en 氵 (tres gotas) y marca todo lo líquido: 洗 lavar, 汽 vapor, 没 hundirse.`,
en:`A pure pictogram: a stream of water. The central stroke is the current and the side strokes the splashes.
On the left it shrinks to 氵 (three drops) and marks anything liquid: 洗 to wash, 汽 steam, 没 to sink.`,
zh:`象形字：一道水流，中间是主流，两边是水花。在左边写成 氵（三点水），表示和液体有关：洗、汽、没。`}},
  {id:"voc-05",s:"咖啡",py:"kāfēi",es:"café",en:"coffee",
   x:{
es:`Préstamo del inglés coffee: puramente fonético.
Los dos llevan 口 (boca) a la izquierda: señal de que se usan solo por su sonido.
A la derecha 加 (agregar: 力 fuerza + 口) y 非 (no: dos alas opuestas). Ninguno de esos significados cuenta acá.`,
en:`A loan from English "coffee": purely phonetic.
Both have 口 (mouth) on the left, the sign that they're used only for their sound.
On the right 加 (to add: 力 strength + 口) and 非 (not: two opposing wings). Neither meaning counts here.`,
zh:`从英文 coffee 音译。两个字左边都有 口，表示只借读音。右边的 加 和 非 的意思在这里都不算。`}},
  {id:"voc-06",s:"茶",py:"chá",es:"té",en:"tea",
   x:{
es:`艹 (dos brotes de hierba, todo lo vegetal) + 人 (una persona) + 木 (un árbol).
La persona entre la hierba y el arbusto, recogiendo hojas. Segundo tono: chá sube.`,
en:`艹 (two sprouts of grass, anything plant-like) + 人 (a person) + 木 (a tree).
The person between the grass and the bush, picking leaves. 2nd tone: chá rises.`,
zh:`艹 + 人 + 木：人在草木之间采叶子。第二声。`}},
  {id:"voc-07",s:"饭",t:"飯",py:"fàn",es:"arroz cocido / comida",en:"cooked rice / meal",
   x:{
es:`饣 es 食 (comer: una vasija con tapa y comida) aplastado; marca lo comestible.
反 fǎn está por el sonido: 厂 (un acantilado) + 又 (la mano derecha).`,
en:`饣 is 食 (to eat: a covered pot with food), squeezed; it marks anything edible.
反 fǎn is there for the sound: 厂 (a cliff) + 又 (the right hand).`,
zh:`饣 是 食（有盖的食器）的偏旁写法，表示和吃有关。反 表音：厂（山崖）+ 又（右手）。`}},
  {id:"voc-08",s:"面包",t:"麵包",py:"miànbāo",es:"pan",en:"bread",
   x:{
es:`面 harina (originalmente «cara, superficie») + 包 envolver.
包: 勹 (un brazo que rodea) con 巳 adentro (un feto). Envolver como el útero envuelve.
Pan = la harina envuelta en forma de bollo.
En tradicional 麵 lleva 麥 (trigo) a la izquierda: queda claro que es harina.`,
en:`面 flour (originally "face, surface") + 包 to wrap.
包: 勹 (an arm wrapping around) with 巳 inside (a foetus). Wrapping the way the womb wraps.
Bread = flour wrapped into a bun.
In traditional 麵 has 麥 (wheat) on the left: it's clearly flour.`,
zh:`面（本义"脸、表面"）+ 包。包：勹（环抱的手臂）里面有 巳（胎儿），像子宫包着胎儿。繁体 麵 左边是 麥，表明是面粉。`}},
  {id:"voc-09",s:"沙拉",py:"shālā",es:"ensalada",en:"salad",
   x:{
es:`Préstamo del inglés salad, solo por el sonido.
沙 arena: 氵 agua + 少 poco (lo que queda cuando hay poca agua). 拉 tirar: 扌 (la mano) + 立 (una persona de pie).
Ninguno de los dos significados aplica acá.`,
en:`A loan from English "salad", only for the sound.
沙 sand: 氵 water + 少 little (what's left when there's little water). 拉 to pull: 扌 (hand) + 立 (a person standing).
Neither meaning applies here.`,
zh:`从英文 salad 音译。沙：氵 + 少（水少了剩下的）。拉：扌 + 立。这里两个字的意思都不算。`}},
  {id:"voc-10",s:"奶酪",py:"nǎilào",es:"queso",en:"cheese",
   x:{
es:`奶 leche: 女 (la mujer) + 乃 (un trazo curvo que representa el pecho).
酪 lácteo cuajado: 酉 (una vasija de fermentación con tapa, la misma de 酒 vino) + 各 (sonido).
Leche fermentada que se coagula, como explicó Michelle.`,
en:`奶 milk: 女 (the woman) + 乃 (a curved stroke representing the breast).
酪 curdled dairy: 酉 (a fermentation jar with its lid, the same as in 酒 wine) + 各 (sound).
Fermented milk that curdles, as Michelle explained.`,
zh:`奶：女 + 乃（弯的笔画代表乳房）。酪：酉（有盖的发酵罐，和 酒 一样）+ 各（表音）。发酵凝固的奶。`}},
  {id:"voc-11",s:"苹果",t:"蘋果",py:"píngguǒ",es:"manzana",en:"apple",
   x:{
es:`苹: 艹 (hierba) + 平 píng (plano, una balanza en equilibrio), por el sonido.
果 fruta: 木 (el árbol) abajo con la fruta dibujada arriba entre las ramas.
Ese 果 vuelve en 糖果 caramelo y 水果 fruta. Cualquier fruta + 树 = su árbol: 苹果树 manzano.`,
en:`苹: 艹 (grass) + 平 píng (flat, a balanced scale), for the sound.
果 fruit: 木 (the tree) below with the fruit drawn above among the branches.
That 果 comes back in 糖果 candy and 水果 fruit. Any fruit + 树 = its tree: 苹果树 apple tree.`,
zh:`苹：艹 + 平（表音）。果：木 上面画着果实。糖果、水果 里也有 果。水果名 + 树 = 果树：苹果树。`}},
  {id:"voc-12",s:"糖果",py:"tángguǒ",es:"caramelo",en:"candy",
   x:{
es:`糖 azúcar: 米 (granos de arroz desparramados alrededor de un eje) + 唐 (sonido). El azúcar se extraía de granos.
果: la fruta sobre el árbol. Caramelo = la «fruta» de azúcar.`,
en:`糖 sugar: 米 (rice grains scattered around a stalk) + 唐 (sound). Sugar used to be extracted from grain.
果: the fruit on the tree. Candy = the sugar "fruit".`,
zh:`糖：米（散开的米粒）+ 唐（表音），从前从谷物里提糖。果：树上的果实。`}},
  {id:"voc-13",s:"老师",t:"老師",py:"lǎoshī",es:"maestro / profesor",en:"teacher",
   x:{
es:`老: un anciano encorvado de pelo largo apoyado en un bastón. Acá marca respeto, no edad.
师 maestro, experto: el mismo de 工程师 ingeniero.
Solo para maestros hasta secundaria.
Ojo: en 老鼠 (ratón) y 老虎 (tigre) el 老 es un prefijo sin significado; no tiene que ver con 老师.`,
en:`老: a stooped old man with long hair leaning on a stick. Here it marks respect, not age.
师 master, expert: the same as in 工程师 engineer.
Only for teachers up to secondary school.
Careful: in 老鼠 (mouse) and 老虎 (tiger) the 老 is a meaningless prefix, unrelated to 老师.`,
zh:`老：弯腰、长发、拄着拐杖的老人，这里表示尊敬，不是年龄。师：专家，和 工程师 的 师 一样。注意：老鼠、老虎 的 老 是没有意思的词头。`}},
  {id:"voc-14",s:"学生",t:"學生",py:"xuéshēng",es:"alumno",en:"student",
   x:{
es:`学 estudiar: arriba dos manos de un adulto, en el medio 冖 (un techo) y abajo 子 (un niño). En tradicional 學 se ven mejor las dos manos.
生 nacer, crecer: un brote saliendo de la tierra (la línea de abajo es el suelo).
El alumno es el que crece estudiando. Mismo 学 en 学校 escuela.`,
en:`学 to study: at the top an adult's two hands, in the middle 冖 (a roof) and below 子 (a child). In traditional 學 the two hands are clearer.
生 to be born, to grow: a sprout coming out of the ground (the bottom line is the soil).
A student is someone who grows by studying. The same 学 is in 学校 school.`,
zh:`学：上面是大人的两只手，中间 冖（屋顶），下面 子（孩子）。繁体 學 两只手更明显。生：从土里冒出的嫩芽。学校 也是这个 学。`}},
  {id:"voc-15",s:"同事",py:"tóngshì",es:"compañero de trabajo",en:"coworker",
   x:{
es:`同 mismo, junto: 冂 (un recinto) con 一 y 口 adentro. Varias bocas en el mismo recinto hablando igual.
事 asunto, trabajo: una mano sosteniendo el instrumento con que se registraban los hechos.
«Mismo trabajo». Con el mismo 同: 同学 compañero de clase.
Ojo: 事 shì no es 市 shì (mercado) de 超市.`,
en:`同 same, together: 冂 (an enclosure) with 一 and 口 inside. Several mouths in the same enclosure saying the same thing.
事 matter, work: a hand holding the tool used to record events.
"Same work". With the same 同: 同学 classmate.
Careful: 事 shì isn't 市 shì (market) in 超市.`,
zh:`同：冂（围起来的地方）里有 一 和 口，大家说同样的话。事：手拿着记事的工具。同学 也用 同。注意：事 不是 超市 的 市。`}},
  {id:"voc-16",s:"老板",t:"老闆",py:"lǎobǎn",es:"jefe / patrón",en:"boss",
   x:{
es:`老 respeto + 板 (木 madera + 反 sonido).
El tradicional 闆 es más elocuente: 門 (una puerta de dos hojas) con 品 adentro (tres bocas apiladas: mercadería).
El que está detrás de la puerta, entre la mercadería. Se le dice a cualquier comerciante.`,
en:`老 respect + 板 (木 wood + 反 sound).
The traditional 闆 says more: 門 (a two-leaf door) with 品 inside (three stacked mouths: goods).
The person behind the door, among the goods. Used for any shopkeeper.`,
zh:`老 + 板（木 + 反）。繁体 闆 更形象：門 里有 品（三个口，商品）：站在店门里、商品中间的人。也用来称呼任何店主。`}},
  {id:"voc-17",s:"朋友",py:"péngyǒu",es:"amigo",en:"friend",
   x:{
es:`朋 compañero: dos sartas de conchas colgadas una al lado de la otra (la moneda antigua). Hoy parecen dos 月.
友 amigo: dos manos derechas tendidas en la misma dirección.
El chino junta dos sinónimos para formar una palabra.`,
en:`朋 companion: two strings of shells hanging side by side (the old currency). Today they look like two 月.
友 friend: two right hands reaching in the same direction.
Chinese puts two synonyms together to form one word.`,
zh:`朋：两串并排挂着的贝壳（古代货币），现在看起来像两个 月。友：两只朝同一方向伸出的右手。两个近义字组成一个词。`}},
  {id:"voc-18",s:"书",t:"書",py:"shū",es:"libro",en:"book",
   x:{
es:`Una mano sosteniendo un pincel sobre 曰 (decir: una boca con una línea de aliento).
Escribir y libro salen del mismo dibujo. El tradicional 書 conserva el pincel arriba.
Ojo: shū primer tono, plano, contra 树 shù cuarto tono.`,
en:`A hand holding a brush over 曰 (to say: a mouth with a line of breath).
Writing and book come from the same drawing. The traditional 書 keeps the brush on top.
Careful: shū 1st tone, flat, against 树 shù 4th tone.`,
zh:`手拿毛笔在 曰（说）上面写字。繁体 書 上面保留了笔。注意：书 shū 第一声，树 shù 第四声。`}},
  {id:"voc-19",s:"手机",t:"手機",py:"shǒujī",es:"celular",en:"cell phone",
   x:{
es:`手 mano: los trazos horizontales son los dedos.
机 máquina: 木 (madera) + 几 (una mesita de dos patas, por el sonido). Las primeras máquinas eran de madera.
«Máquina de mano». Mismo 机 en 洗衣机 lavarropas y 飞机 avión.`,
en:`手 hand: the horizontal strokes are the fingers.
机 machine: 木 (wood) + 几 (a small two-legged table, for the sound). The first machines were made of wood.
"Hand machine". The same 机 is in 洗衣机 washing machine and 飞机 plane.`,
zh:`手：横画是手指。机：木 + 几（小桌子，表音），最早的机器是木头做的。洗衣机、飞机 也有 机。`}},
  {id:"voc-20",s:"汽车",t:"汽車",py:"qìchē",es:"auto",en:"car",
   x:{
es:`汽 vapor: 氵 (agua) + 气 (líneas de vaho subiendo).
车 carro: visto desde arriba, el eje y las ruedas. En tradicional 車 se ven las dos ruedas completas.
«Carro de vapor».`,
en:`汽 steam: 氵 (water) + 气 (lines of vapour rising).
车 cart: seen from above, the axle and the wheels. In traditional 車 both wheels are complete.
"Steam cart".`,
zh:`汽：氵 + 气（往上冒的蒸汽）。车：从上往下看的车，车轴和车轮；繁体 車 两个轮子都画全了。`}},
  {id:"voc-21",s:"房子",py:"fángzi",es:"casa",en:"house",
   x:{
es:`房 cuarto: 户 (una puerta de una sola hoja) + 方 (sonido).
子 el bebé, usado como sufijo sin significado.
Segunda sílaba en tono neutro: fángzi.`,
en:`房 room: 户 (a single-leaf door) + 方 (sound).
子 the baby, used as a suffix with no meaning.
Second syllable in the neutral tone: fángzi.`,
zh:`房：户（单扇门）+ 方（表音）。子 是没有意思的词尾，读轻声。`}},
  {id:"voc-22",s:"超市",py:"chāoshì",es:"supermercado",en:"supermarket",
   x:{
es:`超 sobrepasar: 走 (caminar: una figura inclinada sobre 止, la huella de un pie) + 召 (sonido: 刀 cuchillo sobre 口 boca).
市 mercado: 巾 (un paño colgando de una barra) bajo un trazo. Los puestos se reconocían por sus toldos.
Super + mercado, calcado del inglés. Mismo 超 en 超人 superman; mismo 市 en 城市 ciudad.`,
en:`超 to exceed: 走 (to walk: a leaning figure over 止, a footprint) + 召 (sound: 刀 knife over 口 mouth).
市 market: 巾 (a cloth hanging from a bar) under a stroke. Stalls were recognised by their awnings.
Super + market, copied from English. The same 超 is in 超人 superman; the same 市 in 城市 city.`,
zh:`超：走（弯身的人 + 止 脚印）+ 召（表音：刀 在 口 上）。市：巾（挂在横杆上的布），摊位用布篷标记。仿照英文 supermarket。超人、城市 里有同样的字。`}}
  ]
});
