import React from 'react'
import { Stack, Box } from '@mui/material'
import VideoCard from "./VideoCard"
import ChannelCard from './ChannelCard'

const Videos = ({ videos }) => {

  return (
    <Stack direction={"row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
        {
            videos.map((item, indx) => (
                <Box key={indx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channel={item} />}
                </Box>
            ))
        }
    </Stack>
  )
}

export default Videos