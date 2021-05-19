export function getUser(){
    const user = localStorage.getItem(USER);
    if (!stringUser) return {};
    //above says to return the object
    const user = JSON.parse(stringUser);
    return user;
};

export function saveUser(user){
    const stringUser = JSON.stringify(user);
    localStorage.setItem(USER, stringUser);
};

export function changeCash(someCashValue){
    const user = getUser();
    user.cash = user.cash + someCashValue
    setUser(user);
};

export function changeHealth(someHealthValue){
    const user = getUser();
    user.health = user.health + someHealthValue
    setUser(user);
};

export function completeQuest(questId){
    const user = getUser();
    user.completed[questId] = true;
    setUser(user);
};

export function userCompletedAllQuests() {
    for (let quest of quests) {
        if (!user.completed[quest.id]) return false
    }
    return true
};