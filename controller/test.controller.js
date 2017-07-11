define(['angular','controller/common.controller'],function (angular,controllerModule) {
    "use strict";
    controllerModule.controller('test',['$scope','$routeParams',function ($scope,$routeParams) {

            $scope.name="这是test控制器"+$routeParams.id;
    }]);
    return controllerModule;
});
