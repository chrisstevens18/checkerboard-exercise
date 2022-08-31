function genDiv () {
    let div = document.createElement('div');
    div.className = "tile"
    div.style.width = '11.1%'
    div.style.float = 'left'
    div.style.paddingBottom = '11.1%'
    div.style.backgroundColor = randomColor();
    return div;
}

function randomColor () {
    let color = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`
    return color;
} 

function gradient () {
    let div = document.createElement('div')
    div.style.width = '100%'
    div.style.height = '100%'
    div.style.position = 'fixed'
    //div.style.backgroundColor = 'rgba(0,0,0,0.5)'
    div.style.background = 'linear-gradient(45deg, blue, transparent)'

    div.style.zIndex = '2'
    return div;
}

for (let i = 0;i < 63; i++) {
    document.body.appendChild(genDiv())
}

document.body.appendChild(gradient())

function flashing () {
let tiles = document.getElementsByClassName('tile')
for (var i = 0; i < tiles.length; i++) {
    
    tiles[i].style.backgroundColor = randomColor();
}
} 
setInterval(flashing, 500) 

// //setTimeout (function flashing () {
// for (var j = 0;)
// },)

//create a div
//set the div attribute
// create new function called random colors
// create new function called gradient
// create new function called flashing