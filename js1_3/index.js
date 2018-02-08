/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	if (hours>=0 && hours<=23 && minutes>=0 && minutes<=59 && (minutes+interval)>=60) {
		hours=hours+1;
		minutes=(minutes+interval)-60;
			if (hours<10 && hours>0 && minutes<10 && minutes>=0) {
				return '0'+hours+':'+'0'+minutes;
			}
			else if (hours<10 && hours>0 && minutes>10 && minutes<59) {
				return '0'+hours+':'+minutes;
			}
			else if (hours>10 && hours<=23 && minutes<10 && minutes>=0) {
				return hours+':'+'0'+minutes;
			}		
			else if (hours>10 && hours<=23 && minutes>10 && minutes<59) {
				return hours+':'+minutes;
			}
			else if (hours=24 && minutes>10) {
				return '00'+':'+minutes;
			}
			else if (hours=24 && minutes<10) {
				return '00'+':'+'0'+minutes;
			}
	}
	else if (hours>=0 && hours<=23 && minutes>=0 && minutes<=59 && (minutes+interval)<60) {
		if (hours<10 && hours>0 && minutes<10 && minutes>=0) {
				return '0'+hours+':'+'0'+minutes;
			}
			else if (hours<10 && hours>0 && minutes>10 && minutes<59) {
				return '0'+hours+':'+minutes;
			}
			else if (hours>10 && hours<=23 && minutes<10 && minutes>=0) {
				return hours+':'+'0'+minutes;
			}		
			else if (hours>10 && hours<=23 && minutes>10 && minutes<59) {
				return hours+':'+minutes;
			}
			else if (hours=24 && minutes>10) {
				return '00'+':'+minutes;
			}
			else if (hours=24 && minutes<10) {
				return '00'+':'+'0'+minutes;
			}
	}
};
