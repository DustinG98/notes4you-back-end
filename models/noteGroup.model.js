const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const notesSchema = require('./notes.model')

const noteGroupSchema = new Schema({
    //title, section, notes array
    title: { type: String, required: true },
    section: { type: String, required: true },
    notes: [notesSchema]
})

module.exports = noteGroupSchema;