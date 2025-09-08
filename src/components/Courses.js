import React from 'react';
import ScrollTextAnimation from './ScrollTextAnimation';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SyllabusPage from "../pages/SyllabusPage";
import '../styles/Courses.css';
function Courses(){
    return(
        <div className="pb-5" id="courses">
            <ScrollTextAnimation message="Are you one of those who is recently graduated or getting graduated but you dont have enough skills or hands on experience needed for job market?"/>
            <div className="container">
                <h2 className="mb-5 text-center fw-bold">Here are the top courses offered along with projects</h2>
                <div id="carouselExampleIndicators" className="carousel slide d-md-block d-none">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <div className="card">
                                        <img src="../images/full_stack_developer_image_2.png" className="card-img-top fixed-img p-4" alt="full stack developer"/>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">Full Stack Developer</h5>
                                            <p className="card-text">Complete end to end course to develop websites handling client and server.In addition to mastering HTML and CSS, he/she also knows how to program a browser, server, database.</p>
                                            <Link to="/syllabus/fullstack" target="_blank" className="btn btn-primary">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="card">
                                        <img src="../images/software_testing_image.png" className="card-img-top fixed-img p-4" alt="software testing"/>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">Software Testing</h5>
                                            <p className="card-text">A process of evaluating and verifying that a software product or application functions correctly, securely and efficiently according to its specific requirements. The benefits include delivering high-quality software . </p>
                                            <Link to="/syllabus/softwareTesting" target="_blank" className="btn btn-primary">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="card">
                                        <img src="../images/python_image.png" className="card-img-top fixed-img p-4" alt="python"/>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">Python</h5>
                                            <p className="card-text">A popular programming language used for different means like web/software development, mathematics, system scripting.It’s supported by a wide range of libraries and frameworks.</p>
                                            <Link to="/syllabus/python" target="_blank" className="btn btn-primary">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <div className="card">
                                        <img src="../images/IT_operations_image.jpg" className="card-img-top fixed-img p-4" alt="IT operations"/>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">IT Operations</h5>
                                            <p className="card-text">It is the process of implementing, managing, delivering and supporting IT services to meet the business needs of internal and external users </p>
                                            <Link to="/syllabus/itOperations" target="_blank" className="btn btn-primary">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="card">
                                        <img src="../images/cyber_security_image.jpg" className="card-img-top fixed-img p-4" alt="Cyber Security"/>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">Cyber Security</h5>
                                            <p className="card-text">It is the practice of protecting digital devices, networks, and sensitive data from cyber threats such as hacking, malware, and phishing attacks.</p>
                                            <Link to="/syllabus/cyberSecurity" target="_blank" className="btn btn-primary">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <div className="card">
                                        <img src="../images/IT_infrastructure_and_operations.jpg" className="card-img-top fixed-img p-4" alt="IT infrastructure and operations"/>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">Infrastructure Operations</h5>
                                            <p className="card-text">It refers to the management and maintenance of the hardware, software, and networking components that underpin a company's IT infrastructure.</p>
                                            <Link to="/syllabus/infrastructureOperations" target="_blank" className="btn btn-primary">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-md-4 ">
                                    <div className="card">
                                        <img src="../images/cloud_technologies_image.png" className="card-img-top fixed-img p-4" alt="..."/>
                                        <div className="card-body">
                                            <h5 className="card-title fw-bold">Cloud Computing</h5>
                                            <p className="card-text">It is a technology that allows you to store and access data, applications over internet instead of using your computer’s hard drive or a local server.</p>
                                            <Link to="/syllabus/cloudTechnologies" target="_blank" className="btn btn-primary">Learn More</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>
                <div id="mobileCarousel" className="carousel slide d-block d-md-none">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card">
                            <img src="../images/full_stack_developer_image_2.png" className="card-img-top fixed-img p-4" alt="full stack developer"/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Full Stack Developer</h5>
                                <p className="card-text">Complete end to end course to develop websites handling client and server.In addition to mastering HTML and CSS, he/she also knows how to program a browser, server, database.</p>
                                <Link to="/syllabus/fullstack" target="_blank" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src="../images/software_testing_image.png" className="card-img-top fixed-img p-4" alt="software testing"/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Software Testing</h5>
                                <p className="card-text">A process of evaluating and verifying that a software product or application functions correctly, securely and efficiently according to its specific requirements. The benefits include delivering high-quality software . </p>
                                <Link to="/syllabus/softwareTesting" target="_blank" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src="../images/python_image.png" className="card-img-top fixed-img p-4" alt="python"/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Python</h5>
                                <p className="card-text">A popular programming language used for different means like web/software development, mathematics, system scripting.It’s supported by a wide range of libraries and frameworks.</p>
                                <Link to="/syllabus/python" target="_blank" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src="../images/IT_operations_image.jpg" className="card-img-top fixed-img p-4" alt="IT operations"/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">IT Operations</h5>
                                <p className="card-text">It is the process of implementing, managing, delivering and supporting IT services to meet the business needs of internal and external users </p>
                                <Link to="/syllabus/itOperations" target="_blank" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src="../images/cyber_security_image.jpg" className="card-img-top fixed-img p-4" alt="Cyber Security"/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Cyber Security</h5>
                                <p className="card-text">It is the practice of protecting digital devices, networks, and sensitive data from cyber threats such as hacking, malware, and phishing attacks.</p>
                                <Link to="/syllabus/cyberSecurity" target="_blank" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src="../images/IT_infrastructure_and_operations.jpg" className="card-img-top fixed-img p-4" alt="IT infrastructure and operations"/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Infrastructure Operations</h5>
                                <p className="card-text">It refers to the management and maintenance of the hardware, software, and networking components that underpin a company's IT infrastructure.</p>
                                <Link to="/syllabus/infrastructureOperations" target="_blank" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            <img src="../images/cloud_technologies_image.png" className="card-img-top fixed-img p-4" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title fw-bold">Cloud Computing</h5>
                                <p className="card-text">It is a technology that allows you to store and access data, applications over internet instead of using your computer’s hard drive or a local server.</p>
                                <Link to="/syllabus/cloudTechnologies" target="_blank" className="btn btn-primary">Learn More</Link>
                            </div>
                        </div>
                    </div>
                    </div>
                    <button className="carousel-control-prev carousel-control-prev-mobile-tablet" type="button" data-bs-target="#mobileCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next carousel-control-next-mobile-tablet" type="button" data-bs-target="#mobileCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                    </button>
                </div>
            </div>
        </div>

    )
}
export default Courses;