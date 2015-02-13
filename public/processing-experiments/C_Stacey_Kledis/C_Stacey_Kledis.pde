// Made by Stacey Kledis on 2/12/2014

int i = 0;

void setup(){
  frameRate(30);
  size(500, 500);
}

void draw (){
  if(mousePressed == true){
    float angle = i * TWO_PI / 40;
    float x = mouseX + cos(angle) * 100;
    float y = mouseY + sin(angle) * 100;


    stroke(100, 100, 100);
    line(mouseX, mouseY, x, y);
    noStroke();
    fill(x, y, 200);
    ellipse(x, y, 4, 4);
    ellipse(mouseX, mouseY, 4, 4);
    i++;
  }
}
