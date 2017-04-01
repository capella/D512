'use strict';

/**
 * @ngdoc function
 * @name d512App.controller:EditCodeCtrl
 * @description
 * # EditCodeCtrl
 * Controller of the d512App
 */
angular.module('d512App')
  .controller('EditCodeCtrl', function ($scope, db) {
  	db.tables(function(err, data){
  		var tables = {};
  		data.rows.forEach(function(elemento){
  			tables[elemento[Object.keys(elemento)[0]]] = [];
  		});
  		console.log(tables);
		$scope.editorOptions = {
		    mode: "text/x-mysql",
		    indentWithTabs: true,
		    smartIndent: true,
		    lineNumbers: true,
		    matchBrackets : true,
		    autofocus: true,
		    extraKeys: {
		    	"Ctrl-Space": "autocomplete",
		    	"Ctrl-Alt": "autocomplete",
		    },
		    hintOptions: {tables: tables}
		};
		$scope.$apply();
		var graph = require("../graphs/line/line")('#chart', 400, 400);
		console.log(graph)
	});
  });
