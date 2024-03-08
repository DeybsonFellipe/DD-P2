// CLASSES
  // Prática


class Funcionario{
    constructor(nome, idade, cargo){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar(){
        console.log("Olá, me chamo " + this.nome)
    }

    trabalhar(){
        console.log("Funcionario", this.nome," Trabalhando");
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo,departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        console.log("O Gerente", this.nome, " está gerenciando o departamento: ", this.departamento);
    }

}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem){
        super(nome, idade, cargo)
        this.linguagem = linguagem;
    }

    programar(){
        console.log("O desenvolvedor", this.nome, "está programando em ", this.linguagem)
    }
}

let desenvolvedor = new Desenvolvedor("Fellipe",22,"developer","Js");
desenvolvedor.trabalhar();
desenvolvedor.programar();
desenvolvedor.seApresentar();