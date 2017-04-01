'use strict';

/**
 * @ngdoc function
 * @name d512App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the d512App
 */
angular.module('d512App')
    .controller('MainCtrl', function(localStorageService, $uibModal, $translate, myviews, $scope, $location) {
        var dbInfo = localStorageService.get('dbinfo');
        var $ctrl = this;
        if (!dbInfo || dbInfo === '') {
            $location.path("settings");
            dialog.showErrorBox("No db set", "Configure seu banco de dados... ");
        } else {
            $scope.data = myviews.all();
            console.log($scope.data);
        }
    });