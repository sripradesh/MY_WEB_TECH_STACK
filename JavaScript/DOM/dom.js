let heading = document.createElement("h1")
console.log(heading);
heading.innerText = "Document object model"


let image = document.createElement("img")
console.log(image);
image.src = "https://images.ctfassets.net/c1zhnszcah7h/5IQ9QSXsU23Cen5grN5xQK/699b5031ff082edfbb2fd0e3691b5f95/Zoned_44_by_Faith_McAllister_2x.png?w=1440&h=1440&q=96&fm=webp"

let a = document.getElementById('a1')
console.log();

a.appendChild(heading)
a.appendChild(image)