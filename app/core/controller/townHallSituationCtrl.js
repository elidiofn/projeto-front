app.controller("townHallSituationCtrl", function ($scope, $http, toastr) {
    $scope.townHall;

    $scope.searchSituation = function () {
        $http.get("http://localhost:5000/SpringBootRestApi/api/prefeitura" ).then(function successCallback(response) {
            $scope.townHall = response.data;
        });
    }

    $scope.editSituation = function (townHall) {
        $http.put("http://localhost:5000/SpringBootRestApi/api/prefeitura", JSON.stringify(townHall))
            .then(function success(response) {
                toastr.success("Situação editada com sucesso!");
            });
    }

});