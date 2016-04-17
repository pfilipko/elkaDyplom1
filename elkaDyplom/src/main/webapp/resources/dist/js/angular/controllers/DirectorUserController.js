/**
 * Created by piotrek on 15.04.16.
 */

angular.module('myApp').controller('DirectorUserCtrl',function ($scope, $http) {
    $http.get('resources/dist/js/angular/users.json')
        .then(function(res){
            $scope.users = res.data;
        });
});