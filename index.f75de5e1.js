"use strict";
function waitFor(element, eventName) {
    return new Promise((resolve)=>{
        element.addEventListener(eventName, ()=>{
            resolve(`It was ${eventName} on the element: ` + `${element.nodeName}, id: ${element.id}.`);
        });
    });
}
const printMessage = (message)=>{
    const createMessageDiv = document.createElement("div");
    createMessageDiv.classList.add("message");
    createMessageDiv.innerText = message;
    document.body.appendChild(createMessageDiv);
};
const loginField = document.getElementById("login");
const passwordField = document.getElementById("password");
const button = document.getElementById("submit");
waitFor(loginField, "click").then(printMessage);
waitFor(passwordField, "click").then(printMessage);
waitFor(button, "click").then(printMessage);
waitFor(loginField, "input").then(printMessage);
waitFor(passwordField, "input").then(printMessage);
waitFor(loginField, "blur").then(printMessage);
waitFor(passwordField, "blur").then(printMessage);
waitFor(button, "blur").then(printMessage);

//# sourceMappingURL=index.f75de5e1.js.map