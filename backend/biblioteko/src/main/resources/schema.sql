CREATE TABLE IF NOT EXISTS books (
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    author VARCHAR(50),
    genre VARCHAR(50),
    pages INT,
    publishedYear INT,
    PRIMARY KEY (id)
);
