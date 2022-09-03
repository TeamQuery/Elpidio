import React from "react";
import "./Projectdetails.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt,} from 'react-icons/fa';
import Footer from "../Footer/footer";
import Details from "../../photos/details.png"
import rightImage from "../../photos/background2.jpg"
import NavbarHome from "../Navbar/NavbarHome";
 

export default function Projectdetails() {
 
  return (
    <>
      <div className="container-fluid Details">
         <NavbarHome />
        <h1 className="Details_big_heading animate__animated animate__backInLeft">Project Details</h1>
        <div className="container Details_small_navs">
          <p className="animate__animated animate__slideInUp"> <Link to="/" style={{ color: '#fff', marginLeft: '10px' }}>Home .</Link></p>
          <p className="animate__animated animate__slideInUp"> <Link to="/Details" style={{ color: 'lawngreen', marginLeft: '10px' }}>Single Project</Link></p>
        </div>
      </div>
      {/* ------------------------------------------------------ */}

      <div className="container content">
        <div className="row">
          <div className="col-md-5">
            <img src={Details} alt="Elpidio" style={{ width: '100%', height: 'auto' }} />
          </div>
          <div className="col-md-7">
            <img src={rightImage} alt="Elpidio" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
            <div style={{padding:'50px 0px'}}>

            <h3 style={{color:'lawngreen', fontWeight:'600', fontSize:'36px', margin:'20px 0px'}} >Project Informations</h3>

            <p style={{color:'#676E7C', fontFamily:'sans-serif', fontSize:'16px'}}>
              Rorem Ipsum is simply dummy text of the printin and type setting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown
            </p>
            <p style={{color:'#676E7C', fontFamily:'sans-serif', fontSize:'16px'}}>
              Rorem Ipsum is simply dummy text of the printin and type setting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown
            </p>
            </div>
            {/* --------------------------------------------------- */}

            <div className="Requirement">
              <div className="row">
                <div className="col-md-6">
                  <div className="icons"><FaPhoneAlt /></div>
                  <div className="credentials">
                    <p>Client</p>
                    <p>Client Name</p>
                    <div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icons"><FaPhoneAlt /></div>
                  <div className="credentials">
                    <p>Project</p>
                    <p>Project Name</p>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="icons"><FaPhoneAlt /></div>
                  <div className="credentials">
                    <p>Dateline</p>
                    <p>Date</p>
                    <div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="icons"><FaPhoneAlt /></div>
                  <div className="credentials">
                    <p>Location</p>
                    <p>Location</p>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ----------------------------------------- */}


            <div style={{padding:'50px 0px'}}>
              <div className="row" style={{ margin:'10px 0px' }}>
                <div className="col-md-6">
                  <img src={rightImage} alt="Elpidio" style={{ width: '100%', height: 'auto',borderRadius:'10px' }} />
                </div>
                <div className="col-md-6">
                  <img src={rightImage} alt="Elpidio" style={{ width: '100%', height: 'auto',borderRadius:'10px' }} />
                </div>
              </div>
              <div className="row" style={{ margin:'10px 0px' }}>
                <div className="col-md-6">
                  <img src={rightImage} alt="Elpidio" style={{ width: '100%', height: 'auto',borderRadius:'10px' }} />
                </div>
                <div className="col-md-6">
                  <img src={rightImage} alt="Elpidio" style={{ width: '100%', height: 'auto',borderRadius:'10px' }} />
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------------- */}

            <div style={{padding:'50px 0px',}}>
              <div className="row">
                <div className="correct"><FaPhoneAlt /></div>
                <div className="aims">
                  <p  style={{  color:'#000',fontSize:'20px', fontFamily:'sans-serif', fontWeight:'bold'}}>Knowledge & Experience</p>
                  <p style={{color:'#676E7C', fontFamily:'sans-serif', fontSize:'15px'}}>Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry's standard.</p>
                  <div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="correct"><FaPhoneAlt /></div>
                <div className="aims">
                  <p  style={{  color:'#000',fontSize:'20px', fontFamily:'sans-serif', fontWeight:'bold'}}>Customer Focused</p>
                  <p style={{color:'#676E7C', fontFamily:'sans-serif', fontSize:'15px'}}>Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry's standard.</p>
                  <div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="correct"><FaPhoneAlt /></div>
                <div className="aims">
                  <p style={{  color:'#000',fontSize:'20px', fontFamily:'sans-serif', fontWeight:'bold'}}>Quality Sub-trades</p>
                  <p style={{color:'#676E7C', fontFamily:'sans-serif', fontSize:'15px'}}>Porem Ipsum is simply dummy text of the printing and typesetting industry. Rosh has been the industry's standard.</p>
                  <div>
                  </div>
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
