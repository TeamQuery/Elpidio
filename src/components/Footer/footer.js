import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";


 import { FaTwitter, FaFacebookF, FaGithub, FaYoutube } from 'react-icons/fa';
// import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="container-fluid footer">
            <footer class="footer">
                <div class="container bottom_border">
                    <div class="row">
                        <div class=" col-sm-4 col-md col-sm-4  col-12 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Find us</h5>
                            {/* <!--headin5_amrc--> */}
                            <p><i class="fa fa-location-arrow"></i> Legon Campus </p>
                            <p><i class="fa fa-phone"></i> +233 559022803</p>
                          

                        </div>


                        <div class=" col-sm-4 col-md  col-6 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
                            {/* <!--headin5_amrc--> */}
                            <ul class="footer_ul_amrc">
                                <li><a href="http://webenlance.com">Link</a></li>
                                <li><a href="http://webenlance.com">Link</a></li>
                               
                            </ul>
                            {/* <!--footer_ul_amrc ends here--> */}
                        </div>


                        <div class=" col-sm-4 col-md  col-6 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
                            {/* <!--headin5_amrc--> */}
                            <ul class="footer_ul_amrc">
                                <li><a href="http://webenlance.com">Link</a></li>
                                <li><a href="http://webenlance.com">Link</a></li>
                                 
                            </ul>
                            {/* <!--footer_ul_amrc ends here--> */}
                        </div>


                        
                    </div>
                </div>


                <div class="container">
                    <ul class="foote_bottom_ul_amrc">
                       <Link to="/"><li><a href="http://webenlance.com">Home</a></li></Link> 
                      <Link to="/About"><li><a href="http://webenlance.com">About</a></li></Link>  
                      <Link to="/Projects"> <li><a href="http://webenlance.com">Projects</a></li></Link> 
                      <Link to="/Contacts"> <li><a href="http://webenlance.com">Contacts</a></li></Link> 
                      
                    </ul>
                    {/* <!--foote_bottom_ul_amrc ends here--> */}
                    <p class="text-center">Copyright @2022 | Designed by <a href="http://webenlance.com">Elpidio Limited</a></p>

                    <ul class="social_footer_ul">
                        <li><a href="http://webenlance.com"><FaFacebookF /></a></li>
                        <li><a href="https://twitter.com/publicpersona3"><FaTwitter/></a></li>
                        <li><a href="https://github.com/RackspaceRhys/PublicPersonal"><FaGithub/></a></li>
                        <li><a href="http://webenlance.com"><FaYoutube/></a></li>
                    </ul>
                    {/* <!--social_footer_ul ends here--> */}
                </div>

            </footer>
        </div>



    );
}
