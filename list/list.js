import quests from '../data/data.js';
import { userCompletedAllQuests } from '../local-storage-utils.js';
const ul = document.querySelector('#quests');

for (let quest in quests){
    const li = document.createElement('li');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    li.append(a);
    ul.append(li);
};

if (userCompletedAllQuests() || userDied()) {
    //take them to the results page
    window.location = '../results'
}