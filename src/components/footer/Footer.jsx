import React from "react";
import { Link } from "react-router-dom";
import {FaLinkedinIn} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <div className="infoText">
                    Made with <span className = "heart">{'\u2665'} </span> <br/> Prashant Shukla <br/>   Contact no. 7800736965
                </div>

                <div className="socialIcons">
                <Link
                 to = "https://www.linkedin.com/in/prashant-shukla-1117031b1/" target="_blank">
                    <span className="icon">
                        <FaLinkedinIn />
                    </span>
                    </Link>   
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
