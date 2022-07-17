import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddOrderStatus1658021076703 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns('orders', [
      new TableColumn({
        name: 'status',
        type: 'enum',
        enum: ['created', 'preparing', 'delivering', 'delivered', 'canceled'],
        default: "'created'",
      }),
      new TableColumn({
        name: 'updated_at',
        type: 'timestamp',
        default: 'now()',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns('orders', ['status', 'updated_at']);
  }
}
