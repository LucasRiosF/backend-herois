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
    port: 5432, //7007
});

app.use(express.json());


function calcularDano(poder, nivel) {
    switch (poder) {
        case 'Velocidade':
            return (20 + nivel) / 2;
        case 'Regeneração':
            return (100 + nivel) / 2;
        case 'Resistência':
            return (30 + nivel) / 2;
        case 'Invisibilidade':
            return (15 + nivel) / 2;
        case 'Fogo':
            return (35 + nivel) / 2;;
        case 'Super Força':
            return (40 + nivel) / 2;
        case 'Trovão':
            return (25 + nivel) / 2;
        default:
            return 0;
    }
}


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


app.get('/batalhas/:id_heroi1/:id_heroi2', async (req, res) => {
    try {
        const { id_heroi1, id_heroi2 } = req.params;

        const hero1 = await pool.query('SELECT * FROM herois WHERE id = $1', [id_heroi1]);
        const hero2 = await pool.query('SELECT * FROM herois WHERE id = $1', [id_heroi2]);

        if (hero1.rows.length === 0 || hero2.rows.length === 0) {
            res.status(404).send({ mensagem: 'Um ou ambos os heróis não foram encontrados.' });
            return;
        }

        let danoHero1 = calcularDano(hero1.rows[0].poder, hero1.rows[0].nivel);
        let danoHero2 = calcularDano(hero2.rows[0].poder, hero2.rows[0].nivel);

        let vidaHero1 = hero1.rows[0].pontos_vida;
        let vidaHero2 = hero2.rows[0].pontos_vida;

        vidaHero1 = vidaHero1 - danoHero2;
        vidaHero2 = vidaHero2 - danoHero1;

        let vencedorId, perdedorId;

        if (vidaHero1 > vidaHero2) {
            vencedorId = id_heroi1;
            perdedorId = id_heroi2;
        } else if (vidaHero2 > vidaHero1) {
            vencedorId = id_heroi2;
            perdedorId = id_heroi1;
        } else {
            res.status(200).send({ mensagem: 'EMPATE!' });
            return;
        }

        await pool.query('INSERT INTO batalhas (id_heroi1, id_heroi2, id_vencedor) VALUES ($1, $2, $3)', [id_heroi1, id_heroi2, vencedorId]);

        res.status(200).send({ mensagem: `O herói com ID ${vencedorId} venceu a batalha.` });

    } catch (error) {
        console.error('Erro ao processar batalha', error);
        res.status(500).send({ mensagem: 'Erro ao processar batalha' });
    }
});


app.get('/', (req, res) => {
    res.send('Servidor está funcionando');
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});