import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { OrderItem } from './OrderItem';

enum PaymentType {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  CASH = 'cash',
}

enum OrderStatus {
  CREATED = 'created',
  PREPARING = 'preparing',
  DELIVERING = 'delivering',
  DELIVERED = 'delivered',
  CANCELED = 'canceled',
}

@Entity('orders')
class Order {
  @PrimaryColumn()
  id: string;

  @Column()
  address: string;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order)
  order_items: OrderItem[];

  @Column()
  total_price: number;

  @Column()
  payment_type: PaymentType;

  @Column()
  status: OrderStatus;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.status = OrderStatus.CREATED;
    }
  }
}

export { Order, PaymentType, OrderStatus };
