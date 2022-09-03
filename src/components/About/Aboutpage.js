import React from "react";
import { FaPhoneAlt, FaMailBulk } from 'react-icons/fa';
// import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./About.css";
import ReactStars from 'react-stars'
import rightImage from "../../photos/background3.jpg"
import Services from "../../photos/services.png"
import Footer from "../Footer/footer";
import 'animate.css';
import NavbarHome from "../Navbar/NavbarHome";
 

function Aboutpage() {
 
  return (
    <>
      <div className="container-fluid About">
        <NavbarHome />
        <h1 className="About_big_heading animate__animated animate__slideInUp">About Us</h1>
        <div className="container About_small_navs">
          <p className="animate__animated animate__slideInUp"> <Link to="/" style={{ color: '#fff', marginLeft: '10px' }}>Home .</Link></p>
          <p className="animate__animated animate__slideInUp"> <Link to="/About" style={{ color: 'lawngreen', marginLeft: '10px' }}>About</Link></p>
        </div>
      </div>


      <div className="container-fluid  welcome">
        <div className=" ">
          <div className="col-md-6">
            <h3 style={{ color: '#333333', fontWeight: '500', fontSize: '16px', textTransform: 'uppercase', }}>
              Welcome to Elpidio LTD
            </h3>
            <h2 className="bigHeading">The best <span style={{ color: "lawngreen" }}> reliable solution</span> for all you tech needs</h2>
            <p className="deatails">
              Rorem Ipsum is simply dummy text of the printin and type setting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown
            </p>
            <p className="deatails">
              Rorem Ipsum is simply dummy text of the printin and type setting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown
            </p>

            <div className="row">
              <div className="col-md-6 col-xs-12">
                <div className="phone"><FaPhoneAlt /></div>
                <div className="contacts">
                  <p>Phone :</p>
                  <p>+233 555078657</p>
                </div>
              </div>
              <div className="col-md-6 col-xs-12">
                <div className="mail"><FaMailBulk /></div>
                <div className="contacts">
                  <p>Email :</p>
                  <p>appiagyeialfred815@gmail.com</p>
                </div>
              </div>
            </div>

          </div>
          <div className="col-md-6" style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={Services} alt="Elpidio" style={{width:'100%', height:'auto'}} />
          </div>
        </div>
      </div>


{/* WHY CHOOSE US */}
      <div className="row why_shoose_us">
        <div className="col-md-6" style={{ minHeight: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={rightImage} alt="Elpidio" />
        </div>
        <div className="col-md-6">
          <h3 style={{ color: '#333333', fontWeight: '500', fontSize: '16px', textTransform: 'uppercase', }}>
            Why choose us
          </h3>
          <h2 className="bigHeading"><span style={{ color: "lawngreen" }}>We ensure the quality</span>of your dream work</h2>
          <p className="deatails">
            Rorem Ipsum is simply dummy text of the printin and type setting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown
          </p>
          <p className="deatails">
            Rorem Ipsum is simply dummy text of the printin and type setting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown
          </p>

          <div className="row">
            <div className="phone"><FaPhoneAlt /></div>
            <div className="contacts">
              <p>Phone :</p>
              <p>+233 555078657</p>
              <p style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', margin: '-40px 0px 0px 400px' }} className="signature">
                signature
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className=" stepper">
        <h3 style={{
          color: '#333333', fontWeight: '500', fontSize: '16px', marginBottom: '30px',
          textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'
        }}>
          How we work
        </h3>
        <h3 style={{
          color: '#333333', fontWeight: '700', fontSize: '36px', marginBottom: '30px',
          display: 'flex', textTransform: 'uppercase', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'
        }} className="howdoweworkforyou">
          How Do We Work For You
        </h3>

        <div class="stepper-wrapper" >
          <div class="stepper-item completed">
            <div class="step-counter">1</div>
            <div class="step-name">Planning and research</div>
            <p>
              Drinter took a galley of type and scrambled it to make a type specimenbook.
            </p>
          </div>
          <div class="stepper-item completed">
            <div class="step-counter">2</div>
            <div class="step-name">Ideas & Design</div>
            <p>
              Drinter took a galley of type  and scrambled it to make a type specimenbook.
            </p>
          </div>
          <div class="stepper-item  completed">
            <div class="step-counter">3</div>
            <div class="step-name">Prototype project</div>
            <p>
              Drinter took a galley of type and scrambled it to make a type specimenbook.
            </p>
          </div>
          <div class="stepper-item  completed">
            <div class="step-counter">4</div>
            <div class="step-name">Final output</div>
            <p style={{ color: '#2C3333' }}>
              Drinter took a galley of type and scrambled it to make a type specimenbook.
            </p>
          </div>
        </div>
      </div>







      {/* TESTIMONIALS */}

      <div className="testimonials">
        <h3 style={{
          color: '#333333', fontWeight: '500', fontSize: '16px',
          textTransform: 'uppercase', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'
        }} className="testimonial-heading">
          testimonial
        </h3>
        <h3 style={{
          color: '#333333', fontWeight: '700', fontSize: '36px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'sans-serif'
        }}  className="heading">
          Client Feedback
        </h3>


        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <ol class="carousel-indicators">
            <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
            <li data-target="#carousel-example-generic" data-slide-to="1"></li>
            <li data-target="#carousel-example-generic" data-slide-to="2"></li>
          </ol>

          {/* <!-- Wrapper for slides --> */}
          <div class="carousel-inner" role="listbox">
            <div class="item active row">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="row testimonialCard">
                  <div className="profile">
                    <img src={rightImage} alt="Elpidio" style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '20px 20px auto 0px' }} />
                    <div>
                      <h4>Elpidio Tosu</h4>
                      <div id="ratings"><ReactStars count={5} size={22} color2={'#7CFC00'} edit={true} value={20} /></div>
                    </div>
                  </div>
                  <p style={{ margin: '20px 0px 10px 0px', fontSize: '17px' }}>
                    Rorem Ipsum is simply dummy text of the printin and type setting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown
                  </p>
                  <p style={{ color: 'lawngreen', fontSize: '16px', fontWeight: 'bold' }}>CEO Elpidio</p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="row testimonialCard">
                  <div className="profile">
                    <img src={rightImage} alt="Elpidio" style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '20px 20px auto 0px' }} />
                    <div>
                      <h4>Elpidio Tosu</h4>
                      <div id="ratings"><ReactStars count={5} size={22} color2={'#7CFC00'} edit={true} value={20} /></div>
                    </div>
                  </div>
                  <p style={{ margin: '20px 0px 10px 0px', fontSize: '17px' }}>
                    Rorem Ipsum is simply dummy text of the printin and type setting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown
                  </p>
                  <p style={{ color: 'lawngreen', fontSize: '16px', fontWeight: 'bold' }}>CEO Elpidio</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="row testimonialCard">
                  <div className="profile">
                    <img src={rightImage} alt="Elpidio" style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '20px 20px auto 0px' }} />
                    <div>
                      <h4>Elpidio Tosu</h4>
                      <div id="ratings"><ReactStars count={5} size={22} color2={'#7CFC00'} edit={true} value={20} /></div>
                    </div>
                  </div>
                  <p style={{ margin: '20px 0px 10px 0px', fontSize: '17px' }}>
                    Rorem Ipsum is simply dummy text of the printin and type setting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown
                  </p>
                  <p style={{ color: 'lawngreen', fontSize: '16px', fontWeight: 'bold' }}>CEO Elpidio</p>
                </div>
              </div>

              <div className="col-md-6 col-sm-12 col-xs-12">
                <div className="row testimonialCard">
                  <div className="profile">
                    <img src={rightImage} alt="Elpidio" style={{ width: '60px', height: '60px', borderRadius: '50%', margin: '20px 20px auto 0px' }} />
                    <div>
                      <h4>Elpidio Tosu</h4>
                      <div id="ratings"><ReactStars count={5} size={22} color2={'#7CFC00'} edit={true} value={20} /></div>
                    </div>
                  </div>
                  <p style={{ margin: '20px 0px 10px 0px', fontSize: '17px' }}>
                    Rorem Ipsum is simply dummy text of the printin and type setting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown
                  </p>
                  <p style={{ color: 'lawngreen', fontSize: '16px', fontWeight: 'bold' }}>CEO Elpidio</p>
                </div>
              </div>
            </div>

          </div>


        </div>
      </div>


      <Footer />
    </>
  );
}

export default Aboutpage;
