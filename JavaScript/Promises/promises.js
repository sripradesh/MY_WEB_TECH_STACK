
// STRUCTURE OF CODE

// let flag = false;
// let data = new promises((res, rej) => {
//   if (flag) {
//     console.log("THE RESPONSE IS ACCEPTED");
//     console.log(res);
//   } else {
//     console.log("INVALID RESPONSE");
//     console.log(rej);
//   }
// });

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((res) => {
    console.log(res)
    res.json()
      .then((data) => {
        console.log(data)
      })
      .catch((inv) => {
        console.log(inv)
      })
  })
  .catch((err) => {
    console.log(err)
  })
