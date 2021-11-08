(function() {
    'use strict';
    console.log("reading js");

    const theImg = document.querySelector("div img");

    // CODE FOR THE CANOPY ZOOM AND OVERLAY
    const canopySpot = document.querySelector("#canopy");
    canopySpot.addEventListener("click", zoomPhoto);
    canopySpot.addEventListener("click", checkCanopyOverlay);
        // makes the overlay pop up:
    function checkCanopyOverlay() {
        document.getElementById("canopyOverlay").className = "showing";
    };
        // makes the close button close the overlay and set image back to original state:
    document.querySelector("#canopyBackBtn").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("canopyOverlay").className = "hidden";
        theImg.className = "start";
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            document.getElementById("canopyOverlay").className = "hidden";
        }
    });


    // CODE FOR THE UNPAID WORK ZOOM AND OVERLAY
    const unpaidWorkSpot = document.querySelector("#unpaidWork");
    unpaidWorkSpot.addEventListener("click", zoomPhoto);
    unpaidWorkSpot.addEventListener("click", checkUnpaidWorkOverlay);
        // makes the overlay pop up:
    function checkUnpaidWorkOverlay() {
        document.getElementById("unpaidWorkOverlay").className = "showing";
    }
        // makes the close button close the overlay and set image back to original state:
    document.querySelector("#unpaidWorkBackBtn").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("unpaidWorkOverlay").className = "hidden";
        theImg.className = "start";
    });
    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            document.getElementById("unpaidWorkOverlay").className = "hidden";
            theImg.className = "start";
        }
    });

// CODE FOR THE TABLE ZOOM AND OVERLAY
const tableSpot = document.querySelector("#table");
tableSpot.addEventListener("click", zoomPhoto);
tableSpot.addEventListener("click", checkTableOverlay);
    // makes the overlay pop up:    
function checkTableOverlay() {
    document.getElementById("tableOverlay").className = "showing";
}
    // makes the close button close the overlay and set image back to original state:
document.querySelector("#tableBackBtn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("tableOverlay").className = "hidden";
    theImg.className = "start";
});
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("tableOverlay").className = "hidden";
        theImg.className = "start";
    }
});

// CODE FOR THE MILK ZOOM AND OVERLAY
const milkSpot = document.querySelector("#milk");
milkSpot.addEventListener("click", zoomPhoto);
milkSpot.addEventListener("click", checkMilkOverlay);
     // makes the overlay pop up: 
function checkMilkOverlay() {
    document.getElementById("milkOverlay").className = "showing";
}
    // makes the close button close the overlay and set image back to original state:
document.querySelector("#milkBackBtn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("milkOverlay").className = "hidden";
    theImg.className = "start";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("milkOverlay").className = "hidden";
        theImg.className = "start";
    }
});


// CODE FOR THE JOB SECURITY ZOOM AND OVERLAY
const jobSecuritySpot = document.querySelector("#jobSecurity");
jobSecuritySpot.addEventListener("click", zoomPhoto);
jobSecuritySpot.addEventListener("click", checkJobSecurityOverlay);
    // makes the overlay pop up: 
function checkJobSecurityOverlay() {
    document.getElementById("jobSecurityOverlay").className = "showing";
}
    // makes the close button close the overlay and set image back to original state:
document.querySelector("#jobSecurityBackBtn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("jobSecurityOverlay").className = "hidden";
    theImg.className = "start";
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("jobSecurityOverlay").className = "hidden";
        theImg.className = "start";
    }
});


// ZOOM CODE FUNCTION ZOOMS IN IMAGE
// makes current spot zoom in to the spot by the class identification 
    function zoomPhoto(event) {
        const curr = event.target.id;
        switch (curr) {
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