// FUNÇÕES
  // Mão na massa com funções


function multiplicar(x,y){
    return x * y
}

var a = multiplicar(4,2);
console.log(a);

var b = multiplicar(6,7);
console.log(b);

function  somaValores(a,b = 2,c = 6){
    var total =  a + b + c
    return total
}

var f = somaValores(8);
console.log(f);


var infoCal = function(a,b,c){
    return a + b + c;
}

console.log(infoCal(2,5,7));


const soma = (num1,num2) =>{
    return num1 + num2
}

console.log(soma(3,6));


const numeros = [1,2,3,4,5];
const valores = numeros.map((num) => num * num)
console.log(valores);


var listaProdutos = ["geladeira","fogao","air fryer"];
var listaEmMaius = listaProdutos.map(primeiraEmMaius);

function primeiraEmMaius(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1);
}

console.log(listaEmMaius);



  // Exemplos com funções



const shoppingCart = [];

function addItemToCart(item){
    shoppingCart.push(item)
}

function removerItemFromCart(item){
    const index = shoppingCart.indexOf(item)
    if(index !== -1){
        shoppingCart.splice(index, 1)
    }
}

function viewCart(){
    if(shoppingCart.length == 0){
        console.log("Seu carrinho está vazio")
    }else{
        console.log("Há itens no seu carrinho")
        for (let i = 0; i < shoppingCart.length; i++){

            console.log(`${i + 1} = ${shoppingCart[i]}`);
        }
    }
}

function clearCart(){
    shoppingCart.length = 0;
    console.log("Seu carrinho está vazio");
}

addItemToCart(Tenis);
addItemToCart(Blusa);
addItemToCart(Short);



  // Objetos
    // Formas de criar


    
  const pessoa = {
    nome: "Fellipe",
    sobrenome: "Carvalho"
  }

  console.log(pessoa['sobrenome']);

  

  const funcionario = new Object();
  funcionario.nome = "Fellipe"
  funcionario.sobrenome = "Carvalho"

  console.log(funcionario.nome);

  

  function criarPessoa(nome, sobrenome){
    return{nome, sobrenome}
  }

  const p1 = criarPessoa("Fellipe","Carvalho");
  const p2 = criarPessoa("Deybson","Leite");

  console.log(p1);
  console.log(p2);


    Mais sobre objetos


function criarFuncionario(nome, sobrenome, a, p){
    return{
      nome,
      sobrenome,
      altura: a,
      peso: p,

      calculoImc(){
        const indice = this.peso/(this.altura ** 2).toFixed(1)
        if(indice < 18.5){
          console.log("Abaixo do peso")
        } else if(indice >= 18.5 && indice < 24.9){
          console.log("Peso ideal")
        } else if(indice >= 25 && indice < 29.9){
          console.log("Acima do peso")
        } else if(indice >= 30 && indice < 34.9){
          console.log("Obesidade grau 1")
        }else if(indice >= 35 && indice < 39.9 ){
          console.log("Obesidade grau 2")
        }else if(indice >= 40){
          console.log("Obesidade grau 3")
        }
      }
    }
}

const p1 = criarFuncionario("Deybson", "Fellipe", 1.65, 68);
p1.calculoImc();




















