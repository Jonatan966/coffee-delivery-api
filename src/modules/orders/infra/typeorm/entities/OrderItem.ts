import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { Coffee } from '../../../../coffees/infra/typeorm/entities/Coffee';
import { Order } from './Order';

@Entity('order_items')
class OrderItem {
  @PrimaryColumn()
  order_id: string;

  @PrimaryColumn()
  coffee_id: string;

  @ManyToOne(() => Order, (order) => order.order_items)
  @JoinColumn({ name: 'order_id' })
  order: Order;

  @ManyToOne(() => Coffee, { eager: true })
  @JoinColumn({ name: 'coffee_id' })
  coffee: Coffee;

  @Column()
  amount: number;

  @Column()
  partial_price: number;

  @CreateDateColumn()
  created_at: Date;
}

export { OrderItem };
