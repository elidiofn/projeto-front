app.controller("editComplaintCtrl", function ($scope, $http, toastr, $location) {
    $scope.complaint;

    $scope.searchComplaint = function (id) {
        $http.get("http://localhost:5000/SpringBootRestApi/api/queixa/" + id).then(function successCallback(response) {
            $scope.complaint = response.data;
        }, function errorCallback(error) {
            $scope.complaint = null;
            console.log(error);
        });
    }

    $scope.editComplaint = function (complaint) {
        $http.put("http://localhost:5000/SpringBootRestApi/api/queixa/", JSON.stringify(complaint))
            .then(function success(response) {
                toastr.success("Queixa editada com sucesso!");
            }, function error(error) {
                console.log(error);
                console.log("Problemas ao tentar editar queixa.");
            });
    }



});