import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangePriceTypes1658013052510 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('ALTER TABLE coffees ALTER COLUMN price TYPE REAL');

    await queryRunner.query(
      'ALTER TABLE orders ALTER COLUMN total_price TYPE REAL'
    );

    await queryRunner.query(
      'ALTER TABLE order_items ALTER COLUMN partial_price TYPE REAL'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'ALTER TABLE coffees ALTER COLUMN price TYPE DECIMAL'
    );

    await queryRunner.query(
      'ALTER TABLE orders ALTER COLUMN total_price TYPE DECIMAL'
    );

    await queryRunner.query(
      'ALTER TABLE order_items ALTER COLUMN partial_price TYPE DECIMAL'
    );
  }
}
