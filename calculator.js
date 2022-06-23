const operatorSelection = prompt('select an operator; +, -, *, /');
let input1 = parseFloat(prompt('Please enter your first value: '));
let input2 = parseFloat(prompt('Please enter your second value: '));

if (operatorSelection == '+'){
    answer = input1 + input2;
    alert(answer);
} else if (operatorSelection == '-'){
    answer = input1 - input2;
    alert(answer);
} else if (operatorSelection == '*'){
    answer = input1 * input2;
    alert(answer);
} else if (operatorSelection == '/'){
    answer = input1 / input2;
    alert(answer);
} else {
    alert('wrong input');
}

document.write(answer);