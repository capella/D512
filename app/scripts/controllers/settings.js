'use strict';

/**
 * @ngdoc function
 * @name d512App.controller:SettingsCtrl
 * @description
 * # SettingsCtrl
 * Controller of the d512App
 */
angular.module('d512App')
    .controller('SettingsCtrl', function($scope, localStorageService, $translate, db) {
        $scope.load = false;
        $scope.save = function() {
            if (/^(postgres|mysql|sqlite3|mssql)*\:\/\/.*\:.*\@.*$/g.test($scope.dbinfo)) {
                $scope.load = true;
                db.connect($scope.dbinfo, function(err, conn) {
                    $scope.load = false;
                    if (!err) {
                        localStorageService.set('dbinfo', $scope.dbinfo);
                        $scope.error = false;
                    } else {
                        $scope.erroMsg = err;
                        $scope.error = true;
                        localStorageService.remove('dbinfo');
                    }
                    $scope.ok = !$scope.error;
                    $scope.$apply();
                });
            } else {
                $scope.error = true;
                $scope.ok = !$scope.error;
                $scope.erroMsg = "Formato não correto.";
            }
        };
        $scope.dbinfo = localStorageService.get('dbinfo');

    });