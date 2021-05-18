import { Grid, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import TweetBox from '../new components/TweetBox.js';
import { Icons } from './Icons.js';
import IconsComponent from './IconsComponent.jsx';
import Tweet from './Tweets.js';



const useStyle = makeStyles((theme) => ({
    root:{
        // maxWidth: '500px'
    },
    
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '500px',
    boder: 'solid',
    borderBottomWidthWidth: '2px',
    borderBottomColor: 'black',
    outline:'auto'
  },
  hoverPaper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 250,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  bigAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  },
  typoGraphy:{
    padding: '10px' 
  },
  contained:{
    backgroundColor: 'rgb(29, 161, 242)',
    borderRadius: '20px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover':{
      backgroundColor: 'red'
    }
  },
  tweetBoxIcons:{
    paddingRight:'2px',
    paddingLeft:'2px',
  }
}))
export default function Feed() {
    const classes =useStyle();
    return (
        <div className = {classes.root}>
            <Header />
            <TweetBox />
            <div style={{height:'20px', backgroundColor:'rgb(235, 238, 240)'}}></div>
            <Tweet />
        </div>
    )
}

const Header = () => {
    return(
      <Grid container  style={{position:'', outline: 'auto', padding:'8px'}} alignItems = 'center'>
          <Grid item xs>
            <Typography style={{fontWeight:'900'}} variant='h6'>Home</Typography>
          </Grid>
          <Grid style={{color:'blue'}} item>
            <IconsComponent icon ={Icons.topTweet} fontSize='25px' />
          </Grid>
      </Grid>
    )
  }