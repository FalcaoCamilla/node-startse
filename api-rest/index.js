import express, { request, response }  from "express";

const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`)
});

app.get('/', (request, response) => {
    return response.send('<h1>Trabalhando com servidor express.</h1>');
})