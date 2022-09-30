import React from 'react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function ShowBox(){
  return( 
    <div>
    <div style={{
      width: '98vw',
      height: '100%',
      borderRadius: '10px',
      margin:'0',
      padding: '0'
    }}>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 6,
          width: "100%",
          height: 600,
        },
        margin:'0',
      padding: '0'
      }}
    >
    <Paper elevation={20}>
      <iframe src="https://react-callback-one.vercel.app/" title='Hola' width='100%' height='100%'>
      </iframe>
    </Paper>
    </Box>
    <Link to='./..'><Button variant="contained" style={{
        margin: '20px'
      }}>ATRAS</Button></Link>
    </div>
    </div>
  );
}

export default ShowBox;
