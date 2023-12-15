import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddFinishedAtColumn1702599595360 implements MigrationInterface {
  name = 'AddFinishedAtColumn1702599595360';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "projects" ADD "finished_at" TIMESTAMP`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "projects" DROP COLUMN "finished_at"`);
  }
}
