(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var dom = require('./dom');

var initializer = function(){
	dom({name: "T-Rex"});
};

module.exports = {initializer};
},{"./dom":2}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
"use strict";

// const dom = require('./dom');

// dom.buildDomString([{name: 'T-REX!'}]);

var data = require('./data');

$(document).ready(function() {
	data.initializer();
});
},{"./data":1}]},{},[3]);