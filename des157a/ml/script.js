(function() {
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("#myform");
    let madLib = document.querySelector("#madLib");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let noun1 = document.querySelector("#noun1").value;
        let noun2 = document.querySelector("#noun2").value;
        let adj = document.querySelector("#adj").value;
        let verb = document.querySelector("#verb").value;

        let myText;

        if (noun1 && noun2 && adj && verb) {
            myText = `Here are the words: ${noun1}, ${noun2}, ${adj}, and ${verb}`;
        } else {
            myText = "Please complete the form so I can make your Mad Lib!";
        }

        madLib.innerHTML = myText;

        noun1 = document.querySelector("#noun1").value = "";
        noun2 = document.querySelector("#noun2").value = "";
        adj = document.querySelector("#adj").value = "";
        verb = document.querySelector("#verb").value = "";

        // let formData = document.querySelectorAll("input[type=text");
        // for (let eachField of formData) {
        //     eachField.value = "";
        // }


    });


}());