
(function(){
    
    'add strict'

    Parse.initialize("HCbN20xBtm13L18iP6BMhZGX0tLkuVpT5FOQkPxm","OEiLitWJqUja2UHjd8bLefjLDzeMXJ1chinz5Q25"); //PASTE HERE YOUR Back4App APPLICATION ID AND YOUR JavaScript KEY
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const submitBtn = document.getElementById('submitBtn');
    const gallerySection = document.querySelector('#gallery');
    const addAffirmationForm = document.getElementById('#addAffirmation-form');
    const inputs = document.querySelectorAll('#addAffirmation-form input:not([type=submit])');


    async function displayAffirmations(){
        const affirmations = Parse.Object.extend('Affirmations');
        const query = new Parse.Query(affirmations);

        try{

            const results = await query.ascending('createdAt').find();
            // console.log(results);

            results.forEach( function(eachAffirmation){
                const id = eachAffirmation.id;
                const address = eachAffirmation.get('address');
                const text = eachAffirmation.get('text');
                const person = eachAffirmation.get('person');

                const theArticle = document.createElement('article');
                theArticle.setAttribute('id', `r-${id}`);
                theArticle.className = 'gallery-card';
                theArticle.innerHTML = `
                <section class="card-content">
                    <h3 class="card-address">Dear <br><span class="card-name">${address}</span>, </h3>
                    <p class="card-text">${text}</p>
                </section>
                    `;
                gallerySection.append(theArticle);
            });

        } catch (error) {
            console.error('Error while fetching Affirmations', error);
        }
        

    }

    // displayAffirmations();

    submitBtn.addEventListener('click', function(event){
        event.preventDefault();
        addAffirmation();
    });

    async function addAffirmation() {
        const newAffirmation = {};

        for (let i=0; i<inputs.length; i++) {
            let key = inputs[i].getAttribute('address');
            let value = inputs[i].value;
            newAffirmation[key] = value;

        }

        if (newAffirmation.address != ""  || newAffirmation.text != "" || newFriend.person != ""){
            const newAffirmationData = new Parse.Object('Affirmations');

            newAffirmationData.set('address', newAffirmation.address);
            newAffirmationData.set('text', newAffirmation.text);
            newAffirmationData.set('person', newAffirmation.person);

            alert('added');

            try{
                const result = await newAffirmationData.save();

                resetFormFields();
                gallerySection.innerHTML = '';
                displayAffirmations();
            } catch(error){
                console.error('Error while creating Affirmation', error);
            }

        } else {
            alert('Error while retrieving form. Make sure that all the areas are filled out or selected!');
        }

    }

    function resetFormFields(){
        document.getElementById('address').value = '';
        document.getElementById('text').value = '';
        document.getElementById('person').value = '';
    }
    



})();