function run() {
    var num1 = parseFloat(document.getElementById("operand1").value);
    var num2 = parseFloat(document.getElementById("operand2").value);
    var operator = document.getElementById("operator").value;

    let calculator = {
        add: function(num1,num2) {
            return num1+num2;
        },
        subtract: function(num1,num2) {
            return num1-num2;
        },
        divide: function(num1,num2) {
            return num1/num2;
        },
        multiply: function(num1,num2) {
            return num1*num2;
        },
    }

   if (operator == "+") {
        var addition = calculator.add(parseFloat(num1),parseFloat(num2));
        document.getElementById("output").innerHTML = addition;
    } else if (operator == "-") {
        var subtract = calculator.subtract(parseFloat(num1),parseFloat(num2));
        document.getElementById("output").innerHTML = subtract;
    } else if (operator == "*") {
        var multiply = calculator.multiply(parseFloat(num1),parseFloat(num2));
        document.getElementById("output").innerHTML = multiply; 
    } else if (operator == "/") {
        var divide = calculator.divide(parseFloat(num1)/parseFloat(num2));
        document.getElementById("output").innerHTML = divide;
    } else {
        document.getElementById("output").innerHTML = "Error";
    };
}
