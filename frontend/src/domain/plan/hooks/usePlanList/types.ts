import type { Plan } from '../../types/models';

export interface UsePlanListReturn {
  plans: Plan[] | undefined;
  isLoading: boolean;
  isError: boolean;
  error: Error | null;
  refetch: () => void;
}
