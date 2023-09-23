import { Dispatch, FC, SetStateAction, SyntheticEvent, useContext } from "react";
import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material"
import { CurrencyContext } from "@/context";

interface Props {
  value: string;
  setValue: (currency: string) => void;
  label: string;
}

export const SelectCurrency: FC<Props> = ({ value, setValue, label }) => {

  const { data, isLoading } = useContext(CurrencyContext);

  const currencyOptions = Object.keys(data.rates);

  const handleChange = ( e: SyntheticEvent<Element, Event>, newValue: string | null )=> {
    if (newValue !== null) {
      setValue(newValue);
    } else {
      // Handle the case when the user clears the selection (sets it to null)
      // For example, you can set a default value or perform some other action.
      setValue(""); // Setting it to an empty string as an example.
    }
  }

  return (
    <Grid item xs={12} md={3} >
      {
        isLoading 
        ? ( <Skeleton variant="rounded" height={60} /> )
        : (
          <Autocomplete 
            value={ value }
            onChange={ handleChange }
            disableClearable
            options={ currencyOptions }
            renderInput={ (params) => <TextField {...params} label={ label }/> }
        />
          )
      }
      
    </Grid>
  )
}
