console.log('Notes.js loaded.');
const fs = require('fs');
const colors = require('colors');

let addNote = (title, body) => {
    let fileName = `${__dirname + '/notes/' + title}.json`;
    let notes = [];
    let note = {
        title: title.toString(),
        body
    };

    fs.access(fileName, err => {
        if(!err){
            notes =  JSON.parse(fs.readFileSync(fileName));
            console.log('Here',notes);
        }
        notes.push(note);
        console.log(`Adding note: ${title.cyan} \n ${body.bgCyan}`);
        fs.writeFileSync(fileName, JSON.stringify(notes));
    });
};

let getAll = () => {
    console.log('Getting all notes');
    fs.readdir(__dirname + '/notes', (err, files) => {

        files.forEach( file => {
            getNote(file);
        });
    });
};

let getNote = (title) => {
    if(title.indexOf('.json') === -1){
        title += '.json';
    }

    fs.readFile(__dirname + '/notes/' + title, function (err, data) {
        if(err){
            return console.log(`Can't read note ${title}`.red);
        }
        let notes = JSON.parse(data);
        console.log(colors.yellow(notes[0].title));
        notes.forEach( (note, index) => {
            console.log((index + 1)+ ': ' + colors.bgCyan(note.body));
        })
        console.log('===================');
    });
};

let removeNote = (title) => {
    console.log(`Removing note: ${title}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
};
