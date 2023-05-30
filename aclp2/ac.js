class fogao {
    constructor(id,descricao,ativo,estoque,preco,marca,tamanho) {
      this.id = id;
      this.descricao = descricao;
      this.ativo = ativo;
      this.estoque = estoque;
      this.preco = preco;
      this.marca = marca;
      this.tamanho = tamanho;
    }
  
    ativar() {
      this.ativo = true;
    }
  
    retirarEstoque(quantidade) {
      if (this.estoque >= quantidade) {
        this.estoque -= quantidade;
        console.log(`${quantidade} unidades de ${this.descricao} foram retiradas do estoque.`);
      } else {
        console.log(`Não há estoque suficiente de ${this.descricao} para retirar ${quantidade} unidades.`);
      }
    }
  
    incluirEstoque(quantidade) {
      this.estoque += quantidade;
      console.log(`${quantidade} unidades de ${this.descricao} foram adicionadas ao estoque.`);
    }
  }

  const produto = new Produto(1, "Produto A", true, 10, 10, "Atributo 1", "Atributo 2");

for (let i = 1; i <= 5; i++) {
  const quantidadeCompra = parseInt(prompt(`Informe a quantidade de produtos comprados ${i}:`));

  if (isNaN(quantidadeCompra)) {
    console.log("Quantidade inválida. a compra será ignorado.");
    continue;
  }

  const valorTotalCompra = quantidadeCompra * produto.preco;
  console.log(`\nDetalhes da compra ${i}:`);
  console.log(`Produto: ${produto.descricao}`);
  console.log(`Quantidade comprada: ${quantidadeCompra}`);
  console.log(`Valor total da compra: ${valorTotalCompra}`);

  produto.retirarEstoque(quantidadeCompra);

  console.log(`Saldo atual do estoque de ${produto.descricao}: ${produto.estoque}`);
  console.log("==========================");
}

let quantidadeIncluirEstoque = parseInt(prompt("Informe a quantidade a ser incluída no estoque final:"));

if (isNaN(quantidadeestoque)) {
  console.log("Quantidade inválida. Nenhuma inclusão de estoque será feita.");
} else {
  quantidadeestoque = Math.min(quantidadeestoque, 5);
  produto.incluirEstoque(quantidadeestoque);
  console.log(`Saldo final do estoque de ${produto.descricao}: ${produto.estoque}`);
}