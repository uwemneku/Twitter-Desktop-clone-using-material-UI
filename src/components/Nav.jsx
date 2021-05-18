import { Avatar, Button, ClickAwayListener, Divider, Grid, Hidden, makeStyles, Menu, MenuItem, Paper, Popper, styled, SvgIcon, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import {Icons} from './Icons'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NavLink from './NavLinks'
import IconsComponent from './IconsComponent';
import {data} from '../Data/data'
import NavProfile from '../new components/NavProfile'



const useStyle = makeStyles((theme) => ({
  tweetIcon:{
    // width:'40px',
    // height: '40px',
    padding: '10px',
    borderRadius: '25px',
    backgroundColor: 'rgb(29, 161, 242)',
    color:'white',
    [theme.breakpoints.up('md')]:{
      display:'none'
    }  
  },
  tweetButton:{
    textTransform: 'none',
    fontWeight:'600',
    fontSize: '15px',
    padding: '10px',
    paddingLeft: '90px',
    paddingRight: '90px',
    backgroundColor:'rgb(29, 161, 242)',
    zIndex:-2, 
    borderRadius: '32px',
    color:'white', 
    [theme.breakpoints.down('sm')]:{
      display:'none'
    }
   
  },
  bigAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
   
  },
  profile:{
    width: '200px',
    borderRadius: '30px',
    padding:'10px',
    paddingRight: '10px',
    paddingLeft: '10px',

    '&:hover':{
      backgroundColor: 'rgb(226, 238, 245)'
    },
    [theme.breakpoints.down('sm')]:{
      width: '50px',
      
      // height: '70px'
    }
  }
  
}))



export default function Nav() {
  const clickedNav = React.useRef(null)
  const [openMenu, setopenMenu] = useState(false)
  const handleClick = (event) => {
    if(clickedNav.current)
    {
      //Change color of previous clicked element back to black
      clickedNav.current.style.color = 'black'
    }
    //Set clickedNav to point to clicked button
    clickedNav.current = event.currentTarget
    //Chnage color to red
    console.log(event.currentTarget.style.color = 'rgb(29, 161, 242)')

  }
  const handleMoreClick = (event) => {
    handleClick(event);
    setopenMenu(true)
  }
  const handleClose =() => {
    setopenMenu(false)
  }
  return (
      <Grid container direction='column' justify = 'space-between' style={{height:'100%'}} wrap='nowrap'  >
        <Grid item container direction='column' spacing={1}>
          <Grid item>
              <NavLink  icon={Icons.twitter} />
          </Grid>
          <Grid item>
              <NavLink customClickEvent={handleClick} icon={Icons.home} text = 'Home' />
          </Grid>
          <Grid item>
              <NavLink customClickEvent={handleClick} icon={Icons.explore} text = 'Explore' />
          </Grid>
          <Grid item>
              <NavLink customClickEvent={handleClick} icon={Icons.notification} text = 'Notifications' />
          </Grid>
          <Grid item>
              <NavLink customClickEvent={handleClick} icon={Icons.message} text = 'Messages' />
          </Grid>
          <Grid item>
              <NavLink customClickEvent={handleClick} icon={Icons.bookmark} text = 'Bookmarks' />
          </Grid>
          <Grid item>
              <NavLink customClickEvent={handleClick} icon={Icons.list} text = 'Lists' />
          </Grid>
          <Grid item>
              <NavLink customClickEvent={handleClick} icon={Icons.profile} text = 'Profile' />
          </Grid>
          <Grid item>
              <NavLink customClickEvent={handleMoreClick} icon={Icons.more} text = 'More'></NavLink>
          </Grid>
          <Grid item>
          <TweetButton />
          </Grid>
        </Grid>
        <NavProfile />
        <Grid item>

        </Grid>
      <MoreMenu anchorEl={clickedNav.current} open={openMenu} close={() => {setopenMenu(false)}}  />
      </Grid>

  )
}

function TweetButton (){
  const classes = useStyle()
  return(

    <Grid container alignItems='center'>
      <Grid item>
        <SvgIcon className = {classes.tweetIcon} style={{fontSize:'30px'}} >
            {Icons.tweet}
          </SvgIcon>
      </Grid>
      <Grid item>
      <Button className = {classes.tweetButton}> 
        Tweet
      </Button>
      </Grid>
    </Grid>
  )
}

function ProfileButton(){
  const classes = useStyle()
  return (
    <div  className={classes.profile}>

      <Grid container alignItems='center' spacing ={1}>
          <Grid item >
            <Avatar src={data.image} className = {classes.bigAvatar}>H</Avatar>
          </Grid>
          <Hidden smDown>

          <Grid item xs container direction = 'column'>
            <Typography variant = 'subtitle1' style = {{fontWeight: 'bold', fontSize: '15px', padding:'0px'}}>{data.Name}</Typography>
            <Typography variant = 'caption' style = {{fontSize:''}}>@{data.userName}</Typography>
          </Grid>

          <Grid item >
            <MoreHorizIcon />
          </Grid>
          </Hidden>
      </Grid>
    </div>
  )
}



function MoreMenu({anchorEl, open, close}){
  

  return(
   <Popper
   anchorEl = {anchorEl}
   placement = 'top'
   open= {open}
   >
      <ClickAwayListener onClickAway ={close}>

      <Paper 
      style={{width:'25ch', marginBottom:'-35px'}}>
       <MoreMenuItems icon ={Icons.topic} text= 'Topics' />
       <MoreMenuItems icon ={Icons.moments} text= 'Moments' />
       <MoreMenuItems icon ={Icons.news} text= 'Newsletters' />
       <MoreMenuItems icon ={Icons.ads} text= 'Twitter Ads' />
       <MoreMenuItems icon ={Icons.analytics} text= 'Analytics' />
       <Divider />
       <MoreMenuItems icon ={Icons.settings} text= 'Settings and Privacy' />
       <MoreMenuItems icon ={Icons.help} text= 'Help Center' />
       <MoreMenuItems icon ={Icons.display} text= 'Display' />
       <MoreMenuItems icon ={Icons.keyboard} text= 'Keyboard shortcuts' />

      </Paper>

      </ClickAwayListener>
        
    


   </Popper>
    )
}

const MyMenuItem = styled(MenuItem)({
  paddingTop:'2px',
  paddingBottom:'2px',
})
function MoreMenuItems ({icon, text}){
  return(
    <MyMenuItem>
        <IconsComponent icon={icon} fontSize='20px' />
        <Typography>{text}</Typography>      
     </MyMenuItem>
  )
}
