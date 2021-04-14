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

    function checkRows() {
        for (let i = 0; i < 9; i = i + 3) {
            if (gridArray[i].textContent == gridArray[i + 1].textContent && gridArray[i].textContent == gridArray[i+2].textContent && gridArray[i].textContent != '') {
                return true;
            }
        }

        console.log('For fucks me up')
    }

    function checkColumns() {
        // for (let i = 0; i < 9; i = i + 1) {
        //     if (gridArray[i].textContent == gridArray[i + 3].textContent == gridArray[i + 6].textContent && gridArray[i].textContent, gridArray[i + 3].textContent, gridArray[i + 6].textContent != '') {
        //         return true;
        //     }
        // }
    }

    function checkDiagonals() {
        return false;
    }

    function checkGrid(currentPlayer) {
        if (checkRows() == true || checkColumns() == true || checkDiagonals() == true) {
            alert(`${currentPlayer.name} wins the game! Congratulations!`);
        }
        else if (gameboardArray.length == 9) {
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
            checkGrid(currentPlayer);
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