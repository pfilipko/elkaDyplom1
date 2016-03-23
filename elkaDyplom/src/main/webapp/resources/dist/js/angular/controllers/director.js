/**
 * Created by piotrek on 21.03.16.
 */

angular.module('myApp').controller('listCtrl',function ($scope, $http) {


    $http.get('resources/dist/js/angular/topics.json')
        .then(function(res){
            alert("listCtrl");
            $scope.topics = res.data;
        });

    $scope.chooseTopic = function() {

        $scope.selected = "1.Technologia i charakteryzacja struktur MISFET z dielektrykami bramkowymi w postaci ultra-cienkich warstw dielektrycznych wytwarzanych metodą PECVD ";
    };

});