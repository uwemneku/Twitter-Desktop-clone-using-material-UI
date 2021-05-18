import { Hidden, makeStyles, SvgIcon, Typography } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { Twitter } from '@material-ui/icons'
import React from 'react'
import {IconsRename} from '../Data/IconsRename'
import '@fontsource/roboto'

const useStyle = makeStyles((theme) => ({
    root:{
        display: 'flex',
        alignItems:'center',
        justifyContent:'space-around',
        height:'26.25px',
        width:'fit-content',
        borderRadius: '9999px',
        padding: '12px',
        cursor: 'pointer',

       '&:hover':{
           backgroundColor:blue[50],
           color:theme.palette.primary.main,
        },
        '& span':{
            paddingLeft:'20px',
            paddingRight:'20px',
        },
        [theme.breakpoints.down('md')]:{
            width: '26.25px'
        }
    },

    clicked:{
        color: theme.palette.primary.main
    }
}))

export default function CustomNavLink({isActive, icon, text, onClick}) {
    const classes = useStyle()
    
    return (
        <div className = {`${classes.root} ${isActive?classes.clicked:''}`} onClick={onClick}>
            {icon}
            <Hidden mdDown>
                <Typography component = 'span' style={{ fontSize:'19px', fontWeight:'700'}}>{text}</Typography>
            </Hidden>
        </div>
    )
}
