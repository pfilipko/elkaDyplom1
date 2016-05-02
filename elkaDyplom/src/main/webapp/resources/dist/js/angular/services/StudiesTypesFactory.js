/**
 * Created by piotrek on 29.04.16.
 */

angular.module('myApp')
    .factory('StudiesTypesFactory', function ($http) {
        // Service logic
        // ...

        // Public API here
        return {
            getStudiesTypes: function () {
                return $http.get('/rest/studiestypes/');
            }
        };
    });