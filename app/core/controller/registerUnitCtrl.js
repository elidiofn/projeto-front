app.controller("registerUnitCtrl", function ($scope, $http, toastr, $location) {

    $scope.registerUnit = function (unit) {
        console.log(unit);
        $http.post("http://localhost:5000/SpringBootRestApi/api/unit/", JSON.stringify(unit))
            .then(function success(response) {
                toastr.success("Unidade criada com sucesso!");
            }, function error(error) {
                console.log(error);
                toastr.error("Problemas ao tentar adicionar queixa.");
            });
    }
});
