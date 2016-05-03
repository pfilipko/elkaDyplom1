/**
 * Created by piotrek on 24.04.16.
 */

angular.module('myApp')
    .factory('InstituteFactory', function ($http) {
        // Service logic
        // ...

        // Public API here
        return {
            getInstitutes: function () {
                //return $http.get('/rest/institute/');
                return $http.get('resources/dist/js/angular/institutes.json');
            }
        };
    });