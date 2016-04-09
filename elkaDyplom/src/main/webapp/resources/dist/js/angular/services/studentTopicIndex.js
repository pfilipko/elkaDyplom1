/**
 * Created by piotrek on 03.04.16.
 */

angular.module('myApp').factory('Student', function ($http) {
    return {

        getContent: function(){
            return $http.get('services/StudentTopicIndex/');
        }
    }

});