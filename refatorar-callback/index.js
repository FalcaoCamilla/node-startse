function mensagemGabriel(){
    const promiseMensagemGabriel = new Promise((resolve, reject) => { //criada uma nova promise que recebe uma função com os parametros/metodos resolve e reject
        setTimeout(() => {
            console.log('Bebam água!');
            resolve(); //quando o console for feito, estará resolvido
        }, 0);
    });
    return promiseMensagemGabriel;
}

function mensagemRafael(){
    console.log('Hidratados! Bora pra cima!');
}

mensagemGabriel().then(mensagemRafael);
