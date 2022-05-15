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
      <aside className="mt-5">
        <div className="row no-gutters position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img
              src="../assets/question.jpg "
              className=" mr-3 float-right img-thumbnail w-50 img-fluid  shadow-sm"
              alt="..."
            />
          </div>
          <div className="col-md-6 position-static p-4 pl-md-0  link-light mr-2">
            <h5 className="mt-0 ">Columns with stretched link</h5>
            <p className=" ">
              Another instance of placeholder content for this other custom
              component. It is intended to mimic what some real-world content
              would look like, and we're using it here to give the component a
              bit of body and size.
            </p>
            <a href="#" className="stretched-link">
              Go somewhere
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
export { Home };
