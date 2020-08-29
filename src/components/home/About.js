import React from 'react';


function About() {
	return (
		<section className="section-about">
			<div className="u-text-center u-margin-bottom-big">
				<h2 className="heading-secondary">
					Exciting tours for adventurers people
				</h2>
			</div>
			<div className="row">
				<div className="col-1-of-2">
					<h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
					<p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with nature</h3>
					<p className="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<a href="/#" className="btn-text">Learn more &rarr;</a>
				</div>
				<div className="col-1-of-2">
					<div className="composition">
						
						<img 
							srcSet="/static/images/nat-1.jpg 300w, /static/images/nat-1-large.jpg 1000w"
							sizes="(max-width: 56.25em) 16vw, (max-width: 37.5em) 24vw, 30rem"
							alt="1" 
							className="composition__photo composition__photo--p1"
							src="/static/images/nat-1-large.jpg"
						/>
						
						<img 
							srcSet="/static/images/nat-2.jpg 300w, /static/images/nat-2-large.jpg 1000w"
							sizes="(max-width: 56.25em) 16vw, (max-width: 37.5em) 24vw, 30rem"
							alt="2" 
							className="composition__photo composition__photo--p2"
							src="/static/images/nat-2-large.jpg"
						/>
						
						<img 
							srcSet="/static/images/nat-3.jpg 300w, /static/images/nat-3-large.jpg 1000w"
							sizes="(max-width: 56.25em) 16vw, (max-width: 37.5em) 24vw, 30rem"
							alt="3" 
							className="composition__photo composition__photo--p3"
							src="/static/images/nat-3-large.jpg"
						/>
						
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
