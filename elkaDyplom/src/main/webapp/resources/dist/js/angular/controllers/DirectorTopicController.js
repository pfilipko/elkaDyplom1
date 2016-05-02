/**
 * Created by piotrek on 15.04.16.
 */

angular.module('myApp').controller('DirectorTopicCtrl',function ($scope, $http, DirectorFactory) {
    /*
     * Tworzenie linków.
     */
    $scope.newTopic = function() {
        $scope.url = 'director/topic/add';
    }

    $scope.edit = function() {
        $scope.url = 'director/topic/edit';
    }

    $scope.clone = function() {
        $scope.url = 'supervisor/topic/clone';
    }

    /**
     * Wołanie serwisów.
     */
    DirectorFactory.getTopics().success(function(data) {
        $scope.topics = data;
    })

});