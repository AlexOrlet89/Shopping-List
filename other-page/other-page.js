import { checkAuth, logout, insertRow } from '../fetch-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const create = document.getElementById('create');
const quantity = document.getElementById('quantity');
const item = document.getElementById('item');

create.addEventListener('submit', async (e)=> {
    e.preventDefault();
    console.log(quantity.value, item.value);
    await insertRow(quantity.value, item.value); //fetchfunction for inserting row
    create.reset();
});