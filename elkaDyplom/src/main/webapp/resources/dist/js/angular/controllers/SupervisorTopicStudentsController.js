/**
 * Created by piotrek on 15.04.16.
 */

angular.module('myApp').controller('SupervisorTopicStudentsCtrl',function ($scope, $http) {
    $http.get('resources/dist/js/angular/students.json')
        .then(function(res){
            $scope.students = res.data;
        });
});