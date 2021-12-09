const yargs = require('yargs')

const students = require('./students')
//Add
yargs.command({
    command: 'add',
    describe: 'Add grade',
    builder: {
        id: {
            describe: 'id of the student in add command',
            demandOption: true,
            type: 'number'
        },
        name: {
            describe: 'name of the student in add command',
            demandOption: true,
            type: 'string'
        },
        grades: {
            describe: 'Grades of students in add command ',
            demandOption: true,
            type: 'array'
        },
        comment: {
            describe: 'comment in add command',
            demandOption: false,
            type: 'string'
        },
    },
    handler: (argv) => {
        students.addGrade(argv.id, argv.name, argv.grades, argv.comment)
    }
})

// delete
yargs.command({
    command: 'delete',
    describe: 'Delete grade',
    builder: {
        id: {
            describe: 'id of the student in delete command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        students.deleteGrade(argv.id)
    }
})

// read 
yargs.command({
    command: 'read',
    describe: 'Read grades',
    builder: {
        id: {
            describe: 'This is title in read command',
            demandOption: true,
            type: 'number'
        }
    },
    handler: (argv) => {
        students.readGrade(argv.id)
    }
})

// list
yargs.command({
    command: 'list',
    describe: 'List grades',
    handler: () => {
        students.listGrades()
    }
})


// Match all
yargs.command({
    command: '*',
    describe: 'Match all',
    handler: () => {
        console.log('Sorry not a command')
    }
})

console.log(yargs.argv)
// yargs.parse()

/////////////////////////////////////////////////////////////////////////////////