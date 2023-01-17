const deadpool = {
    name: 'Wade',
    lastName: 'Winston',
    poder: 'Regeneración',
    getName() {
        return `${ this.name } ${ this.lastName} ${ this.poder }`
    }
}
// const { name, lastName, poder } = deadpool;

function showHero( heroe ) {
    const { name, lastName, poder } = heroe;
    console.log(`${ name } ${ lastName} ${ poder }`)
}

// showHero( deadpool );

const heores = ['Deadpoll', 'Superman', 'Batman'];

// const h1 = heores[0];
// const h2 = heores[1];
// const h3 = heores[2];

const [, , h3] = heores;

console.log(h3)

