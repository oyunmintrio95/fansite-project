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
    forum_name varchar(50) not null,
    title varchar(50) not null,
    post_content varchar(200) not null,
    post_date date null
);