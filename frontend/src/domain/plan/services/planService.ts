/**
 * @service planService
 * @domain plan
 * @type REST
 *
 * @summary
 * Service for fetching course plans with pricing and payment options.
 */

import { authenticatedClient } from '@/core/lib/api';
import type { Plan } from '../types/models';

export const planService = {
  /**
   * Fetches all available course plans.
   * @returns Promise<Plan[]> List of plans with pricing and payment options
   */
  async list(): Promise<Plan[]> {
    const { data } = await authenticatedClient.get<{ success: boolean; data: Plan[] }>('/plan');
    return data.data;
  },
};
