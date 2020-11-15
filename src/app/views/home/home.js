import React from "react";
import "./home.scss";

import { Button } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { motion } from "framer-motion";

import { faqQuestions } from "assets/data/faq-questions";
import { FAQCollapse } from "app/containers";
import hackathon from "assets/images/site/hackathon.jpg";
import antMentor from "assets/images/site/ant_mentor_grey_blue.png";
import antSponsor from "assets/images/site/ant_sponsor_green.png";
import fireflyOne from "assets/images/site/fireflies_1.png";
import fireflyTwo from "assets/images/site/fireflies_2.png";

function Home() {
  return (
    <div className="home">
      <section className="home-banner">
        <div className="banner-images" />
        <div className="banner-info">
          <h1>HackUCI</h1>
          <h3>February 20-22, 2021</h3>
          <h3>Online</h3>
          <h3>Apply by November 20, 2020</h3>
          <div className="application-button">Apply Now</div>
          <p>
            In light of the COVID-19 pandemic, HackUCI 2021 will be fully
            virtual and open to all! You can participate from the comfort of
            your home.
          </p>
        </div>
      </section>
      <section className="description-block">
        <div className="description-stats">
          <img className="firefly-image" src={fireflyOne} />
          500 hackers. 36 hours. 10,000 in prizes
          <img className="firefly-image" src={fireflyTwo} />
        </div>
        <div className="description-tagline">
          <img className="firefly-image" src={fireflyOne} />
          Create + Connect + Inspire
          <img className="firefly-image" src={fireflyTwo} />
        </div>
        <div className="description-image-wrapper">
          <div className="description-image">
            <img src={hackathon} alt="picture of students at table" />
          </div>

          <div className="description-text">
            HackUCI is the largest collegiate hackathon in Orange County and we
            continue expanding and improving our event every year. Our focus? –
            Enhance the community around us by giving students the platform to
            unleash their creativity in an environment of forward thinking
            individuals. For HackUCI 2021, we plan to unite an even more diverse
            and talented group of developers to build the technology of
            tomorrow! Naybeinsert some extra text regarding COVID-19 changes. So
            that peeps know that we’re trying to adjust?
          </div>
        </div>
      </section>
      <section className="volunteer-block">
        <h2>Lend a Hand</h2>
        <div className="volunteer-item-wrapper">
          <div className="volunteer-mentor-item">
            <img src={antMentor} />
            <p>
              Due to the virtual format of Hack 2021, mentorship this year will
              be more important than ever. We need YOUR help to make this event
              successful and enjoyable for our hackers. Apply to be a mentor
              today!
            </p>
            <div>button</div>
          </div>
          <div className="volunteer-mentor-item">
            <img src={antSponsor} />
            <p>
              Due to the virtual format of Hack 2021, mentorship this year will
              be more important than ever. We need YOUR help to make this event
              successful and enjoyable for our hackers. Apply to be a mentor
              today!
            </p>
            <div>button</div>
          </div>
        </div>
      </section>
      <section className="faq-block">
        <Fade duration={1000}>
          <h2>FAQ</h2>
          <div>
            {faqQuestions.map(function(item, index) {
              return (
                <FAQCollapse
                  question={item.question}
                  answer={item.answer}
                  key={index}
                />
              );
            })}
          </div>
        </Fade>
      </section>
      <section className="sponsor-block">
        <Fade duration={1000}>
          <h2>Sponsors</h2>
          <div className="sponsor-card"></div>
        </Fade>
      </section>
    </div>
  );
}

export default Home;
