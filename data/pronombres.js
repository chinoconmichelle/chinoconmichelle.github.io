/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, x character explanation (Spanish), say optional text for the voice. */
window.TOPICS.push({
  id:"pronombres", glyph:"我",
  name:{es:"Pronombres y posesivos",en:"Pronouns & possessives",zh:"代词"},
  cards:[
  {id:"pro-01",s:"我",py:"wǒ",es:"yo",en:"I / me",
   x:`Originalmente el dibujo de un arma de asta con hoja dentada, una especie de alabarda.
No tiene relación con la idea de «yo»: se tomó prestado por el sonido. Mejor no inventarle una historia.
Sirve para yo y para mí: el chino no cambia la palabra.`},
  {id:"pro-02",s:"你",py:"nǐ",es:"vos / tú",en:"you",
   x:`亻 (persona, la versión aplastada de 人 cuando va a la izquierda) + 尔 (sonido).
El radical 亻 aparece en casi todas las palabras referidas a gente.`},
  {id:"pro-03",s:"他",py:"tā",es:"él",en:"he / him",
   x:`亻 (persona) + 也 (sonido; su dibujo original es discutido).
Michelle también lo usa de forma neutra, para él o ella.`},
  {id:"pro-04",s:"她",py:"tā",es:"ella",en:"she / her",
   x:`女 (la mujer arrodillada) + 也, el mismo componente de 他.
Se pronuncia igual que 他. Se inventó recién a principios del siglo XX; antes 他 servía para ambos.`},
  {id:"pro-05",s:"它",py:"tā",es:"ello (animales y cosas)",en:"it",
   x:`Originalmente el dibujo de una cobra con la cabeza levantada. Por eso aparece también en 蛇, serpiente.
Hoy es el «it» para animales y cosas. Se pronuncia igual que 他 y 她.`},
  {id:"pro-06",s:"您",py:"nín",es:"usted",en:"you (polite)",
   x:`你 (vos) con 心 debajo. 心 es un corazón dibujado con sus cavidades.
«Vos sobre el corazón»: la forma respetuosa. Termina en n: nín.`},
  {id:"pro-07",s:"们",t:"們",py:"men",es:"marca de plural (personas)",en:"plural marker (people)",
   x:`亻 (persona) + 门 (una puerta de dos hojas vista de frente, solo por el sonido; en tradicional 門 se ven las dos hojas).
Se agrega a los pronombres para el plural. Solo se usa con personas, nunca con objetos.`},
  {id:"pro-08",s:"我们",t:"我們",py:"wǒmen",es:"nosotros",en:"we / us",
   x:`我 yo + 们 plural.`},
  {id:"pro-09",s:"你们",t:"你們",py:"nǐmen",es:"ustedes",en:"you (plural)",
   x:`你 vos + 们 plural.`},
  {id:"pro-10",s:"他们",t:"他們",py:"tāmen",es:"ellos",en:"they / them",
   x:`他 él + 们 plural. Para un grupo solo de mujeres se escribe 她们.`},
  {id:"pro-11",s:"您们",t:"您們",py:"nínmen",es:"ustedes (respetuoso)",en:"you (plural, polite)",
   x:`您 usted + 们 plural. Aparece por escrito; al hablar es poco común.`},
  {id:"pro-12",s:"的",py:"de",es:"partícula posesiva",en:"possessive particle ('s)",
   x:`白 + 勺. 白 blanco es de origen discutido; el 日 de adentro no es el sol. 勺 es un cucharón con algo dentro.
El significado original se perdió: hoy es puramente gramatical y es el carácter más frecuente del idioma.
Funciona como el 's del inglés: pronombre + 的 = posesivo.`},
  {id:"pro-13",s:"我的",py:"wǒ de",es:"mi / mío",en:"my / mine",
   x:`我 yo + 的 's. Literalmente «I's».`},
  {id:"pro-14",s:"你的",py:"nǐ de",es:"tu / tuyo",en:"your / yours",
   x:`你 vos + 的 's.`},
  {id:"pro-15",s:"他的",py:"tā de",es:"su / de él",en:"his",
   x:`他 él + 的 's.`},
  {id:"pro-16",s:"她的",py:"tā de",es:"su / de ella",en:"her / hers",
   x:`她 ella + 的 's. Suena igual que 他的.`},
  {id:"pro-17",s:"我们的",t:"我們的",py:"wǒmen de",es:"nuestro",en:"our / ours",
   x:`我们 nosotros + 的 's.`},
  {id:"pro-18",s:"你们的",t:"你們的",py:"nǐmen de",es:"de ustedes",en:"your (plural)",
   x:`你们 ustedes + 的 's.`},
  {id:"pro-19",s:"他们的",t:"他們的",py:"tāmen de",es:"su / de ellos",en:"their / theirs",
   x:`他们 ellos + 的 's.`},
  {id:"pro-20",s:"您的",py:"nín de",es:"su (de usted)",en:"your (polite)",
   x:`您 usted + 的 's.`},
  {id:"pro-21",s:"我爸爸 = 我的爸爸",py:"wǒ bàba = wǒ de bàba",es:"mi papá",en:"my dad",say:"我爸爸",
   x:`Con familiares en singular se puede quitar el 的, para que no suene todo de-de-de. En plural no se quita.
爸 papá: 父 (una mano sosteniendo un hacha, el que trabaja) + 巴 (sonido).`}
  ]
});
