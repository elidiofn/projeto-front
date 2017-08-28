app.controller("searchHealthUnitCtrl", function ($scope, $http) {
    $scope.unit;

    $scope.searchHU = function (bairro) {
        $http.get("http://localhost:5000/SpringBootRestApi/api/unit/" + bairro).then(function successCallback(response) {
            $scope.unit = response.data;
        }, function errorCallback(error) {
            $scope.unit = null;
            console.log(error);
        });
    }
});
