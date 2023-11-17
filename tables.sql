USE login;

CREATE TABLE users ( 
  id INT PRIMARY KEY AUTO_INCREMENT, 
  username VARCHAR(15),
  email VARCHAR(50),
  hash VARCHAR(1000)
);

CREATE TABLE bookings (
  id INT PRIMARY KEY AUTO_INCREMENT, 
  name VARCHAR(60),
  email VARCHAR(30),
  num INT,
  sede VARCHAR(15) FOREIGN KEY REFERENCES sedes(name),
  date DATE,
  time TIME
);

CREATE TABLE sedes ( 
  name VARCHAR(15) PRIMARY KEY,
  cupos_totales INT,
  cupos_disp INT,
  date DATE,
  time TIME
);