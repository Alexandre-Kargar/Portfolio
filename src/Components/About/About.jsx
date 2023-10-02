import React from 'react'
import './about.css'
import Image from '../../assets/Alexandre-image-1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

function About() {
  return (
    <section id='about'>
      <h2>À propos de moi</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-image">
            <img src={Image} alt="About Image" />
          </div>
        </div>

      <div className="about__content">
        <div className="about__cards">

          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>1+ années</small>
          </article>

          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h5>Projets</h5>
            <small>5+ complétés</small>
          </article>
          </div>

          <p>
          Je suis Alexandre, étudiant en baccalauréat en informatique à l’Université du Québec en Outaouais (UQO) à Saint-Jérôme. J’ai participé à plusieurs projets de développement web, couvrant à la fois le back-end et le front-end. Mon parcours universitaire et mes expériences de projet m’ont permis d’acquérir une solide compréhension des technologies web et une passion pour la résolution de problèmes.
          </p>

          <a href='#contact' className='btn btn-primary'>Discutons</a>
        </div>
      </div>
    </section>

  )
}

export default About