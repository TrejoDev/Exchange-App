import { useCallback, useContext, useEffect, useState } from "react";

import { Box, Grid, Typography } from "@mui/material";

import { InputAmount, Layout, SelectCurrency, SwitchCurrency } from "@/component";
import { CurrencyContext } from "@/context";
import { exchangeApi } from "@/api";
import { Convert } from "@/interface";

export default function HomePage() {

  const { fromCurrency, setFromCurrency, toCurrency, setToCurrency, baseAmount } = useContext(CurrencyContext);
  const [resultCurrency, setResultCurrency] = useState(0);

  const handleRequest = useCallback(async () => {
    try {
      const { data } = await exchangeApi.get<Convert>('/convert', {
        params: {
          from: fromCurrency,
          to: toCurrency,
          amount: baseAmount,
        }
      });
      setResultCurrency(data.result)
    } catch (error) {
      console.log(error)
    }
  }
    ,
    [baseAmount, fromCurrency, toCurrency],
  )




  useEffect(() => {
    handleRequest();
  }, [baseAmount, fromCurrency, toCurrency, handleRequest]);

  return (
    <Layout title={"Exchange App"}>
      <Typography variant="h5" sx={{ mb: '2rem' }}>
        Currency Exchange Rate Calculator
      </Typography>
      <Grid container spacing={2}>
        <InputAmount />
        <SelectCurrency value={fromCurrency} setValue={setFromCurrency} label="From" />
        <SwitchCurrency />
        <SelectCurrency value={toCurrency} setValue={setToCurrency} label="To" />
      </Grid>

      {baseAmount ?
        (
          <Box sx={{ textAlign: "left", marginTop: "1rem" }}>
            <Typography>{baseAmount} {fromCurrency} =</Typography>
            <Typography variant='h5' sx={{ marginTop: "5px", fontWeight: "bold" }}>{resultCurrency} {toCurrency}</Typography>
          </Box>
        ) : ""
      }

    </Layout>
  )
}




