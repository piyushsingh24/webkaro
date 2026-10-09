-- CreateTable
CREATE TABLE `leads` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(150) NOT NULL,
    `email` VARCHAR(254) NULL,
    `phone` VARCHAR(30) NULL,
    `company_name` VARCHAR(200) NULL,
    `service_interest` VARCHAR(150) NULL,
    `project_description` TEXT NULL,
    `budget_range` VARCHAR(100) NULL,
    `preferred_contact_method` ENUM('EMAIL', 'PHONE', 'WHATSAPP') NOT NULL DEFAULT 'EMAIL',
    `status` ENUM('NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL_SENT', 'WON', 'LOST') NOT NULL DEFAULT 'NEW',
    `source` VARCHAR(100) NULL,
    `landing_page` VARCHAR(500) NULL,
    `referrer` VARCHAR(500) NULL,
    `utm_source` VARCHAR(150) NULL,
    `utm_medium` VARCHAR(150) NULL,
    `utm_campaign` VARCHAR(150) NULL,
    `follow_up_at` DATETIME(3) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `assigned_to_id` VARCHAR(191) NULL,

    INDEX `leads_status_created_at_idx`(`status`, `created_at`),
    INDEX `leads_email_idx`(`email`),
    INDEX `leads_assigned_to_id_idx`(`assigned_to_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `lead_activities` (
    `id` VARCHAR(191) NOT NULL,
    `lead_id` VARCHAR(191) NOT NULL,
    `type` ENUM('CREATED', 'STATUS_CHANGE', 'NOTE', 'FOLLOW_UP', 'ASSIGNMENT') NOT NULL,
    `from_status` ENUM('NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL_SENT', 'WON', 'LOST') NULL,
    `to_status` ENUM('NEW', 'CONTACTED', 'QUALIFIED', 'PROPOSAL_SENT', 'WON', 'LOST') NULL,
    `note` TEXT NULL,
    `follow_up_at` DATETIME(3) NULL,
    `actor_id` VARCHAR(191) NULL,
    `meta` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `lead_activities_lead_id_created_at_idx`(`lead_id`, `created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `leads` ADD CONSTRAINT `leads_assigned_to_id_fkey` FOREIGN KEY (`assigned_to_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lead_activities` ADD CONSTRAINT `lead_activities_lead_id_fkey` FOREIGN KEY (`lead_id`) REFERENCES `leads`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `lead_activities` ADD CONSTRAINT `lead_activities_actor_id_fkey` FOREIGN KEY (`actor_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
