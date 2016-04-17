/**
 * Created by piotrek on 15.04.16.
 */

angular.module('myApp').controller('SupervisorTopicCtrl',function ($scope, $http) {

    $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){
            $scope.topics = res.data;
        });

    $scope.interestedStudents = function() {
        $scope.url = 'supervisor/topic/students';
    }

    $scope.newTopic = function() {
        $scope.url = 'supervisor/topic/add';
    }

    $scope.edit = function() {
        $scope.url = 'supervisor/topic/edit';
    }

    $scope.clone = function() {
        $scope.url = 'supervisor/topic/clone';
    }

});
