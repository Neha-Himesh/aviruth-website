// src/components/Home.js
import React from 'react';
import '../styles/Home.css'
import HoverIcon from './HoverIcon';
function Home() {
  return (
    <div className="home py-5">
      <div className="row">
        <div className="col-md-6 col-12 p-5">
          <h1 className="lh-base display-3 home-heading fw-semibold">Whether you are new or experienced in IT, we have you covered</h1>
          <p className="pt-3 pb-5 fs-3 home-description fst-italic fw-normal">
            Experience our exclusive industry based skills training, internships, projects and career guidance
          </p>
        </div>
        <div className="col-md-6 p-5 home-icons-image-container">
          <img src="/software_training.jpg" alt="Software Training" width="100%" className="rounded-pill"/>
          {/* <div className="hover-icons p-4">
            Click Me!
          </div> */}
          <div className="d-none d-md-block">
            <HoverIcon className="hover-icon-1 p-3" id="hover-icon-cities">
              <div className="row">
                <div className="rounded-circle border p-2 icon-width col-4">
                  <img src="/images/city_icon.png" alt="City Icon"/>
                </div>
                <div className="col-md-6" >
                  15+ cities
                </div>
              </div>
            </HoverIcon>
            <HoverIcon className="hover-icon-2 p-3" id="hover-icon-courses">
              <div className="row">
                <div className="rounded-circle border p-2 icon-width col-4">
                  <img src="/images/courses_icon.png" alt="Courses Icon"/>
                  </div>
                  <div className="col-md-8">
                    5+ courses
                  </div>
              </div>
            </HoverIcon>
            <HoverIcon className="hover-icon-3" id="hover-icon-reviews">
              <div className="row">
                <div className="rounded-circle border p-2 icon-width col-4">
                  <img src="/images/reviews_icon.png" alt="Reviews Icon"/>
                </div>
                <div className="col-md-8">
                  100+ reviews
                </div>
              </div>
            </HoverIcon>
            <HoverIcon className="hover-icon-4" id="hover-icon-guarenteed-satisfaction">
              <div className="row">
                <div className="rounded-circle border p-2 icon-width col-4">
                  <img src="/images/guarenteed_satisfaction_image.png" alt="Guarenteed Satisfaction Icon"/>
                </div>
                <div className="col-md-8">
                  Guarenteed Satisfaction
                </div>
              </div>
            </HoverIcon>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Home;