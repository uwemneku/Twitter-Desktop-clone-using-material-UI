import { CircularProgress, createMuiTheme, Grid, IconButton, ThemeProvider } from '@material-ui/core'
import { green } from '@material-ui/core/colors';
import React from 'react'
import { Icons } from './Icons';
import IconsComponent from './IconsComponent';
import NavLink from './NavLinks';


const theme = createMuiTheme({
    palette: {
      primary: {
        main: 'rgb(29, 161, 242)',
      },
      secondary: {
        main: green[500],
      },
    },
  });
export default function Preloader() {
    return (
        <ThemeProvider theme={theme}>
        <Grid container alignItems='center' justify='center' style={{width:'100vw', height:'100vh', position:'fixed'}}>
             <NavLink  icon={Icons.twitter} /> 
        </Grid>
        <Grid container alignItems='center' justify='center' style={{width:'100vw', height:'100vh'}}>
            <CircularProgress size='60px'  />
        </Grid>

        </ThemeProvider>
    )
}
