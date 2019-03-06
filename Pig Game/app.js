// create storage to player scores, current score, activePlayer and flag
let scores, currentScore, activePlayer, gamePlaying;
let imgDice = document.querySelector('.dice');

init();


// create initializer that reset all scores
function init() {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  // reset all score to 0
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // hide dice
  imgDice.style.display = 'none';

  // reset player name
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  // remove winner class
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  // remove active class and reset player 1 as active player
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

}


// Next Player turn
function nextPlayer() {
  // reset the current score to 0
  currentScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // hide the dice
  imgDice.style.display = 'none';

  // switch player
  activePlayer === 1 ? activePlayer = 0 : activePlayer = 1;
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
}


// Roll button clicked
document.querySelector('.btn-roll').addEventListener('click', () => {
  if(gamePlaying){
    // create random number
    let dice = Math.floor(Math.random() * 6) + 1;

    // display dice
    imgDice.style.display = 'block';
    imgDice.src = 'img/dice-' + dice + '.png';

    // continue rolling the current player until dice is not 1
    if(dice !== 1){
      // update current score and UI
      currentScore += dice
      document.querySelector('#current-' + activePlayer).textContent = currentScore;
    } else {
      nextPlayer();
    }
  }
});


// Hold button clicked
document.querySelector('.btn-hold').addEventListener('click', () => {
  if(gamePlaying){
    // update current player score
    scores[activePlayer] += currentScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer] ;

    // check if the player won the game
    if(scores[activePlayer] >= 100){
      // change player name to winner
      document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
      document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');

      // disable hold button
      gamePlaying= false;

    } else {
      // next player turn
      nextPlayer();
    }
  }
})


// New Game button clicked
document.querySelector('.btn-new').addEventListener('click', init);

window.addEventListener('load', () => {
  alert('First to got 100 will be the winner!');
})










