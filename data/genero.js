/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, x character explanation (Spanish), say optional text for the voice. */
window.TOPICS.push({
  id:"genero", glyph:"公",
  name:{es:"Género y animales",en:"Gender & animals",zh:"性别与动物"},
  cards:[
  {id:"gen-01",s:"男 + 名词",t:"男 + 名詞",py:"nán + míngcí",es:"masculino para personas",en:"male (people)",say:"男老师",
   x:`El chino no tiene género gramatical. Solo se marca cuando querés resaltarlo.
Para personas: 男 (masculino) o 女 (femenino) delante del sustantivo: 男老师, 女学生.
Para animales se usan otros dos: 公 (macho) y 母 (hembra).`},
  {id:"gen-02",s:"男",py:"nán",es:"hombre, masculino",en:"man, male",
   x:`田 arriba + 力 abajo.
田: un campo de arroz visto desde arriba, dividido en cuatro parcelas por los canales.
力: un arado o un brazo tensado, la fuerza.
El que pone la fuerza en el campo. Michelle lo describió como «campo y hacha». Es de los pocos caracteres que se leen enteros por sus partes.`},
  {id:"gen-03",s:"女",py:"nǚ",es:"mujer, femenino",en:"woman, female",
   x:`Una mujer arrodillada de perfil con los brazos cruzados adelante. Michelle: «una mujer sentada con las piernas cruzadas».
Si un carácter lleva 女, casi seguro tiene que ver con mujeres o parentesco: 妈, 妹, 姐, 奶, 好, 她.
La ü se pronuncia como la u francesa.`},
  {id:"gen-04",s:"公",py:"gōng",es:"macho (animales)",en:"male (animals)",
   x:`八 arriba (dividir: dos trazos que se separan) + 厶 abajo (lo privado: un brazo que se encierra sobre sí).
Repartir lo privado es lo público: ese es su sentido original, que sigue vivo en 公司 empresa y 公园 parque.
Con animales significa macho: 公狗, 公猫, 公马. No se usa con personas.`},
  {id:"gen-05",s:"母",py:"mǔ",es:"hembra (animales); madre",en:"female (animals); mother",
   x:`El dibujo de 女 (mujer arrodillada) con dos puntos agregados, que son los pechos: la que amamanta.
Michelle lo describió como un nido con dos huevos.
Con animales significa hembra: 母狗, 母猫. También está en 母亲 madre.`},
  {id:"gen-06",s:"男老师",t:"男老師",py:"nán lǎoshī",es:"profesor (hombre)",en:"male teacher",
   x:`男 + 老师. Solo se agrega si importa el género.`},
  {id:"gen-07",s:"女老师",t:"女老師",py:"nǚ lǎoshī",es:"profesora",en:"female teacher",
   x:`女 + 老师.`},
  {id:"gen-08",s:"男学生",t:"男學生",py:"nán xuéshēng",es:"alumno (varón)",en:"male student",
   x:`男 + 学生.`},
  {id:"gen-09",s:"女学生",t:"女學生",py:"nǚ xuéshēng",es:"alumna",en:"female student",
   x:`女 + 学生. En clase dijiste «学生母» y Michelle corrigió: 母 es para animales, para personas es 女, y va adelante.`},
  {id:"gen-10",s:"公狗",py:"gōng gǒu",es:"perro (macho)",en:"male dog",
   x:`公 macho + 狗 perro.`},
  {id:"gen-11",s:"母狗",py:"mǔ gǒu",es:"perra",en:"female dog",
   x:`母 hembra + 狗 perro.`},
  {id:"gen-12",s:"公猫",t:"公貓",py:"gōng māo",es:"gato (macho)",en:"tomcat",
   x:`公 macho + 猫 gato.`},
  {id:"gen-13",s:"母猫",t:"母貓",py:"mǔ māo",es:"gata",en:"female cat",
   x:`母 hembra + 猫 gato.`},
  {id:"gen-14",s:"马",t:"馬",py:"mǎ",es:"caballo",en:"horse",
   x:`Un caballo de perfil: arriba la crin, abajo las patas. En tradicional 馬 se ven las cuatro patas y la cola.
Tercer tono. El mismo 马 da el sonido de 妈 mamá, 骂 retar y 吗 la partícula.`},
  {id:"gen-15",s:"公马",t:"公馬",py:"gōng mǎ",es:"caballo (macho)",en:"stallion",
   x:`公 + 马.`},
  {id:"gen-16",s:"母马",t:"母馬",py:"mǔ mǎ",es:"yegua",en:"mare",
   x:`母 + 马.`},
  {id:"gen-17",s:"老鼠",py:"lǎoshǔ",es:"ratón / rata",en:"mouse / rat",
   x:`Acá 老 NO significa viejo: es un prefijo vacío que llevan algunos nombres de animales, como 老虎. Por eso comparte carácter con 老师 sin tener nada que ver.
鼠 es un pictograma de la rata: arriba los dientes, abajo las patas y la cola larga.`},
  {id:"gen-18",s:"老虎",py:"lǎohǔ",es:"tigre",en:"tiger",
   x:`老 prefijo vacío (el mismo de 老鼠) + 虎.
虎: un tigre de perfil. Arriba 虍, la cabeza con las rayas; abajo el cuerpo y las patas.`},
  {id:"gen-19",s:"母老虎",py:"mǔ lǎohǔ",es:"tigresa; (broma) esposa terrible",en:"tigress; (joke) fierce wife",
   x:`母 hembra + 老虎 tigre.
Michelle: en broma se dice de una esposa que es «terrible».`},
  {id:"gen-20",s:"蛇",py:"shé",es:"víbora / serpiente",en:"snake",
   x:`虫 (el dibujo de un bicho o reptil con la cabeza levantada) + 它.
它 era originalmente también el dibujo de una cobra, así que la serpiente aparece dos veces.
Hoy 它 se usa como «it». Lleva 条: 一条蛇.`},
  {id:"gen-21",s:"鱼",t:"魚",py:"yú",es:"pez / pescado",en:"fish",
   x:`Pictograma: la cabeza arriba, el cuerpo con escamas en el medio, la cola abajo. En tradicional 魚 la cola son cuatro puntos.
Lleva 条: 一条鱼.`},
  {id:"gen-22",s:"老公",py:"lǎogōng",es:"marido (coloquial)",en:"husband (informal)",
   x:`老 acá es cariño, como decir «viejo» en el Río de la Plata + 公 macho.
Literalmente «querido macho». Michelle lo comparó con el lunfardo.
Hoy es lo más común, sobre todo por las películas de China continental.`},
  {id:"gen-23",s:"老婆",py:"lǎopo",es:"esposa (coloquial)",en:"wife (informal)",
   x:`老 cariño + 婆 anciana.
婆: 女 (mujer) abajo + 波 (ola, por el sonido) arriba.
Literalmente «querida vieja». Pareja de 老公.`},
  {id:"gen-24",s:"先生",py:"xiānsheng",es:"señor; marido (formal)",en:"Mr.; husband (formal)",
   x:`先 primero: 止 (un pie) avanzando sobre 儿 (las piernas) + 生 nacer.
El que nació primero, el mayor: señor.
Como título va DESPUÉS del apellido: Martinez 先生 = el señor Martínez.
Como «marido» es formal; en el día a día se dice 老公.`},
  {id:"gen-25",s:"太太",py:"tàitai",es:"señora; esposa (formal)",en:"Mrs.; wife (formal)",
   x:`太 es 大 (una persona de frente con los brazos abiertos) con un trazo extra: más que grande. Doblado.
Como título va después del apellido: Martinez 太太 = la señora Martínez.
Como «esposa» es formal; en el día a día se dice 老婆.`},
  {id:"gen-26",s:"Martinez 先生",py:"Martinez xiānsheng",es:"el señor Martínez",en:"Mr. Martinez",say:"先生",
   x:`En chino el título va después del apellido, al revés que en español.
Michelle: en China y Taiwán se usa mucho apellido + título (profesor, ingeniero, señor), porque los apellidos se repiten mucho (Chen, Wang) y los nombres casi nunca.`}
  ]
});
