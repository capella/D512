'use strict';

describe('Controller: ModalNoDbCtrl', function () {

  // load the controller's module
  beforeEach(module('d512App'));

  var ModalNoDbCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ModalNoDbCtrl = $controller('ModalNoDbCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ModalNoDbCtrl.awesomeThings.length).toBe(3);
  });
});
