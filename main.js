// Simulador de Apostas
document.getElementById('btn-simular').addEventListener('click', function () {
    let saldo = 100; // Começa com R$ 100 fictícios
    const aposta = 10;
    let vitorias = 0;
    let derrotas = 0;

    // A casa de apostas tem uma margem estipulada (40% de chance de vitória fictícia)
    for (let i = 0; i < 10; i++) {
        const sorteio = Math.random();
        if (sorteio < 0.4) { 
            saldo += aposta;
            vitorias++;
        } else {
            saldo -= aposta;
            derrotas++;
        }
    }

    const display = document.getElementById('resultado-simulacao');
    display.innerHTML = `
        <strong>Resultado após 10 apostas de R$ 10:</strong><br>
        Vitórias: ${vitorias} | Derrotas: ${derrotas}<br>
        Saldo Final Simulativo: <span style="color: ${saldo >= 100 ? 'green' : 'red'}; font-weight: bold;">R$ ${saldo},00</span><br>
        <small><em>*Nota: Matematicamente, a margem da plataforma é desenhada para garantir o lucro da empresa a longo prazo.</em></small>
    `;
});

// Lógica de Autoavaliação Simples
let pontuacaoQuiz = 0;
let perguntaAtual = 0;

const perguntas = [
    "Você costuma apostar para tentar recuperar o dinheiro que perdeu antes?",
    "Já mentiu para parentes ou amigos sobre a quantidade de dinheiro que gasta em bets?",
    "Sente ansiedade ou irritação quando tenta parar de apostar?"
];

function responderQuiz(respostaSim) {
    if (respostaSim) pontuacaoQuiz++;
    perguntaAtual++;

    const elementoPergunta = document.getElementById('pergunta');
    
    if (perguntaAtual < perguntas.length) {
        elementoPergunta.innerText = perguntas[perguntaAtual];
    } else {
        document.getElementById('quiz-container').classList.add('hidden');
        const resultado = document.getElementById('quiz-resultado');
        resultado.classList.remove('hidden');

        if (pontuacaoQuiz >= 2) {
            resultado.innerHTML = `
                <div style="background: #FEE2E2; border: 1px solid #EF4444; padding: 1rem; border-radius: 8px;">
                    <strong style="color: #991B1B;">Sinal de Alerta!</strong><br>
                    Suas respostas indicam um comportamento de risco em relação às apostas. Considere consultar uma das opções de suporte na seção abaixo.
                </div>
            `;
        } else {
            resultado.innerHTML = `
                <div style="background: #D1FAE5; border: 1px solid #10B981; padding: 1rem; border-radius: 8px;">
                    <strong style="color: #065F46;">Baixo Risco Detectado</strong><br>
                    Mantenha a atenção constante. As plataformas de jogo usam recursos psicológicos para gerar dependência contínua.
                </div>
            `;
        }
    }
}