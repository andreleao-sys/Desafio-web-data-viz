CREATE DATABASE borboLumen;

USE borboLumen;

CREATE TABLE empresa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	razao_social VARCHAR(50),
	cnpj CHAR(14),
	codigo_ativacao VARCHAR(50)
);

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

-- Avisos (ex: alertas de umidade ou luminosidade)
CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
	descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

-- Estufas de cultivo de orquídeas
CREATE TABLE estufa (
	id INT PRIMARY KEY AUTO_INCREMENT,
	descricao VARCHAR(300),
	localizacao VARCHAR(100),
	fk_empresa INT,
	FOREIGN KEY (fk_empresa) REFERENCES empresa(id)
);

-- Medidas de sensores (somente umidade e luminosidade)
CREATE TABLE medida (
	id INT PRIMARY KEY AUTO_INCREMENT,
	umidade DECIMAL(5,2),
	luminosidade INT,
	momento DATETIME,
	fk_estufa INT,
	FOREIGN KEY (fk_estufa) REFERENCES estufa(id)
);

-- Dados de exemplo
INSERT INTO empresa (razao_social, cnpj, codigo_ativacao) VALUES 
('Orquidário Borboleta Azul', '12345678000199', 'ORQ-BL2025'),
('Estufa Encanto Verde', '98765432000111', 'ENC-VERD123');

INSERT INTO estufa (descricao, localizacao, fk_empresa) VALUES 
('Estufa Bonatina Tropical', 'Zona Norte - SP', 1),
('Estufa das Orquídeas Nobres', 'Zona Sul - SP', 2);
