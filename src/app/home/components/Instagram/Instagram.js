import React from 'react';
import {useInstagramFeed} from 'use-instagram-feed';

import './instagram.scss';

const Instagram = () => {
	let photos = useInstagramFeed({
		userId: '36582296016',
		thumbnailWidth: 640,
		photoCount: 12
	});

	return (
		<div>
			<p className="eco-text">Instagram</p>
			<div className="inst">
				{photos &&
					photos.map(({id, caption, src, width, height, url}) => (
						<a
							key={id}
							href={url}
							className="inst__el"
							target="_blank"
							rel="noreferrer"
						>
							<img src={src} alt={caption} />
						</a>
					))}
			</div>
		</div>
	);
};

export default Instagram;
