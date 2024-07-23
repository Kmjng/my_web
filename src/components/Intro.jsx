import React from "react";
import myImage from '../assets/img/myimg.png'; // 올바른 상대 경로로 수정
import gitIcon from "../assets/img/git.png";
import tistoryIcon from "../assets/img/tistory.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="inner__left">
        <div className="top__part">
          <img src={myImage} alt="Profile Image" className="profileImage"/>
        </div>
        <div className="bottom__part">
          Minjeong <br />
          Kim <br />
          <span className="line"></span> <br />
          Data Analyst
          <div className="intro_link"> 
          <a href="https://github.com/Kmjng" className="btn" target="_blank">
          <img src={gitIcon} />
          <span>IT 관련 학습 깃허브(✍️23.12.~)</span>
          </a>
          <a href="https://hellomars.tistory.com/" className="btn" target="_blank">
          <img src={tistoryIcon} />
          <span> 데이터 분석 관련 블로그(✍️24.02.~)</span>
          </a>
          </div>
        </div>
      </div>
      <div className="inner__right">
        <p className="title">HELLO</p>
        
        <p>제작 중 입니다. <br/> In progress.. </p>
      </div>
    </section>
  );
};

export default Intro;