import React from 'react';

import '../styles/components/footer.sass';

const Footer = () => (
  <footer className="footer">
    <div className="footer__social">
      <a href="/">
        <h4>follow spacex</h4>
        <div className="footer__border" />
      </a>
      <nav>
        <ul>
          <li><a href="/">twitter</a></li>
          <li><a href="/">youtube</a></li>
          <li><a href="/">flick</a></li>
          <li><a href="/">instagram</a></li>
        </ul>
      </nav>
    </div>
    <div className="footer__copy">
      <p>2018 space exploration technologies corp.</p>
    </div>
  </footer>
);
export default Footer;
