// Crie um objeto em JavaScript para colocar 5 atributos de um
// notebook. Atribua os seguintes atributos:
// Processador = i7
// Memória = 16GB
// Preço = 5000
// HD = 1TB
// SSD = 256GB
// Por fim, mostre o nome e valor de cada atributo no console,
// exatamente como está na atividade.

let notebook = {
    Processador: 'i7',
    Memória: '16GB',
    Preço: 5000,
    hd: '1TB',
    ssd: '256GB',
};

console.log(`Comprei um notebook com essas especificações:`);
console.log('Processador: ',notebook.Processador);
console.log('Memória: ',notebook.Memória);
console.log('Preço: ',notebook.Preço);
console.log('HD: ',notebook.hd);
console.log('SSD: ',notebook.ssd);