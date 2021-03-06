let card = document.getElementById("cardinput");
let cvc = document.getElementById("cvcinput");
let money = document.getElementById("amountinput");
let name = document.getElementById("nameinput");
let lastName = document.getElementById("lastinput");
let city = document.getElementById("cityinput");


function ValidateInputs(myInput) {

    if (myInput.value != "") {

        return true;
    } else {


        return false;

    }
}
function Validate() {
    if (ValidateInputs(card) == true && ValidateInputs(cvc) == true && ValidateInputs(money) == true && ValidateInputs(name) == true && ValidateInputs(lastName) == true && ValidateInputs(city) == true) {
        alert("Se ha completado correctamente");

    } else {
 
        alert("Faltan espacios por rellenar por favor rellenalos");
    }
}

