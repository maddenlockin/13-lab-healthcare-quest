import { getUser } from "../local-storage-utils.js";
import { renderStats } from "../render-stats.js";
import { getEndingMessage } from "./messages.js";

const user = getUser();

renderStats();

const button = document.querySelector('#try-again');

const resultsP = document.querySelector('#results');

getEndingMessage(user);

resultsP.textContent = getEndingMessage(user);

//add play again button that clears out data
button.addEventListener('click', () => {
    console.log("hello");
    //debugger;
    localStorage.clear();

    window.location ='../';
})