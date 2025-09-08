import React from "react";
import AccordionItem from "../components/AccordionItem";
import { coursesData } from '../Data/SyllabusData'
import { useParams } from "react-router-dom";
import TickMarkIcon from "../components/TickMarkIcon";
import '../styles/SyllabusPage.css'
// import bgImage from "../assets/abstract-textured-background.jpg";

function SyllabusPage() {
  const { courseId } = useParams(); // get course name from URL
  const course = coursesData[courseId];

  if (!course) {
    return <h2>Course not found</h2>;
  }

  return (
    // <div>
    //   	<div className="pt-5 course-details" style={{ backgroundImage: "url('/images/abstract-textured-background.jpg')", backgroundSize: "cover"}}>
	// 		<div className="row">
	// 			<div className="col-8 offset-2">
	// 				<h1 className="text-center mt-5">
	// 					Full Stack Developer: A Complete course to become a frontend and backend developer
	// 				</h1>
	// 			</div>
	// 		</div>
	// 		<div className="row">
	// 			<div className="col-8 offset-2">
	// 				<h4 className="text-center p-5">
	// 					Learn the popular topics like HTML, CSS, JavaScript, React.js, Node.js, SQL, MongoDB in just one course
	// 				</h4>
	// 			</div>
	// 		</div>
	// 		<div className="row">
	// 			<div className="col-8 offset-2">
	// 				<h5 className="text-center p-2">Mode of Teaching: Online(Live)</h5>
	// 			</div>
	// 		</div>
	// 		<div className="row">
	// 			<div className="col-8 offset-2">
	// 				<h5 className="text-center p-2">Languages: English, Kannada, Hindi</h5>
	// 			</div>
	// 		</div>
    //   	</div>
	// 	<div className="row mt-3">
	// 		<div className="col-8 border offset-2">
	// 			<h4 className="text-center p-4">What You'll Learn</h4>
	// 			<div className="row">
	// 				<div className="col-4 offset-3">  
	// 					<div className="row">
	// 						<div className="justify-content-center p-0 m-0">
	// 							<TickMarkIcon width="40px" height="15px"/>
	// 							Learn HTML
	// 						</div>
	// 					</div>
	// 					<div className="row">
	// 						<div className="justify-content-center p-0 m-0">
	// 							<TickMarkIcon width="40px" height="15px"/>
	// 							Learn CSS
	// 						</div>
	// 					</div>
					
	// 				</div>
	// 				<div className="col-4">
	// 					<div className="row">
	// 						<div className="col-6 p-0 m-0">
	// 							<TickMarkIcon width="40px" height="15px"/>
	// 							Learn HT
	// 						</div>
	// 					</div>
	// 					<div className="row">
	// 						<div className="col-6 p-0 m-0">
	// 							<TickMarkIcon width="40px" height="15px"/>
	// 							Learn CS
	// 						</div>
	// 					</div>

	// 				</div>
	// 			</div>
	// 		</div>
    //   	</div>
    //   	<div className="accordion pt-4" id={`${courseId}-accordion`}>
	// 		<h4 className="text-center p-4">Course Content</h4>
	// 		{course.map((item, index) => (
	// 			<AccordionItem
	// 			key={index}
	// 			id={`${courseId}-item-${index}`}
	// 			title={item.title}>
	// 			{item.body}
	// 			</AccordionItem>
	// 		))}
    //   	</div>
	// 	<h3 className="text-center p-5">
	// 		Requirements
	// 	</h3>
		
    // </div>
    <>
      {/* Header Section */}
      <div
        className="pt-5 course-details"
        style={{
          backgroundImage: "url('/images/abstract-textured-background.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="row">
          <div className="col-md-8 col-12 offset-md-2">
            <h1 className="text-center mt-5">{course.title}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 col-12 offset-md-2">
            <h4 className="text-center p-5">{course.subtitle}</h4>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 col-12 offset-md-2">
            <h5 className="text-center p-2">Mode of Teaching: {course.mode}</h5>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8 offset-md-2">
            <h5 className="text-center p-2">Languages: {course.languages}</h5>
          </div>
        </div>
      </div>

      {/* What You’ll Learn */}
      <div className="row mt-3">
        <div className="col-md-8 border offset-md-2">
          <h4 className="text-center p-4">What You'll Learn</h4>
          <div className="row">
            {course.whatYouWillLearn.map((item, index) => (
              <div key={index} className="col-6 p-1">
                <TickMarkIcon width="40px" height="15px" /> {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion (Course Content) */}
      <div className="accordion pt-4" id={`${courseId}-accordion`}>
        <h4 className="text-center p-4">Course Content</h4>
        {course.syllabus.map((item, index) => (
          <AccordionItem
            key={index}
            id={`${courseId}-item-${index}`}
            title={item.title}
          >
            {item.body}
          </AccordionItem>
        ))}
      </div>
    </>
  );
}

export default SyllabusPage;
