
const Categories = () => {
  return (
    <>
      <aside id="Categories" className="card">
        <h2>Categories</h2>
        <ul className="list">
          <li>
            <a href="#">
              <i className="fas fa-chevron-right"></i> Sports
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chevron-right"></i> Entertainment
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chevron-right"></i> Technology
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chevron-right"></i> Fashion
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-chevron-right"></i> Shopping
            </a>
          </li>
        </ul>
      </aside>

      <aside className="card bg-secondary">
        <h2>Join Our Club</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit, id?
        </p>
        <a href="#" className="btn btn-dark btn-block">
          Join Now
        </a>
      </aside>
    </>
  );
};

export default Categories;