// src/components/About.js
import React from 'react';
import '../styles/About.css';
import ActionButton from './ActionButton';
import TestimonialCard from './TestimonialCard';

function About() {
  return (
    <div className="about">
      <div className="container">
        <h3 className="text-center fw-bold">From live training to real internships — your career boost starts now</h3>
        <div className="row">
          <div className="col-md-3 col-12">
            <ActionButton text="Get Started with IT skills training" linkAddress="#courses"/>
            <ActionButton text="Get Started with IT services" />
            <ActionButton text="Get Started with projects and internships" linkAddress="#internships" />
            <ActionButton text="Get Started with Career Councelling" />
            <ActionButton text="Want us to train your company / colleagues ? Contact Us" />
            <ActionButton text="Want a Demo? Fill your details to contact you" />
          </div>
          <div className="col-md-9 col-12">
            <div className="row py-md-4 mb-md-0 mb-2 gap-2 gap-md-0">
              <div className="col-md-4 col-12">
                <TestimonialCard stars="4" text="The quality of teaching is amazing. Its worth it to give a try!" name="Neha Himesh" qualification="Recent Graduate"/>
              </div>
              

              <div className="col-md-8 col-12">
                <div className="row gap-2 gap-md-0">
                  <div className="col-md-6 col-12 ">
                    <TestimonialCard stars="4" text="Its amazing. The teaching feels amazing" name="Neha" qualification="Recent Graduate"/>
                  </div>
                  <div className="col-md-6 col-12">
                    <TestimonialCard stars="4" text="Its amazing. The teaching feels amazing" name="Neha" qualification="Recent Graduate"/>
                  </div>
                </div>
                <div className="row py-md-2 gap-2 gap-md-0 mt-md-0 mt-2">
                  <div className="col-md-6 col-12 ">
                    <TestimonialCard stars="4" text="Its amazing. The teaching feels amazing" name="Neha" qualification="Recent Graduate"/>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="row gap-2 gap-md-0">
              <div className="col-md-6 col-12">
                <TestimonialCard stars="4" text="Its amazing. The teaching feels amazing" name="Neha" qualification="Recent Graduate"/>
              </div>
              <div className="col-md-6 col-12">
                <TestimonialCard stars="4" text="Its amazing. The teaching feels amazing" name="Neha" qualification="Recent Graduate"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
