const _ = require('lodash');

let command = process.argv[2]

if (command === 'list') {
    console.log('list: ', [] )
}
let list = process.argv[3]
switch(command) {
    case 'list':
        console.log('list: ', list )
        break;
    case 'think':
        console.log('I\'m thinking!')
        break;
    default:
        console.log('command not recognized')
}