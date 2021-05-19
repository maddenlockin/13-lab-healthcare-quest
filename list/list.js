
const ul = document.querySelector('#quests');

for (let quest of quests){
    const li = doc.createElement('li');
    a.href = `../quest/?id=${quest.id}`;
    a.textContent = quest.title;
    li.append(a);
    ul.append(li);
};

if (userCompletedAllQuests() || userDied()) {
    //take them to the results page
    window.location = '../results'
}