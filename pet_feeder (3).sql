-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 17, 2020 at 05:07 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pet_feeder`
--

-- --------------------------------------------------------

--
-- Table structure for table `device`
--

CREATE TABLE `device` (
  `id` int(11) NOT NULL,
  `deviceId` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `device`
--

INSERT INTO `device` (`id`, `deviceId`, `password`) VALUES
(1, '123', '321'),
(2, '456', '65'),
(4, '789', '987'),
(5, '582', '285');

-- --------------------------------------------------------

--
-- Table structure for table `shedule`
--

CREATE TABLE `shedule` (
  `id` int(11) NOT NULL,
  `device` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `slot1Value` int(11) NOT NULL,
  `slot2Value` int(11) NOT NULL,
  `slot3Value` int(11) NOT NULL,
  `status` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `shedule`
--

INSERT INTO `shedule` (`id`, `device`, `date`, `time`, `slot1Value`, `slot2Value`, `slot3Value`, `status`) VALUES
(1, 2, '2020-03-15', '01:25:25', 0, 0, 0, 'WAITING'),
(2, 123, '2020-03-15', '01:25:25', 0, 0, 0, 'COMPLEATED'),
(3, 123, '2020-03-15', '01:25:25', 0, 0, 0, 'WAITING'),
(4, 123, '2020-10-03', '00:00:12', 0, 0, 0, 'WAITING'),
(5, 123, '2020-10-13', '00:00:12', 0, 0, 0, 'WAITING'),
(6, 123, '2020-11-13', '12:30:20', 0, 0, 0, 'WAITING');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `email` varchar(70) NOT NULL,
  `password` varchar(20) NOT NULL,
  `status` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `email`, `password`, `status`) VALUES
(1, 'Rushan Thasindu', 'rushanthasindu10@gmail.com', 'rushan', 'WAITING');

-- --------------------------------------------------------

--
-- Table structure for table `user_device`
--

CREATE TABLE `user_device` (
  `id` int(11) NOT NULL,
  `device` int(11) NOT NULL,
  `user` int(11) NOT NULL,
  `slot1Name` varchar(30) NOT NULL,
  `slot2Name` varchar(30) NOT NULL,
  `slot3Name` varchar(30) NOT NULL,
  `slot1Status` int(11) NOT NULL,
  `slot2Status` int(11) NOT NULL,
  `slot3Status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user_device`
--

INSERT INTO `user_device` (`id`, `device`, `user`, `slot1Name`, `slot2Name`, `slot3Name`, `slot1Status`, `slot2Status`, `slot3Status`) VALUES
(1, 123, 1, 'Water', 'Milk', 'Food', 100, 356, 33),
(2, 456, 1, 'Food', 'Water', 'Milk', 0, 0, 0),
(6, 789, 1, 'Water ', 'milk', '', 0, 0, 0),
(7, 582, 1, 'water ', 'food', 'milk', 0, 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `device`
--
ALTER TABLE `device`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `deviceId` (`deviceId`);

--
-- Indexes for table `shedule`
--
ALTER TABLE `shedule`
  ADD UNIQUE KEY `id` (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `user_device`
--
ALTER TABLE `user_device`
  ADD UNIQUE KEY `id` (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `device`
--
ALTER TABLE `device`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `shedule`
--
ALTER TABLE `shedule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user_device`
--
ALTER TABLE `user_device`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
