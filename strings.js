// STRINGS
  // Strings e seus métodos


var nome = "Fellipe Carvalho";
var x = nome.length;
console.log(x);

resultado = x > 15 ? "Obrigado" : "Por favor inserir nome completo"; 
console.log(resultado);

var res = nome.toLocaleUpperCase();
console.log(res);

var jogo = "Barcelona vs Real Madrid"
var posicao = jogo.indexOf("Real");
console.log(posicao);

var cortado = jogo.slice(0,5);
console.log(cortado);

var val = jogo.includes("Real");
console.log(val);

var str1 = "Hello";
var str2 = " Turma";
var str3 = str1.concat(str2);
console.log(str3);

var frase = "     Olá voce esta aprendendo      ";
console.log(frase.trim()); 

var num = "1,2,3,4,5,6,7,8,9";
var arr = num.split(",");
console.log(arr);



  // Praticando nosso conhecimento


  var s = "JavaScript e Python";
  var pos1 = s.indexOf("Python");
  var novaString = s.substring(13,19);
  console.log(novaString);

  var frase = "Olá mundo";
  if(frase.startsWith("Olá")){
      let sub = frase.substring(4,);
      let novaString = sub.replace("mundo", "pessoal");
      let novaStringMai = novaString.toUpperCase();
      console.log(novaStringMai);
  }
