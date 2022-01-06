(function() {
    'use strict';

    const button = document.querySelector('button');
    const body = document.querySelector('body');
    const banner = document.querySelector('#banner');
    const sections = document.querySelectorAll('section')
    let mode = 'dark';

    const windowsImg = document.getElementById('windows');
    const barcodeImg = document.getElementById('barcode');
    const mugImg = document.getElementById('mug');
    const barImg = document.getElementById('bar');
    const shelfImg = document.getElementById('shelf');
    const line = document.getElementById('line');

    button.addEventListener('click', function() {
        if (mode === 'dark') {
            body.className = 'switch';
            banner.className = 'switch';
            button.className = 'switch';
            for (const section of sections) {
                section.className = 'switch';
            }
            mode = 'light';

            mugImg.className = 'showing';
            barImg.className = 'showing';
            shelfImg.className = 'showing';
            line.className = 'hidden';
            barcodeImg.className = 'hidden';
            windowsImg.className = 'hidden';

        
        } else {
            body.removeAttribute('class');
            banner.removeAttribute('class');
            button.removeAttribute('class');
            for (const section of sections) {
                section.removeAttribute('class');
            }
            mode = 'dark'
            mugImg.className = 'hidden';
            barImg.className = 'hidden';
            shelfImg.className = 'hidden';
            line.className = 'showing';
            barcodeImg.className = 'showing';
            windowsImg.className = 'showing';


        }
    })
})()