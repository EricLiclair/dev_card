import React from 'react'
import { Chip } from "@mui/material";


export default function StyledChip({ children, ...props }) {
    return (
        <Chip
            {...props}
            sx={{ margin: '2.5px' }}
            size='small'
        />
    )
}
