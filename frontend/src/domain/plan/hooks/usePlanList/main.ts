/**
 * @summary
 * Hook for fetching and managing course plans list.
 * Uses TanStack Query for server state management.
 *
 * @module domain/plan/hooks/usePlanList
 */

import { useQuery } from '@tanstack/react-query';
import { planService } from '../../services/planService';
import type { UsePlanListReturn } from './types';

export const usePlanList = (): UsePlanListReturn => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['plans'],
    queryFn: () => planService.list(),
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  return {
    plans: data,
    isLoading,
    isError,
    error,
    refetch,
  };
};
