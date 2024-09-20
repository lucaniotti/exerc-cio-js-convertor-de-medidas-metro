function converterMedida() {
    const valorEmMetros = Number(document.getElementById('valorEmMetros').value);
    const unidade = document.getElementById('unidade').value;
    let resultado;

    if (isNaN(valorEmMetros) || valorEmMetros <= 0) {
        alert("Por favor, insira um valor válido em metros.");
        return;
    }

    switch (unidade) {
        case "mm":
            resultado = valorEmMetros * 1000; // metros para milímetros
            document.getElementById('valorConvertido').innerText = `${valorEmMetros} metros = ${resultado} milímetros.`;
            break;
        case "cm":
            resultado = valorEmMetros * 100; // metros para centímetros
            document.getElementById('valorConvertido').innerText = `${valorEmMetros} metros = ${resultado} centímetros.`;
            break;
        case "dm":
            resultado = valorEmMetros * 10; // metros para decímetros
            document.getElementById('valorConvertido').innerText = `${valorEmMetros} metros = ${resultado} decímetros.`;
            break;
        case "dam":
            resultado = valorEmMetros / 10; // metros para decâmetros
            document.getElementById('valorConvertido').innerText = `${valorEmMetros} metros = ${resultado} decâmetros.`;
            break;
        case "hm":
            resultado = valorEmMetros / 100; // metros para hectômetros
            document.getElementById('valorConvertido').innerText = `${valorEmMetros} metros = ${resultado} hectômetros.`;
            break;
        case "km":
            resultado = valorEmMetros / 1000; // metros para quilômetros
            document.getElementById('valorConvertido').innerText = `${valorEmMetros} metros = ${resultado} quilômetros.`;
            break;
        default:
            alert("Opção inválida!");
            return;
    }

    // Exibir o resultado
    document.getElementById('resultado').style.display = 'block';
}