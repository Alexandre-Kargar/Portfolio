import React from 'react'
import CV from '../../assets/CV-Alexendre-Kargar.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download className='btn'>Télécharger CV</a>
      <a href='#contact' className='btn btn-primary'>Discutons</a>
    </div>
  )
}

export default CTA