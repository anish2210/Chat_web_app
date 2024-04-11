import React from 'react';
import { Typography,Toolbar,AppBar,Box } from "@mui/material";
import { orange } from "../../constants/color";

const Header = () => {
  return <>
     <Box sx={{flexGrow:1}} height={"4rem"}>

        <AppBar position='static' sx={{
            bgcolor: orange
        }}
        >
            <Toolbar>
                <Typography
                variant = "h6"
                sx={{
                    display: {xs: "none", sm: "block"},
                }}
                >
                    Chattu
                </Typography>

            </Toolbar>
        </AppBar>

     </Box>
  </>
}

export default Header