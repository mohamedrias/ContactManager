/**
 * User: Rias
 * Date: 9/14/13
 * Time: 6:51 PM
 * Description : Description will be here
 * File name : LoginController
 */

contactManager.controller("LoginController",
    function LoginController($scope,User,$location) {
    $scope.users = User.users;
    $scope.title= "Login";
    $scope.invalidUser = false;
    $scope.loginUser = {};
    $scope.validateUser = function(loginUser,users) {
        console.log(loginUser.ctID);
        console.log(loginUser.password);
        angular.forEach(users,function(user,index) {
            if(loginUser.ctID==user.ctID && loginUser.password==user.password) {
                console.log("inside true "+user.ctID + " "+user.password);
                User.user.setUserId(index);
                console.log("user Id : "+User.user.getUserId());
                $location.path("/home");
            }
            else {
                console.log("inside false "+user.ctID + " "+user.password);
                $scope.invalidUser = true;
                $location.path("/");
            }
        })
    }
    }
);
