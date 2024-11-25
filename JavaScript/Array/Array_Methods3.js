let cart = [
  {
    id: 306,
    name: "mobile",
    price: 20000,
  },
  {
    id: 307,
    name: "playstation",
    price: 50000,
  },
  {
    id: 308,
    name: "walet",
    price: 2000,
  }
]

// // ******************************************************

// let a = cart.filter((x) => {
//   // console.log(x.price > 500);
//   return x.price > 500;
// });
// console.log(a);

// // ******************************************************

// // ******************************************************

// let b = cart.map((x) => {
//   // console.log(x);
//   // console.log(x.name);
//   return x;
// });
// console.log(b);

// // ******************************************************

// // ******************************************************

// let c = cart.forEach((x) => {
//   // console.log(x);
//   // console.log(x.name);
//   return x;
// });
// console.log(c);

// ******************************************************

// ******************************************************

let total = cart.reduce((sum, x) => {
  return  sum = sum + x.price
}, 0)
console.log(total);


let arr = [12, 354, 554, 362, 562, 221, 610, 3, 16];
let a1 = arr.sort((a, b) => {         // Assecending
  return a - b;
})
console.log(a1);


let a2 = arr.sort((a, b) => {        // Decending
  return b - a;
})
console.log(a2);

// ******************************************************

