// criar um elemento:
 const titulo = document.createElement("h1");
 titulo.innerText = "Avançando com js!";
// document.body.appendChild(titulo);

//insere dentro de outro elemento
const container = document.querySelector('#container');
container.appendChild(titulo);

//if e ternário
const idade = 18;

// if(idade>=18){
//     alert("maior de idade");
// }
// else{
//     alert("Menor de idade");
// }

//ternário
idade >= 18 ? console.log("Maior de idade") : console.log("Menor de idade");

//E utilizado quanto se tem valores exatos
switch (idade) {
    case 18:
        console.log("Tem 18 anos");
        break;
    case 30:
        console.log("Tem 30 anos");
        break;

    default:
        console.log("Caso não deseja nenhuma das opões anteriores")
        break;
}

// aspas simples ou aspas duplas
const nome = 'Habner';
const sobrenome = 'Phillippe';
const frase1 = "Olá " + nome + " " + sobrenome + "!";
//templete string
const frase2 = `Olá ${nome} ${sobrenome}!`;


//estruturas de repetição- for, while, do while
console.log(frase1);
console.log(frase2);

for( let index = 0; index <  10; index++){
    console.log(index);
}

while (idade != 18) {
    console.log("Idade diferente de 18");
}

do{
    console.log("vai executar pelo menos uma vez")

}while (idade != 18) {
    
}

//consulta do tipo inferido pelo js
// let soma = 10 + 20;
// console.log(typeof soma);
// soma = '10' + 20;
// console.log(typeof soma);


//Funções com function e com arrow function

function minhaFunction1(){
    console.log("Minha Função")
}
minhaFunction1();

function minhaFunction2(nome, idade){
    console.log(`Olá ${nome}, você tem ${idade} anos`)
}
minhaFunction2("Habner", 22);

function soma(num1,num2) {
    return num1 + num2
}
const result = soma(10,20);
console.log("resultado " + result);

//Arrow Function () => {}
const multiplica = (num1, num2) => {
    return num1 * num2
}

//return para multiplas linhas
const multiplica2 = (num1, num2) => (
    num1 * num2
)


const multiplica3 = (num1, num2) => num1 * num2;


console.log(multiplica(1,5));
console.log(multiplica2(2,5));
console.log(multiplica3(3,5));

// Array[]
const frutas = ["Banana", "maça", "goiaba"]
console.log (frutas[2]);

//Tamanho do Array
console.log("Tamanho do Array: " + frutas.length)

const arrayMisto = [123, "String", {}, undefined, null, true];
console.log(arrayMisto);

//substituição de valor
arrayMisto[0] = "Outra coisa"
console.log(arrayMisto)

//Inserir na última posição
frutas.push("Laranja")
console.log(frutas)

//removendo da última posição
console.log(frutas);
frutas.pop();

//removendo o primeiro elemento
frutas.shift();

//objetos - chave: valor,

const user = {
    nome: "Habner",
    idade: 22,
    frutasPreferidas: ["Banana", "maçã", "manga"],
    temhabilitação: true
}

console.log(user);

//acessar informações no objeto
console.log(user.frutasPreferidas[0]);
console.log(user.frutasPreferidas[user.frutasPreferidas.length - 1]);

const users = [
    {
    nome: "Habner",
    idade: 22,
    frutasPreferidas: ["Banana", "maçã", "manga"],
    temhabilitação: true

    
},
{
    nome: "Phillippe",
    idade: 22,
    frutasPreferidas: ["Banana", "maçã", "manga"],
    temhabilitação: true
},
{
    nome: "Andrade",
    idade: 22,
    frutasPreferidas: ["Banana", "maçã", "manga"],
    temhabilitação: true
}
]
console.log(users)


//nome na posição 0 do arry users
console.log(users[0].nome)


// primeira fruta preferida do users[1]
console.log(users[1].frutasPreferidas[0])


// Crie um arry de objetos para uma lista de contatos 
// cada contato deve ter nome, celular, email, data de nascimento
// crie 3 contatos diferentes

const contatos = [
    {
    nome: "Habner",
    celular: "21981842757",
    email: "hp.marinha@gmail.com",
    DataNascimento: "04/12/1999"

    
},
{
    nome: "Phillippe",
    celular: "21981842000",
    email: "hp.gmail@gmail.com",
    DataNascimento: "04/12/1569"
},
{
    nome: "Andrade",
    celular: "21981842190",
    email: "email@gmail.com",
    DataNascimento: "04/12/1989"
}
]

//forEach - simular ao for - não retorna nada;
const contatosforEach = contatos.forEach((contato) => {
    console.log(contato.nome)
   // return contato.nome --> não existe no forEach
});

//console.log("array de nome: " + contatosforEach);

//simular o forEach, porém é possível retonar um elemento
const contatosmap = contatos.map((contato)=> {
    console.log(contato.email)
    return contato.nome
})
console.log("array de nome: ", contatosmap);

const numerosNaturais = [1,2,3,4,5,6,7,8,9,10];

//filter() filtra um array - caso a condição seja falsa, não entra no novo array
const numerosPares = numerosNaturais.filter(numero => numero % 2 == 0 )
    
console.log(numerosPares)

const nomeComH = contatos.filter(contato => contato.nome[0] == "H" || contato.nome[0] == "h")
console.log(nomeComH);