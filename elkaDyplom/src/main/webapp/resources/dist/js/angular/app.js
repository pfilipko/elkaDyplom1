var mlApp = angular.module('myApp',['ngRoute']);

angular.module('myApp.controller',[]);
angular.module('myApp.factories',[]);
/*angular.module('myApp',['ui.bootstrap']);*/

mlApp.config(['$routeProvider', '$locationProvider', function AppConfig($routeProvider, $locationProvider) {
    $routeProvider.
    when('/', {
        templateUrl: 'resources/templates/student/topic/index.html',
        controller: 'studentTopicIndexCtrl'
    }).
    when('/student/topic', {
        templateUrl: 'resources/templates/student/topic/index.html'
    }).
    when('/student/topic/list', {
        templateUrl: 'resources/templates/student/topic/list.html',
        controller: 'listCtrl'
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
        controller: 'addTopicCtrl'
    }).
    when('/director/topic/add', {
        templateUrl: 'resources/templates/director/topic/add.html',
        controller: 'addTopicCtrl'
    }).
    when('/supervisor/topic/interested', {
        templateUrl: 'resources/templates/supervisor/topic/interested.html',
        controller: 'interestedCtrl'
    }).
    when('/supervisor/topic/clone', {
        templateUrl: 'resources/templates/supervisor/topic/clone.html',
        controller: 'cloneTopicCtrl'
    }).
    when('/supervisor/topic/edit', {
        templateUrl: 'resources/templates/supervisor/topic/edit.html',
        controller: 'editTopicCtrl'
    }).
    when('/supervisor/ranking', {
        templateUrl: 'resources/templates/supervisor/ranking/index.html',
        controller: 'rankingCtrl'
    }).
    when('/director/topic', {
        templateUrl: 'resources/templates/director/topic/index.html',
        controller: 'directorTopicCtrl'
    }).
    when('/manager/topic', {
        templateUrl: 'resources/templates/manager/topic/accept.html',
        controller: 'acceptCtrl'
    }).
    when('/director/topic/edit', {
        templateUrl: 'resources/templates/director/topic/edit.html',
        controller: ''
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

mlApp.controller('acceptCtrl', function ($scope, $http){

    $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){
            $scope.topics = res.data;
        });

    $scope.newTopic = function() {
        $scope.url = '#/supervisor/topic/add';
    }


});

mlApp.controller('assignCtrl', function ($scope, $http){

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
        $scope.url = '#/supervisor/topic/add';
    }


});

mlApp.filter('selectDiplomaType', function($filter){
    return function(students){
        var chceckedType = $filter('filter')()

    }
});

mlApp.controller('myStudentCtrl', function ($scope, $http){

    $http.get('resources/dist/js/angular/students.json')
        .then(function(res){
            $scope.students = res.data;

        });

    $scope.toggleDetail = function($index) {
        //$scope.isVisible = $scope.isVisible == 0 ? true : false;
        $scope.activePosition = $scope.activePosition == $index ? -1 : $index;
    };

});

mlApp.controller('rankingCtrl', function ($scope, $http){

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

mlApp.controller('directorTopicCtrl', function ($scope, $http){

    $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){
            $scope.topics = res.data;
        });

    $scope.newTopic = function() {
        $scope.url = '#/director/topic/add';
    }

    $scope.edit = function() {
        $scope.url = '#/director/topic/edit';
    }

    $scope.clone = function() {
        $scope.url = '#/supervisor/topic/clone';
    }

});

mlApp.controller('supervisorTopicCtrl', function ($scope, $http){

    $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){
            $scope.topics = res.data;
        });

    $scope.interestedStudents = function() {
        $scope.url = '#/supervisor/topic/interested';
    }

    $scope.newTopic = function() {
        $scope.url = '#/supervisor/topic/add';
    }

    $scope.edit = function() {
        $scope.url = '#/supervisor/topic/edit';
    }

    $scope.clone = function() {
        $scope.url = '#/supervisor/topic/clone';
    }

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

