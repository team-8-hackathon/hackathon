import React from 'react';
import { Link } from 'react-router-dom';
import SplashNavBar from '../Navbar/SplashNavBar';
import TopSignup from '../signups/top_signup';
import BottomSignup from '../signups/bot_signup';
import Footer from '../Footer/footer';
import './SplashPage.css';

const SplashPage = () => {

    const scrollToTarget = () => {
        const targetElement = document.getElementById('splash-page-bottom-signup');
        targetElement.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div className='splash-page-container'>
            <div className="splash-page-top-section">
                <div className='top-section-content'>
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/images/icon+wordmark.png`} alt="Company Logo" className="splash-page-nav-logo" />
                    </Link>
                    <div className='top-section-about-aurora'>
                        <p className='aurora-caption'>Feel better with Aurora</p>
                        <p className='aurora-intro'>Aurora is an AI emotional wellness companion offering a unique blend of personalized support through conversation, mood tracking, and mindset tools, all in a safe space for self-exploration and growth</p>
                        <button className='learn-more-button' onClick={scrollToTarget}>Learn more</button>
                    </div>
                </div>
                <img className="splash-page-hero-graphic" src='/images/hero-graphic.png' alt="Hero Graphic" />
            </div>
            <div className='splash-page-top-signup'>
                <TopSignup />
            </div>
            <div className='splash-page-benefits'>
                <div className='single-benefit-container'>
                    <img className='benefits-image' src='/images/benefit-1.png' alt='self-awareness' />
                    <p className='single-benefit-content-bold'>Build deeper self-awareness</p>
                    <p className='single-benefit-content-small'>With personalized mood tracking</p>
                </div>
                <div className='single-benefit-container'>
                    <img className='benefits-image' src='/images/benefit-2.png' alt='self-esteem' />
                    <p className='single-benefit-content-bold'>Improve your self-esteem</p>
                    <p className='single-benefit-content-small'>With daily affirmations</p>
                </div>
                <div className='single-benefit-container'>
                    <img className='benefits-image' src='/images/benefit-3.png' alt='positive-mindset' />
                    <p className='single-benefit-content-bold'>Cultivate a positive mindset</p>
                    <p className='single-benefit-content-small'>With mindset tools</p>
                </div>
            </div>
            <p className='splash-page-testimonials-header'>What user testers are saying</p>
            <div className='splash-page-testimonials'>
                <div className='splash-page-testimonials-container'>
                    <img src={`${process.env.PUBLIC_URL}/images/mood-2.svg`} alt="Mood Happy" className='testimonial-mood-happy' />
                    <div className='splash-page-single-testimonial'>
                        <img src={`${process.env.PUBLIC_URL}/images/stars.svg`} alt="Testimonial Stars" className='testimonial-stars' />
                        <p className='testimonial-quote'>"It helps you dig deep to learn about yourself. I feel like the app really cares."</p>
                        <div className='splash-page-testimonial-name'>
                            <img src='/images/userImg-1.png' alt='User-Image-1' className='testimonial-user-image' />
                            <p>Honovi H.</p>
                        </div>
                    </div>
                    <div className='splash-page-single-testimonial'>
                        <img src={`${process.env.PUBLIC_URL}/images/stars.svg`} alt="Testimonial Stars" className='testimonial-stars' />
                        <p className='testimonial-quote'>"I love everything about this. I feel better already."</p>
                        <div className='splash-page-testimonial-name'>
                            <img src='/images/userImg-2.png' alt='User-Image-2' className='testimonial-user-image' />
                            <p>Tyler S.</p>
                        </div>
                    </div>
                    <div className='splash-page-single-testimonial'>
                        <img src={`${process.env.PUBLIC_URL}/images/stars.svg`} alt="Testimonial Stars" className='testimonial-stars' />
                        <p className='testimonial-quote'>"This can help a lot of people. This could be a game-changer."</p>
                        <div className='splash-page-testimonial-name'>
                            <img src='/images/userImg-3.png' alt='User-Image-3' className='testimonial-user-image' />
                            <p>Ian S.</p>
                        </div>
                    </div>
                    <div className='splash-page-single-testimonial'>
                        <img src={`${process.env.PUBLIC_URL}/images/stars.svg`} alt="Testimonial Stars" className='testimonial-stars' />
                        <p className='testimonial-quote'>"I feel like Aurora is my friend."</p>
                        <div className='splash-page-testimonial-name'>
                            <img src='/images/userImg-4.png' alt='User-Image-4' className='testimonial-user-image' />
                            <p>Katie G.</p>
                        </div>
                    </div>
                    <img src={`${process.env.PUBLIC_URL}/images/mood-1.svg`} alt="Mood Joy" />
                </div>
            </div>
            <div className='splash-page-screens'>
                <div className='splash-page-screen-content-container'>
                    <img src='/images/screen1.png' alt='Screen 1' className='splash-page-screen-photo' />
                    <div className='screen-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/mood-joy.svg`} alt="Mood Joy" className='screens-mood' />
                        <p>Get tailored support based on what's important to you.</p>
                    </div>
                </div>
                <div className='splash-page-screen-content-container'>
                    <div className='screen-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/mood-afraid.svg`} alt="Mood Afraid" className='screens-mood' />
                        <p>Learn to identify and name emotions for improved self-awareness.</p>
                    </div>
                    <img src='/images/screen2.png' alt='Screen 2' className='splash-page-screen-photo' />
                </div>
                <div className='splash-page-screen-content-container'>
                    <img src='/images/screen3.png' alt='Screen 3' className='splash-page-screen-photo' />
                    <div className='screen-content'>
                        <img src={`${process.env.PUBLIC_URL}/images/mood-sad.svg`} alt="Mood Sad" className='screens-mood' />
                        <p>Need someone to talk to? Chat with Aurora anytime, anywhere.</p>
                    </div>
                </div>
            </div>
            <div className='splash-page-meet-the-founder-container'>
                <img src='/images/christinaImg.png' alt='Founder Image' className='founder-image' />
                <div className='meet-the-founder-content'>
                    <p className='meet-the-founder-header'>Meet the Founder</p>
                    <p className='meet-the-founder-paragraph'>Hi there! I'm Christina, a product designer witha  passion for personal growth and mental well-being.
                    </p>
                    <p className='meet-the-founder-paragraph'>
                        I believe everyone should have access to knowledge and tools that lead to joy and fufillment in life. And that's the heart behind Aurora. I hope you lover her as much as I do 💛.
                    </p>
                </div>
            </div>
            <div id="splash-page-bottom-signup">
                <BottomSignup />
            </div>
        </div>
    )
}

export default SplashPage;
