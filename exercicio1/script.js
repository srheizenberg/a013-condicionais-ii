const numero = Number(prompt('Digite um numero: '))

if (numero % 2 == 0 ){
    if(numero % 3 == 0){
console.log("Este numero e divisivel por 2 e 3")
    }else{
        console.log("este numero não é divisivel por 3!")
    }
}else{
    console.log("Este numero não e divisivel por 2!")
}

const numero02 = Number(prompt('Digite um numero: '))

if(numero02 % 2 == 0 && numero02 % 3 == 0){
    console.log("Este numero é divisivel por 2 e 3")
}else{
    console.log("este numero não é divisivel por 2 e 3")
}

