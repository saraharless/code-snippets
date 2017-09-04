const mongoose = require('mongoose');

// To Do:
// a title
// a body (the code)
// optional notes
// a language
// tags -- that is, user-defined words or phrases that classify the code, like "authentication", "front-end", "middleware", or "database".
const snippetSchema = new mongoose.Schema({
    title: { type: String, required: true},
    code: { type: String, required: true},
    notes: [String],
    language: [String],
    tags: [String]
})

const codeSnippet = mongoose.model('codeSnippet', snippetSchema);

module.exports = codeSnippet;
