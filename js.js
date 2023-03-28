function addition() {
var x = parseFloat(document.getElementById('varx').value);
var y = parseFloat(document.getElementById('vary').value);
var z = x+y;
    document.getElementById("result").innerHTML = "The sum of " + x + " and " + y + " " + "is " + z;
}

function subtraction() {
var x = document.getElementById('varx').value;
var y = document.getElementById('vary').value;
var z = x-y;
    document.getElementById("result").innerHTML = "The difference of " + x +" and " + y + " " + "is " + z;
}

function multiplication() {
var x = document.getElementById('varx').value;
var y = document.getElementById('vary').value;
var z = x*y;
    document.getElementById("result").innerHTML = "The product of " + x +" and " + y + " " + "is " + z;
}

function division() {
var x = document.getElementById('varx').value;
var y = document.getElementById('vary').value;
var z = x/y;
document.getElementById("result").innerHTML = "The quotient of " + x +" and " + y + " " + "is " + z;
}

function percent() {
var x = document.getElementById('varx').value;
var y = document.getElementById('vary').value;
var z = x%y;

document.getElementById("result").innerHTML = x + " percent of " + y + " is " + z;
}
