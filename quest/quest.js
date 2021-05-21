import quests from '../data/data.js';
import { findById } from '../utils.js';
import { changeCash, changeHealth, completeQuest } from '../local-storage-utils.js';
import { renderStats } from '../render-stats.js';

renderStats();

const main = document.querySelector('.main-section');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const quest = findById(quests, id);
//console.log(id, quest);

//create h1, img, and p
const h1 = document.createElement('h1'); 
const img = document.createElement('img');
const p = document.createElement('p');

h1.textContent = quest.title;
img.src = `../assets/${quest.image}`;
p.textContent = quest.description;

const form = document.createElement('form');

for (let choice of quest.choices) {
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'choice';
    input.value = choice.id;

    label.append(choice.description, input);
    form.append(label);
};

const button = document.createElement('button');

button.textContent = 'Result...';

form.append(button);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const choiceId = formData.get('choice')
    //console.log(choiceId);

    const selectedChoice = findById(quest.choices, choiceId);

    changeCash(selectedChoice.cash);
    changeHealth(selectedChoice.health); 
    completeQuest(quest.id);  

    const resultsDiv = document.createElement('div');
    resultsDiv.textContent = selectedChoice.result;

    const returnButton = document.createElement('button');
    returnButton.textContent = 'Back to Quests';
    returnButton.addEventListener('click', () => {
        window.location = '../list';
    });

    resultsDiv.append(returnButton);
    main.append(resultsDiv);
    //setTimeout(() => window.location = '../list', 5000);
})

main.append(h1, img, p, form);

// const completed = {
//     dragon: true,
//     treasure: true
// };
