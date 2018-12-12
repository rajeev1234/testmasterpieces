import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address1: "",
      address2: "",
      city: "",
      state: "",
      country: "",
      zip: "",
      account: "",
      swift: "",
      dispatch: "",
      auth: "",
      usd: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(key) {
    return function(e) {
      var state = {};
      state[key] = e.target.value;
      this.setState(state);
    }.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);

    fetch("http://localhost:8000/use/", {
      method: "POST",
      body: data
    });
  }

  render() {
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta property="og:title" content="Your Masterpieces" />

        <link
          rel="shortcut icon"
          href="http://18.236.125.15/images/favicon.png"
          type="image/x-icon"
        />

        <link
          rel="stylesheet"
          id="bootstrap-css"
          href="http://18.236.125.15/layout/assets/plugins/bootstrap/css/bootstrap.min.css?ver=4.7.8"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="owl-css"
          href="http://18.236.125.15/layout/assets/js/plugins/owl-carousel/owl.carousel.css?ver=4.7.8"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="artday-style-css"
          href="http://18.236.125.15/layout/assets/css/style.css?ver=4.7.8"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="artday-dynamic-css"
          href="http://18.236.125.15/layout/assets/css/dynamic.css?ver=4.7.8"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="artday-fonts-css"
          href="https://fonts.googleapis.com/css?family=PT+Serif%7CMontserrat&#038;subset=latin%2Clatin-ext"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="js_composer_front-css"
          href="http://18.236.125.15/layout/assets/plugins/js_composer/js_composer.min.css?ver=4.12.1"
          type="text/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="bfa-font-awesome-css"
          href="//cdn.jsdelivr.net/fontawesome/4.7.0/css/font-awesome.min.css?ver=4.7.0"
          type="text/css"
          media="all"
        />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" />

        <script type="text/javascript" src="../layout/config.js" />
        {/* </head> */}
        {/* <body> */}
        <div className="ws-topbar">
          <div className="pull-left">
            <div className="ws-topbar-message hidden-xs" />
          </div>

          <div className="pull-right">
            {/* <!-- Account --> */}

            {/* <!--NEW DROPDOWN MENU END --> */}

            <ul id="menu-nav-style-2" className="nav navbar-nav new-nav">
              <li className="ws-shop-cart">
                <a
                  href="http://18.236.125.15/auth/login.php"
                  className="btn cart-top-btn btn-sm"
                >
                  My Account
                </a>
              </li>
            </ul>
          </div>
        </div>

        <header className="ws-header-static">
          {/* <!-- Navbar --> */}
          <nav className="navbar ws-navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                  id="menushow"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
              </div>

              {/* <!-- Logo --> */}
              <div className="ws-logo ws-center">
                <a href="http://18.236.125.15">
                  <img
                    src="http://18.236.125.15/images/masterpiece_logo.png"
                    alt="masterpiece"
                    styles="width:165px"
                  />{" "}
                </a>
              </div>

              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                <div className="menu-left-container">
                  <ul id="menu-left" className="nav navbar-nav navbar-left">
                    <li
                      id="menu-item-653"
                      className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-653 active"
                    >
                      <a
                        data-hover="dropdown"
                        data-animations="fadeIn"
                        title="Home"
                        href="http://18.236.125.15"
                        styles="background: none"
                      >
                        Home
                      </a>
                    </li>
                    <li
                      id="menu-item-654"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-654"
                    >
                      <a
                        data-hover="dropdown"
                        data-animations="fadeIn"
                        title="Shop"
                        href="http://18.236.125.15/Paintings/paintings.php"
                      >
                        Paintings
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="menu-right-container">
                  <ul id="menu-right" className="nav navbar-nav navbar-right">
                    <li
                      id="menu-item-2484"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-2484"
                    >
                      <a
                        data-hover="dropdown"
                        data-animations="fadeIn"
                        title="Artist"
                        href="http://18.236.125.15/Artist/index.php"
                      >
                        Artists
                      </a>
                    </li>
                    <li
                      id="menu-item-728"
                      className="menu-item menu-item-type-post_type menu-item-object-page menu-item-728"
                    >
                      <a
                        data-hover="dropdown"
                        data-animations="fadeIn"
                        title="Contact Us"
                        href="http://18.236.125.15/contact.php"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>

        {
          <div className="container-fluid" styles="background: #e7e7e7">
            <div className="container ws-page-container">
              {/* <!-- Row Start --> */}
              <div className="row">
                <div className="col-sm-12">
                  <article
                    id="post-88"
                    className="post-88 page type-page status-publish hentry"
                  >
                    <div className="woocommerce">
                      <div className="row">
                        <div className="col-sm-6 col-sm-offset-3">
                          <div className="text-center">
                            <h2>ACCEPT BUY REQUEST</h2>
                            <div className="ws-separator" />
                            <br />
                          </div>
                        </div>
                        <div
                          className="col-sm-6 col-sm-offset-3 card"
                          styles="background: white"
                        >
                          <div className="col-md-12">
                            <div className="col-md-4">
                              <img
                                src="http://yourmasterpieces.com/auth/user/uploads_thumbnails/IMG_20151002_172605.jpg"
                                className="image-art"
                                alt="uploaded"
                              />
                            </div>

                            <div
                              className="col-md-8"
                              styles="margin-left: -15px"
                            >
                              <h3 className="art-name">Art name </h3>
                              <p className="art-details">
                                Technique : Water Color
                              </p>

                              <p className="art-details">Dimension : 80*60</p>

                              <p className="art-details">Year : 2018</p>
                            </div>
                          </div>

                          <h3 className="main-label"> Dispatch Address</h3>

                          <div className="clear" />
                          <form onSubmit={this.handleSubmit}>
                            <div className="col-md-12">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="address1">
                                    Address Line 1{" "}
                                  </label>
                                  <input
                                    className="input-text"
                                    type="text"
                                    name="address1"
                                    id="address1"
                                    value={this.state.address1}
                                    onChange={this.handleChange("address1")}
                                    required
                                  />
                                </p>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="address2">
                                    Address Line 2{" "}
                                  </label>
                                  <input
                                    className="input-text"
                                    type="text"
                                    name="address2"
                                    id="address2"
                                    value={this.state.address2}
                                    onChange={this.handleChange("address2")}
                                    required
                                  />
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="city">City </label>

                                  <input
                                    className="input-text"
                                    type="text"
                                    name="city"
                                    id="city"
                                    value={this.state.city}
                                    onChange={this.handleChange("city")}
                                    required
                                  />
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="state">State </label>
                                  <input
                                    className="input-text"
                                    type="text"
                                    name="state"
                                    id="state"
                                    value={this.state.state}
                                    onChange={this.handleChange("state")}
                                    required
                                  />
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="country">Country </label>

                                  <input
                                    className="input-text"
                                    type="text"
                                    name="country"
                                    id="country"
                                    value={this.state.country}
                                    onChange={this.handleChange("country")}
                                    required
                                  />
                                </p>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="zip">Zip </label>

                                  <input
                                    className="input-text"
                                    type="text"
                                    name="zip"
                                    id="zip"
                                    value={this.state.zip}
                                    onChange={this.handleChange("zip")}
                                    required
                                  />
                                </p>
                              </div>
                            </div>

                            <h3 className="main-label"> Bank Details </h3>

                            <div className="col-md-6">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="account">Bank A/C No. </label>

                                  <input
                                    className="input-text"
                                    type="text"
                                    name="account"
                                    id="account"
                                    value={this.state.account}
                                    onChange={this.handleChange("account")}
                                    // required
                                  />
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="zip">Swift Code </label>

                                  <input
                                    className="input-text"
                                    type="text"
                                    name="swift"
                                    id="swift"
                                    value={this.state.swift}
                                    onChange={this.handleChange("swift")}
                                    required
                                  />
                                </p>
                              </div>
                            </div>

                            <h3 className="main-label"> Order Details</h3>

                            <div className="col-md-6">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="zip">Dispatch Date </label>

                                  <input
                                    className="input-text"
                                    type="text"
                                    name="dispatch"
                                    id="swift"
                                    value={this.state.dispatch}
                                    onChange={this.handleChange("dispatch")}
                                    required
                                  />
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="auth">
                                    Authenticiy Certificate{" "}
                                  </label>

                                  <input
                                    className="input-text"
                                    type="file"
                                    name="auth"
                                    id="auth"
                                    value={this.state.auth}
                                    onChange={this.handleChange("auth")}
                                    required
                                  />
                                </p>
                              </div>
                            </div>

                            <div className="col-md-6">
                              <div className="form-group">
                                <p>
                                  <label htmlFor="usd">Price in USD </label>

                                  <input
                                    className="input-text"
                                    type="text"
                                    name="usd"
                                    id="usd"
                                    value={this.state.usd}
                                    onChange={this.handleChange("usd")}
                                    required
                                  />
                                </p>
                              </div>
                            </div>

                            <div className="padding-top-x20" />
                            <p>
                              <input
                                type="submit"
                                name="submit"
                                className="btn ws-btn-fullwidth"
                                id="Newsletter_feedback"
                                value="Submit"
                              />
                            </p>
                          </form>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        }
        <footer className="ws-footer">
          <div className="container">
            <div className="row">
              {/* <!-- About --> */}
              <div className="col-sm-6 ws-footer-col">
                <div id="text-3" className="bar widget-space widget_text">
                  <div className="sidebar-title">
                    <h3>About Us</h3>
                  </div>
                  <div className="ws-footer-separator" />
                  <div className="ws-footer-about">
                    <p>
                      We are a dedicated team of developers, artists, designers,
                      and marketers with a vision to help non-digital artists
                      reach a global audience, both digitally and tangibility.We
                      aspire to promote artists’ stories and emotions expressed
                      through their handmade art. As technologists, our mission
                      is to help these artists breach all barriers in today’s
                      digital world helping them reach the right audience on a
                      global scale.
                    </p>
                  </div>
                </div>
              </div>

              {/* <!-- Support Links --> */}
              <div className="col-sm-2 ws-footer-col" />

              <div className="col-sm-2 ws-footer-col">
                <div
                  id="nav_menu-4"
                  className="bar widget-space widget_nav_menu"
                >
                  <div className="sidebar-title">
                    <h3>Links</h3>
                  </div>
                  <div className="ws-footer-separator" />
                  <div className="menu-company-container">
                    <ul id="menu-company" className="menu">
                      <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-668">
                        <a href="http://18.236.125.15">Home</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-664">
                        <a href="http://18.236.125.15/support.php">Support</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-665">
                        <a href="http://18.236.125.15/policy.php">Policy</a>
                      </li>
                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-666">
                        <a href="http://18.236.125.15/terms&conditions.php">
                          Terms &amp; Conditions
                        </a>
                      </li>

                      <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-666">
                        <a href="http://18.236.125.15/faq.php">FAQ's</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="ws-footer-bar">
          <div className="container">
            {/* <!-- Copyright --> */}
            <div className="pull-left">
              <p>Masterpieces © 2018 All rights reserved.</p>
            </div>

            {/* <!-- Payments --> */}
            <div className="pull-right">
              <ul className="ws-footer-payments">
                <li>
                  <i className="fa fa-cc-visa fa-lg" />
                </li>
                <li>
                  <i className="fa fa-cc-paypal fa-lg" />
                </li>
                <li>
                  <i className="fa fa-cc-mastercard fa-lg" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
