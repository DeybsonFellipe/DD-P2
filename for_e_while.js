// INSTRUÇÕES: FOR E WHILE
  // Usando FOR


var carro = [{modelo: 'Audi A3', marca: 'Audi', ano: 2020},
 {modelo: 'Compass', marca: 'Jeep', ano: 2021}]

for (let caracteristica in carro){
    console.log(carro[caracteristica]);
}



// Usando while e do while


var carro = [{modelo: 'Audi A3', marca: 'Audi', ano: 2020},
{modelo: 'Compass', marca: 'Jeep', ano: 2021}]

for (let c of carro){
    console.log(c.ano);
}

var c = 1;
while (c <= 10){
    console.log(c);
    c++;
}





