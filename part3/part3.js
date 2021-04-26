function printSum() {
    debugger
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    document.getElementById("sum").innerHTML = "Sum: " + calculateSum(num1, num2);
}

function calculateSum(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    let result = num1 + num2
    return result
}

printSum();