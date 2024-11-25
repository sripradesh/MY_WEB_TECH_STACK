// Function without expression

(function(){
    for (let i = 10; i<50; i++){
        if(i%2 != 0){
            console.log("the odd is :"+i)  
        }
    }
})()
  
// Function with expression

let odd_num = function() {
    for (let i = 0; i<50; i++){
        if(i%2 != 0){
            console.log("the odd is :" +1)
        }
    }
}
odd_num()

// immidiately invoked function expression

(function(){
    for (let i=0; i<50; i++){
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

