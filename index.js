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
    
        await pool.query('INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ($1, $2, $3, $4, )', [nome, poder, nivel, pontos_vida]);
        res.status(201).send({mensagem: 'Sucesso ao criar heroi'});
    } catch (error) {
        console.error('Erro ao criar bruxo', error);
        res.status(500).send({mensagem: 'Erro ao criar herois'})
    }
});