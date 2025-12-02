import type { Plan } from '../../types/models';

export interface PlanCardProps {
  plan: Plan;
  onSelectPlan: (planId: string) => void;
  className?: string;
}
