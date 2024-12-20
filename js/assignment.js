"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const yearElement = document.getElementById("year");
const resolutionElement = document.getElementById("resolution")
const willMeetResolutionElement = document.getElementById("will-meet-resolution")
const submissionBtn = document.getElementById("submission-btn")

// Declare your variables here.
const resolution = "Stay hydrated";
const currentYear = 2025;
let willMeetResolution = "yes"


function updateYear() {
    // write the logic
    yearElement.innerText = currentYear;

}

function updateResolution() {
    // Update this function 
    resolutionElement.innerText = resolution;

}

function updatewillMeetResolution() {
    willMeetResolutionElement.innerText = willMeetResolution;
}


function render() {
    // Finish writing this function
    updateYear();
    updateResolution();
    updatewillMeetResolution();


}

submissionBtn.addEventListener("click", function () {
    // Finish writing this function
    render();

})
