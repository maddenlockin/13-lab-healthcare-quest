import quests from '../data/data.js';
import { userCompletedAllQuests, userDied, getUser } from '../local-storage-utils.js';
import { renderStats } from '../render-stats.js';

const user = getUser();

renderStats(user);

if (userCompletedAllQuests() || userDied()) {
    //take them to the results page
    window.location.href = '../results'
}

const nav = document.querySelector('#quests');



for (let quest of quests) {
    const questIsCompleted = user.completed[quest.id];;

    const p = document.createElement('p');

    if (!questIsCompleted) {
        const a = document.createElement('a');

        a.href = `../quest/?id=${quest.id}`;
        a.textContent = quest.title;
        a.style.top = quest.map.top;
        a.style.left = quest.map.left;
        p.append(a);

    } else {
        const span = document.createElement('span');

        span.style.textDecoration = "line-through";
        span.textContent = quest.title;

        p.append(span);
    }
    nav.append(p);
}
