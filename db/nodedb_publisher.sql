-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: nodedb
-- ------------------------------------------------------
-- Server version	5.6.10

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `publisher`
--

DROP TABLE IF EXISTS `publisher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `publisher` (
  `Publisher_id` varchar(20) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Adress` varchar(150) DEFAULT '-',
  `Phone` varchar(25) DEFAULT '-',
  `Url` varchar(30) DEFAULT '-',
  `Email` varchar(50) DEFAULT '-',
  PRIMARY KEY (`Publisher_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `publisher`
--

LOCK TABLES `publisher` WRITE;
/*!40000 ALTER TABLE `publisher` DISABLE KEYS */;
INSERT INTO `publisher` VALUES ('PB001','Buku KampungKu','Majalengka,Jawa Barat','(085)159588123','https://bukukampungku.com/','bukukampungku@gmail.com'),('PB002','Pastel Books','Jl. Cinambo No.135, Cisaranten Wetan, Cinambo, Kota Bandung, Jawa Barat 40293','(022) 7834310','https://pastelbooks.id/','penerbit.pastelbooks@gmail.com'),('PB003','Buku Republika','Jl. Kavling Polri Blok I No. 65, Jagakarsa,Jakarta Selatan, 12620','(021) 781912728','https://bukurepublika.id/','redaksipab@bukurepublika.id'),('PB004','Gagas Media','Jl. H. Montong No. 57 Ciganjur','(021) 78883030','https://gagasmedia.net/','redaksi @ gagasmedia.net'),('PB005','Gradien Mediatama','Jl. Wora-wari A-74 Baciro Baru, Yogyakarta 55225\n','(0274) 583421','gradienmediatama.com','redaksi@gradienmediatama.com'),('PB006','Jasakom','-','-','-','-'),('PB007','Kataelha','-','-','-','-');
/*!40000 ALTER TABLE `publisher` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-19 18:47:55
