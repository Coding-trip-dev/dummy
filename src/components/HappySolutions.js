import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import group1 from "../images/group_1.webp"
import group2 from "../images/group_2.webp"
import group3 from "../images/group_3.webp"
import group4 from "../images/group_4.webp"

const HappySolutions = ({ siteTitle }) => (
  <section class="happen-features" id="solutions">
    <div class="happen-fetaures-heading d-flex justify-content-center">
      Happen Solutions
    </div>
    <div class="container">
      <div class="line-1">
        <div class="box-1 p-3 shadow my-2">
          <div
            data-gatsby-image-wrapper=""
            class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid imgs pt-4"
          >
            <div
              style={{ maxWidth: "250px", display: "block", }}
            >
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src={group1}
                style={{ maxWidth: "100%", display: "block", position: 'static' }}
              />
            </div>
             
          </div>
          <p class="box-para">
            Happen for hybrid events Designed to grow your online community
            while holding in-person events. Let those who able to attend in
            person find the magic of meeting like minded people while attending
            your event.
          </p>
        </div>
        <div class="box-1 p-3 ms-lg-5 shadow my-2">
          <div
            data-gatsby-image-wrapper=""
            class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid imgs pt-4"
          >
            <div 
            style={{ maxWidth: "258px", display: "block", }}
            >
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src={group2}
                style={{ maxWidth: "100%", display: "block", position: 'static' }}

                
              />
            </div>
           
          </div>
          <p class="box-para">
            Happen for remote work Teams are more than work. Let bonding and
            awareness happen throughout the day while still preserving privacy
            and concentration. Seamless switch to social spaces at lunch or
            after work to unwind with your colleagues.
          </p>
        </div>
      </div>
      <div class="line-1 ms-lg-5">
        <div class="box-1 p-3 shadow ms-lg-3 my-2 my-lg-5">
          <div
            data-gatsby-image-wrapper=""
            class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid imgs pt-4"
          >
            <div
            style={{ maxWidth: "226px", display: "block", }}
             
             >
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src={group3}
                style={{ maxWidth: "100%", display: "block", position: 'static' }}
              />
            </div>
             
          </div>
          <p class="box-para">
            Happen for online conferences Small or big conferences are better on
            happen. unlimited attendees, unlimited stages, schedule
            presentations and the most natural networking experience possible
          </p>
        </div>
        <div class="box-1 p-3 ms-lg-5 shadow my-2 my-lg-5">
          <div
            data-gatsby-image-wrapper=""
            class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid imgs pt-4"
          >
            <div 
              style={{ maxWidth: "226px", display: "block", }}
              >
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src={group4}
                style={{ maxWidth: "100%", display: "block", position: 'static' }}
              />
            </div>
          </div>
          <p class="box-para">
            Happen for gatherings Zoom calls are awkward. At happened we removed
            the awkwardness from your social event, whether it be family
            catchup, after work drinks, team bonding, games night or watch
            party. Whatever your occasion happen makes it natural and fun to
            hangout.
          </p>
        </div>
      </div>
    </div>
  </section>
)

HappySolutions.propTypes = {
  siteTitle: PropTypes.string,
}

HappySolutions.defaultProps = {
  siteTitle: ``,
}

export default HappySolutions
