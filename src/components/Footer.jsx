import React from 'react';
import gitIcon from "../assets/img/git.png";
import tistoryIcon from "../assets/img/tistory.png";
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
                <a href="https://github.com/Kmjng"  target="_blank">
                <img src={gitIcon} />
                </a>
                <a href="https://hellomars.tistory.com/" target="_blank">
                <img src={tistoryIcon} />
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
