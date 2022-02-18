import { checkAuth, logout, insertRow, fetchItems } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();

const logoutButton = document.getElementById('logout');

logoutButton.addEventListener('click', () => {
    logout();
});

const create = document.getElementById('create');
const quantity = document.getElementById('quantity');
const item = document.getElementById('item');
const shoppingList = document.getElementById('shoppingList');

create.addEventListener('submit', async (e)=> {
    shoppingList.innerHTML = '';
    e.preventDefault();
    console.log(quantity.value, item.value);
    await insertRow(quantity.value, item.value); //fetchfunction for inserting row
    create.reset();
    const items = await fetchItems();
    await renderItem(items);
});