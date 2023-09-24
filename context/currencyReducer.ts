import { CurrencyState } from '.';


type currencyActionType =
   | { type: '[fromCurrency] - SetCurrency', payload: string }
   | { type: '[toCurrency] - SetCurrency', payload: string }
   | { type: '[amount] - SetAmount', payload: string }


export const currencyReducer = (state: CurrencyState, action: currencyActionType): CurrencyState => {

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
            baseAmount: action.payload
         }
      default:
         return state;
   }

}