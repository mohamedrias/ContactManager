/**
 * User: Rias
 * Date: 9/14/13
 * Time: 6:47 PM
 * Description : Contact Manager app
 * File name : app.js
 */

var contactManager = angular.module("contactManager",['LocalStorage']);

contactManager.config(
    ['$routeProvider',function($routeProvider)
        {
        $routeProvider.when('/home',{
            controller:"HomeController",
            templateUrl:"app/content/home.html"
        }).when('/home',{
                controller:"HomeController",
                templateUrl:"app/content/home.html"
            }).when("/",{
                controller:"LoginController",
                templateUrl:"app/content/login.html"
        }).when("/register",{
                controller:"RegistrationController",
                templateUrl:"app/content/register.html"
        }).when("/profile",{
                controller:"ProfileController",
                templateUrl:"app/content/profile.html"
            }).when("/add",{
                controller:"AddContactsController",
                templateUrl:"app/content/add.html"
            }).otherwise({redirectTo : "/"});
        }
    ]
);
