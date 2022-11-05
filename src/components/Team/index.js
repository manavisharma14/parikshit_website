import React from "react";

import Icon1 from "../../images/akash.jpg";
import Icon2 from "../../images/abhishek.jpg";
import Icon3 from "../../images/chinmay.jpg";
import Icon4 from "../../images/eeshan.jpg";

import Icon5 from "../../images/shivani.jpg";
import Icon6 from "../../images/shubhakriti.jpg";
import Icon7 from "../../images/tanushka.jpg";

import Icon8 from "../../images/aprajita.jpg";
import Icon9 from "../../images/aarushi.jpg";
import Icon10 from "../../images/abhinavp.jpg";
import Icon11 from "../../images/manavi.jpg";
import Icon12 from "../../images/nidhi.jpg";
import Icon13 from "../../images/ojas.jpg";
import Icon14 from "../../images/sanjana.jpg";
import Icon15 from "../../images/shishir.jpg";

import Icon16 from "../../images/manas.jpg";
import Icon17 from "../../images/abhinavk.jpg";

import Icon18 from "../../images/abhay.jpg";
import Icon19 from "../../images/achintya.jpg";
import Icon20 from "../../images/arnav.jpg";
import Icon21 from "../../images/riya.jpg";
import Icon22 from "../../images/manav.jpg";
import Icon23 from "../../images/vedika.jpg";
import Icon24 from "../../images/yash.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGithubSquare,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import {
  TeamContainer,
  TeamWrapper,
  TeamH1,
  TeamCard,
  TeamIcon,
  TeamH2,
  TeamP,
  TeamH3,
  SocialMedia,
  SocialMediaIcons,
} from "./TeamElements";

const Subsystem = () => {
  return (
    <TeamContainer id="team">
      <TeamH1>Meet our Team</TeamH1>
      <TeamWrapper>
        <TeamCard>
          <TeamIcon src={Icon1} />
          <TeamH2>Akash Kumar Singh</TeamH2>
          <TeamP>Advisory Board </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/a_k.singh/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.youtube.com/c/manavi"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon2} />
          <TeamH2>Abhishek Avadhanam</TeamH2>
          <TeamP>Advisory Board </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/nerdtodend/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/abhishek-avadhanam-b25511193/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon3} />
          <TeamH2>Chinmay Marathey</TeamH2>
          <TeamP>Advisory Board </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/marathey__/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/chinmay-marathey-5653991a4/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon4} />
          <TeamH2>Eeshan Kedar Ganla</TeamH2>
          <TeamP>Advisory Board </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/eeshan_ganla/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/eeshan-ganla-658b281bb/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon5} />
          <TeamH2>Shivani S</TeamH2>
          <TeamP>Team Leader </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/shivani_7s/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a href="" className="instagram social">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon6} />
          <TeamH2>Shubhakriti Gupta</TeamH2>
          <TeamP>Systems Engineer </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/shubhakriti/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/shubhakriti-gupta-b13915204/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon7} />
          <TeamH2>Tanushka Tarun Choudhary</TeamH2>
          <TeamP>Systems Engineer</TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/tanushkachoudhary/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/tanushkachoudhary10/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon8} />
          <TeamH2>Aprajita Singh</TeamH2>
          <TeamP>Payload Research and Development Engineer </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a href="" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a href="" className="instagram social">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon9} />
          <TeamH2>Aarushi Dhanuka</TeamH2>
          <TeamP>Payload Research and Development Engineer </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/aarushi_dhanuka_/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a href="" className="instagram social">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon10} />
          <TeamH2>Abhinav Putrevu</TeamH2>
          <TeamP>Electronic System Design Engineer</TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/abhinav-kumar-9639b4143/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.youtube.com/c/manavi"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon11} />
          <TeamH2>Manavi Sharma</TeamH2>
          <TeamP>Embedded Driver Design Engineer </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/_manavisharma_/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/g-manas-31b90b204/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon12} />
          <TeamH2>Nidhi Anand Kulkarni</TeamH2>
          <TeamP>Testing and Performance Assurance Engineer </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/nidhikulkarni26/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/nidhi-kulkarni-545104205/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon13} />
          <TeamH2>Ojas Ashwini Ravindra</TeamH2>
          <TeamP>Mission Operation and Flight Software Engineer</TeamP>
          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/_ojas___/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/ojas-ashwini-ravindra-9145751b7/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon14} />
          <TeamH2>Sanjana Ganesh Nayak</TeamH2>
          <TeamP>Embedded System Design Engineer </TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a href="" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/sanjana___borkar/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon15} />
          <TeamH2>Shishir Sen</TeamH2>
          <TeamP>Applications and Public Relations Head</TeamP>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/shishirrr/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a href="" className="instagram social">
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon17} />
          <TeamH2>Abhinav Kumar</TeamH2>
          <TeamP> Senior Team Member</TeamP>
          <TeamH3>COMMS</TeamH3>
          

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/__g.manas__/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/g-manas-31b90b204/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon16} />
          <TeamH2>Manas G</TeamH2>
          <TeamP> Senior Team Member </TeamP>
          <TeamH3>ODHS</TeamH3>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/__g.manas__/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/g-manas-31b90b204/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon18} />
          <TeamH2>Abhay Sharma</TeamH2>
          <TeamP>Team Member </TeamP>
          <TeamH3>COMMS</TeamH3>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/__g.manas__/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/g-manas-31b90b204/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon19} />
          <TeamH2>Achintya Jain</TeamH2>
          <TeamP>Team Member </TeamP>
          <TeamH3>ADCS </TeamH3>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/achi_401/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/achintya-jain-4b27a01a4/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon20} />
          <TeamH2>Arnav Marwaha</TeamH2>
          <TeamP>Team Member </TeamP>
          <TeamH3>STMS </TeamH3>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/marwaharnav/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/arnav-marwaha-a7487a219"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon21} />
          <TeamH2>Madhuriya Rudra</TeamH2>
          <TeamP>Team Member </TeamP>
          <TeamH3>Payload </TeamH3>

          <SocialMedia>
            <SocialMediaIcons>
              <a href="/" className="instagram social">
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/madhuria-rudra-43b146237"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon22} />
          <TeamH2>Manav Sharma</TeamH2>
          <TeamP>Team Member </TeamP>
          <TeamH3>ODHS </TeamH3>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/__manavsharma/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/manav-sharma-612752236/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon23} />
          <TeamH2>Vedika Bengani</TeamH2>
          <TeamP>Team Member </TeamP>
          <TeamH3>ODHS </TeamH3>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/vedikabengani_05/?next=%2F"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/vedika-bengani-831b29237/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>

        <TeamCard>
          <TeamIcon src={Icon24} />
          <TeamH2>Yash </TeamH2>
          <TeamP>Team Member </TeamP>
          <TeamH3>Payload </TeamH3>

          <SocialMedia>
            <SocialMediaIcons>
              <a
                href="https://www.instagram.com/yash_srivastava2107/"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>

            <SocialMediaIcons>
              <a
                href="https://www.linkedin.com/in/yash-srivastava-18b880240"
                className="instagram social"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2x" color="#fff" />
              </a>
            </SocialMediaIcons>
          </SocialMedia>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
};

export default Subsystem;
