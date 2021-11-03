(function() {
    'use strict';
    console.log("reading js");

    const container = document.querySelector("#container");
    const hotSpots = document.querySelectorAll("#container div");
    const theImg = document.querySelector("div img");

    hotSpots.forEach(function(eachSpot) {
        eachSpot.addEventListener("click", zoomPhoto);
        // eachSpot.addEventListener("mouseout", function() {
        //     theImg.className = "start";
        // });
    });

    backBtn.addEventListener("click", function() {
        theImg.className = "start";
    });

    function zoomPhoto(event) {
        const thisCorner = event.target.id;
        console.log(thisCorner);
        switch (thisCorner) {
            case "canopy":
                theImg.className = "canopy";
                break;
            case "unpaidWork":
                theImg.className = "unpaidWork";
                break;
            case "table":
                theImg.className = "table";
                break;
            case "milk":
                theImg.className = "milk";
                break;
            case "jobSecurity":
                theImg.className = "jobSecurity";
                break;

        }

    }

})();