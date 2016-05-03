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
                return $http.get('resources/dist/js/angular/getTopics.json');
                //return $http.get('/rest/director/topic/');
            },
            createTopic: function(topic){
                return $http.post('/rest/director/topic/add',topic);
            },
            getStudentsForTopicAssignment: function () {
                //return $http.get('/rest/director/student/assign');
                return $http.get('resources/dist/js/angular/getTopics.json');
            }
        };
    });