//recuperando os elementos
const imagemPedra = document.querySelector("#pedra");
const imagemTesoura = document.querySelector("#tesoura");
const imagemPapel = document.querySelector("#papel");
const nomeDoVencedor = document.querySelector("#vencedor");
const imagemDoJogador = document.querySelector("#img-jogador");
const imagemDaMaquina = document.querySelector("#img-maquina");
const resetar = document.querySelector("#reset");

// Variaveis
let scoreJogador = document.querySelector("#pontoSeu");
let scoreMaquina = document.querySelector("#pontoDaMaquina");

let escolhaDoJogador = "";
let escolhaDaMaquina = "";
let contadorVitoriasJogador = 0;
let contadorVitoriasMaquina = 0;
opcoes = ["Pedra", "Tesoura", "Papel"];                                     //opções para busca randômica da máquina para enfrentar o jogador

//Valores de delay e scale
const delay = 800;
const escala = 1.2;

// Lista das imagens
        //função para retornar à escala 1:1, após aumentar, quando pontuado
function escalaNormal() {
    document.querySelector("#pontoDaMaquina").style.scale = 1;
    document.querySelector("#pontoSeu").style.scale = 1;
}

imagens = ["/imgs/pedra.png", "/imgs/tesoura.png", "/imgs/papel.png"]

// Função invocada pelo evento pedra 
function Pedra(evento) {
    escolhaDoJogador = "Pedra";
    escolhaDaMaquina = opcoes[Math.floor(Math.random() * opcoes.length)];   //procurando aleatoriamente um valor na lista de opções
    document.querySelector("#img-jogador").style.opacity = 1;
    document.querySelector("#img-maquina").style.opacity = 1;
    switch (escolhaDaMaquina) {
        case "Pedra":
            imagemDaMaquina.src = imagens[0];
            break;
        case "Tesoura":
            imagemDaMaquina.src = imagens[1];
            break;
        case "Papel":
            imagemDaMaquina.src = imagens[2];
            break;
    }
    imagemDoJogador.src = "/imgs/pedra.png";  //trocando a imagem     
    evento.preventDefault();
    if(escolhaDaMaquina == "Pedra") {
        nomeDoVencedor.value = "Empate";
    } else if (escolhaDaMaquina == "Papel") {
        nomeDoVencedor.value = "Máquina venceu"
        contadorVitoriasMaquina = parseInt(contadorVitoriasMaquina) + 1;
        document.querySelector("#pontoDaMaquina").style.scale = escala;
        setInterval(escalaNormal, delay);
    } else {
        nomeDoVencedor.value = "Você venceu";     //interpolando o nome inputado do jogador
        document.querySelector("#pontoSeu").style.scale = escala;
        setInterval(escalaNormal, delay);
        contadorVitoriasJogador = parseInt(contadorVitoriasJogador) + 1;
    }
    scoreJogador.value = contadorVitoriasJogador;
    scoreMaquina.value = contadorVitoriasMaquina;
};

// Função invocada pelo evento tesoura
function Tesoura(evento) {
    escolhaDoJogador = "Tesoura";
    escolhaDaMaquina = opcoes[Math.floor(Math.random() * opcoes.length)];   //procurando aleatoriamente um valor na lista de opções
    document.querySelector("#img-jogador").style.opacity = 1;
    document.querySelector("#img-maquina").style.opacity = 1;
    switch (escolhaDaMaquina) {
        case "Pedra":
            imagemDaMaquina.src = imagens[0];
            break;
        case "Tesoura":
            imagemDaMaquina.src = imagens[1];
            break;
        case "Papel":
            imagemDaMaquina.src = imagens[2];
            break;
    }
    imagemDoJogador.src = "/imgs/tesoura.png";  //trocando a imagem
    evento.preventDefault();
    if(escolhaDaMaquina == "Tesoura") {
        nomeDoVencedor.value = "Empate";
    } else if (escolhaDaMaquina == "Papel") {
        nomeDoVencedor.value = "Você venceu";
        document.querySelector("#pontoSeu").style.scale = escala;
        setInterval(escalaNormal, delay);
        contadorVitoriasJogador = parseInt(contadorVitoriasJogador) + 1;
    } else {
        nomeDoVencedor.value = "Máquina venceu";
        document.querySelector("#pontoDaMaquina").style.scale = escala;
        setInterval(escalaNormal, delay);
        contadorVitoriasMaquina = parseInt(contadorVitoriasMaquina) + 1;
    }
    scoreJogador.value = contadorVitoriasJogador;
    scoreMaquina.value = contadorVitoriasMaquina;
};

// Função invocada pelo evento papel
function Papel(evento) {
    escolhaDoJogador = "Papel";
    escolhaDaMaquina = opcoes[Math.floor(Math.random() * opcoes.length)];   //procurando aleatoriamente um valor na lista de opções
    document.querySelector("#img-jogador").style.opacity = 1;
    document.querySelector("#img-maquina").style.opacity = 1;
    switch (escolhaDaMaquina) {
        case "Pedra":
            imagemDaMaquina.src = imagens[0];
            break;
        case "Tesoura":
            imagemDaMaquina.src = imagens[1];
            break;
        case "Papel":
            imagemDaMaquina.src = imagens[2];
            break;
    }
    imagemDoJogador.src = "/imgs/papel.png"
    evento.preventDefault();
    if(escolhaDaMaquina == "Papel") {
        nomeDoVencedor.value = "Empate";
    } else if (escolhaDaMaquina == "Tesoura") {
        nomeDoVencedor.value = "Máquina venceu";
        document.querySelector("#pontoDaMaquina").style.scale = escala;
        setInterval(escalaNormal, delay);
        contadorVitoriasMaquina = parseInt(contadorVitoriasMaquina) + 1;
    } else {
        nomeDoVencedor.value = "Você venceu"
        document.querySelector("#pontoSeu").style.scale = escala;
        setInterval(escalaNormal, delay);
        contadorVitoriasJogador = parseInt(contadorVitoriasJogador) + 1;
    }
    scoreJogador.value = contadorVitoriasJogador;
    scoreMaquina.value = contadorVitoriasMaquina;
};

// Função invocada pelo evento resetar
function zerarScore(evento) {
    contadorVitoriasJogador = 0;
    contadorVitoriasMaquina = 0;
    nomeDoVencedor.value = "";
    document.querySelector("#img-jogador").style.opacity = 0.2;
    document.querySelector("#img-maquina").style.opacity = 0.2;
    imagemDaMaquina.src = "data:image/png;base64,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"
    imagemDoJogador.src = "data:image/png;base64,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"
    scoreJogador.value = contadorVitoriasJogador;
    scoreMaquina.value = contadorVitoriasMaquina;
    
};

// Eventos
imagemPedra.addEventListener("click", Pedra);
imagemTesoura.addEventListener("click", Tesoura);
imagemPapel.addEventListener("click", Papel);
resetar.addEventListener("click", zerarScore);