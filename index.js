const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = 4000;

app.use(express.json());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'lucas',
    password: 'ds564',
    port: 7007, //5432
});

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Servidor está funcionando');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

app.get('/herois', async (req, res) => {
    try {
        const resultado = await pool.query('SELECT * FROM herois');
        res.json({
            total: resultado.rowCount,
            herois: resultado.rows
        });
    } catch (error) {
        console.error('Erro ao obter todos os herois', error);
        res.status(500).send({mensagem: 'Erro ao obter todos os herois'})
    }
});

app.post('/herois', async(req, res) => {
    try {
        const {nome, poder, nivel, pontos_vida}  = req.body;
    
        await pool.query('INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ($1, $2, $3, $4)', [nome, poder, nivel, pontos_vida]);
        res.status(201).send({mensagem: 'Sucesso ao criar heroi'});
    } catch (error) {
        console.error('Erro ao criar heroi', error);
        res.status(500).send({mensagem: 'Erro ao criar herois'})
    }
});

app.delete('/herois/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('DELETE FROM herois WHERE id = $1', [id]);
        res.status(200).send({mensagem: 'Heroi deletado'});
    } catch (error) {
        console.error('Erro ao deletar heroi', error);
        res.status(500).send({mensagem: 'Erro ao deletar heroi'})
    }
});

app.put('/herois/:id', async(req, res) => {
    try {
        const { id } = req.params;
        const {nome, poder, nivel, pontos_vida}  = req.body;

        await pool.query('UPDATE herois SET nome = $1, poder = $2, nivel = $3, pontos_vida = $4 WHERE id = $5', [nome, poder, nivel, pontos_vida, id]);
        res.status(200).send({mensagem: 'Heroi editado com sucesso'})
    } catch (error) {
        console.error('Erro ao editar o heroi', error);
        res.status(500).send({mensagem: 'Erro ao editar o heroi'})
    }
});

app.get('/herois/:nome', async (req, res) => {
    try {
        const { nome } = req.params;
        const resultado = await pool.query('SELECT * FROM herois WHERE nome = $1', [nome]);
        if (resultado.rowCount === 0) {
            res.status(404).send({mensagem: 'Heroi não encontrado'});
        } else {
            res.status(200).json({
                total: resultado.rowCount,
                herois: resultado.rows
            });
        }
    } catch (error) {
        console.error('Erro ao obter heroi por nome', error);
        res.status(500).send({mensagem: 'Erro ao obter heroi por nome'})
    }
});

app.get('/herois/:id', async(req, res) => {
    try {
        const { id } = req.params;
        await pool.query('SELECT * FROM herois WHERE id = $1', [id]);
        res.status(200).send({mensagem: `Heroi encontrado com sucesso`});
    } catch (error) {
        console.error('Erro ao obter heroi por id', error);
        res.status(500).send({mensagem: 'Erro ao obter heroi por id'})
    }
});




app.get('/batalhas/:id_heroi1/:id_heroi2', async(req, res) => {
   try {
   
   } catch (error) {
    
   }
});