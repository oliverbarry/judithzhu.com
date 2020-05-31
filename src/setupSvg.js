import emailSvg from "./svg/email.svg";
import linkedInSvg from "./svg/linkedin.svg";
import instagramSvg from "./svg/instagram.svg";


export default () => {
  const codingBlogIconContainer = document.querySelector("#icon-blog-code");
  const exploringBlogIconContainer = document.querySelector(
    "#icon-blog-exploring"
  );

  const instagramIconContainer = document.querySelector("#icon-instagram");

  codingBlogIconContainer.innerHTML = emailSvg;
  exploringBlogIconContainer.innerHTML = linkedInSvg;
  instagramIconContainer.innerHTML = instagramSvg;

};


