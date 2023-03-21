//CRIANDO O RELÓGIO ========================================================
function criaHoraDosSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    });
}
// DEFINIÇÃO DE VARIÁVEIS =====================================================
const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

//FUNÇÃO PARA O FUNCIONAMENTO DO CRONÔMETRO ===================================

function iniciaRelogio() {
    timer = setInterval(function () {
        segundos++;
        relogio.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

// CAPTURAR EVENTOS DE CLICK PARA EXECUTAR AS AÇÕES ============================

document.addEventListener('click', function (e) {
    const elemento = e.target;

    if (elemento.classList.contains('iniciar')) {
        relogio.classList.remove('pausado')
        clearInterval(timer);
        iniciaRelogio()
    }

    if (elemento.classList.contains('pausar')) {
        relogio.classList.add('pausado')
        clearInterval(timer);
    }

    if (elemento.classList.contains('zerar')) {
        clearInterval(timer);
        relogio.classList.remove('pausado')
        relogio.innerHTML = '00:00:00';
        segundos = 0;
    }
})
