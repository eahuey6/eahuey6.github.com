(function() {
    'use strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const quitBtn = document.getElementById('quitBtn');
    const resultQuitBtn = document.getElementById('resultQuitBtn');
    const restartBtn = document.getElementById('restartBtn');

    const dScoreBtn = document.getElementById('dScoreBtn');
    const pScoreBtn = document.getElementById('pScoreBtn');
    let pScore = 0;
    let dScore = 0;

    let dCards = document.getElementById('dCards');
    let pCards = document.getElementById('pCards');

    const hit = document.getElementById('hit');
    const stand = document.getElementById('stand');

    const resultOverlay = document.getElementById('resultOverlay');
    const resultText = document.getElementById('resultText');



    // const winSound = new Audio('media/win.mp3');

    // cards: ['images/cards/aheart.png', 'images/cards/2heart.png', 'images/cards/3heart.png', 'images/cards/4heart.png', 'images/cards/5heart.png', 'images/cards/6heart.png', 'images/cards/7heart.png', 'images/cards/8heart.png', 'images/cards/9heart.png', 'images/cards/10heart.png', 'images/cards/adiamond.png', 'images/cards/adiamond.png',]
    const gameData = {
        cards: ['../images/cards/aheart.png', '../images/cards/2heart.png', '../images/cards/3heart.png', '../images/cards/4heart.png', '../images/cards/5heart.png', '../images/cards/6heart.png', '../images/cards/7heart.png', '../images/cards/8heart.png', '../images/cards/9heart.png', '../images/cards/10heart.png', '../images/cards/adiamond.png', '../images/cards/2diamond.png', '../images/cards/3diamond.png', '../images/cards/4diamond.png', '../images/cards/5diamond.png', '../images/cards/6diamond.png', '../images/cards/7diamond.png', '../images/cards/8diamond.png', '../images/cards/9diamond.png', '../images/cards/10diamond.png', '../images/cards/aspade.png', '../images/cards/2spade.png', '../images/cards/3spade.png', '../images/cards/4spade.png', '../images/cards/5spade.png', '../images/cards/6spade.png', '../images/cards/7spade.png', '../images/cards/8spade.png', '../images/cards/9spade.png', '../images/cards/10spade.png', '../images/cards/aclub.png', '../images/cards/2club.png', '../images/cards/3club.png', '../images/cards/4club.png', '../images/cards/5club.png', '../images/cards/6club.png', '../images/cards/7club.png', '../images/cards/8club.png', '../images/cards/9club.png', '../images/cards/10club.png',],
        suits: ['heart', 'club', 'diamond', 'spade'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        drawNum: 0,
        drawSuit: 0,
        chosenSuit: '',
        index: 0,
        gameEnd: 21,
    };

    // checking quit and restart buttons
    quitBtn.addEventListener('click', function(){
        location.reload();
    });

    resultQuitBtn.addEventListener('click', function(){
        location.reload();
    });    
    restartBtn.addEventListener('click', function(){
        location.reload();
    }); 

    startGame.addEventListener("click", function(){
        // add sound of shuffling cards

        quitBtn.className = "showing";
        startGame.className = "hidden";

        dScoreBtn.className = "showing";
        pScoreBtn.className = "showing";

        dScoreBtn.innerHTML = `REVEAL CURRENT SCORE`;
        pScoreBtn.innerHTML = `REVEAL CURRENT SCORE`;

        console.log('test1')

        Turn1()
    });



    function Turn1() {
        gameData.index = 0;
        pButtons.innerHTML = ''

        console.log('test2')

        dealCardDealer();

        setTimeout(dealCardPlayer, 1000);
        setTimeout(dealCardPlayer, 1000);

        pButtons.innerHTML = '<button id="hit">HIT</button> <button id="stand">STAND</button>';

        document.getElementById('hit').addEventListener('click', function(){
            setTimeout(dealCardPlayer, 1000);
        });

        document.getElementById('stand').addEventListener('click', function(){
            Turn2()
        })
    }

    function Turn2(){
        gameData.index = 0;
        pButtons.innerHTML = ''

        console.log('test2')

        if (dScore < 18) {
            dealCardDealer();
            Turn2();
        }
        else {
            compareScores();
        }

    }

    function dealCardDealer() {
        gameData.drawNum = Math.floor(Math.random() * 10) + 1;
        gameData.drawSuit = Math.floor(Math.random() * 4);

        gameData.chosenSuit = gameData.suits[gameData.drawSuit];
        console.log(gameData.drawSuit);
        console.log(gameData.chosenSuit);

        dCards.innerHTML += `<img src="../images/cards/${gameData.drawNum}${gameData.chosenSuit}.png" width="180" height="210">`;

        console.log("test3");

        gameData.score[0] += gameData.drawNum;
        dScore += gameData.drawNum;
        
        checkLosingCondition();

    }

    function dealCardPlayer() {
        gameData.drawNum = Math.floor(Math.random() * 10) + 1;
        gameData.drawSuit = Math.floor(Math.random() * 4);

        gameData.chosenSuit = gameData.suits[gameData.drawSuit];
        console.log(gameData.drawSuit);
        console.log(gameData.chosenSuit);

        pCards.innerHTML += `<img src="../images/cards/${gameData.drawNum}${gameData.chosenSuit}.png" width="180" height="210">`;

        console.log("test3");

        gameData.score[1] += gameData.drawNum;
        pScore += gameData.drawNum;
        
        checkLosingCondition();
    }

    function checkLosingCondition() {
        if (gameData.score[1] === 21){
            resultText.innerHTML = "CONGRATULATIONS, YOU WON! <br> Your score is exactly 21!";
            resultOverlay.className = "showing";
        }
        else if (gameData.score[0] === 21){
            resultText.innerHTML = "OH NO, YOU LOST! <br> The dealer's hand is exactly 21.";
            resultOverlay.className = "showing";
        }
        else if (gameData.score[0] > 21){
            resultText.innerHTML = "BUST <br> CONGRATULATIONS, YOU WON! <br> The dealer's hand went over 21.";
            resultOverlay.className = "showing";
        }
        else if (gameData.score[1] > 21){
            resultText.innerHTML = "BUST <br> OH NO, YOU LOST! <br> Your hand went over 21.";
            resultOverlay.className = "showing";
        } 
        // else dealcarddealer
    }

    function compareScores() {
        if (gameData.score[0] > 21){
            resultText.innerHTML = "BUST <br> CONGRATULATIONS, YOU WON! <br> The dealer's hand went over 21.";
            resultOverlay.className = "showing";
        }
        else if (gameData.score[0] > gameData.score[1]){
            resultText.innerHTML = `OH NO, YOU LOST! <br> The dealer's score was ${gameData.score[0]} and your score was ${gameData.score[1]} .`;
            resultOverlay.className = "showing";
        } 
        else {
            resultText.innerHTML = `CONGRATULATIONS, YOU WON! <br> Your score was ${gameData.score[1]} and the dealer's score was ${gameData.score[0]} .`;
            resultOverlay.className = "showing";
        }
    }


     // code for score buttons
     dScoreBtn.addEventListener("mouseover", function(event){
        event.preventDefault();
        dScoreBtn.innerHTML = `SCORE:  ${gameData.score[0]}`;
        dScoreBtn.style.width = "220px"
    });
    dScoreBtn.addEventListener("mouseout", function(event){
        event.preventDefault();
        dScoreBtn.innerHTML = `REVEAL CURRENT SCORE`;
    });
    pScoreBtn.addEventListener("mouseover", function(event){
        event.preventDefault();
        pScoreBtn.innerHTML = `SCORE:  ${gameData.score[1]}`;
        pScoreBtn.style.width = "220px"
    });
    pScoreBtn.addEventListener("mouseout", function(event){
        event.preventDefault();
        pScoreBtn.innerHTML = `REVEAL CURRENT SCORE`;
    });

}());