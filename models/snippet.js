const mongoose = require('mongoose');

const snippetSchema = new mongoose.Schema({
    title: { type: String, required: true},
    code: { type: String, required: true},
    notes: [String],
    language: [String],
    tags: [String]
})

const codeSnippet = mongoose.model('codeSnippet', snippetSchema);

module.exports = codeSnippet;
