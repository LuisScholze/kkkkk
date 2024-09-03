const caixaPrincipal = document.querySelector("caixa-pricipal");
const caixaPrincipal = document.querySelector("caixa-perguntas");
const caixaPrincipal = document.querySelector("caixa-alternativas");
const caixaPrincipal = document.querySelector("caixa-resultado");
const caixaPrincipal = document.querySelector("texto-resultado");

const perguntas = [
    {
        enunciado: "Por que 2+2=4?",
        alternativas: ["por que deus quis","não é 4 ","porque é matematica"]
    },
    {
        enunciado: "a mãe brigou com a filha poruqe estava bebada, quem estava bebadada",
        alternativas: ["a mãe","a filha","Eu"]
    },
    {
        enunciado: "Pergunta 3",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },
    {
        enunciado: "Pergunta 4",
        alternativas: ["aternativa1","alternativa2","alternativa3"]
    },

];

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
perguntaatual = pergunta [atual];
caixaPergunta.textContent = pergutaAtual.enunciadp;

}

mostraPergunta()