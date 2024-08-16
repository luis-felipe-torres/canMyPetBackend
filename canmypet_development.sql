-- phpMyAdmin SQL Dump
-- version 5.1.1deb5ubuntu1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 16-08-2024 a las 08:54:57
-- Versión del servidor: 8.0.39-0ubuntu0.22.04.1
-- Versión de PHP: 8.1.2-1ubuntu2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `canmypet_development`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `CanMyPetEatRelations`
--

CREATE TABLE `CanMyPetEatRelations` (
  `id` int NOT NULL,
  `idPet` int DEFAULT NULL,
  `idFood` int DEFAULT NULL,
  `isAllowed` tinyint(1) DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `CanMyPetEatRelations`
--

INSERT INTO `CanMyPetEatRelations` (`id`, `idPet`, `idFood`, `isAllowed`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 0, 'Además de una intoxicación, su ingesta puede ocasionar insuficiencia renal aguda', '2024-08-14 14:53:27', '2024-08-16 06:14:39'),
(2, 1, 5, 1, 'Son un excelente vegetal que ayuda al correcto tránsito intestinal de nuestro perro gracias a su alto contenido en fibra. Asimismo, es un vegetal rico en vitaminas A,B,C,E y F.', '2024-08-15 10:29:07', '2024-08-15 10:29:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Foods`
--

CREATE TABLE `Foods` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `idTypeFood` int DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Foods`
--

INSERT INTO `Foods` (`id`, `name`, `image`, `description`, `idTypeFood`, `createdAt`, `updatedAt`) VALUES
(1, 'Uvas', 'https://5aldia.cl/wp-content/uploads/2018/04/beneficios-de-las-uvas-cover-696x435.jpg', 'De un color espectacular, forma muy caracteristica ', 1, '2024-08-14 14:35:59', '2024-08-14 14:35:59'),
(5, 'Espinaca', 'https://www.conasi.eu/blog/wp-content/uploads/2023/07/recetas-con-espinacas-d.jpg', 'La espinaca es una planta anual, dioica, de la familia de las amarantáceas, cultivada como verdura por sus hojas comestibles, grandes y de color verde muy oscuro.', 1, '2024-08-15 10:27:07', '2024-08-15 10:27:07');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Pets`
--

CREATE TABLE `Pets` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `Pets`
--

INSERT INTO `Pets` (`id`, `name`, `image`, `description`, `createdAt`, `updatedAt`) VALUES
(1, 'Perro', 'https://static.fundacion-affinity.org/cdn/farfuture/PVbbIC-0M9y4fPbbCsdvAD8bcjjtbFc0NSP3lRwlWcE/mtime:1643275542/sites/default/files/los-10-sonidos-principales-del-perro.jpg', 'Vienen en diferentes razas y tamaños', '2024-08-14 14:33:54', '2024-08-14 14:33:54'),
(2, 'Gato', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF1IwK6-SxM83UpFVY6WtUZxXx-phss_gAUfdKbkTfau6VWVkt', 'El gato doméstico​​ llamado más comúnmente gato, y de forma coloquial minino, ​ michino, ​ y algunos nombres más', '2024-08-15 10:23:01', '2024-08-15 10:23:01'),
(3, 'Conejo', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-edTEJjOarKBoy4TK9LkJDLMm39rVHRjy5FKjHgdk4w-RyK01', 'El conejo común o conejo europeo es una especie de mamífero lagomorfo de la familia Leporidae, y el único miembro actual del género Oryctolagus.', '2024-08-15 10:24:00', '2024-08-15 10:24:00'),
(4, 'Caballo', 'https://concepto.de/wp-content/uploads/2021/07/caballos-e1626738224231.jpg', 'El caballo es un mamífero perisodáctilo domesticado de la familia de los équidos. Es un herbívoro de gran porte, con cuello largo y arqueado poblado por largas crines.​​', '2024-08-15 10:24:48', '2024-08-15 10:24:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;

--
-- Volcado de datos para la tabla `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20240809083053-create-pet.js'),
('20240809084332-create-type-food.js'),
('20240809084448-create-food.js'),
('20240809084719-create-can-my-pet-eat-relation.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `TypeFoods`
--

CREATE TABLE `TypeFoods` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `TypeFoods`
--

INSERT INTO `TypeFoods` (`id`, `name`, `createdAt`, `updatedAt`) VALUES
(1, 'Verduras', '2024-08-14 14:33:39', '2024-08-14 14:33:39');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `CanMyPetEatRelations`
--
ALTER TABLE `CanMyPetEatRelations`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idPet` (`idPet`),
  ADD KEY `idFood` (`idFood`);

--
-- Indices de la tabla `Foods`
--
ALTER TABLE `Foods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTypeFood` (`idTypeFood`);

--
-- Indices de la tabla `Pets`
--
ALTER TABLE `Pets`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `TypeFoods`
--
ALTER TABLE `TypeFoods`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `CanMyPetEatRelations`
--
ALTER TABLE `CanMyPetEatRelations`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `Foods`
--
ALTER TABLE `Foods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `Pets`
--
ALTER TABLE `Pets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `TypeFoods`
--
ALTER TABLE `TypeFoods`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `CanMyPetEatRelations`
--
ALTER TABLE `CanMyPetEatRelations`
  ADD CONSTRAINT `CanMyPetEatRelations_ibfk_1` FOREIGN KEY (`idPet`) REFERENCES `Pets` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `CanMyPetEatRelations_ibfk_2` FOREIGN KEY (`idFood`) REFERENCES `Foods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `Foods`
--
ALTER TABLE `Foods`
  ADD CONSTRAINT `Foods_ibfk_1` FOREIGN KEY (`idTypeFood`) REFERENCES `TypeFoods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
