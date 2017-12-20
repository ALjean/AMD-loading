import angular from 'angular'
import uirouter from 'angular-ui-router'





const routes = function routes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<h3>Hello Angular application</h3>'
        });
};

let app = angular.module('app', [uirouter])
    .config(routes);


export default app
