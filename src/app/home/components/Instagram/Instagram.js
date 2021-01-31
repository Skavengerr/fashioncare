import React from 'react';
import {useInstagramFeed} from 'use-instagram-feed';
import LazyLoad from 'react-lazyload';

import './instagram.scss';

const Instagram = () => {
	let photos = useInstagramFeed({
		userId: '36582296016',
		thumbnailWidth: 640,
		photoCount: 12
	});

	return (
		<div className="inst">
			<div className="inst__box">
				<LazyLoad once>
					<img alt="" src="/icons/home/followus.jpg" />
				</LazyLoad>
			</div>
			<LazyLoad once>
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
			</LazyLoad>
		</div>
	);
};

export default Instagram;
