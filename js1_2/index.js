
module.exports=function(hours, minutes) { 
	if (minutes<=59 && minutes>=0 && hours<=23 && hours>=0) {
		return true;
	}
	else {
		return false;
	}
};