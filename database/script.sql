CREATE DATABASE lucas;

\c lucas;

CREATE TABLE herois (
  id SERIAL PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  nivel INT NOT NULL,
  pontos_vida INT NOT NULL
);