import React from "react";
import gitIcon from "../assets/img/git.png";
import boardIcon from "../assets/img/board.png";
import goIcon from "../assets/img/go.png";

const Port = () => {
    return (
        <section id="portfolio">
    <div className="port__inner">
        <div className="port__title">
            ML/DL Portfolio <em>기계학습 작업물</em>
        </div>
          {/* WORK 1 */}
        <article className="port__item p1">
            <div className="num">WORK 01.</div>
            <span className="link-desc">Computer Vision 개인 프로젝트</span>
            <h3 className="title">파이토치 기반 2D 운전자 감지 프로그램   </h3>
            <div className="details">
                <div className="detail-row">
                <strong className="label">개요</strong>
                <span className="content">영상 속 졸음 감지 모델 </span>
                </div>
                <div className="detail-row">
                <strong className="label">역할</strong>
                <span className="content">EfficientNet, CNN modeling/Tensorboard 성능 시각화/Static Quantization</span>
                </div>
                <div className="detail-row">
                <strong className="label">사용 툴</strong>
                <span className="content">Python, Pytorch, OpenCV, dlib(library) </span>
                </div>
                <div className="detail-row">
                <strong className="label">기여도</strong>
                <span className="content">◆ ◆ ◆ ◆ ◇ </span>
                </div>
            </div>
            
            <div className="links-wrapper">
            <a href="/DMS_deeplearning.pdf" className="link-container" target="_blank"  rel="noopener noreferrer">
            <img src={boardIcon} alt="PDF 아이콘" className="icon" />
                <span className="link-text">PPT 보기</span>
            </a>
            <a href="https://github.com/Kmjng/Video_Detection" className="link-container" target="_blank" rel="noopener noreferrer">
                <img src={gitIcon} alt="GitHub 아이콘" className="icon" />
                <span className="link-text">Code 보기</span>
            </a>
            </div>
            
        </article>
         
         {/* WORK 2 */}
         <article className="port__item p1">
            <div className="num">WORK 02.</div>
            <span className="link-desc">Team Project (6인)</span>
            <h3 className="title">AI generated 음원 판별 딥러닝 모델</h3>
            <div className="details">
                <div className="detail-row">
                <strong className="label">개요</strong>
                <span className="content">규제 필요성이 있는 음성 Deep Fake 음악을 구별</span>
                </div>
                <div className="detail-row">
                <strong className="label">역할</strong>
                <span className="content">음성데이터 전처리(MFCC,GFCC)/ CNN 모델링</span>
                </div>
                <div className="detail-row">
                <strong className="label">사용 툴</strong>
                <span className="content">Python, Tensorflow, umap</span>
                </div>
                <div className="detail-row">
                <strong className="label">기여도</strong>
                <span className="content">◆ ◆ ◆ ◆ ◇ </span>
                </div>
            </div>
            
            <div className="links-wrapper">
            <a href="/deeplearning1.pdf" className="link-container" target="_blank"  rel="noopener noreferrer">
            <img src={boardIcon} alt="PDF 아이콘" className="icon" />
                <span className="link-text">PPT 보기</span>
            </a>
            <a href="https://github.com/Kmjng/Voice_Recognition_Deep_Learning" className="link-container" target="_blank" rel="noopener noreferrer">
                <img src={gitIcon} alt="GitHub 아이콘" className="icon" />
                <span className="link-text">Code 보기</span>
            </a>
            </div>
            
        </article>
         
         
         
         {/* WORK 3 */}
        <article className="port__item p1">
            <div className="num">WORK 03.</div>
            <a href="https://www.culture.go.kr/digicon/" className="link_0" target="_blank">
                <img src={goIcon} />
                <span className="link-desc">2024년 문화 디지털혁신 및 문화데이터 활용 공모전 (5인)</span>
            </a>
            <h3 className="title">k-Means 군집 기법을 활용한 최적입지 선정</h3>
            <div className="details">
                <div className="detail-row">
                <strong className="label">개요</strong>
                <span className="content">아동 미술관 설립을 위한 최적 입지 분석</span>
                </div>
                <div className="detail-row">
                <strong className="label">역할</strong>
                <span className="content">EDA / 데이터 시각화</span>
                </div>
                <div className="detail-row">
                <strong className="label">사용 툴</strong>
                <span className="content">Tableau, Python, Pandas, Scikit-learn, Google Drive</span>
                </div>
                <div className="detail-row">
                <strong className="label">기여도</strong>
                <span className="content">◆ ◆ ◆ ◇ ◇ </span>
                </div>
            </div>
            
            <div className="links-wrapper">
            <a href="/museum.pdf" className="link-container" target="_blank"  rel="noopener noreferrer">
            <img src={boardIcon} alt="PDF 아이콘" className="icon" />
                <span className="link-text">PPT 보기</span>
            </a>
            
            </div>
            
        </article>
         {/* WORK 4 */}
        <article className="port__item p1">
            <div className="num">WORK 04.</div>
            <a href="https://www.hira.or.kr/bbsDummy.do?pgmid=HIRAA020002000100&brdScnBltNo=4&brdBltNo=10826" className="link_0" target="_blank">
                <img src={goIcon} />
                <span className="link-desc">2024년 보건의료빅데이터 활용 창업경진대회 (6인)</span>
            </a>
            <h3 className="title">분류모델 기반의 비만 진단 모델</h3>
            <div className="details">
                <div className="detail-row">
                <strong className="label">개요</strong>
                <span className="content">정확도가 60%으로 낮은 BMI 지표를 대신하여 체지방률을 기준으로 비만 분류 모델을 설계하고 구현</span>
                </div>
                <div className="detail-row">
                <strong className="label">역할</strong>
                <span className="content">데이터 증강(Data Augmentaion)/ 통계적 모델링(Modeling)/ 모델 적합 시각화</span>
                </div>
                <div className="detail-row">
                <strong className="label">사용 툴</strong>
                <span className="content">Python, Pandas, Scikit-learn, Google Drive</span>
                </div>
                <div className="detail-row">
                <strong className="label">기여도</strong>
                <span className="content">◆ ◆ ◆ ◆ ◇ </span>
                </div>
            </div>
            
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
    </div>
</section>

    );
    
};

export default Port;
