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
    FOREIGN KEY (id_vencedor) REFERENCES herois(id)
);

INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Homem-Aranha', 'Velocidade', 8, 65),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Deadpool', 'Regeneração', 9, 100),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Homem-de-Ferro', 'Resistência', 5, 70),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Hulk', 'Super Força', 9, 99),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Capitão América', 'Super Força', 75, 65),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Thor', 'Trovão', 6, 70),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Pantera-Negra', 'Velocidade', 50, 60),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Gavião Arqueiro', 'Resistência', 50, 60),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Mulher-Invisivel', 'Invisibilidade', 40, 50),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Tocha-Humana', 'Fogo', 5, 70),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Ciclope', 'Fogo', 4, 48),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Wolverine', 'Regeneração', 7, 100),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Viúva Negra', 'Resistência', 5, 60),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('She-Hulk', 'Super Força', 5, 95),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Homem-Formiga', 'Resistência', 55, 85),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Groot', 'Super Força', 3, 50),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Mercúrio', 'Velocidade', 2, 60),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Visão', 'Velocidade', 7, 70),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Homem-Invisivel', 'Invisibilidade', 30, 50),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Tempestade', 'Trovão', 4, 90),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Motoqueiro Fantasma', 'Fogo', 9, 90);