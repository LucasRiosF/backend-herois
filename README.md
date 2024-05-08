# Gerenciamento Batalha de Heróis

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