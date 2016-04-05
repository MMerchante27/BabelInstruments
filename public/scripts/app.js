angular.module("babelInstruments", ["ngRoute", "URL"]).config(
    ["$routeProvider", "paths", function($routeProvider, paths) {
        // Configuro las URLs de la aplicación
        $routeProvider.when(paths.home, {
            templateUrl:'views/Instruments.html'
        }).otherwise({
            templateUrl: 'views/404.html'
        })
    }]
);



