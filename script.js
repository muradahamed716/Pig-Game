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

let currentScore0,currentScore1,score0,score1;
let init=function () {
score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');
currentScore0El.textContent=0;
currentScore1El.textContent=0;
currentScore0=0;
currentScore1=0;
score0=0;
score1=0;
}
init();


//display 
let displayCurrentS=function(currentEl,currentS){
    currentEl.textContent=currentS;
    
}
let displayScore=function(scoreEl,score){

    scoreEl.textContent=score;
}
// user roll button
buttonRoll.addEventListener('click',function(){
   const dice=Math.trunc(Math.random()*6)+1;
    diceEl.classList.remove('hidden');
    diceEl.src=`dice-${dice}.png`;

    if(player0El.classList.contains('player--active')){



        if(dice=== 1){
        player0El.classList.remove('player--active');
        player1El.classList.add('player--active');
        
        currentScore0=0;
        displayCurrentS(currentScore0El,currentScore0);
        
        }else{
            currentScore0+=dice;
            displayCurrentS(currentScore0El,currentScore0);
           

        }


    }else{
        if(dice=== 1){
            player1El.classList.remove('player--active');
            player0El.classList.add('player--active');
            
            currentScore1=0;
            displayCurrentS(currentScore1El,currentScore1);
            
            }else{
                currentScore1+=dice;
                displayCurrentS(currentScore1El,currentScore1);
    
            }
    }

});

    /*if(dice=== 1){
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
        if(player0El.classList.contains('player--active')){

            currentScore0=0;
            currentScore0El.textContent=currentScore0;
            //console.log('0 score ='+currentScore0);
            
        }else{
            currentScore1=0;
            currentScore1El.textContent=currentScore1;
            //console.log('1 score ='+currentScore1);
        }
        
    }else{
        
    }*/


    //hold and add Score
    buttonHold.addEventListener('click',function(){
        // player0El.classList.toggle('player--active');
        // player1El.classList.toggle('player--active');
        
            if(player0El.classList.contains('player--active')){
                score0+=currentScore0;
                
                currentScore0=0;
                displayScore(score0El,score0);
                displayCurrentS(currentScore0El,currentScore0);
                player0El.classList.remove('player--active');
                player1El.classList.add('player--active');
                // player1El.classList.add('player--active');
                // player0El.classList.remove('player--active');
               
            }else{
                score1+=currentScore1; 
                currentScore1=0;
                displayScore(score1El,score1);
                displayCurrentS(currentScore1El,currentScore1);
                
                player1El.classList.remove('player--active');
                player0El.classList.add('player--active');
               
                // player0El.classList.add('player--active');
                // player1El.classList.remove('player--active');
            }
        });

        //play new game
        buttonNew.addEventListener('click',function(){
            init();
        })