'use strict';

/**
 * @ngdoc function
 * @name d512App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the d512App
 */
angular.module('d512App')
  .controller('MainCtrl', function (localStorageService, $uibModal, $translate) {
    var dbInfo = localStorageService.get('dbinfo');
    var $ctrl = this;
    if(!dbInfo || dbInfo === '') {
    console.log(dbInfo);
    	   $uibModal.open({
		      animation: $ctrl.animationsEnabled,
		      ariaLabelledBy: 'modal-title-top',
		      ariaDescribedBy: 'modal-body-top',
		      templateUrl: 'views/modal_no_dbinfo.html',
		      controller: 'ModalNoDbCtrl'
		    });
    }
  });
