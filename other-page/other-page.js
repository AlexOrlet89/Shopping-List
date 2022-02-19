import { checkAuth, logout, insertRow, fetchItems, deleteList, updateBought } from '../fetch-utils.js';
import { renderItem } from '../render-utils.js';

const create = document.getElementById('create');
const quantity = document.getElementById('quantity');
const item = document.getElementById('item');
const shoppingList = document.getElementById('shoppingList');

checkAuth();
window.addEventListener('load', async ()=> {
    const items = await fetchItems();
    console.log(items);
    for (let item of items) {
        console.log(item.id);
        const li = await renderItem(item);
        li.addEventListener('click', async ()=>{
            li.classList.add('bought');
            updateBought(item.id);});
        
        if (`${item.bought}` === 'true') {
            li.classList.add('bought');}
        shoppingList.append(li);
    }
});

const logoutButton = document.getElementById('logout');
const deleteButton = document.getElementById('delete');

logoutButton.addEventListener('click', () => {
    logout();
});


create.addEventListener('submit', async (e)=> {
    shoppingList.innerHTML = '';
    e.preventDefault();
    console.log(quantity.value, item.value);
    await insertRow(quantity.value, item.value); //fetchfunction for inserting row
    create.reset();
    const items = await fetchItems();
    console.log(items);
    for (let item of items) {
        const li = await renderItem(item);
        console.log(li);
        li.addEventListener('click', async ()=>{
            li.classList.add('bought');
            updateBought(item.id);});
        if (`${item.bought}` === 'true') {
            li.classList.add('bought');}
        shoppingList.append(li);}
});

deleteButton.addEventListener('click', async ()=> {   
    console.log('deleteButton Clicked');
    await deleteList();

    location.reload();

});