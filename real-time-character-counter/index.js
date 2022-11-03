const textAreaEl = document.querySelector(".textarea");

const totalcounterEl = document.getElementById("total-counter");

const remainingcounterEl = document.getElementById("remaining-counter");

const maxlength= textAreaEl;
textAreaEl.addEventListener("keyup", ()=>{
    console.log("key is presed");

    updateCounter();
});

function updateCounter(){
    totalcounterEl.innerText = textAreaEl.value.length;

    remainingcounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}


