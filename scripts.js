let Gameboard = (function () {
    const grid = document.getElementById('grid-container');
    let gameboardArray = ['x', 'o', 'x', 'o', 'x', 'o', 'x', 'o', 'x']
    function renderTheGameboard() {
        gameboardArray.forEach(function (element) {
            let gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');
            gridItem.textContent = element;
            grid.appendChild(gridItem);
        })
    }

    return {renderTheGameboard};
})();

Gameboard.renderTheGameboard();