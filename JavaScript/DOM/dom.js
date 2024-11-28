let btn_content = document.getElementById("mode")
console.log(btn_content);
btn_content.style.display = "flex"
btn_content.style.justifyContent = "center"


let btn = document.querySelector("button");
btn.style.backgroundColor = "greenyellow"
btn.style.borderColor = "greenyellow"
btn.style.borderRadius = "5px"
btn.style.fontSize = "30px"
btn.style.fontFamily = "times-new-roman"
btn.style.fontWeight = "bold"


function change_mode() {
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
heading.style.textAlign = "center"
heading.style.backgroundColor = "yellow";
heading.style.height = "3rem"
heading.style.width = "30rem"
heading.style.borderRadius = "5px"
heading.style.fontSize = "40px"


// let image = document.createElement("img")
// console.log(image);
// image.src = "https://images.ctfassets.net/c1zhnszcah7h/5IQ9QSXsU23Cen5grN5xQK/699b5031ff082edfbb2fd0e3691b5f95/Zoned_44_by_Faith_McAllister_2x.png?w=1440&h=1440&q=96&fm=webp"


let a = document.getElementById("a1");
console.log(a);
a.style.display = "flex"
a.style.justifyContent = "center"
a.appendChild(heading);
// a.appendChild(image)


let b = document.getElementsByClassName("collections");
console.log(b);
b[0].innerText = "ZEUS"
b[1].innerText ="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente corporis tempora incidunt nihil facilis placeat eaque autem corrupti voluptate? Soluta provident perspiciatis optio in, voluptatibus beatae praesentium ex quia!";

let zeus = b[0]
console.log(zeus);
zeus.style.fontSize = "50px"
zeus.style.fontWeight = "bold"

let image = document.getElementsByTagName("img");
console.log(image);
image[0].src = "https://i.pinimg.com/236x/42/90/52/429052c7e19023172b6025952d133191.jpg";
image[0].style.borderRadius = "5px"

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
