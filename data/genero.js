/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"genero", glyph:"公",
  name:{"es": "Género y animales", "en": "Gender & animals", "zh": "性别与动物"},
  cl:"c3",
  cards:[
  {id:"gen-01",s:"男 + 名词",t:"男 + 名詞",py:"nán + míngcí",es:"masculino para personas",en:"male (people)",say:"男老师",
   x:{
es:`El chino no tiene género gramatical. Solo se marca cuando querés resaltarlo.
Para personas: 男 (masculino) o 女 (femenino) delante del sustantivo: 男老师, 女学生.
Para animales se usan otros dos: 公 (macho) y 母 (hembra).`,
en:`Chinese has no grammatical gender. You only mark it when you want to stress it.
For people: 男 (male) or 女 (female) before the noun: 男老师, 女学生.
For animals two other words are used: 公 (male) and 母 (female).`,
zh:`中文没有语法上的性别，只有需要强调时才标出。人：名词前加 男 / 女；动物：加 公 / 母。`}},
  {id:"gen-02",s:"男",py:"nán",es:"hombre, masculino",en:"man, male",
   x:{
es:`田 arriba + 力 abajo.
田: un campo de arroz visto desde arriba, dividido en cuatro parcelas por los canales.
力: un arado o un brazo tensado, la fuerza.
El que pone la fuerza en el campo. Michelle lo describió como «campo y hacha». Es de los pocos caracteres que se leen enteros por sus partes.`,
en:`田 on top + 力 below.
田: a rice field seen from above, split into four plots by the channels.
力: a plough or a tensed arm, strength.
The one who puts strength into the field. Michelle described it as "field and axe". One of the few characters you can read entirely from its parts.`,
zh:`田 + 力。田：从上往下看、被水渠分成四块的稻田。力：犁或用力的手臂。在田里出力的人。`}},
  {id:"gen-03",s:"女",py:"nǚ",es:"mujer, femenino",en:"woman, female",
   x:{
es:`Una mujer arrodillada de perfil con los brazos cruzados adelante. Michelle: «una mujer sentada con las piernas cruzadas».
Si un carácter lleva 女, casi seguro tiene que ver con mujeres o parentesco: 妈, 妹, 姐, 奶, 好, 她.
La ü se pronuncia como la u francesa.`,
en:`A woman kneeling in profile with her arms crossed in front. Michelle: "a woman sitting with crossed legs".
If a character contains 女, it almost certainly relates to women or kinship: 妈, 妹, 姐, 奶, 好, 她.
The ü is pronounced like the French u.`,
zh:`侧面跪坐、双手交叉在胸前的女子。有 女 的字多半和女性或亲属有关：妈、妹、姐、奶、好、她。`}},
  {id:"gen-04",s:"公",py:"gōng",es:"macho (animales)",en:"male (animals)",
   x:{
es:`八 arriba (dividir: dos trazos que se separan) + 厶 abajo (lo privado: un brazo que se encierra sobre sí).
Repartir lo privado es lo público: ese es su sentido original, que sigue vivo en 公司 empresa y 公园 parque.
Con animales significa macho: 公狗, 公猫, 公马. No se usa con personas.`,
en:`八 on top (to divide: two strokes moving apart) + 厶 below (private: an arm closing in on itself).
Sharing out what's private makes it public: that's its original sense, still alive in 公司 company and 公园 park.
With animals it means male: 公狗, 公猫, 公马. Not used for people.`,
zh:`八（分开）+ 厶（私）。把私的分出去就是公：公司、公园。用于动物表示雄性，不用于人。`}},
  {id:"gen-05",s:"母",py:"mǔ",es:"hembra (animales); madre",en:"female (animals); mother",
   x:{
es:`El dibujo de 女 (mujer arrodillada) con dos puntos agregados, que son los pechos: la que amamanta.
Michelle lo describió como un nido con dos huevos.
Con animales significa hembra: 母狗, 母猫. También está en 母亲 madre.`,
en:`The drawing of 女 (kneeling woman) with two dots added, which are the breasts: the one who nurses.
Michelle described it as a nest with two eggs.
With animals it means female: 母狗, 母猫. It's also in 母亲 mother.`,
zh:`女 加两点（乳房）：哺乳的母亲。Michelle 老师说像有两颗蛋的鸟巢。用于动物表示雌性，也用在 母亲。`}},
  {id:"gen-06",s:"男老师",t:"男老師",py:"nán lǎoshī",es:"profesor (hombre)",en:"male teacher",
   x:{
es:`男 + 老师. Solo se agrega si importa el género.`,
en:`男 + 老师. Only added if gender matters.`,
zh:`男 + 老师，需要时才加。`}},
  {id:"gen-07",s:"女老师",t:"女老師",py:"nǚ lǎoshī",es:"profesora",en:"female teacher",
   x:{
es:`女 + 老师.`,
en:`女 + 老师.`,
zh:`女 + 老师。`}},
  {id:"gen-08",s:"男学生",t:"男學生",py:"nán xuéshēng",es:"alumno (varón)",en:"male student",
   x:{
es:`男 + 学生.`,
en:`男 + 学生.`,
zh:`男 + 学生。`}},
  {id:"gen-09",s:"女学生",t:"女學生",py:"nǚ xuéshēng",es:"alumna",en:"female student",
   x:{
es:`女 + 学生. En clase dijiste «学生母» y Michelle corrigió: 母 es para animales, para personas es 女, y va adelante.`,
en:`女 + 学生. In class you said "学生母" and Michelle corrected it: 母 is for animals; for people it's 女, and it goes in front.`,
zh:`女 + 学生。上课时说成了"学生母"，Michelle 老师纠正：母 用于动物，人用 女，而且放在前面。`}},
  {id:"gen-10",s:"公狗",py:"gōng gǒu",es:"perro (macho)",en:"male dog",
   x:{
es:`公 macho + 狗 perro.`,
en:`公 male + 狗 dog.`,
zh:`公 + 狗。`}},
  {id:"gen-11",s:"母狗",py:"mǔ gǒu",es:"perra",en:"female dog",
   x:{
es:`母 hembra + 狗 perro.`,
en:`母 female + 狗 dog.`,
zh:`母 + 狗。`}},
  {id:"gen-12",s:"公猫",t:"公貓",py:"gōng māo",es:"gato (macho)",en:"tomcat",
   x:{
es:`公 macho + 猫 gato.`,
en:`公 male + 猫 cat.`,
zh:`公 + 猫。`}},
  {id:"gen-13",s:"母猫",t:"母貓",py:"mǔ māo",es:"gata",en:"female cat",
   x:{
es:`母 hembra + 猫 gato.`,
en:`母 female + 猫 cat.`,
zh:`母 + 猫。`}},
  {id:"gen-14",s:"马",t:"馬",py:"mǎ",es:"caballo",en:"horse",
   x:{
es:`Un caballo de perfil: arriba la crin, abajo las patas. En tradicional 馬 se ven las cuatro patas y la cola.
Tercer tono. El mismo 马 da el sonido de 妈 mamá, 骂 retar y 吗 la partícula.`,
en:`A horse in profile: mane on top, legs below. In traditional 馬 you see the four legs and the tail.
3rd tone. The same 马 gives the sound of 妈 mom, 骂 to scold and 吗 the particle.`,
zh:`侧面的马：上面鬃毛，下面马腿；繁体 馬 四条腿和尾巴都在。妈、骂、吗 都用 马 表音。`}},
  {id:"gen-15",s:"公马",t:"公馬",py:"gōng mǎ",es:"caballo (macho)",en:"stallion",
   x:{
es:`公 + 马.`,
en:`公 + 马.`,
zh:`公 + 马。`}},
  {id:"gen-16",s:"母马",t:"母馬",py:"mǔ mǎ",es:"yegua",en:"mare",
   x:{
es:`母 + 马.`,
en:`母 + 马.`,
zh:`母 + 马。`}},
  {id:"gen-17",s:"老鼠",py:"lǎoshǔ",es:"ratón / rata",en:"mouse / rat",
   x:{
es:`Acá 老 NO significa viejo: es un prefijo vacío que llevan algunos nombres de animales, como 老虎. Por eso comparte carácter con 老师 sin tener nada que ver.
鼠 es un pictograma de la rata: arriba los dientes, abajo las patas y la cola larga.`,
en:`Here 老 does NOT mean old: it's an empty prefix some animal names carry, like 老虎. That's why it shares a character with 老师 without being related.
鼠 is a pictogram of the rat: teeth on top, legs and long tail below.`,
zh:`这里的 老 不是"老"的意思，是动物名的词头，和 老师 无关。鼠：上面是牙齿，下面是腿和长尾巴。`}},
  {id:"gen-18",s:"老虎",py:"lǎohǔ",es:"tigre",en:"tiger",
   x:{
es:`老 prefijo vacío (el mismo de 老鼠) + 虎.
虎: un tigre de perfil. Arriba 虍, la cabeza con las rayas; abajo el cuerpo y las patas.`,
en:`老 empty prefix (the same as in 老鼠) + 虎.
虎: a tiger in profile. On top 虍, the striped head; below the body and legs.`,
zh:`老（词头）+ 虎。虎：上面 虍 是有花纹的头，下面是身体和腿。`}},
  {id:"gen-19",s:"母老虎",py:"mǔ lǎohǔ",es:"tigresa; (broma) esposa terrible",en:"tigress; (joke) fierce wife",
   x:{
es:`母 hembra + 老虎 tigre.
Michelle: en broma se dice de una esposa que es «terrible».`,
en:`母 female + 老虎 tiger.
Michelle: jokingly said of a wife who is "fierce".`,
zh:`母 + 老虎。开玩笑时形容很凶的太太。`}},
  {id:"gen-20",s:"蛇",py:"shé",es:"víbora / serpiente",en:"snake",
   x:{
es:`虫 (el dibujo de un bicho o reptil con la cabeza levantada) + 它.
它 era originalmente también el dibujo de una cobra, así que la serpiente aparece dos veces.
Hoy 它 se usa como «it». Lleva 条: 一条蛇.`,
en:`虫 (the drawing of a bug or reptile with its head raised) + 它.
它 was originally also a drawing of a cobra, so the snake appears twice.
Today 它 is used as "it". Takes 条: 一条蛇.`,
zh:`虫 + 它，它 本来也是蛇的样子，所以蛇出现了两次。量词用 条。`}},
  {id:"gen-21",s:"鱼",t:"魚",py:"yú",es:"pez / pescado",en:"fish",
   x:{
es:`Pictograma: la cabeza arriba, el cuerpo con escamas en el medio, la cola abajo. En tradicional 魚 la cola son cuatro puntos.
Lleva 条: 一条鱼.`,
en:`Pictogram: head on top, scaly body in the middle, tail below. In traditional 魚 the tail is four dots.
Takes 条: 一条鱼.`,
zh:`象形字：头、有鳞的身体、尾巴；繁体 魚 尾巴是四点。量词用 条。`}},
  {id:"gen-22",s:"老公",py:"lǎogōng",es:"marido (coloquial)",en:"husband (informal)",
   x:{
es:`老 acá es cariño, como decir «viejo» en el Río de la Plata + 公 macho.
Literalmente «querido macho». Michelle lo comparó con el lunfardo.
Hoy es lo más común, sobre todo por las películas de China continental.`,
en:`Here 老 is affection, like calling someone "old man" fondly + 公 male.
Literally "dear male". Michelle compared it to slang.
Today it's the most common word, especially because of mainland Chinese films.`,
zh:`老（亲昵）+ 公。现在最常用，尤其受大陆电影影响。`}},
  {id:"gen-23",s:"老婆",py:"lǎopo",es:"esposa (coloquial)",en:"wife (informal)",
   x:{
es:`老 cariño + 婆 anciana.
婆: 女 (mujer) abajo + 波 (ola, por el sonido) arriba.
Literalmente «querida vieja». Pareja de 老公.`,
en:`老 affection + 婆 old woman.
婆: 女 (woman) below + 波 (wave, for the sound) on top.
Literally "dear old lady". The partner of 老公.`,
zh:`老 + 婆（女 + 波 表音）。和 老公 相对。`}},
  {id:"gen-24",s:"先生",py:"xiānsheng",es:"señor; marido (formal)",en:"Mr.; husband (formal)",
   x:{
es:`先 primero: 止 (un pie) avanzando sobre 儿 (las piernas) + 生 nacer.
El que nació primero, el mayor: señor.
Como título va DESPUÉS del apellido: Martinez 先生 = el señor Martínez.
Como «marido» es formal; en el día a día se dice 老公.`,
en:`先 first: 止 (a foot) advancing over 儿 (legs) + 生 to be born.
The one born first, the elder: sir.
As a title it goes AFTER the surname: Martinez 先生 = Mr. Martinez.
As "husband" it's formal; day to day people say 老公.`,
zh:`先（止 脚在 儿 上往前走）+ 生：先出生的人。称呼放在姓后面：Martinez 先生。表示丈夫比较正式，平常说 老公。`}},
  {id:"gen-25",s:"太太",py:"tàitai",es:"señora; esposa (formal)",en:"Mrs.; wife (formal)",
   x:{
es:`太 es 大 (una persona de frente con los brazos abiertos) con un trazo extra: más que grande. Doblado.
Como título va después del apellido: Martinez 太太 = la señora Martínez.
Como «esposa» es formal; en el día a día se dice 老婆.`,
en:`太 is 大 (a person seen from the front with arms spread) plus an extra stroke: more than big. Doubled.
As a title it goes after the surname: Martinez 太太 = Mrs. Martinez.
As "wife" it's formal; day to day people say 老婆.`,
zh:`太 是 大 多一点。称呼放在姓后面：Martinez 太太。表示妻子比较正式，平常说 老婆。`}},
  {id:"gen-26",s:"Martinez 先生",py:"Martinez xiānsheng",es:"el señor Martínez",en:"Mr. Martinez",say:"先生",
   x:{
es:`En chino el título va después del apellido, al revés que en español.
Michelle: en China y Taiwán se usa mucho apellido + título (profesor, ingeniero, señor), porque los apellidos se repiten mucho (Chen, Wang) y los nombres casi nunca.`,
en:`In Chinese the title comes after the surname, the opposite of English.
Michelle: in China and Taiwan surname + title (teacher, engineer, Mr.) is very common, because surnames repeat a lot (Chen, Wang) and given names hardly ever do.`,
zh:`称呼放在姓后面。Michelle 老师：中国和台湾常用"姓 + 称呼"，因为姓很常重复（陈、王），名字很少重复。`}}
  ]
});
