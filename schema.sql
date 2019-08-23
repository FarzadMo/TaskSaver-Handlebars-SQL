DROP DATABASE IF EXISTS task_saver_db;

CREATE DATABASE task_saver_db;

USE task_saver_db;

CREATE TABLE tasks (
id INT AUTO_INCREMENT NOT NULL,
task VARCHAR(150) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO tasks (task)
VALUES ('water the lawn'),('call Anne Mary'), ('feed the cat')