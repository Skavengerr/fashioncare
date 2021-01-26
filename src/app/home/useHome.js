import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const useHome = () => {
	const [region, setRegion] = useState('EU');

	useEffect(() => {
		getRegion();
	}, []);

	const getRegion = async () => {
		const data = await axios.get('http://www.geoplugin.net/json.gp');
		if (data && data.data && data.data.geoplugin_countryCode)
			setRegion(data.data.geoplugin_countryCode);
		else setRegion('EU');
	};

	return {region};
};
