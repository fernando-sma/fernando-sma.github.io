var numerosGerados = []; // Array contendo os valores já sorteados

function gerarNumeroAleatorio(valorMaximo) { // Função para facilitar a geração de números aleatórios
    return Math.floor(Math.random() * valorMaximo) + 1; // Valor +1 para que o número 0 não saia
}

function GerarNumeros() {
    while (numerosGerados.length < 6) {
        numeroSorteado = gerarNumeroAleatorio(60); 
        if (!numerosGerados.includes(numeroSorteado)) {
            numerosGerados.push(numeroSorteado);
        }
    }

    numerosGerados = numerosGerados.sort(function (a, b) { return a - b; }); // Classificando os números por ordem crescente númerica
    document.getElementById("titulo").innerHTML ="Os valores sorteados foram:";
    document.getElementById("resultado").innerHTML = numerosGerados.join(", "); // Colocando vírgula seguida de espaço para verificar o resultado
    document.getElementById("btnGerarNumero").disabled = true; // Desabilitando o botão de gerar o sorteio

}

