const mongoose = require('mongoose');

// Definicao no Schema - modelo que sera utilizado no Documento
// No MongoDB não é necessária uma estrutura de dados fixa, mas é interessante ter um pouco de previsibilidade sobre qual será a estrutura

const checklistSchema = mongoose.Schema({
    name: {type: String, required
    : true},
    tasks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Task'
    }]
})

module.exports = mongoose.model('Checklist', checklistSchema);