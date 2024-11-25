let heading = document.createElement("h1")
console.log(heading);
heading.innerText = "Document object model"
heading.style.backgroundColor = "yellow"


let image = document.createElement("img")
console.log(image);
image.src = "https://images.ctfassets.net/c1zhnszcah7h/5IQ9QSXsU23Cen5grN5xQK/699b5031ff082edfbb2fd0e3691b5f95/Zoned_44_by_Faith_McAllister_2x.png?w=1440&h=1440&q=96&fm=webp"

let a = document.getElementById('a1')
console.log(a);

a.appendChild(heading)
a.appendChild(image)



let b = document.getElementsByClassName('collections')
console.log(b);

b[0].innerText = "Hello everyone"
b[1].innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sapiente corporis tempora incidunt nihil facilis placeat eaque autem corrupti voluptate? Soluta provident perspiciatis optio in, voluptatibus beatae praesentium ex quia!"

