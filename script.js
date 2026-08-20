import { aleatorio, nome } from "./aleatorio.js";
import { perguntas } from "./perguntas.js";

const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".novamente-btn");

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    const perguntaAtual = perguntas[atual];

    // Substitui "você" pelo nome sem alterar o objeto original
    caixaPerguntas.textContent = perguntaAtual.enunciado.replace(/você/gi, nome);

    caixaAlternativas.innerHTML = "";

    mostraAlternativas(perguntaAtual);
}

function mostraAlternativas(perguntaAtual) {
    perguntaAtual.alternativas.forEach((alternativa) => {
        const botaoAlternativa = document.createElement("button");

        botaoAlternativa.textContent = alternativa.texto;

        botaoAlternativa.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativa);
    });
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacao = aleatorio(opcaoSelecionada.afirmacao);

    historiaFinal += afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = `Em 2049, ${nome}`;
    textoResultado.textContent = historiaFinal.trim();

    caixaAlternativas.innerHTML = "";

    caixaResultado.classList.add("mostrar");
}

function jogaNovamente() {
    atual = 0;
    historiaFinal = "";

    caixaResultado.classList.remove("mostrar");

    mostraPergunta();
}

// Adiciona o evento apenas uma vez
botaoJogarNovamente.addEventListener("click", jogaNovamente);

// Inicia o jogo
mostraPergunta();