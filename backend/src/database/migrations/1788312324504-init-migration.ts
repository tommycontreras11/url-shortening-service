import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1788312324504 implements MigrationInterface {
    name = 'InitMigration1788312324504'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`short_urls\` (\`id\` int NOT NULL AUTO_INCREMENT, \`url\` varchar(2048) NOT NULL, \`shortCode\` varchar(8) NOT NULL, \`accessCount\` int NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_2756f6a30137d1d6a268ada4b1\` (\`shortCode\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_2756f6a30137d1d6a268ada4b1\` ON \`short_urls\``);
        await queryRunner.query(`DROP TABLE \`short_urls\``);
    }

}
