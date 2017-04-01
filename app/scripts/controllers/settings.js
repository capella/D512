'use strict';

/**
 * @ngdoc function
 * @name d512App.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the d512App
 */
angular.module('d512App')
  .controller('SettingsCtrl', function ($scope, localStorageService, $translate, db) {
  	$scope.load = false;
    $scope.save = function (data) {
    	$scope.load = true;
    	db.connect(data, function(err, conn) {
    		      console.log("oi");

    		$scope.load = false;
    		if (!err) {
    			localStorageService.set('dbinfo', data);
    			$scope.error = false;
    		} else {
    			$scope.erroMsg = err;
    			$scope.error = true;
    			localStorageService.remove('dbinfo');
    		}
    		$scope.ok = !$scope.error;
    		$scope.$apply();
    	});
    };
    $scope.dbinfo = localStorageService.get('dbinfo');
    
  });
