(function(){
    'use strict'

    let globalData;
    let numDataPoints;
    const dayText = document.getElementById('dayText');
    const sleepHours = document.getElementById('hours');
    const starsDiv = document.getElementById('starsDiv');
    const eyeDiv = document.getElementById('eyeDiv');

    const jan9bar = document.getElementById('jan9');
    const jan10bar = document.getElementById('jan10');
    const jan11bar = document.getElementById('jan11');
    const jan12bar = document.getElementById('jan12');
    const jan13bar = document.getElementById('jan13');
    const jan14bar = document.getElementById('jan14');
    const jan15bar = document.getElementById('jan15');
    const jan16bar = document.getElementById('jan16');
    const jan17bar = document.getElementById('jan17');
    const jan18bar = document.getElementById('jan18');


    async function getData(){
        const myHours = await fetch('data.json');
        const data = await myHours.json();
        const dataPoints = Object.keys(data);
        globalData = data;
        // globalData = Object.values(data);
        numDataPoints = dataPoints.length;
    }

    function showHoursInfo(point, data){
        dayText.innerHTML = data[point].day;
        sleepHours.innerHTML = data[point].hours;

        let starsChosen = `stars${data[point].energy}.png`;
        let eyeChosen = `eye${data[point].hours}.png`;

        starsDiv.innerHTML = `<img id="stars" src="images/${starsChosen}">`;
        eyeDiv.innerHTML = `<img id="stars" src="images/${eyeChosen}">`;

    }

    let prevDay = 0;

    jan9bar.addEventListener('mouseover', function(){
        // changes color of the other bars back to normal and highlights clicked bar
        jan9bar.style.backgroundColor = 'rgb(69, 80, 121, 0.95)';

        showHoursInfo('Jan9', globalData);
    });
    jan9bar.addEventListener('mouseout', function(){
        jan9bar.style.backgroundColor = 'rgb(69, 80, 121, 0.75)';
    });

    jan10bar.addEventListener('mouseover', function(){
        // changes color of the other bars back to normal and highlights clicked bar
        jan10bar.style.backgroundColor = 'rgb(69, 80, 121, 0.95)';
        showHoursInfo('Jan10', globalData);
    });
    jan10bar.addEventListener('mouseout', function(){
        jan10bar.style.backgroundColor = 'rgb(69, 80, 121, 0.75)';
    });

    jan11bar.addEventListener('mouseover', function(){
        // changes color of the other bars back to normal and highlights clicked bar
        jan11bar.style.backgroundColor = 'rgb(69, 80, 121, 0.95)';
        showHoursInfo('Jan11', globalData);
    });
    jan11bar.addEventListener('mouseout', function(){
        jan11bar.style.backgroundColor = 'rgb(69, 80, 121, 0.75)';
    });
    
    jan12bar.addEventListener('mouseover', function(){
        // changes color of the other bars back to normal and highlights clicked bar
        jan12bar.style.backgroundColor = 'rgb(69, 80, 121, 0.95)';
        showHoursInfo('Jan12', globalData);
    });
    jan12bar.addEventListener('mouseout', function(){
        jan12bar.style.backgroundColor = 'rgb(69, 80, 121, 0.75)';
    });

    jan13bar.addEventListener('mouseover', function(){
        // changes color of the other bars back to normal and highlights clicked bar
        jan13bar.style.backgroundColor = 'rgb(69, 80, 121, 0.95)';
        showHoursInfo('Jan13', globalData);
    });
    jan13bar.addEventListener('mouseout', function(){
        jan13bar.style.backgroundColor = 'rgb(69, 80, 121, 0.75)';
    });

    jan14bar.addEventListener('mouseover', function(){
        // changes color of the other bars back to normal and highlights clicked bar
        jan14bar.style.backgroundColor = 'rgb(69, 80, 121, 0.95)';
        showHoursInfo('Jan14', globalData);
    });
    jan14bar.addEventListener('mouseout', function(){
        jan14bar.style.backgroundColor = 'rgb(69, 80, 121, 0.75)';
    });

    jan15bar.addEventListener('mouseover', function(){
        // changes color of the other bars back to normal and highlights clicked bar
        jan15bar.style.backgroundColor = 'rgb(69, 80, 121, 0.95)';
        showHoursInfo('Jan15', globalData);
    });
    jan15bar.addEventListener('mouseout', function(){
        jan15bar.style.backgroundColor = 'rgb(69, 80, 121, 0.75)';
    });

    jan16bar.addEventListener('mouseover', function(){
        // changes color of the other bars back to normal and highlights clicked bar
        jan16bar.style.backgroundColor = 'rgb(69, 80, 121, 0.95)';
        showHoursInfo('Jan16', globalData);
    });
    jan16bar.addEventListener('mouseout', function(){
        jan16bar.style.backgroundColor = 'rgb(69, 80, 121, 0.75)';
    });

    jan17bar.addEventListener('mouseover', function(){
        // changes color of the other bars back to normal and highlights clicked bar
        jan17bar.style.backgroundColor = 'rgb(69, 80, 121, 0.95)';
        showHoursInfo('Jan17', globalData);
    });
    jan17bar.addEventListener('mouseout', function(){
        jan17bar.style.backgroundColor = 'rgb(69, 80, 121, 0.75)';
    });

    jan18bar.addEventListener('mouseover', function(){
        // changes color of the other bars back to normal and highlights clicked bar
        jan18bar.style.backgroundColor = 'rgb(69, 80, 121, 0.95)';
        showHoursInfo('Jan18', globalData);
    });
    jan18bar.addEventListener('mouseout', function(){
        jan18bar.style.backgroundColor = 'rgb(69, 80, 121, 0.75)';
    });


    getData();

    
})();