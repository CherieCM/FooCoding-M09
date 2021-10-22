//E1

console.log("Hello World!");
console.log("Hallo, Welt! // German");
console.log("Hej, Verden! // Danish");
console.log("Hej, Värld! // Swedish");

//E2

console.log("I'm Awesome");

//E3

let x = 10;

console.log("the variable of x should be: 10");
console.log(x);

let x = 7;

console.log("the variable of x should be: 7");

console.log(x);

/* the new declared integar does not show because the variable
has already been declared in the previous line*/

//E4

let y = "2";

console.log("the variable of y should be: 2");

console.log(y);

let y = "4";

console.log("the variable of y should be: 4");

console.log(y);

/*the new declared integar does not show because the variable 
has already been declared in the previous line */

//E5

const z = 7.25;
console.log(z);

const a = 7;
console.log(a);

a > z;

let c = z;

console.log(c);

//E6

let dramaMovies = [];

console.log("The array will be empty for 'dramaMovies'");

console.log(dramaMovies);

let favoritePets = ["turtle", "rabbit", "dog", "fish"];
console.log(favoritePets);

const newAnimal = [...favoritePets, "baby pig"];

console.log(newAnimal);

//E7

let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//E8

let high = 50;
console.log("The value of my variable is: " + high);
console.log(typeof high);

let low = 10;
console.log("The value of this variable is: " + low);
console.log(typeof low);

let middle = 25;
console.log("The value of this variable is: " + middle);
console.log(typeof middle);

let highMiddle = 35;
console.log("The value of this variable is: " + highMiddle);
console.log(typeof highMiddle);

if (high === low) {
  console.log("Same Type");
} else {
  console.log("Not The Same Type");
}

if (middle === highMiddle) {
  console.log("Same Type");
} else {
  console.log("Not The Same Type");
}

//E9

let x = 7;
x = x % 3;

console.log("The symbol returns the remainder");
console.log("of how many times the lessor number");
console.log("can go into the greater number.");

//E10

let arr = ["Chair", "Horse", 100, 75, "Orange"];
console.log(arr);

console.log(
  "An array can include numbers and strings because that is the function of an array to allow this"
);

6 / 0 === 10 / 0;
console.log(6 / 0 === 10 / 0);

console.log(
  "With the strict equality operator, it is possible to compare infinities. There may not be a precise answer but it is possible to compare the two infinities because the strict operater gives us the ability to do so. "
);
