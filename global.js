// console.log(global);

setTimeout(() => {
  console.log("set Time out");
  clearInterval(interval);
}, 3000);

const interval = setInterval(() => {
  console.log("set interval...")
}, 500);

console.log(__dirname);
console.log(__filename);
