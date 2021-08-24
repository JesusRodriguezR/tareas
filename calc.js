
var resultElement = document.getElementById("resultado");
var numberElement = document.getElementById("dato");
var numberElement2 = document.getElementById("dato2");
// currentResult = resultElement.rows[0].cells.item(0).innerHTML;

function clean(){
    numberElement.focus();
    numberElement.value = '';
    numberElement2.focus();
    numberElement2.value = '';
}
function add(){
    var result = 0;
    var number = numberElement.value;
    var number2 = numberElement2.value;    

    result = parseFloat(number) + parseFloat(number2);
    resultElement.rows[0].cells.item(0).innerHTML = result;

    clean();
    

}
function sub(){
    var result = 0;
    var number = numberElement.value;
    var number2 = numberElement2.value;    

    result = parseFloat(number) - parseFloat(number2);
    resultElement.rows[0].cells.item(0).innerHTML = result;

    clean();   

}
function mul(){
    var result = 0;
    var number = numberElement.value;
    var number2 = numberElement2.value;    

    result = parseFloat(number) * parseFloat(number2);
    resultElement.rows[0].cells.item(0).innerHTML = result;

    clean(); 

}
function div(){
    var result = 0;
    var number = numberElement.value;
    var number2 = numberElement2.value;    

    result = parseFloat(number) / parseFloat(number2);
    resultElement.rows[0].cells.item(0).innerHTML = result;

    clean(); 
}

function pwr(){
    var result = 0;
    var number = numberElement.value;
    var number2 = numberElement2.value;    

    result = Math.pow(parseFloat(number) , parseFloat(number2));
    resultElement.rows[0].cells.item(0).innerHTML = result;

    clean(); 

}
function sqr(){
    var result = 0;
    var number = numberElement.value;
    var number2 = numberElement2.value;    

    result = Math.pow(parseFloat(number) , 2);
    resultElement.rows[0].cells.item(0).innerHTML = result;

    clean(); 

}
function rot(){
    var result = 0;
    var number = numberElement.value;
    var number2 = numberElement2.value;    

    result = Math.sqrt(parseFloat(number));
    resultElement.rows[0].cells.item(0).innerHTML = result;

    clean(); 
}

function clr(){
    numberElement.focus();
    numberElement.value = '';
    numberElement2.focus();
    numberElement2.value = '';
    resultElement.rows[0].cells.item(0).innerHTML = 0;
    numberElement.focus();
}

