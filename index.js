/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


/*
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
// 👇 COMPLETE YOUR WORK BELOW 👇
*/

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/
function Person(paramName, paramAge) {
  this.name = paramName;
  this.age = paramAge;  
  this.stomach = [];
  }
    Person.prototype.eat = function (someFood){
          if(this.stomach.length < 10){
            this.stomach.push(someFood)            
          }
        }
    Person.prototype.poop = function(){
          this.stomach = []          
        }
    Person.prototype.toString = function(){
          return `${this.name}, ${this.age}`
        }


    
/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(paramModel, paramMilesPerGallon) {
  this.model = paramModel;
  this.milesPerGallon = paramMilesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}
Car.prototype.fill = function (gallons){
  this.tank += gallons;
  }




/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(names, ages, favoriteToy) {
  Person.call(this, names, ages);
  this.favoriteToy = favoriteToy;
}
Baby.prototype = Object.create(Person.prototype)

Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`; 
}



/* 
  TASK 4

  In your own words explain the four principles for the "this" keyword below:
  1. Window bidning is bad practice. (this) is on the global scope and calls all of javascript. Will return undefined in strict mode
  2. implicit binding only applies to objects with methods. It looks to the left of the . to invoke a function 
  3. explicit binding will use .call immediatly invokes the function and passes in arguments 1 at a time
  .apply immediatly invokes the function and passes in an array
  .bind we pass in the arguments 1 by 1 but does not immediatly invoke the function, instead it returns a brand new function that can be invoked later
  4. New binding, Uses the new key word constructs a new object and "this" points to it
  when a function is invoked as a construstor function using a 'new' object keyword "this" points to the new object thats created.
*/


///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
///////// END OF CHALLENGE /////////
if (typeof exports !== 'undefined') {
  module.exports = module.exports || {}
  if (Airplane) { module.exports.Airplane = Airplane }
  if (Person) { module.exports.Person = Person }
  if (Car) { module.exports.Car = Car }
  if (Baby) { module.exports.Baby = Baby }
}
