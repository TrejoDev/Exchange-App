import { Latest } from '@/interface/latest';
import { createContext } from 'react';

interface ContextProps {
    // Propertie
    data: Latest;
    isLoading: boolean;
    fromCurrency: string;
    toCurrency: string;
    baseAmount: string;
    // Methods
    setFromCurrency: (currency: string) => void;
    setToCurrency: (currency: string) => void
    setAmount: (currency: string) => void
}

export const CurrencyContext = createContext({} as ContextProps);