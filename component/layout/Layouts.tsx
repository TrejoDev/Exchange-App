import { FC, PropsWithChildren } from "react";
import Head from "next/head";

import { Box, Container } from "@mui/material";

interface Props extends PropsWithChildren {
  title: string;
}

export const Layout: FC<Props> = ({ title = '', children }) => {

  const boxStyles = {
    background: "#fdfdfd",
    marginTop: "10%",
    textAlign: "center",
    color: "#222",
    minHeight: "20rem",
    borderRadius: 2,
    padding: "4rem 2rem",
    boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
    position: "relative"
  }

  return (
    <Container sx={boxStyles} maxWidth='md' >
      <Head>
        <title>{title}</title>
      </Head>

      <Box sx={{ padding: '10px 20px' }}>
        {children}
      </Box>
    </Container>
  )
}
