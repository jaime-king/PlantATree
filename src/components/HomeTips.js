import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

export default class HomeTips extends Component {
  render() {
    return (
      <div className="tips text-center mt-5">
        <i className="far fa-lightbulb" />
        <h2 className="text-center">Tips</h2>

        <div className="card p-5">
          <AliceCarousel
            className="carousel"
            //stagePadding="10"
            fadeOutAnimation
            buttonsDisabled
            dotsDisabled
            autoPlay
            autoPlayInterval="5000"
          >
            <div>
              <h2> 1. Examine plants carefully before buying </h2>
              <hr />
              <h6>
                The easiest way to limit disease in your garden is to avoid
                introducing it in the first place. Getting a disease with a new
                plant is not the kind of bonus that any of us wants. One of the
                hardest things to learn is what a healthy plant should look
                like, making it difficult to know if the one you want is sick.
              </h6>
            </div>

            <div>
              <h2> 2. Use fully composted yard waste </h2>
              <hr />
              <h6>
                Not all materials in a compost pile decompose at the same rate.
                Some materials may have degraded sufficiently to be put in the
                garden, while others have not. Thorough composting generates
                high temperatures for extended lengths of time, which actually
                kill any pathogens in the material. Infected plant debris that
                has not undergone this process will reintroduce potential
                diseases into your garden.
              </h6>
            </div>
            <div>
              <h2> 3. Keep an eye on your bugs</h2>
              <hr />
              <h6>
                Insect damage to plants is much more than cos­metic. Viruses and
                bacteria often can only enter a plant through some sort of
                opening, and bug damage provides that. Some insects actually act
                as a transport for viruses, spreading them from one plant to the
                next. Aphids are one of the most common carriers, and thrips
                spread impatiens necrotic spot virus, which has become a serious
                problem for commercial producers over the past 10 years.
              </h6>
            </div>
            <div>
              <h2> 4. Clean up in the fall</h2>
              <hr />
              <h6>
                It is always best to clean out the garden in the fall, even if
                you live in a moderate climate. This is not only an effective
                deterrent to disease but also a good way to control diseases
                already in your garden.
              </h6>
            </div>
            <div>
              <h2> SOURCE OF ALL TIPS </h2>
              <hr />
              <h4 className="text-capitalize">
                <a href="https://www.finegardening.com/article/10-ways-to-keep-your-garden-healthy">
                  {" "}
                  FINE GARDINING WEBSITE
                </a>
              </h4>
            </div>
          </AliceCarousel>
        </div>
      </div>
    );
  }
}
