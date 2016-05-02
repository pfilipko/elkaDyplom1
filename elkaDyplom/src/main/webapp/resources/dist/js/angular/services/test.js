/**
 * Created by piotrek on 14.04.16.
 */

angular.module('myApp').factory('Test', function ($http) {
    return {

        createTopic: function(test){
            return $http.post('/rest/topic/',test);
        },
        getTopicList: function(test){
            return $http.get('/rest/topic/test',test);
        }
    }

});