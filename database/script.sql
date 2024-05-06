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
)