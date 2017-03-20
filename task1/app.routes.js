'use strict';

angular
    .module('app.routes', ['ngRoute'])
    .config(config);

function config ($routeProvider) {
    $routeProvider.
        when('/', {
            templateUrl: 'modules/home/home.tpl.html',
            controller: 'HomeController as home'
        })            
        .otherwise({
            redirectTo: '/'
        });
}