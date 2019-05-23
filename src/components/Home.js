import React, { Component } from 'react';
import HomeSpecials from './HomeSpecials';
import HomeNews from './HomeNews';
import './Home.css';
import BackgroundSlideshow from 'react-background-slideshow';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from './img/Forest1.png';
import image2 from './img/Forest1.png';
import image3 from './img/Forest1.png';

export default class Home extends Component {

  constructor(props) 
  {
    this.handleOnDragStart = e => e.preventDefault();
  }
      render() {
        return (
          <React.Fragment>
            <div>
              <BackgroundSlideshow images={[image1, image2, image3]} />
            </div>
            <div>
              <AliceCarousel mouseDragEnabled >
                <img src="/Apple-tree.png" onDragStart={handleOnDragStart} className="specials1" />
                <img src="/Mahogany.png" onDragStart={handleOnDragStart} className="specials2" />
              </AliceCarousel>
            </div>

            <header className="App-header"></header>

            <div className="py-5">
              <div className="container">
                <h2 className="text-center"> Home Page</h2>
                <HomeSpecials></HomeSpecials>
                <HomeNews></HomeNews>
              </div>
            </div>
          </React.Fragment>
        );
      }
}