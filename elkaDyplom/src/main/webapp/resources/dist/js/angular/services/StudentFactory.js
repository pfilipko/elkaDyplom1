/**
 * Created by piotrek on 16.04.16.
 */

angular.module('myApp').factory('StudentFactory', function ($http) {
    return {
        getLoggedStudentInfo: function() {
            //return $http.get('rest/student/');
            return $http.get('resources/dist/js/angular/getLoggedStudentInfo.json');
        },
        getTopics: function() {
            //return $http.get('/rest/student/topic/');
            return $http.get('resources/dist/js/angular/getTopics.json');
        }
    }

});