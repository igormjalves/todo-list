const express = require('express');
const path = require('path')

const checkListRouter = require('./src/routes/checklist');
const taskRouter = require('./src/routes/task');
const rootRouter = require('./src/routes/index');
const methodOverride = require('method-override');

require('./config/database');


// Todos os métodos do servidor dentro de app
const app = express();

// Utilizar um middleware
// express.json(): quando há a necessidade de passar um JSON como parâmetro na requisição
app.use(express.json());
// middleware para requisições via formulário
app.use(express.urlencoded({ extended: true }))

app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

// Habilitando o projeto para utilizar arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Path: trabalhar com os caminhos de arquivo dentro do projeto - __dirname (diretorio atual)
app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

// Importando um objeto de rotas como se fosse um middleware
app.use('/checklists', checkListRouter);
app.use('/', rootRouter);
app.use('/checklists', taskRouter.checklistDependent);
app.use('/tasks', taskRouter.simple);

// Dando início ao servidor
app.listen(3000, () => {
    console.log('Servidor iniciado');
})

// NODEMON: Servidor de desenvolvimento. Se um dos arquivos for atualizado, reinicia o servidor automaticamente.

// --save - salva tanto no ambiente de desenvolvimento quanto no de produção
// --save-dev - salva apenas no ambiente de desenvolvimento