const Gameboard = (function () {
    const grid = document.getElementById('grid-container');
    const gameboardArray = []

    function saveElementToArray(activePlayer) {
        gameboardArray.push(activePlayer.symbol);
    }

    function activePlayer(Player1, Player2) {
        console.log(gameboardArray[0])
        if (gameboardArray[gameboardArray.length - 1] === 'O' || gameboardArray[0] === undefined) {
            return Player1;
        } else {
            return Player2;
        }
    }

    function renderTheGameboard(Player1, Player2, target) {
        //check if spot is already taken 

        if (target.textContent === '') {
            let currentPlayer = activePlayer(Player1, Player2);
            saveElementToArray(currentPlayer);
            target.textContent = currentPlayer.symbol;

        }

        else if (target.textContent != '') {
            console.log('That spot is taken!')
        }

    }

    return { renderTheGameboard };
})();

const Player = function (name, symbol) {
    return { name, symbol };
}

const grid = document.getElementById('grid-container');
grid.addEventListener('click', function (e) {
    let target = e.target;
    Gameboard.renderTheGameboard(Player1, Player2, target)

})

const Player1 = Player('Dominik', 'X');
const Player2 = Player('Luka', 'O');