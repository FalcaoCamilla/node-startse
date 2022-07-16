import express, { request, response }  from "express";

const app = express();
const port = 3000;
let users = [
    {
        id: 1, name: 'Camilla', age: 19
    },
    {
        id: 2, name: 'Neto', age: 21
    }
]

app.use(express.json) //todos os objetos sendo recebidos como json

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express.</h1>');
})

app.get('/users', (request, response) => {
    return response.send(users);
})

app.get('/users/:userId', (request, response) => {
    const userId = request.params.userId;
    const user = users.find(user => {
        return (user.id === Number(userId)) //comparando o id definido na lista com o id buscado pela requisição
    })
    return response.send(user);
});

app.post('/users', (request, response) => {
    const newUser = request.body;

    users.push(newUser);

    return response.status(201).send(newUser);
})