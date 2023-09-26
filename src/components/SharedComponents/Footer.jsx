
import { Link } from "react-router-dom";
import logo_light from "/src/assets/logo_light.png";
import "/src/css/footerstyle.css"

export default function Footer() {
  return (
    <>
      <footer id="main-footer" className="py-2">
        <div className="container footer-container">
          <div>
            <img src={logo_light} alt="NewsGrid" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
              deserunt assumenda enim non? Ratione ipsum voluptates fuga eos
              earum vitae.
            </p>
          </div>
          <div>
            <h3>Email Newsletter</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <form>
              <input type="email" placeholder="Enter Email..." />
              <input type="submit" value="Subscribe" className="btn btn-primary" />
            </form>
          </div>
          <div>
            <h3>Site Links</h3>
            <ul className="list">
              <li>
                <Link to="#">Help & Support</Link>
              </li>
              <li>
                <Link to="#">Privacy Policy</Link>
              </li>
              <li>
                <Link to="#">About Us</Link>
              </li>
              <li>
                <Link to="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <h2>Join Our Club</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              nesciunt!
            </p>
            <Link to="#" className="btn btn-secondary">
              Join Now
            </Link>
          </div>
          <div>
            <p>Copyright &copy; 2019, All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </>
  );
}