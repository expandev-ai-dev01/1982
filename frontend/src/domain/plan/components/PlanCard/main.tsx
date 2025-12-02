import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/core/components/card';
import { Button } from '@/core/components/button';
import { Badge } from '@/core/components/badge';
import { Check } from 'lucide-react';
import { cn } from '@/core/lib/utils';
import { formatCurrency } from '../../utils/formatCurrency';
import type { PlanCardProps } from './types';

function PlanCard({ plan, onSelectPlan, className }: PlanCardProps) {
  return (
    <Card className={cn('flex flex-col transition-all duration-200 hover:shadow-lg', className)}>
      <CardHeader className="space-y-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
          <Badge variant="secondary">{plan.duration}</Badge>
        </div>
        <div className="space-y-1">
          <p className="text-muted-foreground text-sm">Valor mensal</p>
          <p className="text-3xl font-bold">{formatCurrency(plan.monthlyPrice)}</p>
          <p className="text-muted-foreground text-xs">
            Total do curso: {formatCurrency(plan.totalPrice)}
          </p>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-4">
        <div className="space-y-3">
          <p className="text-sm font-medium">Benefícios inclusos:</p>
          <ul className="space-y-2">
            {plan.benefits?.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm">
                <Check className="text-primary size-4 mt-0.5 shrink-0" aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>

      <CardFooter>
        <Button onClick={() => onSelectPlan(plan.id)} className="w-full" size="lg">
          Escolher Plano
        </Button>
      </CardFooter>
    </Card>
  );
}

export { PlanCard };
