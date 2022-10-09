//JS objects are like real life tangible objects

const productImgURL = "https://images.pexels.com/photos/3001822/pexels-photo-3001822.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1"


//Objects and properties

/**Syntax objectName.propertyName */

//Example 1 using object initalizer and props

// case senstitive and can be any type of variable
//myProduct.name = 'BasketBall';
//myProduct.category = 'Fitness Equipment';
//myProduct.price = 25;
//myProduct.image = productImgURL;

//console.log(myProduct);
const myProduct = new Object(); //object initializer constructor

//EXAMPLE 2
//ALSO PROPERTIES CAN BE ACCESSED USING BRACKET NOTATION
//myProduct['name'] = 'BasketBally BracketNotation'
//myProduct['category'] = 'Fitness Equipment BracketNotation';
//myProduct['price'] = 30;
//myProduct['image'] = productImgURL;



console.log(myProduct);

// 

//EXAMPLE 3
//const productOneLine = {name: 'Basket Ball 1Line',category: 'Fitness Equipment 1 Line',price: 'price', image: productImgURL};



//const productOneLine = {name: 'BasketBall in 1Line',category: 'Fitness Equipment in 1 Line',price: 35,image: productImgURL};

//console.log(productOneLine);




//Example 4 like in prev lesson

const myProductAlt = {
    name: 'BasketBall Alt',
    category: 'Fitness Equipment Alt',
    price: 40,
    image: productImgURL,

}

//console.log(myProductAlt);




//EXAMPLE 3

// four variables are created and assigned in a single go,
// separated by commas
const myObj = {},
      str = 'myString',
      rand = Math.random(),
      anotherObj = {};

// Now, creating additional properties.
myObj.type              = 'Dot syntax for a key named type';
myObj['date created']   = 'This key has a space';
myObj[str]              = 'This key is in variable str';
myObj[rand]             = 'A random number is the key here';
myObj[anotherObj]       = 'This key is object anotherObj';
myObj['']               = 'This key is an empty string';

//console.log(myObj);
//console.log(myObj.myString);

/*
[Log] Object
    : "This key is an empty string"
    0.8916485437228595: "A random number is the key here"
    [object Object]: "This key is object anotherObj"
    date created: "This key has a space"
    myString: "This key is in variable str"
    type: "Dot syntax for a key named type"
*/
// notice that in the log, the order of the properties listed is not the same as the order they were created.

// [Log] This key is in variable str









//Example 5 


/**
 * function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

 */


  
  
  const myCar = new Car('Eagle', 'Talon TSi', 1993);



  const kenscar = new Car('Nissan', '300ZX', 1992);
  const vpgscar = new Car('Mazda', 'Miata', 1990);
  



  function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  
  const randPerson = new Person('Rand McKinnon', 33, 'M');
  const ken = new Person('Ken Jones', 39, 'M');
  

  function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    //console.log(owner);

  }


  const car1 = new Car('Eagle', 'Talon TSi', 1993, randPerson);
  const car2 = new Car('Nissan', '300ZX', 1992, ken);
  
function printCarOwner(){
    console.log("Car 1 & its Owner is" + JSON.stringify(car1));
    console.log("Car 2 & its Owner is" + JSON.stringify(car2));

}


/***
 * 
 * References
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#constructor
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
 */


