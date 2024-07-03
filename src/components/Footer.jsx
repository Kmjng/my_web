import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" role="contentinfo">
      <div className="footer__inner">
        <div className="footer__info">
          <div className="left-side">
            © 2024 by Minjeong Kim.<br />
            VITE based
          </div>
          <div className="right-side">
            <div className="right-row">
              <span className="label">Call</span>
              <div className="contact-info">
                <p>010-7263-1963</p>
              </div>
            </div>
            <div className="right-row">
              <span className="label">E-mail</span>
              <div className="contact-info">
                <p>kmjng0712@gmail.com</p>
              </div>
            </div>
            <div className="right-row">
              <span className="label">Site</span>
              <div className="contact-info">
                <div className="social-icons footer-icons">
                  <a href="https://github.com/Kmjng" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://hellomars.tistory.com/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-blogger"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
