import { FC, PropsWithChildren, useReducer } from 'react';
import { CurrencyContext, currencyReducer } from '.';
import { useAxios } from '@/hooks';

export interface CurrencyState {
  fromCurrency: string;
  toCurrency: string;
  baseAmount: string;
}

const Currency_INITIAL_STATE: CurrencyState = {
  fromCurrency: '',
  toCurrency: '',
  baseAmount: '',
};

export const CurrencyProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(currencyReducer, Currency_INITIAL_STATE);
  const { data, isLoading } = useAxios('/latest');


  const setFromCurrency = (currency: string) => {
    dispatch({ type: '[fromCurrency] - SetCurrency', payload: currency })
  }
  const setToCurrency = (currency: string) => {
    dispatch({ type: '[toCurrency] - SetCurrency', payload: currency })
  }
  const setAmount = (amount: string) => {
    dispatch({ type: '[amount] - SetAmount', payload: amount })
  }

  return (
    <CurrencyContext.Provider
      value={{
        ...state,

        // Properties
        data,
        isLoading,
        // Methods
        setFromCurrency,
        setToCurrency,
        setAmount,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};