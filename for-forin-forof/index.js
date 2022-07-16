import {getPeople} from './StarWarsServices.js'
async function main(){
    const starWarsPeople = await getPeople(1);
    // for(let i=0; i < starWarsPeople.length; i++){
    //     console.log(starWarsPeople[i].name);
    // }

    // for(let propPerson in starWarsPeople[0]){
    //     console.log(starWarsPeople[0][propPerson])
    // }

    // for(let person of starWarsPeople){
    //     console.log(person.name)
    // }

    //novo array com map
    const starWarsPeopleNames = starWarsPeople.map((person) => {
        const {name, height, gender} = person; //boa prática. linhas 18 e 19
        // const name = person.name;
        // const height = person.height
        return {name, height, gender} 
    });
    console.log(starWarsPeopleNames)

    //filtros no array
    const starWarsPeopleFiltered = starWarsPeople.filter(person => person.gender === 'male')
    .map((person) => {
       return {name: person.name, gender: person.gender} 
    } )
    console.log(starWarsPeopleFiltered)

    //manipulando array com reduce, retornando soma
    const totalHeight = starWarsPeople.reduce((total, person) => { //primeiro parametro - acumulador. segundo parametro - elemento que esta sendo iterada
        total += Number(person.height);

        return total
    }, 0)
    
    console.log('Media das alturas', totalHeight/starWarsPeople.length);

}

main();