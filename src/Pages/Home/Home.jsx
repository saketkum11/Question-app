import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <Link to="/" class="navbar-brand" href="#">
            Navbar
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse " id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <Link class="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Features
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Pricing
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link disabled" to="/">
                  Disabled
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
