import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import Button from "./button/button"

import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => (
  <nav class="justify-content-between navbar navbar-expand-lg navbar-light">
    <div class="container">
      <span class="d-none d-lg-block navbar-brand">
        <a aria-current="page" class="" href="/">
          <img src={Logo} alt="logo" class="logo mb-0" />
        </a>
      </span>
      <span class="d-block d-lg-none navbar-brand">
        <a aria-current="page" class="" href="/">
          <img src={Logo} alt="logo" class="logoMob mb-0" />
        </a>
      </span>
      <button
        aria-controls="basic-navbar-nav"
        type="button"
        aria-label="Toggle navigation"
        class="navbar-toggler collapsed"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="ham justify-content-end navbar-collapse collapse"
        id="basic-navbar-nav"
      >
        <div class="nav-top navbar-nav">
          <a
            href="#features"
            data-rr-ui-event-key="#features"
            class="ms-lg-4 nav-link"
          >
            Features
          </a>
          <a
            href="#solutions"
            data-rr-ui-event-key="#solutions"
            class="ms-lg-4 nav-link"
          >
            Solutions
          </a>
          <a
            href="#notify"
            data-rr-ui-event-key="#notify"
            class="btn sign-up-beta2 ms-lg-5 d-none d-lg-block nav-link"
          >
            Join Beta
          </a>
        </div>
      </div>
    </div>
  </nav>
)

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `white`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 1140,
//         padding: `0.7rem 0.7rem`,
//       }}
//       className="flex justify-between items-center"
//     >
//       <Link to="/">
//         <img src={Logo} alt="logo" className="mb-0" />
//       </Link>
//       <div>
//         <Link to="#solution">
//           <Button text="Features" classes="px-6 text-text-default" />
//         </Link>
//         <Link to="/">
//           <Button text="Solutions" classes="px-6 text-text-default" />
//         </Link>
//         <Link to="/">
//           <Button
//             text="Join Beta"
//             classes="bg-blue-theme text-white rounded-md ml-5"
//             styles={{ padding: "0.5rem 2.3rem" }}
//           />
//         </Link>
//       </div>
//     </div>
//   </header>
// )

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
