import { Link } from "react-router-dom";
import "../css/showcasestyle.css";
const Showcase = () => {
  return (
    <>
      <header id="showcase">
        <div className="container">
          <div className="showcase-container">
            <div className="showcase-content">
              <div className="category category-sports">Sports</div>
              <h1>Some Sports Article</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Possimus rerum officia quibusdam mollitia deserunt animi soluta
                laudantium. Quam sapiente a dolorum magnam necessitatibus quis
                tempore facere totam. Dolor, sequi distinctio!
              </p>
              <Link to="artpage" className="btn btn-primary">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Showcase;