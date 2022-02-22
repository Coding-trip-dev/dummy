import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import exclamation from "../images/exclamation.svg"

const NotifyMe = ({ siteTitle }) => (
  <div id="#notify" class="container">
    <section class="notify my-5" id="notify">
      <div class="justify-content-center align-items-center per row">
        <div class="col-lg-6">
          <div>
            <h2 class="my-3">Get notified when we launch</h2>
            <form class="">
              <input type="hidden" name="u" value="1" data-name="u" />
              <input type="hidden" name="f" value="1" data-name="f" />
              <input type="hidden" name="s" data-name="s" />
              <input type="hidden" name="c" value="0" data-name="c" />
              <input type="hidden" name="m" value="0" data-name="m" />
              <input type="hidden" name="act" value="sub" data-name="act" />
              <input type="hidden" name="v" value="2" data-name="v" />
              <input
                type="hidden"
                name="or"
                value="bec1bf0f03afed2a23e93daa06c20f7c"
                data-name="or"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                class="my-input shadow-none form-control"
              />
              <button class="btn sign-up-beta my-3">Notify Me</button>
            </form>
          </div>
        </div>
        <div class="col-lg-6">
          <img
            src={exclamation}
            alt="notify"
            class="my-4 my-lg-0 img-fluid"
          />
        </div>
      </div>
    </section>
  </div>
)

NotifyMe.propTypes = {
  siteTitle: PropTypes.string,
}

NotifyMe.defaultProps = {
  siteTitle: ``,
}

export default NotifyMe
