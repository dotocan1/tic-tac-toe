let Gameboard = (function () {
    const grid = document.getElementById('grid-container');
    const gameboardArray = []

    function saveElementToArray(){
        
    }
    function renderTheGameboard() {
        gameboardArray.forEach(function (element) {
            gridItem.textContent = element;
            grid.appendChild(gridItem);
        })
    }

    return {renderTheGameboard};
})();

const grid = document.getElementById('grid-container');
grid.addEventListener('click', function(e){
    console.log(e.target);
    e.target.textContent = 'X';


})