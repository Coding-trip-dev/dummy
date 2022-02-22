import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import onlineevent from "../images/online_event.svg"
import groupLaptop from "../images/group_laptop.webp"
import polygon from "../images/polygon.svg"
import circle from "../images/circle.svg"
import metaverse from "../images/metaverse.webp"
import stay_connected from "../images/stay_connected.webp"
import polygon_three from "../images/polygon_three.svg"
import tree from "../images/tree.webp"
import blockchain from "../images/blockchain.webp"
import polygon_left from "../images/polygon_left.png"

const Features = ({ siteTitle }) => (
  <section id="features">
    {/*
     *
     *
     *
     *
     */}
    <div class="container my-5">
      <div class="row featurette">
        <div class="col-md-7 order-md-2 d-flex flex-column justify-content-center networking-img">
          <h1 class="text-lg-start text-center featurette-heading networking-heading fw-blod">
            Online Events where people can connect
          </h1>
          <p class="me-lg-5 text-center text-lg-start networking-para">
            The key to growing a community is that people come for the event but
            stay for the people. No more zoom fatigue with spaces supporting
            2-200 avatars intuitively joining conversations, leaving
            conversations and awkwardness free side-conversations.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <img class="img-fluid" src={onlineevent} alt="networking" />
        </div>
      </div>
    </div>
    {/*
     *
     *
     *
     *
     */}
    <section class="hybrid-bg">
      <div class="container pt-5">
        <div class="row featurette per align-items-center">
          <div class="col-md-6 order-md-1 mt-5 pt-5 hybrid-text-content">
            <h1 class="featurette-heading text-center text-lg-start hybrid-heading ms-lg-5 oneEv">
              One event, two audiences
            </h1>
            <p class="hybrid-para text-center text-lg-start ms-lg-5 text-text-default">
              Stream your live event to your communities virtual spaces to turn
              a single event into many. Multiple Stages. audience chat, Q&amp;A,
              mixing multiple speakers and screen-shares, upload to youtube and
              facebook means you reach your maximum audience.
            </p>
          </div>
          <div class="col-md-6 order-md-2">
            <div
              data-gatsby-image-wrapper=""
              class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid hybrid-img"
            >
              <div style={{ maxWidth: "635px", display: "block" }}>
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src={groupLaptop}
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/*
     *
     *
     *
     *
     */}
    <section>
      <img class="float-end img-fluid polygon" src={polygon} alt="polygon" />
    </section>
    {/*
     *
     *
     *
     *
     */}
    <div class="container my-5 p-5">
      <div class="row align-items-center w-full m-auto">
        <div class="col-md-7 order-md-2">
          <h1 class="ms-lg-4 ms-0 text-center text-lg-start networking-heading">
            Metaverse on Mobile
          </h1>
          <p class="ms-lg-4 ms-0 me-lg-5 me-0 text-center text-lg-start networking-para">
            Moving an avatar in a 2D space in native apps for Windows, MacOS,
            Android, and iOS lets your audience create genuine connections from
            anywhere while maintaining privacy. Better networking by expressive
            avatars that sync to your face and show who you are paying attention
            to.
          </p>
        </div>
        <div class="col-md-5 order-md-1">
          <div
            data-gatsby-image-wrapper=""
            class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mobile-first-img"
          >
            <div style={{ maxWidth: "654px", display: "block" }}>
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src={metaverse}
                style={{
                  maxWidth: "100%",
                  display: "block",
                  position: "static",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*
     *
     *
     *
     *
     */}
    <section>
      <img class="img-fluid line" src={polygon_left} alt="line" />
    </section>
    {/*
     *
     *
     *
     *
     */}
    <div class="container p-3">
      <div class="row featurette">
        <div class="col-md-7 order-md-1 d-flex flex-column justify-content-center networking-img">
          <h1 class="text-center text-lg-start featurette-heading networking-heading">
            Stay connected between events
          </h1>
          <p class="me-lg-5 text-center text-lg-start networking-para mb-5 mb-lg-0">
            Your communities live past your events, now grow your community each
            time you have an event and let them continue conversations with
            posts, chatrooms, threads and more.
          </p>
        </div>
        <div class="col-md-5 order-md-2">
          <div
            data-gatsby-image-wrapper=""
            class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid"
          >
            <div style={{ maxWidth: "658px", display: "block" }}>
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src={stay_connected}
                style={{
                  maxWidth: "100%",
                  display: "block",
                  position: "static",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*
     *
     *
     *
     *
     */}

    <section class="add-fun">
      <section>
        <img class="float-end img-fluid ball" src={circle} alt="/img" />
      </section>
      <div class="container my-5 pt-5">
        <div class="row align-items-center prr pb-5">
          <div class="col-md-7 order-md-2">
            <h1 class="ms-lg-4 ms-0 text-center text-lg-start networking-heading">
              Add more fun
            </h1>
            <p class="ms-lg-4 ms-0 me-lg-5 me-0 text-center text-lg-start networking-para">
              We built in games and icebreakers so your events can almost run
              themselves. Help your audience meet new random friends and stay
              engaged with games, emoji reactions, sound effects, stickers and
              more.
            </p>
          </div>
          <div class="col-md-5 order-md-1">
            <div
              data-gatsby-image-wrapper=""
              class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid mobile-first-img"
            >
              <div style={{ maxWidth: "638px", display: "block" }}>
                <img
                  alt=""
                  role="presentation"
                  aria-hidden="true"
                  src={tree}
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    position: "static",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <img
        class="float-start img-fluid polygon-2"
        src={polygon_three}
        alt="/img"
      />
    </section>

    <div class="container blockchain p-4 my-4">
      <div class="row featurette mb-lg-5 per">
        <div class="col-md-7 order-md-1 d-flex flex-column justify-content-center networking-img">
          <h1 class="text-center text-lg-start featurette-heading networking-heading">
            Blockchain integrations
          </h1>
          <p class="me-lg-5 text-center text-lg-start networking-para">
            Bring in your avatar from NFTs, sell custom stickers in our
            marketplace. Even give out blockchain rewards to members of your
            community The best home for your community with maximum engagement
            during events and between events Happen is how you keep your online
            audience engaged.
          </p>
        </div>
        <div class="col-md-5 order-md-2">
          <div
            data-gatsby-image-wrapper=""
            class="gatsby-image-wrapper gatsby-image-wrapper-constrained img-fluid"
          >
            <div style={{ maxWidth: "652px", display: "block" }}>
              <img
                alt=""
                role="presentation"
                aria-hidden="true"
                src={blockchain}
                style={{
                  maxWidth: "100%",
                  display: "block",
                  position: "static",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

Features.propTypes = {
  siteTitle: PropTypes.string,
}

Features.defaultProps = {
  siteTitle: ``,
}

export default Features
