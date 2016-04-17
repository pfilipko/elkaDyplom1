/**
 * Created by piotrek on 16.04.16.
 */

angular.module('myApp').factory('StudentFactory', function ($http) {
    return {
        getLoggedStudentInfo: function() {
            return $http.get('rest/student/');
        }
    }

});