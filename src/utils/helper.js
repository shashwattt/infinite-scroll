export const getMessageAge = (updatedOn) => {
	var today = new Date();

	var diff = (today - new Date(updatedOn)) / 1000;
	var diff = Math.abs(Math.floor(diff));

	var year = Math.floor(diff / (12 * 30 * 24 * 60 * 60));
	var leftSec = diff - year * 12 * 30 * 24 * 60 * 60;

	var months = Math.floor(leftSec / (30 * 24 * 60 * 60));
	var leftSec = leftSec - months * 30 * 24 * 60 * 60;

	var days = Math.floor(leftSec / (24 * 60 * 60));
	var leftSec = leftSec - days * 24 * 60 * 60;

	var hrs = Math.floor(leftSec / (60 * 60));
	var leftSec = leftSec - hrs * 60 * 60;

	var min = Math.floor(leftSec / 60);

	if (year > 0) {
		return `${year === 1 ? "A year" : `${year} years`}  ago`;
	} else if (months > 0) {
		return `${months === 1 ? "A month" : `${months} months`}  ago`;
	} else if (days > 0) {
		return `${days === 1 ? "A day" : `${days} days`}  ago`;
	} else if (hrs > 0) {
		return `${hrs === 1 ? "An hour" : `${hrs} hrs`}  ago`;
	} else {
		return `${min === 1 ? "A minute" : `${min} minutes`}  ago`;
	}
};

export const throttle = (callback, time) => {
    let throttleTimer;
    if (throttleTimer) return;
	throttleTimer = true;
	setTimeout(() => {
		callback();
		throttleTimer = false;
	}, time);
};
