import { FC, SyntheticEvent, useContext, useEffect, useRef } from "react";

import { Autocomplete, Grid, Skeleton, TextField } from "@mui/material";

import { CurrencyContext } from "@/context";

interface Props {
  value: string;
  setValue: (currency: string) => void;
  label: string;
}

export const SelectCurrency: FC<Props> = ({ value, setValue, label }) => {

  const { data, isLoading } = useContext(CurrencyContext);

  let currencyOptions = [''];
  let currentValue: string;

  Object.keys(data.rates).map(currency => {
    currencyOptions.push(currency)
  });

  const handleChange = (e: SyntheticEvent<Element, Event>, newValue: string | null) => {
    if (newValue !== null) {
      setValue(newValue);
    } else {
      setValue("");
    }
  }

  if (!data) {
    currentValue = currencyOptions[0];
  } else {
    currentValue = value;
  }


  return (
    <Grid item xs={12} md={3} >
      {
        isLoading
          ? (<Skeleton variant="rounded" height={60} />)
          : (
            <Autocomplete
              value={currentValue}
              options={currencyOptions}
              onChange={handleChange}
              disableClearable
              renderInput={(params) => <TextField {...params} label={label} />}
            />
          )
      }


    </Grid>
  )
}
