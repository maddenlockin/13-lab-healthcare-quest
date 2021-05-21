import { setUser } from './local-storage-utils.js';
const form = document.querySelector('#user-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // above stops the query parameters and stops the refresh
    const formData = new FormData(form);

    const user = formData.get('username');
    const userClass = formData.get('class');
    //console.log(user, userClass);

    let userObject = {
    name: user,
    class: userClass,
    completed: {},
    health: 100,
    cash: 1000,
    };
    setUser(userObject);

    window.location = './list';

});

