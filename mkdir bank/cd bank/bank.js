//classe
class conta{
    constructor(numero,cpf,salto,ativo){
        this.numero = numero;
        this.cpf = cpf;
        this.salto = salto;
        this.ativo = ativo;
    }

    ativar(){
        this.ativo = true;
    }

    credito(valor){
        if (this.saldo){
            this.salto += valor
        } 
        else {
            console.log("conta ativo...")
        }
    }

    debito(valor){
        if (this.ativo){
            console.log("conta ativo...")
        }

        if(valor<0){
            console.log("impossivel realizar, valor negativo...")
        }

    else if(valor ==0){
        console.log("impossivel realizae, valor zerado...")
    }
    else if (valor>this.salto){
        console.log("impossivel realizar, salto indisponivel...")
    }
    else{
        this.salto -= valor
    }
        this.salto -= valor
    }
}
class corrente extends conta {
    constructor(numero,cpf,saldo,ativo,talãoMax,talãoUsuario){
    super(numero,cpf, saldo, ativo);
    this.talãoMax = talãoMax
    this.talãoUsuario = talãoUsuario
    }
    
    talão(valor){
    if (this.talãoUsuario < this.talãoMax) {
    if(valor <= 30){
    this.saldo += valor
    this.talãoUsuario++
} 
    else if(valor>30){
    console.log("ultrapassou o limite do saldo de 30 reais")
}
    else if(valor ==0){
    console.log("impossivel realizar o saldo")
}
    }
    
    else{
    console.log("voce ja chegou no seu limite de 3 talões")
    }
  }
}
// programa principal
const leia = require("prompt-sync")()
 let numero = parseint(leia("digite o numero de conta : "))
 let cpf = leia("digite o cpf da conta : ")
 let c1 = new conta(numero,cpf,0,false)
let op=""
c1.ativar()
for (let x=1; x<=10; x++){
    op = leia("digite D - debito ou c para credito :")
    if(op=="D"){
        valor = parseint(leia("digite o valor para debito : "))
        c1.debito(valor)
    }

    else if(op=="c"){
        valor = parseint(leia("digite o valor do credito : "))
        c1.credito(valor)
    }
}
console.log("salto final da conta"+c1.salto)