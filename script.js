const colorOut = document.getElementById("color")
const scoreOut = document.getElementById("score")
const wrongOut = document.getElementById("wrong")


let colors = ["yellow", "green", "white", "blue", "red", "orange"]
let score = 0;
let wrong = 0;

function show() {
    colorOut.innerText = colors[Math.floor( Math.random() * 6 )]
    if (colorOut.innerText == "yellow") {
        colorOut.innerHTML = `<h1 style="color:${colors[Math.floor( Math.random() * 6 )]}">Yellow</h1>`
    }  else if (colorOut.innerText == "green") {
        colorOut.innerHTML = `<h1 style="color:${colors[Math.floor( Math.random() * 6 )]}">Green</h1>`
    }  else if (colorOut.innerText == "white") {
        colorOut.innerHTML = `<h1 style="color:${colors[Math.floor( Math.random() * 6 )]}">White</h1>`
    }  else if (colorOut.innerText == "blue") {
        colorOut.innerHTML = `<h1 style="color:${colors[Math.floor( Math.random() * 6 )]}">Blue</h1>`
    }  else if (colorOut.innerText == "red") {
        colorOut.innerHTML = `<h1 style="color:${colors[Math.floor( Math.random() * 6 )]}">Red</h1>`
    }  else if (colorOut.innerText == "orange") {
        colorOut.innerHTML = `<h1 style="color:${colors[Math.floor( Math.random() * 6 )]}">Orange</h1>`
    } 
}

show()


function colorClick(color) {
    if (colorOut.innerText === color) {
        score++
        scoreOut.innerText = "Score: " + score
        show()
    } else {
        console.log(colorOut.innerText)
        wrong++
        wrongOut.innerText = wrong + " :Wrong"
        show()
    }
}