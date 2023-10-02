import React from 'react'
import './footer.css'
import {BiLogoLinkedinSquare} from 'react-icons/bi'
import {BsGithub} from 'react-icons/bs'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'

function footer() {
  return (
    <footer id='footer'>
      <a href="#" className='footer__logo'>Alexandre Kargar</a>

      <ul className='permalinks'>
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#experience">Expériences</a></li>
        <li><a href="#services">Projets réalisés</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/alexandre-kargar-092206122/" target='_blank'><BiLogoLinkedinSquare/></a>
        <a href="https://github.com/Hossein-Kargar?tab=repositories" target='_blank'><BsGithub/></a>
      </div>

      <div className='footer__copyright'>
        <small><AiOutlineCopyrightCircle/>All rights reserved.</small>
      </div>
    </footer >
  )
}

export default footer
