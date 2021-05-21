import quests from './data/data.js';

const USER = ('USER')

export function getUser(){
    const stringUser = localStorage.getItem(USER);

    if (!stringUser) return {};
    //above says to return the object
    const user = JSON.parse(stringUser);

    return user;
};

export function setUser(user){
    const stringUser = JSON.stringify(user);

    localStorage.setItem(USER, stringUser);
};

export function changeCash(someCashValue){
    const user = getUser();
    
    user.cash = user.cash + someCashValue
    console.log(typeof user.cash);
    
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
    const user = getUser();
    
    for (let quest of quests) {
        if (!user.completed[quest.id]) return false
    }
    return true;
};

export function userDied() {
    const user = getUser();
    
    return user.health <=0;
}