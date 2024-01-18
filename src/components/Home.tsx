import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Nav>
        <Nav.Item>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/Articles">
            Articles
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default Home;
