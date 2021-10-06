'use strict';

let pontosP1 = 0, pontosP2 = 0, current = 0, active = 0;

const atualizarPontos = (j, p) => {
    document.getElementById("score--" + j).textContent = String(p);
}

const atualizarTotalTurno = (j, p) => {
    document.getElementById("current--" + j).textContent = String(p);
}

atualizarPontos(0, pontosP1);
atualizarPontos(1, pontosP2);

document.querySelector(".btn--roll").addEventListener('click', () => {

    let roll = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').src = 'dice-' + roll + '.png';

    if(roll == 1){
        current = 0;
        atualizarTotalTurno(active, 0);
        document.querySelector(".player--" + active).classList.remove("player--active");
        document.querySelector(".player--" + ((active + 1) % 2)).classList.add("player--active");
        active = (active + 1) % 2;
    }else{
        current += roll;
        atualizarTotalTurno(active, current);
    }
});

document.querySelector(".btn--hold").addEventListener('click', () => {

    if(active == 0){
        pontosP1 += current;
        atualizarPontos(0, pontosP1);

        if(pontosP1 >= 100){
            document.querySelector(".player--0").classList.remove("player--active");
            document.querySelector(".player--0").classList.add("player--winner");
        }else{
            current = 0;
            atualizarTotalTurno(0, 0);
            document.querySelector(".player--0").classList.remove("player--active");
            document.querySelector(".player--1").classList.add("player--active");
            active = 1;
        }
    }else{
        pontosP2 += current;
        atualizarPontos(1, pontosP2);

        if(pontosP2 >= 100){
            document.querySelector(".player--1").classList.remove("player--active");
            document.querySelector(".player--1").classList.add("player--winner");
        }else{
            current = 0;
            atualizarTotalTurno(1, 0);
            document.querySelector(".player--1").classList.remove("player--active");
            document.querySelector(".player--0").classList.add("player--active");
            active = 0;
        }
    }
});

document.querySelector('.btn--new').addEventListener('click', () => {
    active = 0;
    pontosP1 = 0;
    pontosP2 = 0;
    current = 0;
    document.querySelector(".player--1").classList.remove("player--active");
    document.querySelector(".player--0").classList.add("player--active");
    atualizarPontos(0, pontosP1);
    atualizarPontos(1, pontosP2);
    atualizarTotalTurno(0, 0);
    atualizarTotalTurno(1, 0);
})