import { Grid, makeStyles } from '@material-ui/core'
import React from 'react'
import Nav from './Nav'
import NavProfile from './NavProfile'



const useStyle = makeStyles(()=>({
   root:{
       width: 'fit-content',
       marginRight:'10px',     
       marginLeft:'10px',     
        height:'100%',
        overFlowX:'hidden',
        overFlowY:'scroll',}
}))
export default function NavLayout() {
    const classes = useStyle()
    return (

        <Grid container className = {classes.root} wrap='nowrap' justify='flex-end'>
            <Grid item xs style={{height:'100vh'}}>
                    <div></div>
            </Grid>
            <Grid item  container direction='column'    justify = 'space-between' wrap='nowrap' alignItems='flex-end'>
                <Grid item>
                    <Nav />
                </Grid>
                <Grid item>
                    <NavProfile />
                </Grid>
            </Grid>

        </Grid>
            
)
}
