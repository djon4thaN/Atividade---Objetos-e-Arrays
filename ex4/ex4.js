// Crie um cadastro de pessoas onde o usuário informe o nome, idade
// e se está trabalhando ou não, se a pessoa estiver trabalhando
// pergunte para ele o salário que está ganhando. Para cada pessoa
// cadastrada, pergunte ao usuário se ele deseja continuar
// cadastrando ou não. No final, mostre as pessoas que estão
// desempregadas, as pessoas que estão empregadas separadas
// pelas que ganham mais que 2500 e menos que 2500.

// Exemplo de resultado:
// Pessoas desempregadas:
// Nome: Alessandro, Idade: 28
// Nome: Alessandro, Idade: 28

// Pessoas empregadas com salários menores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 1500
// Nome: Alessandro, Idade: 28, Salário: 2400

// Pessoas empregadas com salários maiores que 2500:
// Nome: Alessandro, Idade: 28, Salário: 2700
// Nome: Alessandro, Idade: 28, Salário: 3000

let usuarios = [];
let desempregados = [];
let menor2500 = [];
let maior2500 = [];
let continuar = true;

while (continuar) {
    let nome = prompt("Digite o seu nome:");
    let idade = parseInt(prompt("Digite a sua idade:"));
    let trabalhando = String(prompt("Você está trabalhando?")).toLowerCase();
    let salario = 0;

    if (trabalhando === 'sim') {
        salario = parseFloat(prompt("Quanto você ganha?"));
    }

    let user = {
        nome: nome,
        idade: idade,
        trabalhando: trabalhando,
        salario: salario
    };

    usuarios.push(user);

    continuar = confirm("Deseja cadastrar outro usuário?");
};

    usuarios.forEach(user => {
        if ('sim' != user.trabalhando) {
        desempregados.push(user);
        } 
        else if (user.salario < 2500){
        menor2500.push(user);
        } else {
        maior2500.push(user);
        }
    });

    document.write("Pessoas desempregadas:" + '<br>');
    desempregados.forEach(user => {
        document.write(`\nNome: ${user.nome} | Idade: ${user.idade}`);
    });

    document.write('<br>' + '<br>' + "Pessoas empregadas com salários menores que 2500:" + '<br>');
    menor2500.forEach(user => {
        document.write(`\nNome: ${user.nome} | Idade: ${user.idade} | Salário: ${user.salario}`);
    });

    document.write('<br>' + '<br> ' + "Pessoas empregadas com salários maiores ou iguais a 2500:" + '<br>');
    maior2500.forEach(user => {
        document.write(`\nNome: ${user.nome} | Idade: ${user.idade} | Salário: ${user.salario}`);
    });