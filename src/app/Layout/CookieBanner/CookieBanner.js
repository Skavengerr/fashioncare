import React, {useState} from 'react';
import Button from '@material-ui/core/Button';

import './cookieBanner.scss';

function CookieBanner() {
	const [show, setShow] = useState(true);

	function handleLoad() {
		const banner = document.getElementById('cookie-banner');
		const rect = banner.getBoundingClientRect();

		const footer = document.getElementById('footer');
		if (footer) {
			footer.style.marginTop = `${parseInt(rect.height, 10) - 64}px`;
		}
	}

	let cookie = localStorage.getItem('cookie-banner');

	if (!show || cookie === 'true') {
		return null;
	}

	return (
		<div className="cookie">
			<div id="cookie-banner" className="cookie__banner" onLoad={handleLoad}>
				<p className="cookie__banner-title">This website uses cookies.</p>
				<p className="cookie__banner-text">
					On this website we use cookies to enable you as a visitor to adapt the
					appearance of the website. Please see also our privacy policy in this
					regard!
				</p>
				<Button
					variant="contained"
					color="default"
					onClick={() => {
						setShow(false);
						localStorage.setItem('cookie-banner', 'true');
					}}
					className="cookie__banner"
				>
					Accept
				</Button>
			</div>
		</div>
	);
}

export default React.memo(CookieBanner);
