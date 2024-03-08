// CLASSES
  // Mão na massa com classes


class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log("Olá " + this.nome);
    }

    get nomeCompleto(){
        console.log("Olá " + this.nome + " " + this.sobrenome)
    }

}

p1 = new Pessoa("Deybson","Fellipe");
p1.falar();
p1.nomeCompleto;



  // Herança

class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado){
            console.log("Ligado");
            return;
        }
        this.ligado = true;
    }
}

class SmartPhone extends DispositivoEletronico{
    constructor(nome,cor,modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new SmartPhone("Sansung","Preto","A71");
console.log(s1);
s1.ligar();



  // Praticando o uso de Classe


class ContaCliente{
  constructor(numeroConta, saldo, debito, credito){
      this.numeroConta = numeroConta;
      this.saldo = saldo;
      this.debito = debito;
      this.credito = credito;
  }

  calcularSaldoAtual(){
    return this.saldo - this.debito + this.credito
  }

  verificarSaldo(){
    const saldoAtual = this.calcularSaldoAtual
    if(saldoAtual >= 0){
      alert("Saldo positivo R$ " + saldoAtual)
    }else{
      alert("Saldo negativo R$ " + saldoAtual)
    }
  }
}

let numeroConta = prompt("Digite o numero da conta do cliente:");
let saldo = parseFloat(prompt("Digite o saldo do cliente"));
let debito = parseFloat(prompt("Digite o debito do cliente"));
let credito = parseFloat(prompt("Digite o credito do cliente"));

let conta = new ContaCliente(numeroConta, saldo, debito, credito)
conta.verificarSaldo();


















