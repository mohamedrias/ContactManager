/**
 * User: Rias
 * Date: 9/15/13
 * Time: 7:13 AM
 * Description : Description will be here
 * File name : AddContactsController
 */
contactManager.controller("AddContactsController",
    function RegistrationController($scope,User,$location) {
        /*(function() {
            console.log("UserId :"+User.user.getUserId());
            if(User.user.getUserId()==undefined || User.user.getUserId()=="") {
                $location.path("/");
            }
        })();*/
        $scope.myUser = User.users[User.user.getUserId()];
        $scope.user = [];
        $scope.addUser =function(user) {
            User.users[User.user.getUserId()].contacts.push(user);
            $location.path("/home/");
        }
    });