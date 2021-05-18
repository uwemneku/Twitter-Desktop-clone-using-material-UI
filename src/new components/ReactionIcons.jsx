import { ClickAwayListener, Hidden, IconButton, MenuItem, Paper, Popper, Slide, styled, SvgIcon } from '@material-ui/core'
import { blue, green, red } from '@material-ui/core/colors'
import React from 'react'
import { IconsRename } from '../Data/IconsRename'



const Icon = styled(IconButton)({
    width:'34.75px', 
    height:'34.75px',
})
const Comment = styled(Icon)({
    '&:hover':{
        backgroundColor:blue[50],
        color:blue[400]
    }
})
const Share = styled(Comment)({})
const Retweet = styled(Comment)({
    '&:hover':{
        backgroundColor:green[50],
        color:green[400]
    }
})
const Like = styled(Comment)({
    '&:hover':{
        backgroundColor:red[50],
        color:red[400]
    }
})



export default function reactionIcons() {
    return (
        <div>
            
        </div>
    )
}



export function LikeIcon() {
     const [isLiked, setIsLiked] = React.useState(false)
     const [color, setColor] = React.useState()
     const [count, setcount] = React.useState(1223)
     const ref = React.useRef();
     const handleClick = () => {
         setIsLiked(!isLiked)
         
         if (color === 'red'){
            setColor('')
            setcount(count - 1)
         }
         else{
             setColor('red')
             setcount(count + 1)
         }
     }
     return (
        <div style={{overflow:'hidden', display:'flex', alignItems:'center'}}>
            <Like onClick={handleClick}>
                <SvgIcon style={{color:color}} fontSize='small'>
                    {isLiked?IconsRename.liked:IconsRename.like}
                </SvgIcon>
            </Like>
                <span ref={ref} style ={{fontSize:'13px', fontWeight:'300', color:color, display:'block'}}>{count}</span>
        </div>
    )
}
export function CommentIcon() {
     const [isCliked, setIsCliked] = React.useState(false)
     const [color, setColor] = React.useState(blue[500])
     const handleClick = () => {
         setIsCliked(!isCliked)
     }
     return (
        <div style={{display:'flex', alignItems:'center'}}>
            <Comment onClick={handleClick}>
                <SvgIcon fontSize='small' style={{color:isCliked?color:''}}>
                    {IconsRename.comment}
                </SvgIcon>
            </Comment>
            <span style ={{fontSize:'13px', fontWeight:'300', color:isCliked?color:''}}>12</span>
        </div>
    )
}
export function RetweetIcon() {
     const [open, setOpen] = React.useState(false)
     const ref = React.useRef(null);
     const [color, setColor] = React.useState()
     const [menuText, setMenuText] = React.useState('Retweet');
     const [count, setcount] = React.useState(1223)
     const popperControl = () =>{ setOpen(!open)}
     
     const handleClick = () => {
        if (color === green[400]){
            setColor('');
            setcount(count - 1);
            popperControl();
            setMenuText('Retweet');
        }else{
            
            setColor(green[400])
            setcount(count + 1)
            popperControl();
            setMenuText('Undo Retweet');
         }
         
     }
     return (
        <div style={{display:'flex', alignItems:'center'}}>
            <Retweet onClick={popperControl} innerRef={ref}>
                <SvgIcon style={{color:color}} fontSize='small'>
                    {IconsRename.retweet}
                </SvgIcon>
            </Retweet>
            <span style ={{fontSize:'13px', fontWeight:'300', color:color}}>{count}</span>
            <Popper
                anchorEl={ref.current}
                open={open}
                placement = 'bottom'
                
                
            >
                <ClickAwayListener onClickAway={popperControl}>

                    <Paper style={{color:'GrayText'}}>
                        <MenuItem onClick = {handleClick}>
                            <SvgIcon fontSize='small' style={{marginRight:'10px'}}>{IconsRename.retweet}</SvgIcon>
                            <span>
                                {menuText}
                            </span>
                        </MenuItem>
                        <MenuItem>
                            <SvgIcon fontSize='small' style={{marginRight:'10px'}}>{IconsRename.quote}</SvgIcon>
                            <span>Quote</span>
                        </MenuItem>
                    </Paper>
                </ClickAwayListener>
            </Popper>
        </div>
    )
}
export function ShareIcon() {
     const [open, setOpen] = React.useState(false)
     const ref = React.useRef(null);
     const popperControl = () =>{ setOpen(!open)}
     
     
     return (
        <div>
            <Share onClick={popperControl} innerRef={ref}>
                <SvgIcon  fontSize='small'>
                    {IconsRename.share}
                </SvgIcon>
            </Share>
            <Popper
                anchorEl={ref.current}
                open={open}
                placement = 'bottom'
                
                
            >
                <ClickAwayListener onClickAway={popperControl}>

                    <Paper >
                        <MenuItem onClick = {popperControl}>
                            <SvgIcon fontSize='small' style={{marginRight:'10px'}}>{IconsRename.message}</SvgIcon>
                            <span>Send Via Direct Message</span>
                        </MenuItem>
                        <MenuItem onClick = {popperControl} >
                            <SvgIcon color='disabled' fontSize='small' style={{marginRight:'10px'}}>{IconsRename.bookmark}</SvgIcon>
                            <span>Add Tweet to Bookmarks</span>
                        </MenuItem >
                        <MenuItem onClick = {popperControl}>
                            <SvgIcon fontSize='small' style={{marginRight:'10px'}}>{IconsRename.link}</SvgIcon>
                            <span>Copy link to Tweet</span>
                        </MenuItem>
                    </Paper>
                </ClickAwayListener>
            </Popper>
        </div>
    )
}
