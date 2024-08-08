import React from 'react';

const Resume = () => {
    return (
        <section id="resume">
            <div className="resume__title">
                résumé <em>이력 사항</em>
            </div>
            <div className="resume__inner">
                <div className="education">
                    <span><h2>ACADEMIC</h2></span>
                    <div className="education_1">
                        <div>🏫 2024.02.~ 2024.08. ITWILL 빅데이터 전문가 45기 </div>
                        <div>🏫 2021.03.~ 2023.02. 건국대학교 물리학과 석사 (졸업)</div>
                        <div>🏫 2018.03.~ 2021.02. 건국대학교 물리학과 학사 (졸업)</div>
                        <div>🏫 2015.03.~ 2018.02. 한성대학교 전자정보공학과 (중퇴)</div>
                        <div>🏫 2012.03.~ 2015.02. 판교고등학교 (前 삼평) (졸업)</div>
                    </div>
                </div>
                <div className="experience">
                    <span><h2>EXPERIENCE</h2></span>
                    <div className="experience_1">
                        <div>🏢 2023.03.~2023.11. A Barristor Company (석사후연구원) </div>
                    </div>
                </div>
                <div className="license">
                    <span><h2>LICENSE</h2></span>
                    <div className="license_1">
                        <div>📖 빅데이터분석기사 - 2024.07. 취득 </div>
                        <div>📖 SQL 개발자(SQLD)  - 2024.04. 취득  </div>
                        <div>📖  데이터분석 준전문가(ADsP) - 2024.03. 취득</div>
                        <div>📖 MOS Master - 2020.06. 취득 </div>
                    </div>
                </div>
                <div className="skills">
                    <h2>SKILLS</h2>
                    <div className="skills_1">
                        <div className="skill-item">
                            <strong className="skn">🗝️ Python/R </strong>
                            <span className="skc"></span>
                        </div>
                        <div className="skill-item">
                            <strong className="skn">🗝️ SQL (Oracle, MariaDB) </strong>
                            <span className="skc"></span>
                        </div>
                        <div className="skill-item">
                            <strong className="skn">🗝️ Git  </strong>
                            <span className="skc"></span>
                        </div>
                        <div className="skill-item">
                            <strong className="skn">🗝️ Tableau  </strong>
                            <span className="skc"></span>
                        </div>
                        <div className="skill-item">
                            <strong className="skn">🗝️ Pytorch (Framework)  </strong>
                            <span className="skc"></span>
                        </div>
                        <div className="skill-item">
                            <strong className="skn">🗝️ Tensorflow (Framework) </strong>
                            <span className="skc"></span>
                        </div>
                        <div className="skill-item">
                            <strong className="skn">🗝️ Linux  </strong>
                            <span className="skc"></span>
                        </div>
                        <div className="skill-item">
                            <strong className="skn">🗝️ Hadoop  </strong>
                            <span className="skc"></span>
                        </div>
                        <div className="skill-item">
                            <strong className="skn">🗝️ Microsoft Office   </strong>
                            <span className="skc"></span>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;