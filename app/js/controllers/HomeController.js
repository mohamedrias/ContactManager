//noinspection JSDuplicatedDeclaration
/**
 * User: Rias
 * Date: 9/14/13
 * Time: 9:10 PM
 * Description : Description will be here
 * File name : HomeController
 */

contactManager.controller("HomeController",
    function HomeController($scope,User,$routeParams,User,$location) {
        if(User.user.getUserId()==undefined || User.user.getUserId()=="") {
                $location.path("/");
        }

        $scope.myUser = User.users[User.user.getUserId()];
        $scope.allUsers = $scope.myUser.contacts;
    }


);