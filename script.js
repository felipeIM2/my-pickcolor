let envColor = document.getElementById("env-color");



function createElement(){
    
    //-- Elemento para inserir a div
    let card = document.getElementById("card");
 
    //-- Elemento que cria a Div
    let div = document.createElement("div");
    div.setAttribute("class", "res")

    //--captura e altera a cor do bloco  
    let colorSelect = document.getElementById("color-select");
    envColor.addEventListener("click", () => {div.setAttribute("style", `background-color:${colorSelect.value};`)})

    card.appendChild(div);
}
createElement();





