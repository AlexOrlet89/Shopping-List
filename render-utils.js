// import { updateBought } from './fetch-utils.js';

export async function renderItem(item) {
    // get items from a fetchItems function
    // console.log(item);
    const listItem = document.createElement('li');
    listItem.textContent = `${item.quantity} ${item.item}`;
    // console.log(listItem);
    return listItem;
}   

// this function should return just an li, other functions will be pushed to other page.js.
// appending to shoppingList
//      const listItem = renderItem(items);
//      shoppingList.append(listItem)
// adding eventListener (same const);
//      listItem.addEventListener


// listItem.addEventListener('click', async ()=> {
//     listItem.classList.add('bought');
//     console.log('clicked');
//     //run a function in fetch.utils that updates a row using the item's id.
//     await updateBought(item.id);
// });