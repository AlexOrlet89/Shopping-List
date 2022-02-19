const SUPABASE_URL = 'https://sjdlsxmnlasfuesvmebz.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNqZGxzeG1ubGFzZnVlc3ZtZWJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0ODAsImV4cCI6MTk1OTkxNzQ4MH0.SGC6ShwKbSPLUcnWYRO3o7KQbJaV16eTy-AmGphLBh4';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function fetchItems() {
    const response = await client.from('Shopping').select();
    console.log('fetchItems');
    return checkError(response);
}

export async function updateBought(id) {
    console.log('updateBought', id);
    const response = await client.from('Shopping').update({ bought: 'true' }).eq('id', `${id}`);
    return checkError(response);
}

export async function deleteList() {
    const user = client.auth.user().id;
    // console.log('deleteList is called', user);
    const response = await client.from('Shopping').delete().match({ user_id: user });
    return checkError(response);
}
export async function insertRow(x, y) {
    const response = await client.from('Shopping').insert([
        { quantity: `${x}`, item: `${y}` }
    ]);
    console.log('insertRow', response);
    return checkError(response);
}
//shopping quantity item bought
export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export function checkAuth() {
    const user = getUser();

    if (!user) location.replace('../');
}

export function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('./other-page');
    }
}

export async function signupUser(email, password) {
    const response = await client.auth.signUp({ email, password });

    return response.user;
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password });

    return response.user;
}

export async function logout() {
    await client.auth.signOut();

    return (window.location.href = '../');
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
