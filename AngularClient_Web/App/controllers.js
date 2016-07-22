'use strict';

angular.module('app.controllers', [])

    .controller('androidController', function ($scope, $http, $log, blockUI, androidService) {
                
        $log.debug('Enter androidController');

        /*================================================================================
        Author      : Bert O'Neill
        Method      : getAllAndroidValues
        Parameters  : N\A
        Date        : 30-Aug-2015
        History     : Initial Draft (30-Aug-2015)
        Description : To use this Web API the caller must be part of a Windows group (WebSiteUser).
                      Call service to pull back all android related data from database. 
                      Bind results to parent scope, which in turn is bound to UI control
        Test Prj.   : N\A
        ================================================================================*/
        $scope.getAllAndroidValues = function () {
            $log.debug('Enter getAllAndroidValues');
            blockUI.start(); // block UI

            androidService.getAllAndroidData() // pass back the promise and handle in controller (service is only a pass through\shared logic between ctrls)
                .then(function (results) {                    
                    $scope.$parent.sunbursts = results.data // update the parent scope as you have nested controllers in view                    
                },
                function (results) {
                    alert("Failed to make android data request."); // log error
                });

            blockUI.stop(); // unblock UI
            $log.debug('Exit getAllAndroidValues');
        }

        $log.debug('Exit androidController');
    })
   
    .controller('customerController', function ($scope, $http, $log, blockUI, customerService) {
        
        $log.debug('Enter customerController!');
                
       /*================================================================================
       Author      : Bert O'Neill
       Method      : getAllACustomerValues
       Parameters  : N\A
       Date        : 30-Aug-2015
       History     : Initial Draft (30-Aug-2015)
       Description : Public method with no user group restrictions.
                     Call service to pull back all customer related data from database. 
                     Bind results to parent scope, which in turn is bound to UI control
       Test Prj.   : N\A
       ================================================================================*/
        $scope.getAllACustomerValues = function () {
            $log.debug('Enter getAllACustomerValues');
            blockUI.start(); // block UI

            customerService.getAllACustomerValues() // pass back the promise and handle in controller (service is only a pass through\shared logic between ctrls)
                .then(function (results) {
                    $scope.$parent.people = results.data // update the parent scope as you have nested controllers in view
                },
                function (results) {
                    alert("Failed customer data request"); // log error
                });

            blockUI.stop(); // unblock UI
            $log.debug('Exit getAllACustomerValues');
        }

        $log.debug('Exit customerController');

})