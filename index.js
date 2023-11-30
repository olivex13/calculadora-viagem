console.log("Calculadora de Viagem");

let destino = "São Thome das letras";
let veiculo = "Renault Sandero";
let distancia = 361;
let idaVolta = distancia * 2;
let autonomia = 10;
let precoCombustivel = 5.00;
let custo = idaVolta / autonomia * precoCombustivel;

console.log(`O destino da viagem é ${destino} e será usado o veiculo ${veiculo}.`);
console.log(`A distancia a ser percorida até lá é de ${distancia} Kms e ida e volta vão ser percorridos ${idaVolta} kms.`);
console.log(`O consumo médio do veiculo é de ${autonomia} KM/L e o preço do combustivel é de R$ ${precoCombustivel} por litro.`);


console.log(`O custo da viagem vai ser de R$ ${custo} sem contar os custos com pedágio.`);

