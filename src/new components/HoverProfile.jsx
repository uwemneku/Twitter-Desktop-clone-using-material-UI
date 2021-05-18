import { Avatar, Fade, Grid, makeStyles, Paper, Popper, styled } from '@material-ui/core'
import { AvatarGroup } from '@material-ui/lab';
import React from 'react'
import FollowButton from './FollowButton';
import { Name, UserName } from './UserDetails';



export default function Profile(){
    const [open, setOpen] = React.useState(false)
    const ref = React.useRef();
    const showHoverProfile = () => {setOpen(true)}
    const hideHoverProfile = () => {setOpen(false)}
    return( 
        <>
        <Avatar onMouseEnter={showHoverProfile}  onMouseLeave={hideHoverProfile} innerRef = {ref} style={{width:'48px', height:'48px'}}>sdd</Avatar>

        <Popper
            open={open}
            anchorEl={ref.current}
            onMouseEnter ={showHoverProfile}
            onMouseLeave={hideHoverProfile}
            transition
        >
           {({TransitionProps}) => (
               <Fade {...TransitionProps} timeout={175}>
                   <HoverProfile />
               </Fade>
           )}

                
           
        </Popper>
        </>
    )
}

const useStyle = makeStyles((theme) => ({
    root:{
        width:'268px',
        padding: '16px',
        paddingBottom:'50px',
        borderRadius: '16px',
        marginTop:'10px',

    }
}))

const TinyAvatar = styled(Avatar)({
    width:'20px',
    height:'20px',
})

function HoverProfile() {
    const classes = useStyle();
    return (
        <Paper className = {classes.root} elevation={2}>
            <Grid container direction='column'>

                <Grid item container justify='space-between'>
                    <Grid item>
                        <Avatar style={{width:'64px', height:'64px'}}>HH</Avatar>
                    </Grid>
                    <Grid item>
                        <FollowButton />
                    </Grid>
                </Grid>

                <Grid item container direction='column'>
                    <Grid item>
                        <Name name = {'Izzy D BOY'} />
                    </Grid>
                    <Grid item>
                        <UserName userName ={'izzydboy'} />
                    </Grid>
                </Grid>

                <Grid item style={{paddingTop:'5px', paddingBottom:'5px'}}>
                    <span style = {{fontSize:'15px'}}>
                        Lorem is the best way to be happy so you do not know how to be happy about the way we go about things
                    </span>
                </Grid>

                <Grid item container > 
                    <Grid item style={{marginRight:'15px'}}>
                        <span style={{fontWeight:'700', fontSize:'15px'}} >1245</span>
                        <span>  </span>
                        <span  style ={{fontSize:'15px', fontWeight:'300', color:'GrayText'}}>Following</span>
                    </Grid>
                    <Grid item>
                        <span style={{fontWeight:'700', fontSize:'15px'}} >1245</span>
                        <span>  </span>
                        <span  style ={{fontSize:'15px', fontWeight:'300', color:'GrayText'}}>Followers</span>
                    </Grid>
                </Grid>



                {/* Fininsh when lab is installed */}
                <Grid item container style={{marginTop:'10px'}}>
                    <Grid item>
                        <AvatarGroup >
                            <TinyAvatar>sd</TinyAvatar>
                            <TinyAvatar>sd</TinyAvatar>
                        </AvatarGroup>
                    </Grid>
                    <Grid item>
                        <span style ={{fontSize:'15px', fontWeight:'300', color:'GrayText'}}>Follwed by Izzy uwem juyd</span>
                    </Grid>
                </Grid>
            </Grid>
        </Paper>
    )
}



