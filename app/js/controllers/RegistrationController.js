/**
 * User: Rias
 * Date: 9/14/13
 * Time: 8:31 PM
 * Description : Description will be here
 * File name : RegistrationController
 */

contactManager.controller("RegistrationController",
    function RegistrationController($scope,User,$location,localStorageService) {
    $scope.users = User.users;
    $scope.user = {
        firstname:"",
        lastname:"",
        ctID: "",
        phoneNumber: "",
        extensionNumber: "",
        emailId:"",
        password: "",
        contacts:[]
    };

    $scope.registerUser =function(users) {
        console.log($scope.user);
        User.users.push($scope.user);
        $location.path("/home");
        }
    });