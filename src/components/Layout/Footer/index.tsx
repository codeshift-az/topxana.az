import { useEffect } from 'react';

import { useTranslation } from 'react-i18next';

import useSWR from 'swr';

import { FooterLogo } from '@/assets/images';

import { useContactStore } from '@/store';

import { getContactInformation } from '@/api/contact';

const Footer = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useSWR('contactInfo', getContactInformation);
  const { state: contactInfo, updateInfo } = useContactStore();
  const PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME as string;

  useEffect(() => {
    if (data) {
      updateInfo(data);
    }
  }, [data]);

  if (isLoading) return <div>{t('loading')}</div>;

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
                  <img src={FooterLogo} />
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="footer_widget_inner">
                <div className="f_widget_tittle">
                  <h3>E-NEWSLETTER</h3>
                </div>
                <div className="f_news_widget ">
                  <ul className="footer-services-list">
                    <li>
                      <a href="">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Construction
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Architecture Design
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Building Painting
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Laminate Floring
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Roof Construction
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Building Repair
                      </a>
                    </li>
                  </ul>
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
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Home
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        About Company
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Our Services
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
                        Contact
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-angle-right" aria-hidden="true" />
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
                        <i className="fa fa-map-marker" aria-hidden="true" />
                        {contactInfo.address}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-phone" aria-hidden="true" />
                        {contactInfo.phone}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-envelope-o" aria-hidden="true" />
                        {contactInfo.email}
                      </a>
                    </li>
                  </ul>
                  <ul className="f_widget_social">
                    {contactInfo.facebook && (
                      <li>
                        <a href={contactInfo.facebook}>
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                    )}
                    {contactInfo.whatsapp && (
                      <li>
                        <a href={contactInfo.whatsapp}>
                          <i className="fa fa-whatsapp" />
                        </a>
                      </li>
                    )}
                    {contactInfo.instagram && (
                      <li>
                        <a href={contactInfo.instagram}>
                          <i className="fa fa-instagram" />
                        </a>
                      </li>
                    )}
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
              Developed and Designed by
              <a href=""> CodeShift</a>
            </h4>
          </div>
          <div className="pull-right copyright_right">
            <h5>
              © 2009 - 2016 <a href="">{PROJECT_NAME}</a>. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
