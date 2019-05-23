import React, { Component } from 'react';
import HomeSpecials from './HomeSpecials';
import HomeNews from './HomeNews';
import './Home.css';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/Forest1.jpg';
import image2 from './img/Apple-tree.png';
import image3 from './img/Forest1.jpg';

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
              <div className="container">
                <div>
                  <AliceCarousel className="carousel" stagePadding='10' fadeOutAnimation buttonsDisabled dotsDisabled autoPlay autoPlayInterval='3000' >
                    <img src={image1} onDragStart={console.log('Hi Reub')} className="specials2" />
                    <img src={image2} onDragStart={console.log('Hi Reub')} className="specials1" />
                    <img src={image3} onDragStart={console.log('Hi Reub')} className="specials1" />
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