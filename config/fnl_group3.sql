-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 04, 2025 at 02:56 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fnl_group3`
--

-- --------------------------------------------------------

--
-- Table structure for table `albums`
--

CREATE TABLE `albums` (
  `album_id` int(11) NOT NULL,
  `album_title` varchar(255) DEFAULT NULL,
  `album_image_url` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `albums`
--

INSERT INTO `albums` (`album_id`, `album_title`, `album_image_url`) VALUES
(1, 'BOTB', '../../resources/images/galleryCover/67ef90b4175f9.jpg'),
(2, 'HATAW SAYAW', '../../resources/images/galleryCover/hatawSayaw.png'),
(3, 'SINGING IDOL', '../../resources/images/galleryCover/singingIdol.png'),
(4, 'Random Shots', '../../resources/images//galleryCover/randomShots.png'),
(5, 'MITING DE AVANCE', '../../resources/images/galleryCover/mitingDeAvance.png'),
(13, 'asd', '../../resources/images/galleryCover/67ef8d215df85.PNG'),
(14, 'asdsad', '../../resources/images/galleryPhotos/67ef982219293.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` int(11) NOT NULL,
  `title` text DEFAULT NULL,
  `description` text DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `title`, `description`, `date`) VALUES
(1, 'Event 1', 'description for Event 1', '2025-01-21'),
(8, 'Event 2', 'This is a description for Event 2aa', '2022-03-22');

-- --------------------------------------------------------

--
-- Table structure for table `photos`
--

CREATE TABLE `photos` (
  `photo_id` int(11) NOT NULL,
  `gallery_id` int(11) DEFAULT NULL,
  `photo_url` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `photos`
--

INSERT INTO `photos` (`photo_id`, `gallery_id`, `photo_url`) VALUES
(5, 2, '../../resources/images/galleryPhotos/image1.png'),
(18, 1, '../../resources/images/galleryPhotos/67ef9257b4fd4.jpg'),
(19, 1, '../../resources/images/galleryPhotos/67ef9257b5193.jpg'),
(20, 1, '../../resources/images/galleryPhotos/67ef9257b5452.jpg'),
(21, 1, '../../resources/images/galleryPhotos/67ef9270ace64.jpg'),
(24, 1, '../../resources/images/galleryPhotos/67ef9323bf835.jpg'),
(25, 1, '../../resources/images/galleryPhotos/67ef9323bf9fd.png'),
(26, 13, '../../resources/images/galleryPhotos/67ef96e944f39.PNG'),
(27, 13, '../../resources/images/galleryPhotos/67ef96e9450fd.png'),
(28, 14, '../../resources/images/galleryPhotos/67ef98430c95e.jpg'),
(29, 14, '../../resources/images/galleryPhotos/67ef98430cb03.jpg'),
(30, 14, '../../resources/images/galleryPhotos/67ef98792228a.jpg'),
(31, 14, '../../resources/images/galleryPhotos/67ef99c599cfb.jpg'),
(32, 14, '../../resources/images/galleryPhotos/67ef99c59af0a.jpg'),
(33, 14, '../../resources/images/galleryPhotos/67ef99c59a8ad.jpg'),
(34, 14, '../../resources/images/galleryPhotos/67ef9abc3cd4c.png'),
(35, 14, '../../resources/images/galleryPhotos/67ef9abc3d30b.png'),
(36, 14, '../../resources/images/galleryPhotos/67ef9abc3d8e1.png'),
(37, 14, '../../resources/images/galleryPhotos/67ef9abc3d60f.png'),
(38, 14, '../../resources/images/galleryPhotos/67ef9abc3dc76.png'),
(39, 14, '../../resources/images/galleryPhotos/67ef9abc3d023.png'),
(40, 14, '../../resources/images/galleryPhotos/67ef9abc3df19.png'),
(41, 14, '../../resources/images/galleryPhotos/67ef9abc3e18a.png'),
(42, 14, '../../resources/images/galleryPhotos/67ef9abc3e9f6.png'),
(43, 14, '../../resources/images/galleryPhotos/67ef9abc3e64b.png'),
(44, 14, '../../resources/images/galleryPhotos/67ef9abc3e3ec.png'),
(45, 14, '../../resources/images/galleryPhotos/67ef9abc3eca5.png'),
(46, 14, '../../resources/images/galleryPhotos/67ef9abc3ef56.png'),
(47, 14, '../../resources/images/galleryPhotos/67ef9abc3f21c.png');

-- --------------------------------------------------------

--
-- Table structure for table `slides`
--

CREATE TABLE `slides` (
  `id` int(11) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `slides`
--

INSERT INTO `slides` (`id`, `image_url`, `title`, `description`) VALUES
(1, '../../resources/images/slides/image1.jpg', 'Title for slide 1', 'This is a freaking description for slide 1'),
(2, '../../resources/images/slides/image2.jpg', 'Title for slide 2', 'This is a freaking description for slide 2'),
(3, '../../resources/images/slides/image3.jpg', 'Title for slide 3', 'This is a freaking description for slide 3');

-- --------------------------------------------------------

--
-- Table structure for table `tblstudents`
--

CREATE TABLE `tblstudents` (
  `student_id` varchar(255) NOT NULL,
  `student_name` text DEFAULT NULL,
  `student_qr_src` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tblstudents`
--

INSERT INTO `tblstudents` (`student_id`, `student_name`, `student_qr_src`) VALUES
('362347', 'Salgado, Cjay(Student)', '../../resources/images/qrcodes/362347_qrcode.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`album_id`);

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `photos`
--
ALTER TABLE `photos`
  ADD PRIMARY KEY (`photo_id`);

--
-- Indexes for table `slides`
--
ALTER TABLE `slides`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tblstudents`
--
ALTER TABLE `tblstudents`
  ADD PRIMARY KEY (`student_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `albums`
--
ALTER TABLE `albums`
  MODIFY `album_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `photos`
--
ALTER TABLE `photos`
  MODIFY `photo_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT for table `slides`
--
ALTER TABLE `slides`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
