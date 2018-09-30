function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
   var x=300 * cos(frameCount/100.0 * 4);
   var y=300 * sin(frameCount/100.0 * 4);
   var x2=150 * cos(frameCount/100.0);
   var y2=150 * sin(frameCount/100.0);
   translate(width/2,height/2);
   var col=lerpColor(color(250,20,20),color(10,00,255),frameCount/630);
   stroke(col);
   line(x,y,x2,y2);

  if(frameCount == 630){
    noLoop();
  }

 translate(-480,-180);
 var x3=cos(frameCount/30)*60;
 var y3=sin(frameCount/90)*130;
 stroke(random(120,230),random(50,100),random(180,230),random(0,150));
 line(0,0,x3,y3);

 translate(480*2,180*2);
 var x4=cos(frameCount/10)*100;
 var y4=sin(frameCount/10)*100;
 var x41=cos(frameCount/90)*60;
 var y41=sin(frameCount/90)*60;
 stroke(random(180,230),random(50,100),random(120,230),random(0,150));
 line(x4,y4,x41,y41);

 translate(-480*2,0);
 var x5=cos(frameCount/30)*70;
 var y5=sin(frameCount/60)*120;
 var x6=cos(frameCount/40)*130;
 stroke(random(90,130),random(50,80),random(170,230),random(0,150));
 line(x6,0,x5,y5);

 translate(480*2,-180*2);
 var x7=cos(frameCount/30)*70;
 var y7=sin(frameCount/30)*70;
 var x8=cos(frameCount/50)*110;
 var y8=sin(frameCount/50)*110;
 stroke(random(90,130),random(50,100),random(170,230),random(0,150));
 line(x7,y7,x8,y8);
}
