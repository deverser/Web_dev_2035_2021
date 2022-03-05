-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 06 2022 г., 00:05
-- Версия сервера: 5.7.33
-- Версия PHP: 7.1.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `newdatabase`
--

-- --------------------------------------------------------

--
-- Структура таблицы `zakaz`
--

CREATE TABLE `zakaz` (
  `id_tovar` int(11) NOT NULL,
  `name` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `surname` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `tovar` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `col` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Дамп данных таблицы `zakaz`
--

INSERT INTO `zakaz` (`id_tovar`, `name`, `surname`, `email`, `tovar`, `col`) VALUES
(0, 'Вася', 'Пупкин', 'vasya@pupkin.ru', 'газ. вода Coca-cola', 5),
(1, 'Иван', 'Иванов', 'ivan@ivanov.ru', 'Водка \"Tundra\"', 2),
(2, 'Елена', 'Краснова', 'helen@krasnova.ru', 'Помидоры \"Тепличные\"', 6),
(3, 'Александр', 'Александров', 'alex.alex@gmail.com', 'Сосиски \"Молочные ГОСТ\"', 2),
(4, 'Сергей', 'Сергеев', 'serg222@yandex.ru', 'лапша б/п \"Доширак\"', 10);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `zakaz`
--
ALTER TABLE `zakaz`
  ADD PRIMARY KEY (`id_tovar`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
