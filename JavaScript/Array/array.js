let a = [true,null,[2,"hy"],10,"hello"];
console.log(a);
// console.log(a[0]);
// console.log(a[2][0]);

// PUSH and POP is used to add and removing the element in last

a.push(100,2100);
console.log(a);
a.pop();
a.pop();
console.log(a);

// UNSHIFT and SHIFT is used to add and removing the element in begining

a.unshift("First","PySpider");
console.log(a);
a.shift()
a.shift();
console.log(a);

// SLICE is used to displaying selected values, we can give index number as a value

let b = a.slice(1,4);
console.log(b);

// SPLICE is used to removeing element, we can give index number as a value

a.splice(1,2,"hi","h2","h3");
a.splice(1,3);
console.log(a);






