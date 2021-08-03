var operator
listener();

function displayOutput2(eventValue){
    console.log(eventValue)
}

function listener(){
    window.onclick = e =>{
        
        var selectedKey = e.target.innerText;
        if(e.target.tagName == "DIV"){
            if(e.target.id != "display-1" && e.target.id !="display-2"){
                displayUpdate(selectedKey);
            }
        }
        operatorCheck(selectedKey)

        if(selectedKey == '='){
            switch(operator){
                case '+':
                    addition();
                    break;
                case '-':
                    subtract();
                    break;
                case 'x':
                    multiplication();
                    break;
                case '/':
                    division();
                    break;
                case '%':
                    percent();
                    break;
                case "CE":
                    ClearLastEntry();
                    break;
                case "C":
                    Clear();
            }
        }
    }
}

function operatorCheck(pressedKey){
    if(pressedKey == '+'){
        value = parseFloat(currentInput.innerText);
        operator ='+';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    }
    else if(pressedKey == '-'){
        value = parseFloat(currentInput.innerText);
        operator ='-';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    }
    else if(pressedKey == 'x'){
        value = parseFloat(currentInput.innerText);
        operator ='x';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    }
    else if(pressedKey == '/'){
        value = parseFloat(currentInput.innerText);
        operator ='/';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    }
    else if(pressedKey == '%'){
        value = parseFloat(currentInput.innerText);
        operator ='%';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    }   
    else if(pressedKey == 'C'){
        value = parseFloat(currentInput.innerText);
        operator = 'C';
        previusInput.innerText = currentInput.innerText;
        currentInput.innerText = '0';
        console.log(value);
    }    
}

function addition(){
    var value2 = parseFloat(currentInput.innerText);
        result = value+value2;

        currentInput.innerText = result;
        previusInput.innerText =  `${value} + ${value2} =` ;
}
function subtract(){
    var value2 = parseFloat(currentInput.innerText);
        result = value-value2;

        currentInput.innerText = result;
        previusInput.innerText =  `${value} - ${value2} =` ;
}
function multiplication(){
    var value2 = parseFloat(currentInput.innerText);
        result = value*value2;

        currentInput.innerText = result;
        previusInput.innerText =  `${value} * ${value2} =` ;
}
function division(){
    var value2 = parseFloat(currentInput.innerText);
        result = value/value2;

        currentInput.innerText = result;
        previusInput.innerText =  `${value} / ${value2} =` ;
}
function percent(){
    var value2 = parseFloat(currentInput.innerText);
        result = value/100;

        currentInput.innerText = result;
        previusInput.innerText =  `${value} % ${value2} =` ;
}
function Clear(){
    var value = parseFloat(currentInput.innerText);
        result  = '0';

        currentInput.innertext = result;
        previusInput.innerText = '0';
}
function displayUpdate(pressedKey){

    if(currentInput.innerText == '0'){
        currentInput.innerText = '';
    }
    currentInput.innerText = currentInput.innerText + pressedKey;
}