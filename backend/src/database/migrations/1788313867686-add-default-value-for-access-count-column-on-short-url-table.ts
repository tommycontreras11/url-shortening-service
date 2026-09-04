import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDefaultValueForAccessCountColumnOnShortUrlTable1788313867686 implements MigrationInterface {
    name = 'AddDefaultValueForAccessCountColumnOnShortUrlTable1788313867686'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`short_urls\` CHANGE \`accessCount\` \`accessCount\` int NOT NULL DEFAULT '0'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`short_urls\` CHANGE \`accessCount\` \`accessCount\` int NOT NULL`);
    }

}
