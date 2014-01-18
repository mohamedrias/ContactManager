/**
 * User: Rias
 * Date: 9/15/13
 * Time: 9:17 AM
 * Description : Description will be here
 * File name : AuthenticationService
 */

contactManager.factory("AuthenticationService",function($rootScope) {
    var sharingSession = {};
    sharingSession.logged = false;
    sharingSession.loggingUser = function(status) {
      this.logged = status;
        console.log("session logging user : "+this.logged);
        this.broadcastStatus();
        return this.logged;
    };

    sharingSession.broadcastStatus = function() {
        $rootScope.$broadcast('handleBroadcast');
    };

    return sharingSession;
});