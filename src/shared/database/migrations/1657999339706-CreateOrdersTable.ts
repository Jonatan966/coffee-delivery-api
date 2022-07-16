import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrdersTable1657999339706 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'orders',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'address',
            type: 'varchar',
          },
          {
            name: 'total_price',
            type: 'decimal',
          },
          {
            name: 'payment_type',
            type: 'enum',
            enum: ['credit_card', 'debit_card', 'cash'],
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('orders');
  }
}
