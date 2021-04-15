DROP TABLE IF EXISTS games;
create table games (
	id int(11) not null PRIMARY KEY AUTO_INCREMENT,
    code varchar(6) not null,
    name varchar(40) not null,
    date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO games (code, name) VALUES('123456', 'babo');

create table -code- (
	id int(11) not null PRIMARY KEY AUTO_INCREMENT,
    question varchar(250) not null,
    style int(2) not null
);
