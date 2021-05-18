import { Avatar, Grid, Hidden, makeStyles, Typography } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import React from 'react'
import '@fontsource/roboto'
import { blue } from '@material-ui/core/colors'



const useStyle = makeStyles((theme)=>({
    root:{
        boxSizing: 'content-box',
        width: '210px',
        padding: '8px',
        borderRadius: '999px',
        marginBottom:'5px',

        '&:hover':{
            backgroundColor: blue[50]
        },

        [theme.breakpoints.down('md')]:{
            width: 'fit-content',
            height: 'fit-content'
        }
        
    },
    avatar:{
        width:'38px',
        height:'38px',
    }
}))
export default function NavProfile() {
    const classes = useStyle()
    return (
        <Grid className={classes.root} container direction='row' alignItems='center' spacing={1}>
            <Grid item >
                <Avatar className={classes.avatar}></Avatar>
            </Grid>
            <Hidden mdDown>
            <Grid item xs container direction='column'>
                    <Typography style={{fontWeight:'900'}} variant='body2' >Izzy</Typography>
                    <Typography variant = 'caption'>@izzydboy</Typography>     
            </Grid>
            <Grid item>
                <MoreHoriz />
            </Grid>
            </Hidden>
        </Grid>
    )
}
