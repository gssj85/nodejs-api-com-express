class Tabelas {
    init(connection) {
        this.connection = connection;
        this.criarAtendimentos();
    }

    criarAtendimentos() {
        const sql = `
                CREATE TABLE IF NOT EXISTS atendimentos
                (
                    id INT NOT NULL AUTO_INCREMENT,
                    cliente VARCHAR(50) NOT NULL,
                    pet VARCHAR(20),
                    servico VARCHAR(20) NOT NULL,
                    data DATETIME NOT NULL,
                    dataCriacao DATETIME NOT NULL,
                    status VARCHAR(20) NOT NULL,
                    observacoes TEXT,
                    PRIMARY KEY(id)
                )
            `;
                
        this.connection.query(sql, (erro) => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela criada com sucesso');
            }
        });
    }
}

module.exports = new Tabelas;