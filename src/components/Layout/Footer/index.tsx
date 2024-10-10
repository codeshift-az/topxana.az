import logo from '@/assets/images/logo/logo.png';

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="footer_widget_area">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="footer_widget_inner">
                <div className="f_widget_tittle">
                  <h3>ABOUT US</h3>
                </div>
                <div className="f_about_widget">
                  <p>
                    Vivamus nisi purus, luctus sit amet scelerisque volutpat,
                    malesuada in quam. Morbi vehicula, ligula et consectetur
                    dictum, lectus elit ultricies est, ut congue augue risus ac
                    turpis.
                  </p>
                  <img
                    src={logo}
                    alt={import.meta.env.VITE_PROJECT_NAME as string}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_widget_inner">
                <div className="f_widget_tittle">
                  <h3>E-NEWSLETTER</h3>
                </div>
                <div className="f_news_widget">
                  <p>
                    Subscribe to our newsletter, we will send you about newest
                    projects
                  </p>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for..."
                    />
                    <span className="input-group-btn">
                      <button className="btn btn-default" type="button">
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_widget_inner">
                <div className="f_widget_tittle">
                  <h3>NAVIGATION </h3>
                </div>
                <div className="f_navigation_widget">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        About Company
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        Features
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true"></i>
                        Projects
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_widget_inner">
                <div className="f_widget_tittle">
                  <h3>CONTACT US</h3>
                </div>
                <div className="f_contact_widget">
                  <p>
                    Lorem ipsum dolor sit amet, tollit adolescens duo ea, ne
                    porro complectitur.
                  </p>
                  <ul className="contact_lsit">
                    <li>
                      <a href="#">
                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                        Santa Monica Boulevard Los Angeles
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone" aria-hidden="true"></i>(0464)
                        0123 45 67
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        info@pitreepress.com
                      </a>
                    </li>
                  </ul>
                  <ul className="f_widget_social">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright_area">
        <div className="container">
          <div className="pull-left copyright_left">
            <h4>
              Pithree Press Template by <a href="#">Tavilla Themes.</a>
            </h4>
          </div>
          <div className="pull-right copyright_right">
            <h5>
              © 2009 - 2016 <a href="#">Neon Press</a>. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
