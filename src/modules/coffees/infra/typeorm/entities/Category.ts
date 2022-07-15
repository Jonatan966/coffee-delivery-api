import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('categories')
class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;
}

export { Category };
