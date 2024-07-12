const currentPlayer = document.querySelector(".currentPlayer");
let selected;
let player = "X";

/*posicoes possiveis para ter um ganhador*/
let positions = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];

function init(){
    selected = []
    currentPlayer.innerHTML = `JOGADOR DA VEZ: ${player}`;
    /*cada botão será iniciado sem valor*/
    document.querySelectorAll(".game button").forEach((item) => {
        item.innerHTML = "";
        item.addEventListener("click", newMove);
    });
}

init();