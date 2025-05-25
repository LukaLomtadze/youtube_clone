import React from 'react'
import { Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import {logo} from '../utils/constants'
import SearchBar from './SearchBar'

const NavBar = () => {
  return (
    <Stack direction={"row"}
      alignItems={"center"}
      p={2}
      sx={{position:"sticky" , background: "black", top: 0, justifyContent:"space-between"}}
      >
      <Link to={"/home"} style={{display:"flex", alignItems:"center",}}>
        <img src={logo} alt='logo' height={35} style={{marginLeft: 25}}/>
      </Link>
      <SearchBar />
      </Stack>
  )
}

export default NavBar