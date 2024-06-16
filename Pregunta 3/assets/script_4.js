function pintar(ele1,color='blue'){
    ele1.style.backgroundColor = color
    
}
ele1 = document.getElementById("#uno")
ele1.addEventListener("click",()=>{
    pintar(ele1,"black")
});


function pintar(color){
    let ele2 = document.querySelector("#dos")
    ele.style.backgroundColor = color
}
let ele2 = document.querySelector("#dos")
ele.addEventListener('click', pintar("black"));

function pintar(color){
    let ele3 = document.querySelector("#tres")
    ele.style.backgroundColor = color
}
let ele3 = document.querySelector("#tres")
ele.addEventListener('click', pintar("black"));

function pintar(color){
    let ele4 = document.querySelector("#cuatro")
    ele.style.backgroundColor = color
}
let ele4 = document.querySelector("#cuatro")
ele.addEventListener('click', pintar("black"));