'use strict';

angular.module('app',
    [
        // Dependency Inject Goes inside this array
        'ui.router',  // we inject/load ui-router for routing
        'app.services', // we inject/load the services
        'app.controllers', // we inject/load the controllers
        'blockUI', // display spinner when making AJAX calls        
    ]
)
    .value("baseWebApiUrl", "http://win-08q9h34t5kn.pxd.lab:57158/")

    .config(['$stateProvider', 
        function ($stateProvider) {
            // our routers, self explanatory
            $stateProvider
                .state('Authorised', {
                    url: '/Authorised',
                    templateUrl: './Views/Authorised.html',
                    controller: 'customerController'
                })
                .state('Restricted', {
                    url: '/Restricted',
                    templateUrl: './Views/Restricted.html',
                    controller: 'androidController'
                })                
            ;
        }]);