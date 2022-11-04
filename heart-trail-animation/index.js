const bodyEl=document.querySelector("body");

bodyEl.addEventListener("mousemove",(event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl= document.createElement("span");
    spanEl.style.left = xPos+"px";
    spanEl.style.top = yPos+"px";

    let randNum= Math.random()* 100;
    spanEl.style.width = randNum + "px";
    spanEl.style.height=randNum + "px";

    bodyEl.appendChild(spanEl);

    setTimeout(()=>{
        spanEl.remove();
    }, 3000);
});