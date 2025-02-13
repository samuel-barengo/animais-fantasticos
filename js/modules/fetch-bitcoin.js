export default function initFecthBitcoin() {
    fetch('https://blockchain.info/ticker')
        .then(r => r.json())
        .then(bitcoin => {
            const btcPreco = document.querySelector('.btc-preco');
            btcPreco.innerText = (1000 / bitcoin.BRL.sell).toFixed(4);
        })
        .catch(error => {
            console.log(Error(error));
        });
}


//async function fecthBitcoin() {
//    try {
//        const bitcoinResponse = await fetch('https://blockchain.info/ticker');
//        const bitcoinJSON = await bitcoinResponse.json();
//        const btcPreco = document.querySelector('.btc-preco');
//
//        btcPreco.innerText = (1000 / bitcoinJSON.BRL.sell).toFixed(4);
//    }
//    catch (erro) {
//        console.log(Error(erro));
//    }
//}
//fecthBitcoin()