console.log("Calculadora de Viagem");

let destino = "São Thome das letras";
let veiculo = "Renault Sandero";
let distancia = 361;
let idaVolta = distancia * 2;
let autonomiaGasolina = 10;
let autonomiaEtanol = 7; 
let precoGasolina = 5.00;
let precoEtanol = 3.00;
let custoGasolina = idaVolta / autonomiaGasolina * precoGasolina;
let custoEtanol = idaVolta / autonomiaEtanol * precoEtanol;


console.log(`O destino da viagem é ${destino} e será usado o veiculo ${veiculo}.`);
console.log(`A distancia a ser percorida até lá é de ${distancia} Kms e ida e volta vão ser percorridos ${idaVolta} kms.`);
console.log(`O consumo médio do veiculo é de ${autonomiaGasolina} KM/L usando gasolina e o preço do combustivel é de R$ ${precoGasolina} por litro.`);
console.log(`O consumo médio do veiculo é de ${autonomiaEtanol} KM/L usando etanol e o preço do combustivel é de R$ ${precoEtanol} por litro.`);
    
console.log(`O custo da viagem com gasolina vai ser de R$ ${custoGasolina} e em Etanol vai ser R$ 
${custoEtanol.toFixed(2)} sem contar os custos com pedágio.`);

    if (custoEtanol > custoGasolina) {
        console.log("É melhor abastecer Gasolina")
}
     else {
         console.log("É melhor abastecer Etanol")
}