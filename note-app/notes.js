const fs = require('fs')
const chalk = require('chalk')

const getNotes = function () {
    return loadNotes();
}

const readNotes = (title) => {
    const notes = loadNotes();

    const note = notes.find((note) => {
        return note.title === title;
    });

    if(!note){
        console.log(chalk.red.inverse('note not found'));
    } else {
        console.log(chalk.green.inverse(note.title) + " "+  note.body);
    }
}

const listOfNotes = function () {
    const notes = loadNotes();

    if (notes.length === 0) {
        console.log(chalk.red.inverse('no note data available'));
    } else {
        notes.forEach((note) => {
            console.log(chalk.green.inverse(note.title))
        });
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    // Following execute whole array
    // const duplicateNotes = notes.filter((note) => {
    //     return note.title === title
    // });

    // once match stop execution and return true otherwise undefined
    const duplicateNote = notes.find((note) => {
        return note.title === title;
    });

   // if (duplicateNotes.length === 0) {
   if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added!'))
    } else {
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) => {
    const notes = loadNotes();
    const notesToKeep = notes.filter((note) => {
        return note.title !== title
    })
    console.log(notesToKeep);
    if (notes.length > notesToKeep.length) {
        console.log(chalk.green.inverse('Note removed!'))
        saveNotes(notesToKeep);
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    readNotes: readNotes,
    addNote: addNote,
    removeNote: removeNote,
    listOfNotes: listOfNotes
}