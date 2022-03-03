
(function(){
    
    'add strict'

    Parse.initialize("HCbN20xBtm13L18iP6BMhZGX0tLkuVpT5FOQkPxm","OEiLitWJqUja2UHjd8bLefjLDzeMXJ1chinz5Q25");
    Parse.serverURL = 'https://parseapi.back4app.com/';

    const submitBtn = document.getElementById('submitBtn');
    const gallerySection = document.querySelector('#gallery');
    const addAffirmationForm = document.getElementById('#addAffirmation-form');
    const inputs = document.querySelectorAll('.responses:not([type=radio');

    let persons = document.getElementsByName("person");
    let chosenPerson;


    submitBtn.addEventListener('click', function(event){
        console.log('test');
        event.preventDefault();
        addAffirmation();
        location.href = "thank.html";
    });

    // stripe code
    let pageHeight = document.body.clientHeight;
    stripes.style.height = `${pageHeight}px`;


    // add affirmation to b4a 

    async function addAffirmation() {
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

        if (newAffirmation.address != ""  || newAffirmation.text != "" || newFriend.person != ""){
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
    



})();