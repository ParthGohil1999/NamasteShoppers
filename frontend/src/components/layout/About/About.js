import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GitHubIcon from '@mui/icons-material/GitHub';
const About = () => {
  const visitInstagram = () => {
    window.open('https://myportfolio-website-e249f.web.app/','_blank');
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Me</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/namasteshoppers/image/upload/v1641139237/avatars/yfrkuwt1vxi7xidilbcl.jpg"
              alt="Founder"
            />
            <Typography>Parth Gohil</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit My Portfolio
            </Button>
            <span>
              This is a e-Commerce webApp made by @ParthGohil.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Connect</Typography>
            <a
              href="https://github.com/ParthGohil1999"
              target="blank"
            >
              <GitHubIcon className="youtubeSvgIcon" />
            </a>

            <a href="mailto:parth.gohil19@gmail.com" target="blank">
              <AlternateEmailIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
