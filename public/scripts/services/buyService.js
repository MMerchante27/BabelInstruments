angular.module("babelInstruments").service('buyService', ["$rootScope",
    function($rootScope) {

          return {
            subscribeShop: function(scope, callback) {
                var handler = $rootScope.$on('shop', callback);
            },

            notifyShop: function() {
                $rootScope.$emit('shop');
            },
            
        };
     
    }
]);