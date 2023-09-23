import { RatesInterface } from '@/interface/rates';
import { Dispatch, SetStateAction, createContext } from 'react';

interface ContextProps {
    // Propertie
    data: RatesInterface;
    isLoading: boolean;
    fromCurrency: string;
    toCurrency: string;
    amount: string;
    // Methods
    setFromCurrency: (currency: string) => void;
    setToCurrency: (currency: string) => void 
    setAmount: (currency: string) => void
    fetchData: (url: string) => Promise<void>;
}

export const CurrencyContext = createContext({} as ContextProps);