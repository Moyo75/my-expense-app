// Object Destructuring

// const person = {
//   name: "Andrew",
//   age: "23",
//   location: {
//     city: "Philadelphia",
//     temp: 88
//   }
// };

// const { name: firstName = "Anonymous", age } = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: tempurature } = person.location;
// if (city && tempurature) {
//   console.log(`It's ${tempurature} in ${city}`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "self-published" } = book.publisher;

// console.log(publisherName);

// Array Destructing

// const address = [
//   "1299 S Juniper Street",
//   "Philadelphia",
//   "Pennsylvania",
//   "19147"
// ];

// const [, city, state = "New York"] = address;

// console.log(`You're in ${city}, ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];

const [coffee, , mediumPrice] = item;

console.log(`A medium ${coffee} costs ${mediumPrice}.`);
