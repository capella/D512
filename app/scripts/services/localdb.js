'use strict';

/**
 * @ngdoc service
 * @name d512App.myviews
 * @description
 * # myviews
 * Service in the d512App.
 */
angular.module('d512App')
    .service('myviews', function(localStorageService) {
        var local = localStorageService.get('myviews2');
        if (!local) {
            local = [];
        } else {
            local = JSON.parse(local);
        }

        this.save = function() {
            localStorageService.set('myviews2', JSON.stringify(local));
        }

        this.saveOne = function(val) {
            for (var i in local) {
                if (local[i].id == val.id) local.splice(i, 1);
            }
            local.push(val);
            this.save();
        }

        this.getbyID = function(id) {
            for (var i in local) {
                if (local[i].id == id) return local[i];
            }
        }

        this.all = function() {
            return local;
        }

    });