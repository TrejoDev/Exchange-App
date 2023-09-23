import { CurrencyContext } from "@/context"
import { Grid, TextField } from "@mui/material"
import { ChangeEvent, useContext } from "react"

export const InputAmount = () => {

  const { amount, setAmount  } = useContext( CurrencyContext );

  const handlerChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
    setAmount( e.target.value );
  }

  return (
      <Grid item xs={12} md>
        <TextField 
        value={ amount }
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
