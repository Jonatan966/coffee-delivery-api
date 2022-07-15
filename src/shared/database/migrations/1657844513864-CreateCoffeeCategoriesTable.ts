import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateCoffeeCategoriesTable1657844513864
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'coffee_categories',
        columns: [
          {
            name: 'coffee_id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'category_id',
            type: 'varchar',
            isPrimary: true,
          },
        ],
        foreignKeys: [
          {
            columnNames: ['coffee_id'],
            referencedTableName: 'coffees',
            referencedColumnNames: ['id'],
          },
          {
            columnNames: ['category_id'],
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('coffee_categories');
  }
}
