angular.module("babelInstruments").service("APIClient", 
	["$http", "$q","$filter", "apiPaths", "URL", function($http, $q,$filter, apiPaths, URL){

		this.apiRequest = function(url){
			// Crear el objeto diferido
			var deferred = $q.defer();
			// Hacer trabajo asíncrono
			$http.get(url).then(

				//petición ok 
			
				function(response){
					// resolver la promesa
					deferred.resolve(response.data);
				},
				//pretición KO
				function(response){
					// rechazar la promesa
					deferred.reject(response.data);
				}

			);

			// devolver la promesa
			return deferred.promise;
		}

		this.getInstruments = function(type){
			// url = URL.resolve(apiPaths.instruments, {type:guitars});
			// console.log(url);
			var url = apiPaths.instruments +"?type=" + type
			return this.apiRequest(url);
			
		};

		this.getInstrument = function(instrumentId){
			console.log("paso por aqui");
			console.log(instrumentId);
			var url = apiPaths.instruments + "/?id=" + instrumentId;
			console.log("ApiURL",url);
			return this.apiRequest(url);
		}

		this.createInstrument = function(instrument){
			var deferred = $q.defer();
			// var date = new Date();
			// // date = $filter('date')(date, "yyyy/MM/dd");
			// movie.create_date = date;
			$http.post(apiPaths.instruments, instrument).then(
				function(response){
					deferred.resolve(response.data);
				},
				function(response){
					deferred.reject(response.data)
				}
			)
			// devolver la promesa
			return deferred.promise;
		}
		
		this.modifyInstrument = function(instrument){
			var deferred = $q.defer();

			var url = URL.resolve(apiPaths.instrumentDetail, {id: instrument.id});

			$http.put(url, instrument).then(
				function(response){
					deferred.resolve(response.data);
				},
				function(response){
					deferred.reject(response.data);
				}
			)
			return deferred.promise;
		}

		this.userAuth = function(user){
			var deferred = $q.defer();
			$http.post(apiPaths.users, user).then(
				function(response){
					deferred.resolve(response.data);
				},
				function(response){
					deferred.reject(response.data);
				}
			)
			return deferred.promise;
		}
}]

);