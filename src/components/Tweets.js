import React, { useState } from 'react';
import { createMuiTheme, makeStyles, styled, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { Avatar,  Button, CircularProgress, Divider, IconButton, InputBase, Menu, MenuItem, Popper } from '@material-ui/core';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Faker from 'faker'
import { CommentIcon, LikeIcon, RetweetIcon, ShareIcon } from '../new components/ReactionIcons'



const useStyles = makeStyles((theme) => ({
  root: {
  
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
}));

export default function Tweet() {
  const [anchorEl, setAnchorEl] = useState(null)
  const classes = useStyles();
  const handleAvatarHover = (event) => {
    setAnchorEl(event.currentTarget)
    console.log(event.currentTarget)
  }

  return (
    <div className={classes.root}>

      <Paper className={classes.paper} elevation={0} >
        <Grid container justify = 'flex-start' spacing = {2}>
            <Grid item>
                
                <Avatar src ={Faker.image.animals(40, 40)} onMouseEnter = {handleAvatarHover} onMouseLeave = {()=> {setAnchorEl(null)}} className = {classes.bigAvatar}>P</Avatar>
            </Grid>
            <Grid item xs container direction='column'>
              <Grid container item direction='row' alignItems = 'center'  xs>
                <Grid item xs={11}  container    direction ='row' alignItems='center' justify = 'flex-start' >
                  <Typography variant = 'subtitle1' style = {{fontWeight: 'bold'}}>IzzydBoy</Typography>
                  <Typography  variant = 'body2' style={{paddingLeft:5, paddingRight:5}}>@zzydBoy</Typography>
                  <Typography  variant = 'body2'>52m</Typography>
                </Grid>
                <Grid item xs ={1}><MoreHorizIcon /></Grid>
              </Grid>
              <Grid item>
                <Typography variant = 'body2'> This Harry and Meghan Issue ehn, if some of us share our mothers' ordeal at the hand of family members, hmmmm o</Typography>
              </Grid>
              <Grid item container justify='space-between' style={{maxWidth:'425px'}} wrap='nowrap'>
                    <Grid item>
                        <CommentIcon />
                    </Grid>
                    <Grid item>
                        <RetweetIcon />
                    </Grid>
                    <Grid item>
                        <LikeIcon />
                    </Grid>
                    <Grid item>
                        <ShareIcon />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
      
      </Paper>
    <Popper
      anchorEl = {anchorEl}
      open={Boolean(anchorEl)}
      placement = 'bottom-start'
      onMouseLeave = {()=> {setAnchorEl(null)}}
      onMouseEnter = {()=> {setAnchorEl(anchorEl)}}
      
    >
      
          <div style = {{marginTop:'10px'}} ></div>
          <HoverBox />
       

     
    </Popper>
    
    </div>
  );
}




const HoverBox = () => {
  const [following, setfollowing] = useState(true)
  const classes = useStyles()
  return (
    <Paper className = {classes.hoverPaper} style = {{borderRadius: '20px'}}>
    <Grid container>
        <Grid item>
        <Avatar src= {Faker.image.animals(40, 40)} className = {classes.bigAvatar}>P</Avatar>
        </Grid>
        <Grid item xs>
        </Grid>
        <Grid item >
          <Button variant = 'contained' classes ={{contained:classes.contained}}>Following</Button>
          {following? console.log('ttt'): console.log('yyy')}
          
        </Grid>
    </Grid>
    <Grid container direction='column' spacing = {0}>
      <Grid item>
      <span style= {{fontWeight: 'bold'}}>Danny Elo</span>
      </Grid>
      <Grid item>
      <span>@DannyElo</span>
      </Grid>
    </Grid>
    <Grid item  style={{marginTop: '10px', marginBottom:'10px'}}>
      <Typography style={{fontSize:'15px', lineHeight:'19px'}} variant = 'body2'>
      Plus-Sized Nerd. "He who provides food, controls my heart". Freelance Writer, A Movie & Music freak
      </Typography>
    </Grid>
    <Grid container spacing={3}>
      <Grid item>
        <Typography variant = 'h6' display='inline'>540</Typography>
        <Typography variant='body2' display='inline'>Following</Typography>
      </Grid>
      {/* <Grid item xs></Grid> */}
      <Grid item>
        <Typography variant = 'h6' display='inline'>540</Typography>
        <Typography variant='body2' display='inline'>Following</Typography>
      </Grid>
     
    </Grid>
</Paper>
  )
}










