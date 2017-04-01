'use strict';

/**
 * @ngdoc service
 * @name d512App.db
 * @description
 * # db
 * Provider in the d512App.
 */
angular.module('d512App')
  .service('db', function (localStorageService) {

    // Private variables
    //var salutation = 'Hello';
    var anyDB = require('any-db');
    var connection = null;

    this.connect = function (url, callback) {
      anyDB.createConnection(url, function (err, conn) {
        if (!err) { connection = conn; }
        callback(err, conn);
      });
    };

    this.disconnect = function() {
      connection.close();
      connection = null;
    };

    this.isConnect = function() {
      return connection !== null;
    };

    var query = function(sql, callback) {
      if (!connection) {
        var dbInfo = localStorageService.get('dbinfo');
        if(dbInfo && dbInfo !== '') {
          this.connect(dbInfo, function(err, ok){
            if (!err) query(sql, callback);
          });
        }
      } else {
        connection.query(sql, callback);
      }
    }

    this.query = query;

    this.tables = function(callback) {
      var sql = 'show tables';
      this.query(sql, callback);
    }
    // Private constructor
    // function Greeter() {
    //   this.greet = function () {
    //     return salutation;
    //   };
    // }

    // // Public API for configuration
    // this.setSalutation = function (s) {
    //   salutation = s;
    // };

    // // Method for instantiating
    // this.$get = function () {
    //   return new Greeter();
    // };
  });
