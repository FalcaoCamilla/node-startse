function mensagemGabriel(callback){
    setTimeout(() => {
        console.log('bebam água!');
        callback();
    }, 0);
}

function mensagemRafael(){
    console.log('Hidratados! Bora pra cima!');
}

mensagemGabriel(mensagemRafael);