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
//     const promise = new Promise( (resolve, reject) => { 
//        const employe  = employees.find( e => e.id === id );

//        if ( employe ) {
//             resolve( employe );
//        } else {
//             reject(`No existe empleado con id ${ id }`);
//        }
//    });
//    return promise;
   
return new Promise( (resolve, reject) => { 
       const employe  = employees.find( e => e.id === id );

        ( employe ) ? resolve( employe ) : reject(`No existe empleado con id ${ id }`);

   });
}

const getSalary = (id, callback) => {

    return new Promise( (resolve, reject) => {
        const salary  = salaries.find( s => s.id === id );

        ( salary ) ? resolve( salary ) : reject(`No existe salario con id ${ id }`);
    })

}

// getEmploye(id)
//     .then( employe => console.log( employe ))
//     .catch( err => console.log(err))

// getSalary(id)
//     .then( salary => console.log( salary ))
//     .catch( err => console.log(err))

// PROMESAS EN CADENA

let name; 

getEmploye( id )
    .then( employe =>{ 
         name = employe.name;
       return getSalary( id ) 
    })
    .then( salary => console.log( `El empleado ${ name } tiene un salario de ${ salary.amount }` ) )
    .catch( err => console.log(err));