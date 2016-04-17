/**
 * Created by piotrek on 14.04.16.
 */

angular.module('myApp').controller('StudentCtrl',function ($scope, $http, StudentFactory) {

    $scope.topic;

    StudentFactory.getLoggedStudentInfo().success(function(data,status) {
        console.log(data);
        $scope.topic = data;
    });

});