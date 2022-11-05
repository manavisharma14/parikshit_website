import React from 'react'
import { FooterContainer,
  FooterLinksWrapper,
  FooterLinksContainer,
FooterLinkItems,
FooterLinkTitle,
FooterWrap,
FooterLink,
SocialMedia,
SocialMediaWrap, 
FooterMedia,
FooterMediaIcons,

WebsiteRights} from './FooterElements'


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faGithub,
  faGithubSquare,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (

    <FooterContainer id='contact us'>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>Contact Us</FooterLinkTitle>
              
              <FooterLink to ="/about">Shivani S</FooterLink>
              <FooterLink to ="/about">+91 9207744282</FooterLink>
              <FooterLink to ="/about">shivanisreena@gmail.com</FooterLink>
              <FooterLink to ="/about">parikshit.musat@gmail.com</FooterLink>
             
          </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>

          <FooterLinkItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterMediaIcons>
              <a
                href="https://www.instagram.com/parikshitsatellite/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </FooterMediaIcons>

            <FooterMediaIcons>
              <a
                href="https://www.linkedin.com/company/parikshit-student-satellite/mycompany/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </FooterMediaIcons>

            {/* <FooterMediaIcons>
              <a
                href=""
                className="instagram social"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" color="#fff" />
              </a>
            </FooterMediaIcons> */}

            
          </FooterLinkItems>

          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <WebsiteRights> parikshit© All copyrights reserved</WebsiteRights>
         
        
          </SocialMediaWrap>

       
        </SocialMedia>

      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
