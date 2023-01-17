const employees = [ 
    {
        id: 1,
        name: 'Sebastián'
    },
    {
        id: 2,
        name: 'Juan'
    },
    {
        id: 3,
        name: 'Lorena'
    }
];

const salaries = [ 
    {
        id: 1,
        amount: 1000
    },
    {
        id: 2,
        amount: 1500
    }
];

const id = 5;

const getEmploye = ( id, callback ) => {   
return new Promise( (resolve, reject) => { 
       const employe  = employees.find( e => e.id === id );

        ( employe ) ? resolve( employe ) : reject(`No existe empleado con id ${ id }`);

   });
}

const getSalary = (id, callback) => {
    return new Promise( (resolve, reject) => {
        const salary  = salaries.find( s => s.id === id );

        ( salary ) ? resolve( salary ) : reject(`No existe salario con id ${ id }`);
    });
}


const getInfoUser = async( id ) => {

    try {
        const employe = await getEmploye(id);
        const salary = await getSalary(id);

        return `El salario del empleado ${ employe.name } es de ${ salary.amount }`;        

    } catch (error) {
        throw error;
    }



}

getInfoUser( id )
    .then( msg => console.log(msg))
    .catch( err => console.log(err));