/**
 * User: Rias
 * Date: 9/14/13
 * Time: 6:57 PM
 * Description : Description will be here
 * File name : users
 */

contactManager.factory('User',function() {
     return {
         user : {
             userId : '',
             setUserId : function(id) {
                 this.userId = id;
             },
             getUserId : function() {
                 return this.userId
             }
         },
         users : [{
            firstname:'Rias',
            lastname: 'Mohamed',
            ctID : '1177648',
            phoneNumber: '8870431316',
            extensionNumber : '23948',
            emailId:'mohamedrias@gmail.com',
            password : 'rias',
            contacts: [{firstname:'Sindhuja',
                lastname: 'Praveen',
                ctID : '1177652',
                phoneNumber: '9962430944',
                extensionNumber : '23363',
                emailId:'sindhuja@gmail.com'
                },
                {firstname:'Shankar',
                lastname: 'Shankar',
                ctID : '1157743',
                phoneNumber: '9042777360',
                extensionNumber : '23648',
                emailId:'shankar@gmail.com'}
                ]
        }]
    }
});