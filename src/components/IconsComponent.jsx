import { Box, makeStyles, SvgIcon } from '@material-ui/core'
import React from 'react'


const useStyles = makeStyles((theme) => ({
    icon:{
      display:'flex',
      justifyContent:'space-around',
      alignItems: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '20px',
      fontSize:'27px'
    }
  }))
  
export default function IconsComponent({icon, fontSize= '30px', className}) {
  const classes = useStyles();
    return (

    <Box className = {classes.icon}>
        <SvgIcon style={{fontSize:fontSize}} >
          {icon}
        </SvgIcon>
    </Box>
    )
}
