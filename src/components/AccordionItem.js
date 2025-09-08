import React from "react";

function AccordionItem({ id, title, children, isOpen = false }) {
  return (
    <div className="row">
		<div className="col-md-8 offset-md-2 col-12">
			<div className="accordion-item">
				<h2 className="accordion-header">
					<button
					className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target={`#${id}`}
					aria-expanded={isOpen}
					aria-controls={id}>
					{title}
					</button>
				</h2>
				<div
					id={id}
					className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}>
					<div className="accordion-body">{children}</div>
				</div>
			</div>
    	</div>
    </div>
    
  );
}

export default AccordionItem;