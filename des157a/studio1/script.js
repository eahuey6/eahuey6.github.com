(function() {
    "use strict";
    console.log("reading js");

    const myForm = document.querySelector("#myform");
    let madLib = document.querySelector("#madLib");

    myForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // sets each var to their values inputed by user
        let aTime = document.querySelector("#aTime").value;
        let adj = document.querySelector("#adj").value;
        let aNum = document.querySelector("#aNum").value;
        let color = document.querySelector("#color").value;
        let direction = document.querySelector("#direction").value;
        let tool = document.querySelector("#tool").value;
        let item = document.querySelector("#item").value;

        let decor;
        let chosenDecor;
        let decorations = document.getElementsByName("decoration");

        // sorts through the radio fieldset and finds what the user chose
        for (let i of decorations) {
            if (i.checked){
                chosenDecor = i.id;
            }
        }


        // replaces image on overlay with what decoration user chose
        if (chosenDecor == "flowers"){
            document.getElementById("tableDecor").src = "images/table_flowers.png";
            document.getElementById("tableDecor").height = "446";
            decor = "flowers"
            
        } else if (chosenDecor == "candles") {
            document.getElementById("tableDecor").src = "images/table_candles.png";
            document.getElementById("tableDecor").height = "373";
            decor = "candles";

        } else if (chosenDecor == "books") {
            document.getElementById("tableDecor").src = "images/table_books.png";
            document.getElementById("tableDecor").height = "314";
            decor = "books";
        }


        // puts user inputed words into the mad libs text
        if (aTime && adj && aNum && color && direction && tool && item && decor) {

            aTimeBlank.innerHTML = aTime;
            adjBlank.innerHTML = adj;
            aNumBlank.innerHTML = aNum;
            colorBlank1.innerHTML = color;
            colorBlank2.innerHTML = color;
            directionBlank.innerHTML = direction;
            toolBlank.innerHTML = tool;
            itemBlank.innerHTML = item;
            decorBlank1.innerHTML = decor;
            decorBlank2.innerHTML = decor;

        } 

        // changes classname of overlay to showing therefore allows overlay to pop up
        console.log("submit")
        event.preventDefault();
        document.getElementById("overlay").className = "showing";

    });

    // exits out of overlay page if user clicks back button
    backBtn.addEventListener("click", function(event) {
        document.getElementById("overlay").className = "hidden";
    });


}());