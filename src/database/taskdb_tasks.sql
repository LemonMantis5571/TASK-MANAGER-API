-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: taskdb
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` text,
  `is_completed` tinyint(1) NOT NULL DEFAULT '0',
  `priority` enum('URGENT','NORMAL','BLOCKING') NOT NULL DEFAULT 'NORMAL',
  `expires` datetime NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `tasks_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (2,2,'Comprar leche','Comprar 1 litro de leche entera',0,'NORMAL','2023-03-01 09:00:00','2023-02-25 20:19:53','2023-02-25 20:19:53'),(3,3,'Limpiar la casa','Limpiar toda la casa, especialmente el baño',0,'URGENT','2023-02-27 18:30:00','2023-02-25 20:19:58','2023-02-25 20:19:58'),(4,4,'Enviar reporte','Enviar reporte de ventas del mes pasado',0,'BLOCKING','2023-03-10 15:00:00','2023-02-25 20:20:02','2023-02-25 20:20:02'),(14,1,'Primera Tarea POST','Confirmar si el POST Funciona',0,'URGENT','2023-03-10 15:00:00','2023-02-25 22:07:11','2023-02-25 22:07:11'),(15,1,'Primera Tarea POST','Confirmar si el POST Funciona',0,'URGENT','2023-03-10 15:00:00','2023-02-25 22:14:07','2023-02-25 22:14:07'),(16,1,'Primera Tarea POST','Confirmar si el POST Funciona',0,'URGENT','2023-03-10 15:00:00','2023-02-25 22:14:35','2023-02-25 22:14:35'),(17,1,'Primera Tarea POST','Confirmar si el POST Funciona',0,'URGENT','2023-03-10 15:00:00','2023-02-26 04:16:46','2023-02-26 04:16:46');
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-12 18:45:41
