import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

class HomeNews extends Component {
  constructor() {
    super();
    this.state = {
      specials: [],
      response: ""
    };
  }

  render() {
    return (
      <div className="news text-center">
        <i className="fas fa-newspaper" />
        <h2 className="text-center">News</h2>

        <div className="card p-5">
          <AliceCarousel
            className="carousel"
            stagePadding="10"
            fadeOutAnimation
            buttonsDisabled
            dotsDisabled
            autoPlay
            autoPlayInterval="3000"
          >
            <div>
              {" "}
              <h3>
                Resilience of Yellowstone's forests tested by unprecedented fire
              </h3>
              <hr />
              Researchers describe what happens when Yellowstone adapted
              <br />
              to recurring fires every 100 to 300 years instead burns twice in
              fewer
              <br />
              than 30 years.Yellowstone as we know it faces an uncertain future,
              <br />
              the researchers say, and one of the big questions they hope to
              answer
              <br />
              is whether the forests can recover.
            </div>
            <div>
              {" "}
              <h3>
                Fate of legacy oak trees in Keirunga Gardens divides Havelock
                North residents
              </h3>
              <hr />
              Plans to fire up chainsaws in a legacy woodland within the leafy
              Hawke's Bay settlement of Havelock North has hewn a divide into
              the community. George Nelson planted mainly oaks trees in the 8ha
              section of Keirunga Gardens, and in 1961 gifted the land to the
              community. Now Hastings District Council proposes removing dozens
              of large trees after some fell near a path and neighbours
              complained of shade and encroachment.
              <small className="source text-capitalize text-dark">
                Source:{" "}
                <a href="https://www.nzherald.co.nz/nz/news/article.cfm?c_id=1&objectid=12205440">
                  {" "}
                  nzherald
                </a>
              </small>
            </div>
          </AliceCarousel>
        </div>
      </div>
    );
  }
}

export default HomeNews;
