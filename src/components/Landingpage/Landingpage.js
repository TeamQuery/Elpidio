import React from "react";
import "./Landingpage.css";
import { Card } from 'react-bootstrap';
import { FaAngleRight, FaDolly, FaHouseUser  } from 'react-icons/fa';
import 'animate.css';
import ReactStars from 'react-stars'
import rightImage from "../../photos/background1.jpg"
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
              <h1 class="super-heading  animate__animated animate__zoomIn">Bootstrap Carousel Guide</h1>
              <div className="buttons">
                <button id="aboutButton" className="animate__animated animate__slideInLeft">About</button>
                <button id="galleryButton" className="animate__animated animate__slideInRight">Gallery</button>
              </div>

              <div className="container-fluid thumbnail-container animate__animated animate__slideInLeft">
                <div className="row">
                  <div class="col-xs-6 col-md-4  homethumbnail">
                    <p id="figure"> <CountUp   start={0} end={123} duration={3}/></p>
                    <div className="vertical"></div>
                    <div>
                      <p id="description"> simply dummy text</p>
                      <p id="goto">Lern More <FaAngleRight /></p>
                    </div>
                  </div>
                  <div class="col-xs-6 col-md-4 homethumbnail">
                    <p id="figure"> <CountUp   start={0} end={472} duration={3}/></p>
                    <div className="vertical"></div>
                    <div>
                      <p id="description"> simply dummy text</p>
                      <p id="goto">Lern More</p>
                    </div>
                  </div>
                  <div class="col-xs-6 col-md-4  homethumbnail">
                    <p id="figure"> <CountUp   start={0} end={7} duration={3}/></p>
                    <div className="vertical"></div>
                    <div>
                      <p id="description"> simply dummy text</p>
                      <p id="goto">Lern More </p>
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
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsumhas been the industry's
            standard
          </p>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <main>
            <div class="card card--light">
              <h3 class="card__title">Basic</h3>
              <h2 class="card__amount card__amount--hidden">&dollar;199.99</h2>
              <h2 class="card__amount ">&dollar;19.99</h2>
              <ul class="card__features">
                <li>500 GB Storage</li>
                <li>2 Users Allowed</li>
                <li>Send up to 3 GB</li>
              </ul>
              <button  class="card__button">Learn More</button>
            </div>
            <div class="card card--professional">
              <h3 class="card__title">Professional</h3>
              <h2 class="card__amount card__amount--hidden">&dollar;249.99</h2>
              <h2 class="card__amount">&dollar;24.99</h2>
              <ul class="card__features">
                <li>1 TB Storage</li>
                <li>5 Users Allowed</li>
                <li>Send up to 10 GB</li>
              </ul>
              <button  class="card__button card__button--professional">Learn More</button>
            </div>
            <div class="card card--light">
              <h3 class="card__title">Master</h3>
              <h2 class="card__amount card__amount--hidden">&dollar;399.99</h2>
              <h2 class="card__amount">&dollar;39.99</h2>
              <ul class="card__features">
                <li>2 TB Storage</li>
                <li>10 Users Allowed</li>
                <li>Send up to 20 GB</li>
              </ul>
              <button class="card__button">Learn More</button>
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
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsumhas been the industry's
              standard
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Card className="card">
                <Card.Header><FaDolly style={{ color: '#66FF00', fontSize: '50px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title> Card Title </Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsumhas been the industry's
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card">
                <Card.Header><FaDolly style={{ color: '#66FF00', fontSize: '50px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title> Card Title </Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsumhas been the industry's
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card">
                <Card.Header><FaDolly style={{ color: '#66FF00', fontSize: '50px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title> Card Title </Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsumhas been the industry's
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Card className="card">
                <Card.Header><FaHouseUser style={{ color: '#66FF00', fontSize: '50px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title> Card Title </Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsumhas been the industry's
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card">
                <Card.Header><FaHouseUser style={{ color: '#66FF00', fontSize: '50px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsumhas been the industry's
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="card">
                <Card.Header><FaHouseUser style={{ color: '#66FF00', fontSize: '50px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title> Card Title </Card.Title>
                  <Card.Text>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsumhas been the industry's
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
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsumhas been the industry's
              standard
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <Card className="successCard">
                <Card.Header><FaDolly style={{ color: '#66FF00', fontSize: '70px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title><h2> <CountUp   start={0} end={223} duration={3}/> </h2></Card.Title>
                  <Card.Text>
                    complete project
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="successCard">
                <Card.Header><FaDolly style={{ color: '#66FF00', fontSize: '70px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title><h2> <CountUp   start={0} end={223} duration={3}/></h2></Card.Title>
                  <Card.Text>
                    complete project
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card className="successCard">
                <Card.Header><FaDolly style={{ color: '#66FF00', fontSize: '70px' }} /></Card.Header>
                <Card.Body>
                  <Card.Title><h2> <CountUp   start={0} end={223} duration={3}/></h2></Card.Title>
                  <Card.Text>
                    complete project
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

      </div>



      {/* CLIENT FEEDBACK */}
       <div className=" clientFeedback">

        <div className="feedback">
          <div className="row">
            <h3 id="client-big-Header">Client Feedback</h3>
            <p id="client-small-Header">
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsumhas been the industry's
              standard
            </p>
          </div>

          <div className="row"  >
            <div className="col-md-3 col-xs-12 col-sm-12" >
              <img src={rightImage} alt="Elpidio" id="client-right-image"  />

            </div>
            <div className="col-md-6 col-xs-12 col-sm-12"  >
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
                          <img src={rightImage} alt="Elpidio"  id="client-carousel-image" />
                        </div>
                        <div className="col-md-7">
                          <div className="row">
                            <h4 style={{ color: "#000" }}>Name of person</h4>
                            <div id="ratings"><ReactStars count={5} size={22} color2={'#7CFC00'} edit={true} value={20} /></div>
                          </div>
                          <div className="row">
                            <p style={{ color: "#333333" }}>
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsumhas been the industry's
                            </p>
                          </div>
                          <div className="row"><p style={{ color: "lawngreen" }}>CEO Elpidio</p></div>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div class="item">
                  <Card className="client-card">
                      <div className="row">
                        <div className="col-md-5">
                          <img src={rightImage} alt="Elpidio"  id="client-carousel-image" />
                        </div>
                        <div className="col-md-7">
                          <div className="row">
                            <h4 style={{ color: "#000" }}>Name of person</h4>
                            <div id="ratings"><ReactStars count={5} size={22} color2={'#7CFC00'} edit={true} value={20} /></div>
                          </div>
                          <div className="row">
                            <p style={{ color: "#333333" }}>
                              Lorem Ipsum is simply dummy text of the printing and
                              typesetting industry. Lorem Ipsumhas been the industry's
                            </p>
                          </div>
                          <div className="row"><p style={{ color: "lawngreen" }}>CEO Elpidio</p></div>
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>


            <div  className="col-md-3 col-xs-12 col-sm-12" >
              <img src={rightImage} alt="Elpidio" id="client-left-image"  />
            </div>

          </div>
        </div>
      </div> 


    {/* FOOTER */}

 <Footer/> 





    </body>
  );
}

export default Landingpage;
