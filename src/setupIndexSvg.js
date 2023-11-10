import emailSvg from "./svg/email.svg";
import linkedInSvg from "./svg/linkedin.svg";
import instagramSvg from "./svg/instagram.svg";
import aboutmeSvg from "./svg/taco.svg";

export default () => {
    const iconEmailContainer = document.querySelector(
      "#icon-email"
      );
    const linkedInIconContainer = document.querySelector(
      "#icon-linked-in"
      );
    const instagramIconContainer = document.querySelector(
      "#icon-instagram"
      );
    const aboutmeIconContainer = document.querySelector(
      "#icon-taco"
      );

  iconEmailContainer.innerHTML = emailSvg;
  linkedInIconContainer.innerHTML = linkedInSvg;
  instagramIconContainer.innerHTML = instagramSvg;
  aboutmeIconContainer.innerHTML = aboutmeSvg;

};


