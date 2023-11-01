currentInput= document.getElementById("currentInput");
result= document.getElementById("result");

let real="";

function display(parameter){
    real+=parameter;

    if(parameter==="*" || parameter==="/" || parameter==="**"){
        if(parameter==="*"){            
            currentInput.value+=String.fromCharCode(0x0078);  
        }
        else if(parameter==="**"){
            currentInput.value+="^";  
        }
        else{
            currentInput.value+=String.fromCharCode(0x00F7);
        }
    }
    else{
        currentInput.value+=parameter;
    }
     
    try {
        result.value=eval(real);
    } catch (e) {
        
    }    
    console.log(real);
}

function backspace() {
    currentInput.value = currentInput.value.slice(0,-1);
    if(real[real.length-1] === "*" && real[real.length-2]==="*"){
        real=real.slice(0,-2);    
    }
    else{
        real=real.slice(0,-1);
    }    
    console.log(real);

    try {
        result.value=eval(real);
    } catch (e) {
        
    } 
    if(real.length<=0){
        result.value = "";
    }
    
}

function clean(){
    result.value = "";
    currentInput.value = "";
    real = "";
}

function equals(){
    if(result.value===""){
        return;
    }
    currentInput.value=result.value;
    real=result.value;
    result.value="";
}

function plusMinus(){
    console.log("will implement later");
}