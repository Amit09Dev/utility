import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";


export default function Navbar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            {props.title}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink activeclassname="active" className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeclassname="active" className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
            </ul>
            <div className="d-flex">
              <div
                className="bg-primary rounded mx-2"
                onClick={() => {
                  props.toggleMode("primary");
                }}
                style={{ height: "25px", width: "25px", cursor: "pointer", border: '1px solid white' }}
              ></div>
              <div
                className="rounder mx-2 bg-dark"
                onClick={() => {
                  props.toggleMode("dark");
                }}
                style={{ height: "25px", width: "25px", cursor: "pointer" , border: '1px solid white' }}
              ></div>
              <div
                className="rounder mx-2 bg-success"
                onClick={() => {
                  props.toggleMode("success");
                }}
                style={{ height: "25px", width: "25px", cursor: "pointer" , border: '1px solid white' }}
              ></div>
              <div
                className="rounder mx-2 bg-danger"
                onClick={() => {
                  props.toggleMode("danger");
                }}
                style={{ height: "25px", width: "25px", cursor: "pointer" , border: '1px solid white' }}
              ></div>
              <div
                className="rounder mx-2 bg-warning"
                onClick={() => {
                  props.toggleMode("warning");
                }}
                style={{ height: "25px", width: "25px", cursor: "pointer" , border: '1px solid white' }}
              ></div>
            </div>
            <div className="me-5 d-flex">
              <div
                className={`form-check form-switch text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={()=> {props.toggleMode(null)}}
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {props.mode === "light" ? "Light" : "Dark"} Mode
                </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.func,
  toggleMode: PropTypes.string,
  color: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Title here",
};
