import React from "react";

import Logo from "../assets/images/softwarelogo.png";

//Component

import Employee from "./employee/Employee";

const Navbar = () => {
  return (
    <>
      <div className="bg-dark">
        <div class="container-fluid">
          <nav class="navbar navbar-light bg-dark">
            <div class="container-fluid">
              <img class="navbar-brand business-logo" src={Logo} />
              <form class="d-flex">
                <h3 className="text-white px-2">PRASAN</h3>
                <button class="btn btn-outline-warning" type="submit">
                  LOGOUT
                </button>
              </form>
            </div>
          </nav>
        </div>
      </div>
      <div class="container-fluid pl0">
        <div className="row">
          <div className="col-md-3 col-lg-3">
            <div className="bg-warning height-1500">
              <ul className="p-4">
                <li className="emp-list-style border-bottom-style">DASHBOARD</li>
              </ul>
            </div>
          </div>
          <div className="col-md-9 col-lg-9">
            <Employee />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
