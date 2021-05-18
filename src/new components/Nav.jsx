import { Button, ClickAwayListener, IconButton, makeStyles, MenuItem, Paper, Popper, styled, SvgIcon, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import React, { useState } from 'react'
import { IconsRename } from '../Data/IconsRename'
import CustomNavLink from './CustomNavLink'
import faker from 'faker'
import TwitterIcon from '@material-ui/icons/Twitter';
import CustomIcon from './CustomIcon'
import { blue } from '@material-ui/core/colors'

/**
 * This is an array containing objects with the nav links and their icons
 */
const key = () => (faker.helpers.contextualCard().phone)
const navArray = [
    {text:'Home', icon:<NavIcon icon={IconsRename.home} />}, 
    {text:'Explore', icon:<NavIcon icon={IconsRename.explore} />},
    {text:'Notification', icon:<NavIcon icon={IconsRename.notification} />},
    {text:'Messages', icon:<NavIcon icon={IconsRename.message} />},
    {text:'Bookmarks', icon:<NavIcon icon={IconsRename.bookmark} />},
    {text:'Lists', icon:<NavIcon icon={IconsRename.list} />},
    {text:'Profile', icon:<NavIcon icon={IconsRename.profile} />},
    
]



//This is the componenet fo all nav links
export default function Nav() {
  const clickedNav = React.useRef(null)
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
    return (
        <div>
            <CustomIcon icon = {<TwitterIcon fontSize='large' color={'primary'} />} />
            {navArray.map((link) => (<CustomNavLink key={key()} text = {link.text} icon = {link.icon} onClick={handleClick} />))}
            <MoreNavLink key={key()} />
             <TweetButton />

        </div>
    )
}

const MyTweetButton = styled(Button)({
    width: '149px',
    height: '46px',
    paddingRight: '32px',
    paddingLeft:'32px',
    borderRadius:'999px',
    color: 'White',
    fontWeight:'700',
    backgroundColor: blue[500],
    '&:hover':{
        backgroundColor: blue[600]
    },
})
const TweetIconButton =styled(IconButton)({
    backgroundColor: blue[500],
    color:'white'
})
function  TweetButton(){
    const visible = useMediaQuery(useTheme().breakpoints.up('lg'));

    return(
        <>
        {visible?<MyTweetButton>Tweet</MyTweetButton>:<TweetIconButton><NavIcon fontSize='48px' icon={IconsRename.tweet} /> </TweetIconButton>}
        </>
    )
} 

//The 'more' navlink is seperate because it has more functionality
function MoreNavLink(){
    const ref = React.useRef(null)
    const [open, setopen] = useState(false)
    const handleClickAway = () => {
        setopen(false)
    }
    React.useEffect(() => {
        console.log(ref);
        
    }, [])
    return(
        <div>
        <span onClick={() => (setopen(true))} ref = {ref}>
            <CustomNavLink   text = {'More'} icon = {<NavIcon icon={IconsRename.more} />}  />
        </span>
        <MoreMenu anchorEl={ref.current} open={open} close={handleClickAway}/>
        </div>
    )
}

/**
 * The componenet wraps  with the SvgIcon Component
 * @param {Object} props 
 * @param {Object} props.icon  //this will be svg icons imported from the icon object 
 * @returns {React.ReactElement}
 */
function NavIcon ({icon, fontSize='default'}){
    return (
        <SvgIcon fontSize={fontSize} >{icon}</SvgIcon>
    )
}







//Styling for the more menu popUp
const useStyle = makeStyles(()=>({
    root:{
        width:'212.75px',
        display: 'flex',
        marginBottom: '-32px',
        flexDirection: 'column',
        overflow:'hidden',
        overflowY:'auto',
    },
    menuItems:{
        padding:'13px',
        '&:hover':{
            backgroundColor: blue[50]
        }
    },
    typography:{
        marginLeft: '12px'
    }
}))

const MoreNavArray = [
    {text:'Topic', icon:<NavIcon fontSize={'small'} icon={IconsRename.topic} />}, 
    {text:'Moments', icon:<NavIcon fontSize={'small'} icon={IconsRename.moments} />},
    {text:'Newsletters', icon:<NavIcon fontSize={'small'} icon={IconsRename.news} />},
    {text:'Twitter Ads', icon:<NavIcon fontSize={'small'} icon={IconsRename.ads} />},
    {text:'Analytics', icon:<NavIcon fontSize={'small'} icon={IconsRename.analytics} />},
    {text:'Settings and Privacy', icon:<NavIcon fontSize={'small'} icon={IconsRename.settings} />},
    {text:'Help Center', icon:<NavIcon fontSize={'small'} icon={IconsRename.help} />},
    {text:'Display', icon:<NavIcon fontSize={'small'} icon={IconsRename.display} />},
    {text:'Keyboard shortcuts', icon:<NavIcon fontSize={'small'} icon={IconsRename.keyboard} />},
    
]


function MoreMenu({anchorEl, open, close}){
    const classes = useStyle();
    return(
        <Popper
        anchorEl={anchorEl}
        open={open}
        placement = 'top'
        >
            <ClickAwayListener onClickAway={close} >
        <Paper className={classes.root} elevation={2}>
            {MoreNavArray.map(link => (
            <MenuItem key={key()} className = {classes.menuItems}>
                 {link.icon}
                 <Typography className={classes.typography}  variant = 'body2'>{link.text}</Typography>
            </MenuItem>
            ))}
        </Paper>
            </ClickAwayListener>
        </Popper>
    )
}







