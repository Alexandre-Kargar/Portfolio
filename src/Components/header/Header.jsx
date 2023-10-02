import React from 'react'
import './header.css'
import CTA from './CTA'
import Image from '../../assets/Alexandre-image.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <header>
        <div className='container header__container'>
          <div className='texte-header'>
            <h4>Bonjour! Je m'appelle</h4>
            <h1>Alexandre</h1>
            <h4 className='text-light'>Étudiant passionné en informatique</h4>
            <CTA />
            </div>
      
            <HeaderSocials />

            <div className='me'>
                <img src={Image} alt='me' />
            </div>

            <a href='Formulaire' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header