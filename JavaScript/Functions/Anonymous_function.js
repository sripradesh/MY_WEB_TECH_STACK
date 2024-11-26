
// Anonymous function

let Anonymous = function (a, b) {
    return a + b;
};
console.log(add(5, 3)); 


// Function without expression

(function(){
    for (let i = 10; i<20; i++){
        if(i%2 != 0){
            console.log("the odd is :" +i)  
        }
    }
})()
  
// Function with expression

let odd_num = function() {
    for (let i = 0; i < 10; i++) {
        if (i % 2 != 0) {
            console.log("The odd number is: " + i);
        }
    }
};

odd_num();

// immidiately invoked function expression

(function(){
    for (let i=20; i<30; i++){
        if(i%2 !=0){
            console.log("the odd is :" +i);  
        }
    }
})()


function add(a,b) {
    return a+b
}

function nul(c,d) {
    return c*d
}

function operation(funame,x,y) {
    return funame(x,y)
}

let total = operation(add,18,20)
console.log(total);

let multi = operation(nul,23,23)
console.log(multi);

