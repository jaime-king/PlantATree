import React, { Component } from 'react';
import HomeSpecials from './HomeSpecials';
import HomeNews from './HomeNews';
import './Home.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../img/oak-tree1.png';
import image2 from '../img/Willow-tree.png';

export default class Home extends Component {

  constructor(props) 
  {
    super();
  }
      render() {
        return (
          <React.Fragment>
            {/* <header className="App-header"></header> */}

          
            <div className="py-5">
            <h2 className='title'>Today's Specials<br/></h2>
              <div className="container">
                <div>
                  <AliceCarousel className="carousel" stagePadding='10' fadeOutAnimation buttonsDisabled dotsDisabled autoPlay autoPlayInterval='3000' >
                    <img src={image1} onDragStart={console.log('Hi Reub')} className="specials2" />
                    <img src={image2} onDragStart={console.log('Hi Reub')} className="specials1" />

                  </AliceCarousel>
                </div>
                
                <HomeSpecials></HomeSpecials>
                <HomeNews></HomeNews>
              </div>
            </div>
          </React.Fragment>
        );
      }

}