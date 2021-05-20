export function findById(someArray, someId) {
    for (let item of someArray) {
        if (item.id === id) {
            return item;
        }
    }
}
//console.log(findById)