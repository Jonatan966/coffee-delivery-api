import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

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

  @Column()
  total_price: number;

  @Column()
  payment_type: PaymentType;

  @CreateDateColumn()
  created_at: Date;
}

export { Order, PaymentType };
