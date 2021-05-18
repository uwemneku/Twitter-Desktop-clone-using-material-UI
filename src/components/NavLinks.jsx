import { Button, Grid, makeStyles, SvgIcon, Typography } from '@material-ui/core';
import React from 'react';
import IconsComponent from './IconsComponent'
import './header.css'
const useStyles = makeStyles((theme) => ({
  root:{
    display: 'flex',
    alignItems:'center',
    // margin:'10px',

    '&:hover':{

      '& div':{
        color: 'rgb(29, 161, 242)',
        backgroundColor: 'rgb(226, 238, 245)'
      }
    }
  },
  text:{
    display: 'flex',
    alignItems:'center',
    fontSize:'15px',
    fontWeight:'700', 
    height:'40px', 
    paddingLeft: '30px', 
    paddingRight: '10px', 
    marginLeft: '-15px',
    borderTopRightRadius: '20px',
    borderBottomRightRadius: '20px',
    zIndex: -1,
    [theme.breakpoints.down('sm')]:{
      display: 'none'
    }
  }
}))

export default function NavLink({ref, icon, text, customClickEvent, className}){
  const [bgColor, setbgColor] = React.useState('white')
  const classes = useStyles();
 return(
   <div ref ={ref} onClick={customClickEvent} className = {className, classes.root} >
      <IconsComponent icon={icon} />
      {text?<div className = {classes.text}>
        {text}
      </div>:''}

   </div>
 ) 
}


