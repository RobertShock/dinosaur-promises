"use strict";

var dom = require('./dom');

var dinosaurs = [];

const firstDinosaurJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/dinosaurs.json').done((data1) => {
			resolve(data1.dinosaurs1);
		}).fail((error1) => {
			reject(error1);
		});
	});	
};

const secondDinosaurJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/dinosaurs2.json').done((data2) => {
			resolve(data2.dinosaurs2);
		}).fail((error2) => {
			reject(error2);
		});
	});	
};

const thirdDinosaurJSON = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/dinosaurs3.json').done((data3) => {
			resolve(data3.dinosaurs3);
		}).fail((error3) => {
			reject(error3);
		});
	});	
};

const allTheCats = () => {
	return new Promise((resolve, reject) => {
		$.ajax('./db/cats.json').done((data3) => {
			resolve(data3.cats);
		}).fail((error3) => {
			reject(error3);
		});
	});	
};
// 	Promise.all(catsJSON().then((results) => {
// 		console.log("results from promise.allTheCats", results);
// 		results.forEach((result) => {
// 			result.forEach((cat) => {
// 				cats.push(cat);
// 			});
// 		});
// 		makeCats();
// 	}).catch((error) => {
// 		console.log("error from promise.allTheCats", error);
// 	});
// };






const dinoGetter = () => {
	Promise.all([firstDinosaurJSON(), secondDinosaurJSON(), thirdDinosaurJSON()]).then((results) => {
		allTheCats().then((cats) => {
			results.forEach((result) => {
				result.forEach((dino) => {
					dino.snacks = [];
					dino.catIds.forEach((catId) =>{
						cats.forEach((cat) =>{
							if(cat.id === catId){
								dino.snacks.push(cat);
							}
						});
					});
					dinosaurs.push(dino);
				});
			});
			makeDinos();
		});	
	}).catch((error) => {
		console.log("error from promise.all", error);
	});
};

const makeDinos = () => {
	dinosaurs.forEach((dino) => {
		dom(dino);
	});
};

const initializer = () => {
	dinoGetter();	
};

const getDinosaurs = () => {
	return dinosaurs;
};

module.exports = {initializer:initializer, getDinosaurs:getDinosaurs};