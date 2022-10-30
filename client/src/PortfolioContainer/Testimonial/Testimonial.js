import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Testimonial(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const options ={
        loop: true, 
        margin: 0,
        nav: true,
        animateIn: "bounceInRight",
        animateOut: "bounceOutRight",
        dots: true, 
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items: 1,
            },
            768:{
                items: 1,
            },
            1000:{
                items: 3,
            },
        }
    }

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What people say about my work"}
      />
      <section className="testimonial-section" id={props.id || ""}></section>
      <div className="container">
        <div className="row">
          <OwlCarousel className="owl-carousel" id="testimonial-carousel" 
          {...options}>

            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                        <i className="fa fa-quote-left"/>
                    This will be a testimonial. Anything can be written
                    here
                    <i className="fa fa-quote-right"/>
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star-half-alt"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                    <img 
                    src="img/256-512.webp"
                    alt="No internet connection."
                    ></img>
                    <h5>Name</h5>
                    <p>Position</p>
                </div>
              </div>
            </div>

            
            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                        <i className="fa fa-quote-left"/>
                    This will be a testimonial. Anything can be written
                    here
                    <i className="fa fa-quote-right"/>
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star-half-alt"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                    <img 
                    src="img/256-512.webp"
                    alt="No internet connection."
                    ></img>
                    <h5>Name</h5>
                    <p>Position</p>
                </div>
              </div>
            </div>


            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                        <i className="fa fa-quote-left"/>
                    This will be a testimonial. Anything can be written
                    here
                    <i className="fa fa-quote-right"/>
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star-half-alt"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                    <img 
                    src="img/256-512.webp"
                    alt="No internet connection."
                    ></img>
                    <h5>Name</h5>
                    <p>Position</p>
                </div>
              </div>
            </div>


            <div className="col-lg-12">
              <div className="testi-item">
                <div className="testi-comment">
                  <p>
                        <i className="fa fa-quote-left"/>
                    This will be the a testimonial. Anything can be written
                    here
                    <i className="fa fa-quote-right"/>
                  </p>
                  <ul className="stars list-unstyled">
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                    <li>
                        <i className="fa fa-star-half-alt"/>
                    </li>
                    <li>
                        <i className="fa fa-star"/>
                    </li>
                  </ul>
                </div>
                <div className="client-info">
                    <img 
                    src="img/256-512.webp"
                    alt="No internet connection."
                    ></img>
                    <h5>Name</h5>
                    <p>Position</p>
                </div>
              </div>
            </div>



          </OwlCarousel>
        </div>
      </div>
    </div>
  );
}
