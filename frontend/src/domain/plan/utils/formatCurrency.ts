/**
 * @summary
 * Formats a number as Brazilian currency (R$ X.XXX,XX).
 *
 * @param value - The numeric value to format
 * @returns Formatted currency string
 */
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
};
