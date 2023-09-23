import { CurrencyState } from '.';


type currencyActionType = 
   | { type: '[fromCurrency] - SetCurrency', payload: string } 
   | { type: '[toCurrency] - SetCurrency', payload: string } 
   | { type: '[amount] - SetAmount', payload: string } 
   | { type: 'IsLoading', payload: boolean } 


export const currencyReducer = ( state: CurrencyState, action: currencyActionType ): CurrencyState => {

   switch (action.type) {
      case '[fromCurrency] - SetCurrency':
         return {
            ...state,
            fromCurrency: action.payload,
          }
      case '[toCurrency] - SetCurrency':
         return {
            ...state,
            toCurrency: action.payload,
         }
      case '[amount] - SetAmount':
         return {
            ...state,
            amount: action.payload
         }
      case 'IsLoading':
         return {
            ...state,
            isLoading: action.payload,
         }
       default:
          return state;
   }

}