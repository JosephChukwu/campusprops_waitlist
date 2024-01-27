import React from 'react'
import homeBG from '../assests/images/homeBG.png'
import { FiArrowDown } from 'react-icons/fi';
import checkkk from '../assests/images/checkkk.png'

const Home = () => {

  return (
    <div className='home-container' >
            <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
           <img src={homeBG} alt="homeBG loading" />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
              Are you a Student of UNEC ?            
          </h1>
            <p className='primary-text'>
                Looking for an Apartment that matches your description
                <br /> Or are you an Agent seeking to reach out to your Target Audience <br /> Search No More...
            </p>
            <button className='secondary-button'>
              Join Waitlist Below <FiArrowDown/>
            </button>
          </div>
          <div className="home-image-section">
          <img src={checkkk} alt="checkkk" />
        </div>
        </div>
    </div>
  )
}

export default Home