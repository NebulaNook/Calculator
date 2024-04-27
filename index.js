const output = document.getElementById("output-section");
const input = document.querySelectorAll("button");

input.forEach(button => {
    button.addEventListener("click", change);
});

function change(e) {
    if(e.target.id === "ac") {
        output.value = "";
        output.style.textAlign = "center";
    }
    else if(e.target.id === "minus") {
        output.value += "-";
    }
    else if(e.target.id === "plus") {
        output.value += "+";
    }
    else if(e.target.id === "divide") {
        output.value += "/";
    }
    else if(e.target.id === "multiply") {
        output.value += "*";
    }
    else if(e.target.id === "zero") {
        output.value += "0";
    }
    else if(e.target.id === "one") {
        output.value += "1";
    }
    else if(e.target.id === "two") {
        output.value += "2";
    }else if(e.target.id === "three") {
        output.value += "3";
    }else if(e.target.id === "four") {
        output.value += "4";
    }else if(e.target.id === "five") {
        output.value += "5";
    }else if(e.target.id === "six") {
        output.value += "6";
    }else if(e.target.id === "seven") {
        output.value += "7";
    }else if(e.target.id === "eight") {
        output.value += "8";
    }else if(e.target.id === "nine") {
        output.value += "9";
    }else if(e.target.id === "equal") {
        output.style.textAlign = "right";        
        try{
            output.value = eval(output.value);
        }catch(error) {
            output.value = "Error";
        }
    }

};