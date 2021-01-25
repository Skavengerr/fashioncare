import React from 'react';

import './videos.scss';

const YouTubeVideos = () => {
	return (
		<div className="videos">
			<div className="videos-item">
				<iframe
					title="New sustainable brand"
					src="https://www.youtube.com/embed/QLEaSOTrGQk"
					allowFullScreen
					frameBorder="0"
				/>
			</div>
			<div className="videos-item">
				<iframe
					title="Present to you our new sustainable brand"
					src="https://www.youtube.com/embed/-WFXo43ks7c"
					allowFullScreen
					frameBorder="0"
				/>
			</div>
			<div className="videos-item">
				<iframe
					title="Marketplace services for certified sustainable brands"
					src="https://www.youtube.com/embed/TUX_gdU8axI"
					allowFullScreen
					frameBorder="0"
				/>
			</div>
		</div>
	);
};

export default YouTubeVideos;
