(function() {
    'use strict';
    console.log('reading js');

    const startGame = document.getElementById('startgame');
    const quitBtn = document.getElementById('quitBtn');
    const showScoreBtn = document.getElementById('showScoreBtn');
    const hideScoreBtn = document.getElementById('hideScoreBtn');
    const resultQuitBtn = document.getElementById('resultQuitBtn');
    const resultRestartbtn = document.getElementById('resultRestartBtn');

    const dScoreBtn = document.getElementById('dScoreBtn');
    const pScoreBtn = document.getElementById('pScoreBtn');
    let pScore = 0;
    let dScore = 0;

    const dealerH2 = document.getElementById('dealerH2');
    const playerH2 = document.getElementById('playerH2');

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

    const dealSound = new Audio('media/deal.mp3');
    const shuffleSound = new Audio('media/shuffle.mp3');
    const winSound = new Audio('media/win.mp3');

    const gameData = {
        cards: ['images/cards/aheart.png', 'images/cards/2heart.png', 'images/cards/3heart.png', 'images/cards/4heart.png', 'images/cards/5heart.png', 'images/cards/6heart.png', 'images/cards/7heart.png', 'images/cards/8heart.png', 'images/cards/9heart.png', 'images/cards/10heart.png', 'images/cards/adiamond.png', 'images/cards/2diamond.png', 'images/cards/3diamond.png', 'images/cards/4diamond.png', 'images/cards/5diamond.png', 'images/cards/6diamond.png', 'images/cards/7diamond.png', 'images/cards/8diamond.png', 'images/cards/9diamond.png', 'images/cards/10diamond.png', 'images/cards/aspade.png', 'images/cards/2spade.png', 'images/cards/3spade.png', 'images/cards/4spade.png', 'images/cards/5spade.png', 'images/cards/6spade.png', 'images/cards/7spade.png', 'images/cards/8spade.png', 'images/cards/9spade.png', 'images/cards/10spade.png', 'images/cards/aclub.png', 'images/cards/2club.png', 'images/cards/3club.png', 'images/cards/4club.png', 'images/cards/5club.png', 'images/cards/6club.png', 'images/cards/7club.png', 'images/cards/8club.png', 'images/cards/9club.png', 'images/cards/10club.png', ],
        suits: ['heart', 'club', 'diamond', 'spade'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        drawNum: 0,
        drawSuit: 0,
        chosenSuit: '',
        index: 0,
        dCard: 0,
        pCard: 0,
        scoreStatus: 'hidden',
    };

    // checking quit and restart buttons
    quitBtn.addEventListener('click', function() {
        location.reload();
    });

    resultQuitBtn.addEventListener('click', function() {
        location.reload();
    });
    
    // sets up another turn if the player restarts game
    resultRestartBtn.addEventListener('click', function() {
        shuffleSound.play();

        gameData.score = [0, 0];
        gameData.index = 0;
        pCards.innerHTML = '';
        dCards.innerHTML = '';

        resultOverlay.className = "hidden";

        quitBtn.className = "showing";
        showScoreBtn.className = 'showing';
        startGame.className = "hidden";

        dScoreBtn.className = "showing";
        pScoreBtn.className = "showing";


        Turn1()

    });


    // sets up the page when the user clicks start game
    startGame.addEventListener("click", function() {
        shuffleSound.play();

        quitBtn.className = "showing";
        showScoreBtn.className = 'showing';
        startGame.className = "hidden";

        dScoreBtn.className = "showing";
        pScoreBtn.className = "showing";

        Turn1()
    });


    // executes set up and then the players turn
    function Turn1() {
        gameData.index = 0;
        pButtons.innerHTML = ''

        console.log('test2')
        
        setTimeout(dealerH2Turn, 2000)
        setTimeout(dealCardDealer, 2000)

        setTimeout(playerH2Turn, 3000)
        setTimeout(dealCardPlayer, 3000);
        setTimeout(dealCardPlayer, 4000);

        pButtons.innerHTML = '<button id="hit">HIT</button> <button id="stand">STAND</button>';

        document.getElementById('hit').addEventListener('click', function() {
            dealSound.play();
            setTimeout(dealCardPlayer, 500);
        });

        document.getElementById('stand').addEventListener('click', function() {
            Turn2()
        })
    }

    // turns of the dealer once the player stands
    function Turn2() {
        dealerH2Turn()
        gameData.index = 0;
        pButtons.innerHTML = ''

        console.log('test2')

        if (dScore < 18) {
            setTimeout(dealCardDealer, 1000);
            setTimeout(Turn2, 1500);
        } else {
            setTimeout(compareScores, 2000);
        }

    }

    // code that changes background of header so player knows whose turn it is
    function dealerH2Turn() {
        dealerH2.style.backgroundColor = '#69776A';
        dealerH2.style.padding = '10px 0px 0px 10px';
        playerH2.style.backgroundColor = '#8C998D';
        playerH2.style.padding = '0';
    }
    function playerH2Turn() {
        playerH2.style.backgroundColor = '#69776A';
        playerH2.style.padding = '10px 0px 0px 10px';
        dealerH2.style.backgroundColor = '#8C998D';
        dealerH2.style.padding = '0';
    }


    // deals a card to the dealer
    function dealCardDealer() {
        dealSound.play();

        gameData.drawNum = Math.floor(Math.random() * 10) + 1;
        gameData.drawSuit = Math.floor(Math.random() * 4);

        gameData.chosenSuit = gameData.suits[gameData.drawSuit];
        console.log(gameData.drawSuit);
        console.log(gameData.chosenSuit);

        dCards.innerHTML += `<div class="card"><div id="cardInner><div class="cardFaceFront"><img src="images/cards/${gameData.drawNum}${gameData.chosenSuit}.png" width="180" height="210"></div></div></div>`;

        console.log("test3");

        gameData.score[0] += gameData.drawNum;
        dScore += gameData.drawNum;

        if (gameData.scoreStatus === 'showing') {
            dScoreBtn.innerHTML = `SCORE:  ${gameData.score[0]}`;
        }

        setTimeout(checkLosingCondition, 2000);

    }

    // adds keyframes for the flipping of the cards
    let newKeyframes = null;

    function addKeyframe(body) {
        newKeyframes = document.createElement('style');
        newKeyframes.type = 'text/css';
        document.head.appendChild(newKeyframes);
        newKeyframes.sheet.insertRule(body, addKeyframe)
    }

    // deals a card to the player 
    function dealCardPlayer() {
        dealSound.play();
        gameData.drawNum = Math.floor(Math.random() * 10) + 1;
        gameData.drawSuit = Math.floor(Math.random() * 4);

        gameData.chosenSuit = gameData.suits[gameData.drawSuit];
        console.log(gameData.drawSuit);
        console.log(gameData.chosenSuit);

        pCards.innerHTML += `<div class="card"><div id="cardInner><div class="cardFaceFront"><img src="images/cards/${gameData.drawNum}${gameData.chosenSuit}.png" width="180" height="210"></div></div></div>`;
        

        gameData.score[1] += gameData.drawNum;
        pScore += gameData.drawNum;

        if (gameData.scoreStatus === 'showing' ){
            pScoreBtn.innerHTML = `SCORE:  ${gameData.score[1]}`;
        }

        setTimeout(checkLosingCondition, 2000);
    }


    // code for functions that check the scores and ends the game if a losing or winning condition is met
    function checkLosingCondition() {
        if (gameData.score[1] === 21) {
            winSound.play();
            resultText.innerHTML = "<b>CONGRATULATIONS, YOU WON!</b> <br> Your score is exactly 21!";
            resultOverlay.className = "showing";

        } else if (gameData.score[0] === 21) {
            resultText.innerHTML = "<b>OH NO, YOU LOST!</b> <br> The dealer's hand is exactly 21.";
            resultOverlay.className = "showing";
        } else if (gameData.score[0] > 21) {
            winSound.play();
            resultText.innerHTML = "<b>BUST</b> <br> <b>CONGRATULATIONS, YOU WON!</b> <br> The dealer's hand went over 21.";
            resultOverlay.className = "showing";

        } else if (gameData.score[1] > 21) {
            resultText.innerHTML = "<b>BUST</b> <br> <b>OH NO, YOU LOST!</b> <br> Your hand went over 21.";
            resultOverlay.className = "showing";
        }
    }

    function compareScores() {
        if (gameData.score[0] > 21) {
            winSound.play();
            resultText.innerHTML = "<b>BUST</b> <br> <b>CONGRATULATIONS, YOU WON!</b> <br> The dealer's hand went over 21.";
            resultOverlay.className = "showing";
        } else if (gameData.score[0] > gameData.score[1]) {
            resultText.innerHTML = `<b>OH NO, YOU LOST!</b> <br> The dealer's score was ${gameData.score[0]} and your score was ${gameData.score[1]} .`;
            resultOverlay.className = "showing";
        } else {
            winSound.play();
            resultText.innerHTML = `<b>CONGRATULATIONS, YOU WON!</b> <br> Your score was ${gameData.score[1]} and the dealer's score was ${gameData.score[0]} .`;
            resultOverlay.className = "showing";
        }
    }

    // Code for showing and hiding score button

    showScoreBtn.addEventListener('click', function(){
        showScoreBtn.className = 'hidden';
        hideScoreBtn.className = 'showing';
        dScoreBtn.innerHTML = `SCORE:  ${gameData.score[0]}`;
        pScoreBtn.innerHTML = `SCORE:  ${gameData.score[1]}`;

        gameData.scoreStatus = 'showing'
    })

    hideScoreBtn.addEventListener('click', function(){
        hideScoreBtn.className = 'hidden';
        showScoreBtn.className = 'showing';
        
        dScoreBtn.innerHTML = ``;
        pScoreBtn.innerHTML = ``;

        gameData.scoreStatus = 'hidden'
    })



    // code for info/instructions overlay
    // code for styling the instructions buttons
    howToPlay.addEventListener('mouseover', function() {
        howToPlay.style.color = '#556056';
        infoBtn.style.color = 'white';
        infoBtn.style.backgroundColor = '#69776A';
    });
    howToPlay.addEventListener('mouseout', function() {
        howToPlay.style.color = 'white';
        infoBtn.style.color = '#525252';
        infoBtn.style.backgroundColor = '#F4F4F4';
    });
    infoBtn.addEventListener('mouseover', function() {
        howToPlay.style.color = '#556056';
        infoBtn.style.color = 'white';
        infoBtn.style.backgroundColor = '#69776A';
    });
    infoBtn.addEventListener('mouseout', function() {
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

    

/* BELOW IS TEST CODE I WAS WORKING ON TRYING TO MAKE A CARD FLIP. I COULD NOT FIGURE IT OUT BUT I LEFT IT HERE IN CASE I WORK ON IT IN THE FUTURE */

// const css = window.document.styleSheets[0];
    // const pImg = document.getElementById('pImg');
    // const pTrigger = document.getElementById('pTrigger');
//     pCards.innerHTML += `<div id="pTrigger"><div id="pImg"></div></div>`;

    //     const pImg = document.getElementById('pImg');
    // const pTrigger = document.getElementById('pTrigger');

    // addKeyframe(`
    // @keyframes flip {
    //     //     0% {
    //     //         transform: rotateY(0deg);
    //     //         background-image: url("images/cardBack.png");
    //     //     }
    //     //     50% {
    //     //         transform: rotateY(-90deg);
    //     //         background-image: url("images/blank.png");
    //     //     }
    //     //     100% {
    //     //         transform: rotateY(-180deg);
    //     //         background-image: url("images/cards/${gameData.drawNum}${gameData.chosenSuit}.png")
    //     //     }
    // `)

// const css = window.document.styleSheets[0];
        // css.insertRule(`
        // @keyframes flip {
        //     0% {
        //         transform: rotateY(0deg);
        //         background-image: url("images/cardBack.png");
        //     }
        //     50% {
        //         transform: rotateY(-90deg);
        //         background-image: url("images/blank.png");
        //     }
        //     100% {
        //         transform: rotateY(-180deg);
        //         background-image: url("images/cards/${gameData.drawNum}${gameData.chosenSuit}.png")
        //     }
        // }
        // `, css.cssRules.length);

        // pTrigger.style.animation = 'flip 1000ms forwards';
        // pTrigger.style.animationIterationCount = '1';

        // pImg.style.backgroundImage = `images/cards/${gameData.drawNum}${gameData.chosenSuit}.png`;
        

        // angrytools.com css trasform

        // <div class="cardFaceBack"><img src="images/cardBack.png" width="180" height="210"></div>

        // pCards.innerHTML += `<div class="card"><div id="cardInner><div class="cardFaceBack"><img src="images/cardBack.png" width="180" height="210"></div> <div class="cardFaceFront"><img src="images/cards/${gameData.drawNum}${gameData.chosenSuit}.png" width="180" height="210"></div></div></div>`;

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


// // Get card element
// const aCard = document.querySelectorAll('.aCard');

// // Loop through cards. 
// // This is so you can have multiple cards on a page.
// for (let i = 0; i < aCard.length; i++) {
//    // Add a click event listener to each card.
//    aCard[i].addEventListener("click", function() {
//      // Toggle active class on card
//      aCard[i].classList.toggle("active");
//    });
// }




}());