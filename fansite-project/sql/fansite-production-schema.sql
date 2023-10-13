drop database if exists fansite;
create database fansite;
use fansite;

create table about (
	about_id int primary key auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    about_description text not null,
    git varchar(50) not null
);

create table forum (
	forum_id int primary key auto_increment,
    forum_name varchar(100) not null,
    title varchar(100) not null,
    post_content text not null,
    post_date date null
);

create table app_user (
    app_user_id int primary key auto_increment,
    username varchar(50) not null unique,
    password_hash varchar(2048) not null,
    enabled bit not null default(1)
);

 

create table app_role (
    app_role_id int primary key auto_increment,
    `name` varchar(50) not null unique
);

 

create table app_user_role (
    app_user_id int not null,
    app_role_id int not null,
    constraint pk_app_user_role
        primary key (app_user_id, app_role_id),
    constraint fk_app_user_role_user_id
        foreign key (app_user_id)
        references app_user(app_user_id),
    constraint fk_app_user_role_role_id
        foreign key (app_role_id)
        references app_role(app_role_id)
);

insert into about (first_name, last_name, about_description, git) values
		('Tony', 'Lee', 'I am a huge Monster Hunter fan, with a B.S. in Mathematics and Computer Science. I enjoy playing tennis, video games, and reading. My favorite monster from the Monster Hunter Franchise is the Rathalos, and my most recent favorite weapon is the Bow, previously it was the Switch Axe. ','github.com/tal154'),
		('Hayoung', 'Cheon', 'Passionate and fast adapting backend developer with some experiences of designing, building, and enhancing JAVA spring boot web application projects. I have a B.S. in Elementary Education and Computer Education. I enjoy camping, hiking and solving puzzles.','github.com/oyunmintrio95'),
		('Autumn', 'Sprout', 'I like books and reading. Those are not necessarily the same thing.','github.com/jotasprout');
        
insert into forum (forum_name, title, post_content, post_date) values
	('username1', 'title1', 'content1', '2023-10-11');
    
    insert into app_role (`name`) values
    ('USER'),
    ('ADMIN');

-- passwords are set to "P@ssw0rd!"
insert into app_user (username, password_hash, enabled)
    values
    ('john@smith.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1),
    ('sally@jones.com', '$2a$10$ntB7CsRKQzuLoKY3rfoAQen5nNyiC/U60wBsWnnYrtQQi8Z3IZzQa', 1);

insert into app_user_role
    values
    (1, 2),
    (2, 1);