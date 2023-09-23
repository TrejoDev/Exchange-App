import { FC, PropsWithChildren, useReducer, useState } from 'react';
import { CurrencyContext, currencyReducer } from '.';
import { useAxios } from '@/hooks';
import { RatesInterface } from '@/interface/rates';
import { exchangeApi } from '@/api';

export interface CurrencyState {
  fromCurrency: string;
  toCurrency:   string;
  amount:  string;
  isLoading: boolean
}

const Currency_INITIAL_STATE: CurrencyState = {
  fromCurrency: "USD",
  toCurrency: 'EUR',
  amount: '',
  isLoading: false
};

export const CurrencyProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(currencyReducer, Currency_INITIAL_STATE);

  const [data, setData] = useState<RatesInterface>({
    success: false,
    timestamp: 0,
    base: "",
    date: "",
    rates: {
        rates: {}
    }
  })

  const fetchData = async (url: string) => {
    const setIsLoading = ( loading: boolean ) =>{
      dispatch({ type: 'IsLoading', payload: loading  })
    }
    try {
        const { data  } = await exchangeApi.get<RatesInterface>( '/latest' );
        setData( data )
        setIsLoading( true )
    } catch (error) {
        console.log(error)
    } finally {
      setIsLoading( false )
    }
  }; 

  


  const setFromCurrency = ( currency: string ) => {
    dispatch({ type: '[fromCurrency] - SetCurrency', payload: currency })
  }
  const setToCurrency = ( currency: string ) => {
    dispatch({ type: '[toCurrency] - SetCurrency', payload: currency })
  }
  const setAmount = ( amount: string ) => {
    dispatch({ type: '[amount] - SetAmount', payload: amount })
  }

  

/* useEffect(() => {

fetchData();
}, [ url ]); */

  return (
    <CurrencyContext.Provider
      value={{
        ...state,

         // Properties
            data,
            
         // Methods
         setFromCurrency,
         setToCurrency,
         setAmount,
         fetchData,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};