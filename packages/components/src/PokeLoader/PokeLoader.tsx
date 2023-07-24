import React from 'react'
import { Box } from '@mui/material'
import { styles } from './PokeLoader.styles'

export default function PokeLoader() {
  return (
    <Box sx={{position:"relative",bottom:"0%"}}>
    <Box sx={styles.root}>
        <Box sx={styles.pokeball} data-testid="pokeball">
            <Box sx={styles.pokeballButton}/>
        </Box>
    </Box>
    </Box>
  )
}
