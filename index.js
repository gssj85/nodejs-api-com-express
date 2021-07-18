const customExpress = require('./config/customExpress');
const connection = require('./infrastructure/connection');
const tabelas = require('./infrastructure/tabelas');

connection.connect((erro) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log('Conectado com sucesso');
        tabelas.init(connection);
        const app = customExpress();
        app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
    }
});



