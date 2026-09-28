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
es:`QUÉ ES: «papá» a la antigua, en el habla del norte de China y en novelas, óperas y dramas de época («爹，我回来了！»). Hoy en la vida diaria se dice 爸爸; 爹 suena rural o de otra época. En Taiwán casi no se usa, salvo en 爹地 (diēdì), que imita el inglés «daddy».

LOS CARACTERES:
爹: arriba 父 «padre», abajo 多 «mucho».
父: el dibujo de una mano sosteniendo un hacha de piedra o un palo: el hombre que trabaja, caza y manda. (Otros lo leen como una mano con una antorcha; el detalle se discute.)
多: dos 夕 (luna / trozo de carne) apilados: «mucho, más de uno». En 爹 está solo por el sonido (duō → diē).
= «padre» + una pista de cómo suena.

LA PAREJA: 娘 niáng, mamá a la antigua. Juntos: 爹娘, «los viejos, los padres».

PRONUNCIACIÓN: diē, 1.er tono, alto y parejo. La d no tiene aire, suena casi como una «t» suave.`,
en:`WHAT IT IS: "dad" in the old style, in northern Chinese speech and in novels, operas and period dramas ("爹，我回来了！"). In daily life today people say 爸爸; 爹 sounds rural or old-fashioned. In Taiwan it is hardly used, except in 爹地 (diēdì), imitating English "daddy".

THE CHARACTERS:
爹: 父 "father" on top, 多 "many" below.
父: a hand holding a stone axe or a stick: the man who works, hunts and commands. (Others read it as a hand holding a torch; the detail is disputed.)
多: two 夕 (moon / piece of meat) stacked: "many, more than one". In 爹 it is only there for the sound (duō → diē).
= "father" + a hint of the sound.

THE PAIR: 娘 niáng, mom in the old style. Together: 爹娘, "the old folks, the parents".

PRONUNCIATION: diē, 1st tone, high and level. The d has no puff of air, almost a soft "t".`,
zh:`是什么：旧式、北方口语的「爸爸」，古装剧常见；台湾少用，只有「爹地」。
汉字：父（手持石斧或木杖）表义 + 多（表音）。
对应：娘。爹娘＝父母。`}},
  {id:"fa2-02",s:"娘",py:"niáng",es:"mamá (coloquial, antiguo)",en:"mom (colloquial, old-fashioned)",
   x:{
es:`QUÉ ES: «mamá» a la antigua, pareja de 爹. Se oye en dramas de época y en el campo del norte de China; hoy en la vida diaria se dice 妈妈. Pero 娘 sigue vivo en otras palabras: 姑娘 (gūniang, muchacha), 新娘 (xīnniáng, la novia en la boda), 老板娘 (la esposa del dueño, la dueña de un negocio; muy común en Taiwán para la señora que atiende).

LOS CARACTERES:
娘: 女 + 良.
女: una mujer arrodillada con los brazos cruzados sobre el pecho, la postura antigua de respeto. Da el significado: es una mujer.
良: «bueno». Su dibujo antiguo se discute (un pasillo de una casa, o una criba para granos). En 娘 está sobre todo por el sonido (liáng → niáng), aunque es fácil recordarlo como «la mujer buena».

LA PAREJA: 爹 diē, papá a la antigua. 爹娘 = los padres.

PRONUNCIACIÓN: niáng, 2.º tono, sube como una pregunta. Empieza con «ni» y termina en «-ang» nasal.`,
en:`WHAT IT IS: "mom" in the old style, pair of 爹. Heard in period dramas and in the northern Chinese countryside; in daily life today people say 妈妈. But 娘 lives on in other words: 姑娘 (gūniang, young woman), 新娘 (xīnniáng, bride), 老板娘 (the owner's wife, the lady who runs a shop; very common in Taiwan).

THE CHARACTERS:
娘: 女 + 良.
女: a woman kneeling with arms crossed over her chest, the old posture of respect. It gives the meaning: a woman.
良: "good". Its ancient drawing is disputed (a corridor of a house, or a grain sieve). In 娘 it is mainly there for the sound (liáng → niáng), though it is easy to remember as "the good woman".

THE PAIR: 爹 diē, old-style dad. 爹娘 = the parents.

PRONUNCIATION: niáng, 2nd tone, rising like a question. Starts with "ni" and ends in a nasal "-ang".`,
zh:`是什么：旧式的「妈妈」，与爹相对。今天仍见于姑娘、新娘、老板娘。
汉字：女（跪坐交手的女子）表义 + 良（表音，字形本义有争议）。`}},
  {id:"fa2-03",s:"堂姐",py:"tángjiě",es:"prima mayor (hija del tío paterno)",en:"older female cousin (father's brother's daughter)",
   x:{
es:`QUÉ ES: prima mayor que vos, hija de un hermano de tu papá. Lleva tu mismo apellido.

EL SISTEMA DE PRIMOS: en chino no existe una palabra neutra para «primo». Hay que decir dos cosas a la vez:
1) De qué lado: 堂 (táng) = hijos de los hermanos varones del papá. Tienen tu mismo apellido y, en la familia tradicional, compartían el mismo salón de los ancestros. 表 (biǎo) = todos los demás: hijos de las hermanas del papá y de todos los hermanos de la mamá. Tienen otro apellido: son la familia «de afuera».
2) Edad y sexo respecto a vos: 哥 (varón mayor), 姐 (mujer mayor), 弟 (varón menor), 妹 (mujer menor).
Resultado: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

LOS CARACTERES:
堂: «salón principal». Abajo 土 (tierra: un montículo sobre el suelo), la plataforma de tierra apisonada donde se levantaba el salón; arriba 尚, que aporta el sonido (shàng → táng) y se ve como un techo alto. El salón de los ancestros (祠堂) donde la familia del mismo apellido honraba a sus antepasados. También en 教堂 (iglesia) y 食堂 (comedor).
姐: «hermana mayor». 女 (mujer arrodillada) da el significado; 且 (una tablilla de altar) aporta el sonido.

EJEMPLO: 我堂姐也姓王 = mi prima (hija de mi tío paterno) también se apellida Wang.

PRONUNCIACIÓN: táng (2.º tono, sube) + jiě (3.er tono).`,
en:`WHAT IT IS: a female cousin older than you, daughter of your father's brother. She has your surname.

THE COUSIN SYSTEM: Chinese has no neutral word for "cousin". You must say two things at once:
1) Which side: 堂 (táng) = children of your father's brothers. They share your surname and, in the traditional family, the same ancestral hall. 表 (biǎo) = everyone else: children of your father's sisters and of all your mother's siblings. They have another surname: the "outside" family.
2) Age and sex relative to you: 哥 (older male), 姐 (older female), 弟 (younger male), 妹 (younger female).
Result: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

THE CHARACTERS:
堂: "main hall". Below is 土 (earth: a mound on the ground), the tamped-earth platform the hall stood on; above is 尚, which gives the sound (shàng → táng) and looks like a high roof. The ancestral hall (祠堂) where the family of one surname honored its ancestors. Also in 教堂 (church) and 食堂 (canteen).
姐: "older sister". 女 (kneeling woman) gives the meaning; 且 (an altar tablet) gives the sound.

EXAMPLE: 我堂姐也姓王 = my cousin (father's brother's daughter) is also surnamed Wang.

PRONUNCIATION: táng (2nd tone, rising) + jiě (3rd tone).`,
zh:`是什么：父亲兄弟的女儿，比自己大。堂＝父亲兄弟的孩子（同姓，同祠堂）；表＝父亲姐妹或母亲兄弟姐妹的孩子（异姓）。再加哥姐弟妹（比自己大小、男女）。堂：土（夯土台基）+ 尚（表音），祠堂。姐：女 + 且（表音）。`}},
  {id:"fa2-04",s:"堂弟",py:"tángdì",es:"primo menor (hijo del tío paterno)",en:"younger male cousin (father's brother's son)",
   x:{
es:`QUÉ ES: primo menor que vos, hijo de un hermano de tu papá. Lleva tu mismo apellido.

EL SISTEMA DE PRIMOS: en chino no existe una palabra neutra para «primo». Hay que decir dos cosas a la vez:
1) De qué lado: 堂 (táng) = hijos de los hermanos varones del papá. Tienen tu mismo apellido y, en la familia tradicional, compartían el mismo salón de los ancestros. 表 (biǎo) = todos los demás: hijos de las hermanas del papá y de todos los hermanos de la mamá. Tienen otro apellido: son la familia «de afuera».
2) Edad y sexo respecto a vos: 哥 (varón mayor), 姐 (mujer mayor), 弟 (varón menor), 妹 (mujer menor).
Resultado: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

LOS CARACTERES:
堂: «salón principal». Abajo 土 (tierra: un montículo sobre el suelo), la plataforma de tierra apisonada donde se levantaba el salón; arriba 尚, que aporta el sonido (shàng → táng) y se ve como un techo alto. El salón de los ancestros (祠堂) donde la familia del mismo apellido honraba a sus antepasados. También en 教堂 (iglesia) y 食堂 (comedor).
弟: «hermano menor». Es el dibujo de una cuerda enrollada en espiral alrededor de un palo, vuelta tras vuelta en orden: «orden, secuencia», y de ahí «el que viene después», el hermano menor. (Se ve en 第, «número de orden», que es el mismo dibujo con 竹 bambú encima.)

EJEMPLO: 我堂弟今年十岁 = mi primo (hijo de mi tío paterno) tiene diez años.

PRONUNCIACIÓN: táng (2.º tono, sube) + dì (4.º tono).`,
en:`WHAT IT IS: a male cousin younger than you, son of your father's brother. He has your surname.

THE COUSIN SYSTEM: Chinese has no neutral word for "cousin". You must say two things at once:
1) Which side: 堂 (táng) = children of your father's brothers. They share your surname and, in the traditional family, the same ancestral hall. 表 (biǎo) = everyone else: children of your father's sisters and of all your mother's siblings. They have another surname: the "outside" family.
2) Age and sex relative to you: 哥 (older male), 姐 (older female), 弟 (younger male), 妹 (younger female).
Result: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

THE CHARACTERS:
堂: "main hall". Below is 土 (earth: a mound on the ground), the tamped-earth platform the hall stood on; above is 尚, which gives the sound (shàng → táng) and looks like a high roof. The ancestral hall (祠堂) where the family of one surname honored its ancestors. Also in 教堂 (church) and 食堂 (canteen).
弟: "younger brother". A drawing of a cord wound in a spiral around a stick, turn after turn in order: "order, sequence", hence "the one who comes after", the younger brother. (See 第, "ordinal number", the same drawing with 竹 bamboo on top.)

EXAMPLE: 我堂弟今年十岁 = my cousin (father's brother's son) is ten this year.

PRONUNCIATION: táng (2nd tone, rising) + dì (4th tone).`,
zh:`是什么：父亲兄弟的儿子，比自己小。堂＝父亲兄弟的孩子（同姓，同祠堂）；表＝父亲姐妹或母亲兄弟姐妹的孩子（异姓）。再加哥姐弟妹（比自己大小、男女）。堂：土（夯土台基）+ 尚（表音），祠堂。弟：绳子一圈圈缠在木桩上，次第，引申为弟。`}},
  {id:"fa2-05",s:"堂妹",py:"tángmèi",es:"prima menor (hija del tío paterno)",en:"younger female cousin (father's brother's daughter)",
   x:{
es:`QUÉ ES: prima menor que vos, hija de un hermano de tu papá. Lleva tu mismo apellido.

EL SISTEMA DE PRIMOS: en chino no existe una palabra neutra para «primo». Hay que decir dos cosas a la vez:
1) De qué lado: 堂 (táng) = hijos de los hermanos varones del papá. Tienen tu mismo apellido y, en la familia tradicional, compartían el mismo salón de los ancestros. 表 (biǎo) = todos los demás: hijos de las hermanas del papá y de todos los hermanos de la mamá. Tienen otro apellido: son la familia «de afuera».
2) Edad y sexo respecto a vos: 哥 (varón mayor), 姐 (mujer mayor), 弟 (varón menor), 妹 (mujer menor).
Resultado: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

LOS CARACTERES:
堂: «salón principal». Abajo 土 (tierra: un montículo sobre el suelo), la plataforma de tierra apisonada donde se levantaba el salón; arriba 尚, que aporta el sonido (shàng → táng) y se ve como un techo alto. El salón de los ancestros (祠堂) donde la familia del mismo apellido honraba a sus antepasados. También en 教堂 (iglesia) y 食堂 (comedor).
妹: «hermana menor». 女 (mujer) da el significado; 未 aporta el sonido (wèi → mèi). 未 es un árbol con ramitas nuevas arriba, «todavía no» terminado de crecer: fácil de recordar como «la mujer que todavía no creció».

EJEMPLO: 我有两个堂妹 = tengo dos primas menores por parte de mi tío paterno.

PRONUNCIACIÓN: táng (2.º tono, sube) + mèi (4.º tono).`,
en:`WHAT IT IS: a female cousin younger than you, daughter of your father's brother. She has your surname.

THE COUSIN SYSTEM: Chinese has no neutral word for "cousin". You must say two things at once:
1) Which side: 堂 (táng) = children of your father's brothers. They share your surname and, in the traditional family, the same ancestral hall. 表 (biǎo) = everyone else: children of your father's sisters and of all your mother's siblings. They have another surname: the "outside" family.
2) Age and sex relative to you: 哥 (older male), 姐 (older female), 弟 (younger male), 妹 (younger female).
Result: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

THE CHARACTERS:
堂: "main hall". Below is 土 (earth: a mound on the ground), the tamped-earth platform the hall stood on; above is 尚, which gives the sound (shàng → táng) and looks like a high roof. The ancestral hall (祠堂) where the family of one surname honored its ancestors. Also in 教堂 (church) and 食堂 (canteen).
妹: "younger sister". 女 (woman) gives the meaning; 未 gives the sound (wèi → mèi). 未 is a tree with new twigs on top, "not yet" fully grown: easy to remember as "the woman not yet grown".

EXAMPLE: 我有两个堂妹 = I have two younger cousins on my father's brother's side.

PRONUNCIATION: táng (2nd tone, rising) + mèi (4th tone).`,
zh:`是什么：父亲兄弟的女儿，比自己小。堂＝父亲兄弟的孩子（同姓，同祠堂）；表＝父亲姐妹或母亲兄弟姐妹的孩子（异姓）。再加哥姐弟妹（比自己大小、男女）。堂：土（夯土台基）+ 尚（表音），祠堂。妹：女 + 未（表音）。`}},
  {id:"fa2-06",s:"表哥",py:"biǎogē",es:"primo mayor (por tías o por la mamá)",en:"older male cousin (other side)",
   x:{
es:`QUÉ ES: primo mayor que vos del lado «de afuera»: hijo de una hermana de tu papá o de cualquier hermano o hermana de tu mamá. Tiene otro apellido.

EL SISTEMA DE PRIMOS: en chino no existe una palabra neutra para «primo». Hay que decir dos cosas a la vez:
1) De qué lado: 堂 (táng) = hijos de los hermanos varones del papá. Tienen tu mismo apellido y, en la familia tradicional, compartían el mismo salón de los ancestros. 表 (biǎo) = todos los demás: hijos de las hermanas del papá y de todos los hermanos de la mamá. Tienen otro apellido: son la familia «de afuera».
2) Edad y sexo respecto a vos: 哥 (varón mayor), 姐 (mujer mayor), 弟 (varón menor), 妹 (mujer menor).
Resultado: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

LOS CARACTERES:
表: «lo de afuera, la superficie». En la escritura antigua era 衣 (ropa: el cuello y los faldones de una prenda) con 毛 (pelo) en el medio: el abrigo de piel que se llevaba con el pelo hacia afuera. De ahí «exterior», y también 手表 (reloj de muñeca, lo que se ve por fuera) y 表示 (mostrar). Los primos 表 son los «de afuera», con otro apellido.
哥: «hermano mayor». Dos 可 apilados; 可 aporta el sonido. El carácter nació para «cantar» (hoy 歌) y se tomó prestado para «hermano mayor» (origen de la palabra discutido).

EJEMPLO: 我表哥住在高雄 = mi primo mayor (por parte de mi mamá o de mi tía) vive en Kaohsiung.

PRONUNCIACIÓN: biǎo (3.er tono, baja; queda bajo y corto porque sigue otra sílaba) + gē (1.er tono).`,
en:`WHAT IT IS: a male cousin older than you on the "outside" side: son of your father's sister or of any of your mother's siblings. He has another surname.

THE COUSIN SYSTEM: Chinese has no neutral word for "cousin". You must say two things at once:
1) Which side: 堂 (táng) = children of your father's brothers. They share your surname and, in the traditional family, the same ancestral hall. 表 (biǎo) = everyone else: children of your father's sisters and of all your mother's siblings. They have another surname: the "outside" family.
2) Age and sex relative to you: 哥 (older male), 姐 (older female), 弟 (younger male), 妹 (younger female).
Result: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

THE CHARACTERS:
表: "outside, surface". In ancient script it was 衣 (clothing: the collar and flaps of a garment) with 毛 (fur) in the middle: the fur coat worn with the fur outside. Hence "outer", and also 手表 (wristwatch, what shows outside) and 表示 (to show). 表 cousins are the "outside" ones, with another surname.
哥: "older brother". Two 可 stacked; 可 gives the sound. The character was born for "to sing" (today 歌) and borrowed for "older brother" (origin of the word disputed).

EXAMPLE: 我表哥住在高雄 = my older cousin (mother's side or father's sister's) lives in Kaohsiung.

PRONUNCIATION: biǎo (3rd tone, low; stays low and short before another syllable) + gē (1st tone).`,
zh:`是什么：姑姑或母亲兄弟姐妹的儿子，比自己大。堂＝父亲兄弟的孩子（同姓，同祠堂）；表＝父亲姐妹或母亲兄弟姐妹的孩子（异姓）。再加哥姐弟妹（比自己大小、男女）。表：古字为衣中加毛，毛朝外的皮衣，外面。表亲是「外」家，异姓。哥：两个可，本义「歌」借用。`}},
  {id:"fa2-07",s:"表姐",py:"biǎojiě",es:"prima mayor (por tías o por la mamá)",en:"older female cousin (other side)",
   x:{
es:`QUÉ ES: prima mayor que vos del lado «de afuera»: hija de una hermana de tu papá o de cualquier hermano o hermana de tu mamá. Tiene otro apellido.

EL SISTEMA DE PRIMOS: en chino no existe una palabra neutra para «primo». Hay que decir dos cosas a la vez:
1) De qué lado: 堂 (táng) = hijos de los hermanos varones del papá. Tienen tu mismo apellido y, en la familia tradicional, compartían el mismo salón de los ancestros. 表 (biǎo) = todos los demás: hijos de las hermanas del papá y de todos los hermanos de la mamá. Tienen otro apellido: son la familia «de afuera».
2) Edad y sexo respecto a vos: 哥 (varón mayor), 姐 (mujer mayor), 弟 (varón menor), 妹 (mujer menor).
Resultado: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

LOS CARACTERES:
表: «lo de afuera, la superficie». En la escritura antigua era 衣 (ropa: el cuello y los faldones de una prenda) con 毛 (pelo) en el medio: el abrigo de piel que se llevaba con el pelo hacia afuera. De ahí «exterior», y también 手表 (reloj de muñeca, lo que se ve por fuera) y 表示 (mostrar). Los primos 表 son los «de afuera», con otro apellido.
姐: «hermana mayor». 女 (mujer arrodillada) da el significado; 且 (una tablilla de altar) aporta el sonido.

EJEMPLO: 我表姐是医生 = mi prima mayor (por parte de mi mamá o de mi tía) es médica.

PRONUNCIACIÓN: biǎo (3.er tono, baja; queda bajo y corto porque sigue otra sílaba) + jiě (3.er tono).`,
en:`WHAT IT IS: a female cousin older than you on the "outside" side: daughter of your father's sister or of any of your mother's siblings. She has another surname.

THE COUSIN SYSTEM: Chinese has no neutral word for "cousin". You must say two things at once:
1) Which side: 堂 (táng) = children of your father's brothers. They share your surname and, in the traditional family, the same ancestral hall. 表 (biǎo) = everyone else: children of your father's sisters and of all your mother's siblings. They have another surname: the "outside" family.
2) Age and sex relative to you: 哥 (older male), 姐 (older female), 弟 (younger male), 妹 (younger female).
Result: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

THE CHARACTERS:
表: "outside, surface". In ancient script it was 衣 (clothing: the collar and flaps of a garment) with 毛 (fur) in the middle: the fur coat worn with the fur outside. Hence "outer", and also 手表 (wristwatch, what shows outside) and 表示 (to show). 表 cousins are the "outside" ones, with another surname.
姐: "older sister". 女 (kneeling woman) gives the meaning; 且 (an altar tablet) gives the sound.

EXAMPLE: 我表姐是医生 = my older cousin (mother's side or father's sister's) is a doctor.

PRONUNCIATION: biǎo (3rd tone, low; stays low and short before another syllable) + jiě (3rd tone).`,
zh:`是什么：姑姑或母亲兄弟姐妹的女儿，比自己大。堂＝父亲兄弟的孩子（同姓，同祠堂）；表＝父亲姐妹或母亲兄弟姐妹的孩子（异姓）。再加哥姐弟妹（比自己大小、男女）。表：古字为衣中加毛，毛朝外的皮衣，外面。表亲是「外」家，异姓。姐：女 + 且（表音）。`}},
  {id:"fa2-08",s:"表弟",py:"biǎodì",es:"primo menor (por tías o por la mamá)",en:"younger male cousin (other side)",
   x:{
es:`QUÉ ES: primo menor que vos del lado «de afuera»: hijo de una hermana de tu papá o de cualquier hermano o hermana de tu mamá.

EL SISTEMA DE PRIMOS: en chino no existe una palabra neutra para «primo». Hay que decir dos cosas a la vez:
1) De qué lado: 堂 (táng) = hijos de los hermanos varones del papá. Tienen tu mismo apellido y, en la familia tradicional, compartían el mismo salón de los ancestros. 表 (biǎo) = todos los demás: hijos de las hermanas del papá y de todos los hermanos de la mamá. Tienen otro apellido: son la familia «de afuera».
2) Edad y sexo respecto a vos: 哥 (varón mayor), 姐 (mujer mayor), 弟 (varón menor), 妹 (mujer menor).
Resultado: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

LOS CARACTERES:
表: «lo de afuera, la superficie». En la escritura antigua era 衣 (ropa: el cuello y los faldones de una prenda) con 毛 (pelo) en el medio: el abrigo de piel que se llevaba con el pelo hacia afuera. De ahí «exterior», y también 手表 (reloj de muñeca, lo que se ve por fuera) y 表示 (mostrar). Los primos 表 son los «de afuera», con otro apellido.
弟: «hermano menor». Es el dibujo de una cuerda enrollada en espiral alrededor de un palo, vuelta tras vuelta en orden: «orden, secuencia», y de ahí «el que viene después», el hermano menor. (Se ve en 第, «número de orden», que es el mismo dibujo con 竹 bambú encima.)

EJEMPLO: 表弟 y 堂弟 son los dos «primo menor»; lo que cambia es el lado de la familia.

PRONUNCIACIÓN: biǎo (3.er tono, baja; queda bajo y corto porque sigue otra sílaba) + dì (4.º tono).`,
en:`WHAT IT IS: a male cousin younger than you on the "outside" side: son of your father's sister or of any of your mother's siblings.

THE COUSIN SYSTEM: Chinese has no neutral word for "cousin". You must say two things at once:
1) Which side: 堂 (táng) = children of your father's brothers. They share your surname and, in the traditional family, the same ancestral hall. 表 (biǎo) = everyone else: children of your father's sisters and of all your mother's siblings. They have another surname: the "outside" family.
2) Age and sex relative to you: 哥 (older male), 姐 (older female), 弟 (younger male), 妹 (younger female).
Result: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

THE CHARACTERS:
表: "outside, surface". In ancient script it was 衣 (clothing: the collar and flaps of a garment) with 毛 (fur) in the middle: the fur coat worn with the fur outside. Hence "outer", and also 手表 (wristwatch, what shows outside) and 表示 (to show). 表 cousins are the "outside" ones, with another surname.
弟: "younger brother". A drawing of a cord wound in a spiral around a stick, turn after turn in order: "order, sequence", hence "the one who comes after", the younger brother. (See 第, "ordinal number", the same drawing with 竹 bamboo on top.)

EXAMPLE: 表弟 and 堂弟 are both "younger male cousin"; only the side of the family changes.

PRONUNCIATION: biǎo (3rd tone, low; stays low and short before another syllable) + dì (4th tone).`,
zh:`是什么：姑姑或母亲兄弟姐妹的儿子，比自己小。堂＝父亲兄弟的孩子（同姓，同祠堂）；表＝父亲姐妹或母亲兄弟姐妹的孩子（异姓）。再加哥姐弟妹（比自己大小、男女）。表：古字为衣中加毛，毛朝外的皮衣，外面。表亲是「外」家，异姓。弟：绳子一圈圈缠在木桩上，次第，引申为弟。`}},
  {id:"fa2-09",s:"表妹",py:"biǎomèi",es:"prima menor (por tías o por la mamá)",en:"younger female cousin (other side)",
   x:{
es:`QUÉ ES: prima menor que vos del lado «de afuera»: hija de una hermana de tu papá o de cualquier hermano o hermana de tu mamá.

EL SISTEMA DE PRIMOS: en chino no existe una palabra neutra para «primo». Hay que decir dos cosas a la vez:
1) De qué lado: 堂 (táng) = hijos de los hermanos varones del papá. Tienen tu mismo apellido y, en la familia tradicional, compartían el mismo salón de los ancestros. 表 (biǎo) = todos los demás: hijos de las hermanas del papá y de todos los hermanos de la mamá. Tienen otro apellido: son la familia «de afuera».
2) Edad y sexo respecto a vos: 哥 (varón mayor), 姐 (mujer mayor), 弟 (varón menor), 妹 (mujer menor).
Resultado: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

LOS CARACTERES:
表: «lo de afuera, la superficie». En la escritura antigua era 衣 (ropa: el cuello y los faldones de una prenda) con 毛 (pelo) en el medio: el abrigo de piel que se llevaba con el pelo hacia afuera. De ahí «exterior», y también 手表 (reloj de muñeca, lo que se ve por fuera) y 表示 (mostrar). Los primos 表 son los «de afuera», con otro apellido.
妹: «hermana menor». 女 (mujer) da el significado; 未 aporta el sonido (wèi → mèi). 未 es un árbol con ramitas nuevas arriba, «todavía no» terminado de crecer: fácil de recordar como «la mujer que todavía no creció».

EJEMPLO: 她是我表妹，不是我妹妹 = es mi prima (menor), no mi hermana.

PRONUNCIACIÓN: biǎo (3.er tono, baja; queda bajo y corto porque sigue otra sílaba) + mèi (4.º tono).`,
en:`WHAT IT IS: a female cousin younger than you on the "outside" side: daughter of your father's sister or of any of your mother's siblings.

THE COUSIN SYSTEM: Chinese has no neutral word for "cousin". You must say two things at once:
1) Which side: 堂 (táng) = children of your father's brothers. They share your surname and, in the traditional family, the same ancestral hall. 表 (biǎo) = everyone else: children of your father's sisters and of all your mother's siblings. They have another surname: the "outside" family.
2) Age and sex relative to you: 哥 (older male), 姐 (older female), 弟 (younger male), 妹 (younger female).
Result: 堂哥, 堂姐, 堂弟, 堂妹 / 表哥, 表姐, 表弟, 表妹.

THE CHARACTERS:
表: "outside, surface". In ancient script it was 衣 (clothing: the collar and flaps of a garment) with 毛 (fur) in the middle: the fur coat worn with the fur outside. Hence "outer", and also 手表 (wristwatch, what shows outside) and 表示 (to show). 表 cousins are the "outside" ones, with another surname.
妹: "younger sister". 女 (woman) gives the meaning; 未 gives the sound (wèi → mèi). 未 is a tree with new twigs on top, "not yet" fully grown: easy to remember as "the woman not yet grown".

EXAMPLE: 她是我表妹，不是我妹妹 = she's my (younger) cousin, not my sister.

PRONUNCIATION: biǎo (3rd tone, low; stays low and short before another syllable) + mèi (4th tone).`,
zh:`是什么：姑姑或母亲兄弟姐妹的女儿，比自己小。堂＝父亲兄弟的孩子（同姓，同祠堂）；表＝父亲姐妹或母亲兄弟姐妹的孩子（异姓）。再加哥姐弟妹（比自己大小、男女）。表：古字为衣中加毛，毛朝外的皮衣，外面。表亲是「外」家，异姓。妹：女 + 未（表音）。`}},
  {id:"fa2-10",s:"弟妹",py:"dìmèi",es:"cuñada (esposa del hermano menor)",en:"sister-in-law (younger brother's wife)",
   x:{
es:`QUÉ ES: la esposa de tu hermano menor, tu cuñada. Los cuñados en chino se nombran según con quién se casaron:
- esposa del hermano mayor: 嫂嫂 / 大嫂 (sǎo)
- esposa del hermano menor: 弟妹 (o 弟媳, dìxí, más formal; muy usado en Taiwán)
- esposo de la hermana mayor: 姐夫
- esposo de la hermana menor: 妹夫

OJO, DOBLE SENTIDO: 弟妹 también significa simplemente «hermanos menores» (弟弟 y 妹妹 juntos): «我有两个弟妹» puede ser «tengo dos hermanos menores». El contexto decide.

LOS CARACTERES:
弟: «hermano menor». Una cuerda enrollada en espiral alrededor de un palo, vuelta tras vuelta en orden: «orden», el que viene después.
妹: «hermana menor». 女 (mujer arrodillada) da el significado; 未 (un árbol con ramitas nuevas, «todavía no» crecido) aporta el sonido.
弟妹 = «la hermana (política) que llegó por mi hermano menor»: la tratás como a una hermana menor.

PRONUNCIACIÓN: dìmèi, dos 4.os tonos seguidos. El primero cae solo hasta la mitad, el segundo cae completo.`,
en:`WHAT IT IS: the wife of your younger brother, your sister-in-law. In Chinese, in-laws are named by whom they married:
- older brother's wife: 嫂嫂 / 大嫂 (sǎo)
- younger brother's wife: 弟妹 (or 弟媳, dìxí, more formal; common in Taiwan)
- older sister's husband: 姐夫
- younger sister's husband: 妹夫

CAREFUL, DOUBLE MEANING: 弟妹 also simply means "younger siblings" (弟弟 and 妹妹 together): "我有两个弟妹" can be "I have two younger siblings". Context decides.

THE CHARACTERS:
弟: "younger brother". A cord wound in a spiral around a stick, turn after turn in order: "order", the one who comes after.
妹: "younger sister". 女 (kneeling woman) gives the meaning; 未 (a tree with new twigs, "not yet" grown) gives the sound.
弟妹 = "the sister (in-law) who came through my younger brother": you treat her like a younger sister.

PRONUNCIATION: dìmèi, two 4th tones in a row. The first falls only halfway, the second falls fully.`,
zh:`是什么：弟弟的妻子（也说弟媳）。也可指「弟弟和妹妹」。
嫂嫂＝哥哥的妻子，姐夫＝姐姐的丈夫，妹夫＝妹妹的丈夫。
汉字：弟（绳绕木桩，次第）；妹（女 + 未表音）。`}},
  {id:"fa2-11",s:"妹夫",py:"mèifu",es:"cuñado (esposo de la hermana menor)",en:"brother-in-law (younger sister's husband)",
   x:{
es:`QUÉ ES: el esposo de tu hermana menor, tu cuñado. Su pareja es 姐夫 (jiěfu), el esposo de la hermana mayor. Las cuñadas por los hermanos son 嫂嫂 (esposa del mayor) y 弟妹 (esposa del menor).

LOS CARACTERES:
妹: «hermana menor». 女 (mujer arrodillada con los brazos cruzados) da el significado; 未 (un árbol con ramitas nuevas, «todavía no» crecido) aporta el sonido.
夫: «marido, hombre adulto». Es 大 (un hombre de frente con los brazos abiertos) con una raya más arriba, que representa el alfiler con el que un hombre adulto sujetaba su moño: en la China antigua a los 20 años el varón se recogía el pelo con un alfiler, señal de que ya era hombre y podía casarse. Lo ves en 丈夫 (esposo) y 夫妻 (marido y mujer).
妹夫 = «el marido de mi hermana menor».

PRONUNCIACIÓN: mèifu. 4.º tono y después 夫 pierde su tono (fū → fu neutro, corto y liviano). Lo mismo en 姐夫 jiěfu y 丈夫 zhàngfu.`,
en:`WHAT IT IS: the husband of your younger sister, your brother-in-law. Its pair is 姐夫 (jiěfu), the older sister's husband. The sisters-in-law through brothers are 嫂嫂 (older brother's wife) and 弟妹 (younger brother's wife).

THE CHARACTERS:
妹: "younger sister". 女 (kneeling woman with crossed arms) gives the meaning; 未 (a tree with new twigs, "not yet" grown) gives the sound.
夫: "husband, grown man". It is 大 (a man seen from the front with arms spread) with one more stroke on top, the hairpin a grown man used to fix his topknot: in ancient China at 20 a man pinned up his hair, a sign he was an adult who could marry. See 丈夫 (husband) and 夫妻 (husband and wife).
妹夫 = "my younger sister's husband".

PRONUNCIATION: mèifu. 4th tone, then 夫 loses its tone (fū → neutral fu, short and light). Same in 姐夫 jiěfu and 丈夫 zhàngfu.`,
zh:`是什么：妹妹的丈夫。对应：姐夫。嫂嫂、弟妹是兄弟的妻子。
汉字：妹（女 + 未）；夫＝大 + 一横（成年男子束发的簪子）。
发音：mèifu，夫读轻声。`}},
  {id:"fa2-12",s:"侄儿",t:"姪兒",py:"zhí'ér",es:"sobrino (hijo del hermano)",en:"nephew (brother's son)",
   x:{
es:`QUÉ ES: tu sobrino, hijo de tu hermano. Lleva tu mismo apellido.

EL SISTEMA: los sobrinos se dividen según de qué hermano vienen, igual que los primos:
- hijos de tu hermano (mismo apellido que vos): 侄儿 / 侄子 (sobrino), 侄女 (sobrina).
- hijos de tu hermana (otro apellido, familia «de afuera»): 外甥 (sobrino), 外甥女 (sobrina).
En Taiwán lo más común es 侄子 (zhízi) y se escribe 姪子.

LOS CARACTERES:
侄: «sobrino por el hermano». Simplificado 侄 = 亻 (persona) + 至; tradicional 姪 = 女 (mujer) + 至. 至 es una flecha que cae y se clava en el suelo: «llegar». En los dos está sobre todo por el sonido (zhì → zhí). La forma con 女 es la antigua: al principio la palabra la usaban las tías para los hijos de sus hermanos; en Taiwán se sigue escribiendo 姪.
儿: tradicional 兒, un bebé con la fontanela todavía abierta (la parte de arriba es el cráneo sin cerrar).

PRONUNCIACIÓN: zhí'ér, dos 2.os tonos. La zh es como una «y» dura con la lengua enroscada hacia atrás. En Taiwán: 姪子 zhízi.`,
en:`WHAT IT IS: your nephew, your brother's son. He has your surname.

THE SYSTEM: nephews and nieces are split by which sibling they come from, like cousins:
- your brother's children (same surname as you): 侄儿 / 侄子 (nephew), 侄女 (niece).
- your sister's children (other surname, the "outside" family): 外甥 (nephew), 外甥女 (niece).
In Taiwan the most common form is 侄子 (zhízi), written 姪子.

THE CHARACTERS:
侄: "nephew through a brother". Simplified 侄 = 亻 (person) + 至; traditional 姪 = 女 (woman) + 至. 至 is an arrow falling and sticking in the ground: "to arrive". In both it is mainly there for the sound (zhì → zhí). The form with 女 is the old one: at first aunts used the word for their brothers' children; Taiwan still writes 姪.
儿: traditional 兒, a baby with the soft spot still open (the top is the unclosed skull).

PRONUNCIATION: zhí'ér, two 2nd tones. zh is like "j" with the tongue curled back. In Taiwan: 姪子 zhízi.`,
zh:`是什么：兄弟的儿子。兄弟的孩子：侄子、侄女（同姓）；姐妹的孩子：外甥、外甥女（异姓）。台湾写「姪」。侄：亻/女 + 至（表音）；兒：囟门未合的婴儿。`}},
  {id:"fa2-13",s:"侄女",t:"姪女",py:"zhínǚ",es:"sobrina (hija del hermano)",en:"niece (brother's daughter)",
   x:{
es:`QUÉ ES: tu sobrina, hija de tu hermano. Lleva tu mismo apellido.

EL SISTEMA: los sobrinos se dividen según de qué hermano vienen, igual que los primos:
- hijos de tu hermano (mismo apellido que vos): 侄儿 / 侄子 (sobrino), 侄女 (sobrina).
- hijos de tu hermana (otro apellido, familia «de afuera»): 外甥 (sobrino), 外甥女 (sobrina).
En Taiwán lo más común es 侄子 (zhízi) y se escribe 姪子.

LOS CARACTERES:
侄: «sobrino por el hermano». Simplificado 侄 = 亻 (persona) + 至; tradicional 姪 = 女 (mujer) + 至. 至 es una flecha que cae y se clava en el suelo: «llegar». En los dos está sobre todo por el sonido (zhì → zhí). La forma con 女 es la antigua: al principio la palabra la usaban las tías para los hijos de sus hermanos; en Taiwán se sigue escribiendo 姪.
女: una mujer arrodillada con los brazos cruzados sobre el pecho. Al final de un parentesco lo vuelve femenino: 侄女, 外甥女, 孙女.

PRONUNCIACIÓN: zhínǚ, 2.º tono + 3.er tono. La ü es una «i» con los labios redondos, como en francés «u».`,
en:`WHAT IT IS: your niece, your brother's daughter. She has your surname.

THE SYSTEM: nephews and nieces are split by which sibling they come from, like cousins:
- your brother's children (same surname as you): 侄儿 / 侄子 (nephew), 侄女 (niece).
- your sister's children (other surname, the "outside" family): 外甥 (nephew), 外甥女 (niece).
In Taiwan the most common form is 侄子 (zhízi), written 姪子.

THE CHARACTERS:
侄: "nephew through a brother". Simplified 侄 = 亻 (person) + 至; traditional 姪 = 女 (woman) + 至. 至 is an arrow falling and sticking in the ground: "to arrive". In both it is mainly there for the sound (zhì → zhí). The form with 女 is the old one: at first aunts used the word for their brothers' children; Taiwan still writes 姪.
女: a woman kneeling with arms crossed over her chest. At the end of a kinship word it makes it female: 侄女, 外甥女, 孙女.

PRONUNCIATION: zhínǚ, 2nd + 3rd tone. ü is "ee" with rounded lips, like French "u".`,
zh:`是什么：兄弟的女儿。兄弟的孩子：侄子、侄女（同姓）；姐妹的孩子：外甥、外甥女（异姓）。台湾写「姪」。侄：至表音；女：跪坐的女子。`}},
  {id:"fa2-14",s:"外甥",py:"wàisheng",es:"sobrino (hijo de la hermana)",en:"nephew (sister's son)",
   x:{
es:`QUÉ ES: tu sobrino, hijo de tu hermana. Tiene otro apellido (el del padre), por eso lleva 外, «de afuera».

EL SISTEMA: los sobrinos se dividen según de qué hermano vienen, igual que los primos:
- hijos de tu hermano (mismo apellido que vos): 侄儿 / 侄子 (sobrino), 侄女 (sobrina).
- hijos de tu hermana (otro apellido, familia «de afuera»): 外甥 (sobrino), 外甥女 (sobrina).
En Taiwán lo más común es 侄子 (zhízi) y se escribe 姪子.

LOS CARACTERES:
外: «afuera». 夕 (la luna, la noche) + 卜 (una grieta en un hueso de adivinación). La explicación tradicional: adivinar se hacía de mañana, y una adivinación de noche estaba «fuera» de la norma. Algunos estudiosos creen que era solo un préstamo de sonido; el origen se discute. Aparece en 外国 (extranjero) y en toda la familia «de afuera»: 外公, 外婆, 外孙.
甥: 男 (varón: 田 campo + 力 arado, el que trabaja el campo) + 生 (nacer: un brote que sale de la tierra). 生 da el sonido y también el sentido: «el varón nacido» de tu hermana.

PRONUNCIACIÓN: wàisheng: 4.º tono y después 甥 en tono neutro (corto y liviano). Sola, 甥 se lee shēng.`,
en:`WHAT IT IS: your nephew, your sister's son. He has another surname (his father's), so it carries 外, "outside".

THE SYSTEM: nephews and nieces are split by which sibling they come from, like cousins:
- your brother's children (same surname as you): 侄儿 / 侄子 (nephew), 侄女 (niece).
- your sister's children (other surname, the "outside" family): 外甥 (nephew), 外甥女 (niece).
In Taiwan the most common form is 侄子 (zhízi), written 姪子.

THE CHARACTERS:
外: "outside". 夕 (the moon, night) + 卜 (a crack in an oracle bone). The traditional explanation: divination was done in the morning, and one done at night was "outside" the norm. Some scholars think it was only a sound loan; the origin is disputed. It appears in 外国 (foreign) and across the whole "outside" family: 外公, 外婆, 外孙.
甥: 男 (male: 田 field + 力 plough, the one who works the field) + 生 (to be born: a sprout coming out of the earth). 生 gives the sound and also the meaning: "the boy born" to your sister.

PRONUNCIATION: wàisheng: 4th tone, then 甥 in neutral tone (short and light). On its own 甥 is shēng.`,
zh:`是什么：姐妹的儿子，异姓，所以用「外」。兄弟的孩子：侄子、侄女（同姓）；姐妹的孩子：外甥、外甥女（异姓）。台湾写「姪」。外：夕 + 卜，晚上占卜为例外（说法有争议）；甥：男 + 生（表音兼义）。发音：wàisheng，甥读轻声。`}},
  {id:"fa2-15",s:"外甥女",py:"wàishengnǚ",es:"sobrina (hija de la hermana)",en:"niece (sister's daughter)",
   x:{
es:`QUÉ ES: tu sobrina, hija de tu hermana. Es 外甥 (sobrino por la hermana) + 女 (mujer).

EL SISTEMA: los sobrinos se dividen según de qué hermano vienen, igual que los primos:
- hijos de tu hermano (mismo apellido que vos): 侄儿 / 侄子 (sobrino), 侄女 (sobrina).
- hijos de tu hermana (otro apellido, familia «de afuera»): 外甥 (sobrino), 外甥女 (sobrina).
En Taiwán lo más común es 侄子 (zhízi) y se escribe 姪子.

LOS CARACTERES:
外: «afuera». 夕 (la luna, la noche) + 卜 (una grieta en un hueso de adivinación). La explicación tradicional: adivinar se hacía de mañana, y una adivinación de noche estaba «fuera» de la norma. Algunos estudiosos creen que era solo un préstamo de sonido; el origen se discute. Aparece en 外国 (extranjero) y en toda la familia «de afuera»: 外公, 外婆, 外孙.
甥: 男 (varón: 田 campo + 力 arado, el que trabaja el campo) + 生 (nacer: un brote que sale de la tierra). 生 da el sonido y también el sentido: «el varón nacido» de tu hermana.
女: una mujer arrodillada con los brazos cruzados sobre el pecho. Al final de un parentesco lo vuelve femenino: 侄女, 外甥女, 孙女.

PRONUNCIACIÓN: wàishengnǚ: 4.º tono, sheng neutro, nǚ 3.er tono.`,
en:`WHAT IT IS: your niece, your sister's daughter. It is 外甥 (nephew through a sister) + 女 (female).

THE SYSTEM: nephews and nieces are split by which sibling they come from, like cousins:
- your brother's children (same surname as you): 侄儿 / 侄子 (nephew), 侄女 (niece).
- your sister's children (other surname, the "outside" family): 外甥 (nephew), 外甥女 (niece).
In Taiwan the most common form is 侄子 (zhízi), written 姪子.

THE CHARACTERS:
外: "outside". 夕 (the moon, night) + 卜 (a crack in an oracle bone). The traditional explanation: divination was done in the morning, and one done at night was "outside" the norm. Some scholars think it was only a sound loan; the origin is disputed. It appears in 外国 (foreign) and across the whole "outside" family: 外公, 外婆, 外孙.
甥: 男 (male: 田 field + 力 plough, the one who works the field) + 生 (to be born: a sprout coming out of the earth). 生 gives the sound and also the meaning: "the boy born" to your sister.
女: a woman kneeling with arms crossed over her chest. At the end of a kinship word it makes it female: 侄女, 外甥女, 孙女.

PRONUNCIATION: wàishengnǚ: 4th tone, neutral sheng, 3rd-tone nǚ.`,
zh:`是什么：姐妹的女儿，外甥 + 女。兄弟的孩子：侄子、侄女（同姓）；姐妹的孩子：外甥、外甥女（异姓）。台湾写「姪」。外：夕 + 卜；甥：男 + 生；女：跪坐的女子。`}},
  {id:"fa2-16",s:"孙子",t:"孫子",py:"sūnzi",es:"nieto (hijo del hijo)",en:"grandson (son's son)",
   x:{
es:`QUÉ ES: tu nieto, hijo de tu hijo varón. Lleva tu apellido.

EL SISTEMA: los nietos también se dividen por la línea:
- hijos de tu hijo varón (llevan tu apellido): 孙子 (nieto), 孙女 (nieta).
- hijos de tu hija (llevan el apellido del yerno, familia «de afuera»): 外孙 (nieto), 外孙女 (nieta).
Es la misma lógica que 外公/外婆: los abuelos por parte de la mamá.

LOS CARACTERES:
孙: simplificado 孙 = 子 (un bebé envuelto en su manta) + 小 (pequeño). Tradicional 孫 = 子 + 系 (un hilo que cuelga y se prolonga, como en 系统, sistema): los hijos de los hijos, la línea familiar que sigue.
子: al final de la palabra es un sufijo en tono neutro, como en 儿子 o 桌子.

OJO: 孙子 también es Sun Tzu, el autor de «El arte de la guerra» (孙子兵法); ahí 子 significa «maestro» y se pronuncia con tono: Sūnzǐ.

PRONUNCIACIÓN: sūnzi, 1.er tono + neutro.`,
en:`WHAT IT IS: your grandson, your son's son. He carries your surname.

THE SYSTEM: grandchildren are also split by line:
- your son's children (they carry your surname): 孙子 (grandson), 孙女 (granddaughter).
- your daughter's children (they carry the son-in-law's surname, the "outside" family): 外孙 (grandson), 外孙女 (granddaughter).
Same logic as 外公/外婆: the grandparents on the mother's side.

THE CHARACTERS:
孙: simplified 孙 = 子 (a baby wrapped in its blanket) + 小 (small). Traditional 孫 = 子 + 系 (a thread hanging and continuing, as in 系统, system): the children's children, the family line going on.
子: at the end of the word it is a neutral-tone suffix, as in 儿子 or 桌子.

NOTE: 孙子 is also Sun Tzu, author of "The Art of War" (孙子兵法); there 子 means "master" and keeps its tone: Sūnzǐ.

PRONUNCIATION: sūnzi, 1st tone + neutral.`,
zh:`是什么：儿子的儿子。儿子的孩子：孙子、孙女（同姓）；女儿的孩子：外孙、外孙女（异姓），与外公外婆同理。孙：简体 子+小；繁体 孫＝子+系（延续）。孙子兵法的「孙子」读 Sūnzǐ。`}},
  {id:"fa2-17",s:"孙女",t:"孫女",py:"sūnnǚ",es:"nieta (hija del hijo)",en:"granddaughter (son's daughter)",
   x:{
es:`QUÉ ES: tu nieta, hija de tu hijo varón. Lleva tu apellido.

EL SISTEMA: los nietos también se dividen por la línea:
- hijos de tu hijo varón (llevan tu apellido): 孙子 (nieto), 孙女 (nieta).
- hijos de tu hija (llevan el apellido del yerno, familia «de afuera»): 外孙 (nieto), 外孙女 (nieta).
Es la misma lógica que 外公/外婆: los abuelos por parte de la mamá.

LOS CARACTERES:
孙: simplificado 孙 = 子 (un bebé envuelto en su manta) + 小 (pequeño). Tradicional 孫 = 子 + 系 (un hilo que cuelga y se prolonga, como en 系统, sistema): los hijos de los hijos, la línea familiar que sigue.
女: una mujer arrodillada con los brazos cruzados sobre el pecho. Al final de un parentesco lo vuelve femenino: 侄女, 外甥女, 孙女.

PRONUNCIACIÓN: sūnnǚ, 1.er tono + 3.er tono. Dos n seguidas: se pega la lengua una sola vez, un poco más larga.`,
en:`WHAT IT IS: your granddaughter, your son's daughter. She carries your surname.

THE SYSTEM: grandchildren are also split by line:
- your son's children (they carry your surname): 孙子 (grandson), 孙女 (granddaughter).
- your daughter's children (they carry the son-in-law's surname, the "outside" family): 外孙 (grandson), 外孙女 (granddaughter).
Same logic as 外公/外婆: the grandparents on the mother's side.

THE CHARACTERS:
孙: simplified 孙 = 子 (a baby wrapped in its blanket) + 小 (small). Traditional 孫 = 子 + 系 (a thread hanging and continuing, as in 系统, system): the children's children, the family line going on.
女: a woman kneeling with arms crossed over her chest. At the end of a kinship word it makes it female: 侄女, 外甥女, 孙女.

PRONUNCIATION: sūnnǚ, 1st + 3rd tone. Two n's in a row: one slightly longer n.`,
zh:`是什么：儿子的女儿。儿子的孩子：孙子、孙女（同姓）；女儿的孩子：外孙、外孙女（异姓），与外公外婆同理。孙：子+小／孫＝子+系；女：跪坐女子。`}},
  {id:"fa2-18",s:"外孙",t:"外孫",py:"wàisūn",es:"nieto (hijo de la hija)",en:"grandson (daughter's son)",
   x:{
es:`QUÉ ES: tu nieto, hijo de tu hija. Lleva el apellido de su papá (tu yerno), por eso es 外, «de afuera». En la conversación también se dice 外孙子.

EL SISTEMA: los nietos también se dividen por la línea:
- hijos de tu hijo varón (llevan tu apellido): 孙子 (nieto), 孙女 (nieta).
- hijos de tu hija (llevan el apellido del yerno, familia «de afuera»): 外孙 (nieto), 外孙女 (nieta).
Es la misma lógica que 外公/外婆: los abuelos por parte de la mamá.

LOS CARACTERES:
外: «afuera». 夕 (la luna, la noche) + 卜 (una grieta en un hueso de adivinación). La explicación tradicional: adivinar se hacía de mañana, y una adivinación de noche estaba «fuera» de la norma. Algunos estudiosos creen que era solo un préstamo de sonido; el origen se discute. Aparece en 外国 (extranjero) y en toda la familia «de afuera»: 外公, 外婆, 外孙.
孙: simplificado 孙 = 子 (un bebé envuelto en su manta) + 小 (pequeño). Tradicional 孫 = 子 + 系 (un hilo que cuelga y se prolonga, como en 系统, sistema): los hijos de los hijos, la línea familiar que sigue.

PRONUNCIACIÓN: wàisūn, 4.º tono + 1.er tono.`,
en:`WHAT IT IS: your grandson, your daughter's son. He carries his father's (your son-in-law's) surname, so he is 外, "outside". In speech also 外孙子.

THE SYSTEM: grandchildren are also split by line:
- your son's children (they carry your surname): 孙子 (grandson), 孙女 (granddaughter).
- your daughter's children (they carry the son-in-law's surname, the "outside" family): 外孙 (grandson), 外孙女 (granddaughter).
Same logic as 外公/外婆: the grandparents on the mother's side.

THE CHARACTERS:
外: "outside". 夕 (the moon, night) + 卜 (a crack in an oracle bone). The traditional explanation: divination was done in the morning, and one done at night was "outside" the norm. Some scholars think it was only a sound loan; the origin is disputed. It appears in 外国 (foreign) and across the whole "outside" family: 外公, 外婆, 外孙.
孙: simplified 孙 = 子 (a baby wrapped in its blanket) + 小 (small). Traditional 孫 = 子 + 系 (a thread hanging and continuing, as in 系统, system): the children's children, the family line going on.

PRONUNCIATION: wàisūn, 4th + 1st tone.`,
zh:`是什么：女儿的儿子，异姓，所以用「外」。儿子的孩子：孙子、孙女（同姓）；女儿的孩子：外孙、外孙女（异姓），与外公外婆同理。外：夕+卜；孙：子+小／孫＝子+系。`}},
  {id:"fa2-19",s:"外孙女",t:"外孫女",py:"wàisūnnǚ",es:"nieta (hija de la hija)",en:"granddaughter (daughter's daughter)",
   x:{
es:`QUÉ ES: tu nieta, hija de tu hija. Es 外孙 (nieto por la hija) + 女 (mujer).

EL SISTEMA: los nietos también se dividen por la línea:
- hijos de tu hijo varón (llevan tu apellido): 孙子 (nieto), 孙女 (nieta).
- hijos de tu hija (llevan el apellido del yerno, familia «de afuera»): 外孙 (nieto), 外孙女 (nieta).
Es la misma lógica que 外公/外婆: los abuelos por parte de la mamá.

LOS CARACTERES:
外: «afuera». 夕 (la luna, la noche) + 卜 (una grieta en un hueso de adivinación). La explicación tradicional: adivinar se hacía de mañana, y una adivinación de noche estaba «fuera» de la norma. Algunos estudiosos creen que era solo un préstamo de sonido; el origen se discute. Aparece en 外国 (extranjero) y en toda la familia «de afuera»: 外公, 外婆, 外孙.
孙: simplificado 孙 = 子 (un bebé envuelto en su manta) + 小 (pequeño). Tradicional 孫 = 子 + 系 (un hilo que cuelga y se prolonga, como en 系统, sistema): los hijos de los hijos, la línea familiar que sigue.
女: una mujer arrodillada con los brazos cruzados sobre el pecho. Al final de un parentesco lo vuelve femenino: 侄女, 外甥女, 孙女.

PRONUNCIACIÓN: wàisūnnǚ: 4.º, 1.er y 3.er tono.`,
en:`WHAT IT IS: your granddaughter, your daughter's daughter. It is 外孙 (grandson through a daughter) + 女 (female).

THE SYSTEM: grandchildren are also split by line:
- your son's children (they carry your surname): 孙子 (grandson), 孙女 (granddaughter).
- your daughter's children (they carry the son-in-law's surname, the "outside" family): 外孙 (grandson), 外孙女 (granddaughter).
Same logic as 外公/外婆: the grandparents on the mother's side.

THE CHARACTERS:
外: "outside". 夕 (the moon, night) + 卜 (a crack in an oracle bone). The traditional explanation: divination was done in the morning, and one done at night was "outside" the norm. Some scholars think it was only a sound loan; the origin is disputed. It appears in 外国 (foreign) and across the whole "outside" family: 外公, 外婆, 外孙.
孙: simplified 孙 = 子 (a baby wrapped in its blanket) + 小 (small). Traditional 孫 = 子 + 系 (a thread hanging and continuing, as in 系统, system): the children's children, the family line going on.
女: a woman kneeling with arms crossed over her chest. At the end of a kinship word it makes it female: 侄女, 外甥女, 孙女.

PRONUNCIATION: wàisūnnǚ: 4th, 1st and 3rd tone.`,
zh:`是什么：女儿的女儿，外孙 + 女。儿子的孩子：孙子、孙女（同姓）；女儿的孩子：外孙、外孙女（异姓），与外公外婆同理。外：夕+卜；孙：子+系；女。`}},
  {id:"fa2-20",s:"大儿子",t:"大兒子",py:"dà érzi",es:"hijo mayor",en:"eldest son",
   x:{
es:`QUÉ ES: «大儿子», el mayor de los hijos varones. Los padres dicen «我大儿子在台北» (mi hijo mayor está en Taipéi). Cuenta solo a los varones: si la primera en nacer fue una hija, ella es 大女儿 y el primer varón igual es 大儿子.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
大: «grande». Es una persona de frente con los brazos y las piernas abiertos, mostrando lo grande que es. En el orden de hermanos significa «el primero, el mayor».
儿子: «hijo varón». 儿 (tradicional 兒) es un bebé con la cabeza grande y la fontanela todavía abierta: la parte de arriba de 兒 es el cráneo sin cerrar, abajo las piernitas. 子 es otro bebé envuelto en su manta, con los brazos afuera y las piernas juntas. Dos bebés: el hijo.

PRONUNCIACIÓN: dà (4.º tono, cae) + érzi (2.º tono + neutro).`,
en:`WHAT IT IS: "大儿子", the eldest of the sons. Parents say "我大儿子在台北" (my eldest son is in Taipei). It counts only the boys: if a daughter was born first, she is 大女儿 and the first boy is still 大儿子.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
大: "big". A person seen from the front with arms and legs spread wide, showing how big it is. In birth order it means "the first, the eldest".
儿子: "son". 儿 (traditional 兒) is a baby with a big head and the soft spot still open: the top of 兒 is the unclosed skull, below are little legs. 子 is another baby wrapped in its blanket, arms out and legs bundled. Two babies: the son.

PRONUNCIATION: dà (4th tone, falling) + érzi (2nd tone + neutral).`,
zh:`是什么：第一个儿子。只算儿子，女儿另算。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。大：正面站立、张开双臂的人。排行里指第一个。儿子：兒是囟门未合的婴儿，子是包在襁褓里的婴儿。`}},
  {id:"fa2-21",s:"大女儿",t:"大女兒",py:"dà nǚ'ér",es:"hija mayor",en:"eldest daughter",
   x:{
es:`QUÉ ES: «大女儿», la mayor de las hijas mujeres. «我大女儿是老师» = mi hija mayor es maestra. Cuenta solo a las mujeres: los varones se numeran aparte (大儿子, 二儿子…).

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
大: «grande». Es una persona de frente con los brazos y las piernas abiertos, mostrando lo grande que es. En el orden de hermanos significa «el primero, el mayor».
女儿: «hija». 女 es una mujer arrodillada con los brazos cruzados sobre el pecho, en la postura antigua de respeto. 儿 (tradicional 兒) es el bebé con la fontanela abierta. «La niña-hija».

PRONUNCIACIÓN: dà (4.º tono, cae) + nǚ'ér (3.er tono + 2.º; la ü es una i con los labios redondos).`,
en:`WHAT IT IS: "大女儿", the eldest of the daughters. "我大女儿是老师" = my eldest daughter is a teacher. It counts only the girls: the boys are numbered separately (大儿子, 二儿子…).

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
大: "big". A person seen from the front with arms and legs spread wide, showing how big it is. In birth order it means "the first, the eldest".
女儿: "daughter". 女 is a woman kneeling with arms crossed over her chest, the old posture of respect. 儿 (traditional 兒) is the baby with the open soft spot. "The girl-child".

PRONUNCIATION: dà (4th tone, falling) + nǚ'ér (3rd + 2nd tone; ü is "ee" with rounded lips).`,
zh:`是什么：第一个女儿。只算女儿，儿子另算。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。大：正面站立、张开双臂的人。排行里指第一个。女儿：女是跪坐交手的女子，兒是婴儿。`}},
  {id:"fa2-22",s:"老大",py:"lǎodà",es:"el mayor (de los hijos)",en:"the eldest child",
   x:{
es:`QUÉ ES: «老大», el primer hijo, varón o mujer.

EL SISTEMA: 老 + número nombra a cada hijo por su puesto sin importar si es varón o mujer: 老大 (el primero), 老二, 老三… y el último, 老么. Se usa al hablar de los hijos («我家老二在美国» = mi segundo hijo está en EE. UU.) y para responder «你是老几？» (¿qué número de hijo sos?): «我是老二». A los hermanos mayores se les habla con 大哥/二姐, no con 老大.

LOS CARACTERES:
老: «viejo». Es el dibujo de un anciano de pelo largo, encorvado, apoyado en un bastón (la parte de abajo, 匕, era el bastón o la figura doblada). Acá no significa «viejo»: es un prefijo que se pone delante del número para nombrar el puesto, como en 老师 o 老王 (el señor Wang).
大: «grande». Es una persona de frente con los brazos y las piernas abiertos, mostrando lo grande que es. En el orden de hermanos significa «el primero, el mayor».

OTRO SENTIDO: 老大 también es «el jefe», el que manda en un grupo o una banda: «他是我们的老大».

PRONUNCIACIÓN: lǎo (3.er tono) + dà (4.º tono, cae). El 3.er tono de lǎo queda bajo y corto porque le sigue otra sílaba.`,
en:`WHAT IT IS: "老大", the first child, boy or girl.

THE SYSTEM: 老 + number names each child by position, boy or girl: 老大 (the first), 老二, 老三… and the last, 老么. It is used when talking about children ("我家老二在美国" = my second child is in the US) and to answer "你是老几？" (which child are you?): "我是老二". Older siblings are addressed as 大哥/二姐, not 老大.

THE CHARACTERS:
老: "old". A drawing of an old man with long hair, bent over, leaning on a cane (the bottom part, 匕, was the cane or the bent figure). Here it does not mean "old": it is a prefix put before the number to name the position, as in 老师 or 老王 (good old Wang).
大: "big". A person seen from the front with arms and legs spread wide, showing how big it is. In birth order it means "the first, the eldest".

OTHER MEANING: 老大 is also "the boss", the one in charge of a group or a gang: "他是我们的老大".

PRONUNCIATION: lǎo (3rd tone) + dà (4th tone, falling). lǎo stays low and short because another syllable follows.`,
zh:`是什么：老+数字按出生顺序称孩子，不分男女：老大、老二、老三、老么。「你是老几？」「我是老二。」老：长发老人拄杖。这里是前缀，不是「老」的意思。大：正面站立、张开双臂的人。排行里指第一个。也指头儿、老板。`}},
  {id:"fa2-23",s:"二儿子",t:"二兒子",py:"èr érzi",es:"segundo hijo",en:"second son",
   x:{
es:`QUÉ ES: «二儿子», el segundo de los hijos varones. Los padres dicen «我二儿子在台北» (mi segundo hijo está en Taipéi). Cuenta solo a los varones: si la primera en nacer fue una hija, ella es 大女儿 y el primer varón igual es 大儿子.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
二: dos rayas, la de abajo más larga (como la tierra debajo del cielo). Para el orden es 二, no 两.
儿子: «hijo varón». 儿 (tradicional 兒) es un bebé con la cabeza grande y la fontanela todavía abierta: la parte de arriba de 兒 es el cráneo sin cerrar, abajo las piernitas. 子 es otro bebé envuelto en su manta, con los brazos afuera y las piernas juntas. Dos bebés: el hijo.

PRONUNCIACIÓN: èr (4.º tono, cae; la r se enrosca) + érzi (2.º tono + neutro).`,
en:`WHAT IT IS: "二儿子", the second of the sons. Parents say "我二儿子在台北" (my second son is in Taipei). It counts only the boys: if a daughter was born first, she is 大女儿 and the first boy is still 大儿子.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
二: two strokes, the lower one longer (like earth under the sky). For order it is 二, not 两.
儿子: "son". 儿 (traditional 兒) is a baby with a big head and the soft spot still open: the top of 兒 is the unclosed skull, below are little legs. 子 is another baby wrapped in its blanket, arms out and legs bundled. Two babies: the son.

PRONUNCIATION: èr (4th tone, falling; curled r) + érzi (2nd tone + neutral).`,
zh:`是什么：第二个儿子。只算儿子，女儿另算。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。二：两横。排序用二不用两。儿子：兒是囟门未合的婴儿，子是包在襁褓里的婴儿。`}},
  {id:"fa2-24",s:"二女儿",t:"二女兒",py:"èr nǚ'ér",es:"segunda hija",en:"second daughter",
   x:{
es:`QUÉ ES: «二女儿», la segunda de las hijas mujeres. «我二女儿是老师» = mi segunda hija es maestra. Cuenta solo a las mujeres: los varones se numeran aparte (大儿子, 二儿子…).

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
二: dos rayas, la de abajo más larga (como la tierra debajo del cielo). Para el orden es 二, no 两.
女儿: «hija». 女 es una mujer arrodillada con los brazos cruzados sobre el pecho, en la postura antigua de respeto. 儿 (tradicional 兒) es el bebé con la fontanela abierta. «La niña-hija».

PRONUNCIACIÓN: èr (4.º tono, cae; la r se enrosca) + nǚ'ér (3.er tono + 2.º; la ü es una i con los labios redondos).`,
en:`WHAT IT IS: "二女儿", the second of the daughters. "我二女儿是老师" = my second daughter is a teacher. It counts only the girls: the boys are numbered separately (大儿子, 二儿子…).

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
二: two strokes, the lower one longer (like earth under the sky). For order it is 二, not 两.
女儿: "daughter". 女 is a woman kneeling with arms crossed over her chest, the old posture of respect. 儿 (traditional 兒) is the baby with the open soft spot. "The girl-child".

PRONUNCIATION: èr (4th tone, falling; curled r) + nǚ'ér (3rd + 2nd tone; ü is "ee" with rounded lips).`,
zh:`是什么：第二个女儿。只算女儿，儿子另算。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。二：两横。排序用二不用两。女儿：女是跪坐交手的女子，兒是婴儿。`}},
  {id:"fa2-25",s:"老二",py:"lǎo'èr",es:"el segundo",en:"the second child",
   x:{
es:`QUÉ ES: «老二», el segundo hijo, varón o mujer.

EL SISTEMA: 老 + número nombra a cada hijo por su puesto sin importar si es varón o mujer: 老大 (el primero), 老二, 老三… y el último, 老么. Se usa al hablar de los hijos («我家老二在美国» = mi segundo hijo está en EE. UU.) y para responder «你是老几？» (¿qué número de hijo sos?): «我是老二». A los hermanos mayores se les habla con 大哥/二姐, no con 老大.

LOS CARACTERES:
老: «viejo». Es el dibujo de un anciano de pelo largo, encorvado, apoyado en un bastón (la parte de abajo, 匕, era el bastón o la figura doblada). Acá no significa «viejo»: es un prefijo que se pone delante del número para nombrar el puesto, como en 老师 o 老王 (el señor Wang).
二: dos rayas, la de abajo más larga (como la tierra debajo del cielo). Para el orden es 二, no 两.

PRONUNCIACIÓN: lǎo (3.er tono) + èr (4.º tono, cae; la r se enrosca). El 3.er tono de lǎo queda bajo y corto porque le sigue otra sílaba.`,
en:`WHAT IT IS: "老二", the second child, boy or girl.

THE SYSTEM: 老 + number names each child by position, boy or girl: 老大 (the first), 老二, 老三… and the last, 老么. It is used when talking about children ("我家老二在美国" = my second child is in the US) and to answer "你是老几？" (which child are you?): "我是老二". Older siblings are addressed as 大哥/二姐, not 老大.

THE CHARACTERS:
老: "old". A drawing of an old man with long hair, bent over, leaning on a cane (the bottom part, 匕, was the cane or the bent figure). Here it does not mean "old": it is a prefix put before the number to name the position, as in 老师 or 老王 (good old Wang).
二: two strokes, the lower one longer (like earth under the sky). For order it is 二, not 两.

PRONUNCIATION: lǎo (3rd tone) + èr (4th tone, falling; curled r). lǎo stays low and short because another syllable follows.`,
zh:`是什么：老+数字按出生顺序称孩子，不分男女：老大、老二、老三、老么。「你是老几？」「我是老二。」老：长发老人拄杖。这里是前缀，不是「老」的意思。二：两横。排序用二不用两。`}},
  {id:"fa2-26",s:"三儿子",t:"三兒子",py:"sān érzi",es:"tercer hijo",en:"third son",
   x:{
es:`QUÉ ES: «三儿子», el tercero de los hijos varones. Los padres dicen «我三儿子在台北» (mi tercer hijo está en Taipéi). Cuenta solo a los varones: si la primera en nacer fue una hija, ella es 大女儿 y el primer varón igual es 大儿子.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
三: tres rayas, una sobre otra. Es uno de los caracteres más antiguos: contar con palitos.
儿子: «hijo varón». 儿 (tradicional 兒) es un bebé con la cabeza grande y la fontanela todavía abierta: la parte de arriba de 兒 es el cráneo sin cerrar, abajo las piernitas. 子 es otro bebé envuelto en su manta, con los brazos afuera y las piernas juntas. Dos bebés: el hijo.

PRONUNCIACIÓN: sān (1.er tono, alto y parejo) + érzi (2.º tono + neutro).`,
en:`WHAT IT IS: "三儿子", the third of the sons. Parents say "我三儿子在台北" (my third son is in Taipei). It counts only the boys: if a daughter was born first, she is 大女儿 and the first boy is still 大儿子.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
三: three strokes, one above the other. One of the oldest characters: counting with sticks.
儿子: "son". 儿 (traditional 兒) is a baby with a big head and the soft spot still open: the top of 兒 is the unclosed skull, below are little legs. 子 is another baby wrapped in its blanket, arms out and legs bundled. Two babies: the son.

PRONUNCIATION: sān (1st tone, high and level) + érzi (2nd tone + neutral).`,
zh:`是什么：第三个儿子。只算儿子，女儿另算。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。三：三横，数筹码。儿子：兒是囟门未合的婴儿，子是包在襁褓里的婴儿。`}},
  {id:"fa2-27",s:"三女儿",t:"三女兒",py:"sān nǚ'ér",es:"tercera hija",en:"third daughter",
   x:{
es:`QUÉ ES: «三女儿», la tercera de las hijas mujeres. «我三女儿是老师» = mi tercera hija es maestra. Cuenta solo a las mujeres: los varones se numeran aparte (大儿子, 二儿子…).

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
三: tres rayas, una sobre otra. Es uno de los caracteres más antiguos: contar con palitos.
女儿: «hija». 女 es una mujer arrodillada con los brazos cruzados sobre el pecho, en la postura antigua de respeto. 儿 (tradicional 兒) es el bebé con la fontanela abierta. «La niña-hija».

PRONUNCIACIÓN: sān (1.er tono, alto y parejo) + nǚ'ér (3.er tono + 2.º; la ü es una i con los labios redondos).`,
en:`WHAT IT IS: "三女儿", the third of the daughters. "我三女儿是老师" = my third daughter is a teacher. It counts only the girls: the boys are numbered separately (大儿子, 二儿子…).

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
三: three strokes, one above the other. One of the oldest characters: counting with sticks.
女儿: "daughter". 女 is a woman kneeling with arms crossed over her chest, the old posture of respect. 儿 (traditional 兒) is the baby with the open soft spot. "The girl-child".

PRONUNCIATION: sān (1st tone, high and level) + nǚ'ér (3rd + 2nd tone; ü is "ee" with rounded lips).`,
zh:`是什么：第三个女儿。只算女儿，儿子另算。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。三：三横，数筹码。女儿：女是跪坐交手的女子，兒是婴儿。`}},
  {id:"fa2-28",s:"老三",py:"lǎosān",es:"el tercero",en:"the third child",
   x:{
es:`QUÉ ES: «老三», el tercer hijo, varón o mujer.

EL SISTEMA: 老 + número nombra a cada hijo por su puesto sin importar si es varón o mujer: 老大 (el primero), 老二, 老三… y el último, 老么. Se usa al hablar de los hijos («我家老二在美国» = mi segundo hijo está en EE. UU.) y para responder «你是老几？» (¿qué número de hijo sos?): «我是老二». A los hermanos mayores se les habla con 大哥/二姐, no con 老大.

LOS CARACTERES:
老: «viejo». Es el dibujo de un anciano de pelo largo, encorvado, apoyado en un bastón (la parte de abajo, 匕, era el bastón o la figura doblada). Acá no significa «viejo»: es un prefijo que se pone delante del número para nombrar el puesto, como en 老师 o 老王 (el señor Wang).
三: tres rayas, una sobre otra. Es uno de los caracteres más antiguos: contar con palitos.

PRONUNCIACIÓN: lǎo (3.er tono) + sān (1.er tono, alto y parejo). El 3.er tono de lǎo queda bajo y corto porque le sigue otra sílaba.`,
en:`WHAT IT IS: "老三", the third child, boy or girl.

THE SYSTEM: 老 + number names each child by position, boy or girl: 老大 (the first), 老二, 老三… and the last, 老么. It is used when talking about children ("我家老二在美国" = my second child is in the US) and to answer "你是老几？" (which child are you?): "我是老二". Older siblings are addressed as 大哥/二姐, not 老大.

THE CHARACTERS:
老: "old". A drawing of an old man with long hair, bent over, leaning on a cane (the bottom part, 匕, was the cane or the bent figure). Here it does not mean "old": it is a prefix put before the number to name the position, as in 老师 or 老王 (good old Wang).
三: three strokes, one above the other. One of the oldest characters: counting with sticks.

PRONUNCIATION: lǎo (3rd tone) + sān (1st tone, high and level). lǎo stays low and short because another syllable follows.`,
zh:`是什么：老+数字按出生顺序称孩子，不分男女：老大、老二、老三、老么。「你是老几？」「我是老二。」老：长发老人拄杖。这里是前缀，不是「老」的意思。三：三横，数筹码。`}},
  {id:"fa2-29",s:"最小的儿子",t:"最小的兒子",py:"zuì xiǎo de érzi",es:"el hijo menor",en:"the youngest son",
   x:{
es:`QUÉ ES: el hijo varón más chico. «最小的儿子» se usa cuando hay tres o más; con dos alcanza 小儿子.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
最小的: «el más pequeño».
最: «lo más». Arriba parece 日 (sol), pero originalmente era 冃, una tapa o casco; abajo 取 «tomar» = 耳 (oreja) + 又 (mano): en la guerra antigua se cortaba la oreja izquierda del enemigo para contar las bajas. Cómo se llegó a «lo más» se discute (quizás «el que más orejas tomó», el mayor mérito).
小: «pequeño»: tres granitos o trazos chiquitos.
的: la partícula que convierte lo anterior en «el/la que es…»: 最小的 = «el que es más pequeño».
儿子: «hijo varón». 儿 (tradicional 兒) es un bebé con la cabeza grande y la fontanela todavía abierta: la parte de arriba de 兒 es el cráneo sin cerrar, abajo las piernitas. 子 es otro bebé envuelto en su manta, con los brazos afuera y las piernas juntas. Dos bebés: el hijo.

PRONUNCIACIÓN: zuì (4.º tono) xiǎo (3.er tono) de (neutro), después érzi (2.º tono + neutro).`,
en:`WHAT IT IS: the youngest son. 最小的儿子 is used when there are three or more; with two, 小儿子 is enough.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
最小的: "the smallest".
最: "most". The top looks like 日 (sun) but was originally 冃, a lid or helmet; below is 取 "to take" = 耳 (ear) + 又 (hand): in ancient war the enemy's left ear was cut off to count the dead. How it came to mean "most" is disputed (perhaps "the one who took the most ears", the highest merit).
小: "small": three tiny grains or strokes.
的: the particle that turns what comes before into "the one that is…": 最小的 = "the one that is smallest".
儿子: "son". 儿 (traditional 兒) is a baby with a big head and the soft spot still open: the top of 兒 is the unclosed skull, below are little legs. 子 is another baby wrapped in its blanket, arms out and legs bundled. Two babies: the son.

PRONUNCIATION: zuì (4th tone) xiǎo (3rd tone) de (neutral), then érzi (2nd tone + neutral).`,
zh:`是什么：最小的儿子。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。最小的：最 上为冃（盖、盔）下为取（耳+又，古代割耳计功），引申为「最」，说法有争议；小，三点小粒；的，「…的那个」。儿子：兒是囟门未合的婴儿，子是包在襁褓里的婴儿。`}},
  {id:"fa2-30",s:"最小的女儿",t:"最小的女兒",py:"zuì xiǎo de nǚ'ér",es:"la hija menor",en:"the youngest daughter",
   x:{
es:`QUÉ ES: la hija mujer más chica. «我最小的女儿还在上学» = mi hija menor todavía va a la escuela.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
最小的: «el más pequeño».
最: «lo más». Arriba parece 日 (sol), pero originalmente era 冃, una tapa o casco; abajo 取 «tomar» = 耳 (oreja) + 又 (mano): en la guerra antigua se cortaba la oreja izquierda del enemigo para contar las bajas. Cómo se llegó a «lo más» se discute (quizás «el que más orejas tomó», el mayor mérito).
小: «pequeño»: tres granitos o trazos chiquitos.
的: la partícula que convierte lo anterior en «el/la que es…»: 最小的 = «el que es más pequeño».
女儿: «hija». 女 es una mujer arrodillada con los brazos cruzados sobre el pecho, en la postura antigua de respeto. 儿 (tradicional 兒) es el bebé con la fontanela abierta. «La niña-hija».

PRONUNCIACIÓN: zuì (4.º tono) xiǎo (3.er tono) de (neutro), después nǚ'ér (3.er tono + 2.º; la ü es una i con los labios redondos).`,
en:`WHAT IT IS: the youngest daughter. "我最小的女儿还在上学" = my youngest daughter is still at school.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
最小的: "the smallest".
最: "most". The top looks like 日 (sun) but was originally 冃, a lid or helmet; below is 取 "to take" = 耳 (ear) + 又 (hand): in ancient war the enemy's left ear was cut off to count the dead. How it came to mean "most" is disputed (perhaps "the one who took the most ears", the highest merit).
小: "small": three tiny grains or strokes.
的: the particle that turns what comes before into "the one that is…": 最小的 = "the one that is smallest".
女儿: "daughter". 女 is a woman kneeling with arms crossed over her chest, the old posture of respect. 儿 (traditional 兒) is the baby with the open soft spot. "The girl-child".

PRONUNCIATION: zuì (4th tone) xiǎo (3rd tone) de (neutral), then nǚ'ér (3rd + 2nd tone; ü is "ee" with rounded lips).`,
zh:`是什么：最小的女儿。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。最小的：最 上为冃（盖、盔）下为取（耳+又，古代割耳计功），引申为「最」，说法有争议；小，三点小粒；的，「…的那个」。女儿：女是跪坐交手的女子，兒是婴儿。`}},
  {id:"fa2-31",s:"老么",py:"lǎoyāo",es:"el benjamín (el menor)",en:"the youngest child",
   x:{
es:`QUÉ ES: «老么», el más chico de los hijos, el benjamín, varón o mujer. «她是老么» = ella es la menor. Tiene un tono cariñoso: el mimado de la casa.

EL SISTEMA: 老 + número nombra a cada hijo por su puesto sin importar si es varón o mujer: 老大 (el primero), 老二, 老三… y el último, 老么. Se usa al hablar de los hijos («我家老二在美国» = mi segundo hijo está en EE. UU.) y para responder «你是老几？» (¿qué número de hijo sos?): «我是老二». A los hermanos mayores se les habla con 大哥/二姐, no con 老大.

LOS CARACTERES:
老: «viejo». Es el dibujo de un anciano de pelo largo, encorvado, apoyado en un bastón (la parte de abajo, 匕, era el bastón o la figura doblada). Acá no significa «viejo»: es un prefijo que se pone delante del número para nombrar el puesto, como en 老师 o 老王 (el señor Wang).
么 (yāo): «pequeño, el último». Viene de 幺, el dibujo de un hilo de seda muy fino y retorcido: algo diminuto. En Taiwán se escribe 老么; en China continental se prefiere 老幺. Ojo: el mismo 么 se lee me en 什么 (qué), pero acá es yāo.

OTRO USO DE YĀO: al decir números de teléfono o de habitación en China se dice yāo en lugar de yī para el 1, para que no se confunda con 七 qī.

PRONUNCIACIÓN: lǎo (3.er tono) + yāo (1.er tono, alto y parejo).`,
en:`WHAT IT IS: "老么", the youngest child, the baby of the family, boy or girl. "她是老么" = she is the youngest. It sounds affectionate: the pampered one.

THE SYSTEM: 老 + number names each child by position, boy or girl: 老大 (the first), 老二, 老三… and the last, 老么. It is used when talking about children ("我家老二在美国" = my second child is in the US) and to answer "你是老几？" (which child are you?): "我是老二". Older siblings are addressed as 大哥/二姐, not 老大.

THE CHARACTERS:
老: "old". A drawing of an old man with long hair, bent over, leaning on a cane (the bottom part, 匕, was the cane or the bent figure). Here it does not mean "old": it is a prefix put before the number to name the position, as in 老师 or 老王 (good old Wang).
么 (yāo): "small, the last". It comes from 幺, a drawing of a very fine, twisted silk thread: something tiny. Taiwan writes 老么; mainland China prefers 老幺. Note: the same 么 is read me in 什么 (what), but here it is yāo.

ANOTHER USE OF YĀO: when reading out phone or room numbers in China, people say yāo instead of yī for 1, so it isn't confused with 七 qī.

PRONUNCIATION: lǎo (3rd tone) + yāo (1st tone, high and level).`,
zh:`是什么：最小的孩子，亲切的说法。老+数字按出生顺序称孩子，不分男女：老大、老二、老三、老么。「你是老几？」「我是老二。」老：长发老人拄杖。这里是前缀，不是「老」的意思。么/幺 yāo：细丝，小。台湾写老么，大陆多写老幺。与「什么」的 me 不同。念号码时「一」读 yāo。`}},
  {id:"fa2-32",s:"小儿子",t:"小兒子",py:"xiǎo érzi",es:"hijo menor",en:"younger / youngest son",
   x:{
es:`QUÉ ES: «小儿子», el hijo menor. Es la pareja de 大儿子: con dos hijos, uno es 大 y el otro 小. Con más, 小儿子 sigue siendo el último, igual que 最小的儿子, pero suena más cariñoso y cotidiano.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
小: «pequeño», tres trazos chiquitos (granitos de arena). Delante de 儿子/女儿 marca al menor.
儿子: «hijo varón». 儿 (tradicional 兒) es un bebé con la cabeza grande y la fontanela todavía abierta: la parte de arriba de 兒 es el cráneo sin cerrar, abajo las piernitas. 子 es otro bebé envuelto en su manta, con los brazos afuera y las piernas juntas. Dos bebés: el hijo.

PRONUNCIACIÓN: xiǎo (3.er tono; x como una «s» con la lengua pegada abajo) + érzi (2.º tono + neutro).`,
en:`WHAT IT IS: "小儿子", the youngest son. It pairs with 大儿子: with two sons, one is 大 and the other 小. With more, 小儿子 is still the last one, like 最小的儿子, but sounds warmer and more everyday.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
小: "small", three tiny strokes (grains of sand). In front of 儿子/女儿 it marks the youngest.
儿子: "son". 儿 (traditional 兒) is a baby with a big head and the soft spot still open: the top of 兒 is the unclosed skull, below are little legs. 子 is another baby wrapped in its blanket, arms out and legs bundled. Two babies: the son.

PRONUNCIATION: xiǎo (3rd tone; x is like "sh" with the tongue tip down) + érzi (2nd tone + neutral).`,
zh:`是什么：最小的儿子，与大儿子相对，口语亲切。小：三小点。儿子：兒是囟门未合的婴儿，子是包在襁褓里的婴儿。`}},
  {id:"fa2-33",s:"小女儿",t:"小女兒",py:"xiǎo nǚ'ér",es:"hija menor",en:"younger / youngest daughter",
   x:{
es:`QUÉ ES: «小女儿», el hija menor. Es la pareja de 大女儿: con dos hijas, uno es 大 y el otro 小. Con más, 小女儿 sigue siendo el último, igual que 最小的女儿, pero suena más cariñoso y cotidiano.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
小: «pequeño», tres trazos chiquitos (granitos de arena). Delante de 儿子/女儿 marca al menor.
女儿: «hija». 女 es una mujer arrodillada con los brazos cruzados sobre el pecho, en la postura antigua de respeto. 儿 (tradicional 兒) es el bebé con la fontanela abierta. «La niña-hija».

PRONUNCIACIÓN: xiǎo (3.er tono; x como una «s» con la lengua pegada abajo) + nǚ'ér (3.er tono + 2.º; la ü es una i con los labios redondos).`,
en:`WHAT IT IS: "小女儿", the youngest daughter. It pairs with 大女儿: with two daughters, one is 大 and the other 小. With more, 小女儿 is still the last one, like 最小的女儿, but sounds warmer and more everyday.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
小: "small", three tiny strokes (grains of sand). In front of 儿子/女儿 it marks the youngest.
女儿: "daughter". 女 is a woman kneeling with arms crossed over her chest, the old posture of respect. 儿 (traditional 兒) is the baby with the open soft spot. "The girl-child".

PRONUNCIATION: xiǎo (3rd tone; x is like "sh" with the tongue tip down) + nǚ'ér (3rd + 2nd tone; ü is "ee" with rounded lips).`,
zh:`是什么：最小的女儿，与大女儿相对，口语亲切。小：三小点。女儿：女是跪坐交手的女子，兒是婴儿。`}},
  {id:"fa2-34",s:"大哥",py:"dàgē",es:"el hermano mayor de todos",en:"eldest brother",
   x:{
es:`QUÉ ES: «大哥», el mayor de tus hermanos varones mayores. Se cuentan los hermanos mayores varones, del mayor hacia abajo: 大哥, 二哥, 三哥, 四哥…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

CÓMO SE USA: dentro de la familia los hermanos mayores no se llaman por el nombre sino por su puesto: «¡二哥!», «¡大姐!». A los menores sí se los llama por el nombre. Si hay un solo hermano mayor, alcanza con 哥哥 o 姐姐.

LOS CARACTERES:
大: «grande». Es una persona de frente con los brazos y las piernas abiertos, mostrando lo grande que es. En el orden de hermanos significa «el primero, el mayor».
哥: «hermano mayor». Son dos 可 apilados. 可 aporta solo el sonido: el carácter servía al principio para «cantar» (hoy 歌, con 欠, una boca abierta) y se tomó prestado para «hermano mayor». El origen de la palabra gē para hermano, que aparece recién hacia la dinastía Tang, se discute (quizás un préstamo de otro pueblo).

FUERA DE LA FAMILIA: 大哥 también sirve para dirigirse con confianza y respeto a un hombre algo mayor que vos (un taxista, un amigo mayor), como «hermano» o «jefe». En las películas es también «el jefe de la banda».

PRONUNCIACIÓN: dà (4.º tono, cae) + gē (1.er tono, alto y parejo; la e es una «e» oscura, casi «ë»).`,
en:`WHAT IT IS: "大哥", the eldest of your older brothers. Older brothers are counted from the eldest down: 大哥, 二哥, 三哥, 四哥…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

HOW IT'S USED: inside the family older siblings are not called by name but by rank: "二哥!", "大姐!". Younger ones are called by name. With only one older brother or sister, 哥哥 or 姐姐 is enough.

THE CHARACTERS:
大: "big". A person seen from the front with arms and legs spread wide, showing how big it is. In birth order it means "the first, the eldest".
哥: "older brother". Two 可 stacked. 可 only gives the sound: the character first meant "to sing" (today 歌, with 欠, an open mouth) and was borrowed for "older brother". Where the word gē for brother came from, first seen around the Tang dynasty, is disputed (possibly a loan from another people).

OUTSIDE THE FAMILY: 大哥 is also a friendly, respectful way to address a man somewhat older than you (a taxi driver, an older friend), like "big bro". In films it is also "the gang boss".

PRONUNCIATION: dà (4th tone, falling) + gē (1st tone, high and level; the e is a dark "uh").`,
zh:`是什么：第一个哥哥。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。家里叫哥哥姐姐用排行（二哥、大姐），不叫名字；弟弟妹妹叫名字。大：正面站立、张开双臂的人。排行里指第一个。哥：两个可叠起来，可表音；本义「歌」，借作兄。也可称呼比自己大的男性；电影里指「老大」。`}},
  {id:"fa2-35",s:"二哥",py:"èrgē",es:"segundo hermano mayor",en:"second older brother",
   x:{
es:`QUÉ ES: «二哥», el segundo de tus hermanos varones mayores. Se cuentan los hermanos mayores varones, del mayor hacia abajo: 大哥, 二哥, 三哥, 四哥…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

CÓMO SE USA: dentro de la familia los hermanos mayores no se llaman por el nombre sino por su puesto: «¡二哥!», «¡大姐!». A los menores sí se los llama por el nombre. Si hay un solo hermano mayor, alcanza con 哥哥 o 姐姐.

LOS CARACTERES:
二: dos rayas, la de abajo más larga (como la tierra debajo del cielo). Para el orden es 二, no 两.
哥: «hermano mayor». Son dos 可 apilados. 可 aporta solo el sonido: el carácter servía al principio para «cantar» (hoy 歌, con 欠, una boca abierta) y se tomó prestado para «hermano mayor». El origen de la palabra gē para hermano, que aparece recién hacia la dinastía Tang, se discute (quizás un préstamo de otro pueblo).

PRONUNCIACIÓN: èr (4.º tono, cae; la r se enrosca) + gē (1.er tono, alto y parejo; la e es una «e» oscura, casi «ë»).`,
en:`WHAT IT IS: "二哥", the second of your older brothers. Older brothers are counted from the eldest down: 大哥, 二哥, 三哥, 四哥…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

HOW IT'S USED: inside the family older siblings are not called by name but by rank: "二哥!", "大姐!". Younger ones are called by name. With only one older brother or sister, 哥哥 or 姐姐 is enough.

THE CHARACTERS:
二: two strokes, the lower one longer (like earth under the sky). For order it is 二, not 两.
哥: "older brother". Two 可 stacked. 可 only gives the sound: the character first meant "to sing" (today 歌, with 欠, an open mouth) and was borrowed for "older brother". Where the word gē for brother came from, first seen around the Tang dynasty, is disputed (possibly a loan from another people).

PRONUNCIATION: èr (4th tone, falling; curled r) + gē (1st tone, high and level; the e is a dark "uh").`,
zh:`是什么：第二个哥哥。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。家里叫哥哥姐姐用排行（二哥、大姐），不叫名字；弟弟妹妹叫名字。二：两横。排序用二不用两。哥：两个可叠起来，可表音；本义「歌」，借作兄。`}},
  {id:"fa2-36",s:"三哥",py:"sāngē",es:"tercer hermano mayor",en:"third older brother",
   x:{
es:`QUÉ ES: «三哥», el tercero de tus hermanos varones mayores. Se cuentan los hermanos mayores varones, del mayor hacia abajo: 大哥, 二哥, 三哥, 四哥…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

CÓMO SE USA: dentro de la familia los hermanos mayores no se llaman por el nombre sino por su puesto: «¡二哥!», «¡大姐!». A los menores sí se los llama por el nombre. Si hay un solo hermano mayor, alcanza con 哥哥 o 姐姐.

LOS CARACTERES:
三: tres rayas, una sobre otra. Es uno de los caracteres más antiguos: contar con palitos.
哥: «hermano mayor». Son dos 可 apilados. 可 aporta solo el sonido: el carácter servía al principio para «cantar» (hoy 歌, con 欠, una boca abierta) y se tomó prestado para «hermano mayor». El origen de la palabra gē para hermano, que aparece recién hacia la dinastía Tang, se discute (quizás un préstamo de otro pueblo).

PRONUNCIACIÓN: sān (1.er tono, alto y parejo) + gē (1.er tono, alto y parejo; la e es una «e» oscura, casi «ë»).`,
en:`WHAT IT IS: "三哥", the third of your older brothers. Older brothers are counted from the eldest down: 大哥, 二哥, 三哥, 四哥…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

HOW IT'S USED: inside the family older siblings are not called by name but by rank: "二哥!", "大姐!". Younger ones are called by name. With only one older brother or sister, 哥哥 or 姐姐 is enough.

THE CHARACTERS:
三: three strokes, one above the other. One of the oldest characters: counting with sticks.
哥: "older brother". Two 可 stacked. 可 only gives the sound: the character first meant "to sing" (today 歌, with 欠, an open mouth) and was borrowed for "older brother". Where the word gē for brother came from, first seen around the Tang dynasty, is disputed (possibly a loan from another people).

PRONUNCIATION: sān (1st tone, high and level) + gē (1st tone, high and level; the e is a dark "uh").`,
zh:`是什么：第三个哥哥。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。家里叫哥哥姐姐用排行（二哥、大姐），不叫名字；弟弟妹妹叫名字。三：三横，数筹码。哥：两个可叠起来，可表音；本义「歌」，借作兄。`}},
  {id:"fa2-37",s:"四哥",py:"sìgē",es:"cuarto hermano mayor",en:"fourth older brother",
   x:{
es:`QUÉ ES: «四哥», el cuarto de tus hermanos varones mayores. Se cuentan los hermanos mayores varones, del mayor hacia abajo: 大哥, 二哥, 三哥, 四哥…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

CÓMO SE USA: dentro de la familia los hermanos mayores no se llaman por el nombre sino por su puesto: «¡二哥!», «¡大姐!». A los menores sí se los llama por el nombre. Si hay un solo hermano mayor, alcanza con 哥哥 o 姐姐.

LOS CARACTERES:
四: al principio se escribía con cuatro rayas (亖). La forma actual 四 era, según la explicación más aceptada, una boca o nariz con el aliento saliendo, y se tomó prestada solo por el sonido. Ojo: sì se parece a 死 sǐ (morir), por eso en Taiwán muchos edificios no tienen piso 4.
哥: «hermano mayor». Son dos 可 apilados. 可 aporta solo el sonido: el carácter servía al principio para «cantar» (hoy 歌, con 欠, una boca abierta) y se tomó prestado para «hermano mayor». El origen de la palabra gē para hermano, que aparece recién hacia la dinastía Tang, se discute (quizás un préstamo de otro pueblo).

PRONUNCIACIÓN: sì (4.º tono; la s con la lengua atrás de los dientes, sin la i española: suena casi «sz») + gē (1.er tono, alto y parejo; la e es una «e» oscura, casi «ë»).`,
en:`WHAT IT IS: "四哥", the fourth of your older brothers. Older brothers are counted from the eldest down: 大哥, 二哥, 三哥, 四哥…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

HOW IT'S USED: inside the family older siblings are not called by name but by rank: "二哥!", "大姐!". Younger ones are called by name. With only one older brother or sister, 哥哥 or 姐姐 is enough.

THE CHARACTERS:
四: originally written with four strokes (亖). The current form 四 was, in the most accepted explanation, a mouth or nose with breath coming out, borrowed only for its sound. Note: sì sounds like 死 sǐ (to die), so many buildings in Taiwan have no 4th floor.
哥: "older brother". Two 可 stacked. 可 only gives the sound: the character first meant "to sing" (today 歌, with 欠, an open mouth) and was borrowed for "older brother". Where the word gē for brother came from, first seen around the Tang dynasty, is disputed (possibly a loan from another people).

PRONUNCIATION: sì (4th tone; the i after s is a buzzing "sz", not "ee") + gē (1st tone, high and level; the e is a dark "uh").`,
zh:`是什么：第四个哥哥。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。家里叫哥哥姐姐用排行（二哥、大姐），不叫名字；弟弟妹妹叫名字。四：古作亖，今形原为口鼻出气，借音。四近「死」，台湾不少大楼没有四楼。哥：两个可叠起来，可表音；本义「歌」，借作兄。`}},
  {id:"fa2-38",s:"最小的哥哥",py:"zuì xiǎo de gēge",es:"el menor de los hermanos mayores",en:"the youngest of the older brothers",
   x:{
es:`QUÉ ES: el más chico de tus hermanos mayores: el que es mayor que vos pero menor que los otros hermanos mayores. Si tenés tres hermanos mayores, él es también 三哥.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

CÓMO SE USA: dentro de la familia los hermanos mayores no se llaman por el nombre sino por su puesto: «¡二哥!», «¡大姐!». A los menores sí se los llama por el nombre. Si hay un solo hermano mayor, alcanza con 哥哥 o 姐姐.

LOS CARACTERES:
最小的: «el más pequeño».
最: «lo más». Arriba parece 日 (sol), pero originalmente era 冃, una tapa o casco; abajo 取 «tomar» = 耳 (oreja) + 又 (mano): en la guerra antigua se cortaba la oreja izquierda del enemigo para contar las bajas. Cómo se llegó a «lo más» se discute (quizás «el que más orejas tomó», el mayor mérito).
小: «pequeño»: tres granitos o trazos chiquitos.
的: la partícula que convierte lo anterior en «el/la que es…»: 最小的 = «el que es más pequeño».
哥: «hermano mayor». Son dos 可 apilados. 可 aporta solo el sonido: el carácter servía al principio para «cantar» (hoy 歌, con 欠, una boca abierta) y se tomó prestado para «hermano mayor». El origen de la palabra gē para hermano, que aparece recién hacia la dinastía Tang, se discute (quizás un préstamo de otro pueblo).

PRONUNCIACIÓN: zuì (4.º tono) xiǎo (3.er tono) de (neutro), después gē (1.er tono, alto y parejo; la e es una «e» oscura, casi «ë»).`,
en:`WHAT IT IS: the youngest of your older brothers: older than you but younger than your other older brothers. If you have three older brothers, he is also 三哥.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

HOW IT'S USED: inside the family older siblings are not called by name but by rank: "二哥!", "大姐!". Younger ones are called by name. With only one older brother or sister, 哥哥 or 姐姐 is enough.

THE CHARACTERS:
最小的: "the smallest".
最: "most". The top looks like 日 (sun) but was originally 冃, a lid or helmet; below is 取 "to take" = 耳 (ear) + 又 (hand): in ancient war the enemy's left ear was cut off to count the dead. How it came to mean "most" is disputed (perhaps "the one who took the most ears", the highest merit).
小: "small": three tiny grains or strokes.
的: the particle that turns what comes before into "the one that is…": 最小的 = "the one that is smallest".
哥: "older brother". Two 可 stacked. 可 only gives the sound: the character first meant "to sing" (today 歌, with 欠, an open mouth) and was borrowed for "older brother". Where the word gē for brother came from, first seen around the Tang dynasty, is disputed (possibly a loan from another people).

PRONUNCIATION: zuì (4th tone) xiǎo (3rd tone) de (neutral), then gē (1st tone, high and level; the e is a dark "uh").`,
zh:`是什么：哥哥里最小的，也可按排行叫三哥等。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。家里叫哥哥姐姐用排行（二哥、大姐），不叫名字；弟弟妹妹叫名字。最小的：最 上为冃（盖、盔）下为取（耳+又，古代割耳计功），引申为「最」，说法有争议；小，三点小粒；的，「…的那个」。哥：两个可叠起来，可表音；本义「歌」，借作兄。`}},
  {id:"fa2-39",s:"大姐",py:"dàjiě",es:"la hermana mayor de todas",en:"eldest sister",
   x:{
es:`QUÉ ES: «大姐», la mayor de tus hermanas mayores. Se cuentan las hermanas mayores, de la mayor hacia abajo: 大姐, 二姐, 三姐, 四姐…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

CÓMO SE USA: dentro de la familia los hermanos mayores no se llaman por el nombre sino por su puesto: «¡二哥!», «¡大姐!». A los menores sí se los llama por el nombre. Si hay un solo hermano mayor, alcanza con 哥哥 o 姐姐.

LOS CARACTERES:
大: «grande». Es una persona de frente con los brazos y las piernas abiertos, mostrando lo grande que es. En el orden de hermanos significa «el primero, el mayor».
姐: «hermana mayor». 女 (mujer arrodillada) indica el significado; 且 aporta el sonido. 且 era un objeto de altar, una tablilla ancestral; qué representaba exactamente se discute.

FUERA DE LA FAMILIA: 大姐 sirve para dirigirse a una mujer algo mayor que vos con confianza (una vendedora del mercado, una compañera mayor). También «la jefa» de un grupo.

PRONUNCIACIÓN: dà (4.º tono, cae) + jiě (3.er tono, baja y sube; j suave, sin aire).`,
en:`WHAT IT IS: "大姐", the eldest of your older sisters. Older sisters are counted from the eldest down: 大姐, 二姐, 三姐, 四姐…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

HOW IT'S USED: inside the family older siblings are not called by name but by rank: "二哥!", "大姐!". Younger ones are called by name. With only one older brother or sister, 哥哥 or 姐姐 is enough.

THE CHARACTERS:
大: "big". A person seen from the front with arms and legs spread wide, showing how big it is. In birth order it means "the first, the eldest".
姐: "older sister". 女 (kneeling woman) gives the meaning; 且 gives the sound. 且 was an altar object, an ancestral tablet; what exactly it depicted is disputed.

OUTSIDE THE FAMILY: 大姐 is a friendly way to address a woman somewhat older than you (a market vendor, an older colleague). Also "the boss lady" of a group.

PRONUNCIATION: dà (4th tone, falling) + jiě (3rd tone, dips and rises; soft j, no puff of air).`,
zh:`是什么：第一个姐姐。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。家里叫哥哥姐姐用排行（二哥、大姐），不叫名字；弟弟妹妹叫名字。大：正面站立、张开双臂的人。排行里指第一个。姐：女表义，且表音（且为祖先牌位，说法有争议）。也可称呼比自己大的女性。`}},
  {id:"fa2-40",s:"二姐",py:"èrjiě",es:"segunda hermana mayor",en:"second older sister",
   x:{
es:`QUÉ ES: «二姐», la segunda de tus hermanas mayores. Se cuentan las hermanas mayores, de la mayor hacia abajo: 大姐, 二姐, 三姐, 四姐…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

CÓMO SE USA: dentro de la familia los hermanos mayores no se llaman por el nombre sino por su puesto: «¡二哥!», «¡大姐!». A los menores sí se los llama por el nombre. Si hay un solo hermano mayor, alcanza con 哥哥 o 姐姐.

LOS CARACTERES:
二: dos rayas, la de abajo más larga (como la tierra debajo del cielo). Para el orden es 二, no 两.
姐: «hermana mayor». 女 (mujer arrodillada) indica el significado; 且 aporta el sonido. 且 era un objeto de altar, una tablilla ancestral; qué representaba exactamente se discute.

PRONUNCIACIÓN: èr (4.º tono, cae; la r se enrosca) + jiě (3.er tono, baja y sube; j suave, sin aire).`,
en:`WHAT IT IS: "二姐", the second of your older sisters. Older sisters are counted from the eldest down: 大姐, 二姐, 三姐, 四姐…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

HOW IT'S USED: inside the family older siblings are not called by name but by rank: "二哥!", "大姐!". Younger ones are called by name. With only one older brother or sister, 哥哥 or 姐姐 is enough.

THE CHARACTERS:
二: two strokes, the lower one longer (like earth under the sky). For order it is 二, not 两.
姐: "older sister". 女 (kneeling woman) gives the meaning; 且 gives the sound. 且 was an altar object, an ancestral tablet; what exactly it depicted is disputed.

PRONUNCIATION: èr (4th tone, falling; curled r) + jiě (3rd tone, dips and rises; soft j, no puff of air).`,
zh:`是什么：第二个姐姐。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。家里叫哥哥姐姐用排行（二哥、大姐），不叫名字；弟弟妹妹叫名字。二：两横。排序用二不用两。姐：女表义，且表音（且为祖先牌位，说法有争议）。`}},
  {id:"fa2-41",s:"三姐",py:"sānjiě",es:"tercera hermana mayor",en:"third older sister",
   x:{
es:`QUÉ ES: «三姐», la tercera de tus hermanas mayores. Se cuentan las hermanas mayores, de la mayor hacia abajo: 大姐, 二姐, 三姐, 四姐…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

CÓMO SE USA: dentro de la familia los hermanos mayores no se llaman por el nombre sino por su puesto: «¡二哥!», «¡大姐!». A los menores sí se los llama por el nombre. Si hay un solo hermano mayor, alcanza con 哥哥 o 姐姐.

LOS CARACTERES:
三: tres rayas, una sobre otra. Es uno de los caracteres más antiguos: contar con palitos.
姐: «hermana mayor». 女 (mujer arrodillada) indica el significado; 且 aporta el sonido. 且 era un objeto de altar, una tablilla ancestral; qué representaba exactamente se discute.

PRONUNCIACIÓN: sān (1.er tono, alto y parejo) + jiě (3.er tono, baja y sube; j suave, sin aire).`,
en:`WHAT IT IS: "三姐", the third of your older sisters. Older sisters are counted from the eldest down: 大姐, 二姐, 三姐, 四姐…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

HOW IT'S USED: inside the family older siblings are not called by name but by rank: "二哥!", "大姐!". Younger ones are called by name. With only one older brother or sister, 哥哥 or 姐姐 is enough.

THE CHARACTERS:
三: three strokes, one above the other. One of the oldest characters: counting with sticks.
姐: "older sister". 女 (kneeling woman) gives the meaning; 且 gives the sound. 且 was an altar object, an ancestral tablet; what exactly it depicted is disputed.

PRONUNCIATION: sān (1st tone, high and level) + jiě (3rd tone, dips and rises; soft j, no puff of air).`,
zh:`是什么：第三个姐姐。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。家里叫哥哥姐姐用排行（二哥、大姐），不叫名字；弟弟妹妹叫名字。三：三横，数筹码。姐：女表义，且表音（且为祖先牌位，说法有争议）。`}},
  {id:"fa2-42",s:"四姐",py:"sìjiě",es:"cuarta hermana mayor",en:"fourth older sister",
   x:{
es:`QUÉ ES: «四姐», la cuarta de tus hermanas mayores. Se cuentan las hermanas mayores, de la mayor hacia abajo: 大姐, 二姐, 三姐, 四姐…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

CÓMO SE USA: dentro de la familia los hermanos mayores no se llaman por el nombre sino por su puesto: «¡二哥!», «¡大姐!». A los menores sí se los llama por el nombre. Si hay un solo hermano mayor, alcanza con 哥哥 o 姐姐.

LOS CARACTERES:
四: al principio se escribía con cuatro rayas (亖). La forma actual 四 era, según la explicación más aceptada, una boca o nariz con el aliento saliendo, y se tomó prestada solo por el sonido. Ojo: sì se parece a 死 sǐ (morir), por eso en Taiwán muchos edificios no tienen piso 4.
姐: «hermana mayor». 女 (mujer arrodillada) indica el significado; 且 aporta el sonido. 且 era un objeto de altar, una tablilla ancestral; qué representaba exactamente se discute.

PRONUNCIACIÓN: sì (4.º tono; la s con la lengua atrás de los dientes, sin la i española: suena casi «sz») + jiě (3.er tono, baja y sube; j suave, sin aire).`,
en:`WHAT IT IS: "四姐", the fourth of your older sisters. Older sisters are counted from the eldest down: 大姐, 二姐, 三姐, 四姐…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

HOW IT'S USED: inside the family older siblings are not called by name but by rank: "二哥!", "大姐!". Younger ones are called by name. With only one older brother or sister, 哥哥 or 姐姐 is enough.

THE CHARACTERS:
四: originally written with four strokes (亖). The current form 四 was, in the most accepted explanation, a mouth or nose with breath coming out, borrowed only for its sound. Note: sì sounds like 死 sǐ (to die), so many buildings in Taiwan have no 4th floor.
姐: "older sister". 女 (kneeling woman) gives the meaning; 且 gives the sound. 且 was an altar object, an ancestral tablet; what exactly it depicted is disputed.

PRONUNCIATION: sì (4th tone; the i after s is a buzzing "sz", not "ee") + jiě (3rd tone, dips and rises; soft j, no puff of air).`,
zh:`是什么：第四个姐姐。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。家里叫哥哥姐姐用排行（二哥、大姐），不叫名字；弟弟妹妹叫名字。四：古作亖，今形原为口鼻出气，借音。四近「死」，台湾不少大楼没有四楼。姐：女表义，且表音（且为祖先牌位，说法有争议）。`}},
  {id:"fa2-43",s:"最小的姐姐",py:"zuì xiǎo de jiějie",es:"la menor de las hermanas mayores",en:"the youngest of the older sisters",
   x:{
es:`QUÉ ES: la más chica de tus hermanas mayores: mayor que vos pero menor que las otras. Si tenés tres hermanas mayores, ella es también 三姐.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

CÓMO SE USA: dentro de la familia los hermanos mayores no se llaman por el nombre sino por su puesto: «¡二哥!», «¡大姐!». A los menores sí se los llama por el nombre. Si hay un solo hermano mayor, alcanza con 哥哥 o 姐姐.

LOS CARACTERES:
最小的: «el más pequeño».
最: «lo más». Arriba parece 日 (sol), pero originalmente era 冃, una tapa o casco; abajo 取 «tomar» = 耳 (oreja) + 又 (mano): en la guerra antigua se cortaba la oreja izquierda del enemigo para contar las bajas. Cómo se llegó a «lo más» se discute (quizás «el que más orejas tomó», el mayor mérito).
小: «pequeño»: tres granitos o trazos chiquitos.
的: la partícula que convierte lo anterior en «el/la que es…»: 最小的 = «el que es más pequeño».
姐: «hermana mayor». 女 (mujer arrodillada) indica el significado; 且 aporta el sonido. 且 era un objeto de altar, una tablilla ancestral; qué representaba exactamente se discute.

PRONUNCIACIÓN: zuì (4.º tono) xiǎo (3.er tono) de (neutro), después jiě (3.er tono, baja y sube; j suave, sin aire).`,
en:`WHAT IT IS: the youngest of your older sisters: older than you but younger than the others. If you have three older sisters, she is also 三姐.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

HOW IT'S USED: inside the family older siblings are not called by name but by rank: "二哥!", "大姐!". Younger ones are called by name. With only one older brother or sister, 哥哥 or 姐姐 is enough.

THE CHARACTERS:
最小的: "the smallest".
最: "most". The top looks like 日 (sun) but was originally 冃, a lid or helmet; below is 取 "to take" = 耳 (ear) + 又 (hand): in ancient war the enemy's left ear was cut off to count the dead. How it came to mean "most" is disputed (perhaps "the one who took the most ears", the highest merit).
小: "small": three tiny grains or strokes.
的: the particle that turns what comes before into "the one that is…": 最小的 = "the one that is smallest".
姐: "older sister". 女 (kneeling woman) gives the meaning; 且 gives the sound. 且 was an altar object, an ancestral tablet; what exactly it depicted is disputed.

PRONUNCIATION: zuì (4th tone) xiǎo (3rd tone) de (neutral), then jiě (3rd tone, dips and rises; soft j, no puff of air).`,
zh:`是什么：姐姐里最小的，也可叫三姐等。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。家里叫哥哥姐姐用排行（二哥、大姐），不叫名字；弟弟妹妹叫名字。最小的：最 上为冃（盖、盔）下为取（耳+又，古代割耳计功），引申为「最」，说法有争议；小，三点小粒；的，「…的那个」。姐：女表义，且表音（且为祖先牌位，说法有争议）。`}},
  {id:"fa2-44",s:"大孙",t:"大孫",py:"dàsūn",es:"nieto mayor",en:"eldest grandson",
   x:{
es:`QUÉ ES: «大孙», el mayor de los nietos. Así los abuelos numeran a sus nietos varones: 大孙, 二孙, 三孙… En la conversación suele agregarse 子: 大孙子.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
大: «grande». Es una persona de frente con los brazos y las piernas abiertos, mostrando lo grande que es. En el orden de hermanos significa «el primero, el mayor».
孙: «nieto». Simplificado 孙 = 子 (niño) + 小 (pequeño): el niño chiquito de la familia. Tradicional 孫 = 子 + 系 (un hilo que se prolonga): los hijos de los hijos, la línea que sigue.

OTRA FORMA: en la conversación es más común 大孙子. El nieto mayor por la línea del hijo tiene un nombre especial, 长孙 (zhǎngsūn, «nieto primogénito»), que tradicionalmente heredaba el lugar del abuelo en los ritos a los ancestros.

PRONUNCIACIÓN: dà (4.º tono, cae) + sūn (1.er tono, alto y parejo).`,
en:`WHAT IT IS: "大孙", the eldest of the grandsons. This is how grandparents number their grandsons: 大孙, 二孙, 三孙… In speech 子 is often added: 大孙子.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
大: "big". A person seen from the front with arms and legs spread wide, showing how big it is. In birth order it means "the first, the eldest".
孙: "grandchild". Simplified 孙 = 子 (child) + 小 (small): the little child of the family. Traditional 孫 = 子 + 系 (a thread that continues): the children's children, the line that goes on.

ANOTHER FORM: in conversation 大孙子 is more common. The eldest grandson through a son has a special name, 长孙 (zhǎngsūn, "firstborn grandson"), who traditionally inherited the grandfather's place in ancestor rites.

PRONUNCIATION: dà (4th tone, falling) + sūn (1st tone, high and level).`,
zh:`是什么：第一个孙子。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。大：正面站立、张开双臂的人。排行里指第一个。孙：简体 子+小；繁体 孫 = 子+系（延续的线）。口语多说大孙子；长孙（zhǎngsūn）指长子的长子。`}},
  {id:"fa2-45",s:"二孙",t:"二孫",py:"èrsūn",es:"segundo nieto",en:"second grandson",
   x:{
es:`QUÉ ES: «二孙», el segundo de los nietos. Así los abuelos numeran a sus nietos varones: 大孙, 二孙, 三孙… En la conversación suele agregarse 子: 二孙子.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
二: dos rayas, la de abajo más larga (como la tierra debajo del cielo). Para el orden es 二, no 两.
孙: «nieto». Simplificado 孙 = 子 (niño) + 小 (pequeño): el niño chiquito de la familia. Tradicional 孫 = 子 + 系 (un hilo que se prolonga): los hijos de los hijos, la línea que sigue.

PRONUNCIACIÓN: èr (4.º tono, cae; la r se enrosca) + sūn (1.er tono, alto y parejo).`,
en:`WHAT IT IS: "二孙", the second of the grandsons. This is how grandparents number their grandsons: 大孙, 二孙, 三孙… In speech 子 is often added: 二孙子.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
二: two strokes, the lower one longer (like earth under the sky). For order it is 二, not 两.
孙: "grandchild". Simplified 孙 = 子 (child) + 小 (small): the little child of the family. Traditional 孫 = 子 + 系 (a thread that continues): the children's children, the line that goes on.

PRONUNCIATION: èr (4th tone, falling; curled r) + sūn (1st tone, high and level).`,
zh:`是什么：第二个孙子。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。二：两横。排序用二不用两。孙：简体 子+小；繁体 孫 = 子+系（延续的线）。`}},
  {id:"fa2-46",s:"三孙",t:"三孫",py:"sānsūn",es:"tercer nieto",en:"third grandson",
   x:{
es:`QUÉ ES: «三孙», el tercero de los nietos. Así los abuelos numeran a sus nietos varones: 大孙, 二孙, 三孙… En la conversación suele agregarse 子: 三孙子.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
三: tres rayas, una sobre otra. Es uno de los caracteres más antiguos: contar con palitos.
孙: «nieto». Simplificado 孙 = 子 (niño) + 小 (pequeño): el niño chiquito de la familia. Tradicional 孫 = 子 + 系 (un hilo que se prolonga): los hijos de los hijos, la línea que sigue.

PRONUNCIACIÓN: sān (1.er tono, alto y parejo) + sūn (1.er tono, alto y parejo).`,
en:`WHAT IT IS: "三孙", the third of the grandsons. This is how grandparents number their grandsons: 大孙, 二孙, 三孙… In speech 子 is often added: 三孙子.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
三: three strokes, one above the other. One of the oldest characters: counting with sticks.
孙: "grandchild". Simplified 孙 = 子 (child) + 小 (small): the little child of the family. Traditional 孫 = 子 + 系 (a thread that continues): the children's children, the line that goes on.

PRONUNCIATION: sān (1st tone, high and level) + sūn (1st tone, high and level).`,
zh:`是什么：第三个孙子。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。三：三横，数筹码。孙：简体 子+小；繁体 孫 = 子+系（延续的线）。`}},
  {id:"fa2-47",s:"四孙",t:"四孫",py:"sìsūn",es:"cuarto nieto",en:"fourth grandson",
   x:{
es:`QUÉ ES: «四孙», el cuarto de los nietos. Así los abuelos numeran a sus nietos varones: 大孙, 二孙, 三孙… En la conversación suele agregarse 子: 四孙子.

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
四: al principio se escribía con cuatro rayas (亖). La forma actual 四 era, según la explicación más aceptada, una boca o nariz con el aliento saliendo, y se tomó prestada solo por el sonido. Ojo: sì se parece a 死 sǐ (morir), por eso en Taiwán muchos edificios no tienen piso 4.
孙: «nieto». Simplificado 孙 = 子 (niño) + 小 (pequeño): el niño chiquito de la familia. Tradicional 孫 = 子 + 系 (un hilo que se prolonga): los hijos de los hijos, la línea que sigue.

PRONUNCIACIÓN: sì (4.º tono; la s con la lengua atrás de los dientes, sin la i española: suena casi «sz») + sūn (1.er tono, alto y parejo).`,
en:`WHAT IT IS: "四孙", the fourth of the grandsons. This is how grandparents number their grandsons: 大孙, 二孙, 三孙… In speech 子 is often added: 四孙子.

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
四: originally written with four strokes (亖). The current form 四 was, in the most accepted explanation, a mouth or nose with breath coming out, borrowed only for its sound. Note: sì sounds like 死 sǐ (to die), so many buildings in Taiwan have no 4th floor.
孙: "grandchild". Simplified 孙 = 子 (child) + 小 (small): the little child of the family. Traditional 孫 = 子 + 系 (a thread that continues): the children's children, the line that goes on.

PRONUNCIATION: sì (4th tone; the i after s is a buzzing "sz", not "ee") + sūn (1st tone, high and level).`,
zh:`是什么：第四个孙子。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。四：古作亖，今形原为口鼻出气，借音。四近「死」，台湾不少大楼没有四楼。孙：简体 子+小；繁体 孫 = 子+系（延续的线）。`}},
  {id:"fa2-48",s:"最小的孙子",t:"最小的孫子",py:"zuì xiǎo de sūnzi",es:"el nieto menor",en:"the youngest grandson",
   x:{
es:`QUÉ ES: el nieto varón más chico. En la conversación: «他是我最小的孙子».

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
最小的: «el más pequeño».
最: «lo más». Arriba parece 日 (sol), pero originalmente era 冃, una tapa o casco; abajo 取 «tomar» = 耳 (oreja) + 又 (mano): en la guerra antigua se cortaba la oreja izquierda del enemigo para contar las bajas. Cómo se llegó a «lo más» se discute (quizás «el que más orejas tomó», el mayor mérito).
小: «pequeño»: tres granitos o trazos chiquitos.
的: la partícula que convierte lo anterior en «el/la que es…»: 最小的 = «el que es más pequeño».
孙: «nieto». Simplificado 孙 = 子 (niño) + 小 (pequeño): el niño chiquito de la familia. Tradicional 孫 = 子 + 系 (un hilo que se prolonga): los hijos de los hijos, la línea que sigue.

PRONUNCIACIÓN: zuì (4.º tono) xiǎo (3.er tono) de (neutro), después sūn (1.er tono, alto y parejo).`,
en:`WHAT IT IS: the youngest grandson. In speech: "他是我最小的孙子".

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
最小的: "the smallest".
最: "most". The top looks like 日 (sun) but was originally 冃, a lid or helmet; below is 取 "to take" = 耳 (ear) + 又 (hand): in ancient war the enemy's left ear was cut off to count the dead. How it came to mean "most" is disputed (perhaps "the one who took the most ears", the highest merit).
小: "small": three tiny grains or strokes.
的: the particle that turns what comes before into "the one that is…": 最小的 = "the one that is smallest".
孙: "grandchild". Simplified 孙 = 子 (child) + 小 (small): the little child of the family. Traditional 孫 = 子 + 系 (a thread that continues): the children's children, the line that goes on.

PRONUNCIATION: zuì (4th tone) xiǎo (3rd tone) de (neutral), then sūn (1st tone, high and level).`,
zh:`是什么：最小的孙子。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。最小的：最 上为冃（盖、盔）下为取（耳+又，古代割耳计功），引申为「最」，说法有争议；小，三点小粒；的，「…的那个」。孙：简体 子+小；繁体 孫 = 子+系（延续的线）。`}},
  {id:"fa2-49",s:"大孙女",t:"大孫女",py:"dà sūnnǚ",es:"nieta mayor",en:"eldest granddaughter",
   x:{
es:`QUÉ ES: «大孙女», la mayor de las nietas. Los abuelos numeran a las nietas aparte de los nietos: 大孙女, 二孙女, 三孙女…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
大: «grande». Es una persona de frente con los brazos y las piernas abiertos, mostrando lo grande que es. En el orden de hermanos significa «el primero, el mayor».
孙女: «nieta». 孙 (tradicional 孫 = 子 niño + 系 hilo que continúa: la línea familiar) + 女 (mujer arrodillada con los brazos cruzados).

PRONUNCIACIÓN: dà (4.º tono, cae) + sūnnǚ (1.er tono + 3.er tono).`,
en:`WHAT IT IS: "大孙女", the eldest of the granddaughters. Grandparents number granddaughters separately from grandsons: 大孙女, 二孙女, 三孙女…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
大: "big". A person seen from the front with arms and legs spread wide, showing how big it is. In birth order it means "the first, the eldest".
孙女: "granddaughter". 孙 (traditional 孫 = 子 child + 系 continuing thread: the family line) + 女 (kneeling woman with crossed arms).

PRONUNCIATION: dà (4th tone, falling) + sūnnǚ (1st + 3rd tone).`,
zh:`是什么：第一个孙女。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。大：正面站立、张开双臂的人。排行里指第一个。孙女：孫（子+系）+ 女。`}},
  {id:"fa2-50",s:"二孙女",t:"二孫女",py:"èr sūnnǚ",es:"segunda nieta",en:"second granddaughter",
   x:{
es:`QUÉ ES: «二孙女», la segunda de las nietas. Los abuelos numeran a las nietas aparte de los nietos: 大孙女, 二孙女, 三孙女…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
二: dos rayas, la de abajo más larga (como la tierra debajo del cielo). Para el orden es 二, no 两.
孙女: «nieta». 孙 (tradicional 孫 = 子 niño + 系 hilo que continúa: la línea familiar) + 女 (mujer arrodillada con los brazos cruzados).

PRONUNCIACIÓN: èr (4.º tono, cae; la r se enrosca) + sūnnǚ (1.er tono + 3.er tono).`,
en:`WHAT IT IS: "二孙女", the second of the granddaughters. Grandparents number granddaughters separately from grandsons: 大孙女, 二孙女, 三孙女…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
二: two strokes, the lower one longer (like earth under the sky). For order it is 二, not 两.
孙女: "granddaughter". 孙 (traditional 孫 = 子 child + 系 continuing thread: the family line) + 女 (kneeling woman with crossed arms).

PRONUNCIATION: èr (4th tone, falling; curled r) + sūnnǚ (1st + 3rd tone).`,
zh:`是什么：第二个孙女。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。二：两横。排序用二不用两。孙女：孫（子+系）+ 女。`}},
  {id:"fa2-51",s:"三孙女",t:"三孫女",py:"sān sūnnǚ",es:"tercera nieta",en:"third granddaughter",
   x:{
es:`QUÉ ES: «三孙女», la tercera de las nietas. Los abuelos numeran a las nietas aparte de los nietos: 大孙女, 二孙女, 三孙女…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
三: tres rayas, una sobre otra. Es uno de los caracteres más antiguos: contar con palitos.
孙女: «nieta». 孙 (tradicional 孫 = 子 niño + 系 hilo que continúa: la línea familiar) + 女 (mujer arrodillada con los brazos cruzados).

PRONUNCIACIÓN: sān (1.er tono, alto y parejo) + sūnnǚ (1.er tono + 3.er tono).`,
en:`WHAT IT IS: "三孙女", the third of the granddaughters. Grandparents number granddaughters separately from grandsons: 大孙女, 二孙女, 三孙女…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
三: three strokes, one above the other. One of the oldest characters: counting with sticks.
孙女: "granddaughter". 孙 (traditional 孫 = 子 child + 系 continuing thread: the family line) + 女 (kneeling woman with crossed arms).

PRONUNCIATION: sān (1st tone, high and level) + sūnnǚ (1st + 3rd tone).`,
zh:`是什么：第三个孙女。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。三：三横，数筹码。孙女：孫（子+系）+ 女。`}},
  {id:"fa2-52",s:"四孙女",t:"四孫女",py:"sì sūnnǚ",es:"cuarta nieta",en:"fourth granddaughter",
   x:{
es:`QUÉ ES: «四孙女», la cuarta de las nietas. Los abuelos numeran a las nietas aparte de los nietos: 大孙女, 二孙女, 三孙女…

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
四: al principio se escribía con cuatro rayas (亖). La forma actual 四 era, según la explicación más aceptada, una boca o nariz con el aliento saliendo, y se tomó prestada solo por el sonido. Ojo: sì se parece a 死 sǐ (morir), por eso en Taiwán muchos edificios no tienen piso 4.
孙女: «nieta». 孙 (tradicional 孫 = 子 niño + 系 hilo que continúa: la línea familiar) + 女 (mujer arrodillada con los brazos cruzados).

PRONUNCIACIÓN: sì (4.º tono; la s con la lengua atrás de los dientes, sin la i española: suena casi «sz») + sūnnǚ (1.er tono + 3.er tono).`,
en:`WHAT IT IS: "四孙女", the fourth of the granddaughters. Grandparents number granddaughters separately from grandsons: 大孙女, 二孙女, 三孙女…

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
四: originally written with four strokes (亖). The current form 四 was, in the most accepted explanation, a mouth or nose with breath coming out, borrowed only for its sound. Note: sì sounds like 死 sǐ (to die), so many buildings in Taiwan have no 4th floor.
孙女: "granddaughter". 孙 (traditional 孫 = 子 child + 系 continuing thread: the family line) + 女 (kneeling woman with crossed arms).

PRONUNCIATION: sì (4th tone; the i after s is a buzzing "sz", not "ee") + sūnnǚ (1st + 3rd tone).`,
zh:`是什么：第四个孙女。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。四：古作亖，今形原为口鼻出气，借音。四近「死」，台湾不少大楼没有四楼。孙女：孫（子+系）+ 女。`}},
  {id:"fa2-53",s:"最小的孙女",t:"最小的孫女",py:"zuì xiǎo de sūnnǚ",es:"la nieta menor",en:"the youngest granddaughter",
   x:{
es:`QUÉ ES: la nieta más chica: «她是我最小的孙女».

EL SISTEMA: en una familia china los hijos se numeran por orden de nacimiento. El primero no es 一 sino 大 («grande»); después vienen 二, 三, 四… delante de la palabra: 大儿子, 二儿子, 三儿子. Para el orden siempre se usa 二, nunca 两 (两 es para contar: 两个儿子 = dos hijos; 二儿子 = el segundo hijo). El último se dice 最小的… o 小…

LOS CARACTERES:
最小的: «el más pequeño».
最: «lo más». Arriba parece 日 (sol), pero originalmente era 冃, una tapa o casco; abajo 取 «tomar» = 耳 (oreja) + 又 (mano): en la guerra antigua se cortaba la oreja izquierda del enemigo para contar las bajas. Cómo se llegó a «lo más» se discute (quizás «el que más orejas tomó», el mayor mérito).
小: «pequeño»: tres granitos o trazos chiquitos.
的: la partícula que convierte lo anterior en «el/la que es…»: 最小的 = «el que es más pequeño».
孙女: «nieta». 孙 (tradicional 孫 = 子 niño + 系 hilo que continúa: la línea familiar) + 女 (mujer arrodillada con los brazos cruzados).

PRONUNCIACIÓN: zuì (4.º tono) xiǎo (3.er tono) de (neutro), después sūnnǚ (1.er tono + 3.er tono).`,
en:`WHAT IT IS: the youngest granddaughter: "她是我最小的孙女".

THE SYSTEM: in a Chinese family, children are numbered by birth order. The first is not 一 but 大 ("big"); then come 二, 三, 四… in front of the word: 大儿子, 二儿子, 三儿子. For order you always use 二, never 两 (两 is for counting: 两个儿子 = two sons; 二儿子 = the second son). The last one is 最小的… or 小…

THE CHARACTERS:
最小的: "the smallest".
最: "most". The top looks like 日 (sun) but was originally 冃, a lid or helmet; below is 取 "to take" = 耳 (ear) + 又 (hand): in ancient war the enemy's left ear was cut off to count the dead. How it came to mean "most" is disputed (perhaps "the one who took the most ears", the highest merit).
小: "small": three tiny grains or strokes.
的: the particle that turns what comes before into "the one that is…": 最小的 = "the one that is smallest".
孙女: "granddaughter". 孙 (traditional 孫 = 子 child + 系 continuing thread: the family line) + 女 (kneeling woman with crossed arms).

PRONUNCIATION: zuì (4th tone) xiǎo (3rd tone) de (neutral), then sūnnǚ (1st + 3rd tone).`,
zh:`是什么：最小的孙女。排行：老大用「大」不用「一」，接着二、三、四；排序用「二」不用「两」（两个儿子≠二儿子）。最小的用「最小的…」或「小…」。最小的：最 上为冃（盖、盔）下为取（耳+又，古代割耳计功），引申为「最」，说法有争议；小，三点小粒；的，「…的那个」。孙女：孫（子+系）+ 女。`}},
  {id:"fa2-54",s:"亲生",t:"親生",py:"qīnshēng",es:"biológico",en:"biological (by birth)",
   x:{
es:`QUÉ ES: «biológico, de sangre», el hijo que uno mismo tuvo. Se usa delante de la persona o con 的: 亲生父母 (padres biológicos), 亲生女儿 (hija biológica), 他不是我亲生的 (no es mi hijo biológico). Suena más cálido que técnico: «de mi propia sangre».

LOS CARACTERES:
亲: «pariente cercano, propio». Tradicional 親 = 亲 (el sonido; arriba 辛, un cuchillo o punzón, sobre 木 árbol) + 見 (un ojo grande sobre dos piernas: ver). «Los que ves de cerca»: tu gente. El simplificado quitó 見.
生: «nacer, dar a luz». Es un brote (屮) que sale de la tierra (土): la vida que brota. También en 学生 (el que «nace» al estudio), 生日 (cumpleaños) y 医生.
亲生 = «nacido de uno mismo, de los propios».

EL PAR: 生父/生母 (padres biológicos, «que te dieron a luz») ↔ 养父/养母 (padres adoptivos, «que te criaron»). 亲生 = biológico, 领养 / 收养 = adoptar.

PRONUNCIACIÓN: qīnshēng, dos 1.os tonos, altos y parejos. La q es como una «ch» con mucho aire y la sonrisa estirada.`,
en:`WHAT IT IS: "biological, by blood", the child you had yourself. It goes before the person or with 的: 亲生父母 (birth parents), 亲生女儿 (biological daughter), 他不是我亲生的 (he isn't my biological child). It sounds warm rather than technical: "of my own blood".

THE CHARACTERS:
亲: "close relative, one's own". Traditional 親 = 亲 (sound; 辛, a knife or awl, over 木 tree) + 見 (a big eye on two legs: to see). "Those you see up close": your own people. The simplified form dropped 見.
生: "to be born, to give birth". A sprout (屮) coming out of the earth (土): life springing up. Also in 学生 (student), 生日 (birthday) and 医生 (doctor).
亲生 = "born of one's own, of one's own people".

THE PAIR: 生父/生母 (birth parents, "who gave birth to you") ↔ 养父/养母 (adoptive parents, "who raised you"). 亲生 = biological, 领养 / 收养 = to adopt.

PRONUNCIATION: qīnshēng, two 1st tones, high and level. q is like "ch" with lots of air and lips spread in a smile.`,
zh:`是什么：亲生的孩子、亲生父母。亲：繁体 親 有 見，近看的人；生：草从土里长出。生父母（生你的）↔ 养父母（养你的）；亲生、领养/收养。`}},
  {id:"fa2-55",s:"领养",t:"領養",py:"lǐngyǎng",es:"adoptivo; adoptar",en:"adoptive; to adopt",
   x:{
es:`QUÉ ES: «adoptar» (verbo) y «adoptivo». 我们领养了一个女儿 = adoptamos una hija. 领养的孩子 = el hijo adoptado. También se usa para mascotas: 领养一只狗 (adoptar un perro). La palabra legal es 收养 (shōuyǎng, «recibir para criar»); 领养 es la de todos los días.

LOS CARACTERES:
领: «llevar, guiar; cuello». 令 (una boca vuelta hacia abajo que da órdenes a una persona arrodillada: mandar) aporta el sonido; 页 (tradicional 頁, una cabeza grande sobre el cuerpo) da el sentido: el cuello, lo que sostiene la cabeza. Del cuello salió «guiar» (como llevar un animal del cuello) y 领导 (líder). 领养 = «llevarse a alguien para criarlo».
养: «criar, alimentar». Tradicional 養 = 羊 (oveja, por el sonido yáng → yǎng; se ven los cuernos arriba) + 食 (comida: una vasija con tapa llena de arroz). Simplificado 养: se mantuvo 羊 arriba y se simplificó lo de abajo. Criar es dar de comer: 养狗 (tener un perro), 养孩子 (criar hijos).

EL PAR: 生父/生母 (padres biológicos, «que te dieron a luz») ↔ 养父/养母 (padres adoptivos, «que te criaron»). 亲生 = biológico, 领养 / 收养 = adoptar.

PRONUNCIACIÓN: lǐngyǎng, dos 3.os tonos seguidos: el primero se pronuncia como 2.º tono (líng yǎng). Es la regla del tercer tono.`,
en:`WHAT IT IS: "to adopt" (verb) and "adoptive". 我们领养了一个女儿 = we adopted a daughter. 领养的孩子 = the adopted child. Also for pets: 领养一只狗 (to adopt a dog). The legal word is 收养 (shōuyǎng, "to take in to raise"); 领养 is the everyday one.

THE CHARACTERS:
领: "to lead, to guide; neck". 令 (a mouth turned downward giving orders to a kneeling person: to command) gives the sound; 页 (traditional 頁, a big head on a body) gives the meaning: the neck, what holds up the head. From the neck came "to lead" (like leading an animal by the neck) and 领导 (leader). 领养 = "to take someone in to raise".
养: "to raise, to feed". Traditional 養 = 羊 (sheep, for the sound yáng → yǎng; you can see the horns on top) + 食 (food: a lidded vessel full of rice). Simplified 养 kept 羊 on top and simplified the bottom. Raising is feeding: 养狗 (to keep a dog), 养孩子 (to raise children).

THE PAIR: 生父/生母 (birth parents, "who gave birth to you") ↔ 养父/养母 (adoptive parents, "who raised you"). 亲生 = biological, 领养 / 收养 = to adopt.

PRONUNCIATION: lǐngyǎng, two 3rd tones in a row: the first is said as a 2nd tone (líng yǎng). That's the third-tone rule.`,
zh:`是什么：领养（口语），收养（法律）。领：令表音 + 页（头），脖子，引申为带领；养：繁体 養＝羊（表音）+ 食。发音：两个三声，前一个读二声。生父母（生你的）↔ 养父母（养你的）；亲生、领养/收养。`}},
  {id:"fa2-56",s:"养父",t:"養父",py:"yǎngfù",es:"padre adoptivo",en:"adoptive father",
   x:{
es:`QUÉ ES: «padre adoptivo», el que te crió sin ser tu padre biológico. Su pareja es 养母; el padre biológico es 生父. 养父 es palabra de documentos y relatos; al hablarle, lo llamás 爸爸 igual.

LOS CARACTERES:
养: «criar, alimentar». Tradicional 養 = 羊 (oveja, por el sonido yáng → yǎng; se ven los cuernos arriba) + 食 (comida: una vasija con tapa llena de arroz). Simplificado 养: se mantuvo 羊 arriba y se simplificó lo de abajo. Criar es dar de comer: 养狗 (tener un perro), 养孩子 (criar hijos).
父: «padre». Una mano sosteniendo un hacha de piedra o un palo: el hombre que trabaja y manda (otros ven una antorcha; se discute). Es la forma formal; en casa se dice 爸爸, que es 父 + 巴 (sonido).
养父 = «el padre que (te) crió».

EL PAR: 生父/生母 (padres biológicos, «que te dieron a luz») ↔ 养父/养母 (padres adoptivos, «que te criaron»). 亲生 = biológico, 领养 / 收养 = adoptar.

PRONUNCIACIÓN: yǎngfù, 3.er tono (queda bajo, sin subir) + 4.º tono.`,
en:`WHAT IT IS: "adoptive father", the one who raised you without being your birth father. His pair is 养母; the birth father is 生父. 养父 is a word for documents and stories; when talking to him you still say 爸爸.

THE CHARACTERS:
养: "to raise, to feed". Traditional 養 = 羊 (sheep, for the sound yáng → yǎng; you can see the horns on top) + 食 (food: a lidded vessel full of rice). Simplified 养 kept 羊 on top and simplified the bottom. Raising is feeding: 养狗 (to keep a dog), 养孩子 (to raise children).
父: "father". A hand holding a stone axe or a stick: the man who works and commands (others see a torch; disputed). It is the formal form; at home you say 爸爸, which is 父 + 巴 (sound).
养父 = "the father who raised (you)".

THE PAIR: 生父/生母 (birth parents, "who gave birth to you") ↔ 养父/养母 (adoptive parents, "who raised you"). 亲生 = biological, 领养 / 收养 = to adopt.

PRONUNCIATION: yǎngfù, 3rd tone (stays low, no rise) + 4th tone.`,
zh:`是什么：养育你的父亲，非亲生。养：養＝羊+食；父：手持石斧。生父母（生你的）↔ 养父母（养你的）；亲生、领养/收养。`}},
  {id:"fa2-57",s:"养母",t:"養母",py:"yǎngmǔ",es:"madre adoptiva",en:"adoptive mother",
   x:{
es:`QUÉ ES: «madre adoptiva», la que te crió sin ser tu madre biológica. Su pareja es 养父; la madre biológica es 生母.

LOS CARACTERES:
养: «criar, alimentar». Tradicional 養 = 羊 (oveja, por el sonido yáng → yǎng; se ven los cuernos arriba) + 食 (comida: una vasija con tapa llena de arroz). Simplificado 养: se mantuvo 羊 arriba y se simplificó lo de abajo. Criar es dar de comer: 养狗 (tener un perro), 养孩子 (criar hijos).
母: «madre». 女 (mujer arrodillada) con dos puntos agregados: los pechos, la mujer que amamanta. Forma formal; en casa se dice 妈妈 (女 + 马, sonido).
养母 = «la madre que (te) crió».

EL PAR: 生父/生母 (padres biológicos, «que te dieron a luz») ↔ 养父/养母 (padres adoptivos, «que te criaron»). 亲生 = biológico, 领养 / 收养 = adoptar.

PRONUNCIACIÓN: yǎngmǔ, dos 3.os tonos: el primero se dice como 2.º tono (yángmǔ).`,
en:`WHAT IT IS: "adoptive mother", the one who raised you without being your birth mother. Her pair is 养父; the birth mother is 生母.

THE CHARACTERS:
养: "to raise, to feed". Traditional 養 = 羊 (sheep, for the sound yáng → yǎng; you can see the horns on top) + 食 (food: a lidded vessel full of rice). Simplified 养 kept 羊 on top and simplified the bottom. Raising is feeding: 养狗 (to keep a dog), 养孩子 (to raise children).
母: "mother". 女 (kneeling woman) with two dots added: the breasts, the woman who nurses. Formal form; at home you say 妈妈 (女 + 马, sound).
养母 = "the mother who raised (you)".

THE PAIR: 生父/生母 (birth parents, "who gave birth to you") ↔ 养父/养母 (adoptive parents, "who raised you"). 亲生 = biological, 领养 / 收养 = to adopt.

PRONUNCIATION: yǎngmǔ, two 3rd tones: the first is said as a 2nd tone (yángmǔ).`,
zh:`是什么：养育你的母亲，非亲生。养：養＝羊+食；母：女加两点（乳房）。两个三声，前者变二声。生父母（生你的）↔ 养父母（养你的）；亲生、领养/收养。`}},
  {id:"fa2-58",s:"生父",py:"shēngfù",es:"padre biológico",en:"birth father",
   x:{
es:`QUÉ ES: «padre biológico», el que te engendró, en contraste con el que te crió (养父). Es palabra de relatos, trámites y noticias: «他找到了他的生父» (encontró a su padre biológico).

LOS CARACTERES:
生: «nacer, dar a luz». Es un brote (屮) que sale de la tierra (土): la vida que brota. También en 学生 (el que «nace» al estudio), 生日 (cumpleaños) y 医生.
父: «padre». Una mano sosteniendo un hacha de piedra o un palo: el hombre que trabaja y manda (otros ven una antorcha; se discute). Es la forma formal; en casa se dice 爸爸, que es 父 + 巴 (sonido).
生父 = «el padre que (te) dio la vida».

EL PAR: 生父/生母 (padres biológicos, «que te dieron a luz») ↔ 养父/养母 (padres adoptivos, «que te criaron»). 亲生 = biológico, 领养 / 收养 = adoptar.

PRONUNCIACIÓN: shēngfù, 1.er tono + 4.º tono. sh con la lengua enroscada hacia atrás.`,
en:`WHAT IT IS: "birth father", the one who fathered you, in contrast to the one who raised you (养父). A word for stories, paperwork and news: "他找到了他的生父" (he found his birth father).

THE CHARACTERS:
生: "to be born, to give birth". A sprout (屮) coming out of the earth (土): life springing up. Also in 学生 (student), 生日 (birthday) and 医生 (doctor).
父: "father". A hand holding a stone axe or a stick: the man who works and commands (others see a torch; disputed). It is the formal form; at home you say 爸爸, which is 父 + 巴 (sound).
生父 = "the father who gave (you) life".

THE PAIR: 生父/生母 (birth parents, "who gave birth to you") ↔ 养父/养母 (adoptive parents, "who raised you"). 亲生 = biological, 领养 / 收养 = to adopt.

PRONUNCIATION: shēngfù, 1st + 4th tone. sh with the tongue curled back.`,
zh:`是什么：亲生父亲，与养父相对。生：草出土；父：手持石斧。生父母（生你的）↔ 养父母（养你的）；亲生、领养/收养。`}},
  {id:"fa2-59",s:"生母",py:"shēngmǔ",es:"madre biológica",en:"birth mother",
   x:{
es:`QUÉ ES: «madre biológica», la que te dio a luz, en contraste con la que te crió (养母).

LOS CARACTERES:
生: «nacer, dar a luz». Es un brote (屮) que sale de la tierra (土): la vida que brota. También en 学生 (el que «nace» al estudio), 生日 (cumpleaños) y 医生.
母: «madre». 女 (mujer arrodillada) con dos puntos agregados: los pechos, la mujer que amamanta. Forma formal; en casa se dice 妈妈 (女 + 马, sonido).
生母 = «la madre que (te) dio a luz».

EL PAR: 生父/生母 (padres biológicos, «que te dieron a luz») ↔ 养父/养母 (padres adoptivos, «que te criaron»). 亲生 = biológico, 领养 / 收养 = adoptar.

PRONUNCIACIÓN: shēngmǔ, 1.er tono + 3.er tono (al final de la frase, baja y sube).`,
en:`WHAT IT IS: "birth mother", the one who gave birth to you, in contrast to the one who raised you (养母).

THE CHARACTERS:
生: "to be born, to give birth". A sprout (屮) coming out of the earth (土): life springing up. Also in 学生 (student), 生日 (birthday) and 医生 (doctor).
母: "mother". 女 (kneeling woman) with two dots added: the breasts, the woman who nurses. Formal form; at home you say 妈妈 (女 + 马, sound).
生母 = "the mother who gave birth (to you)".

THE PAIR: 生父/生母 (birth parents, "who gave birth to you") ↔ 养父/养母 (adoptive parents, "who raised you"). 亲生 = biological, 领养 / 收养 = to adopt.

PRONUNCIATION: shēngmǔ, 1st + 3rd tone (at the end of a sentence it dips and rises).`,
zh:`是什么：亲生母亲，与养母相对。生：草出土；母：女加两点。生父母（生你的）↔ 养父母（养你的）；亲生、领养/收养。`}},
  {id:"fa2-60",s:"独生子",t:"獨生子",py:"dúshēngzǐ",es:"hijo único",en:"only son",
   x:{
es:`QUÉ ES: «hijo único» (varón). Para una hija única: 独生女. Para hablar en general, sin sexo: 独生子女. «我是独生子» = soy hijo único (no tengo hermanos).

LOS CARACTERES:
独: «solo». Simplificado 独 = 犭 (perro, la forma de 犬 al costado) + 虫; tradicional 獨 = 犭 + 蜀 (una oruga de ojos grandes; acá da el sonido). La explicación clásica del diccionario antiguo 说文: «las ovejas andan en rebaño, los perros andan solos», porque los perros se pelean entre sí. 独 aparece en 孤独 (soledad) y 独立 (independiente).
生: «nacer», un brote saliendo de la tierra.
子: un bebé envuelto en su manta, con los brazos afuera: «hijo». Acá conserva su tono (zǐ), no es el sufijo neutro de 儿子.
独生子 = «el hijo nacido solo».

CONTEXTO: en China continental, entre 1980 y 2015 la política del hijo único hizo que 独生子女 (hijos únicos) fuera una palabra de todos los días. En Taiwán nunca existió esa política, pero hoy con la baja natalidad también hay muchos.

PRONUNCIACIÓN: dúshēngzǐ: 2.º, 1.er y 3.er tono.`,
en:`WHAT IT IS: "only son". For an only daughter: 独生女. In general, without sex: 独生子女. "我是独生子" = I'm an only child (I have no siblings).

THE CHARACTERS:
独: "alone". Simplified 独 = 犭 (dog, the side form of 犬) + 虫; traditional 獨 = 犭 + 蜀 (a big-eyed caterpillar; here it gives the sound). The classic explanation in the ancient dictionary 说文: "sheep go in flocks, dogs go alone", because dogs fight each other. 独 appears in 孤独 (loneliness) and 独立 (independent).
生: "to be born", a sprout coming out of the earth.
子: a baby wrapped in its blanket, arms out: "son". Here it keeps its tone (zǐ); it is not the neutral suffix of 儿子.
独生子 = "the son born alone".

CONTEXT: in mainland China, from 1980 to 2015 the one-child policy made 独生子女 (only children) an everyday word. Taiwan never had that policy, but with today's low birth rate there are many there too.

PRONUNCIATION: dúshēngzǐ: 2nd, 1st and 3rd tone.`,
zh:`是什么：独生子，女的叫独生女，统称独生子女。独：犭+虫／獨＝犭+蜀，羊成群，犬独行。生：出生；子：婴儿。大陆曾实行独生子女政策。`}},
  {id:"fa2-61",s:"独子",t:"獨子",py:"dúzǐ",es:"hijo único",en:"only son",
   x:{
es:`QUÉ ES: «hijo único», forma corta de 独生子. Suena un poco más escrita o formal y se usa sobre todo para hablar de los padres: «他是家里的独子» = es el único hijo varón de la familia. Ojo: 独子 puede querer decir «el único varón» aunque tenga hermanas; 独生子 deja más claro que no hay otros hijos.

LOS CARACTERES:
独: «solo». Simplificado 独 = 犭 (perro, la forma de 犬 al costado) + 虫; tradicional 獨 = 犭 + 蜀 (una oruga de ojos grandes; acá da el sonido). La explicación clásica del diccionario antiguo 说文: «las ovejas andan en rebaño, los perros andan solos», porque los perros se pelean entre sí. 独 aparece en 孤独 (soledad) y 独立 (independiente).
子: un bebé envuelto en su manta: «hijo».

PRONUNCIACIÓN: dúzǐ, 2.º tono + 3.er tono. La z es como «ds» sin aire.`,
en:`WHAT IT IS: "only son", short form of 独生子. It sounds a bit more written or formal and is used mostly when talking about parents: "他是家里的独子" = he is the family's only son. Note: 独子 can mean "the only boy" even if he has sisters; 独生子 makes it clearer there are no other children.

THE CHARACTERS:
独: "alone". Simplified 独 = 犭 (dog, the side form of 犬) + 虫; traditional 獨 = 犭 + 蜀 (a big-eyed caterpillar; here it gives the sound). The classic explanation in the ancient dictionary 说文: "sheep go in flocks, dogs go alone", because dogs fight each other. 独 appears in 孤独 (loneliness) and 独立 (independent).
子: a baby wrapped in its blanket: "son".

PRONUNCIATION: dúzǐ, 2nd + 3rd tone. z is like "ds" without air.`,
zh:`是什么：独生子的简称，也可指唯一的儿子（可能有姐妹）。独：犭+虫／獨，犬独行；子：婴儿。`}},
  {id:"fa2-62",s:"独生女",t:"獨生女",py:"dúshēngnǚ",es:"hija única",en:"only daughter",
   x:{
es:`QUÉ ES: «hija única». La pareja de 独生子. «我太太是独生女» = mi esposa es hija única.

LOS CARACTERES:
独: «solo». Simplificado 独 = 犭 (perro, la forma de 犬 al costado) + 虫; tradicional 獨 = 犭 + 蜀 (una oruga de ojos grandes; acá da el sonido). La explicación clásica del diccionario antiguo 说文: «las ovejas andan en rebaño, los perros andan solos», porque los perros se pelean entre sí. 独 aparece en 孤独 (soledad) y 独立 (independiente).
生: «nacer», un brote saliendo de la tierra.
女: una mujer arrodillada con los brazos cruzados sobre el pecho: «mujer, hija».
独生女 = «la hija nacida sola».

CONTEXTO: en China continental, entre 1980 y 2015 la política del hijo único hizo que 独生子女 (hijos únicos) fuera una palabra de todos los días. En Taiwán nunca existió esa política, pero hoy con la baja natalidad también hay muchos.

PRONUNCIACIÓN: dúshēngnǚ: 2.º, 1.er y 3.er tono. ü con los labios redondos.`,
en:`WHAT IT IS: "only daughter". The pair of 独生子. "我太太是独生女" = my wife is an only child.

THE CHARACTERS:
独: "alone". Simplified 独 = 犭 (dog, the side form of 犬) + 虫; traditional 獨 = 犭 + 蜀 (a big-eyed caterpillar; here it gives the sound). The classic explanation in the ancient dictionary 说文: "sheep go in flocks, dogs go alone", because dogs fight each other. 独 appears in 孤独 (loneliness) and 独立 (independent).
生: "to be born", a sprout coming out of the earth.
女: a woman kneeling with arms crossed over her chest: "woman, daughter".
独生女 = "the daughter born alone".

CONTEXT: in mainland China, from 1980 to 2015 the one-child policy made 独生子女 (only children) an everyday word. Taiwan never had that policy, but with today's low birth rate there are many there too.

PRONUNCIATION: dúshēngnǚ: 2nd, 1st and 3rd tone. ü with rounded lips.`,
zh:`是什么：独生女，与独生子相对。独：犬独行；生：出生；女：跪坐女子。`}},
  {id:"fa2-63",s:"双胞胎",t:"雙胞胎",py:"shuāngbāotāi",es:"gemelos, mellizos",en:"twins",
   x:{
es:`QUÉ ES: «gemelos» o «mellizos». El chino usa una sola palabra para los dos; si hace falta distinguir: 同卵双胞胎 (del mismo óvulo: gemelos idénticos) y 异卵双胞胎 (de óvulos distintos: mellizos). Un nene y una nena: 龙凤胎 (lóngfèngtāi, «dragón y fénix»). «他们是双胞胎» = son gemelos.

LOS CARACTERES:
双: «par». Simplificado 双 = dos manos 又又. Tradicional 雙 = dos pájaros 隹隹 (隹 es un pájaro de cola corta) sobre una mano 又: la mano que sostiene dos pájaros a la vez, un par. Es también el clasificador de pares: 一双鞋 (un par de zapatos), 一双筷子 (un par de palillos).
胞: 月 (acá no es «luna» sino «carne»: al costado de un carácter, 月 casi siempre viene de 肉, y marca partes del cuerpo) + 包. 包 es un feto enroscado (巳) dentro de un vientre que lo envuelve (勹): «envolver». Da el sonido y el sentido: la bolsa que envuelve al bebé. De ahí 同胞, «del mismo útero» = hermanos, compatriotas.
胎: 月 (carne) + 台 (el sonido): el embrión, el feto. 胎 es también cada embarazo/parto: 第一胎 = el primer parto.
双胞胎 = «un par de fetos del mismo vientre».

LA SERIE: 双胞胎 (2) → 三胞胎 (3) → 四胞胎 (4).

PRONUNCIACIÓN: shuāngbāotāi, tres 1.os tonos seguidos: todo alto y parejo, como cantando una sola nota.`,
en:`WHAT IT IS: "twins", identical or fraternal. Chinese uses one word for both; to distinguish: 同卵双胞胎 (from the same egg: identical) and 异卵双胞胎 (from different eggs: fraternal). A boy and a girl: 龙凤胎 (lóngfèngtāi, "dragon and phoenix"). "他们是双胞胎" = they are twins.

THE CHARACTERS:
双: "pair". Simplified 双 = two hands 又又. Traditional 雙 = two birds 隹隹 (隹 is a short-tailed bird) over a hand 又: a hand holding two birds at once, a pair. It is also the measure word for pairs: 一双鞋 (a pair of shoes), 一双筷子 (a pair of chopsticks).
胞: 月 (here not "moon" but "flesh": on the side of a character 月 almost always comes from 肉 and marks body parts) + 包. 包 is a curled fetus (巳) inside a womb wrapping it (勹): "to wrap". It gives the sound and the meaning: the sac wrapping the baby. Hence 同胞, "from the same womb" = siblings, compatriots.
胎: 月 (flesh) + 台 (the sound): the embryo, the fetus. 胎 is also each pregnancy/birth: 第一胎 = the first birth.
双胞胎 = "a pair of fetuses from the same womb".

THE SERIES: 双胞胎 (2) → 三胞胎 (3) → 四胞胎 (4).

PRONUNCIATION: shuāngbāotāi, three 1st tones in a row: all high and level, like singing one note.`,
zh:`是什么：双胞胎，同卵/异卵，一男一女叫龙凤胎。双：繁体 雙＝手持两只鸟（隹隹）；也是量词（一双鞋）。胞：月（肉）+ 包（胎儿在腹中，表音兼义）；胎：月 + 台（表音）。`}},
  {id:"fa2-64",s:"三胞胎",py:"sānbāotāi",es:"trillizos",en:"triplets",
   x:{
es:`QUÉ ES: «trillizos», tres bebés del mismo embarazo. Sigue la serie de 双胞胎: se cambia 双 (par) por el número: 三胞胎, 四胞胎… Fijate que para dos no se dice 二胞胎 sino 双胞胎.

LOS CARACTERES:
三: tres rayas, una sobre otra: contar con palitos.
胞: 月 (acá no es «luna» sino «carne»: al costado de un carácter, 月 casi siempre viene de 肉, y marca partes del cuerpo) + 包. 包 es un feto enroscado (巳) dentro de un vientre que lo envuelve (勹): «envolver». Da el sonido y el sentido: la bolsa que envuelve al bebé. De ahí 同胞, «del mismo útero» = hermanos, compatriotas.
胎: 月 (carne) + 台 (el sonido): el embrión, el feto. 胎 es también cada embarazo/parto: 第一胎 = el primer parto.
三胞胎 = «tres fetos del mismo vientre».

PRONUNCIACIÓN: sānbāotāi, tres 1.os tonos: todo alto y parejo.`,
en:`WHAT IT IS: "triplets", three babies from one pregnancy. It follows 双胞胎: swap 双 (pair) for the number: 三胞胎, 四胞胎… Note that for two you don't say 二胞胎 but 双胞胎.

THE CHARACTERS:
三: three strokes, one above the other: counting with sticks.
胞: 月 (here not "moon" but "flesh": on the side of a character 月 almost always comes from 肉 and marks body parts) + 包. 包 is a curled fetus (巳) inside a womb wrapping it (勹): "to wrap". It gives the sound and the meaning: the sac wrapping the baby. Hence 同胞, "from the same womb" = siblings, compatriots.
胎: 月 (flesh) + 台 (the sound): the embryo, the fetus. 胎 is also each pregnancy/birth: 第一胎 = the first birth.
三胞胎 = "three fetuses from the same womb".

PRONUNCIATION: sānbāotāi, three 1st tones: all high and level.`,
zh:`是什么：三胞胎，二用「双胞胎」不用「二胞胎」。三：三横。胞：月（肉）+ 包（胎儿在腹中，表音兼义）；胎：月 + 台（表音）。`}},
  {id:"fa2-65",s:"岁",t:"歲",py:"suì",es:"años (de edad)",en:"years old",
   x:{
es:`QUÉ ES: «años de edad». Se pone directo después del número, sin verbo: 我三十岁 = tengo treinta años (no hace falta 是 ni 有). Para preguntar:
- a un niño: 你几岁？ (几 = cuántos, para números chicos)
- a un adulto: 你多大？ o 你今年多大？
- a una persona mayor, con respeto: 您多大年纪？ o 您贵庚？
Ojo: la edad nunca se dice con 年 (año calendario): 三十年 = treinta años de tiempo, no de edad.

LOS CARACTERES:
岁: simplificado 岁 = 山 (montaña) + 夕 (la luna de la tarde). Fácil de recordar como «montañas y lunas que pasan», pero es solo una simplificación moderna.
El tradicional 歲 guarda el origen: 戉 (un hacha de hoja ancha) con 步 (dos pies, pasos) arriba y abajo. La explicación más citada: el hacha era una herramienta de cosecha o de sacrificios en los ritos del año, y 步 marca el paso del tiempo: un ciclo de cosecha, un año. Otros lo leen como el nombre del planeta Júpiter (岁星), que tarda unos 12 años en recorrer el cielo y servía para contar los años. El origen exacto se discute.

CUENTA TRADICIONAL: la edad china antigua (虚岁, «edad virtual») cuenta 1 año al nacer y suma uno cada Año Nuevo lunar; la edad normal (实岁 / 周岁) es como en Occidente. Algunas abuelas taiwanesas todavía usan la primera.

PRONUNCIACIÓN: suì, 4.º tono, cae. Se dice «sui» en una sola sílaba (la u es corta).`,
en:`WHAT IT IS: "years of age". It goes right after the number, with no verb: 我三十岁 = I'm thirty (no 是 or 有 needed). To ask:
- a child: 你几岁？ (几 = how many, for small numbers)
- an adult: 你多大？ or 你今年多大？
- an older person, politely: 您多大年纪？ or 您贵庚？
Careful: age is never said with 年 (calendar year): 三十年 = thirty years of time, not age.

THE CHARACTERS:
岁: simplified 岁 = 山 (mountain) + 夕 (the evening moon). Easy to remember as "mountains and moons going by", but it's only a modern simplification.
Traditional 歲 keeps the origin: 戉 (a broad-bladed axe) with 步 (two feet, steps) above and below. The most cited explanation: the axe was a harvest or sacrificial tool in the year's rites, and 步 marks time passing: one harvest cycle, one year. Others read it as the name of Jupiter (岁星), which takes about 12 years to cross the sky and was used to count years. The exact origin is disputed.

TRADITIONAL COUNT: the old Chinese age (虚岁, "nominal age") counts 1 at birth and adds one each Lunar New Year; the ordinary age (实岁 / 周岁) is as in the West. Some Taiwanese grandmothers still use the first.

PRONUNCIATION: suì, 4th tone, falling. Said as one syllable "sway" (the u is short).`,
zh:`是什么：年龄单位，直接放在数字后：我三十岁（不用「是」）。问法：小孩「几岁」，大人「多大」，长辈「多大年纪/贵庚」。年龄不用「年」。
汉字：简体 山+夕；繁体 歲＝戉（斧）+ 步，收获或祭祀的周期，一说岁星（木星），说法有争议。虚岁/周岁。`}},
  {id:"fa2-66",s:"差",py:"chà",es:"diferir, faltar (por edad)",en:"to differ (in age)",
   x:{
es:`QUÉ ES: «diferir, haber diferencia; faltar». Con la edad: «我们差两岁» = nos llevamos dos años. «我和我哥差五岁» = mi hermano y yo nos llevamos cinco años. Otros usos que ya vas a encontrar:
- 差不多: «casi lo mismo, más o menos» (literalmente «la diferencia no es mucha»).
- con la hora: 差五分三点 = faltan cinco para las tres.
- como adjetivo: 很差 = muy malo, de mala calidad.
Para comparar edades también se usa 比: «我比他大两岁» = soy dos años mayor que él.

EL CARÁCTER:
差: en la escritura antigua, arriba había una planta de espigas caídas o desparejas (hoy se ve como 𦍌, parecido a 羊 sin la cola) y abajo 左 (una mano izquierda con una herramienta, 工). La explicación tradicional: una mano que trilla o frota espigas y queda todo desparejo: «desigual, no llega a ser igual», de ahí «diferencia» y «faltar». El detalle se discute.

TRES LECTURAS:
- chà: diferir, faltar, malo (la de esta tarjeta).
- chā: diferencia en palabras cultas: 差别 (diferencia), 差距 (brecha).
- chāi: mandar a alguien: 出差 (viaje de trabajo).

PRONUNCIACIÓN: chà, 4.º tono, cae. ch con aire y la lengua enroscada hacia atrás.`,
en:`WHAT IT IS: "to differ; to fall short, be missing". With age: "我们差两岁" = we are two years apart. "我和我哥差五岁" = my brother and I are five years apart. Other uses you'll meet:
- 差不多: "about the same, more or less" (literally "the difference isn't much").
- with time: 差五分三点 = five to three.
- as an adjective: 很差 = very bad, poor quality.
To compare ages 比 is also used: "我比他大两岁" = I'm two years older than him.

THE CHARACTER:
差: in ancient script the top was a plant with drooping or uneven ears (now it looks like 𦍌, like 羊 without its tail) and the bottom 左 (a left hand holding a tool, 工). The traditional explanation: a hand threshing or rubbing ears of grain, leaving everything uneven: "unequal, not quite matching", hence "difference" and "falling short". The details are disputed.

THREE READINGS:
- chà: to differ, to be short of, bad (this card's).
- chā: difference in learned words: 差别 (difference), 差距 (gap).
- chāi: to send someone: 出差 (business trip).

PRONUNCIATION: chà, 4th tone, falling. ch with air and the tongue curled back.`,
zh:`是什么：相差、缺少。我们差两岁；差不多；差五分三点；很差。比较年龄也用「比」：我比他大两岁。
汉字：上为垂穗的禾，下为左（手持工具），搓禾不齐，引申为差别，说法有争议。
读音：chà（相差、差劲）、chā（差别）、chāi（出差）。`}},
  {id:"fa2-67",s:"家里",t:"家裡",py:"jiālǐ",es:"en casa, en la familia",en:"at home, in the family",
   x:{
es:`QUÉ ES: «en casa, en la familia». Sirve tanto para el lugar como para la gente: «我家里有五个人» = en mi familia somos cinco. «家里没人» = no hay nadie en casa. «你家里有几个人？» es la pregunta clásica de la primera clase de familia.

LOS CARACTERES:
家: «casa, familia». 宀 (un techo con su cumbrera) con 豕 (un cerdo: se ven la cabeza, el lomo, las patas y la cola) debajo. En la China antigua el cerdo vivía bajo el mismo techo, o debajo de la casa; tener cerdos era señal de un hogar estable. (Algunos proponen que al principio era un templo con cerdos para sacrificios; se discute.)
里: «adentro». En tradicional hay dos caracteres: 裡 (o 裏) = 衣 (ropa) + 里: el forro, la cara de adentro de una prenda, «dentro». Y 里 solo = 田 (campo) + 土 (tierra): la aldea, y una medida de distancia (el «li», medio kilómetro). El simplificado usa 里 para las dos cosas; en Taiwán se escribe 家裡.
家里 = «dentro de la casa».

PRONUNCIACIÓN: jiālǐ, 1.er tono + 3.er tono. En el habla rápida 里 suele quedar neutro: jiāli.`,
en:`WHAT IT IS: "at home, in the family". It covers both the place and the people: "我家里有五个人" = there are five of us in my family. "家里没人" = nobody's home. "你家里有几个人？" is the classic question of the first family lesson.

THE CHARACTERS:
家: "home, family". 宀 (a roof with its ridge) with 豕 (a pig: you can see the head, back, legs and tail) under it. In ancient China the pig lived under the same roof, or under the house; owning pigs was a sign of a settled home. (Some suggest it was first a temple with sacrificial pigs; disputed.)
里: "inside". Traditional has two characters: 裡 (or 裏) = 衣 (clothing) + 里: the lining, the inner face of a garment, "inside". And 里 alone = 田 (field) + 土 (earth): the village, and a distance unit (the "li", half a kilometre). Simplified uses 里 for both; Taiwan writes 家裡.
家里 = "inside the home".

PRONUNCIATION: jiālǐ, 1st + 3rd tone. In fast speech 里 often goes neutral: jiāli.`,
zh:`是什么：家中，也指家人：你家里有几个人？
汉字：家＝宀（屋顶）+ 豕（猪），屋下养猪为家（一说祭祀，存疑）。里：繁体 裡＝衣+里，衣服内层；里＝田+土，村落、长度单位。台湾写「家裡」。
发音：jiālǐ，口语常读轻声。`}},
  {id:"fa2-68",s:"排行",py:"páiháng",es:"orden de nacimiento",en:"birth order",
   x:{
es:`QUÉ ES: «orden de nacimiento entre hermanos», el puesto que ocupás. Se usa con 第 o con 老: «我排行第二» / «我排行老二» = soy el segundo hijo. Pregunta: «你在家排行第几？» = ¿qué lugar ocupás entre tus hermanos?

LOS CARACTERES:
排: «poner en fila, ordenar». 扌 (mano, la forma de 手 al costado) + 非. 非 son dos alas o dos filas que se abren hacia lados opuestos; acá aporta el sonido (fēi → pái) y la idea de dos filas enfrentadas. Lo ves en 排队 (hacer fila) y 安排 (organizar).
行: un cruce de caminos visto desde arriba (la forma antigua era una cruz de calles, 卄 con pasillos). Con la lectura xíng significa «andar, estar bien» (行! = ¡dale!). Con la lectura háng significa «fila, hilera, rango»: 银行 (banco, «la fila de los comercios de plata»), 行业 (rubro). En 排行 se lee háng.
排行 = «el lugar en la fila» (de hermanos).

PRONUNCIACIÓN: páiháng, dos 2.os tonos, los dos suben. Cuidado de no decir xíng.`,
en:`WHAT IT IS: "birth order among siblings", your position. Used with 第 or 老: "我排行第二" / "我排行老二" = I'm the second child. Question: "你在家排行第几？" = what's your position among your siblings?

THE CHARACTERS:
排: "to line up, to arrange". 扌 (hand, the side form of 手) + 非. 非 is two wings or two rows opening in opposite directions; here it gives the sound (fēi → pái) and the idea of two facing rows. See 排队 (to queue) and 安排 (to arrange).
行: a crossroads seen from above (the old form was a cross of streets). Read xíng it means "to walk, to be OK" (行! = OK!). Read háng it means "row, line, rank": 银行 (bank, "the row of silver shops"), 行业 (line of business). In 排行 it is háng.
排行 = "the place in the row" (of siblings).

PRONUNCIATION: páiháng, two 2nd tones, both rising. Careful not to say xíng.`,
zh:`是什么：兄弟姐妹的出生顺序。我排行第二／老二。你在家排行第几？
汉字：排＝扌+ 非（表音，两行相对），排队；行：十字路口，读 háng 为行列（银行），读 xíng 为走。`}},
  {id:"fa2-69",s:"老几",t:"老幾",py:"lǎojǐ",es:"¿qué número de hijo sos?",en:"which child are you (in birth order)?",
   x:{
es:`QUÉ ES: «¿qué número de hijo sos?». 你是老几？ / 你在家排行老几？ Se contesta con el mismo sistema: 我是老大 / 老二 / 老么.

¡CUIDADO! Con 算 («contar como»), 你算老几？ («¿y vos qué número te creés que sos?») es una frase agresiva: «¿quién te creés que sos?». Para preguntar el orden de nacimiento con cortesía, mejor: 你排行第几？

LOS CARACTERES:
老: el dibujo de un anciano de pelo largo, encorvado, apoyado en un bastón. En 老大, 老二… es un prefijo de orden, no significa «viejo».
几: «¿cuántos?», para números que se esperan chicos (你有几个孩子？). El simplificado 几 era otro carácter, el dibujo de una mesita baja (茶几, mesa de té), prestado por el sonido. El tradicional 幾 = 𢆶 (dos hilitos de seda muy finos) + 戍 (una persona con una alabarda: un guardia). La idea: lo mínimo, lo apenas perceptible, «pocos», que el guardia vigila. Así 几 pregunta «¿cuántos (pocos)?».
老几 = «¿el número cuántos?».

PRONUNCIACIÓN: lǎojǐ, dos 3.os tonos seguidos: el primero se dice como 2.º tono (láojǐ).`,
en:`WHAT IT IS: "which child are you (in birth order)?". 你是老几？ / 你在家排行老几？ Answer with the same system: 我是老大 / 老二 / 老么.

CAREFUL! With 算 ("to count as"), 你算老几？ ("and what number do you think you are?") is aggressive: "who do you think you are?". To ask birth order politely, better: 你排行第几？

THE CHARACTERS:
老: a drawing of an old man with long hair, bent over, leaning on a cane. In 老大, 老二… it is an order prefix, not "old".
几: "how many?", for numbers expected to be small (你有几个孩子？). Simplified 几 was another character, a drawing of a low table (茶几, tea table), borrowed for the sound. Traditional 幾 = 𢆶 (two very fine silk threads) + 戍 (a person with a halberd: a guard). The idea: the slightest, barely perceptible, "few", watched by the guard. So 几 asks "how many (few)?".
老几 = "number how-many?".

PRONUNCIATION: lǎojǐ, two 3rd tones in a row: the first is said as a 2nd tone (láojǐ).`,
zh:`是什么：你是老几？＝你排行第几？回答：老大、老二、老么。注意：「你算老几？」是骂人的话。
汉字：老：长发老人拄杖，这里是前缀；几：简体本为小桌（茶几），借音；繁体 幾＝𢆶（细丝）+ 戍（持戈守卫），细微，少。
发音：两个三声，前者变二声。`}}
  ]
});
