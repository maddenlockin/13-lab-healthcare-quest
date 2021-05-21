import quests from '../data/data.js';
import { userCompletedAllQuests, userDied, getUser } from '../local-storage-utils.js';
import { renderStats } from '../render-stats.js';

const user = getUser();

renderStats(user);

if (userCompletedAllQuests() || userDied()) {
    //take them to the results page
    window.location = '../results'
}

const ul = document.querySelector('#quests');



for (let quest of quests) {
    const questIsCompleted = user.completed[quest.id];;

    const li = document.createElement('li');

    if (!questIsCompleted) {
        const a = document.createElement('a');

        a.href = `../quest/?id=${quest.id}`;
        a.textContent = quest.title;

        li.append(a);

    } else {
        const span = document.createElement('span');

        span.style.textDecoration = "line-through";
        span.textContent = quest.title;

        li.append(span);
    }
    ul.append(li);
}
