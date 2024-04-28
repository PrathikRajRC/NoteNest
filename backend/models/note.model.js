const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const noteSchema = new Schema({
    title: { type: 'string', required: true},
    content: { type: 'text', required: true},
    tags: { type: [String], default: []},
    isPinned: { type: 'boolean', default: false},
    userId: { type: 'string', required: true},
    createdOn: { type: 'date', default: new Date().getTime() },
});

module.exports = mongoose.model('Note',noteSchema);
