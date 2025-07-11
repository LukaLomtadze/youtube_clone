import { Stack } from '@mui/material'
import React from 'react'
import { categories } from '../utils/constants'

const SideBar = ({selectedCategory, setSelectedCategory}) => {


  return (
    <Stack direction={"row"} sx={{overflowY : "auto",mt:{sx: 0, md: "5px"} ,height: {sx : "auto", md: "94%"}, flexDirection: {md : "column",}}} >
        {categories.map((category) => (
            <button className='category-btn' style={{
                background : category.name === selectedCategory && "#FC1503", color: "white"
            }}
            key={category.name} 
                onClick={() => setSelectedCategory(category.name)}
            >
                <span 
                    style={{color : category.name === selectedCategory ? "white" : "red", marginRight: "15px"}}
                >{category.icon}</span>
                <span style={{opacity:category.name === selectedCategory ? "1" : "0.8"}}>{category.name}</span>
            </button>            
        ))}
    </Stack>
  )
}

export default SideBar