import React from 'react'
import Footer from '../Components/Footer'
import TopNavWithoutSearch from '../Components/TopNavWithoutSearch'
import politics from '../Images/Politicalnews.jpeg'
import business from '../Images/businessnews.jpeg'
import sport from '../Images/sport news image.jpg'
import entertainment from '../Images/entertainment-news.jpg'

const About = () => {
  return (
    <div className='about-page'>
      <TopNavWithoutSearch/>
      <div className="about-content">
        <h1>Welcome to The Buari Blog</h1>
      <p className='about-exp' style={{textAlign: 'center', width: '95%', marginBottom: '100px'}}>In a world where information is power, THE BUARI BLOG is your trusted source for timely and accurate news and insights. Whether you're looking for local news, national news, or international news, we've got you covered. Our mission is to provide comprehensive coverage of local and global event, empowering our readers to stay informed and engaged.</p>
      <div className="about-section2">
        <h2>Our Mission</h2>
        <p>At THE BUARI BLOG, our mission is to provide unbiased and in-depth reporting on the issues that matters most. We're commited to upholding the highest standards of journalism, including accuracy, fairness, and transparency. We strive to foster a well-informed community through our coverage of politics, sports, business and more.</p>
      </div>
      <div className="about-section4">
        <h2>What We Cover</h2>
        <div className='section4'>
          <div className="section4-content">
            <img src={politics} alt="" />
            <div className="section4-text">
              <h3>Politics</h3>
              <p>Politics is the heart of our democracy, and we're dedicated to providing in-depth coverage of the issue that shape our world. We cover everything from elections and policy debates to government scandals and international relations. Our politics coverage is designed to keep you up-to-date on the issues that matter most.</p>
            </div>
          </div>
          <div className="section4-content">
            <img src={sport} alt="" />
            <div className="section4-text">
              <h3>Sports</h3>
              <p>Sport is a big part of our lives, and we're passionate about bringing you the latest news and update from the world of sports. From football and basketball to baseball and soccer, we provide in-depth coverage of sport news.</p>
            </div>
          </div>
          <div className="section4-content">
            <img src={business} alt="" />
            <div className="section4-text">
              <h3>Business</h3>
              <p>The world of business is constantly changing, and we're here to provide regular update on the latest trends and developments. We provide in-depth coverage of the industries that drive our economy, including technoloy, finance and healthcare.</p>
            </div>
          </div>
          <div className="section4-content">
            <img src={entertainment} alt="" />
            <div className="section4-text">
              <h3>Entertainment</h3>
              <p>From blockbuster movies and hit TV shows to music and celebrity gossip, we provide reviews, interviews, and behind-the-scenes stories from the world of entertainment.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section3">
        <h2>Our Value</h2>
      <div className='our-values'>
        <div className='value'>
          <h3>Journalistic Integrity</h3>
          <p>We adhere to the highest standards of journalism, ensuring accuracy, fairness and transparency.</p>
        </div>
        <div className='value'>
          <h3>Independence</h3>
          <p>We remain Independent and free from external influence, allowing us to report without bias.</p>
        </div>
        <div className='value'>
          <h3>Relevance</h3>
          <p>We focus on the stories that matter mostto our readers, providing context and analysis.</p>
        </div>
        <div className='value'>
          <h3>Engagement</h3>
          <p>We encourage open dialogue and engagement with our readers, fostering a sense of community.</p>
        </div>
      </div>
      </div>
      </div>
      <Footer/>
    </div>
  )
}

export default About
