import React, { useRef } from 'react';
import "./Contactspage.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaMailBulk, FaLocationArrow } from 'react-icons/fa';
import Footer from "../Footer/footer";
import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";
import NavbarHome from '../Navbar/NavbarHome';
 
 


function Contactspage() {
  
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  
  const form = useRef();

  const sendEmail = (e) => {
    return new Promise(resolve => {
      emailjs.sendForm('service_ncxcl3u', 'template_cvf7g5j', form.current, 'KwjJzA93tkjc7M3tg')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setTimeout(() => {
          resolve();
      }, 2000);

      return false;
  });
       
  };

  return (
    <>
      <div className="container-fluid Contacts">
      <NavbarHome />
        <h1 className="Contacts_big_heading">Get in Touch</h1>
        <div className="container Contacts_small_navs">
          <p className=""> <Link to="/" style={{ color: '#fff', marginLeft: '10px' }}>Home .</Link></p>
          <p className=""> <Link to="/Projects" style={{ color: 'lawngreen', marginLeft: '10px' }}>Portfolio</Link></p>
        </div>
      </div>

      <div className="container Contacts_details">
        <div className="col-md-6 col-sm-12 col-xs-12">
          <h3>Reaquest A quote</h3>
          <p>Lorem ipsum dolor sit amet, consectetu</p>


          <form  ref={form} onSubmit={handleSubmit(sendEmail)}>
            <div className="row" style={{ display: 'flex', justifyContent:'space-evenly' }}>
              <input type="text" id="fname"  name="user_name" placeholder="Your name.." style={{ marginRight:'10px' }}/>
              <input type="text" id="lname"  name="user_email" placeholder="Your email.." />
            </div>

            <div className="row" style={{ display: 'flex', justifyContent: 'space-between' }}>
              <input type="text" id="location" name="location" placeholder="Your location.." style={{ marginRight:'10px' }} />
            </div>

            <div className="row">
              <textarea id="subject" name="message" placeholder="Write something.." ></textarea>
            </div>

            <div className="row" style={{display:"flex"}}>
                  <button disabled={isSubmitting} className="btn btn-primary  mailbutton"   type="submit" value="Send" style={{ float: 'right' }}>
                        {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                        Submit
                    </button>
              
             
             
            </div>

          </form>
        </div>


        <div className="col-md-6 col-sm-12 col-xs-12   contactSecondColumn" style={{padding:'0px 150px'}}>
          <h3>Reaquest A quote</h3>
          <p>Lorem ipsum dolor sit amet, consectetu</p>
          
          <div className="row">
             <div className="phone"><FaPhoneAlt /></div>
              <div className="contacts_lines">
                <p>Phone :</p>
                <p>+233 555078657</p>
                <p>+233 555078657</p>
              </div>
          </div>
          <div className="row">
             <div className="phone"><FaMailBulk /></div>
              <div className="contacts_lines">
                <p>Mail :</p>
                <p>Epidio@gmail.com</p>
                <p>Epidio@gmail.com</p>
              </div>
          </div>
          <div className="row">
             <div className="phone"><FaLocationArrow /></div>
              <div className="contacts_lines">
                <p>Location :</p>
                <p>Legon Campus</p>
                <p>Legon Campus</p>
              </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
<Footer/>

    </>
  );
}

export default Contactspage;
