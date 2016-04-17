/**
 * Created by piotrek on 16.04.16.
 */

angular.module('myApp')
    .factory('DirectorFactory', function ($http) {
        // Service logic
        // ...


        // Public API here
        return {
            getTopics: function () {
                return $http.get('resources/dist/js/angular/topics.json');
            }
        };
    });