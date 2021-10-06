// 1. Strings

let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log(myString);
console.log(myString.length);
let myNewString = myString.replaceAll(",", " ");
myNewString;

// 2. Arrays

let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
console.log(favoriteAnimals);

favoriteAnimals.push("turtle");
console.log(favoriteAnimals);

favoriteAnimals.splice(1, 0, "meerkat");
console.log("the new value of the array will be 5");
console.log(favoriteAnimals);

let arrayLength = favoriteAnimals.length;
console.log("The array has a length of " + favoriteAnimals.length);

favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);

const index = favoriteAnimals.indexOf("meerkat");
console.log("The item you are looking for is at " + index);

//Javascript

// 1.

function sum(a, b, c) {
  return a + b + c;
}
let sumUp = sum(2, 3, 4);

sumUp;

//OR

function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(2, 4, 8));

// 2.

function colorcar(color) {
  return console.log("A " + color + " car.");
}
colorcar("blue");

// 3.

const student = {
  Name: "M. Walter",
  Age: "22",
  Major: "Chemistry",
  City: "New Hampshire",
};

function studentInfo(student) {
  const { Name, Age, Major, City } = student;
  console.log(student);
}

studentInfo(student);

// 4.

function vehicleType(color, x) {
  if (x === 1) return color + " car";
  if (x === 2) return color + " motorbike";
  else return "undefined " + "vehicle";
}
vehicleType();

// 5.

console.log(3 === 3 ? "yes" : "no");

// 6. COMEBACK TO!!!!!!

function vehicle(color, x, age) {
  if (x === 1 && age <= 4) return color + " new car";
  if (x === 1 && age >= 5) return color + " used car";
  if (x === 2 && age <= 4) return color + " new motorbike";
  if (x === 2 && age >= 5) return color + " used motorbike";
}
vehicle("blue", 1, 5);

// 7.
let vehicles = ["motorbike", "carriage", "scooter", "bike"];
console.log(vehicles);

// 8.

let vehicles = ["motorbike", "carriage", "scooter", "bike"];
vehicles[2];

// 9.

let vehicles = ["motorbike", "carriage", "scooter", "bike"];
function vehicle(color, x, age) {
  if (x === 1 && age === 3)
    return console.log("a " + color + " new" + vehicles[3]);
  if (x === 1 && age <= 4) return color + " new car";
  if (x === 1 && age >= 5) return color + " used car";
  if (x === 2 && age <= 4) return color + " new motorbike";
  if (x === 2 && age >= 5) return color + " used motorbike";
}

vehicle("green", 1, 3);

// 10.

let vehicles = ["motorbikes", " cars", " scooters", " bikes"];
const adMessage = "Amazing Joe's Garage, we service ";
function vehicleAd() {
  for (let i = 0; i < vehicles.length - 2; i++) {
    if ((i = vehicles.length - 2))
      return console.log(
        adMessage +
          vehicles[0] +
          "," +
          vehicles[1] +
          "," +
          vehicles[2] +
          "," +
          " and" +
          vehicles[3] +
          "."
      );
  }
}

vehicleAd();

// 11.

let vehicles = ["motorbikes", " cars", " scooters", " bikes"];
const adMessage = "Amazing Joe's Garage, we service ";
function vehicleAd() {
  for (let i = 0; i < vehicles.length - 2; i++) {
    if ((i = vehicles.length - 2))
      return console.log(
        adMessage +
          vehicles[0] +
          "," +
          vehicles[1] +
          "," +
          vehicles[2] +
          "," +
          " and" +
          vehicles[3] +
          "."
      );
  }
}
vehicles.push("mopeds");

vehicleAd();

//12.

let newObject = {};

// 13.

let newObject = {
  Javascript: "Sahin",
  ResponsiveCSS: "Seif",
  HTMLCSS: "Ildana",
  SVG: "Oleksander",
  HTML: "Claudio",
};

// 14.

let newObject = {
  Javascript: "Sahin",
  ResponsiveCSS: "Seif",
  HTMLCSS: "Ildana",
  SVG: "Oleksander",
  HTML: "Claudio",
};

// 15.

var x = [1, 2, 3];
var y = [1, 2, 3];
var z = y;
console.log("I think that it some of the comparisons will come back true.");
console.log(x == y);
console.log(x === y), console.log(z == y), console.log(z == x);

// 16.

let o1 = { foo: "bar" };
let o2 = { foo: "bar" };
let o3 = o2;

o2 === o3;
o1 === o3;
o1 === o2;

// changing o2 would change/affect o3.
// changing o1 would not affect o3 because they are not connected.
// the order does matter between o3 = o2 or o2 = o3.
// because o2 has already been declared.

// 17.

let bar = 42;
typeof typeof bar;

/*typeof will always return 'string' and so using typeof (typeof bar) will convert the value to a string. */
