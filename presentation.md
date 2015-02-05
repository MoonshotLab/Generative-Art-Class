# Generative Art 101

---

![inline](http://ballmeripsum.com/img/ballmer.jpg)

---

![inline](http://www.kaicheng.ca/images/ballmer_peak.png)

---

![](presentation-imagery/example-1.png)

^ - Create static imagery
- Lissajous Points, with all points connected, it's an orbital system

---

![](presentation-imagery/example-2.mov)

^ - Create movies
- Generate noise and translate it into direction

---

![](presentation-imagery/example-3.mov)

^ - Create interactive pieces
- Mouse position determines length and randomness of line
- How is it possible to take semi colons, equal signs and a bunch of curly brackets to make what you just saw?

---

## programming = instructions

---

# Draw a Rectangle

* How wide?
* To what height?
* Where?
* What's a rectangle?

---

# Draw a Rectangle

* It's called **rect**
* It needs an **x** coordinate
* It needs a **y** coordinate
* It needs a **width**
* It needs a **height**

---

# Grids

## x ↔
## y ↕

---

![fit](presentation-imagery/grid.png)

---

# Draw a Rectangle

```java
  rect( x, y, width, height );
```

^ - emphasize the parentheses and the semicolon
- we'll use the term "parens", and "semis"
- the whole thing together is called a function

---

# Draw a Rectangle

```java
  rect(10, 10, 10, 10);
```

^ - draw some rectangles on screen and change the numbers
- go over this pattern in detail again
- Use the stop button to rebuild your program
- Use command + R as a quick refresh
- This is called a sketch, or program

---

# A Bigger Canvas

```java
  size(500, 500);
```

---

# Documentation

---

# Draw an Ellipse

```java
  ellipse(?, ?, ?, ?);
```

^ - draw some ellipses

---

# Other Shapes
* Lines
* Triangles
* Other Polygons

---

# Choose a Color

```java
  fill( Red, Green, Blue );
```

---

# Choose a Color

```java
  fill(255, 0, 0);
```

---

# Choose a Color

```java
  fill(255, 0, 0);

  rect(0, 0, 20, 20);

  fill(0, 0, 255);

  ellipse(20, 20, 20, 20);
```

^ - notice the importance behind the order of operations
- you have to pick up your marker before you can draw

---

# Structure

```java
  void setup(){

  }

  void draw(){

  }
```

^ - Make a new Sketch
- Ignore the void, ignore the parens, just put everything in the curlys

---

# Draw!

```java
  void setup(){
    size(500, 500);
  }

  void draw(){
    rect(20, 20, 50, 50);
  }
```

^ - Indentation is important!
- But there's no animation, WHAT IS ANIMATION?!?!

---

# Detecting Input

```java
  void setup(){
    size(500, 500);
  }

  void draw(){
    rect(mouseX, 20, 50, 50);
  }
```

^ - Emphasize how this is a variable
- the thing itself isn't moving, it's just getting drawn a bunch of times
- Guess how to get mouse y
- What happens if you flip x and y
- What happens if you use mouseX for the width

---

# Detecting Input

```java
  void setup(){
    size(500, 500);
  }

  void draw(){
    fill(mouseX, 0, 0);
    rect(mouseX, 20, 50, 50);
  }
```

^ What happens if you make one of the color options mouseX?
- What about background

---

# Clearing the Screen
```java
  void setup(){
    size(500, 500);
  }

  void draw(){
    background(0, 0, 0);
    fill(255, 0, 0);
    rect(mouseX, mouseY, 50, 50);
  }
```

^ - Introduce the background method
- what if you put one of your variables into the background to control the color

---

# Comments
``` java
  void draw(){
    // this is a comment and won't execute
    // rect(mouseX, mouseY, 50, 50);
  }
```

---

# if something...

```java
  void setup(){
    size(500, 500);
  }

  void draw(){
    if(mousePressed == true){
      stroke(100, 100, 100);
      line(mouseX, mouseY, 250, 250);
      noStroke();
      ellipse(mouseX, mouseY, 10, 10);
    }
  }
```

^ - create a new sketch
- we test equality with ==
- mousePressed is yes, or true

---

# >, >=, <, <=, !=, ==

---

# Random Numbers

```java
  random(low, high);
```

---

# Random Numbers

```java
  void setup(){
    size(500, 500);
  }

  void draw(){
    ellipse(random(0, 500), random(0, 500), 10, 10);
  }
```

^ - Make a new sketch
- we have another function
- Challenge: can you make it use random colors?
- show what it looks like if you use line with mouse positioned
- show what random sized ellipses look like

---

# Using Variables

```java
  void setup(){
    size(500, 500);
  }

  void draw(){
    float diameter = random(10, 50);
    ellipse(mouseX, mouseY, diameter, diameter);
  }
```

^ - just ignore float, just the way it is
- it's a storage container, just like mouseX

---

# Using Variables

```java
  void setup(){
    size(500, 500);
    background(0, 0, 0);
    noStroke();
  }

  void draw(){
    float xPos = random(0, 500);
    float yPos = random(0, 500);

    fill(xPos, yPos, 0);
    rect(xPos, yPos, 10, 10);
  }
```

^ - what if you change the last number in fill to 255

---

# Using Variables

```java
  void setup(){
    size(500, 500, P2D);
    background(0, 0, 0);
    noStroke();
    blendMode(SCREEN);
  }

  void draw(){
    float xPos = random(0, 500);
    float yPos = random(0, 500);

    fill(xPos, yPos, 0);
    rect(xPos, yPos, 30, 30);
  }
```

^ Add blend mode, use P2D drawing
- make your shapes bigger

---

# Using Variables

```java
  float lastXPos = 0;
  float lastYPos = 0;

  void setup(){
    frameRate(10);
    size(500, 500, P2D);
    background(0, 0, 0);
    blendMode(SCREEN);
  }

  void draw(){
    float xPos = random(0, 500);
    float yPos = random(0, 500);

    noStroke();
    fill(xPos, yPos, 0);
    rect(xPos, yPos, 20, 20);

    stroke(xPos, yPos, 0);
    line(lastXPos, lastYPos, xPos, yPos);

    lastXPos = xPos;
    lastYPos = yPos;
  }
```

^ - Set up lastXPos and lastYPos
- Adjust frame rate
- Capture xPos and yPos on draw

---

# Maths
## + - / *

```java
  float lastXPos = 0;
  float lastYPos = 0;

  void setup(){
    frameRate(10);
    size(500, 500, P2D);
    background(0, 0, 0);
    blendMode(SCREEN);
  }

  void draw(){
    float xPos = random(0, 500);
    float yPos = random(0, 500);

    noStroke();
    fill(xPos, yPos, 0);
    rect(xPos, yPos, 20, 20);

    stroke(xPos, yPos, 0, 100);
    line(lastXPos + 10, lastYPos + 10, xPos + 10, yPos + 10);

    lastXPos = xPos;
    lastYPos = yPos;
  }
```

^ Add some math for the line positioning

---


# Images

```java
  PImage img;

  void setup(){
    size(500, 500);
    img = loadImage("steve.jpg");
  }

  void draw(){
    image(img, mouseX, mouseY, 200, 200);
  }
```

^ - show how to create folder and save a file on your desktop
- show how to download and save an image
- don't need to really understand classes, but just know you need to do this to load an image

---

# Loops

```java
  for(int i=0; i<10; i++){
    // what's i?
  }
```

^ - define what is less than
- define what is ++
- just ignore the int for now

---

# Loops

```java
  // do something awesome here
```

---

# OK DONE
