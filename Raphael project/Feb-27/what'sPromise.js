//A promise is an asynchronous function,
//which is used when fetching data from a server and doing a
//parallel process. a promise has resolve and reject,
//the first one is executed when a process is a success,
//the other one does when failing.

var promise1 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve();
  }, 300);
});

var promise2 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve();
  }, 1000);
});

var promise3 = new Promise(function(resolve, reject) {
  setTimeout(function() {
    resolve();
  }, 500);
});

Promise.all([promise1, promise2, promise3]).then(function() {
  console.log("Fourth");
});

console.log("First");

setTimeout(function() {
  console.log("Third");
}, 600);

console.log("Second");
