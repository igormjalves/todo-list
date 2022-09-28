// Arquivo de configuração do Mongoose
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Conectar o banco de dados com o Projeto
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log("Conectado ao MongoDB"))
.catch((err) => console.error(err));