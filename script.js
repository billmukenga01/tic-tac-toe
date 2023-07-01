
//add event listeners
const container = document.querySelector('.gameboard')
    .addEventListener('click',(e) => {
        if(! e.target.classList.contains('gameboard')){
            console.log('bill')
        }
    })
;
//mark the 'box' where the event fired up.
//check winning conditions
//switch to next player
//check winning conditions again
//continue playing till win, lose or draw
//dispaly the winner


const GameBoard = (()=>{
    const gameboard = [];
    return{}
})();

const GameController = ()=>{
    return{}
}