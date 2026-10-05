import { aleatorio, nome } from './aleatorio.js';
import { perguntas } from './perguntas.js';

const perguntasBox = document.querySelector('.caixa-perguntas');
const alternativasBox = document.querySelector('.caixa-alternativas');
const resultadoBox = document.querySelector('.caixa-resultado');
const resultado = document.querySelector('.texto-resultado');
const inicio = document.querySelector('.tela-inicial');

let atual = 0;
let historia = '';

document.querySelector('.iniciar-btn').addEventListener('click', iniciar);
document.querySelector('.novamente-btn').addEventListener('click', jogarNovamente);

function iniciar() {
    atual = 0;
    historia = '';
    inicio.style.display = 'none';
    resultadoBox.classList.remove('mostrar');
    mostrarPergunta();
}

function mostrarPergunta() {
    const pergunta = perguntas[atual];

    perguntasBox.textContent = pergunta.enunciado;
    alternativasBox.innerHTML = '';

    pergunta.alternativas.forEach(opcao => {
        const botao = document.createElement('button');

        botao.textContent = opcao.texto;

        botao.addEventListener('click', () => responder(opcao));

        alternativasBox.appendChild(botao);
    });
}

function responder(opcao) {
    historia += aleatorio(opcao.afirmacao) + ' ';

    if (opcao.proxima !== undefined) {
        atual = opcao.proxima;
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    perguntasBox.textContent = `Em 2049, ${nome}`;
    resultado.textContent = historia;

    alternativasBox.innerHTML = '';
    resultadoBox.classList.add('mostrar');
}

function jogarNovamente() {
    atual = 0;
    historia = '';
    resultadoBox.classList.remove('mostrar');
    mostrarPergunta();
}
const nomes = [
    'David Fajardo',
    'Gabriel',
    'Amanda',
    'Lucas',
    'Mariana',
    'Rafael',
    'Beatriz',
    'Gustavo'
];

export function aleatorio(lista) {
    return lista[Math.floor(Math.random() * lista.length)];
}

export const nome = aleatorio(nomes);
export const perguntas = [
    {
        enunciado: 'Você encontrou uma inteligência artificial. O que pensou?',
        alternativas: [
            {
                texto: 'Isso é assustador!',
                afirmacao: ['Você percebeu que a tecnologia também poderia trazer riscos.'],
                proxima: 1
            },
            {
                texto: 'Isso é maravilhoso!',
                afirmacao: ['Você ficou curioso para aprender mais sobre IA.'],
                proxima: 2
            }
        ]
    },

    {
        enunciado: 'A IA começou a substituir algumas profissões. O que você faria?',
        alternativas: [
            {
                texto: 'Defender o uso responsável da IA.',
                afirmacao: ['Você passou a defender regras para o uso da tecnologia.'],
                proxima: 3
            },
            {
                texto: 'Aprender a trabalhar com IA.',
                afirmacao: ['Você decidiu aprender novas habilidades.'],
                proxima: 4
            }
        ]
    },

    {
        enunciado: 'Estudantes começaram a usar IA para fazer trabalhos. O que fazer?',
        alternativas: [
            {
                texto: 'Ensinar a usar IA corretamente.',
                afirmacao: ['Você ensinou outras pessoas a usar IA para aprender.'],
                proxima: 5
            },
            {
                texto: 'Proibir o uso de IA.',
                afirmacao: ['Você defendeu atividades sem auxílio da tecnologia.'],
                proxima: 6
            }
        ]
    },

    {
        enunciado: 'A IA começou a cometer erros importantes. O que fazer?',
        alternativas: [
            {
                texto: 'Investigar e melhorar o sistema.',
                afirmacao: ['Você percebeu que a IA precisa de supervisão humana.'],
                proxima: 4
            },
            {
                texto: 'Ignorar os erros.',
                afirmacao: ['Você aprendeu que rapidez não significa qualidade.'],
                proxima: 4
            }
        ]
    },

    {
        enunciado: 'Qual deve ser o futuro da inteligência artificial?',
        alternativas: [
            {
                texto: 'Criar regras para proteger as pessoas.',
                afirmacao: ['Você defendeu inovação com responsabilidade.']
            },
            {
                texto: 'Deixar a tecnologia evoluir livremente.',
                afirmacao: ['Você acreditou que a inovação deveria continuar avançando.']
            }
        ]
    }
];