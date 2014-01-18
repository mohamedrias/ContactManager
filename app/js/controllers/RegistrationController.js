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
    $scope.user = [];

    $scope.registerUser =function(user,users) {
        console.log(user);
        User.users.push(user);
        $location.path("/home");
        }
    });