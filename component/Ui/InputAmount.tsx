import { CurrencyContext } from "@/context"
import { Grid, TextField } from "@mui/material"
import { ChangeEvent, useContext } from "react"

export const InputAmount = () => {

  const { baseAmount, setAmount  } = useContext( CurrencyContext );

  const handlerChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    const amount = (e.target.value);
    setAmount( amount );
  }

  return (
      <Grid item xs={12} md>
        <TextField 
        value={ baseAmount }
        onChange={ handlerChange }
          label='Amount'
          fullWidth
          inputProps={{
            type: 'number',
          }}
        />
      </Grid>
  )
}
