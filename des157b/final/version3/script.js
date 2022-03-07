
(function(){
    
    'add strict'

    Parse.initialize("HCbN20xBtm13L18iP6BMhZGX0tLkuVpT5FOQkPxm","OEiLitWJqUja2UHjd8bLefjLDzeMXJ1chinz5Q25");
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const submitBtn = document.getElementById('submitBtn');
    const gallerySection = document.querySelector('#gallery');
    const addAffirmationForm = document.getElementById('addAffirmation-form');
    const inputs = document.querySelectorAll('.responses:not([type=radio');


    let persons = document.getElementsByName("person");


    const stripes = document.getElementById('stripes');

    const logoBtn = document.getElementById('logo');
    const affirmationNav = document.getElementById('affirmation-btn');
    const galleryNav = document.getElementById('gallery-btn');


    // get pages
    const landingPage = document.getElementById('landingPage');
    const formPage = document.getElementById('formPage');
    const galleryPage = document.getElementById('galleryPage');
    const thankPage = document.getElementById('thankPage');
    const cardPage = document.getElementById('cardPage');

    // landing page 
    const affirmationBtnHome = document.getElementById('affirmationBtn-home');
    const galleryBtnHome = document.getElementById('galleryBtn-home');

    // thank page 
    const galleryBtnThank = document.getElementById('goGallery-btn');
    const entryBtnThank = document.getElementById('entry-btn');


    // card page 
    const cardContainer = document.querySelector('#card-overlay-container');

    
    
    // ------------------NAV BAR CODE------------------------
    
    logoBtn.addEventListener('click', function(){
        landingPage.className = 'showing';
        galleryPage.className = 'hidden';
        thankPage.className = 'hidden';
        formPage.className = 'hidden';
        cardPage.className = 'hidden';
        affirmationNav.style.textDecoration = 'none';
        galleryNav.style.textDecoration = 'none';
    })

    affirmationNav.addEventListener('click', function(){
        landingPage.className = 'hidden';
        galleryPage.className = 'hidden';
        thankPage.className = 'hidden';
        formPage.className = 'showing';
        cardPage.className = 'hidden';
        affirmationNav.style.textDecoration = 'underline';
        galleryNav.style.textDecoration = 'none';
    })

    galleryNav.addEventListener('click', function(){
        landingPage.className = 'hidden';
        galleryPage.className = 'showing';
        thankPage.className = 'hidden';
        formPage.className = 'hidden';
        cardPage.className = 'hidden';
        affirmationNav.style.textDecoration = 'none';
        galleryNav.style.textDecoration = 'underline';
        startGalleryPage()
        
    })



    // ------------------LANDING PAGE CODE------------------------

    affirmationBtnHome.addEventListener('click', function(){
        landingPage.className = 'hidden';
        formPage.className = 'showing';
        affirmationNav.style.textDecoration = 'underline';
        galleryNav.style.textDecoration = 'none';
    })

    galleryBtnHome.addEventListener('click', function(){
        landingPage.className = 'hidden';
        galleryPage.className = 'showing';
        affirmationNav.style.textDecoration = 'none';
        galleryNav.style.textDecoration = 'underline';
        startGalleryPage()
    })




    // ------------------FORM PAGE CODE------------------------
    // stripe code
    let pageHeight = document.body.clientHeight;
    stripes.style.height = `${pageHeight}px`;

    // add affirmation to b4a 

    addAffirmationForm.addEventListener('submit', function(event){
        event.preventDefault();
        addAffirmation();
        thankPage.className = 'showing';
        formPage.className = 'hidden';
        console.log('test');
    });

    async function addAffirmation() {
        console.log('test2');
        const newAffirmation = {};


        for (let i=0; i<inputs.length; i++) {
            let key = inputs[i].getAttribute('name');
            let value = inputs[i].value;
            newAffirmation[key] = value;
        }

        for (let i of persons) {
            if (i.checked){
                chosenPerson = i.id;
            }
        }

        if (newAffirmation.address != ""  && newAffirmation.text != "" && newAffirmation.person != ""){
            const newAffirmationData = new Parse.Object('Affirmations');

            newAffirmationData.set('address', newAffirmation.address);
            newAffirmationData.set('text', newAffirmation.text);
            newAffirmationData.set('person', chosenPerson);

            // alert('added');

            try{
                const result = await newAffirmationData.save();

                document.getElementById("addAffirmation-form").reset();

            } catch(error){
                console.error('Error while creating Affirmation', error);
            }

        } else {
            alert('Error while retrieving form. Make sure that all the areas are filled out or selected!');
        }

    }

    // function resetFormFields(){
    //     document.getElementById('address').value = '';
    //     document.getElementById('text').value = '';
    //     document.getElementById('person').value = '';
    // }

    // ------------------THANK YOU PAGE CODE------------------------

    galleryBtnThank.addEventListener('click', function(){
        galleryPage.className = 'showing';
        thankPage.className = 'hidden';
        affirmationNav.style.textDecoration = 'none';
        galleryNav.style.textDecoration = 'underline';
    })
    entryBtnThank.addEventListener('click', function(){
        formPage.className = 'hidden';
        thankPage.className = 'hidden';
        affirmationNav.style.textDecoration = 'none';
        galleryNav.style.textDecoration = 'none';
    })



    // ------------------GALLERY PAGE CODE------------------------
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
                

                if (text.length > 150){
                    const slicedText = text.slice(0, 150);
                    cardText = `${slicedText}...`

                } else {
                    cardText = text;
                    
                }
                // const addMoreBtn = '<button class="moreBtn">more</button>';
                // addMoreBtn.setAttribute('id', `r-${id}`);
                const theArticle = document.createElement('article');
                theArticle.setAttribute('id', `r-${id}`);
                theArticle.className = 'gallery-card';
                theArticle.innerHTML = `
                <section class="card-content">
                    <h3 class="card-address">Dear <br><span class="card-name">${address}</span>, </h3>
                    <p class="card-text">${cardText}</p>
                    <button id="e-${id}" class="moreBtn">more</button>
                </section>
                    `;
                gallerySection.append(theArticle);
            });

            setStripes();

        } catch (error) {
            console.error('Error while fetching Affirmations', error);
        }
        
    }

    function setStripes(){
        // styles the responsive stripe height on the page
        let pageHeight = document.body.clientHeight;
        stripes.style.height = `${pageHeight}px`;
        console.log(pageHeight);
    }

    function startGalleryPage(){
        try {
            gallerySection.innerHTML = '';
            displayAffirmations();
    
        } catch(error){
            console.error('Error while creating Affirmation', error);
        }
    }


    // code for individual gallery card
    document.addEventListener('click', function(event){
        if (event.target.matches('.moreBtn')){
            const thisRecord = event.target.getAttribute('id').slice(2);
            setCard(thisRecord)
            galleryPage.className = 'hidden';
            cardPage.className = 'showing';
        }
    }, false);
    
    async function setCard(recordId){
        const theAffirmations = Parse.Object.extend('Affirmations');
        const query = new Parse.Query(theAffirmations);
        query.equalTo('objectId', recordId);

        try{
            const results = await query.find();
            results.forEach(function(thisFriend){
                const thisAddress = thisFriend.get('address');
                const thisText = thisFriend.get('text');
                const thisPerson = thisFriend.get('person');

    
                cardContainer.innerHTML = '';
                const overlaySection = document.createElement('article');
                // overlaySection.setAttribute('id', `o-${id}`);
                overlaySection.innerHTML = `
                <section id="card-overlay-content">
                            <h3 class="card-address">Dear <br><span class="card-name">${thisAddress}</span>, </h3>
                            <p class="card-text">${thisText}</p>
                </section>
                    `;
                cardContainer.append(overlaySection);
                console.log('success');
                
                // const cardContainer = document.querySelector('#card-overlay-container');
                // cardContainer.innerHTML = '';
                // const overlaySection = document.createElement('section');
                // overlaySection.setAttribute('id', `o-${id}`);
                // overlaySection.className = 'gallery-card';
                // overlaySection.innerHTML = `
                // <section id="card-overlay-content">
                //             <h3 class="card-address">Dear <br><span class="card-name">${thisAddress}</span>, </h3>
                //             <p class="card-text">${thisText}</p>
                // </section>
                //     `;
                // cardContainer.append(overlaySection);

            })
        } catch {
            console.error('error while fetching affirmations', error);

        }

        
        
    }





})();