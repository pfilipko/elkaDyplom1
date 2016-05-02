/**
 * Created by piotrek on 15.04.16.
 */

angular.module('myApp').controller('SupervisorStudentCtrl',function ($scope, $http, SupervisorFactory) {

    $scope.toggleDetail = function($index) {
        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };

    /**
     * Wołanie serwisów.
     */
    SupervisorFactory.getStudents().success(function(data) {
        $scope.students = data;
    });
});