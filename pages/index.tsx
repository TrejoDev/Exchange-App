import { useContext, useEffect } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { InputAmount, Layout, SelectCurrency, SwitchCurrency } from "@/component";
import { CurrencyContext } from "@/context";

export default function HomePage() {

  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency, amount, setAmount, fetchData } = useContext( CurrencyContext );

  fetchData( '' )

  useEffect(() => {
    
  }, [amount])
  
    
  return (
    <Layout title={"Exchange App"}>
      <Typography variant="h5" sx={{ mb: '2rem' }}>
        Currency Exchange Rate Calculator
      </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCurrency value={fromCurrency} setValue={setFromCurrency} label="From"/>
        <SwitchCurrency />
        <SelectCurrency value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>

      {/* {  amount ? 
        (
        <Box sx={{ textAlign: "left", marginTop: "1rem"}}>
          <Typography>{amount} {fromCurrency} =</Typography>
          <Typography variant='h5' sx={{ marginTop: "5px", fontWeight: "bold"}}>{resultCurrency*firstAmount} {toCurrency}</Typography>
        </Box>
        ) : ""
      } */}
      
    </Layout>
  )
}
