/**
 * @summary
 * Type definitions for Plan entity.
 *
 * @module services/plan/planTypes
 */

/**
 * @interface PlanPaymentOptions
 * @description Payment options available for a plan
 */
export interface PlanPaymentOptions {
  monthly: number;
  upfront: number;
  semester: number;
  installments: {
    noInterest: number[];
    withInterest: number[];
  };
}

/**
 * @interface PlanEntity
 * @description Represents a course plan with pricing and benefits
 */
export interface PlanEntity {
  id: string;
  name: string;
  monthlyPrice: number;
  totalPrice: number;
  duration: string;
  benefits: string[];
  paymentOptions: PlanPaymentOptions;
}
