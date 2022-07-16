import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { OrderItem } from './OrderItem';

enum PaymentType {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  CASH = 'cash',
}

@Entity('orders')
class Order {
  @PrimaryColumn()
  id: string;

  @Column()
  address: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { eager: true })
  order_items: OrderItem[];

  @Column()
  total_price: number;

  @Column()
  payment_type: PaymentType;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Order, PaymentType };
