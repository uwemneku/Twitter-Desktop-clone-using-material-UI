import { Grid } from '@material-ui/core'
import { MoreHoriz } from '@material-ui/icons'
import React from 'react'
import Profile from './HoverProfile'
import { CommentIcon, LikeIcon, RetweetIcon, ShareIcon } from './ReactionIcons'
import { Name, UserName } from './UserDetails'
import pp from  './pics/pp.png'

export default function Tweet() {
    return (
        <Grid container direction='row' wrap='nowrap' spacing={2} style={{paddingLeft:'16px', paddingRight:'16px', paddingTop:'10px', paddingBottom:'10px', maxWidth:'565px', overflow:'hidden'}}>
            <Grid item>
                <Profile />
            </Grid>

            <Grid item container direction='column'>  
                <Grid item container justify='space-around' wrap='nowrap'>
                    <Grid item container>
                        <Grid item>
                            <Name name ={'Isreat L'} />  
                        </Grid>
                        <Grid item>
                            <UserName userName ={'IsreL'} />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <MoreHoriz />
                    </Grid>
                </Grid>

                <Grid item>
                    ;kkd sdljnfjsnlfs fksnknsflkn djlkfs fjnjlfnjf sfjnjlfnljksf jnsfljlfs lksfklhfs lfsklkjfskl fshioywroijiwr wrpjgpoepew jpwoejopwrj
                </Grid>
                <Grid item  style={{borderRadius:'16px', overflow:'hidden'}} >

                    <Grid item  container spacing={1} wrap='nowrap' style={{maxWidth:'504px', }}>
                        <Grid item>
                            <img width='100%' alt='tktkt' src={pp}  />
                        </Grid>

                    </Grid>
                </Grid>

                <Grid item container justify='space-between' style={{maxWidth:'425px'}} wrap='nowrap'>
                    <Grid item>
                        <CommentIcon />
                    </Grid>
                    <Grid item>
                        <RetweetIcon />
                    </Grid>
                    <Grid item>
                        <LikeIcon />
                    </Grid>
                    <Grid item>
                        <ShareIcon />
                    </Grid>
                </Grid>
            </Grid>                        
                        

        </Grid>
    )
}
