import React from "react";
import gitIcon from "../assets/img/git.png";
import boardIcon from "../assets/img/board.png";
import goIcon from "../assets/img/go.png";

const Port = () => {
    return (
        <section id="portfolio">
    <div className="port__inner">
        <div className="port__title">
            portfolio <em>분석 작업물</em>
        </div>
        <article className="port__item p1">
            <div className="num">WORK 01.</div>
            <a href="https://www.hira.or.kr/bbsDummy.do?pgmid=HIRAA020002000100&brdScnBltNo=4&brdBltNo=10826" className="link_0" target="_blank">
                <img src={goIcon} />
                <span className="link-desc">2024년 보건의료빅데이터 활용 창업경진대회(참가)</span>
            </a>
            <h3 className="title">분류모델 기반의 비만 진단 모델</h3>
            <p className="desc">
                정확도가 60%으로 낮은 BMI 지표를 대신하여 체지방률을 기준으로
                비만 분류 모델을 설계하고 구현했다. 
                체지방률과 양의 상관을 갖는 신체치수를 설명변수로 
            </p>
            <div className="links-wrapper">
            <a href="/bodyfat.pdf" className="link-container" target="_blank"  rel="noopener noreferrer">
            <img src={boardIcon} alt="PDF 아이콘" className="icon" />
                <span className="link-text">PPT 보기</span>
            </a>
            <a href="https://github.com/Kmjng/BodyFat-Predict" className="link-container" target="_blank" rel="noopener noreferrer">
                <img src={gitIcon} alt="GitHub 아이콘" className="icon" />
                <span className="link-text">Code 보기</span>
            </a>
            </div>
            
        </article>
        <article className="port__item p2">
            <div className="num">WORK 02.</div>
            <a href="https://github.com/seolhee313/PORTFOLIO-REACT" className="img" target="_blank">
                <img src="assets/img/port02.jpg" alt="부제목" />
            </a>
            <h3 className="title">--</h3>
            <p className="desc">
                내용을 입력하세요.
            </p>
            <a href="https://portfolio-313.web.app/" target="_blank" className="site">사이트 보기</a>
        </article>
    </div>
</section>

    );
    
};

export default Port;
