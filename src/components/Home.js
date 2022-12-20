import React from 'react';
import { MusicPlayer } from './MusicPlayer';

export const ServiceCard = () => {
  return (
      <div class="service-card">

          <div class = 'service-left'>
              <div class='service-thumbnail'>
              </div>
              
              <div class = 'service-name-and-price'>
              <div class= 'service-name'>
                  Netflix
              </div>

              <div class= 'service-price'>
                  $9/month
              </div>
              </div>
             

    
          </div>

          <a href="/" target='_blank' class ='service-right'>
              <div class ='service-subscribe-button'>
                  Subscribe
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
          <input class='search-input' type='text' placeholder='Search Your Song ...' />
          <div class= 'home-banner'>
            HOME BANNER HERE
            
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
                  
        </div>
       
      </div>
    )
  }
}

export default Home;