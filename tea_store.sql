CREATE DATABASE tea_store
    collate Cyrillic_General_CI_AS;

USE tea_store;

drop database tea_store;


CREATE TABLE orders
(
    order_id   int identity (1,1) PRIMARY KEY,
    user_id    int            NOT NULL,
    product_id int            NOT NULL,
    quantity   int            NOT NULL,
    price      decimal(10, 2) NOT NULL,
    orderDate  varchar(250)   NOT NULL,
    --  CONSTRAINT orders_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (user_id),
    --  CONSTRAINT orders_ibfk_2 FOREIGN KEY (product_id) REFERENCES products (product_id)
);

drop table orders;

select * from orders;

alter table orders add orderDate varchar(250) not null;

alter table orders add isBuying varchar(250) not null default 'false';

CREATE TABLE products
(
    product_id         int identity (1,1) PRIMARY KEY,
    product_name       varchar(50)    NOT NULL,
    description        varchar(500)   NOT NULL,
    productImage       varchar(255)   NOT NULL,
    price              decimal(10, 2) NOT NULL,
    category_id        int            NOT NULL,
    productionYear     int            NOT NULL,
    brewingTemperature varchar(100)   NOT NULL,
    -- CONSTRAINT products_ibfk_1 FOREIGN KEY (category_id) REFERENCES subcategories (category_id)
);

alter table products
    alter column description varchar(500) not null

alter table products drop column productionYear;

drop table products;

INSERT INTO products (product_name, description, productImage, price, category_id, productionYear,
                      brewingTemperature)
VALUES (N'Феникс Гун Тин',
        N'Феникс Гун Тин — шу пуэр из мелкого сырья, умеренной прессовки. Красивый тёмно-коричневый блин с рыжими проблесками аккуратно ломается, сразу высвобождая приятный и скромный аромат. Пуэр на каждый день: вкусный, не треморный, простой, доступный.',
        '1.jpg', 19.00, 6, 2016, '90-95'),
       (N'Хэй Е Улун',
        N'Мелкие чёрные узелки, встречаются тёмного-коричневые черенки. На прогреве дыханием аромат не ярко выраженный, напоминает карамель и сушёные яблоки и груши. Вода около 88°. Настой золотистый. Аромат становится слаще и насыщеннее, больше спелых фруктов. Вкус тонкий и нежный. ',
        '2.jpg', 28.00, 9, 2019, '85-95'),
       (N'Цзюнь Шань Инь Чжень Сяо Я',
        N'Среднего размера светло-зелёные типсы  с жёлтой окантовкой обильно покрыты белым ворсом. На прогреве дыханием тихий, тёплый аромат цветов и трав, одуванчик выделяется, как мне показалось.',
        '3.jpg', 206, 2, 2022, '75-85'),
       ('sbqebqegrqe', 'fvervevever', '2.jpg', 34, 8, 2011, '100'),
       ('asvverv', 'fvervevever', '2.jpg', 34, 8, 2011, '100');

select *
from products;

CREATE TABLE reviews
(
    review_id   int identity (1,1) PRIMARY KEY,
    user_id     int          NOT NULL,
    review_text varchar(500) NOT NULL,
    date        varchar(250) NOT NULL,
    --  CONSTRAINT reviews_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (user_id)
);

drop table reviews;

INSERT INTO reviews (user_id, review_text, date)
VALUES (2, 'bhkjhji', '16-03-2023 в 17:35:20'),
       (2, 'qwertyuio', '17-03-2023 в 09:01:20'),
       (2, 'test', '17-03-2023 в 09:54:50'),
       (2, 'ttt', '17-03-2023 в 09:55:08'),
       (3, 'йцукенгшщ', '20-03-2023 в 12:11:24'),
       (4, 'молодецЛиза', '20-03-2023 в 12:32:30'),
       (4, 'Мария супер!', '20-03-2023 в 12:34:15'),
       (4, 'йцу', '20-03-2023 в 12:34:32');

select *
from reviews;

CREATE TABLE subcategories
(
    category_id   int identity (1,1) PRIMARY KEY,
    category_name varchar(50) NOT NULL,
    parent        int DEFAULT NULL
);

drop table subcategories;

INSERT INTO subcategories (category_name, parent)
VALUES ('Пуэр'),
       ('Белый чай'),
       ('Улуны'),
       ('Зеленый чай'),
       ('Желтый чай'),
       ('Шу Пуэр', 3),
       ('Шен Пуэр', 3),
       ('Тайский', 5),
       ('Гуандунский', 5),
       ('Бразильский', 5),
       ('Красный чай');

INSERT INTO subcategories (category_name)
VALUES ('Красный чай')

INSERT INTO subcategories (category_name, parent)
VALUES ('Бразильский', 3)

delete subcategories
where category_id = 5;

select *
from subcategories;


CREATE TABLE users
(
    user_id     int identity (1,1) PRIMARY KEY,
    username    varchar(50)  NOT NULL,
    email       varchar(50)  NOT NULL,
    password    varchar(250) NOT NULL,
    role        int         DEFAULT '0'
);

delete users;

drop table users;

alter table users drop column patronymic;



INSERT INTO users (username, email, password, surname, patronymic, phonenumber, dateOfBirth, city, adress,
                   mailIndex, role)
VALUES ('admin', 'admin@gmail.com', 'b4618cfac995bb6327ad17ca15aa640f', 'admin', 'admin', '+375445330569',
        '2003-01-30', 'Minsk', 'Bobr 45/88', '12345', 1),
       ('Liza', 'liza@gmail.com', 'b4618cfac995bb6327ad17ca15aa640f', 'Cria', 'Ria', '+375445330569', '2022-03-25',
        'Minsk', 'Bobr 45/88', '12345', 0),
       ('Mark', 'mark4@gmail.com', '1111', 'Mark', 'Mark', '+375445330555', '2003-03-18',
        'Minsk', 'Bobr 45/88', '12345', 0),
       ('Masha', 'labor@gmail.com', '295f1843979c44c63f9ec1b50b6e3446', 'Lab', 'Sergeevna', '+375336548674',
        '2002-10-07', 'Minsk', 'Osel 45/88', '54321', 0);


INSERT INTO users (username, email, password, surname, patronymic, phonenumber, dateOfBirth, city, adress,
                   mailIndex, role)
                   values ('Mark', 'mark4@gmail.com', '1111', 'Mark', 'Mark', '+375445330555', '2003-03-18',
        'Minsk', 'Bobr 45/88', '12345', 0)
select *
from users;

delete users where user_id = 12;

ALTER TABLE orders
    ADD CONSTRAINT orders_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE;
ALTER TABLE orders
    ADD CONSTRAINT orders_ibfk_2 FOREIGN KEY (product_id) REFERENCES products (product_id) ON DELETE CASCADE;
ALTER TABLE products
    ADD CONSTRAINT products_ibfk_1 FOREIGN KEY (category_id) REFERENCES subcategories (category_id) ON DELETE CASCADE;
ALTER TABLE reviews
    ADD CONSTRAINT reviews_ibfk_1 FOREIGN KEY (user_id) REFERENCES users (user_id) ON DELETE CASCADE;
ALTER TABLE subcategories
    ADD CONSTRAINT subcategories_ibfk_1 FOREIGN KEY (parent) REFERENCES subcategories (category_id);

ALTER TABLE products
    ADD CONSTRAINT uproduct_name UNIQUE (product_name);
ALTER TABLE subcategories
    ADD CONSTRAINT usubcategories_name UNIQUE (category_name);
ALTER TABLE users
    ADD CONSTRAINT uemail UNIQUE (email);





