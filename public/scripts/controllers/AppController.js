angular.module("babelInstruments").controller("AppController", ["$scope", "$location", "paths",
    function($scope, $location, paths) {
        var controller = this;
        //Controller properties
        controller.titles = {};
        controller.titles[paths.babelInstruments] = "Instruments List";
        // controller.titles[paths.newMovie] = "New Movie";
        // controller.titles[paths.myMovies] = "My Movies";

        // Model init
        $scope.model = { //Representación modelo
            title: ""
        };

        // $scope.userAuth = "";
        // authService.logoutUser();

        //Scope event listeners
        $scope.$on("$locationChangeSuccess", function(evt, currentRoute) { //.$on capturar evento 
                $scope.model.title = controller.titles[$location.path()] || "404 Not Found";
            
        });

        $scope.$on("ChangeTitle", function(evt, title) {
            $scope.model.title = title;
        });



    }
]);
