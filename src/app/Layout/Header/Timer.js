import React, {useState, useEffect} from 'react';

const Timer = () => {
	const calculateTimeLeft = () => {
		const difference = +new Date('2021-03-01') - +new Date();
		let timeLeft = {};

		if (difference > 0) {
			timeLeft = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60)
			};
		}

		return timeLeft;
	};

	const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

	useEffect(() => {
		setTimeout(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);
	});

	const timerComponents = [];

	Object.keys(timeLeft).forEach(interval => {
		if (!timeLeft[interval] || interval === 'seconds') {
			return;
		}

		timerComponents.push(
			<p key={interval} className="header__top-title">
				{timeLeft[interval]} {interval}{' '}
			</p>
		);
	});
	if (!timerComponents.length)
		return (
			<div className="header__top-timer ml-auto">
				<p className="header__top-title">1 hour 12 minutes 00 seconds</p>
			</div>
		);

	return <div className="header__top-timer">{timerComponents}</div>;
};

export default React.memo(Timer);
