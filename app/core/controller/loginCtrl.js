app.controller("loginCtrl", function ($scope, toastr) {
    $scope.validacao = function (usuario, senha) {
        if(usuario == null || senha == null){
            toastr.error("Digite os campos corretamente!");
        }



    }
});
