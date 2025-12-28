USE exadb;
CREATE TABLE users (
     id INT,
     name VARCHAR(100),
     email VARCHAR(100),
     gender ENUM('male', 'female'),
     dob DATE);
     
SELECT * FROM users;  


INSERT INTO users (id, name, email, gender, dob) VALUES
(1, 'Rahul Sharma', 'rahul@example.com', 'male', '1995-03-10'),
(2, 'Priya Patel', 'priya@example.com', 'female', '1998-07-25'),
(3, 'Amit Kumar', 'amit@example.com', 'male', '1993-11-30'),
(4, 'Sneha Singh', 'sneha@example.com', 'female', '2000-01-15'),
(5, 'Vikram Verma', 'vikram@example.com', 'male', '1997-09-05');

DESC users;
SELECT * FROM users WHERE id >= 2;