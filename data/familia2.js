/* Card fields: id (permanent, never reuse), s simplified, t traditional (only if different),
   py pinyin, es / en meanings, cl class tag (see CLASSES in assets/app.js), say optional TTS text,
   x character explanation {es, en, zh}: as deep as possible, self-contained. */
window.TOPICS.push({
  id:"familia2", glyph:"孙",
  name:{"es": "Familia ampliada", "en": "Extended family", "zh": "更多家人称谓"},
  cl:"fc",
  cards:[
  {id:"fa2-01",s:"爹",py:"diē",es:"papá (coloquial, antiguo)",en:"dad (colloquial, old-fashioned)",
   x:{
es:`父 (la mano con el hacha) arriba + 多 (sonido) abajo. Suena a campo o a novela histórica.`,
en:`父 (the hand with the axe) on top + 多 (sound) below. Sounds rural or like a historical novel.`,
zh:`父 + 多（表音）。听起来比较乡土或古装。`}},
  {id:"fa2-02",s:"娘",py:"niáng",es:"mamá (coloquial, antiguo)",en:"mom (colloquial, old-fashioned)",
   x:{
es:`女 (mujer) + 良 (bueno, por el sonido). Pareja de 爹.`,
en:`女 (woman) + 良 (good, for the sound). The partner of 爹.`,
zh:`女 + 良（表音）。和 爹 相对。`}},
  {id:"fa2-03",s:"堂姐",py:"tángjiě",es:"prima mayor (hija del tío paterno)",en:"older female cousin (father's brother's daughter)",
   x:{
es:`堂 salón: 尚 (sonido) sobre 土 (tierra). El salón de los ancestros de la familia.
Los primos 堂 son hijos de los hermanos del papá: mismo apellido, mismo salón ancestral. + 姐 hermana mayor.`,
en:`堂 hall: 尚 (sound) over 土 (earth). The family's ancestral hall.
堂 cousins are the children of dad's brothers: same surname, same ancestral hall. + 姐 older sister.`,
zh:`堂：尚（表音）+ 土，家族的祠堂。堂 表示爸爸兄弟的孩子：同姓、同一个祠堂。`}},
  {id:"fa2-04",s:"堂弟",py:"tángdì",es:"primo menor (hijo del tío paterno)",en:"younger male cousin (father's brother's son)",
   x:{
es:`堂 (mismo salón ancestral) + 弟 hermano menor.`,
en:`堂 (same ancestral hall) + 弟 younger brother.`,
zh:`堂 + 弟。`}},
  {id:"fa2-05",s:"堂妹",py:"tángmèi",es:"prima menor (hija del tío paterno)",en:"younger female cousin (father's brother's daughter)",
   x:{
es:`堂 + 妹 hermana menor.`,
en:`堂 + 妹 younger sister.`,
zh:`堂 + 妹。`}},
  {id:"fa2-06",s:"表哥",py:"biǎogē",es:"primo mayor (por tías o por la mamá)",en:"older male cousin (other side)",
   x:{
es:`表 superficie, lo de afuera: originalmente 衣 (ropa) con 毛 (pelo), el abrigo de piel que se lleva por fuera.
Los primos 表 son los «de afuera»: hijos de tías o del lado de la mamá, con otro apellido. + 哥.`,
en:`表 surface, the outside: originally 衣 (clothing) with 毛 (fur), the fur coat worn on the outside.
表 cousins are the "outside" ones: children of aunts or of mom's side, with another surname. + 哥.`,
zh:`表：本来是 衣 加 毛，穿在外面的皮衣。表 表示不同姓的亲戚：姑姑或妈妈那边的孩子。`}},
  {id:"fa2-07",s:"表姐",py:"biǎojiě",es:"prima mayor (por tías o por la mamá)",en:"older female cousin (other side)",
   x:{
es:`表 (los primos «de afuera») + 姐.`,
en:`表 (the "outside" cousins) + 姐.`,
zh:`表 + 姐。`}},
  {id:"fa2-08",s:"表弟",py:"biǎodì",es:"primo menor (por tías o por la mamá)",en:"younger male cousin (other side)",
   x:{
es:`表 + 弟.`,
en:`表 + 弟.`,
zh:`表 + 弟。`}},
  {id:"fa2-09",s:"表妹",py:"biǎomèi",es:"prima menor (por tías o por la mamá)",en:"younger female cousin (other side)",
   x:{
es:`表 + 妹.`,
en:`表 + 妹.`,
zh:`表 + 妹。`}},
  {id:"fa2-10",s:"弟妹",py:"dìmèi",es:"cuñada (esposa del hermano menor)",en:"sister-in-law (younger brother's wife)",
   x:{
es:`弟 hermano menor + 妹. La «hermana menor» que llega por el hermano menor.`,
en:`弟 younger brother + 妹. The "younger sister" who comes through your younger brother.`,
zh:`弟 + 妹：弟弟的太太。`}},
  {id:"fa2-11",s:"妹夫",py:"mèifu",es:"cuñado (esposo de la hermana menor)",en:"brother-in-law (younger sister's husband)",
   x:{
es:`妹 + 夫 marido. 夫 es 大 (un hombre de frente) con una línea más arriba: el alfiler del peinado de un hombre adulto.`,
en:`妹 + 夫 husband. 夫 is 大 (a man seen from the front) with an extra line on top: the hairpin of a grown man.`,
zh:`妹 + 夫。夫：大 上面多一横，是成年男子的发簪。`}},
  {id:"fa2-12",s:"侄儿",t:"姪兒",py:"zhí'ér",es:"sobrino (hijo del hermano)",en:"nephew (brother's son)",
   x:{
es:`侄: 亻 (persona) + 至 (llegar, por el sonido). En Taiwán se escribe con 女: 姪.
+ 儿 niño.`,
en:`侄: 亻 (person) + 至 (to arrive, for the sound). In Taiwan it's written with 女: 姪.
+ 儿 child.`,
zh:`侄：亻 + 至（表音），台湾写 姪。+ 儿。`}},
  {id:"fa2-13",s:"侄女",t:"姪女",py:"zhínǚ",es:"sobrina (hija del hermano)",en:"niece (brother's daughter)",
   x:{
es:`侄 + 女.`,
en:`侄 + 女.`,
zh:`侄 + 女。`}},
  {id:"fa2-14",s:"外甥",py:"wàisheng",es:"sobrino (hijo de la hermana)",en:"nephew (sister's son)",
   x:{
es:`外 afuera (la hermana se casó y pasó a otra familia) + 甥: 生 (nacer) + 男 (hombre).`,
en:`外 outside (the sister married into another family) + 甥: 生 (to be born) + 男 (man).`,
zh:`外（姐妹嫁到别家）+ 甥（生 + 男）。`}},
  {id:"fa2-15",s:"外甥女",py:"wàishengnǚ",es:"sobrina (hija de la hermana)",en:"niece (sister's daughter)",
   x:{
es:`外甥 + 女.`,
en:`外甥 + 女.`,
zh:`外甥 + 女。`}},
  {id:"fa2-16",s:"孙子",t:"孫子",py:"sūnzi",es:"nieto (hijo del hijo)",en:"grandson (son's son)",
   x:{
es:`孙: 子 (niño) + 小 (pequeño). En tradicional 孫 = 子 + 系 (un hilo que continúa): la línea familiar que sigue.`,
en:`孙: 子 (child) + 小 (small). In traditional 孫 = 子 + 系 (a thread that continues): the family line carrying on.`,
zh:`孙：子 + 小。繁体 孫：子 + 系（延续的线），家族延续。`}},
  {id:"fa2-17",s:"孙女",t:"孫女",py:"sūnnǚ",es:"nieta (hija del hijo)",en:"granddaughter (son's daughter)",
   x:{
es:`孙 + 女.`,
en:`孙 + 女.`,
zh:`孙 + 女。`}},
  {id:"fa2-18",s:"外孙",t:"外孫",py:"wàisūn",es:"nieto (hijo de la hija)",en:"grandson (daughter's son)",
   x:{
es:`外 afuera (los hijos de la hija llevan otro apellido) + 孙.`,
en:`外 outside (a daughter's children carry another surname) + 孙.`,
zh:`外（女儿的孩子不同姓）+ 孙。`}},
  {id:"fa2-19",s:"外孙女",t:"外孫女",py:"wàisūnnǚ",es:"nieta (hija de la hija)",en:"granddaughter (daughter's daughter)",
   x:{
es:`外 + 孙 + 女.`,
en:`外 + 孙 + 女.`,
zh:`外 + 孙 + 女。`}},
  {id:"fa2-20",s:"大儿子",t:"大兒子",py:"dà érzi",es:"hijo mayor",en:"eldest son",
   x:{
es:`大 (grande: una persona con los brazos abiertos) + 儿子. El orden de nacimiento se dice con 大 y los números.`,
en:`大 (big: a person with arms spread) + 儿子. Birth order is expressed with 大 and numbers.`,
zh:`大 + 儿子。排行用 大 和数字表示。`}},
  {id:"fa2-21",s:"大女儿",t:"大女兒",py:"dà nǚ'ér",es:"hija mayor",en:"eldest daughter",
   x:{
es:`大 + 女儿.`,
en:`大 + 女儿.`,
zh:`大 + 女儿。`}},
  {id:"fa2-22",s:"老大",py:"lǎodà",es:"el mayor (de los hijos)",en:"the eldest child",
   x:{
es:`老 prefijo (el mismo de 老鼠, sin significado de edad) + 大. También se usa como «el jefe».`,
en:`老 prefix (the same as in 老鼠, no sense of age) + 大. Also used for "the boss".`,
zh:`老（词头）+ 大。也可以指"老板、头儿"。`}},
  {id:"fa2-23",s:"二儿子",t:"二兒子",py:"èr érzi",es:"segundo hijo",en:"second son",
   x:{
es:`二 + 儿子. Con orden se usa 二, no 两.`,
en:`二 + 儿子. For order you use 二, not 两.`,
zh:`二 + 儿子。表示排行用 二，不用 两。`}},
  {id:"fa2-24",s:"二女儿",t:"二女兒",py:"èr nǚ'ér",es:"segunda hija",en:"second daughter",
   x:{
es:`二 + 女儿.`,
en:`二 + 女儿.`,
zh:`二 + 女儿。`}},
  {id:"fa2-25",s:"老二",py:"lǎo'èr",es:"el segundo",en:"the second child",
   x:{
es:`老 + 二.`,
en:`老 + 二.`,
zh:`老 + 二。`}},
  {id:"fa2-26",s:"三儿子",t:"三兒子",py:"sān érzi",es:"tercer hijo",en:"third son",
   x:{
es:`三 + 儿子.`,
en:`三 + 儿子.`,
zh:`三 + 儿子。`}},
  {id:"fa2-27",s:"三女儿",t:"三女兒",py:"sān nǚ'ér",es:"tercera hija",en:"third daughter",
   x:{
es:`三 + 女儿.`,
en:`三 + 女儿.`,
zh:`三 + 女儿。`}},
  {id:"fa2-28",s:"老三",py:"lǎosān",es:"el tercero",en:"the third child",
   x:{
es:`老 + 三.`,
en:`老 + 三.`,
zh:`老 + 三。`}},
  {id:"fa2-29",s:"最小的儿子",t:"最小的兒子",py:"zuì xiǎo de érzi",es:"el hijo menor",en:"the youngest son",
   x:{
es:`最 lo más: 日 (sol) sobre 取 (tomar: 耳 oreja + 又 mano; en la guerra se tomaba la oreja del enemigo).
小 pequeño: tres trazos chiquitos. 最小的 = el más pequeño.`,
en:`最 the most: 日 (sun) over 取 (to take: 耳 ear + 又 hand; in war the enemy's ear was taken as proof).
小 small: three little strokes. 最小的 = the smallest.`,
zh:`最：日 + 取（耳 + 又，古代打仗割取敌人的耳朵）。小：三个小笔画。最小的 = 年纪最小的。`}},
  {id:"fa2-30",s:"最小的女儿",t:"最小的女兒",py:"zuì xiǎo de nǚ'ér",es:"la hija menor",en:"the youngest daughter",
   x:{
es:`最小的 + 女儿.`,
en:`最小的 + 女儿.`,
zh:`最小的 + 女儿。`}},
  {id:"fa2-31",s:"老么",py:"lǎoyāo",es:"el benjamín (el menor)",en:"the youngest child",
   x:{
es:`老 + 么 pequeño (el mismo 么 de 什么). En China continental se escribe 老幺.`,
en:`老 + 么 small (the same 么 as in 什么). In mainland China it's written 老幺.`,
zh:`老 + 么，大陆写 老幺。`}},
  {id:"fa2-32",s:"小儿子",t:"小兒子",py:"xiǎo érzi",es:"hijo menor",en:"younger / youngest son",
   x:{
es:`小 + 儿子.`,
en:`小 + 儿子.`,
zh:`小 + 儿子。`}},
  {id:"fa2-33",s:"小女儿",t:"小女兒",py:"xiǎo nǚ'ér",es:"hija menor",en:"younger / youngest daughter",
   x:{
es:`小 + 女儿.`,
en:`小 + 女儿.`,
zh:`小 + 女儿。`}},
  {id:"fa2-34",s:"大哥",py:"dàgē",es:"el hermano mayor de todos",en:"eldest brother",
   x:{
es:`大 + 哥. También se usa para dirigirse con respeto a un hombre un poco mayor.`,
en:`大 + 哥. Also used to address a slightly older man respectfully.`,
zh:`大 + 哥。也用来尊称比自己大一点的男子。`}},
  {id:"fa2-35",s:"二哥",py:"èrgē",es:"segundo hermano mayor",en:"second older brother",
   x:{
es:`二 + 哥.`,
en:`二 + 哥.`,
zh:`二 + 哥。`}},
  {id:"fa2-36",s:"三哥",py:"sāngē",es:"tercer hermano mayor",en:"third older brother",
   x:{
es:`三 + 哥.`,
en:`三 + 哥.`,
zh:`三 + 哥。`}},
  {id:"fa2-37",s:"四哥",py:"sìgē",es:"cuarto hermano mayor",en:"fourth older brother",
   x:{
es:`四 + 哥. Ojo: sì, s plana.`,
en:`四 + 哥. Careful: sì, flat s.`,
zh:`四 + 哥。注意 四 是平舌音。`}},
  {id:"fa2-38",s:"最小的哥哥",py:"zuì xiǎo de gēge",es:"el menor de los hermanos mayores",en:"the youngest of the older brothers",
   x:{
es:`最小的 + 哥哥.`,
en:`最小的 + 哥哥.`,
zh:`最小的 + 哥哥。`}},
  {id:"fa2-39",s:"大姐",py:"dàjiě",es:"la hermana mayor de todas",en:"eldest sister",
   x:{
es:`大 + 姐.`,
en:`大 + 姐.`,
zh:`大 + 姐。`}},
  {id:"fa2-40",s:"二姐",py:"èrjiě",es:"segunda hermana mayor",en:"second older sister",
   x:{
es:`二 + 姐.`,
en:`二 + 姐.`,
zh:`二 + 姐。`}},
  {id:"fa2-41",s:"三姐",py:"sānjiě",es:"tercera hermana mayor",en:"third older sister",
   x:{
es:`三 + 姐.`,
en:`三 + 姐.`,
zh:`三 + 姐。`}},
  {id:"fa2-42",s:"四姐",py:"sìjiě",es:"cuarta hermana mayor",en:"fourth older sister",
   x:{
es:`四 + 姐.`,
en:`四 + 姐.`,
zh:`四 + 姐。`}},
  {id:"fa2-43",s:"最小的姐姐",py:"zuì xiǎo de jiějie",es:"la menor de las hermanas mayores",en:"the youngest of the older sisters",
   x:{
es:`最小的 + 姐姐.`,
en:`最小的 + 姐姐.`,
zh:`最小的 + 姐姐。`}},
  {id:"fa2-44",s:"大孙",t:"大孫",py:"dàsūn",es:"nieto mayor",en:"eldest grandson",
   x:{
es:`大 + 孙.`,
en:`大 + 孙.`,
zh:`大 + 孙。`}},
  {id:"fa2-45",s:"二孙",t:"二孫",py:"èrsūn",es:"segundo nieto",en:"second grandson",
   x:{
es:`二 + 孙.`,
en:`二 + 孙.`,
zh:`二 + 孙。`}},
  {id:"fa2-46",s:"三孙",t:"三孫",py:"sānsūn",es:"tercer nieto",en:"third grandson",
   x:{
es:`三 + 孙.`,
en:`三 + 孙.`,
zh:`三 + 孙。`}},
  {id:"fa2-47",s:"四孙",t:"四孫",py:"sìsūn",es:"cuarto nieto",en:"fourth grandson",
   x:{
es:`四 + 孙.`,
en:`四 + 孙.`,
zh:`四 + 孙。`}},
  {id:"fa2-48",s:"最小的孙子",t:"最小的孫子",py:"zuì xiǎo de sūnzi",es:"el nieto menor",en:"the youngest grandson",
   x:{
es:`最小的 + 孙子.`,
en:`最小的 + 孙子.`,
zh:`最小的 + 孙子。`}},
  {id:"fa2-49",s:"大孙女",t:"大孫女",py:"dà sūnnǚ",es:"nieta mayor",en:"eldest granddaughter",
   x:{
es:`大 + 孙女.`,
en:`大 + 孙女.`,
zh:`大 + 孙女。`}},
  {id:"fa2-50",s:"二孙女",t:"二孫女",py:"èr sūnnǚ",es:"segunda nieta",en:"second granddaughter",
   x:{
es:`二 + 孙女.`,
en:`二 + 孙女.`,
zh:`二 + 孙女。`}},
  {id:"fa2-51",s:"三孙女",t:"三孫女",py:"sān sūnnǚ",es:"tercera nieta",en:"third granddaughter",
   x:{
es:`三 + 孙女.`,
en:`三 + 孙女.`,
zh:`三 + 孙女。`}},
  {id:"fa2-52",s:"四孙女",t:"四孫女",py:"sì sūnnǚ",es:"cuarta nieta",en:"fourth granddaughter",
   x:{
es:`四 + 孙女.`,
en:`四 + 孙女.`,
zh:`四 + 孙女。`}},
  {id:"fa2-53",s:"最小的孙女",t:"最小的孫女",py:"zuì xiǎo de sūnnǚ",es:"la nieta menor",en:"the youngest granddaughter",
   x:{
es:`最小的 + 孙女.`,
en:`最小的 + 孙女.`,
zh:`最小的 + 孙女。`}},
  {id:"fa2-54",s:"亲生",t:"親生",py:"qīnshēng",es:"biológico",en:"biological (by birth)",
   x:{
es:`亲 (pariente cercano; en tradicional 親, con 見 ver) + 生 (nacer: un brote saliendo de la tierra). Nacido de uno mismo.`,
en:`亲 (close relative; traditional 親, with 見 to see) + 生 (to be born: a sprout from the soil). Born of oneself.`,
zh:`亲 + 生（破土的芽），自己生的。`}},
  {id:"fa2-55",s:"领养",t:"領養",py:"lǐngyǎng",es:"adoptivo; adoptar",en:"adoptive; to adopt",
   x:{
es:`领 llevar, cuello: 令 (sonido) + 页 (una cabeza sobre el cuerpo; en tradicional 頁).
养 criar, alimentar: en tradicional 養 = 羊 (oveja, por el sonido) + 食 (comida). Llevar a alguien para criarlo.`,
en:`领 to lead, collar: 令 (sound) + 页 (a head on a body; traditional 頁).
养 to raise, to feed: in traditional 養 = 羊 (sheep, for the sound) + 食 (food). Taking someone in to raise them.`,
zh:`领：令（表音）+ 页（头）。养：繁体 養 = 羊（表音）+ 食。领回来抚养。`}},
  {id:"fa2-56",s:"养父",t:"養父",py:"yǎngfù",es:"padre adoptivo",en:"adoptive father",
   x:{
es:`养 criar + 父 padre.`,
en:`养 to raise + 父 father.`,
zh:`养 + 父。`}},
  {id:"fa2-57",s:"养母",t:"養母",py:"yǎngmǔ",es:"madre adoptiva",en:"adoptive mother",
   x:{
es:`养 + 母.`,
en:`养 + 母.`,
zh:`养 + 母。`}},
  {id:"fa2-58",s:"生父",py:"shēngfù",es:"padre biológico",en:"birth father",
   x:{
es:`生 nacer + 父. El padre por nacimiento.`,
en:`生 to be born + 父. The father by birth.`,
zh:`生 + 父，亲生父亲。`}},
  {id:"fa2-59",s:"生母",py:"shēngmǔ",es:"madre biológica",en:"birth mother",
   x:{
es:`生 + 母.`,
en:`生 + 母.`,
zh:`生 + 母。`}},
  {id:"fa2-60",s:"独生子",t:"獨生子",py:"dúshēngzǐ",es:"hijo único",en:"only son",
   x:{
es:`独 solo: 犭 (perro) + 虫. En tradicional 獨 = 犭 + 蜀. La explicación clásica: las ovejas andan en rebaño, los perros pelean y viven solos.
+ 生 nacer + 子 hijo.`,
en:`独 alone: 犭 (dog) + 虫. In traditional 獨 = 犭 + 蜀. The classic explanation: sheep go in flocks, dogs fight and live alone.
+ 生 to be born + 子 child.`,
zh:`独：犭 + 虫（繁体 獨：犭 + 蜀）。传统解释：羊成群，狗好斗而独居。+ 生 + 子。`}},
  {id:"fa2-61",s:"独子",t:"獨子",py:"dúzǐ",es:"hijo único",en:"only son",
   x:{
es:`独 solo + 子. Versión corta.`,
en:`独 alone + 子. Short version.`,
zh:`独 + 子，简短说法。`}},
  {id:"fa2-62",s:"独生女",t:"獨生女",py:"dúshēngnǚ",es:"hija única",en:"only daughter",
   x:{
es:`独生 + 女.`,
en:`独生 + 女.`,
zh:`独生 + 女。`}},
  {id:"fa2-63",s:"双胞胎",t:"雙胞胎",py:"shuāngbāotāi",es:"gemelos, mellizos",en:"twins",
   x:{
es:`双 par: dos manos 又又. En tradicional 雙 = dos pájaros 隹隹 en una mano 又.
胞: 月 (carne) + 包 (envolver): la bolsa del útero. 胎: 月 (carne) + 台 (sonido): el embrión.
«Un par del mismo útero».`,
en:`双 pair: two hands 又又. In traditional 雙 = two birds 隹隹 in one hand 又.
胞: 月 (flesh) + 包 (to wrap): the womb's sac. 胎: 月 (flesh) + 台 (sound): the embryo.
"A pair from the same womb".`,
zh:`双：两只手（繁体 雙：一只手里两只鸟）。胞：月（肉）+ 包，胎衣。胎：月 + 台（表音），胚胎。`}},
  {id:"fa2-64",s:"三胞胎",py:"sānbāotāi",es:"trillizos",en:"triplets",
   x:{
es:`三 + 胞胎.`,
en:`三 + 胞胎.`,
zh:`三 + 胞胎。`}},
  {id:"fa2-65",s:"岁",t:"歲",py:"suì",es:"años (de edad)",en:"years old",
   x:{
es:`Simplificado 岁 = 山 (montaña) + 夕 (luna). El tradicional 歲 viene de un hacha de cosecha con pasos: el ciclo de la cosecha, el año. Origen en parte discutido.
我三十岁 tengo treinta años.`,
en:`Simplified 岁 = 山 (mountain) + 夕 (moon). The traditional 歲 comes from a harvest axe with footsteps: the harvest cycle, the year. Origin partly disputed.
我三十岁 I'm thirty.`,
zh:`简体 岁：山 + 夕。繁体 歲 来自收割用的斧和脚步：收成的周期，一年。来源部分有争议。`}},
  {id:"fa2-66",s:"差",py:"chà",es:"diferir, faltar (por edad)",en:"to differ (in age)",
   x:{
es:`Originalmente una mano frotando espigas de manera despareja: desigual, diferencia.
我们差两岁 nos llevamos dos años.`,
en:`Originally a hand rubbing ears of grain unevenly: uneven, difference.
我们差两岁 we're two years apart.`,
zh:`本义是用手不均匀地搓麦穗：不齐、差别。我们差两岁。`}},
  {id:"fa2-67",s:"家里",t:"家裡",py:"jiālǐ",es:"en casa, en la familia",en:"at home, in the family",
   x:{
es:`家 casa: 宀 (techo) con 豕 (un cerdo) debajo. El cerdo bajo el techo era la señal de un hogar.
里 adentro: en tradicional 裡 lleva 衣 (ropa): el forro, lo de adentro.`,
en:`家 home: 宀 (roof) with 豕 (a pig) underneath. A pig under the roof was the sign of a household.
里 inside: in traditional 裡 it has 衣 (clothing): the lining, what's inside.`,
zh:`家：宀 下面 豕（猪），屋里养猪就是一个家。里：繁体 裡 有 衣：衣服的里子。`}},
  {id:"fa2-68",s:"排行",py:"páiháng",es:"orden de nacimiento",en:"birth order",
   x:{
es:`排 ordenar en fila: 扌 (mano) + 非 (dos alas opuestas).
行 fila: un cruce de caminos. Acá se lee háng, no xíng.`,
en:`排 to line up: 扌 (hand) + 非 (two opposing wings).
行 row: a crossroads. Here it's read háng, not xíng.`,
zh:`排：扌 + 非。行：十字路口，这里读 háng。`}},
  {id:"fa2-69",s:"老几",t:"老幾",py:"lǎojǐ",es:"¿qué número de hijo sos?",en:"which child are you (in birth order)?",
   x:{
es:`老 + 几 (cuántos). 你是老几？ ¿qué número de hijo sos?
En tradicional 幾 = 丝 (hilos finos) + 戍 (un guardia): lo mínimo, pocos.`,
en:`老 + 几 (how many). 你是老几？ Which child are you?
In traditional 幾 = 丝 (fine threads) + 戍 (a guard): the minimum, few.`,
zh:`老 + 几。你是老几？繁体 幾：丝（细线）+ 戍（守卫），表示细微、少。`}}
  ]
});
