let score = JSON.parse(localStorage.getItem('score' )) || {
    wins : 0,
    losses : 0,
    ties : 0,
};

updateScoreElement();

/*
if(! score) {
  score= {
    wins : 0,
    losses : 0, 
    ties : 0,
  };
}
*/

function playGame(playerMove){
  const computerMove = pickComputerMove();

  let result = '';

 if(playerMove === 'scissors') {
    if(computerMove === 'Rock') {
      result = 'You win.';
    } else if(computerMove === 'Paper') {
      result = 'You lose.';
    } else if(computerMove === 'Scissors') {
      result = 'tie.';
    } 
     
 } else if (playerMove === 'paper') {
    if(computerMove === 'Rock') {
      result = 'You win.';
    } else if(computerMove === 'Paper') {
      result = 'Tie.';
    } else if(computerMove === 'Scissors') {
      result = 'You lose.';
    }

 } else if (playerMove === 'rock') {
    if(computerMove === 'Rock') {
      result = 'Tie.';
    } else if(computerMove === 'Paper') {
      result = 'You lose.';
    } else if(computerMove === 'Scissors') {
      result = 'You win.';
    }
 }

 if (result === 'You win.') {
      score.wins += 1;
 } else if(result === 'You lose.'){
      score.losses += 1;
 } else if (result === 'Tie.') {
      score.ties +=1;
 }

 /* update de score on the page*/
 localStorage.setItem('score', JSON.stringify(score));
  
 updateScoreElement();

document.querySelector('.js-result')
 .innerHTML= result;

 document.querySelector('.js-moves')
    .innerHTML=`You
    <img src="images/${playerMove}.png" class="move-icon">
    <img src="images/${computerMove}.jpg" class="move-icon">
    computer`;

}

let computerMove ='';

function updateScoreElement() {
document.querySelector('.js-score')
.innerHTML=`wins:${score.wins},
 losses:${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
const randomNumber = Math.random();

if(randomNumber >= 0 && randomNumber < 1/3) {
  computerMove= 'Rock';
} else if(randomNumber >= 1/3 && randomNumber < 2/3 ) {
  computerMove= 'Paper';
} else if(randomNumber >= 2/3 && randomNumber < 1) {
  computerMove= 'Scissors';
}

return computerMove;  // returning a value out of a function 
}