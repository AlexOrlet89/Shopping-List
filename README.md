Alright so things we need to do. first of all make the dev branch. Done.
Supabase is going to need a new table, the table is going to need a policy where users can only CRUD rows that match their id. Finally columns will be added for quantity, item, bought-status (defaultin to false) and a special column for user_id which will have a default of uid() or something like that(revisit last project to confirm characters).

Once we have that set up we are going to make a log in page. Html will be split from left half to right half similar to our last from scratch, one side sign in and one side sign up. The sign in and sign up functions are already supplied in our fetch, so we just need to link them to the right forms' event listener. This page will also have a redirectifLoggedIn which i think exists already too. 

The other page will have a header with a logout button (already provided, and checkAuth will cash us out). 
The other div will have a form with 2 inputs and submit button. The submit button will take the input values and feed them to an insert row function, will take the values from the table that the user is authorised to take, a display function will loop each item through a render (rendering the argument data into the text content of a p/div and returning the div, which the display function will append to a ul). the display function should also be called at the top of the page for ppl logging in.

finally a delete button with an event listner that has 2 functions. delete all in supabase(policy will allow only user matched rows can be deleted) and a display function to update the newly cleared ul. 

seems easy enough