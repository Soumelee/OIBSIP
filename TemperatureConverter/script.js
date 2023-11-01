let input = document.getElementById('userInput');
let output = document.getElementById('result');

let inputType = document.getElementById('selectUserInput');
let outputType = document.getElementById('selectResult');

let inputTypeSelected = 0;
let resultTypeSelected = 2;

inputType.addEventListener('change', () => {
    inputTypeSelected = inputType.selectedIndex;
    calculate();
})
outputType.addEventListener('change', () => {
    resultTypeSelected = outputType.selectedIndex;
    calculate();
})

input.addEventListener('keyup', () => {
    calculate();
})
function calculate(){
    console.log(inputTypeSelected,resultTypeSelected);
    if (inputTypeSelected === 0 && resultTypeSelected === 1) {        
        output.value = (input.value * (9 / 5)) + 32;        
    }
    else if (inputTypeSelected === 0 && resultTypeSelected === 2) {
        output.value = 273.15 + Number(input.value);
    }
    else if (inputTypeSelected === 1 && resultTypeSelected === 0) {
        output.value = (input.value - 32) * (5 / 9);
    }
    else if (inputTypeSelected === 1 && resultTypeSelected === 2) {
        output.value = (input.value + 459.67) * (5 / 9);
    }
    else if(inputTypeSelected === 2 && resultTypeSelected === 0){
        output.value =  Number(input.value) - 273.15;
    }
    else if(inputTypeSelected === 2 && resultTypeSelected === 1){
        output.value =  (Number(input.value) - 273.15)*(9/5) + 32;
    }
    else {
        output.value = input.value;
    }

    if(input.value.length == 0){
        output.value = "";
    }
}
