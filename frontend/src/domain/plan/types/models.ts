/**
 * @summary
 * Plan domain type definitions.
 * Represents course plans with pricing and payment options.
 *
 * @module domain/plan/types/models
 */

export interface Plan {
  id: string;
  name: string;
  monthlyPrice: number;
  totalPrice: number;
  duration: string;
  benefits: string[];
  paymentOptions: PaymentOptions;
}

export interface PaymentOptions {
  monthly: number;
  upfront: number;
  semester: number;
  installments: InstallmentOptions;
}

export interface InstallmentOptions {
  noInterest: number[];
  withInterest: number[];
}
