import { createMuiTheme, Grid, Hidden, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Feed from './Feed';
import NavLayout from '../new components/NavLayout';
import Nav from './Nav'
import Post from './Post'
import Tweet from './Tweets'
import Utility from './Utility';




export default function Layout (){
  return(
    <Grid container>
      <Grid item xs ={2} sm={3} container justify='flex-end'>
      <Hidden mdDown>
        <Grid item xs style={{height:'100vh'}}>
        </Grid>
      </Hidden>
        <Grid item  style={{height:'100vh', overflowY:'auto', overflowX:'hidden',}}>
          <NavLayout />
        </Grid>
        <Hidden mdDown>
        <Grid item xs style={{height:'100vh'}}>
        </Grid>
      </Hidden>
      </Grid>
      <Grid item xs ={10} sm={9} container>
        <Grid item style={{outline:'auto'}}>
          <Feed />
        </Grid>
        <Hidden mdDown>
        <Grid item xs container justify ='center'> 
          <Grid item>
              <Utility />
          </Grid>
        </Grid>
      </Hidden>
      </Grid>
    </Grid>
  )
}