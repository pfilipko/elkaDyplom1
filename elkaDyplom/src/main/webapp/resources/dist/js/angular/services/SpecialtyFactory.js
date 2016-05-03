/**
 * Created by piotrek on 24.04.16.
 */

angular.module('myApp')
    .factory('SpecialtyFactory', function ($http) {
        // Service logic
        // ...

        // Public API here
        return {
            getSpecialties: function () {
                //return $http.get('/rest/specialty/');
                return $http.get('resources/dist/js/angular/specialties.json');
            }
        };
    });