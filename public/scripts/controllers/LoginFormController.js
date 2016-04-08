angular.module("babelInstruments").controller('LoginFormController', ['$scope', "$location", "$rootScope", "paths", "logService", "authService",
    function($scope, $location, $rootScope, paths, logService, authService) {

        //Scope init
        $scope.model = {};
        $scope.uiState = 'loading';

        $scope.credentials = {
            name: '',
            password: ''
        };

        //Scope methods
        $scope.saveUser = function(credentials) {
            $scope.credentials.auth = 'true';
            authService.saveUserAuth($scope.credentials);
            logService.notifyLogin();


            // $scope.$emit("UserChanged", authService.getUserAuth()); 

        };

        logService.subscribeLogin($scope, function somethingChanged() {
          $scope.userState='logged';
          $location.url(paths.instruments);

        });

    }
]);
