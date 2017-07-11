define(['angular','controller/common.controller'],function (angular,controllerModule) {
    "use strict";
    controllerModule.controller('base',['$scope','$service1','$service2',function ($scope,$service1,$service2) {
        $scope.users=[
            {'id':1,'name':'user01'},
            {'id':2,'name':'user02'},
            {'id':3,'name':'user03'},
            {'id':4,'name':'user04'},
        ];
        $scope.color='#f60';
    }]);
    return controllerModule;
});
