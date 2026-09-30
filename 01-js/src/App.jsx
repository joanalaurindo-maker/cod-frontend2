
import './App.css'

function App() {
  function calculadoraChurrascoGildao() {
    let numeroPessoas = Number(prompt('Quantas pessoas vão para o churrasco?'));
    let carnePorPessoaG = Number(prompt('Quantidade média de carne por pessoa (gramas):'));

    let totalCarneKg = (numeroPessoas * carnePorPessoaG) / 1000;

    alert('Seu Gildão - Calculadora de Churrasco:\nVocê precisará comprar ' + totalCarneKg.toFixed(2) + ' kg de carne.');
    console.log('Total de carne para o churrasco do Seu Gildão:', totalCarneKg);
  }
  function precoRacaoRonBernardo() {
    let pesoSacoKg = Number(prompt('Peso do saco de ração (kg):'));
    let precoPorKg = Number(prompt('Preço cobrado por kg (R$):'));

    let valorTotalSaco = pesoSacoKg * precoPorKg;

    alert('Pet Shop Ron Bernardo\nO preço total do saco de ração é: R$ ' + valorTotalSaco.toFixed(2));
    console.log('Preço da ração calculado:', valorTotalSaco);
  }
  function politicaPrecosRomeroBrique() {
    let custoProducao = Number(prompt('Custo de produção do produto (R$):'));
    let margemLucroDesejada = Number(prompt('Margem de lucro desejada (%):'));

    let precoVenda = custoProducao + (custoProducao * (margemLucroDesejada / 100));

    alert('Romero Brique - Política de Preços:\nO preço final de venda deve ser: R$ ' + precoVenda.toFixed(2));
    console.log('Preço calculado por Romero Brique:', precoVenda);
  }

  function poupancaManoJuca() {
    let saldoAtual = Number(prompt('Valor atual na poupança do Mano Juca (R$):'));
    let depositoMensal = Number(prompt('Quanto o Mano Juca vai guardar este mês (R$):'));

    let totalPoupanca = saldoAtual + depositoMensal;

    alert('Mano Juca - Controle de Poupança:\nO novo saldo da poupança é: R$ ' + totalPoupanca.toFixed(2));
    console.log('Saldo do Mano Juca:', totalPoupanca);
  }
  function suprimentosSarumano() {
    let orcsNoEsercito = Number(prompt('Quantidade de orcs no exército:'));
    let racaoPorOrc = Number(prompt('Quantidade de ração que cada orc consome por mês (kg):'));

    let totalSuprimentos = orcsNoEsercito * racaoPorOrc;

    alert('Sarumano - Planejamento de Suprimentos:\nSerão necessários ' + totalSuprimentos.toFixed(2) + ' kg de ração para este mês.');
    console.log('Suprimentos necessários:', totalSuprimentos);
  }


  function lucroCapitaoGanso() {
    let saquesETesouros = Number(prompt('Valor total de tesouros e saques do mês (R$):'));
    let custosTripulacao = Number(prompt('Gastos com tripulação, rum e reparos do navio (R$):'));

    let lucroMensal = saquesETesouros - custosTripulacao;

    alert('Capitão Ganso - Relatório do Mês:\nO lucro mensal foi de: R$ ' + lucroMensal.toFixed(2));
    console.log('Lucro do Capitão Ganso:', lucroMensal);
  }
   

  function faturamentoDonaBete() {
    let vendasDoDia = Number(prompt('Informe o valor das vendas de hoje (R$):'));
    let custosDoDia = Number(prompt('Informe os custos com ingredientes e gastos do dia (R$):'));

    let faturamentoLiquido = vendasDoDia - custosDoDia;

    alert('Dona Bete - Resumo do Dia:\nFaturamento Líquido: R$ ' + faturamentoLiquido.toFixed(2));
    console.log('Faturamento de Dona Bete:', faturamentoLiquido);

  }


  function calcularFreteTelles() {
    let distanciaKm = Number(prompt('Informe a distância da entrega (em km):'));
    let precoPorKm = Number(prompt('Informe o valor cobrado por km (R$):'));

    let valorTotal = distanciaKm * precoPorKm;

    alert('Telles Transportes\nO valor final do frete é: R$ ' + valorTotal.toFixed(2));
    console.log('Valor do frete calculado:', valorTotal);
  }


function chancesDevs (){
    let olhadasCelular = Number (prompt('Quantas vezes olhou para o celular:*'));
    let chances = (0.1/(1+500*olhadasCelular))*100;
    alert ('As chances dos devs são'+ chances.toFixed (2) + '%');
    
    let chances2 = 1 / chances 
    alert('A chance de ser reprovado é ' + chances2 + 'de ser aprovado');
  }


  function  pesoVeiculo(){
    let pesoBruto = Number (prompt('Peso bruto do caminhao e caga (kg):'));
    let caminhaoVazio = Number (prompt('Peso do caminhao vazio (kg):'));

    let pesoCarga = pesoBruto - caminhaoVazio;
    alert ('o peso da carga é' +pesoCarga + 'kg');

  }

  function salarioJunior () {
    let salariomensal = Number (prompt('salario mensal do junin:'));
    let DiasTrabalhos = Number (prompt('dias trabalhados pelo junin:'));
    let salarioFinal = salariomensal + DiasTrabalhos;
    alert ('O salario final do Junior é' + salarioFinal)
  }

  function custosDaIgreja () {
    let customensal, recibododia, faltaapagar
    customensal = Number (prompt('O custo mensal é:'));
    recibododia = Number (prompt('O recibo do dia foi:'));

    faaltapagar = customensal - recebidododia;

    alert('falta pagar' + faltaapagar + 'dos custos mensais da igreja')
    console.log(faltaapagar);
  }

  function calcularVendas()  {
    let quantidadeinicial, quantidadefinal, totalvendas
    quantidadeinicial = Number (prompt('quantidade inicial de laranjas'));
    quantidadefinal = Number(prompt('quantidade final de laranjas'));
  
    totalvendas = quantidadeinicial - quantidadefinal;

    alert('total de laranjas' + totalvendas + 'vendidas')
    console.log(totalvendas);
  }
  function trocarSapatos() {

let quantidadePares, preçoPar, valorTotal;
quantidadePares = Number(prompt('Quantidade de pares:'));
preçoPar = Number(prompt('Preço de cada par:'));

valorTotal = quantidadePares * preçoPar;

alert('Valor total R$ ' + valorTotal.toFixed(2));
console.log(valorTotal);

}

function calcularPontos() {
  let vitórias = Number(prompt('Numero de vitórias:'));
  let empates = Number(prompt('Numero de empates:'));
  let pontos = vitórias * 3 + empates;

  alert('O time tem ' + pontos + ' pontos');
  console.log(pontos);
}

function calcularDevs() {
  let devscltclt= Number(prompt('Quantidade de devs CLT:'));
  let devspjpj = Number(prompt('Quantidade de devs PJ:'));
  let devsestagiario = Number(prompt('Quantidade de devs Estagiario:'));

  let totalDevs = devscltclt + devspjpj + devsestagiario;
  alert('O time tem ' + totalDevs + ' desenvolvedores');
}
  return (

<div className="cont-app">
  <h1>Javascript no React</h1>
  <h2>Exercicios</h2>
  <hr />
  <button onClick={calcularDevs}>gui portoes</button>
  <button onClick={calcularPontos} >Campeonato</button>
  <button onClick={trocarSapatos}>Trocas Pé Pequeno</button>
  <button onClick={pesoVeiculo}>peso veiculo</button>
  <button onClick={salarioJunior}>junior salario</button>
  <button onClick={custosDaIgreja}>custos da igreja</button>
   <button onClick={chancesDevs}>chances</button>
   <button onClick={calcularFreteTelles}>Calcular Preço do Frete</button> 
   <button onClick={faturamentoDonaBete}>Calcular Faturamento</button>
   <button onClick={lucroCapitaoGanso}>Calcular Lucro Mensal</button>
   <button onClick={suprimentosSarumano}>Calcular Suprimentos</button>
   <button onClick={poupancaManoJuca}>Calcular Poupança</button>
   <button onClick={politicaPrecosRomeroBrique}>Calcular Preço de Venda</button>
   <button onClick={precoRacaoRonBernardo}>Calcular Preço da Ração</button>
   <button onClick={calculadoraChurrascoGildao}>Calcular Carne do Churrasco</button>



<hr />
</div>

)
}

export default App


  // gasto -- 100
  // faturamwnto -- lucro

  // gasto*lucro = fat*100

  // lucro = (fat*100)/gasto