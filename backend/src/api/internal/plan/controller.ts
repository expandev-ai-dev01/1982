/**
 * @summary
 * API controller for Plan entity.
 * Handles listing course plans with pricing and payment options.
 *
 * @module api/internal/plan/controller
 */

import { Request, Response, NextFunction } from 'express';
import { successResponse, errorResponse, isServiceError } from '@/utils';
import { planList } from '@/services/plan';

/**
 * @api {get} /api/internal/plan List Plans
 * @apiName ListPlans
 * @apiGroup Plan
 *
 * @apiSuccess {Boolean} success Success flag (always true)
 * @apiSuccess {Object[]} data List of plans
 * @apiSuccess {String} data.id Plan identifier (standard | silver | black)
 * @apiSuccess {String} data.name Plan name
 * @apiSuccess {Number} data.monthlyPrice Monthly price in BRL
 * @apiSuccess {Number} data.totalPrice Total course price (6 months)
 * @apiSuccess {String} data.duration Course duration
 * @apiSuccess {String[]} data.benefits List of plan benefits
 * @apiSuccess {Object} data.paymentOptions Payment options for this plan
 * @apiSuccess {Number} data.paymentOptions.monthly Monthly payment value
 * @apiSuccess {Number} data.paymentOptions.upfront Upfront payment with 15% discount
 * @apiSuccess {Number} data.paymentOptions.semester Semester payment with 10% discount
 * @apiSuccess {Object} data.paymentOptions.installments Installment options
 * @apiSuccess {Number[]} data.paymentOptions.installments.noInterest Installment values (1-5x without interest)
 * @apiSuccess {Number[]} data.paymentOptions.installments.withInterest Installment values (6-12x with 2% monthly interest)
 *
 * @apiError {Boolean} success Success flag (always false)
 * @apiError {String} error.code Error code
 * @apiError {String} error.message Error message
 */
export async function listHandler(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const data = await planList();
    res.json(successResponse(data));
  } catch (error) {
    if (isServiceError(error)) {
      res.status(error.statusCode).json(errorResponse(error.message, error.code, error.details));
      return;
    }
    next(error);
  }
}
