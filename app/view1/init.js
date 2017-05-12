'use strict';

var view = angular.module('viewInitial', ['ngRoute']);

view.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/viewInitial', {
        templateUrl: 'view1/view1.html',
        controller: 'ViewInitialCtrl',
        resolve: {
            loadCreate: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'viewInitial.new',
                    files: ['view1/view1.js']
                });
            }]
        }
    });
}]);