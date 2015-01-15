# Generative Art 101

---

# Show Example Here

---

# Show Example Here

---

# Show Example Here

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

### need a photo of a grid here

![](http://fc09.deviantart.net/fs71/f/2011/094/d/a/drawing_grid_by_blossomhillstables-d3d70y5.png)

^ show how to create folder and save a file on your desktop

---

# Draw a Rectangle

```java
  rect( x, y, width, height );
```

^ emphasize the parentheses and the semicolon
^ we'll use the term "parens", and "semis"
^ the whole thing together is called a function

---

# Draw a Rectangle

```java
  rect(10, 10, 10, 10);
```

^ draw some rectangles on screen and change the numbers

---

# Draw an Ellipse

```java
  ellipse(?, ?, ?, ?);
```

^ draw some ellipses

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

^ notice the importance behind the order of operations
^ you have to pick up your crayola before you can draw

---

# Draw!

```java
  void draw(){
    rect(20, 20, 50, 50);
  }
```

^ Ignore the void, ignore the parens, just put everything in the curlys
^ But there's no animation, WHAT IS ANIMATION?!?!

---

# Detecting Input

```java
  void draw(){
    rect(mouseX, 20, 50, 50);
  }
```

^ Emphasize how this is a variable
^ the thing itself isn't moving, it's just getting drawn a bunch of times
^ Guess how to get mouse y
^ What happens if you flip x and y
^ What happens if you use mouseX for the width

---

# Clearing the Screen
```java
  void draw(){
    background(0, 0, 0);
    rect(mouseX, mouseY, 50, 50);
  }
```

^ Introduce the background method
^ what if you put one of your variables into the background to control the color

---

# Comments
``` java
  void draw(){
    // this is a comment and won't execute
    // rect(mouseX, mouseY, 50, 50);
  }
```

---


# The Setup Function
```java
  void setup(){
    // runs one time
  }

  void draw(){
    // re-runs all the time
  }
```

---

# The Setup Function
```java
  void setup(){
    size(500, 500);
    background(0, 0, 0);
  }
```

---

## if something is something (or not something), then do something, otherwise do something else

---

# if something...

```java
  if(mousePressed == true){
    rect(mouseX, mouseY, 50, 50);
  }
```

^ we test equality with ==
^ mousePressed is yes, or true

---

# otherwise...

```java
  if(mousePressed == true){
    rect(mouseX, mouseY, 50, 50);
  } else{
    // do something else
  }
```

^ Challenge: how would you clear the screen if the mouse is pressed?

---

# >, >=, <, <=, !=, ==

^ Challenge: can you draw a circle if the mouse is pressed, otherwise draw squares

---

# Random Numbers

```java
  random(low, high);
```

^ we have another function
^ Challenge: can you make a drawing program which uses random sizes
^ Challenge: what about random colors?

---

# Random Numbers

```java
  rect(mouseX, mouseY, random(10, 50), random(10, 50));
```

---

# Using Variables

```java
  float diameter = random(10, 50);
  ellipse(mouseX, mouseY, diameter, diameter);
```

^ just ignore float, just the way it is
^ it's a storage container, just like mouseX

---

# Maths
## + - / *

```java
  rect(mouseX + 10, mouseY + 10, 10, 10);
```

^ Challenge: can you make a drawing program which places shapes on screen at their center point rather than top left corner?

---

# Images

```java
  PImage img;

  void setup(){
    img = loadImage("santa-steve.jpg");
  }

  void draw(){
    image(img, mouseX, mouseY, 300, 200);
  }
```

^ show how to download and save an image
^ don't need to really understand classes, but just know you need to do this to load an image

---

# Loops

```java
  for(int i=0; i<10; i++){
    // what's i?
  }
```

^ define what is less than
^ define what is ++
^ just ignore the int for now

---

# Loops

```java
  for(int i=0; i<10; i++){
    rect(i*50, 50, 50, 50);
  }
```

^ How would you draw a vertical grid of boxes
^ Challenge: Can you draw a bulls eye?

---

# Some other useful functions

```java
size(500, 500, P2D);

blendMode(SCREEN);

smooth();

stroke(255, 0, 255);

noStroke();
```

^ Clarify the use of P2D and blend mode

---

# Ok, Done

---
