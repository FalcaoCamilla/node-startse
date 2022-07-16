import fs from 'fs';
import {promisify} from 'util'; //transforma a função de callback em promise

const readFilePromise = promisify(fs.readFile);

let alunos;

// fs.readFile('./alunos.json', (erro, dados) => {
//     if(erro){
//         console.error(erro);
//         return;
//     }
//     alunos = JSON.parse(dados);
//     console.log('alunos:', alunos);
// });

readFilePromise('./aluno.json').then((dados) => {
    alunos = JSON.parse(dados);
    console.log('alunos:', alunos);
}).catch((error) => {
    console.error(error);
})