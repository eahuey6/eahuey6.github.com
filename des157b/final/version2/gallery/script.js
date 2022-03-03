
(function(){
    
    'add strict'

    Parse.initialize("HCbN20xBtm13L18iP6BMhZGX0tLkuVpT5FOQkPxm","OEiLitWJqUja2UHjd8bLefjLDzeMXJ1chinz5Q25"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/';

    
    const gallerySection = document.querySelector('#gallery');
    const overlaySection = document.querySelector('#card-overlay-container')



    let persons = document.getElementsByName("person");
    let chosenPerson;

    async function displayAffirmations(){
        const affirmations = Parse.Object.extend('Affirmations');
        const query = new Parse.Query(affirmations);

        try{

            const results = await query.descending('createdAt').find();
            // console.log(results);

            results.forEach( function(eachAffirmation){
                const id = eachAffirmation.id;
                const address = eachAffirmation.get('address');
                const text = eachAffirmation.get('text');
                const person = eachAffirmation.get('person');
                let cardText;

                if (text.length > 230){
                    const slicedText = text.slice(0, 230);
                    cardText = `${slicedText}...`

                } else {
                    cardText = text;
                }

                const theArticle = document.createElement('article');
                theArticle.setAttribute('id', `r-${id}`);
                theArticle.className = 'gallery-card';
                theArticle.innerHTML = `
                <section class="card-content">
                    <h3 class="card-address">Dear <br><span class="card-name">${address}</span>, </h3>
                    <p class="card-text">${cardText}</p>
                </section>
                    `;
                gallerySection.append(theArticle);
            });

        } catch (error) {
            console.error('Error while fetching Affirmations', error);
        }
        

    }

    try {
        gallerySection.innerHTML = '';
        displayAffirmations()
    } catch(error){
        console.error('Error while creating Affirmation', error);

    }

    // document.addEventListener('click', function(event){
    //     if (event.target.matches('gallery-card')){

    //     }
    // })
    

    // function fillOverlay(chosenAffirmation){
    //     const affirmations = Parse.Object.extend('Affirmations');
    //     const query = new Parse.Query(affirmations);

    //     try{

    //         const results = await query.descending('createdAt').find();

    //         results.forEach( function(eachAffirmation){
    //             const id = eachAffirmation.id;
    //             const address = eachAffirmation.get('address');
    //             const text = eachAffirmation.get('text');
    //             const person = eachAffirmation.get('person');
    //             let cardText;

    //             if (text.length > 230){
    //                 cardText = text.slice(0, 200);

    //             } else {
    //                 cardText = text;
    //             }

    //             const theOverlay = document.createElement('section');
    //             theOverlay.setAttribute('id', 'card-overlay-content');
    //             theOverlay.innerHTML = `
    //                 <h3 class="card-address">Dear <br><span class="card-name">${address}</span>, </h3>
    //                 <p class="card-text">${text}</p>
    //                 `;
    //             overlaySection.append(theOverlay);
    //         });

    //     } catch (error) {
    //         console.error('Error while fetching Affirmation', error);
    //     }

    // }
    
    // <section id="card-overlay-container">
    //             <section id="card-overlay-content">
    //                 <h3 class="card-address">Dear <br><span class="card-name">Friend of a Friend</span>, </h3>
    //                 <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    //             </section>
    //             <p id="card-overlay-backBtn">x</p>
    //         </section>
    // 


    // splice number of characters, first check text.length is greater than 10 then splice y 10 

    
})();