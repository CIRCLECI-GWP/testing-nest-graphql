import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1706187987913 implements MigrationInterface {
    name = 'Migrations1706187987913'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice_model" RENAME COLUMN "items" TO "Items"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice_model" RENAME COLUMN "Items" TO "items"`);
    }

}
