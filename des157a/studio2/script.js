(function() {
    'use strict';
    console.log("reading js");




    const container = document.querySelector("#container");
    const hotSpots = document.querySelectorAll("#container div");
    const theImg = document.querySelector("div img");


    // CODE FOR THE CANOPY ZOOM AND OVERLAY
    const canopySpot = document.querySelector("#canopy");
    canopySpot.addEventListener("click", zoomPhoto);
    canopySpot.addEventListener("click", checkCanopyOverlay);

    function checkCanopyOverlay() {
        document.getElementById("canopyOverlay").className = "showing";
    };

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
    console.log("test 2");

    function checkUnpaidWorkOverlay() {
        document.getElementById("unpaidWorkOverlay").className = "showing";
        console.log("test 1");
    }

    document.querySelector("#unpaidWorkBackBtn").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("unpaidWorkOverlay").className = "hidden";
        theImg.className = "start";
        console.log("test 3");
    });

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape") {
            document.getElementById("unpaidWorkOverlay").className = "hidden";
            console.log("test 4");
        }
    });

// CODE FOR THE TABLE ZOOM AND OVERLAY
const tableSpot = document.querySelector("#table");
tableSpot.addEventListener("click", zoomPhoto);
tableSpot.addEventListener("click", checkTableOverlay);
console.log("test 2");

function checkTableOverlay() {
    document.getElementById("tableOverlay").className = "showing";
    console.log("test 1");
}

document.querySelector("#tableBackBtn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("tableOverlay").className = "hidden";
    theImg.className = "start";
    console.log("test 3");
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("tableOverlay").className = "hidden";
        console.log("test 4");
    }
});

// CODE FOR THE MILK ZOOM AND OVERLAY
const milkSpot = document.querySelector("#milk");
milkSpot.addEventListener("click", zoomPhoto);
milkSpot.addEventListener("click", checkMilkOverlay);
console.log("test 2");

function checkMilkOverlay() {
    document.getElementById("milkOverlay").className = "showing";
    console.log("test 1");
}

document.querySelector("#milkBackBtn").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("milkOverlay").className = "hidden";
    theImg.className = "start";
    console.log("test 3");
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        document.getElementById("milkOverlay").className = "hidden";
        console.log("test 4");
    }
});


// CODE FOR THE JOB SECURITY ZOOM AND OVERLAY
const jobSecuritySpot = document.querySelector("#jobSecurity");
jobSecuritySpot.addEventListener("click", zoomPhoto);
jobSecuritySpot.addEventListener("click", checkJobSecurityOverlay);

function checkJobSecurityOverlay() {
    document.getElementById("jobSecurityOverlay").className = "showing";
}

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


    // ZOOM CODE FUNCTION ZOOMS IN IMAGE AT RIGHT SPOT
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