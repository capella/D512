'use strict';

describe('Service: db', function () {

  // instantiate service
  var db,
    init = function () {
      inject(function (_db_) {
        db = _db_;
      });
    };

  // load the service's module
  beforeEach(module('d512App'));

  it('should do something', function () {
    init();

    expect(!!db).toBe(true);
  });

  it('should be configurable', function () {
    module(function (dbProvider) {
      dbProvider.setSalutation('Lorem ipsum');
    });

    init();

    expect(db.greet()).toEqual('Lorem ipsum');
  });

});
