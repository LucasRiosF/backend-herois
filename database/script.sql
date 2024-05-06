CREATE DATABASE lucas;

\c lucas;

CREATE TABLE herois (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  poder VARCHAR(100) NOT NULL,
  nivel INT NOT NULL,
  pontos_vida INT NOT NULL
);

CREATE TABLE batalhas (
    id SERIAL PRIMARY KEY,
    id_heroi1 INT NOT NULL,
    id_heroi2 INT NOT NULL,
    id_vencedor INT NOT NULL,
    FOREIGN KEY (id_heroi1) REFERENCES herois(id),
    FOREIGN KEY (id_heroi2) REFERENCES herois(id),
    FOREIGN KEY (id_vencedor) REFERENCES herois(id),
);


INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ("Homem-Aranha", "Velocidade", 80, 50),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ("Deadpool", "Regeneração", 90, 100),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ("Homem-de-Ferro", "", 55, 70),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ("Hulk", "Super-Força", 90, 99),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ("Capitão América", "Resistência", 75, 65),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ("Thor", "Trovão", 65, 70),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ("Pantera-Negra", "Velocidade", 50, 60),
