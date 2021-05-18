import { Avatar, Box, Button, CircularProgress, Divider, Grid, IconButton, InputBase, makeStyles, styled, SvgIcon, Typography } from '@material-ui/core'
import { blue } from '@material-ui/core/colors';
import React, { useEffect } from 'react'
import { IconsRename } from '../Data/IconsRename';

const useStyle = makeStyles((theme) => ({
    root:{
        '&:focus':{
            border:'none',
            outline:'none'
        }
    }
}))

const TweetIcons = styled(IconButton)({
    width:'37.7px',
    height:'37.7px',
    color:blue[400],
    '&:hover':{
        backgroundColor:blue[50],
    }
})

const TweetButton = styled(Button)({
    width:'40px',
    height:'37.7667',
    paddingLeft:'15px',
    paddingRight:'15px',
    borderRadius:'9999999px',
    fontSize:'15px',
    textTransform:'none',
    fontWeight:'700',
    backgroundColor:blue[500],
    color:'white',

    '&:hover':{
        backgroundColor:blue[500]
    }
})


export default function TweetBox() {
    const ref = React.useRef()
    const [wordCount, setWordCount] = React.useState(0);
    const [button, setButton] = React.useState(false)
    const handleChange = (e) => {
            ref.current = e.nativeEvent.data
            setWordCount(e.target.value.length)
            

    }
    return (
        <Grid container  style={{maxWidth:'500px', paddingTop:'5px'}}>
            <Grid  item style={{paddingLeft: '10px', paddingRight: '10px'}}>
                <Avatar alt='Hey'> H </Avatar>
            </Grid>
            <Grid item xs container direction='column'>
                <Grid item>            
                    <InputBase
                    onChange={handleChange}  
                    multiline 
                    fullWidth={true} 
                    placeholder ={`Whats happening`} 
                    style ={{paddingTop:'12px', paddingBottom:'12px'}}
                    />
                    
                </Grid>
                <Grid item style={{marginLeft:'-10px'}}>
                    <Typography style={{paddingBottom:'12px', color:blue[500]}} variant='caption'>
                        <TweetIcons><SvgIcon>{IconsRename.maps}</SvgIcon></TweetIcons>
                      Everyone can reply
                    </Typography>
                </Grid>
                <Divider />
                <Grid item container wrap='nowrap' alignItems='center' style={{paddingTop:'10px', paddingBottom:'10px'}}>
                    <Grid item>
                        <TweetIcons>
                            <SvgIcon>
                                {IconsRename.image}
                            </SvgIcon>
                        </TweetIcons>
                    </Grid>
                    <Grid item>
                        <TweetIcons>
                            <SvgIcon>
                                {IconsRename.gif}
                            </SvgIcon>
                        </TweetIcons>
                    </Grid>
                    <Grid item>
                        <TweetIcons>
                            <SvgIcon>
                                {IconsRename.bars}
                            </SvgIcon>
                        </TweetIcons>
                    </Grid>
                    <Grid item>
                        <TweetIcons>
                            <SvgIcon>
                                {IconsRename.smile}
                            </SvgIcon>
                        </TweetIcons>
                    </Grid>
                    <Grid item>
                        <TweetIcons>
                            <SvgIcon>
                                {IconsRename.calender}
                            </SvgIcon>
                        </TweetIcons>
                    </Grid>
                    <Grid item container justify='flex-end'>
                        <TweetCounter value={wordCount} input={ref.current} />
                    </Grid>
                    <Divider orientation='vertical' style={{marginLeft:'10px'}} />
                    <Grid item xs container wrap='nowrap' justify='flex-end' alignItems='center'>
                        <Grid item>
                            <TweetIcons> + </TweetIcons>
                        </Grid>
                        <Grid item>
                            <TweetButton disabled = {button}>
                                <Typography variant = 'caption' >Tweet</Typography>
                            </TweetButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export function  TweetCounter ({value, input}){
    const [count, setCount] = React.useState(20);
    const [showCount, setShowCount] = React.useState(false);
    const [progress, setProgress] = React.useState(0);
    const [color, setColor] = React.useState('');
    const [size, setsize] = React.useState(20);
    const percentage = (num) => {
        return (num/280)*100
    }
    useEffect(() => {
        
        if(value < 260){
            setsize(20)
            setCount(21)
            setShowCount(false)
            setProgress(percentage(value))
            setColor('')
        }
        else if(value >= 260 && value < 280){
            setsize(30)
            setShowCount(true)
            setProgress(percentage(value))
            setColor('orange')
            
            if(input){
                setCount(count - 1)
            }
            else{
                setCount(count + 1)
            }
               
                

             
        }
        else if(value >= 280){
            setShowCount(true)
            setProgress(100)
            setColor('red')

            if(input){
                setCount(count - 1)
            }
            else{
                setCount(count + 1)
            }
        }
         
    }, [value])
    return (
        <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={progress}  style={{color: color}} size={size} / >
        <Box

          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {showCount?<Typography variant="caption" component="div" color="textSecondary">{count}</Typography>:''}
        </Box>
      </Box>
    
    )
}