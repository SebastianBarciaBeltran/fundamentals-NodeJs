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

const id = 3;

const getEmploye = ( id, callback ) => {
    const employe  = employees.find( e => e.id === id );

    if (employe) {
        callback(null, employe);
    } else {
        callback(`Empleado con id ${ id } No existe`, );
    }

}


const getSalary = ( id, callback) => {
    const salary  = salaries.find( e => e.id === id );

    if (salary) {
        callback(null, salary);
    } else {
        callback(`Salario con id ${ id } No existe`, );
    }
}

showEmploye( id, ( err, employe ) => {

    if ( err ) {
        return console.log(err)
    }

    showSalary( id, (err, salary) => {
        if (err) {
            return console.log(err)        
        }
        console.log('El empleado: ' + employe.name + ' tiene un salario de: ' + salary.amount);
    })

});