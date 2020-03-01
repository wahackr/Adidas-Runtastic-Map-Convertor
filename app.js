'use strict';

const fs = require('fs');

listFiles()
	.then(summary => {
		//console.log(summary);
		writeSummary(summary);
	});

function listFiles() {
	return new Promise((resolve, reject) => {
		let summary = [];
		fs.readdir('maps', (err, maps) => {
			let promises = maps.map(map => {
				return new Promise((resolve, reject) => {
					return readFile(`maps/${map}`)
						.then(mapObj => {
							console.log(`Processing ${map}`);
							let mapInfo = JSON.parse(mapObj.toString());
							summary.push({
								name: map,
								start_time: new Date(mapInfo.start_time),
								end_time: new Date(mapInfo.end_time)
							});
							return resolve(summary);
						}, err => {
							return reject(err);
						});
				});
			});
			Promise.all(promises)
				.then(() => {
					summary.sort((a, b) => {
						return (a.start_time > b.start_time ? 1 : -1);
					})
					return resolve(summary);
				});
		});
	});
}

function readFile(path) {
	return new Promise((resolve, reject) => {
		fs.readFile(path, (err, data) => {
			if (err) return reject(err);
			return resolve(data);
		});
	});
}

function writeSummary(summary, path) {
	fs.writeFile('summary.json', JSON.stringify(summary), err => {
		if (err) console.log(err);
		console.log('summary done');
	});
}