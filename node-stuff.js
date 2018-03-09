const _ = require('lodash')
const yargs = require('yargs')
const fs = require('fs')

const state = {

}

const appJs = require('./app');

let command = process.argv[2]

const argv = yargs
    .command('add', 'Add new note', {
        title: {
            describe: 'Title of note',
            demand: true,
            alias: 't'
        },
        body: {
            describe: 'Note\'s message',
            demand: true,
            alias: 'b'
        }
    })
    .help()
    .argv
let list = argv._[0]

switch(command) {
    case 'list':
        console.log('list: ', list )
        break;
    case 'think':
        console.log('I\'m thinking!')
        break;
    case 'add':
        return appJs.addNote(argv.title,argv.body)
    case 'all':
        return appJs.getAll();
    case 'note':
        return appJs.getNote(argv.title)
    case 'delete':
        return appJs.removeNote(argv.title)
    default:
        console.log('command not recognized')
}
