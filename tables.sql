USE login;

CREATE TABLE users ( 
  id INT PRIMARY KEY AUTO_INCREMENT, 
  username VARCHAR(15),
  password VARCHAR(1000)
);

CREATE TABLE bookings ( 
  id INT PRIMARY KEY AUTO_INCREMENT, 
  name VARCHAR(60),
  email VARCHAR(30),
  num INT,
  sede VARCHAR(10),
  date DATE,
  time TIME
);