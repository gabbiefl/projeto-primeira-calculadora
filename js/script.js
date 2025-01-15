// função para inserir numeros ou operadores no display da calculadora

const MAX_CHARACTERS = 15

function insert(num) {
    let display = document.getElementById('result-display');
    let currentContent = display.innerHTML;

    // verifica se o conteúdo atual está dentro do limite
    if (currentContent.length < MAX_CHARACTERS) {
        display.innerHTML = currentContent + num; // se o numero de caracteres nao for maior que 15, adiciona o parametro recebido
    } else {
        alert('Limite de caracteres atingido!'); 
    }
}

// função para limpar o display, definindo o conteúdo como uma string vazia
function clearDisplay() {
    document.getElementById('result-display').innerHTML = '';
}

// função para apagar o último caractere do display
function backspace() {
    let result = document.getElementById('result-display').innerHTML; // obtém o conteudo atual do display

    document.getElementById('result-display').innerHTML = result.substring(0, result.length -1); // remove o último caractere do conteúdo utilizando o método substring
}

// função para calcular o resultado
function calculate() {
    let result = document.getElementById('result-display').innerHTML; // obtém o conteúdo atual do display

    if (result) { // verifica se há conteúdo
        document.getElementById('result-display').innerHTML = eval(result); 
        // usa a função "eval" para avaliar a expressão no display e exibir o resultado
        // eval interpreta a string como código JavaScript e executa a operação matemática
    }
}
