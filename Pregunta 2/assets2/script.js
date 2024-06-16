function pintar(color){
    ele.style.backgroundColor = color
    
}
let ele = document.querySelector("#ele1")
ele.addEventListener("Click", pintar("yellow"));