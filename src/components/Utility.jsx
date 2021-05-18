import { Divider, Grid, InputBase, makeStyles, MenuItem, Paper, TextField, Typography } from '@material-ui/core'
import React from 'react'
// import { Icons } from './Icons'
import IconsComponent from './IconsComponent'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SearchIcon from '@material-ui/icons/Search';
import Faker from 'faker';
import { borders } from '@material-ui/system';
import {Icons} from './Icons'


const country = Faker.address.country()
const allTrends = []
const useStyle = makeStyles((theme) => ({
    root:{

    },

   paper:{
       width: '348px',
       backgroundColor :'rgb(235, 238, 240, 0.5)', 
       borderRadius:'15px',
       marginTop: '10px'
   },
   inputBlur:{
       width: '350px',
       height: '53px',
       padding: '5px',
       paddingLeft: '30px',
       backgroundColor :'rgb(235, 238, 240, 0.5)', 
       borderRadius:'20000px',
       

   },
   inputFocus:{
       width: '350px',
       height: '53px',
       padding: '5px',
       paddingLeft: '30px',
       m:1,
       border: 'solid',
       borderWidth: '1px',
       borderColor: 'rgb(29, 161, 242)',
       backgroundColor :'white', 
       borderRadius:'20000px',

   }
})
    )

export default function Utility() {
    const classes = useStyle();
    return (
        <>
        <SearchBar />
        <Paper elevation = {false} className={classes.paper}>
            <Grid containter direction = 'row'>

                <Grid item container justify='space-between' alignItems='center' style={{padding:'10px'}}>
                        <Grid item>
                            <Typography variant='body1' style={{fontWeight:'900'}}>Trends for you</Typography>
                        </Grid>
                        <Grid style ={{color:'rgb(29, 161, 242)', }} item>
                            <IconsComponent icon ={Icons.settings} />
                        </Grid>
                </Grid>
                <Divider />
                    {allTrends.map(e =><> {e} <Divider /> </>)}
                <MenuItem style={{padding:'10px'}}>
                    <Typography variant='caption' color= 'primary'>Show more</Typography> 
                </MenuItem>
            </Grid>
        </Paper>
        </>
    )
}

const Trends = () => {
    return (
        <MenuItem style={{padding:'10px'}}>
                    <Grid container justify direction='column' >
                        <Grid item container justify='space-between'>
                            <Grid item>
                                <Typography variant='caption'>Trending in {country}</Typography>
                            </Grid>
                            <Grid item>
                                <MoreHorizIcon />
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Typography style={{fontWeight:'700'}} variant = 'h6'>{Faker.name.lastName()}</Typography>
                        </Grid>
                        <Grid itemm>
                            <Typography  variant = 'caption'>{Faker.finance.creditCardCVV()}k Tweets</Typography>
                        </Grid>
                    </Grid>
        </MenuItem>
    )
}

for (let index = 0; index < 4; index++) {
    allTrends.push(<Trends />)
    
}


const SearchBar = () =>{
    const classes = useStyle();
    const [inputStyle, setinputStyle] = React.useState(classes.inputBlur)
    return(
        <Grid container alignItems='center'>
            {/* <BorderColor color='red' > */}

            <Grid item xs>
                <InputBase onFocus = {() => {setinputStyle(classes.inputFocus)}}  onBlur = {() => {setinputStyle(classes.inputBlur)}}   startAdornment = {<SearchIcon />} className = {inputStyle}  placeholder = 'Search twitter' />
            </Grid>
            {/* </BorderColor> */}
        </Grid>
    ) 
}
