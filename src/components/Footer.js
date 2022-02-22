import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import twitter from "../images/twitter.png"
import facebook from "../images/facebook.png"
import insta from "../images/insta.png"
import linkedin from "../images/linkedin.png"
import goUp from "../images/goUp.png"
import elipse from "../images/elipse.png"
import logo from "../images/logo.svg"

const Footer = ({ siteTitle }) => (
  <footer class="footer-bg">
    <div class="container mt-5">
      <div class="ellipse">
        <img class="img-fluid" src={elipse} alt="lastEllipse" />
      </div>
      <div class="footer-logo mb-2 py-lg-2 ms-4">
        <img class="img-fluid" src={logo} alt="logo" />
      </div>
      <div class="social-icons-flex">
        <Link to="https://twitter.com/happenhq" target="_blank">
          <img class="img-fluid" src={twitter} alt="/twitter" />{" "}
        </Link>
        <Link to="#fb" target="_blank">
          <img class="img-fluid" src={facebook} alt="/twitter" />
        </Link>
        <Link to="#insta" target="_blank">
          <img class="img-fluid" src={insta} alt="/twitter" />
        </Link>
        <Link to="#linkedin" target="_blank">
          <img class="img-fluid" src={linkedin} alt="/twitter" />
        </Link>
      </div>
      <hr class="my-5" />
      <div class="my-2 py-2">
        <div class="d-flex justify-content-center my-3">
          <p style={{color: "#3d3d54"}} class="text-center">
            © Copyright 2022 Happen All Rights Reserved
          </p>
        </div>
        <div class="last-arrow cursor-pointer" role="none" >
          <img
            class="float-end ms-4 img-fluid"
            src={goUp}
            alt="go-up"
          />
        </div>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
