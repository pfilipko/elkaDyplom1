/**
 * Created by piotrek on 08.04.16.
 */

angular.module('myApp').controller('interestedCtrl',function ($scope, $http) {

    $http.get('resources/dist/js/angular/students.json')
        .then(function(res){
            $scope.students = res.data;
        });
});
