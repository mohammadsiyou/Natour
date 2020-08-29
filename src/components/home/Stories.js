import React from 'react';


function Stories() {
	return (
		<section className="section-stories">
			<div className="bg-video">
				<video className="bg-video__content" autoPlay={true} loop={true} muted={true}>
                    <source src="/static/images/video.mp4" type="video/mp4" />
                    <source src="/static/images/video.webm" type="video/webm" />					
					Your browser is not supported!
				</video>
			</div>		
			<div className="u-text-center u-margin-bottom-big">
				<h2 className="heading-secondary">
					We make people genuinely happy
				</h2>
			</div>
			<div className="row">
				<div className="story">
					<figure className="story__shape">
						<img src="/static/images/nat-8.jpg" className="story__img" alt="Person on a tour"/>
						<figcaption className="story__caption">Mary Smith</figcaption>
					</figure>
					<div className="story__text">
						<h3 className="heading-tertiary u-margin-bottom-small">I had the best week ever with my family</h3>
						<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur. 
						</p>
					</div>
				</div>				
			</div>
			<div className="row">
				<div className="story">
					<figure className="story__shape">
						<img src="/static/images/nat-9.jpg" className="story__img" alt="Person on a tour"/>
						<figcaption className="story__caption">Jack Wilson</figcaption>
					</figure>
					<div className="story__text">
						<h3 className="heading-tertiary u-margin-bottom-small">WOW! My life is completely different now</h3>
						<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur. 
						</p>
					</div>
				</div>			
			</div>
			<div className="u-text-center u-margin-top-huge">
				<a href="/#" className="btn-text">Read all stories &rarr;</a>
			</div>
		</section>
	);
}

export default Stories;
