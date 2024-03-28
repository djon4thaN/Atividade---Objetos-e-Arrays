// Crie um objeto para colocar nome e duas notas. Atribua nome e
// duas notas para o primeiro objeto, que será nosso primeiro aluno.
// Agora crie mais um objeto para colocar informações do nosso
// segundo aluno. Mostre as informações de cada aluno no console.
// Mostre também a média do primeiro aluno e a média do segundo
// aluno. Por fim mostre a média desta turma de 2 alunos.

const primeiroAluno = {
    nome: 'Matheus',
    nota1: 9,
    nota2: 10,
};
const segundoAluno = {
    nome: 'Isabella',
    nota1: 8,
    nota2: 9,
};

let media1 = (primeiroAluno.nota1 + primeiroAluno.nota2) / 2;
let media2 = (segundoAluno.nota1 + segundoAluno.nota2) / 2;
let media3 = (media1 + media2) / 2;

console.log(`As informações do nosso primeiro aluno são:`);
console.log('Nome:',primeiroAluno.nome);
console.log('Primeira nota:',primeiroAluno.nota1);
console.log('Segunda nota:',primeiroAluno.nota2);
console.log(`\nAs informações do nosso segundo aluno são:`);
console.log('Nome:',segundoAluno.nome);
console.log('Primeira nota:',segundoAluno.nota1);
console.log('Segunda nota:',segundoAluno.nota2);
console.log(`\nA média do aluno Matheus é:`, media1);
console.log(`A média da aluna Isabella é:`, media2);
console.log(`\nA média da turma é:`, media3);