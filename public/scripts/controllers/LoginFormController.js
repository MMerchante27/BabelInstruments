angular.module("babelInstruments").controller('LoginFormController', ['$scope', "$location", "$rootScope", "paths", "logService", "authService",
    function($scope, $location, $rootScope, paths, logService, authService) {

        //Scope init
        $scope.model = {};
        $scope.uiState = 'loading';

        $scope.credentials = {
            user: '',
            password: ''
        };

        //Scope methods
        $scope.saveUser = function(credentials) {
            $scope.credentials.auth = true;
            authService.saveUserAuth($scope.credentials)
            logService.notifyLogin();

        };

        logService.subscribeLogin($scope, function somethingChanged() {
            console.log("He cambiado a logged");
            $location.url(paths.instruments);

        });

    }
]);
