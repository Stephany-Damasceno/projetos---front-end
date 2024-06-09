function adicionarNumero(numero) {
    var display = document.getElementById('display');
    display.value += numero;
}

function adicionarOperacao(operacao) {
    var display = document.getElementById('display');
    var ultimoCaractere = display.value[display.value.length - 1];
    if (ultimoCaractere !== '+' && ultimoCaractere !== '-' && ultimoCaractere !== '*' && ultimoCaractere !== '/') {
        display.value += operacao;
    }
}

function adicionarPonto() {
    var display = document.getElementById('display');
    var ultimoCaractere = display.value[display.value.length - 1];
    if (ultimoCaractere !== '.') {
        display.value += '.';
    }
}

function limparDisplay() {
    document.getElementById('display').value = '';
}

function calcular() {
    var display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        alert('Erro na expressão!');
        limparDisplay();
    }
}
