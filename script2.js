'use strict';
//Selecting elements
const diceEl=document.querySelector('.dice');
const buttonRoll=document.querySelector('#btn--roll');
const buttonHold=document.querySelector('#btn--hold');
const buttonNew=document.querySelector('#btn--new');
const score0El=document.querySelector('#score--0');
const score1El=document.querySelector('#score--1');
const currentScore0El=document.querySelector('#current--score--0');
const currentScore1El=document.querySelector('#current--score--1');
const player0El=document.querySelector('.player--0');
const player1El=document.querySelector('.player--1');

// setting the initial conditions

let currentScore,activePlayer,playing;
let score;

let init=function () {
    currentScore=0;
    activePlayer=0;
    score=[0,0];
    playing=true;

    score0El.textContent=0;
    score1El.textContent=0;
    diceEl.classList.add('hidden');
    currentScore0El.textContent=0;
    currentScore1El.textContent=0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');

}
init();

let switchPlayer=function(){
    currentScore=0;
        document.getElementById(`current--score--${activePlayer}`).textContent=0;
        activePlayer= activePlayer === 0? 1:0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
};

  //1.rolling dice
  buttonRoll.addEventListener('click',function(){
    if(playing){
        //2.generate random dice roll
        let dice=Math.trunc(Math.random()*6)+1;

        //3.display dice
        diceEl.classList.remove('hidden');
        diceEl.src=`dice-${dice}.png`;

        //4.check if it is 1 or not
        if(dice!==1){
            //4.1 if not add score to the current score
            currentScore+=dice;
            //4.2 display current score
            document.getElementById(`current--score--${activePlayer}`).textContent=currentScore;
            
        }else{
            //5.switch player
            switchPlayer();
        }   
    }     

  });

 //6.user hold score
 buttonHold.addEventListener('click',function(){
     if(playing){
        //7.add current score to total score
        score[activePlayer]+=currentScore;
        document.querySelector(`#score--${activePlayer}`).textContent=score[activePlayer];
        //8.if score >=100
        if(score[activePlayer] >= 100){
            //player wins 
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            //finish the game
            playing=false;
        }else{
        //9.switch player
        switchPlayer();
        }     

    
     }
    

 });
  
  //10.user reset the game
  buttonNew.addEventListener('click',init);
