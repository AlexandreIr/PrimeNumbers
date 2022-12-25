
let escolha
do {
    let divisivel=[]
    escolha=prompt("Escolha uma das opções abaixo:\n"+
"1- Descobrir se um numero é primo ou não\n"+
"2- Sair")    
switch (escolha){
    case "1":
        let numb=prompt("Digite um número positivo qualquer qualquer")
        

        for (i=numb-1;i>=2;i--){
            if(numb%i==0){
                divisivel.push(i)
            }
        }
        if (divisivel.length==0){
            alert("O número digitado é primo!!")
        }else{
            alert("O número digitado não é primo, pois possui "+divisivel.length+" divisores,"+
             " é divisivel pelos números: "+
            divisivel+"\nAlem de ser divisivel por 1 e por "+numb)
        }
        break;
    case "2":
        alert("O programa esta sendo encerrado!");
        break
    default:
        alert("Escolha uma opção valida")
        break
    }

} while (escolha!="2");