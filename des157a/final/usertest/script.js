(function() {
    'use strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const quitBtn = document.getElementById('quitBtn');
    const resultQuitBtn = document.getElementById('resultQuitBtn');

    const dScoreBtn = document.getElementById('dScoreBtn');
    const pScoreBtn = document.getElementById('pScoreBtn');
    let pScore = 0;
    let dScore = 0;

    let dCards = document.getElementById('dCards');
    let pCards = document.getElementById('pCards');
    let card = document.getElementById('card');

    const hit = document.getElementById('hit');
    const stand = document.getElementById('stand');

    const resultOverlay = document.getElementById('resultOverlay');
    const resultText = document.getElementById('resultText');

    const infoBtn = document.getElementById('infoBtn');
    const backBtn = document.getElementById('backBtn');
    const howToPlay = document.getElementById('howToPlay');

    const dealSound = new Audio('../media/deal.mp3');
    const shuffleSound = new Audio('../media/shuffle.mp3');
    const winSound = new Audio('../media/win.mp3');



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
        dCard: 0,
        pCard: 0,
    };

    // checking quit and restart buttons
    quitBtn.addEventListener('click', function(){
        location.reload();
    });

    resultQuitBtn.addEventListener('click', function(){
        location.reload();
    });    

    startGame.addEventListener("click", function(){
        shuffleSound.play();

        quitBtn.className = "showing";
        startGame.className = "hidden";

        dScoreBtn.className = "showing";
        pScoreBtn.className = "showing";

        dScoreBtn.innerHTML = `REVEAL CURRENT SCORE`;
        pScoreBtn.innerHTML = `REVEAL CURRENT SCORE`;

        console.log('test1')

        Turn1()
    });


    // set up and players turn
    function Turn1() {
        gameData.index = 0;
        pButtons.innerHTML = ''

        console.log('test2')

        setTimeout(dealCardDealer, 2000)
        setTimeout(dealCardPlayer, 4000);
        setTimeout(dealCardPlayer, 6000);

        pButtons.innerHTML = '<button id="hit">HIT</button> <button id="stand">STAND</button>';

        document.getElementById('hit').addEventListener('click', function(){
            dealSound.play();
            setTimeout(dealCardPlayer, 1000);
        });

        document.getElementById('stand').addEventListener('click', function(){
            Turn2()
        })
    }

    // turns of the dealer once the player stands
    function Turn2(){
        gameData.index = 0;
        pButtons.innerHTML = ''

        console.log('test2')

        if (dScore < 18) {
            setTimeout(dealCardDealer, 1000);
            // dealCardDealer();
            setTimeout(Turn2, 2000);
            // Turn2();
        }
        else {
            setTimeout(compareScores, 2000);
        }

    }

    // deals a card to the dealer
    function dealCardDealer() {
        dealSound.play();
        gameData.drawNum = Math.floor(Math.random() * 10) + 1;
        gameData.drawSuit = Math.floor(Math.random() * 4);

        gameData.chosenSuit = gameData.suits[gameData.drawSuit];
        console.log(gameData.drawSuit);
        console.log(gameData.chosenSuit);

        dCards.innerHTML += `<img src="../images/cards/${gameData.drawNum}${gameData.chosenSuit}.png" width="180" height="210">`;

        console.log("test3");

        gameData.score[0] += gameData.drawNum;
        dScore += gameData.drawNum;
        
        setTimeout(checkLosingCondition, 2000);
        // checkLosingCondition()

    }

    // deals a card to the player 
    function dealCardPlayer() {
        dealSound.play();
        gameData.drawNum = Math.floor(Math.random() * 10) + 1;
        gameData.drawSuit = Math.floor(Math.random() * 4);

        gameData.chosenSuit = gameData.suits[gameData.drawSuit];
        console.log(gameData.drawSuit);
        console.log(gameData.chosenSuit);
        pCards.innerHTML += `<div class="card"><div id="cardInner><div class="cardFaceFront"><img src="../images/cards/${gameData.drawNum}${gameData.chosenSuit}.png" width="180" height="210"></div></div></div>`;

        // pCards.innerHTML += `<div class="card"><div id="cardInner><div class="cardFaceBack"><img src="../images/cardBack.png" width="180" height="210"></div> <div class="cardFaceFront"><img src="../images/cards/${gameData.drawNum}${gameData.chosenSuit}.png" width="180" height="210"></div></div></div>`;

        // card = document.getElementsByClassName('card');
        // flipCard();

        // let cardInner = document.getElementsByClassName('cardInner');
        // console.log(card)
        // // setTimeout(flipCard, 1000);
        // // console.log(card.className);
        // // card.className = "cardFlipped";
        // // console.log(card.className);

        // console.log(cardInner.className);
        // card.className = "cardFlipped";
        // console.log(cardInner.className);


        gameData.score[1] += gameData.drawNum;
        pScore += gameData.drawNum;
        
        setTimeout(checkLosingCondition, 2000);
        // checkLosingCondition();
    }

    // flips card 
    function flipCard() {
        // card.classList.toggle('is-flipped');
        card.className = "cardFlipped";
    };


    // code for functions that check the scores and ends the game if a losing or winning condition is met
    function checkLosingCondition() {
        if (gameData.score[1] === 21){
            winSound.play();
            resultText.innerHTML = "<b>CONGRATULATIONS, YOU WON!</b> <br> Your score is exactly 21!";
            resultOverlay.className = "showing";

        }
        else if (gameData.score[0] === 21){
            resultText.innerHTML = "<b>OH NO, YOU LOST!</b> <br> The dealer's hand is exactly 21.";
            resultOverlay.className = "showing";
        }
        else if (gameData.score[0] > 21){
            winSound.play();
            resultText.innerHTML = "<b>BUST</b> <br> <b>CONGRATULATIONS, YOU WON!</b> <br> The dealer's hand went over 21.";
            resultOverlay.className = "showing";
            
        }
        else if (gameData.score[1] > 21){
            resultText.innerHTML = "<b>BUST</b> <br> <b>OH NO, YOU LOST!</b> <br> Your hand went over 21.";
            resultOverlay.className = "showing";
        } 
    }

    function compareScores() {
        if (gameData.score[0] > 21){
            winSound.play();
            resultText.innerHTML = "<b>BUST</b> <br> <b>CONGRATULATIONS, YOU WON!</b> <br> The dealer's hand went over 21.";
            resultOverlay.className = "showing";
        }
        else if (gameData.score[0] > gameData.score[1]){
            resultText.innerHTML = `<b>OH NO, YOU LOST!</b> <br> The dealer's score was ${gameData.score[0]} and your score was ${gameData.score[1]} .`;
            resultOverlay.className = "showing";
        } 
        else {
            winSound.play();
            resultText.innerHTML = `<b>CONGRATULATIONS, YOU WON!</b> <br> Your score was ${gameData.score[1]} and the dealer's score was ${gameData.score[0]} .`;
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


    // code for info/instructions overlay
    // code for styling the instructions buttons
    howToPlay.addEventListener('mouseover', function(){
        howToPlay.style.color = '#556056';
        infoBtn.style.color = 'white';
        infoBtn.style.backgroundColor = '#69776A';
    });
    howToPlay.addEventListener('mouseout', function(){
        howToPlay.style.color = 'white';
        infoBtn.style.color = '#525252';
        infoBtn.style.backgroundColor = '#F4F4F4';
    });
    infoBtn.addEventListener('mouseover', function(){
        howToPlay.style.color = '#556056';
        infoBtn.style.color = 'white';
        infoBtn.style.backgroundColor = '#69776A';
    });
    infoBtn.addEventListener('mouseout', function(){
        howToPlay.style.color = 'white';
        infoBtn.style.color = '#525252';
        infoBtn.style.backgroundColor = '#F4F4F4';
    });
    
    // code for the interactions of the overlay and actual functions of opening and closing
    howToPlay.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("infoOverlay").className = "showing";
    });
    infoBtn.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("infoOverlay").className = "showing";
    });
    backBtn.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("infoOverlay").className = "hidden";
    });



    // code for user testing tasks

    const taskBtn = document.getElementById('taskBtn');
    const taskBackBtn = document.getElementById('taskBackBtn');
    taskBtn.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("taskOverlay").className = "showing";
    });
    taskBackBtn.addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("taskOverlay").className = "hidden";
    });

}());