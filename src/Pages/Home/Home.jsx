import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  p-2 ">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand link-light h1">
            Frequiz
          </Link>

          <div className="  d-flex " id="navbarNav">
            <ul className=" d-flex ">
              <li className="nav-item">
                <Link className="nav-link active link-light" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="/">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-light" to="/">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export { Home };
