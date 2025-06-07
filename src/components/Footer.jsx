import "../styles/Footer.css";
import facebookIcon from "../assets/facrbook-logo.svg";
import linkedICon from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.svg";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-text-container">
          <ul>
            <li>Name : Michał</li>
            <li>Surname : Rutkowski</li>
            <li>Country : Poland</li>
            <li>City : Świnoujście</li>
            <li>Age : 35</li>
            <li>Language : Polish / English</li>
          </ul>
        </div>
        <div className="foter-img-container">
          <a href="https://www.facebook.com/profile.php?id=100001560446086&locale=pl_PL">
            <img src={facebookIcon}></img>
          </a>
          <a href="https://github.com/MichalR90">
            <img src={githubLogo}></img>
          </a>
          <a href="https://www.linkedin.com/in/micha%C5%82-rutkowski-463198369/">
            <img src={linkedICon}></img>
          </a>
        </div>
      </div>
    </>
  );
}
export default Footer;
