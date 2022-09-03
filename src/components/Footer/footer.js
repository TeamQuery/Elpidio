import React from "react";
import "./footer.css";

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
                            <p class="mb10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            <p><i class="fa fa-location-arrow"></i> 9878/25 sec 9 rohini 35 </p>
                            <p><i class="fa fa-phone"></i> +233 555088657 </p>
                            <p><i class="fa fa fa-envelope"></i> info@example.com  </p>


                        </div>


                        <div class=" col-sm-4 col-md  col-6 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Quick links</h5>
                            {/* <!--headin5_amrc--> */}
                            <ul class="footer_ul_amrc">
                                <li><a href="http://webenlance.com">Link</a></li>
                                <li><a href="http://webenlance.com">Link</a></li>
                                <li><a href="http://webenlance.com">Link</a></li>
                                <li><a href="http://webenlance.com">Link</a></li>
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
                                <li><a href="http://webenlance.com">Link</a></li>
                                <li><a href="http://webenlance.com">Link</a></li>
                                <li><a href="http://webenlance.com">Link</a></li>
                                <li><a href="http://webenlance.com">Link</a></li>
                            </ul>
                            {/* <!--footer_ul_amrc ends here--> */}
                        </div>


                        <div class=" col-sm-4 col-md  col-12 col">
                            <h5 class="headin5_amrc col_white_amrc pt2">Follow us</h5>
                            {/* <!--headin5_amrc ends here--> */}

                            <ul class="footer_ul2_amrc">
                                <li><a href="http://webenlance.com"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="http://webenlance.com">https://www.lipsum.com/</a></p></li>
                                <li><a href="http://webenlance.com"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="http://webenlance.com">https://www.lipsum.com/</a></p></li>
                                <li><a href="http://webenlance.com"><i class="fab fa-twitter fleft padding-right"></i> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="http://webenlance.com">https://www.lipsum.com/</a></p></li>
                            </ul>
                            {/* <!--footer_ul2_amrc ends here--> */}
                        </div>
                    </div>
                </div>


                <div class="container">
                    <ul class="foote_bottom_ul_amrc">
                        <li><a href="http://webenlance.com">Home</a></li>
                        <li><a href="http://webenlance.com">About</a></li>
                        <li><a href="http://webenlance.com">Services</a></li>
                        <li><a href="http://webenlance.com">Pricing</a></li>
                        <li><a href="http://webenlance.com">Blog</a></li>
                        <li><a href="http://webenlance.com">Contact</a></li>
                    </ul>
                    {/* <!--foote_bottom_ul_amrc ends here--> */}
                    <p class="text-center">Copyright @2022 | Designed With by <a href="http://webenlance.com">Elpidio Limited</a></p>

                    <ul class="social_footer_ul">
                        <li><a href="http://webenlance.com"><FaFacebookF /></a></li>
                        <li><a href="http://webenlance.com"><FaTwitter/></a></li>
                        <li><a href="http://webenlance.com"><FaGithub/></a></li>
                        <li><a href="http://webenlance.com"><FaYoutube/></a></li>
                    </ul>
                    {/* <!--social_footer_ul ends here--> */}
                </div>

            </footer>
        </div>



    );
}
