create table users (
id int unsigned primary key auto_increment,
usuario varchar(50) not null,
email text not null	,
contraseña text not null, 
created_at 	timestamp default current_timestamp	not null,
updated_at	timestamp default current_timestamp on update current_timestamp	
);


create table product(
id int unsigned primary key auto_increment,
id_user int unsigned not null  ,
nombre_producto varchar(50) not null,
created_at 	timestamp default current_timestamp	not null,
updated_at	timestamp default current_timestamp on update current_timestamp	,
descripcion text not null ,
foreign key (id_user) references users (id)
);