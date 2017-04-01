'use strict';

/**
 * @ngdoc overview
 * @name d512App
 * @description
 * # d512App
 *
 * Main module of the application.
 */
angular
    .module('d512App', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'LocalStorageModule',
        'ui.bootstrap',
        'pascalprecht.translate',
        'ui.codemirror'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl',
                controllerAs: 'about'
            })
            .when('/settings', {
                templateUrl: 'views/settings.html',
                controller: 'SettingsCtrl',
                controllerAs: 'settings'
            })
            .when('/edit_code/:id?', {
              templateUrl: 'views/edit_code.html',
              controller: 'EditCodeCtrl',
              controllerAs: 'editCode'
            })
            .otherwise({
                redirectTo: '/'
            });
    }).config(['$locationProvider', function($locationProvider) {
        $locationProvider.hashPrefix('');
    }]).config(function(localStorageServiceProvider) {
        localStorageServiceProvider
            .setPrefix('D512');
    }).config(['$translateProvider', function($translateProvider) {
      // angular-translate

      $translateProvider.useStaticFilesLoader({
        prefix: '../app/translations/locale-',
        suffix: '.json'
      });
      $translateProvider.preferredLanguage('en');
      $translateProvider.useSanitizeValueStrategy('sanitize');

    }]);