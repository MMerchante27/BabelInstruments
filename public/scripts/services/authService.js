angular.module("babelInstruments").service('authService', ["$location","$window","$rootScope","APIClient","paths","logService",

    function($location, $window,$rootScope, APIClient, paths,logService) {
        this.saveUserAuth = function(user) {
            APIClient.userAuth(user).then(
                function(data) {
                  console.log("Data",data);
                  if(data.result == true){
                      $window.localStorage['user'] = data.rows.name;
                      console.log("Holi",$window.localStorage['user']);
                      logService.notifyLogin();

                  }else {
                    $window.alert("Incorrect credentials");
                    $location.path(paths.login);
                    console.log("Fuera");
                  }
                },

                //Promesa rechazada
                function(data) {
                  console.log("Data bbdd", data);
                 console.log("Err bbdd");
                }
            );
        }

        this.getUserAuth = function() {
            return $window.localStorage['user'];
        }

        this.logoutUser =function(){
          	$window.localStorage.removeItem('user');
            console.log("Borrar", $window.localStorage.getItem("user"));
        }

    }
]);
