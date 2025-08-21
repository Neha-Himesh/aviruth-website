import React from 'react';
import ScrollTextAnimation from './ScrollTextAnimation';
import '../styles/Internships.css';
function Courses(){
    return(
        <div className="h4-5 container" id="internships">
            <ScrollTextAnimation message="Are you trained in the skills but dont know where and how to implement? Come join us today for live projects / internships. Learn more. Contact us."/>
            <h2 className="text-center mb-5 fw-bold">We Offer internships for the below</h2>
            <div className="row m-3 mb-5 gap-5">
                <div className="col-3 offset-1 h4-5 border shadow">
                    <h4 className="pb-3 mt-3 text-center ">Full Stack Development</h4>
                    <img src="../images/full_stack_development_image_1.png" className="img-fluid internship-subject-img"/>
                </div>
                <div className="col-3 h4-5 border shadow">
                    <h4 className="pb-3 mt-3 text-center">Software Testing</h4>
                    <img src="../images/software_testing_image_1.png" className="img-fluid internship-subject-img"/>
                </div>
                <div className="col-3 h4-5 border shadow">
                    <h4 className="pb-3 mt-3 text-center">IT Operations</h4>
                    <img src="../images/IT_operations_image_1.jpeg" className="img-fluid internship-subject-img"/>
                </div>
            </div>
            <div className="row m-3 mb-5 gap-5">
                <div className="col-3 offset-1 h4-5 border shadow">
                    <h4 className="pb-3 mt-3 text-center">Cyber Security</h4>
                    <img src="../images/cyber_security_image_1.jpg" className="img-fluid internship-subject-img"/>
                </div>
                <div className="col-3 h4-5 border shadow">
                    <h4 className="pb-3 mt-3 text-center">Cloud Computing</h4>
                    <img src="../images/cloud_computing_image_1.png" className=" w-100" />
                </div>
                <div className="col-3 h4-5 border shadow">
                    <h4 className="pb-3 mt-3 text-center">Infra Networking</h4>
                    <img src="../images/infra_networking_image.png" className=" w-100 " />
                </div>
            </div>
        </div>
    )
}
export default Courses;