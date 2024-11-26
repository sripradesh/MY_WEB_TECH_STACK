let btn = document.querySelector("button");

function change() {
  let page = document.body;
  if (page.style.backgroundColor !== "black") {
    page.style.backgroundColor = "black";
    page.style.color = "white";
    page.style.transition = "1s"
  } 
  else {
    page.style.backgroundColor = "white";
    page.style.color = "black";
    page.style.transition = "1s"
  }
}

let heading = document.createElement("h1");
console.log(heading);
heading.innerText = "Document object model";
heading.style.backgroundColor = "yellow";

// let image = document.createElement("img")
// console.log(image);
// image.src = "https://images.ctfassets.net/c1zhnszcah7h/5IQ9QSXsU23Cen5grN5xQK/699b5031ff082edfbb2fd0e3691b5f95/Zoned_44_by_Faith_McAllister_2x.png?w=1440&h=1440&q=96&fm=webp"


let a = document.getElementById("a1");
console.log(a);
a.appendChild(heading);
// a.appendChild(image)


let b = document.getElementsByClassName("collections");
console.log(b);
b[0].innerText = "Hello everyone";
b[1].innerText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente corporis tempora incidunt nihil facilis placeat eaque autem corrupti voluptate? Soluta provident perspiciatis optio in, voluptatibus beatae praesentium ex quia!";


let c = document.getElementsByTagName("img");
console.log(c);
c[0].src = "https://i.pinimg.com/236x/42/90/52/429052c7e19023172b6025952d133191.jpg";
c[0].style.borderRadius = "5px"

let bold = document.querySelector("b");
console.log(bold);
bold.innerText = "ZEUS";
bold.style.fontsize = "50px";

let para = document.querySelectorAll("p");
console.log(para);
para[0].innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente corporis tempora incidunt nihil facilis placeat eaque autem corrupti voluptate? Soluta provident perspiciatis optio in, voluptatibus beatae praesentium ex quia!";
para[1].innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente corporis tempora incidunt nihil facilis placeat eaque autem corrupti voluptate? Soluta provident perspiciatis optio in, voluptatibus beatae praesentium ex quia!";
para[2].innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente corporis tempora incidunt nihil facilis placeat eaque autem corrupti voluptate? Soluta provident perspiciatis optio in, voluptatibus beatae praesentium ex quia!";
para[3].innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente corporis tempora incidunt nihil facilis placeat eaque autem corrupti voluptate? Soluta provident perspiciatis optio in, voluptatibus beatae praesentium ex quia!";
para[4].innerText =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente corporis tempora incidunt nihil facilis placeat eaque autem corrupti voluptate? Soluta provident perspiciatis optio in, voluptatibus beatae praesentium ex quia!";
