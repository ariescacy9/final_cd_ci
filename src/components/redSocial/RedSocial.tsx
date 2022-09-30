import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './RedSocial.css'
import React from 'react'

function RedSocial() {
  return (
    <div className='Principal'>
        <a href="https://api.whatsapp.com/send?phone=972211710" target="_blank" rel="noreferrer">
          <WhatsAppIcon 
            color="success" fontSize="large" sx={{ borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} />
        </a>
        <a href="https://www.facebook.com/cristianalexander.carhuasyuyali/" target="_blank" rel="noreferrer">
          <FacebookIcon
            color="primary" fontSize="large" sx={{ borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} />
        </a>
        <a href="https://www.linkedin.com/in/cristian-alexander-carhuas-yuyale-2a98a522a" target="_blank" rel="noreferrer">
          <LinkedInIcon
            sx={{ color: '#1003AE',borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} fontSize="large"/>
        </a>
        <a href="https://github.com/ariescacy9" target="_blank" rel="noreferrer">
          <GitHubIcon
            sx={{ color: 'white',borderRadius: '8px',
            boxShadow: '0 0 .5rem #1372df '}} fontSize="large"/>
        </a>
      </div>
  )
}

export default RedSocial