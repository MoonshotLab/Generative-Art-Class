# Generative Art 101

^ This is a presenter note

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

---

# Draw a Rectangle

```java
  rect( x, y, width, height );
```

^ Emphasize the parentheses and the semicolon
^ We'll call those "parens"
^ We call the whole thing, a function
^ Draw a few more

---


# Draw a Rectangle

```java
  rect(10, 10, 10, 10);
```
---

# Draw an Ellipse

```java
  ellipse(?, ?, ?, ?);
```

^ Have them draw a few shapes

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

^ What are the min and max numbers

---

# Choose a Color

```java
  fill(255, 0, 0);

  rect(0, 0, 20, 20);

  fill(0, 0, 255);

  ellipse(20, 20, 20, 20);
```

^ Make a note of the order of operations

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
    background(0, 0, 0);
  }
```

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

# Maths
## + - / *

```java
  rect(mouseX + 10, mouseY + 10, 10, 10);
```

^ Guess how to place the center of the squares at your mouse position

---

# Images

```java
  PImage img;

  void setup(){
    img = loadImage("myFace.jpg");
  }

  void loop(){
    image(img, mouseX, mouseY, 300, 200);
  }
```

^ loading in a library

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
^ Challenge - can you draw a bulls eye?

---

# Ok, Done

---
