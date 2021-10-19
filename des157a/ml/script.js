
(function(){
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("#myform");
    let madLib = document.querySelector("#madLib");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault();
        let aTime = document.querySelector("#aTime").value;
        let adj = document.querySelector("#adj").value;
        let aNum = document.querySelector("#aNum").value;
        let color = document.querySelector("#color").value;
        let direction = document.querySelector("#direction").value;
        let tool = document.querySelector("#tool").value;
        let item = document.querySelector("#item").value;
        let decor = document.querySelector("#decor").value;

        let myText;

        if (aTime && adj && aNum && color && direction && tool && item && decor) {


            myText = 
            `Estimated time to build the table: ${aTime} <br>
            <br>
            Materials Needed:<br>
            1 square piece of ${adj} wood <br>
            4 table legs <br>
            ${aNum} nails <br>
            ${color} paint <br>
            1 ${decor} <br>
            <br>
            Instructions: <br>
            1. Put the square piece of wood ${direction} on the ground <br>
            2. Nail each leg to the corners of the square wood using a ${tool} <br>
            3. Sand the table with a piece of ${item} <br>
            4. Paint the table with your ${color} paint <br>
            5. Decorate your table with the ${decor} <br>`;
        } else {
            myText = "Please complete the form so I can make your Mad Lib!";
        }

        madLib.innerHTML = myText;

        // reset the fields
        // let aTime = document.querySelector("#aTime").value  = "";
        // let adj = document.querySelector("#adj").value = "";
        // let aNum = document.querySelector("#aNum").value = "";
        // let color = document.querySelector("#color").value = "";
        // let direction = document.querySelector("#direction").value = "";
        // let tool = document.querySelector("#tool").value = "";
        // let item = document.querySelector("#item").value = "";
        // let decor = document.querySelector("#decor").value = "";

        // let formData = document.querySelectorAll("input[type=text");
        // for (let eachField of formData) {
        //     eachField.value = "";
        // }


    });


}());