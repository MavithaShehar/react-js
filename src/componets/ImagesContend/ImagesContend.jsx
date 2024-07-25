import React from 'react'
import './ImagesContend.css'
import LogoImage from '../../assets/react.svg'


function ImagesContend(){
  return (
    <div  className='imgcontent'>

      <div><img src="vite.svg" alt="Vite Logo" /></div>
      <div><img src={LogoImage} alt="React Logo" /></div>

    </div>
  )
}
export default ImagesContend;
