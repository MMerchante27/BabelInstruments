angular.module("babelInstruments").service('authService', ["$window","APIClient",

    function($window, APIClient) {
        this.saveUserAuth = function(user) {
            APIClient.userAuth(user).then(
                function(data) {
                  if(data.result == true){
                      $window.localStorage['user'] = user;
                  }else {
                    console.log("Fuera");
                  }
                },

                //Promesa rechazada
                function(data) {
                 console.log("Err bbdd");
                }
            );
        }

        this.getUserAuth = function() {
            return $window.localStorage['user'];
        }

        this.logoutUser =function(){
        	$window.localStorage.removeItem('user');
        }

    }
]);
