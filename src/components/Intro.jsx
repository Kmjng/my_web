import React from "react";
import aiImage from '../assets/img/aiimg.png'; // 올바른 상대 경로로 수정


const Intro = () => {
  return (
    <section id="intro">
      <div className="inner__left">
        <div className="top__part">
          <img src={aiImage} alt="Profile Image" />
        </div>
        <div className="bottom__part">
          Minjeong <br />
          Kim <br />
          <span className="line"></span> <br />
          Data Analyst
          <div className="social-icons">
            <a href="https://github.com/Kmjng" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://hellomars.tistory.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-blogger"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="inner__right">
        <p className="title">HELLO</p>
        <a href="resume.html" className="btn">Go to Resume Page</a>
        <a href="portfolio.html" className="btn">Go to Portfolio Page</a>
        <p>내 소개~</p>
      </div>
    </section>
  );
};

export default Intro;