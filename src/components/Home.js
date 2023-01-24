import React from 'react';
import { MusicPlayer } from './MusicPlayer';


import { FaPlay } from 'react-icons/fa';

export const ServiceCard = () => {
  return (
      <div class="service-card">

          <div class = 'service-left'>
              <div class='service-thumbnail'>
              </div>
              
              <div class = 'service-name-and-price'>
              <div class= 'service-name'>
                  This is the song Name
              </div>

              <div class= 'service-price'>
                  Artist Name 
              </div>
              </div>
             

    
          </div>

          <a href="/" target='_blank' class ='service-right'>
              <div class ='service-subscribe-button'>
                  3:42
              </div>
          </a>
      </div>

  )
}
class Home extends React.PureComponent {
  render() {
    return (
      <div class='page'>
        <div class ='home'>
          <div class= 'home-banner'>
            <div class='home-banner-left'>
              <h4 class='home-banner-artist'>
                The Artist
              </h4>
              <h1 class='home-banner-song'>
                This is the song Name
              </h1>
            </div>
            <div id='banner-play-button'><FaPlay/></div>
            
          </div>

          <div class ='home-suggestions'>
            <div class='suggestions-section'>
                <div class = 'section-title'>Popular</div>
                <ServiceCard/>
                <ServiceCard/>
                <ServiceCard/>
              </div>

            <div class='suggestions-section'>
              <div class = 'section-title'>New Songs</div>
              <ServiceCard/>
              <ServiceCard/>
              <ServiceCard/>
            </div>
          </div>
          <MusicPlayer/>

        </div>

      </div>
    )
  }
}

export default Home;