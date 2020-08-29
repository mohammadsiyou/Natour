import React from 'react';


function Footer() {
	return (
		<footer className="footer">
			<div className="footer__logo-box">
				<picture className="footer__logo">
					<source srcSet="/static/images/logo-green-small-1x.png 1x, /static/images/logo-green-small-2x.png 2x" media="(max-width: 37.5em)"/>
					<img 
						srcSet="/static/images/logo-green-1x.png 1x, /static/images/logo-green-2x.png 2x" 
						alt="Full logo"
						src="/static/images/logo-green-2x.png"
					/>
				</picture>
			</div>
			<div className="row">
				<div className="col-1-of-2">
					<div className="footer__navigation">
						<ul className="footer__list">
							<li className="footer__item"><a href="/" className="footer__link">Company</a></li>
							<li className="footer__item"><a href="/" className="footer__link">Contact us</a></li>
							<li className="footer__item"><a href="/" className="footer__link">Carrers</a></li>
							<li className="footer__item"><a href="/" className="footer__link">Privacy policy</a></li>
							<li className="footer__item"><a href="/" className="footer__link">Terms</a></li>
						</ul>
					</div>
				</div>
				<div className="col-1-of-2">
                    <p className="footer__copyright">
                        Rebuild by <a href="/" className="footer__link">Mohammad Ghorbani</a> for practicing <a href="/" className="footer__link">Advanced CSS and Sass</a>.
                        Copyright &copy; by Mohammad Ghorbani. Thanks to <a href="/" className="footer__link">Jonas Schmedtmann</a> for every thing about Css.
                    </p>				
				</div>
			</div>
		</footer>
	);
}

export default Footer;
