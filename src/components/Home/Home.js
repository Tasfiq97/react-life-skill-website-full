import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import HeroDetail from '../HeroDetail/HeroDetail';
import ShortCourse from '../ShortCourse/ShortCourse';

const Home = () => {
    return (
        <div>
            <div className="hero-sec bg-yellow-400">
                <HeroDetail></HeroDetail>
            </div>
            <div className="course-sec">
                <ShortCourse></ShortCourse>

            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;