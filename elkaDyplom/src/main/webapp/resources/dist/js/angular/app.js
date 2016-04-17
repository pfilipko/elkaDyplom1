var mlApp = angular.module('myApp',['ngRoute']);

angular.module('myApp.controller',[]);
angular.module('myApp.factories',[]);

/*angular.module('myApp',['ui.bootstrap']);*/

mlApp.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {


    $routeProvider.
    when('/', {
        templateUrl: 'resources/templates/student/index.html',
        controller: 'StudentCtrl'
    }).
    when('/student', {
        templateUrl: 'resources/templates/student/index.html',
        controller: 'StudentCtrl'
    }).
    when('/student/topic', {
        templateUrl: 'resources/templates/student/topic/index.html',
        controller: 'StudentTopicCtrl'
    }).

    when('/supervisor/student', {
        templateUrl: 'resources/templates/supervisor/student/index.html',
        controller: 'SupervisorStudentCtrl'
    }).
    when('/supervisor/topic', {
        templateUrl: 'resources/templates/supervisor/topic/index.html',
        controller: 'SupervisorTopicCtrl'
    }).
    when('/supervisor/topic/add', {
        templateUrl: 'resources/templates/supervisor/topic/add.html',
        controller: 'SupervisorTopicAddCtrl'
    }).
    when('/supervisor/topic/clone', {
        templateUrl: 'resources/templates/supervisor/topic/clone.html',
        controller: 'SupervisorTopicCloneCtrl'
    }).
    when('/supervisor/topic/edit', {
        templateUrl: 'resources/templates/supervisor/topic/edit.html',
        controller: 'SupervisorTopicEditCtrl'
    }).
    when('/supervisor/topic/students', {
        templateUrl: 'resources/templates/supervisor/topic/students.html',
        controller: 'SupervisorTopicStudentsCtrl'
    }).

    when('/director/topic', {
        templateUrl: 'resources/templates/director/topic/index.html',
        controller: 'DirectorTopicCtrl'
    }).
    when('/director/topic/add', {
        templateUrl: 'resources/templates/director/topic/add.html',
        controller: 'DirectorTopicAddCtrl'
    }).
    when('/director/topic/edit', {
        templateUrl: 'resources/templates/director/topic/edit.html',
        controller: 'DirectorTopicEditCtrl'
    }).
    when('/director/topic/tags', {
        templateUrl: 'resources/templates/director/topic/tags.html',
        controller: 'DirectorTopicTagsCtrl'
    }).
    when('/director/topic/assign', {
        templateUrl: 'resources/templates/director/topic/assign.html',
        controller: 'DirectorTopicAssignCtrl'
    }).
    when('/director/user', {
        templateUrl: 'resources/templates/director/user/index.html',
        controller: 'DirectorUserCtrl'
    }).

    when('/manager/topic', {
        templateUrl: 'resources/templates/manager/topic/index.html',
        controller: 'ManagerTopicCtrl'
    }).

    when('/ranking', {
        templateUrl: 'resources/templates/ranking/index.html',
        controller: 'RankingCtrl'
    }).

    when('/test/add',{
        templateUrl: 'resources/templates/test/add.html',
        controller: 'addTestCtrl'
    }).
        otherwise(
        {
            template: 'there is no page here!'
        }
    )

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

}]);

mlApp.controller('addTestCtrl', function ($scope, $http, Test){

    $scope.add = function () {
        alert("wiem ze add");
        Test.createTopic($scope.topic).success(function (data, status) {
            $scope.topic=null;

            //updateMethods();
            //$location.path("/method");
            alert("udao sie heh");
        })
    };


});

mlApp.filter('selectDiplomaType', function($filter){
    return function(students){
        var chceckedType = $filter('filter')()

    }
});

mlApp.controller('mainCtrl', function ($scope/*, $http*/){

});

