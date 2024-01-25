import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1706085294908 implements MigrationInterface {
    name = 'Migrations1706085294908'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice_model" RENAME COLUMN "items" TO "Items"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "invoice_model" RENAME COLUMN "Items" TO "items"`);
    }

}
