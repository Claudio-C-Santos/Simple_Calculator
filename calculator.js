function run() {
    var num1 = parseFloat(document.getElementById("operand1").value);
    var num2 = parseFloat(document.getElementById("operand2").value);
    var operator = document.getElementById("operator").value;

   if (operator == "+") {
        var addition = parseFloat(num1)+parseFloat(num2);
        document.getElementById("output").innerHTML = addition;
    } else if (operator == "-") {
        var subtract = parseFloat(num1)-parseFloat(num2);
        document.getElementById("output").innerHTML = subtract;
    } else if (operator == "*") {
        var multiply = parseFloat(num1)*parseFloat(num2);
        document.getElementById("output").innerHTML = multiply; 
    } else if (operator == "/") {
        var divide = parseFloat(num1)/parseFloat(num2);
        document.getElementById("output").innerHTML = divide;
    } else {
        document.getElementById("output").innerHTML = "Error";
    };

}


/*
let calculator = {
    add: function(a,b) {
        return a+b;
    },
    subtract: function(a,b) {
        return a-b;
    },
    divide: function(a,b) {
        return a/b;
    },
    multiply: function(a,b) {
        return a*b;
    },
}

console.log(calculator.add(2,2))
console.log(calculator.subtract(2,2))
console.log(calculator.divide(2,2))
console.log(calculator.multiply(2,2))
*/