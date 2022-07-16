import { PaymentType } from '../infra/typeorm/entities/Order';

interface ICreateOrderDTO {
  address: string;
  payment_type: PaymentType;
  total_price?: number;
}

export { ICreateOrderDTO };
