import { Card, CardContent, CardHeader, CardTitle } from '@/core/components/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/core/components/tabs';
import { Badge } from '@/core/components/badge';
import { CreditCard, Wallet, Calendar, Banknote } from 'lucide-react';
import { cn } from '@/core/lib/utils';
import { formatCurrency } from '../../utils/formatCurrency';
import type { PaymentOptionsProps } from './types';

function PaymentOptions({ paymentOptions, planName, className }: PaymentOptionsProps) {
  return (
    <Card className={cn('w-full', className)}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="size-5" aria-hidden="true" />
          Opções de Pagamento - {planName}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="monthly" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="monthly">
              <Calendar className="size-4 mr-2" />
              Mensal
            </TabsTrigger>
            <TabsTrigger value="upfront">
              <Banknote className="size-4 mr-2" />À vista
            </TabsTrigger>
            <TabsTrigger value="semester">
              <Calendar className="size-4 mr-2" />
              Semestral
            </TabsTrigger>
            <TabsTrigger value="installments">
              <CreditCard className="size-4 mr-2" />
              Cartão
            </TabsTrigger>
          </TabsList>

          <TabsContent value="monthly" className="space-y-4">
            <div className="bg-muted/50 rounded-lg border p-6">
              <p className="text-muted-foreground mb-2 text-sm">Pagamento mensal</p>
              <p className="text-3xl font-bold">{formatCurrency(paymentOptions.monthly)}</p>
              <p className="text-muted-foreground mt-2 text-sm">Valor cheio do plano por mês</p>
            </div>
          </TabsContent>

          <TabsContent value="upfront" className="space-y-4">
            <div className="bg-muted/50 rounded-lg border p-6">
              <div className="mb-2 flex items-center gap-2">
                <p className="text-muted-foreground text-sm">Pagamento à vista</p>
                <Badge variant="secondary">15% de desconto</Badge>
              </div>
              <p className="text-3xl font-bold">{formatCurrency(paymentOptions.upfront)}</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Economize {formatCurrency(paymentOptions.monthly * 6 - paymentOptions.upfront)} no
                curso completo
              </p>
            </div>
          </TabsContent>

          <TabsContent value="semester" className="space-y-4">
            <div className="bg-muted/50 rounded-lg border p-6">
              <div className="mb-2 flex items-center gap-2">
                <p className="text-muted-foreground text-sm">Pagamento semestral</p>
                <Badge variant="secondary">10% de desconto</Badge>
              </div>
              <p className="text-3xl font-bold">{formatCurrency(paymentOptions.semester)}</p>
              <p className="text-muted-foreground mt-2 text-sm">
                Economize {formatCurrency(paymentOptions.monthly * 6 - paymentOptions.semester)} no
                curso completo
              </p>
            </div>
          </TabsContent>

          <TabsContent value="installments" className="space-y-4">
            <div className="space-y-4">
              <div className="bg-muted/50 rounded-lg border p-6">
                <p className="text-muted-foreground mb-4 text-sm font-medium">
                  Parcelamento sem juros (1-5x)
                </p>
                <div className="grid gap-2">
                  {paymentOptions.installments?.noInterest?.map((value, index) => (
                    <div
                      key={index}
                      className="bg-background flex items-center justify-between rounded-md border p-3"
                    >
                      <span className="text-sm font-medium">{index + 1}x</span>
                      <span className="text-sm font-bold">{formatCurrency(value)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-muted/50 rounded-lg border p-6">
                <div className="mb-4 flex items-center gap-2">
                  <p className="text-muted-foreground text-sm font-medium">
                    Parcelamento com juros (6-12x)
                  </p>
                  <Badge variant="outline">2% ao mês</Badge>
                </div>
                <div className="grid gap-2">
                  {paymentOptions.installments?.withInterest?.map((value, index) => (
                    <div
                      key={index}
                      className="bg-background flex items-center justify-between rounded-md border p-3"
                    >
                      <span className="text-sm font-medium">{index + 6}x</span>
                      <span className="text-sm font-bold">{formatCurrency(value)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground text-center text-xs">
                Sem juros em até 5x. Parcelas a partir de 6x têm juros de 2% ao mês
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

export { PaymentOptions };
