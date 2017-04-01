'use strict';

describe('Controller: EditCodeCtrl', function () {

  // load the controller's module
  beforeEach(module('d512App'));

  var EditCodeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditCodeCtrl = $controller('EditCodeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditCodeCtrl.awesomeThings.length).toBe(3);
  });
});
