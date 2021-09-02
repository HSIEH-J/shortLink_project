-- MySQL dump 10.13  Distrib 8.0.23, for macos10.15 (x86_64)
--
-- Host: localhost    Database: short_links
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `links`
--

DROP TABLE IF EXISTS `links`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `links` (
  `id` int NOT NULL AUTO_INCREMENT,
  `original_url` varchar(255) DEFAULT NULL,
  `short_link` varchar(255) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `times` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `short_link` (`short_link`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `links`
--

LOCK TABLES `links` WRITE;
/*!40000 ALTER TABLE `links` DISABLE KEYS */;
INSERT INTO `links` VALUES (9,'https://www.fooish.com/javascript/cookie.html','1cldkg',NULL,2),(10,'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/Trim','iwtrpg',NULL,0),(11,'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/Trim','5lcjqd',NULL,0),(12,'https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/Trim','nzp9t0',NULL,1),(13,'https://socket.io/get-started/chat','8lmwx9',NULL,0),(14,'https://socket.io/get-started/chat','q4jvfw',NULL,0),(15,'https://github.com/HSIEH-J','c63n45',NULL,0),(16,'https://github.com/HSIEH-J','modjdr',NULL,0),(17,'https://github.com/HSIEH-J','rybyb9',NULL,0),(18,'https://github.com/HSIEH-J','cka7yj',NULL,0),(19,'https://github.com/HSIEH-J','booa8j',NULL,0),(20,'https://github.com/HSIEH-J','ity0iw',NULL,0),(21,'https://github.com/HSIEH-J','2pq2hb',NULL,1),(22,'https://github.com/HSIEH-J','kpssi5',NULL,0),(23,'https://github.com/HSIEH-J','cisyww',NULL,0),(24,'https://github.com/HSIEH-J','gh7667',NULL,0),(25,'https://github.com/HSIEH-J','qvezv9',NULL,1),(26,'https://github.com/HSIEH-J','21kiqb',NULL,0),(27,'https://github.com/HSIEH-J','cneg7l',NULL,1),(28,'https://github.com/HSIEH-J','vhcdig',NULL,2),(29,'https://github.com/HSIEH-J','gu97x6',NULL,1),(30,'https://github.com/HSIEH-J','pv305s',NULL,0),(31,'https://github.com/HSIEH-J','lf4noq',NULL,1),(32,'https://github.com/HSIEH-J','vrflgy',NULL,0),(33,'https://github.com/HSIEH-J','mv83i9',NULL,0),(34,'https://github.com/HSIEH-J','nqntgg',NULL,0),(35,'https://github.com/HSIEH-J','a8qsjb',NULL,0),(36,'https://github.com/HSIEH-J','yyrf42',NULL,0),(37,'https://github.com/HSIEH-J','pr0iab',NULL,2),(38,'https://github.com/HSIEH-J','bqrwww',NULL,0),(39,'https://github.com/HSIEH-J','vp93w0',NULL,1),(40,'https://www.fooish.com/javascript/cookie.html','3dkj1c',NULL,0);
/*!40000 ALTER TABLE `links` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sessions`
--

DROP TABLE IF EXISTS `sessions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sessions` (
  `session_id` varchar(128) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `expires` int unsigned NOT NULL,
  `data` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin,
  PRIMARY KEY (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sessions`
--

LOCK TABLES `sessions` WRITE;
/*!40000 ALTER TABLE `sessions` DISABLE KEYS */;
/*!40000 ALTER TABLE `sessions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (4,'aaa@gmail.com','$2b$10$8UozNonT5ImlxyUTihhlH.4aHZe0FmV.lfv0SYdmQ9mzYor/0yOA2'),(5,'bbb@gmail.com','$2b$10$x60ULAV/e1Mp3.LQiMB8Y.ePSiFy3vAb7il13atVQvIXYc7ZvzhGO'),(6,'ccc@gmail.com','$2b$10$W4GYkeMME6jc.cYfZLDDw.7JN3qGoiR3lkNi9I7rcUhweTpjEZQzm'),(7,'ddd@gmail.com','$2b$10$CRP5immrO6tvIou/N1/Oyu94WvpRk699A3KgMRemx0ZSyBLHWXR92'),(8,'fff@gmail.com','$2b$10$9DIvYzpQoyH1wHamcCVwbOxPiIm03zsm75wcNTjNgZ3I6PVoAsxpe');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-02 17:21:18
