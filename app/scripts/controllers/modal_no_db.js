'use strict';

/**
 * @ngdoc function
 * @name d512App.controller:ModalNoDbCtrl
 * @description
 * # ModalNoDbCtrl
 * Controller of the d512App
 */
angular.module('d512App')
  .controller('ModalNoDbCtrl', function ($translate, $scope, $uibModalInstance, $location) {
  	$scope.goSettings = function () {
  		$location.path("settings");
  	 	$uibModalInstance.close();
  	};
  });
