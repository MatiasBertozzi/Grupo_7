CREATE SCHEMA tp_grupo_7;
USE tp_grupo_7;

CREATE TABLE users (
id int unsigned primary key auto_increment,
usuario varchar(50) not null,
email varchar(255) unique not null	,
password_user varchar(255) not null, 
created_at 	timestamp default current_timestamp ,
updated_at	timestamp default current_timestamp on update current_timestamp	
);


CREATE TABLE product(
id int unsigned primary key auto_increment,
id_user int unsigned not null,
imagen_producto varchar(255) not null,
nombre_producto varchar(50) not null,
descripcion_producto varchar(255),
created_at 	timestamp default current_timestamp	,
updated_at	timestamp default current_timestamp on update current_timestamp	,
foreign key (id_user) references users (id)
);

INSERT INTO users VALUES (DEFAULT, "Mariano", "marianovila@gmail.com", "mar123",DEFAULT, DEFAULT);
INSERT INTO users VALUES (DEFAULT, "Martin", "martin@gmail.com", "mart123",DEFAULT, DEFAULT);
INSERT INTO users VALUES (DEFAULT, "Beltran", "beltran@gmail.com", "bel123",DEFAULT, DEFAULT);
INSERT INTO users VALUES (DEFAULT, "Matias", "matias@gmail.com", "mat123",DEFAULT, DEFAULT);
INSERT INTO users VALUES (DEFAULT, "Juan", "juan@gmail.com", "juan123",DEFAULT, DEFAULT);

INSERT INTO product VALUES (DEFAULT, 1 ,"https://smartlifear.vtexassets.com/arquivos/ids/155425-800-auto?v=638127620800730000&width=800&height=auto&aspect=true", "Licuadora", "Licuadora versatil", DEFAULT, DEFAULT );
INSERT INTO product VALUES (DEFAULT, 5 ,"https://www.sagitariodigital.com.ar/wp-content/uploads/2024/04/AIR-M3.jpg", "Mac book air ", "Lo ultimo del mercado chip M3", DEFAULT, DEFAULT );
INSERT INTO product VALUES (DEFAULT, 2 ,"https://ipoint.com.ar/26705-thickbox_default/iphone-15-pro-max-256gb.jpg", "Iphone 15", "Celular de lujo", DEFAULT, DEFAULT );
INSERT INTO product VALUES (DEFAULT, 3 ,"https://images.samsung.com/is/image/samsung/p6pim/ar/sm-a556elbparo/gallery/ar-galaxy-a55-5g-sm-a556-sm-a556elbparo-544072501?$650_519_PNG$", "Samsung a55", "Celular para todas las ocaciones", DEFAULT, DEFAULT );
INSERT INTO product VALUES (DEFAULT, 4 ,"https://itechstore.com.ar/1539-large_default/apple-watch-se-2da-gen-40mm-midnight-midnight-sport-band.jpg", "Apple Watch", "Reloj inteligente", DEFAULT, DEFAULT );

