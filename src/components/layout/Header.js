import React from 'react';

export default () => {
	return (
		<header className="header">
			<div className="header__logo-box">
				<img src="/static/images/logo-white.png" alt="logo" className="header__logo" />
			</div>
			<div className="header__text-box">
				<h1 className="heading-primary">
					<span className="heading-primary--main">
						Outdoors
					</span>
					<span className="heading-primary--sub">
						is where life happens
					</span>
				</h1>
				<a href="/#section-tours" className="btn btn--white btn--animated">discover our tours</a>
			</div>
		</header>
	);
};