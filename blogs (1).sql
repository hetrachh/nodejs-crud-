-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2022 at 04:21 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogs`
--

-- --------------------------------------------------------

--
-- Table structure for table `blogs`
--

CREATE TABLE `blogs` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` tinyint(1) DEFAULT 1 COMMENT '1-Publish,0-Unpublish',
  `category_id` int(11) NOT NULL,
  `author` varchar(255) NOT NULL,
  `is_deleted` tinyint(1) DEFAULT 0 COMMENT '0->active,1->deleted',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `blogs`
--

INSERT INTO `blogs` (`id`, `title`, `description`, `status`, `category_id`, `author`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
(4, 'Flutter', 'Flutter', 1, 3, 'Flutter', 0, '2022-05-06 13:43:03', '2022-05-06 13:43:03'),
(5, 'React-native', 'React-native', 1, 4, 'Facebook', 0, '2022-05-06 13:44:20', '2022-05-06 13:44:20'),
(6, 'React-native', 'React-native', 0, 2, 'Facebook', 0, '2022-05-06 13:44:49', '2022-05-06 13:44:49');

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `parent_id` int(11) DEFAULT 0,
  `is_deleted` tinyint(1) DEFAULT 0 COMMENT '0->active,1->deleted',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `parent_id`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
(1, 'Technology', 0, 0, '2022-05-06 13:36:05', '2022-05-06 13:36:05'),
(2, 'Mobile', 1, 0, '2022-05-06 13:36:05', '2022-05-06 13:36:05'),
(3, 'Flutter', 2, 0, '2022-05-06 13:36:05', '2022-05-06 13:36:05'),
(4, 'React-Native', 2, 0, '2022-05-06 13:36:05', '2022-05-06 13:36:05');

-- --------------------------------------------------------

--
-- Table structure for table `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20220506102038-create-user.js'),
('20220506102251-create-blogs.js'),
('20220506131842-create-category.js');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` text NOT NULL,
  `date_of_birth` varchar(255) NOT NULL,
  `role` tinyint(1) DEFAULT 1 COMMENT '0->admin,1->user',
  `is_deleted` tinyint(1) DEFAULT 0 COMMENT '0->active,1->deleted',
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `date_of_birth`, `role`, `is_deleted`, `createdAt`, `updatedAt`) VALUES
(1, 'Het', 'Rachh', 'hetrachh20@gmail.com', '$2b$10$Utt4xbLYT4JDB5hTiN/zeO42ibMlxWO2xXQz2wCRzOWe5EtV/E246', '1997-04-17', 0, 0, '2022-05-06 10:51:27', '2022-05-06 10:51:27'),
(2, 'Het', 'Thakkar', 'rachhhet@gmail.com', '$2b$10$0myNFxcHw7IvSvS3YumXEu8eF8shDKC9JtxRaNxEPZYecwXk26VyK', '1997-04-17', 1, 0, '2022-05-06 10:51:27', '2022-05-06 10:51:27'),
(3, 'Jhon', 'Snow', 'jsnow@gmail.com', '$2b$10$05j0RoQf7NE7PK/TBSLwBu/1EscJModPpn2EJ0/A8dPCREbdvuwYW', '1997-04-17', 1, 0, '2022-05-06 11:09:04', '2022-05-06 11:09:04'),
(4, 'Jhon', 'Snow', 'jsnow+1@gmail.com', '$2b$10$VzZ/FzigcT8cpzUZ/s6ZYuCMQb6rmlP8fDE1NvTrMnH/UyvtS.jde', '1997-04-17', 1, 0, '2022-05-06 13:58:17', '2022-05-06 13:58:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
