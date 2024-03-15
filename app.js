const express = require('express');
const exphbr = require('express-handlebars');
const path = require('path');
const app = express();

// Configuração do Handlebars
app.engine('handlebars', exphbr.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.set('views', './views');

// Rota principal para o formulário de cadastro
app.get('/', (req, res) => {
    const title = "Página de Cadastro";
    res.render('cadastro', { title });
});

// Rota para listar os registros
app.get('/listar', (req, res) => {
    // Dados de exemplo
    const title = "Lista de Cadastros"
    const registros = [
        { nome: 'Gabriel Henrique', endereco: 'Av. Teste do teste 1', bairro: 'Bairro 1', cep: '00000-000', cidade: 'Cidade 1', estado: 'Estado 1' },
        { nome: 'Maria', endereco: 'Av. Teste do teste 2', bairro: 'Bairro 2', cep: '11111-111', cidade: 'Cidade 2', estado: 'Estado 2' },
        { nome: 'José', endereco: 'Av. Teste do teste 3', bairro: 'Bairro 3', cep: '22222-222', cidade: 'Cidade 3', estado: 'Estado 3' }
    ];
    res.render('listar', { registros, title});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
