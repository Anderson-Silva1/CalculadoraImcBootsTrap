// Programa que recebe 4 valores:
// 1. Nome
// 2. Idade
// 3. Peso
// 4. Altura

// Criação da função para pegar apenas os 2 primeiros números decimais de um número Float
function formatFloat(num) {
    return parseFloat(num.toFixed(2));
}

// Declarando variáveis
const nome = document.getElementById("name");
const age = document.getElementById("number");
const resposta = document.getElementById("resultado");
const respostaPesoIdeal = document.getElementById("resultado-peso-ideal")
const weight = document.getElementById("peso");
const height = document.getElementById("altura");
const btn = document.getElementById("btn");

// Criando um ouvidos na Variável btn com o evento "click"
btn.addEventListener("click", function () {
    // Função que vai calcular o IMC do usuário
    const imc = weight.value / height.value ** 2;

    // estrutura de decisão onde vai determinar se estou abaixo, acima ou no peso ideal para minha altura, segundo as regras do IMC
    if (imc < 18.50) {
        resposta.style.color = "rgb(255, 255, 0)"
        resposta.style.backgroundColor = "rgb(0, 0, 0)"
        resposta.innerHTML = `Olá ${nome.value} de ${age.value
            } anos de idade, é um prazer conhecê-lo... Informamos que você precisa engordar mais um pouco, pois seu IMC é de ${formatFloat(imc)}`; //  Usando a função que criamos 
        } else if (imc >= 18.51 && imc <= 24.99) {
            resposta.style.color = "rgb(0, 255, 0)"
            resposta.style.backgroundColor = "rgb(0, 0, 0)"
            resposta.innerHTML = `Olá ${nome.value} de ${age.value
                } anos de idade, é um prazer conhecê-lo... Informamos que você está no peso ideal para sua altura, pois seu IMC é de ${formatFloat(imc)}`;
        } else if (imc >= 25 && imc <= 29.99) {
            resposta.style.color = "rgb(255, 128, 128)"
            resposta.style.backgroundColor = "rgb(0, 0, 0)"
            resposta.innerHTML = `Olá ${nome.value} de ${age.value
                } anos de idade, é um prazer conhecê-lo... Informamos que você precisa emagrecer, pois seu IMC é de ${formatFloat(imc)}`;
        } else if (imc >= 30 && imc <= 34.99) {
            resposta.style.color = "rgb(251, 95, 95)"
            resposta.style.backgroundColor = "rgb(0, 0, 0)"
            resposta.innerHTML = `Olá ${nome.value} de ${age.value} anos de idade, é um praser em conhecê-lo... Informamos que você está indo para o Processo de Obesidade Grau 1, ou seja pare de comer frituras e doces para o bem da sua saúde... Seu Imc é de ${formatFloat(imc)}`
        } else if (imc >= 35 && imc <= 39.99) {
            resposta.style.color = "rgb(255, 51, 51)"
            resposta.style.backgroundColor = "rgb(0, 0, 0)"
            resposta.innerHTML = `Olá ${nome.value} de ${age.value} anos de idade, é um praser em conhecê-lo... Informamos que você está indo para o Processo de Obesidade Grau 2, ou seja Já esta se tpornando preoculpante o seu estado, procure um médico!!... Seu Imc é de ${formatFloat(imc)}`
        } else if (imc >= 40) {
            resposta.style.color = "red"
            resposta.style.backgroundColor = "rgb(0, 0, 0)"
            resposta.innerHTML = `Olá ${nome.value} de ${age.value} anos de idade, é um prazer conhecê-lo... Informamos que você está no processo mais extremo de excesso de peso, já foi etrapolado os limites máximos em relação a sua altura, procure um médico urgentemente para o vem estar da sua saúde... Seu IMC é de ${formatFloat(imc)}` 
        }
        else {
            resposta.style.color = "#fff"
            resposta.style.backgroundColor = "rgb(0, 0, 0)"
            resposta.innerHTML =
                "Informamos que não conseguimos cálcular o seu IMC, verifique se as medidas colocadas correspondem a números reais"
        }
    });

btn.addEventListener("click", function () {
    const pesoAltura = parseFloat(height.value)

    
    if (pesoAltura >= 0.50 && pesoAltura <= 2.00) {
        let pesoMin = (18.5 * Math.pow(pesoAltura, 2)).toFixed(2);
        let pesoMax = (24.9 * Math.pow(pesoAltura, 2)).toFixed(2);
        let pesoMedio = ((parseFloat(pesoMin) + parseFloat(pesoMax)) / 2).toFixed(2);
        respostaPesoIdeal.style.color = 'rgb(0, 255, 0)';
        return respostaPesoIdeal.innerHTML = `Segundo o IMC seu peso ídeal deve estar entre ${pesoMin} e ${pesoMax} Kg, com a média de ${pesoMedio} Kg`;
    } else {
        return respostaPesoIdeal.innerHTML = `Ímpossível de cálcular, sua altura precisa ser de 0.50 até 2 metros de altura`;
    }
});