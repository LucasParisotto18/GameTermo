let linhaAtual = 0;
let colunaAtual = 0;
const maxLinhas = 6;
const maxColunas = 5;
let palavraAtual = "";
const palavraSecreta = "CASAS";


const linhas = document.querySelectorAll("#palavra");


document.addEventListener ("keydown", (event) => {
    const comando = event.key.toUpperCase();

    if (comando.match(/^[A-Z]$/)){
        preencherLetra(comando);
    } else {
        if (comando === "BACKSPACE"){
            apagarLetra();
        } else {
            if (comando === "ENTER") {
                verificarPalavra();
            }
        }
    } 

});


function preencherLetra(letra){
    if(colunaAtual < maxColunas){
        const espacos  = linhas[linhaAtual].querySelectorAll("#espacoLetra");
        espacos[colunaAtual].textContent = letra;
        palavraAtual += letra;
        colunaAtual++;
    }
    
}

function apagarLetra() {
    if (colunaAtual > 0){
        const espacos = linhas[linhaAtual].querySelectorAll("#espacoLetra");
        colunaAtual--;
        espacos[colunaAtual].textContent = "";
        palavraAtual = palavraAtual.slice(0, -1);
    }
}


function verificarPalavra() {
    if(colunaAtual === maxColunas){
        const espacos = linhas[linhaAtual].querySelectorAll("#espacoLetra");

        for(let i = 0; i < maxColunas; i++){
            const letra = palavraAtual[i];
    
            if (letra === palavraSecreta[i]){
                espacos[i].classList.add('correto');
            } else {
                if (palavraSecreta.includes(letra)){
                    espacos[i].classList.add('presente');
                } else {
                    espacos[i].classList.add('incorreto');
                }
            }
        }
    
        if (palavraAtual === palavraSecreta) {
            alert("Você acertou!");
        } else {
            linhaAtual++;
            colunaAtual = 0;
            palavraAtual = "";
        }
        if (linhaAtual >= maxLinhas) {
            alert("Fim de jogo! A palavra correta era: " + palavraSecreta);
        }
    }

}

function recarregarPagina() {
    location.reload();
}