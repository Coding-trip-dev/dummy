import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import bannerRight from "../images/banner_right.png"
import polygon_4 from "../images/polygon_4.svg"
import Features from "./features"
import NotifyMe from "./notifyMe"
import HappySolutions from "./HappySolutions"

const Main = ({ siteTitle }) => (
  <>
    <div className="bg-blue-img">
      <div class="container pt-5">
        <div class="row featurette">
          <div class="col-md-6 order-md-1 d-flex flex-column justify-content-center mt-lg-5 pt-5">
            <h1 class="featurette-heading tc text-light heading ms-lg-5 fw-blod ">
              Turn Events <span style={{ color: "#9a99f6" }}>into </span>{" "}
              Communities
            </h1>
            <p class="para text-center text-lg-start text-light ms-lg-5 text-text-default">
              You can run the entire event, from talks to coffee break,
              networking and afterparty. Then your community can live
            </p>
            <a
              class="btn sign-up-beta ms-lg-5 text-text-default"
              href="#notify"
            >
              Signup for Beta
            </a>
          </div>
          <div class="col-md-6 order-md-2">
            <img class="img-fluid mt-lg-5" src={bannerRight} alt="homeimage" />
          </div>
        </div>
      </div>
    </div>
    <Features />
    <hr />
    <NotifyMe />
    <HappySolutions />
    <section class="float-end">
      <img
        class="polygon-3"
        src={polygon_4}
        alt="/img"
      />
    </section>
  </>
)

Main.propTypes = {
  siteTitle: PropTypes.string,
}

Main.defaultProps = {
  siteTitle: ``,
}

export default Main
