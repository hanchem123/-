let result = document.getElementById('result');

function appendNumber(num) {
    result.value += num;
}

function appendOperator(op) {
    result.value += op;
}

function clearResult() {
    result.value = '';
}

function calculate() {
    try {
        let expression = result.value.replace(/×/g, '*').replace(/÷/g, '/');
        result.value = eval(expression);
    } catch (error) {
        result.value = '错误';
    }
}