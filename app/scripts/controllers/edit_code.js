'use strict';

/**
 * @ngdoc function
 * @name d512App.controller:EditCodeCtrl
 * @description
 * # EditCodeCtrl
 * Controller of the d512App
 */
angular.module('d512App')
    .controller('EditCodeCtrl', function($scope, db, myviews, $routeParams) {

        var view = {
            "id": Math.random().toString(36).substring(2)
        };
        if ($routeParams && $routeParams.id) {
            view = myviews.getbyID($routeParams.id);
        }


        var fs = require('fs');
        db.tables(function(err, data) {
            var tables = {};
            data.rows.forEach(function(elemento) {
                tables[elemento[Object.keys(elemento)[0]]] = [];
            });
            $scope.editorOptions = {
                mode: "text/x-mysql",
                indentWithTabs: true,
                smartIndent: true,
                lineNumbers: true,
                matchBrackets: true,
                autofocus: true,
                extraKeys: {
                    "Ctrl-Space": "autocomplete",
                    "Ctrl-Alt": "autocomplete",
                },
                hintOptions: {
                    tables: tables
                }
            };
            $scope.$apply();
        });

        $scope.save = function() {
            db.query($scope.cmModel, function(err, data) {
                if (!err && data && $scope.view && $scope.view.type) {
                    $scope.view.query = $scope.cmModel;
                    myviews.saveOne($scope.view);
                    var graph = require($scope.view.type)('#chart', window.innerWidth / 2 - 50, window.innerHeight / 2, data);
                } else {
                    dialog.showErrorBox("SQL ERROR", "Defina o tipo de grafico. " + err);
                }
            });
        };

        fs.readdir("./graphs/", function(err, items) {
            $scope.data = items.map(function(e) {
                return {
                    id: "../graphs/" + e,
                    name: e.toUpperCase()
                };
            });

        });
        $scope.$on('$viewContentLoaded', function() {
            $scope.view = view;
            $scope.cmModel = $scope.view.query;
            $scope.save();
        });

    });