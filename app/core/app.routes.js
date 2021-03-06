app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "view/search.html"
    }).when("/complaint/register", {
        templateUrl: "view/registerComplaint.html",
    }).when("/admArea", {
        templateUrl: "indexAdm.html",
    }).when("/registerFoodComplaint", {
        templateUrl: "view/registerFoodComplaint.html",
        controller : "registerFoodComplaintCtrl",
    }).when("/townHall/edit", {
        templateUrl: "view/townHallSituation.html",
        controller : "townHallSituationCtrl"
    }).when("/registerAnimalComplaint", {
        templateUrl: "view/registerAnimalComplaint.html",
        controller : "registerAnimalComplaintCtrl",
    }).when("/searchcomplaint", {
        templateUrl : "view/search_complaint.html",
        controller: "searchComplaintCtrl"
    }).when("/search_health_unit", {
        templateUrl: "view/searchHealthUnit.html",
        controller : "searchHealthUnitCtrl",
    }).when("/searchaverage",{
        templateUrl : "view/search_average_per_patient.html",
        controller: "searchAverangeCtrl"
    }).when("/createdcomplaint/:id", {
        templateUrl : "view/successPage.html",
        controller : "messageCreatedComplaintCtrl"
    }).when("/generalSituationComplaints", {
        templateUrl : "view/generalSituationComplaints.html",
        controller : "generalSituationComplaintsCtrl"
    }).when("/adminArea", {
        templateUrl : "view/adminArea.html",
        controller : "loginCtrl"
    }).when("/unit/register", {
        templateUrl: "view/registerUnit.html",
        controller: "registerUnitCtrl",
    }).when("/complaint/edit", {
        templateUrl: "view/editComplaint.html",
        controller: "editComplaintCtrl",
    }).otherwise({
        redirectTo: '/'
    });
});
