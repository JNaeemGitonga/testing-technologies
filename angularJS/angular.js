// const angular = require('angular.min.js');

const demoApp = angular.module('demoApp', [])

const controllers = {};

controllers.SimpleController = function ($scope) {
    
    $scope.customers = [
    {name:'Jaha', city:'atlanta'},
    {name:'Romoke', city:'london'},
    {name:'Kenya', city:'santo domingo'}
    ]
}

demoApp.controller(controllers)