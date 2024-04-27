import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="first-row">
          <div className="first-column">
            <h3 className="cera-logo">Cera</h3>
            <p className="first-column-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem.
            </p>
          </div>
          <div className="second-column">
            <h4 className="second-column-title">Company</h4>
            <ul>
              <li>
                <Link to="/#about">About</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
              <li>
                <Link to="/#collections">Collections</Link>
              </li>
            </ul>
          </div>
          <div className="third-column">
            <h4 className="third-column-title">Follow us</h4>
            <ul>
              <li>
                <a href="http://www.facebook.com">
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="http://www.instagram.com">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="http://www.twitter.com">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="http://www.tiktok.com">
                  <FaTiktok />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="second-row">
          <p className="second-row-text">© 2024 Cera. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
