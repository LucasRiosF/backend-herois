# Gerenciamento e Batalha de Heróis

![text](images/heroe.jpg)


O Projeto de Gerenciamento de Heróis é uma aplicação de backend desenvolvida para oferecer funcionalidades de CRUD (Create, Read, Update, Delete) relacionadas a heróis. Ele permite a criação, atualização, exclusão e recuperação de informações sobre heróis, bem como funcionalidades adicionais, como batalhas entre heróis histórico de batalhas.


- Criação, leitura, atualização e exclusão (CRUD) de heróis.
- Realização de batalhas entre heróis.
- Consulta de histórico de batalhas.


## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL



## Como a Batalha Funciona

Na dinâmica da batalha, cada herói utiliza seu poder específico, associado a uma quantidade de dano determinada. Esse valor é somado ao nível de habilidade do herói e dividido por dois, representando a força do ataque. Posteriormente, esse dano é subtraído dos pontos de vida do oponente. O herói que mantiver mais pontos de vida após o embate é considerado o vencedor.


## Como Usar

1. Clone o repositório para o seu ambiente local.
2. Instale as dependências do projeto usando `npm install`.
3. Configure o banco de dados PostgreSQL com o nome `lucas` e execute o script `script.sql` para criar as tabelas necessárias.
4. Abra o arquivo `index.js` e ajuste as configurações do banco de dados conforme necessário (usuário, senha, host, porta).
5. Inicie o servidor executando `npm run dev`.
6. Acesse as diferentes rotas disponíveis conforme a documentação fornecida.



## Documentação e teste de rotas
**Testando as Rotas no Insomnia:**

Para testar cada rota individualmente, siga estas instruções:

1. Rota para obter todos os heróis

- Método: GET
- URL: `http://localhost:4000/herois`

2. Rota para adicionar um novo herói

- Método: POST
- URL: `http://localhost:4000/herois`
- Corpo da Requisição (JSON):
  {
      "nome": "Nome do Herói",
      "poder": "Poder do Herói",
      "nivel": 5,
      "pontos_vida": 70
  }

3. Rota para atualizar um herói

- Método: PUT
- URL: `http://localhost:4000/herois/:id`
  - Substitua `:id` pelo ID do herói que deseja atualizar.
- Corpo da Requisição (JSON):
  {
      "nome": "Novo Nome do Herói",
      "poder": "Novo Poder do Herói",
      "nivel": 2,
      "pontos_vida": 80
  }

4. Rota para deletar um herói

- Método: DELETE
- URL: `http://localhost:4000/herois/:id`
  - Substitua `:id` pelo ID do herói que deseja deletar.

5. Rota para obter um herói específico pelo id

- Método: GET
- URL: `http://localhost:4000/herois/id/:id`
  - Substitua `:id` pelo ID do herói que deseja recuperar.


7. Rota para obter o herói pelo nome

- Método: GET
- URL: `http://localhost:4000/herois/:nome`
  - Substitua `:nome` pelo nome desejado.

8. Rota para realizar uma batalha entre dois heróis

- Método: GET
- URL: `http://localhost:4000/batalhas/:id_heroi1/:id_heroi2`
  - Substitua `:id_heroi1` e `:id_heroi2` pelos IDs dos heróis que deseja colocar para batalhar.

9. Rota para obter o histórico de batalhas

- Método: GET
- URL: `http://localhost:4000/batalhas`

10. Rota para obter o histórico de batalhas com os dados dos heróis

- Método: GET
- URL: `http://localhost:4000/batalhas/herois`