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
-- Table structure for table `book`
--

DROP TABLE IF EXISTS `book`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `book` (
  `ISBN` varchar(100) NOT NULL DEFAULT '',
  `Title` varchar(100) DEFAULT '-',
  `Author` varchar(100) DEFAULT '-',
  `Publisher` varchar(100) DEFAULT '-',
  `Price` int(11) DEFAULT NULL,
  `Year` int(11) DEFAULT NULL,
  `Category` varchar(50) DEFAULT '-',
  `Weight` varchar(45) DEFAULT '-',
  `Dimensi` varchar(45) DEFAULT '-',
  `Total_pages` varchar(15) DEFAULT '-',
  `Language` varchar(45) DEFAULT '-',
  `Cover` varchar(45) DEFAULT '-',
  `Stock` int(11) NOT NULL,
  `Image` varchar(50) DEFAULT '-',
  `Desc` text,
  `Create_at` datetime DEFAULT NULL,
  `Update_at` datetime DEFAULT NULL,
  PRIMARY KEY (`ISBN`),
  KEY `publisher_id_idx` (`Publisher`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `book`
--

LOCK TABLES `book` WRITE;
/*!40000 ALTER TABLE `book` DISABLE KEYS */;
INSERT INTO `book` VALUES ('9786020823157','Mikrotik Kung Fu Kitab 3','Rendra Towidjojo','Jasakom',74800,2016,'Cat_2','450gr','-','500 hal','Indonesia','Soft',50,'-','Buku ini merupakan kelanjutan dari buku MikroTik Kung Fu Series. Untuk MikroTik Kung Fu 3 ini, pembahasan akan difokuskan pada manajemen bandwidth. Semua itu tidak terlepas dari betapa pentingnya menerapkan manajemen bandwidth pada saat akan membangun jaringan',NULL,NULL),('9786028740760','Cinta untuk Perempuan yang Tidak Sempurna (Reguler)','Najelaa Shihab','Literati-books ',84150,2020,'Cat_1','350gr','140x210mm','254 hal','Indonesia','Soft',67,'-','Cinta yang menjadi judul buku ini sangat luas artinya.\nLembaran-lembaran ini menggambarkan hubungan dan harapan dalam spektrum konteks\nyang sangat beragamsebagian diantaranya menguras air mata, sebagian menyalakan\nsemangat mencapai cita-cita. Menjaga diri, saling mengapresiasi, dan memelihara\nsemestabegitu banyak kewajiban perempuan sejak hari pertamanya di dunia, tapi\nmenulis dan membaca seharusnya jadi menu harian yang tak terlewatkan di segala\nusia.\n\n',NULL,NULL),('9786239020927','Just You and Me','Titi Sanaria','Storial Publishing',85000,2019,'Cat_1','250gr','-','160 hal','Indonesia','Soft',100,'-','Akibat berselisih dengan ayahnya, Keyra kabur dari rumah. Ia yang terbiasa hidup\nnyaman kini hidup prihatin tanpa sepeser uang pun dengan menumpang di kontrakan\nsahabatnya, Yanti. Hidupnya semakin kacau saat Keyra terlibat debt collector yang\nmengejar-ngejar Yanti agar membayar utang ayahnya yang menghilang. Karena itu jugalah\nKeyra bertemu Ferdyan yang salah sangka mengira kalua perempuan itu adalah penari yang\ndipesan untuk bachelor party seorang sahabatnya.\n',NULL,NULL),('9786373474574','Awas! Hati-Hati dengan Emailmu : Etika Beremail dan Panduan Mengelola yang Efektif','Utari Ninghadiyati dan Dewi Agushinta R','Kataelha',23800,2010,'Cat_2','300gr','-','230 hal','Indonesia','Soft',43,'-','E-mail telah menjadi bagian sangat penting yang memudahkan pekerjaan dan hubungan kita dengan orang lain.Namun e-mail hanya bisa memberi daya dukung positif bila cermat menggunakannya. Banyak kejadian menyangkut e-mail berdampak serius. Salah satunya kasus Prita Mulyasari, dia sempat dipenjara gara-gara e-mail.Buku ini memberi panduan anda menggunakan e-mail secara jelas, runtut dan terperinci. Semoga buku ini membuat Anda terbebas dari kesalahan penggunanan e-mail. Terima kasih\n',NULL,NULL);
/*!40000 ALTER TABLE `book` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-19 18:47:57
