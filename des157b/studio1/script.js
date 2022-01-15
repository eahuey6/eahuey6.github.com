(function(){
    'use strict';

    const myVideo = document.querySelector('#myVideo');

    let i=0;
    const text1 = 'The woods are lovely,';
    const text2 = 'dark and deep.';
    const text3 = 'But I have promises to keep,';
    const text4 = 'and miles to go before I sleep,';
    const text5 = 'and miles to go before I sleep.';

    const line1 = document.querySelector('#line1');
    const line2 = document.querySelector('#line2');
    const line3 = document.querySelector('#line3');
    const line4 = document.querySelector('#line4');
    const line5 = document.querySelector('#line5');

    const lines = document.querySelector('.lines');

    let speed = 300;

    let linesLeftPos = 580;
    let newLine1LeftPos = linesLeftPos;
    let line1TopPos = 480;
    let newLine2LeftPos = linesLeftPos;
    let line2TopPos = 480;
    let newLine3LeftPos = linesLeftPos;
    let line3TopPos = 480;
    let newLine4LeftPos = linesLeftPos;
    let line4TopPos = 480;
    let newLine5LeftPos = linesLeftPos;
    let line5TopPos = 480;

    const resetBtn = document.querySelector('.fa-redo-alt');
    const fullscreen = document.querySelector('.fa-expand');
    const keyboard = document.querySelector('.fa-keyboard');

    // code for reset and fullscreen buttons and load icon/screen
    resetBtn.addEventListener('click', function(){
        document.location.reload();
    })
    fullscreen.addEventListener('click', function(){
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    })
    myVideo.addEventListener('playing', function(){
        keyboard.style.display = 'none';
    })


    // code for when video ends
    myVideo.addEventListener('ended', function(){
        myVideo.style.filter = 'contrast(50%)';
        resetBtn.style.top = '50vh';
        resetBtn.style.left = '50vw';
    })

    // lines rotation
    line1.addEventListener('mouseover', function(){
        line1.style.transform = 'rotate(20deg)';
    });
    line2.addEventListener('mouseover', function(){
        line2.style.transform = 'rotate(-20deg)';
    });
    line3.addEventListener('mouseover', function(){
        line3.style.transform = 'rotate(20deg)';
    });
    line4.addEventListener('mouseover', function(){
        line4.style.transform = 'rotate(-20deg)';
    });
    line5.addEventListener('mouseover', function(){
        line5.style.transform = 'rotate(20deg)';
    });
    


    // code for line 1 typing
    function typing1(){
        lines.style.transition = 'transition: all .01s;';
        if (i < text1.length) {
            line1.innerHTML += text1.charAt(i);
            i++;
            newLine1LeftPos -= 12.5;
            lines.style.left = `${newLine1LeftPos}px`;
            setTimeout(typing1, speed);
        }
        lines.style.transition = 'transition: all .5s;';
    }
    function moveUp1(){
        line1TopPos -= 50;
        line1.style.top = `${line1TopPos}px`
        setTimeout(moveSide, 500)
    }

    // code for line 2
    function typing2 (){
        i = 0;
        typing2Loop()
    }
    function typing2Loop(){
        lines.style.transition = 'transition: all .01s;';
        if (i < text2.length) {
            line2.innerHTML += text2.charAt(i);
            i++;
            newLine2LeftPos -= 12.5;
            lines.style.left = `${newLine2LeftPos}px`;
            line2.style.left = `${newLine2LeftPos}px`;
            setTimeout(typing2Loop, speed);
        }
        lines.style.transition = 'transition: all .5s;';
    }
    function moveUp2(){
        line2TopPos -= 50;
        line1TopPos -= 50;
        line2.style.top = `${line2TopPos}px`
        line1.style.top = `${line1TopPos}px`
        setTimeout(moveSide, 450)
    }

    // code for line 3
    function typing3 (){
        i = 0;
        typing3Loop()
    }
    function typing3Loop(){
        lines.style.transition = 'transition: all .01s;';
        if (i < text3.length) {
            line3.innerHTML += text3.charAt(i);
            i++;
            newLine3LeftPos -= 12.5;
            lines.style.left = `${newLine3LeftPos}px`;
            line2.style.left = `${newLine3LeftPos}px`;
            line3.style.left = `${newLine3LeftPos}px`;
            setTimeout(typing3Loop, 295);
        }
        lines.style.transition = 'transition: all .5s;';
    }
    function moveUp3(){
        line3TopPos -= 50;
        line2TopPos -= 50;
        line1TopPos -= 50;
        line3.style.top = `${line3TopPos}px`
        line2.style.top = `${line2TopPos}px`;
        line1.style.top = `${line1TopPos}px`;
        setTimeout(moveSide, 480);
    }

    // code for line 4
    function typing4 (){
        i = 0;
        typing4Loop()
    }
    function typing4Loop(){
        lines.style.transition = 'transition: all .01s;';
        if (i < text4.length) {
            line4.innerHTML += text4.charAt(i);
            i++;
            newLine4LeftPos -= 12.5;
            lines.style.left = `${newLine4LeftPos}px`;
            line2.style.left = `${newLine4LeftPos}px`;
            line3.style.left = `${newLine4LeftPos}px`;
            line4.style.left = `${newLine4LeftPos}px`;
            setTimeout(typing4Loop, 310);
        }
        lines.style.transition = 'transition: all .5s;';
    }
    function moveUp4(){
        line4TopPos -= 50;
        line3TopPos -= 50;
        line2TopPos -= 50;
        line1TopPos -= 50;
        line4.style.top = `${line4TopPos}px`;
        line3.style.top = `${line3TopPos}px`;
        line2.style.top = `${line2TopPos}px`;
        line1.style.top = `${line1TopPos}px`;
        setTimeout(moveSide, 500);
    }

    // code for line 4
    function typing5 (){
        i = 0;
        typing5Loop()
    }
    function typing5Loop(){
        lines.style.transition = 'transition: all .01s;';
        if (i < text5.length) {
            line5.innerHTML += text5.charAt(i);
            i++;
            newLine5LeftPos -= 12.5;
            lines.style.left = `${newLine5LeftPos}px`;
            line2.style.left = `${newLine5LeftPos}px`;
            line3.style.left = `${newLine5LeftPos}px`;
            line4.style.left = `${newLine5LeftPos}px`;
            line5.style.left = `${newLine5LeftPos}px`;
            setTimeout(typing5Loop, 310);
        }
        lines.style.transition = 'transition: all .5s;';
    }
    function moveUp5(){
        line5TopPos -= 50;
        line4TopPos -= 50;
        line3TopPos -= 50;
        line2TopPos -= 50;
        line1TopPos -= 50;
        line5.style.top = `${line5TopPos}px`;
        line4.style.top = `${line4TopPos}px`;
        line3.style.top = `${line3TopPos}px`;
        line2.style.top = `${line2TopPos}px`;
        line1.style.top = `${line1TopPos}px`;
        setTimeout(moveSide, 500);
    }


    // last move up of lines at end of video
    function moveUp6(){
        lines.style.transition = 'transition: all 2 s';
        line5TopPos -= 50;
        line4TopPos -= 50;
        line3TopPos -= 50;
        line2TopPos -= 50;
        line1TopPos -= 50;
        line5.style.top = `${line5TopPos}px`;
        line4.style.top = `${line4TopPos}px`;
        line3.style.top = `${line3TopPos}px`;
        line2.style.top = `${line2TopPos}px`;
        line1.style.top = `${line1TopPos}px`;
    }


    // code for moving to side (all lines)
    function moveSide(){
        line1.style.left = `${linesLeftPos}px`;
        line2.style.left = `${linesLeftPos}px`;
        line3.style.left = `${linesLeftPos}px`;
        line4.style.left = `${linesLeftPos}px`;
        line5.style.left = `${linesLeftPos}px`;
    }




    // runs functions based on timers to match video
    setTimeout(typing1, 1000);
    setTimeout(moveUp1, 8000);

    setTimeout(typing2, 10500);
    setTimeout(moveUp2, 16100);
    
    setTimeout(typing3, 18500);
    setTimeout(moveUp3, 27880);

    setTimeout(typing4, 30000);
    setTimeout(moveUp4, 40570);

    setTimeout(typing5, 42800);
    setTimeout(moveUp5, 54000);

    setTimeout(moveUp6, 56600);
    



})();