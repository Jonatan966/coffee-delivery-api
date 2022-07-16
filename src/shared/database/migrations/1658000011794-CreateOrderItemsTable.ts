import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateOrderItemsTable1658000011794 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'order_items',
        columns: [
          {
            name: 'order_id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'coffee_id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'amount',
            type: 'smallint',
          },
          {
            name: 'partial_price',
            type: 'decimal',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['order_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'orders',
          },
          {
            columnNames: ['coffee_id'],
            referencedColumnNames: ['id'],
            referencedTableName: 'coffees',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('order_items');
  }
}
