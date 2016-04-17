/**
 * Created by piotrek on 15.04.16.
 */

angular.module('myApp').controller('DirectorTopicAssignCtrl',function ($scope, $http) {
    $http.get('resources/dist/js/angular/students.json')
        .then(function(res){
            $scope.students = res.data;
        });

    $scope.selectedTab = 1;
    $scope.selectedStudent;

    $scope.selectTab = function(tab){
        $scope.selectedTab = tab;
    };

    $scope.isSelected = function(tab) {
        return tab == $scope.selectedTab;
    };

    $scope.showStudent = function(student){
        $scope.selectedStudent = student;
        $scope.selectedTab = 1;
    };

    $scope.newTopic = function() {
        $scope.url = 'supervisor/topic/add';
    }
});