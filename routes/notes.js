const notes = require('express').Router()
const User = require('../models/user.model')

const verify = require('./verifyToken')


//POST - Add new note to noteGroup
notes.route('/').post(verify, (req, res) => {
    const title = req.body.title;
    User.findById(req.id)
        .then(user => {
            user.noteGroups.forEach(noteGroup => {
                if(String(noteGroup._id) === req.noteGroupId) {
                    noteGroup.notes.push({ title: title })
                    return noteGroup
                }
                return noteGroup
            })
            user.save()
            res.json('Added Note!')
        })
})

notes.route('/:noteId').get(verify, (req, res) => {
    User.findById(req.id)
        .then(user => {
            let theNoteGroup = user.noteGroups.filter(noteGroup => {
                return String(noteGroup._id) === req.noteGroupId
            })
            let theNote = theNoteGroup[0].notes.filter(note => {
                return String(note._id) === req.params.noteId
            })
            res.json(theNote[0])
        })
})


//DELETE - Delete Note by ID
notes.route('/:noteId').delete(verify, (req, res) => {
    User.findById(req.id)
        .then(user => {
            user.noteGroups.forEach(noteGroup => {
                if(String(noteGroup._id) === req.noteGroupId) {
                    noteGroup.notes = noteGroup.notes.filter(note => {
                        return String(note._id) !== req.params.noteId;
                    })
                    return noteGroup
                }
                return noteGroup
            })
            user.save()
            res.json('Note Deleted!')
        })
})


//UPDATE NOTE BY ID
notes.route('/:noteId').put(verify, (req, res) => {
    User.findById(req.id)
        .then(user => {
            user.noteGroups.forEach(noteGroup => {
                if(String(noteGroup._id) === req.noteGroupId) {
                    noteGroup = noteGroup.notes.map(note => {
                        if (String(note._id) === req.params.noteId) {
                            note.title = req.body.title;
                            return note;
                        } 
                        return note;
                    })
                    return noteGroup
                }
                return NoteGroup
            })
            user.save()
            res.json('Note Updated!')
        })
})

module.exports = notes;