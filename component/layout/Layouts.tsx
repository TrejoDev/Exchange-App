import { FC, PropsWithChildren } from "react"
import { Box } from "@mui/material"
import Head from "next/head"

interface Props extends PropsWithChildren {
    title: string;
}

export const Layout: FC<Props> = ({title = '', children}) => {
    return (
      <Box sx={{ flexFlow: 1}} >
          <Head>
              <title></title>
          </Head>
  
          
  
          <Box sx={{padding:'10px 20px'}}>
              {children}
          </Box>
      </Box>
    )
  }
