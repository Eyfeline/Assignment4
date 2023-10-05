--Every proverb
select * from proverb;

--Favourite proverbs of users
select user_name, proverb_text from user_table join proverb on user_table.favourite_proverb = proverb.ID_proverb;

--Name and address of the user whose favourite proverb is 'To be or not to be, that is the question.'
select user_name, road_num, road_name, postal_code, city
    from proverb join user_table on user_table.favourite_proverb = proverb.ID_proverb 
                join address_table on user_table.address_ID = address_table.ID_address
    where proverb_text = 'To be or not to be, that is the question.';

--Author of the favourite proverb of the user that lives in Irvine
select author_name
    from proverb join user_table on user_table.favourite_proverb = proverb.ID_proverb 
                join address_table on user_table.address_ID = address_table.ID_address
                join author on proverb.author_ID = author.ID_author
    where city = 'Irvine';
