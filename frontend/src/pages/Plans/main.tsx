import { useState } from 'react';
import { usePlanList } from '@/domain/plan/hooks/usePlanList';
import { PlanCard } from '@/domain/plan/components/PlanCard';
import { PaymentOptions } from '@/domain/plan/components/PaymentOptions';
import { LoadingSpinner } from '@/core/components/loading-spinner';
import { Alert, AlertDescription, AlertTitle } from '@/core/components/alert';
import { Button } from '@/core/components/button';
import { AlertCircle } from 'lucide-react';
import type { Plan } from '@/domain/plan/types/models';

function PlansPage() {
  const { plans, isLoading, isError, error, refetch } = usePlanList();
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const handleSelectPlan = (planId: string) => {
    const plan = plans?.find((p) => p.id === planId);
    if (plan) {
      setSelectedPlan(plan);
      // Scroll to payment options
      document.getElementById('payment-options')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <LoadingSpinner className="size-8" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-6">
        <Alert variant="destructive" className="max-w-md">
          <AlertCircle className="size-4" />
          <AlertTitle>Erro ao carregar planos</AlertTitle>
          <AlertDescription className="mt-2 space-y-4">
            <p>{error?.message || 'Não foi possível carregar os planos disponíveis.'}</p>
            <Button onClick={() => refetch()} variant="outline" size="sm">
              Tentar novamente
            </Button>
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="space-y-12 py-12">
      {/* Header Section */}
      <section className="space-y-4 text-center" aria-labelledby="plans-title">
        <h1
          id="plans-title"
          className="text-foreground text-4xl font-bold tracking-tight md:text-5xl"
        >
          Escolha seu Plano
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
          Selecione o plano ideal para seu aprendizado e veja as opções de pagamento disponíveis
        </p>
      </section>

      {/* Plans Grid */}
      <section
        className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        aria-label="Lista de planos disponíveis"
      >
        {plans?.map((plan) => (
          <PlanCard
            key={plan.id}
            plan={plan}
            onSelectPlan={handleSelectPlan}
            className={selectedPlan?.id === plan.id ? 'ring-primary ring-2' : ''}
          />
        ))}
      </section>

      {/* Payment Options Section */}
      {selectedPlan && (
        <section id="payment-options" className="space-y-6" aria-labelledby="payment-options-title">
          <div className="space-y-2 text-center">
            <h2
              id="payment-options-title"
              className="text-foreground text-3xl font-bold tracking-tight"
            >
              Opções de Pagamento
            </h2>
            <p className="text-muted-foreground">Escolha a melhor forma de pagamento para você</p>
          </div>
          <PaymentOptions
            paymentOptions={selectedPlan.paymentOptions}
            planName={selectedPlan.name}
          />
        </section>
      )}
    </div>
  );
}

export { PlansPage };
