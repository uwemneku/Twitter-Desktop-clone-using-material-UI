import { Button, makeStyles, styled, Typography } from '@material-ui/core'
import { blue, red } from '@material-ui/core/colors'
import React, { useRef } from 'react'


const MyFollowButton = styled(Button)({
    height:'38px',
    paddingRight: '15px',
    paddingLeft: '15px',
    borderRadius:'9999px',
    borderStyle: 'solid',
    borderWidth: '1px',
    borderColor: blue[500],
    textTransform: 'none',

    '&:hover':{
        backgroundColor: blue[50],

    }
    
})

const useStyle = makeStyles((theme) => ({
    root:{

    },
    following:{
        backgroundColor: theme.palette.primary.main,
        '&:hover':{
            backgroundColor: red[600],
            borderColor:red[600],
        }
    },
    typography:{
        fontSize:'15px',
        fontWeight:'700',
        color: blue[500],
    }
}))

export default function FollowButton() {
    const classes = useStyle();
    const [status, setStatus] = React.useState('Follow');
    const [textColor, setTextColor] = React.useState('');
    const [style, setStyle] = React.useState('');
    const [visibile, setVisible] = React.useState(true)
    const ref = useRef(null)

    const handleClick = (e) => {
            switch (ref.current.innerText) {
                case 'Follow':
                    setStatus('Following')
                    setStyle(classes.following)
                    setTextColor('white')
                    break;
                case 'Following':
                case 'Unfollow':
                    setVisible(true)
                    setStatus('Follow')
                    setStyle('')
                    setTextColor('')
                    break;
                    
            
                default:
                    break;
            }
    }

    const handleMouseEnter = () => {
        if(ref.current.innerText === 'Following'){

            setVisible(false)
        }
    }
    const handleMouseLeave = () => {
        if(ref.current.innerText === 'Unfollow'){

            setVisible(true)
        }
    }

    return (
        <MyFollowButton disableRipple={true} className={style}  onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <Typography innerRef={ref} className ={classes.typography} variant = 'h6' style={{color:textColor}}>{visibile?status:'Unfollow'}</Typography>
            
        </MyFollowButton>
    )
}
