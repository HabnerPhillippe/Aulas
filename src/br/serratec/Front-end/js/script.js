// imprime msg no console
console.log("Hellow World!");

// mostra uma janela de alerta com botão de OK
//alert("Hello World!");

//abre caixa de diálogo que espera um texto como resposta
//const nome = prompt("Qual é o seu nome?");

console.log("Olá,", nome)

// Tipos de variáveis -> const, let, var;
//const -> é um valor constante
//let -> valor de variável mais utilizado
//var -> similar ao let, porém tem problema de escopo

const idade = 21;
let estadoCivil = "solteiro";

//Funções
function imprimeNoConsole(){
    console.log("Função impreme no console ativada com sucesso!")
}

//Chamando uma função


//imprimeNoConsole();

const user = {
email: "Habner@gmail.com",
senha: "senha@123"
}

//função para login e senha
function login(){
    const email = document.querySelector("#email");
    const senha = document.querySelector("#senha");

    if(email.value == "" || senha.value == ""){
        alert("Preencha todos os campos!");
        return
    }
    
   if(email.value == user.email && senha.value == user.senha){
    alert("Seja bem-vindo!")
   }else{ alert("Senha ou email incorretos!")
    }
    
    email.value = ""
    senha.value = ""    
}

function switchTheme() {
    const botao = document.querySelector("#flexSwitchCheckDefault")

    if(botao.checked){
        document.body.style.backgroundColor = '#000'
        document.body.style.color = '#fff'
    } else {
        document.body.style.backgroundColor = '#fff'
        document.body.style.color = '#000'
    }
}

