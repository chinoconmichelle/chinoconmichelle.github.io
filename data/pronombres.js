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
es:`Originalmente el dibujo de un arma de asta con hoja dentada, una especie de alabarda.
No tiene relación con la idea de «yo»: se tomó prestado por el sonido. Mejor no inventarle una historia.
Sirve para yo y para mí: el chino no cambia la palabra.`,
en:`Originally a drawing of a pole weapon with a serrated blade, a kind of halberd.
It has nothing to do with the idea of "I": it was borrowed for its sound. Better not to invent a story for it.
It means both I and me: Chinese doesn't change the word.`,
zh:`本来是一种带锯齿刃的长柄兵器。和"我"的意思无关，只是借音。主格宾格都用 我。`}},
  {id:"pro-02",s:"你",py:"nǐ",es:"vos / tú",en:"you",
   x:{
es:`亻 (persona, la versión aplastada de 人 cuando va a la izquierda) + 尔 (sonido).
El radical 亻 aparece en casi todas las palabras referidas a gente.`,
en:`亻 (person, the squeezed form of 人 on the left) + 尔 (sound).
The 亻 radical appears in almost every word about people.`,
zh:`亻（人 在左边的写法）+ 尔（表音）。和人有关的字大多有 亻。`}},
  {id:"pro-03",s:"他",py:"tā",es:"él",en:"he / him",
   x:{
es:`亻 (persona) + 也 (sonido; su dibujo original es discutido).
Michelle también lo usa de forma neutra, para él o ella.`,
en:`亻 (person) + 也 (sound; its original drawing is disputed).
Michelle also uses it neutrally, for he or she.`,
zh:`亻 + 也（表音，原来的字形有争议）。Michelle 老师也用它泛指男女。`}},
  {id:"pro-04",s:"她",py:"tā",es:"ella",en:"she / her",
   x:{
es:`女 (la mujer arrodillada) + 也, el mismo componente de 他.
Se pronuncia igual que 他. Se inventó recién a principios del siglo XX; antes 他 servía para ambos.`,
en:`女 (the kneeling woman) + 也, the same component as in 他.
Pronounced exactly like 他. It was only invented in the early 20th century; before that 他 covered both.`,
zh:`女 + 也，和 他 同一个表音部件，读音相同。二十世纪初才造出来，以前 他 男女通用。`}},
  {id:"pro-05",s:"它",py:"tā",es:"ello (animales y cosas)",en:"it",cl:"c3",
   x:{
es:`Originalmente el dibujo de una cobra con la cabeza levantada. Por eso aparece también en 蛇, serpiente.
Hoy es el «it» para animales y cosas. Se pronuncia igual que 他 y 她.`,
en:`Originally a drawing of a cobra with its head raised. That's why it also appears in 蛇, snake.
Today it's the "it" for animals and things. Pronounced like 他 and 她.`,
zh:`本来是抬头的眼镜蛇，所以 蛇 字里也有它。现在指动物和东西，读音和 他、她 一样。`}},
  {id:"pro-06",s:"您",py:"nín",es:"usted",en:"you (polite)",
   x:{
es:`你 (vos) con 心 debajo. 心 es un corazón dibujado con sus cavidades.
«Vos sobre el corazón»: la forma respetuosa. Termina en n: nín.`,
en:`你 (you) with 心 underneath. 心 is a heart drawn with its chambers.
"You on the heart": the respectful form. It ends in n: nín.`,
zh:`你 下面加 心（画出心室的心脏）。把"你"放在心上，是尊称。`}},
  {id:"pro-07",s:"们",t:"們",py:"men",es:"marca de plural (personas)",en:"plural marker (people)",
   x:{
es:`亻 (persona) + 门 (una puerta de dos hojas vista de frente, solo por el sonido; en tradicional 門 se ven las dos hojas).
Se agrega a los pronombres para el plural. Solo se usa con personas, nunca con objetos.`,
en:`亻 (person) + 门 (a two-leaf door seen from the front, only for the sound; in traditional 門 you see both leaves).
Added to pronouns to make them plural. Only for people, never for objects.`,
zh:`亻 + 门（两扇门，表音；繁体 門 能看到两扇门板）。加在代词后表示复数，只用于人。`}},
  {id:"pro-08",s:"我们",t:"我們",py:"wǒmen",es:"nosotros",en:"we / us",
   x:{
es:`我 yo + 们 plural.`,
en:`我 I + 们 plural.`,
zh:`我 + 们。`}},
  {id:"pro-09",s:"你们",t:"你們",py:"nǐmen",es:"ustedes",en:"you (plural)",
   x:{
es:`你 vos + 们 plural.`,
en:`你 you + 们 plural.`,
zh:`你 + 们。`}},
  {id:"pro-10",s:"他们",t:"他們",py:"tāmen",es:"ellos",en:"they / them",
   x:{
es:`他 él + 们 plural. Para un grupo solo de mujeres se escribe 她们.`,
en:`他 he + 们 plural. For a group of only women it's written 她们.`,
zh:`他 + 们。全是女性时写 她们。`}},
  {id:"pro-11",s:"您们",t:"您們",py:"nínmen",es:"ustedes (respetuoso)",en:"you (plural, polite)",
   x:{
es:`您 usted + 们 plural. Aparece por escrito; al hablar es poco común.`,
en:`您 you (polite) + 们 plural. Seen in writing; rare in speech.`,
zh:`您 + 们。多见于书面，口语少用。`}},
  {id:"pro-12",s:"的",py:"de",es:"partícula posesiva",en:"possessive particle ('s)",
   x:{
es:`白 + 勺. 白 blanco es de origen discutido; el 日 de adentro no es el sol. 勺 es un cucharón con algo dentro.
El significado original se perdió: hoy es puramente gramatical y es el carácter más frecuente del idioma.
Funciona como el 's del inglés: pronombre + 的 = posesivo.`,
en:`白 + 勺. 白 white has a disputed origin; the 日 inside isn't the sun. 勺 is a ladle with something in it.
The original meaning is lost: today it's purely grammatical and the most frequent character in the language.
It works like the English 's: pronoun + 的 = possessive.`,
zh:`白 + 勺。白 的来源有争议，里面的 日 不是太阳；勺 是装着东西的勺子。本义已经消失，现在是纯粹的语法词，也是最常用的汉字。`}},
  {id:"pro-13",s:"我的",py:"wǒ de",es:"mi / mío",en:"my / mine",
   x:{
es:`我 yo + 的 's. Literalmente «I's».`,
en:`我 I + 的 's. Literally "I's".`,
zh:`我 + 的。`}},
  {id:"pro-14",s:"你的",py:"nǐ de",es:"tu / tuyo",en:"your / yours",
   x:{
es:`你 vos + 的 's.`,
en:`你 you + 的 's.`,
zh:`你 + 的。`}},
  {id:"pro-15",s:"他的",py:"tā de",es:"su / de él",en:"his",
   x:{
es:`他 él + 的 's.`,
en:`他 he + 的 's.`,
zh:`他 + 的。`}},
  {id:"pro-16",s:"她的",py:"tā de",es:"su / de ella",en:"her / hers",
   x:{
es:`她 ella + 的 's. Suena igual que 他的.`,
en:`她 she + 的 's. Sounds exactly like 他的.`,
zh:`她 + 的，读音和 他的 一样。`}},
  {id:"pro-17",s:"我们的",t:"我們的",py:"wǒmen de",es:"nuestro",en:"our / ours",
   x:{
es:`我们 nosotros + 的 's.`,
en:`我们 we + 的 's.`,
zh:`我们 + 的。`}},
  {id:"pro-18",s:"你们的",t:"你們的",py:"nǐmen de",es:"de ustedes",en:"your (plural)",
   x:{
es:`你们 ustedes + 的 's.`,
en:`你们 you (plural) + 的 's.`,
zh:`你们 + 的。`}},
  {id:"pro-19",s:"他们的",t:"他們的",py:"tāmen de",es:"su / de ellos",en:"their / theirs",
   x:{
es:`他们 ellos + 的 's.`,
en:`他们 they + 的 's.`,
zh:`他们 + 的。`}},
  {id:"pro-20",s:"您的",py:"nín de",es:"su (de usted)",en:"your (polite)",
   x:{
es:`您 usted + 的 's.`,
en:`您 you (polite) + 的 's.`,
zh:`您 + 的。`}},
  {id:"pro-21",s:"我爸爸 = 我的爸爸",py:"wǒ bàba = wǒ de bàba",es:"mi papá",en:"my dad",cl:"c2",say:"我爸爸",
   x:{
es:`Con familiares en singular se puede quitar el 的, para que no suene todo de-de-de. En plural no se quita.
爸 papá: 父 (una mano sosteniendo un hacha, el que trabaja) + 巴 (sonido).`,
en:`With a family member in the singular you can drop the 的, so it doesn't sound like de-de-de. In the plural you keep it.
爸 dad: 父 (a hand holding an axe, the one who works) + 巴 (sound).`,
zh:`单数的亲属称谓可以省略 的，免得 的 太多。复数不省略。
爸：父（拿着斧头的手）+ 巴（表音）。`}}
  ]
});
