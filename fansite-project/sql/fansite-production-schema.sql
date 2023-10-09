drop database if exists fansite;
create database fansite;
use fansite;

create table about (
	about_id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    about_description varchar(200) not null,
    git varchar(50) not null
);

create table forum (
	forum_id int primary key auto_increment,
    forum_name varchar(100) not null,
    title varchar(100) not null,
    post_content text not null,
    post_date date null
);

delimiter //
create procedure set_known_good_state()
begin
	delete from about;
	delete from forum;
	alter table about auto_increment=1;
	alter table forum auto_increment=1;
	
    
    insert into about (first_name, last_name, about_description, git) values
		('Tony', 
        'Lee', 
        'I am a huge Monster Hunter fan, with a B.S. in Mathematics and Computer Science. I enjoy playing tennis, video games, and reading. My favorite monster from the Monster Hunter Franchise is the Rathalos, and my most recent favorite weapon is the Bow, previously it was the Switch Axe. ','github.com/tal154');
        
	insert into forum (forum_name, title, post_content, post_date) values
		('user 1', 'post 1', 'I am a monster hunter fan', '2020-11-11'),
        ('user 2', 'post 2', 'I am not a monster hunter fan', '2020-12-12');
end//
delimiter ;