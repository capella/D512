'use strict';

/**
 * @ngdoc directive
 * @name d512App.directive:gsize
 * @description
 * # gsize
 */
angular.module('d512App')
    .directive('gsize', function() {
        return {
            restrict: 'A',
            link: function(scope, element) {
                console.log(element[0].offsetHeight);

            }
        };
    });