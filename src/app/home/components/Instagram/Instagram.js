import React, {useEffect, useState} from 'react';
import axios from 'axios';

import './instagram.scss';

const Instagram = () => {
	const [media, setMedia] = useState([]);
	useEffect(() => {
		getMedia();
	}, []);

	const getMedia = async () => {
		let data = [];
		let mediaArr;
		const instaSource = await axios.get('https://www.instagram.com/fashioncare.ch/');
		const instaObj = instaSource.data
			.match(
				/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
			)[1]
			.slice(0, -1);
		if (
			JSON.parse(instaObj).entry_data &&
			JSON.parse(instaObj).entry_data.ProfilePage[0]
		) {
			mediaArr = JSON.parse(instaObj).entry_data.ProfilePage[0].graphql.user
				.edge_owner_to_timeline_media.edges;
			mediaArr.map(el => data.push(el.node));
			setMedia(data);
		}
	};

	return (
		<div>
			<p className="eco-text">Instagram</p>
			<div className="inst">
				{media &&
					media.map(el => (
						<a
							rel="noreferrer"
							target="_blank"
							href="https://www.instagram.com/fashioncare.ch/"
							key={el.thumbnail_src}
							className="inst__el"
						>
							<img src={el.thumbnail_src} alt={el.thumbnail_src} />
						</a>
					))}
			</div>
		</div>
	);
};

export default Instagram;
