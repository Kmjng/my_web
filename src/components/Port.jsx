import React from "react";

const Port = () => {
    return (
        <section id="portfolio">
    <div className="port__inner">
        <div className="port__title">
            portfolio <em>분석 작업물</em>
        </div>
        <article className="port__item p1">
            <div className="num">WORK 01.</div>
            <a href="https://www.hira.or.kr/bbsDummy.do?pgmid=HIRAA020002000100&brdScnBltNo=4&brdBltNo=10826" target="_blank" className="img">
                <img src="assets/img/port01.jpg" alt="제 10회 2024년 보건의료빅데이터 활용 창업경진대회(참가)" />
            </a>
            <h3 className="title">분류모델링 기법 활용 비만 진단 모델</h3>
            <p className="desc">
                분석 관하여 몇줄 요약
            </p>
            <a href="/assets/documents/분류모델링을 통한 비만판별모델.pdf" target="_blank" className="site">📑 PPT 보기</a>
            <a href="https://github.com/Kmjng/BodyFat-Predict" target="_blank" className="code">
                <img src="assets/img/git.svg" alt="GitHub 아이콘" />
                <span>Code 보기</span>
            </a>
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
