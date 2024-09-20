const medidaMetros = prompt("Informe uma medida em metros para conversão:")
const opcaoConversao = prompt("Escolha umna opção para conversão do valor: \nmilímetro (mm) \ncentímetro (cm) \ndecímetro (dm) \ndecâmetro (dam) \nhectômetro (hm) \nquilômetro (km)")


const resultadoConversao = parseFloat(medidaMetros)

switch (opcaoConversao) {
case "mm" : 
alert("O resultdo é: " + resultadoConversao * 1000)
break
case "cm" : 
alert("O resultdo é: " + resultadoConversao * 100)
break
case "dm" : 
alert("O resultdo é: " + resultadoConversao * 10)
break
case "dam" : 
alert("O resultdo é: " + resultadoConversao / 10)
break
case "hm" : 
alert("O resultdo é: " + resultadoConversao / 100)
break
case "km" : 
alert("O resultdo é: " + resultadoConversao / 1000)
break
default:
    alert("Opção Inválida")
}