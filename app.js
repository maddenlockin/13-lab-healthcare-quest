import { setUser } from './local-storage-utils.js';
const form = document.querySelector('#user-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    // above stops the query parameters and stops the refresh
    const formData = new FormData(form);

    const user = formData.get('username');
    const userClass = formData.get('class');
    console.log(user, userClass);

    const userObject = {
    name: user,
    class: userClass,
    completed: {},
    health: 35,
    cash: 0,
    };
    setUser(userObject);

    window.location = '../list';

});

