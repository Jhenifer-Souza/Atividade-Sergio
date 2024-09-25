//Atividade 1

function validarDados() {

    //obtendo os dados digitados pelo usuario
    let Data = frmRegistro.inData.value;
    let NomeCliente = frmRegistro.inCli.value;
    let Telefone = frmRegistro.inFone.value;
    let Email = frmRegistro.inMail.value;
    let NomeProduto = frmRegistro.inProd.value;
    let Quantidade = frmRegistro.inQtd.value;
    let ValorUnitario = frmRegistro.inVal.value;

    if (Data.trim() =='' ) {

        frmRegistro.inData.focus();
     

        return false;
    }

    if (NomeCliente.trim() == '' || NomeCliente.trim().length < 5 ) {
    
        frmRegistro.inCli.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro ';

    return false;
    }

    if (Telefone.trim() == ''){
        
        frmRegistro.inFone.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro ';

        
        return false;
    }

    if (Email.trim() == '' || NomeCliente.trim().length < 5 ) {
   
        frmRegistro.inMail.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro ';

     return false;
    }

    if (NomeProduto.trim() == '' || NomeCliente.trim().length < 5 ) {
     
        frmRegistro.inProd.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro ';

       return false;
    }

    if (Quantidade.trim() == '' && Quantidade.trim() <0) {
        
        frmRegistro.inQtd.focus();
        mensagemerro.style.display = 'block';
        mensagemerro.innerText = 'Erro ';

        return false;
        }

        if (ValorUnitario.trim() == '' && ValorUnitario.trim() <0) {
           
            frmRegistro.inVal.focus();
            mensagemerro.style.display = 'block';
            mensagemerro.innerText = 'Erro ';
    
            return false;
            }

 else {
    mensagemerro.style.display = 'none';
            mensagemerro.innerText ;
 }

}


//Atividade 2

//Atividade 3

function acenderLampada() {

    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let interruptor = caminho.substring(caminho.lastIndexOf('/')+1);
    let botao = document.getElementById('btnEnviar');

    if (interruptor == 'apagada.jpg' || interruptor == '') {
        imagem.src = 'img/acesa.jpg';
        botao.textContent = 'Apagar';
    }
    else {
          imagem.src = 'img/apagada.jpg';
          botao.textContent = 'Acender';
    }

   }

//Atividade 4