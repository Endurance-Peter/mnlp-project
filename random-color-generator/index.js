const containerEl= document.querySelector(".container");

for (let index = 0; index < 30; index++) {
    const colorContainer= document.createElement("div");
    colorContainer.classList.add("color-container");

    containerEl.appendChild(colorContainer);

}

const colorContainerEls=document.querySelectorAll(".color-container");

changeBackgroundColor();

function changeBackgroundColor(){
    colorContainerEls.forEach((colorContainerEl)=>{

        colorContainerEl.style.backgroundColor="#"+ generateColorCode();

        colorContainerEl.innerHTML="#"+ generateColorCode();
    })
}

function generateColorCode(){

    let code= "0123456789abcdef";
    let numOfCode=6;
    let colorCode ="";
    for (let index = 0; index < numOfCode; index++) {
        let randNum= Math.floor(Math.random() * code.length);
        

        colorCode+= code.substring(randNum,randNum+1);
        
    }

    return colorCode;
}