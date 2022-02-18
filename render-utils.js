import { updateBought } from './fetch-utils.js';

export async function renderItem(items) {
    // get items from a fetchItems function
    const shoppingList = document.getElementById('shoppingList');

    for (let item of items) {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.quantity} ${item.item}`;
        console.log(`${item.quantity} ${item.item}, ${item.bought}`);
        shoppingList.append(listItem);
        if (`${item.bought}` === 'true') {
            listItem.classList.add('bought');
        }
        listItem.addEventListener('click', async ()=> {
            listItem.classList.add('bought');
            console.log('clicked');
            //run a function in fetch.utils that updates a row using the item's id.
            await updateBought(item.id);
        });
        
    }   
    return shoppingList;
}

// this function should return just an li, other functions will be pushed to other page.js.
// appending to shoppingList
//      const listItem = renderItem(items);
//      shoppingList.append(listItem)
// adding eventListener (same const);
//      listItem.addEventListener