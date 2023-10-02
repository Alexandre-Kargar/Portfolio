import React from 'react'
import './header.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/alexandre-kargar-092206122/' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/Hossein-Kargar?tab=repositories' target='_blank'><BsGithub /></a>


    </div>
  )
}

export default HeaderSocials