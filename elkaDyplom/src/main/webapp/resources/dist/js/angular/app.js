var mlApp = angular.module('myApp',['ngRoute']);

angular.module('myApp.controllers',[]);
angular.module('myApp.factories',[]);
/*angular.module('myApp',['ui.bootstrap']);*/

mlApp.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {
    $routeProvider.

    when('/', {
        /*templateUrl: 'resources/templates/sample.html'*/
        templateUrl: 'resources/templates/student/topic/index.html',
        /*controller: 'testowyCtrl'*/
    }).
    when('/student/topic', {
        templateUrl: 'resources/templates/student/topic/index.html',
        controller: 'studentIndexCtrl'
    }).
    when('/student/topic/list', {
        templateUrl: 'resources/templates/student/topic/list.html',
        controller: 'testowyCtrl'
    }).

    when('/supervisor/student', {
        templateUrl: 'resources/templates/supervisor/student/index.html',
        controller: 'myStudentCtrl'
    }).
    when('/supervisor/topic', {
        templateUrl: 'resources/templates/supervisor/topic/index.html',
        controller: 'supervisorTopicCtrl'
    }).
    when('/supervisor/topic/add', {
        templateUrl: 'resources/templates/supervisor/topic/add.html',
        controller: 'topics/addCtrl'
    }).
    when('/supervisor/topic/edit', {
        templateUrl: 'resources/templates/supervisor/topic/edit.html',
        controller: 'topics/editCtrl'
    }).
    when('/supervisor/ranking', {
        templateUrl: 'resources/templates/supervisor/ranking/index.html',
        controller: 'rankingCtrl'
    }).
    when('/director/topic', {
        templateUrl: 'resources/templates/director/topic/index.html',
        controller: ''
    }).
    when('/director/topic/accept', {
        templateUrl: 'resources/templates/director/topic/accept.html',
        controller: 'acceptCtrl'
    }).
    when('/director/topic/assign', {
        templateUrl: 'resources/templates/director/topic/assign.html',
        controller: 'assignCtrl'
    }).
    when('/director/student', {
        templateUrl: 'resources/templates/director/student/index.html',
        controller: ''
    }).
    when('/director/user', {
        templateUrl: 'resources/templates/director/user/index.html',
        controller: 'userCtrl'
    }).
    when('/method/edit/:id',{
        templateUrl: 'resources/templates/method/edit.html',
        controller: 'methodCtrl'
    }).
        otherwise(
        {
            template: 'there is no page here!'
        }
    )
}]);

mlApp.controller('testowyCtrl', function ($scope, $http){

    $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){
            $scope.topics = res.data;
        });

    $scope.chooseTopic = function() {

        $scope.selected = "1.Technologia i charakteryzacja struktur MISFET z dielektrykami bramkowymi w postaci ultra-cienkich warstw dielektrycznych wytwarzanych metodą PECVD ";
    };

});

mlApp.controller('acceptCtrl', function ($scope, $http){

    $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){
            $scope.topics = res.data;
        });



});

mlApp.controller('assignCtrl', function ($scope, $http){

    $http.get('resources/dist/js/angular/students.json')
        .then(function(res){
            $scope.students = res.data;
        });

});

mlApp.controller('myStudentCtrl', function ($scope, $http){

    $http.get('resources/dist/js/angular/students.json')
        .then(function(res){
            $scope.students = res.data;
        });

});


mlApp.controller('supervisorTopicCtrl', function ($scope, $http){

    $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){
            $scope.topics = res.data;
        });

});

mlApp.controller('userCtrl', function ($scope, $http){

    $http.get('resources/dist/js/angular/users.json')
        .then(function(res){
            $scope.users = res.data;
        });

});

mlApp.controller('mainCtrl', function ($scope/*, $http*/){


    /*$scope.mainPageMessage = "<h2>I am main page!</h2>";*/
    /*$http.get('services/page.json').success(function(data) {
     $scope.name = data.site_config.name;
     $scope.username = data.user_info.name +" "+ data.user_info.surname;
     $scope.mainMenu = data.main_menu;
     });*/
});

