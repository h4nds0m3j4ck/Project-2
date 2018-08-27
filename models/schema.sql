CREATE DATABASE  IF NOT EXISTS owner_db;
CREATE TABLE IF NOT EXISTS `owner_db`.`owner` (
 `Name` VARCHAR(45) NOT NULL,
 `Address` VARCHAR(45) NOT NULL,
 `Description` VARCHAR(45),
 `Price` INT NOT NULL,
 `Availability` TINYINT NOT NULL,
 `id` VARCHAR(45) NOT NULL,
 PRIMARY KEY (`id`))
