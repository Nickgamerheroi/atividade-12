function start() { 
    let n;
    n = prompt("Digite seu nome ")
    console.log('Voce tem 10000 pontos para colocar em 3 atributos distintos')
    console.log('Saude Mental')
    console.log('Fisico')
    console.log('Vida social')
    console.log('ATENÇAO A SOMA DOS VALORES DEVE SER IGUAL A 10000')
    valInicial()
}
function valInicial() {
    let sm , vs, vf;
    do{
        sm = prompt("Valor da Saude Mental: ");
        vf = prompt("Valor do Fisico: "); 
        vs = prompt("Vida Social: ");
    
        sm = parseInt(sm)
        vf = parseInt(vf)
        vs = parseInt(vs)

        if( (sm + vf + vs) != 10000 ){
            alert("A soma dos valores deve ser igual a 10000.");
        } else{
            break;
        }
    }while( (sm + vf + vs) != 10000);

    let id;
    id = parseInt(id)
    id = 15;

     console.log('\n\n------O-jogo-Começou-------')
     console.log('Sua idade atual e igual a ' + id + ' anos')
     console.log('\n-Escolha-qual-caminho-vai-trilhar')
     console.log('1 - Você ficará em casa estudandos para as provas')
     console.log('2 - você ira para uma grande festa com seus amigos')

     let x;
            x = parseInt(x)
     do{
            x = prompt("Qual Caminho vai seguir ? ");

            switch(x) {
                case '1': 
                vs -= 2000;
                console.log(':(  Seus amigos te acham entediante.')
                console.log(':)  Parabens voce foi bem nas prova e poupou sua saude mental') 
                console.log('***VOCE PERDEU 2000 DE VIDA SOCIAL***')
                break;

                case '2':  
                sm -= 2000;
                console.log(':)   Agora seus amigos te acham incrivel')
                console.log(':(  Você não estudou para as provas e não foi muito bem.')
                console.log('***VOCE PERDEU 2000 de SAUDE MENTAL***')
                break;
  
            }      
            if(x != 1 && x != 2){
                alert("Escolha uma situação valida");

            }else {
                break;}

        }while(x != 1 && x != 2)

        if(vs < 0){
            console.log('GAME OVER')
            console.log('Você morreu sem amigos')
            return;
            }
        if(vf < 0){
            console.log('GAME OVER')
            console.log('Você morreu sedentario')
            return;
            }
        if(sm < 0){
            console.log('GAME OVER')
            console.log('Você morreu de depressão')
            return;
            }

            id += 1;

        console.log('\n------Valores atuais-----')
        console.log('Sua idade:' + id + 'anos')
        console.log('Saude Mental:' + sm)
        console.log('Fisico:' + vf)
        console.log('Vida social:' + vs)
        
        

     console.log('\n\nEscolha-qual-caminho-vai-trilhar')
     console.log('1 - Você deixa tudo e vai para as farras do if ')
     console.log('2 - Você deixa tudo e vai estudar para o enem ')
     console.log('3 - Você deixa tudo e vai jogar basquete')


        let y;
        y = parseInt(y)
 do{
        y = prompt("Qual Caminho vai seguir ? ");

        switch(y) {
            case '1': 
            vf -= 500;
            vs -= 500;
            sm -= 500;
            console.log(':(  Ficou com overdose e ainda passou um mico nas festas.')
            console.log('***VOCE PERDEU 500 EM TODOS OS ATRIBUTOS***')
            break;

            case '2':  
            sm -= 1000;
            vs += 1000;
            vf -= 1000;
            console.log(':<  Voce fica frustrado por não conseguir resolver uma questão')
            console.log(':>  Porém com ajuda de seus amigos consegue resolve-la posteriormente.')
            console.log('***VOCE PERDE 1000 de SAUDE MENTAL, 1000 DE FISICO E GANHA 1000 de VIDA SOCIAL *** ')
            break;

            case '3':  
                sm += 1000;
                vs += 1000;
                vf += 1000;

                console.log(':) Parabens voce treina seu fisico, joga com os amigos e ainda fica feliz')
                console.log('***VOCE ganhou 1000 em todos os atributos***')
                break;
            
                }      
        if(y != 1 && y != 2 && y != 3){
            alert("Escolha uma situação valida");
            
        }else {
            break;}

            if(vs < 0){
                console.log('GAME OVER')
                console.log('Você morreu sem amigos')
                return;
            }
            if(vf < 0){
                console.log('GAME OVER')
                console.log('Você morreu sedentario')
                return;
            }
            if(sm < 0){
                console.log('GAME OVER')
                console.log('Você morreu de depressão')
                return;
            }

    }while(y != 1 && y != 2 && y != 3)
    id += 1;
    console.log('\n\n------Valores atuais-----')
    console.log('Sua idade: ' + id + ' anos')
    console.log('Saude Mental:' + sm)
    console.log('Fisico:' + vf)
    console.log('Vida social:' + vs)


    console.log('\n\nEscolha-qual-caminho-vai-trilhar')
    console.log('1 - Você vai ao curso de filosofia do professor admilson ')
    console.log('2 - Você vai ao treino de volei  ')
    console.log('3 - Você vai ver sua grande amiga')
        let z;
        z = parseInt(z)
    do{
        z = prompt("Qual Caminho vai seguir ? ");

        switch(z) {
            case '1': 
            sm -= 500;
            console.log(':(  Admilson e louco e agora voce esta questionando sua propria existência.')
            console.log('***VOCE PERDEU 500 DE SAUDE MENTAL***')
            break;

            case '2':  
            sm += 1000;
            vf += 1000;
            console.log(':>  Voce percebe que seu time é como uma familia e se conforta com isso')
            console.log(':>  Seu corpo agradece.')
            console.log('***VOCE ganha 1000 de SAUDE MENTAL E 1000 DE FISICO *** ')
            break;

            case '3':  
                sm += 900;
                vf += 1000;

                console.log(':) Parabens, ganhou uma namorada e parceira pro resto da vida')
                console.log(':) Ela te incentiva a treinar e você fica bem fisicamente')
                console.log('***VOCE ganhou 1000 em fisico e 900 em saúde mental***')
                break;
            
                }      
        if(z != 1 && z != 2 && z != 3){
            alert("Escolha uma situação valida");
            
        }else {
            break;}

            if(vs < 0){
                console.log('GAME OVER')
                console.log('Você morreu sem amigos')
                return;
            }
            if(vf < 0){
                console.log('GAME OVER')
                console.log('Você morreu sedentario')
                return;
            }
            if(sm < 0){
                console.log('GAME OVER')
                console.log('Você morreu de depressão')
                return;
            }

    }while(z != 1 && z != 2 && z != 3)
    id += 1;
    console.log('\n\n------Valores atuais-----')
    console.log('Sua idade: ' + id + ' anos')
    console.log('Saude Mental:' + sm)
    console.log('Fisico:' + vf)
    console.log('Vida social:' + vs)
    console.log('Parabens ' + n + ' você completou seus 18 anos e saiu da adolescência, sua vida  sera estável daqui pra frente.')

}
