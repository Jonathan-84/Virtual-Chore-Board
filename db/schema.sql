DROP DATABASE IF EXISTS choresDB;

CREATE DATABASE choresDB;

USE choresDB;

CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30),
    email VARCHAR(30),
    password VARCHAR(30),
    role VARCHAR(30)
);
CREATE TABLE tasks (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    task_name VARCHAR(30) NOT NULL,
    task_points INTEGER NOT NULL
);

CREATE TABLE kids  (
   id INTEGER PRIMARY KEY AUTO_INCREMENT,
    child_name VARCHAR(30) NOT NULL,
    current_points INTEGER NOT NULL,
    banked_points INT NOT NULL,
    tasks_id INT,
    task_name TEXT,
    CONSTRAINT FK_tasks FOREIGN KEY(tasks_id) REFERENCES tasks(id) ON DELETE CASCADE
);

