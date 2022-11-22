let square = document.querySelectorAll (".square")
let cantCuadros = 6
let colors = []
let colorDisplay = document.querySelector("#colorDisplay")
let pickedColor= []
let clickedColor=colors[0]
let mensaje =  document.querySelector ("#message")
let reset = document.querySelector ("#reset")
let botonUno = document.querySelector ("#botonUno")
let botonDos = document.querySelector ("#botonDos")
let numberOfSquares = 6
let rgbTitulo = document.querySelector ("#rgbTitulo") 
let mismaClase = document.querySelectorAll (".mismaClase")



init ()
function init (){
reseteando(numberOfSquares)
botones()
squareClick()
}


rgbTitulo.innerHTML = " " + pickedColor

//color del background tenia el cuadrado que clickeamos
function squareClick (){
for(let i = 0; i< square.length; i++){

square [i].addEventListener ("click", function(){
    clickedColor = square [i].style.backgroundColor
   
    
//comparamos clickedColor y pickedColor, para ver si son el mismo color + mensaje Correct! 

if(clickedColor === pickedColor){
 mensaje.innerHTML = "Correct!"
 //resetear el background color de tu h1
 colorDisplay.style.backgroundColor = clickedColor


 //Cuando ganes agrega para que #reset cambie su texto a Play Again?
 reset.textContent = "Play Again?"
changeColors (clickedColor)

} else{ 
    mensaje.innerHTML = "Try Again!"

    square[i].style.backgroundColor= "#FBEAFF"
   
}})}}

function changeColors (colors) {

    for(let i=0; i< square.length;i++){
square[i].style.backgroundColor= colors
    
}

}

//una función para asignarle a pickedColor un color random de nuestro arreglo de colores

function pickColor (colors){
    let numeroRandom = Math.floor((Math.random() * colors.length))
    return colors [numeroRandom]
}

//función randomColor para generar y devolver un color random

function randomColor(){
    

let numColorRandomUno =Math.floor((Math.random() * 255)+1)
let numColorRandomDos =Math.floor((Math.random() * 255)+1)
let numColorRandomTres =Math.floor((Math.random() * 255)+1)

return ("rgb" + "(" + numColorRandomUno + ", "+ numColorRandomDos +  ", " + numColorRandomTres + ")")

}


//Ahora vamos a crear la función generateRandomColors,

function generateRandomColors (longitud){
let cajaDeColores = []
for(let i = 0; i< longitud;i++){
    cajaDeColores.push( randomColor())
}
return cajaDeColores
}

//botón de reset

reset.addEventListener ("click", function(){
    reseteando (numberOfSquares)
})

  

//seleccionemos los botones y agreguemos un event listener



function botones (){
for(let i=0;i<mismaClase.length;i++){


//Vamos a darle al botón que clickeamos la clase selected.

mismaClase[i].addEventListener ("click", function(){
    mismaClase[0].classList.remove("selected")
    mismaClase[1].classList.remove("selected")
    mismaClase[i].classList.add("selected")




//operador ternario para ahorrar líneas de código.
    numberOfSquares= (this.textContent==="Easy")?3:6

reseteando (numberOfSquares)

})
}
}

function reseteando (numberOfSquares){
    colors = generateRandomColors(numberOfSquares)

    
    for(let i = 0; i< square.length; i++){
        if(colors[i]){
        square [i].style.backgroundColor= colors [i]
        square[i].style.display="block"
        clickedColor = colors[i]
        } else{
            square[i].style.display="none"
        }
        
        }



    pickedColor= pickColor (colors)
    mensaje.innerHTML = ""
    reset.textContent = "New Colors"
//resetear el background color de tu h1.
    colorDisplay.style.backgroundColor = "#FBEAFF"
    rgbTitulo.innerHTML = " " + pickedColor   
 } 






