"use strict";

// const buildDomString = (dinosaur) => {
// 	let domString = '';
// 	dinosaur.forEach((dino) => {
// 		domString += `<h1>${dino.name}</h1>`;
// 	});
// 	writeToDom(domString);
// };

// const writeToDom = (domString) => {
// 	$('#dinosaurs').html(domString);
// };

// module.exports = {buildDomString};
    

var outputDiv = $('#dinosaurs');

var domString = function(dinosaur) {
	var domStrang = '';
	 	domStrang += `<div>`;
	 	domStrang += `<h1>${dinosaur.name}</h1>`;
	 	domStrang += `</div>`;
	 printToDom(domStrang);
};

var printToDom = function(strang) {
	outputDiv.append(strang);
};

module.exports = domString;
