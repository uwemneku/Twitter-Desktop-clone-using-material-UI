import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles(()=>({
    root:{
        fontSize:'15px',
        fontWeight:'700',
        cursor:'pointer',
        '&:hover':{
            textDecoration: 'underline'
            
        }
    },

    userName:{
        fontSize:'15px', 
        fontWeight:'300', 
        color:'GrayText'
    }
}))

export  function Name({name}) {
    return (
        <div>
            <span className={useStyle().root}>{name}</span>
        </div>
    )
}
export  function UserName({userName}) {
    return (
        <div className={useStyle().userName}>
            <span>@</span>
            <span >{userName}</span>
        </div>
    )
}
