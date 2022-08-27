function filter(drivers, fn) {
	const matches = [];
	drivers.forEach(function (driver) {
		if(fn(driver))
			matches.push(driver);
	});

	return matches;
}

const findMatching = function (drivers, str) {
	return filter(drivers, function (driver) {
		return driver.toLowerCase() === str.toLowerCase();
	});
};


const fuzzyMatch = function (drivers, str) {
	return filter(drivers, function (driver) {
		return driver.slice(0, str.length).toLowerCase() == str.toLowerCase();
	});
};


const matchName = function (drivers, str) {
	return filter(drivers, function (driver) {
		return driver["name"].toLowerCase() == str.toLowerCase();
	});
};
