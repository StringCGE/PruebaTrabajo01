CREATE TABLE prueba (
  id int(11) NOT NULL,
  nombre varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE prueba
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY nombre (nombre);

ALTER TABLE prueba
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;
