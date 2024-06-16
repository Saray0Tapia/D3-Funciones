let ele1 = document.querySelector("#uno")
let ele2 = document.querySelector("#dos")
let ele3 = document.querySelector("#tres")
let ele4 = document.querySelector("#cuatro")
function pintarBlack(event){
    event.target.style.backgroundColor = "black"
}
ele3.addEventListener("click", pintarBlack)
ele4.addEventListener("click", pintarBlack)
ele2.addEventListener("click", pintarBlack)
ele1.addEventListener("click", pintarBlack)