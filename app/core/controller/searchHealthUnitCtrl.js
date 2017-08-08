app.controller("searchHealthUnitCtrl", function ($scope, $http) {
    $scope.complaint;

    neighborhood = function (neighborhood) {
        $http.get("http://localhost:5000/SpringBootRestApi/api/unidade/busca?bairro=" + neighborhood).then(function successCallback(response) {
            $scope.complaint = response.data;
        }, function errorCallback(error) {
            $scope.complaint = null;
            console.log(error);
        });
    }
});
