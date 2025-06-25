-- CreateTable
CREATE TABLE `Teacher` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `teacherName` VARCHAR(191) NOT NULL,
    `teacherEmail` VARCHAR(191) NOT NULL,
    `teacherPhone` INTEGER NOT NULL,
    `techerGender` ENUM('MALE', 'FEMALE') NOT NULL,

    UNIQUE INDEX `Teacher_teacherEmail_key`(`teacherEmail`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
