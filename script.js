
//add event listeners
const container = document.querySelector('.gameboard');
container.addEventListener('click',(e) => {
    if(! e.target.classList.contains('gameboard')){
        console.log('bill')
    }
})
//mark the 'box' where the event fired up.
//check winning conditions
//switch to next player
//check winning conditions again
//continue playing till win, lose or draw
//dispaly the winner


const GameBoard = (()=>{
    const gameboard = 9;

    const render = ()=>{
        for(i = 1; i<=gameboard; i++){
            const newDiv = document.createElement('div');
            // newDiv.setAttribute('class', 'box');
            newDiv.classList = `box box-${i}`
            container.appendChild(newDiv);
        }
    }

    return{
        render
    }
})();

// GameBoard.render();

const GameController = ()=>{
    return{}
}