/**
 * Created by piotrek on 15.04.16.
 */

angular.module('myApp').controller('DirectorTopicAddCtrl',function ($scope, DirectorFactory, SpecialtyFactory,
                                                                    InstituteFactory, StudiesTypesFactory,
                                                                    SupervisorFactory) {
    //$scope.types = [{id:'1', name:'inzynierskie'},{id:'2', name:'magisterskie'}];
    $scope.supervisors = [];
    $scope.types = [];
    $scope.number_of_students = ['1','2', '3']; //[{value:'1'},{value:'2'}];
    $scope.specialties = [];
    $scope.institutes = [];

    init = function() {
        SupervisorFactory.getSupervisors().success(function (data, supervisor) {
            $scope.supervisors = data;
            console.log($scope.supervisors);
        });

        SpecialtyFactory.getSpecialties().success(function (data, status) {
            $scope.specialties = data;
            console.log($scope.specialties);
        });

        InstituteFactory.getInstitutes().success(function (data, status) {
            $scope.institutes = data;
            console.log($scope.institutes);
        });

        StudiesTypesFactory.getStudiesTypes().success(function (data, status) {
            $scope.studiesTypes = data;
            console.log($scope.studiesTypes);
        });
    }

    init();

    $scope.add = function() {
        console.log($scope.topic);
        DirectorFactory.createTopic($scope.topic).success(function (data, status) {
            $scope.topic = null;

            //updateMethods();
            //$location.path("/method");
        });
    }

});