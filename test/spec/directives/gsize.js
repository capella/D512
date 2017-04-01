'use strict';

describe('Directive: gsize', function () {

  // load the directive's module
  beforeEach(module('d512App'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<gsize></gsize>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the gsize directive');
  }));
});
