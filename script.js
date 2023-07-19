
//add event listeners
const container = document.querySelector('.gameboard');
const button = document.querySelector('.button');

//mark the 'box' where the event fired up.
//check winning conditions
//switch to next player
//check winning conditions again
//continue playing till win, lose or draw
//dispaly the winner


const GameBoard = (()=>{
    const gameboard = ["", "","","","","","","",""];

    const render = ()=>{
        for(i = 1; i<=gameboard.length; i++){
            const newDiv = document.createElement('div');
            // newDiv.setAttribute('class', 'box');
            newDiv.classList = `box box-${i}`
            container.appendChild(newDiv);
            newDiv.textContent = 'Bill';
        }

        container.addEventListener('click',(e) => {
            if(! e.target.classList.contains('gameboard')){
                console.log('bill')
            }
        })
    }

    return{
        render
    }
})();



const player = (name, mark)=>{
    return{
        name,
        mark
    }
};

const GameController = (()=>{
    let players = [];
    let currentPlayerIndex;
    let gameOver;

    const start = ()=>{
        players.push(player('PlayerOne', 'X'));
        players.push(player('PlayerTwo', 'O'));

        currentPlayerIndex = 0;
        gameOver = false
        GameBoard.render();
    }
    const restart = ()=>{
        currentPlayerIndex = undefined;
        gameOver = undefined;
        players = undefined;

        
        const box = document.querySelectorAll('.box');
        box.forEach(function(element){
            element.textContent = "";
        })
    }
    return{
        start,
        restart
        // restart
    }
})();


button.addEventListener('click', e =>{
    GameController.restart();
})

GameController.start()