CREATE TABLE prueba (
  id int(11) NOT NULL,
  nombre varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

ALTER TABLE prueba
  ADD PRIMARY KEY (id),
  ADD UNIQUE KEY nombre (nombre);

ALTER TABLE prueba
  MODIFY id int(11) NOT NULL AUTO_INCREMENT;


  CREATE TABLE basededatos.prospecto (
	id_prospecto INT NOT NULL AUTO_INCREMENT,
	cedula VARCHAR(10) NOT NULL,
	p_nombre VARCHAR(40) NOT NULL,
	s_nombre VARCHAR(40) NOT NULL,
	p_apellido VARCHAR(40) NOT NULL,
	s_apellido VARCHAR(40) NOT NULL,
	fk_sexo INT NOT NULL,
	fk_nacionalidad INT NOT NULL,
	fecha_nac DATETIME NOT NULL,
	email VARCHAR(100) NOT NULL,
	celular_1 VARCHAR(10) NOT NULL,
	celular_2 VARCHAR(10) NOT NULL,
	dir_domicilio VARCHAR(100) NOT NULL,
	PRIMARY KEY (id_prospecto),
	
	UNIQUE (cedula)
) ENGINE = InnoDB;

CREATE TABLE basededatos.sexo (
	id_sexo INT NOT NULL AUTO_INCREMENT,
	detalle VARCHAR(40) NOT NULL,
	PRIMARY KEY (id_sexo),
	UNIQUE (detalle)
) ENGINE = InnoDB;

CREATE TABLE basededatos.nacionalidad (
	id_nacionalidad INT NOT NULL AUTO_INCREMENT,
	detalle VARCHAR(40) NOT NULL,
	PRIMARY KEY (id_nacionalidad),
	UNIQUE (detalle)
) ENGINE = InnoDB;
