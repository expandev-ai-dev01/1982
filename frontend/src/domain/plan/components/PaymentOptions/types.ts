import type { PaymentOptions as PaymentOptionsType } from '../../types/models';

export interface PaymentOptionsProps {
  paymentOptions: PaymentOptionsType;
  planName: string;
  className?: string;
}
