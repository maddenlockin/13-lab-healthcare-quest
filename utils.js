//import quests from './data/data.js'; 

export function findById(someArray, someId) {
    for (let item of someArray) {
        if (item.id === someId) {
            return item;
        }
    }
}
//console.log(findById)