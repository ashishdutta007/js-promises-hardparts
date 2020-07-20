// Challenge 1
function sayHello() {
  setTimeout(function() {
    console.log("Hello!");
  }, 1000);
}
// Uncomment the line below when ready
// sayHello(); // should log "Hello" after 1000ms

// Challenge 2
var promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Resolved"), 1000);
});
promise1.then(val => console.log(val));
// console.log('promise1: ', promise);
// Should print out "Resolved!"

// Challenge 3
var promise2 = new Promise((resolve, reject) => {
  reject("Rejected");
});
promise2.catch(val => console.log(val));
// Should print out "Reject!"

// Challenge 4
var promise3 = new Promise((resolve, reject) => {
  resolve("Promise has been resolved");
});

// Uncomment the lines below when ready
promise3.then(() => console.log("Promise has been resolved"));
console.log("I'm not the promise!");

// Challenge 5
function delay() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Promisify setTimeout");
      resolve();
    }, 1000);
  });
}
// This code should log "Hello" after 1000ms
delay().then(sayHello);

// Challenge 6
var secondPromise = new Promise((resolve, reject) => {
  resolve("Second");
});
var firstPromise = new Promise((resolve, reject) => {
  resolve(secondPromise);
  // return secondPromise
});

firstPromise
  .then(val => console.log("Hauu", val))
  .then(val => console.log("Nee Hauu", val));

// Challenge 7
const fakePeople = [
  { name: "Rudolph", hasPets: false, currentTemp: 98.6 },
  { name: "Zebulon", hasPets: true, currentTemp: 22.6 },
  { name: "Harold", hasPets: true, currentTemp: 98.3 }
];

const fakeAPICall = i => {
  const returnTime = Math.floor(Math.random() * 1000);
  return new Promise((resolve, reject) => {
    if (i >= 0 && i < fakePeople.length) {
      setTimeout(() => resolve(fakePeople[i]), returnTime);
    } else {
      reject({ message: "index out of range" });
    }
  });
};

function getAllData() {
  // CODE GOES HERE
}
