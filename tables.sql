USE login;

CREATE TABLE users (  
  username VARCHAR(15) PRIMARY kEY,
  email VARCHAR(50),
  hash VARCHAR(1000), 
);

CREATE TABLE bookings (
  id INT PRIMARY KEY AUTO_INCREMENT, 
  name VARCHAR(60) FOREIGN kEY REFERENCES users(username),
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

CREATE TABLE tipos_comidas(
  tipo VARCHAR(15) PRIMARY kEY
);

CREATE TABLE productos (
  nombre VARCHAR(25) PRIMARY KEY, 
  tipo VARCHAR(15),
  descripcion VARCHAR(1000),
  precio INT, 
  imagen VARCHAR(50),
  FOREIGN KEY (tipo) REFERENCES tipos_comidas(tipo)
);