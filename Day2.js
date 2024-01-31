// 2º Dia
// Solicitando e imprimindo dados basicos 

// Variáveis com iniciais (const) não podem ser reatribuidas

const nome=prompt("Qual o seu nome?: "); 
const idade=prompt("Quantos anos você tem?: ");
const linguagem=prompt("Qual linguagem de programação você está estudando?:");

// Atribuindo dados a var (msg)
const msg = `Ola ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}`;

// Exibindo a mensagem que foi atribuida a var <msg>
alert(msg);

const msg2 = `Voce gosta de estudar ${linguagem}?`;
alert(msg2);
const opcao = prompt("Responda com o numero 1-Para SIM ou 2-Para NÃO: ");

if(opcao === '1'){
    alert('Muito bom, continue estudando e você terá muito sucesso!');
}else if(opcao === '2'){
    alert('Ah que pena... Já tentou aprender outras linguagens?')
}
