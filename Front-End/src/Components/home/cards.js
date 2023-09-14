import React from 'react'
import './cards.css'
import I1 from '../../cartimages/slider1.svg'
import I2 from '../../cartimages/slider2.svg'
import I3 from '../../cartimages/slider3.svg'

const Cards = () => {
  return (
    <div className='ServicesContainer' id='mission-scroll'>
        <div className='ServicesH1'><h1>Our Mission</h1></div>
        <div className='ServicesWrapper'>
            <div className='ServicesCard'>
                <div className='ServicesIcon'>
                  <img className='ServicesIcon' src={I1}/>
                </div>
                <div className='ServicesH2'>Reduce Stress</div>
                {/* <div className='ServicesP'> Reduce Stress  </div> */}
            </div>
            <div className='ServicesCard'>
            <div className='ServicesIcon'>
                  <img className='ServicesIcon' src={I2}/>
                </div>
                <div className='ServicesH2'>Time Saving</div>
                {/* <div className='ServicesP'>Architects and Designer create designs of your choice  </div> */}
            </div>
            <div className='ServicesCard'>
            <div className='ServicesIcon'>
                  <img className='ServicesIcon' src={I3}/>
                </div>
                <div className='ServicesH2'>Reduce Burden</div>
                {/* <div className='ServicesP'>Architects and Designer create designs of your choice  </div> */}
            </div>
        </div>
    </div>
  )
}

export default Cards
