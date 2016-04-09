/**
 * Created by piotrek on 03.04.16.
 */

angular.module('myApp').controller('studentTopicIndexCtrl',function ($scope, $http, Student) {

    //$scope.title = Student.getContent();

    $scope.topic = Student.getContent();
    Student.getContent().success(function(data,status){

        $scope.topic = data;
    })

});