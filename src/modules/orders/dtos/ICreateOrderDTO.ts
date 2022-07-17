import { OrderStatus, PaymentType } from '../infra/typeorm/entities/Order';

interface ICreateOrderDTO {
  id?: string;
  address: string;
  payment_type: PaymentType;
  total_price?: number;
  status?: OrderStatus;
}

export { ICreateOrderDTO };
