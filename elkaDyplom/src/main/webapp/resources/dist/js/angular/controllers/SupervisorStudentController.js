/**
 * Created by piotrek on 15.04.16.
 */

angular.module('myApp').controller('SupervisorStudentCtrl',function ($scope, $http) {

    $http.get('resources/dist/js/angular/students.json')
        .then(function(res){
            $scope.students = res.data;

        });

    $scope.toggleDetail = function($index) {
        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };

});