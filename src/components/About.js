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
          <div className="col-3">
            <ActionButton text="Get Started with IT skills training" linkAddress="#courses"/>
            <ActionButton text="Get Started with IT services" />
            <ActionButton text="Get Started with projects and internships" linkAddress="#internships" />
            <ActionButton text="Get Started with Career Councelling" />
            <ActionButton text="Want us to train your company / colleagues ? Contact Us" />
            <ActionButton text="Want a Demo? Fill your details to contact you" />
          </div>
          <div className="col-9">
            <div className="row py-4">
              <div className="col-4 ">
                <TestimonialCard stars="4" text="Its amazing. The teaching feels amazing" name="Neha" qualification="Recent Graduate"/>
              </div>
              

              <div className="col-8">
                <div className="row">
                  <div className="col-6">
                    <TestimonialCard stars="4" text="Its amazing. The teaching feels amazing" name="Neha" qualification="Recent Graduate"/>
                  </div>
                  <div className="col-6">
                    <TestimonialCard stars="4" text="Its amazing. The teaching feels amazing" name="Neha" qualification="Recent Graduate"/>
                  </div>
                </div>
                <div className="row py-2">
                  <div className="col-12">
                    <TestimonialCard stars="4" text="Its amazing. The teaching feels amazing" name="Neha" qualification="Recent Graduate"/>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <TestimonialCard stars="4" text="Its amazing. The teaching feels amazing" name="Neha" qualification="Recent Graduate"/>
              </div>
              <div className="col-6">
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
