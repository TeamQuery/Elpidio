import React from "react";
import "./Landingpage.css";
import { Card } from 'react-bootstrap';
import { FaUserGraduate } from 'react-icons/fa';
import { SiMaterialdesignicons } from "react-icons/si";
import { BsBuilding, BsClock, BsBook } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";
import 'animate.css';
import ReactStars from 'react-stars'
import rightImage from "../../photos/professional.jpg"
import lefttImage from "../../photos/professional.jpg"
import client from "../../photos/elvis.jpg"
import Footer from "../Footer/footer";
import CountUp from 'react-countup';
import NavbarHome from "../Navbar/NavbarHome";


function Landingpage() {

  return (
    <body>
      {/* HERO SECTION */}


      <div
        id="carousel-example-generic2"
        class="carousel slide carousel-fullscreen carousel-fade"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carousel-example-generic2"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carousel-example-generic2" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic2" data-slide-to="2"></li>
        </ol>

        <div class="carousel-inner" role="listbox">
          <div class="item active  item1">
            <NavbarHome />
            <div class="carousel-caption">
              <h1 class="super-heading  animate__animated animate__zoomIn">Trusted Graphic Solutions</h1>
              <div className="buttonsContainer">
                <button id="aboutButton" className="animate__animated animate__slideInLeft">About</button>
                <button id="galleryButton" className="animate__animated animate__slideInRight">Gallery</button>
              </div>

              <div className="container-fluid thumbnail-container animate__animated animate__slideInLeft">
                <div className="row">
                  <div class="col-xs-6 col-md-4  homethumbnail">
                    <p id="figure"> <CountUp start={0} end={123} duration={3} /></p>
                    <div className="vertical"></div>
                    <div>
                      <p id="description">Students trained</p>
                    </div>
                  </div>
                  <div class="col-xs-6 col-md-4 homethumbnail">
                    <p id="figure"> <CountUp start={0} end={172} duration={3} /></p>
                    <div className="vertical"></div>
                    <div>
                      <p id="description">Projects completed</p>

                    </div>
                  </div>
                  <div class="col-xs-6 col-md-4  homethumbnail">
                    <p id="figure"> <CountUp start={0} end={7} duration={3} /></p>
                    <div className="vertical"></div>
                    <div>
                      <p id="description">In Progress</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>

      {/* CONTENTS */}
      <div className=" welcome">
        <div className="row">
          <h3 id="big-welcome">Welcome To Elpidio Ltd</h3>
          <p id="small-heading">
            We are committed to maximising Productivity &
            Efficiency by delivering uniquely designed Products &
            innovative solutions to both corporate & individual clients.
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <main>
            <div class="card card--light">
              <h3 class="card__title">Basic</h3>
              <h2 class="card__amount card__amount--hidden">&ghc;199.99</h2>
              <h2 class="card__amount ">&ghc;19.99</h2>
              <ul class="card__features">
                <li>Accces to one course</li>
                <li>40% dicount on Projects</li>
              </ul>

            </div>
            <div class="card card--professional">
              <h3 class="card__title">Professional</h3>
              <h2 class="card__amount card__amount--hidden">&ghc;249.99</h2>
              <h2 class="card__amount">&ghc;24.99</h2>
              <ul class="card__features">
                <li>Accces all courses</li>
                <li>One-on-One mentorship</li>
              </ul>

            </div>
            <div class="card card--light">
              <h3 class="card__title">Master</h3>
              <h2 class="card__amount card__amount--hidden">&ghc;399.99</h2>
              <h2 class="card__amount">&ghc;39.99</h2>
              <ul class="card__features">
                <li>Accces all courses</li>
                <li>One-on-One mentorship</li>
                <li>Free startup kits</li>
              </ul>

            </div>
          </main>
        </div>
      </div>


      {/* OUR SERVICES */}
      <div className="container-fluid ourServicesBackground">

        <div className="service">
          <div className="row">
            <h3 id="servic-big-Header">Services</h3>
            <p id="servic-small-Header">
              We offer a complete range of technological solutions to suit companies and and individuals worldwide.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Card className="card">
                <Card.Header><SiMaterialdesignicons style={{ color: '#66FF00', fontSize: '50px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title><h4> Web Design</h4></Card.Title>
                  <Card.Text>
                    Maximizing productivity
                    by delivering uniquely designed web web
                    solutions to both corporate and individual clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card">
                <Card.Header><FiEdit2 style={{ color: '#66FF00', fontSize: '50px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title><h4> UI/UX Design</h4></Card.Title>
                  <Card.Text>
                     prioritising  productivity
                    by delivering uniquely designed user interface
                    to both corporate and individual clients.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card">
                <Card.Header><BsBuilding style={{ color: '#66FF00', fontSize: '50px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title><h4> Web Development </h4></Card.Title>
                  <Card.Text>
                    We are committed to maximizing productivity
                    by delivering  the best websites for our clients
                    
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>




          </div>
        </div>

      </div>


      {/* SUCCESS IN A GLANCE */}
      <div className="container-fluid successBackground">

        <div className="success">
          <div className="row">
            <h3 id="Success-big-Header">Success In A Glance</h3>
            <p id="success-small-Header">
              One of the worlds leading technology training and service providers, Epidio is committed to discovering, developing, and
              delivering innovative technological solutions for people.

            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Card className="successCard">
                <Card.Header><BsBook style={{ color: '#66FF00', fontSize: '70px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title><h2> <CountUp start={0} end={12} duration={3} /> </h2></Card.Title>
                  <Card.Text>
                    Courses Available
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="successCard">
                <Card.Header><FaUserGraduate style={{ color: '#66FF00', fontSize: '70px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title><h2> <CountUp start={0} end={123} duration={3} /></h2></Card.Title>
                  <Card.Text>
                    Students Trained
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="successCard">
                <Card.Header><BsClock style={{ color: '#66FF00', fontSize: '70px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title><h2> <CountUp start={0} end={5} duration={3} /></h2></Card.Title>
                  <Card.Text>
                    Years Of Experience
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

      </div>



      {/* CLIENT FEEDBACK */}
      <div className="container-fluid clientFeedback">

        <div className="feedback">
          <div className="row">
            <h3 id="client-big-Header">Client Feedback</h3>
            <p id="client-small-Header">
              Join thousands of customers who are happy about our services

            </p>
          </div>

          <div className="row"  >
            <div className="col-md-3 col-xs-12 col-sm-12" >
              <img src={rightImage} alt="Elpidio" id="client-right-image" />

            </div>
            <div className="col-md-6 col-xs-12 col-sm-12" style={{ background: "#fff", boxShadow: "0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2" }} >
              <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">

                <ol class="carousel-indicators" style={{ color: '#66FF00', background: "#66FF00" }}>
                  <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                  <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                </ol>


                <div class="carousel-inner" role="listbox">
                  <div class="item active">
                    <Card className="client-card">
                      <div className="row">
                        <div className="col-md-5">
                          <img src={client} alt="Elpidio" id="client-carousel-image" />
                        </div>
                        <div className="col-md-7" >
                          <div className="row">
                            <h4 style={{ color: "#000" }}>Landsend</h4>
                            <div id="ratings"><ReactStars count={5} size={22} color2={'#7CFC00'} edit={true} value={20} /></div>
                          </div>
                          <div className="row">
                            <p style={{ color: "#333333" }}>
                              We have been completely blown away by the results of using our project.
                              . It’s easy to share internally, enabling
                              teams to see live data on their own personal ‘thermometers’ so
                              that they can see the effect they are having and strive to improve even further.
                            </p>
                          </div>
                          <div className="row"><p style={{ color: "lawngreen" }}>CEO Landsend</p></div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div class="item">
                    <Card className="client-card">
                      <div className="row">
                        <div className="col-md-5">
                          <img src={rightImage} alt="Elpidio" id="client-carousel-image" />
                        </div>
                        <div className="col-md-7">
                          <div className="row">
                            <h4 style={{ color: "#000" }}>Vanni</h4>
                            <div id="ratings"><ReactStars count={5} size={22} color2={'#7CFC00'} edit={true} value={20} /></div>
                          </div>
                          <div className="row">
                            <p style={{ color: "#333333" }}>
                              It’s a superb pulse on customer feedback, allowing us to personally thank
                              colleagues who have delivered brilliant service and focus on areas that
                              are not working as they should.
                            </p>
                          </div>
                          <div className="row"><p style={{ color: "lawngreen" }}>CEO Vanni</p></div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>


            <div className="col-md-3 col-xs-12 col-sm-12" >
              <img src={lefttImage} alt="Elpidio" id="client-left-image" />
            </div>

          </div>
        </div>
      </div>


      {/* FOOTER */}

      <Footer />





    </body>
  );
}

export default Landingpage;
