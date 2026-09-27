/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, x character explanation (Spanish), say optional text for the voice.
   Source: Michelle's 家人稱謂 flashcards (core terms). The rest is in familia2.js. */
window.TOPICS.push({
  id:"familia", glyph:"家",
  name:{es:"Familia",en:"Family",zh:"家人称谓"},
  cards:[
  {id:"fam-01",s:"爸爸",py:"bàba",es:"papá",en:"dad",
   x:`父 (arriba) + 巴 (sonido).
父: una mano sosteniendo un hacha o un bastón, el que trabaja y manda.
Se dobla como casi toda palabra familiar; la segunda sílaba va en tono neutro.`},
  {id:"fam-02",s:"妈妈",t:"媽媽",py:"māma",es:"mamá",en:"mom",
   x:`女 (la mujer arrodillada) + 马 (caballo, solo por el sonido).
Primer tono, plano. No confundir con 骂 mà (retar) ni 吗 ma (partícula).`},
  {id:"fam-03",s:"父亲",t:"父親",py:"fùqīn",es:"padre (formal)",en:"father (formal)",
   x:`父 (la mano con el hacha) + 亲 pariente cercano.
En tradicional 親 lleva 見 (ver) a la derecha: los que ves de cerca.
Forma escrita o formal; en el día a día se dice 爸爸.`},
  {id:"fam-04",s:"母亲",t:"母親",py:"mǔqīn",es:"madre (formal)",en:"mother (formal)",
   x:`母 (la mujer con dos puntos que son los pechos: la que amamanta) + 亲 pariente.
Forma formal; en el día a día, 妈妈.`},
  {id:"fam-05",s:"爸比",py:"bàbǐ",es:"papi",en:"daddy",
   x:`爸 papá + 比 (dos personas de perfil una junto a otra; acá solo por el sonido).
Cariñoso y muy de Taiwán, calcado del inglés «daddy».`},
  {id:"fam-06",s:"妈咪",t:"媽咪",py:"māmī",es:"mami",en:"mommy",
   x:`妈 + 咪 (口 boca + 米 arroz, solo por el sonido). Calcado del inglés «mommy».`},
  {id:"fam-07",s:"哥哥",py:"gēge",es:"hermano mayor",en:"older brother",
   x:`可 apilado dos veces, solo por el sonido. 可 = 丁 (un clavo de perfil) + 口 (boca).`},
  {id:"fam-08",s:"姐姐",py:"jiějie",es:"hermana mayor",en:"older sister",
   x:`女 (mujer) + 且 (sonido; su dibujo sería una tablilla de ancestros apilada).`},
  {id:"fam-09",s:"弟弟",py:"dìdi",es:"hermano menor",en:"younger brother",
   x:`Una cuerda enrollada en orden alrededor de una estaca: de ahí «secuencia» y el hermano que viene después.
El mismo dibujo está en 第, que forma los ordinales: 第一 primero.`},
  {id:"fam-10",s:"妹妹",py:"mèimei",es:"hermana menor",en:"younger sister",
   x:`女 (mujer) + 未 (todavía no: un árbol 木 con una rama extra, el árbol que aún no terminó de crecer).
La hermana que todavía no creció. El mejor truco para no confundirla con 姐姐.`},
  {id:"fam-11",s:"兄弟姐妹",py:"xiōngdì jiěmèi",es:"hermanos (todos)",en:"siblings",
   x:`兄 hermano mayor (口 boca sobre 儿 piernas: el que habla por la familia en los ritos) + 弟 + 姐 + 妹.
Los cuatro tipos de hermano juntos: así se dice «hermanos» en general.`},
  {id:"fam-12",s:"儿子",t:"兒子",py:"érzi",es:"hijo",en:"son",
   x:`儿: un chico con la cabeza y las piernas marcadas. En tradicional 兒 la cabeza es grande y abierta: la fontanela del bebé.
子: el bebé envuelto.`},
  {id:"fam-13",s:"女儿",t:"女兒",py:"nǚ'ér",es:"hija",en:"daughter",
   x:`女 mujer + 儿 niño.`},
  {id:"fam-14",s:"爷爷",t:"爺爺",py:"yéye",es:"abuelo (paterno)",en:"grandfather (father's side)",
   x:`父 (padre, la mano con el hacha) arriba + 耶 (sonido) abajo, en tradicional 爺.
Papá del papá.`},
  {id:"fam-15",s:"奶奶",py:"nǎinai",es:"abuela (paterna)",en:"grandmother (father's side)",
   x:`奶 leche: 女 (mujer) + 乃 (el trazo curvo del pecho). La que amamantó.
Mamá del papá. Dos terceros tonos: nǎinai.`},
  {id:"fam-16",s:"外公",py:"wàigōng",es:"abuelo (materno)",en:"grandfather (mother's side)",
   x:`外 afuera + 公 (señor mayor).
外: 夕 (la luna del atardecer) + 卜 (la grieta de una adivinación). Adivinar de noche, fuera de la regla: «afuera».
La familia tradicional china es paterna: los parientes de la mamá son los «de afuera». Por eso sus abuelos llevan 外.`},
  {id:"fam-17",s:"外婆",py:"wàipó",es:"abuela (materna)",en:"grandmother (mother's side)",
   x:`外 afuera + 婆 señora mayor (女 mujer + 波 ola, por el sonido).
La abuela «de afuera»: mamá de la mamá.`},
  {id:"fam-18",s:"伯伯",py:"bóbo",es:"tío (hermano mayor del papá)",en:"uncle (father's older brother)",
   x:`亻 (persona) + 白 (sonido). 伯 es «el mayor de los hermanos».
El chino distingue lado paterno o materno, y mayor o menor que el padre: por eso hay tantas palabras donde el español tiene solo «tío».`},
  {id:"fam-19",s:"伯父",py:"bófù",es:"tío (hermano mayor del papá), formal",en:"uncle (father's older brother), formal",
   x:`伯 el mayor + 父 padre. Versión formal de 伯伯.`},
  {id:"fam-20",s:"伯母",py:"bómǔ",es:"tía (esposa del hermano mayor del papá)",en:"aunt (wife of father's older brother)",
   x:`伯 + 母 madre. La esposa del 伯伯.`},
  {id:"fam-21",s:"叔叔",py:"shūshu",es:"tío (hermano menor del papá)",en:"uncle (father's younger brother)",
   x:`叔: 尗 (una planta de poroto, por el sonido) + 又 (la mano derecha).
También se usa para cualquier señor adulto, como «tío» cuando un chico le habla a un amigo de sus papás.`},
  {id:"fam-22",s:"婶婶",t:"嬸嬸",py:"shěnshen",es:"tía (esposa del hermano menor del papá)",en:"aunt (wife of father's younger brother)",
   x:`女 (mujer) + 审 (sonido; en tradicional 審). La esposa del 叔叔.`},
  {id:"fam-23",s:"姑姑",py:"gūgu",es:"tía (hermana del papá)",en:"aunt (father's sister)",
   x:`女 (mujer) + 古 (antiguo, por el sonido: 十 sobre 口).`},
  {id:"fam-24",s:"姑妈",t:"姑媽",py:"gūmā",es:"tía (hermana mayor del papá)",en:"aunt (father's older sister)",
   x:`姑 + 妈. Según el apunte de Michelle, la hermana mayor del papá; en China continental muchas veces se usa para cualquier hermana del papá.`},
  {id:"fam-25",s:"姑丈",py:"gūzhàng",es:"tío (esposo de la tía paterna)",en:"uncle (husband of father's sister)",
   x:`姑 (la tía paterna) + 丈, que es una mano sosteniendo una vara de medir: la medida de un hombre adulto, y de ahí «marido».`},
  {id:"fam-26",s:"舅父",py:"jiùfù",es:"tío (hermano de la mamá)",en:"uncle (mother's brother)",
   x:`舅: 臼 (un mortero, por el sonido) sobre 男 (hombre: campo + fuerza) + 父 padre.
En el habla se dice más 舅舅.`},
  {id:"fam-27",s:"舅母",py:"jiùmǔ",es:"tía (esposa del hermano de la mamá)",en:"aunt (wife of mother's brother)",
   x:`舅 + 母. La esposa del 舅父.`},
  {id:"fam-28",s:"姨妈",t:"姨媽",py:"yímā",es:"tía (hermana mayor de la mamá)",en:"aunt (mother's older sister)",
   x:`姨: 女 (mujer) + 夷 (sonido). + 妈.
La tía del lado materno. En el habla también 阿姨, que además se usa para cualquier señora.`},
  {id:"fam-29",s:"姨丈",py:"yízhàng",es:"tío (esposo de la tía materna)",en:"uncle (husband of mother's sister)",
   x:`姨 (la tía materna) + 丈 (marido: la mano con la vara de medir).`}
  ]
});
