
//add event listeners
const container = document.querySelector('.gameboard');

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

// GameBoard.render();



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

    return{
        start,
        // restart
    }
})();

GameController.start()