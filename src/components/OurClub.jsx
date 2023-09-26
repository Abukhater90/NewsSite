import { Link } from "react-router-dom";

const OurClub = () => {
  return (
    <>
      <aside className="card bg-primary">
        <h2>Join Our Club</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, id?
        </p>
        <Link to="#" className="btn btn-dark btn-block">
          Join Now
        </Link>
      </aside>
    </>
  );
};

export default OurClub;