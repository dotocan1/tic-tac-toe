const Gameboard = (function () {
    const grid = document.getElementById('grid-container');
    let gameboardArray = [];
    const gridItem = document.getElementsByClassName('grid-item');
    gridArray = Array.from(gridItem);

    gridArray.forEach(function (box) {
        box.addEventListener('click', function () {
            renderTheGameboard(Player1, Player2, box);
        })
    });

    function activePlayer(Player1, Player2) {
        if (gameboardArray[gameboardArray.length - 1] === 'O' || gameboardArray[0] === undefined) {
            return Player1;
        } else {
            return Player2;
        }
    }

    function checkArrayAndClearGrid() {
        if (gameboardArray.length == 9) {
            console.log('It is a tie!');
        }

    }

    function renderTheGameboard(Player1, Player2, target) {
        //check if spot is already taken 

        if (target.textContent === '') {
            let currentPlayer = activePlayer(Player1, Player2);
            gameboardArray.push(currentPlayer.symbol);
            target.textContent = currentPlayer.symbol;

            //check if game is over
            checkArrayAndClearGrid();
            //console.log(gameboardArray)
        }

        else if (target.textContent != '') {
            alert('That spot is taken!')
        }

    }

    return { renderTheGameboard };
})();
const Player = function (name, symbol) {
    return { name, symbol };
}

const Player1 = Player('Dominik', 'X');
const Player2 = Player('Luka', 'O');