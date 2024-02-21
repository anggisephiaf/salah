let j;
function setup() {
 createCanvas(800,400);
 background(255);

 y=585;
 x=610;
 j=0;
}

function draw() {
  background(255)
  stroke(0)
  line(399,0,399,399)

   //warna badan
   fill(43,191,254)
   beginShape()
   vertex(163,166)
   vertex(120,145)
   vertex(105,160)
   vertex(143,196)
   vertex(143,255)
   vertex(254,255)
   vertex(254,193)
   vertex(252,196)
   vertex(290,160)
   vertex(281,145)
   vertex(238,166)
   endShape()

  //lingkeran muka biru
  fill(43,191,254)
  ellipse(200,100,150,150)
  //lingkeran putih
  fill(248,248,255)
  ellipse(200,110,130,130)

  //mata putih
  fill(248,248,255)
  ellipse(180,60,35,40)
  ellipse(215,60,35,40)
  //mata item
  fill(0,0,0)
  ellipse(185,65,15,18)
  ellipse(210,65,15,18)
  //mata putih kecil
  fill(248,248,255)
  ellipse(185,65,6,8)
  ellipse(210,65,6,8)

  //hidung merah
  fill(255,0,0)
  ellipse(198,82,20,20)

  //garis senyum vertikal
  fill(0,0,0)
  line(198,92,198,130)

  //mulut
  fill(250,128,114)
  ellipse(198,140,30,35)

  //kumis kiri 
    //atas
  fill(0,0,0)
  line(170,90,133,68)
    //tengah
  line(170,100,128,105)
    //bawah
  line(170,110,130,134)
  //kumis kanan
    //atas
  line(225,90,265,68)
    //tengah
  line(225,100,270,105)
    //bawah
  line(225,110,272,134)

  //badan bulet putih
  fill(248,248,255)
  ellipse(200,200,80,70)

  //kantong ajaib
  arc(200,205,50,40,-0.1,179.2)
  line(175,204,225,204)

  //tali merah
  fill(255,0,0)
  ellipse(200,170,90,10)

  //lonceng kuning
  fill(253,215,3)
  ellipse(200,180,25,25)
  //garis horizontal lonceng
  line(190,175,210,175)
  line(187,178,213,178)
  //buletan kecil lonceng
  ellipse(200,182,5,5)
  //garis vertikal lonceng
  line(200,184,200,193)

  //badan
    //tangan kiri
  line(163,166,120,145)
  line(143,196,105,160)
    //tangan kanan
  line(238,166,281,145)
  line(252,196,290,160)
    //perut kiri
  line(143,193,143,255)
    //perut kanan
  line(254,193,254,255)
    //kaki kiri
  fill(248,248,255)
  ellipse(160,255,70,30)
    //kaki kanan
  ellipse(231,255,70,30)
   
    //Tangan bulet kiri
  fill(248,248,255)
  ellipse(107,145,30,30)
  ellipse(288,145,30,30)


//gambar sebelah kanan yang bergerak

   //warna badan
   fill(43,191,254)
   beginShape()
   vertex(563,166)
   vertex(520,145)
   vertex(505,160)
   vertex(543,196)
   vertex(543,255)
   vertex(654,255)
   vertex(654,193)
   vertex(652,196)
   vertex(690,160)
   vertex(681,145)
   vertex(638,166)
   endShape()

  //lingkeran muka biru
  fill(43,191,254)
  ellipse(600,100,150,150)
  //lingkeran putih
  fill(248,248,255)
  ellipse(600,110,130,130)

  //mata putih
  fill(248,248,255)
  ellipse(580,60,35,40)
  ellipse(615,60,35,40)
  //mata item
  fill(0,0,0)
  var y = 585 + 6 * Math.sin(PI/70*j)
  j+=1
  ellipse(y,65,15,18)
  var x = 610 + 6 * Math.sin(PI/70*j)
  j+=1
  ellipse(x,65,15,18)
  //mata putih kecil
  fill(248,248,255) 
  ellipse(y,65,6,8)
  ellipse(x,65,6,8)

  //hidung merah
  fill(255,0,0)
  ellipse(598,82,20,20)

  //garis senyum vertikal
  fill(0,0,0)
  line(598,92,598,130)

  //mulut
  fill(250,128,114)
  ellipse(598,140,30,35)

  //kumis kiri 
    //atas
  fill(0,0,0)
  line(570,90,533,68)
    //tengah
  line(570,100,528,105)
    //bawah
  line(570,110,530,134)
  //kumis kanan
    //atas
  line(625,90,665,68)
    //tengah
  line(625,100,670,105)
    //bawah
  line(625,110,672,134)

  //badan bulet putih
  fill(248,248,255)
  ellipse(600,200,80,70)

  //kantong ajaib
  arc(600,205,50,40,-0.1,179.2)
  line(575,204,625,204)

  //tali merah
  fill(255,0,0)
  ellipse(600,170,90,10)

  //lonceng kuning
  fill(253,215,3)
  ellipse(600,180,25,25)
  //garis horizontal lonceng
  line(590,175,610,175)
  line(587,178,613,178)
  //buletan kecil lonceng
  ellipse(600,182,5,5)
  //garis vertikal lonceng
  line(600,184,600,193)

  //badan
    //tangan kiri
  line(563,166,520,145)
  line(543,196,505,160)
    //tangan kanan
  line(638,166,681,145)
  line(652,196,690,160)
    //perut kiri
  line(543,193,543,255)
    //perut kanan
  line(654,193,654,255)
    //kaki kiri
  fill(248,248,255)
  ellipse(560,255,70,30)
    //kaki kanan
  ellipse(631,255,70,30)
   
    //Tangan bulet kiri
  fill(248,248,255)
  ellipse(507,145,30,30)
  ellipse(688,145,30,30)

}
