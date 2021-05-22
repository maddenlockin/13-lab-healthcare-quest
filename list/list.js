import quests from '../data/data.js';
import { userCompletedAllQuests, userDied, getUser } from '../local-storage-utils.js';
import { renderStats } from '../render-stats.js';

const user = getUser();

renderStats(user);

if (userCompletedAllQuests() || userDied()) {
    //take them to the results page
    window.location = '../results'
}

const nav = document.querySelector('#quests');



for (let quest of quests) {
    const questIsCompleted = user.completed[quest.id];;

    const p = document.createElement('p');

    if (!questIsCompleted) {
        const a = document.createElement('a');

        a.href = `../quest/?id=${quest.id}`;
        a.textContent = quest.title;

        p.append(a);

    } else {
        const span = document.createElement('span');

        span.style.textDecoration = "line-through";
        span.textContent = quest.title;

        p.append(span);
    }
    nav.append(p);
}

export function createLink(quest) {
    const link = document.createElement('a');

    link.classList.add('quest');

    link.href = '../quest/?id=' + quest.id;
    link.style.top = quest.map.top;
    link.style.left = quest.map.left;
    link.textContent = quest.title;

    return link;
}