create table author
(
    ID_author serial,
    author_name varchar(50),
    birth int,
    death int,
    primary key (ID_author)
);
create table proverb
(
    ID_proverb serial,
    proverb_text text,
    proverb_year int,
    author_ID int references author(ID_author),
    primary key (ID_proverb)
);
create table address_table
(
    ID_address serial,
    road_num int,
    road_name varchar(50),
    postal_code int,
    city varchar(50),
    primary key (ID_address)
);
create table user_table
(
    ID_user serial,
    user_name varchar(50),
    address_ID int references address_table(ID_address),
    favourite_proverb int references proverb(ID_proverb),
    primary key (ID_user)
);
