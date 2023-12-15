import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1701736032174 implements MigrationInterface {
  name = 'Init1701736032174';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "projects" ("uuid" character varying NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "started_at" TIMESTAMP, "cancelled_at" TIMESTAMP, "forecasted_at" TIMESTAMP, "status" "public"."projects_status_enum" NOT NULL DEFAULT 'pending', CONSTRAINT "PK_fc9f1e64d4626f18beff534a9f3" PRIMARY KEY ("uuid"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "projects"`);
  }
}
