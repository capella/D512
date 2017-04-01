'use strict';

/**
 * @ngdoc function
 * @name d512App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the d512App
 */
angular.module('d512App')
    .controller('AboutCtrl', function($scope, myviews) {
        $scope.data = myviews.all();
        console.log($scope.data);
    });