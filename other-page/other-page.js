import { checkAuth, logout, insertRow, fetchItems, deleteList } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

checkAuth();
window.addEventListener('load', async ()=> {
    const items = await fetchItems();
    await renderItem(items);

});

const logoutButton = document.getElementById('logout');
const deleteButton = document.getElementById('delete');

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

deleteButton.addEventListener('click', async ()=> {   
    console.log('deleteButton Clicked');
    await deleteList();

    location.reload();

});