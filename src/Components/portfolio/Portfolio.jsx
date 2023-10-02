import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio-image1.jpg'
import IMG2 from '../../assets/portfolio-image2.jpg'
import IMG3 from '../../assets/portfolio-image3.jpg'
import IMG4 from '../../assets/portfolio-image4.jpg'
import IMG5 from '../../assets/portfolio-image5.jpg'


const data = [{
  id : 1 ,
  image : IMG1,
  title:'DogSitter',
  github: 'https://github.com/Hossein-Kargar/DogSitter-website',
  demo: 'https://alexandre-kargar.github.io/DogSitter-website/dogSitter.html',
},
{
  id : 2 ,
  image : IMG2,
  title:'PartageTransport',
  github: 'https://github.com/Hossein-Kargar/DogSitter-website',
  demo: 'https://partages-transports.com/',
},
{
  id : 3 ,
  image : IMG3,
  title:'Karine Madran artiste',
  github: 'https://github.com/Hossein-Kargar/DogSitter-website',
  demo: 'https://www.karinemadran.com/',
},
{
  id : 4 ,
  image : IMG4,
  title:'Portfolio',
  github: 'https://github.com/Hossein-Kargar/DogSitter-website',
  demo: '#',
},
{
  id : 5 ,
  image : IMG5,
  title:'Amélio Photographe',
  github: 'https://github.com/Hossein-Kargar/DogSitter-website',
  demo: '#',
}
]




function Portfolio() {
  return (
    <section id='portfolio'>
      <h2>Projets réalisés</h2>

      <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'></div>
              <img src={image} alt='DogSitter image'></img>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} target='__blank' className='btn'>Github</a>
                <a href={demo} target='__blank' className='btn btn-primary'>Démo</a>
              </div>
              </article>
            )
          })
            }
          </div> 
    </section >
  )
}

export default Portfolio