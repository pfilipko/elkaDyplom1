/**
 * Created by piotrek on 21.03.16.
 */

angular.module('myApp').controller('listCtrl',function ($scope, $http) {

    $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){

            $scope.topics = res.data;
        });

    $scope.selected = [];
    $scope.numOfSelected = 0;

    $scope.selectTopic = function(topic) {

        $scope.selected.push(topic);
        ++$scope.numOfSelected;
        //$scope.selected = topic;
    };

    $scope.removeTopic= function (topic){
        var index = $scope.selected.indexOf(topic);
        $scope.selected.splice(index,1);
        --$scope.numOfSelected;
    }

});
