import React, { useState,} from "react";
import "./ProjectsPage.css";
import { Link } from "react-router-dom";
import 'animate.css';
import Footer from "../Footer/footer";
// import rightImage from "../../photos/background3.jpg";
import SecondBookList from "../Dashboard/SecondBookList";
import NavbarHome from "../Navbar/NavbarHome";


function ProjectsPage() {
  const [ setBookId] = useState("");

  const getBookIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setBookId(id);
  };
  return (
    <>
      <div className="Project_gallery">
          <NavbarHome /> 
        <h1 className="Projects_big_heading animate__animated animate__flipInX">Projects Gallery</h1>
        <div className="container Projects_small_navs">
          <p className="animate__animated animate__zoomIn"> <Link to="/" style={{ color: '#fff', marginLeft: '10px' }}>Home .</Link></p>
          <p className="animate__animated animate__zoomIn"> <Link to="/Projects" style={{ color: 'lawngreen', marginLeft: '10px' }}>Portfolio</Link></p>
        </div>
      </div>

      <div className="container-fluid">       
               <SecondBookList getBookId={getBookIdHandler} /> 
      </div>

{/* FOOTER */}
<Footer/>

    </>
  );
}

export default ProjectsPage;
