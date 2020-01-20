const noteGroups = require('express').Router();
const User = require('../models/user.model')

const notes = require('./notes')

const verify = require('./verifyToken')


//GET User NoteGroups and notes
noteGroups.route('/').get(verify, (req, res) => {
    User.findById(req.id)
        .then(user => res.json(user.noteGroups))
        .catch(err => res.status(400).json('Error: ' + err))
})

noteGroups.route('/:id').get(verify, (req, res) => {
    User.findById(req.id)
        .then(user => {
            let noteGroup = user.noteGroups.filter(noteGroup => {
                return String(noteGroup._id) === req.params.id
            })
            res.json(noteGroup[0])
        })
})

//POST - Add noteGroup
noteGroups.route('/').post(verify, (req, res) => {
    const title = req.body.title;
    const section = req.body.section;
    const notes = [];

    const newNoteGroup = { title, section, notes }

    User.findById(req.id)
        .then(user => {
            user.noteGroups.push(newNoteGroup)
            user.save()
            res.json(user.noteGroups[user.noteGroups.length -1])
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

//DELETE - Delete noteGroup
noteGroups.route('/:noteGroupId').delete(verify, (req, res) => {
    const noteGroupId = req.params.noteGroupId;
    User.findById(req.id)
        .then(user => {
            user.noteGroups = user.noteGroups.filter(noteGroup => {
                return String(noteGroup._id) !== noteGroupId;
            })
            user.save()
            res.json('Note Group Deleted!')
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

//PUT - Update noteGroup
noteGroups.route('/:noteGroupId').put(verify, (req, res) => {
    User.findById(req.id)
        .then(user => {
            user.noteGroups = user.noteGroups.map(noteGroup => {
                if(String(noteGroup._id) === req.params.noteGroupId) {
                    noteGroup.title = req.body.title;
                    noteGroup.section = req.body.section;
                    return noteGroup;
                }
                return noteGroup
            })
            user.save()
            res.json('Note Group Updated!')
        })
})

noteGroups.use('/:noteGroupId', (req, res, next) => {
    req.noteGroupId = req.params.noteGroupId;
    req.id = req.id
    next();
}, notes)

module.exports = noteGroups;