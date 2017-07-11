const _ = require('lodash');
const colors = require('colors');
const yargs = require('yargs');
const notes = require('./notes');
const yargv = yargs.argv;

console.log(`${'---'.green} ${'App started'.red} ${'---'.green}`);

let command = process.argv[2] || 'list';
let id = '';

console.log('Command:', command.yellow);

switch (command) {
    case 'add':
        notes.addNote(yargv.title,yargv.body);
        break;
    case 'read':
        notes.getNote(yargv.title);
        break;
    case 'list':
        notes.getAll();
        break;
    case 'remove':
        notes.removeNote(yargv.title);
        break;
    default:
        console.log(`Command "${command}" not recognized`);
}
