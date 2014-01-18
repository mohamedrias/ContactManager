/**
 * User: Rias
 * Date: 9/14/13
 * Time: 10:20 PM
 * Description : Description will be here
 * File name : ProfileController
 */
contactManager.controller("ProfileController",
    function ProfileController($scope, $routeParams, User) {
        /* (function() {
            console.log("UserId :"+User.user.getUserId());
            if(User.user.getUserId()==undefined|| User.user.getUserId()=="") {
                $location.path("/");
            }
        })();*/
        $scope.user = User.users[User.user.getUserId()];
        $scope.editProfile = function(user) {
            User.users[User.user.getUserId()] = user;
        }
    });