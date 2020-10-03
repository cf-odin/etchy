// main.js / 09/07/2020 / Etch-A-Sketch
// Copyright 2020 Conrad A. Flescher. All rights reserved.

// The result of this code is supposed to be a document that looks like this:
// #ESViewportRoot
// ~#ESBoxContainer[0]
// ~~#ESbox[0]
// ~#ESBoxContainer[1]
// ~~#ESbox[1]
// ...and so on.


let boxes = [];
let boxContainers = [];
let rootElement = document.querySelector("#ESViewportRoot");

let boxClick = function (id) {
    //"id" should be a number.
    let relevantBox = document.getElementById("ESBox" + id);
    let relevantContainer = document.getElementById("ESBoxContainer" + id);
    let textBoxInput = document.getElementById("ESColorInput").value;

    // default to black if user didn't type anything
    let userColorInput = ((textBoxInput == "") ? "black" : textBoxInput);
    
    relevantBox.style.backgroundColor = userColorInput;
    relevantContainer.classList.add("ESBoxContainerActive");
    CFLog(("boxClick | " + id), userColorInput, userColorInput);
}


let createBoxContainers = function(quan) {
    for (i = 0; i < quan; i++) {
        let container = document.createElement("div");
        container.classList.add("ESBoxContainer");
        container.id = ("ESBoxContainer" + i);
        rootElement.appendChild(container);
        boxContainers.push(container)
    }
}

let createBoxes = function(quan) {
    for (i = 0; i < quan; i++) {
        let relevantContainer = document.querySelector("#ESBoxContainer" + i);
        let box = document.createElement("div");
        box.classList.add("ESBox");
        box.id = ("ESBox" + i);
        boxes.push(box);
        relevantContainer.appendChild(box);
        // we can't just send the counter directly to the function.
        // why? idk
        let boxId = i;

        box.addEventListener("mousedown", function() {
            boxClick(boxId);
        });
    
        // box.addEventListener("mouseleave", function() {
        //     CFLog(box.id, "mouseleave", "red");
        // });
    }
}


let debugString = (CF_DEBUG) ? " - debug mode is on" : "";

let userInput = window.prompt("type grid size" + debugString);
let inputNumber = parseInt(userInput, 10);
// project instructions ask us to use the number typed in
// for the column / row count, not number of boxes.
// it took me a while to realize this.
let inputNumberGrid = (inputNumber * inputNumber);


rootElement.style.width = ((inputNumber + 1) * 50) + "px";


createBoxContainers(inputNumberGrid);
createBoxes(inputNumberGrid);