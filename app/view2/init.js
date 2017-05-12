'use strict';

var view = angular.module('view2', ['ngRoute']);

view.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl',
        resolve: {
            loadCreate: ['$ocLazyLoad', function($ocLazyLoad) {
                return $ocLazyLoad.load({
                    name: 'myApp.view2',
                    files: ['view2/view2.js']
                });
            }]
        }
    });
}]);