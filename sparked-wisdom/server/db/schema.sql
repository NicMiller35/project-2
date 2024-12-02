CREATE TABLE users(
    user_id Auto_increment Primary Key,
    username Varchar(255) Not Null Unique,
    password Varchar(255) Not Null,
)


CREATE TABLE Quotes (
    quote_id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    author VARCHAR(255) NOT NULL,
)


CREATE TABLE SavedQuotes (
    saved_quote_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    quote_id INT NOT NULL,
    saved_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (quote_id) REFERENCES Quotes(quote_id),
)
