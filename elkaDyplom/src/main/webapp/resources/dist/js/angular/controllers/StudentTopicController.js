/**
 * Created by piotrek on 14.04.16.
 */

angular.module('myApp').controller('StudentTopicCtrl',function ($scope, $http, StudentFactory) {

    $scope.selected = [];
    $scope.numOfSelected = 0;

    $scope.selectTopic = function(topic) {

        $scope.selected.push(topic);
        ++$scope.numOfSelected;
    };

    $scope.removeTopic= function (topic) {
        var index = $scope.selected.indexOf(topic);
        $scope.selected.splice(index,1);
        --$scope.numOfSelected;
    }

    /**
     * Wołanie serwisów
     */

 /*   $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){

            $scope.topics = res.data;
        });*/
    StudentFactory.getTopics().success(function(data) {
        $scope.topics = data;
    })
});