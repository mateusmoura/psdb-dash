import React from 'react';

const Footer = () => (
  <footer className="footer">
    <div className="row">
      <div className="col-lg-6 align-self-center">
        <span>Copyright © 2019</span>
      </div>
      <div className="col-lg-6">
        <div className="button-list float-right">
          <a href="https://www.facebook.com/Rede45" target="_blank" className="btn btn-facebook waves-effect waves-light">
            <i className="fa fa-facebook"></i>
          </a>

          <a href="https://twitter.com/rede45" target="_blank" className="btn btn-twitter waves-effect waves-light">
            <i className="fa fa-twitter"></i>
          </a>

          <a href="http://www.youtube.com/cenpsdb45" target="_blank" className="btn btn-youtube waves-effect waves-light">
            <i className="fa fa-youtube"></i>
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
