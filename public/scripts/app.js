angular.module("babelInstruments", ["ngRoute", "URL"]).config(
    ["$routeProvider", "paths", function($routeProvider, paths) {
        // Configuro las URLs de la aplicación
        $routeProvider.when(paths.home, {
            templateUrl:'views/InstrumentList.html'
        }).when(paths.instruments, {
            templateUrl:'views/InstrumentList.html'
        }).when(paths.drums, {
            templateUrl:'views/Drums.html'
        }).when(paths.guitars, {
            controller:'GuitarListController',
            templateUrl:'views/instrumentItemList.html'
        }).when(paths.drums, {
            controller:'DrumsListController',
            templateUrl:'views/instrumentItemList.html'
        }).when(paths.keys, {
            controller:'KeysListController',
            templateUrl:'views/instrumentItemList.html'
        }).when(paths.basses, {
            controller:'BassListController',
            templateUrl:'views/instrumentItemList.html'
        }).when(paths.login, {
            templateUrl:'views/Login.html'
        }).otherwise({
            templateUrl: 'views/404.html'
        })
    }]
);



