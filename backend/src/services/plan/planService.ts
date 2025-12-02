/**
 * @summary
 * Business logic for Plan entity.
 * Provides course plan information with calculated payment options.
 *
 * @module services/plan/planService
 */

import { PlanEntity } from './planTypes';

/**
 * Calculates payment options for a given total price
 * @param {number} totalPrice - Total course price
 * @returns {object} Payment options with all calculations
 */
function calculatePaymentOptions(totalPrice: number) {
  const upfront = totalPrice * 0.85; // 15% discount
  const semester = totalPrice * 0.9; // 10% discount

  // Calculate installments without interest (1-5x)
  const noInterest = Array.from({ length: 5 }, (_, i) => {
    const installments = i + 1;
    return totalPrice / installments;
  });

  // Calculate installments with 2% monthly interest (6-12x)
  const withInterest = Array.from({ length: 7 }, (_, i) => {
    const installments = i + 6;
    const totalWithInterest = totalPrice * 1.02;
    return totalWithInterest / installments;
  });

  return {
    monthly: totalPrice / 6,
    upfront: parseFloat(upfront.toFixed(2)),
    semester: parseFloat(semester.toFixed(2)),
    installments: {
      noInterest: noInterest.map((v) => parseFloat(v.toFixed(2))),
      withInterest: withInterest.map((v) => parseFloat(v.toFixed(2))),
    },
  };
}

/**
 * @summary
 * Lists all available course plans with pricing and payment options.
 *
 * @function planList
 * @module services/plan
 *
 * @returns {Promise<PlanEntity[]>} List of plan entities with calculated payment options
 *
 * @example
 * const plans = await planList();
 * // Returns: [{ id: 'standard', name: 'Standard', monthlyPrice: 340, ... }]
 */
export async function planList(): Promise<PlanEntity[]> {
  const plans: PlanEntity[] = [
    {
      id: 'standard',
      name: 'Standard',
      monthlyPrice: 340,
      totalPrice: 2040,
      duration: '6 meses',
      benefits: ['2 aulas por semana', 'Material básico', 'Suporte por chat'],
      paymentOptions: calculatePaymentOptions(2040),
    },
    {
      id: 'silver',
      name: 'Silver',
      monthlyPrice: 480,
      totalPrice: 2880,
      duration: '6 meses',
      benefits: ['3 aulas por semana', 'Exercícios extras', 'Aulas de conversação'],
      paymentOptions: calculatePaymentOptions(2880),
    },
    {
      id: 'black',
      name: 'Black',
      monthlyPrice: 620,
      totalPrice: 3720,
      duration: '6 meses',
      benefits: ['5 aulas por semana', 'Mentor dedicado', 'Simulados de certificação'],
      paymentOptions: calculatePaymentOptions(3720),
    },
  ];

  return plans;
}
