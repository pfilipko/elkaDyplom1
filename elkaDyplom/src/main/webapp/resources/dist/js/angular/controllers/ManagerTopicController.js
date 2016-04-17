/**
 * Created by piotrek on 15.04.16.
 */

angular.module('myApp').controller('ManagerTopicCtrl',function ($scope, $http) {
    $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){
            $scope.topics = res.data;
        });

    $scope.newTopic = function() {
        $scope.url = 'supervisor/topic/add';
    }
});