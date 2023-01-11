// for loop

const result = document.querySelector("#results");

function multiplication (){
    let table 
    table = "<table class='tab'>"

    for (let i = 1; i < 10; i++) {
       const newResult = `${i} x ${i} = ${i * i}`;
       table += "<tr><td>" + newResult + "</td></tr>" 
    }

    table += "</table>"
    result.innerHTML = table
}


const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", multiplication);
clearBtn.addEventListener("click", () => result.textContent = " ");







