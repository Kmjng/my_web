/* 페이지를 나타냄 */
import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Resume from "../components/Resume";
import Port from "../components/Port";
import Footer from "../components/Footer";
import Main from "../components/Main";

const HomeView = () => {
    return (
    <>
        <Header />
        <Main> 
            <Intro /> 
            <Resume />
            <Port />
        </Main>
        <Footer />
    </>
    );
};

export default HomeView;
