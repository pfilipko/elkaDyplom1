/**
 * Created by piotrek on 16.04.16.
 */

angular.module('myApp').factory('SupervisorFactory', function ($http) {
    return {
        getTopics: function () {
            //return $http.get('resources/dist/js/angular/topics.json');
            return $http.get('/rest/supervisor/topic/');
        },
        getSupervisors: function() {
            return $http.get('rest/supervisor/');
        },
        createTopic: function(topic){
            return $http.post('/rest/supervisor/topic/add',topic);
        },
        /**
         * @returns zbiór studentów podlegających promotorowi
         */
        getStudents: function() {
           // return $http.get('resources/dist/js/angular/students.json');
            return $http.get('rest/supervisor/student/');

        }
    }
});