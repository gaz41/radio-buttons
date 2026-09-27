// Access radio button input elements and status text elements from the DOM
let radio1 = document.getElementById("radio1");
let radio2 = document.getElementById("radio2");
let radio3 = document.getElementById("radio3");
let statusText1 = document.getElementById("status1");
let statusText2 = document.getElementById("status2");
let statusText3 = document.getElementById("status3");

// Initialize status messages for each radio button
statusText1.innerHTML =
  'radio button 1 ON <span class="defaultText">(default)</span>'; // initial message
statusText2.innerHTML = "radio button 2"; // initial message
statusText3.innerHTML = "radio button 3"; // initial message

// radio button state variables
let radioBtnObj = {
  radio1: true, // Initial state for radio button 1
  radio2: false, // Initial state for radio button 2
  radio3: false, // Initial state for radio button 3
};

// Function to update the display of radio button states
const displayState = () => {
  state.innerHTML = `
  <div>radio button 1 : ${radioBtnObj.radio1}</div>
  <div>radio button 2 : ${radioBtnObj.radio2}</div>
  <div>radio button 3 : ${radioBtnObj.radio3}</div>`;
};

// Display area for radio button status
const display = document.getElementById("checkboxText");
const state = document.getElementById("checkboxState");
const reset = document.getElementById("resetBtn");

display.innerHTML = "Click on a radio button"; // Initial message
displayState(); // Set initial state display

// Function to reset radio buttons to their default states
const resetRadioButtons = () => {
  // Reset radio button states
  radioBtnObj.radio1 = true;
  radioBtnObj.radio2 = false;
  radioBtnObj.radio3 = false;

  // Update radio button elements in the DOM
  radio1.checked = radioBtnObj.radio1;
  radio2.checked = radioBtnObj.radio2;
  radio3.checked = radioBtnObj.radio3;

  // Update status text for each radio button
  statusText1.innerHTML =
    'radio button 1 ON <span class="defaultText">(default)</span>';
  statusText2.innerHTML = "radio button 2";
  statusText3.innerHTML = "radio button 3";

  display.innerHTML = "Click on a radio button"; // Reset display message
  displayState(); // Refresh the state display
};

// Event listener for reset button
reset.addEventListener("click", resetRadioButtons);

// Event listener for radio button 1
radio1.addEventListener("change", function () {
  radioBtnObj.radio1 = this.checked; // Update radio button state
  radioBtnObj.radio2 = false; // Update radio button state
  radioBtnObj.radio3 = false; // Update radio button state
  statusText1.innerHTML = `radio button 1 ${radioBtnObj.radio1 ? "ON" : ""}`; // Update status text
  statusText2.innerHTML = `radio button 2`; // Update status text
  statusText3.innerHTML = `radio button 3`; // Update status text

  // Update display based on radio button state
  display.innerHTML = `radio button 1 ${radioBtnObj.radio1 ? "ON" : ""}`;
  displayState(); // Refresh the state display
});

// Event listener for radio button 2
radio2.addEventListener("change", function () {
  radioBtnObj.radio1 = false; // Update radio button state
  radioBtnObj.radio2 = this.checked; // Update radio button state
  radioBtnObj.radio3 = false; // Update radio button state
  statusText1.innerHTML = `radio button 1`; // Update status text
  statusText2.innerHTML = `radio button 2 ${radioBtnObj.radio2 ? "ON" : ""}`; // Update status text
  statusText3.innerHTML = `radio button 3`; // Update status text

  // Update display based on radio button state
  display.innerHTML = `radio button 2 ${radioBtnObj.radio2 ? "ON" : ""}`;
  displayState(); // Refresh the state display
});

// Event listener for radio button 3
radio3.addEventListener("change", function () {
  radioBtnObj.radio1 = false; // Update radio button state
  radioBtnObj.radio2 = false; // Update radio button state
  radioBtnObj.radio3 = this.checked; // Update radio button state
  statusText1.innerHTML = `radio button 1`; // Update status text
  statusText2.innerHTML = `radio button 2`; // Update status text
  statusText3.innerHTML = `radio button 3 ${radioBtnObj.radio3 ? "ON" : ""}`; // Update status text

  // Update display based on radio button state
  display.innerHTML = `radio button 3 ${radioBtnObj.radio3 ? "ON" : ""}`;
  displayState(); // Refresh the state display
});

// COPYRIGHT NOTICE
// Dynamically generate copyright information
const copyright = document.getElementById("copy");
copyright.innerHTML =
  "Copyright &copy; " + // Start of the copyright string
  new Date().getFullYear() + // Get the current year
  ` <a href="https://www.gaz41.com">gaz41.com</a>. <span class="copy2">All Rights Reserved</span>`;
