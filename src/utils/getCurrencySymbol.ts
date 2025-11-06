import { CURRENCY_SYMBOLS } from '../const';

export const getCurrencySymbol = (currencyCode: string): string =>
  CURRENCY_SYMBOLS[currencyCode as keyof typeof CURRENCY_SYMBOLS] ?? '';
