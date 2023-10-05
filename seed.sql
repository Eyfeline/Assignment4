insert into author(author_name, birth, death)
    values ('Benjamin Franklin',1706,1790),
    ('Abraham Lincoln',1809,1865),
    ('William Shakespeare',1564,1616);

insert into proverb(proverb_text,proverb_year,author_ID)
    values ('Early to bed and early to rise, makes a man healthy, wealthy, and wise.',1732,1),
    ('Actions speak louder than words.',1856,2),
    ('To be or not to be, that is the question.',1600,3),
    ('All that glitters is not gold.',1596,3),
    ('A penny saved is a penny earned.',1732,1);

insert into address_table(road_num,road_name,postal_code,city)
    values(8,'Santa Comba',92606,'Irvine'),
    (108,'Avenue de Paris',94800,'Villejuif'),
    (5,'Boulevard des habissois souverains',97119,'Vieux-Habitants');

insert into user_table(user_name,address_ID,favourite_proverb)
    values('Rem9007',2,3),
    ('Piks',1,1),
    ('Rynko',3,5);