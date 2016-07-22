'use strict';

angular.module('app.services', [])

  .service('androidService', ['$http', function ($http) {

    /*================================================================================
    Author      : Bert O'Neill
    Method      : getAllAndroidData
    Parameters  : N\A
    Date        : 30-Aug-2015
    History     : Initial Draft (30-Aug-2015)
    Description : Public API method with user group restrictions.
                  Call Web API Rest method to pull back all android related data from database.                   
    Test Prj.   : N\A
    ================================================================================*/
      this.getAllAndroidData = function () {
        return $http({
            method: 'GET',
            withCredentials: true,
            data: 'json',
            url: 'http://win-08q9h34t5kn.pxd.lab:57158/api/AandroidConversions'
        });
      };     
  }])

.service('customerService', ['$http', function ($http) {
    /*================================================================================
    Author      : Bert O'Neill
    Method      : getAllACustomerValues
    Parameters  : N\A
    Date        : 30-Aug-2015
    History     : Initial Draft (30-Aug-2015)
    Description : Public API method with no user group restrictions (though must be in network AD).
                  Call Web API Rest method to pull back all customer related data from database.                   
    Test Prj.   : N\A
    ================================================================================*/
    this.getAllACustomerValues = function () {
        return $http({
            method: 'GET',
            withCredentials: true,
            data: 'json',
            url: 'http://win-08q9h34t5kn.pxd.lab:57158/api/People'
        });
    };   
}]);
