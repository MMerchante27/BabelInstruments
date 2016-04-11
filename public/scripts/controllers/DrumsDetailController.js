angular.module("babelInstruments").controller("DrumsDetailController", ["$scope", "$routeParams", "$location","$sce", "APIClient", "paths","authService", "buyService",
    function($scope, $routeParams, $location,$sce, APIClient, paths, authService, buyService) {

    // Scope init
    $scope.model = {};
    $scope.uiState = "loading";

    //Controller init
    $scope.$emit("ChangeTitle","Loading...");
        console.log("controller",$routeParams.id);

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }

    APIClient.getInstrument($routeParams.id).then(
        //Película  encontrada
        function(data) {
            $scope.model = data.instruments[0];
            $scope.uiState = 'ideal';
            $scope.$emit("ChangeTitle", $scope.model.title);
        },
        //Película no encontrada
        function(error) {
            $location.url(paths.notFound);
        }
    );

     
    $scope.comprar = function(data) {
            if (authService.getUserAuth()) {
                console.log("me compra");
                data.buy = "true";
                buyService.notifyShop(data);
            } else {
                console.log(data);
                $location.url(paths.login);
                // var url = URL.resolve(paths.bassDetail, { id: data._id });
                // $location.path(url);
            }

        }



}]);
