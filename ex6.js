const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número para ver sua tabuada: ", function(numero) {
  const n = Number(numero);

  if (isNaN(n)) {
    console.log("Por favor, digite um número válido.");
  } else {
    console.log(`Tabuada do ${n}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${n} x ${i} = ${n * i}`);
    }
  }

  rl.close();
});