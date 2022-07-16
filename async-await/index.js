import fetch from 'node-fetch';

async function main() {
    const user = 'FalcaoCamilla';
    const user2 = 'EuNetu';
    const apiUrl = 'https://api.github.com';
//     fetch(`${apiUrl}/users/${user}`).then((response) => {
//         return response.json()
//     }).then((user) => {
//         console.log(user);
//     })
    const response = await fetch(`${apiUrl}/users/${user}`);
    const response2 = await fetch(`${apiUrl}/users/${user2}`);
    const githubUser = await response.json();
    const githubUser2 = await response2.json();

    console.log(`ID de Falcão: ${githubUser.id}`)
    console.log(`ID de Neto: ${githubUser2.id}`)
    //para fazer as requests em paralelo, usa-se promisses
    const promise = fetch(`${apiUrl}/users/${user}`);
    const promise2 = fetch(`${apiUrl}/users/${user2}`);
    const promises = await Promise.all([promise, promise2])
    const gitUser = await promises[0].json()
    const gitUser1 = await promises[1].json()

    console.log(`ID de Falcão: ${gitUser.id}`)
    console.log(`ID de Neto: ${gitUser1.id}`)
}
main()
