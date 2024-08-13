function appendNumber(number) {
    document.getElementById("screen").value += number;
}

function appendOperator(operator) {
    document.getElementById("screen").value += ` ${operator} `;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function calculate() {
    const screen = document.getElementById("screen");
    try {
        screen.value = eval(screen.value.replace('x', '*').replace('÷', '/'));
    } catch (error) {
        screen.value = "Error";
    }
}