import { IconButton, styled } from '@material-ui/core'
import React from 'react'
import { blue } from '@material-ui/core/colors';

const MyIcon = styled(IconButton)({
    width: '46px',
    height:'46px',
    '&:hover':{
        backgroundColor: blue[50]
    },

})


export default function CustomIcon({icon}) {
    return (
        <div>
            <MyIcon  size='small'>{icon}</MyIcon>
        </div>
    )
}


