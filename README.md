# C.A.G Geometry Calculator
My solution for the C.A.G Geometry Calculator.

## About
This node.js module provides functions to calculate the circumference and area of some simple geometric objects.

The four implemented objects and their parameters are:

* `triangle`, parameterized by `base` and `height`. (A right triangle, where `base` and `height` are the sides closest to the right angle)
* `rectangle`, parameterized by `base` and `height`
* `square`, parameterized by `side`
* `circle`, parameterized by `radius`.

## Getting started

TODO

## API
The API for these functions are:

### Circumference
* `geometry.circumference.triangle(base,height)`
* `geometry.circumference.rectangle(base,height)`
* `geometry.circumference.square(side)`
* `geometry.circumference.circle(radius)`

### Area
* `geometry.area.triangle(base,height)`
* `geometry.area.rectangle(base,height)`
* `geometry.area.square(side)`
* `geometry.area.circle(radius)`.

For the above functions, no type checking or argument validation is performed.

### Total
Additionally, the module can compute the circumference and area of multiple objects through the functions

* `geometry.circumference.total(objectList)`
* `geometry.area.total(objectList)`.

The `objectList` argument is a list of objects, for which the property `type` describes the object to calculate for, 
together with properties corresponding to the parameters.

### Examples
```js
var geometry = require("cag-geometry");

// Area of total
var val = geometry.area.total([
   { type:'rectangle', base:2, height:4 }, // 8
   { type:'triangle',  base:3, height:4 }, // 6
   { type:'square',    side:3           }, // 9
   { type:'circle',    radius:2         }, // 4*PI
   { type:'rectangle', base:1, height:1 }, // 1
]); // == 24 + 4*Math.PI (approximately 36.56637)

// Area of triangle
var val2 = geometry.area.triangle(3,4); // == 6

// Circumference of rectangle
var val3 = geometry.circumference.rectangle(3,4); // == 14
```


## Running the tests

The test scripts are located in `test/geometry.js`, and are run with the command
```bash
$ npm test
```
