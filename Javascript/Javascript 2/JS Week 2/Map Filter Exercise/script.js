// function doubleOddNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }

// 1.1
const myNumbers = [1, 2, 3, 4];

const doubleOddNumbers = myNumbers.filter((evenNum) => evenNum % 2 !== 0).map((num) => num * 2);

console.log(doubleOddNumbers); // ==> [2, 6]

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
];
const mondayEarnings = monday
  .filter((monday) => monday.duration > 119)
  .map((monday) => monday.duration / 60)
  .reduce((acc, amount) => acc + amount, 0);
console.log(mondayEarnings * 20);

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 1.0,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 1.0,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const payRate = 20;
const tuesdayEarnings = tuesday
  .filter((tuesday) => tuesday.duration > 119)
  .map((tuesday) => tuesday.duration / 60)
  .reduce((acc, amount) => acc + amount, 0);
console.log(tuesdayEarnings * payRate);

// const day = monday.concat(tuesday);
// const dayEarnings = day
//   .filter((day) => day.duration > 119)
//   .map((day) => day.duration / 60)
//   .reduce((acc, amount) => acc + amount, 0);
// console.log(dayEarnings(monday, tuesday));
