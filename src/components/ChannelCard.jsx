import React from 'react'
import { CardMedia, CardContent, Typography, Box} from '@mui/material'
import { Check, CheckCircle } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { demoChannelTitle, demoProfilePicture } from '../utils/constants'

const ChannelCard = ({channelDetail}) => {

    const channelId = channelDetail?.id?.channelId || channelDetail?.id;
  return (
    <Box
        sx={{
            boxShadow:"none",
            borderRadius: "20px",
            display:"flex"
            ,
            justifyContent:"center",
            alignItems:"center",
            width: {xs : "356px", md:"320px"},
            height: "326px",
            margin: "auto",
        }}
    >
        <Link to={`/channel/${channelId}`}>
            <CardContent sx={{display:"flex", flexDirection: "column", justifyContent: "center", textAlign:"center", color:"#fff"}}>
            <CardMedia
                component="img"
                image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                alt={channelDetail?.snippet?.title}
                sx={{borderRadius: "50%", height:"180px" , width:"180px", mb: 2, border: "1px solid #e3e3e3"}}
            />
                <Typography variant='h6'>
                    {channelDetail?.snippet?.title || demoChannelTitle}
                    <CheckCircle sx={{fontSize: 14, color: "blue", ml: "5px"}} />
                </Typography>
                {channelDetail?.statistics?.subscriberCount && (
                    <Typography>
                        {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subscribers
                    </Typography>
                )}
            </CardContent>
        </Link>
    </Box>
  )
}

export default ChannelCard