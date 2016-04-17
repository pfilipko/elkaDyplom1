/**
 * Created by piotrek on 15.04.16.
 */

angular.module('myApp').controller('RankingCtrl',function ($scope, $http) {
    alert("View not implemented.");

    var technologies = [
        {name: "C#", likes: 0, dislikes: 0},
        {name: "asp", likes: 0, dislikes: 0},
        {name: "sql server", likes: 0, dislikes: 0},
        {name: "angularjs", likes: 0, dislikes: 0}
    ];

    $scope.technologies = technologies;

    $scope.incrementLikes = function(technology) {
        ++technology.likes;
    };

    $scope.incrementDislikes = function(technology) {
        ++technology.dislikes;
    };
});
