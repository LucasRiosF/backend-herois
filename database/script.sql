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

INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Homem-Aranha', 'Velocidade', 80, 65),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Deadpool', 'Regeneração', 90, 100),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Homem-de-Ferro', 'Resistência', 55, 70),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Hulk', 'Super-Força', 90, 99),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Capitão América', 'Super-Força', 75, 65),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Thor', 'Trovão', 65, 70),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Pantera-Negra', 'Velocidade', 50, 60),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Gavião Arqueiro', 'Resistência', 50, 60),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Mulher-Invisivel', 'Invisibilidade', 40, 50),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Tocha-Humana', 'Fogo', 55, 70),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Ciclope', 'Fogo', 40, 45),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Wolverine', 'Regeneração', 70, 100),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Viúva Negra', 'Resistência', 50, 60),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('She-Hulk', 'Super-Força', 50, 95),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Homem-Formiga', 'Resistência', 55, 85),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Groot', 'Super-Força', 30, 50),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Mercúrio', 'Velocidade', 20, 60),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Visão', 'Velocidade', 75, 70),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Homem-Invisivel', 'Invisibilidade', 30, 50),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Tempestade', 'Trovão', 40, 90),
INSERT INTO herois (nome, poder, nivel, pontos_vida) VALUES ('Motoqueiro Fantasma', 'Fogo', 90, 90);